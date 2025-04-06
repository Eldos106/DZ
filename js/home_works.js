const emailInput = document.querySelector('#gmail_input')
const emailBtn = document.querySelector('#gmail_button')
const emailResult = document.querySelector('#gmail_result')

const regExs =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

emailBtn.onclick = () => {
    if (regExs.test(emailInput.value)) {
        emailResult.innerText = 'OK'
        emailResult.style.color = 'green'
    }else {
        emailResult.innerText ='ERROR'
        emailResult.style.color ='red'
    }
}
const emailInput = document.querySelector('#gmail_input')
const emailBtn = document.querySelector('#gmail_button')
const emailResult = document.querySelector('#gmail_result')

const regExs =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

emailBtn.onclick = () => {
    if (regExs.test(emailInput.value)) {
        emailResult.innerText = 'OK'
        emailResult.style.color = 'green'
    }else {
        emailResult.innerText ='ERROR'
        emailResult.style.color ='red'
    }
}

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0
let positionY = 0
let direction = 'right' // Направление движения

const offWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (direction === 'right') {
        if (positionX < offWidth) {
            positionX++
        } else {
            direction = 'down'
        }
    } else if (direction === 'down') {
        if (positionY < offHeight) {
            positionY++
        } else {
            direction = 'left'
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--
        } else {
            direction = 'up'
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--
        } else {
            direction = 'right'
        }
    }

    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(moveBlock)
}

moveBlock();
