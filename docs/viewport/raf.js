window.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#table > tbody");

  generateTable(1000, 20).forEach((items) => {
    table.appendChild(renderRow(items));
  });

  startTimer(table);
});

function startTimer(table) {
  const items = [...table.querySelectorAll("tr")].map((row) => [
    ...row.querySelectorAll("td"),
  ]);

  requestAnimationFrame(computeCells(items));
}

function computeCells(items) {
  return () => {
    const offset = 100;
    const visibleItems = items.filter(([element]) => {
      const rect = element.getBoundingClientRect();

      return rect.top <= outerHeight + offset && rect.bottom >= -1 * offset;
    });

    visibleItems.forEach((elements) => {
      elements.forEach((element) => {
        element.textContent = randomInterval(0, 9);
      });
    });

    requestAnimationFrame(computeCells(items));
  };
}
