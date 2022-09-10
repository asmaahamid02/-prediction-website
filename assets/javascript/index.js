/* JavaScript */
window.addEventListener('load', () => {
  const username_input = document.querySelector('#username').value
  const image = document.querySelector('#dog-img')
  const username = document.querySelector('#js-username')
  const gender = document.querySelector('#gender')
  const age = document.querySelector('#age')
  const nationality = document.querySelector('#nationality')

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

  //fill the header image with random dog image from api
  fetchApi(dog_images_api, 1).then((data) => {
    //fetching JSON object
    image.src = data.message
  })
})
