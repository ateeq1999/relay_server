const server_url = 'https://localhost:8888'

let quality = [
    {
        default: true,
        html: 'SD 720P',
        url: server_url + '/systech/demo.flv',
    },
    {
        html: 'SD 480P',
        url: server_url + '/systech/demo.flv',
    },
    {
        html: 'HD 360P',
        url: server_url + '/systech/demo.flv',
    },
]

var art = new Artplayer({
    container: '.artplayer-app',
    autoplay: true,
    url: server_url + '/systech/demo/index.m3u8', // static pull from local folder
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
