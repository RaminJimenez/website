clickBox = document.querySelector('.click')
body = document.querySelector('body')

colors1 = ['blue', 'red', 'green', 'purple', 'magenta', 'orange']
colors2 = ['orange', 'green', 'blue', 'yellow', 'purple', 'red']
index1 = 0;
index2 = 0;
clickBox.addEventListener('click', () => {
    clickBox.style.background = colors1[index1]
    index1 = index1 + 1
    if (index1 > 6)
       index1 = 0

    clickBox.style.color = 'white'
    body.style.background = colors2[index2]
    index2 = index2 + 1
    if (index2 > 6)
        index2 = 0
})
