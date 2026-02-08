const s={slug:"two-children-2",metadata:{id:"puzzle-26",title:"Two Children 2",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["probability"],tags:["has-solution"],credit:"Variant of a classic probability puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-04: Added to Puzzlestone Peak",previousPuzzle:"two-children-1",preview:"You’re talking to a different colleague at work when it comes up in the conversation that he has 2 children. “What genders are they?” you ask again. “Well, the...",websitePreview:"You’re talking to a different colleague at work when it comes up in the conversation that he has 2 children. “What genders are they?” you ask again. “Well, the..."},content:`<p>You’re talking to a different colleague at work when it comes up in the conversation that he has 2 children.</p>
<p>“What genders are they?” you ask again. <br>
“Well, the oldest is a girl,” he replies.</p>
<p>What is the probability the family has two daughters?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can assume that the probability of any child being a boy or girl to be equal and independent.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation>\\frac{1}{2}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p><p>When you first find out that your colleague has 2 children, the possibilities made known to you are:</p><ol>
<li>Both children are boys</li>
<li>The older child is a boy, and the younger child is a girl</li>
<li>The older child is a girl, and the younger child is a boy</li>
<li>Both children are girls</li>
</ol><p>Each outcome comes at equal chance.</p><p>This time, knowing the gender of one child does not tell you the gender of the other. Knowing the older child is a girl narrows it down to 2 possibilities (outcomes 3 and 4), only 1 of which involves 2 daughters. Thus, the chances of him having 2 daughters is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation>\\frac{1}{2}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>.</p></div></details>`,rawContent:`
You’re talking to a different colleague at work when it comes up in the conversation that he has 2 children.

“What genders are they?” you ask again. \\
“Well, the oldest is a girl,” he replies.

What is the probability the family has two daughters?

:::hint
You can assume that the probability of any child being a boy or girl to be equal and independent.
:::

:::solution
$\\frac{1}{2}$

When you first find out that your colleague has 2 children, the possibilities made known to you are:

1. Both children are boys
2. The older child is a boy, and the younger child is a girl
3. The older child is a girl, and the younger child is a boy
4. Both children are girls

Each outcome comes at equal chance.

This time, knowing the gender of one child does not tell you the gender of the other. Knowing the older child is a girl narrows it down to 2 possibilities (outcomes 3 and 4), only 1 of which involves 2 daughters. Thus, the chances of him having 2 daughters is $\\frac{1}{2}$.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{s as default};
