const e={slug:"adversarial-games",metadata:{id:"expedition-3",title:"Adversarial Games",description:`Learn how to analyse two-player, zero-sum games by building game trees,
classifying positions as winning or losing, and finding optimal strategies.
`,concepts:["adversarial-game","game-theory"],dateCreated:"2026-02-09",lastUpdated:"2026-02-09",published:!0},content:`<p>In the context of puzzles, games typically refer to a scenario where players take turns to make a move, eventually leading to an outcome. The game is called adversarial if the players have conflicting goals. For example, if one player wins, the other must lose; they can’t both win.</p>
<p>For this module, we shall only consider games with the following properties:</p>
<ul>
<li>The game involves 2 players.</li>
<li>Players will take turns to make a single move.</li>
<li>All sequences of moves eventually lead to one player winning. This means that there are no infinite games.</li>
<li>It is a zero-sum game: one player winning means the other must lose.</li>
<li>There are no ties: there must always be one player winning.</li>
<li>Deterministic: there are no elements of randomness. A particular sequence of moves from a particular game state will always result in the same final game state.</li>
</ul>
<p>The most general way to solve such games is to draw out the game tree. For instance, this is the game tree of Tic-Tac-Toe.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>On the 1st level of the tree, we have one node (we call this the root node) that represents the game’s starting state. Each state branches out into possible states that can be reached as a result of the next player’s move. On the 1st, 3rd, 5th, … levels, the “X” player is next to move. On the 2nd, 4th, 6th, … levels, the “O” player is next to move.</p>
<p>Now that we have an understanding of how a game tree looks, let’s consider a simpler game so we can analyse it:</p>
<p>You and your opponent have a stack of 4 coins: 3 iron coins and 1 gold coin at the bottom. On each player’s turn, they have to take 1 or 2 coins, with the goal being to take the golden coin. You’re going first. How do you ensure you get the golden coin?</p>
<p>Let’s draw the game tree for this game. The red arrows represent the moves you can make, and the blue arrows represent your opponent’s moves.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Each node has a number representing the number of coins left in the pile, with the leaf nodes (the nodes with no children) representing the end state of the game.</p>
<p>Let’s colour the leaf nodes red if you win at that state, and blue if your opponent wins at that state. If any branch nodes only have 1 leaf node below it, we can colour it the same colour.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Consider the game at state <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>S</mi></mrow><annotation>S</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span></span></span></span> indicated in the diagram above. You have the choice of taking 1 or 2 coins. If you take 1 coin, you end up in a blue node and you lose. If you take 2 coins, you end up on a red node, and you win. Since you can win from this state, you can colour this state red too.</p>
<p>For any node where it is a certain player's turn, it is a winning state for that player if ANY of the possible moves will lead to a winning state for that player too. On the other hand, it is a losing state for that player if ALL of the possible moves will lead to a losing state for that player too.</p>
<p>Let’s use this new rule to colour the rest of the nodes.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>It turns out the root node is red! That means that if you play optimally, you can always guarantee a win, no matter what your opponent plays. You can see this play out by traversing down this tree. When it’s your turn, choose a move that leads to a red node. When it’s your opponent’s turn, all his possible moves should only lead to red nodes.</p>
<p>We can summarise your winning strategy as such:</p>
<ul>
<li>On your first move, take 1 coin</li>
<li>If your opponent takes 1 coin on the next turn, take 2 coins.</li>
<li>If your opponent takes 2 coins on the next turn, take 1 coin.</li>
</ul>
<p>And that’s it, we’ve solved this game.</p>
<p>Game trees are a powerful tool to solve games. However, analysing a game tree requires us to draw out the whole game tree to compute it. After all, if we leave out some of the branches, we might accidentally exclude a winning strategy that could determine if the first player always wins or loses.</p>
<p>But that doesn’t mean game trees are entirely useless. If we can learn the properties of game trees, we can use them to reason out an alternative solution. In particular, we’ll be using the lessons we learnt from studying game trees.</p>
<ul>
<li>We can represent the game as a series of positions.</li>
<li>A position is a winning position for a player if:
<ul>
<li>It is the player’s turn to move, and he can make a move that leads to another winning position.</li>
<li>It is the other player’s turn to move, but all his options lead to a losing position for him (i.e. the first player’s winning position).</li>
</ul>
</li>
</ul>
<p>If a game is symmetric (that means the rules are the same for both players), we get an additional bonus: if there is a position that is a losing position for you, then it is a losing position for the other player too IF you can get the game to that position on his turn. By extension, a position is a winning position for you if there is a move that leads it to a losing position for the other player.</p>
<p>With that in mind, let’s take a look at the earlier game with the stack of coins. This time, there are 16 coins, a lot more than we can analyse in a game tree, at least by hand. So how can we solve this game?</p>
<p>Let us notice that if the other player takes 1 coin, you can take 2 coins. Likewise, if the other player takes 2 coins, you can take 1 coin. Either way, you can ensure that the stack is exactly 3 coins shorter after 2 moves.</p>
<p>Consider the position where the stack has only 3 coins, and it is the other player’s turn. The other player can only take 1 or 2 coins, and you can take the remaining coins on your turn, winning the game. This means that a position with 3 coins left is a losing position for the player that moves next. If you end up with 3 coins in the stack and it’s the other player’s turn, he loses and you win. Likewise, if there are 3 coins in the stack and it’s your turn, he can use the same strategy to force you to lose, ensuring his win.</p>
<p>Now let’s consider another position, this time with a stack of 6 coins, and it is the other player’s turn. If the other player takes 1 or 2 coins, you take 2 or 1 coins respectively, bringing the other player to the losing position of 3 coins with him moving next. This means that a stack of 6 coins is also a losing position for the player that moves next.</p>
<p>In general, any stack of coins that contains a multiple of 3 coins is a losing position for the player that goes next. If you encounter such a stack, you want to go second.</p>
<p>However, what happens if the number of coins is not a multiple of 3? Then it must be 1 or 2 more coins than a multiple of 3, and the first player can take 1 or 2 coins respectively to leave a stack with a multiple of 3 coins to the other player. That means you want to go first.</p>
<p>To summarise this game:</p>
<ul>
<li>A position is a losing position for the player that goes next if the number of coins is a multiple of 3, otherwise it is a winning position.</li>
<li>From a winning position, the optimal move is to divide the number of coins by 3 and get the remainder. Take that number of coins to leave the other player with a losing position.</li>
<li>From a losing position, anything you do doesn’t affect the outcome of the game: you lose the game.</li>
<li>If you get to pick who goes first, choose to go first if the starting position is a winning position. Otherwise, choose to go second.</li>
</ul>
<p>In this way, we’ve solved this particular game without having to draw the entire game tree. But as you may have noticed, we needed to find a special property of this game that helps us to identify the winning and losing positions of the game.</p>





















<table class="no-header"><thead><tr><th align="left"></th><th align="left"></th></tr></thead><tbody><tr><td align="left">What is a winning position?</td><td align="left">• A position that has already ended, giving the win to the last player that has moved.<br>• A position where there exists a move to put the other player in a losing position.</td></tr><tr><td align="left">What is a losing position?</td><td align="left">• A game position that has already ended, giving a loss to the last player whose turn it is.<br>• A game position where all possible moves will put the other player in a winning position.</td></tr><tr><td align="left">Should you go first?</td><td align="left">• Yes, if the starting position is a winning position.<br>• No, if the starting position is a losing position.</td></tr></tbody></table>
<p>Many adversarial game puzzles will ask you something like “can you guarantee a win?” The answer usually depends on whether you get to choose who goes first. If the starting position is a winning position, you want to go first so you can play the winning strategy. If it’s a losing position, you want to go second — because then the starting position is a losing position for your opponent instead. When you encounter an adversarial game puzzle, one of the first things to figure out is whether the starting position favours the first or the second player.</p>
<p>That’s the foundation. You now have the tools to approach adversarial game puzzles: represent the game as a series of positions, classify those positions as winning or losing, and use that classification to play optimally. The puzzles ahead will put these ideas to work — and along the way, you’ll discover more techniques and patterns that make these games tick.</p>
<div class="inline-component-definition" style="display: none;"></div>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`In the context of puzzles, games typically refer to a scenario where players take turns to make a move, eventually leading to an outcome. The game is called adversarial if the players have conflicting goals. For example, if one player wins, the other must lose; they can’t both win.

For this module, we shall only consider games with the following properties:

* The game involves 2 players.  
* Players will take turns to make a single move.  
* All sequences of moves eventually lead to one player winning. This means that there are no infinite games.  
* It is a zero-sum game: one player winning means the other must lose.  
* There are no ties: there must always be one player winning.
* Deterministic: there are no elements of randomness. A particular sequence of moves from a particular game state will always result in the same final game state.

The most general way to solve such games is to draw out the game tree. For instance, this is the game tree of Tic-Tac-Toe.

:::dynamic
\`\`\`yaml
title: 'Tic-tac-toe game tree showing first two levels of moves'
ariaLabel: "Game tree diagram with an empty tic-tac-toe board at the root, branching to three boards showing first moves by X in corner, center, and edge positions, each branching further to show possible responses by O"
use: '#tic-tac-toe-tree'
\`\`\`
:::

On the 1st level of the tree, we have one node (we call this the root node) that represents the game’s starting state. Each state branches out into possible states that can be reached as a result of the next player’s move. On the 1st, 3rd, 5th, … levels, the “X” player is next to move. On the 2nd, 4th, 6th, … levels, the “O” player is next to move.

Now that we have an understanding of how a game tree looks, let’s consider a simpler game so we can analyse it:

You and your opponent have a stack of 4 coins: 3 iron coins and 1 gold coin at the bottom. On each player’s turn, they have to take 1 or 2 coins, with the goal being to take the golden coin. You’re going first. How do you ensure you get the golden coin?

Let’s draw the game tree for this game. The red arrows represent the moves you can make, and the blue arrows represent your opponent’s moves.

:::dynamic
\`\`\`yaml
title: 'Game tree for the stack of coins game with 4 coins'
ariaLabel: "Game tree diagram. Root node shows 4 coins with player A to move. A can take 1 coin (going to 3, player B) or 2 coins (going to 2, player B). The tree branches further showing all possible game outcomes, with leaf nodes showing which player wins."
use: '#coin-game-tree'
props:
  stage: 1
\`\`\`
:::

Each node has a number representing the number of coins left in the pile, with the leaf nodes (the nodes with no children) representing the end state of the game.

Let’s colour the leaf nodes red if you win at that state, and blue if your opponent wins at that state. If any branch nodes only have 1 leaf node below it, we can colour it the same colour.

:::dynamic
\`\`\`yaml
title: 'Game tree with leaf nodes and simple branches colored'
ariaLabel: "Same game tree as before, but leaf nodes are now colored red for A wins and blue for B wins. Internal nodes with only one leaf descendant are also colored. The node with 2 coins on player A's turn is highlighted as a sample node to reason about."
use: '#coin-game-tree'
props:
  stage: 2
\`\`\`
:::

Consider the game at state $S$ indicated in the diagram above. You have the choice of taking 1 or 2 coins. If you take 1 coin, you end up in a blue node and you lose. If you take 2 coins, you end up on a red node, and you win. Since you can win from this state, you can colour this state red too.

For any node where it is a certain player's turn, it is a winning state for that player if ANY of the possible moves will lead to a winning state for that player too. On the other hand, it is a losing state for that player if ALL of the possible moves will lead to a losing state for that player too.

Let’s use this new rule to colour the rest of the nodes.

:::dynamic
\`\`\`yaml
title: 'Fully colored game tree showing winning positions'
ariaLabel: "The complete game tree with all nodes colored. Red nodes are winning positions for player A, blue nodes are winning positions for player B. The root node with 4 coins is red, showing that player A can always win with optimal play."
use: '#coin-game-tree'
props:
  stage: 3
\`\`\`
:::

It turns out the root node is red! That means that if you play optimally, you can always guarantee a win, no matter what your opponent plays. You can see this play out by traversing down this tree. When it’s your turn, choose a move that leads to a red node. When it’s your opponent’s turn, all his possible moves should only lead to red nodes.

We can summarise your winning strategy as such:

* On your first move, take 1 coin  
* If your opponent takes 1 coin on the next turn, take 2 coins.  
* If your opponent takes 2 coins on the next turn, take 1 coin.

And that’s it, we’ve solved this game.

Game trees are a powerful tool to solve games. However, analysing a game tree requires us to draw out the whole game tree to compute it. After all, if we leave out some of the branches, we might accidentally exclude a winning strategy that could determine if the first player always wins or loses.

But that doesn’t mean game trees are entirely useless. If we can learn the properties of game trees, we can use them to reason out an alternative solution. In particular, we’ll be using the lessons we learnt from studying game trees.

* We can represent the game as a series of positions.  
* A position is a winning position for a player if:  
  * It is the player’s turn to move, and he can make a move that leads to another winning position.
  * It is the other player’s turn to move, but all his options lead to a losing position for him (i.e. the first player’s winning position).

If a game is symmetric (that means the rules are the same for both players), we get an additional bonus: if there is a position that is a losing position for you, then it is a losing position for the other player too IF you can get the game to that position on his turn. By extension, a position is a winning position for you if there is a move that leads it to a losing position for the other player.

With that in mind, let’s take a look at the earlier game with the stack of coins. This time, there are 16 coins, a lot more than we can analyse in a game tree, at least by hand. So how can we solve this game?

Let us notice that if the other player takes 1 coin, you can take 2 coins. Likewise, if the other player takes 2 coins, you can take 1 coin. Either way, you can ensure that the stack is exactly 3 coins shorter after 2 moves.

Consider the position where the stack has only 3 coins, and it is the other player’s turn. The other player can only take 1 or 2 coins, and you can take the remaining coins on your turn, winning the game. This means that a position with 3 coins left is a losing position for the player that moves next. If you end up with 3 coins in the stack and it’s the other player’s turn, he loses and you win. Likewise, if there are 3 coins in the stack and it’s your turn, he can use the same strategy to force you to lose, ensuring his win.

Now let’s consider another position, this time with a stack of 6 coins, and it is the other player’s turn. If the other player takes 1 or 2 coins, you take 2 or 1 coins respectively, bringing the other player to the losing position of 3 coins with him moving next. This means that a stack of 6 coins is also a losing position for the player that moves next.

In general, any stack of coins that contains a multiple of 3 coins is a losing position for the player that goes next. If you encounter such a stack, you want to go second.

However, what happens if the number of coins is not a multiple of 3? Then it must be 1 or 2 more coins than a multiple of 3, and the first player can take 1 or 2 coins respectively to leave a stack with a multiple of 3 coins to the other player. That means you want to go first.

To summarise this game:

* A position is a losing position for the player that goes next if the number of coins is a multiple of 3, otherwise it is a winning position.  
* From a winning position, the optimal move is to divide the number of coins by 3 and get the remainder. Take that number of coins to leave the other player with a losing position.  
* From a losing position, anything you do doesn’t affect the outcome of the game: you lose the game.  
* If you get to pick who goes first, choose to go first if the starting position is a winning position. Otherwise, choose to go second.

In this way, we’ve solved this particular game without having to draw the entire game tree. But as you may have noticed, we needed to find a special property of this game that helps us to identify the winning and losing positions of the game.


|||
| :---- | :---- |
| What is a winning position? | • A position that has already ended, giving the win to the last player that has moved.<br>• A position where there exists a move to put the other player in a losing position. |
| What is a losing position? | • A game position that has already ended, giving a loss to the last player whose turn it is.<br>• A game position where all possible moves will put the other player in a winning position.|
| Should you go first? | • Yes, if the starting position is a winning position.<br>• No, if the starting position is a losing position. |

Many adversarial game puzzles will ask you something like “can you guarantee a win?” The answer usually depends on whether you get to choose who goes first. If the starting position is a winning position, you want to go first so you can play the winning strategy. If it’s a losing position, you want to go second — because then the starting position is a losing position for your opponent instead. When you encounter an adversarial game puzzle, one of the first things to figure out is whether the starting position favours the first or the second player.

That’s the foundation. You now have the tools to approach adversarial game puzzles: represent the game as a series of positions, classify those positions as winning or losing, and use that classification to play optimally. The puzzles ahead will put these ideas to work — and along the way, you’ll discover more techniques and patterns that make these games tick.

:::component[tic-tac-toe-tree]
\`\`\`js
function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Calculate responsive sizing - base unit for level 2 (smallest boards)
  const baseCellSize = Math.max(10, Math.min(30, width / 50));

  // Different sizes for each level
  const level2CellSize = baseCellSize;          // Level 2: base size (1x)
  const level1CellSize = baseCellSize * 1.5;      // Level 1: 1.5x bigger
  const level0CellSize = baseCellSize * 2;      // Level 0 (root): 2x bigger

  const level2BoardSize = level2CellSize * 3;
  const level1BoardSize = level1CellSize * 3;
  const level0BoardSize = level0CellSize * 3;

  const boardGap = level2CellSize * 0.5; // Gap between boards at level 2
  const levelHeight = level0BoardSize * 1.4; // Space between levels

  // Board state definitions (0 = empty, 1 = X, 2 = O)
  // Grid positions: 0=top-left, 1=top-mid, 2=top-right, 3=mid-left, 4=center, 5=mid-right, 6=bot-left, 7=bot-mid, 8=bot-right
  const boards = {
    A: [0, 0, 0, 0, 0, 0, 0, 0, 0],  // empty
    // Level 1: X first moves (corner, edge, center)
    B: [1, 0, 0, 0, 0, 0, 0, 0, 0],  // X__/___/___  (corner)
    C: [0, 1, 0, 0, 0, 0, 0, 0, 0],  // _X_/___/___  (edge)
    D: [0, 0, 0, 0, 1, 0, 0, 0, 0],  // ___/_X_/___  (center)
    // Children of B (corner X) - O responses
    E: [1, 0, 0, 2, 0, 0, 0, 0, 0],  // X__/O__/___
    F: [1, 0, 0, 0, 0, 0, 2, 0, 0],  // X__/___/O__
    G: [1, 0, 0, 0, 2, 0, 0, 0, 0],  // X__/_O_/___
    H: [1, 0, 0, 0, 0, 0, 0, 2, 0],  // X__/___/_O_
    I: [1, 0, 0, 0, 0, 0, 0, 0, 2],  // X__/___/__O
    // Children of C (edge X) - O responses
    J: [2, 1, 0, 0, 0, 0, 0, 0, 0],  // OX_/___/___
    K: [0, 1, 0, 2, 0, 0, 0, 0, 0],  // _X_/O__/___
    L: [0, 1, 0, 0, 0, 0, 2, 0, 0],  // _X_/___/O__
    M: [0, 1, 0, 0, 2, 0, 0, 0, 0],  // _X_/_O_/___
    N: [0, 1, 0, 0, 0, 0, 0, 2, 0],  // _X_/___/_O_
    // Children of D (center X) - O responses
    O: [2, 0, 0, 0, 1, 0, 0, 0, 0],  // O__/_X_/___
    P: [0, 2, 0, 0, 1, 0, 0, 0, 0],  // _O_/_X_/___
  };

  // Tree structure: each level 1 node has children at level 2
  const tree = [
    { board: 'B', children: ['E', 'F', 'G', 'H', 'I'] },
    { board: 'C', children: ['J', 'K', 'L', 'M', 'N'] },
    { board: 'D', children: ['O', 'P'] }
  ];

  // Calculate total width needed for level 2
  const level2Widths = tree.map(node => node.children.length * level2BoardSize + (node.children.length - 1) * boardGap);
  const groupGap = level2BoardSize * 0.75; // Gap between groups
  const totalLevel2Width = level2Widths.reduce((a, b) => a + b, 0) + (tree.length - 1) * groupGap;

  // Canvas dimensions
  const canvasWidth = Math.max(width, totalLevel2Width + level2BoardSize);
  const height = level0BoardSize + levelHeight * 2 + level2BoardSize + baseCellSize * 2;
  canvas.width = canvasWidth;
  canvas.height = height;

  // Get theme colors
  const fgColor = api.getColor('foreground');
  const mutedColor = api.getColor('muted-foreground');

  // Draw a single tic-tac-toe board (no label)
  // cellSz: cell size for this board
  function drawBoard(x, y, state, cellSz) {
    const brdSize = cellSz * 3;

    // Draw grid
    ctx.strokeStyle = mutedColor;
    ctx.lineWidth = 1;

    for (let i = 1; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(x + i * cellSz, y);
      ctx.lineTo(x + i * cellSz, y + brdSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, y + i * cellSz);
      ctx.lineTo(x + brdSize, y + i * cellSz);
      ctx.stroke();
    }

    // Draw X's and O's
    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const cellX = x + col * cellSz + cellSz / 2;
      const cellY = y + row * cellSz + cellSz / 2;

      if (state[i] === 1) {
        ctx.strokeStyle = fgColor;
        ctx.lineWidth = 2;
        const offset = cellSz * 0.25;
        ctx.beginPath();
        ctx.moveTo(cellX - offset, cellY - offset);
        ctx.lineTo(cellX + offset, cellY + offset);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cellX + offset, cellY - offset);
        ctx.lineTo(cellX - offset, cellY + offset);
        ctx.stroke();
      } else if (state[i] === 2) {
        ctx.strokeStyle = fgColor;
        ctx.lineWidth = 2;
        const radius = cellSz * 0.25;
        ctx.beginPath();
        ctx.arc(cellX, cellY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    return { x: x + brdSize / 2, y: y + brdSize / 2, size: brdSize };
  }

  // Padding between board edges and connector lines
  const connectorPadding = baseCellSize * 0.4;

  // Draw connecting line (paler using reduced opacity)
  function drawLine(x1, y1, x2, y2) {
    ctx.strokeStyle = fgColor;
    ctx.globalAlpha = 0.6;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }

  // Calculate positions for level 2 first (bottom-up layout)
  const level2Y = level0BoardSize + levelHeight * 2 - level2BoardSize;
  let currentX = (canvasWidth - totalLevel2Width) / 2;

  const level2Positions = [];
  const level1Centers = [];

  tree.forEach((node, groupIndex) => {
    const groupPositions = [];
    node.children.forEach((childBoard, childIndex) => {
      const x = currentX + childIndex * (level2BoardSize + boardGap);
      groupPositions.push({ board: childBoard, x, y: level2Y });
    });
    level2Positions.push(groupPositions);

    // Calculate level 1 center (above the middle of its children)
    const groupLeft = currentX;
    const groupRight = currentX + (node.children.length - 1) * (level2BoardSize + boardGap) + level2BoardSize;
    const level1CenterX = (groupLeft + groupRight) / 2;
    level1Centers.push({ board: node.board, centerX: level1CenterX });

    currentX = groupRight + groupGap;
  });

  // Level 1 Y position
  const level1Y = level0BoardSize + levelHeight - level1BoardSize / 2;

  // Level 0 (root) position - centered above level 1
  const rootX = canvasWidth / 2 - level0BoardSize / 2;
  const rootY = baseCellSize;
  const rootCenter = drawBoard(rootX, rootY, boards.A, level0CellSize);

  // Draw level 1 nodes and lines from root
  const level1Positions = level1Centers.map(item => ({
    board: item.board,
    x: item.centerX - level1BoardSize / 2,
    y: level1Y
  }));

  // Draw level 1 nodes with fanned-out lines from root
  const level1SpreadWidth = level0BoardSize * 0.6;
  level1Positions.forEach((pos, index) => {
    const center = drawBoard(pos.x, pos.y, boards[pos.board], level1CellSize);
    // Calculate spread-out start position on root board
    const numChildren = level1Positions.length;
    const startX = numChildren === 1
      ? rootCenter.x
      : rootCenter.x - level1SpreadWidth / 2 + (index * level1SpreadWidth / (numChildren - 1));
    drawLine(startX, rootCenter.y + level0BoardSize / 2 + connectorPadding, center.x, center.y - level1BoardSize / 2 - connectorPadding);
  });

  // Draw level 2 nodes and lines from level 1 with fanned-out connections
  // Spread width scales with number of children (max spread for 5 children)
  const maxSpreadWidth = level1BoardSize * 0.6;
  level2Positions.forEach((group, groupIndex) => {
    const parentPos = level1Positions[groupIndex];
    const parentCenter = { x: parentPos.x + level1BoardSize / 2, y: parentPos.y + level1BoardSize / 2 };

    const numChildren = group.length;
    // Scale spread based on number of children (fewer children = narrower spread)
    const level2SpreadWidth = numChildren <= 1 ? 0 : maxSpreadWidth * (numChildren - 1) / 4;

    group.forEach((pos, childIndex) => {
      const center = drawBoard(pos.x, pos.y, boards[pos.board], level2CellSize);
      // Calculate spread-out start position on parent board
      const startX = numChildren === 1
        ? parentCenter.x
        : parentCenter.x - level2SpreadWidth / 2 + (childIndex * level2SpreadWidth / (numChildren - 1));
      drawLine(startX, parentCenter.y + level1BoardSize / 2 + connectorPadding, center.x, center.y - level2BoardSize / 2 - connectorPadding);
    });

    // Draw "..." below each group
    ctx.fillStyle = mutedColor;
    ctx.font = \`\${Math.max(12, baseCellSize)}px \${api.getFont('default')}\`;
    ctx.textAlign = 'center';
    ctx.fillText('...', parentCenter.x, level2Y + level2BoardSize + baseCellSize);
  });
}
\`\`\`
:::

:::component[coin-game-tree]
\`\`\`js
function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  // Stage: 1 = neutral, 2 = leaves colored + sample node, 3 = all colored
  const stage = props.stage || 1;

  // Theme colors
  const fgColor = api.getColor('foreground');
  const mutedColor = api.getColor('muted-foreground');
  const isLight = api.theme === 'light';
  const playerAColor = isLight ? api.getColor('red-600', { chroma: 0.05 }) : api.getColor('red-300', { chroma: 0.05 });
  const playerBColor = isLight ? api.getColor('blue-600', { chroma: 0.05 }) : api.getColor('blue-300', { chroma: 0.05 });

  // Responsive sizing
  const baseUnit = Math.max(12, Math.min(28, width / 30));
  const nodeRadius = baseUnit * 1.2;
  const font = api.getFont('default');

  // Tree data structure
  // winner: who ultimately wins from this position (computed via backward induction)
  // leafWinner: only on leaf nodes, who won the game at that terminal state
  const tree = {
    coins: 4, player: 'A', winner: 'A', children: [
      { coins: 3, player: 'B', winner: 'A', children: [
        { coins: 2, player: 'A', winner: 'A', annotation: true, children: [
          { coins: 1, player: 'B', winner: 'B', children: [
            { coins: 0, isLeaf: true, leafWinner: 'B' }
          ]},
          { coins: 0, isLeaf: true, leafWinner: 'A' }
        ]},
        { coins: 1, player: 'A', winner: 'A', children: [
          { coins: 0, isLeaf: true, leafWinner: 'A' }
        ]}
      ]},
      { coins: 2, player: 'B', winner: 'B', children: [
        { coins: 1, player: 'A', winner: 'A', children: [
          { coins: 0, isLeaf: true, leafWinner: 'A' }
        ]},
        { coins: 0, isLeaf: true, leafWinner: 'B' }
      ]}
    ]
  };

  // Determine node color based on stage
  function getNodeColor(node) {
    if (stage === 1) return null; // neutral
    if (stage === 2) {
      if (node.isLeaf) return node.leafWinner === 'A' ? playerAColor : playerBColor;
      // Color internal nodes only if all descendants agree on winner
      const allDescendants = [];
      function collect(n) {
        if (n.isLeaf) { allDescendants.push(n.leafWinner); return; }
        if (n.children) n.children.forEach(collect);
      }
      collect(node);
      const allSame = allDescendants.every(w => w === allDescendants[0]);
      if (allSame) return allDescendants[0] === 'A' ? playerAColor : playerBColor;
      return null;
    }
    // stage 3: all nodes colored by winner
    if (node.isLeaf) return node.leafWinner === 'A' ? playerAColor : playerBColor;
    return node.winner === 'A' ? playerAColor : playerBColor;
  }

  // Layout calculations
  function countLeaves(node) {
    if (!node.children || node.children.length === 0) return 1;
    return node.children.reduce((sum, c) => sum + countLeaves(c), 0);
  }

  function getDepth(node) {
    if (!node.children || node.children.length === 0) return 0;
    return 1 + Math.max(...node.children.map(getDepth));
  }

  const totalLeaves = countLeaves(tree);
  const maxDepth = getDepth(tree);

  const hSpacing = nodeRadius * 4;
  const vSpacing = nodeRadius * 5;
  const topPadding = nodeRadius * 2;
  const bottomPadding = nodeRadius * 3;
  const annotationSpace = stage === 2 ? nodeRadius * 4 : 0;

  const treeWidth = (totalLeaves - 1) * hSpacing;
  const treeHeight = maxDepth * vSpacing;

  const canvasWidth = Math.max(width, treeWidth + nodeRadius * 4 + annotationSpace);
  const canvasHeight = treeHeight + topPadding + bottomPadding;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Assign positions bottom-up
  let leafIndex = 0;
  const treeLeft = (canvasWidth - treeWidth) / 2;

  function assignPositions(node, depth) {
    const y = topPadding + depth * vSpacing;
    if (!node.children || node.children.length === 0) {
      node.x = treeLeft + leafIndex * hSpacing;
      node.y = y;
      leafIndex++;
      return;
    }
    node.children.forEach(c => assignPositions(c, depth + 1));
    const childXs = node.children.map(c => c.x);
    node.x = (Math.min(...childXs) + Math.max(...childXs)) / 2;
    node.y = y;
  }

  assignPositions(tree, 0);

  // Draw arrow with arrowhead
  function drawArrow(x1, y1, x2, y2, color) {
    const headLen = baseUnit * 0.4;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const tipX = x2;
    const tipY = y2;

    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1.5, baseUnit * 0.08);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(tipX - headLen * Math.cos(angle), tipY - headLen * Math.sin(angle));
    ctx.stroke();

    // Arrowhead
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(tipX - headLen * Math.cos(angle - 0.35), tipY - headLen * Math.sin(angle - 0.35));
    ctx.lineTo(tipX - headLen * Math.cos(angle + 0.35), tipY - headLen * Math.sin(angle + 0.35));
    ctx.closePath();
    ctx.fill();
  }

  // Draw edges
  function drawEdges(node) {
    if (!node.children) return;
    node.children.forEach(child => {
      const edgeColor = node.player === 'A' ? playerAColor : playerBColor;
      drawArrow(node.x, node.y + nodeRadius, child.x, child.y - nodeRadius, edgeColor);

      // Edge label: at midpoint of the line, offset to the side
      const coinsTaken = node.coins - child.coins;
      const labelSize = Math.max(9, baseUnit * 0.42);
      const lineHeight = labelSize * 1.4;
      ctx.font = \`\${labelSize}px \${font}\`;
      ctx.fillStyle = edgeColor;
      ctx.textBaseline = 'middle';
      const midX = (node.x + child.x) / 2;
      const midY = (node.y + nodeRadius + child.y - nodeRadius) / 2;
      const numChildren = node.children.length;
      if (numChildren === 1) {
        // Single child: label to the right of the midpoint
        ctx.textAlign = 'left';
        ctx.fillText(\`take \${coinsTaken}\`, midX + lineHeight * 0.5, midY);
      } else {
        // Two children: left child label on left, right child label on right
        const isLeftChild = child.x < node.x || (child.x === node.x && node.children.indexOf(child) === 0);
        if (isLeftChild) {
          ctx.textAlign = 'right';
          ctx.fillText(\`take \${coinsTaken}\`, midX - lineHeight, midY);
        } else {
          ctx.textAlign = 'left';
          ctx.fillText(\`take \${coinsTaken}\`, midX + lineHeight, midY);
        }
      }

      drawEdges(child);
    });
  }

  drawEdges(tree);

  // Draw nodes
  function drawNode(node) {
    const { x, y } = node;
    const color = getNodeColor(node);
    const strokeColor = color || fgColor;
    const fillBgColor = color || fgColor;

    // Circle background
    ctx.fillStyle = fillBgColor;
    ctx.globalAlpha = color ? 0.15 : 0.04;
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    // Circle border
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = Math.max(1.5, baseUnit * 0.08);
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Coin count number
    const numSize = Math.max(12, baseUnit * 0.7);
    ctx.font = \`bold \${numSize}px \${font}\`;
    ctx.fillStyle = color || fgColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(\`\${node.coins}\`, x, y - numSize * 0.15);

    // "coins" label below the number (inside the circle)
    const coinsLabelSize = Math.max(8, baseUnit * 0.38);
    ctx.font = \`\${coinsLabelSize}px \${font}\`;
    ctx.fillStyle = color || fgColor;
    ctx.fillText(node.coins === 1 ? 'coin' : 'coins', x, y + numSize * 0.45);

    // Below-node label: "A wins" / "B wins" for leaf nodes
    if (node.isLeaf) {
      const winColor = node.leafWinner === 'A' ? playerAColor : playerBColor;
      const winSize = Math.max(8, baseUnit * 0.4);
      ctx.font = \`bold \${winSize}px \${font}\`;
      ctx.fillStyle = stage === 1 ? fgColor : winColor;
      ctx.fillText(node.leafWinner === 'A' ? 'You win' : 'Opponent wins', x, y + nodeRadius + winSize * 1.2);
    }

    // Annotation arrow for sample node (stage 2 only)
    if (node.annotation && stage === 2) {
      const arrowStartX = x - nodeRadius - baseUnit * 2;
      const arrowEndX = x - nodeRadius - baseUnit * 0.4;
      const arrowY = y;

      ctx.strokeStyle = fgColor;
      ctx.lineWidth = Math.max(1, baseUnit * 0.06);
      ctx.beginPath();
      ctx.moveTo(arrowStartX, arrowY);
      ctx.lineTo(arrowEndX, arrowY);
      ctx.stroke();

      // Arrowhead pointing right (toward node)
      const headSize = baseUnit * 0.25;
      ctx.fillStyle = fgColor;
      ctx.beginPath();
      ctx.moveTo(arrowEndX, arrowY);
      ctx.lineTo(arrowEndX - headSize, arrowY - headSize * 0.6);
      ctx.lineTo(arrowEndX - headSize, arrowY + headSize * 0.6);
      ctx.closePath();
      ctx.fill();

      const annotSize = Math.max(8, baseUnit * 0.42);
      ctx.font = \`italic \${annotSize}px \${font}\`;
      ctx.fillStyle = fgColor;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText('Node S', arrowStartX - baseUnit * 0.3, arrowY);
    }

    if (node.children) node.children.forEach(drawNode);
  }

  drawNode(tree);
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#tic-tac-toe-tree",title:"Tic-tac-toe game tree showing first two levels of moves",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/adversarial-games.md"},{type:"dynamic",mode:"component",componentId:"#coin-game-tree",props:{stage:1},title:"Game tree for the stack of coins game with 4 coins",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/adversarial-games.md"},{type:"dynamic",mode:"component",componentId:"#coin-game-tree",props:{stage:2},title:"Game tree with leaf nodes and simple branches colored",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/adversarial-games.md"},{type:"dynamic",mode:"component",componentId:"#coin-game-tree",props:{stage:3},title:"Fully colored game tree showing winning positions",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/adversarial-games.md"}],inlineComponents:{"tic-tac-toe-tree":{id:"tic-tac-toe-tree",code:`function draw(options) {
  const { canvas, api, width } = options;
  const ctx = canvas.getContext('2d');

  // Calculate responsive sizing - base unit for level 2 (smallest boards)
  const baseCellSize = Math.max(10, Math.min(30, width / 50));

  // Different sizes for each level
  const level2CellSize = baseCellSize;          // Level 2: base size (1x)
  const level1CellSize = baseCellSize * 1.5;      // Level 1: 1.5x bigger
  const level0CellSize = baseCellSize * 2;      // Level 0 (root): 2x bigger

  const level2BoardSize = level2CellSize * 3;
  const level1BoardSize = level1CellSize * 3;
  const level0BoardSize = level0CellSize * 3;

  const boardGap = level2CellSize * 0.5; // Gap between boards at level 2
  const levelHeight = level0BoardSize * 1.4; // Space between levels

  // Board state definitions (0 = empty, 1 = X, 2 = O)
  // Grid positions: 0=top-left, 1=top-mid, 2=top-right, 3=mid-left, 4=center, 5=mid-right, 6=bot-left, 7=bot-mid, 8=bot-right
  const boards = {
    A: [0, 0, 0, 0, 0, 0, 0, 0, 0],  // empty
    // Level 1: X first moves (corner, edge, center)
    B: [1, 0, 0, 0, 0, 0, 0, 0, 0],  // X__/___/___  (corner)
    C: [0, 1, 0, 0, 0, 0, 0, 0, 0],  // _X_/___/___  (edge)
    D: [0, 0, 0, 0, 1, 0, 0, 0, 0],  // ___/_X_/___  (center)
    // Children of B (corner X) - O responses
    E: [1, 0, 0, 2, 0, 0, 0, 0, 0],  // X__/O__/___
    F: [1, 0, 0, 0, 0, 0, 2, 0, 0],  // X__/___/O__
    G: [1, 0, 0, 0, 2, 0, 0, 0, 0],  // X__/_O_/___
    H: [1, 0, 0, 0, 0, 0, 0, 2, 0],  // X__/___/_O_
    I: [1, 0, 0, 0, 0, 0, 0, 0, 2],  // X__/___/__O
    // Children of C (edge X) - O responses
    J: [2, 1, 0, 0, 0, 0, 0, 0, 0],  // OX_/___/___
    K: [0, 1, 0, 2, 0, 0, 0, 0, 0],  // _X_/O__/___
    L: [0, 1, 0, 0, 0, 0, 2, 0, 0],  // _X_/___/O__
    M: [0, 1, 0, 0, 2, 0, 0, 0, 0],  // _X_/_O_/___
    N: [0, 1, 0, 0, 0, 0, 0, 2, 0],  // _X_/___/_O_
    // Children of D (center X) - O responses
    O: [2, 0, 0, 0, 1, 0, 0, 0, 0],  // O__/_X_/___
    P: [0, 2, 0, 0, 1, 0, 0, 0, 0],  // _O_/_X_/___
  };

  // Tree structure: each level 1 node has children at level 2
  const tree = [
    { board: 'B', children: ['E', 'F', 'G', 'H', 'I'] },
    { board: 'C', children: ['J', 'K', 'L', 'M', 'N'] },
    { board: 'D', children: ['O', 'P'] }
  ];

  // Calculate total width needed for level 2
  const level2Widths = tree.map(node => node.children.length * level2BoardSize + (node.children.length - 1) * boardGap);
  const groupGap = level2BoardSize * 0.75; // Gap between groups
  const totalLevel2Width = level2Widths.reduce((a, b) => a + b, 0) + (tree.length - 1) * groupGap;

  // Canvas dimensions
  const canvasWidth = Math.max(width, totalLevel2Width + level2BoardSize);
  const height = level0BoardSize + levelHeight * 2 + level2BoardSize + baseCellSize * 2;
  canvas.width = canvasWidth;
  canvas.height = height;

  // Get theme colors
  const fgColor = api.getColor('foreground');
  const mutedColor = api.getColor('muted-foreground');

  // Draw a single tic-tac-toe board (no label)
  // cellSz: cell size for this board
  function drawBoard(x, y, state, cellSz) {
    const brdSize = cellSz * 3;

    // Draw grid
    ctx.strokeStyle = mutedColor;
    ctx.lineWidth = 1;

    for (let i = 1; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(x + i * cellSz, y);
      ctx.lineTo(x + i * cellSz, y + brdSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, y + i * cellSz);
      ctx.lineTo(x + brdSize, y + i * cellSz);
      ctx.stroke();
    }

    // Draw X's and O's
    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const cellX = x + col * cellSz + cellSz / 2;
      const cellY = y + row * cellSz + cellSz / 2;

      if (state[i] === 1) {
        ctx.strokeStyle = fgColor;
        ctx.lineWidth = 2;
        const offset = cellSz * 0.25;
        ctx.beginPath();
        ctx.moveTo(cellX - offset, cellY - offset);
        ctx.lineTo(cellX + offset, cellY + offset);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cellX + offset, cellY - offset);
        ctx.lineTo(cellX - offset, cellY + offset);
        ctx.stroke();
      } else if (state[i] === 2) {
        ctx.strokeStyle = fgColor;
        ctx.lineWidth = 2;
        const radius = cellSz * 0.25;
        ctx.beginPath();
        ctx.arc(cellX, cellY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    return { x: x + brdSize / 2, y: y + brdSize / 2, size: brdSize };
  }

  // Padding between board edges and connector lines
  const connectorPadding = baseCellSize * 0.4;

  // Draw connecting line (paler using reduced opacity)
  function drawLine(x1, y1, x2, y2) {
    ctx.strokeStyle = fgColor;
    ctx.globalAlpha = 0.6;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }

  // Calculate positions for level 2 first (bottom-up layout)
  const level2Y = level0BoardSize + levelHeight * 2 - level2BoardSize;
  let currentX = (canvasWidth - totalLevel2Width) / 2;

  const level2Positions = [];
  const level1Centers = [];

  tree.forEach((node, groupIndex) => {
    const groupPositions = [];
    node.children.forEach((childBoard, childIndex) => {
      const x = currentX + childIndex * (level2BoardSize + boardGap);
      groupPositions.push({ board: childBoard, x, y: level2Y });
    });
    level2Positions.push(groupPositions);

    // Calculate level 1 center (above the middle of its children)
    const groupLeft = currentX;
    const groupRight = currentX + (node.children.length - 1) * (level2BoardSize + boardGap) + level2BoardSize;
    const level1CenterX = (groupLeft + groupRight) / 2;
    level1Centers.push({ board: node.board, centerX: level1CenterX });

    currentX = groupRight + groupGap;
  });

  // Level 1 Y position
  const level1Y = level0BoardSize + levelHeight - level1BoardSize / 2;

  // Level 0 (root) position - centered above level 1
  const rootX = canvasWidth / 2 - level0BoardSize / 2;
  const rootY = baseCellSize;
  const rootCenter = drawBoard(rootX, rootY, boards.A, level0CellSize);

  // Draw level 1 nodes and lines from root
  const level1Positions = level1Centers.map(item => ({
    board: item.board,
    x: item.centerX - level1BoardSize / 2,
    y: level1Y
  }));

  // Draw level 1 nodes with fanned-out lines from root
  const level1SpreadWidth = level0BoardSize * 0.6;
  level1Positions.forEach((pos, index) => {
    const center = drawBoard(pos.x, pos.y, boards[pos.board], level1CellSize);
    // Calculate spread-out start position on root board
    const numChildren = level1Positions.length;
    const startX = numChildren === 1
      ? rootCenter.x
      : rootCenter.x - level1SpreadWidth / 2 + (index * level1SpreadWidth / (numChildren - 1));
    drawLine(startX, rootCenter.y + level0BoardSize / 2 + connectorPadding, center.x, center.y - level1BoardSize / 2 - connectorPadding);
  });

  // Draw level 2 nodes and lines from level 1 with fanned-out connections
  // Spread width scales with number of children (max spread for 5 children)
  const maxSpreadWidth = level1BoardSize * 0.6;
  level2Positions.forEach((group, groupIndex) => {
    const parentPos = level1Positions[groupIndex];
    const parentCenter = { x: parentPos.x + level1BoardSize / 2, y: parentPos.y + level1BoardSize / 2 };

    const numChildren = group.length;
    // Scale spread based on number of children (fewer children = narrower spread)
    const level2SpreadWidth = numChildren <= 1 ? 0 : maxSpreadWidth * (numChildren - 1) / 4;

    group.forEach((pos, childIndex) => {
      const center = drawBoard(pos.x, pos.y, boards[pos.board], level2CellSize);
      // Calculate spread-out start position on parent board
      const startX = numChildren === 1
        ? parentCenter.x
        : parentCenter.x - level2SpreadWidth / 2 + (childIndex * level2SpreadWidth / (numChildren - 1));
      drawLine(startX, parentCenter.y + level1BoardSize / 2 + connectorPadding, center.x, center.y - level2BoardSize / 2 - connectorPadding);
    });

    // Draw "..." below each group
    ctx.fillStyle = mutedColor;
    ctx.font = \`\${Math.max(12, baseCellSize)}px \${api.getFont('default')}\`;
    ctx.textAlign = 'center';
    ctx.fillText('...', parentCenter.x, level2Y + level2BoardSize + baseCellSize);
  });
}`,startLine:136},"coin-game-tree":{id:"coin-game-tree",code:`function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  // Stage: 1 = neutral, 2 = leaves colored + sample node, 3 = all colored
  const stage = props.stage || 1;

  // Theme colors
  const fgColor = api.getColor('foreground');
  const mutedColor = api.getColor('muted-foreground');
  const isLight = api.theme === 'light';
  const playerAColor = isLight ? api.getColor('red-600', { chroma: 0.05 }) : api.getColor('red-300', { chroma: 0.05 });
  const playerBColor = isLight ? api.getColor('blue-600', { chroma: 0.05 }) : api.getColor('blue-300', { chroma: 0.05 });

  // Responsive sizing
  const baseUnit = Math.max(12, Math.min(28, width / 30));
  const nodeRadius = baseUnit * 1.2;
  const font = api.getFont('default');

  // Tree data structure
  // winner: who ultimately wins from this position (computed via backward induction)
  // leafWinner: only on leaf nodes, who won the game at that terminal state
  const tree = {
    coins: 4, player: 'A', winner: 'A', children: [
      { coins: 3, player: 'B', winner: 'A', children: [
        { coins: 2, player: 'A', winner: 'A', annotation: true, children: [
          { coins: 1, player: 'B', winner: 'B', children: [
            { coins: 0, isLeaf: true, leafWinner: 'B' }
          ]},
          { coins: 0, isLeaf: true, leafWinner: 'A' }
        ]},
        { coins: 1, player: 'A', winner: 'A', children: [
          { coins: 0, isLeaf: true, leafWinner: 'A' }
        ]}
      ]},
      { coins: 2, player: 'B', winner: 'B', children: [
        { coins: 1, player: 'A', winner: 'A', children: [
          { coins: 0, isLeaf: true, leafWinner: 'A' }
        ]},
        { coins: 0, isLeaf: true, leafWinner: 'B' }
      ]}
    ]
  };

  // Determine node color based on stage
  function getNodeColor(node) {
    if (stage === 1) return null; // neutral
    if (stage === 2) {
      if (node.isLeaf) return node.leafWinner === 'A' ? playerAColor : playerBColor;
      // Color internal nodes only if all descendants agree on winner
      const allDescendants = [];
      function collect(n) {
        if (n.isLeaf) { allDescendants.push(n.leafWinner); return; }
        if (n.children) n.children.forEach(collect);
      }
      collect(node);
      const allSame = allDescendants.every(w => w === allDescendants[0]);
      if (allSame) return allDescendants[0] === 'A' ? playerAColor : playerBColor;
      return null;
    }
    // stage 3: all nodes colored by winner
    if (node.isLeaf) return node.leafWinner === 'A' ? playerAColor : playerBColor;
    return node.winner === 'A' ? playerAColor : playerBColor;
  }

  // Layout calculations
  function countLeaves(node) {
    if (!node.children || node.children.length === 0) return 1;
    return node.children.reduce((sum, c) => sum + countLeaves(c), 0);
  }

  function getDepth(node) {
    if (!node.children || node.children.length === 0) return 0;
    return 1 + Math.max(...node.children.map(getDepth));
  }

  const totalLeaves = countLeaves(tree);
  const maxDepth = getDepth(tree);

  const hSpacing = nodeRadius * 4;
  const vSpacing = nodeRadius * 5;
  const topPadding = nodeRadius * 2;
  const bottomPadding = nodeRadius * 3;
  const annotationSpace = stage === 2 ? nodeRadius * 4 : 0;

  const treeWidth = (totalLeaves - 1) * hSpacing;
  const treeHeight = maxDepth * vSpacing;

  const canvasWidth = Math.max(width, treeWidth + nodeRadius * 4 + annotationSpace);
  const canvasHeight = treeHeight + topPadding + bottomPadding;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Assign positions bottom-up
  let leafIndex = 0;
  const treeLeft = (canvasWidth - treeWidth) / 2;

  function assignPositions(node, depth) {
    const y = topPadding + depth * vSpacing;
    if (!node.children || node.children.length === 0) {
      node.x = treeLeft + leafIndex * hSpacing;
      node.y = y;
      leafIndex++;
      return;
    }
    node.children.forEach(c => assignPositions(c, depth + 1));
    const childXs = node.children.map(c => c.x);
    node.x = (Math.min(...childXs) + Math.max(...childXs)) / 2;
    node.y = y;
  }

  assignPositions(tree, 0);

  // Draw arrow with arrowhead
  function drawArrow(x1, y1, x2, y2, color) {
    const headLen = baseUnit * 0.4;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const tipX = x2;
    const tipY = y2;

    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1.5, baseUnit * 0.08);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(tipX - headLen * Math.cos(angle), tipY - headLen * Math.sin(angle));
    ctx.stroke();

    // Arrowhead
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(tipX - headLen * Math.cos(angle - 0.35), tipY - headLen * Math.sin(angle - 0.35));
    ctx.lineTo(tipX - headLen * Math.cos(angle + 0.35), tipY - headLen * Math.sin(angle + 0.35));
    ctx.closePath();
    ctx.fill();
  }

  // Draw edges
  function drawEdges(node) {
    if (!node.children) return;
    node.children.forEach(child => {
      const edgeColor = node.player === 'A' ? playerAColor : playerBColor;
      drawArrow(node.x, node.y + nodeRadius, child.x, child.y - nodeRadius, edgeColor);

      // Edge label: at midpoint of the line, offset to the side
      const coinsTaken = node.coins - child.coins;
      const labelSize = Math.max(9, baseUnit * 0.42);
      const lineHeight = labelSize * 1.4;
      ctx.font = \`\${labelSize}px \${font}\`;
      ctx.fillStyle = edgeColor;
      ctx.textBaseline = 'middle';
      const midX = (node.x + child.x) / 2;
      const midY = (node.y + nodeRadius + child.y - nodeRadius) / 2;
      const numChildren = node.children.length;
      if (numChildren === 1) {
        // Single child: label to the right of the midpoint
        ctx.textAlign = 'left';
        ctx.fillText(\`take \${coinsTaken}\`, midX + lineHeight * 0.5, midY);
      } else {
        // Two children: left child label on left, right child label on right
        const isLeftChild = child.x < node.x || (child.x === node.x && node.children.indexOf(child) === 0);
        if (isLeftChild) {
          ctx.textAlign = 'right';
          ctx.fillText(\`take \${coinsTaken}\`, midX - lineHeight, midY);
        } else {
          ctx.textAlign = 'left';
          ctx.fillText(\`take \${coinsTaken}\`, midX + lineHeight, midY);
        }
      }

      drawEdges(child);
    });
  }

  drawEdges(tree);

  // Draw nodes
  function drawNode(node) {
    const { x, y } = node;
    const color = getNodeColor(node);
    const strokeColor = color || fgColor;
    const fillBgColor = color || fgColor;

    // Circle background
    ctx.fillStyle = fillBgColor;
    ctx.globalAlpha = color ? 0.15 : 0.04;
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    // Circle border
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = Math.max(1.5, baseUnit * 0.08);
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Coin count number
    const numSize = Math.max(12, baseUnit * 0.7);
    ctx.font = \`bold \${numSize}px \${font}\`;
    ctx.fillStyle = color || fgColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(\`\${node.coins}\`, x, y - numSize * 0.15);

    // "coins" label below the number (inside the circle)
    const coinsLabelSize = Math.max(8, baseUnit * 0.38);
    ctx.font = \`\${coinsLabelSize}px \${font}\`;
    ctx.fillStyle = color || fgColor;
    ctx.fillText(node.coins === 1 ? 'coin' : 'coins', x, y + numSize * 0.45);

    // Below-node label: "A wins" / "B wins" for leaf nodes
    if (node.isLeaf) {
      const winColor = node.leafWinner === 'A' ? playerAColor : playerBColor;
      const winSize = Math.max(8, baseUnit * 0.4);
      ctx.font = \`bold \${winSize}px \${font}\`;
      ctx.fillStyle = stage === 1 ? fgColor : winColor;
      ctx.fillText(node.leafWinner === 'A' ? 'You win' : 'Opponent wins', x, y + nodeRadius + winSize * 1.2);
    }

    // Annotation arrow for sample node (stage 2 only)
    if (node.annotation && stage === 2) {
      const arrowStartX = x - nodeRadius - baseUnit * 2;
      const arrowEndX = x - nodeRadius - baseUnit * 0.4;
      const arrowY = y;

      ctx.strokeStyle = fgColor;
      ctx.lineWidth = Math.max(1, baseUnit * 0.06);
      ctx.beginPath();
      ctx.moveTo(arrowStartX, arrowY);
      ctx.lineTo(arrowEndX, arrowY);
      ctx.stroke();

      // Arrowhead pointing right (toward node)
      const headSize = baseUnit * 0.25;
      ctx.fillStyle = fgColor;
      ctx.beginPath();
      ctx.moveTo(arrowEndX, arrowY);
      ctx.lineTo(arrowEndX - headSize, arrowY - headSize * 0.6);
      ctx.lineTo(arrowEndX - headSize, arrowY + headSize * 0.6);
      ctx.closePath();
      ctx.fill();

      const annotSize = Math.max(8, baseUnit * 0.42);
      ctx.font = \`italic \${annotSize}px \${font}\`;
      ctx.fillStyle = fgColor;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText('Node S', arrowStartX - baseUnit * 0.3, arrowY);
    }

    if (node.children) node.children.forEach(drawNode);
  }

  drawNode(tree);
}`,startLine:353}}};export{e as default};
