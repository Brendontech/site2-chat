var isDragging = false;
var startX, startY;
var startLeft, startTop;
var currentScale = 1;

document.getElementById("imagem-localizacao").addEventListener("mousedown", function (event) {
    event.preventDefault();
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    startLeft = parseFloat(this.style.left) || 0;
    startTop = parseFloat(this.style.top) || 0;
    document.body.style.cursor = "grabbing";
});

document.getElementById("imagem-localizacao").addEventListener("mouseleave", function (event) {
    if (!isDragging) {
        document.body.style.cursor = "default";
    }
});

document.getElementById("imagem-localizacao").addEventListener("mouseenter", function (event) {
    if (!isDragging) {
        document.body.style.cursor = "grab";
    }
});

document.addEventListener("mouseup", function (event) {
    isDragging = false;
    document.body.style.cursor = "grab";
});

document.addEventListener("mousemove", function (event) {
    if (isDragging) {
        var img = document.getElementById('imagem-localizacao');
        var deltaX = event.clientX - startX;
        var deltaY = event.clientY - startY;
        img.style.left = (startLeft + deltaX) + "px";
        img.style.top = (startTop + deltaY) + "px";
    }
});

document.getElementById("zoom-in").addEventListener("click", function (event) {
    event.preventDefault();
    var img = document.getElementById('imagem-localizacao');
    currentScale *= 1.1;
    img.style.width = (img.offsetWidth * 1.1) + "px";
    img.style.height = (img.offsetHeight * 1.1) + "px";
    img.style.left = parseFloat(img.style.left) * 1.1 + "px";
    img.style.top = parseFloat(img.style.top) * 1.1 + "px";
});

document.getElementById("zoom-out").addEventListener("click", function (event) {
    event.preventDefault();
    var img = document.getElementById('imagem-localizacao');
    currentScale *= 0.9;
    img.style.width = (img.offsetWidth * 0.9) + "px";
    img.style.height = (img.offsetHeight * 0.9) + "px";
    img.style.left = parseFloat(img.style.left) * 0.9 + "px";
    img.style.top = parseFloat(img.style.top) * 0.9 + "px";
});