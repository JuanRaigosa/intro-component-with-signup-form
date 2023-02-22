const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const emailAddress = document.querySelector("#email");
const password = document.querySelector("#password");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const button = document.querySelector("#submit");

button.addEventListener("click",(event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, "first name cannot be empty");
    validateEmpty(lastName.value, lastName, lastNameError, "last name cannot be empty");
    validateEmail(emailAddress.value, emailAddress, emailError);
    validateEmpty(password.value, password, passwordError, "password cannot be empty");
});
function validateEmail(valueInput, divInput,divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(regExp.test(valueInput)==true){
        hideError(divInput, divError)

    }else{
        showError(divInput,divError,'looks like this is not an email')

    }
}

function validateEmpty(valueInput, divInput,divError,error){
    if(valueInput == 0){
        showError(divInput, divError, error);
    } else {
        hideError(divInput, divError);
    }
};

function showError(divInput, divError,error){
    divInput.style.border = "1px solid red";
    divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="icon-error">
    <p class="error">${error} </p>`;
};

function hideError(divInput, divError){
    divInput.style.border = "1px solid hsl(246, 25%, 77%)";
    divError.innerHTML = ``;
};