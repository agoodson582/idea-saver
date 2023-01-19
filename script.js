const form = document.getElementsByTagName('form')[0]
const input = document.getElementById('item')
const ul = document.getElementsByTagName('ul')[0]
const button = document.getElementById('clear-list')

let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
data.forEach(item => addListItem(item))

function addListItem(text) {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', e => {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    addListItem(input.value)
    input.value = ''
})

button.addEventListener('click', () => {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})