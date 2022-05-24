const tabs = () => {
    const tabsBlock = document.querySelector('.materials')
    const tabs = tabsBlock.querySelectorAll('.materials__group')
    var blocks = tabsBlock.querySelectorAll('.materials__content')
    const materialsBlock = tabsBlock.querySelector('.materials__tabs')

    const newTab = (index) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('materials__group_active')
        })
        blocks.forEach((block, i) => {
            block.classList.remove('materials__content_active')
        })
        const addActiveClass = () => {
            blocks[index].classList.add('materials__content_active')
            materialsBlock.style.height = materialsBlock.querySelector('.materials__content_active').clientHeight + 'px'
        }
        setTimeout(addActiveClass, 300)
        tabs[index].classList.add('materials__group_active')
    }

    materialsBlock.style.height = materialsBlock.querySelector('.materials__content_active').clientHeight + 'px'

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', (e) => { if (!e.target.closest('.materials__group_active')){ newTab(i) }})
    })
}

export default tabs