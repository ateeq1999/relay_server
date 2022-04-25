ARG NODE_IMAGE=node:18-alpine3.14

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /app && chown node:node /app
WORKDIR /app
RUN apk update && \
    apk upgrade && \
    apk add 'ffmpeg>4.0.0'

ENV NMS_HTTP_MEDIA_ROOT='./tmp/media' FFMPEG_BIN_PATH='/usr/bin/ffmpeg'
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0
COPY --chown=node:node ./package*.json ./
RUN npm ci --production
COPY --chown=node:node --from=build /app/build .
EXPOSE $PORT
CMD [ "dumb-init", "node", "server.js" ]
