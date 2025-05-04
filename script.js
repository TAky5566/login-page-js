let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let con1  =document.querySelector(".form-container .login");
let con2  =document.querySelector(".form-container .signup"); 
let x = document.querySelector(".layer .layer-content");
let y = document.querySelector(".layer .layer-content.inactive");

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
        console.log(x);
        console.log(y);
    });
    let submit = document.getElementById("SignAcc");
    let password1 = document.getElementById("signUp-password");
    let password2 = document.getElementById("confirm-password");
    let email = document.getElementById("signUp-email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    email.addEventListener("input", function () {
        if (email.value.trim() === "" || !emailPattern.test(email.value)) {
            email.style.border = "2px solid red";
        } else {
            email.style.border = "2px solid green";
        }  
    });


    submit.addEventListener("click", function (event) {
    
        if (email.value.trim() === "" || !emailPattern.test(email.value)) {
            email.style.border = "2px solid red";
            event.preventDefault();
            return;
        } else {
            email.style.border = "2px solid green";
        }
    
        if (password1.value !== password2.value) {
            password1.style.border = "2px solid red";
            password2.style.border = "2px solid red";
            event.preventDefault();
            return;
        } else {
            password1.style.border = "2px solid green";
            password2.style.border = "2px solid green";
        }
    });
    

    password1.addEventListener("input", checkPasswords);
    password2.addEventListener("input", checkPasswords);
    
    function checkPasswords() {
        if (password1.value === password2.value && password1.value !== "") {
            password1.style.border = "2px solid green";
            password2.style.border = "2px solid green";
        } else {
            password1.style.border = "2px solid red";
            password2.style.border = "2px solid red";
        }
    }
    