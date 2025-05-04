    /* animation elements  */
    let signin = document.getElementById("signinPage");
    let signup = document.getElementById("signupPage");
    let con1  =document.querySelector(".form-container .login");
    let con2  =document.querySelector(".form-container .signup"); 
    let x = document.querySelector(".layer .layer-content");
    let y = document.querySelector(".layer .layer-content.inactive");
    /* validation elements for sign new account*/
    let submit = document.getElementById("SignAccount");
    let password1 = document.getElementById("signUpPassword");
    let password2 = document.getElementById("confirmPassword");
    let email = document.getElementById("signUpEmail");
    /* validation elements for sign in account*/
    let email2 = document.getElementById("UserName");
    let password3 = document.getElementById("Password");
    let submit2 = document.getElementById("LoginAccount");
    /* eye elements */
    let see1 = document.querySelector(".see1");
    let see2 = document.querySelector(".see2");
    let see3 = document.querySelector(".see3");
    let eye1 = document.getElementById("eye1");
    let eye2 = document.getElementById("eye2");
    let eye3 = document.getElementById("eye3");

    /* 
    Regular expression for validating email addresses.
    This pattern checks for a valid format of :
    - an email address
    - including the presence of an '@' symbol
    - a domain name
    - and a top-level domain (TLD).
    The pattern allows for: 
    - alphanumeric characters
    - dots
    - hyphens
    - and underscores in the local part of the email address
    - and requires a valid TLD (e.g., .com, .org, .net).
    */
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    /* validation function */
    let emailvalidation = function (event = null , emailx = email) {
        if (emailx.value.trim() === "" || !emailPattern.test(emailx.value)) {
            emailx.style.border = "2px solid red";
            if(event){
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "Please enter a valid email address.";
            emailx.parentNode.insertBefore(errorMessage, emailx.nextElementSibling.nextSibling);
            setTimeout(() => {
                errorMessage.remove();
            }, timeout = 3000);
            
            if(event)event.preventDefault();
            return;
            }
        } else {
            emailx.style.border = "2px solid green";
        }
    }
    let passwordValidation = function (event = null ) {
        if (password1.value !== password2.value || password1.value.length < 8) {
            password1.style.border = "2px solid red";
            password2.style.border = "2px solid red";
            if(event){
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            if(password1.value.length < 8) {
                errorMessage.textContent = "Password must be at least 8 characters long.";
            }
            else {
                errorMessage.textContent = "Passwords do not match.";
            }

            password2.parentNode.insertBefore(errorMessage, password2.nextElementSibling.nextSibling);
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
            if(event)event.preventDefault();
            return;
        }
        } else {
            password1.style.border = "2px solid green";
            password2.style.border = "2px solid green";
        }
    }
    /* event listeners  for validation while inputing*/
    /*  validation  for sign new account*/
    email.addEventListener("input", function () {
        emailvalidation();
    });
    password1.addEventListener("input", function () {
        passwordValidation();
        });
    password2.addEventListener("input", function () {
        passwordValidation();
    });
    /*  validation for sign in account*/
    email2.addEventListener("input", function () {
        emailvalidation(null,email2);
    });
    password3.addEventListener("input", function () {
        if (password3.value.trim() === "" || password3.value.length < 8) {
            password3.style.border = "2px solid red";
        } else {
            password3.style.border = "2px solid green";
        }
    });
    /* eye function */
    let seeFunction = function (eye, password) {
    
        if(password.type ==="password"){
            password.type = "text";
            eye.classList.add("fa-eye-slash");
            eye.classList.remove("fa-eye");

        }else{
                password.type = "password";
                eye.classList.remove("fa-eye-slash");
                eye.classList.add("fa-eye");
        }
    }
    /* submit button */
    /* submit button for sign new account */
    submit.addEventListener("click", function (event) {
        emailvalidation(event);
        passwordValidation(event);
       
    });
    /* submit button for sign in account */
    submit2.addEventListener("click", function (event) {
        emailvalidation(event , email2);
        if (password3.value.trim() === "" || password3.value.length < 8) {
            password3.style.border = "2px solid red";
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "Password must be at least 8 characters long.";
            password3.parentNode.insertBefore(errorMessage, password3.nextElementSibling.nextSibling);
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
            if(event)event.preventDefault();
            return;
        } else {
            password3.style.border = "2px solid green";
        }

    });
    /* eye function */

    eye1.addEventListener("click",seeFunction.bind(null,eye1,see1)); 
    eye2.addEventListener("click",seeFunction.bind(null,eye2,see2));
    eye3.addEventListener("click",seeFunction.bind(null,eye3,see3));

    /* animation  */
    signin.addEventListener("click", function(){
        con1.classList.remove("active");
        con2.classList.add("active");
        x.classList.add("inactive");
        y.classList.remove("inactive");
    });
    
    signup.addEventListener("click", function(){
        con2.classList.remove("active");
        con1.classList.add("active");
        y.classList.add("inactive");
        x.classList.remove("inactive");
    });