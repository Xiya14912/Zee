
const puzzle = document.getElementById("puzzle");
let tiles = [];

function shuffleTiles() {
  tiles = [...Array(9).keys()].map(n => n + 1);
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  puzzle.innerHTML = "";
  tiles.forEach(n => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.textContent = n;
    puzzle.appendChild(tile);
  });
  startTime = Date.now();
}

function checkWin() {
  const current = Array.from(puzzle.children).map(div => parseInt(div.textContent));
  const isCorrect = current.every((v, i) => v === i + 1);
  if (isCorrect) {
    const timeTaken = (Date.now() - startTime) / 1000;
    let msg = "";
    if (timeTaken < 10) msg = "🔥 You are a genius!";
    else if (timeTaken < 20) msg = "😎 You are smart!";
    else msg = "👍 Keep practicing!";
    document.getElementById("result").textContent = msg;
  }
}

puzzle.addEventListener("click", (e) => {
  if (e.target.classList.contains("tile")) {
    shuffleTiles(); // simulate interaction
    checkWin();
  }
});

let startTime = 0;
shuffleTiles();
