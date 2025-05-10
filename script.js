    /* animation elements  */
    let signin = document.getElementById("signinPage");
    let signup = document.getElementById("signupPage");
    let con1  =document.querySelector(".form-container .login");
    let con2  =document.querySelector(".form-container .signup"); 
    let layer1 = document.querySelector(".layer .layer-content");
    let layer2 = document.querySelector(".layer .layer-content.inactive");
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
    let see1 = password3;
    let see2 = password1;
    let see3 = password2;
    let eye1 = document.getElementById("eye1");
    let eye2 = document.getElementById("eye2");
    let eye3 = document.getElementById("eye3");


    /* 
    Regular ex.pression for validating email addresses.
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
            }, 3000);
            
            if(event)event.preventDefault();
            return false;
            }
        } else {
            emailx.style.border = "2px solid green";
            return true
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
                errorMessage.textContent = "length must be at least 8 characters";
            }
            else {
                errorMessage.textContent = "Passwords do not match.";
            }

            password2.parentNode.insertBefore(errorMessage, password2.nextElementSibling.nextSibling);
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
            if(event)event.preventDefault();
            return false;
        }
        } else {
            password1.style.border = "2px solid green";
            password2.style.border = "2px solid green";
            return true;
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
        event.preventDefault();
        if(emailvalidation(event)&&passwordValidation(event)){
            const successMessage = document.createElement("div");
            successMessage.className = "success-message";
            successMessage.textContent = "Account created successfully!";
            document.getElementsByTagName("body")[0].appendChild(successMessage);
            setTimeout(() => {
                successMessage.remove();
            }, 3000);

            /* clear the input fields */
            email.value = "";
            password1.value = "";
            password2.value = "";

            return;
        }

       
    });
    /* submit button for sign in account */
    submit2.addEventListener("click", function (event) {
        emailvalidation(event , email2);
        if (password3.value.trim() === "" || password3.value.length < 8) {
            password3.style.border = "2px solid red";
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "length must be at least 8 characters";
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
        layer1.classList.add("inactive");
        layer2.classList.remove("inactive");
    });
    
    signup.addEventListener("click", function(){
        con2.classList.remove("active");
        con1.classList.add("active");
        layer2.classList.add("inactive");
        layer1.classList.remove("inactive");
    });

    /**************************************/

    let step1 = document.getElementById("step1");
    let next = document.getElementById("nextStep"); 
    let step2 = document.getElementById("step2");
    let back = document.getElementById("prevStep");
    let birthDate = document.getElementById("birthDate");

    next.addEventListener("click", function(event){
        if(!validateName(event))return;
        let val = validationAge(); 
        if(val == 1 ){
            birthDate.style.border="2px solid green";
            step1.classList.add("inactive");
            step2.classList.remove("inactive");
            if(!validateGender())return;
            return ;
        }
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        if(val == -1)
        errorMessage.textContent = "birth date is not valid";
        else 
        errorMessage.textContent = "Your age is less than 14";
        birthDate.parentNode.insertBefore(errorMessage, birthDate.nextElementSibling.nextSibling);
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
        birthDate.style.border="2px solid red";

        event.preventDefault();
            return;
        
    });
    back.addEventListener("click", function(){
        step2.classList.add("inactive");
        step1.classList.remove("inactive");
    });
    
    let validationAge = function (){
        if(birthDate.value ==='')return -1;
        let birth =new Date(birthDate.value);
        let dateNow = new Date();
        let year = dateNow.getFullYear() - birth.getFullYear()
        let month = dateNow.getMonth() - birth.getMonth(); 
        let day = dateNow.getDate() - birth.getDate();
         if( day < 0  )month -- ; 
         if(month < 0)year--; 
         if(year < 14 || year > 120)return -2 ;
         return 1;   
    }
    let fullName = document.getElementById("fullName");
    let validateName = function(event = null){
        let patternName = /^[A-Za-zأ-ي]{4,}\s[A-Za-zأ-ي]{4,}$/;
        if(fullName.value===''||!patternName.test(fullName.value)){
            if(event != null){
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "entar valid first - second name";
            fullName.parentNode.insertBefore(errorMessage, fullName.nextElementSibling.nextSibling);
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
        }
            fullName.style.border="2px solid red";
            return false;
        }else{
            fullName.style.border="2px solid green";
            return true;
        }
    }
    fullName.addEventListener("input",validateName.bind(null,null));
    let gender = document.getElementsByName("gender");
    let validateGender = function(){
        for(let i = 0 ; i <gender.length ; i++ ){
            if(gender[i].checked)return true;

        }
        for(let i = 0 ; i <gender.length ; i++ ){
            gender[i].nextElementSibling.style.color="red";
            setTimeout(() => {
                gender[i].nextElementSibling.style.color="unset";
            }, 3000);
        }

        return false;
    }