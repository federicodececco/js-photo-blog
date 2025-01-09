let promArray = []
/**
 *rapresent a post containing an image and its description needed to create the
 *the innerhtml
 */
class Post {
  constructor(image, desc) {
    this.image = image
    this.desc = desc
  }
}
/* Element.addEventListener("click",()=>
{
let selectionGet=`https://jsonplaceholder.typicode.com/photos?_limit=${document.getElementById("").value}`
}) */

let finalstring = ''
axios
  .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(response => {
    for (let i = 0; i < 6; i++) {
      let temp = new Post(response.data[i].url, response.data[i].title)

      promArray.push(temp)
    }
  })
  .then(() => {
    for (let i = 0; i < 6; i++) {
      finalstring += ` <!-- caspuel -->
        <div class=" my-2 bg-white p-6 flex-col relative md:basis-1/3 lg:basis-1/4">
          <!-- img -->
          <div class=""> <img src="${promArray[i].image}" alt="" class="w-[100%] h-[100%]"></div>
          <!-- scritta -->
          <div class="italic font-light pt-3">
            ${promArray[i].desc}
          </div>
          <!-- pin -->
           <div class="position"><img src="./img/pin.svg" alt=""></div>
        </div>`
    }
    console.log(promArray)
    document.getElementById('capsuleSection').innerHTML = finalstring
  })
