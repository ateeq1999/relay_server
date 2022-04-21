const TransServer = {
    tasks: [
        {
            app: 'S24',
            mp4: true,
            mp4Flags: '[movflags=frag_keyframe+empty_moov]',
            hls: true,
            hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
            dash: true,
            dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
        }
    ]
}

export default TransServer
  