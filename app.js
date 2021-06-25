const lineOne = document.getElementById('line1');
const lineTwo = document.getElementById('line2');
const link = document.querySelector('.working-link');
const linkDiv = document.querySelector('.working-div-link');

link.addEventListener('mouseover', function() {
    linkDiv.classList.add('moving-lines')
});
link.addEventListener('mouseout', function() {
    linkDiv.classList.remove('moving-lines');
});


  
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
   if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar")
    sidebar.style.transform = 'translate(-100%)'
   } else {
     sidebar.classList.add('show-sidebar')
     sidebar.style.transform = 'translate(0)'
   }
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar")
});
