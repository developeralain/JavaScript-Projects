function countdown_function() {
    var seconds = document.getElementById("seconds").value;//sets the value of variable 'seconds' in this function to be equal to the value inputted by the user within the HTML doc

    function tick() {
        seconds = seconds - 1;//counds down from the user input 'seconds' value by increments of 1
        timer.innerHTML = seconds;//sets the 'timer' to be equal to 'seconds' that user inputted
        var time = setTimeout(tick, 1000);//causes the program to pause for 1000 miliseconds or 1 second between each runthrough of the program (thus it is now a count down from the user inputted 'seconds' value)
        if (seconds == -1) {
            alert("Time's up!");//prompts an alert that countdown is over
            clearTimeout(time);//resets the 'time' variable
            timer.innerHTML = "";//clears the value of the 'timer' variable back to blank (no value)
        }
    }
    tick();
}
