const e={slug:"flipping-coins-on-a-chessboard",metadata:{id:"puzzle-draft-297",title:"Flipping Coins on a Chessboard",published:!1,difficulty:"easy",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"You have an 8x8 chessboard. I place a coin (either with heads or tails up) on each tile. On one move, you can choose any 3x3 or 4x4 square and flip all the...",websitePreview:"You have an 8x8 chessboard. I place a coin (either with heads or tails up) on each tile. On one move, you can choose any 3x3 or 4x4 square and flip all the..."},content:`


<h3 class="markdown-h2">You have an 8x8 chessboard. I place a coin (either with heads or tails up) on each tile. On one move, you can choose any 3x3 or 4x4 square and flip all the coins in the square. From any starting position, can you turn all the coins to heads?</h3>
<p>No.</p>
<p>Count the number of heads on the board excluding the 3rd and 6th row. Notice that each move will flip an even number of coins in the remaining rows (1st, 2nd, 4th, 5th, 7th, and 8th rows). This means if we start with a board that has an odd number of tails in these rows, it will always remain odd no matter the number of moves we make. You can never bring the number of tails in these columns to 0, which is an even number, and hence the entire board can never be all heads.</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: ? -->

You have an 8x8 chessboard. I place a coin (either with heads or tails up) on each tile. On one move, you can choose any 3x3 or 4x4 square and flip all the coins in the square. From any starting position, can you turn all the coins to heads?
---

No.

Count the number of heads on the board excluding the 3rd and 6th row. Notice that each move will flip an even number of coins in the remaining rows (1st, 2nd, 4th, 5th, 7th, and 8th rows). This means if we start with a board that has an odd number of tails in these rows, it will always remain odd no matter the number of moves we make. You can never bring the number of tails in these columns to 0, which is an even number, and hence the entire board can never be all heads.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
