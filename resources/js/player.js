let quality = [
    {
        default: true,
        html: 'SD 720P',
        url: 'https://localhost:8000/mbc/pinia_720.flv',
        // url: 'https://localhost:8000/mbc/pinia_720/index.mpd',
        // url: 'https://localhost:8000/mbc/pinia_720/index.m3u8',
    },
    {
        html: 'SD 480P',
        url: 'https://localhost:8000/mbc/pinia_480.flv',
        // url: 'https://localhost:8000/mbc/pinia_480/index.mpd',
        // url: 'https://localhost:8000/mbc/pinia_480/index.m3u8',
    },
    {
        html: 'HD 360P',
        url: 'https://localhost:8000/mbc/pinia_360.flv',
        // url: 'https://localhost:8000/mbc/pinia_360/index.mpd',
        // url: 'https://localhost:8000/mbc/pinia_360/index.m3u8',
    },
]

var art = new Artplayer({
    container: '.artplayer-app',
    autoplay: true,
    // url: 'http://localhost:8000/local_push_app/local.flv', // static pull from local folder
    url: 'http://localhost:8000/local_push_app/local.mpd', // static pull from local folder
    url: 'http://localhost:8000/sd/demo/index.m3u8', // static pull from local folder
    // url: 'https://localhost:8000/mbc/pinia.flv',
    // url: 'https://localhost:8000/mbc/pinia.m3u8',
    // url: 'https://localhost:8000/mbc/pinia/index.mpd',
    // url: 'http://localhost:3000/tmp/output/pinia.m3u8',
    // url: 'https://localhost:8000/mbc/pinia/index.m3u8',
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
