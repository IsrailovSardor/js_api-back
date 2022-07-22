export const modeLogin = () => {
    const btnSign = document.querySelector('.modeSign')
    const btnLogin = document.querySelector('.modeLogin')

    const login__form = document.querySelector('.login__form')
    const signin__form = document.querySelector('.signin__form')

    btnSign.addEventListener('click', () => {
        login__form.style.display = "none"
        signin__form.style.display = "flex"
    })
    btnLogin.addEventListener('click', () => {
        login__form.style.display = "flex"
        signin__form.style.display = "none"
    })
}