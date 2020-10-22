const getSumOfDigits = (n) => n ? (n % 10) + getSumOfDigits(Math.floor(n / 10)) : 0;

console.log(getSumOfDigits(123));
function getMax(n) {
    const firstDigit = n % 10;
    const remainN = Math.trunc(n / 10);

    const recurDeep = 0

    return getMaxStep(remainN, firstDigit, recurDeep);
}

function getMaxStep(remainNumbers, currentMaxNumber, recurDeep) {

    if (remainNumbers <= 1) {
        return {
            'MaxNumber': currentMaxNumber,
            'RecurDeep': recurDeep,
        };
    }

    const digit = remainNumbers % 10;
    const remainN = Math.trunc(remainNumbers / 10);

    if (currentMaxNumber < digit) {
        return getMaxStep(remainN, digit, recurDeep + 1);
    } else {
        return getMaxStep(remainN, currentMaxNumber, recurDeep + 1);
    }

}

function getMin(n) {
    const firstDigit = n % 10;
    const remainN = Math.trunc(n / 10);

    return getMinStep(remainN, firstDigit, 0);
}

function getMinStep(remainNumbers, currentMinNumber, recurDeep) {

    if (remainNumbers <= 1) {
        return {
            'MinNumber': currentMinNumber,
            'RecurDeep': recurDeep,
        };;
    }

    const digit = remainNumbers % 10;
    const remainN = Math.trunc(remainNumbers / 10);


    if (currentMinNumber > digit) {
        return getMinStep(remainN, digit, recurDeep + 1);
    } else {
        return getMinStep(remainN, currentMinNumber, recurDeep + 1);
    }

}
