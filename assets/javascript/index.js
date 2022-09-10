/* JavaScript */
window.addEventListener('load', () => {
  const username_input = document.querySelector('#username')
  const image = document.querySelector('#dog-img')
  const name_form = document.querySelector('#name-form')
  const username_placeholder = document.querySelector('#js-username')
  const gender_placeholder = document.querySelector('#gender')
  const age_placeholder = document.querySelector('#age')
  const nationality_placeholder = document.querySelector('#nationality')

  const dog_images_api = 'https://dog.ceo/api/breeds/image/random/'
  const gender_api = 'https://api.genderize.io?name='
  const age_api = 'https://api.agify.io/?name='
  const nationality_api = 'https://api.nationalize.io/?name='

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

  function isEmpty(str) {
    return !str.trim().length
  }

  //fill the header image with random dog image from api
  fetchApi(dog_images_api, 1).then((data) => {
    //fetching JSON object
    image.src = data.message
  })

  name_form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let username = username_input.value
    if (isEmpty(username)) {
      console.log('empty')
    }

    gender = await fetchApi(gender_api, username)
    console.log(username)
    age = await fetchApi(age_api, username)
    nationality = await fetchApi(nationality_api, username)

    username_placeholder.textContent = username
    gender_placeholder.textContent = gender.gender
    age_placeholder.textContent = age.age
    nationality_placeholder.textContent = `${nationality.country[0]['country_id']} - ${nationality.country[1]['country_id']}`
  })
})
