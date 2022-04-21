import Env from '@ioc:Adonis/Core/Env'

const minioConfig = {
    endPoint: Env.get('MINIO_ENDPOINT'),
    port: Env.get('MINIO_PORT'),
    useSSL: false,
    accessKey: Env.get('MINIO_KEY'),
    secretKey: Env.get('MINIO_SECRET')
}

export default minioConfig
