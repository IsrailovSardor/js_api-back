export const transitionPage = () => {

    const btn_backhome = document.getElementById('back__descr')
    const btn__create = document.getElementById('btn__create')
    const create__page = document.querySelector('.create__page')
    const description__book = document.querySelector('.description__book')
    const book__page = document.querySelector('.book__page') 
    const edit__page = document.querySelector('.edit__page')
    const back__addPage = document.querySelector('.btn__add')
    const back_bookPage = document.getElementById('create_btn')
    const edit_bookPage = document.getElementById('edit_btn')

    btn__create.addEventListener('click', (e) => {
        e.preventDefault()
        create__page.style.display = "block"
        book__page.style.display = "none"
    })

    back__addPage.addEventListener('click', (e) => {
        e.preventDefault()
        description__book.style.display = "none"
        edit__page.style.display = "block"
    })

    back_bookPage.addEventListener('click', (e) =>{
        e.preventDefault()
        create__page.style.display = 'none'
        book__page.style.display = "block"
    })

    edit_bookPage.addEventListener('click', (e) => {
        e.preventDefault()
        edit__page.style.display = 'none'
        description__book.style.display = "block"
    })
    
    btn_backhome.addEventListener('click', (e) => {
        e.preventDefault()
        description__book.classList.remove('anim_disable')
        book__page.style.display = "block"
    })
    
}