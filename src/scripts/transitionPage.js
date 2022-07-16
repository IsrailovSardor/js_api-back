export const transitionPage = () => {

const item__title = document.getElementById('book')
const btn_back = document.getElementById('back__descr')
const btn__create = document.getElementById('btn__create')
const create__page = document.querySelector('.create__page')
const description__book = document.querySelector('.description__book')
const edit__page = document.querySelector('.edit__page')
const btn__add = document.querySelector('.btn__add')
const book__page = document.querySelector('.book__page')
const login__form = document.querySelector('.login__form')

item__title.addEventListener('click', (e) => {
    e.preventDefault()
    description__book.classList.add('anim_disable')
    // document.body.style.background = "#D4E1E5"
    book__page.style.display="none"

})

btn_back.addEventListener('click', (e) => {
    e.preventDefault()
    description__book.classList.remove('anim_disable')
    book__page.style.display="block"
})
btn__create.addEventListener('click', (e) => {
    e.preventDefault()
    create__page.classList.add('anim_disables')
    // document.body.style.background = "#28353e/"
    book__page.style.display="none"  
})
btn__add.addEventListener('click', (e) => {
    e.preventDefault()
    edit__page.classList.add('anim_disables')
    // document.body.style.background = "#28353e"
    description__book.style.display="none"  
})
}