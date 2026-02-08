const n={slug:"9-dots",metadata:{id:"puzzle-46",title:"9 Dots",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["lateral-thinking"],tags:["has-solution"],questionPreview:`Connect 9 dots arranged in a 3×3 grid using only four straight lines, without lifting your pen.
`,credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-03",lastUpdated:"2026-02-03",preview:"You have 9 dots arranged in a 3×3 grid: Without lifting your pen, draw four straight lines that pass through all 9 dots.",websitePreview:"You have 9 dots arranged in a 3×3 grid: Without lifting your pen, draw four straight lines that pass through all 9 dots."},content:`<p>You have 9 dots arranged in a 3×3 grid:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Without lifting your pen, draw four straight lines that pass through all 9 dots.</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The phrase “think outside the box” is thought to have been coined from this puzzle.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
You have 9 dots arranged in a 3×3 grid:

:::dynamic
\`\`\`yaml
title: "Nine dots arranged in a 3×3 grid"
use: '#nine-dots-grid'
\`\`\`
:::

Without lifting your pen, draw four straight lines that pass through all 9 dots.

:::hint
The phrase “think outside the box” is thought to have been coined from this puzzle.
:::

::::solution
:::dynamic
\`\`\`yaml
title: "9 dots solution with four lines"
use: '#nine-dots-grid'
props:
  showSolution: true
\`\`\`
:::
::::


:::component[nine-dots-grid]
\`\`\`js
function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');
  const showSolution = props?.showSolution || false;

  // Responsive sizing with max width
  const size = Math.min(width, showSolution ? 300 : 200);

  // Get theme-aware colors
  const dotColor = api.getColor('foreground');
  const lineColor = api.getColor('primary');

  // Dot configuration
  const dotRadius = size * 0.025;
  const padding = size * 0.1; // Reduced padding
  const gridSize = size - (padding * 2);
  const spacing = gridSize / 2;

  // Extra space needed for solution lines extending beyond grid
  const extraSpace = showSolution ? spacing : 0;

  canvas.width = size + extraSpace;
  canvas.height = size + extraSpace;

  // Calculate dot positions
  const dots = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      dots.push({
        x: padding + (col * spacing),
        y: padding + (row * spacing)
      });
    }
  }

  // Helper function to draw an arrowhead centered at a point along a line
  function drawArrowhead(fromX, fromY, toX, toY, position = 0.5) {
    const arrowSize = size * 0.04;
    // Calculate position along line
    const posX = fromX + (toX - fromX) * position;
    const posY = fromY + (toY - fromY) * position;
    // Calculate angle of line
    const angle = Math.atan2(toY - fromY, toX - fromX);

    // Offset tip forward so arrow is centered on position
    const halfArrow = arrowSize * Math.cos(Math.PI / 6) / 2;
    const tipX = posX + halfArrow * Math.cos(angle);
    const tipY = posY + halfArrow * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(
      tipX - arrowSize * Math.cos(angle - Math.PI / 6),
      tipY - arrowSize * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(
      tipX - arrowSize * Math.cos(angle + Math.PI / 6),
      tipY - arrowSize * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }

  // Draw solution lines first (so dots appear on top)
  if (showSolution) {
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Solution path (starting from bottom-right):
    // 1. Start at bottom-right, go diagonally up-left to left of top-left (one dot lower than before)
    // 2. Go right through top row to past top-right
    // 3. Diagonal down-left through middle-right and bottom-center to below bottom-left
    // 4. Go up through left column back to top-left

    const point1 = dots[8]; // bottom-right (start)
    const point2 = { x: dots[0].x, y: dots[0].y }; // at top-left
    const point3 = { x: dots[2].x + spacing, y: dots[2].y }; // past top-right
    const point4 = { x: dots[6].x, y: dots[6].y + spacing }; // below bottom-left
    const point5 = dots[0]; // top-left (end)

    ctx.beginPath();
    // Line 1: bottom-right diagonally to left of top-left
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    // Line 2: right through top row to past top-right
    ctx.lineTo(point3.x, point3.y);
    // Line 3: diagonal down-left to below bottom-left
    ctx.lineTo(point4.x, point4.y);
    // Line 4: up through left column
    ctx.lineTo(point5.x, point5.y);
    ctx.stroke();

    // Draw arrowheads along each line
    drawArrowhead(point1.x, point1.y, point2.x, point2.y, 0.375); // 37.5%
    drawArrowhead(point2.x, point2.y, point3.x, point3.y, 0.5); // 50%
    drawArrowhead(point3.x, point3.y, point4.x, point4.y, 0.5 - 1/12); // ~41.7%
    drawArrowhead(point4.x, point4.y, point5.x, point5.y, 0.5);
  }

  // Draw dots first (so markers appear on top)
  dots.forEach(({ x, y }) => {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();
  });

  // Draw numbered markers on top of dots (only in solution mode)
  if (showSolution) {
    const point2 = { x: padding, y: padding }; // top-left
    const point3 = { x: padding + gridSize + spacing, y: padding }; // past top-right
    const point4 = { x: padding, y: padding + gridSize + spacing }; // below bottom-left

    const markers = [
      { pos: point2, label: '1' },
      { pos: point3, label: '2' },
      { pos: point4, label: '3' }
    ];

    ctx.font = \`bold \${size * 0.06}px sans-serif\`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    markers.forEach(({ pos, label }) => {
      // Draw circle background (blue)
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * 0.04, 0, Math.PI * 2);
      ctx.fillStyle = lineColor;
      ctx.fill();

      // Draw number
      ctx.fillStyle = api.getColor('background');
      ctx.fillText(label, pos.x, pos.y);
    });
  }
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#nine-dots-grid",title:"Nine dots arranged in a 3×3 grid",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/lateral-thinking/9-dots.md"},{type:"dynamic",mode:"component",componentId:"#nine-dots-grid",props:{showSolution:!0},title:"9 dots solution with four lines",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/lateral-thinking/9-dots.md"}],inlineComponents:{"nine-dots-grid":{id:"nine-dots-grid",code:`function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');
  const showSolution = props?.showSolution || false;

  // Responsive sizing with max width
  const size = Math.min(width, showSolution ? 300 : 200);

  // Get theme-aware colors
  const dotColor = api.getColor('foreground');
  const lineColor = api.getColor('primary');

  // Dot configuration
  const dotRadius = size * 0.025;
  const padding = size * 0.1; // Reduced padding
  const gridSize = size - (padding * 2);
  const spacing = gridSize / 2;

  // Extra space needed for solution lines extending beyond grid
  const extraSpace = showSolution ? spacing : 0;

  canvas.width = size + extraSpace;
  canvas.height = size + extraSpace;

  // Calculate dot positions
  const dots = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      dots.push({
        x: padding + (col * spacing),
        y: padding + (row * spacing)
      });
    }
  }

  // Helper function to draw an arrowhead centered at a point along a line
  function drawArrowhead(fromX, fromY, toX, toY, position = 0.5) {
    const arrowSize = size * 0.04;
    // Calculate position along line
    const posX = fromX + (toX - fromX) * position;
    const posY = fromY + (toY - fromY) * position;
    // Calculate angle of line
    const angle = Math.atan2(toY - fromY, toX - fromX);

    // Offset tip forward so arrow is centered on position
    const halfArrow = arrowSize * Math.cos(Math.PI / 6) / 2;
    const tipX = posX + halfArrow * Math.cos(angle);
    const tipY = posY + halfArrow * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(
      tipX - arrowSize * Math.cos(angle - Math.PI / 6),
      tipY - arrowSize * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(
      tipX - arrowSize * Math.cos(angle + Math.PI / 6),
      tipY - arrowSize * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }

  // Draw solution lines first (so dots appear on top)
  if (showSolution) {
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Solution path (starting from bottom-right):
    // 1. Start at bottom-right, go diagonally up-left to left of top-left (one dot lower than before)
    // 2. Go right through top row to past top-right
    // 3. Diagonal down-left through middle-right and bottom-center to below bottom-left
    // 4. Go up through left column back to top-left

    const point1 = dots[8]; // bottom-right (start)
    const point2 = { x: dots[0].x, y: dots[0].y }; // at top-left
    const point3 = { x: dots[2].x + spacing, y: dots[2].y }; // past top-right
    const point4 = { x: dots[6].x, y: dots[6].y + spacing }; // below bottom-left
    const point5 = dots[0]; // top-left (end)

    ctx.beginPath();
    // Line 1: bottom-right diagonally to left of top-left
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    // Line 2: right through top row to past top-right
    ctx.lineTo(point3.x, point3.y);
    // Line 3: diagonal down-left to below bottom-left
    ctx.lineTo(point4.x, point4.y);
    // Line 4: up through left column
    ctx.lineTo(point5.x, point5.y);
    ctx.stroke();

    // Draw arrowheads along each line
    drawArrowhead(point1.x, point1.y, point2.x, point2.y, 0.375); // 37.5%
    drawArrowhead(point2.x, point2.y, point3.x, point3.y, 0.5); // 50%
    drawArrowhead(point3.x, point3.y, point4.x, point4.y, 0.5 - 1/12); // ~41.7%
    drawArrowhead(point4.x, point4.y, point5.x, point5.y, 0.5);
  }

  // Draw dots first (so markers appear on top)
  dots.forEach(({ x, y }) => {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();
  });

  // Draw numbered markers on top of dots (only in solution mode)
  if (showSolution) {
    const point2 = { x: padding, y: padding }; // top-left
    const point3 = { x: padding + gridSize + spacing, y: padding }; // past top-right
    const point4 = { x: padding, y: padding + gridSize + spacing }; // below bottom-left

    const markers = [
      { pos: point2, label: '1' },
      { pos: point3, label: '2' },
      { pos: point4, label: '3' }
    ];

    ctx.font = \`bold \${size * 0.06}px sans-serif\`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    markers.forEach(({ pos, label }) => {
      // Draw circle background (blue)
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * 0.04, 0, Math.PI * 2);
      ctx.fillStyle = lineColor;
      ctx.fill();

      // Draw number
      ctx.fillStyle = api.getColor('background');
      ctx.fillText(label, pos.x, pos.y);
    });
  }
}`,startLine:48}}};export{n as default};
