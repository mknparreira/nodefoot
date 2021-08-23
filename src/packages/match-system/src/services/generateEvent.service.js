const { shuffle, pickOneValueRandomly } = require('../utils/array.util');
const { sanitizeProbability } = require('../utils/probability.util');
const Lesion = require('../model/lesion.model');
const Goal = require('../model/goal.model');
const Swap = require('../model/swap.model');
const Card = require('../model/card.model');

class GenerateEvent {
  constructor(minute) {
    this.minute = minute;
    this.lesion = new Lesion(this.minute);
    this.goal = new Goal(this.minute);
    this.swap = new Swap(this.minute);
    this.card = new Card(this.minute);
  }

  getEvent() {
    const {
      lesion, goal, swap, card,
    } = this;

    const total = this.totalProbabilities();

    const lesionProbability = sanitizeProbability(
      lesion.calculate.probability, total,
    );
    const goalProbability = sanitizeProbability(
      goal.calculate.probability, total,
    );
    const swapProbability = sanitizeProbability(
      swap.calculate.probability, total,
    );
    const cardProbability = sanitizeProbability(
      card.calculate.probability, total,
    );

    const allProbabilities = [];

    for (let i = 0; i < lesionProbability; i += 1) {
      allProbabilities.push(lesion.calculate);
    }

    for (let i = 0; i < goalProbability; i += 1) {
      allProbabilities.push(goal.calculate);
    }

    for (let i = 0; i < swapProbability; i += 1) {
      allProbabilities.push(swap.calculate);
    }

    for (let i = 0; i < cardProbability; i += 1) {
      allProbabilities.push(card.calculate);
    }

    return pickOneValueRandomly(shuffle(allProbabilities));
  }

  totalProbabilities() {
    const allEvents = [];
    const {
      lesion, goal, swap, card,
    } = this;

    allEvents.push(
      lesion.calculate,
      goal.calculate,
      swap.calculate,
      card.calculate,
    );

    const total = allEvents
      .reduce((cumulate, currentValue) => cumulate + currentValue.probability, 0);

    return total;
  }
}

module.exports = GenerateEvent;
