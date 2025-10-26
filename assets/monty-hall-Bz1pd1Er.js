const o={slug:"monty-hall",metadata:{title:"The Monty Hall Problem",questionPreview:`You're on a game show. There are three doors. Behind one is a car, behind the others are goats. You pick a door. The host, who knows what's behind each door, opens another door revealing a goat. Should you switch your choice?
`,concepts:["probability","logic"],difficulty:"easy",tags:["classic","counter-intuitive"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z",credits:`Based on the famous probability puzzle
`},content:`<h2 class="markdown-h1">The Game Show</h2>
<p>You're a contestant on a game show. There are three doors in front of you:</p>
<ul>
<li>Behind one door is a brand new car</li>
<li>Behind the other two doors are goats</li>
</ul>
<p>The host asks you to pick a door. You pick Door 1.</p>
<p>The host, who knows what's behind every door, opens Door 3 to reveal a goat.</p>
<p>The host now asks: "Would you like to switch to Door 2, or stick with Door 1?"</p>
<h2 class="markdown-h1">The Question</h2>
<p>Should you switch doors, stick with your original choice, or does it not matter?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Think about what the host knows when they choose which door to open.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Counting Possibilities</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>Consider all the possible arrangements of the car and goats, and what happens in each case.</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: You should always switch doors.</p><p>When you first picked a door, you had a 1/3 chance of picking the car. That means there's a 2/3 chance the car is behind one of the other two doors.</p><p>When the host opens a door with a goat, they're giving you information. The host <em>must</em> open a door with a goat (they can't reveal the car), so they're effectively eliminating one wrong choice for you.</p><p>Here's what happens in all cases:</p><ol>
<li>
<p>If you initially picked the car (1/3 probability):</p>
<ul>
<li>The host opens either of the other doors (both have goats)</li>
<li>Switching loses</li>
</ul>
</li>
<li>
<p>If you initially picked goat #1 (1/3 probability):</p>
<ul>
<li>The host must open the door with goat #2</li>
<li>Switching wins (reveals the car)</li>
</ul>
</li>
<li>
<p>If you initially picked goat #2 (1/3 probability):</p>
<ul>
<li>The host must open the door with goat #1</li>
<li>Switching wins (reveals the car)</li>
</ul>
</li>
</ol><p>Switching wins in 2 out of 3 cases, giving you a 2/3 (≈67%) chance of winning.
Staying wins in only 1 out of 3 cases, giving you a 1/3 (≈33%) chance.</p><p>The key insight: your initial choice was random, but the host's choice is <em>not</em> random — they must avoid the car. This asymmetry creates the advantage.</p></div></details>`,rawContent:`
# The Game Show

You're a contestant on a game show. There are three doors in front of you:
- Behind one door is a brand new car
- Behind the other two doors are goats

The host asks you to pick a door. You pick Door 1.

The host, who knows what's behind every door, opens Door 3 to reveal a goat.

The host now asks: "Would you like to switch to Door 2, or stick with Door 1?"

# The Question

Should you switch doors, stick with your original choice, or does it not matter?

:::hint
Think about what the host knows when they choose which door to open.
:::

:::hint[Counting Possibilities]
Consider all the possible arrangements of the car and goats, and what happens in each case.
:::

:::solution
**Answer**: You should always switch doors.

When you first picked a door, you had a 1/3 chance of picking the car. That means there's a 2/3 chance the car is behind one of the other two doors.

When the host opens a door with a goat, they're giving you information. The host *must* open a door with a goat (they can't reveal the car), so they're effectively eliminating one wrong choice for you.

Here's what happens in all cases:

1. If you initially picked the car (1/3 probability):
   - The host opens either of the other doors (both have goats)
   - Switching loses

2. If you initially picked goat #1 (1/3 probability):
   - The host must open the door with goat #2
   - Switching wins (reveals the car)

3. If you initially picked goat #2 (1/3 probability):
   - The host must open the door with goat #1
   - Switching wins (reveals the car)

Switching wins in 2 out of 3 cases, giving you a 2/3 (≈67%) chance of winning.
Staying wins in only 1 out of 3 cases, giving you a 1/3 (≈33%) chance.

The key insight: your initial choice was random, but the host's choice is *not* random — they must avoid the car. This asymmetry creates the advantage.
:::
`};export{o as default};
