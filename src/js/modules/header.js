const header = () => {
    const headerBlock = document.querySelector('.header')
    const headerNav = headerBlock.querySelector('.header__navbar')

    const scrollValue = () => {
        if (window.scrollY < headerNav.clientHeight) {
            headerNav.style.top = 1 + 'rem'
            headerNav.style.opacity = 1
            headerNav.style.position = 'absolute'
            headerNav.style.background = 'transparent'
            headerNav.style.transform = 'translateY(0)'
        } else if (window.scrollY > headerNav.clientHeight && window.scrollY < headerNav.clientHeight + 100) {
            headerNav.style.top = 0
            headerNav.style.opacity = 0
            headerNav.style.transform = 'translateY(-100%)'
        } else if (window.scrollY > headerNav.clientHeight + 100 && window.scrollY < headerNav.clientHeight + 200) {
            headerNav.style.top = 0
            headerNav.style.position = 'fixed'
            headerNav.style.transform = 'translateY(-100%)'
        } else if (window.scrollY > headerNav.clientHeight + 200 && window.scrollY < headerBlock.clientHeight) {
            headerNav.style.opacity = 1
            headerNav.style.top = 0
            headerNav.style.position = 'fixed'
            headerNav.style.transform = 'translateY(-100%)'
        }else if (window.scrollY > headerBlock.clientHeight) {
            headerNav.style.top = 0
            headerNav.style.position = 'fixed'
            headerNav.style.transform = 'translateY(0)'
            headerNav.style.background = '#353743'
        }
    }

    window.addEventListener('scroll', scrollValue)
    scrollValue()
}

export default header