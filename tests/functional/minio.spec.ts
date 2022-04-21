import { test } from '@japa/runner'
import Application from '@ioc:Adonis/Core/Application'
import MinioUploader from 'App/Services/MinioUploader'
// import { cuid } from '@ioc:Adonis/Core/Helpers'

test.group('Minio', async () => {
    
    test('put object to minio', async ({ assert }) => {
        let uploadedObject = Application.makePath('./tmp/demo.mp4')

        // let uuid = cuid()
        // const data = await MinioUploader.filePutObject('test-bucket', `${uuid}.mp4`, uploadedObject)
    
        const data = await MinioUploader.filePutObject('test-bucket', `fromTest.mp4`, uploadedObject)

        assert.equal(true, data)
    })

    test('get object url', async ({ assert }) => {
        const data = await MinioUploader.getObjectUrl('test-bucket', 'fromTest.mp4')

        assert.include(data, 'fromTest.mp4')
        // assert.strictEqual(true, data.includes('fromTest.mp4'))
    })
})
