var canvas;
var offset = [0,0,300,400]
window.onload = () => {
    canvas = document.getElementById("canv");
    canvas.setAttribute("viewBox", offset.join(" "));
}