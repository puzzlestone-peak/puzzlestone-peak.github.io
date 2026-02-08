const t={slug:"chain-link-1",metadata:{id:"puzzle-23",title:"Chain Link 1",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["optimisation","lateral-thinking"],tags:["has-solution"],credit:"Classic optimisation puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"Five apprentices are working for you, the village’s master blacksmith. After three days of work, you now have to pay them each a gold chain of 3 links. You...",websitePreview:"Five apprentices are working for you, the village’s master blacksmith. After three days of work, you now have to pay them each a gold chain of 3 links. You..."},content:`<p>Five apprentices are working for you, the village’s master blacksmith. After three days of work, you now have to pay them each a gold chain of 3 links. You have a gold chain of 15 links, which you can partition by cutting a link open, separating the chain, then welding it back. What is the minimum number of cuts you need to perform on this chain?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can do it with less than 4 cuts.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>3 cuts.</p><p>At first glance, you can make a single cut to separate out each chain of length 3, requiring you to make 4 cuts to create 5 chains of length 3. However, we can do better than that.</p><p>Notice that if you split a chain of length 7 at the middle link, you end up with 2 chains of length 3, with a single link that you can weld. Taking the chain of length 15, we can cut it at the 4th, 8th, and 12th link to produce 4 chains of length 3 and 3 individual links. We can weld these links back together to produce the 5th chain of length 3.</p></div></details>`,rawContent:`
Five apprentices are working for you, the village’s master blacksmith. After three days of work, you now have to pay them each a gold chain of 3 links. You have a gold chain of 15 links, which you can partition by cutting a link open, separating the chain, then welding it back. What is the minimum number of cuts you need to perform on this chain?

:::hint
You can do it with less than 4 cuts.
:::

:::solution
3 cuts.

At first glance, you can make a single cut to separate out each chain of length 3, requiring you to make 4 cuts to create 5 chains of length 3. However, we can do better than that.

Notice that if you split a chain of length 7 at the middle link, you end up with 2 chains of length 3, with a single link that you can weld. Taking the chain of length 15, we can cut it at the 4th, 8th, and 12th link to produce 4 chains of length 3 and 3 individual links. We can weld these links back together to produce the 5th chain of length 3.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{t as default};
