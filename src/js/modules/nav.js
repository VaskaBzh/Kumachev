const nav = () => {
    const navChanger = () => {
        if (window.innerWidth <= 720) {
            const navBlocks = document.querySelectorAll('.navigation')
    
            navBlocks.forEach((block, i) => {
                const navHeads = block.querySelectorAll('.navigation__head')
                const navLists = block.querySelectorAll('.navigation__block')
    
                navHeads.forEach((head, i) => {
                    if (i < 1) {
                        head.querySelector('img').style = 'transform: rotate(180deg)'
                        head.addEventListener('click', (e) => {
                            e.preventDefault()
                            if (head.querySelector('img').getAttribute('style') == "transform: rotate(180deg);") {
                                    navLists[i].style.display = 'flex'
                                    head.querySelector('img').style = 'transform: rotate(0)'
                            } else {
                                    navLists[i].style.display = 'none'
                                    head.querySelector('img').style = 'transform: rotate(180deg)'
                            }
                        })
                    } else if (i > 3) {
                        head.querySelector('img').style = 'transform: rotate(180deg)'
                        head.addEventListener('click', (e) => {
                            e.preventDefault()
                            if (head.querySelector('img').getAttribute('style') == "transform: rotate(180deg);") {
                                    navLists[1].style.display = 'flex'
                                    head.querySelector('img').style = 'transform: rotate(0)'
                            } else {
                                    navLists[1].style.display = 'none'
                                    head.querySelector('img').style = 'transform: rotate(180deg)'
                            }
                        })
                    }
                })
            })
        }
    }

    window.onchange = () => {
        navChanger()
    }
    navChanger()
}

export default nav