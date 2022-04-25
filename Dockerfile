ARG NODE_IMAGE=node:18-alpine3.14

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /usr/src/app && chown node:node /usr/src/app
WORKDIR /usr/src/app
RUN apt update && apt install ffmpeg -y
RUN apt-get install -y ffmpeg
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
COPY --chown=node:node --from=build /usr/src/app/build .
EXPOSE $PORT
CMD [ "dumb-init", "node", "server.js" ]
