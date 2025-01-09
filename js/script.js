let promArray = []
class post {
  constructor(image, desc) {
    this.image = image
    this.desc = desc
  }
}
let wish = axios
  .get('https://jsonplaceholder.typicode.com/photos?_limit=2')
  .then(response => {
    for (let i = 0; i < 2; i++) {
      let temp = new post(response.data[i].url,response.data[i].title)
      
      promArray.push(temp)
    }

    console.log(promArray)
  })
let finalstring = ""
wish.then(() => {
  for (let i = 0; i < 2; i++) {
    finalstring+=` <!-- caspuel -->
        <div class=" my-2 bg-white p-6 flex-col relative md:basis-1/3 lg:basis-1/4">
          <!-- img -->
          <div class=""> <img src="${promArray[i].image}" alt=""></div>
          <!-- scritta -->
          <div class="italic font-light pt-3">
            ${promArray[i].desc}
          </div>
          <!-- pin -->
           <div class="position"><img src="./img/pin.svg" alt=""></div>
        </div>`
  }
})
