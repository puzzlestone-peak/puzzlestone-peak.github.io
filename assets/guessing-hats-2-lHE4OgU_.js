const e={slug:"guessing-hats-2",metadata:{id:"puzzle-41",title:"Guessing Hats 2",difficulty:"medium",concepts:["logic","parity"],tags:["has-solution"],previousPuzzle:"guessing-hats-1",nextPuzzle:"guessing-hats-3",credit:"Classic logic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",questionPreview:"10 wise men must guess their hat colours. Can they devise a strategy to maximise survival?",preview:"The king has grown tired of his wise men outwitting him. This time, he’s devised a more devious challenge. 10 wise men are lined up single file, all facing...",websitePreview:"The king has grown tired of his wise men outwitting him. This time, he’s devised a more devious challenge. 10 wise men are lined up single file, all facing..."},content:`<p>The king has grown tired of his wise men outwitting him. This time, he’s devised a more devious challenge.</p>
<p>10 wise men are lined up single file, all facing forward. The wise man at the back of the line can see the 9 wise men in front of him. The wise man at the front of the line can’t see anyone. Each wise man can see all the wise men in front of them, but cannot see their own hat or anyone behind them.</p>
<p>Tomorrow, the king will place either a black hat or a white hat on each wise man’s head, chosen completely at random. Starting from the back of the line, the king will ask each wise man “What colour is your hat?” Each wise man can only answer “black” or “white”. If they answer correctly, they live. If they answer incorrectly, they die.</p>
<p>All wise men can hear the answers given by wise men behind them.</p>
<p>Tonight, before the execution, the wise men are allowed to discuss a strategy. What strategy maximises the number of wise men who survive, and how many are guaranteed to survive?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The wise man at the very back has no information about his own hat. But his answer can convey information to everyone else.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>9 wise men are guaranteed to survive. The 1st wise man has a 50/50 chance.</p><p>Let’s call the wise men P1 (back of line) through P10 (front of line). P1 can see all 9 hats in front of him. He has zero information about his own hat, so at best he can guess randomly and survive with probability 1/2.</p><p>However, P1’s answer can encode information that helps everyone else. The strategy works by using his answer to communicate the parity of black hats he sees.</p><p>Here’s the protocol: P1 counts the number of black hats he can see. If the count is odd, he says “black”. If the count is even, he says “white”. This gives him a 50/50 chance of being correct about his own hat.</p><p>P2 now has enough information to deduce his own hat colour. He heard P1’s answer, which tells him the parity of black hats among P2 through P10. P2 can see the 8 hats in front of him. He counts the black hats he sees and compares this count to the parity P1 announced.</p><p>If P2 sees an odd number of black hats and P1 said “black” (meaning the total count of P2-P10 was odd), then P2 must be wearing a white hat. If P2 sees an even number of black hats and P1 said “black”, then P2 must be wearing a black hat. P2 announces his hat colour correctly and survives.</p><p>P3 now knows two things: the original parity from P1, and P2’s hat colour (which P2 announced). P3 can see 7 hats in front of him. He counts the black hats he sees, adds P2’s hat (if black) to his count, and compares this running total to the original parity. From this, he deduces his own hat colour.</p><p>This process continues down the line. Each wise man uses the original parity information from P1, the announced colours of everyone behind them, and the hats they can see in front of them to deduce their own hat colour.</p><p>Can we do better? No. P1 cannot have any information about his own hat. He can see 9 hats, and both “all black” and “all white” are consistent with him wearing either colour. The best he can do is use his answer to help others. Thus, 9 guaranteed survivors is optimal.</p><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-header note-note-header">An Extension</div><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>How can we extend the solution to <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> wise men and <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation>k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> hat colours?</p></div></div></div></details>`,rawContent:`
The king has grown tired of his wise men outwitting him. This time, he’s devised a more devious challenge.

10 wise men are lined up single file, all facing forward. The wise man at the back of the line can see the 9 wise men in front of him. The wise man at the front of the line can’t see anyone. Each wise man can see all the wise men in front of them, but cannot see their own hat or anyone behind them.

Tomorrow, the king will place either a black hat or a white hat on each wise man’s head, chosen completely at random. Starting from the back of the line, the king will ask each wise man “What colour is your hat?” Each wise man can only answer “black” or “white”. If they answer correctly, they live. If they answer incorrectly, they die.

All wise men can hear the answers given by wise men behind them.

Tonight, before the execution, the wise men are allowed to discuss a strategy. What strategy maximises the number of wise men who survive, and how many are guaranteed to survive?

:::hint
The wise man at the very back has no information about his own hat. But his answer can convey information to everyone else.
:::

::::solution
9 wise men are guaranteed to survive. The 1st wise man has a 50/50 chance.

Let’s call the wise men P1 (back of line) through P10 (front of line). P1 can see all 9 hats in front of him. He has zero information about his own hat, so at best he can guess randomly and survive with probability 1/2.

However, P1’s answer can encode information that helps everyone else. The strategy works by using his answer to communicate the parity of black hats he sees.

Here’s the protocol: P1 counts the number of black hats he can see. If the count is odd, he says “black”. If the count is even, he says “white”. This gives him a 50/50 chance of being correct about his own hat.

P2 now has enough information to deduce his own hat colour. He heard P1’s answer, which tells him the parity of black hats among P2 through P10. P2 can see the 8 hats in front of him. He counts the black hats he sees and compares this count to the parity P1 announced.

If P2 sees an odd number of black hats and P1 said “black” (meaning the total count of P2-P10 was odd), then P2 must be wearing a white hat. If P2 sees an even number of black hats and P1 said “black”, then P2 must be wearing a black hat. P2 announces his hat colour correctly and survives.

P3 now knows two things: the original parity from P1, and P2’s hat colour (which P2 announced). P3 can see 7 hats in front of him. He counts the black hats he sees, adds P2’s hat (if black) to his count, and compares this running total to the original parity. From this, he deduces his own hat colour.

This process continues down the line. Each wise man uses the original parity information from P1, the announced colours of everyone behind them, and the hats they can see in front of them to deduce their own hat colour.

Can we do better? No. P1 cannot have any information about his own hat. He can see 9 hats, and both “all black” and “all white” are consistent with him wearing either colour. The best he can do is use his answer to help others. Thus, 9 guaranteed survivors is optimal.

:::note[An Extension]
How can we extend the solution to $n$ wise men and $k$ hat colours?
:::
::::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
