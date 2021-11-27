function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";

}

function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age >= 18) ? "You can vote!" : "Sorry, you are still too young to vote.";
    document.getElementById("vote").innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("keywords_and_constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

var Alain = new Vehicle("Ferrari", "Spider", 1999, "Red");
function myalainfunction() {
    document.getElementById("new_and_this").innerHTML =
        "Alain drives a " + Alain.Vehicle_Color + "-colored "
        + Alain.Vehicle_Year + Alain.Vehicle_Make + Alain.Vehicle_Model;
}

function Burrito(Container, Meat, Rice, Bean, Other_Topping) {
    this.Burrito_Container = Container;
    this.Burrito_Meat = Meat;
    this.Burrito_Rice = Rice;
    this.Burrito_Bean = Bean;
    this.Burrito_Other_Topping = Other_Topping;
}

var Alainburrito = new Burrito("Whole wheat wrap", "Steak", "Brown rice", "Black beans", "Guacamole");
function burrito_function() {
    document.getElementById("burrito").innerHTML = "I want a " + Alainburrito.Burrito_Meat + " burrito in a " + Alainburrito.Burrito_Container + " with " + Alainburrito.Burrito_Rice + " and " + Alainburrito.Burrito_Bean; 
}

function generic_function() {
    document.getElementById("nested_function").innerHTML = count_down();
    function count_down() {
        var starting_number = 221;
        function minus_ten() { starting_number -= 10; }
        minus_ten();
        return starting_number;
    }
}