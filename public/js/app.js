
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                return messageOne.textContent = data.error
            }
            document.getElementById("message-1").classList.add('animation')
            document.getElementById("message-2").classList.add('animation')
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast      
        })
        document.getElementById("message-1").classList.remove('animation')
        document.getElementById("message-2").classList.remove('animation')
    })
})