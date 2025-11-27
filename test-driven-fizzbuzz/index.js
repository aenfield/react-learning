module.exports = (num) => {
    let retVal = ``;
    
    if (num % 3 === 0) {
        retVal += `Fizz`;
    }

    if (num % 5 === 0) {
        retVal += `Buzz`;
    }

    if (retVal === ``) {
        retVal = `${num}`;
    }

    return retVal;
};