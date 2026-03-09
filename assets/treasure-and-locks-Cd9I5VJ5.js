const e={slug:"treasure-and-locks",metadata:{id:"puzzle-78",title:"Treasure and Locks",concepts:["combinatorics"],difficulty:{concepts:"hard",reasoning:"hard"},tags:["has-solution"],credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-03-05",lastUpdated:"2026-03-05",preview:"Thirteen pirates put their treasure in a chest. They want the chest to be openable whenever a majority of them (7 or more) agree, but not when only a minority...",websitePreview:"Thirteen pirates put their treasure in a chest. They want the chest to be openable whenever a majority of them (7 or more) agree, but not when only a minority..."},content:`<p>Thirteen pirates put their treasure in a chest. They want the chest to be openable whenever a majority of them (7 or more) agree, but not when only a minority (6 or fewer) are present. Since they don’t trust each other, they consult a locksmith to craft such a locking mechanism.</p>
<p>The locksmith says such a mechanism isn't possible, but he offers an alternative solution. He locks a number of padlocks on the chest such that every lock must be unlocked to open the chest. He then distributes the keys amongst the pirates. A lock can have multiple keys that open it, but each key can only open the lock it's made for.</p>
<p>How can they do this, and what is the minimum number of locks needed?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Think about what happens when a lock blocks a group of pirates from opening it. A group fails to open the chest if there is at least one lock for which nobody in the group has a key.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For every possible subset of 7 pirates, assign them a lock and give each pirate a key to that lock. This requires <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mrow><mo>(</mo><mfrac><mn>13</mn><mn>6</mn></mfrac><mo>)</mo></mrow><mo>=</mo><mn>1716</mn></mrow><annotation>\\binom{13}{6} = 1716</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.2451em;vertical-align:-0.35em;"></span><span class="mord"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size1">(</span></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8951em;"><span style="top:-2.355em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">6</span></span></span></span><span style="top:-3.144em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">13</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size1">)</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1716</span></span></span></span> locks.</p><p>To prove that this solution works, we need to show 2 things:</p><ol>
<li>For every set of only 6 or less pirates, they cannot open the chest.</li>
<li>For every set of 7 or more pirates, they can open the chest.</li>
</ol><p><strong>For every set of only 6 or less pirates, they cannot open the chest.</strong></p><p>Let's consider an arbitrary group of 6 or less pirates. Then there must be at least 7 pirates not in this group. Since there exists a unique lock for every possible subset of 7 pirates, this lock would keep those 6 pirates out.</p><p><strong>For every set of 7 or more pirates, they can open the chest.</strong></p><p>Let's consider an arbitrary group of 7 or more pirates. We want to show that they can open the chest.</p><p>Proof by contradiction: let's assume otherwise, that these pirates cannot open the chest. This means there exists a lock that exists on the chest whose key isn't given to any of the 7 pirates, i.e. the keys must have been given to at most 6 of the remaining pirates not in the group. However, we know that every lock has been given to 7 pirates, leading to a contradiction.</p><p>Thus, these 7 pirates can open the chest.</p></div></details>`,rawContent:`
Thirteen pirates put their treasure in a chest. They want the chest to be openable whenever a majority of them (7 or more) agree, but not when only a minority (6 or fewer) are present. Since they don’t trust each other, they consult a locksmith to craft such a locking mechanism.

The locksmith says such a mechanism isn't possible, but he offers an alternative solution. He locks a number of padlocks on the chest such that every lock must be unlocked to open the chest. He then distributes the keys amongst the pirates. A lock can have multiple keys that open it, but each key can only open the lock it's made for.

How can they do this, and what is the minimum number of locks needed?

:::hint
Think about what happens when a lock blocks a group of pirates from opening it. A group fails to open the chest if there is at least one lock for which nobody in the group has a key.
:::


:::solution
For every possible subset of 7 pirates, assign them a lock and give each pirate a key to that lock. This requires $\\binom{13}{6} = 1716$ locks.

To prove that this solution works, we need to show 2 things:
1. For every set of only 6 or less pirates, they cannot open the chest.
2. For every set of 7 or more pirates, they can open the chest.

**For every set of only 6 or less pirates, they cannot open the chest.**

Let's consider an arbitrary group of 6 or less pirates. Then there must be at least 7 pirates not in this group. Since there exists a unique lock for every possible subset of 7 pirates, this lock would keep those 6 pirates out.

**For every set of 7 or more pirates, they can open the chest.**

Let's consider an arbitrary group of 7 or more pirates. We want to show that they can open the chest.

Proof by contradiction: let's assume otherwise, that these pirates cannot open the chest. This means there exists a lock that exists on the chest whose key isn't given to any of the 7 pirates, i.e. the keys must have been given to at most 6 of the remaining pirates not in the group. However, we know that every lock has been given to 7 pirates, leading to a contradiction.

Thus, these 7 pirates can open the chest.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
