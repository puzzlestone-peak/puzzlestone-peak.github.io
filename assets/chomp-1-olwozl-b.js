const e={slug:"chomp-1",metadata:{id:"puzzle-29",title:"Chomp 1",difficulty:"medium",concepts:["adversarial-games"],tags:["has-solution"],credit:"Puzzle concept from David Gale's chocolate-bar formulation of Chomp. Question and solution written by Puzzlestone Peak.",nextPuzzle:"chomp-2",dateCreated:"2025-11-10",lastUpdated:"2025-11-10",preview:"You are playing a dangerous game with a friend. He pulls out a chocolate bar comprising 6 squares arranged in a 3 by 2 arrangement. The bottom-left square is...",websitePreview:"You are playing a dangerous game with a friend. He pulls out a chocolate bar comprising 6 squares arranged in a 3 by 2 arrangement. The bottom-left square is..."},content:`<p>You are playing a dangerous game with a friend. He pulls out a chocolate bar comprising 6 squares arranged in a 3 by 2 arrangement. The bottom-left square is mouldy, giving whoever eats it violent gastrointestinal issues..</p>
<p>Here’s how the game works: you will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square. You must eat at least one square on your turn, and you cannot skip your turn.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Should you go first or second? And how will you ensure that you don’t eat the mouldy square?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The winning strategy is to go first and take the top right square of the chocolate.</p><p>To win, we need to leave the other player with only the mouldy chocolate, leaving them with no choice but to eat it. Let’s consider the following arrangement of chocolate, which we will call “Position L”:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>If we take either piece A or B, the other player can take the other piece, forcing you to eat the mouldy square. There is no way to win from here: the opponent can always force you to lose. But there’s a bright side: if you can force your opponent into this position, you can force them to lose.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Now let’s consider the chocolate bar. You go first, taking the top-right piece.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><ul>
<li>If the other player takes 1, you take 5. If the other player takes 5, you take 1.
<ul>
<li>This leaves them with the mouldy square.</li>
</ul>
</li>
<li>If the other player takes 2, you take 6. If the other player takes 6, you take 2.
<ul>
<li>This leaves them in position L in which we can force them to lose.</li>
</ul>
</li>
</ul><p>No matter what, we can leave the other player with the mouldy square, guaranteeing a win for us.</p></div></details>`,rawContent:`
You are playing a dangerous game with a friend. He pulls out a chocolate bar comprising 6 squares arranged in a 3 by 2 arrangement. The bottom-left square is mouldy, giving whoever eats it violent gastrointestinal issues..

Here’s how the game works: you will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square. You must eat at least one square on your turn, and you cannot skip your turn.

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
   - ['#', '#', '#']
   - ['@', '#', '#']
\`\`\`
:::

Should you go first or second? And how will you ensure that you don’t eat the mouldy square?

::::solution

The winning strategy is to go first and take the top right square of the chocolate.

To win, we need to leave the other player with only the mouldy chocolate, leaving them with no choice but to eat it. Let’s consider the following arrangement of chocolate, which we will call “Position L”:

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
   - ['#A']
   - ['@', '#B']
\`\`\`
:::

If we take either piece A or B, the other player can take the other piece, forcing you to eat the mouldy square. There is no way to win from here: the opponent can always force you to lose. But there’s a bright side: if you can force your opponent into this position, you can force them to lose.

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
   - ['#1', '#2', '#3']
   - ['@' , '#5', '#6']
\`\`\`
:::

Now let’s consider the chocolate bar. You go first, taking the top-right piece.

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
   - ['#1', '#2']
   - ['@' , '#5', '#6']
\`\`\`
:::

- If the other player takes 1, you take 5. If the other player takes 5, you take 1.
  - This leaves them with the mouldy square.  
- If the other player takes 2, you take 6. If the other player takes 6, you take 2.  
  - This leaves them in position L in which we can force them to lose.

No matter what, we can leave the other player with the mouldy square, guaranteeing a win for us.
::::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#","#","#"],["@","#","#"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-1.md"},{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#A"],["@","#B"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-1.md"},{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#1","#2","#3"],["@","#5","#6"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-1.md"},{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#1","#2"],["@","#5","#6"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-1.md"}],inlineComponents:{}};export{e as default};
