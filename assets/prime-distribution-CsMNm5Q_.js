const s={slug:"prime-distribution",metadata:{id:"26",title:"The Distribution of Prime Numbers",concepts:["number-theory","primes","asymptotic-analysis"],difficulty:"advanced",tags:["series","fundamental","analytical"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",nextPuzzle:"prime-gaps",preview:"The Prime Counting Function Let π(x) denote the number of primes less than or equal to x. For example: π(10) = 4 (primes: 2, 3, 5, 7) π(100) = 25 π(1000) = 168...",websitePreview:"The Prime Counting Function Let π(x) denote the number of primes less than or equal to x. For example: π(10) = 4 (primes: 2, 3, 5, 7) π(100) = 25 π(1000) = 168..."},content:`<h2 class="markdown-h1">The Prime Counting Function</h2>
<p>Let π(x) denote the number of primes less than or equal to x.</p>
<p>For example:</p>
<ul>
<li>π(10) = 4 (primes: 2, 3, 5, 7)</li>
<li>π(100) = 25</li>
<li>π(1000) = 168</li>
</ul>
<h2 class="markdown-h1">The Question</h2>
<p>As x grows large, approximately how many primes are there up to x? Can you find a formula for π(x)?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Consider the ratio π(x) / x. How does it behave as x grows?</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Logarithms</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The natural logarithm ln(x) might be involved...</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: As x grows large, π(x) is approximately <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mi>x</mi><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{x}{\\ln(x)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2154em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>.</p><p>This is the <strong>Prime Number Theorem</strong>, one of the most important results in number theory.</p><h3 class="markdown-h2">The Prime Number Theorem</h3><p>As <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow><annotation encoding="application/x-tex">x \\to \\infty</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord">∞</span></span></span></span>:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>π</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>∼</mo><mfrac><mi>x</mi><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\pi(x) \\sim \\frac{x}{\\ln(x)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∼</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2154em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p><p>The notation "<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>∼</mo></mrow><annotation encoding="application/x-tex">\\sim</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">∼</span></span></span></span>" means the ratio of the two sides approaches 1:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>x</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></msub><mfrac><mrow><mi>π</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mrow><mi>x</mi><mi mathvariant="normal">/</mi><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\\lim_{x \\to \\infty} \\frac{\\pi(x)}{x/\\ln(x)} = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.53em;vertical-align:-0.52em;"></span><span class="mop"><span class="mop">lim</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="mord mtight">/</span><span class="mspace mtight" style="margin-right:0.1952em;"></span><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">π</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p><h3 class="markdown-h2">Historical Development</h3><p><strong>Gauss's Conjecture (1792)</strong>: At age 15, Gauss conjectured that the density of primes near x is approximately <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{1}{\\ln(x)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3651em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>, leading to the integral approximation:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>π</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>≈</mo><msubsup><mo>∫</mo><mn>2</mn><mi>x</mi></msubsup><mfrac><mn>1</mn><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mfrac><mi>d</mi><mi>t</mi><mo>=</mo><mtext>li</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\pi(x) \\approx \\int_2^x \\frac{1}{\\ln(t)} dt = \\text{li}(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3793em;vertical-align:-0.52em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8593em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3558em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">t</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">li</span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></p><p>This logarithmic integral li(x) is a better approximation than <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mi>x</mi><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{x}{\\ln(x)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2154em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>.</p><p><strong>Legendre (1798)</strong>: Conjectured a similar formula with a slightly different constant.</p><p><strong>Proof (1896)</strong>: Independently proved by Jacques Hadamard and Charles Jean de la Vallée Poussin using complex analysis.</p><h3 class="markdown-h2">Better Approximations</h3><p>From best to worst:</p><ol>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>li</mtext><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>2</mn><mi>x</mi></msubsup><mfrac><mn>1</mn><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mfrac><mi>d</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">\\text{li}(x) = \\int_2^x \\frac{1}{\\ln(t)} dt</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">li</span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3793em;vertical-align:-0.52em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8593em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3558em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">t</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">t</span></span></span></span> (best simple approximation)</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mi>x</mi><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{x}{\\ln(x) - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2154em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mi>x</mi><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{x}{\\ln(x)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2154em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> (simplest form)</li>
</ol><h3 class="markdown-h2">Concrete Values</h3><table>
<thead>
<tr>
<th>x</th>
<th>π(x)</th>
<th>x/ln(x)</th>
<th>Error</th>
<th>li(x)</th>
<th>Error</th>
</tr>
</thead>
<tbody>
<tr>
<td>1,000</td>
<td>168</td>
<td>145</td>
<td>14%</td>
<td>178</td>
<td>6%</td>
</tr>
<tr>
<td>10,000</td>
<td>1,229</td>
<td>1,086</td>
<td>12%</td>
<td>1,246</td>
<td>1.4%</td>
</tr>
<tr>
<td>100,000</td>
<td>9,592</td>
<td>8,686</td>
<td>9.4%</td>
<td>9,630</td>
<td>0.4%</td>
</tr>
<tr>
<td>1,000,000</td>
<td>78,498</td>
<td>72,382</td>
<td>7.8%</td>
<td>78,628</td>
<td>0.2%</td>
</tr>
</tbody>
</table><p>The error percentage decreases as x grows, but the absolute error still increases!</p><h3 class="markdown-h2">Implications</h3><p><strong>Average gap between primes</strong>: Near x, the average gap is approximately ln(x).</p><p><strong>Probability a random integer near x is prime</strong>: Approximately <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mrow><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{1}{\\ln(x)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3651em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">l</span><span class="mtight">n</span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>.</p><p><strong>Heuristic for testing primality</strong>: If testing random numbers near x, expect to find a prime after about ln(x) tests.</p><h3 class="markdown-h2">Why Ln(x)?</h3><p>The connection to logarithms comes from the <strong>zeta function</strong> and properties of multiplication. The density of primes is intimately connected to:</p><ul>
<li>The Riemann zeta function ζ(s)</li>
<li>The distribution of zeros of ζ(s)</li>
<li>The Riemann Hypothesis (still unproven!)</li>
</ul><h3 class="markdown-h2">Open Questions</h3><ul>
<li><strong>Riemann Hypothesis</strong>: Concerns the exact error term in the Prime Number Theorem</li>
<li><strong>Twin Prime Conjecture</strong>: Are there infinitely many pairs of primes differing by 2?</li>
<li><strong>Goldbach's Conjecture</strong>: Every even integer > 2 is the sum of two primes?</li>
</ul><p>Want to explore more? Continue to:</p><ul>
<li><strong>Prime Gaps</strong>: How large can gaps between consecutive primes be?</li>
<li><strong>Twin Primes</strong>: Are there infinitely many prime pairs like (11,13)?</li>
</ul></div></details>`,rawContent:`
# The Prime Counting Function

Let π(x) denote the number of primes less than or equal to x.

For example:
- π(10) = 4 (primes: 2, 3, 5, 7)
- π(100) = 25
- π(1000) = 168

# The Question

As x grows large, approximately how many primes are there up to x? Can you find a formula for π(x)?

:::hint
Consider the ratio π(x) / x. How does it behave as x grows?
:::

:::hint[Logarithms]
The natural logarithm ln(x) might be involved...
:::

:::solution
**Answer**: As x grows large, π(x) is approximately $\\frac{x}{\\ln(x)}$.

This is the **Prime Number Theorem**, one of the most important results in number theory.

## The Prime Number Theorem

As $x \\to \\infty$:
$$\\pi(x) \\sim \\frac{x}{\\ln(x)}$$

The notation "$\\sim$" means the ratio of the two sides approaches 1:
$$\\lim_{x \\to \\infty} \\frac{\\pi(x)}{x/\\ln(x)} = 1$$

## Historical Development

**Gauss's Conjecture (1792)**: At age 15, Gauss conjectured that the density of primes near x is approximately $\\frac{1}{\\ln(x)}$, leading to the integral approximation:
$$\\pi(x) \\approx \\int_2^x \\frac{1}{\\ln(t)} dt = \\text{li}(x)$$

This logarithmic integral li(x) is a better approximation than $\\frac{x}{\\ln(x)}$.

**Legendre (1798)**: Conjectured a similar formula with a slightly different constant.

**Proof (1896)**: Independently proved by Jacques Hadamard and Charles Jean de la Vallée Poussin using complex analysis.

## Better Approximations

From best to worst:
1. $\\text{li}(x) = \\int_2^x \\frac{1}{\\ln(t)} dt$ (best simple approximation)
2. $\\frac{x}{\\ln(x) - 1}$
3. $\\frac{x}{\\ln(x)}$ (simplest form)

## Concrete Values

| x | π(x) | x/ln(x) | Error | li(x) | Error |
|---|------|---------|-------|-------|-------|
| 1,000 | 168 | 145 | 14% | 178 | 6% |
| 10,000 | 1,229 | 1,086 | 12% | 1,246 | 1.4% |
| 100,000 | 9,592 | 8,686 | 9.4% | 9,630 | 0.4% |
| 1,000,000 | 78,498 | 72,382 | 7.8% | 78,628 | 0.2% |

The error percentage decreases as x grows, but the absolute error still increases!

## Implications

**Average gap between primes**: Near x, the average gap is approximately ln(x).

**Probability a random integer near x is prime**: Approximately $\\frac{1}{\\ln(x)}$.

**Heuristic for testing primality**: If testing random numbers near x, expect to find a prime after about ln(x) tests.

## Why Ln(x)?

The connection to logarithms comes from the **zeta function** and properties of multiplication. The density of primes is intimately connected to:
- The Riemann zeta function ζ(s)
- The distribution of zeros of ζ(s)
- The Riemann Hypothesis (still unproven!)

## Open Questions

- **Riemann Hypothesis**: Concerns the exact error term in the Prime Number Theorem
- **Twin Prime Conjecture**: Are there infinitely many pairs of primes differing by 2?
- **Goldbach's Conjecture**: Every even integer > 2 is the sum of two primes?

Want to explore more? Continue to:
- **Prime Gaps**: How large can gaps between consecutive primes be?
- **Twin Primes**: Are there infinitely many prime pairs like (11,13)?
:::
`,dynamicBlocks:[]};export{s as default};
