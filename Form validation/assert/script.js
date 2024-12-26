const usernameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm");
const usererror = document.getElementById("username-error");
const emailerror = document.getElementById("email-error");
const passworderror = document.getElementById("password-error");
const confirmerror = document.getElementById("confirm-error");
const emailcheck = /\S+@\S+\.\S+/;
const passwordcheck = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
// Validate Username
function validateUsername() {
    const username = usernameInput.value;
    if (username.length < 3) {
        usererror.textContent = "Username must be at least 3 characters";
        usererror.style.color = "red";
        usernameInput.style.borderColor = "red";
        return false;
    } else {
        usererror.textContent = "";
        usernameInput.style.borderColor = "";
        return true;
    }
}
// Validate Email
function validateEmail() {
    const email = emailInput.value;
    if (!emailcheck.test(email)) {
        emailerror.textContent = "Email is not valid";
        emailerror.style.color = "red";
        emailInput.style.borderColor = "red";
        return false;
    } else {
        emailerror.textContent = "";
        emailInput.style.borderColor = "";
        return true;
    }
}
// Validate Password
function validatePassword() {
    const password = passwordInput.value;
    if (!passwordcheck.test(password)) {
        passworderror.textContent = "Password must be at least 6 characters ";
        passworderror.style.color = "red";
        passwordInput.style.borderColor = "red";
        return false;
    } else {
        passworderror.textContent = "";
        passwordInput.style.borderColor = "";
        return true;
    }
}
// Validate Confirm Password
function validateConfirmPassword() {
    const confirmPassword = confirmPasswordInput.value;
    const password = passwordInput.value;
    if (!password) {
        confirmerror.textContent = "Password2 is required";
        confirmerror.style.color = "red";
        passwordInput.style.borderColor = "red";
        return false;
    } else if (confirmPassword && confirmPassword !== password) {
        confirmerror.textContent = "Passwords do not match";
        confirmerror.style.color = "red";
        confirmPasswordInput.style.borderColor = "red";
        return false;
    } else {
        confirmerror.textContent = "";
        passwordInput.style.borderColor = "";
        confirmPasswordInput.style.borderColor = "";
        return true;
    }
}
// Validate Submit
function validatesubmit() {
    //console.log("trigger");
    const usernameValid = validateUsername();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmPasswordValid = validateConfirmPassword();
    const successElement = document.getElementById("valid-submit");
    if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
        // console.log("Form submitted successfully!");
        successElement.textContent = "Form submitted successfully!";
        successElement.style.color = "green";
        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    } else {
        successElement.textContent = "";
    }
}
