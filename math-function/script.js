function getStr(val) {
    return `The result is ${val}`;
}

let result = My_Math(1)
    .plus(10)
    .minus(12)
    .divide(0)
    .value();

console.log(result); // -1

let formatted_result = My_Math(10)
    .plus(10)
    .format(getStr);

console.log(formatted_result); // The result is 20;