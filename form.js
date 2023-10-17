const handleSubmission = () => {
  // Access and log the values of the form elements
  var firstnameField = document.getElementById("firstname");
  var lastnameField = document.getElementById("lastname");
  var emailField = document.getElementById("email");
  var ageField = document.getElementById("age");
  var dropdown = document.getElementById("dropdown");
  var radioButtons = document.getElementsByName("source");
  var selectedRadioValue;
  var checkboxes = document.getElementsByName("prefer");
  var selectedCheckboxes = [];
  var feedbackTextarea = document.getElementById("feedback");

  // Log the values to the console
  console.log("First Name:", firstnameField.value);
  console.log("Last Name:", lastnameField.value);
  console.log("Email:", emailField.value);
  console.log("Age:", ageField.value);
  console.log("Current Role:", dropdown.value);

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedRadioValue = radioButtons[i].value;
      console.log("Source:", selectedRadioValue);
      break;
    }
  }

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedCheckboxes.push(checkboxes[i].value);
    }
  }
  console.log("Preferences:", selectedCheckboxes);

  console.log("Feedback:", feedbackTextarea.value);

};
