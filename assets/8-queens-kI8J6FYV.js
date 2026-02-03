const n={slug:"8-queens",metadata:{id:"puzzle-47",title:"8 Queens",difficulty:"easy",concepts:["logic"],tags:["has-solution"],questionPreview:`Can you place 8 queens on a chessboard so that no queen can capture any other?
`,credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-03",lastUpdated:"2026-02-03",preview:"Can you place 8 queens on a chessboard so that no queen can capture any other queen? Recall that a queen can move any number of squares horizontally,...",websitePreview:"Can you place 8 queens on a chessboard so that no queen can capture any other queen? Recall that a queen can move any number of squares horizontally,..."},content:`<p>Can you place 8 queens on a chessboard so that no queen can capture any other queen? Recall that a queen can move any number of squares horizontally, vertically, or diagonally.</p>
<p>You may click on the board below to place and remove queens.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Here’s one possible solution:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<p>:::</p>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
Can you place 8 queens on a chessboard so that no queen can capture any other queen? Recall that a queen can move any number of squares horizontally, vertically, or diagonally.

You may click on the board below to place and remove queens.

:::dynamic
\`\`\`yaml
use: '#queens-board'
props:
  mode: interactive
\`\`\`
:::

:::solution
Here’s one possible solution:

:::dynamic
\`\`\`yaml
use: '#queens-board'
props:
  mode: solution
  queens: [5, 3, 6, 0, 7, 1, 4, 2]
\`\`\`
:::
:::


:::component[queens-board]
\`\`\`js
function mount(options) {
  const { root, api, props } = options;
  const {
    mode = 'interactive',
    queens: initialQueens = []
  } = props;

  const BOARD_SIZE = 8;

  // State: Set of position strings "row,col"
  let queens = new Set();
  initialQueens.forEach((col, row) => {
    if (row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
      queens.add(\`\${row},\${col}\`);
    }
  });

  // Create main container
  const container = document.createElement('div');
  container.className = 'flex flex-col items-center gap-4';
  if (mode === 'interactive') {
    container.classList.add('interactive');
  }
  root.appendChild(container);

  // Create board container with fixed aspect ratio
  const boardContainer = document.createElement('div');
  boardContainer.className = 'relative';
  boardContainer.style.width = '100%';
  boardContainer.style.maxWidth = '400px';
  boardContainer.style.aspectRatio = '1';
  container.appendChild(boardContainer);

  // Create the board grid
  const board = document.createElement('div');
  board.className = 'grid';
  board.style.gridTemplateColumns = \`repeat(\${BOARD_SIZE}, 1fr)\`;
  board.style.width = '100%';
  board.style.height = '100%';
  boardContainer.appendChild(board);

  // Color getter functions (called fresh each render for theme changes)
  const getColors = () => ({
    lightSquare: api.getColor('sand-100'),
    darkSquare: api.getColor('sand-300'),
    threatLightSquare: api.getColor('error-200'),
    threatDarkSquare: api.getColor('error-300'),
    queenColor: api.getColor('stone-800'),
  });

  // Track cells for updates
  const cells = [];

  // Create cells
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const cell = document.createElement('div');
      const isLight = (row + col) % 2 === 0;
      const colors = getColors();
      cell.style.backgroundColor = isLight ? colors.lightSquare : colors.darkSquare;
      cell.style.position = 'relative';
      cell.style.display = 'flex';
      cell.style.alignItems = 'center';
      cell.style.justifyContent = 'center';
      cell.style.cursor = mode === 'interactive' ? 'pointer' : 'default';
      // Fix: Ensure consistent cell sizing with aspect ratio
      cell.style.aspectRatio = '1';

      cell.dataset.row = row;
      cell.dataset.col = col;

      // Create queen container (always present, visibility toggled)
      const queenContainer = document.createElement('div');
      queenContainer.className = 'queen-container';
      queenContainer.style.width = '70%';
      queenContainer.style.height = '70%';
      queenContainer.style.position = 'absolute';
      queenContainer.style.display = 'none';
      cell.appendChild(queenContainer);

      if (mode === 'interactive') {
        cell.addEventListener('click', () => handleCellClick(row, col));
      }

      board.appendChild(cell);
      cells.push({ element: cell, row, col, isLight, queenContainer });
    }
  }

  // Status message for interactive mode
  let statusEl = null;
  if (mode === 'interactive') {
    statusEl = document.createElement('div');
    statusEl.className = 'text-sm text-muted-foreground text-center';
    container.appendChild(statusEl);

    // Reset button
    const resetBtn = api.ui.button({
      label: 'Clear Board',
      variant: 'outlined',
      color: 'secondary',
      size: 'sm',
      onClick: () => {
        queens.clear();
        render();
      }
    });
    container.appendChild(resetBtn);
  }

  function handleCellClick(row, col) {
    if (mode !== 'interactive') return;

    const pos = \`\${row},\${col}\`;
    // Toggle queen at this position
    if (queens.has(pos)) {
      queens.delete(pos);
    } else {
      queens.add(pos);
    }
    render();
  }

  function getThreatenedSquares() {
    const threatened = new Set();

    queens.forEach((pos) => {
      const [row, col] = pos.split(',').map(Number);

      // Mark entire row
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (c !== col) threatened.add(\`\${row},\${c}\`);
      }

      // Mark entire column
      for (let r = 0; r < BOARD_SIZE; r++) {
        if (r !== row) threatened.add(\`\${r},\${col}\`);
      }

      // Mark diagonals
      for (let i = 1; i < BOARD_SIZE; i++) {
        // Up-left
        if (row - i >= 0 && col - i >= 0) threatened.add(\`\${row - i},\${col - i}\`);
        // Up-right
        if (row - i >= 0 && col + i < BOARD_SIZE) threatened.add(\`\${row - i},\${col + i}\`);
        // Down-left
        if (row + i < BOARD_SIZE && col - i >= 0) threatened.add(\`\${row + i},\${col - i}\`);
        // Down-right
        if (row + i < BOARD_SIZE && col + i < BOARD_SIZE) threatened.add(\`\${row + i},\${col + i}\`);
      }
    });

    return threatened;
  }

  function getConflictingQueens() {
    const conflicts = new Set();
    const queenPositions = Array.from(queens).map((pos) => {
      const [row, col] = pos.split(',').map(Number);
      return { row, col };
    });

    for (let i = 0; i < queenPositions.length; i++) {
      for (let j = i + 1; j < queenPositions.length; j++) {
        const q1 = queenPositions[i];
        const q2 = queenPositions[j];

        // Same row (shouldn't happen with our data structure, but check anyway)
        if (q1.row === q2.row) {
          conflicts.add(\`\${q1.row},\${q1.col}\`);
          conflicts.add(\`\${q2.row},\${q2.col}\`);
        }
        // Same column
        if (q1.col === q2.col) {
          conflicts.add(\`\${q1.row},\${q1.col}\`);
          conflicts.add(\`\${q2.row},\${q2.col}\`);
        }
        // Same diagonal
        if (Math.abs(q1.row - q2.row) === Math.abs(q1.col - q2.col)) {
          conflicts.add(\`\${q1.row},\${q1.col}\`);
          conflicts.add(\`\${q2.row},\${q2.col}\`);
        }
      }
    }

    return conflicts;
  }

  // Queen SVG path (reused for all queens)
  const queenSvgPath = 'M46.3,20.37c0-2.05,1.66-3.7,3.7-3.7s3.7,1.66,3.7,3.7-1.66,3.7-3.7,3.7-3.7-1.66-3.7-3.7Zm8.62,9.97c3.67-1.81,6.2-5.6,6.2-9.97,0-6.14-4.97-11.11-11.11-11.11s-11.11,4.97-11.11,11.11c0,4.37,2.52,8.15,6.2,9.97l-8.02,21.4-12.74-8.49c2.13-2.02,3.46-4.89,3.46-8.06,0-6.14-4.97-11.11-11.11-11.11s-11.11,4.97-11.11,11.11c0,5.1,3.44,9.4,8.12,10.7l6.58,26.33-2.33,9.31c-1.17,4.68,2.37,9.2,7.19,9.2h49.77c4.82,0,8.36-4.53,7.19-9.2l-2.33-9.31,6.58-26.33c4.68-1.31,8.12-5.6,8.12-10.7,0-6.14-4.97-11.11-11.11-11.11s-11.11,4.97-11.11,11.11c0,3.17,1.33,6.03,3.46,8.06l-12.74,8.49-8.02-21.4Zm28.42,8.55h0c2.05,0,3.7-1.66,3.7-3.7s-1.66-3.7-3.7-3.7-3.7,1.66-3.7,3.7,1.66,3.7,3.7,3.7Zm-62.96-3.7c0,2.04-1.66,3.7-3.7,3.7h0c-2.05,0-3.7-1.66-3.7-3.7s1.66-3.7,3.7-3.7,3.7,1.66,3.7,3.7Zm4.74,48.15l1.85-7.41h46.07l1.85,7.41H25.11Zm52.3-32.35l-4.38,17.53H26.97l-4.38-17.53,14.25,9.5c.94,.63,2.12,.79,3.19,.44,1.08-.35,1.93-1.17,2.33-2.22l7.64-20.38,7.64,20.38c.4,1.06,1.26,1.88,2.33,2.22,1.08,.35,2.25,.18,3.19-.44l14.25-9.5Z';

  function render() {
    const colors = getColors();
    const threatened = mode === 'interactive' ? getThreatenedSquares() : new Set();
    const conflicts = mode === 'interactive' ? getConflictingQueens() : new Set();
    const queenCount = queens.size;

    cells.forEach(({ element, row, col, isLight, queenContainer }) => {
      const baseColor = isLight ? colors.lightSquare : colors.darkSquare;
      const hasQueen = queens.has(\`\${row},\${col}\`);
      const isThreatened = threatened.has(\`\${row},\${col}\`);
      const isConflicting = conflicts.has(\`\${row},\${col}\`);

      // Set background (threat tinting respects light/dark checkerboard pattern)
      if (mode === 'interactive' && isThreatened && !hasQueen) {
        element.style.backgroundColor = isLight ? colors.threatLightSquare : colors.threatDarkSquare;
      } else {
        element.style.backgroundColor = baseColor;
      }

      // Update queen visibility and color (don't recreate DOM)
      if (hasQueen) {
        const fillColor = isConflicting ? colors.conflictColor : colors.queenColor;
        queenContainer.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100%;height:100%;fill:\${fillColor}"><path d="\${queenSvgPath}" fill-rule="evenodd"/></svg>\`;
        queenContainer.style.display = 'block';
      } else {
        queenContainer.style.display = 'none';
      }
    });

    // Update status
    if (statusEl) {
      if (conflicts.size > 0) {
        statusEl.textContent = \`\${queenCount} queen\${queenCount !== 1 ? 's' : ''} placed — conflict detected!\`;
      } else if (queenCount === BOARD_SIZE) {
        statusEl.textContent = 'Congratulations! All 8 queens placed with no conflicts!';
      } else {
        statusEl.textContent = \`\${queenCount} of \${BOARD_SIZE} queens placed\`;
      }
    }
  }

  // Theme change handler
  api.onThemeChange(() => {
    // Just re-render, which will use the current theme colors
    render();
  });

  render();
}
\`\`\`

\`\`\`css
.interactive .grid > div:hover {
  opacity: 0.9;
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#queens-board",props:{mode:"interactive"},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/logic/8-queens.md"},{type:"dynamic",mode:"component",componentId:"#queens-board",props:{mode:"solution",queens:[5,3,6,0,7,1,4,2]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/logic/8-queens.md"}],inlineComponents:{"queens-board":{id:"queens-board",code:`function mount(options) {
  const { root, api, props } = options;
  const {
    mode = 'interactive',
    queens: initialQueens = []
  } = props;

  const BOARD_SIZE = 8;

  // State: Set of position strings "row,col"
  let queens = new Set();
  initialQueens.forEach((col, row) => {
    if (row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
      queens.add(\`\${row},\${col}\`);
    }
  });

  // Create main container
  const container = document.createElement('div');
  container.className = 'flex flex-col items-center gap-4';
  if (mode === 'interactive') {
    container.classList.add('interactive');
  }
  root.appendChild(container);

  // Create board container with fixed aspect ratio
  const boardContainer = document.createElement('div');
  boardContainer.className = 'relative';
  boardContainer.style.width = '100%';
  boardContainer.style.maxWidth = '400px';
  boardContainer.style.aspectRatio = '1';
  container.appendChild(boardContainer);

  // Create the board grid
  const board = document.createElement('div');
  board.className = 'grid';
  board.style.gridTemplateColumns = \`repeat(\${BOARD_SIZE}, 1fr)\`;
  board.style.width = '100%';
  board.style.height = '100%';
  boardContainer.appendChild(board);

  // Color getter functions (called fresh each render for theme changes)
  const getColors = () => ({
    lightSquare: api.getColor('sand-100'),
    darkSquare: api.getColor('sand-300'),
    threatLightSquare: api.getColor('error-200'),
    threatDarkSquare: api.getColor('error-300'),
    queenColor: api.getColor('stone-800'),
  });

  // Track cells for updates
  const cells = [];

  // Create cells
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const cell = document.createElement('div');
      const isLight = (row + col) % 2 === 0;
      const colors = getColors();
      cell.style.backgroundColor = isLight ? colors.lightSquare : colors.darkSquare;
      cell.style.position = 'relative';
      cell.style.display = 'flex';
      cell.style.alignItems = 'center';
      cell.style.justifyContent = 'center';
      cell.style.cursor = mode === 'interactive' ? 'pointer' : 'default';
      // Fix: Ensure consistent cell sizing with aspect ratio
      cell.style.aspectRatio = '1';

      cell.dataset.row = row;
      cell.dataset.col = col;

      // Create queen container (always present, visibility toggled)
      const queenContainer = document.createElement('div');
      queenContainer.className = 'queen-container';
      queenContainer.style.width = '70%';
      queenContainer.style.height = '70%';
      queenContainer.style.position = 'absolute';
      queenContainer.style.display = 'none';
      cell.appendChild(queenContainer);

      if (mode === 'interactive') {
        cell.addEventListener('click', () => handleCellClick(row, col));
      }

      board.appendChild(cell);
      cells.push({ element: cell, row, col, isLight, queenContainer });
    }
  }

  // Status message for interactive mode
  let statusEl = null;
  if (mode === 'interactive') {
    statusEl = document.createElement('div');
    statusEl.className = 'text-sm text-muted-foreground text-center';
    container.appendChild(statusEl);

    // Reset button
    const resetBtn = api.ui.button({
      label: 'Clear Board',
      variant: 'outlined',
      color: 'secondary',
      size: 'sm',
      onClick: () => {
        queens.clear();
        render();
      }
    });
    container.appendChild(resetBtn);
  }

  function handleCellClick(row, col) {
    if (mode !== 'interactive') return;

    const pos = \`\${row},\${col}\`;
    // Toggle queen at this position
    if (queens.has(pos)) {
      queens.delete(pos);
    } else {
      queens.add(pos);
    }
    render();
  }

  function getThreatenedSquares() {
    const threatened = new Set();

    queens.forEach((pos) => {
      const [row, col] = pos.split(',').map(Number);

      // Mark entire row
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (c !== col) threatened.add(\`\${row},\${c}\`);
      }

      // Mark entire column
      for (let r = 0; r < BOARD_SIZE; r++) {
        if (r !== row) threatened.add(\`\${r},\${col}\`);
      }

      // Mark diagonals
      for (let i = 1; i < BOARD_SIZE; i++) {
        // Up-left
        if (row - i >= 0 && col - i >= 0) threatened.add(\`\${row - i},\${col - i}\`);
        // Up-right
        if (row - i >= 0 && col + i < BOARD_SIZE) threatened.add(\`\${row - i},\${col + i}\`);
        // Down-left
        if (row + i < BOARD_SIZE && col - i >= 0) threatened.add(\`\${row + i},\${col - i}\`);
        // Down-right
        if (row + i < BOARD_SIZE && col + i < BOARD_SIZE) threatened.add(\`\${row + i},\${col + i}\`);
      }
    });

    return threatened;
  }

  function getConflictingQueens() {
    const conflicts = new Set();
    const queenPositions = Array.from(queens).map((pos) => {
      const [row, col] = pos.split(',').map(Number);
      return { row, col };
    });

    for (let i = 0; i < queenPositions.length; i++) {
      for (let j = i + 1; j < queenPositions.length; j++) {
        const q1 = queenPositions[i];
        const q2 = queenPositions[j];

        // Same row (shouldn't happen with our data structure, but check anyway)
        if (q1.row === q2.row) {
          conflicts.add(\`\${q1.row},\${q1.col}\`);
          conflicts.add(\`\${q2.row},\${q2.col}\`);
        }
        // Same column
        if (q1.col === q2.col) {
          conflicts.add(\`\${q1.row},\${q1.col}\`);
          conflicts.add(\`\${q2.row},\${q2.col}\`);
        }
        // Same diagonal
        if (Math.abs(q1.row - q2.row) === Math.abs(q1.col - q2.col)) {
          conflicts.add(\`\${q1.row},\${q1.col}\`);
          conflicts.add(\`\${q2.row},\${q2.col}\`);
        }
      }
    }

    return conflicts;
  }

  // Queen SVG path (reused for all queens)
  const queenSvgPath = 'M46.3,20.37c0-2.05,1.66-3.7,3.7-3.7s3.7,1.66,3.7,3.7-1.66,3.7-3.7,3.7-3.7-1.66-3.7-3.7Zm8.62,9.97c3.67-1.81,6.2-5.6,6.2-9.97,0-6.14-4.97-11.11-11.11-11.11s-11.11,4.97-11.11,11.11c0,4.37,2.52,8.15,6.2,9.97l-8.02,21.4-12.74-8.49c2.13-2.02,3.46-4.89,3.46-8.06,0-6.14-4.97-11.11-11.11-11.11s-11.11,4.97-11.11,11.11c0,5.1,3.44,9.4,8.12,10.7l6.58,26.33-2.33,9.31c-1.17,4.68,2.37,9.2,7.19,9.2h49.77c4.82,0,8.36-4.53,7.19-9.2l-2.33-9.31,6.58-26.33c4.68-1.31,8.12-5.6,8.12-10.7,0-6.14-4.97-11.11-11.11-11.11s-11.11,4.97-11.11,11.11c0,3.17,1.33,6.03,3.46,8.06l-12.74,8.49-8.02-21.4Zm28.42,8.55h0c2.05,0,3.7-1.66,3.7-3.7s-1.66-3.7-3.7-3.7-3.7,1.66-3.7,3.7,1.66,3.7,3.7,3.7Zm-62.96-3.7c0,2.04-1.66,3.7-3.7,3.7h0c-2.05,0-3.7-1.66-3.7-3.7s1.66-3.7,3.7-3.7,3.7,1.66,3.7,3.7Zm4.74,48.15l1.85-7.41h46.07l1.85,7.41H25.11Zm52.3-32.35l-4.38,17.53H26.97l-4.38-17.53,14.25,9.5c.94,.63,2.12,.79,3.19,.44,1.08-.35,1.93-1.17,2.33-2.22l7.64-20.38,7.64,20.38c.4,1.06,1.26,1.88,2.33,2.22,1.08,.35,2.25,.18,3.19-.44l14.25-9.5Z';

  function render() {
    const colors = getColors();
    const threatened = mode === 'interactive' ? getThreatenedSquares() : new Set();
    const conflicts = mode === 'interactive' ? getConflictingQueens() : new Set();
    const queenCount = queens.size;

    cells.forEach(({ element, row, col, isLight, queenContainer }) => {
      const baseColor = isLight ? colors.lightSquare : colors.darkSquare;
      const hasQueen = queens.has(\`\${row},\${col}\`);
      const isThreatened = threatened.has(\`\${row},\${col}\`);
      const isConflicting = conflicts.has(\`\${row},\${col}\`);

      // Set background (threat tinting respects light/dark checkerboard pattern)
      if (mode === 'interactive' && isThreatened && !hasQueen) {
        element.style.backgroundColor = isLight ? colors.threatLightSquare : colors.threatDarkSquare;
      } else {
        element.style.backgroundColor = baseColor;
      }

      // Update queen visibility and color (don't recreate DOM)
      if (hasQueen) {
        const fillColor = isConflicting ? colors.conflictColor : colors.queenColor;
        queenContainer.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100%;height:100%;fill:\${fillColor}"><path d="\${queenSvgPath}" fill-rule="evenodd"/></svg>\`;
        queenContainer.style.display = 'block';
      } else {
        queenContainer.style.display = 'none';
      }
    });

    // Update status
    if (statusEl) {
      if (conflicts.size > 0) {
        statusEl.textContent = \`\${queenCount} queen\${queenCount !== 1 ? 's' : ''} placed — conflict detected!\`;
      } else if (queenCount === BOARD_SIZE) {
        statusEl.textContent = 'Congratulations! All 8 queens placed with no conflicts!';
      } else {
        statusEl.textContent = \`\${queenCount} of \${BOARD_SIZE} queens placed\`;
      }
    }
  }

  // Theme change handler
  api.onThemeChange(() => {
    // Just re-render, which will use the current theme colors
    render();
  });

  render();
}`,css:`.interactive .grid > div:hover {
  opacity: 0.9;
}`,startLine:46}}};export{n as default};
