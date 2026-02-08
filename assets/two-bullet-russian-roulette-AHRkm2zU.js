const s={slug:"two-bullet-russian-roulette",metadata:{id:"puzzle-8",title:"Two-Bullet Russian Roulette",difficulty:{concepts:"medium",reasoning:"medium"},concepts:["probability"],tags:["has-solution"],credit:"Classic probability puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"After offending the toughest guy, Big Billy, at the saloon, he challenges you to a game of Russian Roulette. He takes out a revolver with 6 chambers and loads...",websitePreview:"After offending the toughest guy, Big Billy, at the saloon, he challenges you to a game of Russian Roulette. He takes out a revolver with 6 chambers and loads..."},content:`<p>After offending the toughest guy, Big Billy, at the saloon, he challenges you to a game of Russian Roulette. He takes out a revolver with 6 chambers and loads in two bullets in consecutive chambers as such:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>After spinning the chambers, he puts the gun to his head, pulls the trigger. There is a clear “click” as no bullet comes out. Big Billy hands you the gun.</p>
<p>“Your turn. You may spin the cylinder if you wish before shooting. If you survive, I’ll let you go.”</p>
<p>If you spin the cylinder, any of the chambers could be next with equal chance. Do you spin the cylinder?</p>
<p>Also consider the following scenarios:</p>
<ul>
<li>What if only 1 bullet is placed in the chamber?</li>
<li>What if the 2 bullets are placed on opposite chambers?</li>
<li>What if the 2 bullets are placed randomly in the chambers?</li>
</ul>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s look at the arrangement of bullets. After each shot, the cylinder rotates clockwise by 1 chamber.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>We know that the first shot is a dud, meaning that it came from chambers 1-4 with equal chance. The next chamber would then be 2, 3, 4, or 5 with equal chance, or a 1 in 4 chance of being a bullet. If we choose to spin the cylinder, we’ll end up with a 2 in 6 chance of landing on a bullet, or 1 in 3. Not spinning the cylinder gives us a better chance of survival.</p><p>Now for the other cases.</p><p><strong>1 Bullet</strong></p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>If there is only 1 bullet, the first click would be in chambers 1-5, so the next chamber would be 2, 3, 4, 5, or 6: a 1 in 5 chance of being a bullet. Spinning again would give us a 1 in 6 chance of landing on a bullet. You should spin the cylinder.</p><p><strong>2 Bullets on Opposite Sides</strong></p><div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>If there are 2 bullets on opposite sides, the first click would be in chambers 1, 2, 4, or 5; so the next chamber would be 2, 3, 5, or 6: a 1 in 4 chance of being a bullet. Spinning again would give us a 2 in 6 (or 1 in 3) chance of landing on a bullet. You shouldn’t spin the cylinder.</p><p><strong>2 Bullets Placed Randomly</strong></p><p>Notice that if we spin, we could land on any chamber with equal chance, leaving us a 1 in 3 chance of landing on a bullet no matter what the configuration of bullets are.</p><p>How about if we don’t spin? With 6 chambers and 2 bullets, there are <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mrow><mn>6</mn><mo>×</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>15</mn></mrow><annotation>\\frac{6 \\times 5}{2} = 15</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">6</span><span class="mbin mtight">×</span><span class="mord mtight">5</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">15</span></span></span></span> different configurations of bullets that we could end up in.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="4" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Thankfully, some of them are rotations of each other, which we will use the earlier steps to compute the chance of landing on a bullet.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="5" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>The first row of configurations are identical to the earlier example where the bullets were in chamber 5 and 6, which we know gives us a 1 in 4 chance of landing on a bullet. We can also see that there are 6 of 25 possible ways to land in this configuration in the first place = <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac></mrow><annotation>\\frac{2}{5}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance. This means that there is a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac></mrow><annotation>\\frac{2}{5}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance of a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow><annotation>\\frac{1}{4}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance of landing on the bullet.</p><p>The second row of configurations gives us the same result as the when the bullets were in chamber 4 and 6. By the same logic, there is a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac></mrow><annotation>\\frac{2}{5}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance of a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation>\\frac{1}{2}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance of landing on the bullet.</p><p>Finally, the last row of configurations gives us the same result as the when the bullets were in chamber 3 and 6. By the same logic, there is a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>5</mn></mfrac></mrow><annotation>\\frac{1}{5}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance of a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation>\\frac{1}{2}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance of landing on the bullet.</p><p>Working our probabilities out, we get <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mo>(</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>)</mo><mo>+</mo><mo>(</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo><mo>+</mo><mo>(</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo><mo>=</mo><mn>0.4</mn></mrow><annotation>(\\frac{2}{5} \\times \\frac{1}{4}) + (\\frac{2}{5} \\times \\frac{1}{2}) + (\\frac{1}{5} \\times \\frac{1}{2}) = 0.4</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mopen">(</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mopen">(</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mopen">(</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.4</span></span></span></span> or <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>40</mn><mi>%</mi></mrow><annotation>40\\%</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8056em;vertical-align:-0.0556em;"></span><span class="mord">40%</span></span></span></span> chance of landing on the bullet. Remembering that by spinning the chamber, we’ll land on a bullet with a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation>\\frac{1}{2}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> chance, or about <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>33.33</mn><mi>%</mi></mrow><annotation>33.33\\%</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8056em;vertical-align:-0.0556em;"></span><span class="mord">33.33%</span></span></span></span> chance. Therefore, on average, we’re better off spinning the cylinder.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
After offending the toughest guy, Big Billy, at the saloon, he challenges you to a game of Russian Roulette. He takes out a revolver with 6 chambers and loads in two bullets in consecutive chambers as such:

:::dynamic
\`\`\`yaml
title: "Revolver chamber with bullets in positions 5 and 6"
use: '#chamber'
props:
  bullets: [5, 6]
\`\`\`
:::

After spinning the chambers, he puts the gun to his head, pulls the trigger. There is a clear “click” as no bullet comes out. Big Billy hands you the gun.

“Your turn. You may spin the cylinder if you wish before shooting. If you survive, I’ll let you go.”

If you spin the cylinder, any of the chambers could be next with equal chance. Do you spin the cylinder?

Also consider the following scenarios:

* What if only 1 bullet is placed in the chamber?  
* What if the 2 bullets are placed on opposite chambers?  
* What if the 2 bullets are placed randomly in the chambers?

::::solution
Let’s look at the arrangement of bullets. After each shot, the cylinder rotates clockwise by 1 chamber.

:::dynamic
\`\`\`yaml
title: "Revolver chamber with bullets in positions 5 and 6"
use: '#chamber'
props:
  bullets: [5, 6]
\`\`\`
:::

We know that the first shot is a dud, meaning that it came from chambers 1-4 with equal chance. The next chamber would then be 2, 3, 4, or 5 with equal chance, or a 1 in 4 chance of being a bullet. If we choose to spin the cylinder, we’ll end up with a 2 in 6 chance of landing on a bullet, or 1 in 3. Not spinning the cylinder gives us a better chance of survival.

Now for the other cases.

**1 Bullet**

:::dynamic
\`\`\`yaml
title: "Revolver chamber with one bullet in position 6"
use: '#chamber'
props:
  bullets: [6]
\`\`\`
:::

If there is only 1 bullet, the first click would be in chambers 1-5, so the next chamber would be 2, 3, 4, 5, or 6: a 1 in 5 chance of being a bullet. Spinning again would give us a 1 in 6 chance of landing on a bullet. You should spin the cylinder.

**2 Bullets on Opposite Sides**

:::dynamic
\`\`\`yaml
title: "Revolver chamber with bullets in opposite positions 3 and 6"
use: '#chamber'
props:
  bullets: [3, 6]
\`\`\`
:::

If there are 2 bullets on opposite sides, the first click would be in chambers 1, 2, 4, or 5; so the next chamber would be 2, 3, 5, or 6: a 1 in 4 chance of being a bullet. Spinning again would give us a 2 in 6 (or 1 in 3) chance of landing on a bullet. You shouldn’t spin the cylinder.

**2 Bullets Placed Randomly**

Notice that if we spin, we could land on any chamber with equal chance, leaving us a 1 in 3 chance of landing on a bullet no matter what the configuration of bullets are.

How about if we don’t spin? With 6 chambers and 2 bullets, there are $\\frac{6 \\times 5}{2} = 15$ different configurations of bullets that we could end up in.

:::dynamic
\`\`\`yaml
title: "All 15 possible arrangements of 2 bullets in a 6-chamber revolver"
use: '#chamber'
props:
  diagram: all
\`\`\`
:::

Thankfully, some of them are rotations of each other, which we will use the earlier steps to compute the chance of landing on a bullet.

:::dynamic
\`\`\`yaml
title: "Bullet arrangements grouped by spacing between bullets"
use: '#chamber'
props:
  diagram: sorted
\`\`\`
:::

The first row of configurations are identical to the earlier example where the bullets were in chamber 5 and 6, which we know gives us a 1 in 4 chance of landing on a bullet. We can also see that there are 6 of 25 possible ways to land in this configuration in the first place = $\\frac{2}{5}$ chance. This means that there is a $\\frac{2}{5}$ chance of a $\\frac{1}{4}$ chance of landing on the bullet.

The second row of configurations gives us the same result as the when the bullets were in chamber 4 and 6. By the same logic, there is a $\\frac{2}{5}$ chance of a $\\frac{1}{2}$ chance of landing on the bullet.

Finally, the last row of configurations gives us the same result as the when the bullets were in chamber 3 and 6. By the same logic, there is a $\\frac{1}{5}$ chance of a $\\frac{1}{2}$ chance of landing on the bullet.

Working our probabilities out, we get $(\\frac{2}{5} \\times \\frac{1}{4}) + (\\frac{2}{5} \\times \\frac{1}{2}) + (\\frac{1}{5} \\times \\frac{1}{2}) = 0.4$ or $40\\%$ chance of landing on the bullet. Remembering that by spinning the chamber, we’ll land on a bullet with a $\\frac{1}{2}$ chance, or about $33.33\\%$ chance. Therefore, on average, we’re better off spinning the cylinder.
::::

:::component[chamber]
\`\`\`js

function drawBullet(options) {
  const { x, y, width, bullets, showNumbers = false, canvas, api } = options;

  const ctx = canvas.getContext('2d');

  const chamberTotalSize = Math.min(width, 300);

  const lineWidth = width * 0.007;

  // Configuration
  const chamberRadius = (chamberTotalSize - lineWidth) / 2;
  const bulletPositionRadius = chamberRadius * 0.60;
  const bulletRadius = chamberRadius * 0.25;
  const bulletInnerRadius = chamberRadius * 0.08;
  const bulletInnerInnerRadius = chamberRadius * 0.04;
  const centerX = x;
  const centerY = y;
  const bulletChambers = bullets || [];

  const fontSize = chamberRadius * 0.23;
  const fontFamily = api.getFont('default');

  function drawCircle({ x, y, r, fillStyle, strokeStyle, lineWidth }) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (!!fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
    if (!!strokeStyle && !!lineWidth) {
      if (!!strokeStyle) { ctx.strokeStyle = strokeStyle; }
      if (!!lineWidth) { ctx.lineWidth = lineWidth; }
      ctx.stroke();
    }
    ctx.restore();
  }

  // Draw the main chamber (large grey circle)
  drawCircle({ x: centerX, y: centerY, r: chamberRadius, fillStyle: '#6b7280', strokeStyle: '#1f2937', lineWidth });
  drawCircle({ x: centerX, y: centerY, r: chamberRadius * 0.95, strokeStyle: '#1f2937', lineWidth });

  // Draw chamber center circle (darker)
  drawCircle({ x: centerX, y: centerY, r: chamberRadius * 0.2, fillStyle: '#4b5563', strokeStyle: '#1f2937', lineWidth });

  // Draw the 6 chamber positions
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3 - Math.PI / 2;
    const x = centerX + Math.cos(angle) * bulletPositionRadius;
    const y = centerY + Math.sin(angle) * bulletPositionRadius;
    const hasBullet = bulletChambers.includes(i + 1);

    if (hasBullet) {
      // Draw bullet (gold concentric circles)
      drawCircle({ x, y, r: bulletRadius, fillStyle: '#d4af37', strokeStyle: '#1f2937', lineWidth });
      drawCircle({ x, y, r: bulletInnerRadius, fillStyle: '#b8941f', strokeStyle: '#1f2937', lineWidth });
      drawCircle({ x, y, r: bulletInnerInnerRadius, fillStyle: '#8b6914', strokeStyle: '#1f2937', lineWidth });
    } else {
      // Draw empty chamber
      drawCircle({ x, y, r: bulletRadius, fillStyle: '#222529', strokeStyle: '#1f2937', lineWidth });
    }

    if (showNumbers) {
      // Draw chamber number
      ctx.font = \`\${fontSize}px \${fontFamily}\`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = lineWidth * 2;
      ctx.strokeText((i + 1).toString(), x, y);
      ctx.fillText((i + 1).toString(), x, y);
    }
  }
}

function draw(options) {
  const { width, canvas, props, api } = options;

  const { diagram, bullets } = props;

  const drawBulletBaseProps = { canvas, api };
  if (diagram === 'all' || diagram === 'sorted') {
    const ARRANGEMENTS = {
      all: [
        [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]],
        [[2, 3], [2, 4], [2, 5], [2, 6], [3, 4]],
        [[3, 5], [3, 6], [4, 5], [4, 6], [5, 6]],
      ],
      sorted: [
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1]],
        [[1, 3], [2, 4], [3, 5], [4, 6], [1, 5], [2, 6]],
        [[1, 4], [2, 5], [3, 6]],
      ],
    };
    const arrangement = ARRANGEMENTS[diagram];

    const targetBulletWidth = 100;
    const gapRatio = 0.2;

    const ratio = (() => {
      // We have a target bullet size. Calculate how much we have to scale the
      // image down so that both "all" and "sorted" diagrams have the same bullet
      // size, despite a different number of columns.
      const overallMaxColCount = Object.values(ARRANGEMENTS)
        .map(arrangement => arrangement.reduce((n, row) => Math.max(n, row.length), 0))
        .reduce((maxColCount, colCount) => Math.max(maxColCount, colCount), 0);
    
      const overallMaxWidth = (overallMaxColCount + ((overallMaxColCount - 1) * gapRatio)) * targetBulletWidth;
      const ratio = Math.min(1, width / overallMaxWidth);
      return ratio;
    })();

    const bulletWidth = targetBulletWidth * ratio;
    const colCount = arrangement.reduce((n, row) => Math.max(n, row.length), 0);
    const colRatio = colCount + ((colCount - 1) * gapRatio);
    const rowCount = arrangement.length;
    const rowRatio = rowCount + ((rowCount - 1) * gapRatio);

    canvas.width = colRatio * bulletWidth;
    canvas.height = rowRatio * bulletWidth;
    for (let rowIndex = 0; rowIndex < arrangement.length; rowIndex++) {
      for (let colIndex = 0; colIndex < arrangement[rowIndex].length; colIndex++) {
        const x = (colIndex * (1 + gapRatio) + 0.5) * bulletWidth;
        const y = (rowIndex * (1 + gapRatio) + 0.5) * bulletWidth;
        drawBullet({
          ...drawBulletBaseProps,
          x,
          y,
          width: bulletWidth,
          bullets: arrangement[rowIndex][colIndex],
          showNumbers: false,
        });
      }
    }

  } else {
    const imageSize = Math.min(width, 300);
    canvas.width = imageSize;
    canvas.height = imageSize;
    drawBullet({
      ...drawBulletBaseProps,
      x: imageSize / 2,
      y: imageSize / 2,
      width: imageSize,
      bullets: props.bullets,
      showNumbers: true,
    });
  }
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#chamber",props:{bullets:[5,6]},title:"Revolver chamber with bullets in positions 5 and 6",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/probability/two-bullet-russian-roulette.md"},{type:"dynamic",mode:"component",componentId:"#chamber",props:{bullets:[5,6]},title:"Revolver chamber with bullets in positions 5 and 6",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/probability/two-bullet-russian-roulette.md"},{type:"dynamic",mode:"component",componentId:"#chamber",props:{bullets:[6]},title:"Revolver chamber with one bullet in position 6",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/probability/two-bullet-russian-roulette.md"},{type:"dynamic",mode:"component",componentId:"#chamber",props:{bullets:[3,6]},title:"Revolver chamber with bullets in opposite positions 3 and 6",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/probability/two-bullet-russian-roulette.md"},{type:"dynamic",mode:"component",componentId:"#chamber",props:{diagram:"all"},title:"All 15 possible arrangements of 2 bullets in a 6-chamber revolver",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/probability/two-bullet-russian-roulette.md"},{type:"dynamic",mode:"component",componentId:"#chamber",props:{diagram:"sorted"},title:"Bullet arrangements grouped by spacing between bullets",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/probability/two-bullet-russian-roulette.md"}],inlineComponents:{chamber:{id:"chamber",code:`
function drawBullet(options) {
  const { x, y, width, bullets, showNumbers = false, canvas, api } = options;

  const ctx = canvas.getContext('2d');

  const chamberTotalSize = Math.min(width, 300);

  const lineWidth = width * 0.007;

  // Configuration
  const chamberRadius = (chamberTotalSize - lineWidth) / 2;
  const bulletPositionRadius = chamberRadius * 0.60;
  const bulletRadius = chamberRadius * 0.25;
  const bulletInnerRadius = chamberRadius * 0.08;
  const bulletInnerInnerRadius = chamberRadius * 0.04;
  const centerX = x;
  const centerY = y;
  const bulletChambers = bullets || [];

  const fontSize = chamberRadius * 0.23;
  const fontFamily = api.getFont('default');

  function drawCircle({ x, y, r, fillStyle, strokeStyle, lineWidth }) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (!!fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
    if (!!strokeStyle && !!lineWidth) {
      if (!!strokeStyle) { ctx.strokeStyle = strokeStyle; }
      if (!!lineWidth) { ctx.lineWidth = lineWidth; }
      ctx.stroke();
    }
    ctx.restore();
  }

  // Draw the main chamber (large grey circle)
  drawCircle({ x: centerX, y: centerY, r: chamberRadius, fillStyle: '#6b7280', strokeStyle: '#1f2937', lineWidth });
  drawCircle({ x: centerX, y: centerY, r: chamberRadius * 0.95, strokeStyle: '#1f2937', lineWidth });

  // Draw chamber center circle (darker)
  drawCircle({ x: centerX, y: centerY, r: chamberRadius * 0.2, fillStyle: '#4b5563', strokeStyle: '#1f2937', lineWidth });

  // Draw the 6 chamber positions
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3 - Math.PI / 2;
    const x = centerX + Math.cos(angle) * bulletPositionRadius;
    const y = centerY + Math.sin(angle) * bulletPositionRadius;
    const hasBullet = bulletChambers.includes(i + 1);

    if (hasBullet) {
      // Draw bullet (gold concentric circles)
      drawCircle({ x, y, r: bulletRadius, fillStyle: '#d4af37', strokeStyle: '#1f2937', lineWidth });
      drawCircle({ x, y, r: bulletInnerRadius, fillStyle: '#b8941f', strokeStyle: '#1f2937', lineWidth });
      drawCircle({ x, y, r: bulletInnerInnerRadius, fillStyle: '#8b6914', strokeStyle: '#1f2937', lineWidth });
    } else {
      // Draw empty chamber
      drawCircle({ x, y, r: bulletRadius, fillStyle: '#222529', strokeStyle: '#1f2937', lineWidth });
    }

    if (showNumbers) {
      // Draw chamber number
      ctx.font = \`\${fontSize}px \${fontFamily}\`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = lineWidth * 2;
      ctx.strokeText((i + 1).toString(), x, y);
      ctx.fillText((i + 1).toString(), x, y);
    }
  }
}

function draw(options) {
  const { width, canvas, props, api } = options;

  const { diagram, bullets } = props;

  const drawBulletBaseProps = { canvas, api };
  if (diagram === 'all' || diagram === 'sorted') {
    const ARRANGEMENTS = {
      all: [
        [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]],
        [[2, 3], [2, 4], [2, 5], [2, 6], [3, 4]],
        [[3, 5], [3, 6], [4, 5], [4, 6], [5, 6]],
      ],
      sorted: [
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1]],
        [[1, 3], [2, 4], [3, 5], [4, 6], [1, 5], [2, 6]],
        [[1, 4], [2, 5], [3, 6]],
      ],
    };
    const arrangement = ARRANGEMENTS[diagram];

    const targetBulletWidth = 100;
    const gapRatio = 0.2;

    const ratio = (() => {
      // We have a target bullet size. Calculate how much we have to scale the
      // image down so that both "all" and "sorted" diagrams have the same bullet
      // size, despite a different number of columns.
      const overallMaxColCount = Object.values(ARRANGEMENTS)
        .map(arrangement => arrangement.reduce((n, row) => Math.max(n, row.length), 0))
        .reduce((maxColCount, colCount) => Math.max(maxColCount, colCount), 0);
    
      const overallMaxWidth = (overallMaxColCount + ((overallMaxColCount - 1) * gapRatio)) * targetBulletWidth;
      const ratio = Math.min(1, width / overallMaxWidth);
      return ratio;
    })();

    const bulletWidth = targetBulletWidth * ratio;
    const colCount = arrangement.reduce((n, row) => Math.max(n, row.length), 0);
    const colRatio = colCount + ((colCount - 1) * gapRatio);
    const rowCount = arrangement.length;
    const rowRatio = rowCount + ((rowCount - 1) * gapRatio);

    canvas.width = colRatio * bulletWidth;
    canvas.height = rowRatio * bulletWidth;
    for (let rowIndex = 0; rowIndex < arrangement.length; rowIndex++) {
      for (let colIndex = 0; colIndex < arrangement[rowIndex].length; colIndex++) {
        const x = (colIndex * (1 + gapRatio) + 0.5) * bulletWidth;
        const y = (rowIndex * (1 + gapRatio) + 0.5) * bulletWidth;
        drawBullet({
          ...drawBulletBaseProps,
          x,
          y,
          width: bulletWidth,
          bullets: arrangement[rowIndex][colIndex],
          showNumbers: false,
        });
      }
    }

  } else {
    const imageSize = Math.min(width, 300);
    canvas.width = imageSize;
    canvas.height = imageSize;
    drawBullet({
      ...drawBulletBaseProps,
      x: imageSize / 2,
      y: imageSize / 2,
      width: imageSize,
      bullets: props.bullets,
      showNumbers: true,
    });
  }
}`,startLine:119}}};export{s as default};
