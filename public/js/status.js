const anthony = document.querySelector('.anthony')
const miles = document.querySelector('.miles')
const none = document.querySelector('.none')



const manualStateUpdate = (updatedUser) => {
  fetch('/manual-update', {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify({
        newUser: updatedUser
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setBackgroundColor(data.newUser)
    })
    .catch(err => console.error('Error manually updating user: ', err))
}

function setBackgroundColor(user) {
  switch (user) {
    case 'anthony':
      anthony.style.backgroundColor = "#ffe66d"
      miles.style.backgroundColor = "#ddd"
      none.style.backgroundColor = "#ddd"
      return
    case 'miles':
      anthony.style.backgroundColor = "#ddd"
      miles.style.backgroundColor = "#ffe66d"
      none.style.backgroundColor = "#ddd"
      return
    case 'none':
      anthony.style.backgroundColor = "#ddd"
      miles.style.backgroundColor = "#ddd"
      none.style.backgroundColor = "#ffe66d"
      return
    default:
      anthony.style.backgroundColor = "#ddd"
      miles.style.backgroundColor = "#ddd"
      none.style.backgroundColor = "#ffe66d"
      return
  }
}

window.onload = () => {
  fetch('/page-load', {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin'
    })
    .then(response =>
      response.json())
    .then(data => {
      setBackgroundColor(data.currentUser)
    })
    .catch(err => console.log('Error fetching user on page load: ', err))
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