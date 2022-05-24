const slider = (block, slide, arrows) => {
    const sliderBlock = document.querySelector(block)
    const slides = sliderBlock.querySelectorAll('.slide')
    const timeInterval = 3500

    let currentSlide = 0
    let interval 

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, slide + '_active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, slide + '_active')
    }

    const startSlide = (timer = 2000) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        prevSlide(slides, currentSlide, slide + '_active')

        if (arrows == 'arrows') {
            if (!e.target.closest('.about__arrow')) {
                return
            }
        }

        prevSlide(slides, currentSlide, slide + '_active')

        if (e.target.closest('#arrow-right')) {
            currentSlide++
            stopSlide()
            startSlide(timeInterval)
        } else if (e.target.closest('#arrow-left')) {
            currentSlide--
            stopSlide()
            startSlide(timeInterval)
        } else if (e.target.closest('.header__message')) {
            location.href = 'https://wa.me/+79034607702'
        } else if (e.target.closest('#telephone')) {
            location.href = 'tel:+79896261799'
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, slide + '_active')

    })

    // sliderBlock.addEventListener('mouseenter', (e) => {
    //     if (e.target.matches('.header__slide_active')) {
    //         stopSlide()
    //     }
    // }, true)

    // sliderBlock.addEventListener('mouseleave', (e) => {
    //     if (e.target.matches('.header__slide_active')) {
    //         startSlide(timeInterval)
    //     }
    // }, true)

    startSlide(timeInterval)
}

export default slider