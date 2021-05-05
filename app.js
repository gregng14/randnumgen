function randInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function generateRandomNumbers(max, randFunc) {
    const numList = []; // array for random numbers
    let num;
    let prevNum;

    // generate an array of numbers form 1 to 10000
    for (i = 0; i < max; i++) {
        numList[i] = i + 1; // start at 1
    }

    // using Knuth-Fisher-Yates shuffle algorithm
    for (i = max - 1; i > 0; i--) {
        num = randFunc(i);
        prevNum = numList[num];
        numList[num] = numList[i];
        numList[i] = prevNum;
    }
    return numList;
}

const numList = generateRandomNumbers(10000, randInt);
console.log(numList)

/* TESTING */

// used for testing
// mocks randInt(max)
function randIntMock(max) {
    const staticArray = [0,0,1,1,4,3,6,5,2,3]
    return staticArray[max];
}

const numTestList = generateRandomNumbers(10, randIntMock);
console.assert(numTestList.toString() === '9,1,8,2,5,10,7,6,3,4', `List should be 9,1,8,2,5,10,7,6,3,4 result is ${numTestList}`)