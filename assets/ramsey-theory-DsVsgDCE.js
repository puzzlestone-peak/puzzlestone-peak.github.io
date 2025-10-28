const e={slug:"ramsey-theory",metadata:{title:"Ramsey's Theorem: Order in Chaos",questionPreview:`At a party of six people, must there always be either three mutual friends or three mutual strangers? This seemingly simple question leads to profound mathematics about unavoidable patterns.
`,concepts:["graph-theory","combinatorics","ramsey-theory"],difficulty:"expert",tags:["fundamental","graph-coloring","combinatorial"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z"},content:`<h2 class="markdown-h1">The Party Problem</h2>
<p>Consider a party with six people. For any pair of people, they are either friends or strangers (assume friendship is mutual).</p>
<p><strong>Question</strong>: Is it always true that among six people, there must exist either:</p>
<ul>
<li>Three people who are all mutual friends, OR</li>
<li>Three people who are all mutual strangers?</li>
</ul>
<p>This is a question about <strong>Ramsey Theory</strong> — the mathematical study of conditions under which order must appear.</p>
<h2 class="markdown-h1">The Challenge</h2>
<p><strong>Part A</strong>: Prove the party problem statement above. Show that among six people, there must be either three mutual friends or three mutual strangers.</p>
<p><strong>Part B</strong>: Why doesn't this work with five people? Construct an example of five people where there are no three mutual friends and no three mutual strangers.</p>
<p><strong>Part C</strong>: Generalise the result. If we want to guarantee either a group of m mutual friends or n mutual strangers, what's the minimum number of people needed?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part A, use graph theory. Represent people as vertices and colour edges red (friends) or blue (strangers).</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Pick one person. They have 5 connections to others. How many of these must be the same colour?</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Use the pigeonhole principle. If 5 edges from one person are coloured with 2 colours, at least 3 must share the same colour.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part B, try arranging 5 people in a pentagon. Colour edges systematically.</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: A) Proof below. B) Example below (pentagon arrangement). C) This is R(m,n), the Ramsey number — mostly unknown!</p><h3 class="markdown-h2">Part A: Six People Guarantee a Monochromatic Triangle</h3><p>We'll prove this using graph theory. Represent the six people as vertices. Draw edges between vertices, colouring them:</p><ul>
<li><strong>Red</strong> if the two people are friends</li>
<li><strong>Blue</strong> if the two people are strangers</li>
</ul><p>We need to prove that any such colouring must contain either a red triangle (three mutual friends) or a blue triangle (three mutual strangers).</p><p><strong>Proof:</strong></p><p>Pick any person, call them Alice. Alice has 5 edges connecting her to the other 5 people.</p><p>By the <strong>pigeonhole principle</strong>, since there are 5 edges and only 2 colours, at least ⌈5/2⌉ = 3 edges must be the same colour. Without loss of generality, assume at least 3 edges from Alice are red (the argument is symmetric for blue).</p><p>Let's say Alice is friends with Bob, Carol, and Dave (three red edges from Alice).</p><p>Now consider the three edges between Bob, Carol, and Dave:</p><ul>
<li><strong>Case 1</strong>: If any of these edges is red (say Bob-Carol), then we have a red triangle: Alice-Bob-Carol ✓</li>
<li><strong>Case 2</strong>: If all three edges are blue, then Bob-Carol-Dave forms a blue triangle ✓</li>
</ul><p>In both cases, we've found a monochromatic triangle. Therefore, any colouring of six people must contain either three mutual friends or three mutual strangers. ∎</p><h3 class="markdown-h2">Part B: Five People Don't Guarantee a Triangle</h3><p>With five people, we can avoid monochromatic triangles. Here's a construction:</p><p>Arrange 5 people in a pentagon: A, B, C, D, E (in order around the pentagon).</p><p><strong>Colouring</strong>:</p><ul>
<li><strong>Red edges</strong> (friends): A-B, B-C, C-D, D-E, E-A (the pentagon edges)</li>
<li><strong>Blue edges</strong> (strangers): A-C, C-E, E-B, B-D, D-A (the star inside)</li>
</ul><p>Check all triangles:</p><ul>
<li>A-B-C: red, red, blue (not monochromatic)</li>
<li>B-C-D: red, red, blue</li>
<li>C-D-E: red, red, blue</li>
<li>D-E-A: red, red, blue</li>
<li>E-A-B: red, red, blue</li>
<li>A-C-E: blue, blue, red</li>
<li>C-E-B: blue, blue, red</li>
<li>E-B-D: blue, blue, red</li>
<li>B-D-A: blue, blue, red</li>
<li>D-A-C: blue, blue, red</li>
</ul><p>No triangle has all three edges the same colour! Therefore, <strong>five people are not enough</strong>.</p><p>This colouring is called the <strong>Ramsey graph R(3,3) - 1</strong> or the <strong>cycle graph C₅</strong> with complementary colouring.</p><h3 class="markdown-h2">Part C: Ramsey Numbers R(m,n)</h3><p>The <strong>Ramsey number R(m,n)</strong> is the minimum number of people needed to guarantee either:</p><ul>
<li>m mutual friends, OR</li>
<li>n mutual strangers</li>
</ul><p>From Parts A and B:</p><ul>
<li>R(3,3) = 6 (six people guarantee three mutual friends or three mutual strangers)</li>
<li>Five people are insufficient, so R(3,3) > 5</li>
</ul><p><strong>Known Ramsey Numbers</strong>:</p><ul>
<li>R(3,3) = 6 (we just proved this!)</li>
<li>R(3,4) = 9</li>
<li>R(3,5) = 14</li>
<li>R(4,4) = 18</li>
<li>R(3,6) = 18</li>
<li>R(3,7) = 23</li>
<li>R(3,8) = 28</li>
<li>R(3,9) = 36</li>
<li>R(4,5) = 25</li>
</ul><p><strong>Unknown Ramsey Numbers</strong>:
Most Ramsey numbers are unknown! For example:</p><ul>
<li>43 ≤ R(5,5) ≤ 48 (we only know it's in this range!)</li>
<li>102 ≤ R(6,6) ≤ 165</li>
</ul><p>Computing Ramsey numbers is extraordinarily difficult. Paul Erdős famously said: "Imagine an alien force, vastly more powerful than us, landing on Earth and demanding the value of R(5,5) or they will destroy our planet. In that case, we should marshal all our computers and all our mathematicians and attempt to find the value. But suppose, instead, that they ask for R(6,6). In that case, we should attempt to destroy the aliens."</p><h3 class="markdown-h2">Why It's So Hard</h3><p>Finding R(m,n) requires checking every possible colouring of edges in a complete graph. For R(5,5), this involves checking graphs with dozens of vertices and hundreds of edges — a combinatorial explosion beyond current computational capabilities.</p><h3 class="markdown-h2">Generalisation</h3><p>Ramsey's Theorem (1930) states: For any positive integers m and n, R(m,n) exists and is finite.</p><p>In other words: <strong>Perfect disorder is impossible.</strong> If you have enough elements, some pattern must emerge.</p><p>This profound idea extends beyond graph colouring to many areas of mathematics, computer science, and logic.</p></div></details>`,rawContent:`
# The Party Problem

Consider a party with six people. For any pair of people, they are either friends or strangers (assume friendship is mutual).

**Question**: Is it always true that among six people, there must exist either:
- Three people who are all mutual friends, OR
- Three people who are all mutual strangers?

This is a question about **Ramsey Theory** — the mathematical study of conditions under which order must appear.

# The Challenge

**Part A**: Prove the party problem statement above. Show that among six people, there must be either three mutual friends or three mutual strangers.

**Part B**: Why doesn't this work with five people? Construct an example of five people where there are no three mutual friends and no three mutual strangers.

**Part C**: Generalise the result. If we want to guarantee either a group of m mutual friends or n mutual strangers, what's the minimum number of people needed?

:::hint
For Part A, use graph theory. Represent people as vertices and colour edges red (friends) or blue (strangers).
:::

:::hint
Pick one person. They have 5 connections to others. How many of these must be the same colour?
:::

:::hint
Use the pigeonhole principle. If 5 edges from one person are coloured with 2 colours, at least 3 must share the same colour.
:::

:::hint
For Part B, try arranging 5 people in a pentagon. Colour edges systematically.
:::

:::solution
**Answer**: A) Proof below. B) Example below (pentagon arrangement). C) This is R(m,n), the Ramsey number — mostly unknown!

## Part A: Six People Guarantee a Monochromatic Triangle

We'll prove this using graph theory. Represent the six people as vertices. Draw edges between vertices, colouring them:
- **Red** if the two people are friends
- **Blue** if the two people are strangers

We need to prove that any such colouring must contain either a red triangle (three mutual friends) or a blue triangle (three mutual strangers).

**Proof:**

Pick any person, call them Alice. Alice has 5 edges connecting her to the other 5 people.

By the **pigeonhole principle**, since there are 5 edges and only 2 colours, at least ⌈5/2⌉ = 3 edges must be the same colour. Without loss of generality, assume at least 3 edges from Alice are red (the argument is symmetric for blue).

Let's say Alice is friends with Bob, Carol, and Dave (three red edges from Alice).

Now consider the three edges between Bob, Carol, and Dave:
- **Case 1**: If any of these edges is red (say Bob-Carol), then we have a red triangle: Alice-Bob-Carol ✓
- **Case 2**: If all three edges are blue, then Bob-Carol-Dave forms a blue triangle ✓

In both cases, we've found a monochromatic triangle. Therefore, any colouring of six people must contain either three mutual friends or three mutual strangers. ∎

## Part B: Five People Don't Guarantee a Triangle

With five people, we can avoid monochromatic triangles. Here's a construction:

Arrange 5 people in a pentagon: A, B, C, D, E (in order around the pentagon).

**Colouring**:
- **Red edges** (friends): A-B, B-C, C-D, D-E, E-A (the pentagon edges)
- **Blue edges** (strangers): A-C, C-E, E-B, B-D, D-A (the star inside)

Check all triangles:
- A-B-C: red, red, blue (not monochromatic)
- B-C-D: red, red, blue
- C-D-E: red, red, blue
- D-E-A: red, red, blue
- E-A-B: red, red, blue
- A-C-E: blue, blue, red
- C-E-B: blue, blue, red
- E-B-D: blue, blue, red
- B-D-A: blue, blue, red
- D-A-C: blue, blue, red

No triangle has all three edges the same colour! Therefore, **five people are not enough**.

This colouring is called the **Ramsey graph R(3,3) - 1** or the **cycle graph C₅** with complementary colouring.

## Part C: Ramsey Numbers R(m,n)

The **Ramsey number R(m,n)** is the minimum number of people needed to guarantee either:
- m mutual friends, OR
- n mutual strangers

From Parts A and B:
- R(3,3) = 6 (six people guarantee three mutual friends or three mutual strangers)
- Five people are insufficient, so R(3,3) > 5

**Known Ramsey Numbers**:
- R(3,3) = 6 (we just proved this!)
- R(3,4) = 9
- R(3,5) = 14
- R(4,4) = 18
- R(3,6) = 18
- R(3,7) = 23
- R(3,8) = 28
- R(3,9) = 36
- R(4,5) = 25

**Unknown Ramsey Numbers**:
Most Ramsey numbers are unknown! For example:
- 43 ≤ R(5,5) ≤ 48 (we only know it's in this range!)
- 102 ≤ R(6,6) ≤ 165

Computing Ramsey numbers is extraordinarily difficult. Paul Erdős famously said: "Imagine an alien force, vastly more powerful than us, landing on Earth and demanding the value of R(5,5) or they will destroy our planet. In that case, we should marshal all our computers and all our mathematicians and attempt to find the value. But suppose, instead, that they ask for R(6,6). In that case, we should attempt to destroy the aliens."

## Why It's So Hard

Finding R(m,n) requires checking every possible colouring of edges in a complete graph. For R(5,5), this involves checking graphs with dozens of vertices and hundreds of edges — a combinatorial explosion beyond current computational capabilities.

## Generalisation

Ramsey's Theorem (1930) states: For any positive integers m and n, R(m,n) exists and is finite.

In other words: **Perfect disorder is impossible.** If you have enough elements, some pattern must emerge.

This profound idea extends beyond graph colouring to many areas of mathematics, computer science, and logic.
:::
`,dynamicBlocks:[]};export{e as default};
