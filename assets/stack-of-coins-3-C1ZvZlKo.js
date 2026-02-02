const e={slug:"stack-of-coins-3",metadata:{id:"puzzle-draft-210",title:"Stack of Coins \\[3\\]",published:!1,difficulty:"hard",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"64 * 9 [Link to previous puzzles] Once more, you and a friend stumble on another pirate’s treasure: an old chest filled with coins: 575 copper coins and 1 gold...",websitePreview:"64 * 9 [Link to previous puzzles] Once more, you and a friend stumble on another pirate’s treasure: an old chest filled with coins: 575 copper coins and 1 gold..."},content:`


<p>64 * 9</p>
<p>[Link to previous puzzles]</p>
<p>Once more, you and a friend stumble on another pirate’s treasure: an old chest filled with coins: 575 copper coins and 1 gold coin. As before, these old coins are no longer legal tender, so the copper ones are worthless. Only the gold coin is worth something due to its material.</p>
<p>Not wanting to lose again, your friend comes up with another game of wits. He stacks the 576 coins in a tall stack with the gold coin at the bottom. You and him will take turns taking coins from the top of the stack, all the way until the final coin is taken.</p>
<p>If you are the first to move, you can only take up to 575 coins. After that, players can only take anywhere between 1 to X coins (inclusive), where X is the number of coins taken on the last turn. He lets you decide if you want to go first or second.</p>
<h3 class="markdown-h2">Should you go first or second? And what strategy do you use to ensure you’ll win the gold coin?</h3>
<p>The solution is fairly complex, so let’s work our way up. Do take a look at [Link to Adversarial Games module] if you haven’t already done so, as most concepts there will be useful for this solution.</p>
<p>Let’s play around with smaller stacks of coins in order to get a feel of the rules. If we start with a stack of 5 coins, should you go first?</p>
<p>Yes! All you have to do is to take 1 coin. This forces you both to take turns taking 1 coin each. Since there are an odd number of coins, you’ll take the last coin and win.</p>
<p>We can show this by laying out the coins in a row, with the coin at the top of the stack on the left, and the gold coin on the right. We colour the gold coin white, then the next coin black, then white, and so on.</p>
<p>W B W B W</p>
<p>By taking the white coin on your turn, you always force the other player to only take the black coin. To get this configuration, we’ll need the first coin to be white, meaning this strategy only works if we start with an odd number of coins. What happens if we start with an even number of coins?</p>
<p>Let’s consider 6 coins. If you take 3, 4, or 5 coins, the other player can immediately take the remaining coins and win. But if you take 1 coin, then you’ve forced both players to take 1 coin until the other player takes the last coin and you lose. The only option you have is to take 2  coins to not result in an immediate loss.</p>
<p>You take 2 coins. The other player now has 2 options:</p>
<ul>
<li>Take 2 coins. You can take the remaining 2 coins and win.</li>
<li>Take 1 coin. You both take turns taking 1 coin until you win.</li>
</ul>
<p>No matter what the other player picks, you can always win.</p>
<p>Let’s try to represent this by extending our earlier diagram. This time, we’ll group the coins into pairs. We colour the pair with the gold coin white, then the next pair black, then the next pair white.</p>
<p>[B W] &#x3C;B W> [B W]<br>
[] = white underline, &#x3C;> = black underline</p>
<p>This leaves us with 2 interesting observations:</p>
<ul>
<li>If the other player sticks to taking pairs, then you’ll take turns taking alternating white and black pairs, leaving you the win.</li>
<li>If the other player breaks the pairs by taking an odd number of coins, then you’ll take turns taking alternating white and black coins, leaving you the win.</li>
</ul>
<p>Since the last coin is always a white coin in a white pair, we'll always ensure that the other player cannot take it. To get a feel for this strategy, let’s try this with a bigger game with 10 coins.</p>
<p>[B W] &#x3C;B W> [B W] &#x3C;B W> [B W]</p>
<p>This strategy applies to any odd multiple of 2 (2, 6, 10, 14, …), because the first pair of coins will always be white.</p>
<p>What happens for the even multiples of 4? Well, we can’t say for sure, so let’s play around with more examples. Let’s try a stack of 12 next.</p>
<p>This time, there’s an even number of pairs, meaning we can’t use our strategy of taking pairs again. But what if we took pairs of pairs? This time, let’s group pairs into pairs, which we will call quadruples (or quads for short). Let’s colour them with alternating colours again.</p>
<p>&#x3C;[B W] &#x3C;B W>> [[B W] &#x3C;B W>] &#x3C;[B W] &#x3C;B W>></p>
<p>This time, we can start first and take a white quad. If the other player takes a black quad, we can take the last white quad and win.</p>
<p>But what happens if the other player decides to take 1, 2, or 3 coins instead?</p>
<p>If he takes 2 coins, we can start ignoring the quads and look at the pairs. He would have left you with a white pair at the top, in which case we can use the earlier strategy and start taking pairs each turn.</p>
<p>If he takes 1 or 3 coins, we can start ignoring the quads and pairs and look at the individual coins. He would have left you with a white coin at the top, in which case we can use our earlier strategy and start taking 1 coin each turn.</p>
<p>Are you starting to see a pattern? For any stack of coins, we can start making pairs, pairs of pairs, then pairs of pairs of pairs, all the way up until we get an odd number of groups. Because of how we constructed these groups, each group will have a number of coins equal to a power of 2. Let the size of the group be X coins. Then on your first turn, you should take X coins to win.</p>
<p>Case 1: If the other player “breaks” the pairs, he would have to leave you a white coin at the top of the stack. Take 1 coin and you’ll win.</p>
<p>Case 2: If the other player “breaks” the quads but not the pairs, he would have to leave you a white pair at the top of the stack. Take 2 coins, since the other player can either (a) keep taking 2 coins and you win, or (b) he can break the pairs and you win by case 1.</p>
<p>Case 3: If the other player “breaks” the octets (groups of 8) but not the pairs or quads, then he would have to leave you with a white quad. Take 4 coins, since the other player can either (a) keep taking 4 coins and you win, or (b) he can break the quads and you win by case 1 or 2.</p>
<p>…</p>
<p>Case n: If the other player breaks the groups of 2^n but not the groups of 2^(n-1), 2^(n-2) …, then he would have to leave you with a white group of 2^(n-1). Take 2^(n-1) coins.</p>
<p>Have we solved it? Not quite. So far, I’ve carefully chosen the stack size to avoid a special exception. Let’s take a look at a stack of 4.</p>
<p>[B W] &#x3C;B W></p>
<ul>
<li>If you take 2 or 3 coins on your turn, he takes the remaining and you lose.</li>
<li>If you take 1 coin on your turn, you take turns taking coins and you lose.</li>
</ul>
<p>How about a stack of 8?</p>
<p>[[B W] &#x3C;B W>] &#x3C;[B W] &#x3C;B W>></p>
<ul>
<li>If you take 4 or more coins on your turn, he takes the remaining coins and you lose.</li>
<li>If you take 1 or 3 coins on your turn, you leave him with a stack of an odd number. He starts taking 1 coin on each turn, forcing you to lose.</li>
<li>If you take 2 coins on your turn, he starts taking 2 coins on each turn. You’re once again seeing our strategy in motion, except now you’re on the losing end of it.</li>
</ul>
<p>Why is this happening? This is because when we formed the pairs of pairs of pairs… into groups, we assumed that there would be an odd number of groups, with this number being more than 1. This lets us take 1 group’s worth of coins on our first turn.</p>
<p>If the stack has a size that is a power of 2 (2, 4, 8, 16, …), then there is exactly 1 group. We can’t take that many coins on our first turn, so we’re forced to make a move that lets the other player subject us to the losing end of the winning strategy.</p>
<p>Let’s put it all together.</p>
<ul>
<li>If the stack of coins is a power of 2, then choose to go second.</li>
<li>Otherwise, the stack of coins will be in the form 2^n * m, where n is an odd number more than 1. On your first turn, take 2^n coins.</li>
<li>After the other player moves, count the number of the coins in the stack. If there are x coins left in the stack, take y coins such that y is the biggest power of 2 that is still a factor of x.</li>
</ul>
<p>Extra credit</p>
<p>I’ve left out one tiny detail in my explanation. In the strategy, I state:</p>
<p>“After the other player moves, count the number of the coins in the stack. If there are x coins left in the stack, take y coins such that y is the biggest power of 2 that is still a factor of x.”</p>
<p>To be certain our strategy works, we should also show that we can take y coins. If the other player took 3 coins on their previous turn, and our strategy tells us to take 8 coins on our next turn, then this strategy falls apart. Let’s show that such a situation will never happen.</p>
<p>Let’s consider two cases:</p>
<ul>
<li>Case 1: you went first
<ul>
<li>Case 1A: consider the first move</li>
<li>Case 1B: consider the second move</li>
</ul>
</li>
<li>Case 2: you went second</li>
</ul>
<p>In case 1A, we notice that our strategy gives rise to a valid first move since we attempt to take a power of two coins that is less than the number of coins in the stack.</p>
<p>Now we consider case 1B. Let’s say the strategy tells us to take 2^s coins for some s. This means that the stack of coins is 2^s * m for some odd number m.</p>
<p>todo</p>
<p>===</p>
<p>Unlike our previous games, we cannot simply represent a position by the number of coins. After all, consider the following games starting with 576:</p>
<p>Game A:<br>
Player 1 takes 572 coins, leaving 4 coins.</p>
<p>Game B:<br>
Player 1 takes 570 coins, leaving 6 coins.<br>
Player 2 takes 1 coin, leaving 5 coins.<br>
Player 1 takes 1 coin, leaving 4 coins.</p>
<p>In both games, there are 4 coins left in the stack, and it’s player 2’s turn to move. However, in the first game, player 2 can take the remaining 5 coins and win. In the second game, both players are forced to take 1 coin each, leaving a loss for player 1.</p>
<p>Instead, to capture the full state of the position, we should list it down as (number of coins in the stack, number of coins that can be taken in 1 move). Our starting position is (576, 575), since there are 576 coins in the stack, and the next player can take up to 575 coins on their turn. Let’s re-examine the two games again.</p>
<p>Game A:<br>
Player 1 takes 572 coins, leaving 4 coins. The state is now (4, 572).</p>
<p>Game B:<br>
Player 1 takes 570 coins, leaving 6 coins. The state is now (6, 570).<br>
Player 2 takes 1 coin, leaving 5 coins. The state is now (5, 1).<br>
Player 1 takes 1 coin, leaving 4 coins. The state is now (4, 1).</p>
<p>We can see that (4, 572) is a winning position, while (4, 1) is a losing position. Now let’s see if we can find a way to determine if any arbitrary state (x, y) is a winning or losing state.</p>
<p>Let’s consider a game with 100 coins in the stack and you’re going first. If you take 50 coins, you leave the other player with a stack of 50 coins. The other player can simply take the remaining 50 coins and win. In fact, taking at least half of the remaining coins will result in a loss for you.</p>
<p>This is because you are leaving the other player with the state (x, y), where y >= x. This is a winning state for the next player because he can take the remaining x coins and win. Let’s call this “Rule 1”. We see an example of this in game A.</p>
<p>Let’s consider another game with 6 coins in the stack and you’re going first. If you take 1 coin, the rest of the game will be both players taking 1 coin each until the other player takes the last coin and you lose. Oops!</p>
<p>However, if there were 7 coins in the stack, then taking 1 coin on your first move will lead to a win for you. In general, if y = 1, then (x, y) is a winning state if x is odd, and a losing state if x is even. Let’s call this “Rule 2A” We see an example of this in game B.</p>
<p>Let’s illustrate this by laying the coins out in a line and colouring them black and white. The leftmost coin is the top of the stack, and the rightmost coin is the gold coin.</p>
<p>[B W B W B W B]</p>
<p>Notice that by taking a black coin, we always leave the white coin behind for the other player to take, allowing us to take the last black coin.</p>
<p>We’re starting to see a bit of strategy forming. If we get an odd number of coins, take 1 coin and win.</p>
<p>What happens if there are an even number of coins? Let’s look at a stack starting with 6 coins. By rule 1, we know that taking 3 or more coins leads to a loss for us. By rule 2A, we know that taking 1 coin leads to a loss too.</p>
<p>Let’s try taking 2 coins then. We leave the state (4, 2) to the other player. He now has 2 options:</p>
<ul>
<li>He can take 1 coin, reducing it to (3, 1). This is a win for you because of rule 2A—players will take turns taking a coin until you win.</li>
<li>He can take 2 coins, reducing it to (2, 2). This is a win for you because of rule 1—you take all the coins and win on your next turn.</li>
</ul>
<p>So the first player wins if the coins are in a stack of 6.</p>
<p>Let’s try a stack of 14 coins. Notice just like the previous game, we can immediately take 2 coins, forcing the other player into the state (12, 2). Let’s consider the possibilities</p>
<ul>
<li>If both players keep taking 2 coins, there are only 7 sets of 2 coins in a stack of 14. Since 7 is an odd number, the first player wins.</li>
<li>If at any point in time, the other player takes 1 coin, he will leave you with an odd number of coins (since the previous moves involve keeping the stack of coins a multiple of 2). By rule 2A, you win.</li>
</ul>
<p>We can illustrate this by grouping the coins in sets of 2, colouring every other set white and black.</p>
<p>DIAGRAM:<br>
[W B] &#x3C;W B> [W B] &#x3C;W B> [W B] &#x3C;W B> [W B]<br>
[] = black set, &#x3C;> = white set</p>
<p>In general, if x is an odd multiple of 2 (2, 6, 10, 14, …), then (x, 2) is a winning state for the next player.</p>
<p>On the flip side, if we started with an even multiple of 2 (4, 8, 12, 16, …), then we’re not completely sure, at least not yet. To see why, let’s try the following games starting with 4 and 12 coins respectively.</p>
<p>4 coins:</p>
<ul>
<li>If you take 1 coin, players take turns taking 1 coin and you lose.</li>
<li>If you take 2 coins, the other player takes 2 coins and you lose.</li>
<li>If you take 3 coins, the other player takes 1 coin and you lose.</li>
</ul>
<p>No matter the outcome, the situation with 4 coins is a loss for the first player.</p>
<p>12 coins:</p>
<ul>
<li>If you take 6 or more coins, the other player takes the remaining coins and you lose.</li>
<li>If you take 1 coin, players take turns taking 1 coin and you lose.</li>
<li>If you take 2 coins,</li>
</ul>
<p>===</p>
<p>Turkey Sandwich was worried about an upcoming test in Discrete Mathematics and was finding it hard to get to sleep. Turkey awoke early in the morning, aroused by devilish laughter, only to see an impish looking homunculus sitting at the bottom of the bed next to a seemingly infinite pile of chips. Hello Turkey it said, would you like to play a little game? This pile contains 43546758343209876 chips and the bottom chip represents your immortal soul. The rules are quite simple. The first player takes some chips, but not all of them. After that we take it in turns to take some chips.</p>
<p>The only rule now is that a player cannot take more in their turn than the previous player took. The winner is the player who takes the last chip. If I win I get to keep your soul and if you win, you get an A in the test. Would you like to go first or second? This seemed a reasonable bet to Turkey. Can you give Turkey a strategy for playing no matter how many chips there are?</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml](https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml) -->

64 * 9

\\[Link to previous puzzles\\]

Once more, you and a friend stumble on another pirate’s treasure: an old chest filled with coins: 575 copper coins and 1 gold coin. As before, these old coins are no longer legal tender, so the copper ones are worthless. Only the gold coin is worth something due to its material.

Not wanting to lose again, your friend comes up with another game of wits. He stacks the 576 coins in a tall stack with the gold coin at the bottom. You and him will take turns taking coins from the top of the stack, all the way until the final coin is taken.

If you are the first to move, you can only take up to 575 coins. After that, players can only take anywhere between 1 to X coins (inclusive), where X is the number of coins taken on the last turn. He lets you decide if you want to go first or second.

Should you go first or second? And what strategy do you use to ensure you’ll win the gold coin?
---

The solution is fairly complex, so let’s work our way up. Do take a look at \\[Link to Adversarial Games module\\] if you haven’t already done so, as most concepts there will be useful for this solution.

Let’s play around with smaller stacks of coins in order to get a feel of the rules. If we start with a stack of 5 coins, should you go first?

Yes! All you have to do is to take 1 coin. This forces you both to take turns taking 1 coin each. Since there are an odd number of coins, you’ll take the last coin and win.

We can show this by laying out the coins in a row, with the coin at the top of the stack on the left, and the gold coin on the right. We colour the gold coin white, then the next coin black, then white, and so on.

W B W B W

By taking the white coin on your turn, you always force the other player to only take the black coin. To get this configuration, we’ll need the first coin to be white, meaning this strategy only works if we start with an odd number of coins. What happens if we start with an even number of coins?

Let’s consider 6 coins. If you take 3, 4, or 5 coins, the other player can immediately take the remaining coins and win. But if you take 1 coin, then you’ve forced both players to take 1 coin until the other player takes the last coin and you lose. The only option you have is to take 2  coins to not result in an immediate loss.

You take 2 coins. The other player now has 2 options:

* Take 2 coins. You can take the remaining 2 coins and win.  
* Take 1 coin. You both take turns taking 1 coin until you win.

No matter what the other player picks, you can always win.

Let’s try to represent this by extending our earlier diagram. This time, we’ll group the coins into pairs. We colour the pair with the gold coin white, then the next pair black, then the next pair white.

\\[B W\\] \\<B W> \\[B W\\]  
\\[\\] = white underline, \\<> = black underline

This leaves us with 2 interesting observations:

* If the other player sticks to taking pairs, then you’ll take turns taking alternating white and black pairs, leaving you the win.  
* If the other player breaks the pairs by taking an odd number of coins, then you’ll take turns taking alternating white and black coins, leaving you the win.

Since the last coin is always a white coin in a white pair, we'll always ensure that the other player cannot take it. To get a feel for this strategy, let’s try this with a bigger game with 10 coins.

\\[B W\\] \\<B W> \\[B W\\] \\<B W> \\[B W\\]

This strategy applies to any odd multiple of 2 (2, 6, 10, 14, …), because the first pair of coins will always be white.

What happens for the even multiples of 4? Well, we can’t say for sure, so let’s play around with more examples. Let’s try a stack of 12 next.

This time, there’s an even number of pairs, meaning we can’t use our strategy of taking pairs again. But what if we took pairs of pairs? This time, let’s group pairs into pairs, which we will call quadruples (or quads for short). Let’s colour them with alternating colours again.

\\<\\[B W\\] \\<B W>> \\[\\[B W\\] \\<B W>\\] \\<\\[B W\\] \\<B W>>

This time, we can start first and take a white quad. If the other player takes a black quad, we can take the last white quad and win.

But what happens if the other player decides to take 1, 2, or 3 coins instead?

If he takes 2 coins, we can start ignoring the quads and look at the pairs. He would have left you with a white pair at the top, in which case we can use the earlier strategy and start taking pairs each turn.

If he takes 1 or 3 coins, we can start ignoring the quads and pairs and look at the individual coins. He would have left you with a white coin at the top, in which case we can use our earlier strategy and start taking 1 coin each turn.

Are you starting to see a pattern? For any stack of coins, we can start making pairs, pairs of pairs, then pairs of pairs of pairs, all the way up until we get an odd number of groups. Because of how we constructed these groups, each group will have a number of coins equal to a power of 2. Let the size of the group be X coins. Then on your first turn, you should take X coins to win.

Case 1: If the other player “breaks” the pairs, he would have to leave you a white coin at the top of the stack. Take 1 coin and you’ll win.

Case 2: If the other player “breaks” the quads but not the pairs, he would have to leave you a white pair at the top of the stack. Take 2 coins, since the other player can either (a) keep taking 2 coins and you win, or (b) he can break the pairs and you win by case 1.

Case 3: If the other player “breaks” the octets (groups of 8\\) but not the pairs or quads, then he would have to leave you with a white quad. Take 4 coins, since the other player can either (a) keep taking 4 coins and you win, or (b) he can break the quads and you win by case 1 or 2.

…

Case n: If the other player breaks the groups of 2^n but not the groups of 2^(n-1), 2^(n-2) …, then he would have to leave you with a white group of 2^(n-1). Take 2^(n-1) coins.

Have we solved it? Not quite. So far, I’ve carefully chosen the stack size to avoid a special exception. Let’s take a look at a stack of 4.

\\[B W\\] \\<B W>

* If you take 2 or 3 coins on your turn, he takes the remaining and you lose.  
* If you take 1 coin on your turn, you take turns taking coins and you lose.

How about a stack of 8?

\\[\\[B W\\] \\<B W>\\] \\<\\[B W\\] \\<B W>>

* If you take 4 or more coins on your turn, he takes the remaining coins and you lose.  
* If you take 1 or 3 coins on your turn, you leave him with a stack of an odd number. He starts taking 1 coin on each turn, forcing you to lose.  
* If you take 2 coins on your turn, he starts taking 2 coins on each turn. You’re once again seeing our strategy in motion, except now you’re on the losing end of it.

Why is this happening? This is because when we formed the pairs of pairs of pairs… into groups, we assumed that there would be an odd number of groups, with this number being more than 1. This lets us take 1 group’s worth of coins on our first turn.

If the stack has a size that is a power of 2 (2, 4, 8, 16, …), then there is exactly 1 group. We can’t take that many coins on our first turn, so we’re forced to make a move that lets the other player subject us to the losing end of the winning strategy.

Let’s put it all together.

* If the stack of coins is a power of 2, then choose to go second.  
* Otherwise, the stack of coins will be in the form 2^n * m, where n is an odd number more than 1. On your first turn, take 2^n coins.  
* After the other player moves, count the number of the coins in the stack. If there are x coins left in the stack, take y coins such that y is the biggest power of 2 that is still a factor of x.

Extra credit

I’ve left out one tiny detail in my explanation. In the strategy, I state:

“After the other player moves, count the number of the coins in the stack. If there are x coins left in the stack, take y coins such that y is the biggest power of 2 that is still a factor of x.”

To be certain our strategy works, we should also show that we can take y coins. If the other player took 3 coins on their previous turn, and our strategy tells us to take 8 coins on our next turn, then this strategy falls apart. Let’s show that such a situation will never happen.

Let’s consider two cases:

* Case 1: you went first  
  * Case 1A: consider the first move  
  * Case 1B: consider the second move  
* Case 2: you went second

In case 1A, we notice that our strategy gives rise to a valid first move since we attempt to take a power of two coins that is less than the number of coins in the stack.

Now we consider case 1B. Let’s say the strategy tells us to take 2^s coins for some s. This means that the stack of coins is 2^s * m for some odd number m.

todo

===

Unlike our previous games, we cannot simply represent a position by the number of coins. After all, consider the following games starting with 576:

Game A:   
Player 1 takes 572 coins, leaving 4 coins.

Game B:  
Player 1 takes 570 coins, leaving 6 coins.  
Player 2 takes 1 coin, leaving 5 coins.  
Player 1 takes 1 coin, leaving 4 coins.

In both games, there are 4 coins left in the stack, and it’s player 2’s turn to move. However, in the first game, player 2 can take the remaining 5 coins and win. In the second game, both players are forced to take 1 coin each, leaving a loss for player 1.

Instead, to capture the full state of the position, we should list it down as (number of coins in the stack, number of coins that can be taken in 1 move). Our starting position is (576, 575), since there are 576 coins in the stack, and the next player can take up to 575 coins on their turn. Let’s re-examine the two games again.

Game A:   
Player 1 takes 572 coins, leaving 4 coins. The state is now (4, 572).

Game B:  
Player 1 takes 570 coins, leaving 6 coins. The state is now (6, 570).  
Player 2 takes 1 coin, leaving 5 coins. The state is now (5, 1).  
Player 1 takes 1 coin, leaving 4 coins. The state is now (4, 1).

We can see that (4, 572\\) is a winning position, while (4, 1\\) is a losing position. Now let’s see if we can find a way to determine if any arbitrary state (x, y) is a winning or losing state.

Let’s consider a game with 100 coins in the stack and you’re going first. If you take 50 coins, you leave the other player with a stack of 50 coins. The other player can simply take the remaining 50 coins and win. In fact, taking at least half of the remaining coins will result in a loss for you.

This is because you are leaving the other player with the state (x, y), where y >= x. This is a winning state for the next player because he can take the remaining x coins and win. Let’s call this “Rule 1”. We see an example of this in game A.

Let’s consider another game with 6 coins in the stack and you’re going first. If you take 1 coin, the rest of the game will be both players taking 1 coin each until the other player takes the last coin and you lose. Oops!

However, if there were 7 coins in the stack, then taking 1 coin on your first move will lead to a win for you. In general, if y = 1, then (x, y) is a winning state if x is odd, and a losing state if x is even. Let’s call this “Rule 2A” We see an example of this in game B.

Let’s illustrate this by laying the coins out in a line and colouring them black and white. The leftmost coin is the top of the stack, and the rightmost coin is the gold coin.

\\[B W B W B W B\\]

Notice that by taking a black coin, we always leave the white coin behind for the other player to take, allowing us to take the last black coin.

We’re starting to see a bit of strategy forming. If we get an odd number of coins, take 1 coin and win.

What happens if there are an even number of coins? Let’s look at a stack starting with 6 coins. By rule 1, we know that taking 3 or more coins leads to a loss for us. By rule 2A, we know that taking 1 coin leads to a loss too.

Let’s try taking 2 coins then. We leave the state (4, 2\\) to the other player. He now has 2 options:

* He can take 1 coin, reducing it to (3, 1). This is a win for you because of rule 2A—players will take turns taking a coin until you win.  
* He can take 2 coins, reducing it to (2, 2). This is a win for you because of rule 1—you take all the coins and win on your next turn.

So the first player wins if the coins are in a stack of 6.

Let’s try a stack of 14 coins. Notice just like the previous game, we can immediately take 2 coins, forcing the other player into the state (12, 2). Let’s consider the possibilities

* If both players keep taking 2 coins, there are only 7 sets of 2 coins in a stack of 14. Since 7 is an odd number, the first player wins.  
* If at any point in time, the other player takes 1 coin, he will leave you with an odd number of coins (since the previous moves involve keeping the stack of coins a multiple of 2). By rule 2A, you win.

We can illustrate this by grouping the coins in sets of 2, colouring every other set white and black.

DIAGRAM:  
\\[W B\\] \\<W B> \\[W B\\] \\<W B> \\[W B\\] \\<W B> \\[W B\\]  
\\[\\] = black set, \\<> = white set

In general, if x is an odd multiple of 2 (2, 6, 10, 14, …), then (x, 2\\) is a winning state for the next player.

On the flip side, if we started with an even multiple of 2 (4, 8, 12, 16, …), then we’re not completely sure, at least not yet. To see why, let’s try the following games starting with 4 and 12 coins respectively.

4 coins:

* If you take 1 coin, players take turns taking 1 coin and you lose.  
* If you take 2 coins, the other player takes 2 coins and you lose.  
* If you take 3 coins, the other player takes 1 coin and you lose.

No matter the outcome, the situation with 4 coins is a loss for the first player.

12 coins:

* If you take 6 or more coins, the other player takes the remaining coins and you lose.  
* If you take 1 coin, players take turns taking 1 coin and you lose.  
* If you take 2 coins, 

===

Turkey Sandwich was worried about an upcoming test in Discrete Mathematics and was finding it hard to get to sleep. Turkey awoke early in the morning, aroused by devilish laughter, only to see an impish looking homunculus sitting at the bottom of the bed next to a seemingly infinite pile of chips. Hello Turkey it said, would you like to play a little game? This pile contains 43546758343209876 chips and the bottom chip represents your immortal soul. The rules are quite simple. The first player takes some chips, but not all of them. After that we take it in turns to take some chips.

The only rule now is that a player cannot take more in their turn than the previous player took. The winner is the player who takes the last chip. If I win I get to keep your soul and if you win, you get an A in the test. Would you like to go first or second? This seemed a reasonable bet to Turkey. Can you give Turkey a strategy for playing no matter how many chips there are?
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
