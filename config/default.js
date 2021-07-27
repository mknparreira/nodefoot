const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

module.exports = {
  General: {
    host: {
      port: process.env.HOST_PORT,
    },
  },
  Database: {
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  EventMatch: {
    veryLow: process.env.VERY_LOW,
    low: process.env.LOW,
    normal: process.env.NORMAL,
    high: process.env.HIGH,
    veryHigh: process.env.VERY_HIGH,
    events: {
      minOfEvent: process.env.MIN_OF_EVENT,
      maxOfEvent: process.env.MAX_OF_EVENT,
      minutesOfAnEventMightHappen: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      ],
    },
  },
};
