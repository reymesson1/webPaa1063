var CronJob = require('cron').CronJob;
new CronJob('0 20 * * * *', function() {
    console.log('You will see this message every second');
    let spawn = require('child_process').spawn,
    ls = spawn('cmd.exe', ['/c', 'batchfile.bat']);

    ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
    });

    ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
    });

}, null, true, 'America/Los_Angeles');
