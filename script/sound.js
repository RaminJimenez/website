buttons = document.querySelector('.buttons')
applause = document.querySelector('.applause')

btn = document.createElement('button')
btn.innerText = "applause"
btn.classList.add('btn')
btn.addEventListener('click', () => {
    applause.play()

})
buttons.appendChild(btn)

btn = document.createElement('button')
btn.innerText = "boo"
btn.classList.add('btn')
btn.addEventListener('click', () => {
    boo.play()
})
buttons.appendChild(btn)
