
//WHOLE LOOP DEMO 
function count_to_ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}
//The above while loop sets a variable 'Digit' as the variable to be printed.
//'Digit' is initialized as blank (no value). 
//A counter 'X' is initialized at a value '1'.
//Condition statement is X < 11 
//X will increment by 1 each cycle of the loop. (X = 1...2...3...etc.)
//While condition statement is true (X < 11), 'Digit' will be printed. 
//The value of 'Digit' will also increase by 1 each cycle of the loop 
//and will increment alongside X. As well, a <br> element was enterd into
//the value of Digit in order to space out the printing and make it block 
//instead of in-line (instead of numbers beside each other on the same 
//line, each number has a separate line)


//
//LENGTH PROPERTY DEMONSTRATED 
function string_length() {
    X = "This is a string - how long is it, though?";
    document.getElementById("answer").innerHTML = X.length;
}
//The above function creates a variable 'X' of the above string value.
//It then prints the variable length (in terms of characters) within the
//corresponding HTML element

//FOR LOOP DEMO 
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //array created under variable 'instruments'
var content = ""; //'content' variable initialized
function for_loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    //initialized counter variable Y to value 0. 
    //Conditional Y < the length of the array 'instruments'(total length is in terms of # elements in array (which is 6) and because index starts at 0 it only goes up to 5; therefore 5 < 6 so it will display all elements).
    //Y to increment by 1 each cycle.Value of 'content' will be the the string at index position Y plus a < br > to space out the strings.
    //Because each cycle Y increments by 1, the index also incremenets by 1 and thus this loop will cycle through all entries in the array.
    document.getElementById("list_of_instruments").innerHTML = content;
    //the above prints to the corresponding html element 'content'
}

// ARRAY DEMO
function array_function() {
    var wow_items = [];
    wow_items[0] = "Thunderfury, Blessed Blade of the Windseer";
    wow_items[1] = "Sulfuras, Hand of Ragnaros";
    wow_items[2] = "Pure Elementium Band";
    wow_items[3] = "Touch of Frost";
    document.getElementById("array").innerHTML = "Some day I'd like to get a " + wow_items[0] + ".";
}
//the above function contains an array under the variable 'wow_items'. Within the array are 4 elements from index 0 to index 3. Each element has a different string value. This function prints a string plus element at index 0 in the correspond HTML element.

//CONSTANT FUNCTION
function constant_function() {
    const WoW_Items = { name: "Ashbringer", type: "2h", rarity: "legendary", dps: 109 };
    WoW_Items.dps = 99;
    WoW_Items.descriptor = "A rare sword fabled to turn opponents into ash";
    document.getElementById("constant").innerHTML = "Some day I'd like to get a " + WoW_Items.dps + " dps " + WoW_Items.name + "--" + WoW_Items.descriptor + ".";
}
//Demonstrates the fact that constants are immutible in name only but not in value...we changed the dps value as defined in the constant from '109' to '99' and it printed as such. We also added a key:value pair to this constant array. However, if we tried to create another constant named WoW_Items with different key:value pairs it would create an error. 
//The above function creates an array with key:value pairs in one line. 
//On next line the dps element is changed in value to 99. 
//On the next line I created a new key:value pair with key 'descriptor' and value 'A rare sword...'
//finally this function is printed within the corresponding HTML element. We can see that '99' is in fact displayed, reflecting the change to the value of that element.
//

//LET KEYWORD FUNCTION 
function let_function() {
    var X = 21;
    console.log(X);
    {
        let X = 22;
        console.log(X);
       
    }
    console.log(X);
}
let_function();
//The above demonstrated that the 'let' keyword allows for a variable of a given name (in this case 'X') to mean something else within a code block (locak to a block) delineated by {} than what it means when local to a function. var X = 21 was local to the function and printed as such, whereas let X = 22 was written within curly brackets (code block) and was local to the confines of that particular block - hence it printed X = 22 as specified rather than X = 21 as was specified to the function as a whole.

//RETURN FUNCTION 
function return_function(height, width) {
    if (height > 0 && width > 0) {
        return height * width; 
    }//using an 'if' statement to set a conditional statement of both height and weight being > 0 and so long as this is true the function will return height * width arguments. 
    return 0;
    //the return 0 here essentially functions as the 'else' to the 'if' statement in that for values that don't meet the conditional of being positive and non-zero numbers, the return value will be zero (essentially if > 0 then return height*weight, else return 0)

}
console.log("---console.log output for return_function below---")
console.log(return_function(-3, 2));
console.log(return_function(3, 2));
console.log(return_function(22, 2));
//the above console.log methods are used to display the results of return_function in the browser console while allowing for arguments to be entered into the above called function. As we can see, the if statement works and if the conditional is not met, zero is returned as specified. 

//OBJECT USING LET KEYWORK AND THIS KEYWORD 
var wow_toon = {
    race: "human ",
    level: "60 ",
    class: "rogue ",
    weapon: "Warglaives of Azzinoth ",
    armor: "Bloodfang Set ",
    //the above represent the properties (key:value pairs) of the object 'wow_toon'
    description: function () {
        return "The character is a " + this.level + this.race + this.class + " with a " + this.armor + "and " + this.weapon;
    }//the above is a method of key 'description' that uses 'return' and 'this' keywords to direct the function to address the object...this function combines strings with the values of object properties (also strings) to output a coherent sentence in the corresponding HTML element
    
}
document.getElementById("rogue").innerHTML = wow_toon.description();
//this statement is used to output the description: function() method within the wow_toon object above in the corresponding HTML element.

//BREAK CHALLENGE 
function break_loop() {
    var text = "";
    for (let i = 1; i < 11; i++) {
        if (i === 6) { break; }
        text += "The number is " + i + "<br>";
//Defines a standard loop with the addition of a 'break condition (if i===6) and the 'break' keyword (which exits the loops upon reaching the condition)
    }
    document.getElementById("break").innerHTML = text;
}
break_loop(); 
//The above loop is defined to count from 1 to 10, but due to the 'break' keyword it will stop counting at 5 (exits loop when it detects i had incremented to 6). Expected output: 1,2,3,4,5

//CONTINUE CHALLENGE
function continue_loop() {
    var text = "";
    for (let i = 1; i < 11; i++) {
        if (i === 6) { continue; }
        text += "The number is " + i + "<br>";
//Defines a standard loop with the addition of a 'condtinue condition (if i===6) and the 'continue' keyword (which skips counting the number 6 (when i=6) and continues counting to 10 after skipping 6)
    }
    document.getElementById("continue").innerHTML = text;
}
continue_loop();
//The above loop is defined to count from 1 to 10, but due to the 'continue' keyword it will skip counting the number 6 (when i = 6) and continue counting to 10 after skipping 6. Expected output: 1,2,3,4,5,7,8,9,10
