const e={slug:"equal-shape-cutting-2",metadata:{id:"puzzle-draft-68",title:"Equal Shape Cutting 2",difficulty:"easy",concepts:["geometry"],tags:["has-solution","starter"],previousPuzzle:"equal-shape-cutting-1",nextPuzzle:"equal-shape-cutting-3",credit:"Classic geometry puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",preview:"Cut the L-shape into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.",websitePreview:"Cut the L-shape into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size."},content:`<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Cut the L-shape into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>You can visualize the solution by dividing the L shape into squares:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
:::dynamic
\`\`\`yaml
title: "L-shaped figure"
use: '#l-shape-diagram'
props:
  mode: puzzle
\`\`\`
:::

Cut the L-shape into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.

::::solution

:::dynamic
\`\`\`yaml
title: "L-shape divided into 4 smaller L-shapes"
use: '#l-shape-diagram'
props:
  mode: solution
\`\`\`
:::

You can visualize the solution by dividing the L shape into squares:

:::dynamic
\`\`\`yaml
title: "Grid structure of the L-shape"
use: '#l-shape-diagram'
props:
  mode: guides
\`\`\`
:::

::::


:::component[l-shape-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const solutionLineWidth = 4;
  const guideLineWidth = 0.5;
  const maxSize = 350;
  const imageSize = Math.min(width, maxSize);
  const padding = 15;
  const gridSize = 4;

  // Mode: 'puzzle', 'solution', or 'guides'
  const mode = props?.mode || 'puzzle';

  const cellSize = (imageSize - 2 * padding) / gridSize;
  const canvasHeight = cellSize * gridSize + 2 * padding;

  canvas.width = imageSize;
  canvas.height = canvasHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grid lines if mode is 'guides'
  if (mode === 'guides') {
    ctx.strokeStyle = api.getColor('foreground');
    ctx.lineWidth = guideLineWidth;
    ctx.beginPath();

    // Draw vertical grid lines
    for (let i = 1; i < gridSize; i++) {
      const x = padding + cellSize * i;
      // Only draw within the L-shape bounds
      if (i <= 2) {
        // Left part of L (top to bottom)
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + cellSize * 4);
      } else {
        // Right part of L (from row 2 to bottom)
        ctx.moveTo(x, padding + cellSize * 2);
        ctx.lineTo(x, padding + cellSize * 4);
      }
    }

    // Draw horizontal grid lines
    for (let i = 1; i < gridSize; i++) {
      const y = padding + cellSize * i;
      if (i < 2) {
        // Top part (left side only)
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + cellSize * 2, y);
      } else {
        // Bottom part (full width)
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + cellSize * 4, y);
      }
    }

    ctx.stroke();
  }

  // Draw solution lines if mode is 'solution'
  if (mode === 'solution' || mode === 'guides') {
    ctx.beginPath();

    // Horizontal division lines
    ctx.moveTo(padding + cellSize, padding + cellSize);
    ctx.lineTo(padding + cellSize * 2, padding + cellSize);
    ctx.moveTo(padding, padding + cellSize * 2);
    ctx.lineTo(padding + cellSize, padding + cellSize * 2);
    ctx.moveTo(padding + cellSize, padding + cellSize * 3);
    ctx.lineTo(padding + cellSize * 3, padding + cellSize * 3);

    // Vertical division lines
    ctx.moveTo(padding + cellSize, padding + cellSize);
    ctx.lineTo(padding + cellSize, padding + cellSize * 3);
    ctx.moveTo(padding + cellSize * 3, padding + cellSize * 2);
    ctx.lineTo(padding + cellSize * 3, padding + cellSize * 3);
    ctx.moveTo(padding + cellSize * 2, padding + cellSize * 3);
    ctx.lineTo(padding + cellSize * 2, padding + cellSize * 4);

    ctx.strokeStyle = api.getColor('primary');
    ctx.lineWidth = solutionLineWidth;
    ctx.lineCap = 'butt';
    ctx.stroke();
  }

  // Draw main L-shape outline
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding + cellSize * 2, padding);
  ctx.lineTo(padding + cellSize * 2, padding + cellSize * 2);
  ctx.lineTo(padding + cellSize * 4, padding + cellSize * 2);
  ctx.lineTo(padding + cellSize * 4, padding + cellSize * 4);
  ctx.lineTo(padding, padding + cellSize * 4);
  ctx.closePath();
  ctx.strokeStyle = api.getColor('foreground');
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#l-shape-diagram",props:{mode:"puzzle"},title:"L-shaped figure",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-2.md"},{type:"dynamic",mode:"component",componentId:"#l-shape-diagram",props:{mode:"solution"},title:"L-shape divided into 4 smaller L-shapes",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-2.md"},{type:"dynamic",mode:"component",componentId:"#l-shape-diagram",props:{mode:"guides"},title:"Grid structure of the L-shape",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-2.md"}],inlineComponents:{"l-shape-diagram":{id:"l-shape-diagram",code:`function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const solutionLineWidth = 4;
  const guideLineWidth = 0.5;
  const maxSize = 350;
  const imageSize = Math.min(width, maxSize);
  const padding = 15;
  const gridSize = 4;

  // Mode: 'puzzle', 'solution', or 'guides'
  const mode = props?.mode || 'puzzle';

  const cellSize = (imageSize - 2 * padding) / gridSize;
  const canvasHeight = cellSize * gridSize + 2 * padding;

  canvas.width = imageSize;
  canvas.height = canvasHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grid lines if mode is 'guides'
  if (mode === 'guides') {
    ctx.strokeStyle = api.getColor('foreground');
    ctx.lineWidth = guideLineWidth;
    ctx.beginPath();

    // Draw vertical grid lines
    for (let i = 1; i < gridSize; i++) {
      const x = padding + cellSize * i;
      // Only draw within the L-shape bounds
      if (i <= 2) {
        // Left part of L (top to bottom)
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + cellSize * 4);
      } else {
        // Right part of L (from row 2 to bottom)
        ctx.moveTo(x, padding + cellSize * 2);
        ctx.lineTo(x, padding + cellSize * 4);
      }
    }

    // Draw horizontal grid lines
    for (let i = 1; i < gridSize; i++) {
      const y = padding + cellSize * i;
      if (i < 2) {
        // Top part (left side only)
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + cellSize * 2, y);
      } else {
        // Bottom part (full width)
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + cellSize * 4, y);
      }
    }

    ctx.stroke();
  }

  // Draw solution lines if mode is 'solution'
  if (mode === 'solution' || mode === 'guides') {
    ctx.beginPath();

    // Horizontal division lines
    ctx.moveTo(padding + cellSize, padding + cellSize);
    ctx.lineTo(padding + cellSize * 2, padding + cellSize);
    ctx.moveTo(padding, padding + cellSize * 2);
    ctx.lineTo(padding + cellSize, padding + cellSize * 2);
    ctx.moveTo(padding + cellSize, padding + cellSize * 3);
    ctx.lineTo(padding + cellSize * 3, padding + cellSize * 3);

    // Vertical division lines
    ctx.moveTo(padding + cellSize, padding + cellSize);
    ctx.lineTo(padding + cellSize, padding + cellSize * 3);
    ctx.moveTo(padding + cellSize * 3, padding + cellSize * 2);
    ctx.lineTo(padding + cellSize * 3, padding + cellSize * 3);
    ctx.moveTo(padding + cellSize * 2, padding + cellSize * 3);
    ctx.lineTo(padding + cellSize * 2, padding + cellSize * 4);

    ctx.strokeStyle = api.getColor('primary');
    ctx.lineWidth = solutionLineWidth;
    ctx.lineCap = 'butt';
    ctx.stroke();
  }

  // Draw main L-shape outline
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding + cellSize * 2, padding);
  ctx.lineTo(padding + cellSize * 2, padding + cellSize * 2);
  ctx.lineTo(padding + cellSize * 4, padding + cellSize * 2);
  ctx.lineTo(padding + cellSize * 4, padding + cellSize * 4);
  ctx.lineTo(padding, padding + cellSize * 4);
  ctx.closePath();
  ctx.strokeStyle = api.getColor('foreground');
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();
}`,startLine:55}}};export{e as default};
