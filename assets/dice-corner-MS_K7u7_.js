const e={slug:"dice-corner",metadata:{id:"puzzle-39",title:"Dice Corner",questionPreview:`You’re looking through a hole at the corner of a die. Can you identify at least one of the visible faces?
`,difficulty:"easy",concepts:["logic"],tags:["has-solution","starter"],dateCreated:"2026-02-02",lastUpdated:"2026-02-02",credit:`Puzzle found on Wu Riddles.
Question and solution written by Puzzlestone Peak.
`,preview:"You're looking through a hole at the corner of a standard die. The image below shows all you can see through the hole: portions of three faces meeting at the...",websitePreview:"You're looking through a hole at the corner of a standard die. The image below shows all you can see through the hole: portions of three faces meeting at the..."},content:`<p>You're looking through a hole at the corner of a standard die. The image below shows all you can see through the hole: portions of three faces meeting at the corner.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>What number appears on one of these three visible faces? You do not have to identify the exact face it is on.</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">A property about dice</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>On a standard die, opposite faces sum to 7. At any corner, the three visible faces include one from each opposite pair: (1, 6), (2, 5), and (3, 4).</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>6.</strong></p><p>On a standard die, opposite faces sum to 7: the pairs are (1, 6), (2, 5), and (3, 4). At any corner, the three visible faces include exactly one face from each pair.</p><p>The 1 has a single pip in the centre of the face — far from any corner. If the 1 were visible, its corner would show no pips through the hole. But all three corners show a pip.</p><p>Since the (1, 6) pair must contribute one face, and it can't be the 1, the visible face must be the <strong>6</strong>.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
You're looking through a hole at the corner of a standard die. The image below shows all you can see through the hole: portions of three faces meeting at the corner.

:::dynamic
\`\`\`yaml
title: Die corner view
use: '#die-corner-diagram'
\`\`\`
:::

What number appears on one of these three visible faces? You do not have to identify the exact face it is on.

:::hint[A property about dice]
On a standard die, opposite faces sum to 7. At any corner, the three visible faces include one from each opposite pair: (1, 6), (2, 5), and (3, 4).
:::

:::solution
**6.**

On a standard die, opposite faces sum to 7: the pairs are (1, 6), (2, 5), and (3, 4). At any corner, the three visible faces include exactly one face from each pair.

The 1 has a single pip in the centre of the face — far from any corner. If the 1 were visible, its corner would show no pips through the hole. But all three corners show a pip.

Since the (1, 6) pair must contribute one face, and it can't be the 1, the visible face must be the **6**.
:::


:::component[die-corner-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, width: containerWidth } = options;
  const ctx = canvas.getContext('2d');

  // === ADJUSTABLE CONSTANTS ===
  const MAX_SIZE = 280;           // max canvas size in px
  const HOLE_RATIO = 0.40;        // hole radius as fraction of canvas size
  const DIE_RATIO = 0.55;         // die edge length as fraction of canvas size (larger = more clipped)
  const PIP_DISTANCE = 0.45;      // how far pips sit from the corner (0 = at corner, 0.5 = face centre)
  const PIP_SIZE = 0.2;          // pip radius in face-coordinate units (1.0 = full face edge)
  // ============================

  const size = Math.min(containerWidth, MAX_SIZE);
  canvas.width = size;
  canvas.height = size;

  // Die colours from palette
  const dieWhite = api.getColor('white');
  const dieDark = api.getColor('navy-950');

  const cx = size / 2;
  const cy = size / 2;
  const holeRadius = size * HOLE_RATIO;
  const s = size * DIE_RATIO;
  const cos30 = Math.cos(Math.PI / 6);

  // Frame surround (slightly lighter in dark mode for contrast with background)
  ctx.fillStyle = api.theme === 'dark'
    ? api.getColor('navy-950', { lightness: 0.05 })
    : dieDark;
  ctx.fillRect(0, 0, size, size);

  // Clip to circular hole
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, holeRadius, 0, Math.PI * 2);
  ctx.clip();

  // Fill hole with die white
  ctx.fillStyle = dieWhite;
  ctx.fillRect(0, 0, size, size);

  // Isometric die corner vertices (larger than hole so faces extend beyond)
  const V = { x: cx, y: cy };
  const A = { x: cx, y: cy - s };
  const D = { x: cx - s * cos30, y: cy - s * 0.5 };
  const E = { x: cx + s * cos30, y: cy - s * 0.5 };
  const B = { x: cx - s * cos30, y: cy + s * 0.5 };
  const C = { x: cx + s * cos30, y: cy + s * 0.5 };
  const F = { x: cx, y: cy + s };

  // Face shading — progressively darker via lightness adjustments
  const topFace = api.getColor('white', { lightness: -0.03 });
  const leftFace = api.getColor('white', { lightness: -0.10 });
  const rightFace = api.getColor('white', { lightness: -0.18 });

  const drawFace = (pts, color) => {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  // Three faces: top, left, right
  drawFace([D, A, E, V], topFace);
  drawFace([D, V, F, B], leftFace);
  drawFace([V, E, C, F], rightFace);

  // Draw pips using face-coordinate transforms
  // Each pip is a circle in face-space that becomes a perspective-correct ellipse
  const setFaceTransform = (p0, p1, p3) => {
    ctx.setTransform(
      p1.x - p0.x, p1.y - p0.y,
      p3.x - p0.x, p3.y - p0.y,
      p0.x, p0.y
    );
  };

  const pipR = PIP_SIZE;

  const near = PIP_DISTANCE;        // shorthand: near the corner
  const far = 1 - PIP_DISTANCE;     // shorthand: far from the corner

  // Top face (p0=D, u-axis=A, v-axis=V): V is at (0,1), pip near corner
  ctx.save();
  setFaceTransform(D, A, V);
  ctx.fillStyle = dieDark;
  ctx.beginPath();
  ctx.arc(near, far, pipR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Left face (p0=D, u-axis=V, v-axis=B): V is at (1,0), pip near corner
  ctx.save();
  setFaceTransform(D, V, B);
  ctx.fillStyle = dieDark;
  ctx.beginPath();
  ctx.arc(far, near, pipR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Right face (p0=V, u-axis=E, v-axis=F): V is at (0,0), pip near corner
  ctx.save();
  setFaceTransform(V, E, F);
  ctx.fillStyle = dieDark;
  ctx.beginPath();
  ctx.arc(near, near, pipR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Draw edges (reset transform first)
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.strokeStyle = dieDark;
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Outer hexagon
  ctx.beginPath();
  ctx.moveTo(D.x, D.y);
  ctx.lineTo(A.x, A.y);
  ctx.lineTo(E.x, E.y);
  ctx.lineTo(C.x, C.y);
  ctx.lineTo(F.x, F.y);
  ctx.lineTo(B.x, B.y);
  ctx.closePath();
  ctx.stroke();

  // Inner edges from vertex V
  ctx.beginPath();
  ctx.moveTo(V.x, V.y); ctx.lineTo(D.x, D.y);
  ctx.moveTo(V.x, V.y); ctx.lineTo(E.x, E.y);
  ctx.moveTo(V.x, V.y); ctx.lineTo(F.x, F.y);
  ctx.stroke();

  ctx.restore();
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#die-corner-diagram",title:"Die corner view",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/logic/dice-corner.md"}],inlineComponents:{"die-corner-diagram":{id:"die-corner-diagram",code:`function draw(options) {
  const { canvas, api, width: containerWidth } = options;
  const ctx = canvas.getContext('2d');

  // === ADJUSTABLE CONSTANTS ===
  const MAX_SIZE = 280;           // max canvas size in px
  const HOLE_RATIO = 0.40;        // hole radius as fraction of canvas size
  const DIE_RATIO = 0.55;         // die edge length as fraction of canvas size (larger = more clipped)
  const PIP_DISTANCE = 0.45;      // how far pips sit from the corner (0 = at corner, 0.5 = face centre)
  const PIP_SIZE = 0.2;          // pip radius in face-coordinate units (1.0 = full face edge)
  // ============================

  const size = Math.min(containerWidth, MAX_SIZE);
  canvas.width = size;
  canvas.height = size;

  // Die colours from palette
  const dieWhite = api.getColor('white');
  const dieDark = api.getColor('navy-950');

  const cx = size / 2;
  const cy = size / 2;
  const holeRadius = size * HOLE_RATIO;
  const s = size * DIE_RATIO;
  const cos30 = Math.cos(Math.PI / 6);

  // Frame surround (slightly lighter in dark mode for contrast with background)
  ctx.fillStyle = api.theme === 'dark'
    ? api.getColor('navy-950', { lightness: 0.05 })
    : dieDark;
  ctx.fillRect(0, 0, size, size);

  // Clip to circular hole
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, holeRadius, 0, Math.PI * 2);
  ctx.clip();

  // Fill hole with die white
  ctx.fillStyle = dieWhite;
  ctx.fillRect(0, 0, size, size);

  // Isometric die corner vertices (larger than hole so faces extend beyond)
  const V = { x: cx, y: cy };
  const A = { x: cx, y: cy - s };
  const D = { x: cx - s * cos30, y: cy - s * 0.5 };
  const E = { x: cx + s * cos30, y: cy - s * 0.5 };
  const B = { x: cx - s * cos30, y: cy + s * 0.5 };
  const C = { x: cx + s * cos30, y: cy + s * 0.5 };
  const F = { x: cx, y: cy + s };

  // Face shading — progressively darker via lightness adjustments
  const topFace = api.getColor('white', { lightness: -0.03 });
  const leftFace = api.getColor('white', { lightness: -0.10 });
  const rightFace = api.getColor('white', { lightness: -0.18 });

  const drawFace = (pts, color) => {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  // Three faces: top, left, right
  drawFace([D, A, E, V], topFace);
  drawFace([D, V, F, B], leftFace);
  drawFace([V, E, C, F], rightFace);

  // Draw pips using face-coordinate transforms
  // Each pip is a circle in face-space that becomes a perspective-correct ellipse
  const setFaceTransform = (p0, p1, p3) => {
    ctx.setTransform(
      p1.x - p0.x, p1.y - p0.y,
      p3.x - p0.x, p3.y - p0.y,
      p0.x, p0.y
    );
  };

  const pipR = PIP_SIZE;

  const near = PIP_DISTANCE;        // shorthand: near the corner
  const far = 1 - PIP_DISTANCE;     // shorthand: far from the corner

  // Top face (p0=D, u-axis=A, v-axis=V): V is at (0,1), pip near corner
  ctx.save();
  setFaceTransform(D, A, V);
  ctx.fillStyle = dieDark;
  ctx.beginPath();
  ctx.arc(near, far, pipR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Left face (p0=D, u-axis=V, v-axis=B): V is at (1,0), pip near corner
  ctx.save();
  setFaceTransform(D, V, B);
  ctx.fillStyle = dieDark;
  ctx.beginPath();
  ctx.arc(far, near, pipR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Right face (p0=V, u-axis=E, v-axis=F): V is at (0,0), pip near corner
  ctx.save();
  setFaceTransform(V, E, F);
  ctx.fillStyle = dieDark;
  ctx.beginPath();
  ctx.arc(near, near, pipR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Draw edges (reset transform first)
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.strokeStyle = dieDark;
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Outer hexagon
  ctx.beginPath();
  ctx.moveTo(D.x, D.y);
  ctx.lineTo(A.x, A.y);
  ctx.lineTo(E.x, E.y);
  ctx.lineTo(C.x, C.y);
  ctx.lineTo(F.x, F.y);
  ctx.lineTo(B.x, B.y);
  ctx.closePath();
  ctx.stroke();

  // Inner edges from vertex V
  ctx.beginPath();
  ctx.moveTo(V.x, V.y); ctx.lineTo(D.x, D.y);
  ctx.moveTo(V.x, V.y); ctx.lineTo(E.x, E.y);
  ctx.moveTo(V.x, V.y); ctx.lineTo(F.x, F.y);
  ctx.stroke();

  ctx.restore();
}`,startLine:44}}};export{e as default};
