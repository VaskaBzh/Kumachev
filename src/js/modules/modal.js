const modal = () => {
    const wrapperMain =  document.querySelector('.main')
    const wrapperFirst =  document.querySelector('.firstModal')
    const wrapperSecond =  document.querySelector('.secondModal')
    const wrapperApplicants =  document.querySelector('.applicants')
    const wrapperThanks =  document.querySelector('.thanks')
    const wrapperDesign =  document.querySelector('.design')
    const wrapperMaster =  document.querySelector('.master')
    const wrapperGarant =  document.querySelector('.garant')
    const wrapperPrices =  document.querySelector('.prices')
    const wrapperConsultate =  document.querySelector('.consultate')
    const openApplicantsBtns = document.querySelectorAll('#applicants')
    const openDesignBtns = document.querySelectorAll('#design')
    const openConsultateBtns = document.querySelectorAll('#consultate')
    const openBtns = document.querySelectorAll('#order')
    const openPricesBtns = document.querySelectorAll('#prices')
    const openGarantBtns = document.querySelectorAll('#garant')
    const openHeaderBtns = document.querySelectorAll('.header__button')
    const openMasterBtns = document.querySelectorAll('#master')

    const modalUsingMain = () => {
        wrapperMain.classList.toggle('active')
    }
    const modalUsingFirst = () => {
        wrapperFirst.classList.toggle('active')
    }
    const modalUsingConsultate = () => {
        wrapperConsultate.classList.toggle('active')
    }
    const modalUsingSecond = () => {
        wrapperSecond.classList.toggle('active')
    }
    const modalUsingMaster = () => {
        wrapperMaster.classList.toggle('active')
    }
    const modalUsingThanks = () => {
        wrapperThanks.classList.toggle('active')
    }
    const modalUsingApplicants = () => {
        wrapperApplicants.classList.toggle('active')
    }
    const modalUsingDesign = () => {
        wrapperDesign.classList.toggle('active')
    }
    const modalUsingGarant = () => {
        wrapperGarant.classList.toggle('active')
    }
    const modalUsingPrices = () => {
        wrapperPrices.classList.toggle('active')
    }

    openDesignBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingDesign)
    })
    openConsultateBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingConsultate)
    })
    openPricesBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingPrices)
    })
    openGarantBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingGarant)
    })
    openBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingMain)
    })
    openApplicantsBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingApplicants)
    })
    openHeaderBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingMain)
    })
    openMasterBtns.forEach((btn, i) => {
        btn.addEventListener('click', modalUsingMaster)
    })

    wrapperMain.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingMain()
        } else if (e.target.closest('#firstModal')) {
            modalUsingFirst()
        } else if (e.target.closest('#secondModal')) {
            modalUsingSecond()
        }
    })
    wrapperConsultate.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingConsultate()
        }
    })
    wrapperPrices.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingPrices()
        }
    })
    wrapperMaster.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingMaster()
        }
    })
    wrapperGarant.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingGarant()
        }
    })
    wrapperDesign.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingDesign()
        }
    })
    wrapperFirst.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingFirst()
        }
    })
    wrapperApplicants.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingApplicants()
        }
    })
    wrapperSecond.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingSecond()
        }
    })
    wrapperThanks.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            modalUsingThanks()
        }
    })
}

export default modal