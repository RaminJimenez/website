clickBox = document.querySelector('.click')

colors = ['blue', 'red', 'green', 'purple', 'magenta', 'orange']
index = 0;
clickBox.addEventListener('click', () => {
    for (int index, index < 6, index = index + 1)
    {
        clickBox.style.background = colors[index]
    }
})
