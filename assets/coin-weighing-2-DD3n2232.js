const s={slug:"coin-weighing-2",metadata:{id:"puzzle-37",title:"Coin Weighing 2",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["deductive-reasoning","encoding"],tags:["has-solution"],previousPuzzle:"coin-weighing-1",nextPuzzle:"coin-weighing-3",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",credit:`Classic puzzle. Question and solution written by Puzzlestone Peak.
`,preview:"Your empire has grown, and now you receive tributes from 9 neighbouring kingdoms. Each kingdom sends a sack of gold coins as a gift. Your advisor suspects that...",websitePreview:"Your empire has grown, and now you receive tributes from 9 neighbouring kingdoms. Each kingdom sends a sack of gold coins as a gift. Your advisor suspects that..."},content:`<p>Your empire has grown, and now you receive tributes from 9 neighbouring kingdoms. Each kingdom sends a sack of gold coins as a gift. Your advisor suspects that one kingdom has sent counterfeit coins — every coin in that sack is fake.</p>
<p>A genuine coin weighs 10 grams. A counterfeit coin weighs 9 grams.</p>
<p>You have an weighing scale that gives an exact weight reading in grams, but you can only use it once.</p>
<p>How can you determine which sack contains the counterfeit coins with a single weighing?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Take 1 coin from sack 1, 2 coins from sack 2, 3 coins from sack 3, and continue this pattern up to 9 coins from sack 9.</p><p>That’s <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mi>.</mi><mi>.</mi><mi>.</mi><mo>+</mo><mn>9</mn><mo>=</mo><mn>45</mn></mrow><annotation>1 + 2 + 3 + ... + 9 = 45</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">...</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">9</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span></span></span></span> coins total.</p><p>If all the coins were genuine, the scale would read 450 grams (45 coins × 10 grams each).</p><p>But one sack contains counterfeits, each weighing 9 grams instead of 10. Each counterfeit coin reduces the total weight by 1 gram.</p><p>If the scale reads 449 grams, we’re 1 gram short — meaning we took 1 counterfeit coin. That means the counterfeit coins are coming from sack 1.</p><p>Likewise, if the scale reads 448 grams, we’re 2 grams short — meaning we took 2 counterfeit coins. That means the counterfeit coins are coming from sack 2.</p><p>The shortfall in grams equals the sack number. If the weight is 450 - k grams, then sack k contains the counterfeits.</p></div></details>`,rawContent:`
Your empire has grown, and now you receive tributes from 9 neighbouring kingdoms. Each kingdom sends a sack of gold coins as a gift. Your advisor suspects that one kingdom has sent counterfeit coins — every coin in that sack is fake.

A genuine coin weighs 10 grams. A counterfeit coin weighs 9 grams.

You have an weighing scale that gives an exact weight reading in grams, but you can only use it once.

How can you determine which sack contains the counterfeit coins with a single weighing?

:::solution
Take 1 coin from sack 1, 2 coins from sack 2, 3 coins from sack 3, and continue this pattern up to 9 coins from sack 9.

That’s $1 + 2 + 3 + ... + 9 = 45$ coins total.

If all the coins were genuine, the scale would read 450 grams (45 coins × 10 grams each).

But one sack contains counterfeits, each weighing 9 grams instead of 10. Each counterfeit coin reduces the total weight by 1 gram.

If the scale reads 449 grams, we’re 1 gram short — meaning we took 1 counterfeit coin. That means the counterfeit coins are coming from sack 1.

Likewise, if the scale reads 448 grams, we’re 2 grams short — meaning we took 2 counterfeit coins. That means the counterfeit coins are coming from sack 2.

The shortfall in grams equals the sack number. If the weight is 450 - k grams, then sack k contains the counterfeits.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{s as default};
