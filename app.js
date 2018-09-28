console.log('>>> Starting Application <<<');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

console.log(`>>> Hello, ${user.username} Welcome Start Building A Cool App <<<`);

fs.appendFile('my_file.txt', `Hello, ${user.username} Welcome\n`, (err) => {
    if (err) console.log('Unable To Write File');
});

