const e={slug:"covering-a-chessboard-6",metadata:{id:"puzzle-draft-65",title:"Covering a Chessboard 6",published:!1,difficulty:"medium",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb You’re given an 8x8 chessboard. You can place L pieces on the board, with each one...",websitePreview:"https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb You’re given an 8x8 chessboard. You can place L pieces on the board, with each one..."},content:`<p><a href="https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb">https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb</a></p>
<p>You’re given an 8x8 chessboard. You can place L pieces on the board, with each one covering exactly 3 tiles. These pieces can be rotated by 90° increment. Noticing that 21 of these pieces will cover 63 tiles, I remove a random square from the chessboard. Can you cover the entire chessboard, no matter which square I choose to remove?</p>
<p>[diagram]</p>
<h3 class="markdown-h2">Hint: Have you solved [Equal shape cutting 2]?</h3>
<p>Yes, this is always possible.</p>
<p>Notice that I can form a bigger 4x4 L shape with 4 smaller Ls. Using this bigger L, I can make an 8x8 L shape.</p>
<p>[diagram of big L and bigger L]</p>
<p>Let’s consider the chessboard with the missing tile. If the missing tile is in the top-left quadrant, I can use the biggest L to fill the remaining 3 quadrants. I can rotate this L depending on where the missing tile is.</p>
<p>[diagram of biggest L covering all 4 quadrants]</p>
<p>This leaves us with a 4x4 board with the missing tile. We repeat the same process to place the big L to cover the 3 remaining quadrants.</p>
<p>[diagram]</p>
<p>We’re now left with a 2x2 board with the missing tile, perfect for the last L piece.</p>`,rawContent:`[https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb](https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb)

You’re given an 8x8 chessboard. You can place L pieces on the board, with each one covering exactly 3 tiles. These pieces can be rotated by 90° increment. Noticing that 21 of these pieces will cover 63 tiles, I remove a random square from the chessboard. Can you cover the entire chessboard, no matter which square I choose to remove?

\\[diagram\\]

Hint: Have you solved \\[Equal shape cutting 2\\]?
---

Yes, this is always possible.

Notice that I can form a bigger 4x4 L shape with 4 smaller Ls. Using this bigger L, I can make an 8x8 L shape.

\\[diagram of big L and bigger L\\]

Let’s consider the chessboard with the missing tile. If the missing tile is in the top-left quadrant, I can use the biggest L to fill the remaining 3 quadrants. I can rotate this L depending on where the missing tile is.

\\[diagram of biggest L covering all 4 quadrants\\]

This leaves us with a 4x4 board with the missing tile. We repeat the same process to place the big L to cover the 3 remaining quadrants.

\\[diagram\\]

We’re now left with a 2x2 board with the missing tile, perfect for the last L piece.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
