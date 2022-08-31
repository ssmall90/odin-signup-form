const passwordField = document.querySelector("#password")
const confirmPasswordField = document.querySelector("#confirmPassword")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const phoneNumber = document.querySelector("#phoneNumber")
const errorMessage = document.querySelector(".errorMessage")

const inputs = [email, phoneNumber, lastName, firstName, confirmPasswordField, passwordField];

inputs.forEach((item) => {
    item.addEventListener('focusin', () => {
        errorMessage.textContent = "";
        item.classList.remove("error");
        if(item == passwordField || item == confirmPasswordField){
            passwordField.classList.remove("error")
            confirmPasswordField.classList.remove("error")
        }
    })
})

const form = document.querySelector("form")
form.addEventListener("submit", submit)

const submit = (e) => {
    e.preventDefault();
    if( passwordField.value !== confirmPasswordField.value){
        passwordField.classList.add("error")
        confirmPasswordField.classList.add("error")
        errorMessage.textContent = "Passwords don't match"
        return
    }
    

}

