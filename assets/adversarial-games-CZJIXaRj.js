const e={slug:"adversarial-games",metadata:{id:"expedition-draft-1",title:"Adversarial Games",description:"[PLACEHOLDER - Add expedition description]",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",published:!1},content:`<p>In the context of puzzles, games typically refer to a scenario where players take turns to make a move, eventually leading to an outcome. The game is called adversarial if the players have conflicting goals. For example, if one player wins, the other must lose; they can’t both win.</p>
<p>For this module, we shall only consider games with the following properties:</p>
<ul>
<li>The game involves 2 players.</li>
<li>Players will take turns to make a single move.</li>
<li>All sequences of moves eventually lead to one player winning. This means that there are no infinite games.</li>
<li>It is a zero-sum game: one player winning means the other must lose.</li>
<li>There are no ties: there must always be one player winning.</li>
<li>Deterministic: there are no elements of randomness. A particular sequence of moves from a particular game state will always result in the same final game state.</li>
</ul>
<p>The most general way to solve such games is to draw out the game tree. For instance, this is the game tree of Tic-Tac-Toe.</p>
<p><img alt=""><br>
(From Wikipedia: <a href="https://en.wikipedia.org/wiki/Game%5C_tree%5C#/media/File:Tic-tac-toe-game-tree.svg">https://en.wikipedia.org/wiki/Game\\_tree\\#/media/File:Tic-tac-toe-game-tree.svg</a>)</p>
<p>On the 1st level of the tree, we have one node (we call this the root node) that represents the game’s starting state. Each state branches out into possible states that can be reached as a result of the next player’s move. On the 1st, 3rd, 5th, … levels, the “X” player is next to move. On the 2nd, 4th, 6th, … levels, the “O” player is next to move.</p>
<p>Now that we have an understanding of how a game tree looks, let’s consider a simpler game so we can analyse it:</p>
<p>You and your opponent have a stack of 4 coins: 3 iron coins and 1 gold coin at the bottom. On each player’s turn, they have to take 1 or 2 coins, with the goal being to take the golden coin. You’re going first. How do you ensure you get the golden coin?</p>
<p>Let’s draw the game tree for this game. The red arrows represent the moves you can make, and the blue arrows represent your opponent’s moves.</p>
<ul>
<li>4 [A]
<ul>
<li>3 [B]
<ul>
<li>2 [A] ← sample node to start from
<ul>
<li>1 [B]
<ul>
<li>0 [B wins]</li>
</ul>
</li>
<li>0 [A wins]</li>
</ul>
</li>
<li>1 [A]
<ul>
<li>0 [A wins]</li>
</ul>
</li>
</ul>
</li>
<li>2 [B]
<ul>
<li>1 [A]
<ul>
<li>0 [A wins]</li>
</ul>
</li>
<li>0 [B wins]</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Each node has a number representing the number of coins left in the pile, with the leaf nodes (the nodes with no children) representing the end state of the game.</p>
<p>Let’s colour the leaf nodes red if you win at that state, and blue if your opponent wins at that state. If any branch nodes only have 1 leaf node below it, we can colour it the same colour.</p>
<p>[diagram]</p>
<p>Consider the game at the state indicated in the diagram above. You have the choice of taking 1 or 2 coins. If you take 1 coin, you end up in a blue node and you lose. If you take 2 coins, you end up on a red node, and you win. Since you can win from this state, you can colour this state red too.</p>
<p>For any node where it is a certain player’s turn, it is a winning state for that player if ANY of the possible moves will lead to a winning state for that player too. On the other hand, it is a losing state for that player if ALL of the possible moves will lead to a losing state for that player too.</p>
<p>Let’s use this new rule to colour the rest of the nodes.</p>
<p>[diagram]</p>
<p>It turns out the root node is red! That means that if you play optimally, you can always guarantee a win, no matter what your opponent plays. You can see this play out by traversing down this tree. When it’s your turn, choose a move that leads to a red node. When it’s your opponent’s turn, all his possible moves should only lead to red nodes.</p>
<p>We can summarise your winning strategy as such:</p>
<ul>
<li>On your first move, take 1 coin</li>
<li>If your opponent takes 1 coin on the next turn, take 2 coins.</li>
<li>If your opponent takes 2 coins on the next turn, take 1 coin.</li>
</ul>
<p>And that’s it, we’ve solved this game.</p>
<p><del>[another puzzle]</del></p>
<p><del>We’ve only considered two simple games that could be represented in a game tree. However, in practice, game trees can be extended in many ways. For instance, most chess engines use a game tree to determine its next move.</del></p>
<p><del>Wait a minute, how is that possible? The number of possible game states is far greater than the number of atoms in the universe, so it’s impossible to represent all of that in a computer’s memory, much less compute the best possible move.</del></p>
<p><del>Chess engines typically get around this problem by cutting off the game tree after a certain depth.</del></p>
<p><del><img alt=""></del><br>
<del>[find a way to make this diagram]</del></p>
<p><del>Let’s assume we are the white player. To solve the game tree, we are not going to colour each node red or blue depending on who is winning. Instead, we evaluate each node based on a score.</del></p>
<ul>
<li><del>If the node is a leaf node, we evaluate the board state to assign it a score. A higher score means a better board state (e.g. more valuable white pieces in advantageous positions, and more black pieces taken off the board).</del></li>
<li><del>If it’s a non-leaf node and it’s white’s turn to move, the node’s value is the highest value on its children nodes.</del></li>
<li><del>If it’s a non-leaf node and it’s black’s turn to move, the node’s value is the lowest value on its children nodes. This is because we assume chess is a zero sum game: that a lower score for the white player means a more advantageous position for the black player.</del></li>
</ul>
<p><del>The optimal strategy for white then is to make the move that gives the highest score. This optimisation is not perfect because our evaluation function might not reflect the reality of the full game tree, but we’ve gotten quite close. The best chess engines of today easily beat the strongest human players.</del></p>
<p><del>But that’s enough of a diversion and let’s get back to game trees.</del></p>
<p>Game trees are a powerful tool to solve games. However, analysing a game tree requires us to draw out the whole game tree to compute it. After all, if we leave out some of the branches, we might accidentally exclude a winning strategy that could determine if the first player always wins or loses.</p>
<p>But that doesn’t mean game trees are entirely useless. If we can learn the properties of game trees, we can use them to reason out an alternative solution. In particular, we’ll be using the lessons we learnt from studying game trees.</p>
<ul>
<li>We can represent the game as a series of positions.</li>
<li>A position is a winning position for a player if:
<ul>
<li>It is the player’s turn to move, and he can make a move that leads to another winning position.</li>
<li>It is the other player’s turn to move, but all his options lead to a losing position for him (i.e. the first player’s winning position).</li>
</ul>
</li>
</ul>
<p>If a game is symmetric (that means the rules are the same for both players), we get an additional bonus: if there is a position that is a losing position for you, then it is a losing position for the other player too IF you can get the game to that position on his turn. By extension, a position is a winning position for you if there is a move that leads it to a losing position.</p>
<p>With that in mind, let’s take a look at the earlier game with the stack of coins. This time, there are 16 coins, a lot more than we can analyse in a game tree, at least by hand. So how can we solve this game?</p>
<p>Let us notice that if the other player takes 1 coin, you can take 2 coins. Likewise, if the other player takes 2 coins, you can take 1 coin. Either way, you can ensure that the stack is exactly 3 coins shorter after 2 moves.</p>
<p>Consider the position where the stack has only 3 coins, and it is the other player’s turn. The other player can only take 1 or 2 coins, and you can take the remaining coins on your turn, winning the game. This means that a position with 3 coins left is a losing position for the player that moves next. If you end up with 3 coins in the stack and it’s the other player’s turn, he loses and you win. Likewise, if there are 3 coins in the stack and it’s your turn, he can use the same strategy to force you to lose, ensuring his win.</p>
<p>Now let’s consider another position, this time with a stack of 6 coins, and it is the other player’s turn. If the other player takes 1 or 2 coins, you take 2 or 1 coins respectively, bringing the other player to the losing position of 3 coins with him moving next. This means that a stack of 6 coins is also a losing position for the player that moves next.</p>
<p>In general, any stack of coins that contains a multiple of 3 coins is a losing position for the player that goes next. If you encounter such a stack, you want to go second.</p>
<p>However, what happens if the number of coins is not a multiple of 3? Then it must be 1 or 2 more coins than a multiple of 3, and the first player can take 1 or 2 coins respectively to leave a stack with a multiple of 3 coins to the other player. That means you want to go first.</p>
<p>To summarise this game:</p>
<ul>
<li>A position is a losing position for the player that goes next if the number of coins is a multiple of 3, otherwise it is a winning position.</li>
<li>From a winning position, the optimal move is to divide the number of coins by 3 and get the remainder. Take that number of coins to leave the other player with a losing position.</li>
<li>From a losing position, anything you do doesn’t affect the outcome of the game: you lose the game.</li>
<li>If you get to pick who goes first, choose to go first if the starting position is a winning position. Otherwise, choose to go second.</li>
</ul>
<p>In this way, we’ve solved this particular game without having to draw the entire game tree. But as you may have noticed, we needed to find a special property of this game that helps us to identify the winning and losing positions of the game.</p>

















<table><thead><tr><th align="left">What is a winning position?</th><th align="left">A position that has already ended, giving the win to the last player that has moved. A position where there exists a move to put the other player in a losing position.</th></tr></thead><tbody><tr><td align="left">What is a losing position?</td><td align="left">A game position that has already ended, giving a loss to the last player that has moved. A game position where all possible moves will put the other player in a winning position.</td></tr><tr><td align="left">Should you go first?</td><td align="left">Yes, if the starting position is a winning position. No, if the starting position is a losing position.</td></tr></tbody></table>`,rawContent:`In the context of puzzles, games typically refer to a scenario where players take turns to make a move, eventually leading to an outcome. The game is called adversarial if the players have conflicting goals. For example, if one player wins, the other must lose; they can’t both win.

For this module, we shall only consider games with the following properties:

* The game involves 2 players.  
* Players will take turns to make a single move.  
* All sequences of moves eventually lead to one player winning. This means that there are no infinite games.  
* It is a zero-sum game: one player winning means the other must lose.  
* There are no ties: there must always be one player winning.  
* Deterministic: there are no elements of randomness. A particular sequence of moves from a particular game state will always result in the same final game state.

The most general way to solve such games is to draw out the game tree. For instance, this is the game tree of Tic-Tac-Toe.

![](data:image/png;base64,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)  
(From Wikipedia: https://en.wikipedia.org/wiki/Game\\_tree\\#/media/File:Tic-tac-toe-game-tree.svg)

On the 1st level of the tree, we have one node (we call this the root node) that represents the game’s starting state. Each state branches out into possible states that can be reached as a result of the next player’s move. On the 1st, 3rd, 5th, … levels, the “X” player is next to move. On the 2nd, 4th, 6th, … levels, the “O” player is next to move.

Now that we have an understanding of how a game tree looks, let’s consider a simpler game so we can analyse it:

You and your opponent have a stack of 4 coins: 3 iron coins and 1 gold coin at the bottom. On each player’s turn, they have to take 1 or 2 coins, with the goal being to take the golden coin. You’re going first. How do you ensure you get the golden coin?

Let’s draw the game tree for this game. The red arrows represent the moves you can make, and the blue arrows represent your opponent’s moves.

* 4 \\[A\\]  
  * 3 \\[B\\]  
    * 2 \\[A\\] ← sample node to start from  
      * 1 \\[B\\]  
        * 0 \\[B wins\\]  
      * 0 \\[A wins\\]  
    * 1 \\[A\\]  
      * 0 \\[A wins\\]  
  * 2 \\[B\\]  
    * 1 \\[A\\]  
      * 0 \\[A wins\\]  
    * 0 \\[B wins\\]

Each node has a number representing the number of coins left in the pile, with the leaf nodes (the nodes with no children) representing the end state of the game.

Let’s colour the leaf nodes red if you win at that state, and blue if your opponent wins at that state. If any branch nodes only have 1 leaf node below it, we can colour it the same colour.

\\[diagram\\]

Consider the game at the state indicated in the diagram above. You have the choice of taking 1 or 2 coins. If you take 1 coin, you end up in a blue node and you lose. If you take 2 coins, you end up on a red node, and you win. Since you can win from this state, you can colour this state red too.

For any node where it is a certain player’s turn, it is a winning state for that player if ANY of the possible moves will lead to a winning state for that player too. On the other hand, it is a losing state for that player if ALL of the possible moves will lead to a losing state for that player too.

Let’s use this new rule to colour the rest of the nodes.

\\[diagram\\]

It turns out the root node is red\\! That means that if you play optimally, you can always guarantee a win, no matter what your opponent plays. You can see this play out by traversing down this tree. When it’s your turn, choose a move that leads to a red node. When it’s your opponent’s turn, all his possible moves should only lead to red nodes.

We can summarise your winning strategy as such:

* On your first move, take 1 coin  
* If your opponent takes 1 coin on the next turn, take 2 coins.  
* If your opponent takes 2 coins on the next turn, take 1 coin.

And that’s it, we’ve solved this game.

~~\\[another puzzle\\]~~

~~We’ve only considered two simple games that could be represented in a game tree. However, in practice, game trees can be extended in many ways. For instance, most chess engines use a game tree to determine its next move.~~

~~Wait a minute, how is that possible? The number of possible game states is far greater than the number of atoms in the universe, so it’s impossible to represent all of that in a computer’s memory, much less compute the best possible move.~~

~~Chess engines typically get around this problem by cutting off the game tree after a certain depth.~~

~~![](data:image/png;base64,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)~~  
~~\\[find a way to make this diagram\\]~~

~~Let’s assume we are the white player. To solve the game tree, we are not going to colour each node red or blue depending on who is winning. Instead, we evaluate each node based on a score.~~

* ~~If the node is a leaf node, we evaluate the board state to assign it a score. A higher score means a better board state (e.g. more valuable white pieces in advantageous positions, and more black pieces taken off the board).~~  
* ~~If it’s a non-leaf node and it’s white’s turn to move, the node’s value is the highest value on its children nodes.~~  
* ~~If it’s a non-leaf node and it’s black’s turn to move, the node’s value is the lowest value on its children nodes. This is because we assume chess is a zero sum game: that a lower score for the white player means a more advantageous position for the black player.~~

~~The optimal strategy for white then is to make the move that gives the highest score. This optimisation is not perfect because our evaluation function might not reflect the reality of the full game tree, but we’ve gotten quite close. The best chess engines of today easily beat the strongest human players.~~

~~But that’s enough of a diversion and let’s get back to game trees.~~

Game trees are a powerful tool to solve games. However, analysing a game tree requires us to draw out the whole game tree to compute it. After all, if we leave out some of the branches, we might accidentally exclude a winning strategy that could determine if the first player always wins or loses.

But that doesn’t mean game trees are entirely useless. If we can learn the properties of game trees, we can use them to reason out an alternative solution. In particular, we’ll be using the lessons we learnt from studying game trees.

* We can represent the game as a series of positions.  
* A position is a winning position for a player if:  
  * It is the player’s turn to move, and he can make a move that leads to another winning position.  
  * It is the other player’s turn to move, but all his options lead to a losing position for him (i.e. the first player’s winning position).

If a game is symmetric (that means the rules are the same for both players), we get an additional bonus: if there is a position that is a losing position for you, then it is a losing position for the other player too IF you can get the game to that position on his turn. By extension, a position is a winning position for you if there is a move that leads it to a losing position.

With that in mind, let’s take a look at the earlier game with the stack of coins. This time, there are 16 coins, a lot more than we can analyse in a game tree, at least by hand. So how can we solve this game?

Let us notice that if the other player takes 1 coin, you can take 2 coins. Likewise, if the other player takes 2 coins, you can take 1 coin. Either way, you can ensure that the stack is exactly 3 coins shorter after 2 moves.

Consider the position where the stack has only 3 coins, and it is the other player’s turn. The other player can only take 1 or 2 coins, and you can take the remaining coins on your turn, winning the game. This means that a position with 3 coins left is a losing position for the player that moves next. If you end up with 3 coins in the stack and it’s the other player’s turn, he loses and you win. Likewise, if there are 3 coins in the stack and it’s your turn, he can use the same strategy to force you to lose, ensuring his win.

Now let’s consider another position, this time with a stack of 6 coins, and it is the other player’s turn. If the other player takes 1 or 2 coins, you take 2 or 1 coins respectively, bringing the other player to the losing position of 3 coins with him moving next. This means that a stack of 6 coins is also a losing position for the player that moves next.

In general, any stack of coins that contains a multiple of 3 coins is a losing position for the player that goes next. If you encounter such a stack, you want to go second.

However, what happens if the number of coins is not a multiple of 3? Then it must be 1 or 2 more coins than a multiple of 3, and the first player can take 1 or 2 coins respectively to leave a stack with a multiple of 3 coins to the other player. That means you want to go first.

To summarise this game:

* A position is a losing position for the player that goes next if the number of coins is a multiple of 3, otherwise it is a winning position.  
* From a winning position, the optimal move is to divide the number of coins by 3 and get the remainder. Take that number of coins to leave the other player with a losing position.  
* From a losing position, anything you do doesn’t affect the outcome of the game: you lose the game.  
* If you get to pick who goes first, choose to go first if the starting position is a winning position. Otherwise, choose to go second.

In this way, we’ve solved this particular game without having to draw the entire game tree. But as you may have noticed, we needed to find a special property of this game that helps us to identify the winning and losing positions of the game.

| What is a winning position? | A position that has already ended, giving the win to the last player that has moved. A position where there exists a move to put the other player in a losing position. |
| :---- | :---- |
| What is a losing position? | A game position that has already ended, giving a loss to the last player that has moved. A game position where all possible moves will put the other player in a winning position. |
| Should you go first? | Yes, if the starting position is a winning position. No, if the starting position is a losing position. |
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
