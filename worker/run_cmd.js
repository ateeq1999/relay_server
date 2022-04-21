const { parentPort, workerData } =  require("worker_threads");
const { spawn } =  require("child_process");

const child = spawn('ffmpeg', workerData.opts, {shell: true});

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

child.on('exit', (code, signal) => {
    if (code) {
        console.log(`proccess exit with code ${code}`)
    }
    
    if (signal) {
        console.log(`proccess exit with signal ${signal}`)
    }
    console.log('Audio Extraction Done Fine')
})


// require('ts-node').register();
// require(path.resolve(__dirname, workerData.workerName));

parentPort.postMessage("done")