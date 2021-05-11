/* 
1.user will click the arrow button
2. image will be change
3. paragraph text will change
4. name and title will be change
*/
const reviews = [
    {
        id: 1,
        name:'Tanya Sinclair',
        job: 'UX Designer',
        img: 'images/image-tanya.jpg',
        text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    },
    {
        id: 2,
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer ',
        img: 'images/image-john.jpg',
        text: ' “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” '
    }
]
// select items
const img = document.querySelector('.main-image');
const author = document.querySelector('.name');
const job = document.querySelector('.title');
const info = document.querySelector('.info');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}