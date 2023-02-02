const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let sum = 0;
let fun = function () {
    readline.question('Enter a number ', num => {
        if (num.toLowerCase() == 'stop') {
            console.log(`Stopping...`);
            console.log("Sum: " + sum);
            readline.close();
        }
        else if (isNaN(num)) {
            console.log(num + " is not a number. Stopping...");
            console.log("Sum: " + sum);
            readline.close();
        }
        else {
            sum += parseInt(num);
            fun()
        }
    });
}
fun();
