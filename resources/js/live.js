const ip = '94.237.94.0'
// const ip = 'localhost'
const server_url = `http://${ip}:5000/S24/live/index.m3u8`
const live_720 = `http://${ip}:5000/S24/live_720/index.m3u8`
const live_480 = `http://${ip}:5000/S24/live_480/index.m3u8`
const live_360 = `http://${ip}:5000/S24/live_360/index.m3u8`

let quality = [
    {
        default: true,
        html: 'SD 720P',
        url: live_720,
    },
    {
        html: 'SD 480P',
        url: live_480,
    },
    {
        html: 'HD 360P',
        url: live_360,
    },
]

var art = new Artplayer({
    container: '.artplayer-app',
    autoplay: true,
    url: server_url + '/S24/live/index.m3u8', // static pull from local folder
    quality,
    customType: {
        flv: function(video, url){
            const flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: url,
            });
            flvPlayer.attachMediaElement(video);
            flvPlayer.load();
        },
        mpd: function (video, url) {
            shaka.polyfill.installAll();
            var player = new shaka.Player(video);
            player.load(url);
        },
        m3u8: function(video, url) {
            var hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
        },
    },
});

function enableFlv(video, url) {
    const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: url,
    });
    flvPlayer.attachMediaElement(video);
    flvPlayer.load();
}

function enableMpd(video, url) {
    shaka.polyfill.installAll();
    var player = new shaka.Player(video);
    player.load(url);
}

function enableM3u8(video, url) {
    var hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
}
