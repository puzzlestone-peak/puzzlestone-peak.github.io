const e={slug:"coin-weighing-3",metadata:{id:"puzzle-38",title:"Coin Weighing 3",difficulty:{concepts:"medium",reasoning:"medium"},concepts:["deductive-reasoning","divide-and-conquer"],tags:["has-solution"],previousPuzzle:"coin-weighing-1",nextPuzzle:"coin-weighing-2",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",credit:`Classic puzzle. Question and solution written by Puzzlestone Peak.
`,preview:"Your empire has grown even larger. Now 12 neighbouring kingdoms have each sent a single gold coin as tribute. Your advisor suspects that one coin is...",websitePreview:"Your empire has grown even larger. Now 12 neighbouring kingdoms have each sent a single gold coin as tribute. Your advisor suspects that one coin is..."},content:`<p>Your empire has grown even larger. Now 12 neighbouring kingdoms have each sent a single gold coin as tribute. Your advisor suspects that one coin is counterfeit, but this time he doesn’t know whether the counterfeit is heavier or lighter than a genuine coin. You have a balance scale at your disposal.</p>
<p>What is the minimum number of weighings needed to guarantee you identify the counterfeit coin AND determine whether it is heavier or lighter?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Optimal number of weighings</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can identify the counterfeit and determine if it is ligher or heavier in 3 weighings.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s label the coins 1 through 12 and divide them into three groups of 4: A = {1, 2, 3, 4}, B = {5, 6, 7, 8}, and C = {9, 10, 11, 12}.</p><p>For the first weighing, place group A on the left pan and group B on the right pan.</p><p><strong>Case 1: A and B balance.</strong> All 8 coins in groups A and B are genuine. The counterfeit is in group C. For the second weighing, take two coins from C — say 9 and 10 — and weigh them against two genuine coins.</p><ul>
<li>
<p><strong>Case 1A: {9, 10} and the genuine coins balance.</strong> The counterfeit is either 11 or 12. We don’t yet know if it’s heavier or lighter. Weigh 11 against a genuine coin. If they balance, 12 is the counterfeit — weigh it against a genuine coin to determine if it’s heavier or lighter. If 11 doesn’t balance, it’s the counterfeit, and the direction tells us whether it’s heavier or lighter.</p>
</li>
<li>
<p><strong>Case 1B: {9, 10} doesn’t balance with the genuine coins.</strong> The counterfeit is 9 or 10, and we now know whether the counterfeit is heavier or lighter from the direction of the imbalance. Weigh 9 against a genuine coin. If they balance, 10 is the counterfeit. If they don’t balance, 9 is the counterfeit.</p>
</li>
</ul><p><strong>Case 2: A and B don’t balance.</strong> Say A is heavier than B. The counterfeit is either a heavy coin in A or a light coin in B. All coins in C are genuine.</p><p>For the second weighing, we rearrange the coins strategically. Take coins {1, 2, 5} and weigh them against {3, 6, 9}, where coin 9 is from the genuine group C.</p><ul>
<li>
<p><strong>Case 2A: {1, 2, 5} and {3, 6, 9} balance.</strong> The counterfeit is one of {4, 7, 8}. From the first weighing, we know coin 4 could be heavy and coins 7 or 8 could be light. Weigh 7 against 8. If they balance, 4 is the heavy counterfeit. If 7 is lighter, it’s the counterfeit. If 8 is lighter, it’s the counterfeit.</p>
</li>
<li>
<p><strong>Case 2B: {1, 2, 5} is heavier than {3, 6, 9}.</strong> The counterfeit must be one of {1, 2}, both potentially heavy, or coin 6, potentially light. Since {1, 2, 5} is heavier, coins 1 or 2 being heavy would explain it, but coin 6 being light would also make the right side lighter. We weigh 1 against 2. If they balance, 6 is the light counterfeit. If 1 is heavier, it’s the counterfeit. If 2 is heavier, it’s the counterfeit.</p>
</li>
<li>
<p><strong>Case 2C: {1, 2, 5} is lighter than {3, 6, 9}.</strong> The counterfeit must be coin 3 or 4 (both potentially heavy) or coin 5 (potentially light). Coin 5 being light would make the left side lighter, which matches what we observe. Coins 3 or 4 being heavy would make the right side heavier, which also matches. Weigh 3 against 4. If they balance, 5 is the light counterfeit. If 3 is heavier, it’s the counterfeit. If 4 is heavier, it’s the counterfeit.</p>
</li>
</ul><p>This method guarantees we identify the counterfeit and determine its weight in 3 weighings.</p></div></details>`,rawContent:`
Your empire has grown even larger. Now 12 neighbouring kingdoms have each sent a single gold coin as tribute. Your advisor suspects that one coin is counterfeit, but this time he doesn’t know whether the counterfeit is heavier or lighter than a genuine coin. You have a balance scale at your disposal.

What is the minimum number of weighings needed to guarantee you identify the counterfeit coin AND determine whether it is heavier or lighter?

:::hint[Optimal number of weighings]
You can identify the counterfeit and determine if it is ligher or heavier in 3 weighings.
:::

:::solution
Let’s label the coins 1 through 12 and divide them into three groups of 4: A = {1, 2, 3, 4}, B = {5, 6, 7, 8}, and C = {9, 10, 11, 12}.

For the first weighing, place group A on the left pan and group B on the right pan.

**Case 1: A and B balance.** All 8 coins in groups A and B are genuine. The counterfeit is in group C. For the second weighing, take two coins from C — say 9 and 10 — and weigh them against two genuine coins.

- **Case 1A: {9, 10} and the genuine coins balance.** The counterfeit is either 11 or 12. We don’t yet know if it’s heavier or lighter. Weigh 11 against a genuine coin. If they balance, 12 is the counterfeit — weigh it against a genuine coin to determine if it’s heavier or lighter. If 11 doesn’t balance, it’s the counterfeit, and the direction tells us whether it’s heavier or lighter.

- **Case 1B: {9, 10} doesn’t balance with the genuine coins.** The counterfeit is 9 or 10, and we now know whether the counterfeit is heavier or lighter from the direction of the imbalance. Weigh 9 against a genuine coin. If they balance, 10 is the counterfeit. If they don’t balance, 9 is the counterfeit.

**Case 2: A and B don’t balance.** Say A is heavier than B. The counterfeit is either a heavy coin in A or a light coin in B. All coins in C are genuine.

For the second weighing, we rearrange the coins strategically. Take coins {1, 2, 5} and weigh them against {3, 6, 9}, where coin 9 is from the genuine group C.

- **Case 2A: {1, 2, 5} and {3, 6, 9} balance.** The counterfeit is one of {4, 7, 8}. From the first weighing, we know coin 4 could be heavy and coins 7 or 8 could be light. Weigh 7 against 8. If they balance, 4 is the heavy counterfeit. If 7 is lighter, it’s the counterfeit. If 8 is lighter, it’s the counterfeit.

- **Case 2B: {1, 2, 5} is heavier than {3, 6, 9}.** The counterfeit must be one of {1, 2}, both potentially heavy, or coin 6, potentially light. Since {1, 2, 5} is heavier, coins 1 or 2 being heavy would explain it, but coin 6 being light would also make the right side lighter. We weigh 1 against 2. If they balance, 6 is the light counterfeit. If 1 is heavier, it’s the counterfeit. If 2 is heavier, it’s the counterfeit.

- **Case 2C: {1, 2, 5} is lighter than {3, 6, 9}.** The counterfeit must be coin 3 or 4 (both potentially heavy) or coin 5 (potentially light). Coin 5 being light would make the left side lighter, which matches what we observe. Coins 3 or 4 being heavy would make the right side heavier, which also matches. Weigh 3 against 4. If they balance, 5 is the light counterfeit. If 3 is heavier, it’s the counterfeit. If 4 is heavier, it’s the counterfeit.

This method guarantees we identify the counterfeit and determine its weight in 3 weighings.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
