const btncount = document.querySelector(".btncount");
const btndecrease = document.querySelector(".btndecrease");
const btnreset = document.querySelector(".btnreset");
const btnincrease = document.querySelector(".btnincrease");

let count = 0;

btnincrease.addEventListener("click", function () {
  count++;
  btncount.innerHTML = count;
});
btndecrease.addEventListener("click", function () {
  if (count == 0) {
    console.log("You cannot drop below 0!");
  } else {
    count--;
    btncount.innerHTML = count;
  }
});
btnreset.addEventListener("click", function () {
  count = 0;
  btncount.innerHTML = count;
});
