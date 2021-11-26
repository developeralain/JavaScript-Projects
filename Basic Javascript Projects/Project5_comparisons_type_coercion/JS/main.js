
document.write(typeof 5);
document.write(typeof "cat");
document.write("5" + 5);
document.write("five" + 5);

function nan_function() {
    document.getElementById("nonumber").innerHTML = 0 / "f";
} //this function outputs 'NaN' or 'not a number' as this calculation cannot possibly yield a number as one of the values is a letter

function is3_function() {
    document.getElementById("is3number").innerHTML = isNaN("3");
} //this function outputs the answer to the question 'is 3 not a number' with the output value 'false' because 3 is a number

function iskitty_function() {
    document.getElementById("iskittynumber").innerHTML = isNaN('kitty');
} //this function outputs the answer to the question 'is kitty not a number' with the output value 'true' because kitty is in fact not a number (NaN)

function infinity_function() {
    document.getElementById("infinity").innerHTML = 5E310;
} //this function outputs the value 'infinity' because the number contained within the function that is to be outputted exceeds the javascript number limit and therefore outputs as 'infinity' by default

function neginfinity_function() {
    document.getElementById("neginfinity").innerHTML = -1E311;
} //this function outputs the value 'negative infinity' because the number contained within the function that is to be outputted exceeds the javascript number limit for a negative number and therefore outputs as '-infinity' by default

function false_function() {
    document.getElementById("1>2?").innerHTML = 1 > 2;
} //this function performs a boolean comparison of whether 1 is greater than 2 and outputs 'false' 

function true_function() {
    document.getElementById("2>1?").innerHTML = 2 > 1;
} //this function performs a boolean comparison of whether 2 is greater than 1 and outputs 'true'

//START OF CONSOLE OUTPUTS 
console.log(230 / 10); //an example of using the browser's console as an output field; this outputs in console as '23'

console.log(12 > 28); //performs a boolean 'greater than' comparison and outputs in console as 'false'

console.log(10 == 10); //this performs a boolean comparison to see if the values on both sides of '==' are equal; this outputs 'true'

console.log('the below values are boolean results of four triple equal comparisons'); //this makes the below more clear for the instructor within the console

console.log(10 === 10); //this performs a boolean comparison to see if both the values and data types on both side of '===' are equal; this outputs 'true'

console.log(10 === 'tree'); //this does same as above and outputs 'false' as both data types and values are not equal 
console.log(10 === '10'); //although values are equal, data types are not (string 10 versus number 10); this outputs 'false'

console.log(10 === 13); //data types equal but values not equal; outputs false

console.log('the below values are boolean operators AND and OR displaying both true and false for each') //this text is meant to make reading the console for outputs easier by creating a heading for below content

console.log(10 > 1 && 10 > 2); //this uses a boolean AND operator to compare two comparisons for the state of BOTH being true ; this outputs 'true'

console.log(0 > 0 && -1 > 1); //also boolean AND operator; outputs 'false' as both comparisons are false

console.log(0 > 0 || 1 > 0); //this uses a boolean OR operator to compare two comparisons for the state of EITHER ONE being true ; this outputs 'true'

console.log(1 > 1 || 10 > 10); //also boolean OR operator; outputs 'false' as neither one of the two comparisons are true

//END OF CONSOLE OUTPUTS

function not_function() {
    document.getElementById("not").innerHTML = !(2 > 2);
}

document.write(!(2 > 2));
//the above is another way to use a 'not' operator (!)...if you double bracket, you can apply it to 
//a comparison using the document.write function

