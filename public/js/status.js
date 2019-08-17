const anthony = document.querySelector('.anthony')
const miles = document.querySelector('.miles')
const none = document.querySelector('.none')
const serverURL = 'http://localhost:3000/test'



window.onload = () => {
  pageLoadSetState()
}

const pageLoadSetState = () => {
  fetch(serverURL, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => {
      setBackgroundColor(data[0].user)
    })
    .catch(err => console.log('Error fetching user on page load: ', err))
}

const manualStateUpdate = (updatedUser) => {
  fetch(serverURL, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify({ user: updatedUser }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setBackgroundColor(data.user)
    })
    .catch(err => console.error('Error manually updating user: ', err))
}

function setBackgroundColor(user) {
  switch (user) {
    case 'anthony':
      anthony.style.backgroundColor = "green"
      miles.style.backgroundColor = "#ddd"
      none.style.backgroundColor = "#ddd"
      return
    case 'miles':
      anthony.style.backgroundColor = "#ddd"
      miles.style.backgroundColor = "green"
      none.style.backgroundColor = "#ddd"
      return
    case 'none':
      anthony.style.backgroundColor = "#ddd"
      miles.style.backgroundColor = "#ddd"
      none.style.backgroundColor = "green"
      return
    default:
      anthony.style.backgroundColor = "#ddd"
      miles.style.backgroundColor = "#ddd"
      none.style.backgroundColor = "green"
      return

  }
}

anthony.addEventListener('click', (e) => {
  manualStateUpdate(e.target.className)
})

miles.addEventListener('click', (e) => {
  manualStateUpdate(e.target.className)
})

none.addEventListener('click', (e) => {
  manualStateUpdate(e.target.className)
})