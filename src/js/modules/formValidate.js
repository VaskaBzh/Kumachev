const validate = () => {
    const wrapperThanks =  document.querySelector('.thanks')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const forms = document.querySelectorAll('.form')
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    window.addEventListener("DOMContentLoaded", () => {
        [].forEach.call( document.querySelectorAll('[type="tel"]'), (input) => {
            let keyCode
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode)
                let pos = this.selectionStart
                if (pos < 3) event.preventDefault()
                let matrix = "+7 (___) ___-__-__"
                let i = 0
                let def = matrix.replace(/\D/g, "")
                let val = this.value.replace(/\D/g, "")
                let new_value = matrix.replace(/[_\d]/g, (a) => {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_")
                if (i != -1) {
                    i < 5 && (i = 3)
                    new_value = new_value.slice(0, i)
                }
                let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    (a) => {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&")
                reg = new RegExp("^" + reg + "$")
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }
    
            input.addEventListener("input", mask, false)
            input.addEventListener("focus", mask, false)
            input.addEventListener("blur", mask, false)
            input.addEventListener("keydown", mask, false)
        })
    })

    forms.forEach((form, i) => {
        const inputItems = form.querySelectorAll('input[name="name"]')
        inputItems.forEach(input => {
            input.addEventListener('input', e => {
                e.target.value = e.target.value.replace(/[^а-яё\s]+/gi, '')
            })
        })

        form.addEventListener('submit', formSend)

        async function formSend(e) {
            e.preventDefault()  
            
            let error = formValidate(form)

            let formData = new FormData(form)

            if (error === 0) {
                statusBlock.classList.add('modal__wait')
                statusBlock.textContent = loadText
                form.append(statusBlock)

                let response = await fetch('../files/sendmail.php', {
                    method: 'POST', 
                    body: formData,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                if (response.ok) {
                    let result = await response.json()
                    alert(result.message)
                    form.reset()
                    statusBlock.textContent = ''
                    wrapperThanks.classList.toggle('active')
                } else {
                    alert('ошибка')
                    statusBlock.textContent = ''
                }
            } else {
                alert('Корректно заполните форму')
            }
        }

        const formValidate = function (form) {
            let error = 0
            let formReq = form.querySelectorAll('._req')

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index]
                formRemoveError(input)

                if (input.value === '') {
                    formAddError(input)
                    error++
                } else if (input.getAttribute("type") === "email" && reg.test(input.value) == false) {
                    formAddError(input)
                    error++
                }
            }
            return error
        }

        function formAddError(input) {
            input.parentElement.classList.add('_error')
            input.classList.add('_error')
        }
        function formRemoveError(input) {
            input.parentElement.classList.remove('_error')
            input.classList.remove('_error')
        }
    })
}

export default validate