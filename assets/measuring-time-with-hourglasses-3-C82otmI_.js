const e={slug:"measuring-time-with-hourglasses-3",metadata:{id:"puzzle-35",slug:"measuring-time-with-hourglasses-3",title:"Measuring Time with Hourglasses 3",questionPreview:`Using only a 7-minute and 9-minute hourglass, measure exactly 20 minutes.
`,concepts:["logic"],difficulty:{concepts:"easy",reasoning:"easy"},tags:["has-solution"],previousPuzzle:"measuring-time-with-hourglasses-2",dateCreated:"2026-02-01",lastUpdated:"2026-02-01",credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",preview:"As your cooking skills improve, you decide to try preparing baked salmon fillet. It needs to go into the oven for exactly 20 minutes. As before, you have two...",websitePreview:"As your cooking skills improve, you decide to try preparing baked salmon fillet. It needs to go into the oven for exactly 20 minutes. As before, you have two..."},content:`<p>As your cooking skills improve, you decide to try preparing baked salmon fillet. It needs to go into the oven for exactly 20 minutes. As before, you have two hourglasses: one measures 7 minutes, the other measures 9 minutes. Using only these two hourglasses, how can you measure exactly 20 minutes?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Try solving <a href="/puzzle/measuring-time-with-hourglasses-2">Measuring Time with Hourglasses 2</a> first.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You need a preparation phase. Run the hourglasses for a while to reach a moment where you can start timing, and then a later moment exactly 20 minutes after.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Unlike the earlier hourglass puzzles, you can’t begin measuring right away. No matter what combination of moves you try, you can’t measure exactly 20 minutes. You need a preparation phase: start flipping, and then pick the right moment to begin and end your measurement.</p><p>Here’s how it plays out. Start both hourglasses at the same time.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 7 minutes left <br>
9-min hourglass: 9 minutes left <br>
<strong>Elapsed: 0 min</strong></p></div></div><p>At 7 minutes, the 7-minute hourglass runs out. Flip it as you start the oven.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 7 minutes left <br>
9-min hourglass: 2 minutes left <br>
<strong>Elapsed: 7 min — start timing</strong></p></div></div><p>At 9 minutes, the 9-minute hourglass runs out. Flip it.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 5 minutes left <br>
9-min hourglass: 9 minutes left <br>
<strong>Elapsed: 9 min (2 min measured)</strong></p></div></div><p>At 14 minutes, the 7-minute hourglass runs out. Flip it.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 7 minutes left <br>
9-min hourglass: 4 minutes left <br>
<strong>Elapsed: 14 min (7 min measured)</strong></p></div></div><p>At 18 minutes, the 9-minute hourglass runs out. Flip it.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 3 minutes left <br>
9-min hourglass: 9 minutes left <br>
<strong>Elapsed: 18 min (11 min measured)</strong></p></div></div><p>At 21 minutes, the 7-minute hourglass runs out. Flip it.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 7 minutes left <br>
9-min hourglass: 6 minutes left <br>
<strong>Elapsed: 21 min (14 min measured)</strong></p></div></div><p>At 27 minutes, the 9-minute hourglass runs out. <strong>Stop — 20 minutes measured.</strong></p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 1 minute left <br>
9-min hourglass: done <br>
<strong>Elapsed: 27 min (20 min measured)</strong></p></div></div></div></details>
<p>To visualise how this works, imagine flipping both 7-minute and 9-minute timers at the same time, flipping each one as it runs out.</p>
<ul>
<li>7-minute hourglass finishes at: <strong>7</strong>, 14, 21, 28...</li>
<li>9-minute hourglass finishes at: 9, 18, <strong>27</strong>...</li>
</ul>
<p>We want to start measuring at the 7 minute mark, and stop measuring at the 27 minute mark, giving us the 20 minutes we need.
::::</p>`,rawContent:`
As your cooking skills improve, you decide to try preparing baked salmon fillet. It needs to go into the oven for exactly 20 minutes. As before, you have two hourglasses: one measures 7 minutes, the other measures 9 minutes. Using only these two hourglasses, how can you measure exactly 20 minutes?

:::hint
Try solving [Measuring Time with Hourglasses 2](puzzle:measuring-time-with-hourglasses-2) first.
:::

:::hint
You need a preparation phase. Run the hourglasses for a while to reach a moment where you can start timing, and then a later moment exactly 20 minutes after.
:::

::::solution
Unlike the earlier hourglass puzzles, you can’t begin measuring right away. No matter what combination of moves you try, you can’t measure exactly 20 minutes. You need a preparation phase: start flipping, and then pick the right moment to begin and end your measurement.

Here’s how it plays out. Start both hourglasses at the same time.

:::note{noheader}
7-min hourglass: 7 minutes left \\
9-min hourglass: 9 minutes left \\
**Elapsed: 0 min**
:::

At 7 minutes, the 7-minute hourglass runs out. Flip it as you start the oven.

:::note{noheader}
7-min hourglass: 7 minutes left \\
9-min hourglass: 2 minutes left \\
**Elapsed: 7 min — start timing**
:::

At 9 minutes, the 9-minute hourglass runs out. Flip it.

:::note{noheader}
7-min hourglass: 5 minutes left \\
9-min hourglass: 9 minutes left \\
**Elapsed: 9 min (2 min measured)**
:::

At 14 minutes, the 7-minute hourglass runs out. Flip it.

:::note{noheader}
7-min hourglass: 7 minutes left \\
9-min hourglass: 4 minutes left \\
**Elapsed: 14 min (7 min measured)**
:::

At 18 minutes, the 9-minute hourglass runs out. Flip it.

:::note{noheader}
7-min hourglass: 3 minutes left \\
9-min hourglass: 9 minutes left \\
**Elapsed: 18 min (11 min measured)**
:::

At 21 minutes, the 7-minute hourglass runs out. Flip it.

:::note{noheader}
7-min hourglass: 7 minutes left \\
9-min hourglass: 6 minutes left \\
**Elapsed: 21 min (14 min measured)**
:::

At 27 minutes, the 9-minute hourglass runs out. **Stop — 20 minutes measured.**

:::note{noheader}
7-min hourglass: 1 minute left \\
9-min hourglass: done \\
**Elapsed: 27 min (20 min measured)**
:::
::::

To visualise how this works, imagine flipping both 7-minute and 9-minute timers at the same time, flipping each one as it runs out.

- 7-minute hourglass finishes at: **7**, 14, 21, 28...
- 9-minute hourglass finishes at: 9, 18, **27**...

We want to start measuring at the 7 minute mark, and stop measuring at the 27 minute mark, giving us the 20 minutes we need.
::::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
