import Env from '@ioc:Adonis/Core/Env'

const httpConfig = {
    http: {
        port: 8000,
        mediaroot: Env.get('NMS_HTTP_MEDIA_ROOT'),
        allow_origin: '*'
    }
}

export default httpConfig