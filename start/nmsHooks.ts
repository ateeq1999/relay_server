export default function nmsHooks (nmsContext) {
    nmsContext.on('preConnect', (id, args) => {
        console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
        // let session = nmsContext.getSession(id);
        // session.reject();
    });
    
    nmsContext.on('postConnect', (id, args) => {
        console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
    });
    
    nmsContext.on('doneConnect', (id, args) => {
        console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
    });
    
    nmsContext.on('prePublish', (id, StreamPath, args) => {
        console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
        // let session = nmsContext.getSession(id);
        // session.reject();
    });
    
    nmsContext.on('postPublish', (id, StreamPath, args) => {
        console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    });
    
    nmsContext.on('donePublish', (id, StreamPath, args) => {
        console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    });
    
    nmsContext.on('prePlay', (id, StreamPath, args) => {
        console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
        // let session = nmsContext.getSession(id);
        // session.reject();
    });
    
    nmsContext.on('postPlay', (id, StreamPath, args) => {
        console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    });
    
    nmsContext.on('donePlay', (id, StreamPath, args) => {
        console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    });
}