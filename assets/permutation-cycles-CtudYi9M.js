const e={slug:"permutation-cycles",metadata:{id:"expedition-draft-8",title:"Permutation Cycles",description:"[PLACEHOLDER - Add expedition description]",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",published:!1},content:`<p>A permutation is an arrangement of objects in a specific order. For example, if we have the letters ABCDE, then BADEC is a permutation of it. So are DBCEA, EDCBA, or even ABCDE.</p>
<p>Instead of thinking of permutation as an object, we can think of it as a process of rearrangement. If instead of ABCDE, we had the numbers 12345, then BADEC and 21453 would be the result of the same permutation.</p>
<p>How can we represent this rearrangement process? Let’s take the permutation BADEC and put it over the original sequence ABCDE.</p>
<p>ABCDE<br>
BADEC</p>
<p>We notice that if we look at the ordering, A from the first row is “mapped” to B in the second row. B from the first row is mapped to A in the second row. In a sense, this permutation has swapped A and B, and we can represent this as (A B). Likewise, we have C mapped to D, D mapped to E, and E mapped to C, forming a cycle. We can represent this as (C D E).</p>
<p>Putting it all together, we can represent this permutation as (A B)(C D E). This representation is called the cycle notation of a permutation.</p>
<p>Let’s try other permutations.</p>
<p>ABCDE<br>
CDBAE</p>
<p>A gets mapped to C, C gets mapped to B, B gets mapped to D, and D gets mapped to A. This gives us (A C B D). E remains in the same position, so it’s in its own cycle (E). Thus the cyclic notation of this permutation is (A C B D)(E). We can also remove cycles of only 1 element, since it is easily understood, to get (A C B D).</p>
<p>In fact, all permutations can be represented as cycles, which we can prove by looking at any chain of mappings. Start from any element A, and assume it maps to B. B maps to C, C maps to D, and so on. We stop when the chain eventually reaches an element that has appeared earlier in the chain.</p>
<p>It cannot be an endless chain of elements because there is a finite number of elements. So what is the duplicated element at the end of the chain? It cannot be B, C, D, … because that would imply a duplicated element in the permutation. To illustrate this point, consider the chain A → B → C → D → E → F → G → C. Here, we have shown that B and G point to C, meaning that C will appear twice in the final permutation, which is impossible. So the only possibility is that this chain ends on the same element, forming a cycle.</p>
<p>To summarise, we can get the cycle notation of any permutation with the following steps.</p>
<ol>
<li>Begin with any element and form a chain based on its mapping. Once you have a loop, take out those elements and write the elements down in to form a cycle. Be sure to follow the same order as the chain of letters.</li>
<li>Repeat this process with the remaining elements.</li>
<li>Combine all the cycles.</li>
</ol>
<p>Try it for the following permutation from ABCDEFGH to EHFDBCGA.</p>
<p>[Answer]</p>
<p>Let’s put the letters above each other.</p>
<p>ABCDEFGH<br>
EHFDBCGA</p>
<p>The first cycle is A → E → B → H → A, forming (A E B H). Let’s cross out those letters and continue this process.</p>
<p><del>AB</del>CD<del>E</del>FG<del>H</del><br>
<del>EH</del>FD<del>B</del>CG<del>A</del></p>
<p>The next cycle we can find is C → F → C, forming (C F). The remaining letters map to themselves, forming their own cycles. This leaves us with (A E B H)(C F)(D)(G), or (A E B H)(C F). Note that you can also end up with solutions like, (H A E B)(C F), (B H A E)(F C), and so on, since you could get a different starting point for each cycle.</p>
<p>Thinking of permutations as a set of cycles can be useful for solving certain types of puzzles. Look out for puzzles that involve a permutation, shuffle, or mapping of one element to another.</p>`,rawContent:`A permutation is an arrangement of objects in a specific order. For example, if we have the letters ABCDE, then BADEC is a permutation of it. So are DBCEA, EDCBA, or even ABCDE.

Instead of thinking of permutation as an object, we can think of it as a process of rearrangement. If instead of ABCDE, we had the numbers 12345, then BADEC and 21453 would be the result of the same permutation.

How can we represent this rearrangement process? Let’s take the permutation BADEC and put it over the original sequence ABCDE.

ABCDE  
BADEC

We notice that if we look at the ordering, A from the first row is “mapped” to B in the second row. B from the first row is mapped to A in the second row. In a sense, this permutation has swapped A and B, and we can represent this as (A B). Likewise, we have C mapped to D, D mapped to E, and E mapped to C, forming a cycle. We can represent this as (C D E).

Putting it all together, we can represent this permutation as (A B)(C D E). This representation is called the cycle notation of a permutation.

Let’s try other permutations.

ABCDE  
CDBAE

A gets mapped to C, C gets mapped to B, B gets mapped to D, and D gets mapped to A. This gives us (A C B D). E remains in the same position, so it’s in its own cycle (E). Thus the cyclic notation of this permutation is (A C B D)(E). We can also remove cycles of only 1 element, since it is easily understood, to get (A C B D).

In fact, all permutations can be represented as cycles, which we can prove by looking at any chain of mappings. Start from any element A, and assume it maps to B. B maps to C, C maps to D, and so on. We stop when the chain eventually reaches an element that has appeared earlier in the chain.

It cannot be an endless chain of elements because there is a finite number of elements. So what is the duplicated element at the end of the chain? It cannot be B, C, D, … because that would imply a duplicated element in the permutation. To illustrate this point, consider the chain A → B → C → D → E → F → G → C. Here, we have shown that B and G point to C, meaning that C will appear twice in the final permutation, which is impossible. So the only possibility is that this chain ends on the same element, forming a cycle.

To summarise, we can get the cycle notation of any permutation with the following steps.

1. Begin with any element and form a chain based on its mapping. Once you have a loop, take out those elements and write the elements down in to form a cycle. Be sure to follow the same order as the chain of letters.  
2. Repeat this process with the remaining elements.  
3. Combine all the cycles.

Try it for the following permutation from ABCDEFGH to EHFDBCGA.

\\[Answer\\]

Let’s put the letters above each other.

ABCDEFGH  
EHFDBCGA

The first cycle is A → E → B → H → A, forming (A E B H). Let’s cross out those letters and continue this process.

~~AB~~CD~~E~~FG~~H~~  
~~EH~~FD~~B~~CG~~A~~

The next cycle we can find is C → F → C, forming (C F). The remaining letters map to themselves, forming their own cycles. This leaves us with (A E B H)(C F)(D)(G), or (A E B H)(C F). Note that you can also end up with solutions like, (H A E B)(C F), (B H A E)(F C), and so on, since you could get a different starting point for each cycle.

Thinking of permutations as a set of cycles can be useful for solving certain types of puzzles. Look out for puzzles that involve a permutation, shuffle, or mapping of one element to another.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
