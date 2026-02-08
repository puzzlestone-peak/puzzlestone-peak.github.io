const n={slug:"two-girlfriends-and-two-trains",metadata:{id:"puzzle-12",title:"Two Girlfriends and Two Trains",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["probability","lateral-thinking"],tags:["has-solution"],credit:"Classic probability puzzle popularised by Martin Gardner and Frederick Mosteller. Question and solution written by Puzzlestone Peak.",dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"Unfaithful Bob has two girlfriends Alice and Carol. Bob can take a train ride from the city’s train station to get to them. There is only 1 line going in both...",websitePreview:"Unfaithful Bob has two girlfriends Alice and Carol. Bob can take a train ride from the city’s train station to get to them. There is only 1 line going in both..."},content:`<p>Unfaithful Bob has two girlfriends Alice and Carol. Bob can take a train ride from the city’s train station to get to them. There is only 1 line going in both directions: the eastward line will get him to Alice’s place, and the westward line will get him to Carol’s place.</p>
<p>Each weekend, Bob will show up at the train station at a random time and take the first train that arrives. He figures since both trains arrive at a regular interval of 10 minutes, on average he’d be visiting them both equally.</p>
<p>However, after a year, Carol complains that Bob only visited her 12 times that year: much less than half of the weekends! How is this possible?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>While this scenario could occur because of pure chance, there is another probable cause for this abnormality.</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>There are many reasons that this could be happening, but we’ll just examine a simple scenario just to show that it’s possible. Let’s consider the following schedule for 9 AM in the morning:</p><p>Westward train: 9:00, 9:10, 9:20, 9:30, 9:40, 9:50 <br>
Eastward train: 9:01, 9:11, 9:21, 9:31, 9:41, 9:51</p><p>If Bob arrives at any time that ends with a 0 (in the minutes place), he will end up taking the westward train. Otherwise, if the minute ends with a 1 to 9, he ends up taking the eastward train. This means with a schedule like this, he will, on average, end up taking the eastward train 9 times more often than the westward train.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>(Notice that Bob will only take the westward train if he arrives in the shaded area, and the eastward train otherwise).</p><p>In fact, if one train always comes almost immediately after the other, then Bob will almost never take the earlier train. Oh well.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
Unfaithful Bob has two girlfriends Alice and Carol. Bob can take a train ride from the city’s train station to get to them. There is only 1 line going in both directions: the eastward line will get him to Alice’s place, and the westward line will get him to Carol’s place.

Each weekend, Bob will show up at the train station at a random time and take the first train that arrives. He figures since both trains arrive at a regular interval of 10 minutes, on average he’d be visiting them both equally.

However, after a year, Carol complains that Bob only visited her 12 times that year: much less than half of the weekends! How is this possible?

:::hint
While this scenario could occur because of pure chance, there is another probable cause for this abnormality.
:::

::::solution
There are many reasons that this could be happening, but we’ll just examine a simple scenario just to show that it’s possible. Let’s consider the following schedule for 9 AM in the morning:

Westward train: 9\\:00, 9\\:10, 9\\:20, 9\\:30, 9\\:40, 9\\:50 \\
Eastward train: 9\\:01, 9\\:11, 9\\:21, 9\\:31, 9\\:41, 9\\:51

If Bob arrives at any time that ends with a 0 (in the minutes place), he will end up taking the westward train. Otherwise, if the minute ends with a 1 to 9, he ends up taking the eastward train. This means with a schedule like this, he will, on average, end up taking the eastward train 9 times more often than the westward train.

:::dynamic
\`\`\`yaml
use: '#train-timeline'
title: "Train arrival timeline diagram"
\`\`\`
:::

(Notice that Bob will only take the westward train if he arrives in the shaded area, and the eastward train otherwise).

In fact, if one train always comes almost immediately after the other, then Bob will almost never take the earlier train. Oh well.
::::

:::component[train-timeline]
\`\`\`yaml
title: "Train arrival timeline diagram"
ariaLabel: "Timeline showing 10 minute cells with divider labels from 0 to 10. The first cell (0 to 1) is shaded representing the eastward train window. The remaining nine cells (1 to 10) represent the westward train window."
\`\`\`

\`\`\`html
<div class="train-timeline-wrapper">
  <!-- Text labels layer (can overflow, centered on arrows) -->
  <div class="text-annotations">
    <div class="text-label westward">
      <div class="westward-inner-label">Westward train</div>
    </div>
    <div class="text-label eastward">Eastward train</div>
  </div>

  <!-- Arrows grid (always aligned to cells, 10 columns) -->
  <div class="arrows-grid">
    <div class="arrow-container westward">
      <div class="arrow"></div>
    </div>
    <div class="arrow-container eastward col-span-9">
      <div class="arrow"></div>
    </div>
  </div>

  <!-- Cells grid (10 columns) -->
  <div class="cells-grid">
    <div class="cells-container">
      <div class="cell filled" data-cell="0"></div>
      <div class="cell" data-cell="1"></div>
      <div class="cell" data-cell="2"></div>
      <div class="cell" data-cell="3"></div>
      <div class="cell" data-cell="4"></div>
      <div class="cell" data-cell="5"></div>
      <div class="cell" data-cell="6"></div>
      <div class="cell" data-cell="7"></div>
      <div class="cell" data-cell="8"></div>
      <div class="cell" data-cell="9"></div>
    </div>
  </div>

  <!-- Divider labels (11 labels positioned under dividers) -->
  <div class="divider-labels">
    <div class="divider-label">0</div>
    <div class="divider-label">1</div>
    <div class="divider-label">2</div>
    <div class="divider-label">3</div>
    <div class="divider-label">4</div>
    <div class="divider-label">5</div>
    <div class="divider-label">6</div>
    <div class="divider-label">7</div>
    <div class="divider-label">8</div>
    <div class="divider-label">9</div>
    <div class="divider-label">0</div>
  </div>
</div>
\`\`\`

\`\`\`css
.train-timeline-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 0;
  font-family: var(--font-family-default);
  position: relative;
}

/* Text annotations layer - can overflow, centered on arrows */
.text-annotations {
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  margin-bottom: 0.25rem;
  position: relative;
  height: 1.25rem;
}

.text-label {
  color: var(--color-foreground);
  white-space: nowrap;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Westward train text - centered on first column */
.text-label.westward {
  grid-column: 2 / 3;
}

.westward-inner-label {
  position: absolute;
}

/* Eastward train text - centered on columns 2-10 */
.text-label.eastward {
  grid-column: 3 / 12;
}

@media (max-width: 640px) {
  .westward-inner-label {
    position: unset;
  }
}

/* Arrows grid - always aligned to cell columns (10 columns) */
.arrows-grid {
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  margin-bottom: 0.5rem;
  position: relative;
  height: 30px;
}

.arrow-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

/* Westward arrow in first column */
.arrow-container.westward {
  grid-column: 2 / 3;
}

/* Eastward arrow spanning columns 2-10 */
.arrow-container.eastward {
  grid-column: 3 / 12;
}

.arrow {
  width: 2px;
  height: 100%;
  background: var(--color-foreground);
  position: relative;
}

/* Arrow tip */
.arrow::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid var(--color-foreground);
}

/* Cells grid (10 columns) */
.cells-grid {
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
}

.cells-container {
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: subgrid;
  border: 2px solid var(--color-border);
  border-radius: 0.25rem;
  overflow: hidden;
}

.cell {
  aspect-ratio: 1 / 0.8;
  height: 100%;
  background: transparent;
  border-right: 2px solid var(--color-border);
}

.cell:last-child {
  border-right: none;
}

.cell.filled {
  background: var(--color-primary);
}

/* Divider labels (11 positions under dividers between cells) */
.divider-labels {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  margin-top: 0.5rem;
  position: relative;
}

.divider-label {
  text-align: center;
  color: var(--color-foreground);
  position: relative;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-label {
    font-size: 0.75rem;
  }

  .divider-label {
    font-size: 0.75rem;
  }

  .arrows-grid {
    height: 25px;
  }
}

/* Handle very small screens - prevent text overlap */
@media (max-width: 480px) {
  .text-label {
    font-size: 0.65rem;
  }
}
\`\`\`

\`\`\`js
function mount(options) {
  const { root, api } = options;

  // Get default font family and apply it
  const defaultFont = api.getFont('default');
  document.documentElement.style.setProperty('--font-family-default', defaultFont);

  // Update font family on theme change (in case font changes with theme)
  api.onThemeChange(() => {
    const updatedFont = api.getFont('default');
    document.documentElement.style.setProperty('--font-family-default', updatedFont);
  });
}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#train-timeline",title:"Train arrival timeline diagram",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/lateral-thinking/two-girlfriends-and-two-trains.md"}],inlineComponents:{"train-timeline":{id:"train-timeline",code:`function mount(options) {
  const { root, api } = options;

  // Get default font family and apply it
  const defaultFont = api.getFont('default');
  document.documentElement.style.setProperty('--font-family-default', defaultFont);

  // Update font family on theme change (in case font changes with theme)
  api.onThemeChange(() => {
    const updatedFont = api.getFont('default');
    document.documentElement.style.setProperty('--font-family-default', updatedFont);
  });
}`,layout:`<div class="train-timeline-wrapper">
  <!-- Text labels layer (can overflow, centered on arrows) -->
  <div class="text-annotations">
    <div class="text-label westward">
      <div class="westward-inner-label">Westward train</div>
    </div>
    <div class="text-label eastward">Eastward train</div>
  </div>

  <!-- Arrows grid (always aligned to cells, 10 columns) -->
  <div class="arrows-grid">
    <div class="arrow-container westward">
      <div class="arrow"></div>
    </div>
    <div class="arrow-container eastward col-span-9">
      <div class="arrow"></div>
    </div>
  </div>

  <!-- Cells grid (10 columns) -->
  <div class="cells-grid">
    <div class="cells-container">
      <div class="cell filled" data-cell="0"></div>
      <div class="cell" data-cell="1"></div>
      <div class="cell" data-cell="2"></div>
      <div class="cell" data-cell="3"></div>
      <div class="cell" data-cell="4"></div>
      <div class="cell" data-cell="5"></div>
      <div class="cell" data-cell="6"></div>
      <div class="cell" data-cell="7"></div>
      <div class="cell" data-cell="8"></div>
      <div class="cell" data-cell="9"></div>
    </div>
  </div>

  <!-- Divider labels (11 labels positioned under dividers) -->
  <div class="divider-labels">
    <div class="divider-label">0</div>
    <div class="divider-label">1</div>
    <div class="divider-label">2</div>
    <div class="divider-label">3</div>
    <div class="divider-label">4</div>
    <div class="divider-label">5</div>
    <div class="divider-label">6</div>
    <div class="divider-label">7</div>
    <div class="divider-label">8</div>
    <div class="divider-label">9</div>
    <div class="divider-label">0</div>
  </div>
</div>`,css:`.train-timeline-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 0;
  font-family: var(--font-family-default);
  position: relative;
}

/* Text annotations layer - can overflow, centered on arrows */
.text-annotations {
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  margin-bottom: 0.25rem;
  position: relative;
  height: 1.25rem;
}

.text-label {
  color: var(--color-foreground);
  white-space: nowrap;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Westward train text - centered on first column */
.text-label.westward {
  grid-column: 2 / 3;
}

.westward-inner-label {
  position: absolute;
}

/* Eastward train text - centered on columns 2-10 */
.text-label.eastward {
  grid-column: 3 / 12;
}

@media (max-width: 640px) {
  .westward-inner-label {
    position: unset;
  }
}

/* Arrows grid - always aligned to cell columns (10 columns) */
.arrows-grid {
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  margin-bottom: 0.5rem;
  position: relative;
  height: 30px;
}

.arrow-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

/* Westward arrow in first column */
.arrow-container.westward {
  grid-column: 2 / 3;
}

/* Eastward arrow spanning columns 2-10 */
.arrow-container.eastward {
  grid-column: 3 / 12;
}

.arrow {
  width: 2px;
  height: 100%;
  background: var(--color-foreground);
  position: relative;
}

/* Arrow tip */
.arrow::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid var(--color-foreground);
}

/* Cells grid (10 columns) */
.cells-grid {
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
}

.cells-container {
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: subgrid;
  border: 2px solid var(--color-border);
  border-radius: 0.25rem;
  overflow: hidden;
}

.cell {
  aspect-ratio: 1 / 0.8;
  height: 100%;
  background: transparent;
  border-right: 2px solid var(--color-border);
}

.cell:last-child {
  border-right: none;
}

.cell.filled {
  background: var(--color-primary);
}

/* Divider labels (11 positions under dividers between cells) */
.divider-labels {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  margin-top: 0.5rem;
  position: relative;
}

.divider-label {
  text-align: center;
  color: var(--color-foreground);
  position: relative;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-label {
    font-size: 0.75rem;
  }

  .divider-label {
    font-size: 0.75rem;
  }

  .arrows-grid {
    height: 25px;
  }
}

/* Handle very small screens - prevent text overlap */
@media (max-width: 480px) {
  .text-label {
    font-size: 0.65rem;
  }
}`,startLine:272}}};export{n as default};
