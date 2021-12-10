
// The below function serves to validate the form, prompting an alert if any of the existing 3 form fields are empty (have no value)
  function validateForm() {
    var x   = document.getElementById('fname');
    var y   = document.getElementById('lname');
    var z = document.getElementById('phone');

    if ( ! x.value ) {
        alert("First name must be filled out");
        x.focus();
        return false;
    }

    if ( ! y.value ) {
        alert("Last name must be filled out");
        y.focus();
        return false;
    }

    if ( ! z.value ) {
        alert("Phone number must be filled out");
        z.focus();//this piece stops the page from being reloaded or form from being submitted after alert
        return false;
    }

    return true;
}

// Below code pertains to web form pop up effect triggered by 'open' and 'close' buttons
function openForm() {
    document.getElementById("thisForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("thisForm").style.display = "none";
  }
//   end web form pop up effect code





