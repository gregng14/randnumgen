const generateRandomNumbers = () => {
    const numList = []; // array for random numbers
    const max = 10000;
    const min = 1;
    let increment = 0;
    let num;
    let prevNum;

    // generate a array of numbers form 1 to 10000
    for (i = 0; i < max; i++) {
        numList[i] = i + 1;
    }

    while (increment < max) {
        num = Math.floor(Math.random() * max);
        prevNum = numList[num];
        numList[num] = numList[increment];
        numList[increment] = prevNum;
        increment++;
    }
    return numList;
}

const numList = generateRandomNumbers();
const numSet = new Set(numList);
numList.forEach(num => console.log(num));
console.assert(numSet.size === 10000, 'List of randomly generated numbers is not unique');