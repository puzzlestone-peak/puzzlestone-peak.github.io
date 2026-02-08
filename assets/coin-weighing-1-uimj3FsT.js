const e={slug:"coin-weighing-1",metadata:{id:"puzzle-36",title:"Coin Weighing 1",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["deductive-reasoning","divide-and-conquer"],tags:["has-solution","starter"],nextPuzzle:"coin-weighing-2",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",credit:`Classic puzzle. Question and solution written by Puzzlestone Peak.
`,preview:"You’re the king of a massive empire. As a gift, a neighbouring kingdom has sent you 9 gold coins. Your advisor suspects that one of the coins is a forgery —...",websitePreview:"You’re the king of a massive empire. As a gift, a neighbouring kingdom has sent you 9 gold coins. Your advisor suspects that one of the coins is a forgery —..."},content:`<p>You’re the king of a massive empire. As a gift, a neighbouring kingdom has sent you 9 gold coins. Your advisor suspects that one of the coins is a forgery — identical in appearance, but slightly lighter than the rest. You have a balance scale at your disposal.</p>
<p>What is the minimum number of weighings needed to guarantee you identify the counterfeit coin, and how can you achieve it?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You could pick a coin and measure it against all 8 other coins one by one. The first weighing that shows a lighter coin will give you the result. In the worst case, you’ll need 8 weighings. Can you do better?</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Optimal number of weighings</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can find the counterfeit coin in 2 weighings, even in the worst case scenario.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s label the coins 1 through 9 and divide them into three groups of 3: {1, 2, 3}, {4, 5, 6}, and {7, 8, 9}.</p><p>Place the first group on the left pan and the second group on the right pan. If the left pan rises, the lighter coin is in {1, 2, 3}. If the right pan rises, it’s in {4, 5, 6}. If the pans balance, the fake is in the group we didn’t weigh: {7, 8, 9}.</p><p>Either way, we’ve narrowed it down to 3 coins in a single weighing.</p><p>From the remaining 3, place one coin on each pan and set the third aside. If one pan rises, that’s the counterfeit. If they balance, the coin we set aside is the fake.</p><p>This method guarantees that we’ll find the counterfeit coin in 2 weighings.</p></div></details>`,rawContent:`
You’re the king of a massive empire. As a gift, a neighbouring kingdom has sent you 9 gold coins. Your advisor suspects that one of the coins is a forgery — identical in appearance, but slightly lighter than the rest. You have a balance scale at your disposal.

What is the minimum number of weighings needed to guarantee you identify the counterfeit coin, and how can you achieve it?

:::hint
You could pick a coin and measure it against all 8 other coins one by one. The first weighing that shows a lighter coin will give you the result. In the worst case, you’ll need 8 weighings. Can you do better?
:::

:::hint[Optimal number of weighings]
You can find the counterfeit coin in 2 weighings, even in the worst case scenario.
:::

:::solution
Let’s label the coins 1 through 9 and divide them into three groups of 3: {1, 2, 3}, {4, 5, 6}, and {7, 8, 9}.

Place the first group on the left pan and the second group on the right pan. If the left pan rises, the lighter coin is in {1, 2, 3}. If the right pan rises, it’s in {4, 5, 6}. If the pans balance, the fake is in the group we didn’t weigh: {7, 8, 9}.

Either way, we’ve narrowed it down to 3 coins in a single weighing.

From the remaining 3, place one coin on each pan and set the third aside. If one pan rises, that’s the counterfeit. If they balance, the coin we set aside is the fake.

This method guarantees that we’ll find the counterfeit coin in 2 weighings.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
