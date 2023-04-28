function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderRow(items) {
  const tr = document.createElement("tr");

  items.forEach((item) => {
    const td = document.createElement("td");

    td.textContent = item;

    tr.appendChild(td);
  });

  return tr;
}

function cleanElement(el) {
  el.innerHTML = "";
}

function generateTable(rows, cols) {
  return new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(0).map(() => randomInterval(0, 9)));
}

function jank(amt) {
  var start = Date.now();
  while (Date.now() < start + amt) {}
}
