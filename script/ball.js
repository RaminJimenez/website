const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const LPaddle = document.createElement('div')
document.body.appendChild(All)





let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1



function moveBall(){

}

let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 *

function createPaddle(){}
wKey = false
sKey = false
document.addEventListener('keydown',(event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if event.key == 's' {
        sKey = true
    }
})

document.addEventLister('keyup', (event) => {
    if (event.key == 'w'){
        wKey = false
    }
    if (event.key) == 's' {
        sKey = false
    }
})
