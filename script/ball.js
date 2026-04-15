const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const LPaddle = document.createElement('div')
document.body.appendChild(All)





let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 20
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ball
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

function moveLPaddle(){
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}
