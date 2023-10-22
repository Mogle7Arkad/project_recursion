//fibonacci sequence by iteration
function fibs(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let fibsArray = [num1, num2];
    let i = 0;

    for(i = 2; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        fibsArray.push(sum)
    }
    return fibsArray;
}
let newArray = fibs(11);
console.log(newArray);