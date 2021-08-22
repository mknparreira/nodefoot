const Array = require('../src/packages/match-system/src/utils/array.util');

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

  getEvent() {
    const eventA = this.calcuateLesion();
    const eventB = this.calculateGoal();
    const eventC = this.calcuateSwap();
    const eventD = this.calcuateCard();
    const total = eventA.probability + eventB.probability + eventC.probability + eventD.probability;
    const probA = parseInt(((eventA.probability / total) * 100), 10);
    const probB = parseInt(((eventB.probability / total) * 100), 10);
    const probC = parseInt(((eventC.probability / total) * 100), 10);
    const probD = parseInt(((eventD.probability / total) * 100), 10);

    const finalArray = [];
    for (let i = 0; i < probA; i += 1) {
      finalArray.push(eventA);
    }

    for (let i = 0; i < probB; i += 1) {
      finalArray.push(eventB);
    }

    for (let i = 0; i < probC; i += 1) {
      finalArray.push(eventC);
    }

    for (let i = 0; i < probD; i += 1) {
      finalArray.push(eventD);
    }

    const allProbabilities = Array.shuffle(finalArray);
    return Array.pickOneValueRandomly(allProbabilities);
    // const randomEvent = Array.pickOneValueRandomly(allProbabilities);
    // console.log(`MINUTE: ${this.minute}`);
    // console.log('=============================');
    // console.log(`${eventA.name} ${probA}`);
    // console.log('=============================');
    // console.log(`${eventB.name} ${probB}`);
    // console.log('=============================');
    // console.log(`${eventC.name} ${probC}`);
    // console.log('=============================');
    // console.log(randomEvent);
    // return '';
  }

  calcuateLesion() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'LESION';
    eventType.time = minute;

    if (minute <= 15) {
      eventType.probability = (VERY_LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 45) {
      eventType.probability = (VERY_LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (HIGH / 100) * 100;
      return eventType;
    }

    eventType.probability = (VERY_LOW / 100) * 100;

    return eventType;
  }

  calculateGoal() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'GOAL';
    eventType.time = minute;

    if (minute <= 15) {
      eventType.probability = (VERY_LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 30) {
      eventType.probability = (NORMAL / 100) * 100;
      return eventType;
    }

    if (minute >= 31 && minute <= 45) {
      eventType.probability = (VERY_HIGH / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (HIGH / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (VERY_HIGH / 100) * 100;
      return eventType;
    }

    eventType.probability = (VERY_LOW / 100) * 100;

    return eventType;
  }

  calcuateSwap() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'SWAP';
    eventType.time = minute;

    if (minute <= 15) {
      eventType.probability = (VERY_LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 30) {
      eventType.probability = (VERY_LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 31 && minute <= 45) {
      eventType.probability = (VERY_LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (HIGH / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (VERY_HIGH / 100) * 100;
      return eventType;
    }

    eventType.probability = (VERY_LOW / 100) * 100;
    return eventType;
  }

  calcuateCard() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'CARD';
    eventType.time = minute;

    if (minute <= 10) {
      eventType.probability = (VERY_LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 11 && minute <= 15) {
      eventType.probability = (LOW / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 30) {
      eventType.probability = (NORMAL / 100) * 100;
      return eventType;
    }

    if (minute >= 31 && minute <= 45) {
      eventType.probability = (NORMAL / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (NORMAL / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (NORMAL / 100) * 100;
      return eventType;
    }

    eventType.probability = (VERY_LOW / 100) * 100;
    return eventType;
  }
}

module.exports = EventController;
