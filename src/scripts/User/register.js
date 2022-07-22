import autorization from "./autorization.js"

export const getSignIn = () => {
    const loginInput = document.getElementById('loginSign')
    const passwordInput = document.getElementById('passwordSign')
    const ageInput = document.getElementById('ageSign')
    const firstName = document.getElementById('firstName')
    const passwrodTooSign = document.getElementById('passwrodTooSign')
    const signin__form = document.querySelector('.signin__form')
    const error_password = document.querySelector('.error-password')

    signin__form.addEventListener('submit', (e) => {
        if (passwrodTooSign.value === passwordInput.value) {
            e.preventDefault()
            autorization({
                username: loginInput.value,
                firstName: firstName.value,
                age: ageInput.value,
                password: passwordInput.value,
            })
            error_password.textContent = ''
            location.reload()
        }else {
            e.preventDefault()
            error_password.textContent = 'Пароли не совпадают'
            error_password.style.color = "red"
        }
    })
}