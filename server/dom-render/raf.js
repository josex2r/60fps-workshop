const tableDataDelayed = generateTable(2000, 20);

window.addEventListener("DOMContentLoaded", () => {
  const btnRunTask = document.querySelector("#btnRunTask2");
  const table = document.querySelector("#table2 > tbody");
  const progress = document.querySelector("#progress");
  const updateProgressFn = updateProgress.bind(
    null,
    progress,
    tableDataDelayed.length
  );
  const renderDataDelayedFn = renderDataDelayed.bind(
    null,
    table,
    tableDataDelayed,
    updateProgressFn
  );

  btnRunTask.addEventListener("click", () =>
    renderDataDelayedFn(0, renderDataDelayedFn)
  );
});

function renderDataDelayed(table, data, updateProgress, index, cb) {
  if (index >= data.length) return;

  const size = 5;
  const lastIndex = index + size;
  const rowData = data.slice(index, lastIndex);

  window.requestAnimationFrame(() => {
    rowData.forEach((row) => table.appendChild(renderRow(row)));

    updateProgress(index + size);
    cb(lastIndex, cb);
  });
}

function updateProgress(progress, total, current) {
  progress.style.width = `${(current * 100) / total}%`;
}
