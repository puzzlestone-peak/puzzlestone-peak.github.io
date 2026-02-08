const t={slug:"equal-shape-cutting-1",metadata:{id:"puzzle-draft-67",title:"Equal Shape Cutting 1",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["geometry"],tags:["has-solution","starter"],credit:"Classic geometry puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",nextPuzzle:"equal-shape-cutting-2",preview:"Cut the triangle into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.",websitePreview:"Cut the triangle into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size."},content:`<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Cut the triangle into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Connect the midpoints of each side of the triangle. This divides the original triangle into 4 congruent equilateral triangles, each with half the side length of the original.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
:::dynamic
\`\`\`yaml
title: "Equilateral triangle"
use: '#triangle-diagram'
props:
  mode: puzzle
\`\`\`
:::

Cut the triangle into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.

::::solution

Connect the midpoints of each side of the triangle. This divides the original triangle into 4 congruent equilateral triangles, each with half the side length of the original.

:::dynamic
\`\`\`yaml
title: "Equilateral triangle divided into 4 smaller triangles"
use: '#triangle-diagram'
props:
  mode: solution
\`\`\`
:::

::::


:::component[triangle-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const solutionLineWidth = 4;
  const imageSize = Math.min(width, 350);
  const padding = 15;

  // Mode: 'puzzle', 'solution', or 'guides'
  const mode = props?.mode || 'puzzle';

  // Calculate equilateral triangle dimensions
  const triangleWidth = imageSize - (2 * padding);
  const triangleHeight = triangleWidth * (Math.sqrt(3) / 2);
  const canvasHeight = triangleHeight + (2 * padding);

  canvas.width = imageSize;
  canvas.height = canvasHeight;

  // Get foreground color for main triangle
  const foregroundColor = api.getColor('foreground');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate triangle vertices
  const centerX = imageSize / 2;
  const topVertex = { x: centerX, y: padding };
  const bottomLeftVertex = { x: padding, y: padding + triangleHeight };
  const bottomRightVertex = { x: imageSize - padding, y: padding + triangleHeight };

  // Calculate midpoints
  const midBottom = {
    x: (bottomLeftVertex.x + bottomRightVertex.x) / 2,
    y: (bottomLeftVertex.y + bottomRightVertex.y) / 2
  };
  const midLeft = {
    x: (bottomLeftVertex.x + topVertex.x) / 2,
    y: (bottomLeftVertex.y + topVertex.y) / 2
  };
  const midRight = {
    x: (bottomRightVertex.x + topVertex.x) / 2,
    y: (bottomRightVertex.y + topVertex.y) / 2
  };

  // Draw solution lines if mode is 'solution'
  if (mode === 'solution') {
    ctx.beginPath();
    ctx.moveTo(midBottom.x, midBottom.y);
    ctx.lineTo(midLeft.x, midLeft.y);
    ctx.moveTo(midBottom.x, midBottom.y);
    ctx.lineTo(midRight.x, midRight.y);
    ctx.moveTo(midLeft.x, midLeft.y);
    ctx.lineTo(midRight.x, midRight.y);
    ctx.strokeStyle = api.getColor('primary');
    ctx.lineWidth = solutionLineWidth;
    ctx.lineCap = 'butt';
    ctx.stroke();
  }

  // Draw main triangle (on top of solution lines)
  ctx.beginPath();
  ctx.moveTo(topVertex.x, topVertex.y);
  ctx.lineTo(bottomLeftVertex.x, bottomLeftVertex.y);
  ctx.lineTo(bottomRightVertex.x, bottomRightVertex.y);
  ctx.closePath();
  ctx.strokeStyle = foregroundColor;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Draw midpoint markers if mode is 'guides'
  if (mode === 'guides') {
    const dotRadius = 4;
    ctx.fillStyle = api.getColor('primary');

    // Draw dots at midpoints
    ctx.beginPath();
    ctx.arc(midBottom.x, midBottom.y, dotRadius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(midLeft.x, midLeft.y, dotRadius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(midRight.x, midRight.y, dotRadius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#triangle-diagram",props:{mode:"puzzle"},title:"Equilateral triangle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-1.md"},{type:"dynamic",mode:"component",componentId:"#triangle-diagram",props:{mode:"solution"},title:"Equilateral triangle divided into 4 smaller triangles",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-1.md"}],inlineComponents:{"triangle-diagram":{id:"triangle-diagram",code:`function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const solutionLineWidth = 4;
  const imageSize = Math.min(width, 350);
  const padding = 15;

  // Mode: 'puzzle', 'solution', or 'guides'
  const mode = props?.mode || 'puzzle';

  // Calculate equilateral triangle dimensions
  const triangleWidth = imageSize - (2 * padding);
  const triangleHeight = triangleWidth * (Math.sqrt(3) / 2);
  const canvasHeight = triangleHeight + (2 * padding);

  canvas.width = imageSize;
  canvas.height = canvasHeight;

  // Get foreground color for main triangle
  const foregroundColor = api.getColor('foreground');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate triangle vertices
  const centerX = imageSize / 2;
  const topVertex = { x: centerX, y: padding };
  const bottomLeftVertex = { x: padding, y: padding + triangleHeight };
  const bottomRightVertex = { x: imageSize - padding, y: padding + triangleHeight };

  // Calculate midpoints
  const midBottom = {
    x: (bottomLeftVertex.x + bottomRightVertex.x) / 2,
    y: (bottomLeftVertex.y + bottomRightVertex.y) / 2
  };
  const midLeft = {
    x: (bottomLeftVertex.x + topVertex.x) / 2,
    y: (bottomLeftVertex.y + topVertex.y) / 2
  };
  const midRight = {
    x: (bottomRightVertex.x + topVertex.x) / 2,
    y: (bottomRightVertex.y + topVertex.y) / 2
  };

  // Draw solution lines if mode is 'solution'
  if (mode === 'solution') {
    ctx.beginPath();
    ctx.moveTo(midBottom.x, midBottom.y);
    ctx.lineTo(midLeft.x, midLeft.y);
    ctx.moveTo(midBottom.x, midBottom.y);
    ctx.lineTo(midRight.x, midRight.y);
    ctx.moveTo(midLeft.x, midLeft.y);
    ctx.lineTo(midRight.x, midRight.y);
    ctx.strokeStyle = api.getColor('primary');
    ctx.lineWidth = solutionLineWidth;
    ctx.lineCap = 'butt';
    ctx.stroke();
  }

  // Draw main triangle (on top of solution lines)
  ctx.beginPath();
  ctx.moveTo(topVertex.x, topVertex.y);
  ctx.lineTo(bottomLeftVertex.x, bottomLeftVertex.y);
  ctx.lineTo(bottomRightVertex.x, bottomRightVertex.y);
  ctx.closePath();
  ctx.strokeStyle = foregroundColor;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Draw midpoint markers if mode is 'guides'
  if (mode === 'guides') {
    const dotRadius = 4;
    ctx.fillStyle = api.getColor('primary');

    // Draw dots at midpoints
    ctx.beginPath();
    ctx.arc(midBottom.x, midBottom.y, dotRadius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(midLeft.x, midLeft.y, dotRadius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(midRight.x, midRight.y, dotRadius, 0, 2 * Math.PI);
    ctx.fill();
  }
}`,startLine:47}}};export{t as default};
