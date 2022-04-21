import Application from '@ioc:Adonis/Core/Application'

let path = Application.tmpPath('/demo.mp4')

const FissionServer = {
    tasks: [
        {
            rule: "systech/*",
            mode: 'static',
            edge: path,
            model: [
                {
                    ab: "128k",
                    vb: "1500k",
                    vs: "1280x720",
                    vf: "30",
                },
                {
                    ab: "96k",
                    vb: "1000k",
                    vs: "854x480",
                    vf: "24",
                },
                {
                    ab: "96k",
                    vb: "600k",
                    vs: "640x360",
                    vf: "20",
                },
            ]
        },
        {
            rule: "S24/*",
            model: [
                {
                    ab: "128k",
                    vb: "1500k",
                    vs: "1280x720",
                    vf: "30",
                },
                {
                    ab: "96k",
                    vb: "1000k",
                    vs: "854x480",
                    vf: "24",
                },
                {
                    ab: "96k",
                    vb: "600k",
                    vs: "640x360",
                    vf: "20",
                },
            ]
        },
    ]
}

export default FissionServer