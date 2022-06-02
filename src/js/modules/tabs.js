const tabs = () => {
    const tabsBlock = document.querySelector('.materials')
    const tabs = tabsBlock.querySelectorAll('.materials__head')
    var blocks = tabsBlock.querySelectorAll('.materials__content')
    const materialsBlock = tabsBlock.querySelector('.materials__tabs')

    const heightChanger = () => {
        materialsBlock.style.height = materialsBlock.querySelector('.materials__content_active').clientHeight + 'px'
    }

    const newTab = (index) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('materials__head_active')
        })
        blocks.forEach((block, i) => {
            block.classList.remove('materials__content_active')
        })
        const addActiveClass = () => {
            blocks[index].classList.add('materials__content_active')
            heightChanger()
        }
        setTimeout(addActiveClass, 300)
        tabs[index].classList.add('materials__head_active')
    }
    
    heightChanger()
    window.onchange = heightChanger

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', (e) => { if (!e.target.closest('.materials__head_active')){ newTab(i) }})
    })
}

export default tabs