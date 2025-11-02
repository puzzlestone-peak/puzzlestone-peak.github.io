const s={slug:"tower-of-hanoi",metadata:{id:"5",title:"The Tower of Hanoi",concepts:["recursion","algorithms","mathematical-induction"],difficulty:"advanced",tags:["classic","recursive","algorithmic"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",preview:"The Puzzle You have: Three rods (A, B, C) n disks of different sizes, stacked on rod A in decreasing size (largest at bottom) Rules : Move one disk at a time...",websitePreview:"The Puzzle You have: Three rods (A, B, C) n disks of different sizes, stacked on rod A in decreasing size (largest at bottom) Rules : Move one disk at a time..."},content:`<h2 class="markdown-h1">The Puzzle</h2>
<p>You have:</p>
<ul>
<li>Three rods (A, B, C)</li>
<li>n disks of different sizes, stacked on rod A in decreasing size (largest at bottom)</li>
</ul>
<p><strong>Rules</strong>:</p>
<ol>
<li>Move one disk at a time</li>
<li>Each move transfers the top disk from one rod to another</li>
<li>Never place a larger disk on top of a smaller disk</li>
</ol>
<p><strong>Goal</strong>: Move all disks from rod A to rod C.</p>
<h2 class="markdown-h1">The Questions</h2>
<ol>
<li>What's the minimum number of moves required for n disks?</li>
<li>What's the algorithm to achieve this minimum?</li>
</ol>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Try solving for small values first. n=1? n=2? n=3? Do you see a pattern?</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Recursion</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>To move n disks, think about moving n-1 disks first...</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: The minimum number of moves is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^n - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7477em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>.</p><h3 class="markdown-h2">The Recursive Algorithm</h3><p>To move n disks from rod A to rod C (using rod B as auxiliary):</p><ol>
<li>Move n-1 disks from A to B (using C as auxiliary)</li>
<li>Move the largest disk from A to C</li>
<li>Move n-1 disks from B to C (using A as auxiliary)</li>
</ol><h3 class="markdown-h2">Why This Works</h3><p><strong>Base case</strong> (n=1): Simply move the disk from A to C. Moves: 1 = <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>1</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^1 - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> ✓</p><p><strong>Inductive step</strong>: Assume the formula works for n-1 disks.</p><ul>
<li>Step 1: Move n-1 disks from A to B: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{n-1} - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> moves</li>
<li>Step 2: Move largest disk from A to C: 1 move</li>
<li>Step 3: Move n-1 disks from B to C: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{n-1} - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> moves</li>
</ul><p>Total: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">(2^{n-1} - 1) + 1 + (2^{n-1} - 1) = 2 \\cdot 2^{n-1} - 1 = 2^n - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7477em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> ✓</p><h3 class="markdown-h2">Concrete Examples</h3><table>
<thead>
<tr>
<th>n</th>
<th>Moves</th>
<th>Time at 1 move/second</th>
</tr>
</thead>
<tbody>
<tr>
<td>3</td>
<td>7</td>
<td>7 seconds</td>
</tr>
<tr>
<td>4</td>
<td>15</td>
<td>15 seconds</td>
</tr>
<tr>
<td>5</td>
<td>31</td>
<td>31 seconds</td>
</tr>
<tr>
<td>10</td>
<td>1,023</td>
<td>17 minutes</td>
</tr>
<tr>
<td>20</td>
<td>1,048,575</td>
<td>12 days</td>
</tr>
<tr>
<td>64</td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>64</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{64} - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">64</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
<td>585 billion years</td>
</tr>
</tbody>
</table><h3 class="markdown-h2">The Legend</h3><p>According to legend, in a temple in Benares (India), monks have been moving 64 golden disks according to these rules since the beginning of time. When they finish, the world will end.</p><p>At one move per second, this would take about 585 billion years (much longer than the current age of the universe, ≈13.8 billion years), so we're safe for now!</p><h3 class="markdown-h2">Why It's Optimal</h3><p><strong>Proof by contradiction</strong>:</p><p>Each disk must be moved at least once. Consider the largest disk:</p><ul>
<li>Before moving it, all n-1 smaller disks must be on rod B</li>
<li>This requires at least <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{n-1} - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> moves (by induction)</li>
<li>Moving the largest disk: 1 move</li>
<li>After moving it, all n-1 disks must move to rod C</li>
<li>This requires at least <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{n-1} - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> moves</li>
</ul><p>Total: at least <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>+</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{n-1} - 1 + 1 + 2^{n-1} - 1 = 2^n - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7477em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> moves.</p><p>Since we have an algorithm achieving this bound, it's optimal.</p><h3 class="markdown-h2">Variations</h3><p><strong>Frame-Stewart algorithm</strong>: With 4 pegs, the minimum is unknown but approximately <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mi mathvariant="normal">/</mi><msqrt><mn>2</mn></msqrt></mrow><annotation encoding="application/x-tex">2^n/\\sqrt{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1572em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mord">/</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span> moves.</p><p><strong>Cyclic Hanoi</strong>: Moves restricted to A→B, B→C, C→A (clockwise only). Requires different strategy!</p><p><strong>Reve's Puzzle</strong>: The general k-peg version is still an open problem.</p><h3 class="markdown-h2">Applications</h3><ul>
<li><strong>Recursion teaching</strong>: Classic example in computer science</li>
<li><strong>Backup systems</strong>: Incremental backup strategies inspired by Hanoi</li>
<li><strong>Error-correcting codes</strong>: Gray codes (related to Hanoi) used in signal encoding</li>
<li><strong>Neuroscience</strong>: Used to study problem-solving and prefrontal cortex function</li>
</ul></div></details>`,rawContent:`
# The Puzzle

You have:
- Three rods (A, B, C)
- n disks of different sizes, stacked on rod A in decreasing size (largest at bottom)

**Rules**:
1. Move one disk at a time
2. Each move transfers the top disk from one rod to another
3. Never place a larger disk on top of a smaller disk

**Goal**: Move all disks from rod A to rod C.

# The Questions

1. What's the minimum number of moves required for n disks?
2. What's the algorithm to achieve this minimum?

:::hint
Try solving for small values first. n=1? n=2? n=3? Do you see a pattern?
:::

:::hint[Recursion]
To move n disks, think about moving n-1 disks first...
:::

:::solution
**Answer**: The minimum number of moves is $2^n - 1$.

## The Recursive Algorithm

To move n disks from rod A to rod C (using rod B as auxiliary):

1. Move n-1 disks from A to B (using C as auxiliary)
2. Move the largest disk from A to C
3. Move n-1 disks from B to C (using A as auxiliary)

## Why This Works

**Base case** (n=1): Simply move the disk from A to C. Moves: 1 = $2^1 - 1$ ✓

**Inductive step**: Assume the formula works for n-1 disks.
- Step 1: Move n-1 disks from A to B: $2^{n-1} - 1$ moves
- Step 2: Move largest disk from A to C: 1 move
- Step 3: Move n-1 disks from B to C: $2^{n-1} - 1$ moves

Total: $(2^{n-1} - 1) + 1 + (2^{n-1} - 1) = 2 \\cdot 2^{n-1} - 1 = 2^n - 1$ ✓

## Concrete Examples

| n | Moves | Time at 1 move/second |
|---|-------|----------------------|
| 3 | 7 | 7 seconds |
| 4 | 15 | 15 seconds |
| 5 | 31 | 31 seconds |
| 10 | 1,023 | 17 minutes |
| 20 | 1,048,575 | 12 days |
| 64 | $2^{64} - 1$ | 585 billion years |

## The Legend

According to legend, in a temple in Benares (India), monks have been moving 64 golden disks according to these rules since the beginning of time. When they finish, the world will end.

At one move per second, this would take about 585 billion years (much longer than the current age of the universe, ≈13.8 billion years), so we're safe for now!

## Why It's Optimal

**Proof by contradiction**:

Each disk must be moved at least once. Consider the largest disk:
- Before moving it, all n-1 smaller disks must be on rod B
- This requires at least $2^{n-1} - 1$ moves (by induction)
- Moving the largest disk: 1 move
- After moving it, all n-1 disks must move to rod C
- This requires at least $2^{n-1} - 1$ moves

Total: at least $2^{n-1} - 1 + 1 + 2^{n-1} - 1 = 2^n - 1$ moves.

Since we have an algorithm achieving this bound, it's optimal.

## Variations

**Frame-Stewart algorithm**: With 4 pegs, the minimum is unknown but approximately $2^n/\\sqrt{2}$ moves.

**Cyclic Hanoi**: Moves restricted to A→B, B→C, C→A (clockwise only). Requires different strategy!

**Reve's Puzzle**: The general k-peg version is still an open problem.

## Applications

- **Recursion teaching**: Classic example in computer science
- **Backup systems**: Incremental backup strategies inspired by Hanoi
- **Error-correcting codes**: Gray codes (related to Hanoi) used in signal encoding
- **Neuroscience**: Used to study problem-solving and prefrontal cortex function
:::
`,dynamicBlocks:[]};export{s as default};
