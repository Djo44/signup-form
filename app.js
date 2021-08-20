let modal = document.getElementById("myModal");
let formGroup = document.querySelectorAll(".form-group")
let body = document.querySelector(".container-fluid")

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 


function openModal() {
  modal.style.display = "block";
  body.classList.toggle("active");

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  body.classList.remove("active");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove("active");
  }
}