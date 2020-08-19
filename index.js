const CronJob = require('cron').CronJob;
const fs = require('fs');
const path = require('path');

console.log('this project read package.json file name every 1 second');
console.log('=======================================================');

let counter = 1;

const job = new CronJob('* * * * * *', async () => {
  const fileData = fs.readFileSync(path.join(__dirname, 'package.json'));
  const data = JSON.parse(fileData.toString());

  console.log(counter++, ': the package.json name is: ', data.name);
});

job.start();
