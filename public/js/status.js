const anthony = document.querySelector('.anthony')
const miles = document.querySelector('.miles')
const none = document.querySelector('.none')

let stateObject = {
  currentUser: undefined
}

function updateUseState(user) {
  switch(user) {
    case 'anthony':
      stateObject.currentUser = user
      return
    case 'miles':
      stateObject.currentUser = user
      return
    case 'none':
      stateObject.currentUser = user
      return
    default:
  }
}

function setBackgroundColor(user) {
  switch(user) {
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
  }
}



anthony.addEventListener('click', (e) => {
  updateUseState(e.target.className)
  setBackgroundColor(e.target.className)
})

miles.addEventListener('click', (e) => {
  updateUseState(e.target.className)
  setBackgroundColor(e.target.className)
})

none.addEventListener('click', (e) => {
  updateUseState(e.target.className)
  setBackgroundColor(e.target.className)
})