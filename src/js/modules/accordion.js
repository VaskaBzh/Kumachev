const accordion = () => {
    const accordion = document.querySelector('.faq__accordion')
    const accordionItems = accordion.querySelectorAll('.faq__tab')
    const accordionText = accordion.querySelectorAll('.faq__tab')

    accordionItems.forEach(function (item, i) {
        item.addEventListener('click', function () {
            if (item.classList.contains('faq__tab_active')) {
                item.classList.remove('faq__tab_active')
            } else {
                item.classList.add('faq__tab_active')
            }
        })
    })

}

export default accordion