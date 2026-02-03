const e={slug:"guessing-hats-1",metadata:{id:"puzzle-2",title:"Guessing Hats 1",difficulty:"easy",concepts:["logic","deductive-reasoning"],tags:["has-solution"],nextPuzzle:"guessing-hats-2",credit:"Classic logic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"Angry with his three wise men, the evil king subjects them to an impossible task: they’ll have to guess the colour of the hats on their heads. If any one of...",websitePreview:"Angry with his three wise men, the evil king subjects them to an impossible task: they’ll have to guess the colour of the hats on their heads. If any one of..."},content:`<p>Angry with his three wise men, the evil king subjects them to an impossible task: they’ll have to guess the colour of the hats on their heads. If any one of them can guess their own hat colour, they all go free. If none of them can guess their own hat, or if anyone guesses wrongly, then they will all be put to death.</p>
<p>The king first shows the wise men a box with 3 black hats and 2 white hats. He then positions the wise men in a line facing the same direction such that:</p>
<ul>
<li>The 1st wise man can see the 2nd and 3rd wise men.</li>
<li>The 2nd wise man can see the 3rd wise man.</li>
<li>The 3rd wise man cannot see anyone in front of him.</li>
</ul>
<p>The king then places a hat on each of the wise men without them seeing their own hat. He asks the 1st wise man, “Do you know the colour of the hat you are wearing?”. “No” came the answer. He then asks the 2nd wise man, “Do you know the colour of the hat you are wearing?”. “No” came the answer. The king smirked. Confident that they’ll all be put to death, he asks the 3rd wise man the same question. To the king’s shock, the 3rd wise man says “yes” and proceeds to guess his hat correctly.</p>
<p>How did he do it, and what colour is his hat?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>There are no tricks to this. The 3rd wise man didn’t use any hidden mirrors, or relied on a secret communication method to find out his hat colour. He got his answer purely from the responses of the other two wise men.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>To solve this, we have to imagine each wise man and what logical inferences they could make from (1) what they see, and (2) what they’ve heard the other wise men say.</p><p>Let’s put ourselves in the shoes of the first wise man. What are the possible combinations of hats that will ensure he has no idea what colour hat he is wearing? The possibilities of hats he can see are:</p><ol>
<li>2 black hats</li>
<li>1 black hat and 1 white hat</li>
<li>2 white hats</li>
</ol><p>If he saw 2 white hats in front of him, then the remaining hats must be black (since there are only 2 white hats in total). This means he would answer “yes”. However, since that is not what he answered, he must be seeing either:</p><ol>
<li>2 black hats</li>
<li>1 black hat and 1 white hat.</li>
</ol><p>Now we put ourselves in the shoes of the second wise man. In front of him, he can see either:</p><ol>
<li>1 black hat</li>
<li>1 white hat</li>
</ol><p>He also has the answer of the 1st wise man and knows that between him and the 3rd wise man, they are either wearing 2 black hats, or 1 black hat and 1 white hat.</p><p>If he saw a black hat in front of him, he could be wearing either a black or white hat, since the 1st wise man’s answer allows both possibilities. However, if he saw a white hat in front of him, he must know that his hat is black, since the 1st wise man’s answer doesn’t allow for 2 white hats. Thus, we eliminate this option, and we know that the 2nd wise man must see a black hat in front of him.</p><p>Despite not being able to see any hats, the 3rd wise man can take all the previous answers into account, determining that his own hat must be black.</p></div></details>`,rawContent:`
Angry with his three wise men, the evil king subjects them to an impossible task: they’ll have to guess the colour of the hats on their heads. If any one of them can guess their own hat colour, they all go free. If none of them can guess their own hat, or if anyone guesses wrongly, then they will all be put to death.

The king first shows the wise men a box with 3 black hats and 2 white hats. He then positions the wise men in a line facing the same direction such that:

* The 1st wise man can see the 2nd and 3rd wise men.  
* The 2nd wise man can see the 3rd wise man.  
* The 3rd wise man cannot see anyone in front of him.

The king then places a hat on each of the wise men without them seeing their own hat. He asks the 1st wise man, “Do you know the colour of the hat you are wearing?”. “No” came the answer. He then asks the 2nd wise man, “Do you know the colour of the hat you are wearing?”. “No” came the answer. The king smirked. Confident that they’ll all be put to death, he asks the 3rd wise man the same question. To the king’s shock, the 3rd wise man says “yes” and proceeds to guess his hat correctly.

How did he do it, and what colour is his hat?

:::hint
There are no tricks to this. The 3rd wise man didn’t use any hidden mirrors, or relied on a secret communication method to find out his hat colour. He got his answer purely from the responses of the other two wise men.
:::

:::solution
To solve this, we have to imagine each wise man and what logical inferences they could make from (1) what they see, and (2) what they’ve heard the other wise men say.

Let’s put ourselves in the shoes of the first wise man. What are the possible combinations of hats that will ensure he has no idea what colour hat he is wearing? The possibilities of hats he can see are:

1. 2 black hats  
2. 1 black hat and 1 white hat  
3. 2 white hats

If he saw 2 white hats in front of him, then the remaining hats must be black (since there are only 2 white hats in total). This means he would answer “yes”. However, since that is not what he answered, he must be seeing either:

1. 2 black hats  
2. 1 black hat and 1 white hat.

Now we put ourselves in the shoes of the second wise man. In front of him, he can see either:

1. 1 black hat  
2. 1 white hat

He also has the answer of the 1st wise man and knows that between him and the 3rd wise man, they are either wearing 2 black hats, or 1 black hat and 1 white hat.

If he saw a black hat in front of him, he could be wearing either a black or white hat, since the 1st wise man’s answer allows both possibilities. However, if he saw a white hat in front of him, he must know that his hat is black, since the 1st wise man’s answer doesn’t allow for 2 white hats. Thus, we eliminate this option, and we know that the 2nd wise man must see a black hat in front of him.

Despite not being able to see any hats, the 3rd wise man can take all the previous answers into account, determining that his own hat must be black.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
