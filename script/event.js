clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dblclick')
body = document.querySelector('body')

colors1 = ['blue', 'green', 'purple', 'red']
colors2 = ['orange', 'red', 'blue', 'violet']
index = 0
index2 = 0

clickBox.addEventListener('click', () => {
    clickBox.style.background = colors1[index]
    index = index + 1
    if (index > 4)
       index = 0

    clickBox.style.color = 'white'
})

spinBox.addEventListener('click', () => {
    spinBox.classList.toggle('start')
})

x = 0
y = 0

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        x = x + 10
    }
    if (event.key == 'ArrowUp') {
        y = y - 10
    }
    if (event.key == 'ArrowDown') {
        y = y + 10
    }
    if (event.key == 'ArrowLeft') {
        x = x - 10
    }
    moveBox.style.transform = `translate(${x}px, ${y}px)`
})

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.height = "200px"
    hoverBox.style.width = "300px"
})

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.height = "60px"
    hoverBox.style.width = "250px"
})

dblClickBox.addEventListener('mouseclick', () => {
    dblClickBox.classList.toggle("circlemove");
})
