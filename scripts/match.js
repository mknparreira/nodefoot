(() => {
  console.log('this is an type of auto funciton');
})();

// for (let i = 0; i < events.length; i++) {
//   setTimeout(() => {
//     console.log(`Maikon => ${i}`);
//   }, `${i}000`);
// }

const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const arr = [];
const totalOfEventsPerMatch = 8;

while (arr.length < totalOfEventsPerMatch) {
  const r = Math.floor(Math.random() * time.length) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}

const events = arr.sort((a, b) => a - b);

console.log(events);

/*
EXTERNAL LINKS

https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
https://stackoverflow.com/questions/23022436/ascending-increasing-random-numbers
https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
https://stackoverflow.com/questions/38499530/how-can-i-generate-a-random-sequence-of-numbers-in-javascript-with-conditions

*/
