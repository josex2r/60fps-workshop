let $progress;
let $frame;
let $frames;
let progressTimer;

$(document).ready(function() {
  $progress = $('#progress');
  $frame = $('#frame');

  // Create more frames
  const dom = $frame.html();
  for (let i = 0; i < 50; i++) {
    $frame.append(dom);
  }

  $frames = $frame.find('div');
});

// ===============================
// ==== Write your code here! ====
// ===============================

$(document).ready(function() {
  $frame.on('scroll', (e) => {
    window.requestAnimationFrame(render);
  });
});

function render() {
  const { index, percent } = getBounds();

  colorize(index);
  resize(percent);
}

function resize(percent) {
  $progress[0].style.width = `${percent}%`;
}

function colorize(index) {
  let color = $frames[index].style.backgroundColor;
  
  $progress[0].style.background = color;
}

function getBounds() {
  const frameWidth = $frame[0].offsetWidth;
  const offset = $frame[0].scrollLeft;
  
  return {
    index: Math.trunc((offset - frameWidth / 2) / frameWidth),
    percent: offset * 100 / ($frame[0].scrollWidth - frameWidth)
  };
}
