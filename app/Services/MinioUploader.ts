import minioConfig from 'Config/minio';
import * as Minio from 'minio'

class MinioUploader {
    public minioClient = new Minio.Client(minioConfig);
    public bucketsData = Array()
    
    public async buckets(): Promise<Array<any>> {
        return new Promise((resolve, _reject) => {
            return this.minioClient.listBuckets(function (err: any, buckets: Array<any>) {
                if (err) {
                    console.error("Unable to remove object: ", err);
                    return resolve(err);
                }
                return resolve(buckets);
            });
        });
    }

    public async createBucket(objectName): Promise<boolean> {
        return new Promise((resolve, _reject) => {
            return this.minioClient.makeBucket(`${objectName}`, 'us-east-1',function (err: any) {
                if (err) return resolve(false)
                return resolve(true)
            });
        });
    }

    public async presignedGetObject(bucket, objectName): Promise<any> {
        return new Promise((resolve, _reject) => {
            return this.minioClient.presignedGetObject(bucket, `${objectName}`, function (err, result){
                if (err) return resolve(err)
                return resolve(result)
            });
        });
    }

    public async filePutObject(bucket, objectName, filePath): Promise<boolean> {
        var metaData = {
            'Content-Type': 'application/octet-stream',
            'X-Amz-Meta-Testing': 1234,
            'example': 5678
        }

        return new Promise((resolve, _reject) => {
            return this.minioClient.fPutObject(`${bucket}`, `${objectName}`, filePath, metaData, async function (err: any, etag: any) {
                if (err) return resolve(err)
                console.log(etag.etag)
                return resolve(true)
                // return resolve(etag.etag)
            });
        });
    }

    public async fileGetObject(bucket, objectName): Promise<boolean> {
        let path = `./tmp/objects/${objectName}.mp4`

        return new Promise((resolve, _reject) => {
            return this.minioClient.fGetObject(`${bucket}`, `${objectName}.mp4`, path, function (err: any) {
                if (err) return resolve(err)
                return resolve(true)
            });
        });
    }

    public async directUploadUrl(bucket, objectName): Promise<any> {
        return new Promise((resolve, _reject) => {
            return this.minioClient.presignedPutObject(bucket, objectName, (err, url) => {
                if (err) return resolve(err)
                return resolve(url)
            });
        });
    }

    public async getObjectUrl(bucket, objectName): Promise<any> {
        return new Promise((resolve, _reject) => {
            return this.minioClient.presignedGetObject(bucket, objectName, (err, url) => {
                if (err) return resolve(err)
                return resolve(url)
            });
        });
    }
}

export default new MinioUploader()
