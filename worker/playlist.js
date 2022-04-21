const { parentPort, workerData } =  require("worker_threads");
const ffmpeg =  require("js-ffmpeg");

const renditions = [
    {resolution: "640x360", bitrate: 800, audio_rate: 96},
    {resolution: "842x480", bitrate: 1400, audio_rate: 128},
    {resolution: "1280x720", bitrate: 2800, audio_rate: 128}
];

ffmpeg
    .ffmpeg_playlist(`${workerData.url}`, {...workerData.streamOpts, renditions}, `${workerData.path}/${workerData.playListName}`, function (progress) {
    // .ffmpeg_playlist(`${url}`, {...streamOpts, renditions}, `${rtmpOut}/demo`, function (progress) {
        console.log("progress : ", progress);
    })
    .success(function (json) {
        console.log("success : ", json);
    }).error(function (error) {
        console.log("error : ", error);
    });

parentPort.postMessage("playlist worker done")