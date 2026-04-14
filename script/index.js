const buttons = document.querySelectorAll('.btn')

buttons.forEach((btn, index) => {
    setTimeout(() => {
        btn.classList.add('show')
    }, index * 100)
})
