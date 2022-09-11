/* Login */

window.addEventListener('load', () => {
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')
  const login = document.querySelector('#login')
  const hidden_wrapper = document.querySelector('.hidden-wrapper')
  const error_message = document.querySelector('.error-message')

  function isEmpty(str) {
    return !str.trim().length
  }

  login.addEventListener('submit', (e) => {
    e.preventDefault()

    let error = ''
    if (isEmpty(username.value) || isEmpty(password.value)) {
      error += 'fill out all the fields!'
    }

    let user = JSON.parse(window.localStorage.getItem('user'))

    if (username.value !== user.username || password.value !== user.password) {
      if (!isEmpty(error)) {
        error += '/ '
      }
      error += 'username or password is wrong, try again'
    }

    if (!isEmpty(error)) {
      error_message.textContent = error
      hidden_wrapper.style.display = 'block'
      return
    }

    window.location.replace('./index.html')
  })
})
