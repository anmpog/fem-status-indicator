const anthony = document.querySelector('.anthony')
const miles = document.querySelector('.miles')
const none = document.querySelector('.none')
const serverURL = 'http://localhost:3000/test'

let currentUser = undefined

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
      currentUser = data[0]
      setBackgroundColor(currentUser.user)
    })
    .catch(err => console.log('Error fetching user on page load: ', err))
}

const manualStateUpdate = (updatedUser) => {
  console.log('Updated User passed to manual update func: ', updatedUser)
  fetch(serverURL, {
      method: 'PUT',
      // mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify({ user: updatedUser }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response: ', response)
      return response.json()
    })
    .then(data => {
      console.log('Flarble: ', data)
      currentUser = data[0]
      console.log('current User: ', currentUser)
      setBackgroundColor(currentUser.user)
    })
    .catch(err => console.log('Error updating current user: ', err.message))
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
  // console.log(e.target.className)
  manualStateUpdate(e.target.className)
  setBackgroundColor(e.target.className)
})

miles.addEventListener('click', (e) => {
  // console.log(e.target.className)
  manualStateUpdate(e.target.className)
  setBackgroundColor(e.target.className)
})

none.addEventListener('click', (e) => {
  // console.log(e.target.className)
  manualStateUpdate(e.target.className)
  setBackgroundColor(e.target.className)
})