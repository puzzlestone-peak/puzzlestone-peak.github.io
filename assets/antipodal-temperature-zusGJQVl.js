const t={slug:"antipodal-temperature",metadata:{id:"puzzle-55",title:"Antipodal Temperature",difficulty:"medium",concepts:["logic"],tags:["has-solution"],nextPuzzle:"antipodal-temperature-and-pressure",credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-03",lastUpdated:"2026-02-04",preview:"Assume the Earth is a perfect sphere. Show that at any given time, there exist two antipodal points (points on exact opposite sides of the Earth) with the same...",websitePreview:"Assume the Earth is a perfect sphere. Show that at any given time, there exist two antipodal points (points on exact opposite sides of the Earth) with the same..."},content:`<p>Assume the Earth is a perfect sphere. Show that at any given time, there exist two antipodal points (points on exact opposite sides of the Earth) with the same temperature.</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You may assume that the temperature is smooth: there are no sudden "jumps" in temperature as you walk from one place to another.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s say you start at point A and walk along a great circle around the Earth. What happens to the temperature at where you are and the temperature at the point directly opposite to you?</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: At any given time, there exist two antipodal points with the same temperature.</p><p>Let’s pick any great circle around the Earth, for example, the equator. Choose a starting point A on this circle, and let B be the point directly opposite to A (the antipodal point).</p><p><strong>Case 1</strong>: If point A and B have the same temperature, we're done! But more likely than not, they'll have different temperatures, in which case we consider case 2.</p><p><strong>Case 2</strong>: Point A and B have different temperatures.</p><p>Let's start from point A and walk around the equator. At the same time, we'll have a friend start from point B and walk around the equator in the same direction, always keeping on the opposite side of us. As we do so, each of us carry a thermometer to measure the temperature.</p><p>Eventually, we'll reach point B, and our friend would've reached point A.</p><p><strong>Case 2A</strong>: Point A's temperature is lower than point B's temperature. We started with a lower temperature than our friend, but now we have a higher temperature than our friend. Then at some point, our temperatures would have to “cross” each other.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>We can even cross multiple times:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Or even cross outside our original temperature range:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Notice that since we're always on the opposite side of each other at all times, the crossing point indicates a pair antipodal points with the same temperature.</p><p><strong>Case 2B</strong>: Point A's temperature is higher than point B's temperature. We can use the same argument as case 2B to prove that there's a pair of antipodal points with the same temperature.</p><p>Across case 1, 2A, and 2B, we can always find a pair of antipodal points that have the same temperature. And that's our solution!</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-header note-note-header">Intermediate Value Theorem</div><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>This solution relies on the principle that continuous changes must pass through all intermediate values. If you start with A warmer than B and end with B warmer than A, you must pass through a moment where they’re equal.</p></div></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
Assume the Earth is a perfect sphere. Show that at any given time, there exist two antipodal points (points on exact opposite sides of the Earth) with the same temperature.

:::hint
You may assume that the temperature is smooth: there are no sudden "jumps" in temperature as you walk from one place to another.
:::

:::hint
Let’s say you start at point A and walk along a great circle around the Earth. What happens to the temperature at where you are and the temperature at the point directly opposite to you?
:::

::::solution
**Answer**: At any given time, there exist two antipodal points with the same temperature.

Let’s pick any great circle around the Earth, for example, the equator. Choose a starting point A on this circle, and let B be the point directly opposite to A (the antipodal point).

**Case 1**: If point A and B have the same temperature, we're done! But more likely than not, they'll have different temperatures, in which case we consider case 2.

**Case 2**: Point A and B have different temperatures.

Let's start from point A and walk around the equator. At the same time, we'll have a friend start from point B and walk around the equator in the same direction, always keeping on the opposite side of us. As we do so, each of us carry a thermometer to measure the temperature.

Eventually, we'll reach point B, and our friend would've reached point A.

**Case 2A**: Point A's temperature is lower than point B's temperature. We started with a lower temperature than our friend, but now we have a higher temperature than our friend. Then at some point, our temperatures would have to “cross” each other.

:::dynamic
\`\`\`yaml
title: "Temperature chart showing two paths crossing"
use: '#ivt-chart'
props:
  seed: 42
  noiseAmount: 0.2
  youPoints: [[0, 25], [20, 15], [50, 50], [80, 85], [100, 75]]
  friendPoints: [[0, 75], [20, 85], [50, 50], [80, 15], [100, 25]]
\`\`\`
:::

We can even cross multiple times:

:::dynamic
\`\`\`yaml
title: "Temperature chart showing multiple crossings"
use: '#ivt-chart'
props:
  seed: 17
  noiseAmount: 0.4
  youPoints: [[0, 25], [25, 60], [50, 35], [75, 70], [100, 75]]
  friendPoints: [[0, 75], [25, 40], [50, 65], [75, 45], [100, 25]]
\`\`\`
:::

Or even cross outside our original temperature range:

:::dynamic
\`\`\`yaml
title: "Temperature chart with crossing at extreme position"
use: '#ivt-chart'
props:
  seed: 35
  noiseAmount: 0.3
  youPoints: [[0, 25], [10, 70], [20, 90], [40, 60], [100, 75]]
  friendPoints: [[0, 75], [10, 85], [20, 50], [40, 15], [100, 25]]
\`\`\`
:::

Notice that since we're always on the opposite side of each other at all times, the crossing point indicates a pair antipodal points with the same temperature.

**Case 2B**: Point A's temperature is higher than point B's temperature. We can use the same argument as case 2B to prove that there's a pair of antipodal points with the same temperature.

Across case 1, 2A, and 2B, we can always find a pair of antipodal points that have the same temperature. And that's our solution!

:::note[Intermediate Value Theorem]
This solution relies on the principle that continuous changes must pass through all intermediate values. If you start with A warmer than B and end with B warmer than A, you must pass through a moment where they’re equal.
:::
::::


:::component[ivt-chart]
\`\`\`js
// Simple 1D Perlin noise implementation
class PerlinNoise {
  constructor(seed = 0) {
    this.p = [];
    for (let i = 0; i < 256; i++) {
      this.p[i] = i;
    }

    // Shuffle using seed
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(this.seededRandom(seed + i) * (i + 1));
      [this.p[i], this.p[j]] = [this.p[j], this.p[i]];
    }

    // Duplicate for overflow
    this.p = this.p.concat(this.p);
  }

  seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(t, a, b) {
    return a + t * (b - a);
  }

  grad(hash, x) {
    return (hash & 1) === 0 ? x : -x;
  }

  noise(x) {
    const X = Math.floor(x) & 255;
    x -= Math.floor(x);
    const u = this.fade(x);
    return this.lerp(u, this.grad(this.p[X], x), this.grad(this.p[X + 1], x - 1));
  }
}

function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  // Props with defaults
  // youPoints and friendPoints are arrays of [x, y] where x is 0-100 (%) and y is 0-100 (%)
  // Example: [[0, 25], [30, 15], [50, 50], [70, 85], [100, 75]]
  const seed = props?.seed ?? 42;
  const youPoints = props?.youPoints ?? [[0, 25], [50, 50], [100, 75]];
  const friendPoints = props?.friendPoints ?? [[0, 75], [50, 50], [100, 25]];
  const noiseAmount = props?.noiseAmount ?? 0.15;

  // Convert percentage points to 0-1 scale
  const youCheckpoints = youPoints.map(([x, y]) => ({ x: x / 100, y: y / 100 }));
  const friendCheckpoints = friendPoints.map(([x, y]) => ({ x: x / 100, y: y / 100 }));

  // Canvas dimensions (capped at 600px width)
  const maxWidth = 600;
  const actualWidth = Math.min(width, maxWidth);
  const aspectRatio = 0.5;
  const height = actualWidth * aspectRatio;
  canvas.width = actualWidth;
  canvas.height = height;

  // Layout
  const padding = { top: 55, right: 30, bottom: 50, left: 60 };
  const chartWidth = actualWidth - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Temperature levels for dotted lines (A = low temp line, B = high temp line)
  const tempA = 0.25;
  const tempB = 0.75;

  // Clear canvas
  ctx.clearRect(0, 0, actualWidth, height);

  // Get colors
  const foreground = api.getColor('foreground');
  const muted = api.getColor('muted-foreground');
  const gridColor = api.getColor('border');
  const redPath = api.getColor('error-600');
  const bluePath = api.getColor('navy-600');

  // Helper to convert temperature (0-1) to Y coordinate
  const tempToY = (temp) => {
    return padding.top + chartHeight * (1 - temp);
  };

  // Helper to convert X position (0-1) to canvas X
  const xToCanvas = (x) => {
    return padding.left + chartWidth * x;
  };

  // Draw axes
  ctx.strokeStyle = foreground;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + chartHeight);
  ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
  ctx.stroke();

  // Draw arrowheads
  const arrowSize = 8;
  ctx.fillStyle = foreground;

  // Y-axis arrowhead (pointing up)
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left - arrowSize / 2, padding.top + arrowSize);
  ctx.lineTo(padding.left + arrowSize / 2, padding.top + arrowSize);
  ctx.closePath();
  ctx.fill();

  // X-axis arrowhead (pointing right)
  ctx.beginPath();
  ctx.moveTo(padding.left + chartWidth, padding.top + chartHeight);
  ctx.lineTo(padding.left + chartWidth - arrowSize, padding.top + chartHeight - arrowSize / 2);
  ctx.lineTo(padding.left + chartWidth - arrowSize, padding.top + chartHeight + arrowSize / 2);
  ctx.closePath();
  ctx.fill();

  // Draw dotted horizontal lines for temp A and B
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);

  ctx.beginPath();
  ctx.moveTo(padding.left, tempToY(tempA));
  ctx.lineTo(padding.left + chartWidth, tempToY(tempA));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(padding.left, tempToY(tempB));
  ctx.lineTo(padding.left + chartWidth, tempToY(tempB));
  ctx.stroke();

  ctx.setLineDash([]);

  // Labels for temperature levels
  ctx.fillStyle = muted;
  ctx.font = '14px ' + api.getFont('default');
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  const labelA = 'A';
  const labelB = 'B';

  ctx.fillText(labelA, padding.left - 10, tempToY(tempA));
  ctx.fillText(labelB, padding.left - 10, tempToY(tempB));

  // Axis labels
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = foreground;
  ctx.font = '16px ' + api.getFont('default');
  ctx.fillText('Distance around circle', padding.left + chartWidth / 2, padding.top + chartHeight + 15);

  ctx.save();
  ctx.translate(20, padding.top + chartHeight / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('Temperature', 0, 0);
  ctx.restore();

  // Axis tick labels
  ctx.fillStyle = muted;
  ctx.font = '13px ' + api.getFont('default');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('Start', padding.left + 20, padding.top + chartHeight + 5);
  ctx.fillText('End', padding.left + chartWidth - 20, padding.top + chartHeight + 5);

  // Generate paths using provided checkpoints + seeded noise
  const perlin = new PerlinNoise(seed);
  const perlin2 = new PerlinNoise(seed + 100);
  const numPoints = 200;

  // Cubic Hermite interpolation for smooth curves through checkpoints
  function hermiteInterpolate(p0, p1, p2, p3, t) {
    const t2 = t * t;
    const t3 = t2 * t;

    // Catmull-Rom spline coefficients
    const h1 = 2*t3 - 3*t2 + 1;
    const h2 = -2*t3 + 3*t2;
    const h3 = t3 - 2*t2 + t;
    const h4 = t3 - t2;

    // Tangents (Catmull-Rom style)
    const tension = 0.5;
    const m0 = tension * (p2 - p0);
    const m1 = tension * (p3 - p1);

    return h1*p1 + h2*p2 + h3*m0 + h4*m1;
  }

  // Generate smooth path through given checkpoints with seeded noise
  function generatePathFromCheckpoints(checkpoints, perlinInst, seedOffset) {
    const path = [];

    for (let i = 0; i <= numPoints; i++) {
      const x = i / numPoints;

      // Find which segment we're in
      let segIdx = 0;
      for (let j = 0; j < checkpoints.length - 1; j++) {
        if (x >= checkpoints[j].x && x <= checkpoints[j + 1].x) {
          segIdx = j;
          break;
        }
      }

      // Get 4 points for Hermite interpolation
      const p0 = checkpoints[Math.max(0, segIdx - 1)].y;
      const p1 = checkpoints[segIdx].y;
      const p2 = checkpoints[Math.min(checkpoints.length - 1, segIdx + 1)].y;
      const p3 = checkpoints[Math.min(checkpoints.length - 1, segIdx + 2)].y;

      // Local t within segment
      const segStart = checkpoints[segIdx].x;
      const segEnd = checkpoints[segIdx + 1].x;
      const t = (x - segStart) / (segEnd - segStart);

      // Interpolated base temperature
      let baseTemp = hermiteInterpolate(p0, p1, p2, p3, t);

      // Add noise tapered at endpoints (so start/end are exact)
      const endTaper = Math.pow(4 * x * (1 - x), 0.5);
      const noise = perlinInst.noise(x * 8 + seedOffset) * noiseAmount * endTaper;

      const temp = baseTemp + noise;

      path.push({ x, temp });
    }

    // Force exact endpoints
    path[0].temp = checkpoints[0].y;
    path[numPoints].temp = checkpoints[checkpoints.length - 1].y;

    return path;
  }

  // Generate paths from provided checkpoints
  const youPath = generatePathFromCheckpoints(youCheckpoints, perlin, 0);
  const friendPath = generatePathFromCheckpoints(friendCheckpoints, perlin2, 50);

  // Draw "You" path (red)
  ctx.strokeStyle = redPath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < youPath.length; i++) {
    const point = youPath[i];
    const canvasX = xToCanvas(point.x);
    const canvasY = tempToY(point.temp);
    if (i === 0) {
      ctx.moveTo(canvasX, canvasY);
    } else {
      ctx.lineTo(canvasX, canvasY);
    }
  }
  ctx.stroke();

  // Draw "Friend" path (blue)
  ctx.strokeStyle = bluePath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < friendPath.length; i++) {
    const point = friendPath[i];
    const canvasX = xToCanvas(point.x);
    const canvasY = tempToY(point.temp);
    if (i === 0) {
      ctx.moveTo(canvasX, canvasY);
    } else {
      ctx.lineTo(canvasX, canvasY);
    }
  }
  ctx.stroke();

  // Legend
  const legendX = padding.left + chartWidth - 100;
  const legendY = 15;

  ctx.strokeStyle = redPath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(legendX, legendY);
  ctx.lineTo(legendX + 30, legendY);
  ctx.stroke();

  ctx.fillStyle = foreground;
  ctx.font = '14px ' + api.getFont('default');
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('You', legendX + 35, legendY);

  ctx.strokeStyle = bluePath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(legendX, legendY + 20);
  ctx.lineTo(legendX + 30, legendY + 20);
  ctx.stroke();

  ctx.fillText('Friend', legendX + 35, legendY + 20);
}
\`\`\`

\`\`\`yaml
mode: canvas
title: "Interactive temperature comparison chart"
ariaLabel: "Line chart showing two temperature paths crossing, demonstrating the Intermediate Value Theorem. Red path (You) starts low and ends high. Blue path (Friend) starts high and ends low. The paths cross in the middle."
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#ivt-chart",props:{seed:42,noiseAmount:.2,youPoints:[[0,25],[20,15],[50,50],[80,85],[100,75]],friendPoints:[[0,75],[20,85],[50,50],[80,15],[100,25]]},title:"Temperature chart showing two paths crossing",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/misc/antipodal-temperature.md"},{type:"dynamic",mode:"component",componentId:"#ivt-chart",props:{seed:17,noiseAmount:.4,youPoints:[[0,25],[25,60],[50,35],[75,70],[100,75]],friendPoints:[[0,75],[25,40],[50,65],[75,45],[100,25]]},title:"Temperature chart showing multiple crossings",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/misc/antipodal-temperature.md"},{type:"dynamic",mode:"component",componentId:"#ivt-chart",props:{seed:35,noiseAmount:.3,youPoints:[[0,25],[10,70],[20,90],[40,60],[100,75]],friendPoints:[[0,75],[10,85],[20,50],[40,15],[100,25]]},title:"Temperature chart with crossing at extreme position",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/misc/antipodal-temperature.md"}],inlineComponents:{"ivt-chart":{id:"ivt-chart",code:`// Simple 1D Perlin noise implementation
class PerlinNoise {
  constructor(seed = 0) {
    this.p = [];
    for (let i = 0; i < 256; i++) {
      this.p[i] = i;
    }

    // Shuffle using seed
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(this.seededRandom(seed + i) * (i + 1));
      [this.p[i], this.p[j]] = [this.p[j], this.p[i]];
    }

    // Duplicate for overflow
    this.p = this.p.concat(this.p);
  }

  seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(t, a, b) {
    return a + t * (b - a);
  }

  grad(hash, x) {
    return (hash & 1) === 0 ? x : -x;
  }

  noise(x) {
    const X = Math.floor(x) & 255;
    x -= Math.floor(x);
    const u = this.fade(x);
    return this.lerp(u, this.grad(this.p[X], x), this.grad(this.p[X + 1], x - 1));
  }
}

function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  // Props with defaults
  // youPoints and friendPoints are arrays of [x, y] where x is 0-100 (%) and y is 0-100 (%)
  // Example: [[0, 25], [30, 15], [50, 50], [70, 85], [100, 75]]
  const seed = props?.seed ?? 42;
  const youPoints = props?.youPoints ?? [[0, 25], [50, 50], [100, 75]];
  const friendPoints = props?.friendPoints ?? [[0, 75], [50, 50], [100, 25]];
  const noiseAmount = props?.noiseAmount ?? 0.15;

  // Convert percentage points to 0-1 scale
  const youCheckpoints = youPoints.map(([x, y]) => ({ x: x / 100, y: y / 100 }));
  const friendCheckpoints = friendPoints.map(([x, y]) => ({ x: x / 100, y: y / 100 }));

  // Canvas dimensions (capped at 600px width)
  const maxWidth = 600;
  const actualWidth = Math.min(width, maxWidth);
  const aspectRatio = 0.5;
  const height = actualWidth * aspectRatio;
  canvas.width = actualWidth;
  canvas.height = height;

  // Layout
  const padding = { top: 55, right: 30, bottom: 50, left: 60 };
  const chartWidth = actualWidth - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Temperature levels for dotted lines (A = low temp line, B = high temp line)
  const tempA = 0.25;
  const tempB = 0.75;

  // Clear canvas
  ctx.clearRect(0, 0, actualWidth, height);

  // Get colors
  const foreground = api.getColor('foreground');
  const muted = api.getColor('muted-foreground');
  const gridColor = api.getColor('border');
  const redPath = api.getColor('error-600');
  const bluePath = api.getColor('navy-600');

  // Helper to convert temperature (0-1) to Y coordinate
  const tempToY = (temp) => {
    return padding.top + chartHeight * (1 - temp);
  };

  // Helper to convert X position (0-1) to canvas X
  const xToCanvas = (x) => {
    return padding.left + chartWidth * x;
  };

  // Draw axes
  ctx.strokeStyle = foreground;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + chartHeight);
  ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
  ctx.stroke();

  // Draw arrowheads
  const arrowSize = 8;
  ctx.fillStyle = foreground;

  // Y-axis arrowhead (pointing up)
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left - arrowSize / 2, padding.top + arrowSize);
  ctx.lineTo(padding.left + arrowSize / 2, padding.top + arrowSize);
  ctx.closePath();
  ctx.fill();

  // X-axis arrowhead (pointing right)
  ctx.beginPath();
  ctx.moveTo(padding.left + chartWidth, padding.top + chartHeight);
  ctx.lineTo(padding.left + chartWidth - arrowSize, padding.top + chartHeight - arrowSize / 2);
  ctx.lineTo(padding.left + chartWidth - arrowSize, padding.top + chartHeight + arrowSize / 2);
  ctx.closePath();
  ctx.fill();

  // Draw dotted horizontal lines for temp A and B
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);

  ctx.beginPath();
  ctx.moveTo(padding.left, tempToY(tempA));
  ctx.lineTo(padding.left + chartWidth, tempToY(tempA));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(padding.left, tempToY(tempB));
  ctx.lineTo(padding.left + chartWidth, tempToY(tempB));
  ctx.stroke();

  ctx.setLineDash([]);

  // Labels for temperature levels
  ctx.fillStyle = muted;
  ctx.font = '14px ' + api.getFont('default');
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  const labelA = 'A';
  const labelB = 'B';

  ctx.fillText(labelA, padding.left - 10, tempToY(tempA));
  ctx.fillText(labelB, padding.left - 10, tempToY(tempB));

  // Axis labels
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = foreground;
  ctx.font = '16px ' + api.getFont('default');
  ctx.fillText('Distance around circle', padding.left + chartWidth / 2, padding.top + chartHeight + 15);

  ctx.save();
  ctx.translate(20, padding.top + chartHeight / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('Temperature', 0, 0);
  ctx.restore();

  // Axis tick labels
  ctx.fillStyle = muted;
  ctx.font = '13px ' + api.getFont('default');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('Start', padding.left + 20, padding.top + chartHeight + 5);
  ctx.fillText('End', padding.left + chartWidth - 20, padding.top + chartHeight + 5);

  // Generate paths using provided checkpoints + seeded noise
  const perlin = new PerlinNoise(seed);
  const perlin2 = new PerlinNoise(seed + 100);
  const numPoints = 200;

  // Cubic Hermite interpolation for smooth curves through checkpoints
  function hermiteInterpolate(p0, p1, p2, p3, t) {
    const t2 = t * t;
    const t3 = t2 * t;

    // Catmull-Rom spline coefficients
    const h1 = 2*t3 - 3*t2 + 1;
    const h2 = -2*t3 + 3*t2;
    const h3 = t3 - 2*t2 + t;
    const h4 = t3 - t2;

    // Tangents (Catmull-Rom style)
    const tension = 0.5;
    const m0 = tension * (p2 - p0);
    const m1 = tension * (p3 - p1);

    return h1*p1 + h2*p2 + h3*m0 + h4*m1;
  }

  // Generate smooth path through given checkpoints with seeded noise
  function generatePathFromCheckpoints(checkpoints, perlinInst, seedOffset) {
    const path = [];

    for (let i = 0; i <= numPoints; i++) {
      const x = i / numPoints;

      // Find which segment we're in
      let segIdx = 0;
      for (let j = 0; j < checkpoints.length - 1; j++) {
        if (x >= checkpoints[j].x && x <= checkpoints[j + 1].x) {
          segIdx = j;
          break;
        }
      }

      // Get 4 points for Hermite interpolation
      const p0 = checkpoints[Math.max(0, segIdx - 1)].y;
      const p1 = checkpoints[segIdx].y;
      const p2 = checkpoints[Math.min(checkpoints.length - 1, segIdx + 1)].y;
      const p3 = checkpoints[Math.min(checkpoints.length - 1, segIdx + 2)].y;

      // Local t within segment
      const segStart = checkpoints[segIdx].x;
      const segEnd = checkpoints[segIdx + 1].x;
      const t = (x - segStart) / (segEnd - segStart);

      // Interpolated base temperature
      let baseTemp = hermiteInterpolate(p0, p1, p2, p3, t);

      // Add noise tapered at endpoints (so start/end are exact)
      const endTaper = Math.pow(4 * x * (1 - x), 0.5);
      const noise = perlinInst.noise(x * 8 + seedOffset) * noiseAmount * endTaper;

      const temp = baseTemp + noise;

      path.push({ x, temp });
    }

    // Force exact endpoints
    path[0].temp = checkpoints[0].y;
    path[numPoints].temp = checkpoints[checkpoints.length - 1].y;

    return path;
  }

  // Generate paths from provided checkpoints
  const youPath = generatePathFromCheckpoints(youCheckpoints, perlin, 0);
  const friendPath = generatePathFromCheckpoints(friendCheckpoints, perlin2, 50);

  // Draw "You" path (red)
  ctx.strokeStyle = redPath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < youPath.length; i++) {
    const point = youPath[i];
    const canvasX = xToCanvas(point.x);
    const canvasY = tempToY(point.temp);
    if (i === 0) {
      ctx.moveTo(canvasX, canvasY);
    } else {
      ctx.lineTo(canvasX, canvasY);
    }
  }
  ctx.stroke();

  // Draw "Friend" path (blue)
  ctx.strokeStyle = bluePath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < friendPath.length; i++) {
    const point = friendPath[i];
    const canvasX = xToCanvas(point.x);
    const canvasY = tempToY(point.temp);
    if (i === 0) {
      ctx.moveTo(canvasX, canvasY);
    } else {
      ctx.lineTo(canvasX, canvasY);
    }
  }
  ctx.stroke();

  // Legend
  const legendX = padding.left + chartWidth - 100;
  const legendY = 15;

  ctx.strokeStyle = redPath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(legendX, legendY);
  ctx.lineTo(legendX + 30, legendY);
  ctx.stroke();

  ctx.fillStyle = foreground;
  ctx.font = '14px ' + api.getFont('default');
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('You', legendX + 35, legendY);

  ctx.strokeStyle = bluePath;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(legendX, legendY + 20);
  ctx.lineTo(legendX + 30, legendY + 20);
  ctx.stroke();

  ctx.fillText('Friend', legendX + 35, legendY + 20);
}`,startLine:94}}};export{t as default};
