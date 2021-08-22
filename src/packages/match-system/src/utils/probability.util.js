const getTotalEventsPerMatch = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

const sanitizeProbability = (probability, total) => parseInt(((probability / total) * 100), 10);

exports.getTotalEventsPerMatch = getTotalEventsPerMatch;
exports.sanitizeProbability = sanitizeProbability;
