const e={slug:"graph-coloring-intro",metadata:{id:"21",title:"Introduction to Graph Colouring",concepts:["graph-theory","colouring","maps"],difficulty:"medium",tags:["visual","series","fundamental"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",nextPuzzle:"graph-coloring-chromatic",preview:"The Map Colouring Problem You're designing a map and want to colour each region (country, state, etc.) such that: Each region gets exactly one colour No two...",websitePreview:"The Map Colouring Problem You're designing a map and want to colour each region (country, state, etc.) such that: Each region gets exactly one colour No two..."},content:`<h2 class="markdown-h1">The Map Colouring Problem</h2>
<p>You're designing a map and want to colour each region (country, state, etc.) such that:</p>
<ul>
<li>Each region gets exactly one colour</li>
<li>No two regions that share a border have the same colour</li>
<li>Regions that only meet at a point (corner) can share colours</li>
</ul>
<h2 class="markdown-h1">The Question</h2>
<p>What's the minimum number of colours needed to colour any planar map?</p>
<p>Try it with these examples:</p>
<ol>
<li>A map with 4 countries arranged in a cross pattern</li>
<li>A map of the United States</li>
<li>A map of Europe</li>
</ol>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You might think you need many colours, but the answer is surprisingly small.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Start Simple</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Try small examples first. Can you colour a square divided into 4 regions with just a few colours?</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: Four colours are sufficient to colour any planar map.</p><p>This is the famous <strong>Four Colour Theorem</strong>, which states that any planar map can be coloured with at most four colours such that no adjacent regions share the same colour.</p><h3 class="markdown-h2">Why Four?</h3><p><strong>At least three are needed</strong>: Consider three countries all sharing borders with each other (like a Y-shape). Each needs a different colour.</p><p><strong>At least four are needed</strong>: Add a fourth country that borders all three. Now you need a fourth colour.</p><pre><code>    A
   /|\\
  / | \\
 B--C--D
</code></pre><p>In this configuration, A, B, and D all share borders, so they need three colours. C shares a border with all three, requiring a fourth colour.</p><p><strong>Four are always sufficient</strong>: This was conjectured in 1852 but not proved until 1976 by Kenneth Appel and Wolfgang Haken. Their proof was controversial because it used extensive computer checking (thousands of cases), making it impossible to verify by hand.</p><h3 class="markdown-h2">Graph Theory Connection</h3><p>In graph theory terms:</p><ul>
<li>Each region is a <strong>vertex</strong></li>
<li>Two vertices are connected by an <strong>edge</strong> if their regions share a border</li>
<li>This creates a <strong>planar graph</strong> (can be drawn on a plane without edges crossing)</li>
</ul><p>The Four Colour Theorem states that the <strong>chromatic number</strong> (minimum colours needed) of any planar graph is at most 4.</p><h3 class="markdown-h2">Examples</h3><p><strong>Three colours sufficient</strong>: Many maps can be coloured with just 3 colours. For example, any map where no region is surrounded by an odd number of regions (≥3) touching each other.</p><p><strong>Four colours required</strong>: Some configurations actually need all four colours, like the example shown above.</p><p>Want to explore more? Continue to <strong>Graph Colouring: Chromatic Numbers</strong> to learn how to determine the chromatic number of any graph.</p></div></details>`,rawContent:`
# The Map Colouring Problem

You're designing a map and want to colour each region (country, state, etc.) such that:
- Each region gets exactly one colour
- No two regions that share a border have the same colour
- Regions that only meet at a point (corner) can share colours

# The Question

What's the minimum number of colours needed to colour any planar map?

Try it with these examples:
1. A map with 4 countries arranged in a cross pattern
2. A map of the United States
3. A map of Europe

:::hint
You might think you need many colours, but the answer is surprisingly small.
:::

:::hint[Start Simple]
Try small examples first. Can you colour a square divided into 4 regions with just a few colours?
:::

:::solution
**Answer**: Four colours are sufficient to colour any planar map.

This is the famous **Four Colour Theorem**, which states that any planar map can be coloured with at most four colours such that no adjacent regions share the same colour.

## Why Four?

**At least three are needed**: Consider three countries all sharing borders with each other (like a Y-shape). Each needs a different colour.

**At least four are needed**: Add a fourth country that borders all three. Now you need a fourth colour.

\`\`\`
    A
   /|\\
  / | \\
 B--C--D
\`\`\`

In this configuration, A, B, and D all share borders, so they need three colours. C shares a border with all three, requiring a fourth colour.

**Four are always sufficient**: This was conjectured in 1852 but not proved until 1976 by Kenneth Appel and Wolfgang Haken. Their proof was controversial because it used extensive computer checking (thousands of cases), making it impossible to verify by hand.

## Graph Theory Connection

In graph theory terms:
- Each region is a **vertex**
- Two vertices are connected by an **edge** if their regions share a border
- This creates a **planar graph** (can be drawn on a plane without edges crossing)

The Four Colour Theorem states that the **chromatic number** (minimum colours needed) of any planar graph is at most 4.

## Examples

**Three colours sufficient**: Many maps can be coloured with just 3 colours. For example, any map where no region is surrounded by an odd number of regions (≥3) touching each other.

**Four colours required**: Some configurations actually need all four colours, like the example shown above.

Want to explore more? Continue to **Graph Colouring: Chromatic Numbers** to learn how to determine the chromatic number of any graph.
:::
`,dynamicBlocks:[]};export{e as default};
