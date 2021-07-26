
function changeImage(event) {
    const activeClass = document.querySelector(".imgcontainer").children;
    document.querySelector(".mainImg").src = (event.children[0].src)
    for (let i = 0; i < activeClass.length; i++) {
        activeClass[i].classList.remove("active")
    }
    event.classList.add("active")
}

