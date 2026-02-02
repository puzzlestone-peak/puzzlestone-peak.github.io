const e={slug:"marbles-jars-1",metadata:{id:"puzzle-draft-1",title:"Marbles & Jars 1",published:!1,difficulty:"medium",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"While travelling through the jungle, a tribe captures you for trespassing on their sacred land. As part of their customs, you’re given 50 white marbles, 50...",websitePreview:"While travelling through the jungle, a tribe captures you for trespassing on their sacred land. As part of their customs, you’re given 50 white marbles, 50..."},content:`


<p>While travelling through the jungle, a tribe captures you for trespassing on their sacred land. As part of their customs, you’re given 50 white marbles, 50 black marbles, and 2 jars. You can distribute the marbles however you like, so long as all the marbles end up in 1 of two jars. After that, you will be blindfolded and the marbles in the two jars will be stirred. You’ll be presented with one of the jars at random, and you are to pick one marble out of it.</p>
<p>If the marble you pull out is white, it means that you are pure of heart and they will let you go. If the marble you pull out is black, it means that you have tainted their sacred land with your darkness and you will be put to death. What arrangement of marbles in the jars will maximise your likelihood of survival?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can do better than 0.5 chance.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>If there are 50 marbles in each jar, your chance of picking a white marble will always be 0.5.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Can you put marbles into one of the jars such that your chance of picking a white marble is 1 if you’re assigned that particular jar?</p></div></details>
<hr>
<p>Put 1 white marble into a jar, and the rest of the marbles into the other. This will place your chances of getting a white marble at (0.51)+(0.54999)=7499, or about 74.5%.</p>
<p>If you’ve gotten this far, you’ve practically solved this puzzle. However, for those who want to properly prove the optimality of the solution, we can dive deeper into the math.</p>
<p>Let’s define some variables as such:<br>
W1 = the number of white marbles in jar 1.<br>
B1 = the number of black marbles in jar 1.<br>
W2 = the number of white marbles in jar 2.<br>
B2 = the number of black marbles in jar 2.</p>
<p>We have some restrictions on these variables:<br>
W1 + W2 = 50<br>
B1 + B2 = 50<br>
W1 + B1 >= 1<br>
W2 + B2 >= 1</p>
<p>Our probability of getting out alive is (0.5 * W1/(W1+B1)) + (0.5 * W2/(W2+B2)).</p>
<p>Firstly, let’s try the approach of having 50 marbles in each jar, with the only thing we’re varying is the number of white and black marbles in each jar.</p>
<p>This adds the following constraints:<br>
W1 + B1 = 50<br>
W2 + B2 = 50<br>
W2 = 50 - W1</p>
<p>Substituting this into our earlier function, we get<br>
(0.5 * W1/50) + (0.5 * (50-W1)/50) = 50/100 = 0.5</p>
<p>If we have 50 marbles in each jar, we will always have a 50% chance of surviving, no matter what the distribution is! However, as we saw from the solution, we can do better than 50%.</p>
<p>Unfortunately, proving the solution numerically would</p>
<p>[we need a way to prove this]</p>
<p><img alt=""><br>
(Stolen from <a href="https://math.stackexchange.com/a/2478574">https://math.stackexchange.com/a/2478574</a>, but we should generate our own picture).</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.ocf.berkeley.edu/~wwu/riddles/easy.shtml](https://www.ocf.berkeley.edu/~wwu/riddles/easy.shtml) -->

While travelling through the jungle, a tribe captures you for trespassing on their sacred land. As part of their customs, you’re given 50 white marbles, 50 black marbles, and 2 jars. You can distribute the marbles however you like, so long as all the marbles end up in 1 of two jars. After that, you will be blindfolded and the marbles in the two jars will be stirred. You’ll be presented with one of the jars at random, and you are to pick one marble out of it.

If the marble you pull out is white, it means that you are pure of heart and they will let you go. If the marble you pull out is black, it means that you have tainted their sacred land with your darkness and you will be put to death. What arrangement of marbles in the jars will maximise your likelihood of survival?

:::hint
You can do better than 0.5 chance.
:::

:::hint
If there are 50 marbles in each jar, your chance of picking a white marble will always be 0.5.
:::

:::hint
Can you put marbles into one of the jars such that your chance of picking a white marble is 1 if you’re assigned that particular jar?
:::

---

Put 1 white marble into a jar, and the rest of the marbles into the other. This will place your chances of getting a white marble at (0.51)+(0.54999)=7499, or about 74.5%.

If you’ve gotten this far, you’ve practically solved this puzzle. However, for those who want to properly prove the optimality of the solution, we can dive deeper into the math.

Let’s define some variables as such:  
W1 = the number of white marbles in jar 1.  
B1 = the number of black marbles in jar 1.  
W2 = the number of white marbles in jar 2.  
B2 = the number of black marbles in jar 2.

We have some restrictions on these variables:  
W1 + W2 = 50  
B1 + B2 = 50  
W1 + B1 >= 1  
W2 + B2 >= 1

Our probability of getting out alive is (0.5 * W1/(W1+B1)) + (0.5 * W2/(W2+B2)).

Firstly, let’s try the approach of having 50 marbles in each jar, with the only thing we’re varying is the number of white and black marbles in each jar.

This adds the following constraints:  
W1 + B1 = 50  
W2 + B2 = 50  
W2 = 50 - W1

Substituting this into our earlier function, we get  
 (0.5 * W1/50) + (0.5 * (50-W1)/50) = 50/100 = 0.5

If we have 50 marbles in each jar, we will always have a 50% chance of surviving, no matter what the distribution is! However, as we saw from the solution, we can do better than 50%.

Unfortunately, proving the solution numerically would 

\\[we need a way to prove this\\]

![](data:image/png;base64,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)  
(Stolen from [https://math.stackexchange.com/a/2478574](https://math.stackexchange.com/a/2478574), but we should generate our own picture).
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
