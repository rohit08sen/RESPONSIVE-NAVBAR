const toggleBtn= document.querySelector('.toggle-btn');
const dropdown = document.querySelector('.dropdown');
toggleBtn.onclick=function(){
    dropdown.classList.toggle('open')
    document.body.classList.toggle("menu-open"); 
}


document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !toggleButton.contains(event.target)) {
      dropdown.classList.remove("open");
      document.body.classList.remove("menu-open"); // Remove the class from the body
    }
  });