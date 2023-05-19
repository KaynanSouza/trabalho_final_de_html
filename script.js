const carousel = document.querySelector(".carousel"), 
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, PrevPageX, prevScrollLeft;
//quando eu clico e aarrasto as imagens se movem
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "nome" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "nome" : "block";
}

//clicar na seta
 arrowIcons.forEach(icon => {
     icon.addEventListener("click", () => {
         let firstImgWidth = firstImg.clientWidth + 400;//passar para outra imagem
         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
         setTimeout(() => showHideIcons(), 60);//atualizaçao apos 60ms
     });
 });
//movimentar as imagens ao clicar com o mouse
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft
}
//posiçao das imagens
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = e.pageX;
    showHideIcons();
}
//parra ao soltar o click
const dragStop = () => {
    isDragStart = false;
    carrousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

