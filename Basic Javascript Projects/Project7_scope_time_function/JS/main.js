var X = 15;
var Y = 22;
function rando_math() {
    document.write(3 + X + 5);
    //the above line of code makes the computer write the outcomes of the math '3 + X + 5' within the browser viewport.
    
}

rando_math();
//the above line of code calls the function written above it so that it executes and therefore displays the text in the browser viewport

function rando_math_2() {
    document.write(Y + X + 5);
}
rando_math_2();
//the above function calls the function above it so that text displays in the browser.

function mealgreet_function() {
    var X = new Date().getHours();
    //the above line of code declares variable 'X' to have the value of the user's local time on their machine. The time value is based on military time (range from 0 to 23)
    if (X < 12) {
        Greeting = "Good Morning!";
    }
    //above 'if' statement says that if the 'X' variable's value (the actual military time on the user's machine) is less than 12pm, then the value of the variable 'Greeting' is a 'Good Morning!' string. 
    else if ((X > 12) && (X < 18)) {
        Greeting = "Good Afternoon!";
    }
        //this 'elseif' statement says if the user's local time is between 12pm and 6pm, then the value of the variable 'Greeting' is a 'Good Afternoon!' string.
    else {
        Greeting = "Good Evening!";
    }
    //The above 'else' statement says that for any other time frames ()
    document.getElementById("meal").innerHTML = Greeting;
}

function silly_function() {
    X = 29
    Y = 2
    if (X > Y) {
        document.write("I'm a silly hat")
    }
}
//the above code creations a function that compares the values of variables X and Y and IF X is greater than Y it will print string 'I'm a silly hat'. 
silly_function();
//the above line of code calls the function that was written above it so that it displays in thr browser.

function favcolor_function() {
    var Color = document.getElementById("favcolor").value;
//the above line of code declares a variable named 'Color' and sets its value to be equal to a user's input
    if (Color == "orange") {
        Greeting = "YOUR COLOR IS PERFECTION! =D";
    }
    //the above 'if' statement says that IF the variable 'Color''s value is 'orange' (based on user input, since the user input determines the variable's value), that the variable named 'Greeting' would have a certain string value.

    else {
        Greeting = "That is not what I would've chosen!";
    }
    //the above 'else' statement says that for any other string value other than 'orange' entered by the user, the 'Greeting' variable's value will be another different string.
    document.getElementById("greetoutcome").innerHTML = Greeting;
    //the above code prints the string value of the variable 'Greeting' in the corresponding HTML element with ID 'greetoutcome'. The 'Greeting' variable can have two possible string values per the above 'if' and 'else' statements, depending on what conditions have been met. 

}

function time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is the evening time.";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}
//the above code is nearly the same as the mealgreet_function() in essence. It is the copied code from tech academy.



