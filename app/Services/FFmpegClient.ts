import ffmpeg from 'js-ffmpeg'

class FFmpegClient {
    public async getMeata(inputFile): Promise<any> {
    return new Promise((resolve, _reject) => {
        return ffmpeg
        .ffprobe(`${inputFile}`)
        .success(function (json) {
            return resolve(json)
        }).error(function (error) {
            return resolve(error)
        });
    });
   }
}

export default new FFmpegClient()