/* Sign up */

window.addEventListener('load', () => {
  const username = document.querySelector('#username')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const passowrd_confirm = document.querySelector('#password-confirm')
  const submit_btn = document.querySelector('#submit')
  const signup = document.querySelector('#signup')
  const hidden_wrapper = document.querySelector('.hidden-wrapper')
  const error_message = document.querySelector('.error-message')

  function isEmpty(str) {
    return !str.trim().length
  }

  signup.addEventListener('submit', (e) => {
    e.preventDefault()
    let error = ''
    if (
      isEmpty(username.value) ||
      isEmpty(email.value) ||
      isEmpty(password.value) ||
      isEmpty(passowrd_confirm.value)
    ) {
      error += 'fill out all the fields!'
    }

    if (password.value != passowrd_confirm.value) {
      if (!isEmpty(error)) {
        error += '/ '
      }
      error += 'passwords are not matching'
    }

    if (!isEmpty(error)) {
      error_message.textContent = error
      hidden_wrapper.style.display = 'block'
      return
    }
    let user = {
      username: username.value,
      password: password.value,
    }

    localStorage.clear()
    localStorage.setItem('user', JSON.stringify(user))
    window.location.replace('./login.html')
  })
})
