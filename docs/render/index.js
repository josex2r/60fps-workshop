const tableData = generateTable(10000, 50);
let currentRow = 0;

window.addEventListener("DOMContentLoaded", () => {
  const btnRunTask = document.querySelector("#btnRunTask");
  const table = document.querySelector("#table tbody");
  const renderDataFn = renderData.bind(null, table);

  btnRunTask.addEventListener("click", () => {
    window.requestAnimationFrame(renderDataFn);
  });
});

function renderData(table) {
  const row = renderRow(tableData[currentRow++]);

  table.appendChild(row);
}

function getTableBounds(table) {
  console.log(table.getBoundingClientRect());
}
