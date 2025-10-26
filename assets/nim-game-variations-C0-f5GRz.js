const n={slug:"nim-game-variations",metadata:{title:"Nim Game: Multi-Pile Variations",questionPreview:`In the classic Nim game, you have multiple piles of stones. Players take turns removing any number of stones from a single pile. The player who takes the last stone wins. What's the winning strategy?
`,concepts:["game-theory","strategy","nim","binary","xor"],difficulty:"advanced",tags:["game","series","mathematical","binary"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",previousPuzzle:"nim-game-strategy"},content:`<h2 class="markdown-h1">Classic Multi-Pile Nim</h2>
<p>The rules:</p>
<ul>
<li>Start with several piles of stones (e.g., piles of 3, 5, and 7 stones)</li>
<li>Players alternate turns</li>
<li>On your turn, remove any number of stones from exactly one pile</li>
<li>The player who takes the last stone wins</li>
</ul>
<h2 class="markdown-h1">The Question</h2>
<p>For any configuration of piles, how do you determine if you can win? What should your move be?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The answer involves binary representations of the pile sizes.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">XOR</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Compute the XOR (exclusive or) of all pile sizes. What does this tell you?</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: You can win if and only if the XOR of all pile sizes is non-zero.</p><h3 class="markdown-h2">The Nim-Sum Strategy</h3><p>The <strong>nim-sum</strong> is the XOR (exclusive or) of all pile sizes.</p><p><strong>Winning position</strong>: Nim-sum = 0
<strong>Losing position</strong>: Nim-sum ≠ 0</p><p><strong>Strategy</strong>:</p><ol>
<li>Calculate the nim-sum of all piles</li>
<li>If it's 0, you're in a losing position</li>
<li>If it's non-zero, find a move that makes it 0</li>
</ol><h3 class="markdown-h2">Example: Piles of 3, 5, 7</h3><p>Convert to binary:</p><ul>
<li>3 = 011</li>
<li>5 = 101</li>
<li>7 = 111</li>
</ul><p>XOR (nim-sum):</p><pre><code>  011
  101
  111
-----
  001 = 1
</code></pre><p>Nim-sum is 1 (non-zero), so the first player can win.</p><p><strong>Winning move</strong>: Make the nim-sum 0. We need to change one pile so the XOR becomes 0.</p><p>If we change the pile of 7:</p><ul>
<li>We want: 3 ⊕ 5 ⊕ x = 0</li>
<li>So: x = 3 ⊕ 5 = 110 = 6</li>
<li>Remove 1 stone from the pile of 7, leaving 6</li>
</ul><p>New position: 3, 5, 6</p><pre><code>  011
  101
  110
-----
  000 = 0
</code></pre><p>Now the nim-sum is 0, and your opponent is in a losing position!</p><h3 class="markdown-h2">Why This Works</h3><p><strong>Key properties of XOR</strong>:</p><ol>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>⊕</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">x \\oplus x = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⊕</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> (anything XOR itself is 0)</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>⊕</mo><mn>0</mn><mo>=</mo><mi>x</mi></mrow><annotation encoding="application/x-tex">x \\oplus 0 = x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⊕</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> (anything XOR 0 is itself)</li>
<li>XOR is associative and commutative</li>
</ol><p><strong>Proof sketch</strong>:</p><ul>
<li>If nim-sum is 0, any move makes it non-zero (your opponent can always respond)</li>
<li>If nim-sum is non-zero, there's always a move to make it 0 (look at the highest bit that's 1)</li>
</ul><h3 class="markdown-h2">The Sprague-Grundy Theorem</h3><p>This generalizes to impartial games. Every position in an impartial game has a <strong>Grundy number</strong> (or nimber). The Grundy number of a position is the XOR of the Grundy numbers of all its components.</p><p>For Nim, the Grundy number of a pile of size <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> is simply <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>.</p><p>This theorem shows that any impartial game is equivalent to a Nim game with the right pile sizes!</p></div></details>`,rawContent:`
# Classic Multi-Pile Nim

The rules:
- Start with several piles of stones (e.g., piles of 3, 5, and 7 stones)
- Players alternate turns
- On your turn, remove any number of stones from exactly one pile
- The player who takes the last stone wins

# The Question

For any configuration of piles, how do you determine if you can win? What should your move be?

:::hint
The answer involves binary representations of the pile sizes.
:::

:::hint[XOR]
Compute the XOR (exclusive or) of all pile sizes. What does this tell you?
:::

:::solution
**Answer**: You can win if and only if the XOR of all pile sizes is non-zero.

## The Nim-Sum Strategy

The **nim-sum** is the XOR (exclusive or) of all pile sizes.

**Winning position**: Nim-sum = 0
**Losing position**: Nim-sum ≠ 0

**Strategy**:
1. Calculate the nim-sum of all piles
2. If it's 0, you're in a losing position
3. If it's non-zero, find a move that makes it 0

## Example: Piles of 3, 5, 7

Convert to binary:
- 3 = 011
- 5 = 101
- 7 = 111

XOR (nim-sum):
\`\`\`
  011
  101
  111
-----
  001 = 1
\`\`\`

Nim-sum is 1 (non-zero), so the first player can win.

**Winning move**: Make the nim-sum 0. We need to change one pile so the XOR becomes 0.

If we change the pile of 7:
- We want: 3 ⊕ 5 ⊕ x = 0
- So: x = 3 ⊕ 5 = 110 = 6
- Remove 1 stone from the pile of 7, leaving 6

New position: 3, 5, 6
\`\`\`
  011
  101
  110
-----
  000 = 0
\`\`\`

Now the nim-sum is 0, and your opponent is in a losing position!

## Why This Works

**Key properties of XOR**:
1. $x \\oplus x = 0$ (anything XOR itself is 0)
2. $x \\oplus 0 = x$ (anything XOR 0 is itself)
3. XOR is associative and commutative

**Proof sketch**:
- If nim-sum is 0, any move makes it non-zero (your opponent can always respond)
- If nim-sum is non-zero, there's always a move to make it 0 (look at the highest bit that's 1)

## The Sprague-Grundy Theorem

This generalizes to impartial games. Every position in an impartial game has a **Grundy number** (or nimber). The Grundy number of a position is the XOR of the Grundy numbers of all its components.

For Nim, the Grundy number of a pile of size $n$ is simply $n$.

This theorem shows that any impartial game is equivalent to a Nim game with the right pile sizes!
:::
`};export{n as default};
