const tableData = generateTable(10000, 50);
let currentRow = 0;

window.addEventListener("DOMContentLoaded", () => {
  const btnLeft = document.querySelector("#btnLeft");
  const boxLeft = document.querySelector("#boxLeft");
  const btnTraslate = document.querySelector("#btnTraslate");
  const boxTraslate = document.querySelector("#boxTraslate");

  btnLeft.addEventListener("click", () => {
    boxLeft.classList.add("animate-left");
  });

  btnTraslate.addEventListener("click", () => {
    boxTraslate.classList.add("animate-traslate");
  });
});
