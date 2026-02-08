const a={slug:"chomp-4",metadata:{id:"puzzle-31",title:"Chomp 4",difficulty:{concepts:"hard",reasoning:"hard"},concepts:["adversarial-game"],tags:["has-solution"],credit:"Puzzle concept from David Gale’s chocolate-bar formulation of Chomp. Question and solution written by Puzzlestone Peak.",previousPuzzle:"chomp-3",dateCreated:"2025-11-10",lastUpdated:"2025-11-10",preview:"After beating your friend at his game 3 times already, you wonder if there’s always a way to win for an n by m chocolate bar. As a reminder, here are the rules...",websitePreview:"After beating your friend at his game 3 times already, you wonder if there’s always a way to win for an n by m chocolate bar. As a reminder, here are the rules..."},content:`<p>After beating your friend at his game 3 times already, you wonder if there’s always a way to win for an <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> by <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>m</mi></mrow><annotation>m</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> chocolate bar. As a reminder, here are the rules of the game:</p>
<ul>
<li>You’re given a chocolate bar made of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> by <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>m</mi></mrow><annotation>m</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> squares.</li>
<li>You and another person will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square.</li>
<li>You must eat at least one square on your turn, and you cannot skip your turn.</li>
<li>Whoever eats the mouldy square loses.</li>
</ul>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Should you go first or second? Does this decision depend on the dimensions of the chocolate bar?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Solving the general form of the game is very difficult. We don’t know how to find a general solution beyond brute force.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You’ll always want to go first.</p><p>Let’s call the players A and B, with player A going first. We want to show that player A will always win with the “Strategy-stealing” argument.</p><p>Let’s assume the opposite: that player B can always win, no matter what moves player A performs. For the first move, player A takes the top-right square. By definition, player B will have an optimal response that puts player A in a losing position.</p><p>However, any move that player B makes at this point is also something that player A could’ve taken on his first move, leaving the board in the exact same losing state to player B.</p><p>This contradicts our earlier assumption that player B can always win, and proves that the first player always wins.</p></div></details>`,rawContent:`
After beating your friend at his game 3 times already, you wonder if there’s always a way to win for an $n$ by $m$ chocolate bar. As a reminder, here are the rules of the game:

- You’re given a chocolate bar made of $n$ by $m$ squares.  
- You and another person will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square.  
- You must eat at least one square on your turn, and you cannot skip your turn.  
- Whoever eats the mouldy square loses.

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
    - ['#', '#', '#', '#', '*⋯', '#']
    - ['*⋮', '*⋮', '*⋮', '*⋮', '*⋰', '*⋮']
    - ['#', '#', '#', '#', '*⋯', '#']
    - ['#', '#', '#', '#', '*⋯', '#']
    - ['#', '#', '#', '#', '*⋯', '#']
    - ['@', '#', '#', '#', '*⋯', '#']
\`\`\`
:::

Should you go first or second? Does this decision depend on the dimensions of the chocolate bar?

:::hint
Solving the general form of the game is very difficult. We don’t know how to find a general solution beyond brute force.
:::

:::solution

You’ll always want to go first.

Let’s call the players A and B, with player A going first. We want to show that player A will always win with the “Strategy-stealing” argument.

Let’s assume the opposite: that player B can always win, no matter what moves player A performs. For the first move, player A takes the top-right square. By definition, player B will have an optimal response that puts player A in a losing position.

However, any move that player B makes at this point is also something that player A could’ve taken on his first move, leaving the board in the exact same losing state to player B.

This contradicts our earlier assumption that player B can always win, and proves that the first player always wins.
:::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#","#","#","#","*⋯","#"],["*⋮","*⋮","*⋮","*⋮","*⋰","*⋮"],["#","#","#","#","*⋯","#"],["#","#","#","#","*⋯","#"],["#","#","#","#","*⋯","#"],["@","#","#","#","*⋯","#"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-4.md"}],inlineComponents:{}};export{a as default};
