const EventController = require('./EventController');
const Probability = require('../src/utils/Probability.util');

(() => {
  console.log('this is an type of auto funciton');
})();

// for (let i = 0; i < events.length; i++) {
//   setTimeout(() => {
//     console.log(`Maikon => ${i}`);
//   }, `${i}000`);
// }

const minutesOfAnEventMightHappen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const arr = [];
const totalOfEventsPerMatch = Probability.getTotalEventsPerMatch(2, 15);

while (arr.length < totalOfEventsPerMatch) {
  const r = Math.floor(Math.random() * minutesOfAnEventMightHappen.length) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}

const eventsTime = arr.sort((a, b) => a - b);

for (const minute of eventsTime) {
  const event = new EventController(minute);
  console.log(event.getEvent());
}

/*
EXTERNAL LINKS

https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
https://stackoverflow.com/questions/23022436/ascending-increasing-random-numbers
https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
https://stackoverflow.com/questions/38499530/how-can-i-generate-a-random-sequence-of-numbers-in-javascript-with-conditions
https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

*/
