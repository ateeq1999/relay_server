/**
 * Node Media Relay Server For Apps
 */
 import Application from '@ioc:Adonis/Core/Application'

 let path = Application.tmpPath('/demo.mp4')

const RelayServer = {
    tasks: [
        {
            app: 'S24',
            hls: true,
            hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
            dash: true,
            dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
            // mp4: true,
            // mp4Flags: '[movflags=frag_keyframe+empty_moov]',
        },
        {
            app: 'systech',
            mode: 'static',
            edge: path,
            name: 'demo',
        }
    ]
}

export default RelayServer