window.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#table > tbody");

  generateTable(1000, 20).forEach((items) => {
    table.appendChild(renderRow(items));
  });

  startTimer(table);
});

function startTimer(table) {
  const items = [...table.querySelectorAll("td")];

  setInterval(computeCells(items));
}

function computeCells(items) {
  return () => {
    items.forEach((element) => {
      element.textContent = randomInterval(0, 9);
    });
  };
}
