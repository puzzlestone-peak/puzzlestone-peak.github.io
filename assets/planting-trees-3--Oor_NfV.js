const n={slug:"planting-trees-3",metadata:{id:"puzzle-51",title:"Planting Trees 3",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["geometry"],tags:["has-solution"],previousPuzzle:"planting-trees-2",credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-03",lastUpdated:"2026-02-03",preview:"The mathematics professor has become your most loyal client. After solving her first two challenges, she calls you back with what she claims is her hardest...",websitePreview:"The mathematics professor has become your most loyal client. After solving her first two challenges, she calls you back with what she claims is her hardest..."},content:`<p>The mathematics professor has become your most loyal client. After solving her first two challenges, she calls you back with what she claims is her hardest puzzle yet.</p>
<p>This time, she wants you to plant nine trees in ten straight lines, with exactly three trees in each line. Can you find an arrangement that works?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>As before, trees can belong to more than one row. But this time, some trees will need to belong to many rows.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Try arranging the trees in three horizontal rows of three, then look for all the diagonal lines you can draw through them.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: Arrange the nine trees in a special pattern that creates ten lines of three.</p><p>Position the trees in three rows:</p><ul>
<li>Top row: three trees evenly spaced</li>
<li>Bottom row: three trees directly below, evenly spaced</li>
<li>Middle row: three trees positioned between the other two rows, but shifted inward</li>
</ul><p>The key is where you place the middle row. Each middle tree should sit at the intersection of two diagonal lines from the outer rows. Specifically:</p><ul>
<li>The center tree of the middle row lies on the line connecting the top-left and bottom-left trees</li>
<li>The left tree of the middle row lies where two diagonals cross: one from top-left to bottom-center, and one from top-center to bottom-left</li>
<li>The right tree of the middle row lies where two other diagonals cross: one from top-center to bottom-right, and one from top-right to bottom-center</li>
</ul><p>This arrangement creates exactly ten rows of three trees:</p><ul>
<li>Three horizontal rows (top, middle, bottom)</li>
<li>Two diagonal rows going through the center tree of the middle row</li>
<li>Four diagonal rows passing through the left and right trees of the middle row</li>
<li>One additional diagonal completing the count</li>
</ul><p>The trick is that the middle trees each belong to four or five different rows, maximizing the overlap and allowing nine trees to form ten lines.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
The mathematics professor has become your most loyal client. After solving her first two challenges, she calls you back with what she claims is her hardest puzzle yet.

This time, she wants you to plant nine trees in ten straight lines, with exactly three trees in each line. Can you find an arrangement that works?

:::hint
As before, trees can belong to more than one row. But this time, some trees will need to belong to many rows.
:::

:::hint
Try arranging the trees in three horizontal rows of three, then look for all the diagonal lines you can draw through them.
:::

::::solution
**Answer**: Arrange the nine trees in a special pattern that creates ten lines of three.

Position the trees in three rows:
- Top row: three trees evenly spaced
- Bottom row: three trees directly below, evenly spaced
- Middle row: three trees positioned between the other two rows, but shifted inward

The key is where you place the middle row. Each middle tree should sit at the intersection of two diagonal lines from the outer rows. Specifically:
- The center tree of the middle row lies on the line connecting the top-left and bottom-left trees
- The left tree of the middle row lies where two diagonals cross: one from top-left to bottom-center, and one from top-center to bottom-left
- The right tree of the middle row lies where two other diagonals cross: one from top-center to bottom-right, and one from top-right to bottom-center

This arrangement creates exactly ten rows of three trees:
- Three horizontal rows (top, middle, bottom)
- Two diagonal rows going through the center tree of the middle row
- Four diagonal rows passing through the left and right trees of the middle row
- One additional diagonal completing the count

The trick is that the middle trees each belong to four or five different rows, maximizing the overlap and allowing nine trees to form ten lines.

:::dynamic
\`\`\`yaml
title: "Nine trees arranged to form ten lines"
use: '#nine-trees-diagram'
\`\`\`
:::
::::

:::component[nine-trees-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Calculate dimensions
  const aspectRatio = 0.7;
  const height = width * aspectRatio;

  canvas.width = width;
  canvas.height = height;

  // Get theme colors
  const primaryColor = api.getColor('primary');
  const lineColor = api.getColor('primary', { alpha: -0.6 });

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Calculate tree positions
  const padding = width * 0.1;
  const usableWidth = width - 2 * padding;
  const usableHeight = height - 2 * padding;
  const colSpacing = usableWidth / 2;

  // Define the 9 tree positions
  const trees = {
    A1: [padding, padding],
    A2: [padding + colSpacing, padding],
    A3: [padding + 2 * colSpacing, padding],
    C1: [padding, padding + usableHeight],
    C2: [padding + colSpacing, padding + usableHeight],
    C3: [padding + 2 * colSpacing, padding + usableHeight],
    B2: [padding + colSpacing, padding + usableHeight / 2],
    B1: (() => {
      const x1a = padding, y1a = padding;
      const x1b = padding + colSpacing, y1b = padding + usableHeight;
      const x2a = padding + colSpacing, y2a = padding;
      const x2b = padding, y2b = padding + usableHeight;
      const m1 = (y1b - y1a) / (x1b - x1a);
      const b1 = y1a - m1 * x1a;
      const m2 = (y2b - y2a) / (x2b - x2a);
      const b2 = y2a - m2 * x2a;
      const x = (b2 - b1) / (m1 - m2);
      const y = m1 * x + b1;
      return [x, y];
    })(),
    B3: (() => {
      const x1a = padding + colSpacing, y1a = padding;
      const x1b = padding + 2 * colSpacing, y1b = padding + usableHeight;
      const x2a = padding + 2 * colSpacing, y2a = padding;
      const x2b = padding + colSpacing, y2b = padding + usableHeight;
      const m1 = (y1b - y1a) / (x1b - x1a);
      const b1 = y1a - m1 * x1a;
      const m2 = (y2b - y2a) / (x2b - x2a);
      const b2 = y2a - m2 * x2a;
      const x = (b2 - b1) / (m1 - m2);
      const y = m1 * x + b1;
      return [x, y];
    })()
  };

  // Define the 10 lines
  const lines = [
    ['A1', 'A2', 'A3'],
    ['B1', 'B2', 'B3'],
    ['C1', 'C2', 'C3'],
    ['A1', 'B2', 'C1'],
    ['A1', 'B1', 'C2'],
    ['A2', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A2', 'B3', 'C3'],
    ['A3', 'B3', 'C2'],
    ['A3', 'B2', 'C3']
  ];

  // Draw lines first
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = Math.max(1, width / 300);
  ctx.lineCap = 'round';

  lines.forEach(line => {
    const [t1, t2, t3] = line;
    const [x1, y1] = trees[t1];
    const [x2, y2] = trees[t2];
    const [x3, y3] = trees[t3];

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.stroke();
  });

  // Draw trees
  const treeRadius = Math.max(6, width / 50);
  const treeOutlineWidth = Math.max(2, width / 300);

  Object.values(trees).forEach(([x, y]) => {
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.arc(x, y, treeRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = api.getColor('primary', { lightness: -0.15 });
    ctx.lineWidth = treeOutlineWidth;
    ctx.beginPath();
    ctx.arc(x, y, treeRadius, 0, Math.PI * 2);
    ctx.stroke();
  });
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#nine-trees-diagram",title:"Nine trees arranged to form ten lines",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/planting-trees/planting-trees-3.md"}],inlineComponents:{"nine-trees-diagram":{id:"nine-trees-diagram",code:`function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Calculate dimensions
  const aspectRatio = 0.7;
  const height = width * aspectRatio;

  canvas.width = width;
  canvas.height = height;

  // Get theme colors
  const primaryColor = api.getColor('primary');
  const lineColor = api.getColor('primary', { alpha: -0.6 });

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Calculate tree positions
  const padding = width * 0.1;
  const usableWidth = width - 2 * padding;
  const usableHeight = height - 2 * padding;
  const colSpacing = usableWidth / 2;

  // Define the 9 tree positions
  const trees = {
    A1: [padding, padding],
    A2: [padding + colSpacing, padding],
    A3: [padding + 2 * colSpacing, padding],
    C1: [padding, padding + usableHeight],
    C2: [padding + colSpacing, padding + usableHeight],
    C3: [padding + 2 * colSpacing, padding + usableHeight],
    B2: [padding + colSpacing, padding + usableHeight / 2],
    B1: (() => {
      const x1a = padding, y1a = padding;
      const x1b = padding + colSpacing, y1b = padding + usableHeight;
      const x2a = padding + colSpacing, y2a = padding;
      const x2b = padding, y2b = padding + usableHeight;
      const m1 = (y1b - y1a) / (x1b - x1a);
      const b1 = y1a - m1 * x1a;
      const m2 = (y2b - y2a) / (x2b - x2a);
      const b2 = y2a - m2 * x2a;
      const x = (b2 - b1) / (m1 - m2);
      const y = m1 * x + b1;
      return [x, y];
    })(),
    B3: (() => {
      const x1a = padding + colSpacing, y1a = padding;
      const x1b = padding + 2 * colSpacing, y1b = padding + usableHeight;
      const x2a = padding + 2 * colSpacing, y2a = padding;
      const x2b = padding + colSpacing, y2b = padding + usableHeight;
      const m1 = (y1b - y1a) / (x1b - x1a);
      const b1 = y1a - m1 * x1a;
      const m2 = (y2b - y2a) / (x2b - x2a);
      const b2 = y2a - m2 * x2a;
      const x = (b2 - b1) / (m1 - m2);
      const y = m1 * x + b1;
      return [x, y];
    })()
  };

  // Define the 10 lines
  const lines = [
    ['A1', 'A2', 'A3'],
    ['B1', 'B2', 'B3'],
    ['C1', 'C2', 'C3'],
    ['A1', 'B2', 'C1'],
    ['A1', 'B1', 'C2'],
    ['A2', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A2', 'B3', 'C3'],
    ['A3', 'B3', 'C2'],
    ['A3', 'B2', 'C3']
  ];

  // Draw lines first
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = Math.max(1, width / 300);
  ctx.lineCap = 'round';

  lines.forEach(line => {
    const [t1, t2, t3] = line;
    const [x1, y1] = trees[t1];
    const [x2, y2] = trees[t2];
    const [x3, y3] = trees[t3];

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.stroke();
  });

  // Draw trees
  const treeRadius = Math.max(6, width / 50);
  const treeOutlineWidth = Math.max(2, width / 300);

  Object.values(trees).forEach(([x, y]) => {
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.arc(x, y, treeRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = api.getColor('primary', { lightness: -0.15 });
    ctx.lineWidth = treeOutlineWidth;
    ctx.beginPath();
    ctx.arc(x, y, treeRadius, 0, Math.PI * 2);
    ctx.stroke();
  });
}`,startLine:61}}};export{n as default};
