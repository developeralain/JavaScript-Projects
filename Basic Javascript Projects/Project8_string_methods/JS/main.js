function concat_function() {
    var part_1 = "I like ";
    var part_2 = "turtles because ";
    var part_3 = "they have silly pants.";
    var sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = sentence;

}
//CONCAT() METHOD
//the above function concatenates the string values of several variables into a complete sentence under the variable 'sentence'. part_1.concat calls the concatenate function built-in to Javascript to run, starting with string variable part_1 "I like" and adding part_2 and part_3, in order, to it. 

function slice_function() {
    var cheese = "Who cut the cheese?";
    var slices = cheese.slice(12, 18);
    document.getElementById("slicer").innerHTML = slices;

}
//SLICE() METHOD
//the above function uses the slice method. It creates a string under variable 'cheese' and then creates another variable 'slices' which will store the output of the 'slice method' as applied to the 'cheese' variable -- meaning the 'slice method' will cut out the word 'cheese' (characters 12 to 18 in the string) from the 'cheese' variable and store it as the value for the variable 'slices'. This function will then display the value of variable 'slices' (being the string 'cheese') in the associated html p element when the user clicks the button and calls the function.


function upper_function() {
    var cheese = "Who cut the cheese?";
    var uppers = cheese.toUpperCase(12, 18);
    document.getElementById("upper").innerHTML = uppers;

}
//TOUPPERCASE() METHOD
//the above function uses the touppercase method. This method converts the specified variable to upper case (all letters will now be upper case). This method has no parameters, meaning you can't specify which part of the string you wish to capitalize directly; you'd need to use a slice method first and then apply the touppercase method to it. 

function search_function() {
    var text = "The rain in Spain is completely insane!";
    var seeker = text.search("rain");
    document.getElementById("search").innerHTML = seeker;
}
//SEARCH() METHOD
//the above function uses the search method. It searches whatever you put in as an argument (word, symbol, etc.) and outputs the index position for where that thing you are seeking begins in the string (where it is found; starting location)

function tostring_function() {
    var number = 18;
    var stringage = number.toString();
    document.getElementById("stringage").innerHTML = stringage;
}
//TOSTRING() METHOD
//this function uses the toString method to convert the data type of variable 'number' from a number to a string. Output value is the same (18) but its data type is now a string. You can alternative write the code without the variable 'stringage' and instead have ...innerHTML = number.toString();' at the end if you wish (more than one way to implement this)

function precision_function() {
    var X = 32.3232323232324546523;
    document.getElementById("precise").innerHTML = X.toPrecision(4);
}
//TOPRECISION() METHOD
//the function above uses the toprecision() method to specify how many digits we want to output for a given variable's number value...as we can see the variable 'X' has a ton of digits (more than 10) and we are specifying we only want to display (starting from the first leftmost digit) 4 digits total. The output would be '32.32'

function tofixed_function() {
    var X = 2.2513513456787665343;
    document.getElementById("fixed").innerHTML = X.toFixed(4);
}
//TOFIXED() METHOD
//the above function uses a tofixed() method to round a number to the specified number of decimal places and it will output this as a string. So here the output would be '2.2514' and it would no longer be data type 'number' but instead would be data type 'string'

function valueof_function() {
    var X = "Tomato tomatoes";
    document.getElementById("value").innerHTML = X.valueOf();
}


