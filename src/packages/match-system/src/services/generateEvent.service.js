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

    const lesionProbability = sanitizeProbability(
      lesion.calculate.probability, this.totalProbabilities(),
    );
    const goalProbability = sanitizeProbability(
      goal.calculate.probability, this.totalProbabilities(),
    );
    const swapProbability = sanitizeProbability(
      swap.calculate.probability, this.totalProbabilities(),
    );
    const cardProbability = sanitizeProbability(
      card.calculate.probability, this.totalProbabilities(),
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
    const {
      lesion, goal, swap, card,
    } = this;

    return lesion.calculate.probability + goal.calculate.probability
     + swap.calculate.probability + card.calculate.probability;
  }
}

module.exports = GenerateEvent;
