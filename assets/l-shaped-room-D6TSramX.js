const e={slug:"l-shaped-room",metadata:{id:"puzzle-draft-327",title:"L-Shaped Room",published:!1,difficulty:"medium",concepts:[],tags:[],dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",preview:"We have a room made out of 3 squares arranged in an L shape. 2 people are placed randomly within it. what's the probability that they can see each other?...",websitePreview:"We have a room made out of 3 squares arranged in an L shape. 2 people are placed randomly within it. what's the probability that they can see each other?..."},content:`
<p>We have a room made out of 3 squares arranged in an L shape. 2 people are placed randomly within it. what's the probability that they can see each other?</p>
<p>Solution</p>
<ul>
<li>Split the room into 3 squares: A, B, C; where B is the center</li>
<li>Combinations of 2 ppl: AA, AB, AC, BA, BB, BC, CA, CB, CC</li>
<li>Case 1: If both people are in the same square, they can see each other: AA, BB, CC = 1/3 chance</li>
<li>Case 2: If any one person is in square B, they can always see each other: AB, BA, BC, CB (excluding the BB we already counted) = 4/9 chance</li>
<li>Case 3: Otherwise, we get 2/9 chance of them landing in opposite squares (AC and CA)</li>
</ul>
<p>But when they land on opposite squares, there's still a chance of them seeing each other. So what next? Let's consider adding walls around square B. We observe that if the line of sight passes through Square B's walls, they can see each other. But if they pass through the outside walls, they can't see each other.</p>
<p>By symmetry, there's an equal chance of the line of sight passing through the outside walls, or square B's walls</p>
<p>This means there's a 50% chance out of the 2/9 chance that they can see each other = 1/9 chance of seeing each other</p>
<p>Case 1 + Case 2 + Case 3 = 1/3 + 4/9 + (50% x 2/9) = 8/9 chance that they can see each other</p>`,rawContent:`<!-- Source: https://www.youtube.com/watch?v=gHHv1ytl5g8 -->

We have a room made out of 3 squares arranged in an L shape. 2 people are placed randomly within it. what's the probability that they can see each other?

Solution

- Split the room into 3 squares: A, B, C; where B is the center
- Combinations of 2 ppl: AA, AB, AC, BA, BB, BC, CA, CB, CC
- Case 1: If both people are in the same square, they can see each other: AA, BB, CC = 1/3 chance
- Case 2: If any one person is in square B, they can always see each other: AB, BA, BC, CB (excluding the BB we already counted) = 4/9 chance
- Case 3: Otherwise, we get 2/9 chance of them landing in opposite squares (AC and CA)

But when they land on opposite squares, there's still a chance of them seeing each other. So what next? Let's consider adding walls around square B. We observe that if the line of sight passes through Square B's walls, they can see each other. But if they pass through the outside walls, they can't see each other.

By symmetry, there's an equal chance of the line of sight passing through the outside walls, or square B's walls

This means there's a 50% chance out of the 2/9 chance that they can see each other = 1/9 chance of seeing each other

Case 1 + Case 2 + Case 3 = 1/3 + 4/9 + (50% x 2/9) = 8/9 chance that they can see each other
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
