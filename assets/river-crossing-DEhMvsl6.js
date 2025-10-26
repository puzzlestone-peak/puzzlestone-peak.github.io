const e={slug:"river-crossing",metadata:{title:"The River Crossing Puzzle",questionPreview:`A farmer needs to transport a fox, a chicken, and a sack of grain across a river. The boat can only carry the farmer and one item at a time. The fox can't be left alone with the chicken, and the chicken can't be left alone with the grain. How does the farmer get everything across?
`,concepts:["logic","sequential-planning"],difficulty:"easy",tags:["classic","sequential"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",credits:`Classic logic puzzle
`},content:`<h2 class="markdown-h1">The Situation</h2>
<p>A farmer needs to cross a river with three items:</p>
<ul>
<li>A fox</li>
<li>A chicken</li>
<li>A sack of grain</li>
</ul>
<p>The farmer has a small boat that can only carry himself and one item at a time.</p>
<h2 class="markdown-h1">The Constraints</h2>
<ul>
<li>If left alone together, the fox will eat the chicken</li>
<li>If left alone together, the chicken will eat the grain</li>
<li>The farmer must transport everything safely across the river</li>
</ul>
<h2 class="markdown-h1">The Challenge</h2>
<p>In what order should the farmer transport the items to get everyone across safely?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The farmer can make multiple trips, including going back empty-handed.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Think About the Middle</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>What happens if you take the problematic item (the chicken) first?</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: The farmer needs to make seven trips total.</p><ol>
<li>Take the chicken across (leave fox and grain on the starting side)</li>
<li>Return empty-handed (chicken on far side, fox and grain on starting side)</li>
<li>Take the fox across (or the grain — either works)</li>
<li>Bring the chicken back (fox on far side, chicken and grain on starting side)</li>
<li>Take the grain across (leave chicken on starting side)</li>
<li>Return empty-handed (fox and grain on far side, chicken on starting side)</li>
<li>Take the chicken across (everyone now on far side)</li>
</ol><p>The key insight is step 4: bringing the chicken back. This ensures the chicken is never left alone with either the fox or the grain.</p><p>Alternative solution using grain instead of fox in step 3:</p><ol>
<li>Take chicken across</li>
<li>Return empty</li>
<li>Take grain across</li>
<li>Bring chicken back</li>
<li>Take fox across</li>
<li>Return empty</li>
<li>Take chicken across</li>
</ol><p>Both solutions work because they follow the same principle: the chicken (the "middle" of the food chain) must not be left with either of the others.</p></div></details>`,rawContent:`
# The Situation

A farmer needs to cross a river with three items:
- A fox
- A chicken
- A sack of grain

The farmer has a small boat that can only carry himself and one item at a time.

# The Constraints

- If left alone together, the fox will eat the chicken
- If left alone together, the chicken will eat the grain
- The farmer must transport everything safely across the river

# The Challenge

In what order should the farmer transport the items to get everyone across safely?

:::hint
The farmer can make multiple trips, including going back empty-handed.
:::

:::hint[Think About the Middle]
What happens if you take the problematic item (the chicken) first?
:::

:::solution
**Answer**: The farmer needs to make seven trips total.

1. Take the chicken across (leave fox and grain on the starting side)
2. Return empty-handed (chicken on far side, fox and grain on starting side)
3. Take the fox across (or the grain — either works)
4. Bring the chicken back (fox on far side, chicken and grain on starting side)
5. Take the grain across (leave chicken on starting side)
6. Return empty-handed (fox and grain on far side, chicken on starting side)
7. Take the chicken across (everyone now on far side)

The key insight is step 4: bringing the chicken back. This ensures the chicken is never left alone with either the fox or the grain.

Alternative solution using grain instead of fox in step 3:
1. Take chicken across
2. Return empty
3. Take grain across
4. Bring chicken back
5. Take fox across
6. Return empty
7. Take chicken across

Both solutions work because they follow the same principle: the chicken (the "middle" of the food chain) must not be left with either of the others.
:::
`};export{e as default};
