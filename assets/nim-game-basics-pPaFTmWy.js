const e={slug:"nim-game-basics",metadata:{title:"Nim Game: The Basics",questionPreview:`There are 12 stones in a pile. You and your opponent take turns removing 1, 2, or 3 stones. The player who takes the last stone wins. You go first. Can you guarantee a win?
`,concepts:["game-theory","strategy","nim"],difficulty:"easy",tags:["interactive","game","series"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",nextPuzzle:"nim-game-strategy"},content:`<h2 class="markdown-h1">The Game</h2>
<p>You're playing a game with the following rules:</p>
<ul>
<li>Start with 12 stones in a pile</li>
<li>Players alternate turns</li>
<li>On your turn, you must remove 1, 2, or 3 stones</li>
<li>The player who takes the last stone wins</li>
<li>You go first</li>
</ul>
<h2 class="markdown-h1">The Question</h2>
<p>Can you guarantee a win? If so, what's your winning strategy?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Work backwards from the end. What positions force your opponent to lose?</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Positions of Power</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>If you leave your opponent with 4 stones, they can't prevent you from taking the last stone.</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: Yes! Take 3 stones on your first move, then mirror your opponent's moves.</p><p>If there are 4 stones left on your opponent's turn, you've won:</p><ul>
<li>If they take 1, you take 3 (last stone)</li>
<li>If they take 2, you take 2 (last stone)</li>
<li>If they take 3, you take 1 (last stone)</li>
</ul><p>The winning strategy:</p><ol>
<li>Take 3 stones initially (leaving 9)</li>
<li>After each of their moves, take enough stones so that the total removed (yours + theirs) equals 4</li>
</ol><p>For example:</p><ul>
<li>Start: 12 stones</li>
<li>You take 3 → 9 stones remain</li>
<li>They take 2 → 7 stones remain</li>
<li>You take 2 (total of 4) → 5 stones remain</li>
<li>They take 1 → 4 stones remain</li>
<li>You take 3 (total of 4) → 1 stone remains</li>
<li>They take 1 → 0 stones remain</li>
<li>You win!</li>
</ul><p>The key insight: positions where the number of stones is a multiple of 4 are losing positions for the player whose turn it is. By taking 3 stones first, you leave 9 stones (not divisible by 4), forcing your opponent into a losing position.</p><p>Want to explore more? Continue to <strong>Nim Game: Advanced Strategy</strong> to learn about winning positions for any starting number.</p></div></details>`,rawContent:`
# The Game

You're playing a game with the following rules:
- Start with 12 stones in a pile
- Players alternate turns
- On your turn, you must remove 1, 2, or 3 stones
- The player who takes the last stone wins
- You go first

# The Question

Can you guarantee a win? If so, what's your winning strategy?

:::hint
Work backwards from the end. What positions force your opponent to lose?
:::

:::hint[Positions of Power]
If you leave your opponent with 4 stones, they can't prevent you from taking the last stone.
:::

:::solution
**Answer**: Yes! Take 3 stones on your first move, then mirror your opponent's moves.

If there are 4 stones left on your opponent's turn, you've won:
- If they take 1, you take 3 (last stone)
- If they take 2, you take 2 (last stone)
- If they take 3, you take 1 (last stone)

The winning strategy:
1. Take 3 stones initially (leaving 9)
2. After each of their moves, take enough stones so that the total removed (yours + theirs) equals 4

For example:
- Start: 12 stones
- You take 3 → 9 stones remain
- They take 2 → 7 stones remain
- You take 2 (total of 4) → 5 stones remain
- They take 1 → 4 stones remain
- You take 3 (total of 4) → 1 stone remains
- They take 1 → 0 stones remain
- You win!

The key insight: positions where the number of stones is a multiple of 4 are losing positions for the player whose turn it is. By taking 3 stones first, you leave 9 stones (not divisible by 4), forcing your opponent into a losing position.

Want to explore more? Continue to **Nim Game: Advanced Strategy** to learn about winning positions for any starting number.
:::
`,dynamicBlocks:[]};export{e as default};
