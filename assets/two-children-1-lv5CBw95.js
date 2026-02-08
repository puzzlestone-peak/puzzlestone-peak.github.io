const s={slug:"two-children-1",metadata:{id:"puzzle-20",title:"Two Children 1",published:!0,difficulty:{concepts:"easy",reasoning:"easy"},concepts:["probability"],tags:["has-solution","starter"],credit:"Classic probability puzzle, popularised by Martin Gardner (1959). Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",nextPuzzle:"two-children-2",preview:"You’re talking to your colleague at work when it comes up in the conversation that he has 2 children. “What genders are they?” you ask. “Well, I have at least...",websitePreview:"You’re talking to your colleague at work when it comes up in the conversation that he has 2 children. “What genders are they?” you ask. “Well, I have at least..."},content:`<p>You’re talking to your colleague at work when it comes up in the conversation that he has 2 children.</p>
<p>“What genders are they?” you ask. <br>
“Well, I have at least one daughter,” he replies.</p>
<p>What is the probability the family has two daughters?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can assume that the probability of any child being a boy or girl to be equal and independent.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The answer is not 50%.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation>\\frac{1}{3}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p><p>When you first find out that your colleague has 2 children, the possibilities made known to you are:</p><ol>
<li>Both children are boys</li>
<li>The older child is a boy, and the younger child is a girl</li>
<li>The older child is a girl, and the younger child is a boy</li>
<li>Both children are girls</li>
</ol><p>Each outcome comes at equal chance.</p><p>However, when he reveals that at least one of them is a girl, then you can eliminate the first possibility. That leaves 3 possibilities, each with equal chance. Thus, the chances of him having 2 daughters is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation>\\frac{1}{3}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>.</p></div></details>`,rawContent:`
You’re talking to your colleague at work when it comes up in the conversation that he has 2 children.

“What genders are they?” you ask. \\
“Well, I have at least one daughter,” he replies.

What is the probability the family has two daughters?

:::hint
You can assume that the probability of any child being a boy or girl to be equal and independent.
:::

:::hint
The answer is not 50%.
:::


:::solution
$\\frac{1}{3}$

When you first find out that your colleague has 2 children, the possibilities made known to you are:

1. Both children are boys  
2. The older child is a boy, and the younger child is a girl  
3. The older child is a girl, and the younger child is a boy  
4. Both children are girls

Each outcome comes at equal chance.

However, when he reveals that at least one of them is a girl, then you can eliminate the first possibility. That leaves 3 possibilities, each with equal chance. Thus, the chances of him having 2 daughters is $\\frac{1}{3}$.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{s as default};
