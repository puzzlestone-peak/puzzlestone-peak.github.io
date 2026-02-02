const e={slug:"covering-a-chessboard-3",metadata:{id:"puzzle-draft-62",title:"Covering a Chessboard 3",published:!1,difficulty:"medium",concepts:[],tags:[],dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",preview:"https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf You’re given a...",websitePreview:"https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf You’re given a..."},content:`<p><a href="https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb">https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb</a></p>
<p><a href="https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf">https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf</a></p>
<p>You’re given a 10x10 chessboard. You can place 4x1 rectangular pieces on the board, with each one covering exactly 4 tiles. These pieces can be rotated by 90° increments, but cannot be overlapped. Can you cover the entire chessboard? If yes, show an arrangement of such a covering. If not, prove why it cannot be done.</p>
<h3 class="markdown-h2">[diagram]</h3>
<p>It cannot be done.</p>
<p>Number the squares on the chessboard as such:</p>
<p>1234123412<br>
2341234123<br>
3412341234<br>
4123412341<br>
1234123412<br>
2341234123<br>
3412341234<br>
4123412341<br>
1234123412<br>
2341234123</p>
<p>Notice that each 4x1 rectangle will cover 1 of each tile numbered 1, 2, 3, and 4. However, if we count the numbers, there are:</p>
<ul>
<li>25 of the number 1</li>
<li>26 of the number 2</li>
<li>25 of the number 3</li>
<li>24 of the number 4</li>
</ul>
<p>Since the board has 100 tiles, we’ll need 25 4x1 rectangles to cover the chessboard. However, 25 tiles can never cover 26 of the number 2 and 24 of the number 4, so this board can never be covered.</p>
<p>Another possible solution:</p>
<p>Cover the chessboard with the numbers<br>
3, -1, -1, -1, 3, -1, -1, -1, 3, -1<br>
-1, 3, -1, -1, -1, 3, -1, -1, -1, 3<br>
-1, -1, 3, -1, -1, -1, 3, -1, -1, -1<br>
-1, -1, -1, 3, -1, -1, -1, 3, -1, -1<br>
3, -1, -1, -1, 3, -1, -1, -1, 3, -1<br>
-1, 3, -1, -1, -1, 3, -1, -1, -1, 3<br>
-1, -1, 3, -1, -1, -1, 3, -1, -1, -1<br>
-1, -1, -1, 3, -1, -1, -1, 3, -1, -1<br>
3, -1, -1, -1, 3, -1, -1, -1, 3, -1<br>
-1, 3, -1, -1, -1, 3, -1, -1, -1, 3</p>
<p>If we add the numbers on the board, we get the number 4. Notice that wherever we place a 4x1 rectangle on the board, the sum of the visible numbers will always remain the same. However, if we could cover the entire chessboard, we would get a total sum of 0, which should be impossible. Therefore we can never cover the entire chessboard.</p>`,rawContent:`[https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb](https://www.cantorsparadise.com/3-chessboard-tiling-problems-b7298b8f1beb)

[https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf](https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf)

You’re given a 10x10 chessboard. You can place 4x1 rectangular pieces on the board, with each one covering exactly 4 tiles. These pieces can be rotated by 90° increments, but cannot be overlapped. Can you cover the entire chessboard? If yes, show an arrangement of such a covering. If not, prove why it cannot be done.

\\[diagram\\]
---

It cannot be done.

Number the squares on the chessboard as such:

1234123412  
2341234123  
3412341234  
4123412341  
1234123412  
2341234123  
3412341234  
4123412341  
1234123412  
2341234123

Notice that each 4x1 rectangle will cover 1 of each tile numbered 1, 2, 3, and 4. However, if we count the numbers, there are:  
- 25 of the number 1  
- 26 of the number 2  
- 25 of the number 3  
- 24 of the number 4

Since the board has 100 tiles, we’ll need 25 4x1 rectangles to cover the chessboard. However, 25 tiles can never cover 26 of the number 2 and 24 of the number 4, so this board can never be covered.

Another possible solution:

Cover the chessboard with the numbers  
3, -1, -1, -1, 3, -1, -1, -1, 3, -1  
-1, 3, -1, -1, -1, 3, -1, -1, -1, 3  
-1, -1, 3, -1, -1, -1, 3, -1, -1, -1  
-1, -1, -1, 3, -1, -1, -1, 3, -1, -1  
3, -1, -1, -1, 3, -1, -1, -1, 3, -1  
-1, 3, -1, -1, -1, 3, -1, -1, -1, 3  
-1, -1, 3, -1, -1, -1, 3, -1, -1, -1  
-1, -1, -1, 3, -1, -1, -1, 3, -1, -1  
3, -1, -1, -1, 3, -1, -1, -1, 3, -1  
-1, 3, -1, -1, -1, 3, -1, -1, -1, 3

If we add the numbers on the board, we get the number 4. Notice that wherever we place a 4x1 rectangle on the board, the sum of the visible numbers will always remain the same. However, if we could cover the entire chessboard, we would get a total sum of 0, which should be impossible. Therefore we can never cover the entire chessboard.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
