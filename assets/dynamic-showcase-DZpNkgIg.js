const n={slug:"dynamic-showcase",metadata:{title:"Dynamic Content Showcase",questionPreview:"A comprehensive demonstration of all DynamicBlock features and modes",concepts:[],difficulty:"easy",tags:["developer"],dateCreated:"2025-10-27T00:00:00.000Z",lastUpdated:"2025-10-27T00:00:00.000Z",published:"dev-only"},content:`<h2 class="markdown-h1">Dynamic Content Showcase</h2>
<p>This puzzle demonstrates all the different ways to create interactive and visual content using the DynamicBlock system.</p>
<h3 class="markdown-h2">1. DOM Mode - Factory Pattern</h3>
<p>Create elements programmatically using <code>ctx.ui</code> helpers:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="dom"><p class="text-muted-foreground text-sm">[Interactive content: dom mode]</p></div>
<h3 class="markdown-h2">2. DOM Mode - Selector Pattern</h3>
<p>Enhance existing HTML elements with <code>ctx.ui</code>:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="dom"><p class="text-muted-foreground text-sm">[Interactive content: dom mode]</p></div>
<h3 class="markdown-h2">3. Canvas Mode - Auto-Redraw</h3>
<p>Responsive canvas that auto-redraws on theme change and window resize:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="dom"><p class="text-muted-foreground text-sm">[Interactive content: dom mode]</p></div>
<h3 class="markdown-h2">4. Canvas Mode - Manual Control</h3>
<p>Canvas with custom debounce and manual redraw control:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="dom"><p class="text-muted-foreground text-sm">[Interactive content: dom mode]</p></div>
<h3 class="markdown-h2">5. UI Helpers Showcase</h3>
<p>Demonstrating all available <code>ctx.ui</code> components:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="4" data-mode="dom"><p class="text-muted-foreground text-sm">[Interactive content: dom mode]</p></div>
<h3 class="markdown-h2">6. Custom CSS Styling</h3>
<p>Using custom CSS blocks for advanced styling:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="5" data-mode="dom"><p class="text-muted-foreground text-sm">[Interactive content: dom mode]</p></div>
<h3 class="markdown-h2">7. Shared Components - Nim Game Sample</h3>
<h4 class="markdown-h3">Default Configuration</h4>
<p>Using the nim-game-sample component with all default settings:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="6" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<h4 class="markdown-h3">Custom Piles with No Reset</h4>
<p>This variant has 4 piles and the reset button is disabled:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="7" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<h4 class="markdown-h3">Minimal Configuration</h4>
<p>A minimal game with just 2 piles and no status message:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="8" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<h4 class="markdown-h3">Large Configuration</h4>
<p>A challenging variant with 5 piles:</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="9" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<hr>
<h3 class="markdown-h2">Summary</h3>
<p>This showcase demonstrates:</p>
<ul>
<li><strong>DOM Mode (Factory)</strong>: Creating elements programmatically with <code>ctx.ui</code> helpers</li>
<li><strong>DOM Mode (Selector)</strong>: Enhancing existing HTML with styling and behavior</li>
<li><strong>Canvas Mode (Auto)</strong>: Responsive drawings that auto-redraw on theme/resize</li>
<li><strong>Canvas Mode (Manual)</strong>: Full control over redraw timing with callbacks</li>
<li><strong>UI Helpers</strong>: All available components (buttons, inputs, checkboxes, radios, selects, textareas)</li>
<li><strong>Custom CSS</strong>: Advanced styling with gradients, animations, and theme variables</li>
<li><strong>Shared Components</strong>: Reusable components from the component registry</li>
</ul>
<p>All examples are theme-aware and will adapt when you toggle between light and dark mode!</p>`,rawContent:`
# Dynamic Content Showcase

This puzzle demonstrates all the different ways to create interactive and visual content using the DynamicBlock system.

## 1. DOM Mode - Factory Pattern

Create elements programmatically using \`ctx.ui\` helpers:

:::dynamic
\`\`\`js
function mount(root, ctx) {
  const container = document.createElement('div');
  container.className = ctx.css('flex flex-col items-center gap-4 p-6 bg-card rounded-lg border border-border');

  let count = 0;
  const counter = document.createElement('div');
  counter.className = ctx.css('text-2xl font-bold text-primary');
  counter.textContent = \`Count: \${count}\`;

  const btnInc = ctx.ui.button({
    label: 'Increment',
    variant: 'contained',
    color: 'primary',
    onClick: () => {
      count++;
      counter.textContent = \`Count: \${count}\`;
    }
  });

  const btnDec = ctx.ui.button({
    label: 'Decrement',
    variant: 'outlined',
    color: 'secondary',
    onClick: () => {
      count--;
      counter.textContent = \`Count: \${count}\`;
    }
  });

  const btnReset = ctx.ui.button({
    label: 'Reset',
    variant: 'text',
    color: 'destructive',
    onClick: () => {
      count = 0;
      counter.textContent = \`Count: \${count}\`;
    }
  });

  const buttonRow = document.createElement('div');
  buttonRow.className = ctx.css('flex gap-2');
  buttonRow.appendChild(btnInc);
  buttonRow.appendChild(btnDec);
  buttonRow.appendChild(btnReset);

  container.appendChild(counter);
  container.appendChild(buttonRow);
  root.appendChild(container);
}
\`\`\`
:::

## 2. DOM Mode - Selector Pattern

Enhance existing HTML elements with \`ctx.ui\`:

:::dynamic
\`\`\`html
<div class="flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
  <h3 class="text-lg font-semibold">Theme-Aware Coin Flip</h3>
  <div class="result text-2xl font-bold text-center p-4 bg-muted rounded">Heads</div>
  <button class="flip-btn">Flip Coin</button>
</div>
\`\`\`

\`\`\`js
function mount(root, ctx) {
  const [flipBtn] = ctx.ui.button('.flip-btn', { variant: 'contained', color: 'accent' });
  const result = root.querySelector('.result');

  let parity = 0;
  flipBtn.addEventListener('click', () => {
    parity ^= 1;
    result.textContent = parity ? 'Tails' : 'Heads';
    result.style.transform = 'rotateY(180deg)';
    result.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      result.style.transform = 'rotateY(0deg)';
    }, 150);
  });
}
\`\`\`
:::

## 3. Canvas Mode - Auto-Redraw

Responsive canvas that auto-redraws on theme change and window resize:

:::dynamic
\`\`\`html
<div class="w-full border border-border rounded-lg overflow-hidden">
  <canvas id="scene"></canvas>
</div>
\`\`\`

\`\`\`js
function draw(canvas, theme, width) {
  const ctx = canvas.getContext('2d');
  const height = Math.floor(width * 0.4);

  canvas.width = width;
  canvas.height = height;

  // Use theme colors via CSS variables
  const skyColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
  const waterColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary');
  const groundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-muted');

  // Draw sky
  ctx.fillStyle = skyColor.trim();
  ctx.fillRect(0, 0, width, height / 3);

  // Draw water
  ctx.fillStyle = waterColor.trim();
  ctx.fillRect(0, height / 3, width, height / 3);

  // Draw ground
  ctx.fillStyle = groundColor.trim();
  ctx.fillRect(0, (2 * height) / 3, width, height / 3);

  // Draw sun/moon
  const sunMoonColor = theme === 'dark' ? '#FFF' : '#FFD700';
  ctx.fillStyle = sunMoonColor;
  ctx.beginPath();
  ctx.arc(width * 0.8, height * 0.15, 30, 0, Math.PI * 2);
  ctx.fill();
}
\`\`\`
:::

## 4. Canvas Mode - Manual Control

Canvas with custom debounce and manual redraw control:

:::dynamic
\`\`\`html
<div class="flex flex-col gap-4">
  <div class="w-full border border-border rounded-lg overflow-hidden">
    <canvas id="manual-canvas"></canvas>
  </div>
  <button class="redraw-btn">Redraw Now</button>
</div>
\`\`\`

\`\`\`js
// Disable auto-redraw, use manual control
const autoRedraw = {
  onThemeChange: false,
  onResize: false
};

function mount(root, ctx) {
  const canvas = root.querySelector('#manual-canvas');
  const [redrawBtn] = ctx.ui.button('.redraw-btn', { variant: 'outlined', color: 'primary' });

  const drawPattern = () => {
    const canvasCtx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = 200;

    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    canvasCtx.clearRect(0, 0, width, height);

    // Draw random colored circles
    const circleColor = ctx.theme === 'dark' ? '#60A5FA' : '#2563EB';
    for (let i = 0; i < 10; i++) {
      canvasCtx.fillStyle = circleColor;
      canvasCtx.globalAlpha = Math.random() * 0.5 + 0.3;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 30 + 10;
      canvasCtx.beginPath();
      canvasCtx.arc(x, y, radius, 0, Math.PI * 2);
      canvasCtx.fill();
    }

    // Request resize after drawing
    ctx.requestResize(height + 100);
  };

  // Initial draw
  drawPattern();

  // Manual redraw on button click
  redrawBtn.addEventListener('click', drawPattern);

  // Optional: redraw on theme change with custom callback
  ctx.onThemeChange(() => {
    setTimeout(drawPattern, 100);
  });
}
\`\`\`
:::

## 5. UI Helpers Showcase

Demonstrating all available \`ctx.ui\` components:

:::dynamic
\`\`\`html
<div class="flex flex-col gap-6 p-6 bg-card rounded-lg border border-border">
  <h3 class="text-xl font-semibold">UI Component Gallery</h3>

  <!-- Buttons -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Buttons</h4>
    <div class="flex flex-wrap gap-2"></div>
  </div>

  <!-- Inputs -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Input Fields</h4>
    <div class="input-container flex flex-col gap-2"></div>
  </div>

  <!-- Checkboxes and Radios -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Checkboxes & Radios</h4>
    <div class="checkbox-container flex flex-col gap-2"></div>
    <div class="radio-container flex flex-col gap-2"></div>
  </div>

  <!-- Select -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Select Dropdown</h4>
    <div class="select-container"></div>
  </div>

  <!-- Textarea -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Textarea</h4>
    <div class="textarea-container"></div>
  </div>
</div>
\`\`\`

\`\`\`js
function mount(root, ctx) {
  // Button variants
  const buttonContainer = root.querySelector('.flex.flex-wrap.gap-2');
  const buttonVariants = [
    { label: 'Contained Primary', variant: 'contained', color: 'primary' },
    { label: 'Outlined Secondary', variant: 'outlined', color: 'secondary' },
    { label: 'Text Accent', variant: 'text', color: 'accent' },
    { label: 'Ghost', variant: 'ghost', color: 'primary' },
  ];

  buttonVariants.forEach(config => {
    const btn = ctx.ui.button({
      ...config,
      onClick: () => console.log(\`\${config.label} clicked!\`)
    });
    buttonContainer.appendChild(btn);
  });

  // Input fields
  const inputContainer = root.querySelector('.input-container');
  const textInput = ctx.ui.input({
    type: 'text',
    placeholder: 'Enter your name',
    onInput: (e) => console.log('Text input:', e.target.value)
  });
  const numberInput = ctx.ui.input({
    type: 'number',
    placeholder: 'Enter a number',
    onChange: (e) => console.log('Number:', e.target.value)
  });
  inputContainer.appendChild(textInput);
  inputContainer.appendChild(numberInput);

  // Checkboxes
  const checkboxContainer = root.querySelector('.checkbox-container');
  const checkbox1 = ctx.ui.checkbox({
    label: 'Enable notifications',
    checked: true,
    onChange: (checked) => console.log('Notifications:', checked)
  });
  const checkbox2 = ctx.ui.checkbox({
    label: 'Enable dark mode',
    checked: false,
    onChange: (checked) => console.log('Dark mode:', checked)
  });
  checkboxContainer.appendChild(checkbox1);
  checkboxContainer.appendChild(checkbox2);

  // Radio buttons
  const radioContainer = root.querySelector('.radio-container');
  const colors = ['red', 'green', 'blue'];
  colors.forEach(color => {
    const radio = ctx.ui.radio({
      name: 'color',
      value: color,
      label: color.charAt(0).toUpperCase() + color.slice(1),
      checked: color === 'red',
      onChange: (value) => console.log('Selected color:', value)
    });
    radioContainer.appendChild(radio);
  });

  // Select dropdown
  const selectContainer = root.querySelector('.select-container');
  const select = ctx.ui.select({
    items: [
      { value: 'easy', label: 'Easy' },
      { value: 'medium', label: 'Medium' },
      { value: 'hard', label: 'Hard' }
    ],
    placeholder: 'Select difficulty',
    onChange: (value) => console.log('Difficulty:', value)
  });
  selectContainer.appendChild(select);

  // Textarea
  const textareaContainer = root.querySelector('.textarea-container');
  const textarea = ctx.ui.textarea({
    placeholder: 'Write your thoughts here...',
    rows: 4,
    onInput: (e) => console.log('Textarea length:', e.target.value.length)
  });
  textareaContainer.appendChild(textarea);
}
\`\`\`
:::

## 6. Custom CSS Styling

Using custom CSS blocks for advanced styling:

:::dynamic
\`\`\`html
<div class="custom-gradient-card">
  <div class="pulse-circle"></div>
  <h3 class="card-title">Custom Styled Card</h3>
  <p class="card-description">This card uses custom CSS with gradients, animations, and theme-aware colors.</p>
  <button class="custom-button">Learn More</button>
</div>
\`\`\`

\`\`\`css
.custom-gradient-card {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.pulse-circle {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.1;
  }
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.card-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.95;
  position: relative;
  z-index: 1;
}

.custom-button {
  background: white;
  color: var(--color-primary);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  z-index: 1;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.custom-button:active {
  transform: translateY(0);
}
\`\`\`

\`\`\`js
function mount(root, ctx) {
  const button = root.querySelector('.custom-button');
  button.addEventListener('click', () => {
    alert('Custom CSS styling is powerful!');
  });
}
\`\`\`
:::

## 7. Shared Components - Nim Game Sample

### Default Configuration

Using the nim-game-sample component with all default settings:

:::dynamic
\`\`\`yaml
use: nim-game-sample
\`\`\`
:::

### Custom Piles with No Reset

This variant has 4 piles and the reset button is disabled:

:::dynamic
\`\`\`yaml
use: nim-game-sample
config:
  startingPiles: [1, 3, 5, 7]
  allowReset: false
\`\`\`
:::

### Minimal Configuration

A minimal game with just 2 piles and no status message:

:::dynamic
\`\`\`yaml
use: nim-game-sample
config:
  startingPiles: [2, 4]
  showStatus: false
\`\`\`
:::

### Large Configuration

A challenging variant with 5 piles:

:::dynamic
\`\`\`yaml
use: nim-game-sample
config:
  startingPiles: [2, 3, 5, 7, 9]
  allowReset: true
  showStatus: true
\`\`\`
:::

---

## Summary

This showcase demonstrates:

- **DOM Mode (Factory)**: Creating elements programmatically with \`ctx.ui\` helpers
- **DOM Mode (Selector)**: Enhancing existing HTML with styling and behavior
- **Canvas Mode (Auto)**: Responsive drawings that auto-redraw on theme/resize
- **Canvas Mode (Manual)**: Full control over redraw timing with callbacks
- **UI Helpers**: All available components (buttons, inputs, checkboxes, radios, selects, textareas)
- **Custom CSS**: Advanced styling with gradients, animations, and theme variables
- **Shared Components**: Reusable components from the component registry

All examples are theme-aware and will adapt when you toggle between light and dark mode!
`,dynamicBlocks:[{type:"dynamic",mode:"dom",code:`function mount(root, ctx) {
  const container = document.createElement('div');
  container.className = ctx.css('flex flex-col items-center gap-4 p-6 bg-card rounded-lg border border-border');

  let count = 0;
  const counter = document.createElement('div');
  counter.className = ctx.css('text-2xl font-bold text-primary');
  counter.textContent = \`Count: \${count}\`;

  const btnInc = ctx.ui.button({
    label: 'Increment',
    variant: 'contained',
    color: 'primary',
    onClick: () => {
      count++;
      counter.textContent = \`Count: \${count}\`;
    }
  });

  const btnDec = ctx.ui.button({
    label: 'Decrement',
    variant: 'outlined',
    color: 'secondary',
    onClick: () => {
      count--;
      counter.textContent = \`Count: \${count}\`;
    }
  });

  const btnReset = ctx.ui.button({
    label: 'Reset',
    variant: 'text',
    color: 'destructive',
    onClick: () => {
      count = 0;
      counter.textContent = \`Count: \${count}\`;
    }
  });

  const buttonRow = document.createElement('div');
  buttonRow.className = ctx.css('flex gap-2');
  buttonRow.appendChild(btnInc);
  buttonRow.appendChild(btnDec);
  buttonRow.appendChild(btnReset);

  container.appendChild(counter);
  container.appendChild(buttonRow);
  root.appendChild(container);
}`},{type:"dynamic",mode:"dom",code:`function mount(root, ctx) {
  const [flipBtn] = ctx.ui.button('.flip-btn', { variant: 'contained', color: 'accent' });
  const result = root.querySelector('.result');

  let parity = 0;
  flipBtn.addEventListener('click', () => {
    parity ^= 1;
    result.textContent = parity ? 'Tails' : 'Heads';
    result.style.transform = 'rotateY(180deg)';
    result.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      result.style.transform = 'rotateY(0deg)';
    }, 150);
  });
}`,layout:`<div class="flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
  <h3 class="text-lg font-semibold">Theme-Aware Coin Flip</h3>
  <div class="result text-2xl font-bold text-center p-4 bg-muted rounded">Heads</div>
  <button class="flip-btn">Flip Coin</button>
</div>`},{type:"dynamic",mode:"dom",code:`function draw(canvas, theme, width) {
  const ctx = canvas.getContext('2d');
  const height = Math.floor(width * 0.4);

  canvas.width = width;
  canvas.height = height;

  // Use theme colors via CSS variables
  const skyColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
  const waterColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary');
  const groundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-muted');

  // Draw sky
  ctx.fillStyle = skyColor.trim();
  ctx.fillRect(0, 0, width, height / 3);

  // Draw water
  ctx.fillStyle = waterColor.trim();
  ctx.fillRect(0, height / 3, width, height / 3);

  // Draw ground
  ctx.fillStyle = groundColor.trim();
  ctx.fillRect(0, (2 * height) / 3, width, height / 3);

  // Draw sun/moon
  const sunMoonColor = theme === 'dark' ? '#FFF' : '#FFD700';
  ctx.fillStyle = sunMoonColor;
  ctx.beginPath();
  ctx.arc(width * 0.8, height * 0.15, 30, 0, Math.PI * 2);
  ctx.fill();
}`,layout:`<div class="w-full border border-border rounded-lg overflow-hidden">
  <canvas id="scene"></canvas>
</div>`},{type:"dynamic",mode:"dom",code:`// Disable auto-redraw, use manual control
const autoRedraw = {
  onThemeChange: false,
  onResize: false
};

function mount(root, ctx) {
  const canvas = root.querySelector('#manual-canvas');
  const [redrawBtn] = ctx.ui.button('.redraw-btn', { variant: 'outlined', color: 'primary' });

  const drawPattern = () => {
    const canvasCtx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = 200;

    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    canvasCtx.clearRect(0, 0, width, height);

    // Draw random colored circles
    const circleColor = ctx.theme === 'dark' ? '#60A5FA' : '#2563EB';
    for (let i = 0; i < 10; i++) {
      canvasCtx.fillStyle = circleColor;
      canvasCtx.globalAlpha = Math.random() * 0.5 + 0.3;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 30 + 10;
      canvasCtx.beginPath();
      canvasCtx.arc(x, y, radius, 0, Math.PI * 2);
      canvasCtx.fill();
    }

    // Request resize after drawing
    ctx.requestResize(height + 100);
  };

  // Initial draw
  drawPattern();

  // Manual redraw on button click
  redrawBtn.addEventListener('click', drawPattern);

  // Optional: redraw on theme change with custom callback
  ctx.onThemeChange(() => {
    setTimeout(drawPattern, 100);
  });
}`,layout:`<div class="flex flex-col gap-4">
  <div class="w-full border border-border rounded-lg overflow-hidden">
    <canvas id="manual-canvas"></canvas>
  </div>
  <button class="redraw-btn">Redraw Now</button>
</div>`},{type:"dynamic",mode:"dom",code:`function mount(root, ctx) {
  // Button variants
  const buttonContainer = root.querySelector('.flex.flex-wrap.gap-2');
  const buttonVariants = [
    { label: 'Contained Primary', variant: 'contained', color: 'primary' },
    { label: 'Outlined Secondary', variant: 'outlined', color: 'secondary' },
    { label: 'Text Accent', variant: 'text', color: 'accent' },
    { label: 'Ghost', variant: 'ghost', color: 'primary' },
  ];

  buttonVariants.forEach(config => {
    const btn = ctx.ui.button({
      ...config,
      onClick: () => console.log(\`\${config.label} clicked!\`)
    });
    buttonContainer.appendChild(btn);
  });

  // Input fields
  const inputContainer = root.querySelector('.input-container');
  const textInput = ctx.ui.input({
    type: 'text',
    placeholder: 'Enter your name',
    onInput: (e) => console.log('Text input:', e.target.value)
  });
  const numberInput = ctx.ui.input({
    type: 'number',
    placeholder: 'Enter a number',
    onChange: (e) => console.log('Number:', e.target.value)
  });
  inputContainer.appendChild(textInput);
  inputContainer.appendChild(numberInput);

  // Checkboxes
  const checkboxContainer = root.querySelector('.checkbox-container');
  const checkbox1 = ctx.ui.checkbox({
    label: 'Enable notifications',
    checked: true,
    onChange: (checked) => console.log('Notifications:', checked)
  });
  const checkbox2 = ctx.ui.checkbox({
    label: 'Enable dark mode',
    checked: false,
    onChange: (checked) => console.log('Dark mode:', checked)
  });
  checkboxContainer.appendChild(checkbox1);
  checkboxContainer.appendChild(checkbox2);

  // Radio buttons
  const radioContainer = root.querySelector('.radio-container');
  const colors = ['red', 'green', 'blue'];
  colors.forEach(color => {
    const radio = ctx.ui.radio({
      name: 'color',
      value: color,
      label: color.charAt(0).toUpperCase() + color.slice(1),
      checked: color === 'red',
      onChange: (value) => console.log('Selected color:', value)
    });
    radioContainer.appendChild(radio);
  });

  // Select dropdown
  const selectContainer = root.querySelector('.select-container');
  const select = ctx.ui.select({
    items: [
      { value: 'easy', label: 'Easy' },
      { value: 'medium', label: 'Medium' },
      { value: 'hard', label: 'Hard' }
    ],
    placeholder: 'Select difficulty',
    onChange: (value) => console.log('Difficulty:', value)
  });
  selectContainer.appendChild(select);

  // Textarea
  const textareaContainer = root.querySelector('.textarea-container');
  const textarea = ctx.ui.textarea({
    placeholder: 'Write your thoughts here...',
    rows: 4,
    onInput: (e) => console.log('Textarea length:', e.target.value.length)
  });
  textareaContainer.appendChild(textarea);
}`,layout:`<div class="flex flex-col gap-6 p-6 bg-card rounded-lg border border-border">
  <h3 class="text-xl font-semibold">UI Component Gallery</h3>

  <!-- Buttons -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Buttons</h4>
    <div class="flex flex-wrap gap-2"></div>
  </div>

  <!-- Inputs -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Input Fields</h4>
    <div class="input-container flex flex-col gap-2"></div>
  </div>

  <!-- Checkboxes and Radios -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Checkboxes & Radios</h4>
    <div class="checkbox-container flex flex-col gap-2"></div>
    <div class="radio-container flex flex-col gap-2"></div>
  </div>

  <!-- Select -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Select Dropdown</h4>
    <div class="select-container"></div>
  </div>

  <!-- Textarea -->
  <div class="flex flex-col gap-2">
    <h4 class="text-sm font-medium text-muted-foreground">Textarea</h4>
    <div class="textarea-container"></div>
  </div>
</div>`},{type:"dynamic",mode:"dom",code:`function mount(root, ctx) {
  const button = root.querySelector('.custom-button');
  button.addEventListener('click', () => {
    alert('Custom CSS styling is powerful!');
  });
}`,layout:`<div class="custom-gradient-card">
  <div class="pulse-circle"></div>
  <h3 class="card-title">Custom Styled Card</h3>
  <p class="card-description">This card uses custom CSS with gradients, animations, and theme-aware colors.</p>
  <button class="custom-button">Learn More</button>
</div>`,css:`.custom-gradient-card {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.pulse-circle {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.1;
  }
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.card-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.95;
  position: relative;
  z-index: 1;
}

.custom-button {
  background: white;
  color: var(--color-primary);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  z-index: 1;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.custom-button:active {
  transform: translateY(0);
}`},{type:"dynamic",mode:"component",componentId:"nim-game-sample"},{type:"dynamic",mode:"component",componentId:"nim-game-sample",config:{startingPiles:[1,3,5,7],allowReset:!1}},{type:"dynamic",mode:"component",componentId:"nim-game-sample",config:{startingPiles:[2,4],showStatus:!1}},{type:"dynamic",mode:"component",componentId:"nim-game-sample",config:{startingPiles:[2,3,5,7,9],allowReset:!0,showStatus:!0}}]};export{n as default};
