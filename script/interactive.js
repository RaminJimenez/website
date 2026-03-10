clickBox = document.querySelector('.click')

colors = ['blue', 'red', 'green', 'purple', 'magenta', 'orange']
index = 0;
clickBox.addEventListener('click', () => {
    for (let index = 0; index < 6; index = index + 1)
    {
        clickBox.style.background = colors[index]
    }
    clickBox.style.color = 'white'
})
