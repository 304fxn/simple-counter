const btncount = document.querySelector(".btncount");
const btndecrease = document.querySelector(".btndecrease");
const btnreset = document.querySelector(".btnreset");
const btnincrease = document.querySelector(".btnincrease");

let count = 0;

btnincrease.addEventListener("click", function () {
  count++;
  btncount.innerHTML = count;
  btncount.style.color = "green";
});
btndecrease.addEventListener("click", function () {
  count--;
  btncount.innerHTML = count;
  btncount.style.color = "red";
});
btnreset.addEventListener("click", function () {
  count = 0;
  btncount.innerHTML = count;
  btncount.style.color = "black";
});
