const s={slug:"average-salaries-2",metadata:{id:"puzzle-28",title:"Average Salaries 2",difficulty:"hard",credit:"Original question by Puzzlestone Peak.",previousPuzzle:"average-salaries-1",dateCreated:"-",lastUpdated:"-",changelog:"-",concepts:[],preview:"Back in [[puzzle ]], 12 employees came up with a method to find out their average salary without revealing their individual salaries to anyone. Here’s the...",websitePreview:"Back in [[puzzle ]], 12 employees came up with a method to find out their average salary without revealing their individual salaries to anyone. Here’s the..."},content:`<p>Back in <a href="/puzzle/average-salaries-1">Average Salaries 1</a>, 12 employees came up with a method to find out their average salary without revealing their individual salaries to anyone. Here’s the method they came up with:</p>
<details class="content-block spoiler-block" data-type="spoiler"><summary class="spoiler-label">Spoiler: Solution to the previous puzzle</summary><div class="spoiler-content markdown-content prose max-w-none px-4 py-4 space-y-4"><ol>
<li>Number the employees them 1 to 12.</li>
<li>Employee 1 comes up with a random number, which we will call <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>, and adds his salary to it. He emails this sum to employee 2.</li>
<li>Employee 2 adds his salary to the sum and emails the new sum to employee 3.</li>
<li>Employee 3 does the same, sending the new sum to employee 4.</li>
<li>Repeat this process until employee 12 has everyone’s salaries + <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>. He then sends this overall sum to employee 1.</li>
<li>Employee 1 now has the overall sum, which is the sum of everyone’s salaries + <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>. He subtracts <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>X</mi></mrow><annotation>X</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> from it, leaving him with the sum of all their salaries. He then divides this sum by 12 to get their average salary.</li>
</ol></div></details>
<p>However, before they begin, one employee interrupts. “Wait! I’m number 7. What if number 6 and number 8 collude? Employee 6 can tell employee 8 what he sent me, then employee 8 can calculate the difference to get my salary.”</p>
<p>The employees pause to think about it. With their current solution, if any 2 employees collude and reveal the contents of their emails, they can find out someone else’s salary. That’s not great.</p>
<p>Is there a way we can do better? Can we make it such that if any 10 employees try to collude, they still can’t get anyone’s salary?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint: Why 10 employees, not 11?</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>No matter what method you use to come up with the average salary, any 11 employees colluding can <strong>always</strong> get the 12th employees salary.</p><p>Let’s assume the 12 employees find out their average salary <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msub><mi>S</mi><mn>1</mn></msub></mrow><annotation>S_1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>.</p><p>If any 11 employees are colluding, they can use the same method to find out their average salary <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msub><mi>S</mi><mn>2</mn></msub></mrow><annotation>S_2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>.</p><p>Then the 12th employee’s salary is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>12</mn><msub><mi>S</mi><mn>1</mn></msub><mo>−</mo><mn>11</mn><msub><mi>S</mi><mn>2</mn></msub></mrow><annotation>12S_1 - 11S_2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord">12</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord">11</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>. This is possible no matter what method you use to get the average salary.</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Just as before, the number of coworkers doesn’t matter. In general, for <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation>n</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> employees, is there a method that doesn’t allow any <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><annotation>n-2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> employees to get another employee’s salary?</p></div></details>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint: Examining A Semi-Working Solution</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>After some more discusson in a video call, someone comes up with another solution. Instead of sending the email in a loop from 1 to 12, then back to 1, they will send it in 2 loops instead.</p><p>This time, every employee comes up with a random number that they’ll keep secret.</p><ol>
<li>Number the employees them 1 to 12.</li>
<li>Employee 1 emails his salary and his random number to employee 2.</li>
<li>Employee 2 adds his salary and his random number to employee 1’s salary and emails the sum to employee 3.</li>
<li>Employee 3 does the same, sending the new sum to employee 4.</li>
<li>Repeat this process until employee 12 sends the sum back to employee 1.</li>
<li>This time, employee 1 deducts his random number from the sum and sends the new sum to employee 2.</li>
<li>Employee 2 deducts his random number and sends the new sum to employee 3.</li>
<li>This repeats until the sum reaches employee 12. Employee 12 deducts his random number, then divides the final sum by 12 to get the average salary.</li>
</ol><p>Let <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msub><mi>s</mi><mi>i</mi></msub></mrow><annotation>s_i</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> be the <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mi>i</mi><mtext>th</mtext></msup></mrow><annotation>i^\\text{th}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord mathnormal">i</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord text mtight"><span class="mord mtight">th</span></span></span></span></span></span></span></span></span></span></span></span> employee’s salary, and <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msub><mi>r</mi><mi>i</mi></msub></mrow><annotation>r_i</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> be the <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mi>i</mi><mtext>th</mtext></msup></mrow><annotation>i^\\text{th}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord mathnormal">i</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord text mtight"><span class="mord mtight">th</span></span></span></span></span></span></span></span></span></span></span></span> employee’s random number. Our total sum would be:</p><p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>12</mn></msubsup><mo>(</mo><msub><mi>s</mi><mi>i</mi></msub><mo>+</mo><msub><mi>r</mi><mi>i</mi></msub><mo>)</mo><mo>−</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>12</mn></msubsup><msub><mi>r</mi><mi>i</mi></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>12</mn></msubsup><mo>(</mo><msub><mi>s</mi><mi>i</mi></msub><mo>)</mo></mrow><annotation>\\sum_{i=1}^{12} (s_i + r_i) - \\sum_{i=1}^{12} r_i = \\sum_{i=1}^{12} (s_i)</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.2537em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.954em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">12</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.2537em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.954em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">12</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2537em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.954em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">12</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></p><p>The final sum divided by 12 gives the average salary, as expected.</p><p>Employee 7 is not convinced. “Employee 6 and 8 can still figure out my salary! On both passes, they can see how much I’ve added and deducted. They can add the differences up to get my salary anyway.”</p><p>Back to the drawing board.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Let’s imagine a sequence of emails that goes through all the employees in some specified order. As before, each time an employee receives a cumulative sum, modifies it, then emails it on to the next employee.</p><p>The semi-working solution earlier certainly didn’t work, but there’s a seed of a solution in there. Let’s say for a particular employee X, the email chain passes through him three times.</p><ol>
<li>The first time, employee A emails the sum to employee X. Employee X adds 1000 to the number and emails it to employee B.</li>
<li>The second time, employee C emails the sum to employee X. Employee X subtracts 2500 and emails it to employee D.</li>
<li>The third time, employee E emails the sum to employee X. Employee X adds 7000 and emails it to employee F.</li>
</ol><p>The total sum of his changes amounts to his pay of $5500.</p><p>However, imagine that you’re another employee trying to get that previous employee’s salary. If you only got access to 1 or 2 of the numbers (1000, -2500, or 7000), you still don’t have any information as to that employee’s salary. You need all the numbers to compute the person’s salary.</p><p>In fact, you need access to employee A, B, C, D, E, and F to get all these numbers. If any one of them refuse to collude with you, you can’t determine employee X’s salary.</p><p>In general, for any employee X, all the employees that he sends and receives email from must be colluding in order to find out employee X’s salary. If any 1 of them doesn’t cooperate, then his salary remains unknown.</p><p>That gives us an idea of the strategy:</p><ul>
<li>
<p>The email path must go through all the employees such that for any 2 employees X and Y, the email path must go through them.</p>
</li>
<li>
<p>For any employee X, all his contributions to the sum must add up to his salary. The individual contributions can be positive or negative.</p>
</li>
</ul><p>But how do we determine what this path is? Let’s start with a scenario with 5 employees. Let’s represent it with a graph: each vertex represents an employee, and we draw edges between all pairs of employees. We want to draw a path that covers all edges.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>In this example, we can traverse all the edges with the path:</p><p>1 → 2 → 3 → 4 → 5 → 1 → 3 → 5 → 2 → 4 → 1</p><p>This is called an Eulerian path: a path that traverses all the edges exactly once. The length of the path is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mrow><mi>n</mi><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></mfrac><mo>=</mo><mn>10</mn></mrow><annotation>\\frac{n(n-1)}{2} = 10</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">10</span></span></span></span>: the total number of edges.</p><p>:::note{type=“info”}[Eulerian Graphs]
If a graph has only vertex with even degrees, it must have an Eulerian circuit: a path that traverses every edge exactly once, ending on same vertex.</p><p>If a graph has exactly 2 vertices with odd degrees, it must have an Eulerian path: a path that traverses every edge exactly once. This path must start on one of the vertices with odd degrees, and end on the other vertex with odd degree.
:::</p><p>However, this only applies to situations with an odd number of employees. How about when there are an even number of employees? Let’s take a look at a situation with 6 employees.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Here, we have 6 vertices of degree 5, which means there isn’t an Eulerian path. However, if we allow some pairs of employees to email each other more than once, we can add some repeated edges, marked in blue.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>With our additional edges, we now have 4 vertices of degree 6, and 2 vertices of degree 5. We can start at employee 1 and end at employee 6. This is one of the possible Eulerian paths:</p><p>1 → 2 → 3 → 4 → 5 → 6 → 1 → 3 → 5 → 1 → 4 → 6 → 2 → 4 → 5 → 2 → 3 → 6</p><p>The length of the path is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mrow><mi>n</mi><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mo>(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></mfrac><mo>=</mo><mn>17</mn></mrow><annotation>\\frac{n(n-1)}{2} + \\frac{(n - 2)}{2}= 17</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">17</span></span></span></span>, where the second term accounts for the additional blue edges.</p><p>To summarise, the minimum length of this path (and thus the minimum number of emails sent) is given as:</p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mo>{</mo><mtable><mtr><mtd><mfrac><mrow><mi>n</mi><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></mfrac></mtd><mtd><mrow><mtext>if </mtext><mi>n</mi><mtext> is even</mtext></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>n</mi><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mo>(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></mfrac></mrow></mtd><mtd><mrow><mtext>if </mtext><mi>n</mi><mtext> is odd</mtext></mrow></mtd></mtr></mtable></mrow><annotation>\\begin{cases}
  \\frac{n(n-1)}{2} &#x26;\\text{if } n \\text{ is even} \\\\
  \\frac{n(n-1)}{2} + \\frac{(n - 2)}{2} &#x26;\\text{if } n \\text{ is odd}
\\end{cases}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:3em;vertical-align:-1.25em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mord"><span class="mtable"><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.692em;"><span style="top:-3.692em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.192em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:1em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.692em;"><span style="top:-3.692em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord text"><span class="mord">if </span></span><span class="mord mathnormal">n</span><span class="mord text"><span class="mord"> is even</span></span></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:3.01em;"></span><span class="mord"><span class="mord text"><span class="mord">if </span></span><span class="mord mathnormal">n</span><span class="mord text"><span class="mord"> is odd</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.192em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span><p>For our situation with 12 employees, this will be our graph.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>A valid Eulerian path would be:</p><p>1 → 2 → 3 → 1 → 4 → 2 → 3 → 4 → 5 → 1 → 6 → 2 → 5 → 3 → 6 → 4 → 5 → 6 → 7 → 1 → 8 → 2 → 7 → 3 → 8 → 4 → 7 → 5 → 8 → 6 → 7 → 8 → 9 → 1 → 10 → 2 → 9 → 3 → 10 → 4 → 9 → 5 → 10 → 6 → 9 → 7 → 10 → 8 → 9 → 10 → 11 → 1 → 12 → 2 → 11 → 3 → 12 → 4 → 11 → 5 → 12 → 6 → 11 → 7 → 12 → 8 → 11 → 9 → 12 → 10 → 11 → 12</p><p>The actual path is not important, but the optimal length of such a sequence is 71 emails.</p><p>With our valid email path, what each employee needs to do next is to see how many times they appear in the path, then split their salary into that many numbers.</p><p>Let’s use some examples.</p><p>Employee 4 shows up in the path 6 times. If he makes $4000, he can simply add 1000 to the sum each time it comes to him.</p><p>Employee 1 shows up in the path 5 times. If he makes $6200, he can:</p><ol>
<li>Send 500 to the next person (since the path starts with him).</li>
<li>Add 7000 the second time the email comes to him.</li>
<li>Add 1234 the third time</li>
<li>Subtract 10,000 the fourth time</li>
<li>Add 7466 the final time.</li>
</ol><p>If every employee does this, then the final sum at the end of the email path will be the sum of all employees’ salaries. They can divide this sum by 12 to get the average salary.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
Back in [Average Salaries 1](puzzle:average-salaries-1), 12 employees came up with a method to find out their average salary without revealing their individual salaries to anyone. Here’s the method they came up with:

:::spoiler[Spoiler: Solution to the previous puzzle]
1. Number the employees them 1 to 12.
2. Employee 1 comes up with a random number, which we will call $X$, and adds his salary to it. He emails this sum to employee 2.
3. Employee 2 adds his salary to the sum and emails the new sum to employee 3.
4. Employee 3 does the same, sending the new sum to employee 4.
5. Repeat this process until employee 12 has everyone’s salaries + $X$. He then sends this overall sum to employee 1.
6. Employee 1 now has the overall sum, which is the sum of everyone’s salaries + $X$. He subtracts $X$ from it, leaving him with the sum of all their salaries. He then divides this sum by 12 to get their average salary.
:::

However, before they begin, one employee interrupts. “Wait! I’m number 7. What if number 6 and number 8 collude? Employee 6 can tell employee 8 what he sent me, then employee 8 can calculate the difference to get my salary.”

The employees pause to think about it. With their current solution, if any 2 employees collude and reveal the contents of their emails, they can find out someone else’s salary. That’s not great.

Is there a way we can do better? Can we make it such that if any 10 employees try to collude, they still can’t get anyone’s salary?

:::hint[Hint: Why 10 employees, not 11?]
No matter what method you use to come up with the average salary, any 11 employees colluding can **always** get the 12th employees salary.

Let’s assume the 12 employees find out their average salary $S_1$.

If any 11 employees are colluding, they can use the same method to find out their average salary $S_2$.

Then the 12th employee’s salary is $12S_1 - 11S_2$. This is possible no matter what method you use to get the average salary.
:::

:::hint
Just as before, the number of coworkers doesn’t matter. In general, for $n$ employees, is there a method that doesn’t allow any $n-2$ employees to get another employee’s salary?
:::

:::hint[Hint: Examining A Semi-Working Solution]
After some more discusson in a video call, someone comes up with another solution. Instead of sending the email in a loop from 1 to 12, then back to 1, they will send it in 2 loops instead.

This time, every employee comes up with a random number that they’ll keep secret.

1. Number the employees them 1 to 12.
2. Employee 1 emails his salary and his random number to employee 2.
3. Employee 2 adds his salary and his random number to employee 1’s salary and emails the sum to employee 3.
4. Employee 3 does the same, sending the new sum to employee 4.
5. Repeat this process until employee 12 sends the sum back to employee 1.
6. This time, employee 1 deducts his random number from the sum and sends the new sum to employee 2.
7. Employee 2 deducts his random number and sends the new sum to employee 3.
8. This repeats until the sum reaches employee 12. Employee 12 deducts his random number, then divides the final sum by 12 to get the average salary.

Let $s_i$ be the $i^\\text{th}$ employee’s salary, and $r_i$ be the $i^\\text{th}$ employee’s random number. Our total sum would be:

$\\sum_{i=1}^{12} (s_i + r_i) - \\sum_{i=1}^{12} r_i = \\sum_{i=1}^{12} (s_i)$

The final sum divided by 12 gives the average salary, as expected.

Employee 7 is not convinced. “Employee 6 and 8 can still figure out my salary! On both passes, they can see how much I’ve added and deducted. They can add the differences up to get my salary anyway.”

Back to the drawing board.
:::

::::solution
Let’s imagine a sequence of emails that goes through all the employees in some specified order. As before, each time an employee receives a cumulative sum, modifies it, then emails it on to the next employee.

The semi-working solution earlier certainly didn’t work, but there’s a seed of a solution in there. Let’s say for a particular employee X, the email chain passes through him three times.

1. The first time, employee A emails the sum to employee X. Employee X adds 1000 to the number and emails it to employee B.
2. The second time, employee C emails the sum to employee X. Employee X subtracts 2500 and emails it to employee D.
2. The third time, employee E emails the sum to employee X. Employee X adds 7000 and emails it to employee F.

The total sum of his changes amounts to his pay of \\$5500.

However, imagine that you’re another employee trying to get that previous employee’s salary. If you only got access to 1 or 2 of the numbers (1000, -2500, or 7000), you still don’t have any information as to that employee’s salary. You need all the numbers to compute the person’s salary.

In fact, you need access to employee A, B, C, D, E, and F to get all these numbers. If any one of them refuse to collude with you, you can’t determine employee X’s salary.

In general, for any employee X, all the employees that he sends and receives email from must be colluding in order to find out employee X’s salary. If any 1 of them doesn’t cooperate, then his salary remains unknown.

That gives us an idea of the strategy:

- The email path must go through all the employees such that for any 2 employees X and Y, the email path must go through them.

- For any employee X, all his contributions to the sum must add up to his salary. The individual contributions can be positive or negative.

But how do we determine what this path is? Let’s start with a scenario with 5 employees. Let’s represent it with a graph: each vertex represents an employee, and we draw edges between all pairs of employees. We want to draw a path that covers all edges.

:::dynamic
\`\`\`yaml
use: '#diagram'
props:
  n: 5
  maxWidth: 300
\`\`\`
:::

In this example, we can traverse all the edges with the path:

1 → 2 → 3 → 4 → 5 → 1 → 3 → 5 → 2 → 4 → 1

This is called an Eulerian path: a path that traverses all the edges exactly once. The length of the path is $\\frac{n(n-1)}{2} = 10$: the total number of edges.

:::note{type=“info”}[Eulerian Graphs]
If a graph has only vertex with even degrees, it must have an Eulerian circuit: a path that traverses every edge exactly once, ending on same vertex.

If a graph has exactly 2 vertices with odd degrees, it must have an Eulerian path: a path that traverses every edge exactly once. This path must start on one of the vertices with odd degrees, and end on the other vertex with odd degree.
:::

However, this only applies to situations with an odd number of employees. How about when there are an even number of employees? Let’s take a look at a situation with 6 employees.

:::dynamic
\`\`\`yaml
use: '#diagram'
props:
  n: 6
  maxWidth: 350
\`\`\`
:::

Here, we have 6 vertices of degree 5, which means there isn’t an Eulerian path. However, if we allow some pairs of employees to email each other more than once, we can add some repeated edges, marked in blue.

:::dynamic
\`\`\`yaml
use: '#diagram'
props:
  n: 6
  maxWidth: 350
  showExtraPaths: true
\`\`\`
:::

With our additional edges, we now have 4 vertices of degree 6, and 2 vertices of degree 5. We can start at employee 1 and end at employee 6. This is one of the possible Eulerian paths:

1 → 2 → 3 → 4 → 5 → 6 → 1 → 3 → 5 → 1 → 4 → 6 → 2 → 4 → 5 → 2 → 3 → 6

The length of the path is $\\frac{n(n-1)}{2} + \\frac{(n - 2)}{2}= 17$, where the second term accounts for the additional blue edges.

To summarise, the minimum length of this path (and thus the minimum number of emails sent) is given as:

$$
\\begin{cases}
  \\frac{n(n-1)}{2} &\\text{if } n \\text{ is even} \\\\
  \\frac{n(n-1)}{2} + \\frac{(n - 2)}{2} &\\text{if } n \\text{ is odd}
\\end{cases}
$$

For our situation with 12 employees, this will be our graph.

:::dynamic
\`\`\`yaml
use: '#diagram'
props:
  n: 12
  showExtraPaths: true
\`\`\`
:::

A valid Eulerian path would be:

1 → 2 → 3 → 1 → 4 → 2 → 3 → 4 → 5 → 1 → 6 → 2 → 5 → 3 → 6 → 4 → 5 → 6 → 7 → 1 → 8 → 2 → 7 → 3 → 8 → 4 → 7 → 5 → 8 → 6 → 7 → 8 → 9 → 1 → 10 → 2 → 9 → 3 → 10 → 4 → 9 → 5 → 10 → 6 → 9 → 7 → 10 → 8 → 9 → 10 → 11 → 1 → 12 → 2 → 11 → 3 → 12 → 4 → 11 → 5 → 12 → 6 → 11 → 7 → 12 → 8 → 11 → 9 → 12 → 10 → 11 → 12

The actual path is not important, but the optimal length of such a sequence is 71 emails.

With our valid email path, what each employee needs to do next is to see how many times they appear in the path, then split their salary into that many numbers.

Let’s use some examples.

Employee 4 shows up in the path 6 times. If he makes $4000, he can simply add 1000 to the sum each time it comes to him.

Employee 1 shows up in the path 5 times. If he makes $6200, he can:
1. Send 500 to the next person (since the path starts with him).
2. Add 7000 the second time the email comes to him.
3. Add 1234 the third time
4. Subtract 10,000 the fourth time
5. Add 7466 the final time.

If every employee does this, then the final sum at the end of the email path will be the sum of all employees’ salaries. They can divide this sum by 12 to get the average salary.
::::


:::component[diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, width: _width, props } = options;
  const { n, showExtraPaths = false, maxWidth = 600 } = props || {};

  const width = Math.min(_width, maxWidth);
  const lineThickness = 2;
  const fontSize = 16;
  const labelOffset = 20;
  const canvasSize = width + lineThickness * 2;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const centerX = canvasSize / 2;
  const centerY = canvasSize / 2;
  const radius = Math.max(0, (width / 2) - labelOffset - fontSize / 2);

  const ctx = canvas.getContext('2d');
  const fgColor = api.getColor('foreground');
  const mutedColor = 'blue';
  const font = api.getFont('default');

  // Calculate point positions around the circle
  const points = [];
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2; // Start from top
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y, angle });
  }

  // Draw lines between all pairs of points
  ctx.strokeStyle = fgColor;
  ctx.lineWidth = lineThickness;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ctx.beginPath();
      ctx.moveTo(points[i].x, points[i].y);
      ctx.lineTo(points[j].x, points[j].y);
      ctx.stroke();
    }
  }

  // Draw extra arc paths if requested
  if (showExtraPaths) {
    ctx.strokeStyle = mutedColor;
    ctx.lineWidth = lineThickness;
    for (let i = 1; i < n - 1; i += 2) {
      const startAngle = points[i].angle;
      const endAngle = points[i + 1].angle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.stroke();
    }
  }

  // Draw and label points
  ctx.fillStyle = fgColor;
  const pointRadius = 5;

  for (let i = 0; i < n; i++) {
    // Draw point
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, pointRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw label
    const labelAngle = points[i].angle;
    const labelX = centerX + (radius + labelOffset) * Math.cos(labelAngle);
    const labelY = centerY + (radius + labelOffset) * Math.sin(labelAngle);

    ctx.font = \`\${fontSize}px \${font}\`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText((i + 1).toString(), labelX, labelY);
  }
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#diagram",props:{n:5,maxWidth:300},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/cryptography/average-salaries-2.md"},{type:"dynamic",mode:"component",componentId:"#diagram",props:{n:6,maxWidth:350},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/cryptography/average-salaries-2.md"},{type:"dynamic",mode:"component",componentId:"#diagram",props:{n:6,maxWidth:350,showExtraPaths:!0},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/cryptography/average-salaries-2.md"},{type:"dynamic",mode:"component",componentId:"#diagram",props:{n:12,showExtraPaths:!0},sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/cryptography/average-salaries-2.md"}],inlineComponents:{diagram:{id:"diagram",code:`function draw(options) {
  const { canvas, api, width: _width, props } = options;
  const { n, showExtraPaths = false, maxWidth = 600 } = props || {};

  const width = Math.min(_width, maxWidth);
  const lineThickness = 2;
  const fontSize = 16;
  const labelOffset = 20;
  const canvasSize = width + lineThickness * 2;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const centerX = canvasSize / 2;
  const centerY = canvasSize / 2;
  const radius = Math.max(0, (width / 2) - labelOffset - fontSize / 2);

  const ctx = canvas.getContext('2d');
  const fgColor = api.getColor('foreground');
  const mutedColor = 'blue';
  const font = api.getFont('default');

  // Calculate point positions around the circle
  const points = [];
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2; // Start from top
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y, angle });
  }

  // Draw lines between all pairs of points
  ctx.strokeStyle = fgColor;
  ctx.lineWidth = lineThickness;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ctx.beginPath();
      ctx.moveTo(points[i].x, points[i].y);
      ctx.lineTo(points[j].x, points[j].y);
      ctx.stroke();
    }
  }

  // Draw extra arc paths if requested
  if (showExtraPaths) {
    ctx.strokeStyle = mutedColor;
    ctx.lineWidth = lineThickness;
    for (let i = 1; i < n - 1; i += 2) {
      const startAngle = points[i].angle;
      const endAngle = points[i + 1].angle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.stroke();
    }
  }

  // Draw and label points
  ctx.fillStyle = fgColor;
  const pointRadius = 5;

  for (let i = 0; i < n; i++) {
    // Draw point
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, pointRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw label
    const labelAngle = points[i].angle;
    const labelX = centerX + (radius + labelOffset) * Math.cos(labelAngle);
    const labelY = centerY + (radius + labelOffset) * Math.sin(labelAngle);

    ctx.font = \`\${fontSize}px \${font}\`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText((i + 1).toString(), labelX, labelY);
  }
}`,startLine:189}}};export{s as default};
