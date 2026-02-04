const n={slug:"ant-in-a-cube",metadata:{id:"puzzle-59",title:"Ant in a Cube",difficulty:"easy",concepts:["geometry"],tags:["has-solution"],credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-03",lastUpdated:"2026-02-04",preview:"An ant is at one corner of a cube with side length 1. The exit is a tiny hole on the corner diagonally opposite the ant. What is the length of the shortest...",websitePreview:"An ant is at one corner of a cube with side length 1. The exit is a tiny hole on the corner diagonally opposite the ant. What is the length of the shortest..."},content:`<p>An ant is at one corner of a cube with side length 1. The exit is a tiny hole on the corner diagonally opposite the ant. What is the length of the shortest path the ant can take to the exit? The ant must stay on the surface — it can't fly through the interior.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msqrt><mn>5</mn></msqrt></mrow><annotation>\\sqrt{5}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">5</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span></p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>The ant needs to travel along the surface from corner A to corner G. The trick is to unfold the cube into a flat net — then the shortest path becomes a straight line.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>On the unfolded surface, we can form a right triangle:</p><ul>
<li>The horizontal distance is 2 (the width of two faces)</li>
<li>The vertical distance is 1 (the height of one face)</li>
</ul><p>Using Pythagoras’ theorem: <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msqrt><mrow><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mn>5</mn></msqrt></mrow><annotation>\\sqrt{2^2 + 1^2} = \\sqrt{5}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1266em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9134em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.8734em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1266em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">5</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
An ant is at one corner of a cube with side length 1. The exit is a tiny hole on the corner diagonally opposite the ant. What is the length of the shortest path the ant can take to the exit? The ant must stay on the surface — it can't fly through the interior.

:::dynamic
\`\`\`yaml
title: 3D cube showing the ant at corner A and exit at corner G
use: '#cube-3d'
props:
  solution: false
\`\`\`
:::

::::solution
**Answer**: $\\sqrt{5}$

:::dynamic
\`\`\`yaml
title: 3D cube showing the ant's path from A to G
use: '#cube-3d'
props:
  solution: true
\`\`\`
:::

The ant needs to travel along the surface from corner A to corner G. The trick is to unfold the cube into a flat net — then the shortest path becomes a straight line.

:::dynamic
\`\`\`yaml
title: Cube net diagram showing the ant’s shortest path
use: '#cube-net'
\`\`\`
:::

On the unfolded surface, we can form a right triangle:
- The horizontal distance is 2 (the width of two faces)
- The vertical distance is 1 (the height of one face)

Using Pythagoras’ theorem: $\\sqrt{2^2 + 1^2} = \\sqrt{5}$.
::::


:::component[cube-3d]
\`\`\`js
function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext("2d");

  // Get solution prop (default: false)
  const showSolution = props?.solution ?? false;

  // Configuration
  const MAX_SQUARE_SIZE = 125;
  const LABEL_OFFSET_RATIO = 0.10;
  const LABEL_TEXT_WIDTH = 10; // approximate width of label text

  // Calculate square size based on available width
  // Cube diagram: width = squareSize * 1.4 (squareSize + offset where offset = 0.4 * squareSize)
  // Label space on each side = squareSize * LABEL_OFFSET_RATIO + LABEL_TEXT_WIDTH
  // Total width = squareSize * 1.4 + 2 * (squareSize * LABEL_OFFSET_RATIO + LABEL_TEXT_WIDTH)
  // Total width = squareSize * (1.4 + 2 * LABEL_OFFSET_RATIO) + 2 * LABEL_TEXT_WIDTH
  const widthMultiplier = 1.4 + 2 * LABEL_OFFSET_RATIO;
  const squareSize = Math.min(MAX_SQUARE_SIZE, (width - 2 * LABEL_TEXT_WIDTH) / widthMultiplier);
  const offset = squareSize * 0.4; // Offset between front and back squares

  // Calculate actual dimensions
  const cubeWidth = squareSize + offset;
  const cubeHeight = squareSize + offset;
  const labelOffset = squareSize * LABEL_OFFSET_RATIO;
  const labelSpace = labelOffset + LABEL_TEXT_WIDTH;

  // Canvas size based on actual cube dimensions plus label space
  canvas.width = cubeWidth + labelSpace * 2;
  canvas.height = cubeHeight + labelSpace * 2;

  // The cube spans:
  // - Horizontally: from left edge of front to right edge of back (squareSize + offset)
  // - Vertically: from bottom of front to top of back (squareSize + offset)
  // Position front square so entire cube is centered in canvas
  const frontLeft = labelSpace;
  const frontBottom = canvas.height - labelSpace;

  // Front square (bottom-left positioned) - contains A
  const front = {
    A: { x: frontLeft, y: frontBottom },
    B: { x: frontLeft + squareSize, y: frontBottom },
    E: { x: frontLeft, y: frontBottom - squareSize },
    F: { x: frontLeft + squareSize, y: frontBottom - squareSize }
  };

  // Back square (top-right positioned) - contains G
  const back = {
    D: { x: front.A.x + offset, y: front.A.y - offset },
    C: { x: front.B.x + offset, y: front.B.y - offset },
    H: { x: front.E.x + offset, y: front.E.y - offset },
    G: { x: front.F.x + offset, y: front.F.y - offset }
  };

  // Get theme colors
  const edgeColor = api.getColor("foreground");
  const hiddenEdgeColor = api.getColor("muted-foreground");
  const pathColor = api.getColor("error-500");
  const labelColor = api.getColor("foreground");

  // Draw edge helper
  const drawEdge = (from, to, dashed = false) => {
    ctx.strokeStyle = dashed ? hiddenEdgeColor : edgeColor;
    ctx.lineWidth = dashed ? 1.5 : 2;
    ctx.setLineDash(dashed ? [5, 5] : []);
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  // Draw hidden edges first (dashed)
  drawEdge(front.A, back.D, true);
  drawEdge(back.D, back.H, true);
  drawEdge(back.D, back.C, true);

  // Draw back square (visible edges)
  drawEdge(front.E, back.H);
  drawEdge(back.C, back.G);
  drawEdge(back.H, back.G);

  // Draw front square
  drawEdge(front.A, front.B);
  drawEdge(front.B, front.F);
  drawEdge(front.E, front.F);
  drawEdge(front.A, front.E);

  // Draw connecting edges (visible)
  drawEdge(front.B, back.C);
  drawEdge(front.F, back.G);

  // Draw corner dots
  const drawDot = (point, radius = 6) => {
    ctx.fillStyle = pathColor;
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fill();
  };
  drawDot(front.A);
  drawDot(back.G);

  // Draw path and labels only when showing solution
  if (showSolution) {
    // Draw path: A -> across front face -> across top face -> G
    // Path goes from A diagonally to midpoint of EF edge, then to G
    const pathMid = {
      x: (front.F.x + front.B.x) / 2,
      y: (front.F.y + front.B.y) / 2
    };

    ctx.strokeStyle = pathColor;
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(front.A.x, front.A.y);
    ctx.lineTo(pathMid.x, pathMid.y);
    ctx.lineTo(back.G.x, back.G.y);
    ctx.stroke();

    // Draw labels (labelOffset already defined above)
    ctx.font = "bold 14px system-ui, sans-serif";
    ctx.fillStyle = labelColor;
    ctx.textBaseline = "middle";

    // Label offset map (similar to hypercube-viz pattern)
    const labels = {
      A: { point: front.A, x: -labelOffset, y: labelOffset, align: "right" },
      B: { point: front.B, x: labelOffset * 0.8, y: labelOffset * 0.8, align: "left" },
      E: { point: front.E, x: -labelOffset * 0.8, y: -labelOffset * 0.7, align: "right" },
      F: { point: front.F, x: labelOffset * 0.7, y: labelOffset * 0.3, align: "left" },
      D: { point: back.D, x: labelOffset * 0.8, y: -labelOffset * 0.8, align: "left" },
      C: { point: back.C, x: labelOffset * 0.8, y: labelOffset * 0.8, align: "left" },
      H: { point: back.H, x: -labelOffset * 0.8, y: -labelOffset * 0.7, align: "right" },
      G: { point: back.G, x: labelOffset * 0.8, y: -labelOffset * 0.7, align: "left" }
    };

    Object.entries(labels).forEach(([label, config]) => {
      ctx.textAlign = config.align;
      ctx.fillText(label, config.point.x + config.x, config.point.y + config.y);
    });
  }

}
\`\`\`
:::

:::component[cube-net]
\`\`\`js
function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Padding for labels around the net
  const labelPadding = 20;
  const strokeWidth = 2;

  // Calculate dimensions - cube net is 4 units wide, 3 units tall
  const netWidth = 4;
  const netHeight = 3;
  const aspectRatio = netHeight / netWidth;

  // Max size of 300px (for the net content, excluding padding)
  const contentSize = Math.min(width - labelPadding * 2, 300);
  const contentHeight = contentSize * aspectRatio;

  canvas.width = contentSize + labelPadding * 2;
  canvas.height = contentHeight + labelPadding * 2;

  // Calculate unit size (each square face is 1×1 unit)
  const unit = contentSize / netWidth;

  // Offset all drawing by padding so labels have room
  ctx.translate(labelPadding, labelPadding);

  // Get theme colors
  const faceColor = api.getColor('muted');
  const borderColor = api.getColor('foreground');
  const pathColor = api.getColor('error-500');

  // Helper function to draw a square face (no label)
  const drawFace = (x, y) => {
    ctx.fillStyle = faceColor;
    ctx.fillRect(x, y, unit, unit);

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = strokeWidth;
    ctx.strokeRect(x, y, unit, unit);
  };

  // Draw cube net in cross formation
  drawFace(unit * 1, unit * 0);  // TOP
  drawFace(unit * 0, unit * 1);  // LEFT
  drawFace(unit * 1, unit * 1);  // FRONT
  drawFace(unit * 2, unit * 1);  // RIGHT
  drawFace(unit * 3, unit * 1);  // BACK
  drawFace(unit * 1, unit * 2);  // BOTTOM

  // Point A: bottom-left corner of FRONT face
  const pointA = {
    x: unit * 1,
    y: unit * 2
  };

  // Point B: top-right corner of TOP face
  const pointB = {
    x: unit * 3,
    y: unit * 1
  };

  // Draw the path (straight line from A to G)
  ctx.strokeStyle = pathColor;
  ctx.lineWidth = 3;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(pointA.x, pointA.y);
  ctx.lineTo(pointB.x, pointB.y);
  ctx.stroke();

  // Draw endpoint dots
  const dotRadius = 5;
  ctx.fillStyle = pathColor;
  ctx.beginPath();
  ctx.arc(pointA.x, pointA.y, dotRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(pointB.x, pointB.y, dotRadius, 0, Math.PI * 2);
  ctx.fill();

  // Draw vertex labels
  const labelColor = api.getColor('foreground');
  const labelOffset = 8;
  ctx.font = "bold 14px system-ui, sans-serif";
  ctx.fillStyle = labelColor;

  // Vertices with position offsets and alignment (both horizontal and vertical)
  // align: "left" | "center" | "right", baseline: "top" | "middle" | "bottom"
  const vertices = [
    // FRONT face corners
    { label: "A", x: unit * 1, y: unit * 2, labelX: -labelOffset, labelY: labelOffset, align: "right", baseline: "top" },
    { label: "B", x: unit * 2, y: unit * 2, labelX: labelOffset, labelY: labelOffset, align: "left", baseline: "top" },
    { label: "E", x: unit * 1, y: unit * 1, labelX: -labelOffset, labelY: -labelOffset * 0.7, align: "right", baseline: "bottom" },
    { label: "F", x: unit * 2, y: unit * 1, labelX: labelOffset, labelY: -labelOffset * 0.7, align: "left", baseline: "bottom" },
    // TOP face - top corners
    { label: "H", x: unit * 1, y: unit * 0, labelX: -labelOffset, labelY: 0, align: "right", baseline: "bottom" },
    { label: "G", x: unit * 2, y: unit * 0, labelX: labelOffset, labelY: 0, align: "left", baseline: "bottom" },
    // BOTTOM face - bottom corners
    { label: "D", x: unit * 1, y: unit * 3, labelX: -labelOffset, labelY: 0, align: "right", baseline: "top" },
    { label: "C", x: unit * 2, y: unit * 3, labelX: labelOffset, labelY: 0, align: "left", baseline: "top" },
    // RIGHT face - right corners
    { label: "C", x: unit * 3, y: unit * 2, labelX: 0, labelY: labelOffset, align: "center", baseline: "top" },
    { label: "G", x: unit * 3, y: unit * 1, labelX: 0, labelY: -labelOffset * 0.7, align: "center", baseline: "bottom" },
    // LEFT face - left corners
    { label: "H", x: unit * 0, y: unit * 1, labelX: -labelOffset, labelY: -labelOffset * 0.7, align: "right", baseline: "bottom" },
    { label: "D", x: unit * 0, y: unit * 2, labelX: -labelOffset, labelY: labelOffset, align: "right", baseline: "top" },
    // Back face - right corners
    { label: "H", x: unit * 4, y: unit * 1, labelX: 0, labelY: -labelOffset * 0.7, align: "center", baseline: "bottom" },
    { label: "D", x: unit * 4, y: unit * 2, labelX: 0, labelY: labelOffset, align: "center", baseline: "top" },
  ];

  vertices.forEach((v) => {
    ctx.textAlign = v.align;
    ctx.textBaseline = v.baseline;
    ctx.fillText(v.label, v.x + v.labelX, v.y + v.labelY);
  });
}
\`\`\`
:::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#cube-3d",props:{solution:!1},title:"3D cube showing the ant at corner A and exit at corner G",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/ant-in-a-cube.md"},{type:"dynamic",mode:"component",componentId:"#cube-3d",props:{solution:!0},title:"3D cube showing the ant's path from A to G",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/ant-in-a-cube.md"},{type:"dynamic",mode:"component",componentId:"#cube-net",title:"Cube net diagram showing the ant’s shortest path",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/ant-in-a-cube.md"}],inlineComponents:{"cube-3d":{id:"cube-3d",code:`function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext("2d");

  // Get solution prop (default: false)
  const showSolution = props?.solution ?? false;

  // Configuration
  const MAX_SQUARE_SIZE = 125;
  const LABEL_OFFSET_RATIO = 0.10;
  const LABEL_TEXT_WIDTH = 10; // approximate width of label text

  // Calculate square size based on available width
  // Cube diagram: width = squareSize * 1.4 (squareSize + offset where offset = 0.4 * squareSize)
  // Label space on each side = squareSize * LABEL_OFFSET_RATIO + LABEL_TEXT_WIDTH
  // Total width = squareSize * 1.4 + 2 * (squareSize * LABEL_OFFSET_RATIO + LABEL_TEXT_WIDTH)
  // Total width = squareSize * (1.4 + 2 * LABEL_OFFSET_RATIO) + 2 * LABEL_TEXT_WIDTH
  const widthMultiplier = 1.4 + 2 * LABEL_OFFSET_RATIO;
  const squareSize = Math.min(MAX_SQUARE_SIZE, (width - 2 * LABEL_TEXT_WIDTH) / widthMultiplier);
  const offset = squareSize * 0.4; // Offset between front and back squares

  // Calculate actual dimensions
  const cubeWidth = squareSize + offset;
  const cubeHeight = squareSize + offset;
  const labelOffset = squareSize * LABEL_OFFSET_RATIO;
  const labelSpace = labelOffset + LABEL_TEXT_WIDTH;

  // Canvas size based on actual cube dimensions plus label space
  canvas.width = cubeWidth + labelSpace * 2;
  canvas.height = cubeHeight + labelSpace * 2;

  // The cube spans:
  // - Horizontally: from left edge of front to right edge of back (squareSize + offset)
  // - Vertically: from bottom of front to top of back (squareSize + offset)
  // Position front square so entire cube is centered in canvas
  const frontLeft = labelSpace;
  const frontBottom = canvas.height - labelSpace;

  // Front square (bottom-left positioned) - contains A
  const front = {
    A: { x: frontLeft, y: frontBottom },
    B: { x: frontLeft + squareSize, y: frontBottom },
    E: { x: frontLeft, y: frontBottom - squareSize },
    F: { x: frontLeft + squareSize, y: frontBottom - squareSize }
  };

  // Back square (top-right positioned) - contains G
  const back = {
    D: { x: front.A.x + offset, y: front.A.y - offset },
    C: { x: front.B.x + offset, y: front.B.y - offset },
    H: { x: front.E.x + offset, y: front.E.y - offset },
    G: { x: front.F.x + offset, y: front.F.y - offset }
  };

  // Get theme colors
  const edgeColor = api.getColor("foreground");
  const hiddenEdgeColor = api.getColor("muted-foreground");
  const pathColor = api.getColor("error-500");
  const labelColor = api.getColor("foreground");

  // Draw edge helper
  const drawEdge = (from, to, dashed = false) => {
    ctx.strokeStyle = dashed ? hiddenEdgeColor : edgeColor;
    ctx.lineWidth = dashed ? 1.5 : 2;
    ctx.setLineDash(dashed ? [5, 5] : []);
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  // Draw hidden edges first (dashed)
  drawEdge(front.A, back.D, true);
  drawEdge(back.D, back.H, true);
  drawEdge(back.D, back.C, true);

  // Draw back square (visible edges)
  drawEdge(front.E, back.H);
  drawEdge(back.C, back.G);
  drawEdge(back.H, back.G);

  // Draw front square
  drawEdge(front.A, front.B);
  drawEdge(front.B, front.F);
  drawEdge(front.E, front.F);
  drawEdge(front.A, front.E);

  // Draw connecting edges (visible)
  drawEdge(front.B, back.C);
  drawEdge(front.F, back.G);

  // Draw corner dots
  const drawDot = (point, radius = 6) => {
    ctx.fillStyle = pathColor;
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fill();
  };
  drawDot(front.A);
  drawDot(back.G);

  // Draw path and labels only when showing solution
  if (showSolution) {
    // Draw path: A -> across front face -> across top face -> G
    // Path goes from A diagonally to midpoint of EF edge, then to G
    const pathMid = {
      x: (front.F.x + front.B.x) / 2,
      y: (front.F.y + front.B.y) / 2
    };

    ctx.strokeStyle = pathColor;
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(front.A.x, front.A.y);
    ctx.lineTo(pathMid.x, pathMid.y);
    ctx.lineTo(back.G.x, back.G.y);
    ctx.stroke();

    // Draw labels (labelOffset already defined above)
    ctx.font = "bold 14px system-ui, sans-serif";
    ctx.fillStyle = labelColor;
    ctx.textBaseline = "middle";

    // Label offset map (similar to hypercube-viz pattern)
    const labels = {
      A: { point: front.A, x: -labelOffset, y: labelOffset, align: "right" },
      B: { point: front.B, x: labelOffset * 0.8, y: labelOffset * 0.8, align: "left" },
      E: { point: front.E, x: -labelOffset * 0.8, y: -labelOffset * 0.7, align: "right" },
      F: { point: front.F, x: labelOffset * 0.7, y: labelOffset * 0.3, align: "left" },
      D: { point: back.D, x: labelOffset * 0.8, y: -labelOffset * 0.8, align: "left" },
      C: { point: back.C, x: labelOffset * 0.8, y: labelOffset * 0.8, align: "left" },
      H: { point: back.H, x: -labelOffset * 0.8, y: -labelOffset * 0.7, align: "right" },
      G: { point: back.G, x: labelOffset * 0.8, y: -labelOffset * 0.7, align: "left" }
    };

    Object.entries(labels).forEach(([label, config]) => {
      ctx.textAlign = config.align;
      ctx.fillText(label, config.point.x + config.x, config.point.y + config.y);
    });
  }

}`,startLine:56},"cube-net":{id:"cube-net",code:`function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Padding for labels around the net
  const labelPadding = 20;
  const strokeWidth = 2;

  // Calculate dimensions - cube net is 4 units wide, 3 units tall
  const netWidth = 4;
  const netHeight = 3;
  const aspectRatio = netHeight / netWidth;

  // Max size of 300px (for the net content, excluding padding)
  const contentSize = Math.min(width - labelPadding * 2, 300);
  const contentHeight = contentSize * aspectRatio;

  canvas.width = contentSize + labelPadding * 2;
  canvas.height = contentHeight + labelPadding * 2;

  // Calculate unit size (each square face is 1×1 unit)
  const unit = contentSize / netWidth;

  // Offset all drawing by padding so labels have room
  ctx.translate(labelPadding, labelPadding);

  // Get theme colors
  const faceColor = api.getColor('muted');
  const borderColor = api.getColor('foreground');
  const pathColor = api.getColor('error-500');

  // Helper function to draw a square face (no label)
  const drawFace = (x, y) => {
    ctx.fillStyle = faceColor;
    ctx.fillRect(x, y, unit, unit);

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = strokeWidth;
    ctx.strokeRect(x, y, unit, unit);
  };

  // Draw cube net in cross formation
  drawFace(unit * 1, unit * 0);  // TOP
  drawFace(unit * 0, unit * 1);  // LEFT
  drawFace(unit * 1, unit * 1);  // FRONT
  drawFace(unit * 2, unit * 1);  // RIGHT
  drawFace(unit * 3, unit * 1);  // BACK
  drawFace(unit * 1, unit * 2);  // BOTTOM

  // Point A: bottom-left corner of FRONT face
  const pointA = {
    x: unit * 1,
    y: unit * 2
  };

  // Point B: top-right corner of TOP face
  const pointB = {
    x: unit * 3,
    y: unit * 1
  };

  // Draw the path (straight line from A to G)
  ctx.strokeStyle = pathColor;
  ctx.lineWidth = 3;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(pointA.x, pointA.y);
  ctx.lineTo(pointB.x, pointB.y);
  ctx.stroke();

  // Draw endpoint dots
  const dotRadius = 5;
  ctx.fillStyle = pathColor;
  ctx.beginPath();
  ctx.arc(pointA.x, pointA.y, dotRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(pointB.x, pointB.y, dotRadius, 0, Math.PI * 2);
  ctx.fill();

  // Draw vertex labels
  const labelColor = api.getColor('foreground');
  const labelOffset = 8;
  ctx.font = "bold 14px system-ui, sans-serif";
  ctx.fillStyle = labelColor;

  // Vertices with position offsets and alignment (both horizontal and vertical)
  // align: "left" | "center" | "right", baseline: "top" | "middle" | "bottom"
  const vertices = [
    // FRONT face corners
    { label: "A", x: unit * 1, y: unit * 2, labelX: -labelOffset, labelY: labelOffset, align: "right", baseline: "top" },
    { label: "B", x: unit * 2, y: unit * 2, labelX: labelOffset, labelY: labelOffset, align: "left", baseline: "top" },
    { label: "E", x: unit * 1, y: unit * 1, labelX: -labelOffset, labelY: -labelOffset * 0.7, align: "right", baseline: "bottom" },
    { label: "F", x: unit * 2, y: unit * 1, labelX: labelOffset, labelY: -labelOffset * 0.7, align: "left", baseline: "bottom" },
    // TOP face - top corners
    { label: "H", x: unit * 1, y: unit * 0, labelX: -labelOffset, labelY: 0, align: "right", baseline: "bottom" },
    { label: "G", x: unit * 2, y: unit * 0, labelX: labelOffset, labelY: 0, align: "left", baseline: "bottom" },
    // BOTTOM face - bottom corners
    { label: "D", x: unit * 1, y: unit * 3, labelX: -labelOffset, labelY: 0, align: "right", baseline: "top" },
    { label: "C", x: unit * 2, y: unit * 3, labelX: labelOffset, labelY: 0, align: "left", baseline: "top" },
    // RIGHT face - right corners
    { label: "C", x: unit * 3, y: unit * 2, labelX: 0, labelY: labelOffset, align: "center", baseline: "top" },
    { label: "G", x: unit * 3, y: unit * 1, labelX: 0, labelY: -labelOffset * 0.7, align: "center", baseline: "bottom" },
    // LEFT face - left corners
    { label: "H", x: unit * 0, y: unit * 1, labelX: -labelOffset, labelY: -labelOffset * 0.7, align: "right", baseline: "bottom" },
    { label: "D", x: unit * 0, y: unit * 2, labelX: -labelOffset, labelY: labelOffset, align: "right", baseline: "top" },
    // Back face - right corners
    { label: "H", x: unit * 4, y: unit * 1, labelX: 0, labelY: -labelOffset * 0.7, align: "center", baseline: "bottom" },
    { label: "D", x: unit * 4, y: unit * 2, labelX: 0, labelY: labelOffset, align: "center", baseline: "top" },
  ];

  vertices.forEach((v) => {
    ctx.textAlign = v.align;
    ctx.textBaseline = v.baseline;
    ctx.fillText(v.label, v.x + v.labelX, v.y + v.labelY);
  });
}`,startLine:204}}};export{n as default};
