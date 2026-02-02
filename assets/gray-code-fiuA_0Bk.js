const e={slug:"gray-code",metadata:{id:"expedition-2",title:"Gray Code",description:"Learn about Gray code, a binary numbering system where consecutive values differ by only one bit. Essential for puzzles involving binary states with single-bit transitions.",prerequisites:["binary"],dateCreated:"2025-11-02",lastUpdated:"2025-11-02"},content:`<p>Let’s revisit counting in binary. For this example, we will count from 0 to 7 with 3-digit binary numbers.</p>









































<table><thead><tr><th>Decimal</th><th>Binary</th></tr></thead><tbody><tr><td>0</td><td><code>000</code></td></tr><tr><td>1</td><td><code>001</code></td></tr><tr><td>2</td><td><code>010</code></td></tr><tr><td>3</td><td><code>011</code></td></tr><tr><td>4</td><td><code>100</code></td></tr><tr><td>5</td><td><code>101</code></td></tr><tr><td>6</td><td><code>110</code></td></tr><tr><td>7</td><td><code>111</code></td></tr></tbody></table>
<p>In a mechanical counter, these 0s and 1s could be represented with switches or currents: off to represent “<code>0</code>”, and on to represent “<code>1</code>”. Thus, a number like 5 would be represented with 3 wires in the “on, off, on” positions respectively.</p>
<p>Let’s add 1 to the number 5 to get 6. The second and third wires need to be switched to give the new position of “on, on, off”. However, due to delays in switching, the second and third wires might not switch at the same time. This might give incorrect values of “on, off, off” (4) or “on, on, on” (7) if the wires are to be read at this time.</p>
<p>A solution to this is to come up with a new representation for numbers. We still want to use the binary digits, since each wire still only has 2 states, off and on. Let’s take a look at the following binary representation of the numbers from 0 to 7.</p>









































<table><thead><tr><th>Decimal</th><th>Gray code</th></tr></thead><tbody><tr><td>0</td><td><code>000</code></td></tr><tr><td>1</td><td><code>001</code></td></tr><tr><td>2</td><td><code>011</code></td></tr><tr><td>3</td><td><code>010</code></td></tr><tr><td>4</td><td><code>110</code></td></tr><tr><td>5</td><td><code>111</code></td></tr><tr><td>6</td><td><code>101</code></td></tr><tr><td>7</td><td><code>100</code></td></tr></tbody></table>
<p>This is the Gray code representation, also called the reflected binary code. In this new representation, there’s only 1 bit of difference between any 2 consecutive numbers. This way, the value read will always be correct, even when the switches are changing. A nice bonus is that “<code>100</code>” (7) is also only 1 bit away from resetting back to “<code>000</code>” (0), forming a cycle.</p>
<p>But does this generalise to bit strings of other lengths? Yes! Let’s take a look at the construction. First, we start with the values 0 and 1, represented with the bits <code>0</code> and <code>1</code>.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>To construct the Gray code of length 2, we perform the following steps:</p>
<ol>
<li>Take the Gray code sequence, reverse it, then place it below the original order</li>
</ol>
<div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<ol start="2">
<li>Append the digit <code>0</code> to the front of the first half of the sequence, and <code>1</code> to the second half of the sequence (the one we just copied).</li>
</ol>
<div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>And we’re done! Reading the codes in order, we get 0 → <code>00</code>, 1 → <code>01</code>, 2 → <code>11</code>, and 3 → <code>10</code>. Let’s perform this operation one more time to get all Gray codes of length 3.</p>
<ol>
<li>Take the Gray code sequence, reverse it, then place it below the original order</li>
</ol>
<div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<ol start="2">
<li>Append the digit <code>0</code> to the front of the first half of the sequence, and <code>1</code> to the second half of the sequence.</li>
</ol>
<div class="dynamic-block-placeholder" data-dynamic-block-id="4" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>We’ve just reconstructed the Gray code we saw earlier. We can continue repeating this process to get the Gray codes of any arbitrary length.</p>
<p>While Gray codes are helpful in a few specialised applications in engineering, you won’t actually find them in most devices because of its weaknesses. Gray codes are great when you need to increment a counter by 1, but that’s about it. Adding 2 numbers in Gray code, for instance, is quite computationally messy. That’s why in computers, you’ll see the <a href="https://en.wikipedia.org/wiki/Two%27s_complement">Two’s Complement</a>—a similar system to binary counting but encodes negative numbers too—being used instead.</p>
<p>For puzzles, look out for situations that involve binary states where adjacent states can only differ by 1 bit.</p>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
Let’s revisit counting in binary. For this example, we will count from 0 to 7 with 3-digit binary numbers.

| Decimal | Binary |
|---------|--------|
| 0       | \`000\`  |
| 1       | \`001\`  |
| 2       | \`010\`  |
| 3       | \`011\`  |
| 4       | \`100\`  |
| 5       | \`101\`  |
| 6       | \`110\`  |
| 7       | \`111\`  |

In a mechanical counter, these 0s and 1s could be represented with switches or currents: off to represent “\`0\`”, and on to represent “\`1\`”. Thus, a number like 5 would be represented with 3 wires in the “on, off, on” positions respectively.

Let’s add 1 to the number 5 to get 6. The second and third wires need to be switched to give the new position of “on, on, off”. However, due to delays in switching, the second and third wires might not switch at the same time. This might give incorrect values of “on, off, off” (4) or “on, on, on” (7) if the wires are to be read at this time.

A solution to this is to come up with a new representation for numbers. We still want to use the binary digits, since each wire still only has 2 states, off and on. Let’s take a look at the following binary representation of the numbers from 0 to 7.

| Decimal | Gray code |
|---------|-----------|
| 0       | \`000\`     |
| 1       | \`001\`     |
| 2       | \`011\`     |
| 3       | \`010\`     |
| 4       | \`110\`     |
| 5       | \`111\`     |
| 6       | \`101\`     |
| 7       | \`100\`     |

This is the Gray code representation, also called the reflected binary code. In this new representation, there’s only 1 bit of difference between any 2 consecutive numbers. This way, the value read will always be correct, even when the switches are changing. A nice bonus is that “\`100\`” (7) is also only 1 bit away from resetting back to “\`000\`” (0), forming a cycle.

But does this generalise to bit strings of other lengths? Yes! Let’s take a look at the construction. First, we start with the values 0 and 1, represented with the bits \`0\` and \`1\`.

:::dynamic
\`\`\`yaml
use: '#gray-code-diagram'
title: "Initial Gray code sequence: 0 and 1"
props:
  digits: 1
  step: 'none'
:::

To construct the Gray code of length 2, we perform the following steps:  

1. Take the Gray code sequence, reverse it, then place it below the original order

:::dynamic
\`\`\`yaml
use: '#gray-code-diagram'
title: "Step 1: Reversing and duplicating the 1-bit Gray code sequence"
props:
  digits: 1
  step: 'duplicate'
\`\`\`
:::

2. Append the digit \`0\` to the front of the first half of the sequence, and \`1\` to the second half of the sequence (the one we just copied).

:::dynamic
\`\`\`yaml
use: '#gray-code-diagram'
title: "Step 2: Appending prefix bits to construct 2-bit Gray code"
props:
  digits: 1
  step: 'append'
\`\`\`
:::

And we’re done! Reading the codes in order, we get 0 → \`00\`, 1 → \`01\`, 2 → \`11\`, and 3 → \`10\`. Let’s perform this operation one more time to get all Gray codes of length 3.

1. Take the Gray code sequence, reverse it, then place it below the original order

:::dynamic
\`\`\`yaml
use: '#gray-code-diagram'
title: "Step 1: Reversing and duplicating the 2-bit Gray code sequence"
props:
  digits: 2
  step: 'duplicate'
\`\`\`
:::

2. Append the digit \`0\` to the front of the first half of the sequence, and \`1\` to the second half of the sequence.

:::dynamic
\`\`\`yaml
use: '#gray-code-diagram'
title: "Step 2: Appending prefix bits to construct 3-bit Gray code"
props:
  digits: 2
  step: 'append'
:::

We’ve just reconstructed the Gray code we saw earlier. We can continue repeating this process to get the Gray codes of any arbitrary length.

While Gray codes are helpful in a few specialised applications in engineering, you won’t actually find them in most devices because of its weaknesses. Gray codes are great when you need to increment a counter by 1, but that’s about it. Adding 2 numbers in Gray code, for instance, is quite computationally messy. That’s why in computers, you’ll see the [Two’s Complement](https://en.wikipedia.org/wiki/Two%27s_complement)—a similar system to binary counting but encodes negative numbers too—being used instead.

For puzzles, look out for situations that involve binary states where adjacent states can only differ by 1 bit.

:::component[gray-code-diagram]
\`\`\`html
<div class="flex flex-nowrap px-4 gap-2">
  <div id="gray-codes" class="flex-none self-start flex flex-col font-mono"></div>
  <svg id="arrows-svg" class="hidden">
    <defs></defs>
    <g id="arrows">
    </g>
  </svg>
</div>
\`\`\`
\`\`\`js
function mount({ api, props }) {
  const grayCodesContainer = document.querySelector('#gray-codes');
  const arrowsContainer = document.querySelector('#arrows');

  const digitLength = props.digits + (props.step === 'append' ? 1 : 0);
  let grayCodes = generateGrayCode(digitLength);
  if (props.step === 'duplicate') {
    grayCodes = [ ...grayCodes, ...grayCodes.toReversed()];
  }

  for (let i = 0; i < grayCodes.length; i++) {
    const codeElem = document.createElement('div');
    let code = grayCodes[i];

    if (props.step === 'duplicate' && i >= grayCodes.length / 2) {
      codeElem.classList.add(...api.css('font-bold underline').split(' '));
    }
    if (props.step === 'append') {
      const appendedElem = document.createElement('span');
      appendedElem.classList.add(...api.css('font-bold underline').split(' '));
      appendedElem.innerText = code.charAt(0);
      codeElem.append(appendedElem);
      code = code.substring(1);
    }

    const textElem = document.createElement('span');
    textElem.innerText = code;
    codeElem.append(textElem);

    grayCodesContainer.append(codeElem);
  }

  if (props.step === 'duplicate') {
    const arrowsSvg = document.querySelector('#arrows-svg');
    arrowsSvg.classList.remove('hidden');

    const arrowCount = grayCodes.length / 2;

    const arrowThickness = 1;
    const arrowBaseWidth = 10;
    const arrowIncrementalWidth = 6;
    const arrowheadWidth = 4;
    const arrowheightHeight = 8;
    const arrowColor = 'currentColor';

    const arrowsGroup = document.querySelector('#arrows');
    function draw() {
      const height = grayCodesContainer.getBoundingClientRect().height;
      arrowsSvg.setAttribute('height', height);
      const lineHeight = height / grayCodes.length;

      Array.from(arrowsGroup.children).forEach(elem => elem.remove());

      function addArrow(x1, y1, x2, y2) {
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', \`\${x1},\${y1} \${x2},\${y1} \${x2},\${y2} \${x1},\${y2}\`);
        polyline.setAttribute('fill', 'none');
        polyline.setAttribute('stroke', arrowColor);
        polyline.setAttribute('stroke-width', arrowThickness);
        polyline.setAttribute('marker-end', 'url(#arrowhead)');
        arrowsGroup.append(polyline);
      }

      for (let i = 0; i < arrowCount; i++) {
        const y1 = (i + 0.5) * lineHeight;
        const y2 = height - y1;
        const x1 = 0;
        const x2 = arrowBaseWidth + (arrowCount - i - 1) * arrowIncrementalWidth;
        addArrow(x1, y1, x2, y2);
      }
    }

    (function initialize() {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', 'arrowhead');
      marker.setAttribute('refX', \`\${arrowheadWidth}\`);
      marker.setAttribute('refY', \`\${arrowheightHeight / 2}\`);
      marker.setAttribute('markerUnits', 'strokeWidth');
      marker.setAttribute('markerWidth', \`\${arrowheadWidth}\`);
      marker.setAttribute('markerHeight', \`\${arrowheightHeight}\`);
      marker.setAttribute('orient', 'auto');

      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', \`0 0, \${arrowheadWidth} \${arrowheightHeight / 2}, 0 \${arrowheightHeight}\`);
      polygon.setAttribute('fill', arrowColor);

      marker.append(polygon);
      arrowsSvg.querySelector('defs').append(marker);

      arrowsSvg.setAttribute('width', arrowBaseWidth + (arrowCount - 1) * arrowIncrementalWidth + arrowThickness);

      let prevHeight = 0;
      const observer = new ResizeObserver(entries => {
        const curHeight = grayCodesContainer.getBoundingClientRect().height;
        if (prevHeight === curHeight) { return; }
        prevHeight = curHeight;
        draw();
      });
      observer.observe(grayCodesContainer);
      draw();
    })();
  }
}

function generateGrayCode(digitCount) {
  if (digitCount === 0) { return [''] }

  const prevCode = generateGrayCode(digitCount - 1);
  return [
    ...prevCode.map(v => '0' + v),
    ...prevCode.toReversed().map(v => '1' + v),
  ];
}
\`\`\`
:::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#gray-code-diagram",props:{digits:1,step:"none"},title:"Initial Gray code sequence: 0 and 1",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/gray-code.md"},{type:"dynamic",mode:"component",componentId:"#gray-code-diagram",props:{digits:1,step:"duplicate"},title:"Step 1: Reversing and duplicating the 1-bit Gray code sequence",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/gray-code.md"},{type:"dynamic",mode:"component",componentId:"#gray-code-diagram",props:{digits:1,step:"append"},title:"Step 2: Appending prefix bits to construct 2-bit Gray code",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/gray-code.md"},{type:"dynamic",mode:"component",componentId:"#gray-code-diagram",props:{digits:2,step:"duplicate"},title:"Step 1: Reversing and duplicating the 2-bit Gray code sequence",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/gray-code.md"},{type:"dynamic",mode:"component",componentId:"#gray-code-diagram",props:{digits:2,step:"append"},title:"Step 2: Appending prefix bits to construct 3-bit Gray code",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/expeditions/gray-code.md"}],inlineComponents:{"gray-code-diagram":{id:"gray-code-diagram",code:`function mount({ api, props }) {
  const grayCodesContainer = document.querySelector('#gray-codes');
  const arrowsContainer = document.querySelector('#arrows');

  const digitLength = props.digits + (props.step === 'append' ? 1 : 0);
  let grayCodes = generateGrayCode(digitLength);
  if (props.step === 'duplicate') {
    grayCodes = [ ...grayCodes, ...grayCodes.toReversed()];
  }

  for (let i = 0; i < grayCodes.length; i++) {
    const codeElem = document.createElement('div');
    let code = grayCodes[i];

    if (props.step === 'duplicate' && i >= grayCodes.length / 2) {
      codeElem.classList.add(...api.css('font-bold underline').split(' '));
    }
    if (props.step === 'append') {
      const appendedElem = document.createElement('span');
      appendedElem.classList.add(...api.css('font-bold underline').split(' '));
      appendedElem.innerText = code.charAt(0);
      codeElem.append(appendedElem);
      code = code.substring(1);
    }

    const textElem = document.createElement('span');
    textElem.innerText = code;
    codeElem.append(textElem);

    grayCodesContainer.append(codeElem);
  }

  if (props.step === 'duplicate') {
    const arrowsSvg = document.querySelector('#arrows-svg');
    arrowsSvg.classList.remove('hidden');

    const arrowCount = grayCodes.length / 2;

    const arrowThickness = 1;
    const arrowBaseWidth = 10;
    const arrowIncrementalWidth = 6;
    const arrowheadWidth = 4;
    const arrowheightHeight = 8;
    const arrowColor = 'currentColor';

    const arrowsGroup = document.querySelector('#arrows');
    function draw() {
      const height = grayCodesContainer.getBoundingClientRect().height;
      arrowsSvg.setAttribute('height', height);
      const lineHeight = height / grayCodes.length;

      Array.from(arrowsGroup.children).forEach(elem => elem.remove());

      function addArrow(x1, y1, x2, y2) {
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', \`\${x1},\${y1} \${x2},\${y1} \${x2},\${y2} \${x1},\${y2}\`);
        polyline.setAttribute('fill', 'none');
        polyline.setAttribute('stroke', arrowColor);
        polyline.setAttribute('stroke-width', arrowThickness);
        polyline.setAttribute('marker-end', 'url(#arrowhead)');
        arrowsGroup.append(polyline);
      }

      for (let i = 0; i < arrowCount; i++) {
        const y1 = (i + 0.5) * lineHeight;
        const y2 = height - y1;
        const x1 = 0;
        const x2 = arrowBaseWidth + (arrowCount - i - 1) * arrowIncrementalWidth;
        addArrow(x1, y1, x2, y2);
      }
    }

    (function initialize() {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', 'arrowhead');
      marker.setAttribute('refX', \`\${arrowheadWidth}\`);
      marker.setAttribute('refY', \`\${arrowheightHeight / 2}\`);
      marker.setAttribute('markerUnits', 'strokeWidth');
      marker.setAttribute('markerWidth', \`\${arrowheadWidth}\`);
      marker.setAttribute('markerHeight', \`\${arrowheightHeight}\`);
      marker.setAttribute('orient', 'auto');

      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', \`0 0, \${arrowheadWidth} \${arrowheightHeight / 2}, 0 \${arrowheightHeight}\`);
      polygon.setAttribute('fill', arrowColor);

      marker.append(polygon);
      arrowsSvg.querySelector('defs').append(marker);

      arrowsSvg.setAttribute('width', arrowBaseWidth + (arrowCount - 1) * arrowIncrementalWidth + arrowThickness);

      let prevHeight = 0;
      const observer = new ResizeObserver(entries => {
        const curHeight = grayCodesContainer.getBoundingClientRect().height;
        if (prevHeight === curHeight) { return; }
        prevHeight = curHeight;
        draw();
      });
      observer.observe(grayCodesContainer);
      draw();
    })();
  }
}

function generateGrayCode(digitCount) {
  if (digitCount === 0) { return [''] }

  const prevCode = generateGrayCode(digitCount - 1);
  return [
    ...prevCode.map(v => '0' + v),
    ...prevCode.toReversed().map(v => '1' + v),
  ];
}`,layout:`<div class="flex flex-nowrap px-4 gap-2">
  <div id="gray-codes" class="flex-none self-start flex flex-col font-mono"></div>
  <svg id="arrows-svg" class="hidden">
    <defs></defs>
    <g id="arrows">
    </g>
  </svg>
</div>`,startLine:123}}};export{e as default};
