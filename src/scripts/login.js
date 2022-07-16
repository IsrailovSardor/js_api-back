import checkIn from "./checkIn"

export const getLogin = () => {
    const loginInput = document.getElementById('login')
    const passwordInput = document.getElementById('password')
    const login__form = document.querySelector('.login__form')
    

    login__form.addEventListener('submit',(e) => {
        e.preventDefault()
        checkIn({
            username : loginInput.value,
            password : passwordInput.value
        })
            
    })
}