const reviews = [
{
    id: 1,
    img: 'images/profile-pic1.jpg',
    author: 'Anna Johnson',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit at nihil velit nobis, recusandae quam eaque quaerat praesentium molestiae nesciunt minus, iste minima expedita, magni sunt vel id rerum dolores.',
    color: '#FFAAD2'
},
{
    id: 2,
    img: 'images/profile-pic2.jpg',
    author: 'Karen Molto',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit at nihil velit nobis, recusandae quam eaque quaerat praesentium molestiae nesciunt minus, iste minima, magni sunt vel id rerum dolores.',
    color: '#C8ABE8'
},
{
    id: 3,
    img: 'images/profile-pic3.jpg',
    author: 'Marc Tomson',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at nihil velit nobis, recusandae quam eaque quaerat praesentium molestiae nesciunt minus, iste minima expedita, magni sunt vel id rerum dolores.',
    color: '#86ABFF'
},
{
    id: 4,
    img: 'images/profile-pic4.jpg',
    author: 'Felix Black',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at nihil velit nobis, recusandae quam eaque quaerat praesentium molestiae nesciunt minus, iste minima expedita, magni sunt vel id rerum dolores.',
    color: '#86E8E0'
},
{
    id: 5,
    img: 'images/profile-pic5.jpg',
    author: 'Victoria Roth',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at nihil velit nobis, recusandae quam eaque quaerat praesentium molestiae nesciunt minus, iste minima expedita, magni sunt vel id rerum dolores.',
    color: '#ACFFB3'
}
];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');
const bg = document.getElementById('bg-color');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
  });
  
  function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    info.textContent = item.info;
    bg.style.backgroundColor = item.color;
  };
  
  nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });
  prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  });
  