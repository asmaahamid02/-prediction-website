/* Login */

window.addEventListener('load', () => {
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')
  const login = document.querySelector('#login')

  function isEmpty(str) {
    return !str.trim().length
  }

  login.addEventListener('submit', (e) => {
    e.preventDefault()

    if (isEmpty(username.value) || isEmpty(password.value)) {
      return
    }

    let user = JSON.parse(window.localStorage.getItem('user'))

    if (username.value != user.username && password.value != user.password) {
      return
    }

    localStorage.clear()
    window.location.replace('./index.html')
  })
})
