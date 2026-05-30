let menu = document.getElementById("menu");
let showList = document.getElementById("list-show");
menu.addEventListener("click", () => {
    menu.style.color =
        showList.classList.toggle("show") ? menu.style.color = "white" : menu.style.color = "black";
});