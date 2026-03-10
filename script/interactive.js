clickBox = document.querySelector('.click')

colors = ['blue', 'red', 'green', 'purple', 'magenta', 'orange']
index = 0;
clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index > 6)
       index = 0

    clickBox.style.color = 'white'
})
