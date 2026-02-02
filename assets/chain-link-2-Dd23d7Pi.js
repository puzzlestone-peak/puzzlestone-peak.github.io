const s={slug:"chain-link-2",metadata:{id:"puzzle-24",title:"Chain Link 2",difficulty:"medium",concepts:["optimisation","binary"],tags:["has-solution"],credit:"Classic puzzle of unknown origin (appears in various puzzle collections without attribution). Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"An apprentice is working for you, the village’s master blacksmith, for 21 days. For payment, you have agreed to give him a gold chain with 21 links, one link...",websitePreview:"An apprentice is working for you, the village’s master blacksmith, for 21 days. For payment, you have agreed to give him a gold chain with 21 links, one link..."},content:`<p>An apprentice is working for you, the village’s master blacksmith, for 21 days. For payment, you have agreed to give him a gold chain with 21 links, one link for each day. However, you both don’t trust each other: you don’t want to pay him the entire length of the chain, only for him to not show up. Likewise, he doesn’t want to work for you for 21 days, only to find out that he wouldn’t get paid. You come to an agreement: you’ll give him a chain link after each day of work.</p>
<p>You can split the chain by cutting a link open, separating the chain, then welding it back. To minimise the damage to the chain (and the work you have to do), you want to minimise the number of cuts made to the chain. What’s the minimum number of chain links you need to cut to allow this transaction?</p>
<p>Day 1: you give the apprentice the chain of length 1<br>
Day 2: the apprentice returns the chain of length 1, and you give him a chain of length 2<br>
Day 3: you give the apprentice the chain of length 1</p>
<p>How can we extend this to 21 days?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>if the chain link is of length 3, we can make 1 cut to create two chains of length 1 and 2 links respectively. You can perform the following transactions each day:</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>if you have a chain of 6 links, you can cut the 3rd link in order to make 3 chains of length 2, 3, and 1 (the cut link).</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>We can do this with 4 cuts. First, cut the 5th, 12th, and 21st link. When welding the links shut, combine 2 of the cut links into a chain of length 2. This leaves us with chains of length 1, 2, 4, 6, and 8.</p><p>Day 1: You pay with the chain of length 1.<br>
Day 2: The apprentice returns the previous day’s chain and you give him the chain of length 2.<br>
Day 3: You pay with the chain of length 1, giving him 3 links in total.<br>
Day 4: The apprentice returns the previous chains and you give him the chain of length 4.</p><p>In fact, as long as you can use these chains to represent all lengths from 1 to 21, you can make your apprentice all previous chains and pay him the exact amount. The representations are as follows:</p>




























































































<table><thead><tr><th>Day</th><th>Breakdown</th></tr></thead><tbody><tr><td>1</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn></mrow><annotation>1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>2</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn></mrow><annotation>2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></td></tr><tr><td>3</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn><mo>+</mo><mn>1</mn></mrow><annotation>2 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>4</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>4</mn></mrow><annotation>4</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></td></tr><tr><td>5</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>4</mn><mo>+</mo><mn>1</mn></mrow><annotation>4 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>6</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>4</mn><mo>+</mo><mn>2</mn></mrow><annotation>4 + 2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></td></tr><tr><td>7</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>4</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn></mrow><annotation>4 + 2 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>8</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn></mrow><annotation>8</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">8</span></span></span></span></td></tr><tr><td>9</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>+</mo><mn>1</mn></mrow><annotation>8 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>10</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>+</mo><mn>2</mn></mrow><annotation>8 + 2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></td></tr><tr><td>11</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn></mrow><annotation>8 + 2 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>12</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>+</mo><mn>4</mn></mrow><annotation>8 + 4</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></td></tr><tr><td>13</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>1</mn></mrow><annotation>8 + 4 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>14</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>2</mn></mrow><annotation>8 + 4 + 2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></td></tr><tr><td>15</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn></mrow><annotation>8 + 4 + 2 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>16</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>6</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>2</mn></mrow><annotation>6 + 8 + 2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></td></tr><tr><td>17</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>6</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn></mrow><annotation>6 + 8 + 2 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>18</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>6</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>4</mn></mrow><annotation>6 + 8 + 4</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></td></tr><tr><td>19</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>6</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>1</mn></mrow><annotation>6 + 8 + 4 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr><tr><td>20</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>6</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>2</mn></mrow><annotation>6 + 8 + 4 + 2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></td></tr><tr><td>21</td><td><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>6</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn></mrow><annotation>6 + 8 + 4 + 2 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr></tbody></table><p>To see how this works, a good starting point would be to look at binary representations of numbers. As a refresher, the binary representation of a number indicates how it can be represented as a sum of unique powers of two. For example, <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>45</mn><mo>=</mo><mn>32</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>1</mn></mrow><annotation>45 = 32 + 8 + 4 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">32</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>. If we have chains of length 32, 8, 4, and 1, then we can make a full payment of 45. By extension, if we have chains of length 1, 2, 4, 8, 16, and 32, we can represent all the numbers 0 to 63 (all 6-digit binary numbers). In general, if we have <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation>k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> chains in ascending powers of 2 (<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn></mrow><annotation>1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn></mrow><annotation>2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>4</mn></mrow><annotation>4</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span>, … <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mn>2</mn><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation>2^{k-1}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span>), you can represent all the numbers from <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>0</mn></mrow><annotation>0</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> to <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation>2^k - 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.9324em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>.</p><p>Unlike the previous puzzle, 21 is 6 more than 15. As earlier mentioned, we can represent all the numbers from 0 to 15 with 4 chains of length 1, 2, 4, and 8. To be conservative, the remaining 6 chain links can be on a single chain. For payments of more than 15 chains, we pay with the chain of length 6, then pay the remainder with the original method (since it will now be within the 0-15 range). That leaves us with 5 chains of length 1, 2, 4, 6, and 8 respectively. We can do this by cutting 4 chain links to produce 5 shorter chains.</p><p>Can we do better than 4 cuts? Yes! Notice that if we’re given a chain of length 6 and we cut the 3rd link. From a single cut, we can get 3 pieces of chain of length 2, 3, and 1 (the link we cut).</p><p>We still want to split the chain  to get shorter chains of length 4, 6, and 8, so let’s cut them at the 5th, 12th, and 21st links. When re-welding the links, we can link 2 of the links to form a 2-length chain, giving us the 5 chains we need.</p></div></details>`,rawContent:`
An apprentice is working for you, the village’s master blacksmith, for 21 days. For payment, you have agreed to give him a gold chain with 21 links, one link for each day. However, you both don’t trust each other: you don’t want to pay him the entire length of the chain, only for him to not show up. Likewise, he doesn’t want to work for you for 21 days, only to find out that he wouldn’t get paid. You come to an agreement: you’ll give him a chain link after each day of work.

You can split the chain by cutting a link open, separating the chain, then welding it back. To minimise the damage to the chain (and the work you have to do), you want to minimise the number of cuts made to the chain. What’s the minimum number of chain links you need to cut to allow this transaction?

Day 1: you give the apprentice the chain of length 1  
Day 2: the apprentice returns the chain of length 1, and you give him a chain of length 2  
Day 3: you give the apprentice the chain of length 1

How can we extend this to 21 days?

:::hint
if the chain link is of length 3, we can make 1 cut to create two chains of length 1 and 2 links respectively. You can perform the following transactions each day:
:::

:::hint
if you have a chain of 6 links, you can cut the 3rd link in order to make 3 chains of length 2, 3, and 1 (the cut link).
:::


:::solution
We can do this with 4 cuts. First, cut the 5th, 12th, and 21st link. When welding the links shut, combine 2 of the cut links into a chain of length 2. This leaves us with chains of length 1, 2, 4, 6, and 8.

Day 1: You pay with the chain of length 1.  
Day 2: The apprentice returns the previous day’s chain and you give him the chain of length 2.  
Day 3: You pay with the chain of length 1, giving him 3 links in total.  
Day 4: The apprentice returns the previous chains and you give him the chain of length 4.

In fact, as long as you can use these chains to represent all lengths from 1 to 21, you can make your apprentice all previous chains and pay him the exact amount. The representations are as follows:

| Day | Breakdown           |
|-----|---------------------|
| 1   | $1$                 |
| 2   | $2$                 |
| 3   | $2 + 1$             |
| 4   | $4$                 |
| 5   | $4 + 1$             |
| 6   | $4 + 2$             |
| 7   | $4 + 2 + 1$         |
| 8   | $8$                 |
| 9   | $8 + 1$             |
| 10  | $8 + 2$             |
| 11  | $8 + 2 + 1$         |
| 12  | $8 + 4$             |
| 13  | $8 + 4 + 1$         |
| 14  | $8 + 4 + 2$         |
| 15  | $8 + 4 + 2 + 1$     |
| 16  | $6 + 8 + 2$         |
| 17  | $6 + 8 + 2 + 1$     |
| 18  | $6 + 8 + 4$         |
| 19  | $6 + 8 + 4 + 1$     |
| 20  | $6 + 8 + 4 + 2$     |
| 21  | $6 + 8 + 4 + 2 + 1$ |

To see how this works, a good starting point would be to look at binary representations of numbers. As a refresher, the binary representation of a number indicates how it can be represented as a sum of unique powers of two. For example, $45 = 32 + 8 + 4 + 1$. If we have chains of length 32, 8, 4, and 1, then we can make a full payment of 45. By extension, if we have chains of length 1, 2, 4, 8, 16, and 32, we can represent all the numbers 0 to 63 (all 6-digit binary numbers). In general, if we have $k$ chains in ascending powers of 2 ($1$, $2$, $4$, … $2^{k-1}$), you can represent all the numbers from $0$ to $2^k - 1$.

Unlike the previous puzzle, 21 is 6 more than 15. As earlier mentioned, we can represent all the numbers from 0 to 15 with 4 chains of length 1, 2, 4, and 8. To be conservative, the remaining 6 chain links can be on a single chain. For payments of more than 15 chains, we pay with the chain of length 6, then pay the remainder with the original method (since it will now be within the 0-15 range). That leaves us with 5 chains of length 1, 2, 4, 6, and 8 respectively. We can do this by cutting 4 chain links to produce 5 shorter chains.

Can we do better than 4 cuts? Yes! Notice that if we’re given a chain of length 6 and we cut the 3rd link. From a single cut, we can get 3 pieces of chain of length 2, 3, and 1 (the link we cut).

We still want to split the chain  to get shorter chains of length 4, 6, and 8, so let’s cut them at the 5th, 12th, and 21st links. When re-welding the links, we can link 2 of the links to form a 2-length chain, giving us the 5 chains we need.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{s as default};
