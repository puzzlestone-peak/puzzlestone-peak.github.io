const a={slug:"chomp-3",metadata:{id:"puzzle-31",title:"Chomp 3",difficulty:{concepts:"medium",reasoning:"medium"},concepts:["adversarial-game"],tags:["has-solution"],credit:"Puzzle concept from David Gale’s chocolate-bar formulation of Chomp. Question and solution written by Puzzlestone Peak.",previousPuzzle:"chomp-2",nextPuzzle:"chomp-4",dateCreated:"2025-11-10",lastUpdated:"2025-11-10",preview:"Even after losing the previous 2 games to you, it appears that your friend has not yet learnt his lesson. This time, he has a rectangular chocolate bar made of...",websitePreview:"Even after losing the previous 2 games to you, it appears that your friend has not yet learnt his lesson. This time, he has a rectangular chocolate bar made of..."},content:`<p>Even after losing the previous 2 games to you, it appears that your friend has not yet learnt his lesson. This time, he has a rectangular chocolate bar made of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn></mrow><annotation>2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> by <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> squares. The same rules apply:</p>
<ul>
<li>You will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square.</li>
<li>You must eat at least one square on your turn, and you cannot skip your turn.</li>
<li>Whoever eats the mouldy square loses.</li>
</ul>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Should you go first or second? And how will you ensure that you don’t eat the mouldy square?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Choose to go first, eating the top-right square.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Based on your friend’s move, respond accordingly:</p><ul>
<li>If he eats a square on the bottom row, this will leave a smaller rectangle. Eat the new top-right square.</li>
<li>If he eats only squares on the top row, eat the same number of squares from the bottom row.</li>
</ul><p>Whichever move your friend makes, you can always bring it back to the following configuration when it is your friend’s turn: <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation>k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> squares on the top row, <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow><annotation>k+1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> squares on the bottom row.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Each pair of moves also reduces the value of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation>k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span>, ensuring that you’re eventually left with <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><annotation>k=0</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>, meaning your friend will be left with the mouldy chocolate.</p></div></details>
<details class="content-block note-block note-note" data-type="note" data-note-type="note"><summary class="note-label note-note-label">Extension</summary><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>After a few games with <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn></mrow><annotation>2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> by <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> chocolate bars, your friend protests: “Hey! I’ve realised you win every time you go first. It’s my turn to go first.”</p><p>You let him go first the next round. However, his first move isn’t taking the single top-right square. Show that if the first player doesn’t take the single top-right square on their first move, the second player always wins in optimal play.</p><details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s consider 2 cases:</p><ul>
<li>Case 1: Player 1 takes the <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mi>k</mi><mtext>th</mtext></msup></mrow><annotation>k^\\text{th}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord text mtight"><span class="mord mtight">th</span></span></span></span></span></span></span></span></span></span></span></span> square from the right on the bottom row, taking a total of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn><mi>k</mi></mrow><annotation>2k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> squares.
<ul>
<li>The chocolate bar is now a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn></mrow><annotation>2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> by <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>m</mi></mrow><annotation>m</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> chocolate bar, where <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>m</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>k</mi></mrow><annotation>m = n - k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span>. We’ve already solved this earlier: player 2 can now take the top-right square to leave player 1 in a losing position.</li>
</ul>
</li>
<li>Case 2: Player 1 takes <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation>k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> squares from the top row, where <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi><mo>></mo><mn>1</mn></mrow><annotation>k \\gt 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>.
<ul>
<li>Player 2 can take <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow><annotation>k - 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> squares from the bottom row, turning it into a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn></mrow><annotation>2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> by <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>m</mi></mrow><annotation>m</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> chocolate bar with the top-right square eaten, where <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>m</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>+</mo><mn>1</mn></mrow><annotation>m = n - k + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>. That’s a losing position for the next player (i.e. player 1).</li>
</ul>
</li>
</ul><p>If Player 1 doesn’t make the optimal move on their first move, player 2 can always win.</p></div></details></div></details>`,rawContent:`
Even after losing the previous 2 games to you, it appears that your friend has not yet learnt his lesson. This time, he has a rectangular chocolate bar made of $2$ by $n$ squares. The same rules apply:

- You will take turns picking a square of chocolate to eat, then eating all the squares to the top, the right, and top-right of the chosen square.  
- You must eat at least one square on your turn, and you cannot skip your turn.  
- Whoever eats the mouldy square loses.


:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
    - ['#', '#', '#', '#', '*⋯', '#']
    - ['@', '#', '#', '#', '*⋯', '#']
\`\`\`
:::

Should you go first or second? And how will you ensure that you don’t eat the mouldy square?

::::solution

Choose to go first, eating the top-right square.

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
    - ['#', '#', '#', '*⋯', '#']
    - ['@', '#', '#', '*⋯', '#', '#']
\`\`\`
:::

Based on your friend’s move, respond accordingly:

- If he eats a square on the bottom row, this will leave a smaller rectangle. Eat the new top-right square.
- If he eats only squares on the top row, eat the same number of squares from the bottom row.

Whichever move your friend makes, you can always bring it back to the following configuration when it is your friend’s turn: $k$ squares on the top row, $k+1$ squares on the bottom row.

:::dynamic
\`\`\`yaml
use: ./chomp-grid
props:
  grid:
    - ['#', '#', '#', '*⋯', '#']
    - ['@', '#', '#', '*⋯', '#', '#']
\`\`\`
:::

Each pair of moves also reduces the value of $k$, ensuring that you’re eventually left with $k=0$, meaning your friend will be left with the mouldy chocolate.

::::

::::note[Extension]{type="note" collapsible}
After a few games with $2$ by $n$ chocolate bars, your friend protests: “Hey! I’ve realised you win every time you go first. It’s my turn to go first.”

You let him go first the next round. However, his first move isn’t taking the single top-right square. Show that if the first player doesn’t take the single top-right square on their first move, the second player always wins in optimal play.

:::solution
Let’s consider 2 cases:

- Case 1: Player 1 takes the $k^\\text{th}$ square from the right on the bottom row, taking a total of $2k$ squares.
  - The chocolate bar is now a $2$ by $m$ chocolate bar, where $m = n - k$. We’ve already solved this earlier: player 2 can now take the top-right square to leave player 1 in a losing position.
- Case 2: Player 1 takes $k$ squares from the top row, where $k \\gt 1$.
  - Player 2 can take $k - 1$ squares from the bottom row, turning it into a $2$ by $m$ chocolate bar with the top-right square eaten, where $m = n - k + 1$. That’s a losing position for the next player (i.e. player 1).

If Player 1 doesn’t make the optimal move on their first move, player 2 can always win.
:::


::::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#","#","#","#","*⋯","#"],["@","#","#","#","*⋯","#"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-3.md"},{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#","#","#","*⋯","#"],["@","#","#","*⋯","#","#"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-3.md"},{type:"dynamic",mode:"component",componentId:"./chomp-grid",props:{grid:[["#","#","#","*⋯","#"],["@","#","#","*⋯","#","#"]]},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/chomp-3.md"}],inlineComponents:{}};export{a as default};
