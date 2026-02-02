const n={slug:"coins-on-a-table",metadata:{id:"puzzle-18",title:"Coins on a Table",difficulty:"medium",concepts:["adversarial-game"],tags:["has-solution","starter","interactive"],credit:"Classic game theory puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"You and a friend want to settle who is the smarter of you two with a game. The game is played on a circular table, with you and your friend taking turns to put...",websitePreview:"You and a friend want to settle who is the smarter of you two with a game. The game is played on a circular table, with you and your friend taking turns to put..."},content:`<p>You and a friend want to settle who is the smarter of you two with a game. The game is played on a circular table, with you and your friend taking turns to put identically-sized coins on the table. The coins must be laid flat on the table without extending beyond the table or overlapping another coin. The first person who cannot put down a coin loses. Your friend lets you decide if you’d like to go first or second.</p>
<p>Should you go first or second? And how do you ensure that you can win?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>If you choose to go first, there’s a strategy for you to guarantee a win.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The table doesn’t have to be a circle for this strategy to work. In fact, it can be an oval, a square, a rectangle, or even a hexagon. However, this strategy would fail on a triangular table.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You should go first. On your first move, place a coin in the middle of the table. After your friend places a coin, place your coin on the opposite side.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Your strategy involves keeping the table symmetric by a 180° rotation. This means that wherever your friend places a coin, there’ll be an identical spot on the opposite side where you can place a coin too. You can always guarantee a space for your coin until your friend runs out of spots to place his.</p><p>However, if a coin was placed over the midpoint of the table but offset to the side, then you can no longer keep the table symmetric, and the strategy breaks down. This is why you have to go first to place a coin in the exact middle of the table.</p><p>This strategy works on any table with a shape that is symmetric by a 180° rotation. This is why it works on shapes like ovals, squares, rectangles, hexagons, and so on, but not shapes like triangles and pentagons.</p><p>You can face off with this strategy as the second player. You play as the blue player against the red player.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
You and a friend want to settle who is the smarter of you two with a game. The game is played on a circular table, with you and your friend taking turns to put identically-sized coins on the table. The coins must be laid flat on the table without extending beyond the table or overlapping another coin. The first person who cannot put down a coin loses. Your friend lets you decide if you’d like to go first or second.

Should you go first or second? And how do you ensure that you can win?

:::hint
If you choose to go first, there’s a strategy for you to guarantee a win.
:::

:::hint
The table doesn’t have to be a circle for this strategy to work. In fact, it can be an oval, a square, a rectangle, or even a hexagon. However, this strategy would fail on a triangular table.
:::

::::solution
You should go first. On your first move, place a coin in the middle of the table. After your friend places a coin, place your coin on the opposite side.

:::dynamic
\`\`\`yaml
title: "Visual demonstration of the winning strategy: Place center coin, then mirror opponent's moves"
use: '#diagram'
props:
  mode: demo
\`\`\`
:::

Your strategy involves keeping the table symmetric by a 180° rotation. This means that wherever your friend places a coin, there’ll be an identical spot on the opposite side where you can place a coin too. You can always guarantee a space for your coin until your friend runs out of spots to place his.

However, if a coin was placed over the midpoint of the table but offset to the side, then you can no longer keep the table symmetric, and the strategy breaks down. This is why you have to go first to place a coin in the exact middle of the table.

This strategy works on any table with a shape that is symmetric by a 180° rotation. This is why it works on shapes like ovals, squares, rectangles, hexagons, and so on, but not shapes like triangles and pentagons.

You can face off with this strategy as the second player. You play as the blue player against the red player.

:::dynamic
\`\`\`yaml
title: "Interactive game: Try the strategy as the second player (blue) against the first player (red)"
use: '#diagram'
props:
  mode: interactive
\`\`\`
:::
::::

:::component[diagram]

\`\`\`html
<div id="container" class="flex justify-center">
  <div class="relative w-fit">
    <canvas id="table-canvas"></canvas>
    <canvas id="action-canvas" class="hidden absolute inset-0"></canvas>
  </div>
</div>
<div id="button-container" class="flex justify-center gap-4 [&:not(:empty)]:mt-4">
</div>
\`\`\`

\`\`\`js
function mount(options) {
  const { props } = options;
  if (props.mode === 'demo') {
    mountDemo(options);
  } else if (props.mode === 'interactive') {
    mountInteractive(options);
  }
}

function mountDemo(options) {
  const { api, props } = options;
  const containerElem = document.querySelector('#container');

  function draw() {
    const containerWidth = containerElem.getBoundingClientRect().width;
    const width = Math.min(800, containerWidth);

    const maxGap = 20;
    const gapRatio = 0.2; // for smaller screens, the gap should be this much of table diameter
    const TABLE_COUNT = 3;
    const gap = Math.min(maxGap, width / ((TABLE_COUNT + (TABLE_COUNT - 1) * gapRatio)) * gapRatio);
    const tableSize = (width - ((TABLE_COUNT - 1) * gap)) / TABLE_COUNT;

    const canvas = document.querySelector('#table-canvas');
    canvas.width = width;
    canvas.height = tableSize;
    drawConfiguration({
      canvas,
      x: tableSize / 2 + (0 * (tableSize + gap)),
      y: tableSize / 2,
      radius: tableSize / 2,
      coins: [
        { player: 'A', theta: 0, radius: 0, new: true },
        // { player: 'B', theta: Math.PI * 0.3, radius: 0.5 },
        // { player: 'A', theta: Math.PI + Math.PI * 0.3, radius: 0.5 },
        // { player: 'B', theta: Math.PI * 1.6, radius: 0.9, new: true },
        // { player: 'A', theta: Math.PI + Math.PI * 1.6, radius: 0.9, new: true },
      ],
    });
    drawConfiguration({
      canvas,
      x: tableSize / 2 + (1 * (tableSize + gap)),
      y: tableSize / 2,
      radius: tableSize / 2,
      coins: [
        { player: 'A', theta: 0, radius: 0 },
        { player: 'B', theta: Math.PI * 0.3, radius: 0.5, new: true },
        { player: 'A', theta: Math.PI + Math.PI * 0.3, radius: 0.5, new: true },
        // { player: 'B', theta: Math.PI * 1.6, radius: 0.9, new: true },
        // { player: 'A', theta: Math.PI + Math.PI * 1.6, radius: 0.9, new: true },
      ],
    });
    drawConfiguration({
      canvas,
      x: tableSize / 2 + (2 * (tableSize + gap)),
      y: tableSize / 2,
      radius: tableSize / 2,
      coins: [
        { player: 'A', theta: 0, radius: 0 },
        { player: 'B', theta: Math.PI * 0.3, radius: 0.5 },
        { player: 'A', theta: Math.PI + Math.PI * 0.3, radius: 0.5 },
        { player: 'B', theta: Math.PI * 1.6, radius: 0.9, new: true },
        { player: 'A', theta: Math.PI + Math.PI * 1.6, radius: 0.9, new: true },
      ],
    });
  }

  let prevWidth = 0;
  const observer = new ResizeObserver(entries => {
    const curWidth = containerElem.getBoundingClientRect().width;
    if (prevWidth === curWidth) { return; }
    prevWidth = curWidth;
    draw();
  });
  observer.observe(containerElem);
  draw();
}

function mountInteractive(options) {
  const { api, props } = options;
  const containerElem = document.querySelector('#container');
  const buttonContainerElem = document.querySelector('#button-container');

  const canvas = document.querySelector('#table-canvas');
  const actionCanvas = document.querySelector('#action-canvas');
  actionCanvas.classList.remove('hidden');

  const firstCoin = { player: 'B', theta: 0, radius: 0, new: true };
  let coins = [firstCoin];
  let cursorCoin = undefined;
  let lastInvalidCoin = undefined;

  const undoButton = api.ui.button({ label: 'Undo', variant: 'contained', color: 'primary' });
  const resetButton = api.ui.button({ label: 'Reset', variant: 'outlined', color: 'destructive' });

  undoButton.classList.add(api.css('w-20'));
  resetButton.classList.add(api.css('w-20'));

  buttonContainerElem.appendChild(undoButton);
  buttonContainerElem.appendChild(resetButton);

  function updateControls() {
    undoButton.disabled = coins.length <= 1;
    resetButton.disabled = coins.length == 1;
  }

  function handleUndo() {
    if (coins.length > 1) {
      coins = coins.slice(0, -2);
    }
    draw();
    updateControls();
  }

  function handleReset() {
    coins = [firstCoin];
    draw();
    updateControls();
  }

  undoButton.addEventListener('click', handleUndo);
  resetButton.addEventListener('click', handleReset);
  updateControls();

  let containerWidth = 0;
  let canvasSize = 0;
  let tableSize = 0;

  function draw() {
    containerWidth = containerElem.getBoundingClientRect().width;
    canvasSize = Math.min(400, containerWidth);
    tableSize = canvasSize / (1 + COIN_TO_TABLE_RATIO)

    canvas.width = canvasSize;
    canvas.height = canvasSize;
    drawConfiguration({
      canvas,
      x: canvasSize / 2,
      y: canvasSize / 2,
      radius: tableSize / 2,
      coins,
    });
    drawAction();
  }

  let prevWidth = 0;
  const observer = new ResizeObserver(entries => {
    const curWidth = containerElem.getBoundingClientRect().width;
    if (prevWidth === curWidth) { return; }
    prevWidth = curWidth;
    draw();
  });
  observer.observe(containerElem);
  draw();

  function drawAction() {
    actionCanvas.width = canvasSize;
    actionCanvas.height = canvasSize;
    drawConfiguration({
      canvas: actionCanvas,
      x: canvasSize / 2,
      y: canvasSize / 2,
      radius: tableSize / 2,
      hideTable: true,
      coins: [
        ...(!!cursorCoin ? [cursorCoin] : []),
        ...(!!lastInvalidCoin ? [lastInvalidCoin] : []),
      ],
    });
  }

  function checkValidMove(coordinates) {
    // Check if new coin is within table bounds
    if (!coordinates.withinTable || coordinates.radius > 1) {
      return false;
    }

    const tableRadius = tableSize / 2;
    const coinRadius = tableRadius * COIN_TO_TABLE_RATIO;
    const maxCoinCenterDistance = tableRadius - coinRadius;
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;

    // Convert input coordinates to x/y
    const newCoinDistance = coordinates.radius * maxCoinCenterDistance;
    const newX = centerX + newCoinDistance * Math.cos(coordinates.theta);
    const newY = centerY + newCoinDistance * Math.sin(coordinates.theta);

    // Check overlap with existing coins
    const minDistanceSquared = (2 * coinRadius) * (2 * coinRadius);
    for (const coin of coins) {
      const coinDistance = coin.radius * maxCoinCenterDistance;
      const coinX = centerX + coinDistance * Math.cos(coin.theta);
      const coinY = centerY + coinDistance * Math.sin(coin.theta);

      const dx = newX - coinX;
      const dy = newY - coinY;
      const distanceSquared = dx * dx + dy * dy;

      // Two coins overlap if distance between centers < sum of radii
      // Compare squared distances to avoid expensive sqrt
      if (distanceSquared < minDistanceSquared) {
        return false;
      }
    }

    return true;
  }

  function handleMoveCursorCoin(coordinates) {
    if (!coordinates || !coordinates.withinTable) {
      cursorCoin = undefined;
      drawAction();
      return;
    }

    cursorCoin = {
      player: 'A',
      theta: coordinates.theta,
      radius: coordinates.radius,
      state: checkValidMove(coordinates) ? 'attempt' : 'invalid-attempt',
    };
    drawAction();
  }

  function handleClick(coordinates) {
    if (!coordinates || !coordinates.withinTable) {
      cursorCoin = undefined;
      drawAction();
      return;
    }
    const isValidMove = checkValidMove(coordinates);
    if (!isValidMove) {
      cursorCoin = {
        player: 'A',
        theta: coordinates.theta,
        radius: coordinates.radius,
        state: 'error',
      };
      drawAction();
      return;
    }

    coins.push({
      player: 'A',
      theta: coordinates.theta,
      radius: coordinates.radius,
    });
    coins.push({
      player: 'B',
      theta: (coordinates.theta + Math.PI) % (2 * Math.PI),
      radius: coordinates.radius,
    });
    draw();
    updateControls();
  }

  function getCoordinatesFromEvent(e) {
    const rect = actionCanvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate position relative to table center
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    // Calculate polar coordinates
    const tableRadius = tableSize / 2;
    const coinRadius = tableRadius * COIN_TO_TABLE_RATIO;
    const maxCoinCenterDistance = tableRadius - coinRadius;

    const radius = Math.sqrt(dx * dx + dy * dy);
    const normalizedRadius = radius / maxCoinCenterDistance;
    const theta = Math.atan2(dy, dx);
    const withinTable = radius <= tableRadius;

    return { radius: normalizedRadius, theta, withinTable };
  }

  // Add hover coordinate logging
  actionCanvas.addEventListener('mousemove', (e) => {
    const coords = getCoordinatesFromEvent(e);
    handleMoveCursorCoin(coords);
  });

  actionCanvas.addEventListener('click', (e) => {
    const coords = getCoordinatesFromEvent(e);
    handleClick(coords);
  });

  actionCanvas.addEventListener('mouseleave', () => {
    handleMoveCursorCoin(undefined);
  });
}

// Configuration
const OUTLINE_THICKNESS = 2;
const COIN_TO_TABLE_RATIO = 1 / 8;

// Colors
const TABLE_FILL = '#8B6F47';
const TABLE_OUTLINE = '#5C4A33';
const PLAYER_A_FILL = '#3B82F6';
const PLAYER_A_OUTLINE = '#1E40AF';
const PLAYER_B_FILL = '#EF4444';
const PLAYER_B_OUTLINE = '#991B1B';
const NEW_COIN_OUTLINE_THICKNESS = OUTLINE_THICKNESS * 3;

/**
 * Draws a configuration of coins on a circular table
 * @param {Object} params - Configuration parameters
 * @param {HTMLCanvasElement} params.canvas - The canvas element to draw on
 * @param {number} params.x - The x-coordinate of the table center
 * @param {number} params.y - The y-coordinate of the table center
 * @param {number} params.radius - The radius of the table in pixels
 * @param {boolean} [params.hideTable] - Hides the table
 * @param {Array<{player: 'A'|'B', theta: number, radius: number, state?:  }>} params.coins - Array of coin positions
 *   - player: The player who placed the coin ('A' or 'B')
 *   - theta: Angular position in radians (0 to 2π)
 *   - radius: Normalized radial distance from center (0 to 1)
 *   - state: \`undefined\` for no status | 'new' | 'attempt' | 'invalid-attempt' | 'error'
 */
function drawConfiguration({ canvas, x, y, radius, hideTable, coins }) {
  const ctx = canvas.getContext('2d');

  if (!hideTable) {
    // Draw table
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = TABLE_FILL;
    ctx.fill();

    // Draw table outline (inset by half thickness)
    ctx.beginPath();
    ctx.arc(x, y, Math.max(0, radius - OUTLINE_THICKNESS / 2), 0, Math.PI * 2);
    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.strokeStyle = TABLE_OUTLINE;
    ctx.stroke();
  }

  // Draw coins
  const COIN_RADIUS = radius * COIN_TO_TABLE_RATIO;
  const maxCoinCenterDistance = radius - COIN_RADIUS;

  for (const coin of coins) {
    // Calculate coin center position
    const coinCenterDistance = coin.radius * maxCoinCenterDistance;
    const coinCenterX = x + coinCenterDistance * Math.cos(coin.theta);
    const coinCenterY = y + coinCenterDistance * Math.sin(coin.theta);

    // Choose colors based on player
    const fillColor = coin.player === 'A' ? PLAYER_A_FILL : PLAYER_B_FILL;
    const outlineColor = coin.player === 'A' ? PLAYER_A_OUTLINE : PLAYER_B_OUTLINE;

    ctx.save();

    if (coin.state === 'invalid-attempt' || coin.state === 'error') {
      ctx.globalAlpha = 0.4;
    }

    // Draw coin
    ctx.beginPath();
    ctx.arc(coinCenterX, coinCenterY, COIN_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.fill();

    // Draw coin outline (inset by half thickness)
    ctx.beginPath();
    const outlineThickness = coin.state === 'new' ? NEW_COIN_OUTLINE_THICKNESS : OUTLINE_THICKNESS;
    ctx.arc(coinCenterX, coinCenterY, Math.max(0, COIN_RADIUS - outlineThickness / 2), 0, Math.PI * 2);
    ctx.lineWidth = outlineThickness;
    ctx.strokeStyle = outlineColor;
    ctx.stroke();

    ctx.restore();
  }
}
\`\`\``,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#diagram",props:{mode:"demo"},title:"Visual demonstration of the winning strategy: Place center coin, then mirror opponent's moves",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/coins-on-a-table.md"},{type:"dynamic",mode:"component",componentId:"#diagram",props:{mode:"interactive"},title:"Interactive game: Try the strategy as the second player (blue) against the first player (red)",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/coins-on-a-table.md"}],inlineComponents:{diagram:{id:"diagram",code:`function mount(options) {
  const { props } = options;
  if (props.mode === 'demo') {
    mountDemo(options);
  } else if (props.mode === 'interactive') {
    mountInteractive(options);
  }
}

function mountDemo(options) {
  const { api, props } = options;
  const containerElem = document.querySelector('#container');

  function draw() {
    const containerWidth = containerElem.getBoundingClientRect().width;
    const width = Math.min(800, containerWidth);

    const maxGap = 20;
    const gapRatio = 0.2; // for smaller screens, the gap should be this much of table diameter
    const TABLE_COUNT = 3;
    const gap = Math.min(maxGap, width / ((TABLE_COUNT + (TABLE_COUNT - 1) * gapRatio)) * gapRatio);
    const tableSize = (width - ((TABLE_COUNT - 1) * gap)) / TABLE_COUNT;

    const canvas = document.querySelector('#table-canvas');
    canvas.width = width;
    canvas.height = tableSize;
    drawConfiguration({
      canvas,
      x: tableSize / 2 + (0 * (tableSize + gap)),
      y: tableSize / 2,
      radius: tableSize / 2,
      coins: [
        { player: 'A', theta: 0, radius: 0, new: true },
        // { player: 'B', theta: Math.PI * 0.3, radius: 0.5 },
        // { player: 'A', theta: Math.PI + Math.PI * 0.3, radius: 0.5 },
        // { player: 'B', theta: Math.PI * 1.6, radius: 0.9, new: true },
        // { player: 'A', theta: Math.PI + Math.PI * 1.6, radius: 0.9, new: true },
      ],
    });
    drawConfiguration({
      canvas,
      x: tableSize / 2 + (1 * (tableSize + gap)),
      y: tableSize / 2,
      radius: tableSize / 2,
      coins: [
        { player: 'A', theta: 0, radius: 0 },
        { player: 'B', theta: Math.PI * 0.3, radius: 0.5, new: true },
        { player: 'A', theta: Math.PI + Math.PI * 0.3, radius: 0.5, new: true },
        // { player: 'B', theta: Math.PI * 1.6, radius: 0.9, new: true },
        // { player: 'A', theta: Math.PI + Math.PI * 1.6, radius: 0.9, new: true },
      ],
    });
    drawConfiguration({
      canvas,
      x: tableSize / 2 + (2 * (tableSize + gap)),
      y: tableSize / 2,
      radius: tableSize / 2,
      coins: [
        { player: 'A', theta: 0, radius: 0 },
        { player: 'B', theta: Math.PI * 0.3, radius: 0.5 },
        { player: 'A', theta: Math.PI + Math.PI * 0.3, radius: 0.5 },
        { player: 'B', theta: Math.PI * 1.6, radius: 0.9, new: true },
        { player: 'A', theta: Math.PI + Math.PI * 1.6, radius: 0.9, new: true },
      ],
    });
  }

  let prevWidth = 0;
  const observer = new ResizeObserver(entries => {
    const curWidth = containerElem.getBoundingClientRect().width;
    if (prevWidth === curWidth) { return; }
    prevWidth = curWidth;
    draw();
  });
  observer.observe(containerElem);
  draw();
}

function mountInteractive(options) {
  const { api, props } = options;
  const containerElem = document.querySelector('#container');
  const buttonContainerElem = document.querySelector('#button-container');

  const canvas = document.querySelector('#table-canvas');
  const actionCanvas = document.querySelector('#action-canvas');
  actionCanvas.classList.remove('hidden');

  const firstCoin = { player: 'B', theta: 0, radius: 0, new: true };
  let coins = [firstCoin];
  let cursorCoin = undefined;
  let lastInvalidCoin = undefined;

  const undoButton = api.ui.button({ label: 'Undo', variant: 'contained', color: 'primary' });
  const resetButton = api.ui.button({ label: 'Reset', variant: 'outlined', color: 'destructive' });

  undoButton.classList.add(api.css('w-20'));
  resetButton.classList.add(api.css('w-20'));

  buttonContainerElem.appendChild(undoButton);
  buttonContainerElem.appendChild(resetButton);

  function updateControls() {
    undoButton.disabled = coins.length <= 1;
    resetButton.disabled = coins.length == 1;
  }

  function handleUndo() {
    if (coins.length > 1) {
      coins = coins.slice(0, -2);
    }
    draw();
    updateControls();
  }

  function handleReset() {
    coins = [firstCoin];
    draw();
    updateControls();
  }

  undoButton.addEventListener('click', handleUndo);
  resetButton.addEventListener('click', handleReset);
  updateControls();

  let containerWidth = 0;
  let canvasSize = 0;
  let tableSize = 0;

  function draw() {
    containerWidth = containerElem.getBoundingClientRect().width;
    canvasSize = Math.min(400, containerWidth);
    tableSize = canvasSize / (1 + COIN_TO_TABLE_RATIO)

    canvas.width = canvasSize;
    canvas.height = canvasSize;
    drawConfiguration({
      canvas,
      x: canvasSize / 2,
      y: canvasSize / 2,
      radius: tableSize / 2,
      coins,
    });
    drawAction();
  }

  let prevWidth = 0;
  const observer = new ResizeObserver(entries => {
    const curWidth = containerElem.getBoundingClientRect().width;
    if (prevWidth === curWidth) { return; }
    prevWidth = curWidth;
    draw();
  });
  observer.observe(containerElem);
  draw();

  function drawAction() {
    actionCanvas.width = canvasSize;
    actionCanvas.height = canvasSize;
    drawConfiguration({
      canvas: actionCanvas,
      x: canvasSize / 2,
      y: canvasSize / 2,
      radius: tableSize / 2,
      hideTable: true,
      coins: [
        ...(!!cursorCoin ? [cursorCoin] : []),
        ...(!!lastInvalidCoin ? [lastInvalidCoin] : []),
      ],
    });
  }

  function checkValidMove(coordinates) {
    // Check if new coin is within table bounds
    if (!coordinates.withinTable || coordinates.radius > 1) {
      return false;
    }

    const tableRadius = tableSize / 2;
    const coinRadius = tableRadius * COIN_TO_TABLE_RATIO;
    const maxCoinCenterDistance = tableRadius - coinRadius;
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;

    // Convert input coordinates to x/y
    const newCoinDistance = coordinates.radius * maxCoinCenterDistance;
    const newX = centerX + newCoinDistance * Math.cos(coordinates.theta);
    const newY = centerY + newCoinDistance * Math.sin(coordinates.theta);

    // Check overlap with existing coins
    const minDistanceSquared = (2 * coinRadius) * (2 * coinRadius);
    for (const coin of coins) {
      const coinDistance = coin.radius * maxCoinCenterDistance;
      const coinX = centerX + coinDistance * Math.cos(coin.theta);
      const coinY = centerY + coinDistance * Math.sin(coin.theta);

      const dx = newX - coinX;
      const dy = newY - coinY;
      const distanceSquared = dx * dx + dy * dy;

      // Two coins overlap if distance between centers < sum of radii
      // Compare squared distances to avoid expensive sqrt
      if (distanceSquared < minDistanceSquared) {
        return false;
      }
    }

    return true;
  }

  function handleMoveCursorCoin(coordinates) {
    if (!coordinates || !coordinates.withinTable) {
      cursorCoin = undefined;
      drawAction();
      return;
    }

    cursorCoin = {
      player: 'A',
      theta: coordinates.theta,
      radius: coordinates.radius,
      state: checkValidMove(coordinates) ? 'attempt' : 'invalid-attempt',
    };
    drawAction();
  }

  function handleClick(coordinates) {
    if (!coordinates || !coordinates.withinTable) {
      cursorCoin = undefined;
      drawAction();
      return;
    }
    const isValidMove = checkValidMove(coordinates);
    if (!isValidMove) {
      cursorCoin = {
        player: 'A',
        theta: coordinates.theta,
        radius: coordinates.radius,
        state: 'error',
      };
      drawAction();
      return;
    }

    coins.push({
      player: 'A',
      theta: coordinates.theta,
      radius: coordinates.radius,
    });
    coins.push({
      player: 'B',
      theta: (coordinates.theta + Math.PI) % (2 * Math.PI),
      radius: coordinates.radius,
    });
    draw();
    updateControls();
  }

  function getCoordinatesFromEvent(e) {
    const rect = actionCanvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate position relative to table center
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    // Calculate polar coordinates
    const tableRadius = tableSize / 2;
    const coinRadius = tableRadius * COIN_TO_TABLE_RATIO;
    const maxCoinCenterDistance = tableRadius - coinRadius;

    const radius = Math.sqrt(dx * dx + dy * dy);
    const normalizedRadius = radius / maxCoinCenterDistance;
    const theta = Math.atan2(dy, dx);
    const withinTable = radius <= tableRadius;

    return { radius: normalizedRadius, theta, withinTable };
  }

  // Add hover coordinate logging
  actionCanvas.addEventListener('mousemove', (e) => {
    const coords = getCoordinatesFromEvent(e);
    handleMoveCursorCoin(coords);
  });

  actionCanvas.addEventListener('click', (e) => {
    const coords = getCoordinatesFromEvent(e);
    handleClick(coords);
  });

  actionCanvas.addEventListener('mouseleave', () => {
    handleMoveCursorCoin(undefined);
  });
}

// Configuration
const OUTLINE_THICKNESS = 2;
const COIN_TO_TABLE_RATIO = 1 / 8;

// Colors
const TABLE_FILL = '#8B6F47';
const TABLE_OUTLINE = '#5C4A33';
const PLAYER_A_FILL = '#3B82F6';
const PLAYER_A_OUTLINE = '#1E40AF';
const PLAYER_B_FILL = '#EF4444';
const PLAYER_B_OUTLINE = '#991B1B';
const NEW_COIN_OUTLINE_THICKNESS = OUTLINE_THICKNESS * 3;

/**
 * Draws a configuration of coins on a circular table
 * @param {Object} params - Configuration parameters
 * @param {HTMLCanvasElement} params.canvas - The canvas element to draw on
 * @param {number} params.x - The x-coordinate of the table center
 * @param {number} params.y - The y-coordinate of the table center
 * @param {number} params.radius - The radius of the table in pixels
 * @param {boolean} [params.hideTable] - Hides the table
 * @param {Array<{player: 'A'|'B', theta: number, radius: number, state?:  }>} params.coins - Array of coin positions
 *   - player: The player who placed the coin ('A' or 'B')
 *   - theta: Angular position in radians (0 to 2π)
 *   - radius: Normalized radial distance from center (0 to 1)
 *   - state: \`undefined\` for no status | 'new' | 'attempt' | 'invalid-attempt' | 'error'
 */
function drawConfiguration({ canvas, x, y, radius, hideTable, coins }) {
  const ctx = canvas.getContext('2d');

  if (!hideTable) {
    // Draw table
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = TABLE_FILL;
    ctx.fill();

    // Draw table outline (inset by half thickness)
    ctx.beginPath();
    ctx.arc(x, y, Math.max(0, radius - OUTLINE_THICKNESS / 2), 0, Math.PI * 2);
    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.strokeStyle = TABLE_OUTLINE;
    ctx.stroke();
  }

  // Draw coins
  const COIN_RADIUS = radius * COIN_TO_TABLE_RATIO;
  const maxCoinCenterDistance = radius - COIN_RADIUS;

  for (const coin of coins) {
    // Calculate coin center position
    const coinCenterDistance = coin.radius * maxCoinCenterDistance;
    const coinCenterX = x + coinCenterDistance * Math.cos(coin.theta);
    const coinCenterY = y + coinCenterDistance * Math.sin(coin.theta);

    // Choose colors based on player
    const fillColor = coin.player === 'A' ? PLAYER_A_FILL : PLAYER_B_FILL;
    const outlineColor = coin.player === 'A' ? PLAYER_A_OUTLINE : PLAYER_B_OUTLINE;

    ctx.save();

    if (coin.state === 'invalid-attempt' || coin.state === 'error') {
      ctx.globalAlpha = 0.4;
    }

    // Draw coin
    ctx.beginPath();
    ctx.arc(coinCenterX, coinCenterY, COIN_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.fill();

    // Draw coin outline (inset by half thickness)
    ctx.beginPath();
    const outlineThickness = coin.state === 'new' ? NEW_COIN_OUTLINE_THICKNESS : OUTLINE_THICKNESS;
    ctx.arc(coinCenterX, coinCenterY, Math.max(0, COIN_RADIUS - outlineThickness / 2), 0, Math.PI * 2);
    ctx.lineWidth = outlineThickness;
    ctx.strokeStyle = outlineColor;
    ctx.stroke();

    ctx.restore();
  }
}`,layout:`<div id="container" class="flex justify-center">
  <div class="relative w-fit">
    <canvas id="table-canvas"></canvas>
    <canvas id="action-canvas" class="hidden absolute inset-0"></canvas>
  </div>
</div>
<div id="button-container" class="flex justify-center gap-4 [&:not(:empty)]:mt-4">
</div>`,startLine:73}}};export{n as default};
