class ArrayUtil {
  static shuffle(array) {
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
  }

  static pickOneValueRandomly(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

module.exports = ArrayUtil;
