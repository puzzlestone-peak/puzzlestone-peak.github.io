const s={slug:"continuum-hypothesis",metadata:{title:"The Continuum Hypothesis",questionPreview:`There are infinitely many integers and infinitely many real numbers. But are these the same size of infinity? Cantor's continuum hypothesis asks: is there a size of infinity between them?
`,concepts:["set-theory","infinity","cardinality"],difficulty:"master",tags:["open","foundational","logic"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z"},content:`<h2 class="markdown-h1">Sizes of Infinity</h2>
<p>Not all infinities are equal. Georg Cantor (1874-1918) proved that some infinite sets are fundamentally larger than others.</p>
<p><strong>Countable infinity</strong>: The natural numbers ℕ = {1, 2, 3, ...} are <strong>countably infinite</strong>. Any set that can be put in one-to-one correspondence with ℕ has the same size, denoted <strong>ℵ₀</strong> (aleph-null).</p>
<p><strong>Uncountable infinity</strong>: The real numbers ℝ are <strong>uncountably infinite</strong> — there are strictly more real numbers than natural numbers. This is denoted <strong>2^ℵ₀</strong> or <strong>𝔠</strong> (the cardinality of the continuum).</p>
<h2 class="markdown-h1">Cantor's Diagonal Argument</h2>
<p>Cantor proved ℝ is uncountable using a diagonal argument:</p>
<p><strong>Proof sketch</strong>: Assume we could list all real numbers in [0,1]:</p>
<pre><code>1. 0.d₁₁ d₁₂ d₁₃ d₁₄ ...
2. 0.d₂₁ d₂₂ d₂₃ d₂₄ ...
3. 0.d₃₁ d₃₂ d₃₃ d₃₄ ...
4. 0.d₄₁ d₄₂ d₄₃ d₄₄ ...
...
</code></pre>
<p>Construct a new number: 0.e₁e₂e₃e₄... where eᵢ differs from dᵢᵢ (the diagonal digits).</p>
<p>This new number differs from every number in the list (at position i, it differs from the ith number). Therefore, our list is incomplete — ℝ cannot be counted.</p>
<h2 class="markdown-h1">The Continuum Hypothesis</h2>
<p><strong>Continuum Hypothesis (CH)</strong>: There is no set whose cardinality is strictly between ℵ₀ and 2^ℵ₀.</p>
<p>In other words: there is no size of infinity between the integers and the real numbers.</p>
<p>Equivalently: 2^ℵ₀ = ℵ₁ (the next cardinal after ℵ₀).</p>
<h2 class="markdown-h1">The Challenge</h2>
<p><strong>Part A</strong>: Prove that the rational numbers ℚ are countable (have the same cardinality as ℕ) despite appearing "denser" than the integers.</p>
<p><strong>Part B</strong>: Prove that the set of all infinite sequences of 0s and 1s has the same cardinality as the real numbers.</p>
<p><strong>Part C</strong>: Explain why the power set of ℕ (the set of all subsets of natural numbers) has cardinality 2^ℵ₀. Use this to explain Cantor's notation.</p>
<p><strong>Part D</strong>: Research Gödel and Cohen's results on the Continuum Hypothesis. What does it mean that CH is "independent" of standard axioms of set theory?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part A, use a systematic zigzag pattern to enumerate all fractions. Think about enumerating pairs (p, q) where p/q is the fraction.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part B, each infinite binary sequence can be interpreted as the binary expansion of a real number in [0,1].</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part C, each subset of ℕ can be represented by a characteristic function: an infinite sequence of 0s and 1s.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>"Independent" means the statement can neither be proven nor disproven from the axioms. It's like Euclid's parallel postulate in geometry.</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: A) Proof below using diagonal enumeration. B) Proof below via binary representations. C) Every subset corresponds to a binary sequence. D) CH is independent: both CH and ¬CH are consistent with ZFC axioms.</p><h3 class="markdown-h2">Part A: Rationals Are Countable</h3><p>We'll prove ℚ is countable by constructing an enumeration (listing) of all rational numbers.</p><p><strong>Method</strong>: Enumerate all pairs (p, q) where p ∈ ℤ and q ∈ ℕ (q ≠ 0), representing fractions p/q.</p><p>Arrange in a grid:</p><pre><code>     q=1    q=2    q=3    q=4   ...
p=0   0/1    0/2    0/3    0/4  ...
p=1   1/1    1/2    1/3    1/4  ...
p=2   2/1    2/2    2/3    2/4  ...
p=3   3/1    3/2    3/3    3/4  ...
p=-1 -1/1   -1/2   -1/3   -1/4  ...
...
</code></pre><p><strong>Diagonal enumeration</strong>: Traverse diagonally:</p><ul>
<li>Start at 0/1</li>
<li>Then 1/1, 0/2</li>
<li>Then 2/1, 1/2, 0/3</li>
<li>Then 3/1, 2/2, 1/3, 0/4</li>
<li>Continue...</li>
</ul><p>Also include negative rationals similarly.</p><p>This creates a sequence containing every rational number (with duplicates like 2/2 = 1/1, which we can skip). Since we've created a list of all rationals indexed by natural numbers, ℚ is countable.</p><p><strong>Notation</strong>: |ℚ| = ℵ₀</p><p><strong>Surprising conclusion</strong>: Despite ℚ being "dense" (between any two rationals, there's another rational), there are no more rationals than natural numbers!</p><h3 class="markdown-h2">Part B: Binary Sequences and Real Numbers</h3><p>Let <strong>S</strong> be the set of all infinite sequences of 0s and 1s. For example:</p><ul>
<li>s₁ = 0000000000...</li>
<li>s₂ = 1010101010...</li>
<li>s₃ = 1101001000...</li>
</ul><p>We'll show |S| = 2^ℵ₀ = |ℝ|.</p><p><strong>Mapping to [0,1]</strong>: Each sequence s = (b₁, b₂, b₃, ...) maps to a real number:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi mathvariant="normal">∞</mi></msubsup><mfrac><msub><mi>b</mi><mi>i</mi></msub><msup><mn>2</mn><mi>i</mi></msup></mfrac><mo>=</mo><mn>0.</mn><msub><mi>b</mi><mn>1</mn></msub><msub><mi>b</mi><mn>2</mn></msub><msub><mi>b</mi><mn>3</mn></msub><msub><mo>…</mo><mtext>binary</mtext></msub></mrow><annotation encoding="application/x-tex">r(s) = \\sum_{i=1}^{\\infty} \\frac{b_i}{2^i} = 0.b_1b_2b_3\\ldots_{\\text{binary}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2412em;vertical-align:-0.345em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8962em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7571em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4101em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3281em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9805em;vertical-align:-0.2861em;"></span><span class="mord">0.</span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="minner">…</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">binary</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span></p><p>For example:</p><ul>
<li>0000... → 0.0 = 0</li>
<li>1111... → 0.111...₂ = 1</li>
<li>1010... → 0.101010...₂ = 2/3</li>
<li>1000... → 0.1₂ = 1/2</li>
</ul><p>This mapping is <strong>surjective</strong> (every real in [0,1] is hit) and <strong>almost injective</strong> (some numbers like 1/2 = 0.1₂ = 0.0111...₂ have two representations, but this is a countable set of exceptions).</p><p><strong>Conclusion</strong>: |S| = |[0,1]| = |ℝ| = 2^ℵ₀</p><h3 class="markdown-h2">Part C: Power Sets and Cardinality</h3><p>The <strong>power set</strong> 𝒫(ℕ) is the set of all subsets of natural numbers:</p><ul>
<li>∅ (empty set)</li>
<li>{1}</li>
<li>{2}</li>
<li>{1, 2}</li>
<li>{1, 3, 5, 7, ...} (all odd numbers)</li>
<li>ℕ itself</li>
<li>... and infinitely many more</li>
</ul><p><strong>Bijection to binary sequences</strong>: Each subset A ⊆ ℕ corresponds to a characteristic function χ_A:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">{</mo><mtable rowspacing="0.36em" columnalign="left left" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn>1</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mtext>if </mtext><mi>n</mi><mo>∈</mo><mi>A</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn>0</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mtext>if </mtext><mi>n</mi><mo mathvariant="normal">∉</mo><mi>A</mi></mrow></mstyle></mtd></mtr></mtable></mrow></mrow><annotation encoding="application/x-tex">\\chi_A(n) = \\begin{cases} 1 &#x26; \\text{if } n \\in A \\\\ 0 &#x26; \\text{if } n \\notin A \\end{cases}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">χ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3em;vertical-align:-1.25em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mord"><span class="mtable"><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.69em;"><span style="top:-3.69em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord">1</span></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.19em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:1em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.69em;"><span style="top:-3.69em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord text"><span class="mord">if </span></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">A</span></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord text"><span class="mord">if </span></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mord"><span class="mrel">∈</span></span><span class="mord vbox"><span class="thinbox"><span class="llap"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="inner"><span class="mord"><span class="mord">/</span><span class="mspace" style="margin-right:0.0556em;"></span></span></span><span class="fix"></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.19em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p><p>This creates an infinite binary sequence. For example:</p><ul>
<li>∅ → 0000...</li>
<li>{1, 3, 5, 7, ...} → 1010101...</li>
<li>{1, 2, 3, 4, ...} = ℕ → 1111...</li>
</ul><p>This is a <strong>bijection</strong> between 𝒫(ℕ) and infinite binary sequences.</p><p>From Part B, infinite binary sequences have cardinality 2^ℵ₀. Therefore:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="script">P</mi><mo stretchy="false">(</mo><mi mathvariant="double-struck">N</mi><mo stretchy="false">)</mo><mi mathvariant="normal">∣</mi><mo>=</mo><msup><mn>2</mn><msub><mi mathvariant="normal">ℵ</mi><mn>0</mn></msub></msup></mrow><annotation encoding="application/x-tex">|\\mathcal{P}(\\mathbb{N})| = 2^{\\aleph_0}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathcal" style="margin-right:0.08222em;">P</span><span class="mopen">(</span><span class="mord mathbb">N</span><span class="mclose">)</span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">ℵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><strong>Cantor's notation</strong>: The power set of a set with cardinality κ has cardinality 2^κ. Since |ℕ| = ℵ₀, we have |𝒫(ℕ)| = 2^ℵ₀.</p><h3 class="markdown-h2">Part D: Independence of CH</h3><p><strong>Gödel (1940)</strong>: Proved CH is <strong>consistent</strong> with ZFC (Zermelo-Fraenkel set theory with Axiom of Choice). If ZFC is consistent, then ZFC + CH is also consistent.</p><p><strong>Method</strong>: Gödel constructed the <strong>constructible universe</strong> L, a model of ZFC where CH holds true.</p><p><strong>Cohen (1963)</strong>: Proved ¬CH (the negation of CH) is also <strong>consistent</strong> with ZFC. If ZFC is consistent, then ZFC + ¬CH is also consistent.</p><p><strong>Method</strong>: Cohen invented <strong>forcing</strong>, a technique for extending models of set theory. He constructed models where 2^ℵ₀ = ℵ₂, ℵ₃, or even larger cardinals.</p><p><strong>Implication</strong>: CH is <strong>independent</strong> of ZFC axioms:</p><ul>
<li>You cannot prove CH from ZFC</li>
<li>You cannot disprove CH from ZFC</li>
<li>Both CH and ¬CH are consistent with ZFC</li>
</ul><p><strong>Analogy to geometry</strong>: Just as Euclidean geometry (with parallel postulate) and non-Euclidean geometries (without it) are both consistent, set theory with CH and set theory with ¬CH are both consistent.</p><p><strong>Philosophical implications</strong>:</p><ol>
<li><strong>Multiple set theories</strong>: We can work in set theory where CH is true or set theory where CH is false</li>
<li><strong>No absolute truth</strong>: Unlike "Is 2+2=4?", CH has no definite answer in standard mathematics</li>
<li><strong>Choice of axioms</strong>: Mathematicians may add CH or ¬CH as an additional axiom depending on what they're studying</li>
</ol><p><strong>Current status</strong>: Most set theorists believe CH is <strong>false</strong> and that 2^ℵ₀ is "much larger" than ℵ₁, though this remains a matter of philosophical preference rather than mathematical proof.</p><p><strong>Cohen's achievement</strong>: For inventing forcing and proving independence of CH, Paul Cohen won the Fields Medal in 1966 — the only Fields Medal ever awarded primarily for logic.</p><h3 class="markdown-h2">The Infinite Hierarchy</h3><p>Cantor proved there is an <strong>infinite hierarchy</strong> of infinities:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">ℵ</mi><mn>0</mn></msub><mo>&#x3C;</mo><msup><mn>2</mn><msub><mi mathvariant="normal">ℵ</mi><mn>0</mn></msub></msup><mo>&#x3C;</mo><msup><mn>2</mn><msup><mn>2</mn><msub><mi mathvariant="normal">ℵ</mi><mn>0</mn></msub></msup></msup><mo>&#x3C;</mo><msup><mn>2</mn><msup><mn>2</mn><msup><mn>2</mn><msub><mi mathvariant="normal">ℵ</mi><mn>0</mn></msub></msup></msup></msup><mo>&#x3C;</mo><mo>…</mo></mrow><annotation encoding="application/x-tex">\\aleph_0 &#x3C; 2^{\\aleph_0} &#x3C; 2^{2^{\\aleph_0}} &#x3C; 2^{2^{2^{\\aleph_0}}} &#x3C; \\ldots</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">ℵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&#x3C;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8882em;vertical-align:-0.0391em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">ℵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&#x3C;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.051em;vertical-align:-0.0391em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.0119em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.927em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">ℵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3448em;margin-left:0em;margin-right:0.1em;"><span class="pstrut" style="height:2.6444em;"></span><span class="mord mtight">0</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2996em;"><span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&#x3C;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2547em;vertical-align:-0.0391em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.2156em;"><span style="top:-3.2156em;margin-right:0.05em;"><span class="pstrut" style="height:2.8526em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.218em;"><span style="top:-3.218em;margin-right:0.0714em;"><span class="pstrut" style="height:2.787em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.1018em;"><span style="top:-3.1018em;margin-right:0.1em;"><span class="pstrut" style="height:2.6944em;"></span><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">ℵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3448em;margin-left:0em;margin-right:0.1em;"><span class="pstrut" style="height:2.6444em;"></span><span class="mord mtight">0</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2996em;"><span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&#x3C;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.123em;"></span><span class="minner">…</span></span></span></span></p><p>Each level is strictly larger than the previous. There is no largest infinity.</p><p>The Continuum Hypothesis asks where 2^ℵ₀ sits in another hierarchy (the aleph numbers ℵ₀, ℵ₁, ℵ₂, ...). The independence results show we'll never know from standard axioms alone.</p></div></details>`,rawContent:`
# Sizes of Infinity

Not all infinities are equal. Georg Cantor (1874-1918) proved that some infinite sets are fundamentally larger than others.

**Countable infinity**: The natural numbers ℕ = {1, 2, 3, ...} are **countably infinite**. Any set that can be put in one-to-one correspondence with ℕ has the same size, denoted **ℵ₀** (aleph-null).

**Uncountable infinity**: The real numbers ℝ are **uncountably infinite** — there are strictly more real numbers than natural numbers. This is denoted **2^ℵ₀** or **𝔠** (the cardinality of the continuum).

# Cantor's Diagonal Argument

Cantor proved ℝ is uncountable using a diagonal argument:

**Proof sketch**: Assume we could list all real numbers in [0,1]:
\`\`\`
1. 0.d₁₁ d₁₂ d₁₃ d₁₄ ...
2. 0.d₂₁ d₂₂ d₂₃ d₂₄ ...
3. 0.d₃₁ d₃₂ d₃₃ d₃₄ ...
4. 0.d₄₁ d₄₂ d₄₃ d₄₄ ...
...
\`\`\`

Construct a new number: 0.e₁e₂e₃e₄... where eᵢ differs from dᵢᵢ (the diagonal digits).

This new number differs from every number in the list (at position i, it differs from the ith number). Therefore, our list is incomplete — ℝ cannot be counted.

# The Continuum Hypothesis

**Continuum Hypothesis (CH)**: There is no set whose cardinality is strictly between ℵ₀ and 2^ℵ₀.

In other words: there is no size of infinity between the integers and the real numbers.

Equivalently: 2^ℵ₀ = ℵ₁ (the next cardinal after ℵ₀).

# The Challenge

**Part A**: Prove that the rational numbers ℚ are countable (have the same cardinality as ℕ) despite appearing "denser" than the integers.

**Part B**: Prove that the set of all infinite sequences of 0s and 1s has the same cardinality as the real numbers.

**Part C**: Explain why the power set of ℕ (the set of all subsets of natural numbers) has cardinality 2^ℵ₀. Use this to explain Cantor's notation.

**Part D**: Research Gödel and Cohen's results on the Continuum Hypothesis. What does it mean that CH is "independent" of standard axioms of set theory?

:::hint
For Part A, use a systematic zigzag pattern to enumerate all fractions. Think about enumerating pairs (p, q) where p/q is the fraction.
:::

:::hint
For Part B, each infinite binary sequence can be interpreted as the binary expansion of a real number in [0,1].
:::

:::hint
For Part C, each subset of ℕ can be represented by a characteristic function: an infinite sequence of 0s and 1s.
:::

:::hint
"Independent" means the statement can neither be proven nor disproven from the axioms. It's like Euclid's parallel postulate in geometry.
:::

:::solution
**Answer**: A) Proof below using diagonal enumeration. B) Proof below via binary representations. C) Every subset corresponds to a binary sequence. D) CH is independent: both CH and ¬CH are consistent with ZFC axioms.

## Part A: Rationals Are Countable

We'll prove ℚ is countable by constructing an enumeration (listing) of all rational numbers.

**Method**: Enumerate all pairs (p, q) where p ∈ ℤ and q ∈ ℕ (q ≠ 0), representing fractions p/q.

Arrange in a grid:
\`\`\`
     q=1    q=2    q=3    q=4   ...
p=0   0/1    0/2    0/3    0/4  ...
p=1   1/1    1/2    1/3    1/4  ...
p=2   2/1    2/2    2/3    2/4  ...
p=3   3/1    3/2    3/3    3/4  ...
p=-1 -1/1   -1/2   -1/3   -1/4  ...
...
\`\`\`

**Diagonal enumeration**: Traverse diagonally:
- Start at 0/1
- Then 1/1, 0/2
- Then 2/1, 1/2, 0/3
- Then 3/1, 2/2, 1/3, 0/4
- Continue...

Also include negative rationals similarly.

This creates a sequence containing every rational number (with duplicates like 2/2 = 1/1, which we can skip). Since we've created a list of all rationals indexed by natural numbers, ℚ is countable.

**Notation**: |ℚ| = ℵ₀

**Surprising conclusion**: Despite ℚ being "dense" (between any two rationals, there's another rational), there are no more rationals than natural numbers!

## Part B: Binary Sequences and Real Numbers

Let **S** be the set of all infinite sequences of 0s and 1s. For example:
- s₁ = 0000000000...
- s₂ = 1010101010...
- s₃ = 1101001000...

We'll show |S| = 2^ℵ₀ = |ℝ|.

**Mapping to [0,1]**: Each sequence s = (b₁, b₂, b₃, ...) maps to a real number:
$$r(s) = \\sum_{i=1}^{\\infty} \\frac{b_i}{2^i} = 0.b_1b_2b_3\\ldots_{\\text{binary}}$$

For example:
- 0000... → 0.0 = 0
- 1111... → 0.111...₂ = 1
- 1010... → 0.101010...₂ = 2/3
- 1000... → 0.1₂ = 1/2

This mapping is **surjective** (every real in [0,1] is hit) and **almost injective** (some numbers like 1/2 = 0.1₂ = 0.0111...₂ have two representations, but this is a countable set of exceptions).

**Conclusion**: |S| = |[0,1]| = |ℝ| = 2^ℵ₀

## Part C: Power Sets and Cardinality

The **power set** 𝒫(ℕ) is the set of all subsets of natural numbers:
- ∅ (empty set)
- {1}
- {2}
- {1, 2}
- {1, 3, 5, 7, ...} (all odd numbers)
- ℕ itself
- ... and infinitely many more

**Bijection to binary sequences**: Each subset A ⊆ ℕ corresponds to a characteristic function χ_A:

$$\\chi_A(n) = \\begin{cases} 1 & \\text{if } n \\in A \\\\ 0 & \\text{if } n \\notin A \\end{cases}$$

This creates an infinite binary sequence. For example:
- ∅ → 0000...
- {1, 3, 5, 7, ...} → 1010101...
- {1, 2, 3, 4, ...} = ℕ → 1111...

This is a **bijection** between 𝒫(ℕ) and infinite binary sequences.

From Part B, infinite binary sequences have cardinality 2^ℵ₀. Therefore:
$$|\\mathcal{P}(\\mathbb{N})| = 2^{\\aleph_0}$$

**Cantor's notation**: The power set of a set with cardinality κ has cardinality 2^κ. Since |ℕ| = ℵ₀, we have |𝒫(ℕ)| = 2^ℵ₀.

## Part D: Independence of CH

**Gödel (1940)**: Proved CH is **consistent** with ZFC (Zermelo-Fraenkel set theory with Axiom of Choice). If ZFC is consistent, then ZFC + CH is also consistent.

**Method**: Gödel constructed the **constructible universe** L, a model of ZFC where CH holds true.

**Cohen (1963)**: Proved ¬CH (the negation of CH) is also **consistent** with ZFC. If ZFC is consistent, then ZFC + ¬CH is also consistent.

**Method**: Cohen invented **forcing**, a technique for extending models of set theory. He constructed models where 2^ℵ₀ = ℵ₂, ℵ₃, or even larger cardinals.

**Implication**: CH is **independent** of ZFC axioms:
- You cannot prove CH from ZFC
- You cannot disprove CH from ZFC
- Both CH and ¬CH are consistent with ZFC

**Analogy to geometry**: Just as Euclidean geometry (with parallel postulate) and non-Euclidean geometries (without it) are both consistent, set theory with CH and set theory with ¬CH are both consistent.

**Philosophical implications**:
1. **Multiple set theories**: We can work in set theory where CH is true or set theory where CH is false
2. **No absolute truth**: Unlike "Is 2+2=4?", CH has no definite answer in standard mathematics
3. **Choice of axioms**: Mathematicians may add CH or ¬CH as an additional axiom depending on what they're studying

**Current status**: Most set theorists believe CH is **false** and that 2^ℵ₀ is "much larger" than ℵ₁, though this remains a matter of philosophical preference rather than mathematical proof.

**Cohen's achievement**: For inventing forcing and proving independence of CH, Paul Cohen won the Fields Medal in 1966 — the only Fields Medal ever awarded primarily for logic.

## The Infinite Hierarchy

Cantor proved there is an **infinite hierarchy** of infinities:
$$\\aleph_0 < 2^{\\aleph_0} < 2^{2^{\\aleph_0}} < 2^{2^{2^{\\aleph_0}}} < \\ldots$$

Each level is strictly larger than the previous. There is no largest infinity.

The Continuum Hypothesis asks where 2^ℵ₀ sits in another hierarchy (the aleph numbers ℵ₀, ℵ₁, ℵ₂, ...). The independence results show we'll never know from standard axioms alone.
:::
`,dynamicBlocks:[]};export{s as default};
