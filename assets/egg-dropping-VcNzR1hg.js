const n={slug:"egg-dropping",metadata:{id:"puzzle-39",title:"Egg Dropping",questionPreview:`You’ve devised an egg-protection device for a school project. With two prototypes and a 100-storey building, what’s the fewest drops to find the break floor?
`,concepts:["optimisation"],difficulty:{concepts:"medium",reasoning:"medium"},tags:["has-solution"],dateCreated:"2026-02-02",lastUpdated:"2026-02-02",credit:`Classic puzzle.
Question and solution by Puzzlestone Peak.
`,preview:"For a school project, you’ve devised an egg-protection device — a little contraption that wraps around an egg and is supposed to keep it from breaking when...",websitePreview:"For a school project, you’ve devised an egg-protection device — a little contraption that wraps around an egg and is supposed to keep it from breaking when..."},content:`<p>For a school project, you’ve devised an egg-protection device — a little contraption that wraps around an egg and is supposed to keep it from breaking when dropped from a height. You’ve built two prototypes and now you need to figure out just how effective they are.</p>
<p>Near your school is a 100-storey building. The device might fail from as low as the first floor, or it might protect the egg all the way from the 100th — you have no idea. You need to find the “break floor” — the lowest floor from which a protected egg will still break on impact. Note that the device may survive even a drop from the 100th floor, in which case there is no break floor.</p>
<p>What is the minimum number of drops you’d ever need in the <strong>worst case</strong> to determine the break floor? You’re allowed to break both eggs, as long as you can identify the correct floor afterwards.</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint 1</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Experiment with simpler versions of the problem. Perhaps you can try a shorter building, or you can try having only 1 device instead of 2.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint 2</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>If you only had 1 device, you cannot do better than 100 drops in the worst case. Why?</p><details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s start from the beginning. If you dropped the device from the 2nd floor and it broke, you know the break floor is either 1 or 2, but you don’t have any devices left to test. The same goes for any floor above the 2nd floor.</p><p>This means you have to test the 1st floor, then the 2nd floor, and so on; all the way up to the 100th floor. In the worst case, the device doesn’t break at all, and you’d have to test the drop from all 100 floors.</p></div></details><p>Now consider what happens when you have 2 devices.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint 3</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>If your first move is to drop from the 50th floor, what’s the minimum number of drops you’d have to do in the worst case scenario?</p><details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You would have to do 50 drops in the worst case scenario.</p><p><strong>Case 1</strong>: If the device breaks at the 50th floor, we’re now left with 1 device to test the remaining floors 1 to 49. That’s a total of 49 drops + the first drop for a total of 50.</p><p><strong>Case 2</strong>: If the device doesn’t break at the 50th floor, we can drop the device once more on any floor in the middle, so let’s go with the 75th floor. If it breaks, we can test floors 51 to 74 for a total of 26 drops in the worst case. If it doesn’t break, we can still test the remaining 25 floors with a naive brute force solution and still come up with 27 drops in total. Either way, you cannot do as bad as the 50 drops required in case 1.</p></div></details></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: 14 drops.</p><p>Let’s work our way up to a solution. As we’ve seen from the hints, once the device has broken, you will need to brute force ALL the remaining floors in the worst case scenario. But how do we optimise this then?</p><p>First, let’s start with a simpler version of the problem with 6 floors and 2 devices. We’ll start with a naive solution for now:</p><ul>
<li>First drop: Drop from floor 3.
<ul>
<li>If it breaks, test floor 1, then 2. Worst case: 3 moves.</li>
<li>If it doesn’t break, drop from floor 6.
<ul>
<li>If it breaks, test floor 4, then 5. Worst case: 4 moves.</li>
<li>If it doesn’t break, then we know the device survives all 6 floors.</li>
</ul>
</li>
</ul>
</li>
</ul><p>This gives us a worst case of 4 moves.</p><p>Let’s come up with a way to visualise this. We indicate the drops with device 1 on a horizontal line. We start from the left point, and each step to the right indicates a drop.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>When the device breaks on a specific floor, we can no longer make a horizontal step, so we must now take vertical steps downward. From hint 2, we know that once we’re left with 1 device, we must test all the floors sequentially. If the device breaks at floor 3, we need to test floors 1 and 2. If the device breaks at floor 6, we need to test floors 4 and 5. This gives us the following diagram:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>We can see from this diagram that we have a worst-case of 4 moves (Start → 3 → 6 → 4 → 5). Can we do better? Let’s try a different strategy:</p><ul>
<li>First drop: Drop from floor 2.
<ul>
<li>If it breaks, test floor 1. Worst case: 2 moves.</li>
<li>If it doesn’t break, drop from floor 4.
<ul>
<li>If it breaks, test floor 3. Worst case: 3 moves.</li>
<li>If it doesn’t break, test floor 6.
<ul>
<li>If it breaks, test floor 5. Worst case: 4 moves</li>
<li>If it doesn’t break, then we know the device survives all 6 floors.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Hmm, we’re still stuck with a worst-case of 4 moves (Start → 2 → 4 → 6 → 5). But does that mean we’ve found the optimal number of drops?</p><p>No! Notice how in both versions of the diagram, we have short paths that terminate early. In version 1, we have (Start → 3 → 1 → 2) and (Start → 3 → 6 without breaking). In version 2, we have (Start → 2 → 1), (Start → 2 → 4 → 3), and (Start → 2 → 4 → 6 without breaking). If we could make these longer in order to shorten the worst-case path, we’ll find a better solution. And in fact, we can!</p><ul>
<li>First drop: Drop from floor 3.
<ul>
<li>If it breaks, test floor 1, then 2. Worst case: 3 moves.</li>
<li>If it doesn’t break, drop from floor 5.
<ul>
<li>If it breaks, test floor 4. Worst case: 3 moves.</li>
<li>If it doesn’t break, test floor 6. Worst case: 3 moves.</li>
</ul>
</li>
</ul>
</li>
</ul><div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>No matter which path we take, we’ll always end up with 3 moves in the worst case.</p><p>With this visualisation in mind, let’s explore some solutions for the 100-storey version of the puzzle. In hint 3, we offered a naive solution of dropping from the 50th floor. Visualising it with our new diagram, it looks like this:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="4" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Oof, that’s rough. It seems like we’re not taking proper advantage of the first device (the rightward movement on the diagram). So instead of making such huge jumps with the first device, we should instead move it in smaller steps.</p><p>How about steps of 10? This time, we’ll try dropping the first device from floor 10, then 20, then 30, and so on. At the first floor that it breaks on, we will test the remaining floors in between the last 2 drops. For example, if the first device breaks on floor 60, then we will drop the second device from floor 51, 52, ..., 59. Our diagram now looks like this:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="5" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>In the worst case scenario, we have 19 moves (Start → 10 → 20 → 30 → 40 → 50 → 60 → 70 → 80 → 90 → 100 → 91 → 92 → 93 → 94 → 95 → 96 → 97 → 98 → 99). But notice how the shorter chains have only 10 moves, 11 moves, and so on? Let’s lengthen them. Instead of having the first drop at 10, we can have the first drop at 14 (a jump of 14). Then our next jump should be <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>14</mn><mo>+</mo><mn>13</mn><mo>=</mo><mn>27</mn></mrow><annotation>14 + 13 = 27</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">14</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">13</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">27</span></span></span></span>. Then the following drop should be <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>27</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>39</mn></mrow><annotation>27 + 12 = 39</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">27</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">12</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">39</span></span></span></span>. Continuing this way, we get a chart of:</p><div class="dynamic-block-placeholder" data-dynamic-block-id="6" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>In the worst case scenario, we have 14 moves, and we can’t do any better than this. However, through this diagram, we see that for a maximum of 14 moves, this strategy works up to a maximum building height of 105 storeys.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="7" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><div class="content-block note-block note-note" data-type="note" data-note-type="note"><div class="note-header note-note-header">An Extension</div><div class="note-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Now that you’ve found the optimal strategy for 2 devices and 100 storeys, try to generalise:</p><ol>
<li>For 2 devices, what is the minimum worst-case number of drops for a building of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> storeys?</li>
<li>For 2 devices, what is the maximum building height coverable with at most <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation>k</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> drops in the worst case?</li>
<li>For <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>d</mi></mrow><annotation>d</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span></span></span></span> devices and an <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>-storey building, what is the minimum worst-case number of drops?</li>
</ol></div></div></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
For a school project, you’ve devised an egg-protection device — a little contraption that wraps around an egg and is supposed to keep it from breaking when dropped from a height. You’ve built two prototypes and now you need to figure out just how effective they are.

Near your school is a 100-storey building. The device might fail from as low as the first floor, or it might protect the egg all the way from the 100th — you have no idea. You need to find the “break floor” — the lowest floor from which a protected egg will still break on impact. Note that the device may survive even a drop from the 100th floor, in which case there is no break floor.

What is the minimum number of drops you’d ever need in the **worst case** to determine the break floor? You’re allowed to break both eggs, as long as you can identify the correct floor afterwards.


:::hint[Hint 1]
Experiment with simpler versions of the problem. Perhaps you can try a shorter building, or you can try having only 1 device instead of 2.
:::

::::hint[Hint 2]
If you only had 1 device, you cannot do better than 100 drops in the worst case. Why?

:::solution
Let’s start from the beginning. If you dropped the device from the 2nd floor and it broke, you know the break floor is either 1 or 2, but you don’t have any devices left to test. The same goes for any floor above the 2nd floor.

This means you have to test the 1st floor, then the 2nd floor, and so on; all the way up to the 100th floor. In the worst case, the device doesn’t break at all, and you’d have to test the drop from all 100 floors.
:::

Now consider what happens when you have 2 devices.
::::

::::hint[Hint 3]
If your first move is to drop from the 50th floor, what’s the minimum number of drops you’d have to do in the worst case scenario?

:::solution
You would have to do 50 drops in the worst case scenario.

**Case 1**: If the device breaks at the 50th floor, we’re now left with 1 device to test the remaining floors 1 to 49. That’s a total of 49 drops + the first drop for a total of 50.

**Case 2**: If the device doesn’t break at the 50th floor, we can drop the device once more on any floor in the middle, so let’s go with the 75th floor. If it breaks, we can test floors 51 to 74 for a total of 26 drops in the worst case. If it doesn’t break, we can still test the remaining 25 floors with a naive brute force solution and still come up with 27 drops in total. Either way, you cannot do as bad as the 50 drops required in case 1.
:::
::::

::::solution
**Answer**: 14 drops.

Let’s work our way up to a solution. As we’ve seen from the hints, once the device has broken, you will need to brute force ALL the remaining floors in the worst case scenario. But how do we optimise this then?

First, let’s start with a simpler version of the problem with 6 floors and 2 devices. We’ll start with a naive solution for now:

- First drop: Drop from floor 3.
    - If it breaks, test floor 1, then 2. Worst case: 3 moves.
    - If it doesn’t break, drop from floor 6.
        - If it breaks, test floor 4, then 5. Worst case: 4 moves.
        - If it doesn’t break, then we know the device survives all 6 floors.

This gives us a worst case of 4 moves.

Let’s come up with a way to visualise this. We indicate the drops with device 1 on a horizontal line. We start from the left point, and each step to the right indicates a drop.

:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Simple strategy: drop from floor 3, then floor 6"
ariaLabel: Three nodes in a horizontal chain — start, floor 3, floor 6
props:
  columns:
    - "S"
    - "3"
    - "6"
\`\`\`
:::

When the device breaks on a specific floor, we can no longer make a horizontal step, so we must now take vertical steps downward. From hint 2, we know that once we’re left with 1 device, we must test all the floors sequentially. If the device breaks at floor 3, we need to test floors 1 and 2. If the device breaks at floor 6, we need to test floors 4 and 5. This gives us the following diagram:

:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Strategy tree: floors 3 and 6 with fallback chains"
ariaLabel: Strategy tree with start node, floor 3 with chain 1 and 2 below, floor 6 with chain 4 and 5 below
props:
  columns:
    - "S"
    - label: "3"
      chain: [1, 2]
    - label: "6"
      chain: [4, 5]
  showDepth: true
  minWidth: 280
\`\`\`
:::

We can see from this diagram that we have a worst-case of 4 moves (Start → 3 → 6 → 4 → 5). Can we do better? Let’s try a different strategy:

- First drop: Drop from floor 2.
    - If it breaks, test floor 1. Worst case: 2 moves.
    - If it doesn’t break, drop from floor 4.
        - If it breaks, test floor 3. Worst case: 3 moves.
        - If it doesn’t break, test floor 6.
            - If it breaks, test floor 5. Worst case: 4 moves
            - If it doesn’t break, then we know the device survives all 6 floors.

:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Strategy tree: floors 2, 4, and 6 with single fallbacks"
ariaLabel: Strategy tree with start, floor 2 dropping to 1, floor 4 dropping to 3, floor 6 dropping to 5
props:
  columns:
    - "S"
    - label: "2"
      chain: [1]
    - label: "4"
      chain: [3]
    - label: "6"
      chain: [5]
  showDepth: true
  minWidth: 320
\`\`\`
:::

Hmm, we’re still stuck with a worst-case of 4 moves (Start → 2 → 4 → 6 → 5). But does that mean we’ve found the optimal number of drops?

No! Notice how in both versions of the diagram, we have short paths that terminate early. In version 1, we have (Start → 3 → 1 → 2) and (Start → 3 → 6 without breaking). In version 2, we have (Start → 2 → 1), (Start → 2 → 4 → 3), and (Start → 2 → 4 → 6 without breaking). If we could make these longer in order to shorten the worst-case path, we’ll find a better solution. And in fact, we can!

- First drop: Drop from floor 3.
    - If it breaks, test floor 1, then 2. Worst case: 3 moves.
    - If it doesn’t break, drop from floor 5.
        - If it breaks, test floor 4. Worst case: 3 moves.
        - If it doesn’t break, test floor 6. Worst case: 3 moves.

:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Optimal strategy tree for 6 floors"
ariaLabel: Strategy tree with start, floor 3 dropping to 2 then 1, floor 5 dropping to 4, floor 6 with no chain
props:
  columns:
    - "S"
    - label: "3"
      chain: [1, 2]
    - label: "5"
      chain: [4]
    - "6"
  showDepth: true
\`\`\`
:::

No matter which path we take, we’ll always end up with 3 moves in the worst case.

With this visualisation in mind, let’s explore some solutions for the 100-storey version of the puzzle. In hint 3, we offered a naive solution of dropping from the 50th floor. Visualising it with our new diagram, it looks like this:


:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Strategy tree: binary split from floor 50"
ariaLabel: Strategy tree showing drops from floors 50, 75, and 100 with long fallback chains
props:
  columns:
    - "S"
    - label: "50"
      chain: [1, 2, "...", "...", "...", "...", 49]
    - label: "75"
      chain: [51, 52, "...", 74]
    - label: "100"
      chain: [76, 77, "...", 98, 99]
  showDepth: true
  minWidth: 320
\`\`\`
:::

Oof, that’s rough. It seems like we’re not taking proper advantage of the first device (the rightward movement on the diagram). So instead of making such huge jumps with the first device, we should instead move it in smaller steps.

How about steps of 10? This time, we’ll try dropping the first device from floor 10, then 20, then 30, and so on. At the first floor that it breaks on, we will test the remaining floors in between the last 2 drops. For example, if the first device breaks on floor 60, then we will drop the second device from floor 51, 52, ..., 59. Our diagram now looks like this:

:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Strategy tree: steps of 10"
ariaLabel: Strategy tree showing drops from floors 10, 20, 30 with full fallback chains of 9 floors each
props:
  columns:
    - "S"
    - label: "10"
      chain: { from: 1, to: 9 }
    - label: "20"
      chain: { from: 11, to: 19 }
    - label: "30"
      chain: { from: 21, to: 29 }
    - "..."
    - label: "80"
      chain: { from: 71, to: 79 }
      depth: 17
    - label: "90"
      chain: { from: 81, to: 89 }
      depth: 18
    - label: "100"
      chain: { from: 91, to: 99 }
      depth: 19
  showDepth: true
  minWidth: 800
\`\`\`
:::

In the worst case scenario, we have 19 moves (Start → 10 → 20 → 30 → 40 → 50 → 60 → 70 → 80 → 90 → 100 → 91 → 92 → 93 → 94 → 95 → 96 → 97 → 98 → 99). But notice how the shorter chains have only 10 moves, 11 moves, and so on? Let’s lengthen them. Instead of having the first drop at 10, we can have the first drop at 14 (a jump of 14). Then our next jump should be $14 + 13 = 27$. Then the following drop should be $27 + 12 = 39$. Continuing this way, we get a chart of:

:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Optimal strategy tree for 100 floors"
ariaLabel: Strategy tree with decreasing jumps starting at floor 14, covering all 100 floors in at most 14 drops
props:
  columns:
    - "S"
    - label: "14"
      chain: { from: 1, to: 13 }
    - label: "27"
      chain: { from: 15, to: 26 }
    - label: "39"
      chain: { from: 28, to: 38 }
    - label: "50"
      chain: { from: 40, to: 49 }
    - label: "60"
      chain: { from: 51, to: 59 }
    - label: "69"
      chain: { from: 61, to: 68 }
    - label: "77"
      chain: { from: 70, to: 76 }
    - label: "84"
      chain: { from: 78, to: 83 }
    - label: "90"
      chain: { from: 85, to: 89 }
    - label: "95"
      chain: { from: 91, to: 94 }
    - label: "99"
      chain: { from: 96, to: 98 }
    - "100"
  showDepth: true
  minWidth: 1100
\`\`\`
:::

In the worst case scenario, we have 14 moves, and we can’t do any better than this. However, through this diagram, we see that for a maximum of 14 moves, this strategy works up to a maximum building height of 105 storeys.

:::dynamic
\`\`\`yaml
use: '#strategy-tree'
title: "Maximum building height with 14 drops: 105 floors"
ariaLabel: Strategy tree for 14 drops covering up to 105 floors, with every path exactly 14 steps
props:
  columns:
    - "S"
    - label: "14"
      chain: { from: 1, to: 13 }
    - label: "27"
      chain: { from: 15, to: 26 }
    - label: "39"
      chain: { from: 28, to: 38 }
    - label: "50"
      chain: { from: 40, to: 49 }
    - label: "60"
      chain: { from: 51, to: 59 }
    - label: "69"
      chain: { from: 61, to: 68 }
    - label: "77"
      chain: { from: 70, to: 76 }
    - label: "84"
      chain: { from: 78, to: 83 }
    - label: "90"
      chain: { from: 85, to: 89 }
    - label: "95"
      chain: { from: 91, to: 94 }
    - label: "99"
      chain: { from: 96, to: 98 }
    - label: "102"
      chain: [100, 101]
    - label: "104"
      chain: [103]
    - "105"
  showDepth: true
  minWidth: 800
\`\`\`
:::

:::note[An Extension]
Now that you’ve found the optimal strategy for 2 devices and 100 storeys, try to generalise:

1. For 2 devices, what is the minimum worst-case number of drops for a building of $n$ storeys?
2. For 2 devices, what is the maximum building height coverable with at most $k$ drops in the worst case?
3. For $d$ devices and an $n$-storey building, what is the minimum worst-case number of drops?
:::

::::


:::component[strategy-tree]
\`\`\`yaml
mode: canvas
title: Strategy tree diagram
ariaLabel: Horizontal chain of decision nodes with vertical fallback chains descending below
\`\`\`

\`\`\`js
// Normalize columns: expand ranges, compute full chain length
function normalizeColumns(rawColumns) {
  return rawColumns.map(col => {
    // Handle shorthand: plain string → { label: "X" }
    if (typeof col === 'string') {
      return { label: col, chain: [], fullChainLength: 0, depth: null };
    }

    const { label, chain, depth } = col;
    let chainLabels = [];
    let fullLength = 0;

    if (!chain) {
      return { label, chain: [], fullChainLength: 0, depth: depth ?? null };
    }

    // Expand range syntax: { from: 1, to: 49 } → [1, 2, ..., 49]
    if (typeof chain === 'object' && !Array.isArray(chain)) {
      const { from, to } = chain;
      fullLength = to - from + 1;
      for (let i = from; i <= to; i++) {
        chainLabels.push(String(i));
      }
    } else {
      chainLabels = chain.map(String);
      // Derive full length from first and last numeric items
      const nums = chainLabels.filter(l => l !== '...').map(Number);
      if (nums.length >= 2) {
        fullLength = nums[nums.length - 1] - nums[0] + 1;
      } else {
        fullLength = nums.length;
      }
    }

    return { label, chain: chainLabels, fullChainLength: fullLength, depth: depth ?? null };
  });
}

// Compute layout parameters based on columns and container width
function computeLayout(columns, containerWidth, options) {
  const { showDepth, minWidth } = options;
  const effectiveWidth = minWidth ? Math.max(containerWidth, minWidth) : containerWidth;
  const numCols = columns.length;

  // Column spacing (+1 for right-side padding so last node isn't clipped)
  const totalSpacing = numCols + 1;
  const spacing = Math.min(effectiveWidth / totalSpacing, 100);
  const radius = Math.min(spacing * 0.35, 20);

  // Vertical spacing
  const verticalSpacing = radius * 3;

  // Calculate height needed
  let maxVisibleChainLength = 0;
  for (const col of columns) {
    if (col.chain.length > maxVisibleChainLength) {
      maxVisibleChainLength = col.chain.length;
    }
  }

  const topRowY = radius * 2.5;
  const chainStartY = topRowY + verticalSpacing;
  let canvasHeight;

  if (maxVisibleChainLength > 0) {
    // Bottom of the deepest chain node circle
    canvasHeight = chainStartY + (maxVisibleChainLength - 1) * verticalSpacing + radius;
  } else {
    // No chains: bottom of top row circles
    canvasHeight = topRowY + radius;
  }

  if (showDepth) {
    // Depth labels: radius gap below circle + up to 2 lines of text
    canvasHeight += radius * 3;
  }

  canvasHeight += radius; // Bottom padding

  // Calculate canvas width with extra space for "(if no breaks)" label
  let canvasWidth = totalSpacing * spacing;

  // Check if we need to add space for the "(if no breaks)" label
  if (showDepth) {
    const lastNonEllipsisIndex = columns.reduce((idx, col, i) =>
      col.label !== '...' ? i : idx, 0);
    const lastCol = columns[lastNonEllipsisIndex];
    const maxFloor = Math.max(
      ...columns.filter(c => c.label !== '...' && !isNaN(c.label)).map(c => Number(c.label)),
      ...columns.flatMap(c => c.chain.filter(l => l !== '...' && !isNaN(l)).map(Number))
    );

    const shouldShowLabel = lastCol.label !== '...'
      && lastCol.chain.length > 0
      && Number(lastCol.label) === maxFloor;

    if (shouldShowLabel) {
      // Count horizontal moves to calculate label width
      let lastEllipsisIndex = -1;
      for (let i = columns.length - 1; i >= 0; i--) {
        if (columns[i] === '...' || columns[i].label === '...') {
          lastEllipsisIndex = i;
          break;
        }
      }

      let horizontalMoves = 0;
      for (let i = Math.max(1, lastEllipsisIndex + 1); i <= lastNonEllipsisIndex; i++) {
        if (columns[i] !== '...' && columns[i].label !== '...') {
          horizontalMoves++;
        }
      }

      // Calculate actual label width for two-line format: "X moves" / "(if no breaks)"
      // We need to estimate based on character count since we don't have canvas context here
      const word = horizontalMoves === 1 ? 'move' : 'moves';
      const firstLine = \`\${horizontalMoves} \${word}\`;
      const secondLine = '(if no breaks)';

      // Estimate width: ~7-8px per character for monospace at fontSize = radius * 0.7
      const avgCharWidth = radius * 0.7 * 0.6; // Conservative estimate for monospace
      const firstLineWidth = firstLine.length * avgCharWidth;
      const secondLineWidth = secondLine.length * avgCharWidth;
      const maxWidth = Math.max(firstLineWidth, secondLineWidth);

      // Add label width + spacing + padding
      canvasWidth += radius + spacing * 0.3 + maxWidth + spacing * 0.6;
    }
  }

  return {
    spacing,
    radius,
    verticalSpacing,
    topRowY,
    chainStartY,
    canvasHeight,
    canvasWidth
  };
}

// Draw a circle with centered label
function drawCircleNode(ctx, x, y, radius, label, colors, fonts) {
  const { fill, stroke, text } = colors;
  const { fontFamily } = fonts;

  // Circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Label
  ctx.fillStyle = text;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Font size based on label length
  let fontSize;
  if (label.length <= 2) {
    fontSize = radius * 0.9;
  } else if (label.length === 3) {
    fontSize = radius * 0.75;
  } else {
    fontSize = radius * 0.6;
  }

  ctx.font = \`bold \${fontSize}px \${fontFamily}\`;
  ctx.fillText(label, x, y);
}

// Draw an arrowhead at the given tip position and angle
function drawArrowhead(ctx, tipX, tipY, angle, radius) {
  const size = Math.max(3, radius * 0.3);
  ctx.save();
  ctx.translate(tipX, tipY);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-size, -size * 0.6);
  ctx.lineTo(-size, size * 0.6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Draw a connection line between two nodes with optional arrowhead
function drawConnection(ctx, x1, y1, x2, y2, radius, showArrows, colors) {
  const { stroke } = colors;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';

  // Calculate start and end points at circle boundary
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);

  const startX = x1 + (dx / dist) * radius;
  const startY = y1 + (dy / dist) * radius;
  const endX = x2 - (dx / dist) * radius;
  const endY = y2 - (dy / dist) * radius;

  // Draw line
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  // Draw arrowhead
  if (showArrows) {
    ctx.fillStyle = stroke;
    drawArrowhead(ctx, endX, endY, angle, radius);
  }
}

// Draw three vertical ellipsis dots
function drawVerticalEllipsis(ctx, x, y, color, radius) {
  ctx.fillStyle = color;
  const dotRadius = Math.max(1.5, radius * 0.125);
  const gap = Math.max(5, radius * 0.4);

  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.arc(x, y + i * gap, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Draw three horizontal ellipsis dots
function drawHorizontalEllipsis(ctx, x, y, color, radius) {
  ctx.fillStyle = color;
  const dotRadius = Math.max(1.5, radius * 0.125);
  const gap = Math.max(5, radius * 0.4);

  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.arc(x + i * gap, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function draw(options) {
  const { canvas, api, width: containerWidth, props } = options;
  const ctx = canvas.getContext('2d');

  // Default props
  const {
    columns: rawColumns = [],
    showDepth = false,
    showArrows = true,
    minWidth = 0,
  } = props;

  if (!rawColumns || rawColumns.length === 0) {
    canvas.width = containerWidth;
    canvas.height = 100;
    ctx.fillStyle = api.getColor('muted-foreground');
    ctx.font = \`14px \${api.getFont('default')}\`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('No columns provided', containerWidth / 2, 50);
    api.requestResize(100);
    return;
  }

  // Normalize columns
  const columns = normalizeColumns(rawColumns);

  // Compute layout
  const layout = computeLayout(columns, containerWidth, { showDepth, minWidth });
  const {
    spacing,
    radius,
    verticalSpacing,
    topRowY,
    chainStartY,
    canvasHeight,
    canvasWidth
  } = layout;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Colors (theme-aware)
  const foreground = api.getColor('foreground');
  const cardBg = api.getColor('card');
  const mutedBg = api.getColor('muted');
  const mutedFg = api.getColor('muted-foreground');
  const primaryColor = api.getColor('primary');

  const colors = {
    stroke: foreground,
    fill: cardBg,
    mutedFill: mutedBg,
    text: foreground,
    ellipsis: mutedFg,
    depth: primaryColor
  };

  const fonts = {
    fontFamily: api.getFont('default'),
    monoFamily: api.getFont('mono')
  };

  // Track y-positions for each column's chain
  const columnYPositions = columns.map(() => []);

  // Draw horizontal chain nodes
  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    const x = (i + 1) * spacing;
    const y = topRowY;

    if (col.label === '...') {
      // Draw horizontal ellipsis dots instead of a circle
      drawHorizontalEllipsis(ctx, x, y, colors.ellipsis, radius);
    } else {
      // First column uses muted background
      const nodeFill = i === 0 ? colors.mutedFill : colors.fill;
      const nodeColors = { ...colors, fill: nodeFill };
      drawCircleNode(ctx, x, y, radius, col.label, nodeColors, fonts);
    }

    // Draw horizontal connection to next column
    if (i < columns.length - 1) {
      const nextX = (i + 2) * spacing;
      drawConnection(ctx, x, y, nextX, y, radius, showArrows, colors);
    }

    // Track positions for vertical chains
    columnYPositions[i].push({ x, y });
  }

  // Draw vertical chains
  for (let colIdx = 0; colIdx < columns.length; colIdx++) {
    const col = columns[colIdx];
    if (col.chain.length === 0) continue;

    const x = (colIdx + 1) * spacing;
    let currentY = chainStartY;

    for (let chainIdx = 0; chainIdx < col.chain.length; chainIdx++) {
      const label = col.chain[chainIdx];
      const isEllipsis = label === '...';

      if (isEllipsis) {
        // Draw vertical ellipsis dots centered where the circle would be
        drawVerticalEllipsis(ctx, x, currentY, colors.ellipsis, radius);
        columnYPositions[colIdx].push({ x, y: currentY });

        // Connection from previous
        const prevPos = columnYPositions[colIdx][columnYPositions[colIdx].length - 2];
        drawConnection(ctx, prevPos.x, prevPos.y, x, currentY, radius, showArrows, colors);

        currentY += verticalSpacing;
      } else {
        // Draw regular node
        drawCircleNode(ctx, x, currentY, radius, label, colors, fonts);
        columnYPositions[colIdx].push({ x, y: currentY });

        // Connection from previous
        const prevPos = columnYPositions[colIdx][columnYPositions[colIdx].length - 2];
        drawConnection(ctx, prevPos.x, prevPos.y, x, currentY, radius, showArrows, colors);

        currentY += verticalSpacing;
      }
    }
  }

  // Draw depth labels if enabled (for all columns except start and ellipsis)
  if (showDepth) {
    const fontSize = radius * 0.7;
    ctx.font = \`bold \${fontSize}px \${fonts.monoFamily}\`;
    ctx.fillStyle = colors.depth;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    for (let colIdx = 1; colIdx < columns.length; colIdx++) {
      const col = columns[colIdx];
      if (col.label === '...') continue;
      const x = (colIdx + 1) * spacing;
      const lastPos = columnYPositions[colIdx][columnYPositions[colIdx].length - 1];
      const depth = col.depth ?? (colIdx + col.fullChainLength);
      const depthY = lastPos.y + radius * 2;
      const word = depth === 1 ? 'move' : 'moves';
      const singleLine = \`\${depth} \${word}\`;

      // Check if single line fits within column spacing
      const textWidth = ctx.measureText(singleLine).width;
      if (textWidth < spacing * 0.95) {
        ctx.fillText(singleLine, x, depthY);
      } else {
        ctx.fillText(String(depth), x, depthY);
        ctx.fillText(word, x, depthY + fontSize * 1.2);
      }
    }
  }

  // Draw "(if no breaks)" label to the right of horizontal chain
  // Show when: last column AND has a chain AND its floor number equals max floor
  if (showDepth) {
    // Find last non-ellipsis column index
    const lastNonEllipsisIndex = columns.reduce((idx, col, i) =>
      col.label !== '...' ? i : idx, 0);

    // Find maximum floor number across all columns and chains
    const maxFloor = Math.max(
      ...columns.filter(c => c.label !== '...' && !isNaN(c.label)).map(c => Number(c.label)),
      ...columns.flatMap(c => c.chain.filter(l => l !== '...' && !isNaN(l)).map(Number))
    );

    const col = columns[lastNonEllipsisIndex];
    const shouldShowLabel = col.label !== '...'
      && col.chain.length > 0
      && Number(col.label) === maxFloor;

    if (shouldShowLabel) {
      const x = (lastNonEllipsisIndex + 1) * spacing;
      const y = topRowY;
      const fontSize = radius * 0.7; // Match the depth label font size

      ctx.font = \`bold \${fontSize}px \${fonts.monoFamily}\`;
      ctx.fillStyle = colors.depth;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Count consecutive non-ellipsis columns at the end (after last ellipsis, if any)
      let lastEllipsisIndex = -1;
      for (let i = columns.length - 1; i >= 0; i--) {
        if (columns[i] === '...' || columns[i].label === '...') {
          lastEllipsisIndex = i;
          break;
        }
      }

      // Count non-start columns from after the last ellipsis to the end
      let horizontalMoves = 0;
      for (let i = Math.max(1, lastEllipsisIndex + 1); i <= lastNonEllipsisIndex; i++) {
        if (columns[i] !== '...' && columns[i].label !== '...') {
          horizontalMoves++;
        }
      }

      const word = horizontalMoves === 1 ? 'move' : 'moves';
      const firstLine = \`\${horizontalMoves} \${word}\`;
      const secondLine = '(if no breaks)';

      // Measure both lines to find the widest one
      const firstLineWidth = ctx.measureText(firstLine).width;
      const secondLineWidth = ctx.measureText(secondLine).width;
      const maxWidth = Math.max(firstLineWidth, secondLineWidth);

      // Position label so it starts after the circle with spacing, centered on maxWidth
      const labelX = x + radius + spacing * 0.3 + maxWidth / 2;
      ctx.fillText(firstLine, labelX, y - fontSize * 0.6);
      ctx.fillText(secondLine, labelX, y + fontSize * 0.6);
    }
  }

  // Resize iframe to fit canvas
  api.requestResize(canvasHeight);
}
\`\`\`
:::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S","3","6"]},title:"Simple strategy: drop from floor 3, then floor 6",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"},{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S",{label:"3",chain:[1,2]},{label:"6",chain:[4,5]}],showDepth:!0,minWidth:280},title:"Strategy tree: floors 3 and 6 with fallback chains",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"},{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S",{label:"2",chain:[1]},{label:"4",chain:[3]},{label:"6",chain:[5]}],showDepth:!0,minWidth:320},title:"Strategy tree: floors 2, 4, and 6 with single fallbacks",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"},{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S",{label:"3",chain:[1,2]},{label:"5",chain:[4]},"6"],showDepth:!0},title:"Optimal strategy tree for 6 floors",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"},{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S",{label:"50",chain:[1,2,"...","...","...","...",49]},{label:"75",chain:[51,52,"...",74]},{label:"100",chain:[76,77,"...",98,99]}],showDepth:!0,minWidth:320},title:"Strategy tree: binary split from floor 50",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"},{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S",{label:"10",chain:{from:1,to:9}},{label:"20",chain:{from:11,to:19}},{label:"30",chain:{from:21,to:29}},"...",{label:"80",chain:{from:71,to:79},depth:17},{label:"90",chain:{from:81,to:89},depth:18},{label:"100",chain:{from:91,to:99},depth:19}],showDepth:!0,minWidth:800},title:"Strategy tree: steps of 10",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"},{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S",{label:"14",chain:{from:1,to:13}},{label:"27",chain:{from:15,to:26}},{label:"39",chain:{from:28,to:38}},{label:"50",chain:{from:40,to:49}},{label:"60",chain:{from:51,to:59}},{label:"69",chain:{from:61,to:68}},{label:"77",chain:{from:70,to:76}},{label:"84",chain:{from:78,to:83}},{label:"90",chain:{from:85,to:89}},{label:"95",chain:{from:91,to:94}},{label:"99",chain:{from:96,to:98}},"100"],showDepth:!0,minWidth:1100},title:"Optimal strategy tree for 100 floors",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"},{type:"dynamic",mode:"component",componentId:"#strategy-tree",props:{columns:["S",{label:"14",chain:{from:1,to:13}},{label:"27",chain:{from:15,to:26}},{label:"39",chain:{from:28,to:38}},{label:"50",chain:{from:40,to:49}},{label:"60",chain:{from:51,to:59}},{label:"69",chain:{from:61,to:68}},{label:"77",chain:{from:70,to:76}},{label:"84",chain:{from:78,to:83}},{label:"90",chain:{from:85,to:89}},{label:"95",chain:{from:91,to:94}},{label:"99",chain:{from:96,to:98}},{label:"102",chain:[100,101]},{label:"104",chain:[103]},"105"],showDepth:!0,minWidth:800},title:"Maximum building height with 14 drops: 105 floors",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/optimisation/egg-dropping.md"}],inlineComponents:{"strategy-tree":{id:"strategy-tree",code:`// Normalize columns: expand ranges, compute full chain length
function normalizeColumns(rawColumns) {
  return rawColumns.map(col => {
    // Handle shorthand: plain string → { label: "X" }
    if (typeof col === 'string') {
      return { label: col, chain: [], fullChainLength: 0, depth: null };
    }

    const { label, chain, depth } = col;
    let chainLabels = [];
    let fullLength = 0;

    if (!chain) {
      return { label, chain: [], fullChainLength: 0, depth: depth ?? null };
    }

    // Expand range syntax: { from: 1, to: 49 } → [1, 2, ..., 49]
    if (typeof chain === 'object' && !Array.isArray(chain)) {
      const { from, to } = chain;
      fullLength = to - from + 1;
      for (let i = from; i <= to; i++) {
        chainLabels.push(String(i));
      }
    } else {
      chainLabels = chain.map(String);
      // Derive full length from first and last numeric items
      const nums = chainLabels.filter(l => l !== '...').map(Number);
      if (nums.length >= 2) {
        fullLength = nums[nums.length - 1] - nums[0] + 1;
      } else {
        fullLength = nums.length;
      }
    }

    return { label, chain: chainLabels, fullChainLength: fullLength, depth: depth ?? null };
  });
}

// Compute layout parameters based on columns and container width
function computeLayout(columns, containerWidth, options) {
  const { showDepth, minWidth } = options;
  const effectiveWidth = minWidth ? Math.max(containerWidth, minWidth) : containerWidth;
  const numCols = columns.length;

  // Column spacing (+1 for right-side padding so last node isn't clipped)
  const totalSpacing = numCols + 1;
  const spacing = Math.min(effectiveWidth / totalSpacing, 100);
  const radius = Math.min(spacing * 0.35, 20);

  // Vertical spacing
  const verticalSpacing = radius * 3;

  // Calculate height needed
  let maxVisibleChainLength = 0;
  for (const col of columns) {
    if (col.chain.length > maxVisibleChainLength) {
      maxVisibleChainLength = col.chain.length;
    }
  }

  const topRowY = radius * 2.5;
  const chainStartY = topRowY + verticalSpacing;
  let canvasHeight;

  if (maxVisibleChainLength > 0) {
    // Bottom of the deepest chain node circle
    canvasHeight = chainStartY + (maxVisibleChainLength - 1) * verticalSpacing + radius;
  } else {
    // No chains: bottom of top row circles
    canvasHeight = topRowY + radius;
  }

  if (showDepth) {
    // Depth labels: radius gap below circle + up to 2 lines of text
    canvasHeight += radius * 3;
  }

  canvasHeight += radius; // Bottom padding

  // Calculate canvas width with extra space for "(if no breaks)" label
  let canvasWidth = totalSpacing * spacing;

  // Check if we need to add space for the "(if no breaks)" label
  if (showDepth) {
    const lastNonEllipsisIndex = columns.reduce((idx, col, i) =>
      col.label !== '...' ? i : idx, 0);
    const lastCol = columns[lastNonEllipsisIndex];
    const maxFloor = Math.max(
      ...columns.filter(c => c.label !== '...' && !isNaN(c.label)).map(c => Number(c.label)),
      ...columns.flatMap(c => c.chain.filter(l => l !== '...' && !isNaN(l)).map(Number))
    );

    const shouldShowLabel = lastCol.label !== '...'
      && lastCol.chain.length > 0
      && Number(lastCol.label) === maxFloor;

    if (shouldShowLabel) {
      // Count horizontal moves to calculate label width
      let lastEllipsisIndex = -1;
      for (let i = columns.length - 1; i >= 0; i--) {
        if (columns[i] === '...' || columns[i].label === '...') {
          lastEllipsisIndex = i;
          break;
        }
      }

      let horizontalMoves = 0;
      for (let i = Math.max(1, lastEllipsisIndex + 1); i <= lastNonEllipsisIndex; i++) {
        if (columns[i] !== '...' && columns[i].label !== '...') {
          horizontalMoves++;
        }
      }

      // Calculate actual label width for two-line format: "X moves" / "(if no breaks)"
      // We need to estimate based on character count since we don't have canvas context here
      const word = horizontalMoves === 1 ? 'move' : 'moves';
      const firstLine = \`\${horizontalMoves} \${word}\`;
      const secondLine = '(if no breaks)';

      // Estimate width: ~7-8px per character for monospace at fontSize = radius * 0.7
      const avgCharWidth = radius * 0.7 * 0.6; // Conservative estimate for monospace
      const firstLineWidth = firstLine.length * avgCharWidth;
      const secondLineWidth = secondLine.length * avgCharWidth;
      const maxWidth = Math.max(firstLineWidth, secondLineWidth);

      // Add label width + spacing + padding
      canvasWidth += radius + spacing * 0.3 + maxWidth + spacing * 0.6;
    }
  }

  return {
    spacing,
    radius,
    verticalSpacing,
    topRowY,
    chainStartY,
    canvasHeight,
    canvasWidth
  };
}

// Draw a circle with centered label
function drawCircleNode(ctx, x, y, radius, label, colors, fonts) {
  const { fill, stroke, text } = colors;
  const { fontFamily } = fonts;

  // Circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Label
  ctx.fillStyle = text;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Font size based on label length
  let fontSize;
  if (label.length <= 2) {
    fontSize = radius * 0.9;
  } else if (label.length === 3) {
    fontSize = radius * 0.75;
  } else {
    fontSize = radius * 0.6;
  }

  ctx.font = \`bold \${fontSize}px \${fontFamily}\`;
  ctx.fillText(label, x, y);
}

// Draw an arrowhead at the given tip position and angle
function drawArrowhead(ctx, tipX, tipY, angle, radius) {
  const size = Math.max(3, radius * 0.3);
  ctx.save();
  ctx.translate(tipX, tipY);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-size, -size * 0.6);
  ctx.lineTo(-size, size * 0.6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Draw a connection line between two nodes with optional arrowhead
function drawConnection(ctx, x1, y1, x2, y2, radius, showArrows, colors) {
  const { stroke } = colors;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';

  // Calculate start and end points at circle boundary
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);

  const startX = x1 + (dx / dist) * radius;
  const startY = y1 + (dy / dist) * radius;
  const endX = x2 - (dx / dist) * radius;
  const endY = y2 - (dy / dist) * radius;

  // Draw line
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  // Draw arrowhead
  if (showArrows) {
    ctx.fillStyle = stroke;
    drawArrowhead(ctx, endX, endY, angle, radius);
  }
}

// Draw three vertical ellipsis dots
function drawVerticalEllipsis(ctx, x, y, color, radius) {
  ctx.fillStyle = color;
  const dotRadius = Math.max(1.5, radius * 0.125);
  const gap = Math.max(5, radius * 0.4);

  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.arc(x, y + i * gap, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Draw three horizontal ellipsis dots
function drawHorizontalEllipsis(ctx, x, y, color, radius) {
  ctx.fillStyle = color;
  const dotRadius = Math.max(1.5, radius * 0.125);
  const gap = Math.max(5, radius * 0.4);

  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.arc(x + i * gap, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function draw(options) {
  const { canvas, api, width: containerWidth, props } = options;
  const ctx = canvas.getContext('2d');

  // Default props
  const {
    columns: rawColumns = [],
    showDepth = false,
    showArrows = true,
    minWidth = 0,
  } = props;

  if (!rawColumns || rawColumns.length === 0) {
    canvas.width = containerWidth;
    canvas.height = 100;
    ctx.fillStyle = api.getColor('muted-foreground');
    ctx.font = \`14px \${api.getFont('default')}\`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('No columns provided', containerWidth / 2, 50);
    api.requestResize(100);
    return;
  }

  // Normalize columns
  const columns = normalizeColumns(rawColumns);

  // Compute layout
  const layout = computeLayout(columns, containerWidth, { showDepth, minWidth });
  const {
    spacing,
    radius,
    verticalSpacing,
    topRowY,
    chainStartY,
    canvasHeight,
    canvasWidth
  } = layout;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Colors (theme-aware)
  const foreground = api.getColor('foreground');
  const cardBg = api.getColor('card');
  const mutedBg = api.getColor('muted');
  const mutedFg = api.getColor('muted-foreground');
  const primaryColor = api.getColor('primary');

  const colors = {
    stroke: foreground,
    fill: cardBg,
    mutedFill: mutedBg,
    text: foreground,
    ellipsis: mutedFg,
    depth: primaryColor
  };

  const fonts = {
    fontFamily: api.getFont('default'),
    monoFamily: api.getFont('mono')
  };

  // Track y-positions for each column's chain
  const columnYPositions = columns.map(() => []);

  // Draw horizontal chain nodes
  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    const x = (i + 1) * spacing;
    const y = topRowY;

    if (col.label === '...') {
      // Draw horizontal ellipsis dots instead of a circle
      drawHorizontalEllipsis(ctx, x, y, colors.ellipsis, radius);
    } else {
      // First column uses muted background
      const nodeFill = i === 0 ? colors.mutedFill : colors.fill;
      const nodeColors = { ...colors, fill: nodeFill };
      drawCircleNode(ctx, x, y, radius, col.label, nodeColors, fonts);
    }

    // Draw horizontal connection to next column
    if (i < columns.length - 1) {
      const nextX = (i + 2) * spacing;
      drawConnection(ctx, x, y, nextX, y, radius, showArrows, colors);
    }

    // Track positions for vertical chains
    columnYPositions[i].push({ x, y });
  }

  // Draw vertical chains
  for (let colIdx = 0; colIdx < columns.length; colIdx++) {
    const col = columns[colIdx];
    if (col.chain.length === 0) continue;

    const x = (colIdx + 1) * spacing;
    let currentY = chainStartY;

    for (let chainIdx = 0; chainIdx < col.chain.length; chainIdx++) {
      const label = col.chain[chainIdx];
      const isEllipsis = label === '...';

      if (isEllipsis) {
        // Draw vertical ellipsis dots centered where the circle would be
        drawVerticalEllipsis(ctx, x, currentY, colors.ellipsis, radius);
        columnYPositions[colIdx].push({ x, y: currentY });

        // Connection from previous
        const prevPos = columnYPositions[colIdx][columnYPositions[colIdx].length - 2];
        drawConnection(ctx, prevPos.x, prevPos.y, x, currentY, radius, showArrows, colors);

        currentY += verticalSpacing;
      } else {
        // Draw regular node
        drawCircleNode(ctx, x, currentY, radius, label, colors, fonts);
        columnYPositions[colIdx].push({ x, y: currentY });

        // Connection from previous
        const prevPos = columnYPositions[colIdx][columnYPositions[colIdx].length - 2];
        drawConnection(ctx, prevPos.x, prevPos.y, x, currentY, radius, showArrows, colors);

        currentY += verticalSpacing;
      }
    }
  }

  // Draw depth labels if enabled (for all columns except start and ellipsis)
  if (showDepth) {
    const fontSize = radius * 0.7;
    ctx.font = \`bold \${fontSize}px \${fonts.monoFamily}\`;
    ctx.fillStyle = colors.depth;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    for (let colIdx = 1; colIdx < columns.length; colIdx++) {
      const col = columns[colIdx];
      if (col.label === '...') continue;
      const x = (colIdx + 1) * spacing;
      const lastPos = columnYPositions[colIdx][columnYPositions[colIdx].length - 1];
      const depth = col.depth ?? (colIdx + col.fullChainLength);
      const depthY = lastPos.y + radius * 2;
      const word = depth === 1 ? 'move' : 'moves';
      const singleLine = \`\${depth} \${word}\`;

      // Check if single line fits within column spacing
      const textWidth = ctx.measureText(singleLine).width;
      if (textWidth < spacing * 0.95) {
        ctx.fillText(singleLine, x, depthY);
      } else {
        ctx.fillText(String(depth), x, depthY);
        ctx.fillText(word, x, depthY + fontSize * 1.2);
      }
    }
  }

  // Draw "(if no breaks)" label to the right of horizontal chain
  // Show when: last column AND has a chain AND its floor number equals max floor
  if (showDepth) {
    // Find last non-ellipsis column index
    const lastNonEllipsisIndex = columns.reduce((idx, col, i) =>
      col.label !== '...' ? i : idx, 0);

    // Find maximum floor number across all columns and chains
    const maxFloor = Math.max(
      ...columns.filter(c => c.label !== '...' && !isNaN(c.label)).map(c => Number(c.label)),
      ...columns.flatMap(c => c.chain.filter(l => l !== '...' && !isNaN(l)).map(Number))
    );

    const col = columns[lastNonEllipsisIndex];
    const shouldShowLabel = col.label !== '...'
      && col.chain.length > 0
      && Number(col.label) === maxFloor;

    if (shouldShowLabel) {
      const x = (lastNonEllipsisIndex + 1) * spacing;
      const y = topRowY;
      const fontSize = radius * 0.7; // Match the depth label font size

      ctx.font = \`bold \${fontSize}px \${fonts.monoFamily}\`;
      ctx.fillStyle = colors.depth;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Count consecutive non-ellipsis columns at the end (after last ellipsis, if any)
      let lastEllipsisIndex = -1;
      for (let i = columns.length - 1; i >= 0; i--) {
        if (columns[i] === '...' || columns[i].label === '...') {
          lastEllipsisIndex = i;
          break;
        }
      }

      // Count non-start columns from after the last ellipsis to the end
      let horizontalMoves = 0;
      for (let i = Math.max(1, lastEllipsisIndex + 1); i <= lastNonEllipsisIndex; i++) {
        if (columns[i] !== '...' && columns[i].label !== '...') {
          horizontalMoves++;
        }
      }

      const word = horizontalMoves === 1 ? 'move' : 'moves';
      const firstLine = \`\${horizontalMoves} \${word}\`;
      const secondLine = '(if no breaks)';

      // Measure both lines to find the widest one
      const firstLineWidth = ctx.measureText(firstLine).width;
      const secondLineWidth = ctx.measureText(secondLine).width;
      const maxWidth = Math.max(firstLineWidth, secondLineWidth);

      // Position label so it starts after the circle with spacing, centered on maxWidth
      const labelX = x + radius + spacing * 0.3 + maxWidth / 2;
      ctx.fillText(firstLine, labelX, y - fontSize * 0.6);
      ctx.fillText(secondLine, labelX, y + fontSize * 0.6);
    }
  }

  // Resize iframe to fit canvas
  api.requestResize(canvasHeight);
}`,startLine:314}}};export{n as default};
