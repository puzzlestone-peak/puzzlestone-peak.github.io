const n={slug:"equal-shape-cutting-4",metadata:{id:"puzzle-draft-70",title:"Equal Shape Cutting 4",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["geometry"],tags:["has-solution"],credit:"Classic geometry puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",previousPuzzle:"equal-shape-cutting-3",preview:"With 1 cut, divide the zigzag shape into 2 equal shapes of itself. The cut does not have to be straight, but has to be a connected line. The shapes can be...",websitePreview:"With 1 cut, divide the zigzag shape into 2 equal shapes of itself. The cut does not have to be straight, but has to be a connected line. The shapes can be..."},content:`<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>With 1 cut, divide the zigzag shape into 2 equal shapes of itself. The cut does not have to be straight, but has to be a connected line. The shapes can be rotated, but they both must be of the same size.</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>You can visualise the solution by splitting the original image into squares.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
:::dynamic
\`\`\`yaml
title: "Zigzag shape"
use: '#zigzag-diagram'
props:
  mode: puzzle
\`\`\`
:::

With 1 cut, divide the zigzag shape into 2 equal shapes of itself. The cut does not have to be straight, but has to be a connected line. The shapes can be rotated, but they both must be of the same size.

::::solution

:::dynamic
\`\`\`yaml
title: "Zigzag shape divided into 2 smaller zigzag shapes"
use: '#zigzag-diagram'
props:
  mode: solution
\`\`\`
:::

You can visualise the solution by splitting the original image into squares.

:::dynamic
\`\`\`yaml
title: "Zigzag shape divided into 2 smaller zigzag shapes"
use: '#zigzag-diagram'
props:
  mode: guides
\`\`\`
:::

::::


:::component[zigzag-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const guideLineWidth = 0.5;
  const dividerLineWidth = 4;
  const padding = 30;

  // Mode: 'puzzle', 'solution', or 'guides'
  const mode = props?.mode || 'puzzle';

  // Diamond grid: 5x5 grid of diamond cells
  const gridSize = 5;
  const cellSize = 40; // Size of each diamond (distance from center to vertex)

  // Pattern: X = empty, A = first half, B = second half
  // Rotated 45° counterclockwise from original grid
  const pattern = [
    ['X', 'X', 'B', 'B', 'X'],
    ['X', 'X', 'B', 'B', 'B'],
    ['X', 'A', 'A', 'B', 'X'],
    ['A', 'A', 'A', 'X', 'X'],
    ['X', 'A', 'X', 'X', 'X']
  ];

  // Calculate bounds of non-empty cells
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (pattern[row][col] !== 'X') {
        const x = (col - row) * cellSize;
        const y = (col + row - gridSize + 1) * cellSize;
        minX = Math.min(minX, x - cellSize);
        maxX = Math.max(maxX, x + cellSize);
        minY = Math.min(minY, y - cellSize);
        maxY = Math.max(maxY, y + cellSize);
      }
    }
  }

  // Canvas dimensions based on actual shape bounds
  const shapeWidth = maxX - minX;
  const shapeHeight = maxY - minY;
  const canvasWidth = Math.min(width, shapeWidth + 2 * padding);
  const canvasHeight = shapeHeight + 2 * padding;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Offset to center the shape
  const offsetX = canvasWidth / 2 - (minX + maxX) / 2;
  const offsetY = canvasHeight / 2 - (minY + maxY) / 2;

  // Get colors
  const foregroundColor = api.getColor('foreground');
  const primaryColor = api.getColor('primary');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Draw guides (thin grid lines) if mode is 'guides'
  if (mode === 'guides') {
    ctx.strokeStyle = foregroundColor;
    ctx.lineWidth = guideLineWidth;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cell = pattern[row][col];
        if (cell === 'X') continue;

        const x = offsetX + (col - row) * cellSize;
        const y = offsetY + (col + row - gridSize + 1) * cellSize;

        ctx.beginPath();
        ctx.moveTo(x, y - cellSize);
        ctx.lineTo(x + cellSize, y);
        ctx.lineTo(x, y + cellSize);
        ctx.lineTo(x - cellSize, y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  // Draw outline
  ctx.strokeStyle = foregroundColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();

  // Trace the outer boundary of the shape
  const cells = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (pattern[row][col] !== 'X') {
        cells.push({ row, col, value: pattern[row][col] });
      }
    }
  }

  // Find outline by checking which edges are external
  const edges = [];
  for (const { row, col } of cells) {
    const x = offsetX + (col - row) * cellSize;
    const y = offsetY + (col + row - gridSize + 1) * cellSize;

    const neighbors = [
      { dr: -1, dc: 0, edge: [[x, y - cellSize], [x + cellSize, y]] },      // top
      { dr: 0, dc: 1, edge: [[x + cellSize, y], [x, y + cellSize]] },       // right
      { dr: 1, dc: 0, edge: [[x, y + cellSize], [x - cellSize, y]] },       // bottom
      { dr: 0, dc: -1, edge: [[x - cellSize, y], [x, y - cellSize]] }       // left
    ];

    for (const { dr, dc, edge } of neighbors) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize || pattern[nr][nc] === 'X') {
        edges.push(edge);
      }
    }
  }

  // Draw outline edges
  for (const [[x1, y1], [x2, y2]] of edges) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  }
  ctx.stroke();

  // Draw divider between A and B regions if mode is 'solution' or 'guides'
  if (mode === 'solution' || mode === 'guides') {
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = dividerLineWidth;
    ctx.lineCap = 'butt';
    ctx.beginPath();

    // Find edges between A and B cells
    for (const { row, col, value } of cells) {
      if (value !== 'A') continue;

      const x = offsetX + (col - row) * cellSize;
      const y = offsetY + (col + row - gridSize + 1) * cellSize;

      const neighbors = [
        { dr: -1, dc: 0, edge: [[x, y - cellSize], [x + cellSize, y]] },
        { dr: 0, dc: 1, edge: [[x + cellSize, y], [x, y + cellSize]] },
        { dr: 1, dc: 0, edge: [[x, y + cellSize], [x - cellSize, y]] },
        { dr: 0, dc: -1, edge: [[x - cellSize, y], [x, y - cellSize]] }
      ];

      for (const { dr, dc, edge } of neighbors) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize && pattern[nr][nc] === 'B') {
          const [[x1, y1], [x2, y2]] = edge;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
      }
    }
    ctx.stroke();
  }
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#zigzag-diagram",props:{mode:"puzzle"},title:"Zigzag shape",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-4.md"},{type:"dynamic",mode:"component",componentId:"#zigzag-diagram",props:{mode:"solution"},title:"Zigzag shape divided into 2 smaller zigzag shapes",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-4.md"},{type:"dynamic",mode:"component",componentId:"#zigzag-diagram",props:{mode:"guides"},title:"Zigzag shape divided into 2 smaller zigzag shapes",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-4.md"}],inlineComponents:{"zigzag-diagram":{id:"zigzag-diagram",code:`function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const guideLineWidth = 0.5;
  const dividerLineWidth = 4;
  const padding = 30;

  // Mode: 'puzzle', 'solution', or 'guides'
  const mode = props?.mode || 'puzzle';

  // Diamond grid: 5x5 grid of diamond cells
  const gridSize = 5;
  const cellSize = 40; // Size of each diamond (distance from center to vertex)

  // Pattern: X = empty, A = first half, B = second half
  // Rotated 45° counterclockwise from original grid
  const pattern = [
    ['X', 'X', 'B', 'B', 'X'],
    ['X', 'X', 'B', 'B', 'B'],
    ['X', 'A', 'A', 'B', 'X'],
    ['A', 'A', 'A', 'X', 'X'],
    ['X', 'A', 'X', 'X', 'X']
  ];

  // Calculate bounds of non-empty cells
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (pattern[row][col] !== 'X') {
        const x = (col - row) * cellSize;
        const y = (col + row - gridSize + 1) * cellSize;
        minX = Math.min(minX, x - cellSize);
        maxX = Math.max(maxX, x + cellSize);
        minY = Math.min(minY, y - cellSize);
        maxY = Math.max(maxY, y + cellSize);
      }
    }
  }

  // Canvas dimensions based on actual shape bounds
  const shapeWidth = maxX - minX;
  const shapeHeight = maxY - minY;
  const canvasWidth = Math.min(width, shapeWidth + 2 * padding);
  const canvasHeight = shapeHeight + 2 * padding;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Offset to center the shape
  const offsetX = canvasWidth / 2 - (minX + maxX) / 2;
  const offsetY = canvasHeight / 2 - (minY + maxY) / 2;

  // Get colors
  const foregroundColor = api.getColor('foreground');
  const primaryColor = api.getColor('primary');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Draw guides (thin grid lines) if mode is 'guides'
  if (mode === 'guides') {
    ctx.strokeStyle = foregroundColor;
    ctx.lineWidth = guideLineWidth;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cell = pattern[row][col];
        if (cell === 'X') continue;

        const x = offsetX + (col - row) * cellSize;
        const y = offsetY + (col + row - gridSize + 1) * cellSize;

        ctx.beginPath();
        ctx.moveTo(x, y - cellSize);
        ctx.lineTo(x + cellSize, y);
        ctx.lineTo(x, y + cellSize);
        ctx.lineTo(x - cellSize, y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  // Draw outline
  ctx.strokeStyle = foregroundColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();

  // Trace the outer boundary of the shape
  const cells = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (pattern[row][col] !== 'X') {
        cells.push({ row, col, value: pattern[row][col] });
      }
    }
  }

  // Find outline by checking which edges are external
  const edges = [];
  for (const { row, col } of cells) {
    const x = offsetX + (col - row) * cellSize;
    const y = offsetY + (col + row - gridSize + 1) * cellSize;

    const neighbors = [
      { dr: -1, dc: 0, edge: [[x, y - cellSize], [x + cellSize, y]] },      // top
      { dr: 0, dc: 1, edge: [[x + cellSize, y], [x, y + cellSize]] },       // right
      { dr: 1, dc: 0, edge: [[x, y + cellSize], [x - cellSize, y]] },       // bottom
      { dr: 0, dc: -1, edge: [[x - cellSize, y], [x, y - cellSize]] }       // left
    ];

    for (const { dr, dc, edge } of neighbors) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize || pattern[nr][nc] === 'X') {
        edges.push(edge);
      }
    }
  }

  // Draw outline edges
  for (const [[x1, y1], [x2, y2]] of edges) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  }
  ctx.stroke();

  // Draw divider between A and B regions if mode is 'solution' or 'guides'
  if (mode === 'solution' || mode === 'guides') {
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = dividerLineWidth;
    ctx.lineCap = 'butt';
    ctx.beginPath();

    // Find edges between A and B cells
    for (const { row, col, value } of cells) {
      if (value !== 'A') continue;

      const x = offsetX + (col - row) * cellSize;
      const y = offsetY + (col + row - gridSize + 1) * cellSize;

      const neighbors = [
        { dr: -1, dc: 0, edge: [[x, y - cellSize], [x + cellSize, y]] },
        { dr: 0, dc: 1, edge: [[x + cellSize, y], [x, y + cellSize]] },
        { dr: 1, dc: 0, edge: [[x, y + cellSize], [x - cellSize, y]] },
        { dr: 0, dc: -1, edge: [[x - cellSize, y], [x, y - cellSize]] }
      ];

      for (const { dr, dc, edge } of neighbors) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize && pattern[nr][nc] === 'B') {
          const [[x1, y1], [x2, y2]] = edge;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
      }
    }
    ctx.stroke();
  }
}`,startLine:55}}};export{n as default};
