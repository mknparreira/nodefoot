class Goal {
  constructor(minute) {
    this.minute = minute;
  }

  get calculate() {
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
}

module.exports = Goal;
