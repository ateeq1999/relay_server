// import Application from '@ioc:Adonis/Core/Application'
// import MinioUploader from 'App/Services/MinioUploader';
// import {Worker} from 'worker_threads'
// import ffmpeg from 'js-ffmpeg'

// let path = Application.tmpPath()

// let rtmpOut = 'rtmp://localhost:1935/mbc'

// async function getVideoMeta() {
//     ffmpeg.ffprobe(`${path}/pinia.mp4`).success(function (json) {
//         console.log("success : ", json);
//     }).error(function (error) {
//         console.log("error : ", error);
//     });
// }

// let streamOptsWithWaterMark = [ 
//     '-re',
//     '-i',
//     'watermark.png', // channel logo
//     '-filter_complex',
//     '"overlay=50:50"',
//     '-c:v',
//     'libx264',
//     '-preset', 
//     'ultrafast',
//     '-r',
//     '30',
//     '-vf',
//     "scale=1920:-1",
//     '-c:a',
//     'copy',
//     '-b:a',
//     '160k' 
// ]

// let streamOpts = [ 
//     '-re',
//     '-c:v',
//     'libx264',
//     '-preset', 
//     'ultrafast',
//     '-r',
//     '30',
//     '-vf',
//     "scale=1920:-1",
//     '-c:a',
//     'copy',
//     '-b:a',
//     '160k' 
// ]

// let opts = [ 
//     '-vf',
//     'scale=640x360',
//     '-c:v',
//     'libx264',
//     '-vstats_file',
//     './tmp/vstats_file.txt',
//     '-crf',
//     '18',
//     '-preset',
//     'veryslow',
//     '-c:a',
//     'copy',
// ]


// async function localTrans() {
//     ffmpeg
//     .ffmpeg(`${path}/pinia.mp4`, opts, `${path}/pinia_js_ffmpeg.mp4`, function (progress) {
//         console.log("progress : ", progress);
//     })
//     .success(function (json) {
//         console.log("success : ", json);
//     }).error(function (error) {
//         console.log("error : ", error);
//     });
// }

// async function transFromUrl() {
//     const url = await MinioUploader.getObjectUrl('demo', 'demo.mp4')

//     ffmpeg
//     .ffmpeg(`${url}`, opts, `${path}/demo_js_ffmpeg.mp4`, function (progress) {
//         console.log("progress : ", progress);
//     })
//     .success(function (json) {
//         console.log("success : ", json);
//     }).error(function (error) {
//         console.log("error : ", error);
//     });
// }

// async function streamFromUrl() {
//     const url = await MinioUploader.getObjectUrl('demo', 'demo.mp4')

//     const playListName = 'demo'
    
//     const worker = new Worker('./worker/playlist.js', {
//         workerData: {
//             streamOpts,
//             url,
//             path,
//             playListName,
//             workerName: './playlist.ts'
//         }
//     })

//     worker.on('message', (data) => {
//         console.log(data)
//     })
// }


// // getVideoMeta()
// // .then(res => {
// //     console.log('transFromUrl is done', res)
// // })
// // .catch(err => console.log(err))

// // localTrans()
// // .then(res => {
// //     console.log('transFromUrl is done', res)
// // })
// // .catch(err => console.log(err))

// // transFromUrl()
// // .then(res => {
// //     console.log('transFromUrl is done', res)
// // })
// // .catch(err => console.log(err))

// streamFromUrl()
// .then(res => {
//     console.log('transFromUrl is done', res)
// })
// .catch(err => console.log(err))