const e={slug:"stack-of-coins-1a",metadata:{id:"puzzle-67",title:"Stack of Coins 1A",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["adversarial-game","invariants"],tags:["has-solution"],nextPuzzle:"stack-of-coins-1b",dateCreated:"2026-02-06",lastUpdated:"2026-02-06",credit:`Classic puzzle. Question and solution written by Puzzlestone Peak.
`,preview:"You and a friend stumble on a pirate’s treasure: an old chest filled with coins: 19 copper coins and 1 gold coin. These old coins are no longer legal tender,...",websitePreview:"You and a friend stumble on a pirate’s treasure: an old chest filled with coins: 19 copper coins and 1 gold coin. These old coins are no longer legal tender,..."},content:`<p>You and a friend stumble on a pirate’s treasure: an old chest filled with coins: 19 copper coins and 1 gold coin. These old coins are no longer legal tender, so the copper ones are worthless. Only the gold coin is worth something due to its material.</p>
<p>To determine who gets the gold coin, your friend comes up with a game of wits. He stacks the 20 coins in a stack with the gold coin at the bottom. You and him will take turns taking 1 or 2 coins from the top of the stack, all the way until the final coin is taken. He lets you decide if you want to go first or second.</p>
<p>Should you go first or second? And what strategy do you use to ensure you’ll win the gold coin?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Try starting with a smaller number of coins. If there are 3 coins, will the first or second player win? How about 4? 5? 6? See if you can find a pattern.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Choose to go first and take 2 coins. After that, if he takes 1 coin, you take 2. If he takes 2 coins, you take 1 instead.</p><p>By taking the first 2 coins, you bring the stack down to 18 coins: a multiple of 3. Your strategy will make sure that after your turn, the number of coins would have decreased by 3 to another multiple of 3.</p><p>When we get to 3 coins, your friend can only take 1 or 2 coins, leaving you with 2 or 1 coins, which you can then take and win.</p></div></details>`,rawContent:`
You and a friend stumble on a pirate’s treasure: an old chest filled with coins: 19 copper coins and 1 gold coin. These old coins are no longer legal tender, so the copper ones are worthless. Only the gold coin is worth something due to its material.

To determine who gets the gold coin, your friend comes up with a game of wits. He stacks the 20 coins in a stack with the gold coin at the bottom. You and him will take turns taking 1 or 2 coins from the top of the stack, all the way until the final coin is taken. He lets you decide if you want to go first or second.

Should you go first or second? And what strategy do you use to ensure you’ll win the gold coin?

:::hint
Try starting with a smaller number of coins. If there are 3 coins, will the first or second player win? How about 4? 5? 6? See if you can find a pattern.
:::

:::solution
Choose to go first and take 2 coins. After that, if he takes 1 coin, you take 2. If he takes 2 coins, you take 1 instead.

By taking the first 2 coins, you bring the stack down to 18 coins: a multiple of 3. Your strategy will make sure that after your turn, the number of coins would have decreased by 3 to another multiple of 3.

When we get to 3 coins, your friend can only take 1 or 2 coins, leaving you with 2 or 1 coins, which you can then take and win.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
