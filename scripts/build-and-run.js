const childProcess = require('child_process');

const buildOptions = {
    stdio: 'inherit',
    cwd: 'client',
    shell: true
};

const runOptions = {
    stdio: 'inherit',
    cwd: '',
    shell: true
};

childProcess.execSync('npm run build', buildOptions);
childProcess.spawn('npm run server', runOptions);
