const e={slug:"card-shuffle",metadata:{id:"puzzle-draft-196",title:"Card Shuffle\\[?\\]",published:!1,difficulty:{concepts:"medium",reasoning:"medium"},dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"You have a deck of 52 cards - for convenience, number them 1 through 52. You cut the cards into two equal halves and shuffle them perfectly. That is, the cards...",websitePreview:"You have a deck of 52 cards - for convenience, number them 1 through 52. You cut the cards into two equal halves and shuffle them perfectly. That is, the cards..."},content:`


<p>You have a deck of 52 cards - for convenience, number them 1 through 52. You cut the cards into two equal halves and shuffle them perfectly. That is, the cards were in the order 1,2,3,...,52 and now they are 1,27,2,28,...,26,52. Let's call this a perfect in-shuffle.</p>
<p>If you repeat this in-shuffling process, will the cards ever return to their initial ordering? If so, how many in-shuffles will it take?</p>
<p>How does the solution change if you have a deck of 64 cards, or 10, or in general, n cards? For odd integer values of n, in-shuffling will take 1,2,3,...,n to 1,(n+3)/2,2,(n+5)/2,...,n,(n+1)/2. For example, when n=5, the first shuffle in-yields 1,4,2,5,3.</p>
<p>What if you do out-shuffles instead? (27,1,28,2,...,52,26)</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml](https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml) -->

You have a deck of 52 cards - for convenience, number them 1 through 52. You cut the cards into two equal halves and shuffle them perfectly. That is, the cards were in the order 1,2,3,...,52 and now they are 1,27,2,28,...,26,52. Let's call this a perfect in-shuffle.

If you repeat this in-shuffling process, will the cards ever return to their initial ordering? If so, how many in-shuffles will it take?

How does the solution change if you have a deck of 64 cards, or 10, or in general, n cards? For odd integer values of n, in-shuffling will take 1,2,3,...,n to 1,(n+3)/2,2,(n+5)/2,...,n,(n+1)/2. For example, when n=5, the first shuffle in-yields 1,4,2,5,3.

What if you do out-shuffles instead? (27,1,28,2,...,52,26)
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
