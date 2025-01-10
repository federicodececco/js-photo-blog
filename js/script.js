/**
 * simple function that transform a number to overaly"Number"
 * @param {number} -num- overlay id
 * @returns overlayNumber
 */
const toOverlayId = num => {
  console.log(`overlay${num}`)
  return `overlay${num}`
}
/**
 *rapresent a post containing an image and its description needed to create the
 *the innerhtml
 */
class Post {
  constructor(image, desc, id) {
    this.image = image
    this.desc = desc
    this.id = id
  }
}
/* Element.addEventListener("click",()=>
{
let selectionGet=`https://jsonplaceholder.typicode.com/photos?_limit=${document.getElementById("").value}`
}) */
let promArray = []
let numTest = 6
let axArgument = `https://jsonplaceholder.typicode.com/photos?_limit=${numTest}`
let finalString = ''
axios
  .get(axArgument)
  .then(response => {
    for (let i = 0; i < numTest; i++) {
      let temp = new Post(
        response.data[i].url,
        response.data[i].title,
        response.data[i].id,
      )

      promArray.push(temp)
    }
    console.log(promArray)
  }) //capsule insertion
  .then(() => {
    for (let i = 0; i < promArray.length; i++) {
      finalString += ` <!-- caspuel -->
        <div class=" my-2 bg-white p-6 flex-col relative md:basis-1/3 lg:basis-1/4 id="capsule${promArray[i].id}">
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

    document.getElementById('capsuleSection').innerHTML = finalString
  }) //overlay insertion
  .then(() => {
    let overlayStr = ''
    for (let i = 0; i < promArray.length; i++) {
      overlayStr += `<div id="overlay${promArray[i].id}" class="hidden fixed w-full h-screen z-[100] back">
      <button id="btn${promArray[i].id}" class="absolute position py-2 px-5 rounded-lg text-xl border-3 border-stone-500">Close</button>
      <img src="${promArray[i].image}" alt="" class="position-overlay">
       </div>`
    }
    document.getElementById('overlay').innerHTML = overlayStr
  }) //click interactions with images and buttons
  .then(() => {
    const capsuleArray = document.querySelectorAll('#capsuleSection > div')
    const btnArray = document.querySelectorAll('#overlay button')
    console.log(btnArray)
    console.log(capsuleArray)

    for (let i = 1; i < promArray.length + 1; i++) {
      let btnId = `btn${i}`
      capsuleArray[i - 1].addEventListener('click', () => {
        document.getElementById(toOverlayId(i)).classList.remove('hidden')
      })
      btnArray[i - 1].addEventListener('click', () => {
        document.getElementById(toOverlayId(i)).classList.add('hidden')
      })
    }
  })
