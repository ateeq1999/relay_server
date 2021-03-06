import Env from '@ioc:Adonis/Core/Env'

const rtpmConfig = {
    rtmp: {
        port: Env.get('RTMP_PORT'),
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
}

export default rtpmConfig
