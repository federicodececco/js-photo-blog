axios
  .get('https://jsonplaceholder.typicode.com/photos?_limit=1')
  .then(response => {
    console.log(response.data[0].title)
  })
  