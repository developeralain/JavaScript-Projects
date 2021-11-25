var Dogs = "Pup Pups", Female = "Lacie", Male = "Louie", MalePup = "Orion", FemalePup = "Aquilla";
//created a series of variables, starting with 'Dogs' and ending with 'FemalePup'
var Dogs = Dogs.fontcolor("red");
//called the 'fontcolor' method on the variable 'Dogs' with parameter 'red' (meaning I made the string value ('Pup Pups') of the variable ('Dogs') red

document.write(Dogs)
//I called the 'document.write' method to print the variable 'Dogs' string value on the browser screen
//Below, I do the same thing as explained above to several other variables 
//that I created above: I use fontcolor method to change their color
//to the value I specified within the () and I use the document.write
//method to print this in the browser so it can be seen 
var Female = Female.fontcolor("pink");
document.write(Female)

var Male = Male.fontcolor("grey");

var MalePup = MalePup.fontcolor("yellow");

var FemalePup = FemalePup.fontcolor("green");

document.write(Female + Male)



window.alert("You have been notifed!");
//The above code creates a pop up box in the browser that states
//the string within the quotation marks ""
var Cow = "Mooo"
var Chicken = "Bok bok"
var Dog = "Woof!"
var Response = "The animals are going CRAZY!"
//The above code creates variables and assigns strings to each
document.write(Cow + Chicken + Dog + Response);
//The above code concatenates the variable strings and prints this
//in the browser window