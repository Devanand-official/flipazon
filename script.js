console.log("Made by Dev Anand")
var side_navbar = document.querySelector(".side-navbar")

function shownavbar() {
    side_navbar.style.left = "0%"
}

function closenavbar() {
    side_navbar.style.left = "-60%"
}
// Collection
var prodcontain = document.getElementById("product")
var sear = document.getElementById("search")
if (prodcontain && sear) {
var prodlist = prodcontain.querySelectorAll("div")

sear.addEventListener("keyup", function (event) {
    var entervalue = event.target.value.toUpperCase()
    for (i = 0; i < prodlist.length; i++) {
        var prodname = prodlist[i].querySelector("p").textContent
        if (prodname.toUpperCase().indexOf(entervalue) < 0) {
            prodlist[i].style.display = "none"
        }
        else {
            prodlist[i].style.display = "block"
        }
    }
})
}
// function go(event) {
//     event.preventDefault(); // Prevent default form submission
//     alert("Thank you for contacting us! We will get back to you soon. Happy Shopping!");
//     window.location.href = "index.html"; // Redirect to home page
// }