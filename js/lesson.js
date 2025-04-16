const phoneInput = document.querySelector('#phone_input')
const phoneBtn = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')
const modal = document.querySelector('.modal');

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


// CONVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#eur')

const converter = async (element, targetElement, targetElement2) => {
    const response = await fetch('../data/converter.json')
    const data = response.json()

    switch (element.id) {
        case 'som':
            targetElement.value = (element.value / data.usd).toFixed(2)
            targetElement2.value = (element.value / data.eur).toFixed(2)
            break
        case 'usd':
            targetElement.value = (element.value * data.usd).toFixed(2)
            targetElement2.value = (element.value * data.usd / data.eur).toFixed(2)
            break
        case 'eur':
            targetElement.value = (element.value * data.eur).toFixed(2)
            targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
            break
    }

    if (element.value === '') {
        targetElement.value = ''
        targetElement2.value = ''
    }

}


converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)
