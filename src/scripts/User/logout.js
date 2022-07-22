export const logOut = () =>{
    const btnLogOut = document.querySelectorAll('.logout')
    const login__page = document.querySelector('.login__page')
    btnLogOut.forEach(element => {
        element.addEventListener('click', () => {
            localStorage.clear()
            login__page.style.display = "block"
            location.reload()
        })
    });
}
export const entryPage = () => {
    const find = localStorage.getItem("userdata")
    const login__page = document.querySelector('.login__page')
    if(!!find) {
        login__page.style.display = "none"
    }else {
        login__page.style.display = "block"
    }

}