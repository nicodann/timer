//ALARM SOUND: process.stdout.write('\x07');

const alarmTimes = process.argv.slice(2);

for (const string of alarmTimes) {
  let time = Number(string);

  if (time >= 0 && typeof time == 'number') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time)
  }
}