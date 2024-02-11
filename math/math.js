//adding function
const sum= (a, b) => {
    return (a + b);
}
// subtraction function
const subtract = (a, b) => {
    return (a - b);
}
// multiplying function
const multiply = (a, b) => {
    return (a * b);
}
// dividing function
const divide = (a, b) => {
    return (a / b);
}
// square root function
const sqrt = (a) => {
    return Math.sqrt(a);
}
// maximum function
const max = (a, b) => {
    return Math.max(a, b);
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    sqrt,
    max
};
