const e={slug:"chomp-2",metadata:{id:"puzzle-29",title:"Chomp 2",difficulty:{concepts:"medium",reasoning:"medium"},concepts:["adversarial-game"],tags:["has-solution"],credit:"Puzzle concept from David Gale’s chocolate-bar formulation of Chomp. Question and solution written by Puzzlestone Peak.",previousPuzzle:"chomp-1",nextPuzzle:"chomp-3",dateCreated:"2025-11-10",lastUpdated:"2025-11-10",preview:"After winning the previous game, your friend is back for revenge. This time, he has a chocolate bar made of n by n squares. The same rules apply: You will take...",websitePreview:"After winning the previous game, your friend is back for revenge. This time, he has a chocolate bar made of n by n squares. The same rules apply: You will take..."},content:`<p>After winning the previous game, your friend is back for revenge. This time, he has a chocolate bar made of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> by <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> squares. The same rules apply:</p>
<ul>
<li>You will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square.</li>
<li>You must eat at least one square on your turn, and you cannot skip your turn.</li>
<li>Whoever eats the mouldy square loses.</li>
</ul>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Should you go first or second? And how will you ensure that you don’t eat the mouldy square?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Choose to go first, eating the square to the top-right of the mouldy square. This leaves the chocolate bar with the following shape:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>On your friend’s turn, he’ll be able to remove squares from either the horizontal or vertical line, but not both. If he removes squares from one of the lines, you remove the same number of squares from the other line. This way, you’ll always be able to force him to eat the mouldy square.</p></div></details>`,rawContent:`
After winning the previous game, your friend is back for revenge. This time, he has a chocolate bar made of $n$ by $n$ squares. The same rules apply:

- You will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square.  
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

Should you go first or second? And how will you ensure that you don’t eat the mouldy square?

::::solution

Choose to go first, eating the square to the top-right of the mouldy square. This leaves the chocolate bar with the following shape:

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
   - ['#']
   - ['*⋮']
   - ['#']
   - ['#']
   - ['#']
   - ['@', '#', '#', '#', '*⋯', '#']
\`\`\`
:::

On your friend’s turn, he’ll be able to remove squares from either the horizontal or vertical line, but not both. If he removes squares from one of the lines, you remove the same number of squares from the other line. This way, you’ll always be able to force him to eat the mouldy square.
::::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#","#","#","#","*⋯","#"],["*⋮","*⋮","*⋮","*⋮","*⋰","*⋮"],["#","#","#","#","*⋯","#"],["#","#","#","#","*⋯","#"],["#","#","#","#","*⋯","#"],["@","#","#","#","*⋯","#"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-2.md"},{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#"],["*⋮"],["#"],["#"],["#"],["@","#","#","#","*⋯","#"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-2.md"}],inlineComponents:{}};export{e as default};
