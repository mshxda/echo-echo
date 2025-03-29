document.addEventListener("DOMContentLoaded", () => {

let isDragging = false;
  let activeElement = null;
  let startX = 0, startY = 0;

  document.querySelectorAll(".dragg").forEach((img) => {

    img.ondragstart = () => false;

    img.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDragging = true;
      activeElement = img;

      startX = e.clientX - activeElement.offsetLeft;
      startY = e.clientY - activeElement.offsetTop;

      activeElement.style.position = "absolute";
      activeElement.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging && activeElement) {
        activeElement.style.left = e.clientX - startX + "px";
        activeElement.style.top = e.clientY - startY + "px";
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      activeElement = null;
    });
  });
  const img = document.getElementById("flipper1");
img.addEventListener("click", function () {
    let currentSrc = img.getAttribute("src");
    img.src = currentSrc.includes("postcard1.png") ? "./img/postcard1-back.png" : "./img/postcard1.png";
});

const img2 = document.getElementById("flipper2");
img2.addEventListener("click", function () {
    let currentSrc = img2.getAttribute("src");
    img2.src = currentSrc.includes("postcard2.png") ? "./img/postcard2-back.png" : "./img/postcard2.png";
});

const img3 = document.getElementById("flipper3");
img3.addEventListener("click", function () {
    let currentSrc = img3.getAttribute("src");
    img3.src = currentSrc.includes("postcard3.png") ? "./img/postcard3-back.png" : "./img/postcard3.png";
});

const img4 = document.getElementById("flipper4");
img4.addEventListener("click", function () {
    let currentSrc = img4.getAttribute("src");
    img4.src = currentSrc.includes("postcard4.png") ? "./img/postcard4-back.png" : "./img/postcard4.png";
});

const img5 = document.getElementById("flipper5");
img5.addEventListener("click", function () {
    let currentSrc = img5.getAttribute("src");
    img5.src = currentSrc.includes("postcard5.png") ? "./img/postcard5-back.png" : "./img/postcard5.png";
});

const img6 = document.getElementById("flipper6");
img6.addEventListener("click", function () {
    let currentSrc = img6.getAttribute("src");
    img6.src = currentSrc.includes("postcard6.png") ? "./img/postcard6-back.png" : "./img/postcard6.png";
});

const img7 = document.getElementById("flipper7");
img7.addEventListener("click", function () {
    let currentSrc = img7.getAttribute("src");
    img7.src = currentSrc.includes("postcard7.png") ? "./img/postcard7-back.png" : "./img/postcard7.png";
});

const img8 = document.getElementById("flipper8");
img8.addEventListener("click", function () {
    let currentSrc = img8.getAttribute("src");
    img8.src = currentSrc.includes("postcard8.png") ? "./img/postcard8-back.png" : "./img/postcard8.png";
});

const img9 = document.getElementById("flipper9");
img9.addEventListener("click", function () {
    let currentSrc = img9.getAttribute("src");
    img9.src = currentSrc.includes("postcard9.png") ? "./img/postcard9-back.png" : "./img/postcard9.png";
});

const card = document.getElementById("card");
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let isFlipped = false;
let isDrawing = false;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

canvas.addEventListener("mousedown", function (e) {
    if (isFlipped) {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
});

canvas.addEventListener("mousemove", function (e) {
    if (isDrawing && isFlipped) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", function () {
    isDrawing = false;
});

canvas.addEventListener("mouseleave", function () {
    isDrawing = false;
});

card.addEventListener("click", function () {
    if (!isFlipped) {
        isFlipped = true;
        card.classList.add("flipped");
    }
});

card.addEventListener("dblclick", function () {
    if (isFlipped) {
        isFlipped = false;
        card.classList.remove("flipped");
    }
});
});

document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("card");
    const canvas = document.getElementById("drawingCanvas");

    if (!canvas) {
        console.error("Canvas not found!");
        return;
    }

    const ctx = canvas.getContext("2d");

    let isFlipped = false;
    let isDrawing = false;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvas.addEventListener("mousedown", function (e) {
        if (isFlipped) {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });

    canvas.addEventListener("mousemove", function (e) {
        if (isDrawing && isFlipped) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    canvas.addEventListener("mouseup", function () {
        isDrawing = false;
    });

    canvas.addEventListener("mouseleave", function () {
        isDrawing = false;
    });

    card.addEventListener("click", function () {
        if (!isFlipped) {
            isFlipped = true;
            card.classList.add("flipped");
        }
    });

    card.addEventListener("dblclick", function () {
        if (isFlipped) {
            isFlipped = false;
            card.classList.remove("flipped");
        }
    });

  
});


