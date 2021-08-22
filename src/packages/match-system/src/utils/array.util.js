const shuffle = (array) => {
  const newArray = array;
  let i = newArray.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
};

const pickOneValueRandomly = (array) => array[Math.floor(Math.random() * array.length)];

exports.shuffle = shuffle;
exports.pickOneValueRandomly = pickOneValueRandomly;
