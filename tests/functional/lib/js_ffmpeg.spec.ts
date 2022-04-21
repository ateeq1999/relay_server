import { test } from '@japa/runner'
import Application from '@ioc:Adonis/Core/Application'
import MinioUploader from 'App/Services/MinioUploader'
import FFmpegClient from 'App/Services/FFmpegClient'
let inputFile = Application.makePath('./tmp/demo.mp4')

test.group('Lib js ffmpeg', (group) => {

    group.tap((test) => test.tags(['@ffmpeg']))

    test('compare local meta with storage meta ffprobe', async ({ assert }) => {
        const url = await MinioUploader.getObjectUrl('test-bucket', 'fromTest.mp4')

        let localMeta = await FFmpegClient.getMeata(inputFile)

        let remoteMeta = await FFmpegClient.getMeata(url)

        assert.deepEqual(localMeta.streams, remoteMeta.streams)
        assert.includeDeepMembers(localMeta.streams, remoteMeta.streams)
        assert.notPropertyVal(localMeta.format, 'filename', remoteMeta.format.filename)
    })
})
