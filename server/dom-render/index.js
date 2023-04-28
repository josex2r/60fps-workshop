const tableData = generateTable(2000, 20);

window.addEventListener("DOMContentLoaded", () => {
  const btnRunTask = document.querySelector("#btnRunTask");
  const table = document.querySelector("#table > tbody");
  const renderDataFn = renderData.bind(null, table, tableData);

  btnRunTask.addEventListener("click", renderDataFn);
});

function renderData(table, data) {
  data.forEach((items) => {
    table.appendChild(renderRow(items));
  });
}
