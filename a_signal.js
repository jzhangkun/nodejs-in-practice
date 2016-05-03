
process.on('SIGTERM', function(){
    console.log('got TERM singal');
    process.exit(1);
});

setTimeout(function(){
    console.log('sending TERM to process %d', process.pid);
    process.kill(process.pid, 'SIGTERM');
}, 2000);
