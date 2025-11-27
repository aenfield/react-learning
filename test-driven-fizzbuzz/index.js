module.exports = (num) => {
    if (num % 15 === 0) {
        return 'FizzBuzz';
    } else {
        return `${num}`;
    }
};