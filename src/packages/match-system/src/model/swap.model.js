class Swap {
  constructor(minute) {
    this.minute = minute;
  }

  get calculate() {
    const { minute } = this;
    const event = {};
    event.name = 'SWAP';
    event.time = minute;

    if (minute <= 15) {
      event.probability = (5 / 100) * 100;
      return event;
    }

    if (minute >= 16 && minute <= 30) {
      event.probability = (5 / 100) * 100;
      return event;
    }

    if (minute >= 31 && minute <= 45) {
      event.probability = (5 / 100) * 100;
      return event;
    }

    if (minute >= 46 && minute <= 70) {
      event.probability = (75 / 100) * 100;
      return event;
    }

    if (minute >= 71 && minute <= 90) {
      event.probability = (75 / 100) * 100;
      return event;
    }

    event.probability = (5 / 100) * 100;
    return event;
  }
}

module.exports = Swap;
