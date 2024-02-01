var screen = document.querySelectorAll(".screen")
var btn = document.querySelector(".screen button")
var allElems = document.querySelectorAll(".elem")
var playGround = document.querySelector(".playground")
var selected = ""

btn.addEventListener("click", function () {
    screen[1].style.transform = "translateY(-100%)"
})

allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
        screen[2].style.transform = "translateY(-200%)"
        selected = elem.childNodes[3].getAttribute("src")
        addImages()
    })
})

function createImage() {
    var newImg = document.createElement("img")
    newImg.setAttribute("src", selected)
    var obj = getRandom()
    newImg.style.left = obj.x + "%"
    newImg.style.top = obj.y + "%"
    newImg.style.rotate = obj.rot + "deg"
    playGround.appendChild(newImg)
    console.log("Image Created")
}
function deleteImage() {
    playGround.childNodes[1].style.display = "none"
}
function getRandom() {
    var x = Math.floor(Math.random() * 100)
    var y = Math.floor(Math.random() * 100)
    var rot = Math.floor(Math.random() * 360)
    return { x, y, rot }
}



function addImages(){
    setInterval(createImage, 1000)
    setInterval(deleteImage, 1200)
}