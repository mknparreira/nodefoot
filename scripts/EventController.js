const VERY_LOW = 5;
const LOW = 25;
const NORMAL = 50;
const HIGH = 75;
const VERY_HIGH = 90;

class EventController {
  constructor(minute) {
    this.minute = minute;
    // return this.suffleEvent();
  }

  shuffle(array) {
    let i = array.length;
    let j = 0;
    let temp;

    while (i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  getEvent() {
    const eventA = this.calcuateLesion();
    const eventB = this.calculateGoal();
    const eventC = this.calcuateSwap();
    const total = eventA.probability + eventB.probability + eventC.probability;
    const probA = parseInt(((eventA.probability / total) * 100), 10);
    const probB = parseInt(((eventB.probability / total) * 100), 10);
    const probC = parseInt(((eventC.probability / total) * 100), 10);

    const arrA = [];
    for (let i = 0; i < probA; i += 1) {
      arrA.push('calcuateLesion');
    }

    for (let i = 0; i < probB; i += 1) {
      arrA.push('calculateGoal');
    }

    for (let i = 0; i < probC; i += 1) {
      arrA.push('calcuateSwap');
    }

    const allProbabilities = this.shuffle(arrA);
    const randomEvent = allProbabilities[Math.floor(Math.random() * allProbabilities.length)];

    console.log(`MINUTE: ${this.minute}`);
    console.log('=============================');
    console.log(probA);
    console.log('=============================');
    console.log(probB);
    console.log('=============================');
    console.log(probC);
    console.log('=============================');
    console.log(randomEvent);

    return '';
  }

  calcuateLesion() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'LESION';
    eventType.time = minute;
    const prob = 2;
    if (minute <= 15) {
      const probability = ((prob + VERY_LOW) / 100) * 100;
      eventType.probability = parseInt(probability, 10);
      return eventType;
    }

    if (minute >= 70) {
      eventType.probability = ((prob + VERY_HIGH) / 100) * 100;
      return eventType;
    }

    eventType.probability = ((prob + LOW) / 100) * 100;

    return eventType;
  }

  calculateGoal() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'GOAL';
    eventType.time = minute;
    const prob = 4.0;

    if (minute <= 15) {
      eventType.probability = ((prob + VERY_LOW) / 100) * 100;
      return eventType;
    }

    if (minute >= 30 && minute < 70) {
      eventType.probability = ((prob + NORMAL) / 100) * 100;
      return eventType;
    }

    eventType.probability = ((prob + VERY_HIGH) / 100) * 100;

    return eventType;
  }

  calcuateSwap() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'SWAP';
    eventType.time = minute;
    const prob = VERY_HIGH;

    if (minute >= 70) {
      eventType.probability = (prob / 100) * 100;
      return eventType;
    }

    eventType.probability = (VERY_LOW / 100) * 100;
    return eventType;
  }
}

module.exports = EventController;
