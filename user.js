
   $(document).ready(function () {

  $("#validate").click(function () {
    let first_name = $("#firstName").val();
    let last_name = $("#lastName").val();
    let gender = $("#gender").val();
    let date_of_birth = $("#dateOfBirth").val();
    let phone = $("#phoneNumber").val();
    let email = $("#email").val();
    let location = $("#address").val();




     if (first_name === "") {
       let firstNameError = document.getElementById("firstNameError");
       firstNameError.textContent = "First Name Required";
       firstNameError.style.color = "red";
       firstNameError.style.border = "1px solid red";
       error = true;
       return false;
     }
     if (first_name.length <= 1) {
       let firstNameError = document.getElementById("firstNameError");
       firstNameError.textContent = "Input atlaest two characters";
       firstNameError.style.color = "red";
       firstNameError.style.border = "1px solid red";
       error = true;
       return false;
     } else if (!isNaN(first_name)) {
       let firstNameError = document.getElementById("firstNameError");
       firstNameError.textContent = "Number is not appropriate for this field";
       firstNameError.style.color = "red";
       firstNameError.style.border = "1px solid red";
       error = true;
       return false;
     } else {
       let firstNameError = document.getElementById("firstNameError");
       firstNameError.textContent = "✔";
       firstNameError.style.color = "green";
       firstNameError.style.border = "1px solid white";
       error = false;
     }



     if (last_name === "") {
       let lastNameError = document.getElementById("lastNameError");
       lastNameError.textContent = "Last Name Required";
       lastNameError.style.color = "red";
       lastNameError.style.border = "1px solid red";
       error = true;
       return false;
     }
     if (last_name.length <= 1) {
       let lastNameError = document.getElementById("lastNameError");
       lastNameError.textContent = "Input atlaest two characters";
       lastNameError.style.color = "red";
       lastNameError.style.border = "1px solid red";
       error = true;
       return false;
     } else if (!isNaN(last_name)) {
       let lastNameError = document.getElementById("lastNameError");
       lastNameError.textContent = "Number is not appropriate for this field";
       lastNameError.style.color = "red";
       lastNameError.style.border = "1px solid red";
       error = true;
       return false;
     } else {
       let lastNameError = document.getElementById("lastNameError");
       lastNameError.textContent = "✔";
       lastNameError.style.color = "green";
       lastNameError.style.border = "1px solid white";
       error = false;
     }


 if (email == "") {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "Email can not be blank";
   emailError.style.color = "red";
   emailError.style.border = "1px solid red";
   error = true;
   return false;
 }
 if (email.indexOf(" ") !== -1) {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "A valid email does not contain space";
   emailError.style.color = "red";
   emailError.style.border = "1px solid red";
   error = true;
   return false;
 }
 if (email.indexOf("@") == -1) {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "@ symbol required";
   emailError.style.color = "red";
   emailError.style.border = "1px solid red";
   error = true;
   return false;
 }
 if (email.indexOf("@") <= 0) {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "Invalid position of @ symbol";
   emailError.style.color = "red";
   emailError.style.border = "1px solid red";
   error = true;
   return false;
 }
 if (email.indexOf(".") <= -1) {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "Invalid email format";
   emailError.style.color = "red";
   emailError.style.border = "1px solid red";
   error = true;
   return false;
 }
 if (email.indexOf(".") <= 0) {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "Invalid email format";
   emailError.style.color = "red";
   emailError.style.border = "1px solid red";
   error = true;
   return false;
 } else if (
   email.indexOf(".") - email.indexOf("@") < 2 ||
   email.indexOf(".") > email.length - 3
 ) {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "Invalid email format";
   emailError.style.color = "red";
   emailError.style.border = "1px solid red";
   error = true;
   return false;
 } else {
   let emailError = document.getElementById("emailError");
   emailError.textContent = "✔";
   emailError.style.color = "green";
   emailError.style.border = "1px solid white";
   error = false;
 }


   if (phone == "") {
     let phoneNumberError = document.getElementById("phoneNumberError");
     phoneNumberError.textContent = "Telephone feild can not be empty";
     phoneNumberError.style.color = "red";
     phoneNumberError.style.border = "1px solid red";
     error = true;
     return false;
   }
      if (phone.length < 7 || phone.length > 15) {
        let phoneNumberError = document.getElementById("phoneNumberError");
        phoneNumberError.textContent = "Invalid length";
        phoneNumberError.style.color = "red";
        phoneNumberError.style.border = "1px solid red";
        error = true;
        return false;
      } else if (isNaN(phone)) {
        let phoneNumberError = document.getElementById("phoneNumberError");
        phoneNumberError.textContent = " Numbers alone are allowed";
        phoneNumberError.style.color = "red";
        phoneNumberError.style.border = "1px solid red";
        error = true;
        return false;
      } else {
        let phoneNumberError = document.getElementById("phoneNumberError");
        phoneNumberError.textContent = "✔";
        phoneNumberError.style.color = "green";
        phoneNumberError.style.border = "1px solid white";
        error = false;
      }

        if (gender === "") {
          let genderError = document.getElementById("genderError");
          genderError.textContent = "Gender Required";
          genderError.style.color = "red";
          genderError.style.border = "1px solid red";
          error = true;
          return false;
        }
            if (
              gender !== "Male" ||
              gender !== "male" ||
              gender !== "Female" ||
              gender !== "female" ||
              gender !== "woman" ||
              gender !== "Woman" ||
              gender !== "man" ||
              gender !== "Man" ||
              gender !== "Boy" ||
              gender !== "boy" ||
              gender !== "girl" ||
              gender !== "Girl"
            ) {
              let genderError = document.getElementById("genderError");
              genderError.textContent = '"Male" or "Female" expected ';
              genderError.style.color = "red";
              genderError.style.border = "1px solid red";
              error = true;
              return false;
            }
        if (gender.length <= 1) {
          let genderError = document.getElementById("genderError");
          genderError.textContent = "Input atlaest two characters";
          genderError.style.color = "red";
          genderError.style.border = "1px solid red";
          error = true;
          return false;
        } else if (!isNaN(gender)) {
          let genderError = document.getElementById("genderError");
          genderError.textContent = "Number is not appropriate for this field";
          genderError.style.color = "red";
          genderError.style.border = "1px solid red";
          error = true;
          return false;
        } else {
          let genderError = document.getElementById("genderError");
          genderError.textContent = "✔";
          genderError.style.color = "green";
          genderError.style.border = "1px solid white";
          error = false;
        }


 if (location === "") {
   let addressError = document.getElementById("addressError");
   addressError.textContent = "Enter your address";
   addressError.style.color = "red";
   addressError.style.border = "1px solid red";
   error = true;
   return false;
 }
     if (!isNaN(location)) {
       let addressError = document.getElementById("addressError");
       addressError.textContent =
         "Number alone is not appropriate for this field";
       addressError.style.color = "red";
       addressError.style.border = "1px solid red";
       error = true;
       return false;
     }
     else if (location.length < 5) {
       let addressError = document.getElementById("addressError");
       addressError.textContent = "Invalid address";
       addressError.style.color = "red";
       addressError.style.border = "1px solid red";
       error = true;
       return false;
     }  else {
       let addressError = document.getElementById("addressError");
       addressError.textContent = "✔";
       addressError.style.color = "green";
       addressError.style.border = "1px solid white";
       error = false;
     }
     if (date_of_birth == "") {
       let dateOfBirthError = document.getElementById("dateOfBirthError");
       dateOfBirthError.textContent = "Select a valid date";
       dateOfBirthError.style.color = "red";
       dateOfBirthError.style.border = "1px solid red";
       error = true;
       return false;
     } else {
       let dateOfBirthError = document.getElementById("dateOfBirthError");
       dateOfBirthError.textContent = "✔";
       dateOfBirthError.style.color = "green";
       dateOfBirthError.style.border = "1px solid white";
       error = false;
     }
     




    let userDetails = {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      date_of_birth: date_of_birth,
      phone: phone,
      email: email,
      location: location,
    };

    $.ajax({
      url: "https://social-blog-w45g.onrender.com/users",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(userDetails),
      success: function (response) {
        console.log("User registration successful:", response);
        alert("Your registration is successful!");
      },
      error: function (error) {
        console.log("Registration error:", error);
        alert("Registration Error.");
      },
    });

    $("form")[0].reset();
  });

});