import Env from '@ioc:Adonis/Core/Env'
import AuthConfig from './nms/auth'
import FissionServer from './nms/fissionServer'
import httpConfig from './nms/http'
import RelayServer from './nms/relayServer'
import rtpmConfig from './nms/rtmp'
import TransServer from './nms/transServer'

const nmsConfig = {
    logType: 3,
    rtmp: rtpmConfig.rtmp,
    auth: AuthConfig.auth,
    http: httpConfig.http,
    trans: {
        ffmpeg: Env.get('FFMPEG_BIN_PATH'),
        tasks: TransServer.tasks,
    },
    relay: {
        ffmpeg: Env.get('FFMPEG_BIN_PATH'),
        tasks: RelayServer.tasks
    },
    fission: {
        ffmpeg: Env.get('FFMPEG_BIN_PATH'),
        tasks: FissionServer.tasks
    }
}

export default nmsConfig