const phoneInput = document.querySelector('#phone_input')
const phoneBtn = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneBtn.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'ERROR'
        phoneResult.style.color = 'red'
    }
}

const block = document.querySelectorAll(".tab_content_block")
const tabItems = document.querySelector(".tab_content_items")
const tabItem = document.querySelectorAll(".tab_content_item")
let currentI = 0

const hideTabContent = () => {
    block.forEach( item => {
        item.style.display = "none"
    })
    tabItem.forEach( item => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTadContent = (i = 0) => {
    block[i].style.display = 'block'
    tabItem[i].classList.add('tab_content_item_active')
    currentI = i
}
hideTabContent()
showTadContent()

tabItems.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItem.forEach((item,i) => {
            if (event.target === item) {
                hideTabContent()
                showTadContent(i)
            }
        })
    }
}

const showSlide = () => {
    setInterval(() => {
        currentI++
        if (currentI > block.length - 1) {
            currentI = 0
        }
        hideTabContent()
        showTadContent(currentI)
    },3000)
}
showSlide()
