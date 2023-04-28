const tableData2 = generateTable(10000, 30);
let currentRow2 = 0;

window.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#table2 > tbody");
  const sentinel = document.querySelector("#sentinel");

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;

      renderMultipleRows2(table, 5);
    },
    {
      threshold: 0.25,
    }
  );

  intersectionObserver.observe(sentinel);

  renderMultipleRows2(table, 20);
});

function renderMultipleRows2(table, size = 5) {
  tableData2.slice(currentRow2, currentRow2 + size).forEach((c) => {
    table.appendChild(renderRow(c));
  });

  currentRow2 += size;
}
