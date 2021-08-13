const Array = require('../utils/array.util');

class GenerateEvent {
  constructor(minute) {
    this.minute = minute;
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
  }

  calcuateLesion() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'LESION';
    eventType.time = minute;

    if (minute <= 15) {
      eventType.probability = (5 / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 45) {
      eventType.probability = (5 / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (25 / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (75 / 100) * 100;
      return eventType;
    }

    eventType.probability = (5 / 100) * 100;

    return eventType;
  }

  calculateGoal() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'GOAL';
    eventType.time = minute;

    if (minute <= 15) {
      eventType.probability = (5 / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 30) {
      eventType.probability = (50 / 100) * 100;
      return eventType;
    }

    if (minute >= 31 && minute <= 45) {
      eventType.probability = (75 / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (75 / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (75 / 100) * 100;
      return eventType;
    }

    eventType.probability = (5 / 100) * 100;

    return eventType;
  }

  calcuateSwap() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'SWAP';
    eventType.time = minute;

    if (minute <= 15) {
      eventType.probability = (5 / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 30) {
      eventType.probability = (5 / 100) * 100;
      return eventType;
    }

    if (minute >= 31 && minute <= 45) {
      eventType.probability = (5 / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (75 / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (75 / 100) * 100;
      return eventType;
    }

    eventType.probability = (5 / 100) * 100;
    return eventType;
  }

  calcuateCard() {
    const { minute } = this;
    const eventType = {};
    eventType.name = 'CARD';
    eventType.time = minute;

    if (minute <= 10) {
      eventType.probability = (5 / 100) * 100;
      return eventType;
    }

    if (minute >= 11 && minute <= 15) {
      eventType.probability = (25 / 100) * 100;
      return eventType;
    }

    if (minute >= 16 && minute <= 30) {
      eventType.probability = (50 / 100) * 100;
      return eventType;
    }

    if (minute >= 31 && minute <= 45) {
      eventType.probability = (50 / 100) * 100;
      return eventType;
    }

    if (minute >= 46 && minute <= 70) {
      eventType.probability = (50 / 100) * 100;
      return eventType;
    }

    if (minute >= 71 && minute <= 90) {
      eventType.probability = (50 / 100) * 100;
      return eventType;
    }

    eventType.probability = (5 / 100) * 100;
    return eventType;
  }
}

module.exports = GenerateEvent;
