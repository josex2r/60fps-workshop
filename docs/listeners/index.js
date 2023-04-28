const tableData = generateTable(10000, 30);
let currentRow = 0;

window.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#table > tbody");
  const container = table.closest("div");

  container.addEventListener("scroll", () => {
    checkScroll(container, table);
  });

  renderMultipleRows(table, 20);
});

const hasReachedBottom = (el, offset = 1) =>
  el.scrollTop + el.clientHeight >= el.scrollHeight - offset;

function renderMultipleRows(table, size = 5) {
  tableData.slice(currentRow, currentRow + size).forEach((c) => {
    table.appendChild(renderRow(c));
  });

  currentRow += size;
}

function checkScroll(container, table) {
  if (!hasReachedBottom(container, 200)) {
    return;
  }

  renderMultipleRows(table, 1);
  checkScroll(container, table);
}
