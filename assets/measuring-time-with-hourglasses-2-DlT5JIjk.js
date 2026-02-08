const e={slug:"measuring-time-with-hourglasses-2",metadata:{id:"puzzle-34",slug:"measuring-time-with-hourglasses-2",title:"Measuring Time with Hourglasses 2",questionPreview:`Using only a 7-minute and 11-minute hourglass, measure exactly 15 minutes.
`,concepts:["logic"],difficulty:{concepts:"easy",reasoning:"easy"},tags:["has-solution"],previousPuzzle:"measuring-time-with-hourglasses-1",nextPuzzle:"measuring-time-with-hourglasses-3",dateCreated:"2026-02-01",lastUpdated:"2026-02-01",credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",preview:"After your culinary experience with the soft-boiled eggs, you want to try your hand at cooking a steamed vegetable mix. This time, you need to steam your...",websitePreview:"After your culinary experience with the soft-boiled eggs, you want to try your hand at cooking a steamed vegetable mix. This time, you need to steam your..."},content:`<p>After your culinary experience with the soft-boiled eggs, you want to try your hand at cooking a steamed vegetable mix. This time, you need to steam your vegetables for 15 exactly minutes. You still haven’t replaced your broken kitchen timer, but you at least you have your trusty hourglasses.</p>
<p>This time, you have two hourglasses: one measures 7 minutes, the other measures 11 minutes. Using only these two hourglasses, how can you measure exactly 15 minutes?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Try solving <a href="/puzzle/measuring-time-with-hourglasses-1">Measuring Time with Hourglasses 1</a> first.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Start both hourglasses at the same time.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 7 minutes left <br>
11-min hourglass: 11 minutes left <br>
<strong>Elapsed: 0 min</strong></p></div></div><p>At 7 minutes, the 7-minute hourglass runs out. Flip it.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 7 minutes left <br>
11-min hourglass: 4 minutes left <br>
<strong>Elapsed: 7 min</strong></p></div></div><p>At 11 minutes, the 11-minute hourglass runs out. Flip the 7-minute hourglass.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: 4 minutes left <br>
11-min hourglass: done <br>
<strong>Elapsed: 11 min</strong></p></div></div><p>The 7-minute hourglass had been running for 4 minutes since its last flip, so 4 minutes of sand have collected in the bottom. Flipping it means those 4 minutes of sand now run back through “in reverse,” giving us exactly 4 more minutes.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>7-min hourglass: done <br>
11-min hourglass: done <br>
<strong>Elapsed: 15 min</strong></p></div></div><p>The 7-minute hourglass finishes its remaining 4 minutes of sand, and we’ve measured exactly 15 minutes.</p></div></details>`,rawContent:`
After your culinary experience with the soft-boiled eggs, you want to try your hand at cooking a steamed vegetable mix. This time, you need to steam your vegetables for 15 exactly minutes. You still haven’t replaced your broken kitchen timer, but you at least you have your trusty hourglasses.

This time, you have two hourglasses: one measures 7 minutes, the other measures 11 minutes. Using only these two hourglasses, how can you measure exactly 15 minutes?

:::hint
Try solving [Measuring Time with Hourglasses 1](puzzle:measuring-time-with-hourglasses-1) first.
:::

::::solution
Start both hourglasses at the same time.

:::note{noheader}
7-min hourglass: 7 minutes left \\
11-min hourglass: 11 minutes left \\
**Elapsed: 0 min**
:::

At 7 minutes, the 7-minute hourglass runs out. Flip it.

:::note{noheader}
7-min hourglass: 7 minutes left \\
11-min hourglass: 4 minutes left \\
**Elapsed: 7 min**
:::

At 11 minutes, the 11-minute hourglass runs out. Flip the 7-minute hourglass.

:::note{noheader}
7-min hourglass: 4 minutes left \\
11-min hourglass: done \\
**Elapsed: 11 min**
:::

The 7-minute hourglass had been running for 4 minutes since its last flip, so 4 minutes of sand have collected in the bottom. Flipping it means those 4 minutes of sand now run back through “in reverse,” giving us exactly 4 more minutes.

:::note{noheader}
7-min hourglass: done \\
11-min hourglass: done \\
**Elapsed: 15 min**
:::

The 7-minute hourglass finishes its remaining 4 minutes of sand, and we’ve measured exactly 15 minutes.
::::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
