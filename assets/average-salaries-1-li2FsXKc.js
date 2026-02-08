const e={slug:"average-salaries-1",metadata:{id:"puzzle-19",title:"Average Salaries 1",difficulty:{concepts:"medium",reasoning:"medium"},concepts:["cryptography"],tags:["has-solution"],credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",nextPuzzle:"average-salaries-2",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",preview:"There’s a global pandemic going on, so everyone is working from home. During this time, 12 employees with similar roles wonder if there are any large salary...",websitePreview:"There’s a global pandemic going on, so everyone is working from home. During this time, 12 employees with similar roles wonder if there are any large salary..."},content:`<p>There’s a global pandemic going on, so everyone is working from home. During this time, 12 employees with similar roles wonder if there are any large salary discrepancies between them, and want to calculate their average salary. However, they each don’t want to share their own salaries, since it’ll likely stir up office politics. How can they find their average salary through email? They can’t use additional help (e.g. another person, or a computer program).</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The number of coworkers doesn’t matter, so long as there are at least 3. With only 2 employees, both of them can reverse engineer the other person’s salary from the average.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>If you’d like a simpler version of the puzzle, you may assume the employees can meet in-person and use any tools at their disposal. Maybe one of your solutions can be translated into an email-only solution.</p><details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Here’s a solution that will work if the employees are meeting in-person. Everyone takes a piece of paper and writes their salary down. They fold up the paper and add it into a pile. Someone can sum up the salaries and divide by the number of people to get the average.</p><p>This, however, still reveals the individual salaries, you just don’t know who it belongs to. For a bit of additional security, the employees can each come up with a random number, which we’ll call <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>. Then they add in 2 pieces of paper with numbers on each of them:</p><ol>
<li>Their salary + <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span></li>
<li><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mo>−</mo><mi>X</mi></mrow><annotation>-X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span></li>
</ol><p>For example, if someone’s salary is $3500, and their random number is $2050, they will put in 2 pieces of paper that say $5550 and -$2050.</p><p>This way, it’s impossible to find out the actual salaries since we can’t match the negative random numbers to the summed values. The total sum of numbers in the pile is still the same, allowing us to find the average.</p></div></details></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint: Examining A Semi-Working Solution</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>After some discusson in a video call, someone comes up with the idea:</p><ol>
<li>Number the employees them 1 to 12.</li>
<li>Employee 1 emails his salary to employee 2.</li>
<li>Employee 2 adds his salary to employee 1’s salary and emails the sum to employee 3.</li>
<li>Employee 3 does the same, sending the new sum to employee 4.</li>
<li>Repeat this process until employee 12 has everyone’s salaries. He then divides the sum by 12 to get the average salary.</li>
</ol><p>“Wait,” someone else interrupts. “Then wouldn’t employee 2 know employee 1’s salary?”</p><p>“Oh, right. I didn’t think about that.”</p><p>Is there a way we can come up with a solution that doesn’t reveal anyone’s salary?</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>They can get their average salaries with these steps:</p><ol>
<li>Number the employees from 1 to 12.</li>
<li>Employee 1 comes up with a random number, which we will call <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>, and adds his salary to it. He emails this sum to employee 2.</li>
<li>Employee 2 adds his salary to the sum and emails the new sum to employee 3.</li>
<li>Employee 3 does the same, sending the new sum to employee 4.</li>
<li>Repeat this process until employee 12 has everyone’s salaries + <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>. He then sends this overall sum to employee 1.</li>
<li>Employee 1 now has the overall sum, which is the sum of everyone’s salaries + <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>. He subtracts <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> from it, leaving him with the sum of all their salaries. He then divides this sum by 12 to get their average salary.</li>
</ol><p>This way, any one employee cannot find out anyone else’s salary. We’re assuming that the employees are not colluding with each other. For example, if employees 6 and 8 discuss the numbers they received, they could find out employee 7’s salary.</p></div></details>`,rawContent:`
There’s a global pandemic going on, so everyone is working from home. During this time, 12 employees with similar roles wonder if there are any large salary discrepancies between them, and want to calculate their average salary. However, they each don’t want to share their own salaries, since it’ll likely stir up office politics. How can they find their average salary through email? They can’t use additional help (e.g. another person, or a computer program).

:::hint
The number of coworkers doesn’t matter, so long as there are at least 3. With only 2 employees, both of them can reverse engineer the other person’s salary from the average.
:::

::::hint
If you’d like a simpler version of the puzzle, you may assume the employees can meet in-person and use any tools at their disposal. Maybe one of your solutions can be translated into an email-only solution.

:::solution
Here’s a solution that will work if the employees are meeting in-person. Everyone takes a piece of paper and writes their salary down. They fold up the paper and add it into a pile. Someone can sum up the salaries and divide by the number of people to get the average.

This, however, still reveals the individual salaries, you just don’t know who it belongs to. For a bit of additional security, the employees can each come up with a random number, which we’ll call $X$. Then they add in 2 pieces of paper with numbers on each of them:

1. Their salary + $X$
2. $-X$

For example, if someone’s salary is \\$3500, and their random number is \\$2050, they will put in 2 pieces of paper that say \\$5550 and -\\$2050.

This way, it’s impossible to find out the actual salaries since we can’t match the negative random numbers to the summed values. The total sum of numbers in the pile is still the same, allowing us to find the average.
:::
::::

:::hint[Hint: Examining A Semi-Working Solution]
After some discusson in a video call, someone comes up with the idea:

1. Number the employees them 1 to 12.
2. Employee 1 emails his salary to employee 2.
3. Employee 2 adds his salary to employee 1’s salary and emails the sum to employee 3.
4. Employee 3 does the same, sending the new sum to employee 4.
5. Repeat this process until employee 12 has everyone’s salaries. He then divides the sum by 12 to get the average salary.

“Wait,” someone else interrupts. “Then wouldn’t employee 2 know employee 1’s salary?”

“Oh, right. I didn’t think about that.”

Is there a way we can come up with a solution that doesn’t reveal anyone’s salary?
:::

:::solution
They can get their average salaries with these steps:

1. Number the employees from 1 to 12.
2. Employee 1 comes up with a random number, which we will call $X$, and adds his salary to it. He emails this sum to employee 2.
3. Employee 2 adds his salary to the sum and emails the new sum to employee 3.
4. Employee 3 does the same, sending the new sum to employee 4.
5. Repeat this process until employee 12 has everyone’s salaries + $X$. He then sends this overall sum to employee 1.
6. Employee 1 now has the overall sum, which is the sum of everyone’s salaries + $X$. He subtracts $X$ from it, leaving him with the sum of all their salaries. He then divides this sum by 12 to get their average salary.

This way, any one employee cannot find out anyone else’s salary. We’re assuming that the employees are not colluding with each other. For example, if employees 6 and 8 discuss the numbers they received, they could find out employee 7’s salary.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
