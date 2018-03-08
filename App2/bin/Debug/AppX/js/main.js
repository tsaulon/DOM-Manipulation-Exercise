//DEMO 1
var firstHeader = document.querySelector("#firstHeader");  //SELECT
var isBlue = false;

setInterval(function () { //MAINPULATE

    firstHeader.style.background = (isBlue) ? "white" : "#3498db";
    isBlue = !isBlue;
}, 1000)

//DEMO 2
//select <p> tags
var first = document.querySelector("#first");
var second = document.getElementsByClassName("special")[1];
var third = document.getElementsByTagName("p")[2];
var fourth = document.querySelector("#last");

var showElement = document.querySelector("#showElement");

showElement.innerHTML = fourth.innerHTML;

//DEMO 3

var tag = document.getElementById("highlight"); //SELECT

//MANIPULATE
function toggleHighlight()
{
    tag.classList.toggle("some-class");
}
