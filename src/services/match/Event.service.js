const config = require('config');
const GenerateEventService = require('./GenerateEvent.service');
const Probability = require('../../utils/Probability.util');

const matchConfig = config.get('EventMatch.events');

class EventService {
  getEvents() {
    const events = [];
    const minutes = [];
    const totalOfEventsPerMatch = Probability.getTotalEventsPerMatch(matchConfig.minOfEvent,
      matchConfig.maxOfEvent);

    while (minutes.length < totalOfEventsPerMatch) {
      const pos = Math.floor(Math.random() * matchConfig.minutesOfAnEventMightHappen.length) + 1;
      if (minutes.indexOf(pos) === -1) minutes.push(pos);
    }

    const minutesSorted = minutes.sort((a, b) => a - b);

    for (const minute of minutesSorted) {
      const ev = new GenerateEventService(minute);
      events.push(ev.getEvent());
    }

    return events;
  }
}

module.exports = new EventService();
