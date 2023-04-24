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
    const index = getIndex();

    colorize(index);

    const percent = getPercent();

    resize(percent);
  });
});

function resize(percent) {
  $progress.width(`${percent}%`);
}

function colorize(index) {
  let color = $($frames.get(index)).css('background-color');
  
  $progress.css('background-image', 'none');
  $progress.css('background-color', color);
}

function getIndex() {
  const frameWidth = $frame[0].offsetWidth;
  const offset = $frame[0].scrollLeft;
  
  return Math.trunc((offset - frameWidth / 2) / frameWidth);
}

function getPercent() {
  const frameWidth = $frame[0].offsetWidth;
  const offset = $frame[0].scrollLeft;
  
  return offset * 100 / ($frame[0].scrollWidth - frameWidth);
}
