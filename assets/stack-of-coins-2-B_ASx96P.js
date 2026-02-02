const t={slug:"stack-of-coins-2",metadata:{id:"puzzle-draft-209",title:"Stack of Coins \\[2\\]",published:!1,difficulty:"medium",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"[Previous puzzle: Stack of Coins 1] You and a friend stumble on another pirate’s treasure: an old chest filled with coins: 99 copper coins and 1 gold coin. As...",websitePreview:"[Previous puzzle: Stack of Coins 1] You and a friend stumble on another pirate’s treasure: an old chest filled with coins: 99 copper coins and 1 gold coin. As..."},content:`


<p>[Previous puzzle: Stack of Coins 1]</p>
<p>You and a friend stumble on another pirate’s treasure: an old chest filled with coins: 99 copper coins and 1 gold coin. As before, these old coins are no longer legal tender, so the copper ones are worthless. Only the gold coin is worth something due to its material.</p>
<p>Not wanting to lose again, your friend comes up with another game of wits. He stacks the 100 coins in a tall stack with the gold coin at the bottom. You and him will take turns taking either 1, 4, or 5 coins from the top of the stack, all the way until the final coin is taken. If there’s only 2 or 3 coins left, the only option for the player is to take 1 coin, since there aren’t enough coins for the player to take 4 or 5. He lets you decide if you want to go first or second.</p>
<h3 class="markdown-h2">Should you go first or second? And what strategy do you use to ensure you’ll win the gold coin?</h3>
<p>Choose to go first and take 2 coins. After that, when your friend makes a move, take 11 - [the number of coins he took].</p>
<p>Let’s start from 0 coins and work backwards. If a player is presented with a stack of 0 coins, it means their opponent took the gold coin, resulting in a loss for the current player. If there are 1, 4, or 5 coins left, the player that moves next can take all the coins and win. A stack of 2 coins left is a losing position as the only option is for the player to take 1 coin, allowing their opponent to take the last coin and win.</p>

































<table><thead><tr><th align="left">Coins in stack</th><th align="left">Position for the player that moves next</th></tr></thead><tbody><tr><td align="left">0</td><td align="left">Lose</td></tr><tr><td align="left">1</td><td align="left">Win</td></tr><tr><td align="left">2</td><td align="left">Lose</td></tr><tr><td align="left">3</td><td align="left">?</td></tr><tr><td align="left">4</td><td align="left">Win</td></tr><tr><td align="left">5</td><td align="left">Win</td></tr></tbody></table>
<p>We notice that when there are 3 coins left, the next player can take away 1 coin, forcing their opponent into a losing position with 2 coins.</p>

































<table><thead><tr><th align="left">Coins in stack</th><th align="left">Position for the player that moves next</th></tr></thead><tbody><tr><td align="left">0</td><td align="left">Lose</td></tr><tr><td align="left">1</td><td align="left">Win</td></tr><tr><td align="left">2</td><td align="left">Lose</td></tr><tr><td align="left">3</td><td align="left">Win</td></tr><tr><td align="left">4</td><td align="left">Win</td></tr><tr><td align="left">5</td><td align="left">Win</td></tr></tbody></table>
<p>Let’s extend the table a bit more.</p>





















































<table><thead><tr><th align="left">Coins in stack</th><th align="left">Position for the player that moves next</th></tr></thead><tbody><tr><td align="left">0</td><td align="left">Lose</td></tr><tr><td align="left">1</td><td align="left">Win</td></tr><tr><td align="left">2</td><td align="left">Lose</td></tr><tr><td align="left">3</td><td align="left">Win</td></tr><tr><td align="left">4</td><td align="left">Win</td></tr><tr><td align="left">5</td><td align="left">Win</td></tr><tr><td align="left">6</td><td align="left">Win</td></tr><tr><td align="left">7</td><td align="left">Win</td></tr><tr><td align="left">8</td><td align="left">Lose</td></tr><tr><td align="left">9</td><td align="left">Win</td></tr><tr><td align="left">10</td><td align="left">Lose</td></tr></tbody></table>
<p>As we learnt in [Link to course: Adversarial games], a position is a winning position if there exists a move for the current player to put the other player in a losing position. A position is a losing position if ALL moves put the other player in a winning position.</p>
<p>A stack of 6 coins is a winning position since you can take 4 coins to leave the other player with a stack of 2 coins: a losing position.</p>
<p>A stack of 7 coins is a winning position since you can take 5 coins to leave the other player with a stack of 2 coins: a losing position.</p>
<p>A stack of 8 coins is a losing position, since taking 1, 4, or 5 coins leaves you with a stack of 7, 4, or 3 coins, all of which are winning positions for their opponent.</p>
<p>Hmm, notice that the table is starting to repeat itself. This is because we can determine if a position is winning or losing by looking up to 5 positions up the table. Once it starts repeating, it will repeat all the way down.</p>

























































































<table><thead><tr><th align="left">Coins in stack</th><th align="left">Position for the player that moves next</th></tr></thead><tbody><tr><td align="left">0</td><td align="left">Lose</td></tr><tr><td align="left">1</td><td align="left">Win</td></tr><tr><td align="left">2</td><td align="left">Lose</td></tr><tr><td align="left">3</td><td align="left">Win</td></tr><tr><td align="left">4</td><td align="left">Win</td></tr><tr><td align="left">5</td><td align="left">Win</td></tr><tr><td align="left">6</td><td align="left">Win</td></tr><tr><td align="left">7</td><td align="left">Win</td></tr><tr><td align="left">8</td><td align="left">Lose</td></tr><tr><td align="left">9</td><td align="left">Win</td></tr><tr><td align="left">10</td><td align="left">Lose</td></tr><tr><td align="left">11</td><td align="left">Win</td></tr><tr><td align="left">12</td><td align="left">Win</td></tr><tr><td align="left">13</td><td align="left">Win</td></tr><tr><td align="left">14</td><td align="left">Win</td></tr><tr><td align="left">15</td><td align="left">Win</td></tr><tr><td align="left">16</td><td align="left">Lose</td></tr><tr><td align="left">17</td><td align="left">Win</td></tr><tr><td align="left">18</td><td align="left">Lose</td></tr><tr><td align="left">…</td><td align="left"></td></tr></tbody></table>
<p>In general, we see that the losing positions are positions where the stack of coins are (a) multiple of 8, or (b) 2 more than a multiple of 8.</p>
<p>Since 100 is 4 more than a multiple of 8, it is a winning position, so you should choose to go first. On your turn, you want to take a number of coins to leave your opponent in a losing position.</p>









































<table><thead><tr><th align="left">Remainder after dividing the number of coins by 8</th><th align="left">What to do</th></tr></thead><tbody><tr><td align="left">0</td><td align="left">Losing position: all moves lead to a loss in optimal play.</td></tr><tr><td align="left">1</td><td align="left">Take 1 coin</td></tr><tr><td align="left">2</td><td align="left">Losing position: all moves lead to a loss in optimal play.</td></tr><tr><td align="left">3</td><td align="left">Take 1 coin</td></tr><tr><td align="left">4</td><td align="left">Take 4 coins</td></tr><tr><td align="left">5</td><td align="left">Take 5 coins</td></tr><tr><td align="left">6</td><td align="left">Take 4 coins</td></tr><tr><td align="left">7</td><td align="left">Take 5 coins</td></tr></tbody></table>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.youtube.com/watch?v=qMFpOcLroOg](https://www.youtube.com/watch?v=qMFpOcLroOg) -->

\\[Previous puzzle: Stack of Coins 1\\]

You and a friend stumble on another pirate’s treasure: an old chest filled with coins: 99 copper coins and 1 gold coin. As before, these old coins are no longer legal tender, so the copper ones are worthless. Only the gold coin is worth something due to its material.

Not wanting to lose again, your friend comes up with another game of wits. He stacks the 100 coins in a tall stack with the gold coin at the bottom. You and him will take turns taking either 1, 4, or 5 coins from the top of the stack, all the way until the final coin is taken. If there’s only 2 or 3 coins left, the only option for the player is to take 1 coin, since there aren’t enough coins for the player to take 4 or 5. He lets you decide if you want to go first or second.

Should you go first or second? And what strategy do you use to ensure you’ll win the gold coin?
---

Choose to go first and take 2 coins. After that, when your friend makes a move, take 11 - \\[the number of coins he took\\].

Let’s start from 0 coins and work backwards. If a player is presented with a stack of 0 coins, it means their opponent took the gold coin, resulting in a loss for the current player. If there are 1, 4, or 5 coins left, the player that moves next can take all the coins and win. A stack of 2 coins left is a losing position as the only option is for the player to take 1 coin, allowing their opponent to take the last coin and win.

| Coins in stack | Position for the player that moves next |
| :---- | :---- |
| 0 | Lose |
| 1 | Win |
| 2 | Lose |
| 3 | ? |
| 4 | Win |
| 5 | Win |

We notice that when there are 3 coins left, the next player can take away 1 coin, forcing their opponent into a losing position with 2 coins.

| Coins in stack | Position for the player that moves next |
| :---- | :---- |
| 0 | Lose |
| 1 | Win |
| 2 | Lose |
| 3 | Win |
| 4 | Win |
| 5 | Win |

Let’s extend the table a bit more.

| Coins in stack | Position for the player that moves next |
| :---- | :---- |
| 0 | Lose |
| 1 | Win |
| 2 | Lose |
| 3 | Win |
| 4 | Win |
| 5 | Win |
| 6 | Win |
| 7 | Win |
| 8 | Lose |
| 9 | Win |
| 10 | Lose |

As we learnt in \\[Link to course: Adversarial games\\], a position is a winning position if there exists a move for the current player to put the other player in a losing position. A position is a losing position if ALL moves put the other player in a winning position.

A stack of 6 coins is a winning position since you can take 4 coins to leave the other player with a stack of 2 coins: a losing position.

A stack of 7 coins is a winning position since you can take 5 coins to leave the other player with a stack of 2 coins: a losing position.

A stack of 8 coins is a losing position, since taking 1, 4, or 5 coins leaves you with a stack of 7, 4, or 3 coins, all of which are winning positions for their opponent.

Hmm, notice that the table is starting to repeat itself. This is because we can determine if a position is winning or losing by looking up to 5 positions up the table. Once it starts repeating, it will repeat all the way down.

| Coins in stack | Position for the player that moves next |
| :---- | :---- |
| 0 | Lose |
| 1 | Win |
| 2 | Lose |
| 3 | Win |
| 4 | Win |
| 5 | Win |
| 6 | Win |
| 7 | Win |
| 8 | Lose |
| 9 | Win |
| 10 | Lose |
| 11 | Win |
| 12 | Win |
| 13 | Win |
| 14 | Win |
| 15 | Win |
| 16 | Lose |
| 17 | Win |
| 18 | Lose |
| … |  |

In general, we see that the losing positions are positions where the stack of coins are (a) multiple of 8, or (b) 2 more than a multiple of 8.

Since 100 is 4 more than a multiple of 8, it is a winning position, so you should choose to go first. On your turn, you want to take a number of coins to leave your opponent in a losing position.

| Remainder after dividing the number of coins by 8 | What to do |
| :---- | :---- |
| 0 | Losing position: all moves lead to a loss in optimal play. |
| 1 | Take 1 coin |
| 2 | Losing position: all moves lead to a loss in optimal play. |
| 3 | Take 1 coin |
| 4 | Take 4 coins |
| 5 | Take 5 coins |
| 6 | Take 4 coins |
| 7 | Take 5 coins |
`,dynamicBlocks:[],inlineComponents:{}};export{t as default};
