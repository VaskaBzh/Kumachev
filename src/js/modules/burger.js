const burger = () => {
    const openBtn = document.querySelectorAll('#burger')
    const searchBtn = document.querySelectorAll('#search')
    const modal = document.querySelector('.header__modal')

    const modalOpen = () => {
        modal.style.transform = 'translateX(0)'
    }
    const modalClose = () => {
        modal.style.transform = 'translateX(100%)'
    }

    searchBtn.forEach((btn, i) => {
        btn.addEventListener('click', modalOpen)
    })
    openBtn.forEach((btn, i) => {
        btn.addEventListener('click', modalOpen)
    })
    modal.addEventListener('click', (e) => {
        if (e.target.closest('[href*="#"]')) {
            modalClose()
        } else if (e.target.closest('[href]')) {
            location.href = e.target.getAttribute('href')
            modalClose()
        } else if (!e.target.closest('.navigation__head') || !e.target.closest('.navigation')) {
            modalClose()
        }
    })
}

export default burger