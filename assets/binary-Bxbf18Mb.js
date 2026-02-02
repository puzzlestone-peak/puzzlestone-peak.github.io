const s={slug:"binary",metadata:{id:"expedition-1",title:"Binary",description:"Understanding binary number systems, and converting between decimal and binary.",concepts:["binary","number-systems"],dateCreated:"2025-11-02",lastUpdated:"2025-11-03",published:!0},content:`<p>The number system we're familiar with is the decimal number system. We count like this:</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>7</mn><mo>,</mo><mn>8</mn><mo>,</mo><mn>9</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>11</mn><mo>,</mo><mn>12</mn><mo>,</mo><mi>.</mi><mi>.</mi><mi>.</mi></mrow><annotation>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">3</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">4</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">5</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">7</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">8</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">9</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">10</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">11</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">12</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span></span></span></span></p>
<p>However, there many other number systems out there too. After the decimal number system, the next most well-known one is the binary number system. We count it like this:</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>11</mn><mo>,</mo><mn>100</mn><mo>,</mo><mn>101</mn><mo>,</mo><mn>110</mn><mo>,</mo><mn>111</mn><mo>,</mo><mi>.</mi><mi>.</mi><mi>.</mi></mrow><annotation>0, 1, 10, 11, 100, 101, 110, 111, ...</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">10</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">11</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">100</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">101</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">110</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">111</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span></span></span></span></p>
<p>Wait, how did we jump from 1 to 10? Or from 11 to 100?</p>
<h2 class="markdown-h1">A Closer Look at the Decimal Number System</h2>
<p>The word "decimal" uses the "deci-" prefix, meaning one-tenth. The connection to 10 is why the decimal number system is also called the base-10 counting system.</p>
<p>A base-10 number system means we have 10 digits: <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>7</mn><mo>,</mo><mn>8</mn><mo>,</mo><mn>9</mn></mrow><annotation>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">3</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">4</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">5</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">7</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">8</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">9</span></span></span></span>. As we count upwards, we work our way through these digits. When we get to the last digit, we reset the digit in the ones place, then add a new digit in the 10s place, starting with 1 (technically, we increment the 0 to a 1, but we leave out leading zeros when writing a number).</p>
<p>Let's break it down. The digits in the ones place is just worth "1" each. But in the 10s place, we only increment it after 10 increments of the ones place, so it's worth 10 per "digit value". That means a "1" digit has a value of 10, "2" has a value of 20, and so on.</p>
<p>Likewise, when we get to the 100s place, that's a digit of 1 would require 10 increments of the 10s place, which each requires 10 increments in the ones place, meaning it's worth 10 × 10 = 100. This means the digit "1" here is worth 100, a digit of "2" is worth 200, and so on.</p>
<p>Breaking it down, the number <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>347</mn><mo>=</mo><mn>300</mn><mo>+</mo><mn>40</mn><mo>+</mo><mn>7</mn></mrow><annotation>347 = 300 + 40 + 7</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">347</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">300</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">40</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">7</span></span></span></span>. For people who like formulas, we just indicate the value as <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup><mo>+</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>1</mn></msup><mo>+</mo><mn>7</mn><mo>×</mo><msup><mn>10</mn><mn>0</mn></msup></mrow><annotation>3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">7</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span></span></span></span>. This makes it easier to think about as we increase to more numbers.</p>
<p>This feels obvious, and rightfully so. After all, this is the number system we're used to using. But it's good to make this explicit as we move on to binary.</p>
<h2 class="markdown-h1">Counting in Binary</h2>
<p>Let's take a look at the binary system. binary starts with "bi" meaning 2, which is why we also call it the base-2 number system. This time, we're only stuck with 2 digits: 0 and 1. Let's try counting with it, starting from zero.</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>0</mn></mrow><annotation>0</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></p>
<p>Looks okay so far. Now let's add 1.</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn></mrow><annotation>1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p>
<p>Still normal, But when we try to add 1 again, we realise we already hit the end of the list of digits. so we reset the digit in the 1s place and increment the digit in the 2s place (in decimal this is the 10s place, but we're in base-2 now).</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>10</mn></mrow><annotation>10</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">10</span></span></span></span></p>
<p>We add 1 again:</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>11</mn></mrow><annotation>11</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">11</span></span></span></span></p>
<p>Let's add 1 more. Just like incrementing 99 to get 100, we'll have to carry over twice to get:</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>100</mn></mrow><annotation>100</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span></p>
<p>In fact, let's count the numbers side by side to compare how they work.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>Play around with the counter until you have a clearer understanding of how we count in numbers.</p>
<h2 class="markdown-h1">Converting Binary to Decimal</h2>
<p>Remember that for decimal numbers, the digit "1" has value 1 in the 1s place, value 10 in the 10s place, and value 100 in the 100s place.</p>
<p>Likewise, in a binary number, we have 2s, 4s, 8s, ... places (powers of 2 instead of powers of 10).</p>
<p>Let's take <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>11010</mn></mrow><annotation>11010</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">11010</span></span></span></span> in binary for example. We have:</p>
<ul>
<li>A 1 in the 16s place,</li>
<li>A 1 in the 8s place,</li>
<li>A 0 in the 4s place,</li>
<li>A 1 in the 2s place, and</li>
<li>A 0 in the 1s place.</li>
</ul>
<p>We can sum their values up as such:</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn><mo>×</mo><mn>16</mn><mo>+</mo><mn>1</mn><mo>×</mo><mn>8</mn><mo>+</mo><mn>0</mn><mo>×</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo>×</mo><mn>2</mn><mo>+</mo><mn>0</mn><mo>×</mo><mn>1</mn><mo>=</mo><mn>26</mn></mrow><annotation>1 \\times 16 + 1 \\times 8 + 0 \\times 4 + 1 \\times 2 + 0 \\times 1 = 26</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">16</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">26</span></span></span></span></p>
<h3 class="markdown-h2">Converting Decimal to Binary</h3>
<p>We can do the reverse to convert a number from decimal to binary. Let's start with 45. We notice that the biggest power of 2 that "goes into" <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>45</mn></mrow><annotation>45</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span></span></span></span> is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>32</mn><mo>=</mo><msup><mn>2</mn><mn>5</mn></msup></mrow><annotation>32 = 2^5</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">32</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span>.</p>
<p>So we get <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>45</mn><mo>=</mo><mn>32</mn><mo>+</mo><mn>13</mn></mrow><annotation>45 = 32 + 13</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">32</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">13</span></span></span></span>.</p>
<p>Let's break down the next number, <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>13</mn></mrow><annotation>13</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">13</span></span></span></span>. The biggest power of 2 that "goes into" <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>13</mn></mrow><annotation>13</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">13</span></span></span></span> is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>8</mn><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup></mrow><annotation>8 = 2^3</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span>.</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>45</mn><mo>=</mo><mn>32</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>5</mn></mrow><annotation>45 = 32 + 8 + 5</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">32</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">5</span></span></span></span></p>
<p>The next biggest power of 2 that "goes into" <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>5</mn></mrow><annotation>5</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">5</span></span></span></span> is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>4</mn><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup></mrow><annotation>4 = 2^2</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>. That leaves <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn></mrow><annotation>1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>, which is already a power of 2 (<span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mn>2</mn><mn>0</mn></msup></mrow><annotation>2^0</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span></span></span></span>).</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>45</mn><mo>=</mo><mn>32</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>1</mn></mrow><annotation>45 = 32 + 8 + 4 + 1</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">32</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p>
<p>Let's convert the numbers back into powers of 2.</p>
<p><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>45</mn><mo>=</mo><msup><mn>2</mn><mn>5</mn></msup><mo>+</mo><msup><mn>2</mn><mn>3</mn></msup><mo>+</mo><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>2</mn><mn>0</mn></msup></mrow><annotation>45 = 2^5 + 2^3 + 2^2 + 2^0</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span></span></span></span></p>
<p>We have powers of 5, 3, 2, and 0; which means the 6th, 4th, 3rd, and 1st digit from the right (we have to add 1 since we always start from a power of 0) are 1s, and the rest are zeros.</p>
<p>This gives us <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>101101</mn></mrow><annotation>101101</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">101101</span></span></span></span> as the binary representation of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>45</mn></mrow><annotation>45</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">45</span></span></span></span>.</p>
<h2 class="markdown-h1">But Why Binary?</h2>
<p>From the earlier examples, you can see that binary representations are much longer than decimal numbers. This may seem inefficient for humans, but it's quite useful for computers.</p>
<p>The relative strength of binary over decimal is in the number of digits. With only 2 digits, we can map states naturally into mechanical representations. A transistor can be on or off, a QR-code can have a black or white square in its grid, and a signal can be in high or low position.</p>
<p>On top of that, computation is easier to represent in electrical circuits when there are only 2 digits. In decimal, we have to represent:</p>
<p>0 + 0 = 0 <br>
0 + 1 = 1 <br>
0 + 2 = 2 <br>
... <br>
4 + 7 = 11 <br>
5 + 7 = 12 <br>
... <br>
9 + 9 = 18</p>
<p>All that just to perform addition on 2 numbers. In binary, we only need to represent:</p>
<p>0 + 0 = 0 <br>
0 + 1 = 1 <br>
1 + 0 = 1 <br>
1 + 1 = 10 (2 in decimal)</p>
<h2 class="markdown-h1">Application to Puzzles</h2>
<p>When it comes to puzzle solving, binary number systems should come to mind when you encounter a situation where 2 states naturally comes out. Think light switches in on or off, doors that are open or closed, objects are in or not in a set.</p>
<p>Look out for these concepts in your next puzzles, and happy solving!</p>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
The number system we're familiar with is the decimal number system. We count like this:

$0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...$

However, there many other number systems out there too. After the decimal number system, the next most well-known one is the binary number system. We count it like this:

$0, 1, 10, 11, 100, 101, 110, 111, ...$

Wait, how did we jump from 1 to 10? Or from 11 to 100?

# A Closer Look at the Decimal Number System

The word "decimal" uses the "deci-" prefix, meaning one-tenth. The connection to 10 is why the decimal number system is also called the base-10 counting system.

A base-10 number system means we have 10 digits: $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$. As we count upwards, we work our way through these digits. When we get to the last digit, we reset the digit in the ones place, then add a new digit in the 10s place, starting with 1 (technically, we increment the 0 to a 1, but we leave out leading zeros when writing a number).

Let's break it down. The digits in the ones place is just worth "1" each. But in the 10s place, we only increment it after 10 increments of the ones place, so it's worth 10 per "digit value". That means a "1" digit has a value of 10, "2" has a value of 20, and so on.

Likewise, when we get to the 100s place, that's a digit of 1 would require 10 increments of the 10s place, which each requires 10 increments in the ones place, meaning it's worth 10 × 10 = 100. This means the digit "1" here is worth 100, a digit of "2" is worth 200, and so on.

Breaking it down, the number $347 = 300 + 40 + 7$. For people who like formulas, we just indicate the value as $3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0$. This makes it easier to think about as we increase to more numbers.

This feels obvious, and rightfully so. After all, this is the number system we're used to using. But it's good to make this explicit as we move on to binary.

# Counting in Binary

Let's take a look at the binary system. binary starts with "bi" meaning 2, which is why we also call it the base-2 number system. This time, we're only stuck with 2 digits: 0 and 1. Let's try counting with it, starting from zero.

$0$

Looks okay so far. Now let's add 1.

$1$


Still normal, But when we try to add 1 again, we realise we already hit the end of the list of digits. so we reset the digit in the 1s place and increment the digit in the 2s place (in decimal this is the 10s place, but we're in base-2 now).

$10$

We add 1 again:

$11$

Let's add 1 more. Just like incrementing 99 to get 100, we'll have to carry over twice to get:

$100$

In fact, let's count the numbers side by side to compare how they work.

:::dynamic
\`\`\`yaml
use: '#binary-counter'
title: "Interactive counter showing decimal and binary equivalents with carry animations"
\`\`\`
:::

Play around with the counter until you have a clearer understanding of how we count in numbers.

# Converting Binary to Decimal

Remember that for decimal numbers, the digit "1" has value 1 in the 1s place, value 10 in the 10s place, and value 100 in the 100s place.

Likewise, in a binary number, we have 2s, 4s, 8s, ... places (powers of 2 instead of powers of 10).

Let's take $11010$ in binary for example. We have:

- A 1 in the 16s place,
- A 1 in the 8s place,
- A 0 in the 4s place,
- A 1 in the 2s place, and
- A 0 in the 1s place.

We can sum their values up as such:

$1 \\times 16 + 1 \\times 8 + 0 \\times 4 + 1 \\times 2 + 0 \\times 1 = 26$

## Converting Decimal to Binary

We can do the reverse to convert a number from decimal to binary. Let's start with 45. We notice that the biggest power of 2 that "goes into" $45$ is $32 = 2^5$.

So we get $45 = 32 + 13$.

Let's break down the next number, $13$. The biggest power of 2 that "goes into" $13$ is $8 = 2^3$.

$45 = 32 + 8 + 5$

The next biggest power of 2 that "goes into" $5$ is $4 = 2^2$. That leaves $1$, which is already a power of 2 ($2^0$).

$45 = 32 + 8 + 4 + 1$

Let's convert the numbers back into powers of 2.

$45 = 2^5 + 2^3 + 2^2 + 2^0$

We have powers of 5, 3, 2, and 0; which means the 6th, 4th, 3rd, and 1st digit from the right (we have to add 1 since we always start from a power of 0) are 1s, and the rest are zeros.

This gives us $101101$ as the binary representation of $45$.

# But Why Binary?

From the earlier examples, you can see that binary representations are much longer than decimal numbers. This may seem inefficient for humans, but it's quite useful for computers.

The relative strength of binary over decimal is in the number of digits. With only 2 digits, we can map states naturally into mechanical representations. A transistor can be on or off, a QR-code can have a black or white square in its grid, and a signal can be in high or low position.

On top of that, computation is easier to represent in electrical circuits when there are only 2 digits. In decimal, we have to represent:

0 + 0 = 0 \\
0 + 1 = 1 \\
0 + 2 = 2 \\
... \\
4 + 7 = 11 \\
5 + 7 = 12 \\
... \\
9 + 9 = 18


All that just to perform addition on 2 numbers. In binary, we only need to represent:

0 + 0 = 0 \\
0 + 1 = 1 \\
1 + 0 = 1 \\
1 + 1 = 10 (2 in decimal)

# Application to Puzzles

When it comes to puzzle solving, binary number systems should come to mind when you encounter a situation where 2 states naturally comes out. Think light switches in on or off, doors that are open or closed, objects are in or not in a set.

Look out for these concepts in your next puzzles, and happy solving!

:::component[binary-counter]
\`\`\`html
<div>
  <div class="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
    <!-- Decimal Counter -->
    <div class="flex flex-col gap-2">
      <div class="text-center text-bold">
        Decimal
      </div>
      <div id="decimal-counter" class="flex gap-1 relative"></div>
    </div>

    <!-- Binary Counter -->
    <div class="flex flex-col gap-2">
      <div class="text-center text-bold">
        Binary
      </div>
      <div id="binary-counter" class="flex gap-1 relative"></div>
    </div>
  </div>

  <!-- Increment Button -->
  <div id="button-container" class="flex justify-center gap-2"></div>
</div>
\`\`\`

\`\`\`js
function mount(options) {
  const { root, api } = options;

  let count = 0;
  const MAX_VALUE = 31; // Max value for 5 binary digits (2^5 - 1)

  // Get containers
  const decimalContainer = root.querySelector('#decimal-counter');
  const binaryContainer = root.querySelector('#binary-counter');
  const buttonContainer = root.querySelector('#button-container');

  // Create digit elements
  const decimalDigits = [];
  const binaryDigits = [];

  // Create 5 decimal digit boxes
  for (let i = 0; i < 5; i++) {
    const digitBox = document.createElement('div');
    digitBox.className = api.css('relative');

    const digitDisplay = document.createElement('div');
    digitDisplay.className = api.css(
      'w-10 h-14 flex items-center justify-center text-2xl font-bold'
    );
    digitDisplay.textContent = '0';

    const carryContainer = document.createElement('div');
    carryContainer.className = api.css('absolute inset-0 flex items-center justify-center pointer-events-none');

    digitBox.appendChild(digitDisplay);
    digitBox.appendChild(carryContainer);
    decimalContainer.appendChild(digitBox);

    decimalDigits.push({ display: digitDisplay, carryContainer });
  }

  // Create 5 binary digit boxes
  for (let i = 0; i < 5; i++) {
    const digitBox = document.createElement('div');
    digitBox.className = api.css('relative');

    const digitDisplay = document.createElement('div');
    digitDisplay.className = api.css(
      'w-10 h-14 flex items-center justify-center text-2xl font-bold'
    );
    digitDisplay.textContent = '0';

    const carryContainer = document.createElement('div');
    carryContainer.className = api.css('absolute inset-0 flex items-center justify-center pointer-events-none');

    digitBox.appendChild(digitDisplay);
    digitBox.appendChild(carryContainer);
    binaryContainer.appendChild(digitBox);

    binaryDigits.push({ display: digitDisplay, carryContainer });
  }

  // Create increment button
  const incrementButton = api.ui.button({
    label: '+1',
    onClick: increment,
  });
  incrementButton.classList.add(api.css('w-16'));
  buttonContainer.appendChild(incrementButton);

  // Create increment button
  const resetButton = api.ui.button({
    label: 'Reset',
    onClick: reset,
  });
  resetButton.classList.add(api.css('w-16'));
  buttonContainer.appendChild(resetButton);

  // Update display
  function updateDisplay() {
    const decimalString = count.toString().padStart(5, '0');
    const binaryString = count.toString(2).padStart(5, '0');

    // Update decimal digits
    decimalString.split('').forEach((digit, index) => {
      const { display } = decimalDigits[index];
      display.textContent = digit;

      // Determine if this is a leading zero
      const isLeadingZero = index < decimalDigits.length - 1 && index < decimalString.length - decimalString.replace(/^0+/, '').length;

      if (isLeadingZero) {
        display.classList.add(api.css('opacity-40'));
      } else {
        display.classList.remove('opacity-40');
      }
    });

    // Update binary digits
    binaryString.split('').forEach((bit, index) => {
      const { display } = binaryDigits[index];
      display.textContent = bit;

      // Determine if this is a leading zero
      const isLeadingZero = index < decimalDigits.length - 1 && index < binaryString.length - binaryString.replace(/^0+/, '').length;

      if (isLeadingZero) {
        display.classList.add(api.css('opacity-40'));
      } else {
        display.classList.remove('opacity-40');
      }
    });

    if (count === MAX_VALUE) {
      incrementButton.disabled = true;
    }
  }

  // Show carry animation
  function showCarry(container) {
    const carry = document.createElement('div');
    carry.className = api.css('absolute font-bold text-sm');
    carry.textContent = '+1';
    carry.style.animation = 'carry 1s ease-out forwards';

    container.appendChild(carry);

    setTimeout(() => {
      container.removeChild(carry);
    }, 1000);
  }

  // Increment counter
  function increment() {
    const oldCount = count;
    count = Math.min(count + 1, MAX_VALUE);

    // Detect decimal carries (9→0)
    const oldDecimalString = oldCount.toString().padStart(5, '0');
    const newDecimalString = count.toString().padStart(5, '0');

    oldDecimalString.split('').forEach((digit, index) => {
      if (digit === '9' && newDecimalString[index] === '0') {
        showCarry(decimalDigits[index - 1].carryContainer);
      }
    });

    // Detect binary carries (1→0)
    const oldBinaryString = oldCount.toString(2).padStart(5, '0');
    const newBinaryString = count.toString(2).padStart(5, '0');

    oldBinaryString.split('').forEach((bit, index) => {
      if (bit === '1' && newBinaryString[index] === '0') {
        showCarry(binaryDigits[index - 1].carryContainer);
      }
    });

    updateDisplay();
  }

  function reset() {
    count = 0;
    updateDisplay();
    incrementButton.disabled = false;
  }

  // Initial render
  updateDisplay();
}
\`\`\`

\`\`\`css
@keyframes carry {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
\`\`\`
:::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#binary-counter",title:"Interactive counter showing decimal and binary equivalents with carry animations",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/binary.md"}],inlineComponents:{"binary-counter":{id:"binary-counter",code:`function mount(options) {
  const { root, api } = options;

  let count = 0;
  const MAX_VALUE = 31; // Max value for 5 binary digits (2^5 - 1)

  // Get containers
  const decimalContainer = root.querySelector('#decimal-counter');
  const binaryContainer = root.querySelector('#binary-counter');
  const buttonContainer = root.querySelector('#button-container');

  // Create digit elements
  const decimalDigits = [];
  const binaryDigits = [];

  // Create 5 decimal digit boxes
  for (let i = 0; i < 5; i++) {
    const digitBox = document.createElement('div');
    digitBox.className = api.css('relative');

    const digitDisplay = document.createElement('div');
    digitDisplay.className = api.css(
      'w-10 h-14 flex items-center justify-center text-2xl font-bold'
    );
    digitDisplay.textContent = '0';

    const carryContainer = document.createElement('div');
    carryContainer.className = api.css('absolute inset-0 flex items-center justify-center pointer-events-none');

    digitBox.appendChild(digitDisplay);
    digitBox.appendChild(carryContainer);
    decimalContainer.appendChild(digitBox);

    decimalDigits.push({ display: digitDisplay, carryContainer });
  }

  // Create 5 binary digit boxes
  for (let i = 0; i < 5; i++) {
    const digitBox = document.createElement('div');
    digitBox.className = api.css('relative');

    const digitDisplay = document.createElement('div');
    digitDisplay.className = api.css(
      'w-10 h-14 flex items-center justify-center text-2xl font-bold'
    );
    digitDisplay.textContent = '0';

    const carryContainer = document.createElement('div');
    carryContainer.className = api.css('absolute inset-0 flex items-center justify-center pointer-events-none');

    digitBox.appendChild(digitDisplay);
    digitBox.appendChild(carryContainer);
    binaryContainer.appendChild(digitBox);

    binaryDigits.push({ display: digitDisplay, carryContainer });
  }

  // Create increment button
  const incrementButton = api.ui.button({
    label: '+1',
    onClick: increment,
  });
  incrementButton.classList.add(api.css('w-16'));
  buttonContainer.appendChild(incrementButton);

  // Create increment button
  const resetButton = api.ui.button({
    label: 'Reset',
    onClick: reset,
  });
  resetButton.classList.add(api.css('w-16'));
  buttonContainer.appendChild(resetButton);

  // Update display
  function updateDisplay() {
    const decimalString = count.toString().padStart(5, '0');
    const binaryString = count.toString(2).padStart(5, '0');

    // Update decimal digits
    decimalString.split('').forEach((digit, index) => {
      const { display } = decimalDigits[index];
      display.textContent = digit;

      // Determine if this is a leading zero
      const isLeadingZero = index < decimalDigits.length - 1 && index < decimalString.length - decimalString.replace(/^0+/, '').length;

      if (isLeadingZero) {
        display.classList.add(api.css('opacity-40'));
      } else {
        display.classList.remove('opacity-40');
      }
    });

    // Update binary digits
    binaryString.split('').forEach((bit, index) => {
      const { display } = binaryDigits[index];
      display.textContent = bit;

      // Determine if this is a leading zero
      const isLeadingZero = index < decimalDigits.length - 1 && index < binaryString.length - binaryString.replace(/^0+/, '').length;

      if (isLeadingZero) {
        display.classList.add(api.css('opacity-40'));
      } else {
        display.classList.remove('opacity-40');
      }
    });

    if (count === MAX_VALUE) {
      incrementButton.disabled = true;
    }
  }

  // Show carry animation
  function showCarry(container) {
    const carry = document.createElement('div');
    carry.className = api.css('absolute font-bold text-sm');
    carry.textContent = '+1';
    carry.style.animation = 'carry 1s ease-out forwards';

    container.appendChild(carry);

    setTimeout(() => {
      container.removeChild(carry);
    }, 1000);
  }

  // Increment counter
  function increment() {
    const oldCount = count;
    count = Math.min(count + 1, MAX_VALUE);

    // Detect decimal carries (9→0)
    const oldDecimalString = oldCount.toString().padStart(5, '0');
    const newDecimalString = count.toString().padStart(5, '0');

    oldDecimalString.split('').forEach((digit, index) => {
      if (digit === '9' && newDecimalString[index] === '0') {
        showCarry(decimalDigits[index - 1].carryContainer);
      }
    });

    // Detect binary carries (1→0)
    const oldBinaryString = oldCount.toString(2).padStart(5, '0');
    const newBinaryString = count.toString(2).padStart(5, '0');

    oldBinaryString.split('').forEach((bit, index) => {
      if (bit === '1' && newBinaryString[index] === '0') {
        showCarry(binaryDigits[index - 1].carryContainer);
      }
    });

    updateDisplay();
  }

  function reset() {
    count = 0;
    updateDisplay();
    incrementButton.disabled = false;
  }

  // Initial render
  updateDisplay();
}`,layout:`<div>
  <div class="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
    <!-- Decimal Counter -->
    <div class="flex flex-col gap-2">
      <div class="text-center text-bold">
        Decimal
      </div>
      <div id="decimal-counter" class="flex gap-1 relative"></div>
    </div>

    <!-- Binary Counter -->
    <div class="flex flex-col gap-2">
      <div class="text-center text-bold">
        Binary
      </div>
      <div id="binary-counter" class="flex gap-1 relative"></div>
    </div>
  </div>

  <!-- Increment Button -->
  <div id="button-container" class="flex justify-center gap-2"></div>
</div>`,css:`@keyframes carry {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}`,startLine:167}}};export{s as default};
