// catch the elements
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
    console.log(sidebar.classList)
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  sidebar.classList.remove("show-sidebar");
});
