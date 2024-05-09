let btnRed = document.querySelector("#btnRed");
let btnBlue = document.querySelector("#btnBlue");
let btnGreen = document.querySelector("#btnGreen");
let content = document.querySelector("#content");

btnRed.addEventListener("click", () => content.style.color = "red");
btnBlue.addEventListener("click", () => content.style.color = "blue");
btnGreen.addEventListener("click", () => content.style.color = "green");

let YouTube = document.querySelector("#YouTube")
let FaceBook = document.querySelector("#FaceBook")
let instagram = document.querySelector("#instagram")
let Scnapchat = document.querySelector("#Scnapchat")

YouTube.addEventListener("click",  () => YouTube.style.color = "red")
FaceBook.addEventListener("click", () => FaceBook.style.color = "blue")
instagram.addEventListener("mouseover",() => instagram.style.backgroundColor = "#b009e2")
Scnapchat.addEventListener("click",() => Scnapchat.style.color = "yellow" )

let image_section = document.querySelector("#image_section"); // Replace with your section's ID

image_section.addEventListener("click", function() {
  this.style.backgroundColor = "green"; // Change "green" to your desired color
});


//  let img_1 = document.querySelector("#image-section")
// img_1.addEventListener("click", () => image-section.style.backgroundColor = "green" ) 