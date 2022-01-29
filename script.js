let inputValue = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector(".container");
let shownColorsInform = document.querySelector(".colors-inform");
let choosenCol = document.querySelector(".choosen-col span");
let normalCol = document.querySelector(".Normal-col span");
let hexaCol = document.querySelector(".hexa-col span");
let rgbCol = document.querySelector(".rgb-col span");
let allLi = document.querySelectorAll(".options ul li");
let refresh = document.querySelector(".refresh");
let body = document.querySelector("body");
//-----------------code for li fields
// console.log(allLi[0]);
function liFields() {
  allLi[0].onclick = function () {
    inputValue.value = allLi[0].innerHTML;
  };
  allLi[1].onclick = function () {
    inputValue.value = allLi[1].innerHTML;
  };
  allLi[2].onclick = function () {
    inputValue.value = allLi[2].innerHTML;
  };

  allLi[3].onclick = function () {
    inputValue.value = allLi[3].innerHTML;
  };
  allLi[4].onclick = function () {
    inputValue.value = allLi[4].innerHTML;
  };
  allLi[5].onclick = function () {
    inputValue.value = allLi[5].innerHTML;
  };
}
liFields();
//-----------------code for input fields

button.addEventListener("click", function () {
  if (inputValue.value == "Red" || inputValue.value == "red") {
    function myCondition() {
      container.style = "background-color:red";
      //   document.querySelector(".container").style.backgroundColor="red";
      shownColorsInform.style = "display:block";
      choosenCol.innerHTML = inputValue.value;
      normalCol.innerHTML = inputValue.value;
      hexaCol.innerHTML = "#ff0000";
      rgbCol.innerHTML = "Rgb(255,0,0)";
      body.style = "background-color:rgba(255,0,0,0.5)";
    }
    myCondition();
  } else if (inputValue.value == "orange" || inputValue.value == "Orange") {
    function myCondition() {
      container.style = "background-color:orange";
      shownColorsInform.style = "display:block";
      choosenCol.innerHTML = inputValue.value;
      normalCol.innerHTML = inputValue.value;
      hexaCol.innerHTML = "#ffa500";
      rgbCol.innerHTML = "Rgb(255,165,0)";
      body.style = "background-color:rgba(255,165,0,0.5)";
    }
    myCondition();
  } else if (inputValue.value == "green" || inputValue.value == "Green") {
    function myCondition() {
      container.style = "background-color:green";
      shownColorsInform.style = "display:block";
      choosenCol.innerHTML = inputValue.value;
      normalCol.innerHTML = inputValue.value;
      hexaCol.innerHTML = "#00ff00";
      rgbCol.innerHTML = "Rgb(0,255,0)";
      body.style = "background-color:rgba(0,255,0,0.5)";
    }
    myCondition();
  } else if (inputValue.value == "yellow" || inputValue.value == "Yellow") {
    function myCondition() {
      container.style = "background-color:yellow";
      shownColorsInform.style = "display:block";
      choosenCol.innerHTML = inputValue.value;
      normalCol.innerHTML = inputValue.value;
      hexaCol.innerHTML = "#ffff00";
      rgbCol.innerHTML = "Rgb(255,255,0)";
      body.style = "background-color:rgba(255,255,0,0.5)";
    }
    myCondition();
  } else if (inputValue.value == "hotpink" || inputValue.value == "Hotpink") {
    function myCondition() {
      container.style = "background-color:hotpink";
      shownColorsInform.style = "display:block";
      choosenCol.innerHTML = inputValue.value;
      normalCol.innerHTML = inputValue.value;
      hexaCol.innerHTML = "#ff69b4";
      rgbCol.innerHTML = "Rgb(255,105,180)";
      body.style = "background-color:rgba(255,105,180,0.5)";
    }
    myCondition();
  } else if (inputValue.value == "tomato" || inputValue.value == "Tomato") {
    function myCondition() {
      container.style = "background-color:tomato";
      shownColorsInform.style = "display:block";
      choosenCol.innerHTML = inputValue.value;
      normalCol.innerHTML = inputValue.value;
      hexaCol.innerHTML = "#ff6347";
      rgbCol.innerHTML = "Rgb(255,99,71)";
      body.style = "background-color:rgba(255,99,71,0.5)";
    }
    myCondition();
  } else {
    alert("Please Enter Above Mentioned Colors");
  }
});

///---------------code for refresh

refresh.onclick = function () {
  window.location.reload();
};
