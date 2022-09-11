/* JavaScript */
window.addEventListener('load', async () => {
  //decalre variables
  const username_input = document.querySelector('#username')
  const image = document.querySelector('#dog-img')
  const name_form = document.querySelector('#name-form')
  const hidden_wrapper = document.querySelector('.hidden-wrapper')
  const user_data = document.querySelector('#user-data')
  const username_placeholder = document.querySelector('#js-username')
  const gender_placeholder = document.querySelector('#gender')
  const age_placeholder = document.querySelector('#age')
  const nationality_placeholder = document.querySelector('#nationality')
  const header_title = document.querySelector('#header-title')
  const bored_btn = document.querySelector('#bored-btn')
  const activity = document.querySelector('#activity')
  const target = document.querySelector('#target')

  //APIs URLs
  const dog_images_api = 'https://dog.ceo/api/breeds/image/random/'
  const gender_api = 'https://api.genderize.io?name='
  const age_api = 'https://api.agify.io/?name='
  const nationality_api = 'https://api.nationalize.io/?name='

  const rand_images_num = Math.floor(Math.random() * 30)
  const rand_img_index = Math.floor(Math.random() * rand_images_num)

  //fetch ip address from api using API
  axios
    .get('https://api.ipify.org/?format=json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then(
      (result) =>
        (header_title.textContent = `Let's Start - Your IP: ${result.data.ip}`)
    )
    .catch((error) => console.log(error))
  //fill the header image with random dog image from api
  await fetchApi(dog_images_api, rand_images_num).then((data) => {
    //fetching JSON object
    image.src = data.message[rand_img_index]
  })

  function isEmpty(str) {
    return !str.trim().length
  }

  //function to fetch certain api and return back a Promise data
  async function fetchApi(url, parameter) {
    try {
      //fetch api url --- await is used to wait for the Promise
      let result = await fetch(url + parameter)
      //parse promise data into JSON object
      let data = await result.json()

      return data
    } catch (error) {
      console.log(error)
    }
  }

  //remove error mwssage and border upon typing
  username_input.addEventListener('input', () => {
    if (isEmpty(username_input.value)) {
      user_data.style.display = 'none'
    }
    username_input.classList.remove('error')
    hidden_wrapper.style.display = 'none'
  })

  //submit a form
  name_form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let username = username_input.value
    //check if the name id empty
    if (isEmpty(username)) {
      username_input.classList.add('error')
      hidden_wrapper.style.display = 'block'
      return
    }

    //get user information from API
    let gender = await fetchApi(gender_api, username)
    let age = await fetchApi(age_api, username)
    let nationality = await fetchApi(nationality_api, username)

    //fill the HTML containers with data
    username_placeholder.textContent = username
    gender_placeholder.textContent = gender.gender
    age_placeholder.textContent = age.age
    nationality_placeholder.textContent = `${nationality.country[0]['country_id']} - ${nationality.country[1]['country_id']}`

    user_data.style.display = 'block'
  })

  bored_btn.addEventListener('click', () => {
    axios
      .get('https://www.boredapi.com/api/activity', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(
        (result) => {
          activity.textContent = `${result.data.activity}`
          target.textContent = `${result.data.type}`
        }
        // console.log(result.data)
      )
      .catch((error) => console.log(error))
  })
})
