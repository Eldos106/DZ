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
function moveBlock(block, parent, position = 0) {
    let parentWidth = parent.clientWidth;
    let blockWidth = block.clientWidth;

    if (position + blockWidth >= parentWidth) {
        return;
    }

    block.style.left = position + "px";

    requestAnimationFrame(() => moveBlock(block, parent, position + 2));
}

window.onload = function () {
    let smallBlock = document.querySelector(".child_block");
    let parentBlock = document.querySelector(".parent_block");

    moveBlock(smallBlock, parentBlock);
};