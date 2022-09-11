/* Sign up */

window.addEventListener('load', () => {
  const username = document.querySelector('#username')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const passowrd_confirm = document.querySelector('#password-confirm')
  const submit_btn = document.querySelector('#submit')
  const signup = document.querySelector('#signup')

  function isEmpty(str) {
    return !str.trim().length
  }

  signup.addEventListener('submit', (e) => {
    e.preventDefault()

    if (
      isEmpty(username.value) ||
      isEmpty(email.value) ||
      isEmpty(password.value) ||
      isEmpty(passowrd_confirm.value)
    ) {
      return
    }

    if (password.value != passowrd_confirm.value) {
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
