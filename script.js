let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let bike1 = document.getElementById("bkie-img1")
let bike2 = document.getElementById("bkie-img2")
let bike3 = document.getElementById("bkie-img3")



redBtn.addEventListener("click", () => {
    bike1.style.display = "block"
    bike2.style.display = "none"
    bike3.style.display = "none"
});

blueBtn.addEventListener("click", () => {
    bike1.style.display = "none"
    bike2.style.display = "block"
    bike3.style.display = "none"
});

blackBtn.addEventListener("click", () => {
    bike1.style.display = "none"
    bike2.style.display = "none"
    bike3.style.display = "block"
});