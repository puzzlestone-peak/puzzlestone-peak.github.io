const s={slug:"collatz-conjecture",metadata:{title:"The Collatz Conjecture",questionPreview:`Start with any positive integer. If it's even, divide by 2. If odd, triple it and add 1. Repeat. Does every number eventually reach 1?
`,concepts:["number-theory","sequences","open-problems"],difficulty:"master",tags:["open","iterative","famous"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z"},content:`<h2 class="markdown-h1">The Simplest Unsolved Problem</h2>
<p>The Collatz conjecture (also called the 3n+1 problem) may be the most deceptively simple unsolved problem in mathematics.</p>
<p><strong>The rule</strong>: Given a positive integer n:</p>
<ul>
<li>If n is even: divide by 2</li>
<li>If n is odd: multiply by 3 and add 1</li>
<li>Repeat</li>
</ul>
<p><strong>Example</strong>: Start with n = 12:
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 → 4 → 2 → 1 → ...</p>
<p>Once we reach 1, we enter the cycle 1 → 4 → 2 → 1.</p>
<h2 class="markdown-h1">The Conjecture</h2>
<p><strong>Collatz Conjecture</strong>: Every positive integer eventually reaches 1.</p>
<p>This has been verified computationally for all starting values up to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>68</mn></msup></mrow><annotation encoding="application/x-tex">2^{68}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">68</span></span></span></span></span></span></span></span></span></span></span></span> (approximately <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2.95</mn><mo>×</mo><msup><mn>10</mn><mn>20</mn></msup></mrow><annotation encoding="application/x-tex">2.95 \\times 10^{20}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2.95</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">20</span></span></span></span></span></span></span></span></span></span></span></span>), yet no one has proved it for all numbers.</p>
<h2 class="markdown-h1">The Challenge</h2>
<p><strong>Part A</strong>: Compute the Collatz sequence for n = 27. How many steps does it take to reach 1? What is the maximum value reached during the sequence?</p>
<p><strong>Part B</strong>: Prove that if n is a power of 2, the sequence reaches 1 in exactly <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\log_2(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> steps.</p>
<p><strong>Part C</strong>: Consider the "reverse" problem: starting from 1, what numbers can be reached by reversing the Collatz operations? Show that this generates a tree structure.</p>
<p><strong>Part D</strong>: Define the <strong>stopping time</strong> σ(n) as the number of steps to reach 1. The <strong>total stopping time</strong> σ'(n) is the number of steps to reach any value less than n. Research and explain why proving bounds on stopping times is difficult.</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part A, work through the sequence step by step. It will take more than 100 steps.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The sequence for 27 reaches a maximum value over 9000 before eventually descending to 1.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part B, what happens to a power of 2 when divided by 2?</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part C, to reverse the operations: either multiply by 2, or subtract 1 and divide by 3 (if the result is an integer and odd).</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: A) 111 steps, maximum value 9232. B) Proof below. C) Tree structure shown below. D) Stopping times exhibit chaotic behaviour with no known pattern.</p><h3 class="markdown-h2">Part A: The Sequence for n = 27</h3><p>Starting with 27, the Collatz sequence is:</p><p>27 → 82 → 41 → 124 → 62 → 31 → 94 → 47 → 142 → 71 → 214 → 107 → 322 → 161 → 484 → 242 → 121 → 364 → 182 → 91 → 274 → 137 → 412 → 206 → 103 → 310 → 155 → 466 → 233 → 700 → 350 → 175 → 526 → 263 → 790 → 395 → 1186 → 593 → 1780 → 890 → 445 → 1336 → 668 → 334 → 167 → 502 → 251 → 754 → 377 → 1132 → 566 → 283 → 850 → 425 → 1276 → 638 → 319 → 958 → 479 → 1438 → 719 → 2158 → 1079 → 3238 → 1619 → 4858 → 2429 → 7288 → 3644 → 1822 → 911 → 2734 → 1367 → 4102 → 2051 → 6154 → 3077 → 9232 → ...</p><p>At step 77, we reach <strong>9232</strong>, the maximum value in the sequence.</p><p>From 9232, the sequence descends (with fluctuations) back to 1.</p><p>The complete sequence from 27 to 1 takes <strong>111 steps</strong>.</p><h3 class="markdown-h2">Part B: Powers of 2</h3><p><strong>Claim</strong>: If <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding="application/x-tex">n = 2^k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span>, then σ(n) = k.</p><p><strong>Proof</strong>: Let <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding="application/x-tex">n = 2^k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span> for some non-negative integer k.</p><p>Since n is even, we apply the "divide by 2" rule:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup><mo>→</mo><msup><mn>2</mn><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>→</mo><msup><mn>2</mn><mrow><mi>k</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>→</mo><mo>…</mo><mo>→</mo><msup><mn>2</mn><mn>1</mn></msup><mo>→</mo><msup><mn>2</mn><mn>0</mn></msup><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^k \\to 2^{k-1} \\to 2^{k-2} \\to \\ldots \\to 2^1 \\to 2^0 = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">−</span><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p><p>Each step divides by 2 (since all intermediate values are even). After exactly k steps, we reach <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>0</mn></msup><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^0 = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>.</p><p>Therefore, σ(<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding="application/x-tex">2^k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span>) = k = <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\log_2(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>. ∎</p><p><strong>Observation</strong>: Powers of 2 provide the "fastest descent" to 1 — a perfectly predictable path with no growth phase.</p><h3 class="markdown-h2">Part C: The Collatz Tree</h3><p>The <strong>reverse Collatz tree</strong> starts from 1 and generates all reachable numbers by reversing operations:</p><p><strong>Reverse operations</strong>:</p><ol>
<li><strong>Even predecessor</strong>: 2n (multiply by 2)</li>
<li><strong>Odd predecessor</strong>: (n - 1)/3 (if n ≡ 1 (mod 3) and result is odd)</li>
</ol><p>Starting from 1:</p><pre><code>                    1
                   / \\
                  2
                 / \\
                4
               / \\
              8   5
             / \\ / \\
           16   10
           /   / \\
          32  20  3
              /  /|
             40 6
                |
                12
                 |
                24
                ...
</code></pre><p><strong>Properties</strong>:</p><ul>
<li>Every path eventually connects to 1 (if the conjecture is true)</li>
<li>The tree has infinite branches</li>
<li>Some numbers (like 1, 2, 4, 8, 16...) have simple paths</li>
<li>Others (like 27) have long, complex paths</li>
</ul><p>The Collatz conjecture is equivalent to: <strong>Every positive integer appears somewhere in this tree.</strong></p><h3 class="markdown-h2">Part D: Stopping Times and Chaos</h3><p>The <strong>stopping time</strong> σ(n) exhibits remarkably chaotic behaviour:</p><p><strong>Examples</strong>:</p><ul>
<li>σ(1) = 0</li>
<li>σ(2) = 1</li>
<li>σ(3) = 7</li>
<li>σ(27) = 111</li>
<li>σ(31) = 106</li>
<li>σ(127) = 46 (shorter than 27!)</li>
</ul><p><strong>Observations</strong>:</p><ul>
<li>No formula for σ(n) is known</li>
<li>σ(n) appears unpredictable — small changes in n cause huge changes in σ(n)</li>
<li>Despite this, verification shows σ(n) is finite for all tested n</li>
</ul><p><strong>Maximum values</strong>: Some trajectories reach heights much larger than n before descending. For example:</p><ul>
<li>n = 27 reaches max 9232 (340× larger)</li>
<li>n = 703 reaches max 250504 (356× larger)</li>
</ul><p><strong>Why it's hard</strong>:</p><ol>
<li><strong>No algebraic structure</strong>: The sequence mixes multiplication and division in ways that destroy patterns</li>
<li><strong>Unpredictability</strong>: Cannot determine σ(n) without computing the full sequence</li>
<li><strong>Growth phases</strong>: Sequences may grow arbitrarily large before descending</li>
<li><strong>Lack of invariants</strong>: No known quantity stays constant or monotonic throughout the sequence</li>
</ol><h3 class="markdown-h2">Historical Context</h3><p><strong>First conjectured</strong>: Lothar Collatz (1937)
<strong>Computational verification</strong>: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>&#x3C;</mo><msup><mn>2</mn><mn>68</mn></msup></mrow><annotation encoding="application/x-tex">n &#x3C; 2^{68}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&#x3C;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">68</span></span></span></span></span></span></span></span></span></span></span></span> (as of 2020)
<strong>Proof attempts</strong>: Thousands of papers, no complete proof</p><p><strong>Paul Erdős</strong> said about the Collatz conjecture: "Mathematics may not be ready for such problems."</p><p><strong>Terence Tao</strong> (2019) proved a "weak" version: almost all Collatz sequences reach values close to 1 infinitely often. This is progress but far from proving all sequences reach exactly 1.</p><h3 class="markdown-h2">Why We Care</h3><p>The Collatz conjecture exemplifies a deep mathematical mystery:</p><ul>
<li><strong>Simple to state</strong> — understandable to a child</li>
<li><strong>Impossible to prove</strong> — resists all techniques</li>
<li><strong>Computationally verified</strong> — yet proof remains elusive</li>
</ul><p>It reminds us that simplicity of statement bears no relation to difficulty of proof, and that vast territories of mathematics remain unexplored.</p></div></details>`,rawContent:`
# The Simplest Unsolved Problem

The Collatz conjecture (also called the 3n+1 problem) may be the most deceptively simple unsolved problem in mathematics.

**The rule**: Given a positive integer n:
- If n is even: divide by 2
- If n is odd: multiply by 3 and add 1
- Repeat

**Example**: Start with n = 12:
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 → 4 → 2 → 1 → ...

Once we reach 1, we enter the cycle 1 → 4 → 2 → 1.

# The Conjecture

**Collatz Conjecture**: Every positive integer eventually reaches 1.

This has been verified computationally for all starting values up to $2^{68}$ (approximately $2.95 \\times 10^{20}$), yet no one has proved it for all numbers.

# The Challenge

**Part A**: Compute the Collatz sequence for n = 27. How many steps does it take to reach 1? What is the maximum value reached during the sequence?

**Part B**: Prove that if n is a power of 2, the sequence reaches 1 in exactly $\\log_2(n)$ steps.

**Part C**: Consider the "reverse" problem: starting from 1, what numbers can be reached by reversing the Collatz operations? Show that this generates a tree structure.

**Part D**: Define the **stopping time** σ(n) as the number of steps to reach 1. The **total stopping time** σ'(n) is the number of steps to reach any value less than n. Research and explain why proving bounds on stopping times is difficult.

:::hint
For Part A, work through the sequence step by step. It will take more than 100 steps.
:::

:::hint
The sequence for 27 reaches a maximum value over 9000 before eventually descending to 1.
:::

:::hint
For Part B, what happens to a power of 2 when divided by 2?
:::

:::hint
For Part C, to reverse the operations: either multiply by 2, or subtract 1 and divide by 3 (if the result is an integer and odd).
:::

:::solution
**Answer**: A) 111 steps, maximum value 9232. B) Proof below. C) Tree structure shown below. D) Stopping times exhibit chaotic behaviour with no known pattern.

## Part A: The Sequence for n = 27

Starting with 27, the Collatz sequence is:

27 → 82 → 41 → 124 → 62 → 31 → 94 → 47 → 142 → 71 → 214 → 107 → 322 → 161 → 484 → 242 → 121 → 364 → 182 → 91 → 274 → 137 → 412 → 206 → 103 → 310 → 155 → 466 → 233 → 700 → 350 → 175 → 526 → 263 → 790 → 395 → 1186 → 593 → 1780 → 890 → 445 → 1336 → 668 → 334 → 167 → 502 → 251 → 754 → 377 → 1132 → 566 → 283 → 850 → 425 → 1276 → 638 → 319 → 958 → 479 → 1438 → 719 → 2158 → 1079 → 3238 → 1619 → 4858 → 2429 → 7288 → 3644 → 1822 → 911 → 2734 → 1367 → 4102 → 2051 → 6154 → 3077 → 9232 → ...

At step 77, we reach **9232**, the maximum value in the sequence.

From 9232, the sequence descends (with fluctuations) back to 1.

The complete sequence from 27 to 1 takes **111 steps**.

## Part B: Powers of 2

**Claim**: If $n = 2^k$, then σ(n) = k.

**Proof**: Let $n = 2^k$ for some non-negative integer k.

Since n is even, we apply the "divide by 2" rule:
$$2^k \\to 2^{k-1} \\to 2^{k-2} \\to \\ldots \\to 2^1 \\to 2^0 = 1$$

Each step divides by 2 (since all intermediate values are even). After exactly k steps, we reach $2^0 = 1$.

Therefore, σ($2^k$) = k = $\\log_2(n)$. ∎

**Observation**: Powers of 2 provide the "fastest descent" to 1 — a perfectly predictable path with no growth phase.

## Part C: The Collatz Tree

The **reverse Collatz tree** starts from 1 and generates all reachable numbers by reversing operations:

**Reverse operations**:
1. **Even predecessor**: 2n (multiply by 2)
2. **Odd predecessor**: (n - 1)/3 (if n ≡ 1 (mod 3) and result is odd)

Starting from 1:
\`\`\`
                    1
                   / \\
                  2
                 / \\
                4
               / \\
              8   5
             / \\ / \\
           16   10
           /   / \\
          32  20  3
              /  /|
             40 6
                |
                12
                 |
                24
                ...
\`\`\`

**Properties**:
- Every path eventually connects to 1 (if the conjecture is true)
- The tree has infinite branches
- Some numbers (like 1, 2, 4, 8, 16...) have simple paths
- Others (like 27) have long, complex paths

The Collatz conjecture is equivalent to: **Every positive integer appears somewhere in this tree.**

## Part D: Stopping Times and Chaos

The **stopping time** σ(n) exhibits remarkably chaotic behaviour:

**Examples**:
- σ(1) = 0
- σ(2) = 1
- σ(3) = 7
- σ(27) = 111
- σ(31) = 106
- σ(127) = 46 (shorter than 27!)

**Observations**:
- No formula for σ(n) is known
- σ(n) appears unpredictable — small changes in n cause huge changes in σ(n)
- Despite this, verification shows σ(n) is finite for all tested n

**Maximum values**: Some trajectories reach heights much larger than n before descending. For example:
- n = 27 reaches max 9232 (340× larger)
- n = 703 reaches max 250504 (356× larger)

**Why it's hard**:
1. **No algebraic structure**: The sequence mixes multiplication and division in ways that destroy patterns
2. **Unpredictability**: Cannot determine σ(n) without computing the full sequence
3. **Growth phases**: Sequences may grow arbitrarily large before descending
4. **Lack of invariants**: No known quantity stays constant or monotonic throughout the sequence

## Historical Context

**First conjectured**: Lothar Collatz (1937)
**Computational verification**: $n < 2^{68}$ (as of 2020)
**Proof attempts**: Thousands of papers, no complete proof

**Paul Erdős** said about the Collatz conjecture: "Mathematics may not be ready for such problems."

**Terence Tao** (2019) proved a "weak" version: almost all Collatz sequences reach values close to 1 infinitely often. This is progress but far from proving all sequences reach exactly 1.

## Why We Care

The Collatz conjecture exemplifies a deep mathematical mystery:
- **Simple to state** — understandable to a child
- **Impossible to prove** — resists all techniques
- **Computationally verified** — yet proof remains elusive

It reminds us that simplicity of statement bears no relation to difficulty of proof, and that vast territories of mathematics remain unexplored.
:::
`};export{s as default};
