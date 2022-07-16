export const getUserLocal = () => {
    const getUser = JSON.parse(localStorage.getItem('userdata'))
    const text__user = document.querySelectorAll('.text__user')
    text__user.forEach(element => {
        element.textContent = getUser.data.firstName
    });
}