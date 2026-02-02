const e={slug:"flipping-coins-on-a-chessboard-2",metadata:{id:"puzzle-draft-298",title:"Flipping Coins on a Chessboard 2",published:!1,difficulty:"hard",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"You have an 8x8 chessboard. I place either 0, 1, or 2 coins on each tile. On one move, you can choose any 3x3 or 4x4 square and add 1 coin to all the squares...",websitePreview:"You have an 8x8 chessboard. I place either 0, 1, or 2 coins on each tile. On one move, you can choose any 3x3 or 4x4 square and add 1 coin to all the squares..."},content:`


<h3 class="markdown-h2">You have an 8x8 chessboard. I place either 0, 1, or 2 coins on each tile. On one move, you can choose any 3x3 or 4x4 square and add 1 coin to all the squares there. If a stack reaches 3 coins, we take away the stack and leave no coins on the tile. From any starting position, can you make the chessboard empty?</h3>
<p>No.</p>
<p>Count the number of coins on the board excluding the 4rd and 8th row. Notice that on each move, we change the number of coins in these rows by a multiple of 3.</p>
<ul>
<li>If we add 1 coin to each tile in a 3x3 square:
<ul>
<li>We add 6 coins if the 3x3 square overlaps the 4th or 8th row.</li>
<li>We add 9 coins if the 3x3 square does not overlap the 4th or 8th row.</li>
</ul>
</li>
<li>If we add 1 coin to each tile in a 4x4 square:
<ul>
<li>The square will always overlap either the 4th or 8th row, and exactly 12 coins will be added.</li>
</ul>
</li>
<li>After that, if any stack reaches 3 coins, we remove exactly 3 coins from the board.</li>
</ul>
<p>If the board started with a number of coins that isn’t a multiple of 3 in the 1st, 2nd, 3rd, 5th, 6th, and 7th rows, then it will never be a multiple of 3 no matter how many moves we make. In such a case, we can never bring the number of coins in these rows to 0, since that would be a multiple of 3.</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: ? -->

You have an 8x8 chessboard. I place either 0, 1, or 2 coins on each tile. On one move, you can choose any 3x3 or 4x4 square and add 1 coin to all the squares there. If a stack reaches 3 coins, we take away the stack and leave no coins on the tile. From any starting position, can you make the chessboard empty?
---

No.

Count the number of coins on the board excluding the 4rd and 8th row. Notice that on each move, we change the number of coins in these rows by a multiple of 3.

* If we add 1 coin to each tile in a 3x3 square:  
  * We add 6 coins if the 3x3 square overlaps the 4th or 8th row.  
  * We add 9 coins if the 3x3 square does not overlap the 4th or 8th row.  
* If we add 1 coin to each tile in a 4x4 square:  
  * The square will always overlap either the 4th or 8th row, and exactly 12 coins will be added.  
* After that, if any stack reaches 3 coins, we remove exactly 3 coins from the board.

If the board started with a number of coins that isn’t a multiple of 3 in the 1st, 2nd, 3rd, 5th, 6th, and 7th rows, then it will never be a multiple of 3 no matter how many moves we make. In such a case, we can never bring the number of coins in these rows to 0, since that would be a multiple of 3.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
