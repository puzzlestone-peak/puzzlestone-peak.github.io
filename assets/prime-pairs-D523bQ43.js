const e={slug:"prime-pairs",metadata:{id:"puzzle-draft-26",title:"Prime Pairs",published:!1,difficulty:"expert",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"Prime pairs are 2 primes that are exactly 2 apart (e.g. 17 and 19). Prove that the number between a prime pair is always divisible by 6. Without loss of...",websitePreview:"Prime pairs are 2 primes that are exactly 2 apart (e.g. 17 and 19). Prove that the number between a prime pair is always divisible by 6. Without loss of..."},content:`


<h3 class="markdown-h2">Prime pairs are 2 primes that are exactly 2 apart (e.g. 17 and 19). Prove that the number between a prime pair is always divisible by 6.</h3>
<p>Without loss of generality, let us call the number between 2 prime pairs x. Take r to be the remainder of x after dividing by 6. Notice that x = 6n+r for some non-negative integer n.</p>
<p>To show that x is a multiple of 6, we need to show that r = 0. We shall eliminate the following possibilities:</p>
<ol>
<li>r = 1, 3, or 5</li>
<li>r = 2</li>
<li>r = 4</li>
</ol>
<p>Consider the situation where r is odd. Since 6n is always even, x will be odd if r is odd, then  x-1 and x+1—our twin primes—must be even. This is impossible because there is only one even prime: 2. Hence, we can eliminate the possibility that r = 1, 3, or 5.</p>
<p>If r=2, then the higher prime is (6n+2)+1 = 6n+3 = 3(2n+1). Since 2n+1 is an integer that is greater than 1, then the higher prime is a multiple of 3 that isn’t 3, which contradicts our initial assumption that this is a prime pair. Hence, r cannot be 2.</p>
<p>If r=4, then the lower prime is (6n+4)-1 = 6n+3 = 3(2n+1). Following the same logic as r=2, this contradicts our assumption that this is a prime pair. Hence, r cannot be 4 as well.</p>
<p>This leaves the only possibility that r=0 (since r cannot be greater than 5), which means that x is a multiple of 6.</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.ocf.berkeley.edu/~wwu/riddles/easy.shtml](https://www.ocf.berkeley.edu/~wwu/riddles/easy.shtml) -->

Prime pairs are 2 primes that are exactly 2 apart (e.g. 17 and 19). Prove that the number between a prime pair is always divisible by 6.
---

Without loss of generality, let us call the number between 2 prime pairs x. Take r to be the remainder of x after dividing by 6. Notice that x = 6n+r for some non-negative integer n.

To show that x is a multiple of 6, we need to show that r = 0. We shall eliminate the following possibilities:

1. r = 1, 3, or 5  
2. r = 2  
3. r = 4

Consider the situation where r is odd. Since 6n is always even, x will be odd if r is odd, then  x-1 and x+1—our twin primes—must be even. This is impossible because there is only one even prime: 2. Hence, we can eliminate the possibility that r = 1, 3, or 5.

If r=2, then the higher prime is (6n+2)+1 = 6n+3 = 3(2n+1). Since 2n+1 is an integer that is greater than 1, then the higher prime is a multiple of 3 that isn’t 3, which contradicts our initial assumption that this is a prime pair. Hence, r cannot be 2.

If r=4, then the lower prime is (6n+4)-1 = 6n+3 = 3(2n+1). Following the same logic as r=2, this contradicts our assumption that this is a prime pair. Hence, r cannot be 4 as well.

This leaves the only possibility that r=0 (since r cannot be greater than 5), which means that x is a multiple of 6.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
