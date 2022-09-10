/* JavaScript */
window.addEventListener('load', async () => {
  //decalre variables
  const username_input = document.querySelector('#username')
  const image = document.querySelector('#dog-img')
  const name_form = document.querySelector('#name-form')
  const hidden_wrapper = document.querySelector('.hidden-wrapper')
  const username_placeholder = document.querySelector('#js-username')
  const gender_placeholder = document.querySelector('#gender')
  const age_placeholder = document.querySelector('#age')
  const nationality_placeholder = document.querySelector('#nationality')

  //APIs URLs
  const dog_images_api = 'https://dog.ceo/api/breeds/image/random/'
  const gender_api = 'https://api.genderize.io?name='
  const age_api = 'https://api.agify.io/?name='
  const nationality_api = 'https://api.nationalize.io/?name='

  //fill the header image with random dog image from api
  await fetchApi(dog_images_api, 1).then((data) => {
    //fetching JSON object
    image.src = data.message
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
    username_input.classList.remove('error')
    hidden_wrapper.style.display = 'none'
  })

  //submit a form
  name_form.addEventListener('submit', async (e) => {
    e.preventDefault()

    //check if the name id empty
    let username = username_input.value
    if (isEmpty(username)) {
      username_input.classList.add('error')
      hidden_wrapper.style.display = 'block'
      return
    }

    //get user information from API
    gender = await fetchApi(gender_api, username)
    console.log(username)
    age = await fetchApi(age_api, username)
    nationality = await fetchApi(nationality_api, username)

    //fill the HTML containers with data
    username_placeholder.textContent = username
    gender_placeholder.textContent = gender.gender
    age_placeholder.textContent = age.age
    nationality_placeholder.textContent = `${nationality.country[0]['country_id']} - ${nationality.country[1]['country_id']}`
  })
})
