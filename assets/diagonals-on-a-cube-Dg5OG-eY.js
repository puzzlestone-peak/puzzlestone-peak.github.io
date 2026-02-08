const t={slug:"diagonals-on-a-cube",metadata:{id:"puzzle-14",title:"Diagonals on a Cube",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["geometry"],tags:["has-solution","starter"],credit:"Classic geometry puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"Two diagonal lines are drawn on a cube. What is the angle between these two lines?",websitePreview:"Two diagonal lines are drawn on a cube. What is the angle between these two lines?"},content:`<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Two diagonal lines are drawn on a cube. What is the angle between these two lines?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>60</mn><mi>°</mi></mrow><annotation>60°</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord">60°</span></span></span></span>.</p><p>Notice that if we connect a 3rd line between the ends of the other 2 lines, we form an equilateral triangle with angles of 60° on all sides.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
:::dynamic
\`\`\`yaml
title: "3D cube with two diagonal face lines"
use: '#cube-diagram'
props:
  showSolution: false
\`\`\`
:::

Two diagonal lines are drawn on a cube. What is the angle between these two lines?

::::solution
$60°$.

Notice that if we connect a 3rd line between the ends of the other 2 lines, we form an equilateral triangle with angles of 60° on all sides.

:::dynamic
\`\`\`yaml
title: "3D cube showing equilateral triangle formed by two diagonals and connecting edge"
use: '#cube-diagram'
props:
  showSolution: true
\`\`\`
:::
::::


:::component[cube-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const imageSize = Math.min(width, 300);
  const yOffset = lineWidth / 2;
  const xOffset = lineWidth / 2;

  // Calculate cube size and positioning
  const offsetPercent = 0.3;
  const cubeSquareLength = (imageSize - lineWidth) / (1 + offsetPercent);
  const backSquareOffset = cubeSquareLength * offsetPercent; // Diagonal offset for second square

  canvas.width = imageSize;
  canvas.height = imageSize;

  // Get theme colors
  const foregroundColor = api.getColor('foreground');
  const fillColor = api.getColor('foreground', { alpha: -0.8 });
  const highlightColor = api.getColor('red-500');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Front square (bottom-left)
  const front = {
    bottomLeft: [xOffset, yOffset + cubeSquareLength + backSquareOffset],
    bottomRight: [xOffset + cubeSquareLength, yOffset + cubeSquareLength + backSquareOffset],
    topRight: [xOffset + cubeSquareLength, yOffset + backSquareOffset],
    topLeft: [xOffset, yOffset + backSquareOffset],
  };

  // Back square (top-right, offset diagonally)
  const back = {
    bottomLeft: [xOffset + backSquareOffset, yOffset + cubeSquareLength],
    bottomRight: [xOffset + cubeSquareLength + backSquareOffset, yOffset + cubeSquareLength],
    topRight: [xOffset + cubeSquareLength + backSquareOffset, yOffset],
    topLeft: [xOffset + backSquareOffset, yOffset]
  };

  ctx.lineCap = 'round';

  // Draw filled faces first (back to front)

  // Top face
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(...front.topLeft);
  ctx.lineTo(...front.topRight);
  ctx.lineTo(...back.topRight);
  ctx.lineTo(...back.topLeft);
  ctx.closePath();
  ctx.fill();

  // Right face
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(...front.topRight);
  ctx.lineTo(...front.bottomRight);
  ctx.lineTo(...back.bottomRight);
  ctx.lineTo(...back.topRight);
  ctx.closePath();
  ctx.fill();

  // Front face
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(...front.bottomLeft);
  ctx.lineTo(...front.bottomRight);
  ctx.lineTo(...front.topRight);
  ctx.lineTo(...front.topLeft);
  ctx.closePath();
  ctx.fill();

  /**
   * All lines to draw (order determines drawing order - reorder as needed for depth)
   * @type {Array<[start: [number, number], end: [number, number], variant: string]>}
   *
   * Variants:
   * - "normal": Solid line with foreground color (width 2)
   * - "dotted": Dashed line with foreground color (width 2)
   * - "red": Solid red line (width 3)
   * - "dotted-red": Dashed red line (width 3)
   * - "not-drawn": Skip drawing this line
   */
  const lines = [
    [back.bottomLeft, back.bottomRight, "dotted"], // Back square - bottom
    [back.bottomRight, back.topRight, "normal"], // Back square - right
    [back.topRight, back.topLeft, "normal"], // Back square - top
    [back.topLeft, back.bottomLeft, "dotted"], // Back square - left

    [front.bottomLeft, back.bottomLeft, "dotted"], // Connecting line - bottom-left
    [front.bottomRight, back.bottomRight, "normal"], // Connecting line - bottom-right
    [front.topRight, back.topRight, "normal"], // Connecting line - top right
    [front.topLeft, back.topLeft, "normal"], // Connecting line - top left

    [front.bottomLeft, front.bottomRight, "normal"], // Front square - bottom
    [front.bottomRight, front.topRight, "normal"], // Front square - right
    [front.topRight, front.topLeft, "normal"], // Front square - top
    [front.topLeft, front.bottomLeft, "normal"], // Front square - left

    [front.topLeft, back.topRight, "red"],              // Diagonal 1: front top-left to back top-right
    [front.topLeft, front.bottomRight, "red"],          // Diagonal 2: front top-left to front bottom-right
    [front.bottomRight, back.topRight, (props && props.showSolution) ? "red" : "not-drawn"], // Diagonal 3: back top-right to front bottom-right
  ];

  // Draw all lines
  lines.forEach(([start, end, variant]) => {
    // Skip lines marked as not-drawn
    if (variant === "not-drawn") {
      return;
    }

    // Set style based on variant
    if (variant === "red") {
      ctx.strokeStyle = highlightColor;
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
    } else if (variant === "dotted-red") {
      ctx.strokeStyle = highlightColor;
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
    } else if (variant === "dotted") {
      ctx.strokeStyle = foregroundColor;
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
    } else {
      // "normal"
      ctx.strokeStyle = foregroundColor;
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
    }

    ctx.beginPath();
    ctx.moveTo(...start);
    ctx.lineTo(...end);
    ctx.stroke();
  });

  // Reset line dash
  ctx.setLineDash([]);
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#cube-diagram",props:{showSolution:!1},title:"3D cube with two diagonal face lines",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/diagonals-on-a-cube.md"},{type:"dynamic",mode:"component",componentId:"#cube-diagram",props:{showSolution:!0},title:"3D cube showing equilateral triangle formed by two diagonals and connecting edge",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/diagonals-on-a-cube.md"}],inlineComponents:{"cube-diagram":{id:"cube-diagram",code:`function draw(options) {
  const { canvas, api, theme, width, props } = options;
  const ctx = canvas.getContext('2d');

  const lineWidth = 2;
  const imageSize = Math.min(width, 300);
  const yOffset = lineWidth / 2;
  const xOffset = lineWidth / 2;

  // Calculate cube size and positioning
  const offsetPercent = 0.3;
  const cubeSquareLength = (imageSize - lineWidth) / (1 + offsetPercent);
  const backSquareOffset = cubeSquareLength * offsetPercent; // Diagonal offset for second square

  canvas.width = imageSize;
  canvas.height = imageSize;

  // Get theme colors
  const foregroundColor = api.getColor('foreground');
  const fillColor = api.getColor('foreground', { alpha: -0.8 });
  const highlightColor = api.getColor('red-500');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Front square (bottom-left)
  const front = {
    bottomLeft: [xOffset, yOffset + cubeSquareLength + backSquareOffset],
    bottomRight: [xOffset + cubeSquareLength, yOffset + cubeSquareLength + backSquareOffset],
    topRight: [xOffset + cubeSquareLength, yOffset + backSquareOffset],
    topLeft: [xOffset, yOffset + backSquareOffset],
  };

  // Back square (top-right, offset diagonally)
  const back = {
    bottomLeft: [xOffset + backSquareOffset, yOffset + cubeSquareLength],
    bottomRight: [xOffset + cubeSquareLength + backSquareOffset, yOffset + cubeSquareLength],
    topRight: [xOffset + cubeSquareLength + backSquareOffset, yOffset],
    topLeft: [xOffset + backSquareOffset, yOffset]
  };

  ctx.lineCap = 'round';

  // Draw filled faces first (back to front)

  // Top face
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(...front.topLeft);
  ctx.lineTo(...front.topRight);
  ctx.lineTo(...back.topRight);
  ctx.lineTo(...back.topLeft);
  ctx.closePath();
  ctx.fill();

  // Right face
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(...front.topRight);
  ctx.lineTo(...front.bottomRight);
  ctx.lineTo(...back.bottomRight);
  ctx.lineTo(...back.topRight);
  ctx.closePath();
  ctx.fill();

  // Front face
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(...front.bottomLeft);
  ctx.lineTo(...front.bottomRight);
  ctx.lineTo(...front.topRight);
  ctx.lineTo(...front.topLeft);
  ctx.closePath();
  ctx.fill();

  /**
   * All lines to draw (order determines drawing order - reorder as needed for depth)
   * @type {Array<[start: [number, number], end: [number, number], variant: string]>}
   *
   * Variants:
   * - "normal": Solid line with foreground color (width 2)
   * - "dotted": Dashed line with foreground color (width 2)
   * - "red": Solid red line (width 3)
   * - "dotted-red": Dashed red line (width 3)
   * - "not-drawn": Skip drawing this line
   */
  const lines = [
    [back.bottomLeft, back.bottomRight, "dotted"], // Back square - bottom
    [back.bottomRight, back.topRight, "normal"], // Back square - right
    [back.topRight, back.topLeft, "normal"], // Back square - top
    [back.topLeft, back.bottomLeft, "dotted"], // Back square - left

    [front.bottomLeft, back.bottomLeft, "dotted"], // Connecting line - bottom-left
    [front.bottomRight, back.bottomRight, "normal"], // Connecting line - bottom-right
    [front.topRight, back.topRight, "normal"], // Connecting line - top right
    [front.topLeft, back.topLeft, "normal"], // Connecting line - top left

    [front.bottomLeft, front.bottomRight, "normal"], // Front square - bottom
    [front.bottomRight, front.topRight, "normal"], // Front square - right
    [front.topRight, front.topLeft, "normal"], // Front square - top
    [front.topLeft, front.bottomLeft, "normal"], // Front square - left

    [front.topLeft, back.topRight, "red"],              // Diagonal 1: front top-left to back top-right
    [front.topLeft, front.bottomRight, "red"],          // Diagonal 2: front top-left to front bottom-right
    [front.bottomRight, back.topRight, (props && props.showSolution) ? "red" : "not-drawn"], // Diagonal 3: back top-right to front bottom-right
  ];

  // Draw all lines
  lines.forEach(([start, end, variant]) => {
    // Skip lines marked as not-drawn
    if (variant === "not-drawn") {
      return;
    }

    // Set style based on variant
    if (variant === "red") {
      ctx.strokeStyle = highlightColor;
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
    } else if (variant === "dotted-red") {
      ctx.strokeStyle = highlightColor;
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
    } else if (variant === "dotted") {
      ctx.strokeStyle = foregroundColor;
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
    } else {
      // "normal"
      ctx.strokeStyle = foregroundColor;
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
    }

    ctx.beginPath();
    ctx.moveTo(...start);
    ctx.lineTo(...end);
    ctx.stroke();
  });

  // Reset line dash
  ctx.setLineDash([]);
}`,startLine:47}}};export{t as default};
