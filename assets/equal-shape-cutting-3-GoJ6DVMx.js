const t={slug:"equal-shape-cutting-3",metadata:{id:"puzzle-draft-69",title:"Equal Shape Cutting 3",difficulty:"easy",concepts:["geometry"],tags:["has-solution"],credit:"Classic geometry puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",previousPuzzle:"equal-shape-cutting-2",nextPuzzle:"equal-shape-cutting-4",preview:"Cut the trapezoid into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.",websitePreview:"Cut the trapezoid into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size."},content:`<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Cut the trapezoid into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>You can visualize the solution by dividing the trapezoid into triangles:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
:::dynamic
\`\`\`yaml
title: "Trapezoid"
use: '#trapezoid-diagram'
props:
  mode: puzzle
\`\`\`
:::

Cut the trapezoid into 4 equal shapes of itself. The shapes can be rotated, but all 4 must be of the same size.

::::solution

:::dynamic
\`\`\`yaml
title: "Four trapezoid regions highlighted"
use: '#trapezoid-diagram'
props:
  mode: solution
\`\`\`
:::

You can visualize the solution by dividing the trapezoid into triangles:

:::dynamic
\`\`\`yaml
title: "Trapezoid triangle structure"
use: '#trapezoid-diagram'
props:
  mode: guides
\`\`\`
:::

::::


:::component[trapezoid-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const guideLineWidth = 0.5;
  const solutionLineWidth = 4;
  const padding = 20;
  const maxSize = 400;
  const imageSize = Math.min(width, maxSize);

  // Mode: 'puzzle', 'guides', or 'solution'
  const mode = props?.mode || 'puzzle';

  // Calculate trapezoid dimensions
  const triangleSize = imageSize / 4;
  const triangleHeight = triangleSize * Math.sqrt(3) / 2;
  const trapezoidHeight = 2 * triangleHeight;

  canvas.width = imageSize;
  canvas.height = trapezoidHeight + 2 * padding;

  // Get colors
  const foregroundColor = api.getColor('foreground');
  const primaryColor = api.getColor('primary');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Helper function to draw all triangles
  const drawTriangles = (strokeWidth) => {
    ctx.strokeStyle = foregroundColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Top row: 5 triangles starting at triangleSize (offset by 1 triangle width from trapezoid left edge)
    // Pattern: upright, inverted, upright, inverted, upright
    const topY = padding;

    for (let i = 0; i < 5; i++) {
      const x = triangleSize + i * (triangleSize / 2);
      ctx.beginPath();
      if (i % 2 === 0) {
        // Upright equilateral triangle
        ctx.moveTo(x, topY);
        ctx.lineTo(x + triangleSize / 2, topY + triangleHeight);
        ctx.lineTo(x - triangleSize / 2, topY + triangleHeight);
      } else {
        // Inverted equilateral triangle
        ctx.moveTo(x - triangleSize / 2, topY);
        ctx.lineTo(x + triangleSize / 2, topY);
        ctx.lineTo(x, topY + triangleHeight);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Bottom row: 7 triangles starting at 0
    // Pattern: upright, inverted, upright, inverted, upright, inverted, upright
    const bottomY = padding + triangleHeight;

    for (let i = 0; i < 7; i++) {
      const x = triangleSize / 2 + i * (triangleSize / 2);
      ctx.beginPath();
      if (i % 2 === 0) {
        // Upright equilateral triangle
        ctx.moveTo(x, bottomY);
        ctx.lineTo(x + triangleSize / 2, bottomY + triangleHeight);
        ctx.lineTo(x - triangleSize / 2, bottomY + triangleHeight);
      } else {
        // Inverted equilateral triangle
        ctx.moveTo(x - triangleSize / 2, bottomY);
        ctx.lineTo(x + triangleSize / 2, bottomY);
        ctx.lineTo(x, bottomY + triangleHeight);
      }
      ctx.closePath();
      ctx.stroke();
    }
  };

  // Helper function to draw trapezoid outline
  const drawOutline = () => {
    const topLeft = triangleSize;
    const topRight = triangleSize + 2 * triangleSize;
    const bottomLeft = 0;
    const bottomRight = imageSize;
    const topY = padding;
    const bottomY = padding + trapezoidHeight;

    ctx.beginPath();
    ctx.moveTo(topLeft, topY);
    ctx.lineTo(topRight, topY);
    ctx.lineTo(bottomRight, bottomY);
    ctx.lineTo(bottomLeft, bottomY);
    ctx.closePath();
    ctx.strokeStyle = foregroundColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  // Helper function to draw solution groupings
  const drawSolutionGroupings = () => {
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = solutionLineWidth;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';

    const ts = triangleSize;
    const row0 = padding;
    const row1 = padding + triangleHeight;
    const row2 = padding + trapezoidHeight;

    ctx.beginPath();

    // Line 1: diagonal from (ts, row0) to (1.5*ts, row1)
    ctx.moveTo(ts, row0);
    ctx.lineTo(1.5 * ts, row1);

    // Line 2: horizontal from (1.5*ts, row1) to (2.5*ts, row1)
    ctx.moveTo(1.5 * ts, row1);
    ctx.lineTo(2.5 * ts, row1);

    // Line 3: diagonal from (2.5*ts, row1) to (3*ts, row0)
    ctx.moveTo(2.5 * ts, row1);
    ctx.lineTo(3 * ts, row0);

    // Line 4: diagonal from (ts, row2) to (1.5*ts, row1)
    ctx.moveTo(ts, row2);
    ctx.lineTo(1.5 * ts, row1);

    // Line 5: diagonal from (2.5*ts, row1) to (3*ts, row2)
    ctx.moveTo(2.5 * ts, row1);
    ctx.lineTo(3 * ts, row2);

    ctx.stroke();
  };

  // Mode-based rendering
  if (mode === 'puzzle') {
    // Draw only trapezoid outline
    drawOutline();
  } else if (mode === 'guides') {
    // Draw all triangles with guide lines + solution cuts + outline on top
    drawTriangles(guideLineWidth);
    drawSolutionGroupings();
    drawOutline();
  } else if (mode === 'solution') {
    // Draw solution groupings + outline on top
    drawSolutionGroupings();
    drawOutline();
  }
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#trapezoid-diagram",props:{mode:"puzzle"},title:"Trapezoid",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-3.md"},{type:"dynamic",mode:"component",componentId:"#trapezoid-diagram",props:{mode:"solution"},title:"Four trapezoid regions highlighted",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-3.md"},{type:"dynamic",mode:"component",componentId:"#trapezoid-diagram",props:{mode:"guides"},title:"Trapezoid triangle structure",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/equal-shape-cutting/equal-shape-cutting-3.md"}],inlineComponents:{"trapezoid-diagram":{id:"trapezoid-diagram",code:`function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const guideLineWidth = 0.5;
  const solutionLineWidth = 4;
  const padding = 20;
  const maxSize = 400;
  const imageSize = Math.min(width, maxSize);

  // Mode: 'puzzle', 'guides', or 'solution'
  const mode = props?.mode || 'puzzle';

  // Calculate trapezoid dimensions
  const triangleSize = imageSize / 4;
  const triangleHeight = triangleSize * Math.sqrt(3) / 2;
  const trapezoidHeight = 2 * triangleHeight;

  canvas.width = imageSize;
  canvas.height = trapezoidHeight + 2 * padding;

  // Get colors
  const foregroundColor = api.getColor('foreground');
  const primaryColor = api.getColor('primary');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Helper function to draw all triangles
  const drawTriangles = (strokeWidth) => {
    ctx.strokeStyle = foregroundColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Top row: 5 triangles starting at triangleSize (offset by 1 triangle width from trapezoid left edge)
    // Pattern: upright, inverted, upright, inverted, upright
    const topY = padding;

    for (let i = 0; i < 5; i++) {
      const x = triangleSize + i * (triangleSize / 2);
      ctx.beginPath();
      if (i % 2 === 0) {
        // Upright equilateral triangle
        ctx.moveTo(x, topY);
        ctx.lineTo(x + triangleSize / 2, topY + triangleHeight);
        ctx.lineTo(x - triangleSize / 2, topY + triangleHeight);
      } else {
        // Inverted equilateral triangle
        ctx.moveTo(x - triangleSize / 2, topY);
        ctx.lineTo(x + triangleSize / 2, topY);
        ctx.lineTo(x, topY + triangleHeight);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Bottom row: 7 triangles starting at 0
    // Pattern: upright, inverted, upright, inverted, upright, inverted, upright
    const bottomY = padding + triangleHeight;

    for (let i = 0; i < 7; i++) {
      const x = triangleSize / 2 + i * (triangleSize / 2);
      ctx.beginPath();
      if (i % 2 === 0) {
        // Upright equilateral triangle
        ctx.moveTo(x, bottomY);
        ctx.lineTo(x + triangleSize / 2, bottomY + triangleHeight);
        ctx.lineTo(x - triangleSize / 2, bottomY + triangleHeight);
      } else {
        // Inverted equilateral triangle
        ctx.moveTo(x - triangleSize / 2, bottomY);
        ctx.lineTo(x + triangleSize / 2, bottomY);
        ctx.lineTo(x, bottomY + triangleHeight);
      }
      ctx.closePath();
      ctx.stroke();
    }
  };

  // Helper function to draw trapezoid outline
  const drawOutline = () => {
    const topLeft = triangleSize;
    const topRight = triangleSize + 2 * triangleSize;
    const bottomLeft = 0;
    const bottomRight = imageSize;
    const topY = padding;
    const bottomY = padding + trapezoidHeight;

    ctx.beginPath();
    ctx.moveTo(topLeft, topY);
    ctx.lineTo(topRight, topY);
    ctx.lineTo(bottomRight, bottomY);
    ctx.lineTo(bottomLeft, bottomY);
    ctx.closePath();
    ctx.strokeStyle = foregroundColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  // Helper function to draw solution groupings
  const drawSolutionGroupings = () => {
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = solutionLineWidth;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';

    const ts = triangleSize;
    const row0 = padding;
    const row1 = padding + triangleHeight;
    const row2 = padding + trapezoidHeight;

    ctx.beginPath();

    // Line 1: diagonal from (ts, row0) to (1.5*ts, row1)
    ctx.moveTo(ts, row0);
    ctx.lineTo(1.5 * ts, row1);

    // Line 2: horizontal from (1.5*ts, row1) to (2.5*ts, row1)
    ctx.moveTo(1.5 * ts, row1);
    ctx.lineTo(2.5 * ts, row1);

    // Line 3: diagonal from (2.5*ts, row1) to (3*ts, row0)
    ctx.moveTo(2.5 * ts, row1);
    ctx.lineTo(3 * ts, row0);

    // Line 4: diagonal from (ts, row2) to (1.5*ts, row1)
    ctx.moveTo(ts, row2);
    ctx.lineTo(1.5 * ts, row1);

    // Line 5: diagonal from (2.5*ts, row1) to (3*ts, row2)
    ctx.moveTo(2.5 * ts, row1);
    ctx.lineTo(3 * ts, row2);

    ctx.stroke();
  };

  // Mode-based rendering
  if (mode === 'puzzle') {
    // Draw only trapezoid outline
    drawOutline();
  } else if (mode === 'guides') {
    // Draw all triangles with guide lines + solution cuts + outline on top
    drawTriangles(guideLineWidth);
    drawSolutionGroupings();
    drawOutline();
  } else if (mode === 'solution') {
    // Draw solution groupings + outline on top
    drawSolutionGroupings();
    drawOutline();
  }
}`,startLine:54}}};export{t as default};
