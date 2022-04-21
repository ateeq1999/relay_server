import Queue from 'bull'
import milliseconds from "milliseconds";
// const { spawn } =  require("child_process");

class JobeScheduler {
    public scheduler = new Queue("schedulerQueue", {
        // defaultJobOptions: { repeat: { every: 120000 } }, // 2 minutes
        defaultJobOptions: { repeat: { every: milliseconds.minutes(2) } },
    });

    public transcodeingQueue = new Queue("transcodeingQueue");

    public async scheduledTransconding () {
        await this.scheduler.process((_, done) => {
            console.log("Scheduled job");
            console.log("data :", _.data);
            console.log("<-------------->");
            done();
        });
    }

    public async ProcessQueueJobes () {
        await this.transcodeingQueue.process((jobe, done) => {
            console.log("transcodeingQueue jobe");
            console.log("transcodeingQueue data :", jobe.data);
            console.log("<-------------->");
            done();
        });
    }

    public async dispatchWithScheduler(data) {
        await this.scheduler.add(data);
    }

    public async dispatch(data) {
        await this.transcodeingQueue.add(data);
    }

    public async dispatchWithDelay(data, delay) {
        await this.transcodeingQueue.add(data, delay);
    }

    public async listen(event) {
        await this.transcodeingQueue.on(event, (jobe, result) => {
            console.log(`Jobe completed with result ${result}`);
            console.log(jobe.data)
        })
    }
}

export default new JobeScheduler()
