
console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const weatherSearch = document.querySelector('input')
const messageOne = document.getElementById('message-1')
const messageTwo = document.getElementById('message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    weatherSearchQuery = weatherSearch.value

    messageOne.textContent = " loading..."
    messageTwo.textContent = ""

    if (weatherSearchQuery != null) {
        fetch('http://localhost:3000/weather?address=' + weatherSearchQuery).then((response) => {
            response.json().then((data = {}) => {
                if (data.error) {
                    messageOne.textContent = weatherSearchQuery
                    messageTwo.textContent = data.error
                }
                else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.response

                }
            })
        })
    }

})