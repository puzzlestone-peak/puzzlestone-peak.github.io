const e={slug:"planting-trees-2",metadata:{id:"puzzle-51",title:"Planting Trees 2",difficulty:"easy",concepts:["geometry"],tags:["has-solution"],previousPuzzle:"planting-trees-1",nextPuzzle:"planting-trees-3",credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-03",lastUpdated:"2026-02-03",preview:"A few weeks after your first job, the mathematics professor calls you back. She was so pleased with your creative solution to the four-tree problem that she...",websitePreview:"A few weeks after your first job, the mathematics professor calls you back. She was so pleased with your creative solution to the four-tree problem that she..."},content:`<p>A few weeks after your first job, the mathematics professor calls you back. She was so pleased with your creative solution to the four-tree problem that she has another challenge for you.</p>
<p>This time, she wants you to plant ten trees in five straight lines, with exactly four trees in each line. Can you arrange ten trees to satisfy her requirements?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Trees can belong to more than one line.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: Arrange the trees in a pentagram (five-pointed star).</p><p>Place five trees at the vertices of a regular pentagon. These form the five outer points of the star.</p><p>Now draw the five diagonals connecting non-adjacent vertices. These lines intersect inside the pentagon, creating five intersection points. Place the remaining five trees at these intersection points. Each diagonal line of the pentagram now passes through exactly four trees.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
A few weeks after your first job, the mathematics professor calls you back. She was so pleased with your creative solution to the four-tree problem that she has another challenge for you.

This time, she wants you to plant ten trees in five straight lines, with exactly four trees in each line. Can you arrange ten trees to satisfy her requirements?

:::hint
Trees can belong to more than one line.
:::

::::solution
**Answer**: Arrange the trees in a pentagram (five-pointed star).

Place five trees at the vertices of a regular pentagon. These form the five outer points of the star.

Now draw the five diagonals connecting non-adjacent vertices. These lines intersect inside the pentagon, creating five intersection points. Place the remaining five trees at these intersection points. Each diagonal line of the pentagram now passes through exactly four trees.

:::dynamic
\`\`\`yaml
title: "Pentagram diagram with 10 trees"
use: '#pentagram-diagram'
\`\`\`
:::
::::

:::component[pentagram-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Responsive sizing
  const size = Math.min(width, 400);
  const height = size;

  canvas.width = size;
  canvas.height = height;

  // Get theme colors
  const primaryColor = api.getColor('primary');
  const treeColor = api.getColor('evergreen-700');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate pentagram geometry
  const centerX = size / 2;
  const centerY = height / 2;
  const outerRadius = size * 0.4;
  const innerRadius = outerRadius * 0.382; // Golden ratio for pentagram inner points

  // Calculate the 5 outer vertices (regular pentagon)
  const outerVertices = [];
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI / 2) + (i * 2 * Math.PI / 5);
    const x = centerX + outerRadius * Math.cos(angle);
    const y = centerY - outerRadius * Math.sin(angle);
    outerVertices.push({ x, y });
  }

  // Calculate the 5 inner intersection points
  const innerVertices = [];
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI / 2) + (i * 2 * Math.PI / 5) + (Math.PI / 5);
    const x = centerX + innerRadius * Math.cos(angle);
    const y = centerY - innerRadius * Math.sin(angle);
    innerVertices.push({ x, y });
  }

  // Draw the 5 pentagram lines
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  for (let i = 0; i < 5; i++) {
    const start = outerVertices[i];
    const end = outerVertices[(i + 2) % 5];

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  // Draw the trees
  const treeRadius = size * 0.025;

  const drawTree = (x, y) => {
    ctx.fillStyle = treeColor;
    ctx.strokeStyle = api.getColor('evergreen-950');
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.arc(x, y, treeRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };

  outerVertices.forEach(vertex => drawTree(vertex.x, vertex.y));
  innerVertices.forEach(vertex => drawTree(vertex.x, vertex.y));
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#pentagram-diagram",title:"Pentagram diagram with 10 trees",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/planting-trees/planting-trees-2.md"}],inlineComponents:{"pentagram-diagram":{id:"pentagram-diagram",code:`function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Responsive sizing
  const size = Math.min(width, 400);
  const height = size;

  canvas.width = size;
  canvas.height = height;

  // Get theme colors
  const primaryColor = api.getColor('primary');
  const treeColor = api.getColor('evergreen-700');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate pentagram geometry
  const centerX = size / 2;
  const centerY = height / 2;
  const outerRadius = size * 0.4;
  const innerRadius = outerRadius * 0.382; // Golden ratio for pentagram inner points

  // Calculate the 5 outer vertices (regular pentagon)
  const outerVertices = [];
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI / 2) + (i * 2 * Math.PI / 5);
    const x = centerX + outerRadius * Math.cos(angle);
    const y = centerY - outerRadius * Math.sin(angle);
    outerVertices.push({ x, y });
  }

  // Calculate the 5 inner intersection points
  const innerVertices = [];
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI / 2) + (i * 2 * Math.PI / 5) + (Math.PI / 5);
    const x = centerX + innerRadius * Math.cos(angle);
    const y = centerY - innerRadius * Math.sin(angle);
    innerVertices.push({ x, y });
  }

  // Draw the 5 pentagram lines
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  for (let i = 0; i < 5; i++) {
    const start = outerVertices[i];
    const end = outerVertices[(i + 2) % 5];

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  // Draw the trees
  const treeRadius = size * 0.025;

  const drawTree = (x, y) => {
    ctx.fillStyle = treeColor;
    ctx.strokeStyle = api.getColor('evergreen-950');
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.arc(x, y, treeRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };

  outerVertices.forEach(vertex => drawTree(vertex.x, vertex.y));
  innerVertices.forEach(vertex => drawTree(vertex.x, vertex.y));
}`,startLine:42}}};export{e as default};
