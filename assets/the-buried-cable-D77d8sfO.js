const s={slug:"the-buried-cable",metadata:{id:"puzzle-74",title:"The Buried Cable",concepts:["optimisation","geometry"],difficulty:{concepts:"medium",reasoning:"medium"},tags:["has-solution"],credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-03-05",lastUpdated:"2026-03-05",preview:"The enemy has run a communication cable in a straight line somewhere beneath a square plot of land, 1 km on each side. The cable's exact position and direction...",websitePreview:"The enemy has run a communication cable in a straight line somewhere beneath a square plot of land, 1 km on each side. The cable's exact position and direction..."},content:`<p>The enemy has run a communication cable in a straight line somewhere beneath a square plot of land, 1 km on each side. The cable's exact position and direction are unknown — only that it crosses the plot in a straight line.</p>
<p>You need to dig trenches within this plot of land to guarantee you'll find the cable. What is the shortest total length of trenches needed?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>We can dig along the full perimeter of the square, totalling 4 km of trenches. But can we do better?</p><div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The best known answer is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msqrt><mn>2</mn></msqrt><mo>+</mo><mfrac><msqrt><mn>6</mn></msqrt><mn>2</mn></mfrac><mo>≈</mo><mn>2.64</mn></mrow><annotation>\\sqrt{2} + \\frac{\\sqrt{6}}{2} \\approx 2.64</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.383em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.038em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.399em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9128em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight">6</span></span></span><span style="top:-2.8728em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1272em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2.64</span></span></span></span> km. Whether this is truly optimal remains an open problem.</p><p>Label the square's vertices A (top-left), B (top-right), C (bottom-right), D (bottom-left). Any straight line crossing the square enters through one side and exits through another, so our trenches need to intersect every such line.</p><p>The full perimeter works — 4 km of trenches, and every line through the square crosses at least one side. But we can do better.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="1" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>We can drop one side. Digging along just BC, CD, and DA (3 km total) still works: any line entering through AB must exit through one of the other three sides, where it hits our trench.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="2" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Can we do better? Consider digging along both diagonals, AC and BD, forming an X. Each diagonal has length <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msqrt><mn>2</mn></msqrt></mrow><annotation>\\sqrt{2}</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span> km, giving <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>2.83</mn></mrow><annotation>2\\sqrt{2} \\approx 2.83</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord">2</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2.83</span></span></span></span> km total.</p><p>If a line crosses between opposite sides, it traverses the full width or height of the square and must cross both diagonals. If it crosses between adjacent sides (say bottom to right), the diagonal through the opposite corner separates those two sides — the line starts on one side of it and ends on the other, so it must cross it.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="3" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>Can we do better still? Let E <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mo>=</mo><mrow><mo>(</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac><mo>,</mo><mtext> </mtext><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo></mrow></mrow><annotation>= \\left(\\frac{1}{2\\sqrt{3}},\\, \\frac{1}{2}\\right)</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.8em;vertical-align:-0.65em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size2">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.551em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9128em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight">3</span></span></span><span style="top:-2.8728em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1272em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.538em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size2">)</span></span></span></span></span></span> and F <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mo>=</mo><mrow><mo>(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac><mo>,</mo><mtext> </mtext><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo></mrow></mrow><annotation>= \\left(1 - \\frac{1}{2\\sqrt{3}},\\, \\frac{1}{2}\\right)</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.8em;vertical-align:-0.65em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size2">(</span></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.551em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9128em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight">3</span></span></span><span style="top:-2.8728em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1272em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.538em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size2">)</span></span></span></span></span></span>. The trench pattern AE, DE, EF, BF, CF forms a connected network where every edge meets at <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>120</mn><mi>°</mi></mrow><annotation>120°</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord">120°</span></span></span></span> angles at E and F, giving a total length of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mo>≈</mo><mn>2.73</mn></mrow><annotation>1 + \\sqrt{3} \\approx 2.73</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">3</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2.73</span></span></span></span> km.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="4" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>The best known solution goes further by allowing the trench to be disconnected. Let E <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mo>=</mo><mrow><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mtext> </mtext><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo></mrow></mrow><annotation>= \\left(\\frac{1}{2},\\, \\frac{1}{2}\\right)</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2em;vertical-align:-0.35em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size1">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size1">)</span></span></span></span></span></span> (the centre) and F <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mo>=</mo><mrow><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo>,</mo><mtext> </mtext><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo>)</mo></mrow></mrow><annotation>= \\left(\\frac{1}{2} - \\frac{\\sqrt{3}}{6},\\, \\frac{1}{2} - \\frac{\\sqrt{3}}{6}\\right)</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.8em;vertical-align:-0.65em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size2">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.038em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">6</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.399em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9128em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight">3</span></span></span><span style="top:-2.8728em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1272em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.038em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">6</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.399em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9128em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight">3</span></span></span><span style="top:-2.8728em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1272em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size2">)</span></span></span></span></span></span> (the Fermat point of triangle BCD). The trench pattern has two separate components: the segment AE, and the network CF, DF, BF. The total length is <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msqrt><mn>2</mn></msqrt><mo>+</mo><mfrac><msqrt><mn>6</mn></msqrt><mn>2</mn></mfrac><mo>≈</mo><mn>2.64</mn></mrow><annotation>\\sqrt{2} + \\frac{\\sqrt{6}}{2} \\approx 2.64</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.383em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.038em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.399em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9128em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight">6</span></span></span><span style="top:-2.8728em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1272em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2.64</span></span></span></span> km.</p><div class="dynamic-block-placeholder" data-dynamic-block-id="5" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div><p>This is the shortest known solution, but whether it's truly optimal remains an open problem in mathematics, known as the opaque square problem.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
The enemy has run a communication cable in a straight line somewhere beneath a square plot of land, 1 km on each side. The cable's exact position and direction are unknown — only that it crosses the plot in a straight line.

You need to dig trenches within this plot of land to guarantee you'll find the cable. What is the shortest total length of trenches needed?

::::hint
We can dig along the full perimeter of the square, totalling 4 km of trenches. But can we do better?

:::dynamic
\`\`\`yaml
use: '#trench-diagram'
title: "Square plot with full perimeter trench"
ariaLabel: "A square with vertices A (top-left), B (top-right), C (bottom-right), D (bottom-left). All four sides are drawn as bold blue trench lines."
props:
  segments:
    - [0, 1, 1, 1]
    - [1, 1, 1, 0]
    - [1, 0, 0, 0]
    - [0, 0, 0, 1]

\`\`\`
:::

::::

::::solution
The best known answer is $\\sqrt{2} + \\frac{\\sqrt{6}}{2} \\approx 2.64$ km. Whether this is truly optimal remains an open problem.

Label the square's vertices A (top-left), B (top-right), C (bottom-right), D (bottom-left). Any straight line crossing the square enters through one side and exits through another, so our trenches need to intersect every such line.

The full perimeter works — 4 km of trenches, and every line through the square crosses at least one side. But we can do better.

:::dynamic
\`\`\`yaml
use: '#trench-diagram'
title: "Full perimeter trench pattern"
ariaLabel: "A square with vertices A, B, C, D. All four sides AB, BC, CD, DA are drawn as bold blue trench lines, totalling 4 km."
props:
  segments:
    - [0, 1, 1, 1]
    - [1, 1, 1, 0]
    - [1, 0, 0, 0]
    - [0, 0, 0, 1]

\`\`\`
:::

We can drop one side. Digging along just BC, CD, and DA (3 km total) still works: any line entering through AB must exit through one of the other three sides, where it hits our trench.

:::dynamic
\`\`\`yaml
use: '#trench-diagram'
title: "Three-sided trench pattern"
ariaLabel: "A square with vertices A, B, C, D. Sides BC, CD, and DA are drawn as bold blue trench lines. Side AB is shown as a dashed line, indicating it has been removed. Total trench length is 3 km."
props:
  segments:
    - [1, 1, 1, 0]
    - [1, 0, 0, 0]
    - [0, 0, 0, 1]
  dashedSegments:
    - [0, 1, 1, 1]

\`\`\`
:::

Can we do better? Consider digging along both diagonals, AC and BD, forming an X. Each diagonal has length $\\sqrt{2}$ km, giving $2\\sqrt{2} \\approx 2.83$ km total.

If a line crosses between opposite sides, it traverses the full width or height of the square and must cross both diagonals. If it crosses between adjacent sides (say bottom to right), the diagonal through the opposite corner separates those two sides — the line starts on one side of it and ends on the other, so it must cross it.

:::dynamic
\`\`\`yaml
use: '#trench-diagram'
title: "Diagonal trench pattern"
ariaLabel: "A square with vertices A, B, C, D. Both diagonals AC (top-left to bottom-right) and BD (top-right to bottom-left) are drawn as bold blue trench lines, forming an X shape. Total trench length is approximately 2.83 km."
props:
  segments:
    - [0, 1, 1, 0]
    - [1, 1, 0, 0]

\`\`\`
:::

Can we do better still? Let E $= \\left(\\frac{1}{2\\sqrt{3}},\\, \\frac{1}{2}\\right)$ and F $= \\left(1 - \\frac{1}{2\\sqrt{3}},\\, \\frac{1}{2}\\right)$. The trench pattern AE, DE, EF, BF, CF forms a connected network where every edge meets at $120°$ angles at E and F, giving a total length of $1 + \\sqrt{3} \\approx 2.73$ km.

:::dynamic
\`\`\`yaml
use: '#trench-diagram'
title: "Trench pattern through interior points"
ariaLabel: "A square with vertices A, B, C, D and two interior points E and F on the horizontal midline. Trench lines connect A to E, D to E, E to F, F to B, and F to C, forming a connected network. Total trench length is approximately 2.73 km."
props:
  segments:
    - [0, 1, 0.2887, 0.5]
    - [0, 0, 0.2887, 0.5]
    - [0.2887, 0.5, 0.7113, 0.5]
    - [0.7113, 0.5, 1, 1]
    - [0.7113, 0.5, 1, 0]
  points:
    - { x: 0.2887, y: 0.5, label: "E", labelOffsetX: 5, labelOffsetY: -8 }
    - { x: 0.7113, y: 0.5, label: "F", labelOffsetX: -5, labelOffsetY: -8 }

\`\`\`
:::

The best known solution goes further by allowing the trench to be disconnected. Let E $= \\left(\\frac{1}{2},\\, \\frac{1}{2}\\right)$ (the centre) and F $= \\left(\\frac{1}{2} - \\frac{\\sqrt{3}}{6},\\, \\frac{1}{2} - \\frac{\\sqrt{3}}{6}\\right)$ (the Fermat point of triangle BCD). The trench pattern has two separate components: the segment AE, and the network CF, DF, BF. The total length is $\\sqrt{2} + \\frac{\\sqrt{6}}{2} \\approx 2.64$ km.

:::dynamic
\`\`\`yaml
use: '#trench-diagram'
title: "Best known trench pattern"
ariaLabel: "A square with vertices A, B, C, D, centre point E, and Fermat point F of triangle BCD. Two trench components: segment AE from top-left to centre, and three segments connecting B, C, D through F. Total trench length is approximately 2.64 km."
props:
  segments:
    - [0, 1, 0.2113, 0.2113]
    - [1, 1, 0.5, 0.5]
    - [1, 0, 0.2113, 0.2113]
    - [0, 0, 0.2113, 0.2113]
  points:
    - { x: 0.5, y: 0.5, label: "E", labelOffsetX: 0, labelOffsetY: -8 }
    - { x: 0.2113, y: 0.2113, label: "F", labelOffsetX: 12, labelOffsetY: -2   }

\`\`\`
:::

This is the shortest known solution, but whether it's truly optimal remains an open problem in mathematics, known as the opaque square problem.
::::

:::component[trench-diagram]
\`\`\`js
function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  // --- Layout ---
  const maxSize = 350;
  const imageSize = Math.min(width, maxSize);
  const padding = 40;
  const squareSize = imageSize - 2 * padding;
  canvas.width = imageSize;
  canvas.height = imageSize;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // --- Colors ---
  const fgColor = api.getColor('foreground');
  const borderColor = api.getColor('foreground');
  const trenchColor = api.getColor('blue-600');
  const dashedColor = api.getColor('muted-foreground', { alpha: -0.5 });
  const labelColor = api.getColor('foreground');
  const pointColor = api.getColor('red-500');


  // --- Square vertex positions (canvas coords) ---
  // A=top-left, B=top-right, C=bottom-right, D=bottom-left
  const A = { x: padding, y: padding };
  const B = { x: padding + squareSize, y: padding };
  const C = { x: padding + squareSize, y: padding + squareSize };
  const D = { x: padding, y: padding + squareSize };

  // --- Helper: map math coords (0,0)=bottom-left to canvas ---
  function toCanvas(mx, my) {
    return {
      x: padding + mx * squareSize,
      y: padding + (1 - my) * squareSize
    };
  }

  // --- Draw square boundary (light reference) ---
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(B.x, B.y);
  ctx.lineTo(C.x, C.y);
  ctx.lineTo(D.x, D.y);
  ctx.closePath();
  ctx.stroke();

  // --- Draw trench segments ---
  const segments = props.segments || [];
  const dashedSegments = props.dashedSegments || [];

  // Draw dashed segments first (behind trench lines)
  if (dashedSegments.length > 0) {
    ctx.strokeStyle = dashedColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.lineCap = 'round';
    for (const seg of dashedSegments) {
      const from = toCanvas(seg[0], seg[1]);
      const to = toCanvas(seg[2], seg[3]);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    }
    ctx.setLineDash([]);
  }

  // Draw solid trench segments
  ctx.strokeStyle = trenchColor;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const seg of segments) {
    const from = toCanvas(seg[0], seg[1]);
    const to = toCanvas(seg[2], seg[3]);
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  // --- Draw special points (E, F) ---
  const points = props.points || [];
  const pointRadius = Math.max(3, squareSize * 0.018);

  for (const pt of points) {
    const pos = toCanvas(pt.x, pt.y);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = pointColor;
    ctx.fill();

    // Label for special points
    if (pt.label) {
      ctx.font = \`bold \${Math.max(11, squareSize * 0.05)}px \${api.getFont('default')}\`;
      ctx.fillStyle = labelColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      const labelX = pos.x + (pt.labelOffsetX || 0);
      const labelY = pos.y + (pt.labelOffsetY || -8);
      ctx.fillText(pt.label, labelX, labelY);
    }
  }

  // --- Draw vertex labels ---
  const labelOffset = Math.max(10, squareSize * 0.06);
  const fontSize = Math.max(12, squareSize * 0.052);
  ctx.font = \`600 \${fontSize}px \${api.getFont('default')}\`;
  ctx.fillStyle = labelColor;

  // A - top-left
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText('A', A.x - labelOffset * 0.4, A.y - labelOffset * 0.3);

  // B - top-right
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.fillText('B', B.x + labelOffset * 0.4, B.y - labelOffset * 0.3);

  // C - bottom-right
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('C', C.x + labelOffset * 0.4, C.y + labelOffset * 0.3);

  // D - bottom-left
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText('D', D.x - labelOffset * 0.4, D.y + labelOffset * 0.3);

}
\`\`\`
:::
`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#trench-diagram",props:{segments:[[0,1,1,1],[1,1,1,0],[1,0,0,0],[0,0,0,1]]},title:"Square plot with full perimeter trench",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/the-buried-cable.md"},{type:"dynamic",mode:"component",componentId:"#trench-diagram",props:{segments:[[0,1,1,1],[1,1,1,0],[1,0,0,0],[0,0,0,1]]},title:"Full perimeter trench pattern",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/the-buried-cable.md"},{type:"dynamic",mode:"component",componentId:"#trench-diagram",props:{segments:[[1,1,1,0],[1,0,0,0],[0,0,0,1]],dashedSegments:[[0,1,1,1]]},title:"Three-sided trench pattern",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/the-buried-cable.md"},{type:"dynamic",mode:"component",componentId:"#trench-diagram",props:{segments:[[0,1,1,0],[1,1,0,0]]},title:"Diagonal trench pattern",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/the-buried-cable.md"},{type:"dynamic",mode:"component",componentId:"#trench-diagram",props:{segments:[[0,1,.2887,.5],[0,0,.2887,.5],[.2887,.5,.7113,.5],[.7113,.5,1,1],[.7113,.5,1,0]],points:[{x:.2887,y:.5,label:"E",labelOffsetX:5,labelOffsetY:-8},{x:.7113,y:.5,label:"F",labelOffsetX:-5,labelOffsetY:-8}]},title:"Trench pattern through interior points",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/the-buried-cable.md"},{type:"dynamic",mode:"component",componentId:"#trench-diagram",props:{segments:[[0,1,.2113,.2113],[1,1,.5,.5],[1,0,.2113,.2113],[0,0,.2113,.2113]],points:[{x:.5,y:.5,label:"E",labelOffsetX:0,labelOffsetY:-8},{x:.2113,y:.2113,label:"F",labelOffsetX:12,labelOffsetY:-2}]},title:"Best known trench pattern",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/geometry/the-buried-cable.md"}],inlineComponents:{"trench-diagram":{id:"trench-diagram",code:`function draw(options) {
  const { canvas, api, width, props } = options;
  const ctx = canvas.getContext('2d');

  // --- Layout ---
  const maxSize = 350;
  const imageSize = Math.min(width, maxSize);
  const padding = 40;
  const squareSize = imageSize - 2 * padding;
  canvas.width = imageSize;
  canvas.height = imageSize;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // --- Colors ---
  const fgColor = api.getColor('foreground');
  const borderColor = api.getColor('foreground');
  const trenchColor = api.getColor('blue-600');
  const dashedColor = api.getColor('muted-foreground', { alpha: -0.5 });
  const labelColor = api.getColor('foreground');
  const pointColor = api.getColor('red-500');


  // --- Square vertex positions (canvas coords) ---
  // A=top-left, B=top-right, C=bottom-right, D=bottom-left
  const A = { x: padding, y: padding };
  const B = { x: padding + squareSize, y: padding };
  const C = { x: padding + squareSize, y: padding + squareSize };
  const D = { x: padding, y: padding + squareSize };

  // --- Helper: map math coords (0,0)=bottom-left to canvas ---
  function toCanvas(mx, my) {
    return {
      x: padding + mx * squareSize,
      y: padding + (1 - my) * squareSize
    };
  }

  // --- Draw square boundary (light reference) ---
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(B.x, B.y);
  ctx.lineTo(C.x, C.y);
  ctx.lineTo(D.x, D.y);
  ctx.closePath();
  ctx.stroke();

  // --- Draw trench segments ---
  const segments = props.segments || [];
  const dashedSegments = props.dashedSegments || [];

  // Draw dashed segments first (behind trench lines)
  if (dashedSegments.length > 0) {
    ctx.strokeStyle = dashedColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.lineCap = 'round';
    for (const seg of dashedSegments) {
      const from = toCanvas(seg[0], seg[1]);
      const to = toCanvas(seg[2], seg[3]);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    }
    ctx.setLineDash([]);
  }

  // Draw solid trench segments
  ctx.strokeStyle = trenchColor;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const seg of segments) {
    const from = toCanvas(seg[0], seg[1]);
    const to = toCanvas(seg[2], seg[3]);
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  // --- Draw special points (E, F) ---
  const points = props.points || [];
  const pointRadius = Math.max(3, squareSize * 0.018);

  for (const pt of points) {
    const pos = toCanvas(pt.x, pt.y);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = pointColor;
    ctx.fill();

    // Label for special points
    if (pt.label) {
      ctx.font = \`bold \${Math.max(11, squareSize * 0.05)}px \${api.getFont('default')}\`;
      ctx.fillStyle = labelColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      const labelX = pos.x + (pt.labelOffsetX || 0);
      const labelY = pos.y + (pt.labelOffsetY || -8);
      ctx.fillText(pt.label, labelX, labelY);
    }
  }

  // --- Draw vertex labels ---
  const labelOffset = Math.max(10, squareSize * 0.06);
  const fontSize = Math.max(12, squareSize * 0.052);
  ctx.font = \`600 \${fontSize}px \${api.getFont('default')}\`;
  ctx.fillStyle = labelColor;

  // A - top-left
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText('A', A.x - labelOffset * 0.4, A.y - labelOffset * 0.3);

  // B - top-right
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.fillText('B', B.x + labelOffset * 0.4, B.y - labelOffset * 0.3);

  // C - bottom-right
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('C', C.x + labelOffset * 0.4, C.y + labelOffset * 0.3);

  // D - bottom-left
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText('D', D.x - labelOffset * 0.4, D.y + labelOffset * 0.3);

}`,startLine:144}}};export{s as default};
