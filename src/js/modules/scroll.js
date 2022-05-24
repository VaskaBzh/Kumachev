const scroll = () => {
    const links = document.querySelectorAll('[href*="#"]')

    for (let link of links) {
        link.addEventListener('click', (e) => { 
            e.preventDefault()

            if (link.getAttribute('href').substr(1) != '' && link.getAttribute('href').slice(0, 1) == '#') {
                const blockID = link.getAttribute('href').substr(1)
            
                document.getElementById(blockID).scrollIntoView({behavior: 'smooth', block: 'start'})
            }
        })
    }
}

export default scroll