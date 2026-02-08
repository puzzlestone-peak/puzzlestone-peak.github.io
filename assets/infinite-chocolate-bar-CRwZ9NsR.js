const n={slug:"infinite-chocolate-bar",metadata:{id:"puzzle-72",title:"The Infinite Chocolate Bar",difficulty:{concepts:"easy",reasoning:"easy"},dateCreated:"2026-02-06",lastUpdated:"2026-02-06",previousPuzzle:"vanishing-square",concepts:["geometry"],tags:["has-solution"],credit:`Classic puzzle. Question and solution written by Puzzlestone Peak.
`,preview:"A chocolate bar is cut into five pieces: a small square, a rectangle, two diagonal slope pieces, and a large base piece. We rearrange the pieces, reforming the...",websitePreview:"A chocolate bar is cut into five pieces: a small square, a rectangle, two diagonal slope pieces, and a large base piece. We rearrange the pieces, reforming the..."},content:`<p>A chocolate bar is cut into five pieces: a small square, a rectangle, two diagonal slope pieces, and a large base piece. We rearrange the pieces, reforming the original chocolate bar with an addition square piece. Can you explain what’s really happening here?</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can step through the animation below. See if you can spot the trick!</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: What the animation cleverly hides is a subtle increase in the height of both slanted pieces.</p><p>The trick lies in the gradual expansion of the diagonal pieces during the rearrangement:</p><ul>
<li><strong>Narrow slope piece</strong>: Originally 2.3 units tall at its left edge, it quietly expands to 2.5 units during the animation</li>
<li><strong>Wide slope piece</strong>: Originally 2.5 units tall at its left edge, it quietly expands to 2.7 units during the animation</li>
</ul><p>Each of these two slanted pieces increases by exactly 0.2 units in height. Since the chocolate bar is 5 units wide, this expansion accounts for precisely 0.2 × 5 = 1 square unit—the exact area of the “vanished” square.</p><p>Watch the animation below without the trick—the pieces maintain their original dimensions, and a grid overlay reveals what’s really happening:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>You can see that without the subtle expansion, the chocolate bar ends up with an actual gap where the removed square used to be.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
A chocolate bar is cut into five pieces: a small square, a rectangle, two diagonal slope pieces, and a large base piece. We rearrange the pieces, reforming the original chocolate bar with an addition square piece. Can you explain what’s really happening here?

:::dynamic
\`\`\`yaml
title: "Chocolate bar puzzle—where does the square go?"
use: '#diagram'
props:
  mode: question
\`\`\`
:::

::::hint
You can step through the animation below. See if you can spot the trick!

:::dynamic
\`\`\`yaml
title: "Step through the animation"
use: '#diagram'
props:
  mode: hint
\`\`\`
:::
::::

::::solution
**Answer**: What the animation cleverly hides is a subtle increase in the height of both slanted pieces.

The trick lies in the gradual expansion of the diagonal pieces during the rearrangement:

- **Narrow slope piece**: Originally 2.3 units tall at its left edge, it quietly expands to 2.5 units during the animation
- **Wide slope piece**: Originally 2.5 units tall at its left edge, it quietly expands to 2.7 units during the animation

Each of these two slanted pieces increases by exactly 0.2 units in height. Since the chocolate bar is 5 units wide, this expansion accounts for precisely 0.2 × 5 = 1 square unit—the exact area of the “vanished” square.

Watch the animation below without the trick—the pieces maintain their original dimensions, and a grid overlay reveals what’s really happening:

:::dynamic
\`\`\`yaml
title: "Animation without the trick (with grid overlay)"
use: '#diagram'
props:
  mode: solution
\`\`\`
:::

You can see that without the subtle expansion, the chocolate bar ends up with an actual gap where the removed square used to be.
::::

:::component[diagram]

\`\`\`yaml
mode: dom
title: "Chocolate bar diagram"
\`\`\`

\`\`\`js
// Chocolate rectangle aspect ratio (width/height)
const CHOCOLATE_ASPECT_RATIO = 3 / 4;

// Grid dimensions for the chocolate bar
const GRID_COLS = 5;
const GRID_ROWS = 5;

// Diagram grid dimensions (from Step 3)
const DIAGRAM_GRID_WIDTH = 8;
const DIAGRAM_GRID_HEIGHT = 8;

// Offset to position pieces in the diagram (from Step 3: OFFSETS: X=3, Y=3)
const OFFSET_X = 3;
const OFFSET_Y = 3;

// Animation duration in seconds
const ANIMATION_DURATION = 5;

// Piece definitions (coordinates in grid units)
const PIECES = {
  square: [[0, 0], [1, 0], [1, 1], [0, 1]],
  rectangle: [[0, 0], [2, 0], [2, 1], [0, 1]],
  narrowSlope: [[0, 0], [2, 0], [2, 1.5], [0, 2.3]],
  wideSlope: [[0, 0], [3, 0], [3, 1.3], [0, 2.5]],
  base: [[0, 2.5], [5, 0.5], [5, 4], [0, 4]]
};

// "Tricked" piece shapes (subtly expanded during the illusion)
const PIECES_TRICKED = {
  narrowSlope: [[0, 0], [2, 0], [2, 1.7], [0, 2.5]],
  wideSlope: [[0, 0], [3, 0], [3, 1.5], [0, 2.7]]
};

// Animation keyframes: [time in seconds, { piece: [x, y], ... }]
// Positions are relative to top-left of piece, before adding OFFSET
const KEYFRAMES = [
  [0, {
    square: [0, 0],
    rectangle: [1, 0],
    narrowSlope: [3, 0],
    wideSlope: [0, 1],
    base: [0, 1]
  }],
  [1, {
    square: [-2, -1.5],
    rectangle: [-3, 0],
    narrowSlope: [3, -3],
    wideSlope: [0, 0.8],
    base: [0, 1]
  }],
  [2, {
    square: [-2, -1.5],
    rectangle: [-3, 0],
    narrowSlope: [0, -3],
    wideSlope: [2, 0],
    base: [0, 1]
  }],
  [3, {
    square: [-2, -1.5],
    rectangle: [-3, 0],
    narrowSlope: [0, 1],
    wideSlope: [2, 0],
    base: [0, 1]
  }],
  [4, {
    square: [-2, -1.5],
    rectangle: [0, 0],
    narrowSlope: [0, 1],
    wideSlope: [2, 0],
    base: [0, 1]
  }],
  [5, {
    square: [-4.01, -1.5],
    rectangle: [0, 0],
    narrowSlope: [0, 1],
    wideSlope: [2, 0],
    base: [0, 1]
  }]
];

function mount(options) {
  const { root, api, props } = options;

  try {
    const mode = props.mode;

    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';
    root.appendChild(canvas);

    // Animation state
    let animationId = null;
    let startTime = null;
    let isPaused = false;
    let currentTime = 0;
    let lastTimestamp = null;

    // Determine if we should use trick based on mode
    const useTrick = mode !== 'solution';

    const draw = (time) => {
      drawAnimatedPieces(canvas, api, time, useTrick, mode === 'solution');
    };

    // Create controls for hint and solution modes
    if (mode === 'hint' || mode === 'solution') {
      const controlsContainer = document.createElement('div');
      controlsContainer.className = api.css('flex items-center justify-center gap-2 mt-4');

      // Back button
      const backBtn = api.ui.button({
        label: '← Back',
        variant: 'outlined',
        size: 'sm',
        onClick: () => {
          currentTime = currentTime - 0.2;
          if (currentTime < 0) currentTime += ANIMATION_DURATION;
          draw(currentTime);
        }
      });
      backBtn.style.width = '100px';

      // Pause/Play button
      const playPauseBtn = api.ui.button({
        label: isPaused ? '▶ Play' : '⏸ Pause',
        variant: 'contained',
        size: 'sm',
        onClick: () => {
          isPaused = !isPaused;
          playPauseBtn.textContent = isPaused ? '▶ Play' : '⏸ Pause';
        }
      });
      playPauseBtn.style.width = '100px';

      // Forward button
      const forwardBtn = api.ui.button({
        label: 'Forward →',
        variant: 'outlined',
        size: 'sm',
        onClick: () => {
          currentTime = (currentTime + 0.2) % ANIMATION_DURATION;
          draw(currentTime);
        }
      });
      forwardBtn.style.width = '100px';

      controlsContainer.appendChild(backBtn);
      controlsContainer.appendChild(playPauseBtn);
      controlsContainer.appendChild(forwardBtn);

      root.appendChild(controlsContainer);
    }

    // Animation loop for all modes
    const animate = (timestamp) => {
      if (isPaused) {
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      currentTime += deltaTime;

      // Loop animation for question mode, or if controls are present
      if (mode === 'question' || mode === 'hint' || mode === 'solution') {
        currentTime = currentTime % ANIMATION_DURATION;
      }

      draw(currentTime);

      animationId = requestAnimationFrame(animate);
    };

    // Initial draw
    draw(currentTime);

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Redraw on theme change
    api.onThemeChange(() => {
      draw(currentTime);
    });

    // Handle resize
    api.onResize(() => {
      draw(currentTime);
    });

  } catch (error) {
    console.error('[Chocolate Bar Error]', error);
    root.textContent = 'An error occurred rendering the chocolate bar. Check the console.';
  }
}

// Interpolate between two values
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Get interpolated positions for a given time
function getPositionsAtTime(time, useTrick = true) {
  // Find surrounding keyframes
  let prevFrame = KEYFRAMES[0];
  let nextFrame = KEYFRAMES[KEYFRAMES.length - 1];

  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    if (time >= KEYFRAMES[i][0] && time <= KEYFRAMES[i + 1][0]) {
      prevFrame = KEYFRAMES[i];
      nextFrame = KEYFRAMES[i + 1];
      break;
    }
  }

  const [prevTime, prevPositions] = prevFrame;
  const [nextTime, nextPositions] = nextFrame;

  // Calculate interpolation factor
  const duration = nextTime - prevTime;
  const t = duration > 0 ? (time - prevTime) / duration : 0;

  // Interpolate each piece position
  const positions = {};
  for (const piece of Object.keys(prevPositions)) {
    positions[piece] = [
      lerp(prevPositions[piece][0], nextPositions[piece][0], t),
      lerp(prevPositions[piece][1], nextPositions[piece][1], t)
    ];
  }

  // Determine which piece shapes to use
  // Wide slope morphs between seconds 1-2 (at keyframe 2)
  // Narrow slope morphs between seconds 2-3 (at keyframe 3)
  let pieces = { ...PIECES };
  if (useTrick) {
    // Wide slope: morph between 1-2 seconds
    if (time >= 1 && time <= 2) {
      const morphT = time - 1;
      pieces.wideSlope = interpolatePiece(PIECES.wideSlope, PIECES_TRICKED.wideSlope, morphT);
    } else if (time > 2) {
      pieces.wideSlope = PIECES_TRICKED.wideSlope;
    }

    // Narrow slope: morph between 2-3 seconds
    if (time >= 2 && time <= 3) {
      const morphT = time - 2;
      pieces.narrowSlope = interpolatePiece(PIECES.narrowSlope, PIECES_TRICKED.narrowSlope, morphT);
    } else if (time > 3) {
      pieces.narrowSlope = PIECES_TRICKED.narrowSlope;
    }
  }

  return { positions, pieces };
}

// Interpolate piece shape coordinates
function interpolatePiece(pieceA, pieceB, t) {
  return pieceA.map((pointA, i) => {
    const pointB = pieceB[i];
    return [lerp(pointA[0], pointB[0], t), lerp(pointA[1], pointB[1], t)];
  });
}

// Determine which pieces to skip and what solid mask to use for gap prevention
function getGapPreventionConfig(time, useTrick) {
  // Check for exact 0 second frame (stationary start)
  if (time === 0) {
    return {
      skipPieces: ['square', 'rectangle', 'narrowSlope', 'wideSlope', 'base'],
      solidMask: [[0, 0], [5, 0], [5, 4], [0, 4]]
    };
  }

  if (useTrick) {
    // CONCEALING THE TRICK optimizations
    if (time >= 2 && time < 3) {
      // 2 to 3 second frames: pieces are settling into new positions
      return {
        skipPieces: ['base', 'wideSlope'],
        solidMask: [[2, 0], [5, 0], [5, 5], [0, 5], [0, 3.5], [2, 2.7]]
      };
    }
    if (time >= 3 && time < 4) {
      // 3 to 4 second frames: narrow slope has settled
      return {
        skipPieces: ['base', 'wideSlope', 'narrowSlope'],
        solidMask: [[2, 0], [5, 0], [5, 5], [0, 5], [0, 1], [2, 1]]
      };
    }
    if (time >= 4 && time <= 5) {
      // 4 to 5 second frames: all pieces in final position
      return {
        skipPieces: ['rectangle', 'narrowSlope', 'wideSlope', 'base'],
        solidMask: [[0, 0], [5, 0], [5, 5], [0, 5]]
      };
    }
  } else {
    // NOT CONCEALING THE TRICK optimizations
    if (time >= 3 && time < 4) {
      // 3 to 4 second frames: slopes have settled but with true shapes
      return {
        skipPieces: ['wideSlope', 'narrowSlope'],
        solidMask: [[2, 0], [5, 0], [5, 1.3], [0, 3.3], [0, 1], [2, 1]]
      };
    }
    if (time >= 4 && time <= 5) {
      // 4 to 5 second frames: rectangle has returned
      return {
        skipPieces: ['rectangle', 'narrowSlope', 'wideSlope'],
        solidMask: [[0, 0], [5, 0], [5, 1.3], [0, 3.3]]
      };
    }
  }

  // No gap prevention needed
  return null;
}

// Draw the animated pieces
function drawAnimatedPieces(canvas, api, time, useTrick = true, showGrid = false) {
  if (api.size.width === 0) {
    return;
  }

  const ctx = canvas.getContext('2d');

  // Calculate dimensions
  const maxWidth = Math.min(api.size.width, 300);
  if (maxWidth <= 0) return;

  const rectWidth = maxWidth / DIAGRAM_GRID_WIDTH;
  const rectHeight = rectWidth / CHOCOLATE_ASPECT_RATIO;

  const canvasWidth = rectWidth * DIAGRAM_GRID_WIDTH;
  const canvasHeight = rectHeight * DIAGRAM_GRID_HEIGHT;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Clear canvas
  ctx.fillStyle = api.getColor('background');
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Get theme-aware chocolate colors
  const isDark = api.theme === 'dark';
  const baseColor = isDark ? api.getColor('#a16944') : api.getColor('#622c06');
  const lightColor = isDark ? api.getColor('#c4916b') : api.getColor('#7b3f10');
  const darkColor = isDark ? api.getColor('#6d3e1a') : api.getColor('#3b1d07');

  const borderWidth = rectWidth * (10 / 80);

  // Create the chocolate bar source canvas
  const chocolateCanvas = createChocolateBarCanvas(rectWidth, rectHeight, borderWidth, baseColor, lightColor, darkColor);

  // Get interpolated positions and piece shapes
  const { positions, pieces } = getPositionsAtTime(time, useTrick);

  // Check for gap prevention optimization
  const gapConfig = getGapPreventionConfig(time, useTrick);

  // Draw pieces in order (base first, then others on top)
  const drawOrder = ['base', 'wideSlope', 'narrowSlope', 'rectangle', 'square'];

  // If we have gap prevention, draw solid mask first, then remaining pieces
  if (gapConfig) {
    // Draw the solid chocolate bar with clipping mask at the standard position
    const solidDestX = OFFSET_X * rectWidth;
    const solidDestY = OFFSET_Y * rectHeight;
    drawPieceWithMask(ctx, chocolateCanvas, gapConfig.solidMask, rectWidth, rectHeight, solidDestX, solidDestY);

    // Draw only the pieces that are NOT skipped
    for (const pieceName of drawOrder) {
      if (gapConfig.skipPieces.includes(pieceName)) continue;
      const pos = positions[pieceName];
      const piece = pieces[pieceName];
      const destX = (pos[0] + OFFSET_X) * rectWidth;
      const destY = (pos[1] + OFFSET_Y) * rectHeight;
      drawPiece(ctx, chocolateCanvas, piece, rectWidth, rectHeight, destX, destY);
    }
  } else {
    // Normal rendering: draw all pieces
    for (const pieceName of drawOrder) {
      const pos = positions[pieceName];
      const piece = pieces[pieceName];
      const destX = (pos[0] + OFFSET_X) * rectWidth;
      const destY = (pos[1] + OFFSET_Y) * rectHeight;
      drawPiece(ctx, chocolateCanvas, piece, rectWidth, rectHeight, destX, destY);
    }
  }

  // Draw grid overlay for solution mode
  if (showGrid) {
    drawGrid(ctx, rectWidth, rectHeight, api);
  }
}

// Draw grid overlay (for solution mode)
function drawGrid(ctx, rectWidth, rectHeight, api) {
  ctx.save();

  // Get a subtle grid color that contrasts with background
  const gridColor = api.getColor('border', { alpha: -0.3 });

  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;

  // Draw vertical lines (5 columns + 1 for right edge = 6 lines)
  for (let col = 0; col <= GRID_COLS; col++) {
    const x = (col + OFFSET_X) * rectWidth;
    const yStart = OFFSET_Y * rectHeight;
    const yEnd = (OFFSET_Y + GRID_ROWS) * rectHeight;
    ctx.beginPath();
    ctx.moveTo(x, yStart);
    ctx.lineTo(x, yEnd);
    ctx.stroke();
  }

  // Draw horizontal lines (4 rows + 1 for bottom edge = 5 lines)
  for (let row = 0; row <= GRID_ROWS; row++) {
    const y = (row + OFFSET_Y) * rectHeight;
    const xStart = OFFSET_X * rectWidth;
    const xEnd = (OFFSET_X + GRID_COLS) * rectWidth;
    ctx.beginPath();
    ctx.moveTo(xStart, y);
    ctx.lineTo(xEnd, y);
    ctx.stroke();
  }

  ctx.restore();
}

// Create an offscreen canvas with the full chocolate bar
function createChocolateBarCanvas(rectWidth, rectHeight, borderWidth, baseColor, lightColor, darkColor) {
  const offscreen = document.createElement('canvas');
  offscreen.width = rectWidth * GRID_COLS;
  offscreen.height = rectHeight * GRID_ROWS;
  const ctx = offscreen.getContext('2d');

  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      const x = col * rectWidth;
      const y = row * rectHeight;
      drawChocolateSquare(ctx, x, y, rectWidth, rectHeight, borderWidth, baseColor, lightColor, darkColor);
    }
  }

  return offscreen;
}

// Draw a piece by clipping from the chocolate bar canvas
function drawPiece(ctx, chocolateCanvas, piece, rectWidth, rectHeight, destX, destY) {
  ctx.save();

  // Create clipping path from piece coordinates
  ctx.beginPath();
  piece.forEach((point, i) => {
    const px = destX + point[0] * rectWidth;
    const py = destY + point[1] * rectHeight;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  });
  ctx.closePath();
  ctx.clip();

  // Draw the chocolate bar canvas at the destination
  ctx.drawImage(chocolateCanvas, destX, destY);

  ctx.restore();
}

// Draw the chocolate bar with a custom clipping mask (for gap prevention)
// The mask coordinates are in grid units, relative to the chocolate bar origin
function drawPieceWithMask(ctx, chocolateCanvas, mask, rectWidth, rectHeight, destX, destY) {
  ctx.save();

  // Create clipping path from mask coordinates
  ctx.beginPath();
  mask.forEach((point, i) => {
    const px = destX + point[0] * rectWidth;
    const py = destY + point[1] * rectHeight;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  });
  ctx.closePath();
  ctx.clip();

  // Draw the chocolate bar canvas at the destination
  ctx.drawImage(chocolateCanvas, destX, destY);

  ctx.restore();
}

function drawChocolateSquare(ctx, x, y, w, h, bw, baseColor, lightColor, darkColor) {
  // Draw base chocolate fill
  ctx.fillStyle = baseColor;
  ctx.fillRect(x, y, w, h);

  // Draw top border as trapezoid (light)
  ctx.fillStyle = lightColor;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w - bw, y + bw);
  ctx.lineTo(x + bw, y + bw);
  ctx.closePath();
  ctx.fill();

  // Draw left border as trapezoid (light)
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + bw, y + bw);
  ctx.lineTo(x + bw, y + h - bw);
  ctx.lineTo(x, y + h);
  ctx.closePath();
  ctx.fill();

  // Draw bottom border as trapezoid (dark)
  ctx.fillStyle = darkColor;
  ctx.beginPath();
  ctx.moveTo(x, y + h);
  ctx.lineTo(x + bw, y + h - bw);
  ctx.lineTo(x + w - bw, y + h - bw);
  ctx.lineTo(x + w, y + h);
  ctx.closePath();
  ctx.fill();

  // Draw right border as trapezoid (dark)
  ctx.beginPath();
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w - bw, y + h - bw);
  ctx.lineTo(x + w - bw, y + bw);
  ctx.closePath();
  ctx.fill();
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#diagram",props:{mode:"question"},title:"Chocolate bar puzzle—where does the square go?",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/infinite-chocolate-bar.md"},{type:"dynamic",mode:"component",componentId:"#diagram",props:{mode:"hint"},title:"Step through the animation",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/infinite-chocolate-bar.md"},{type:"dynamic",mode:"component",componentId:"#diagram",props:{mode:"solution"},title:"Animation without the trick (with grid overlay)",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/infinite-chocolate-bar.md"}],inlineComponents:{diagram:{id:"diagram",code:`// Chocolate rectangle aspect ratio (width/height)
const CHOCOLATE_ASPECT_RATIO = 3 / 4;

// Grid dimensions for the chocolate bar
const GRID_COLS = 5;
const GRID_ROWS = 5;

// Diagram grid dimensions (from Step 3)
const DIAGRAM_GRID_WIDTH = 8;
const DIAGRAM_GRID_HEIGHT = 8;

// Offset to position pieces in the diagram (from Step 3: OFFSETS: X=3, Y=3)
const OFFSET_X = 3;
const OFFSET_Y = 3;

// Animation duration in seconds
const ANIMATION_DURATION = 5;

// Piece definitions (coordinates in grid units)
const PIECES = {
  square: [[0, 0], [1, 0], [1, 1], [0, 1]],
  rectangle: [[0, 0], [2, 0], [2, 1], [0, 1]],
  narrowSlope: [[0, 0], [2, 0], [2, 1.5], [0, 2.3]],
  wideSlope: [[0, 0], [3, 0], [3, 1.3], [0, 2.5]],
  base: [[0, 2.5], [5, 0.5], [5, 4], [0, 4]]
};

// "Tricked" piece shapes (subtly expanded during the illusion)
const PIECES_TRICKED = {
  narrowSlope: [[0, 0], [2, 0], [2, 1.7], [0, 2.5]],
  wideSlope: [[0, 0], [3, 0], [3, 1.5], [0, 2.7]]
};

// Animation keyframes: [time in seconds, { piece: [x, y], ... }]
// Positions are relative to top-left of piece, before adding OFFSET
const KEYFRAMES = [
  [0, {
    square: [0, 0],
    rectangle: [1, 0],
    narrowSlope: [3, 0],
    wideSlope: [0, 1],
    base: [0, 1]
  }],
  [1, {
    square: [-2, -1.5],
    rectangle: [-3, 0],
    narrowSlope: [3, -3],
    wideSlope: [0, 0.8],
    base: [0, 1]
  }],
  [2, {
    square: [-2, -1.5],
    rectangle: [-3, 0],
    narrowSlope: [0, -3],
    wideSlope: [2, 0],
    base: [0, 1]
  }],
  [3, {
    square: [-2, -1.5],
    rectangle: [-3, 0],
    narrowSlope: [0, 1],
    wideSlope: [2, 0],
    base: [0, 1]
  }],
  [4, {
    square: [-2, -1.5],
    rectangle: [0, 0],
    narrowSlope: [0, 1],
    wideSlope: [2, 0],
    base: [0, 1]
  }],
  [5, {
    square: [-4.01, -1.5],
    rectangle: [0, 0],
    narrowSlope: [0, 1],
    wideSlope: [2, 0],
    base: [0, 1]
  }]
];

function mount(options) {
  const { root, api, props } = options;

  try {
    const mode = props.mode;

    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';
    root.appendChild(canvas);

    // Animation state
    let animationId = null;
    let startTime = null;
    let isPaused = false;
    let currentTime = 0;
    let lastTimestamp = null;

    // Determine if we should use trick based on mode
    const useTrick = mode !== 'solution';

    const draw = (time) => {
      drawAnimatedPieces(canvas, api, time, useTrick, mode === 'solution');
    };

    // Create controls for hint and solution modes
    if (mode === 'hint' || mode === 'solution') {
      const controlsContainer = document.createElement('div');
      controlsContainer.className = api.css('flex items-center justify-center gap-2 mt-4');

      // Back button
      const backBtn = api.ui.button({
        label: '← Back',
        variant: 'outlined',
        size: 'sm',
        onClick: () => {
          currentTime = currentTime - 0.2;
          if (currentTime < 0) currentTime += ANIMATION_DURATION;
          draw(currentTime);
        }
      });
      backBtn.style.width = '100px';

      // Pause/Play button
      const playPauseBtn = api.ui.button({
        label: isPaused ? '▶ Play' : '⏸ Pause',
        variant: 'contained',
        size: 'sm',
        onClick: () => {
          isPaused = !isPaused;
          playPauseBtn.textContent = isPaused ? '▶ Play' : '⏸ Pause';
        }
      });
      playPauseBtn.style.width = '100px';

      // Forward button
      const forwardBtn = api.ui.button({
        label: 'Forward →',
        variant: 'outlined',
        size: 'sm',
        onClick: () => {
          currentTime = (currentTime + 0.2) % ANIMATION_DURATION;
          draw(currentTime);
        }
      });
      forwardBtn.style.width = '100px';

      controlsContainer.appendChild(backBtn);
      controlsContainer.appendChild(playPauseBtn);
      controlsContainer.appendChild(forwardBtn);

      root.appendChild(controlsContainer);
    }

    // Animation loop for all modes
    const animate = (timestamp) => {
      if (isPaused) {
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      currentTime += deltaTime;

      // Loop animation for question mode, or if controls are present
      if (mode === 'question' || mode === 'hint' || mode === 'solution') {
        currentTime = currentTime % ANIMATION_DURATION;
      }

      draw(currentTime);

      animationId = requestAnimationFrame(animate);
    };

    // Initial draw
    draw(currentTime);

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Redraw on theme change
    api.onThemeChange(() => {
      draw(currentTime);
    });

    // Handle resize
    api.onResize(() => {
      draw(currentTime);
    });

  } catch (error) {
    console.error('[Chocolate Bar Error]', error);
    root.textContent = 'An error occurred rendering the chocolate bar. Check the console.';
  }
}

// Interpolate between two values
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Get interpolated positions for a given time
function getPositionsAtTime(time, useTrick = true) {
  // Find surrounding keyframes
  let prevFrame = KEYFRAMES[0];
  let nextFrame = KEYFRAMES[KEYFRAMES.length - 1];

  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    if (time >= KEYFRAMES[i][0] && time <= KEYFRAMES[i + 1][0]) {
      prevFrame = KEYFRAMES[i];
      nextFrame = KEYFRAMES[i + 1];
      break;
    }
  }

  const [prevTime, prevPositions] = prevFrame;
  const [nextTime, nextPositions] = nextFrame;

  // Calculate interpolation factor
  const duration = nextTime - prevTime;
  const t = duration > 0 ? (time - prevTime) / duration : 0;

  // Interpolate each piece position
  const positions = {};
  for (const piece of Object.keys(prevPositions)) {
    positions[piece] = [
      lerp(prevPositions[piece][0], nextPositions[piece][0], t),
      lerp(prevPositions[piece][1], nextPositions[piece][1], t)
    ];
  }

  // Determine which piece shapes to use
  // Wide slope morphs between seconds 1-2 (at keyframe 2)
  // Narrow slope morphs between seconds 2-3 (at keyframe 3)
  let pieces = { ...PIECES };
  if (useTrick) {
    // Wide slope: morph between 1-2 seconds
    if (time >= 1 && time <= 2) {
      const morphT = time - 1;
      pieces.wideSlope = interpolatePiece(PIECES.wideSlope, PIECES_TRICKED.wideSlope, morphT);
    } else if (time > 2) {
      pieces.wideSlope = PIECES_TRICKED.wideSlope;
    }

    // Narrow slope: morph between 2-3 seconds
    if (time >= 2 && time <= 3) {
      const morphT = time - 2;
      pieces.narrowSlope = interpolatePiece(PIECES.narrowSlope, PIECES_TRICKED.narrowSlope, morphT);
    } else if (time > 3) {
      pieces.narrowSlope = PIECES_TRICKED.narrowSlope;
    }
  }

  return { positions, pieces };
}

// Interpolate piece shape coordinates
function interpolatePiece(pieceA, pieceB, t) {
  return pieceA.map((pointA, i) => {
    const pointB = pieceB[i];
    return [lerp(pointA[0], pointB[0], t), lerp(pointA[1], pointB[1], t)];
  });
}

// Determine which pieces to skip and what solid mask to use for gap prevention
function getGapPreventionConfig(time, useTrick) {
  // Check for exact 0 second frame (stationary start)
  if (time === 0) {
    return {
      skipPieces: ['square', 'rectangle', 'narrowSlope', 'wideSlope', 'base'],
      solidMask: [[0, 0], [5, 0], [5, 4], [0, 4]]
    };
  }

  if (useTrick) {
    // CONCEALING THE TRICK optimizations
    if (time >= 2 && time < 3) {
      // 2 to 3 second frames: pieces are settling into new positions
      return {
        skipPieces: ['base', 'wideSlope'],
        solidMask: [[2, 0], [5, 0], [5, 5], [0, 5], [0, 3.5], [2, 2.7]]
      };
    }
    if (time >= 3 && time < 4) {
      // 3 to 4 second frames: narrow slope has settled
      return {
        skipPieces: ['base', 'wideSlope', 'narrowSlope'],
        solidMask: [[2, 0], [5, 0], [5, 5], [0, 5], [0, 1], [2, 1]]
      };
    }
    if (time >= 4 && time <= 5) {
      // 4 to 5 second frames: all pieces in final position
      return {
        skipPieces: ['rectangle', 'narrowSlope', 'wideSlope', 'base'],
        solidMask: [[0, 0], [5, 0], [5, 5], [0, 5]]
      };
    }
  } else {
    // NOT CONCEALING THE TRICK optimizations
    if (time >= 3 && time < 4) {
      // 3 to 4 second frames: slopes have settled but with true shapes
      return {
        skipPieces: ['wideSlope', 'narrowSlope'],
        solidMask: [[2, 0], [5, 0], [5, 1.3], [0, 3.3], [0, 1], [2, 1]]
      };
    }
    if (time >= 4 && time <= 5) {
      // 4 to 5 second frames: rectangle has returned
      return {
        skipPieces: ['rectangle', 'narrowSlope', 'wideSlope'],
        solidMask: [[0, 0], [5, 0], [5, 1.3], [0, 3.3]]
      };
    }
  }

  // No gap prevention needed
  return null;
}

// Draw the animated pieces
function drawAnimatedPieces(canvas, api, time, useTrick = true, showGrid = false) {
  if (api.size.width === 0) {
    return;
  }

  const ctx = canvas.getContext('2d');

  // Calculate dimensions
  const maxWidth = Math.min(api.size.width, 300);
  if (maxWidth <= 0) return;

  const rectWidth = maxWidth / DIAGRAM_GRID_WIDTH;
  const rectHeight = rectWidth / CHOCOLATE_ASPECT_RATIO;

  const canvasWidth = rectWidth * DIAGRAM_GRID_WIDTH;
  const canvasHeight = rectHeight * DIAGRAM_GRID_HEIGHT;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Clear canvas
  ctx.fillStyle = api.getColor('background');
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Get theme-aware chocolate colors
  const isDark = api.theme === 'dark';
  const baseColor = isDark ? api.getColor('#a16944') : api.getColor('#622c06');
  const lightColor = isDark ? api.getColor('#c4916b') : api.getColor('#7b3f10');
  const darkColor = isDark ? api.getColor('#6d3e1a') : api.getColor('#3b1d07');

  const borderWidth = rectWidth * (10 / 80);

  // Create the chocolate bar source canvas
  const chocolateCanvas = createChocolateBarCanvas(rectWidth, rectHeight, borderWidth, baseColor, lightColor, darkColor);

  // Get interpolated positions and piece shapes
  const { positions, pieces } = getPositionsAtTime(time, useTrick);

  // Check for gap prevention optimization
  const gapConfig = getGapPreventionConfig(time, useTrick);

  // Draw pieces in order (base first, then others on top)
  const drawOrder = ['base', 'wideSlope', 'narrowSlope', 'rectangle', 'square'];

  // If we have gap prevention, draw solid mask first, then remaining pieces
  if (gapConfig) {
    // Draw the solid chocolate bar with clipping mask at the standard position
    const solidDestX = OFFSET_X * rectWidth;
    const solidDestY = OFFSET_Y * rectHeight;
    drawPieceWithMask(ctx, chocolateCanvas, gapConfig.solidMask, rectWidth, rectHeight, solidDestX, solidDestY);

    // Draw only the pieces that are NOT skipped
    for (const pieceName of drawOrder) {
      if (gapConfig.skipPieces.includes(pieceName)) continue;
      const pos = positions[pieceName];
      const piece = pieces[pieceName];
      const destX = (pos[0] + OFFSET_X) * rectWidth;
      const destY = (pos[1] + OFFSET_Y) * rectHeight;
      drawPiece(ctx, chocolateCanvas, piece, rectWidth, rectHeight, destX, destY);
    }
  } else {
    // Normal rendering: draw all pieces
    for (const pieceName of drawOrder) {
      const pos = positions[pieceName];
      const piece = pieces[pieceName];
      const destX = (pos[0] + OFFSET_X) * rectWidth;
      const destY = (pos[1] + OFFSET_Y) * rectHeight;
      drawPiece(ctx, chocolateCanvas, piece, rectWidth, rectHeight, destX, destY);
    }
  }

  // Draw grid overlay for solution mode
  if (showGrid) {
    drawGrid(ctx, rectWidth, rectHeight, api);
  }
}

// Draw grid overlay (for solution mode)
function drawGrid(ctx, rectWidth, rectHeight, api) {
  ctx.save();

  // Get a subtle grid color that contrasts with background
  const gridColor = api.getColor('border', { alpha: -0.3 });

  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;

  // Draw vertical lines (5 columns + 1 for right edge = 6 lines)
  for (let col = 0; col <= GRID_COLS; col++) {
    const x = (col + OFFSET_X) * rectWidth;
    const yStart = OFFSET_Y * rectHeight;
    const yEnd = (OFFSET_Y + GRID_ROWS) * rectHeight;
    ctx.beginPath();
    ctx.moveTo(x, yStart);
    ctx.lineTo(x, yEnd);
    ctx.stroke();
  }

  // Draw horizontal lines (4 rows + 1 for bottom edge = 5 lines)
  for (let row = 0; row <= GRID_ROWS; row++) {
    const y = (row + OFFSET_Y) * rectHeight;
    const xStart = OFFSET_X * rectWidth;
    const xEnd = (OFFSET_X + GRID_COLS) * rectWidth;
    ctx.beginPath();
    ctx.moveTo(xStart, y);
    ctx.lineTo(xEnd, y);
    ctx.stroke();
  }

  ctx.restore();
}

// Create an offscreen canvas with the full chocolate bar
function createChocolateBarCanvas(rectWidth, rectHeight, borderWidth, baseColor, lightColor, darkColor) {
  const offscreen = document.createElement('canvas');
  offscreen.width = rectWidth * GRID_COLS;
  offscreen.height = rectHeight * GRID_ROWS;
  const ctx = offscreen.getContext('2d');

  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      const x = col * rectWidth;
      const y = row * rectHeight;
      drawChocolateSquare(ctx, x, y, rectWidth, rectHeight, borderWidth, baseColor, lightColor, darkColor);
    }
  }

  return offscreen;
}

// Draw a piece by clipping from the chocolate bar canvas
function drawPiece(ctx, chocolateCanvas, piece, rectWidth, rectHeight, destX, destY) {
  ctx.save();

  // Create clipping path from piece coordinates
  ctx.beginPath();
  piece.forEach((point, i) => {
    const px = destX + point[0] * rectWidth;
    const py = destY + point[1] * rectHeight;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  });
  ctx.closePath();
  ctx.clip();

  // Draw the chocolate bar canvas at the destination
  ctx.drawImage(chocolateCanvas, destX, destY);

  ctx.restore();
}

// Draw the chocolate bar with a custom clipping mask (for gap prevention)
// The mask coordinates are in grid units, relative to the chocolate bar origin
function drawPieceWithMask(ctx, chocolateCanvas, mask, rectWidth, rectHeight, destX, destY) {
  ctx.save();

  // Create clipping path from mask coordinates
  ctx.beginPath();
  mask.forEach((point, i) => {
    const px = destX + point[0] * rectWidth;
    const py = destY + point[1] * rectHeight;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  });
  ctx.closePath();
  ctx.clip();

  // Draw the chocolate bar canvas at the destination
  ctx.drawImage(chocolateCanvas, destX, destY);

  ctx.restore();
}

function drawChocolateSquare(ctx, x, y, w, h, bw, baseColor, lightColor, darkColor) {
  // Draw base chocolate fill
  ctx.fillStyle = baseColor;
  ctx.fillRect(x, y, w, h);

  // Draw top border as trapezoid (light)
  ctx.fillStyle = lightColor;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w - bw, y + bw);
  ctx.lineTo(x + bw, y + bw);
  ctx.closePath();
  ctx.fill();

  // Draw left border as trapezoid (light)
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + bw, y + bw);
  ctx.lineTo(x + bw, y + h - bw);
  ctx.lineTo(x, y + h);
  ctx.closePath();
  ctx.fill();

  // Draw bottom border as trapezoid (dark)
  ctx.fillStyle = darkColor;
  ctx.beginPath();
  ctx.moveTo(x, y + h);
  ctx.lineTo(x + bw, y + h - bw);
  ctx.lineTo(x + w - bw, y + h - bw);
  ctx.lineTo(x + w, y + h);
  ctx.closePath();
  ctx.fill();

  // Draw right border as trapezoid (dark)
  ctx.beginPath();
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w - bw, y + h - bw);
  ctx.lineTo(x + w - bw, y + bw);
  ctx.closePath();
  ctx.fill();
}`,startLine:74}}};export{n as default};
