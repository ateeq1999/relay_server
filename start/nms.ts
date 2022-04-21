import nmsConfig from 'Config/nms';
import NodeMediaServer from 'node-media-server'
// import nmsHooks from './nmsHooks'
  
var nms = new NodeMediaServer(nmsConfig)

nms.run();

// nmsHooks(nms)