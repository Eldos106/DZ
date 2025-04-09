const showModal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal_close')

const openModal = () => {
    showModal.style.display = "block"
    document.body.style.overflow = 'hidden'
}



const scrollUp = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        openModal()
        window.removeEventListener('scroll', scrollUp)
    }
}

const closeModal = () => {
    showModal.style.display = 'none'
}

window.addEventListener('scroll', scrollUp)
modalClose.onclick = () => closeModal()