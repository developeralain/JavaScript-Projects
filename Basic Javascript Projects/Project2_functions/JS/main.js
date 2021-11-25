function My_First_Function() {
    var str = "This text is green!";
    //variable created that is a string and contains text to right of = sign
    var result = str.fontcolor("green");
    //a new variable is created 'result' whose value is the existing variable 'str' modified by the method 'fontcolor' with parameter 'green' i.e. the 'result' variable is the 'str' variable but green (since the method modified it to be so)
    document.getElementById("Green_Text").innerHTML = result;
    //this acquires the element that corresponds to the id 'Green_Text' and modifies it (per innerHTML) to be equal to the 'result' variable (meaning a green colored string as above)

}

function My_Second_Function() {
    var sentence = "This is "
    //The above is the first string value of variable 'sentence'
    sentence += "My life"
    //the above += operator concatenates the existing string value
    //for variable sentence ('this is ') with another string value
    //'My life' 
    document.getElementById("kek").innerHTML = sentence;
    //This modifies the element with id 'kek' to have the value
    //of the 'sentence' variable, which is a string,  upon an event occurring as defined by the HTML document
}