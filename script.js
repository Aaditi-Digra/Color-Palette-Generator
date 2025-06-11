function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  const palette = document.getElementById('palette');
  palette.innerHTML = '';

  // Confetti!
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();

    const block = document.createElement('div');
    block.className = 'color-block';
    block.style.backgroundColor = color;

    const code = document.createElement('div');
    code.className = 'color-code';
    code.innerText = color;

    block.appendChild(code);

    block.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      code.innerText = 'Copied!';
      setTimeout(() => code.innerText = color, 1000);
    });

    palette.appendChild(block);
  }
}

function downloadPalette() {
  const palette = document.getElementById('palette');

  html2canvas(palette).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'color-palette.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

// Initial load
generatePalette();
