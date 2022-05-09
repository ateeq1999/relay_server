import nmsConfig from 'Config/nms';
import NodeMediaServer from 'node-media-server'
import FFmpegInstaller from '@ffmpeg-installer/ffmpeg';

console.log("ffmpeg path",FFmpegInstaller.path)
// import nmsHooks from './nmsHooks'
  
var nms = new NodeMediaServer(nmsConfig)

nms.run();

// nmsHooks(nms)