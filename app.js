const generateRandomNumbers = () => {
    const numList = []; // array for random numbers
    const max = 10000;
    let num;
    let prevNum;

    // generate an array of numbers form 1 to 10000
    for (i = 0; i < max; i++) {
        numList[i] = i + 1; // start at 1
    }

    // using Knuth-Fisher-Yates shuffle algorithm
    for (i = max - 1; i > 0; i--) {
        num = Math.floor(Math.random() * (i + 1));
        prevNum = numList[num];
        numList[num] = numList[i];
        numList[i] = prevNum;
    }
    return numList;
}

const numList = generateRandomNumbers();
numList.forEach(num => console.log(num));
const numSet = new Set(numList);
console.assert(numSet.size === 10000, 'List of randomly generated numbers is not unique');