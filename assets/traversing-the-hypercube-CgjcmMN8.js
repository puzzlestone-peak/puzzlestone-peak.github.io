const e={slug:"traversing-the-hypercube",metadata:{id:"puzzle-1",title:"Traversing the Hypercube",difficulty:"hard",concepts:["graph-theory","hamiltonian-cycles","induction"],tags:["has-solution"],credit:"Classic graph theory problem. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"Ossarion-429 is a multi-dimensional being travelling across hypercubes of various dimensions. Bored and having nothing else to do, he wonders to himself if...",websitePreview:"Ossarion-429 is a multi-dimensional being travelling across hypercubes of various dimensions. Bored and having nothing else to do, he wonders to himself if..."},content:`<p>Ossarion-429 is a multi-dimensional being travelling across hypercubes of various dimensions. Bored and having nothing else to do, he wonders to himself if it’s possible to travel along the edges of a hypercube, visiting each vertex exactly once before returning to the start. Such a path is called a Hamiltonian cycle.</p>
<p>Excited with the challenge, he takes a look at a 2D hypercube, an object that you would call a “square”. Starting at a vertex, he easily finds that he can traverse the following path, visiting each vertex exactly once.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Up next is a 3D hypercube, or a “cube”. With more options at each vertex to navigate, it’s harder to find a route that traverses each vertex only once. Eventually, though, Ossarion-429 finds such a path. Can you find it too?</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>So far so good; we’ve managed to find a Hamiltonian cycle for 2D and 3D hypercubes. But how about a 4-dimensional hypercube? Or 5? As the number of vertices increases exponentially with the number of dimensions, would there ever be a hypercube that doesn’t have a Hamiltonian cycle? If yes, what’s the smallest n such that an n-dimensional hypercube has no such path? If not, prove it.</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>All n-dimensional hypercubes have a Hamiltonian cycle, so long as <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation>n \\geq 2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>, which I’ll explain why at the end.</p><p>Let’s prove this by considering the Hamiltonian cycle on a square.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>To construct a cube, we can place 2 squares side by side and connect their corresponding vertices.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Let’s draw a Hamiltonian cycle for each square, leaving out the last edge that brings us back to the start. We’ll also reverse the path on one of the squares.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="4" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Note how we can connect the two paths together like this, forming a Hamiltonian cycle for a cube.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="5" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>We can perform a similar process to construct a Hamiltonian cycle for a 4D hypercube.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="6" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>This works for higher-dimensional hypercubes, proving that there will always be a Hamiltonian cycle.</p><details class="content-block solution-block" data-type="solution"><summary class="solution-label">Extra Credit</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>There’s also another way to solve this. Let’s consider a cube with unit length, placing one corner at the origin of a 3D cartesian space. Its vertices will be at the coordinates (0, 0, 0), (0, 0, 1), (0, 1, 0), (0, 1, 1), (1, 0, 0), (1, 0, 1), (1, 1, 0), and (1, 1, 1). We then convert each vertex directly into binary by concatenating its coordinates. For instance, the vertex at (1, 0, 1) will be <code>101</code>. If you know what <a href="/expedition/gray-code">Gray codes</a> are, you’ll notice that the Gray code sequence of length 3 will form our Hamiltonian cycle.</p><p><code>000</code>, <code>001</code>, <code>011</code>, <code>010</code>, <code>110</code>, <code>111</code>, <code>101</code>, <code>100</code>.</p><p>This works because of 3 facts:</p><ul>
<li>Every number in the Gray code sequence is unique, ensuring that we will never visit the same vertex twice.</li>
<li>2 vertices are connected by an edge if and only if their coordinates differ by 1 value. For instance, (0, 0, 0) is adjacent to (1, 0, 0), (0, 1, 0), and (0, 0, 1). Since each consecutive number in the Gray code differs by at most one value, the sequence forms a valid path on the cube.</li>
<li>The last number in the Gray code sequence is only 1 bit off from the first number, allowing us to form a closed cycle.</li>
</ul><p>Let’s take a look at our earlier examples with the binary labels.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="7" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><div class="dynamic-block-placeholder" data-dynamic-block-id="8" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><div class="dynamic-block-placeholder" data-dynamic-block-id="9" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>But why is this not true for <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation>n = 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>? Well, that’s because a 1D hypercube is just a line.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="10" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>The path that traverses each vertex once will start at one vertex, go to the other, then back, crossing the same edge twice. In graph theory, cycles cannot repeat a vertex or an edge, so we cannot consider this a Hamiltonian cycle based on this technicality.</p></div></details></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
Ossarion-429 is a multi-dimensional being travelling across hypercubes of various dimensions. Bored and having nothing else to do, he wonders to himself if it’s possible to travel along the edges of a hypercube, visiting each vertex exactly once before returning to the start. Such a path is called a Hamiltonian cycle.

Excited with the challenge, he takes a look at a 2D hypercube, an object that you would call a “square”. Starting at a vertex, he easily finds that he can traverse the following path, visiting each vertex exactly once.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "2D hypercube (square) with Hamiltonian cycle"
props:
  dimensions: 2
  paths:
    - ["00", "01", "11", "10", "00"]
\`\`\`
:::

Up next is a 3D hypercube, or a “cube”. With more options at each vertex to navigate, it’s harder to find a route that traverses each vertex only once. Eventually, though, Ossarion-429 finds such a path. Can you find it too?

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "3D hypercube (cube)"
props:
  dimensions: 3
\`\`\`
:::

So far so good; we’ve managed to find a Hamiltonian cycle for 2D and 3D hypercubes. But how about a 4-dimensional hypercube? Or 5? As the number of vertices increases exponentially with the number of dimensions, would there ever be a hypercube that doesn’t have a Hamiltonian cycle? If yes, what’s the smallest n such that an n-dimensional hypercube has no such path? If not, prove it.

:::::solution
All n-dimensional hypercubes have a Hamiltonian cycle, so long as $n \\geq 2$, which I’ll explain why at the end.

Let’s prove this by considering the Hamiltonian cycle on a square.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "Square with Hamiltonian cycle"
props:
  dimensions: 2
  paths:
    - ["00", "01", "11", "10", "00"]
\`\`\`
:::

To construct a cube, we can place 2 squares side by side and connect their corresponding vertices.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "Cube constructed from two squares"
props:
  dimensions: 3
\`\`\`
:::

Let’s draw a Hamiltonian cycle for each square, leaving out the last edge that brings us back to the start. We’ll also reverse the path on one of the squares.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "Cube with paths on each square face"
props:
  dimensions: 3
  paths:
    - ["000", "001", "011", "010"]
    - ["110", "111", "101", "100"]
\`\`\`
:::

Note how we can connect the two paths together like this, forming a Hamiltonian cycle for a cube.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "Cube with complete Hamiltonian cycle"
props:
  dimensions: 3
  paths:
    - ["000", "001", "011", "010", "110", "111", "101", "100", "000"]
\`\`\`
:::

We can perform a similar process to construct a Hamiltonian cycle for a 4D hypercube.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "4D hypercube with Hamiltonian cycle"
props:
  dimensions: 4
  paths:
    - ["0000", "0001", "0011", "0010", "0110", "0111", "0101", "0100", "1100", "1101", "1111", "1110", "1010", "1011", "1001", "1000", "0000"]
\`\`\`
:::

This works for higher-dimensional hypercubes, proving that there will always be a Hamiltonian cycle.

::::solution[Extra Credit]

There’s also another way to solve this. Let’s consider a cube with unit length, placing one corner at the origin of a 3D cartesian space. Its vertices will be at the coordinates (0, 0, 0), (0, 0, 1), (0, 1, 0), (0, 1, 1), (1, 0, 0), (1, 0, 1), (1, 1, 0), and (1, 1, 1). We then convert each vertex directly into binary by concatenating its coordinates. For instance, the vertex at (1, 0, 1) will be \`101\`. If you know what [Gray codes](expedition:gray-code) are, you’ll notice that the Gray code sequence of length 3 will form our Hamiltonian cycle.

\`000\`, \`001\`, \`011\`, \`010\`, \`110\`, \`111\`, \`101\`, \`100\`.

This works because of 3 facts:
- Every number in the Gray code sequence is unique, ensuring that we will never visit the same vertex twice.  
- 2 vertices are connected by an edge if and only if their coordinates differ by 1 value. For instance, (0, 0, 0) is adjacent to (1, 0, 0), (0, 1, 0), and (0, 0, 1). Since each consecutive number in the Gray code differs by at most one value, the sequence forms a valid path on the cube.  
- The last number in the Gray code sequence is only 1 bit off from the first number, allowing us to form a closed cycle.

Let’s take a look at our earlier examples with the binary labels.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "Labelled 2D hypercube with Hamiltonian cycle"
props:
  dimensions: 2
  labels: true
  paths:
    - ["00", "01", "11", "10", "00"]
\`\`\`
:::


:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "Labelled 3D hypercube with Hamiltonian cycle"
props:
  dimensions: 3
  labels: true
  paths:
    - ["000", "001", "011", "010", "110", "111", "101", "100", "000"]
\`\`\`
:::


:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "Labelled 4D hypercube with Hamiltonian cycle"
props:
  dimensions: 4
  labels: true
  paths:
    - ["0000", "0001", "0011", "0010", "0110", "0111", "0101", "0100", "1100", "1101", "1111", "1110", "1010", "1011", "1001", "1000", "0000"]
\`\`\`
:::

But why is this not true for $n = 1$? Well, that’s because a 1D hypercube is just a line.

:::dynamic
\`\`\`yaml
use: '#hypercube-viz'
title: "1D hypercube (line)"
props:
  dimensions: 1
  labels: true
\`\`\`
:::

The path that traverses each vertex once will start at one vertex, go to the other, then back, crossing the same edge twice. In graph theory, cycles cannot repeat a vertex or an edge, so we cannot consider this a Hamiltonian cycle based on this technicality.
::::
:::::

:::component[hypercube-viz]
\`\`\`html
<canvas id="hypercube-canvas"></canvas>
\`\`\`

\`\`\`js
// Configuration constants
const MAX_CUBE_WIDTH = 100;
const LABEL_OFFSET = 25;
const Z_X_MULTIPLIER = 0.3;
const W_X_MULTIPLIER = 2;
const Z_Y_MULTIPLIER = -0.3;
const W_Y_MULTIPLIER = -0.8;
const BASE_LINE_WIDTH = 2;
const PATH_LINE_WIDTH = 4;
const PATH_ARROW_LINE_WIDTH = 2;
const VERTEX_RADIUS = 4;
const PADDING = 20;
const ARROWHEAD_LENGTH = 12;
const ARROWHEAD_ANGLE = Math.PI / 3;

function mount(options) {
  const { root, api, props } = options;
  const canvas = root.querySelector('#hypercube-canvas');
  const ctx = canvas.getContext('2d');

  // Default props
  const dimensions = props.dimensions;
  const showLabels = props.labels ?? false;
  const paths = props.paths || [];

  // Draw function that handles the actual rendering
  function drawCube() {
    const width = api.size.width;

    // Generate all vertices for n-dimensional hypercube
    const vertices = generateVertices(dimensions);

    // Calculate projection bounds
    const projected = vertices.map(v => projectVertex(v));
    const bounds = calculateBounds(projected);

    // Calculate diagram dimensions in unit space (natural aspect ratio)
    const diagramWidth = bounds.maxX - bounds.minX;
    const diagramHeight = bounds.maxY - bounds.minY;

    // Calculate label space needed by finding max offsets from calculateLabelOffset
    let labelHorizontalSpace = 0;
    let labelVerticalSpace = 0;
    if (showLabels) {
      // Estimate text dimensions (approximate based on 1rem font)
      const charWidth = 10; // Approximate width per character in pixels
      const textHeight = 16; // Approximate text height in pixels
      const maxLabelWidth = dimensions * charWidth; // e.g., "1111" is 4 chars for 4D

      projected.forEach(vertex => {
        const offset = calculateLabelOffset(vertex, MAX_CUBE_WIDTH);
        // Add text dimensions to offset to get total space needed
        labelHorizontalSpace = Math.max(labelHorizontalSpace, Math.abs(offset.x) + maxLabelWidth / 2);
        labelVerticalSpace = Math.max(labelVerticalSpace, Math.abs(offset.y) + textHeight / 2);
      });
    }

    // Calculate actual cube width in pixels (fit within available width, up to MAX_CUBE_WIDTH)
    const canvasWidth = width;
    const availableWidth = canvasWidth - 2 * labelHorizontalSpace;
    const cubeWidth = Math.min(MAX_CUBE_WIDTH, availableWidth / diagramWidth);

    const canvasHeight = diagramHeight * cubeWidth + 2 * PADDING + 2 * labelVerticalSpace;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Center offset (leave space for labels on both sides)
    const offsetX = labelHorizontalSpace + (availableWidth - diagramWidth * cubeWidth) / 2 - bounds.minX * cubeWidth;
    const offsetY = PADDING + labelVerticalSpace - bounds.minY * cubeWidth;

    // Scale and translate projected vertices
    const scaledVertices = projected.map(p => ({
      x: p.x * cubeWidth + offsetX,
      y: p.y * cubeWidth + offsetY,
      label: p.label
    }));

    // Get theme colors
    const mutedColor = api.getColor('muted-foreground');
    const foregroundColor = api.getColor('foreground');

    // Draw base edges
    ctx.strokeStyle = mutedColor;
    ctx.lineWidth = BASE_LINE_WIDTH;
    const edges = generateEdges(vertices);
    edges.forEach(([i, j]) => {
      const v1 = scaledVertices[i];
      const v2 = scaledVertices[j];
      ctx.beginPath();
      ctx.moveTo(v1.x, v1.y);
      ctx.lineTo(v2.x, v2.y);
      ctx.stroke();
    });

    // Draw vertices (before path lines so paths appear on top)
    ctx.fillStyle = mutedColor;
    scaledVertices.forEach(v => {
      ctx.beginPath();
      ctx.arc(v.x, v.y, VERTEX_RADIUS, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Draw path lines if provided (drawn on top of vertices)
    if (paths && paths.length > 0) {
      ctx.strokeStyle = foregroundColor;
      ctx.lineWidth = PATH_LINE_WIDTH;

      paths.forEach(path => {
        for (let i = 0; i < path.length - 1; i++) {
          const idx1 = vertices.findIndex(v => v.label === path[i]);
          const idx2 = vertices.findIndex(v => v.label === path[i + 1]);
          if (idx1 !== -1 && idx2 !== -1) {
            const v1 = scaledVertices[idx1];
            const v2 = scaledVertices[idx2];

            // Draw the path line
            ctx.lineWidth = PATH_LINE_WIDTH;
            ctx.beginPath();
            ctx.moveTo(v1.x, v1.y);
            ctx.lineTo(v2.x, v2.y);
            ctx.stroke();

            // Draw arrowhead with center at midpoint
            ctx.lineWidth = PATH_ARROW_LINE_WIDTH;
            const midX = (v1.x + v2.x) / 2;
            const midY = (v1.y + v2.y) / 2;

            // Calculate direction angle
            const angle = Math.atan2(v2.y - v1.y, v2.x - v1.x);

            // Calculate tip position (half arrowhead length forward from midpoint)
            const tipX = midX + (ARROWHEAD_LENGTH / 2) * Math.cos(angle);
            const tipY = midY + (ARROWHEAD_LENGTH / 2) * Math.sin(angle);

            // Calculate base points (half arrowhead length backward from midpoint, spread by angle)
            const arrow1X = midX - (ARROWHEAD_LENGTH / 2) * Math.cos(angle - ARROWHEAD_ANGLE);
            const arrow1Y = midY - (ARROWHEAD_LENGTH / 2) * Math.sin(angle - ARROWHEAD_ANGLE);
            const arrow2X = midX - (ARROWHEAD_LENGTH / 2) * Math.cos(angle + ARROWHEAD_ANGLE);
            const arrow2Y = midY - (ARROWHEAD_LENGTH / 2) * Math.sin(angle + ARROWHEAD_ANGLE);

            ctx.beginPath();
            ctx.moveTo(arrow1X, arrow1Y);
            ctx.lineTo(tipX, tipY);
            ctx.lineTo(arrow2X, arrow2Y);
            ctx.stroke();

            // Reset line width for next path segment
            ctx.lineWidth = PATH_LINE_WIDTH;
          }
        }
      });
    }

    // Draw labels if enabled
    if (showLabels) {
      ctx.fillStyle = foregroundColor;
      ctx.font = '1rem ' + api.getFont('default');
      ctx.textBaseline = 'middle';

      scaledVertices.forEach(v => {
        // Calculate label position with smart offset
        const offset = calculateLabelOffset(v, cubeWidth);
        ctx.textAlign = offset.align || 'center';
        ctx.fillText(v.label, v.x + offset.x, v.y + offset.y);
      });
    }
  }

  // Generate vertices for n-dimensional hypercube
  function generateVertices(n) {
    const count = Math.pow(2, n);
    const vertices = [];
    for (let i = 0; i < count; i++) {
      const coords = [];
      const label = [];
      for (let j = 0; j < n; j++) {
        const bit = (i >> j) & 1;
        coords.push(bit);
        label.unshift(bit); // Reverse order for label
      }
      vertices.push({ coords, label: label.join('') });
    }
    return vertices;
  }

  // Project vertex to 2D using the specified projection
  function projectVertex(vertex) {
    const [x = 0, y = 0, z = 0, w = 0] = vertex.coords;
    return {
      x: x + Z_X_MULTIPLIER * z + W_X_MULTIPLIER * w,
      y: y + Z_Y_MULTIPLIER * z + W_Y_MULTIPLIER * w,
      label: vertex.label
    };
  }

  // Calculate bounds of projected vertices
  function calculateBounds(projected) {
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    projected.forEach(p => {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);
    });
    return { minX, maxX, minY, maxY };
  }

  // Generate edges (vertices that differ by exactly 1 bit)
  function generateEdges(vertices) {
    const edges = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const diff = vertices[i].coords.filter((val, idx) => val !== vertices[j].coords[idx]).length;
        if (diff === 1) {
          edges.push([i, j]);
        }
      }
    }
    return edges;
  }

  // Calculate smart label offset to avoid overlapping edges
  function calculateLabelOffset(vertex, cubeWidth) {
    // Label offset map based on dimensions and coordinates
    const labelOffsets = {
      1: {
        '0': { x: 0, y: cubeWidth * 0.2, align: 'center' },
        '1': { x: 0, y: cubeWidth * 0.2, align: 'center' },
      },
      2: {
        '00': { x: -cubeWidth * 0.1, y: -cubeWidth * 0.05, align: 'right' },
        '01': { x: cubeWidth * 0.1, y: -cubeWidth * 0.05, align: 'left' },
        '10': { x: -cubeWidth * 0.1, y: cubeWidth * 0.05, align: 'right' },
        '11': { x: cubeWidth * 0.1, y: cubeWidth * 0.05, align: 'left' },
      },
      3: {
        '000': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '001': { x: -cubeWidth * 0.05, y: cubeWidth * 0.15, align: 'right' },
        '010': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '011': { x: cubeWidth * 0.15, y: 0, align: 'left' },
        '100': { x: -cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'right' },
        '101': { x: cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'left' },
        '110': { x: cubeWidth * 0.05, y: -cubeWidth * 0.10, align: 'left' },
        '111': { x: cubeWidth * 0.1, y: 0, align: 'left' },
      },
      4: {
        '0000': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '0001': { x: -cubeWidth * 0.05, y: cubeWidth * 0.15, align: 'right' },
        '0010': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '0011': { x: cubeWidth * 0.15, y: 0, align: 'left' },
        '0100': { x: -cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'right' },
        '0101': { x: cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'left' },
        '0110': { x: cubeWidth * 0.05, y: -cubeWidth * 0.10, align: 'left' },
        '0111': { x: cubeWidth * 0.1, y: 0, align: 'left' },
        '1000': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '1001': { x: -cubeWidth * 0.05, y: cubeWidth * 0.15, align: 'right' },
        '1010': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '1011': { x: cubeWidth * 0.15, y: 0, align: 'left' },
        '1100': { x: -cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'right' },
        '1101': { x: cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'left' },
        '1110': { x: cubeWidth * 0.05, y: -cubeWidth * 0.10, align: 'left' },
        '1111': { x: cubeWidth * 0.1, y: 0, align: 'left' },
      }
    };

    const config = labelOffsets[dimensions]?.[vertex.label];
    return config;
  }

  // Initial draw
  drawCube();

  // Redraw on theme change
  api.onThemeChange(() => {
    drawCube();
  });

  // Redraw on resize
  api.onResize(() => {
    drawCube();
  });
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:2,paths:[["00","01","11","10","00"]]},title:"2D hypercube (square) with Hamiltonian cycle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:3},title:"3D hypercube (cube)",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:2,paths:[["00","01","11","10","00"]]},title:"Square with Hamiltonian cycle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:3},title:"Cube constructed from two squares",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:3,paths:[["000","001","011","010"],["110","111","101","100"]]},title:"Cube with paths on each square face",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:3,paths:[["000","001","011","010","110","111","101","100","000"]]},title:"Cube with complete Hamiltonian cycle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:4,paths:[["0000","0001","0011","0010","0110","0111","0101","0100","1100","1101","1111","1110","1010","1011","1001","1000","0000"]]},title:"4D hypercube with Hamiltonian cycle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:2,labels:!0,paths:[["00","01","11","10","00"]]},title:"Labelled 2D hypercube with Hamiltonian cycle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:3,labels:!0,paths:[["000","001","011","010","110","111","101","100","000"]]},title:"Labelled 3D hypercube with Hamiltonian cycle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:4,labels:!0,paths:[["0000","0001","0011","0010","0110","0111","0101","0100","1100","1101","1111","1110","1010","1011","1001","1000","0000"]]},title:"Labelled 4D hypercube with Hamiltonian cycle",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"},{type:"dynamic",mode:"component",componentId:"#hypercube-viz",props:{dimensions:1,labels:!0},title:"1D hypercube (line)",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/graph-theory/traversing-the-hypercube.md"}],inlineComponents:{"hypercube-viz":{id:"hypercube-viz",code:`// Configuration constants
const MAX_CUBE_WIDTH = 100;
const LABEL_OFFSET = 25;
const Z_X_MULTIPLIER = 0.3;
const W_X_MULTIPLIER = 2;
const Z_Y_MULTIPLIER = -0.3;
const W_Y_MULTIPLIER = -0.8;
const BASE_LINE_WIDTH = 2;
const PATH_LINE_WIDTH = 4;
const PATH_ARROW_LINE_WIDTH = 2;
const VERTEX_RADIUS = 4;
const PADDING = 20;
const ARROWHEAD_LENGTH = 12;
const ARROWHEAD_ANGLE = Math.PI / 3;

function mount(options) {
  const { root, api, props } = options;
  const canvas = root.querySelector('#hypercube-canvas');
  const ctx = canvas.getContext('2d');

  // Default props
  const dimensions = props.dimensions;
  const showLabels = props.labels ?? false;
  const paths = props.paths || [];

  // Draw function that handles the actual rendering
  function drawCube() {
    const width = api.size.width;

    // Generate all vertices for n-dimensional hypercube
    const vertices = generateVertices(dimensions);

    // Calculate projection bounds
    const projected = vertices.map(v => projectVertex(v));
    const bounds = calculateBounds(projected);

    // Calculate diagram dimensions in unit space (natural aspect ratio)
    const diagramWidth = bounds.maxX - bounds.minX;
    const diagramHeight = bounds.maxY - bounds.minY;

    // Calculate label space needed by finding max offsets from calculateLabelOffset
    let labelHorizontalSpace = 0;
    let labelVerticalSpace = 0;
    if (showLabels) {
      // Estimate text dimensions (approximate based on 1rem font)
      const charWidth = 10; // Approximate width per character in pixels
      const textHeight = 16; // Approximate text height in pixels
      const maxLabelWidth = dimensions * charWidth; // e.g., "1111" is 4 chars for 4D

      projected.forEach(vertex => {
        const offset = calculateLabelOffset(vertex, MAX_CUBE_WIDTH);
        // Add text dimensions to offset to get total space needed
        labelHorizontalSpace = Math.max(labelHorizontalSpace, Math.abs(offset.x) + maxLabelWidth / 2);
        labelVerticalSpace = Math.max(labelVerticalSpace, Math.abs(offset.y) + textHeight / 2);
      });
    }

    // Calculate actual cube width in pixels (fit within available width, up to MAX_CUBE_WIDTH)
    const canvasWidth = width;
    const availableWidth = canvasWidth - 2 * labelHorizontalSpace;
    const cubeWidth = Math.min(MAX_CUBE_WIDTH, availableWidth / diagramWidth);

    const canvasHeight = diagramHeight * cubeWidth + 2 * PADDING + 2 * labelVerticalSpace;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Center offset (leave space for labels on both sides)
    const offsetX = labelHorizontalSpace + (availableWidth - diagramWidth * cubeWidth) / 2 - bounds.minX * cubeWidth;
    const offsetY = PADDING + labelVerticalSpace - bounds.minY * cubeWidth;

    // Scale and translate projected vertices
    const scaledVertices = projected.map(p => ({
      x: p.x * cubeWidth + offsetX,
      y: p.y * cubeWidth + offsetY,
      label: p.label
    }));

    // Get theme colors
    const mutedColor = api.getColor('muted-foreground');
    const foregroundColor = api.getColor('foreground');

    // Draw base edges
    ctx.strokeStyle = mutedColor;
    ctx.lineWidth = BASE_LINE_WIDTH;
    const edges = generateEdges(vertices);
    edges.forEach(([i, j]) => {
      const v1 = scaledVertices[i];
      const v2 = scaledVertices[j];
      ctx.beginPath();
      ctx.moveTo(v1.x, v1.y);
      ctx.lineTo(v2.x, v2.y);
      ctx.stroke();
    });

    // Draw vertices (before path lines so paths appear on top)
    ctx.fillStyle = mutedColor;
    scaledVertices.forEach(v => {
      ctx.beginPath();
      ctx.arc(v.x, v.y, VERTEX_RADIUS, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Draw path lines if provided (drawn on top of vertices)
    if (paths && paths.length > 0) {
      ctx.strokeStyle = foregroundColor;
      ctx.lineWidth = PATH_LINE_WIDTH;

      paths.forEach(path => {
        for (let i = 0; i < path.length - 1; i++) {
          const idx1 = vertices.findIndex(v => v.label === path[i]);
          const idx2 = vertices.findIndex(v => v.label === path[i + 1]);
          if (idx1 !== -1 && idx2 !== -1) {
            const v1 = scaledVertices[idx1];
            const v2 = scaledVertices[idx2];

            // Draw the path line
            ctx.lineWidth = PATH_LINE_WIDTH;
            ctx.beginPath();
            ctx.moveTo(v1.x, v1.y);
            ctx.lineTo(v2.x, v2.y);
            ctx.stroke();

            // Draw arrowhead with center at midpoint
            ctx.lineWidth = PATH_ARROW_LINE_WIDTH;
            const midX = (v1.x + v2.x) / 2;
            const midY = (v1.y + v2.y) / 2;

            // Calculate direction angle
            const angle = Math.atan2(v2.y - v1.y, v2.x - v1.x);

            // Calculate tip position (half arrowhead length forward from midpoint)
            const tipX = midX + (ARROWHEAD_LENGTH / 2) * Math.cos(angle);
            const tipY = midY + (ARROWHEAD_LENGTH / 2) * Math.sin(angle);

            // Calculate base points (half arrowhead length backward from midpoint, spread by angle)
            const arrow1X = midX - (ARROWHEAD_LENGTH / 2) * Math.cos(angle - ARROWHEAD_ANGLE);
            const arrow1Y = midY - (ARROWHEAD_LENGTH / 2) * Math.sin(angle - ARROWHEAD_ANGLE);
            const arrow2X = midX - (ARROWHEAD_LENGTH / 2) * Math.cos(angle + ARROWHEAD_ANGLE);
            const arrow2Y = midY - (ARROWHEAD_LENGTH / 2) * Math.sin(angle + ARROWHEAD_ANGLE);

            ctx.beginPath();
            ctx.moveTo(arrow1X, arrow1Y);
            ctx.lineTo(tipX, tipY);
            ctx.lineTo(arrow2X, arrow2Y);
            ctx.stroke();

            // Reset line width for next path segment
            ctx.lineWidth = PATH_LINE_WIDTH;
          }
        }
      });
    }

    // Draw labels if enabled
    if (showLabels) {
      ctx.fillStyle = foregroundColor;
      ctx.font = '1rem ' + api.getFont('default');
      ctx.textBaseline = 'middle';

      scaledVertices.forEach(v => {
        // Calculate label position with smart offset
        const offset = calculateLabelOffset(v, cubeWidth);
        ctx.textAlign = offset.align || 'center';
        ctx.fillText(v.label, v.x + offset.x, v.y + offset.y);
      });
    }
  }

  // Generate vertices for n-dimensional hypercube
  function generateVertices(n) {
    const count = Math.pow(2, n);
    const vertices = [];
    for (let i = 0; i < count; i++) {
      const coords = [];
      const label = [];
      for (let j = 0; j < n; j++) {
        const bit = (i >> j) & 1;
        coords.push(bit);
        label.unshift(bit); // Reverse order for label
      }
      vertices.push({ coords, label: label.join('') });
    }
    return vertices;
  }

  // Project vertex to 2D using the specified projection
  function projectVertex(vertex) {
    const [x = 0, y = 0, z = 0, w = 0] = vertex.coords;
    return {
      x: x + Z_X_MULTIPLIER * z + W_X_MULTIPLIER * w,
      y: y + Z_Y_MULTIPLIER * z + W_Y_MULTIPLIER * w,
      label: vertex.label
    };
  }

  // Calculate bounds of projected vertices
  function calculateBounds(projected) {
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    projected.forEach(p => {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);
    });
    return { minX, maxX, minY, maxY };
  }

  // Generate edges (vertices that differ by exactly 1 bit)
  function generateEdges(vertices) {
    const edges = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const diff = vertices[i].coords.filter((val, idx) => val !== vertices[j].coords[idx]).length;
        if (diff === 1) {
          edges.push([i, j]);
        }
      }
    }
    return edges;
  }

  // Calculate smart label offset to avoid overlapping edges
  function calculateLabelOffset(vertex, cubeWidth) {
    // Label offset map based on dimensions and coordinates
    const labelOffsets = {
      1: {
        '0': { x: 0, y: cubeWidth * 0.2, align: 'center' },
        '1': { x: 0, y: cubeWidth * 0.2, align: 'center' },
      },
      2: {
        '00': { x: -cubeWidth * 0.1, y: -cubeWidth * 0.05, align: 'right' },
        '01': { x: cubeWidth * 0.1, y: -cubeWidth * 0.05, align: 'left' },
        '10': { x: -cubeWidth * 0.1, y: cubeWidth * 0.05, align: 'right' },
        '11': { x: cubeWidth * 0.1, y: cubeWidth * 0.05, align: 'left' },
      },
      3: {
        '000': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '001': { x: -cubeWidth * 0.05, y: cubeWidth * 0.15, align: 'right' },
        '010': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '011': { x: cubeWidth * 0.15, y: 0, align: 'left' },
        '100': { x: -cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'right' },
        '101': { x: cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'left' },
        '110': { x: cubeWidth * 0.05, y: -cubeWidth * 0.10, align: 'left' },
        '111': { x: cubeWidth * 0.1, y: 0, align: 'left' },
      },
      4: {
        '0000': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '0001': { x: -cubeWidth * 0.05, y: cubeWidth * 0.15, align: 'right' },
        '0010': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '0011': { x: cubeWidth * 0.15, y: 0, align: 'left' },
        '0100': { x: -cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'right' },
        '0101': { x: cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'left' },
        '0110': { x: cubeWidth * 0.05, y: -cubeWidth * 0.10, align: 'left' },
        '0111': { x: cubeWidth * 0.1, y: 0, align: 'left' },
        '1000': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '1001': { x: -cubeWidth * 0.05, y: cubeWidth * 0.15, align: 'right' },
        '1010': { x: -cubeWidth * 0.1, y: 0, align: 'right' },
        '1011': { x: cubeWidth * 0.15, y: 0, align: 'left' },
        '1100': { x: -cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'right' },
        '1101': { x: cubeWidth * 0.05, y: -cubeWidth * 0.1, align: 'left' },
        '1110': { x: cubeWidth * 0.05, y: -cubeWidth * 0.10, align: 'left' },
        '1111': { x: cubeWidth * 0.1, y: 0, align: 'left' },
      }
    };

    const config = labelOffsets[dimensions]?.[vertex.label];
    return config;
  }

  // Initial draw
  drawCube();

  // Redraw on theme change
  api.onThemeChange(() => {
    drawCube();
  });

  // Redraw on resize
  api.onResize(() => {
    drawCube();
  });
}`,layout:'<canvas id="hypercube-canvas"></canvas>',startLine:189}}};export{e as default};
