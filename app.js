const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

document.addEventListener('DOMContentLoaded', function(){
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("hide-sidebar");
});

toggleBtn.addEventListener('click', function () {
   if(sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("hide-sidebar");
   } else {
     sidebar.classList.add('show-sidebar');
     sidebar.classList.remove('hide-sidebar')

   }
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  sidebar.classList.add('hide-sidebar');
});
