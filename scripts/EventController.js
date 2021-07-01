const VERY_LOW = 0.5;
const LOW = 1.5;
const NORMAL = 5.0;
const HIGH = 7.0;
const VERY_HIGH = 9.0;

class EventController {
  constructor(event) {
    // this.event = event;
    return this.suffleEvent(event);
  }

  suffleEvent(event) {
    const ttt = [this.calcuateLesion(event), this.calcuateSwap(event), this.calculateGoal(event)];
    const randomElement = ttt[Math.floor(Math.random() * ttt.length)];
    console.log(randomElement);
  }

  calcuateLesion(event) {
    const eventType = {};
    eventType.name = 'lesion';
    eventType.time = event;
    const prob = 1.0;
    if (event <= 15) {
      eventType.probability = prob * VERY_LOW;
      return eventType;
    }

    if (event >= 70) {
      eventType.probability = prob * VERY_HIGH;
      return eventType;
    }

    eventType.probability = prob;

    return eventType;
  }

  calculateGoal(event) {
    const eventType = {};
    eventType.name = 'goal';
    eventType.time = event;
    const prob = 2.0;

    if (event <= 15) {
      eventType.probability = prob * VERY_LOW;
      return eventType;
    }

    if (event >= 30 && event < 70) {
      eventType.probability = prob * NORMAL;
      return eventType;
    }

    eventType.probability = prob * VERY_HIGH;

    return eventType;
  }

  calcuateSwap(event) {
    const eventType = {};
    eventType.name = 'swap';
    eventType.time = event;
    const prob = VERY_HIGH;

    if (event >= 70) {
      eventType.probability = VERY_LOW;
      return eventType;
    }

    eventType.probability = prob;
    return eventType;
  }
}

module.exports = EventController;
