function validate(user) {
  const validValues = ['anthony', 'miles', 'none']
  
  if (!validValues.includes(user.toLowerCase()) || !user) {
    return 'none'
  }
  
  return user.toLowerCase()
}

module.exports = validate