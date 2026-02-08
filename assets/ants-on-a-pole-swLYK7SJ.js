const e={slug:"ants-on-a-pole",metadata:{id:"puzzle-61",title:"Ants on a Pole",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["logic"],tags:["has-solution"],credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-04",lastUpdated:"2026-02-05",preview:"You have a 1-metre pole with 99 ants placed at each 1-centimetre mark (1cm, 2cm, 3cm, … 99cm). Each ant faces towards the centre of the pole (at the 50cm...",websitePreview:"You have a 1-metre pole with 99 ants placed at each 1-centimetre mark (1cm, 2cm, 3cm, … 99cm). Each ant faces towards the centre of the pole (at the 50cm..."},content:`<p>You have a 1-metre pole with 99 ants placed at each 1-centimetre mark (1cm, 2cm, 3cm, … 99cm). Each ant faces towards the centre of the pole (at the 50cm mark). All ants start walking simultaneously at exactly 1cm per second. When two ants collide, they both immediately reverse direction and continue walking. If an ant reaches either end of the pole, it falls off.</p>
<p>How long will it take for all the ants to fall off the pole?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>When the ants collide, is there a difference whether they reverse direction or they walk past each other?</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: 99 seconds.</p><p>The key is to reframe the problem. When two ants collide and reverse direction, the outcome is identical to the ants simply passing through each other—the positions and velocities are the same, we’ve just swapped which ant is which.</p><p>Since we can treat collisions as ants passing through each other, each ant effectively travels in a straight line at 1cm per second until it falls off the pole. The ants that takes longest to fall off are the ones at the 1cm and 99cm mark: they each have to travel 99cm to get to the opposite end of the ruler.</p><p>Hence, all the ants will fall off the pole after 99 seconds.</p></div></details>`,rawContent:`
You have a 1-metre pole with 99 ants placed at each 1-centimetre mark (1cm, 2cm, 3cm, … 99cm). Each ant faces towards the centre of the pole (at the 50cm mark). All ants start walking simultaneously at exactly 1cm per second. When two ants collide, they both immediately reverse direction and continue walking. If an ant reaches either end of the pole, it falls off.

How long will it take for all the ants to fall off the pole?

:::hint
When the ants collide, is there a difference whether they reverse direction or they walk past each other?
:::

:::solution
**Answer**: 99 seconds.

The key is to reframe the problem. When two ants collide and reverse direction, the outcome is identical to the ants simply passing through each other—the positions and velocities are the same, we’ve just swapped which ant is which.

Since we can treat collisions as ants passing through each other, each ant effectively travels in a straight line at 1cm per second until it falls off the pole. The ants that takes longest to fall off are the ones at the 1cm and 99cm mark: they each have to travel 99cm to get to the opposite end of the ruler.

Hence, all the ants will fall off the pole after 99 seconds.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
