let value = 5;
let exponent = 'second';
let interpolatedString =
    value + ' to the ' + exponent + ' power is ' + (value * value);

let interpolatedTemplateLiteral =
    `${ value } to the ${ exponent } power is ${ value*value}`

console.log(interpolatedString);
console.log(interpolatedTemplateLiteral);