/**
 * simple function that transform a number to overaly"Number"
 * @param {number} -num- overlay id
 * @returns overlayNumber
 */
const toOverlayId = (num) => {
  console.log(`overlay${num}`);
  return `overlay${num}`;
};
/**
 *rapresent a post containing an image and its description needed to create the
 *the innerhtml
 */
class Post {
  constructor(image, desc, id) {
    this.image = image;
    this.desc = desc;
    this.id = id;
  }
}
/* Element.addEventListener("click",()=>
{
let selectionGet=`https://jsonplaceholder.typicode.com/photos?_limit=${document.getElementById("").value}`
}) */
let promArray = [];
let numTest = 6;
let axArgument = `https://jsonplaceholder.typicode.com/photos?_limit=${numTest}`;
let finalString = "";
axios
  .get(axArgument)
  .then((response) => {
    for (let i = 0; i < numTest; i++) {
      let temp = new Post(
        response.data[i].url,
        response.data[i].title,
        response.data[i].id
      );

      promArray.push(temp);
    }
    console.log(promArray);
  }) //capsule insertion
  .then(() => {
    for (let i = 0; i < promArray.length; i++) {
      /*   <!-- caspuel -->
        <div class=" my-2 bg-white p-6 flex-col md:p-4 relative md:basis-1/3 lg:basis-1/4 lg:p-8 xl:basis-1/5 id="capsule${promArray[i].id}">
          <!-- img -->
          <div class=""> <img src="${promArray[i].image}" alt="" class="w-[100%] h-[100%]"></div>
          <!-- scritta -->
          <div class="italic font-light pt-3 md:pt-2  text-lg lg:pt-3 lg:text-xl">
            ${promArray[i].desc}
          </div>
          <!-- pin -->
           <div class="position"><img src="./img/pin.svg" alt=""></div>
        </div>*/
      finalString += `  <!-- capsule -->
        <div class="card pt-1 col-8 shadow-card col-md-4 col-lg-3 m-2   position-relative " id="capsule${promArray[i].id}">
          <img class="position-absolute top-0 start-50 translate-middle" src="./img/pin.svg" alt="">
          <img
            src="${promArray[i].image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
               ${promArray[i].desc}
            </p>
          </div>
        </div>
        
       `;
    }

    document.getElementById("capsuleSection").innerHTML = finalString;
  }) //overlay insertion
  .then(() => {
    let overlayStr = "";
    for (let i = 0; i < promArray.length; i++) {
      overlayStr += `<div id="overlay${promArray[i].id}" class="d-none w-100 h-100 position-fixed z-3 back">
      <button id="btn${promArray[i].id}" class="btn position btn-light">Close</button>
      <img src="${promArray[i].image}" alt="" class="position-overlay">
       </div>`;
    }
    document.getElementById("overlay").innerHTML = overlayStr;
  }) //click interactions with images and buttons
  .then(() => {
    const capsuleArray = document.querySelectorAll("#capsuleSection > div");
    const btnArray = document.querySelectorAll("#overlay button");
    console.log(btnArray);
    console.log(capsuleArray);

    for (let i = 1; i < promArray.length + 1; i++) {
      let btnId = `btn${i}`;
      capsuleArray[i - 1].addEventListener("click", () => {
        document.getElementById(toOverlayId(i)).classList.remove("d-none");
      });
      btnArray[i - 1].addEventListener("click", () => {
        document.getElementById(toOverlayId(i)).classList.add("d-none");
      });
    }
  });
