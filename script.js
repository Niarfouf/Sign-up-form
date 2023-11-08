let password1 = document.querySelector("#password1")
let password2 = document.querySelector("#password2")
const passwordmessage = document.querySelector("#correct-password")
const form = document.querySelector("form")
function test(password1, password2) {
    if (password1 === password2) {
        return true
    } else {
        return false
    }
    
}

password2.addEventListener("input", e => {
    if (!test(password1.value, password2.value)) {
        password1.classList.remove("correct")
        password1.classList.add("error")
        password2.classList.remove("correct")
        password2.classList.add("error")
        passwordmessage.classList.add("password-incorrect")
    } else {
        password1.classList.add("correct")
        password1.classList.remove("error")
        password2.classList.add("correct")
        password2.classList.remove("error")
        passwordmessage.classList.remove("password-incorrect")
        
    }
})
const button = document.querySelector("button")
form.addEventListener("submit", (event) => {
    if (!test(password1.value, password2.value)) {
        event.preventDefault()
    }
})