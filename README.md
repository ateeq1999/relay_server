💻 Commands:
► Convert container formats:
ffmpeg -i input.mkv output.mp4

► Convert video and audio codec:
ffmpeg -i input.mkv -c:v vp9 -c:a libvorbis output.mp4

► Convert only the video codec:
ffmpeg -i input.mkv -c:v vp9 -c:a copy output.mp4

► Convert only the audio codec:
ffmpeg -i input.mkv -c:v copy -c:a libvorbis output.mp4

► Reduce Bitrate:
ffmpeg -i input.mkv -c:a copy -c:v libx264 -b:v 1M output.mp4

► Reduce Framerate:
ffmpeg -i input.mkv -c:a copy -c:v libx264 -r 24 output.mp4

► Reduce Resolution:
ffmpeg -i input.mkv -c:a copy -c:v libx264 -s 848x480 output.mp4

► Reduce Bitrate, Framerate, and Resolution:
ffmpeg -i input.mkv -c:a copy -c:v libx264 -s 848x480 output.mp4

► Trim:
ffmpeg -i input.mkv -ss 00:00:10 -t 10 output.mkv

► Extract Audio:
ffmpeg -i input.mkv -vn output.mp3

► Add Audio:
ffmpeg -i input.mkv -i audio.m4a -map 0:v:0 -map 1:a:0 -c:v copy output.mp4

► Add Audio with Volume Filter:
ffmpeg -i input.mkv -i audio.m4a -map 0:v:0 -map 1:a:0 -filter:a "volume=0.5" -c:v copy output.mp4

► Reduce Audio Volume:
ffmpeg -i input.mkv -filter:a "volume=2.0" output.mkv

► Crop:
ffmpeg -i input.mkv -filter:v "crop=1280:720:0:0" output.mkv

► Watermark:
ffmpeg -i input.mkv -i watermark.png -filter_complex "overlay=50:50" output.mkv

► Chroma Key:
ffmpeg -i input.mkv -c:v vp9 -filter:v "chromakey=0x00ff00:0.1:0.2" output.webm

► Overlay Videos:
ffmpeg -i input.mkv -i input2.mkv -filter_complex "[0:v][1:v] overlay=25:25" output.webm

► Publishing Live Streams:
ffmpeg -re -i ./tmp/pinia.mp4 -c copy -f flv rtmp://localhost/live/pinia

► Publishing Live Streams From Video File:
ffmpeg -re -i ./tmp/pinia.mp4 -c copy -f flv rtmp://localhost/live/pinia
ffmpeg -re -i ./tmp/pinia.mp4 -i ./tmp/logo.png -filter_complex "overlay=50:50" -c copy -f flv rtmp://localhost/live/pinia

► Record RTMP Live Stream:
ffmpeg -i rtsp://localhost:1935/Live/pinia.stream  -vcodec copy -acodec copy ./output/piniaFromLive.mp4
ffmpeg -i rtmp://localhost:1935/Live/pinia.stream  -vcodec copy -acodec copy ./output/piniaFromLive.mp4

► Transcod:
ffmpeg -i ./tmp/pinia.mp4 -vf scale=640x360 -c:v libx264 -crf 18 -preset veryslow -c:a copy output_360.mp4
ffmpeg -i ./tmp/pinia.mp4 -vf scale=854x480 -c:v libx264 -crf 18 -preset veryslow -c:a copy output_480.mp4
ffmpeg -i ./tmp/pinia.mp4 -vf scale=1280x720 -c:v libx264 -crf 18 -preset veryslow -c:a copy output_720.mp4
ffmpeg -i ./tmp/pinia.mp4 -vf scale=1920x1080 -c:v libx264 -crf 18 -preset veryslow -c:a copy output_1080.mp4

ffmpeg -i ./tmp/pinia.mp4 -vf scale='hd720' -c:v vp9 -c:a libvorbis ./tmp/mpd/pinia.mpd
ffmpeg -i ./tmp/pinia.mp4 -vf scale='hd720' -c:v vp9 -c:a libvorbis ./tmp/mpd/pinia.mpd
const  videoSizes  = ["1920x1080", "1280x720",   "854x480", "640x360"];

MINIO RUN
"D:\Programs\Developments\minio.exe" server D:\minio --console-address ":9900"