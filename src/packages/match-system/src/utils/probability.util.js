class ProbabilityUtil {
  static getTotalEventsPerMatch(min, max) {
    const ceilMin = Math.ceil(min);
    const floorMax = Math.floor(max);
    return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
  }
}

module.exports = ProbabilityUtil;
