const s={slug:"graph-coloring-chromatic",metadata:{id:"19",title:"Graph Colouring: Chromatic Numbers",concepts:["graph-theory","colouring","chromatic-number","algorithms"],difficulty:"advanced",tags:["series","computational","NP-complete"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",previousPuzzle:"graph-coloring-intro",nextPuzzle:"graph-coloring-four-color",preview:"The Chromatic Number The chromatic number χ(G) of a graph G is the minimum number of colours needed to colour all vertices such that no two adjacent vertices...",websitePreview:"The Chromatic Number The chromatic number χ(G) of a graph G is the minimum number of colours needed to colour all vertices such that no two adjacent vertices..."},content:`<h2 class="markdown-h1">The Chromatic Number</h2>
<p>The <strong>chromatic number</strong> χ(G) of a graph G is the minimum number of colours needed to colour all vertices such that no two adjacent vertices have the same colour.</p>
<h2 class="markdown-h1">The Question</h2>
<p>Given a graph, how do you determine its chromatic number? Are there efficient algorithms?</p>
<h3 class="markdown-h2">Example Graphs</h3>
<ol>
<li>A complete graph <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">K_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> (every vertex connected to every other)</li>
<li>A cycle graph <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">C_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> (vertices in a circle)</li>
<li>A bipartite graph (vertices split into two groups, edges only between groups)</li>
</ol>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Think about special structures. Complete graphs? Bipartite graphs? Trees?</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Upper and Lower Bounds</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>What's a guaranteed upper bound? What's a guaranteed lower bound?</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: Determining the chromatic number is NP-complete, but we can find bounds and exact values for special cases.</p><h3 class="markdown-h2">Special Cases</h3><h4 class="markdown-h3">1. Complete Graph <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">K_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></h4><p>χ<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msub><mi>K</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(K_n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> = <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span></p><p>Every vertex is adjacent to every other, so each needs its own colour.</p><h4 class="markdown-h3">2. Bipartite Graph</h4><p>χ(G) = 2 (or 1 if empty)</p><p>Vertices can be split into two groups with no edges within groups. Two colours suffice: one for each group.</p><h4 class="markdown-h3">3. Cycle Graph <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">C_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></h4><ul>
<li>If <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> is even: χ<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(C_n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> = 2</li>
<li>If <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> is odd: χ<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(C_n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> = 3</li>
</ul><p>Even cycles are bipartite. Odd cycles need three colours.</p><h4 class="markdown-h3">4. Tree</h4><p>χ(Tree) = 2</p><p>Trees are bipartite (no odd cycles), so two colours suffice.</p><h3 class="markdown-h2">Bounds and Theorems</h3><h4 class="markdown-h3">Brooks' Theorem</h4><p>For a connected graph G that is not a complete graph or an odd cycle:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>χ</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo><mo>≤</mo><mi mathvariant="normal">Δ</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\chi(G) \\leq \\Delta(G)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">χ</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Δ</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span></span></span></span></p><p>where <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Δ</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\Delta(G)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Δ</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span></span></span></span> is the maximum degree (number of neighbours) of any vertex.</p><h4 class="markdown-h3">Greedy Colouring Upper Bound</h4><p>A simple greedy algorithm guarantees:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>χ</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo><mo>≤</mo><mi mathvariant="normal">Δ</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\\chi(G) \\leq \\Delta(G) + 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">χ</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Δ</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p><p><strong>Algorithm</strong>:</p><ol>
<li>Order vertices arbitrarily</li>
<li>For each vertex, use the smallest colour not used by its neighbours</li>
</ol><h4 class="markdown-h3">Clique Lower Bound</h4><p>If G contains a clique (complete subgraph) of size <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span>:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>χ</mi><mo stretchy="false">(</mo><mi>G</mi><mo stretchy="false">)</mo><mo>≥</mo><mi>k</mi></mrow><annotation encoding="application/x-tex">\\chi(G) \\geq k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">χ</span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span></p><h3 class="markdown-h2">Example: Petersen Graph</h3><p>The Petersen graph is a famous graph with 10 vertices and 15 edges.</p><ul>
<li>Maximum degree: 3</li>
<li>Contains triangles (cliques of size 3)</li>
<li>Chromatic number: χ = 3</li>
</ul><h3 class="markdown-h2">Computational Complexity</h3><p><strong>Decision problem</strong>: "Is χ(G) ≤ k?" is NP-complete for k ≥ 3.</p><p>This means:</p><ul>
<li>No known polynomial-time algorithm</li>
<li>Verifying a k-colouring is easy (polynomial time)</li>
<li>Finding the chromatic number is hard (likely exponential time)</li>
</ul><h3 class="markdown-h2">Practical Algorithms</h3><h4 class="markdown-h3">Exact Algorithms</h4><ul>
<li>Backtracking with pruning</li>
<li>Branch and bound</li>
<li>Integer linear programming</li>
<li>Works well for small graphs (&#x3C; 100 vertices)</li>
</ul><h4 class="markdown-h3">Approximation Algorithms</h4><ul>
<li>Greedy colouring (fast, not optimal)</li>
<li>Welsh-Powell algorithm (order by degree)</li>
<li>DSATUR algorithm (order by saturation)</li>
</ul><h4 class="markdown-h3">Heuristics</h4><ul>
<li>Simulated annealing</li>
<li>Genetic algorithms</li>
<li>Tabu search</li>
</ul><h3 class="markdown-h2">Applications</h3><ul>
<li><strong>Scheduling</strong>: Assign time slots to tasks (vertices = tasks, edges = conflicts)</li>
<li><strong>Register allocation</strong>: Assign CPU registers to variables in compilers</li>
<li><strong>Frequency assignment</strong>: Assign radio frequencies to transmitters</li>
<li><strong>Sudoku</strong>: A Sudoku puzzle is a 9-colouring problem on a specific graph!</li>
</ul><p>Want to explore more? Continue to <strong>The Four Colour Theorem Proof</strong> to see why proving four colours suffice for planar graphs took 124 years.</p></div></details>`,rawContent:`
# The Chromatic Number

The **chromatic number** χ(G) of a graph G is the minimum number of colours needed to colour all vertices such that no two adjacent vertices have the same colour.

# The Question

Given a graph, how do you determine its chromatic number? Are there efficient algorithms?

## Example Graphs

1. A complete graph $K_n$ (every vertex connected to every other)
2. A cycle graph $C_n$ (vertices in a circle)
3. A bipartite graph (vertices split into two groups, edges only between groups)

:::hint
Think about special structures. Complete graphs? Bipartite graphs? Trees?
:::

:::hint[Upper and Lower Bounds]
What's a guaranteed upper bound? What's a guaranteed lower bound?
:::

:::solution
**Answer**: Determining the chromatic number is NP-complete, but we can find bounds and exact values for special cases.

## Special Cases

### 1. Complete Graph $K_n$
χ$(K_n)$ = $n$

Every vertex is adjacent to every other, so each needs its own colour.

### 2. Bipartite Graph
χ(G) = 2 (or 1 if empty)

Vertices can be split into two groups with no edges within groups. Two colours suffice: one for each group.

### 3. Cycle Graph $C_n$
- If $n$ is even: χ$(C_n)$ = 2
- If $n$ is odd: χ$(C_n)$ = 3

Even cycles are bipartite. Odd cycles need three colours.

### 4. Tree
χ(Tree) = 2

Trees are bipartite (no odd cycles), so two colours suffice.

## Bounds and Theorems

### Brooks' Theorem

For a connected graph G that is not a complete graph or an odd cycle:
$$\\chi(G) \\leq \\Delta(G)$$

where $\\Delta(G)$ is the maximum degree (number of neighbours) of any vertex.

### Greedy Colouring Upper Bound

A simple greedy algorithm guarantees:
$$\\chi(G) \\leq \\Delta(G) + 1$$

**Algorithm**:
1. Order vertices arbitrarily
2. For each vertex, use the smallest colour not used by its neighbours

### Clique Lower Bound

If G contains a clique (complete subgraph) of size $k$:
$$\\chi(G) \\geq k$$

## Example: Petersen Graph

The Petersen graph is a famous graph with 10 vertices and 15 edges.
- Maximum degree: 3
- Contains triangles (cliques of size 3)
- Chromatic number: χ = 3

## Computational Complexity

**Decision problem**: "Is χ(G) ≤ k?" is NP-complete for k ≥ 3.

This means:
- No known polynomial-time algorithm
- Verifying a k-colouring is easy (polynomial time)
- Finding the chromatic number is hard (likely exponential time)

## Practical Algorithms

### Exact Algorithms
- Backtracking with pruning
- Branch and bound
- Integer linear programming
- Works well for small graphs (< 100 vertices)

### Approximation Algorithms
- Greedy colouring (fast, not optimal)
- Welsh-Powell algorithm (order by degree)
- DSATUR algorithm (order by saturation)

### Heuristics
- Simulated annealing
- Genetic algorithms
- Tabu search

## Applications

- **Scheduling**: Assign time slots to tasks (vertices = tasks, edges = conflicts)
- **Register allocation**: Assign CPU registers to variables in compilers
- **Frequency assignment**: Assign radio frequencies to transmitters
- **Sudoku**: A Sudoku puzzle is a 9-colouring problem on a specific graph!

Want to explore more? Continue to **The Four Colour Theorem Proof** to see why proving four colours suffice for planar graphs took 124 years.
:::
`,dynamicBlocks:[]};export{s as default};
