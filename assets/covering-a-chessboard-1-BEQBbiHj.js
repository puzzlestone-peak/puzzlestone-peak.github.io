const n={slug:"covering-a-chessboard-1",metadata:{id:"puzzle-9",title:"Covering a Chessboard 1",difficulty:{concepts:"medium",reasoning:"medium"},concepts:["invariants"],tags:["has-solution","interactive"],credit:`Classic puzzle originally posed by philosopher Max Black in *Critical Thinking* (1946) and later popularised by Martin Gardner.
Question and solution written by Puzzlestone Peak.
`,dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"You’re given an 8x8 chessboard with 2 opposite corner tiles removed. You can place dominoes on the board, with each one covering exactly 2 adjacent tiles (you...",websitePreview:"You’re given an 8x8 chessboard with 2 opposite corner tiles removed. You can place dominoes on the board, with each one covering exactly 2 adjacent tiles (you..."},content:`<p>You’re given an 8x8 chessboard with 2 opposite corner tiles removed. You can place dominoes on the board, with each one covering exactly 2 adjacent tiles (you can’t place them diagonally to cover 2 tiles touching at a corner. The dominoes can be rotated by 90° increments, but cannot be overlapped. Can you cover all the empty tiles with 31 dominoes? If yes, show an arrangement of such a covering. If not, prove why it cannot be done.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>There’s an interesting property of tiles on a chessboard that could point you in the right direction.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s try colouring the tiles like a chessboard. Does this shine the light on anything?</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint: Interactive board</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Try playing around with the interactive board. Click in between any 2 tiles to place a domino over it. You may click on a domino to remove it.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>It is impossible to cover the chessboard with dominoes.</p><p>If you had a go with the interactive board, you might’ve noticed an interesting property: you’ll end up with 2 tiles of the same colour left over. This hints at a property that we can use to prove it cannot be done.</p><p>Let’s colour the chessboard with alternating black and white tiles. Notice that each domino covers a black and white tile, so 31 dominoes would cover 31 black tiles and 31 white tiles.</p><p>However, with opposite corners removed, a chessboard will have 30 black tiles and 32 white tiles (or vice versa, depending on which corner you cut off). Thus, there can be no arrangement of dominoes that will cover the entire chessboard.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
You’re given an 8x8 chessboard with 2 opposite corner tiles removed. You can place dominoes on the board, with each one covering exactly 2 adjacent tiles (you can’t place them diagonally to cover 2 tiles touching at a corner. The dominoes can be rotated by 90° increments, but cannot be overlapped. Can you cover all the empty tiles with 31 dominoes? If yes, show an arrangement of such a covering. If not, prove why it cannot be done.

:::dynamic
\`\`\`yaml
use: '#chessboard'
props:
  mode: static
  pattern: plain
\`\`\`
:::

:::hint
There’s an interesting property of tiles on a chessboard that could point you in the right direction.
:::

::::hint
Let’s try colouring the tiles like a chessboard. Does this shine the light on anything?

:::dynamic
\`\`\`yaml
use: '#chessboard'
props:
  mode: static
  pattern: chessboard
\`\`\`
:::
::::

::::hint[Hint: Interactive board]
Try playing around with the interactive board. Click in between any 2 tiles to place a domino over it. You may click on a domino to remove it.

:::dynamic
\`\`\`yaml
use: '#chessboard'
props:
  mode: interactive
  pattern: chessboard
\`\`\`
:::
::::

:::solution
It is impossible to cover the chessboard with dominoes.

If you had a go with the interactive board, you might’ve noticed an interesting property: you’ll end up with 2 tiles of the same colour left over. This hints at a property that we can use to prove it cannot be done.

Let’s colour the chessboard with alternating black and white tiles. Notice that each domino covers a black and white tile, so 31 dominoes would cover 31 black tiles and 31 white tiles.

However, with opposite corners removed, a chessboard will have 30 black tiles and 32 white tiles (or vice versa, depending on which corner you cut off). Thus, there can be no arrangement of dominoes that will cover the entire chessboard.
:::

:::component[chessboard]
\`\`\`html
<div id="chessboard-container">
  <div id="grid-wrapper"></div>
  <div id="controls" class="hidden"></div>
</div>
\`\`\`

\`\`\`css
:root {
  --square-size: min(50px, calc(100vw / 10));
  --grid-border-size: 2px;
  --grid-border: var(--grid-border-size) solid var(--color-foreground);
  --click-area-size: calc(var(--square-size) / 5);
}

* {
  box-sizing: border-box;
}

#chessboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#grid-wrapper {
  position: relative;
  display: inline-block;
}

#grid {
  display: grid;
  grid-template-columns: repeat(8, var(--square-size));
  grid-template-rows: repeat(8, var(--square-size));
  gap: 0;
  position: relative;
  user-select: none;
}

.chess-square {
  width: var(--square-size);
  height: var(--square-size);
  position: relative;
}

.chess-square {
  border-bottom: var(--grid-border);
  border-right: var(--grid-border);
}

.chess-square[data-row="0"] {
  border-top: var(--grid-border);
}

.chess-square[data-col="0"] {
  border-left: var(--grid-border);
}

.chess-square[data-row="0"][data-col="0"] {
  border-top: none;
  border-left: none;
}

.chess-square[data-row="7"][data-col="7"] {
  border-bottom: none;
  border-right: none;
}

.chess-square.white {
  background-color: var(--color-sand-100);
}

.chess-square.black {
  background-color: var(--color-evergreen-300);
}

.chess-square.plain {
  background-color: var(--color-frost-100);
}

.chess-square.removed {
  background-color: transparent;
}

.domino-container {
  position: absolute;
  cursor: pointer;
  transition: opacity 0.2s;
  z-index: 15;

  --padding: 2px;
  padding-top: var(--padding);
  padding-left: var(--padding);
  padding-bottom: calc(var(--padding) + var(--grid-border-size) / 2);
  padding-right: calc(var(--padding) + var(--grid-border-size) / 2);
}

.domino-container:hover {
  opacity: 0.7;
}

.domino-container.horizontal {
  width: calc(var(--square-size) * 2);
  height: var(--square-size);
}

.domino-container.vertical {
  width: var(--square-size);
  height: calc(var(--square-size) * 2);
}

.domino {
  width: 100%;
  height: 100%;

  background: var(--color-amber-700);
  border: 4px solid var(--color-amber-950);
  border-radius: 4px;
}

.domino-container.preview {
  pointer-events: none;
  z-index: 5;
}

.domino-container.preview > .domino {
  background: color-mix(in oklch, var(--color-amber-700) 40%, transparent);
  border: 4px dashed var(--color-amber-950);
}

.gap-detector {
  position: absolute;
  z-index: 10;
  cursor: pointer;
}

.gap-detector.horizontal {
  width: var(--square-size);
  height: var(--click-area-size);
}

.gap-detector.vertical {
  width: var(--click-area-size);
  height: var(--square-size);
}

#controls {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

#controls > * {
  width: 6rem;
}
\`\`\`

\`\`\`js
function mount(options) {
  const { root, api, props } = options;

  // Props
  const mode = props.mode || 'static'; // 'static' | 'interactive'
  const pattern = props.pattern || 'plain'; // 'plain' | 'chessboard'
  const initialDominoes = props.dominoes || []; // [[r1, c1, r2, c2], ...]

  // State
  let dominoes = [...initialDominoes];
  let dominoHistory = [];
  let previewDomino = null;

  const removedSquares = [[0, 0], [7, 7]]; // Top-left and bottom-right corners

  // Create grid
  const wrapper = document.getElementById('grid-wrapper');
  const grid = document.createElement('div');
  grid.id = 'grid';
  wrapper.appendChild(grid);

  // Create squares
  const squares = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.className = 'chess-square';
      square.dataset.row = row;
      square.dataset.col = col;

      // Check if this square is removed
      const isRemoved = removedSquares.some(([r, c]) => r === row && c === col);

      if (isRemoved) {
        square.classList.add('removed');
      } else if (pattern === 'chessboard') {
        square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      } else {
        square.classList.add('plain');
      }

      grid.appendChild(square);
      squares.push(square);
    }
  }

  // Helper functions
  function getSquareElement(row, col) {
    return grid.querySelector(\`[data-row="\${row}"][data-col="\${col}"]\`);
  }

  function isSquareRemoved(row, col) {
    return removedSquares.some(([r, c]) => r === row && c === col);
  }

  function isSquareOccupied(row, col) {
    return dominoes.some(([r1, c1, r2, c2]) =>
      (r1 === row && c1 === col) || (r2 === row && c2 === col)
    );
  }

  function canPlaceDomino(row1, col1, row2, col2) {
    // Check if squares exist
    if (row1 < 0 || row1 > 7 || col1 < 0 || col1 > 7) return false;
    if (row2 < 0 || row2 > 7 || col2 < 0 || col2 > 7) return false;

    // Check if squares are removed
    if (isSquareRemoved(row1, col1) || isSquareRemoved(row2, col2)) return false;

    // Check if squares are already occupied
    if (isSquareOccupied(row1, col1) || isSquareOccupied(row2, col2)) return false;

    return true;
  }

  function createDominoElement(row1, col1, row2, col2, isPreview = false) {
    const dominoContainer = document.createElement('div');
    dominoContainer.className = 'domino-container';

    const domino = document.createElement('div');
    domino.className = 'domino';

    if (isPreview) {
      dominoContainer.classList.add('preview');
    }

    // Determine orientation and position
    const isHorizontal = row1 === row2;
    dominoContainer.classList.add(isHorizontal ? 'horizontal' : 'vertical');

    const minRow = Math.min(row1, row2);
    const minCol = Math.min(col1, col2);

    dominoContainer.style.left = \`calc(var(--square-size) * \${minCol})\`;
    dominoContainer.style.top = \`calc(var(--square-size) * \${minRow})\`;

    if (!isPreview) {
      dominoContainer.dataset.domino = JSON.stringify([row1, col1, row2, col2]);
      dominoContainer.addEventListener('click', () => removeDomino(row1, col1, row2, col2));
    }

    dominoContainer.append(domino);

    return dominoContainer;
  }

  function renderDominoes() {
    // Remove all existing dominoes
    grid.querySelectorAll('.domino-container:not(.preview)').forEach(el => el.remove());

    // Render all dominoes
    dominoes.forEach(([r1, c1, r2, c2]) => {
      const domino = createDominoElement(r1, c1, r2, c2);
      grid.appendChild(domino);
    });
  }

  function placeDomino(row1, col1, row2, col2) {
    if (canPlaceDomino(row1, col1, row2, col2)) {
      dominoHistory.push([...dominoes]);
      dominoes.push([row1, col1, row2, col2]);
      renderDominoes();
    }
  }

  function removeDomino(row1, col1, row2, col2) {
    if (mode === 'static') return; // Can't remove in static mode

    dominoHistory.push([...dominoes]);
    dominoes = dominoes.filter(([r1, c1, r2, c2]) =>
      !(r1 === row1 && c1 === col1 && r2 === row2 && c2 === col2)
    );
    renderDominoes();
  }

  function undo() {
    if (dominoHistory.length > 0) {
      dominoes = dominoHistory.pop();
      renderDominoes();
    }
  }

  function reset() {
    dominoHistory.push([...dominoes]);
    dominoes = [];
    renderDominoes();
  }

  // Interactive mode: Add gap detectors for hover
  if (mode === 'interactive') {
    // Add horizontal gap detectors (between rows)
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 8; col++) {
        const detector = document.createElement('div');
        detector.className = 'gap-detector horizontal';
        detector.style.left = \`calc(var(--square-size) * \${col})\`;
        detector.style.top = \`calc(var(--square-size) * \${row + 1} - var(--click-area-size) / 2)\`;
        detector.dataset.orientation = 'vertical'; // Vertical domino on horizontal gap
        detector.dataset.row = row;
        detector.dataset.col = col;

        detector.addEventListener('mouseenter', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);

          if (canPlaceDomino(r, c, r + 1, c)) {
            previewDomino = createDominoElement(r, c, r + 1, c, true);
            grid.appendChild(previewDomino);
          }
        });

        detector.addEventListener('mouseleave', () => {
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        detector.addEventListener('click', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);
          placeDomino(r, c, r + 1, c);
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        grid.appendChild(detector);
      }
    }

    // Add vertical gap detectors (between columns)
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 7; col++) {
        const detector = document.createElement('div');
        detector.className = 'gap-detector vertical';
        detector.style.left = \`calc(var(--square-size) * \${col + 1} - var(--click-area-size) / 2)\`;
        detector.style.top = \`calc(var(--square-size) * \${row})\`;
        detector.dataset.orientation = 'horizontal'; // Horizontal domino on vertical gap
        detector.dataset.row = row;
        detector.dataset.col = col;

        detector.addEventListener('mouseenter', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);

          if (canPlaceDomino(r, c, r, c + 1)) {
            previewDomino = createDominoElement(r, c, r, c + 1, true);
            grid.appendChild(previewDomino);
          }
        });

        detector.addEventListener('mouseleave', () => {
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        detector.addEventListener('click', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);
          placeDomino(r, c, r, c + 1);
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        grid.appendChild(detector);
      }
    }

    // Add controls
    const controls = document.getElementById('controls');
    controls.classList.remove('hidden');

    const undoBtn = api.ui.button({
      label: 'Undo',
      variant: 'outlined',
      color: 'secondary',
      size: 'sm',
      onClick: undo
    });

    const resetBtn = api.ui.button({
      label: 'Reset',
      variant: 'outlined',
      color: 'destructive',
      size: 'sm',
      onClick: reset
    });

    controls.appendChild(undoBtn);
    controls.appendChild(resetBtn);
  }

  // Initial render
  renderDominoes();
}
\`\`\`

:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#chessboard",props:{mode:"static",pattern:"plain"},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/invariants/chessboard-covering/covering-a-chessboard-1.md"},{type:"dynamic",mode:"component",componentId:"#chessboard",props:{mode:"static",pattern:"chessboard"},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/invariants/chessboard-covering/covering-a-chessboard-1.md"},{type:"dynamic",mode:"component",componentId:"#chessboard",props:{mode:"interactive",pattern:"chessboard"},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/invariants/chessboard-covering/covering-a-chessboard-1.md"}],inlineComponents:{chessboard:{id:"chessboard",code:`function mount(options) {
  const { root, api, props } = options;

  // Props
  const mode = props.mode || 'static'; // 'static' | 'interactive'
  const pattern = props.pattern || 'plain'; // 'plain' | 'chessboard'
  const initialDominoes = props.dominoes || []; // [[r1, c1, r2, c2], ...]

  // State
  let dominoes = [...initialDominoes];
  let dominoHistory = [];
  let previewDomino = null;

  const removedSquares = [[0, 0], [7, 7]]; // Top-left and bottom-right corners

  // Create grid
  const wrapper = document.getElementById('grid-wrapper');
  const grid = document.createElement('div');
  grid.id = 'grid';
  wrapper.appendChild(grid);

  // Create squares
  const squares = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.className = 'chess-square';
      square.dataset.row = row;
      square.dataset.col = col;

      // Check if this square is removed
      const isRemoved = removedSquares.some(([r, c]) => r === row && c === col);

      if (isRemoved) {
        square.classList.add('removed');
      } else if (pattern === 'chessboard') {
        square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      } else {
        square.classList.add('plain');
      }

      grid.appendChild(square);
      squares.push(square);
    }
  }

  // Helper functions
  function getSquareElement(row, col) {
    return grid.querySelector(\`[data-row="\${row}"][data-col="\${col}"]\`);
  }

  function isSquareRemoved(row, col) {
    return removedSquares.some(([r, c]) => r === row && c === col);
  }

  function isSquareOccupied(row, col) {
    return dominoes.some(([r1, c1, r2, c2]) =>
      (r1 === row && c1 === col) || (r2 === row && c2 === col)
    );
  }

  function canPlaceDomino(row1, col1, row2, col2) {
    // Check if squares exist
    if (row1 < 0 || row1 > 7 || col1 < 0 || col1 > 7) return false;
    if (row2 < 0 || row2 > 7 || col2 < 0 || col2 > 7) return false;

    // Check if squares are removed
    if (isSquareRemoved(row1, col1) || isSquareRemoved(row2, col2)) return false;

    // Check if squares are already occupied
    if (isSquareOccupied(row1, col1) || isSquareOccupied(row2, col2)) return false;

    return true;
  }

  function createDominoElement(row1, col1, row2, col2, isPreview = false) {
    const dominoContainer = document.createElement('div');
    dominoContainer.className = 'domino-container';

    const domino = document.createElement('div');
    domino.className = 'domino';

    if (isPreview) {
      dominoContainer.classList.add('preview');
    }

    // Determine orientation and position
    const isHorizontal = row1 === row2;
    dominoContainer.classList.add(isHorizontal ? 'horizontal' : 'vertical');

    const minRow = Math.min(row1, row2);
    const minCol = Math.min(col1, col2);

    dominoContainer.style.left = \`calc(var(--square-size) * \${minCol})\`;
    dominoContainer.style.top = \`calc(var(--square-size) * \${minRow})\`;

    if (!isPreview) {
      dominoContainer.dataset.domino = JSON.stringify([row1, col1, row2, col2]);
      dominoContainer.addEventListener('click', () => removeDomino(row1, col1, row2, col2));
    }

    dominoContainer.append(domino);

    return dominoContainer;
  }

  function renderDominoes() {
    // Remove all existing dominoes
    grid.querySelectorAll('.domino-container:not(.preview)').forEach(el => el.remove());

    // Render all dominoes
    dominoes.forEach(([r1, c1, r2, c2]) => {
      const domino = createDominoElement(r1, c1, r2, c2);
      grid.appendChild(domino);
    });
  }

  function placeDomino(row1, col1, row2, col2) {
    if (canPlaceDomino(row1, col1, row2, col2)) {
      dominoHistory.push([...dominoes]);
      dominoes.push([row1, col1, row2, col2]);
      renderDominoes();
    }
  }

  function removeDomino(row1, col1, row2, col2) {
    if (mode === 'static') return; // Can't remove in static mode

    dominoHistory.push([...dominoes]);
    dominoes = dominoes.filter(([r1, c1, r2, c2]) =>
      !(r1 === row1 && c1 === col1 && r2 === row2 && c2 === col2)
    );
    renderDominoes();
  }

  function undo() {
    if (dominoHistory.length > 0) {
      dominoes = dominoHistory.pop();
      renderDominoes();
    }
  }

  function reset() {
    dominoHistory.push([...dominoes]);
    dominoes = [];
    renderDominoes();
  }

  // Interactive mode: Add gap detectors for hover
  if (mode === 'interactive') {
    // Add horizontal gap detectors (between rows)
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 8; col++) {
        const detector = document.createElement('div');
        detector.className = 'gap-detector horizontal';
        detector.style.left = \`calc(var(--square-size) * \${col})\`;
        detector.style.top = \`calc(var(--square-size) * \${row + 1} - var(--click-area-size) / 2)\`;
        detector.dataset.orientation = 'vertical'; // Vertical domino on horizontal gap
        detector.dataset.row = row;
        detector.dataset.col = col;

        detector.addEventListener('mouseenter', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);

          if (canPlaceDomino(r, c, r + 1, c)) {
            previewDomino = createDominoElement(r, c, r + 1, c, true);
            grid.appendChild(previewDomino);
          }
        });

        detector.addEventListener('mouseleave', () => {
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        detector.addEventListener('click', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);
          placeDomino(r, c, r + 1, c);
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        grid.appendChild(detector);
      }
    }

    // Add vertical gap detectors (between columns)
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 7; col++) {
        const detector = document.createElement('div');
        detector.className = 'gap-detector vertical';
        detector.style.left = \`calc(var(--square-size) * \${col + 1} - var(--click-area-size) / 2)\`;
        detector.style.top = \`calc(var(--square-size) * \${row})\`;
        detector.dataset.orientation = 'horizontal'; // Horizontal domino on vertical gap
        detector.dataset.row = row;
        detector.dataset.col = col;

        detector.addEventListener('mouseenter', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);

          if (canPlaceDomino(r, c, r, c + 1)) {
            previewDomino = createDominoElement(r, c, r, c + 1, true);
            grid.appendChild(previewDomino);
          }
        });

        detector.addEventListener('mouseleave', () => {
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        detector.addEventListener('click', () => {
          const r = parseInt(detector.dataset.row);
          const c = parseInt(detector.dataset.col);
          placeDomino(r, c, r, c + 1);
          if (previewDomino) {
            previewDomino.remove();
            previewDomino = null;
          }
        });

        grid.appendChild(detector);
      }
    }

    // Add controls
    const controls = document.getElementById('controls');
    controls.classList.remove('hidden');

    const undoBtn = api.ui.button({
      label: 'Undo',
      variant: 'outlined',
      color: 'secondary',
      size: 'sm',
      onClick: undo
    });

    const resetBtn = api.ui.button({
      label: 'Reset',
      variant: 'outlined',
      color: 'destructive',
      size: 'sm',
      onClick: reset
    });

    controls.appendChild(undoBtn);
    controls.appendChild(resetBtn);
  }

  // Initial render
  renderDominoes();
}`,layout:`<div id="chessboard-container">
  <div id="grid-wrapper"></div>
  <div id="controls" class="hidden"></div>
</div>`,css:`:root {
  --square-size: min(50px, calc(100vw / 10));
  --grid-border-size: 2px;
  --grid-border: var(--grid-border-size) solid var(--color-foreground);
  --click-area-size: calc(var(--square-size) / 5);
}

* {
  box-sizing: border-box;
}

#chessboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#grid-wrapper {
  position: relative;
  display: inline-block;
}

#grid {
  display: grid;
  grid-template-columns: repeat(8, var(--square-size));
  grid-template-rows: repeat(8, var(--square-size));
  gap: 0;
  position: relative;
  user-select: none;
}

.chess-square {
  width: var(--square-size);
  height: var(--square-size);
  position: relative;
}

.chess-square {
  border-bottom: var(--grid-border);
  border-right: var(--grid-border);
}

.chess-square[data-row="0"] {
  border-top: var(--grid-border);
}

.chess-square[data-col="0"] {
  border-left: var(--grid-border);
}

.chess-square[data-row="0"][data-col="0"] {
  border-top: none;
  border-left: none;
}

.chess-square[data-row="7"][data-col="7"] {
  border-bottom: none;
  border-right: none;
}

.chess-square.white {
  background-color: var(--color-sand-100);
}

.chess-square.black {
  background-color: var(--color-evergreen-300);
}

.chess-square.plain {
  background-color: var(--color-frost-100);
}

.chess-square.removed {
  background-color: transparent;
}

.domino-container {
  position: absolute;
  cursor: pointer;
  transition: opacity 0.2s;
  z-index: 15;

  --padding: 2px;
  padding-top: var(--padding);
  padding-left: var(--padding);
  padding-bottom: calc(var(--padding) + var(--grid-border-size) / 2);
  padding-right: calc(var(--padding) + var(--grid-border-size) / 2);
}

.domino-container:hover {
  opacity: 0.7;
}

.domino-container.horizontal {
  width: calc(var(--square-size) * 2);
  height: var(--square-size);
}

.domino-container.vertical {
  width: var(--square-size);
  height: calc(var(--square-size) * 2);
}

.domino {
  width: 100%;
  height: 100%;

  background: var(--color-amber-700);
  border: 4px solid var(--color-amber-950);
  border-radius: 4px;
}

.domino-container.preview {
  pointer-events: none;
  z-index: 5;
}

.domino-container.preview > .domino {
  background: color-mix(in oklch, var(--color-amber-700) 40%, transparent);
  border: 4px dashed var(--color-amber-950);
}

.gap-detector {
  position: absolute;
  z-index: 10;
  cursor: pointer;
}

.gap-detector.horizontal {
  width: var(--square-size);
  height: var(--click-area-size);
}

.gap-detector.vertical {
  width: var(--click-area-size);
  height: var(--square-size);
}

#controls {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

#controls > * {
  width: 6rem;
}`,startLine:232}}};export{n as default};
