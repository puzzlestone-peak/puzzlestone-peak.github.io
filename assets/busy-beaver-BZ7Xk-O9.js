const s={slug:"busy-beaver",metadata:{title:"The Busy Beaver Problem",questionPreview:`What is the maximum number of steps a simple computer program can run before halting? This seemingly innocent question leads to uncomputable numbers that grow faster than any function you can define.
`,concepts:["computability","turing-machines","complexity"],difficulty:"open",tags:["open","theoretical-cs","undecidable"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z"},content:`<h2 class="markdown-h1">Turing Machines</h2>
<p>A <strong>Turing machine</strong> is a simple model of computation:</p>
<ul>
<li>An infinite tape divided into cells, each containing 0 or 1</li>
<li>A read/write head that can move left or right</li>
<li>A finite set of states</li>
<li>A transition function: based on current state and symbol read, write a new symbol, move left/right, and change state</li>
</ul>
<p>Despite their simplicity, Turing machines can compute anything any computer can compute.</p>
<h2 class="markdown-h1">The Busy Beaver Game</h2>
<p>Given n states, what is the <strong>longest-running</strong> n-state Turing machine that eventually halts (starting from a blank tape)?</p>
<p>Define:</p>
<ul>
<li><strong>BB(n)</strong>: The maximum number of steps any n-state Turing machine can run before halting</li>
<li><strong>Σ(n)</strong>: The maximum number of 1s any n-state Turing machine can write before halting</li>
</ul>
<p>These are called <strong>Busy Beaver numbers</strong>.</p>
<p><strong>Examples</strong>:</p>
<ul>
<li>BB(1) = 1 (proven)</li>
<li>BB(2) = 6 (proven)</li>
<li>BB(3) = 21 (proven)</li>
<li>BB(4) = 107 (proven)</li>
<li>BB(5) ≥ 47,176,870 (current champion, may not be optimal)</li>
<li>BB(6) ≥ 7.4 × 10^36534 (lower bound, true value unknown)</li>
</ul>
<h2 class="markdown-h1">The Uncomputability</h2>
<p>Here's the shocking fact: <strong>BB(n) is uncomputable.</strong></p>
<p>There is <strong>no algorithm</strong> that can compute BB(n) for all n. This isn't a matter of insufficient computing power—it's logically impossible.</p>
<h2 class="markdown-h1">The Research Challenge</h2>
<p><strong>Part A</strong>: Explain why determining whether an arbitrary Turing machine halts is undecidable (the Halting Problem). Connect this to why BB(n) is uncomputable.</p>
<p><strong>Part B</strong>: Despite being uncomputable, we know exact values for small n. Explain how we can compute BB(1), BB(2), BB(3), BB(4) by exhaustive search, and why this approach fails for larger n.</p>
<p><strong>Part C</strong>: The growth rate of BB(n) is extraordinary. Prove that BB(n) grows faster than any computable function. Specifically, show that for any computable function f, there exists N such that BB(n) > f(n) for all n > N.</p>
<p><strong>Part D</strong>: Research the concept of "Busy Beaver from below" — machines we've verified halt and produce large values. What is the current champion for BB(5)? Why is proving it's optimal so difficult?</p>
<p><strong>Part E</strong>: Explore connections to logic and set theory. How do Busy Beaver numbers relate to independence results like Gödel's incompleteness theorem?</p>
<p><strong>Part F</strong>: The <strong>Busy Beaver frontier</strong> is the largest n for which BB(n) is known. As of 2025, we know BB(1) through BB(4) exactly. Estimate: Will we ever know BB(10)? Why or why not?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part A, use proof by contradiction. Assume we can compute BB(n), then construct a machine that solves the Halting Problem.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part B, with n states and 2 symbols, there are only finitely many possible n-state Turing machines (though the number grows extremely fast).</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part C, if f is computable, construct an n-state machine that computes f(n), adds 1, and outputs that many 1s. This machine runs for more than f(n) steps.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part E, there exist specific values of n where determining BB(n) requires resolving open problems in mathematics (like the Riemann Hypothesis).</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: Parts A-C have proofs below. Parts D-F discuss frontiers and unsolvability.</p><h3 class="markdown-h2">Part A: The Halting Problem and Uncomputability</h3><p><strong>Halting Problem</strong>: Given a Turing machine M and input x, will M halt when run on x?</p><p><strong>Theorem (Turing, 1936)</strong>: The Halting Problem is <strong>undecidable</strong>. No algorithm can solve it for all inputs.</p><p><strong>Proof sketch</strong>:
Assume H(M, x) is an algorithm that determines whether M halts on input x.</p><p>Construct a new machine D:</p><pre><code>D(M):
  if H(M, M) returns "halts":
    loop forever
  else:
    halt
</code></pre><p>Now run D on itself: D(D).</p><ul>
<li>If H(D, D) says "halts", then D loops forever (contradiction)</li>
<li>If H(D, D) says "doesn't halt", then D halts (contradiction)</li>
</ul><p>Both cases lead to contradiction. Therefore, H cannot exist. ∎</p><p><strong>Connection to Busy Beaver</strong>:</p><p><strong>Theorem</strong>: BB(n) is uncomputable.</p><p><strong>Proof</strong>:
Assume we have an algorithm A that computes BB(n) for all n.</p><p>We can use A to solve the Halting Problem:</p><ol>
<li>Given machine M with n states and input x</li>
<li>Compute BB(n) using algorithm A</li>
<li>Simulate M on input x for BB(n) steps</li>
<li>If M halts within BB(n) steps: return "halts"</li>
<li>If M hasn't halted after BB(n) steps: return "doesn't halt" (since any halting n-state machine halts within BB(n) steps)</li>
</ol><p>This would solve the Halting Problem, which is impossible. Therefore, BB(n) is uncomputable. ∎</p><h3 class="markdown-h2">Part B: Computing Small Busy Beaver Numbers</h3><p><strong>Why small values are computable</strong>:</p><p>With n states and 2 symbols {0, 1}, the number of distinct n-state Turing machines is finite:</p><ul>
<li>Each state has 2 transitions (one for reading 0, one for reading 1)</li>
<li>Each transition specifies: write symbol (2 choices), move direction (2 choices), next state (n+1 choices, including halt)</li>
<li>Total: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>×</mo><mo stretchy="false">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>=</mo><mo stretchy="false">(</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>4</mn><msup><mo stretchy="false">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><annotation encoding="application/x-tex">(2 \\times 2 \\times (n+1))^{2n} = (4n+4)^{2n}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">4</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord">4</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span></span> possible machines</li>
</ul><p><strong>For small n</strong>:</p><ul>
<li>n=1: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>8</mn><mn>2</mn></msup><mo>=</mo><mn>64</mn></mrow><annotation encoding="application/x-tex">8^2 = 64</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">8</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">64</span></span></span></span> machines</li>
<li>n=2: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>12</mn><mn>4</mn></msup><mo>=</mo><mn>20,736</mn></mrow><annotation encoding="application/x-tex">12^4 = 20{,}736</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">4</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">20</span><span class="mord"><span class="mpunct">,</span></span><span class="mord">736</span></span></span></span> machines</li>
<li>n=3: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>16</mn><mn>6</mn></msup><mo>=</mo><mn>16,777,216</mn></mrow><annotation encoding="application/x-tex">16^6 = 16{,}777{,}216</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">6</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">6</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">16</span><span class="mord"><span class="mpunct">,</span></span><span class="mord">777</span><span class="mord"><span class="mpunct">,</span></span><span class="mord">216</span></span></span></span> machines</li>
<li>n=4: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>20</mn><mn>8</mn></msup><mo>≈</mo><mn>2.56</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup></mrow><annotation encoding="application/x-tex">20^8 \\approx 2.56 \\times 10^{10}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">2</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2.56</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span></span></span></span></span></span></span></span> machines</li>
</ul><p><strong>Exhaustive search</strong>:</p><ol>
<li>Enumerate all possible n-state machines</li>
<li>Simulate each machine</li>
<li>Detect infinite loops (using sophisticated cycle detection)</li>
<li>Track the maximum steps before halting</li>
</ol><p><strong>Known values</strong>:</p><ul>
<li>BB(1) = 1 (proven 1960s)</li>
<li>BB(2) = 6 (proven 1960s)</li>
<li>BB(3) = 21 (proven 1960s)</li>
<li>BB(4) = 107 (proven 1983 by Brady, independently verified 1990s)</li>
</ul><p><strong>Why larger values are hard</strong>:</p><p>For n=5:</p><ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>24</mn><msup><mo stretchy="false">)</mo><mn>10</mn></msup><mo>≈</mo><mn>6.3</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup></mrow><annotation encoding="application/x-tex">(24)^{10} \\approx 6.3 \\times 10^{13}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">24</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6.3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">13</span></span></span></span></span></span></span></span></span></span></span></span> machines to check</li>
<li>Many machines may run for billions or trillions of steps before halting (or looping)</li>
<li>Distinguishing "very long halt time" from "infinite loop" becomes undecidable for sufficiently complex machines</li>
</ul><p>For n=6 and beyond: The search space explodes, and detecting halting becomes infeasible.</p><h3 class="markdown-h2">Part C: BB(n) Grows Faster Than Any Computable Function</h3><p><strong>Theorem</strong>: For any computable function f, there exists N such that BB(n) > f(n) for all n > N.</p><p><strong>Proof</strong>:</p><p>Suppose f is computable. This means there exists a Turing machine <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>M</mi><mi>f</mi></msub></mrow><annotation encoding="application/x-tex">M_f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span> that computes f.</p><p>Let <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo stretchy="false">(</mo><msub><mi>M</mi><mi>f</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">s(M_f)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> be the number of states in <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>M</mi><mi>f</mi></msub></mrow><annotation encoding="application/x-tex">M_f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>.</p><p><strong>Construction</strong>:
For any n > <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo stretchy="false">(</mo><msub><mi>M</mi><mi>f</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">s(M_f)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>, we can build an n-state Turing machine that:</p><ol>
<li>Computes f(n) (using the <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo stretchy="false">(</mo><msub><mi>M</mi><mi>f</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">s(M_f)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> states of <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>M</mi><mi>f</mi></msub></mrow><annotation encoding="application/x-tex">M_f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span> plus input encoding)</li>
<li>Writes f(n) ones to the tape</li>
<li>Halts</li>
</ol><p>This machine has n states, runs for at least f(n) steps, and halts.</p><p>Therefore:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mi>B</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>≥</mo><mi>f</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mtext> for all </mtext><mi>n</mi><mo>></mo><mi>s</mi><mo stretchy="false">(</mo><msub><mi>M</mi><mi>f</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">BB(n) \\geq f(n) \\text{ for all } n > s(M_f)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">BB</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mord text"><span class="mord"> for all </span></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></p><p>But we can do better! Construct a machine that:</p><ol>
<li>Computes f(n)</li>
<li>Computes f(f(n))</li>
<li>Computes f(f(f(n)))</li>
<li>Repeats k times</li>
<li>Outputs that many 1s</li>
</ol><p>For sufficiently large k (still using only n states with clever encoding), this machine runs for <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>f</mi><mrow><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f^{(k)}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> steps.</p><p>Since k can be made arbitrarily large (relative to n), we have:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mi>B</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>></mo><msup><mi>f</mi><mrow><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>></mo><mi>f</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">BB(n) > f^{(k)}(n) > f(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">BB</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></p><p>for sufficiently large n.</p><p><strong>Conclusion</strong>: BB(n) grows faster than:</p><ul>
<li>Polynomials: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>n</mi><mi>k</mi></msup></mrow><annotation encoding="application/x-tex">n^k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span></li>
<li>Exponentials: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">2^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span></li>
<li>Towers: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><msup><mn>2</mn><msup><mn>2</mn><mi>n</mi></msup></msup></msup></mrow><annotation encoding="application/x-tex">2^{2^{2^n}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.082em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.082em;"><span style="top:-3.082em;margin-right:0.05em;"><span class="pstrut" style="height:2.719em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.0271em;"><span style="top:-3.0271em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5961em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8346em;"><span style="top:-2.904em;margin-right:0.1em;"><span class="pstrut" style="height:2.5em;"></span><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>
<li>Ackermann function: A(n,n)</li>
<li><strong>Any function you can write down and compute</strong></li>
</ul><p>BB(n) is not just large—it's <strong>uncomputably large</strong>.</p><h3 class="markdown-h2">Part D: Current Champions</h3><p><strong>BB(5)</strong>:</p><p>The current champion 5-state Busy Beaver runs for <strong>47,176,870 steps</strong>.</p><p>This was discovered by Marxen and Buntrock in 1990 and has remained the champion for over 30 years.</p><p><strong>However</strong>, we don't know if this is optimal! There might exist a 5-state machine that runs longer.</p><p><strong>Why proving optimality is hard</strong>:</p><p>To prove BB(5) = 47,176,870, we must:</p><ol>
<li>Verify the champion machine halts after exactly 47,176,870 steps ✓ (done by simulation)</li>
<li>Prove <strong>every other</strong> 5-state machine either:
<ul>
<li>Runs for fewer steps, or</li>
<li>Runs forever (doesn't halt)</li>
</ul>
</li>
</ol><p>Step 2 requires analyzing <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>24</mn><mn>10</mn></msup><mo>≈</mo><mn>6.3</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup></mrow><annotation encoding="application/x-tex">24^{10} \\approx 6.3 \\times 10^{13}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">2</span><span class="mord"><span class="mord">4</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6.3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">13</span></span></span></span></span></span></span></span></span></span></span></span> machines.</p><p><strong>Progress</strong>: As of 2025, researchers have ruled out the vast majority through:</p><ul>
<li>Simulation with timeout</li>
<li>Automated proof techniques</li>
<li>Detecting cycles and infinite behaviours</li>
</ul><p><strong>Remaining</strong>: A small number of "holdout" machines that run for extremely long times without obvious halting or looping behaviour. Determining their status is an open problem.</p><p><strong>BB(6) and beyond</strong>:</p><p>For n ≥ 6, we only have <strong>lower bounds</strong>:</p><ul>
<li>BB(6) ≥ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>7.4</mn><mo>×</mo><msup><mn>10</mn><mn>36534</mn></msup></mrow><annotation encoding="application/x-tex">7.4 \\times 10^{36534}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">7.4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">36534</span></span></span></span></span></span></span></span></span></span></span></span> (discovered 2010)</li>
<li>BB(7) ≥ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><msup><mn>10</mn><msup><mn>10</mn><msup><mn>10</mn><mn>18705353</mn></msup></msup></msup></msup></mrow><annotation encoding="application/x-tex">10^{10^{10^{10^{18705353}}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3909em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.3909em;"><span style="top:-3.3909em;margin-right:0.05em;"><span class="pstrut" style="height:3.0279em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight"><span class="mord mtight">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.4685em;"><span style="top:-3.4685em;margin-right:0.0714em;"><span class="pstrut" style="height:3.0375em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight"><span class="mord mtight">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.4524em;"><span style="top:-3.4524em;margin-right:0.1em;"><span class="pstrut" style="height:3.0484em;"></span><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight"><span class="mord mtight">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.0484em;"><span style="top:-3.0484em;margin-right:0.1em;"><span class="pstrut" style="height:2.6444em;"></span><span class="mord mtight"><span class="mord mtight">18705353</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> (estimated)</li>
</ul><p>These numbers are so large they dwarf any physical quantity in the universe.</p><h3 class="markdown-h2">Part E: Connections to Logic</h3><p>Busy Beaver numbers connect deeply to fundamental limits of mathematics:</p><p><strong>Gödel's Incompleteness Theorems</strong>:</p><p>For any consistent axiomatic system (like ZFC set theory), there exist true statements that cannot be proven within that system.</p><p><strong>Connection to BB(n)</strong>:</p><p>There exists a specific n (estimated around 7,910) such that:</p><ul>
<li>BB(n) cannot be determined within ZFC</li>
<li>The value of BB(n) depends on which undecidable statements you assume true</li>
</ul><p><strong>Why?</strong>:</p><p>Certain Turing machines encode mathematical statements:</p><ul>
<li>If the Riemann Hypothesis is true, the machine halts after k steps</li>
<li>If the Riemann Hypothesis is false, the machine loops forever</li>
</ul><p>If RH is independent of ZFC (undecidable), then determining whether this machine halts is also undecidable within ZFC.</p><p>Since BB(n) is the maximum halting time, its value depends on resolving such undecidable statements.</p><p><strong>Concrete example</strong>:</p><p>Scott Aaronson showed that BB(7918) (or some number in that range) depends on the consistency of ZFC itself. If ZFC is inconsistent, BB(7918) has one value; if consistent, another.</p><p><strong>Philosophical implication</strong>:</p><p>Busy Beaver numbers are <strong>"more real"</strong> than our mathematical systems. They exist as definite integers, but we can never compute them because our axioms are insufficient.</p><h3 class="markdown-h2">Part F: The Busy Beaver Frontier</h3><p><strong>Known exactly</strong>:</p><ul>
<li>BB(1) = 1</li>
<li>BB(2) = 6</li>
<li>BB(3) = 21</li>
<li>BB(4) = 107</li>
</ul><p><strong>Unknown</strong>:</p><ul>
<li>BB(5): candidate 47,176,870 (unproven)</li>
<li>BB(6+): only lower bounds</li>
</ul><p><strong>Will we ever know BB(10)?</strong></p><p><strong>Almost certainly not.</strong></p><p><strong>Reasons</strong>:</p><ol>
<li>
<p><strong>Computational explosion</strong>:</p>
<ul>
<li>Number of machines: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>44</mn><msup><mo stretchy="false">)</mo><mn>20</mn></msup><mo>≈</mo><msup><mn>10</mn><mn>33</mn></msup></mrow><annotation encoding="application/x-tex">(44)^{20} \\approx 10^{33}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">44</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">20</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">33</span></span></span></span></span></span></span></span></span></span></span></span></li>
<li>Each machine may run for incomprehensibly many steps</li>
<li>Simulation is completely infeasible</li>
</ul>
</li>
<li>
<p><strong>Undecidability frontier</strong>:</p>
<ul>
<li>By BB(7,000) or so, values depend on undecidable statements in ZFC</li>
<li>BB(10) may require resolving questions like the Riemann Hypothesis or Goldbach Conjecture</li>
<li>If these are independent of ZFC, BB(10) is <strong>provably unknowable</strong> within standard mathematics</li>
</ul>
</li>
<li>
<p><strong>Physical limits</strong>:</p>
<ul>
<li>Even if computable in principle, the resources required (time, energy, matter) exceed what exists in the universe</li>
</ul>
</li>
</ol><p><strong>Optimistic bound</strong>: We might learn BB(5) or BB(6) through clever mathematical techniques (not just exhaustive search).</p><p><strong>Pessimistic bound</strong>: BB(4) may be the last Busy Beaver number humanity ever determines.</p><h3 class="markdown-h2">The Deepest Mystery</h3><p>Busy Beaver numbers represent the sharpest edge of mathematical knowledge:</p><ul>
<li>They exist as definite integers</li>
<li>They have exact values (e.g., BB(10) is some specific number)</li>
<li>Yet they are fundamentally <strong>unknowable</strong></li>
</ul><p>This isn't a limitation of current technology or intelligence. It's a <strong>logical impossibility</strong> baked into the structure of mathematics itself.</p><p>The Busy Beaver problem shows that even in mathematics, there are truths beyond proof, numbers beyond calculation, and mysteries that must remain forever unsolved.</p><p><strong>Turing's legacy</strong>: By inventing Turing machines to understand computation, Alan Turing also revealed the limits of computation. The Busy Beaver problem is his deepest gift to mathematics — a problem so hard it's unsolvable, numbers so large they're uncomputable, yet tantalisingly concrete and real.</p></div></details>`,rawContent:`
# Turing Machines

A **Turing machine** is a simple model of computation:
- An infinite tape divided into cells, each containing 0 or 1
- A read/write head that can move left or right
- A finite set of states
- A transition function: based on current state and symbol read, write a new symbol, move left/right, and change state

Despite their simplicity, Turing machines can compute anything any computer can compute.

# The Busy Beaver Game

Given n states, what is the **longest-running** n-state Turing machine that eventually halts (starting from a blank tape)?

Define:
- **BB(n)**: The maximum number of steps any n-state Turing machine can run before halting
- **Σ(n)**: The maximum number of 1s any n-state Turing machine can write before halting

These are called **Busy Beaver numbers**.

**Examples**:
- BB(1) = 1 (proven)
- BB(2) = 6 (proven)
- BB(3) = 21 (proven)
- BB(4) = 107 (proven)
- BB(5) ≥ 47,176,870 (current champion, may not be optimal)
- BB(6) ≥ 7.4 × 10^36534 (lower bound, true value unknown)

# The Uncomputability

Here's the shocking fact: **BB(n) is uncomputable.**

There is **no algorithm** that can compute BB(n) for all n. This isn't a matter of insufficient computing power—it's logically impossible.

# The Research Challenge

**Part A**: Explain why determining whether an arbitrary Turing machine halts is undecidable (the Halting Problem). Connect this to why BB(n) is uncomputable.

**Part B**: Despite being uncomputable, we know exact values for small n. Explain how we can compute BB(1), BB(2), BB(3), BB(4) by exhaustive search, and why this approach fails for larger n.

**Part C**: The growth rate of BB(n) is extraordinary. Prove that BB(n) grows faster than any computable function. Specifically, show that for any computable function f, there exists N such that BB(n) > f(n) for all n > N.

**Part D**: Research the concept of "Busy Beaver from below" — machines we've verified halt and produce large values. What is the current champion for BB(5)? Why is proving it's optimal so difficult?

**Part E**: Explore connections to logic and set theory. How do Busy Beaver numbers relate to independence results like Gödel's incompleteness theorem?

**Part F**: The **Busy Beaver frontier** is the largest n for which BB(n) is known. As of 2025, we know BB(1) through BB(4) exactly. Estimate: Will we ever know BB(10)? Why or why not?

:::hint
For Part A, use proof by contradiction. Assume we can compute BB(n), then construct a machine that solves the Halting Problem.
:::

:::hint
For Part B, with n states and 2 symbols, there are only finitely many possible n-state Turing machines (though the number grows extremely fast).
:::

:::hint
For Part C, if f is computable, construct an n-state machine that computes f(n), adds 1, and outputs that many 1s. This machine runs for more than f(n) steps.
:::

:::hint
For Part E, there exist specific values of n where determining BB(n) requires resolving open problems in mathematics (like the Riemann Hypothesis).
:::

:::solution
**Answer**: Parts A-C have proofs below. Parts D-F discuss frontiers and unsolvability.

## Part A: The Halting Problem and Uncomputability

**Halting Problem**: Given a Turing machine M and input x, will M halt when run on x?

**Theorem (Turing, 1936)**: The Halting Problem is **undecidable**. No algorithm can solve it for all inputs.

**Proof sketch**:
Assume H(M, x) is an algorithm that determines whether M halts on input x.

Construct a new machine D:
\`\`\`
D(M):
  if H(M, M) returns "halts":
    loop forever
  else:
    halt
\`\`\`

Now run D on itself: D(D).
- If H(D, D) says "halts", then D loops forever (contradiction)
- If H(D, D) says "doesn't halt", then D halts (contradiction)

Both cases lead to contradiction. Therefore, H cannot exist. ∎

**Connection to Busy Beaver**:

**Theorem**: BB(n) is uncomputable.

**Proof**:
Assume we have an algorithm A that computes BB(n) for all n.

We can use A to solve the Halting Problem:
1. Given machine M with n states and input x
2. Compute BB(n) using algorithm A
3. Simulate M on input x for BB(n) steps
4. If M halts within BB(n) steps: return "halts"
5. If M hasn't halted after BB(n) steps: return "doesn't halt" (since any halting n-state machine halts within BB(n) steps)

This would solve the Halting Problem, which is impossible. Therefore, BB(n) is uncomputable. ∎

## Part B: Computing Small Busy Beaver Numbers

**Why small values are computable**:

With n states and 2 symbols {0, 1}, the number of distinct n-state Turing machines is finite:
- Each state has 2 transitions (one for reading 0, one for reading 1)
- Each transition specifies: write symbol (2 choices), move direction (2 choices), next state (n+1 choices, including halt)
- Total: $(2 \\times 2 \\times (n+1))^{2n} = (4n+4)^{2n}$ possible machines

**For small n**:
- n=1: $8^2 = 64$ machines
- n=2: $12^4 = 20{,}736$ machines
- n=3: $16^6 = 16{,}777{,}216$ machines
- n=4: $20^8 \\approx 2.56 \\times 10^{10}$ machines

**Exhaustive search**:
1. Enumerate all possible n-state machines
2. Simulate each machine
3. Detect infinite loops (using sophisticated cycle detection)
4. Track the maximum steps before halting

**Known values**:
- BB(1) = 1 (proven 1960s)
- BB(2) = 6 (proven 1960s)
- BB(3) = 21 (proven 1960s)
- BB(4) = 107 (proven 1983 by Brady, independently verified 1990s)

**Why larger values are hard**:

For n=5:
- $(24)^{10} \\approx 6.3 \\times 10^{13}$ machines to check
- Many machines may run for billions or trillions of steps before halting (or looping)
- Distinguishing "very long halt time" from "infinite loop" becomes undecidable for sufficiently complex machines

For n=6 and beyond: The search space explodes, and detecting halting becomes infeasible.

## Part C: BB(n) Grows Faster Than Any Computable Function

**Theorem**: For any computable function f, there exists N such that BB(n) > f(n) for all n > N.

**Proof**:

Suppose f is computable. This means there exists a Turing machine $M_f$ that computes f.

Let $s(M_f)$ be the number of states in $M_f$.

**Construction**:
For any n > $s(M_f)$, we can build an n-state Turing machine that:
1. Computes f(n) (using the $s(M_f)$ states of $M_f$ plus input encoding)
2. Writes f(n) ones to the tape
3. Halts

This machine has n states, runs for at least f(n) steps, and halts.

Therefore:
$$BB(n) \\geq f(n) \\text{ for all } n > s(M_f)$$

But we can do better! Construct a machine that:
1. Computes f(n)
2. Computes f(f(n))
3. Computes f(f(f(n)))
4. Repeats k times
5. Outputs that many 1s

For sufficiently large k (still using only n states with clever encoding), this machine runs for $f^{(k)}(n)$ steps.

Since k can be made arbitrarily large (relative to n), we have:
$$BB(n) > f^{(k)}(n) > f(n)$$

for sufficiently large n.

**Conclusion**: BB(n) grows faster than:
- Polynomials: $n^k$
- Exponentials: $2^n$
- Towers: $2^{2^{2^n}}$
- Ackermann function: A(n,n)
- **Any function you can write down and compute**

BB(n) is not just large—it's **uncomputably large**.

## Part D: Current Champions

**BB(5)**:

The current champion 5-state Busy Beaver runs for **47,176,870 steps**.

This was discovered by Marxen and Buntrock in 1990 and has remained the champion for over 30 years.

**However**, we don't know if this is optimal! There might exist a 5-state machine that runs longer.

**Why proving optimality is hard**:

To prove BB(5) = 47,176,870, we must:
1. Verify the champion machine halts after exactly 47,176,870 steps ✓ (done by simulation)
2. Prove **every other** 5-state machine either:
   - Runs for fewer steps, or
   - Runs forever (doesn't halt)

Step 2 requires analyzing $24^{10} \\approx 6.3 \\times 10^{13}$ machines.

**Progress**: As of 2025, researchers have ruled out the vast majority through:
- Simulation with timeout
- Automated proof techniques
- Detecting cycles and infinite behaviours

**Remaining**: A small number of "holdout" machines that run for extremely long times without obvious halting or looping behaviour. Determining their status is an open problem.

**BB(6) and beyond**:

For n ≥ 6, we only have **lower bounds**:
- BB(6) ≥ $7.4 \\times 10^{36534}$ (discovered 2010)
- BB(7) ≥ $10^{10^{10^{10^{18705353}}}}$ (estimated)

These numbers are so large they dwarf any physical quantity in the universe.

## Part E: Connections to Logic

Busy Beaver numbers connect deeply to fundamental limits of mathematics:

**Gödel's Incompleteness Theorems**:

For any consistent axiomatic system (like ZFC set theory), there exist true statements that cannot be proven within that system.

**Connection to BB(n)**:

There exists a specific n (estimated around 7,910) such that:
- BB(n) cannot be determined within ZFC
- The value of BB(n) depends on which undecidable statements you assume true

**Why?**:

Certain Turing machines encode mathematical statements:
- If the Riemann Hypothesis is true, the machine halts after k steps
- If the Riemann Hypothesis is false, the machine loops forever

If RH is independent of ZFC (undecidable), then determining whether this machine halts is also undecidable within ZFC.

Since BB(n) is the maximum halting time, its value depends on resolving such undecidable statements.

**Concrete example**:

Scott Aaronson showed that BB(7918) (or some number in that range) depends on the consistency of ZFC itself. If ZFC is inconsistent, BB(7918) has one value; if consistent, another.

**Philosophical implication**:

Busy Beaver numbers are **"more real"** than our mathematical systems. They exist as definite integers, but we can never compute them because our axioms are insufficient.

## Part F: The Busy Beaver Frontier

**Known exactly**:
- BB(1) = 1
- BB(2) = 6
- BB(3) = 21
- BB(4) = 107

**Unknown**:
- BB(5): candidate 47,176,870 (unproven)
- BB(6+): only lower bounds

**Will we ever know BB(10)?**

**Almost certainly not.**

**Reasons**:

1. **Computational explosion**:
   - Number of machines: $(44)^{20} \\approx 10^{33}$
   - Each machine may run for incomprehensibly many steps
   - Simulation is completely infeasible

2. **Undecidability frontier**:
   - By BB(7,000) or so, values depend on undecidable statements in ZFC
   - BB(10) may require resolving questions like the Riemann Hypothesis or Goldbach Conjecture
   - If these are independent of ZFC, BB(10) is **provably unknowable** within standard mathematics

3. **Physical limits**:
   - Even if computable in principle, the resources required (time, energy, matter) exceed what exists in the universe

**Optimistic bound**: We might learn BB(5) or BB(6) through clever mathematical techniques (not just exhaustive search).

**Pessimistic bound**: BB(4) may be the last Busy Beaver number humanity ever determines.

## The Deepest Mystery

Busy Beaver numbers represent the sharpest edge of mathematical knowledge:
- They exist as definite integers
- They have exact values (e.g., BB(10) is some specific number)
- Yet they are fundamentally **unknowable**

This isn't a limitation of current technology or intelligence. It's a **logical impossibility** baked into the structure of mathematics itself.

The Busy Beaver problem shows that even in mathematics, there are truths beyond proof, numbers beyond calculation, and mysteries that must remain forever unsolved.

**Turing's legacy**: By inventing Turing machines to understand computation, Alan Turing also revealed the limits of computation. The Busy Beaver problem is his deepest gift to mathematics — a problem so hard it's unsolvable, numbers so large they're uncomputable, yet tantalisingly concrete and real.
:::
`};export{s as default};
