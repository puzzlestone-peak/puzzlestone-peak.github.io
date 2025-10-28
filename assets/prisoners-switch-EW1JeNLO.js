const e={slug:"prisoners-switch",metadata:{title:"The Prisoners and the Light Switch",questionPreview:`100 prisoners are locked in separate cells. Each day, one prisoner is randomly selected to visit a room with a light switch. Can they devise a strategy to guarantee all prisoners will eventually go free?
`,concepts:["logic","adversarial-games","state-machines"],difficulty:"advanced",tags:["classic","strategy"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",credits:`Classic puzzle in logic and computer science
Written by Alan
`,previousPuzzle:"sum-of-squares"},content:`<h2 class="markdown-h1">The Scenario</h2>
<p>100 prisoners are held in separate cells with no way to communicate. Each day, the warden randomly selects one prisoner to visit a special room containing only a light switch. The switch has two positions: <strong>on</strong> and <strong>off</strong>. Initially, the switch is <strong>off</strong>.</p>
<p>When a prisoner visits the room, they may:</p>
<ul>
<li>Toggle the switch (change it from on to off, or off to on)</li>
<li>Leave it unchanged</li>
</ul>
<p>After visiting the room, the prisoner returns to their cell.</p>
<h2 class="markdown-h1">The Challenge</h2>
<p>At any time, any prisoner may declare to the warden: "All 100 prisoners have now visited the room at least once."</p>
<p>If this declaration is <strong>true</strong>, all prisoners go free.
If it's <strong>false</strong>, all prisoners remain imprisoned forever.</p>
<p>The prisoners are allowed to discuss and agree on a strategy <strong>before</strong> the process begins, but they cannot communicate afterward.</p>
<p><strong>Can the prisoners devise a strategy that guarantees they will all eventually go free?</strong></p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The prisoners need to find a way to count visits. But how can they count when they can't communicate?</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Role Assignment</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Consider assigning special roles to certain prisoners. Maybe one prisoner acts as a "counter" while others act as "reporters."</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Binary State</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The light switch has two states. How can the prisoners use this binary state to encode information over multiple visits?</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Yes! Here's a strategy that works:</p><p><strong>Role Assignment</strong>:</p><ul>
<li>Designate one prisoner as the <strong>Counter</strong></li>
<li>All other 99 prisoners are <strong>Reporters</strong></li>
</ul><p><strong>Strategy</strong>:</p><p>For <strong>Reporters</strong>:</p><ol>
<li>If this is your first or second time visiting the room, and the light is <strong>off</strong>, turn it <strong>on</strong></li>
<li>Otherwise, don't change the switch</li>
<li>Each reporter will turn the light on exactly <strong>twice</strong> over the course of the game</li>
</ol><p>For the <strong>Counter</strong>:</p><ol>
<li>If the light is <strong>on</strong>, turn it <strong>off</strong> and increment your mental count</li>
<li>When your count reaches <strong>198</strong> (= 2 × 99 reporters), declare that all prisoners have visited</li>
</ol><p><strong>Why it works</strong>:</p><ul>
<li>Each of the 99 reporters will turn the light on exactly twice</li>
<li>The counter will eventually see the light on 198 times</li>
<li>Since only reporters turn the light on, and each reporter only turns it on twice, the counter knows that all 99 reporters have visited at least twice</li>
<li>The counter has also visited (to count), so all 100 prisoners have visited</li>
<li>The strategy is guaranteed to succeed eventually, though it may take a long time depending on the random selection</li>
</ul><p><strong>Time Complexity</strong>:
This strategy works but may take many years on average! Can you think of a faster strategy?</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Optimized Strategy</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>A faster approach uses the same roles but allows reporters to signal on their first visit only:</p><p><strong>Optimized Strategy</strong>:</p><ul>
<li>Each reporter turns the light on only <strong>once</strong> (on their first visit when it's off)</li>
<li>The counter counts to <strong>99</strong> instead of 198</li>
<li>This reduces the expected time by roughly half</li>
</ul><p>The tradeoff: reporters only signal once, so the counter needs to see 99 signals instead of 198, but each signal is more "valuable."</p></div></details>
<h2 class="markdown-h1">Extensions</h2>
<ol>
<li>What if the initial state of the switch is unknown?</li>
<li>What if prisoners can be selected multiple times in a row?</li>
<li>Can you calculate the expected number of days until freedom?</li>
</ol>`,rawContent:`
# The Scenario

100 prisoners are held in separate cells with no way to communicate. Each day, the warden randomly selects one prisoner to visit a special room containing only a light switch. The switch has two positions: **on** and **off**. Initially, the switch is **off**.

When a prisoner visits the room, they may:
- Toggle the switch (change it from on to off, or off to on)
- Leave it unchanged

After visiting the room, the prisoner returns to their cell.

# The Challenge

At any time, any prisoner may declare to the warden: "All 100 prisoners have now visited the room at least once."

If this declaration is **true**, all prisoners go free.
If it's **false**, all prisoners remain imprisoned forever.

The prisoners are allowed to discuss and agree on a strategy **before** the process begins, but they cannot communicate afterward.

**Can the prisoners devise a strategy that guarantees they will all eventually go free?**

:::hint
The prisoners need to find a way to count visits. But how can they count when they can't communicate?
:::

:::hint[Role Assignment]
Consider assigning special roles to certain prisoners. Maybe one prisoner acts as a "counter" while others act as "reporters."
:::

:::hint[Binary State]
The light switch has two states. How can the prisoners use this binary state to encode information over multiple visits?
:::

:::solution
Yes! Here's a strategy that works:

**Role Assignment**:
- Designate one prisoner as the **Counter**
- All other 99 prisoners are **Reporters**

**Strategy**:

For **Reporters**:
1. If this is your first or second time visiting the room, and the light is **off**, turn it **on**
2. Otherwise, don't change the switch
3. Each reporter will turn the light on exactly **twice** over the course of the game

For the **Counter**:
1. If the light is **on**, turn it **off** and increment your mental count
2. When your count reaches **198** (= 2 × 99 reporters), declare that all prisoners have visited

**Why it works**:
- Each of the 99 reporters will turn the light on exactly twice
- The counter will eventually see the light on 198 times
- Since only reporters turn the light on, and each reporter only turns it on twice, the counter knows that all 99 reporters have visited at least twice
- The counter has also visited (to count), so all 100 prisoners have visited
- The strategy is guaranteed to succeed eventually, though it may take a long time depending on the random selection

**Time Complexity**:
This strategy works but may take many years on average! Can you think of a faster strategy?
:::

:::solution[Optimized Strategy]
A faster approach uses the same roles but allows reporters to signal on their first visit only:

**Optimized Strategy**:
- Each reporter turns the light on only **once** (on their first visit when it's off)
- The counter counts to **99** instead of 198
- This reduces the expected time by roughly half

The tradeoff: reporters only signal once, so the counter needs to see 99 signals instead of 198, but each signal is more "valuable."
:::

# Extensions

1. What if the initial state of the switch is unknown?
2. What if prisoners can be selected multiple times in a row?
3. Can you calculate the expected number of days until freedom?
`,dynamicBlocks:[]};export{e as default};
