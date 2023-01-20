function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

function isVowel(v) {
    return ("aeiouAEIOU".indexOf(v) != -1);
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}

function reverse(str) {
    return str.split("").reverse().join("");
}


function findLongestWord(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(longest.length < arr[i].length) {
            longest = arr[i];
        }
    }
    return longest.length;
}


function filterLongWords(arr, i) {
    return arr.filter(function(elem){ elem.length > i});
}

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem *10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem == 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(getProd, 1);
function getProd(total, num) {
  return total * num;
}
document.writeln(d+ "<br/>");

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTestForArray(expected, found) {
    const result= objectsEqual(expected, found)
    if (result==true) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length
    && Object.keys(o1).every(p => o1[p] === o2[p]);


console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20, 10, 30)));
console.log("Expected output of isVowel(u) is true  " + myFunctionTest(true, isVowel("u")));
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of filterLongWords([hello, javascript, html, css], 3) is [hello, javascript]  " + myFunctionTestForArray(["hello", "javascript"], filterLongWords(["hello", "javascript", "html", "css"], 3)));
console.log("Expected output of (hi, hello, hey) is 5  " + myFunctionTest(5, findLongestWord(["te", "table", "hol"])));