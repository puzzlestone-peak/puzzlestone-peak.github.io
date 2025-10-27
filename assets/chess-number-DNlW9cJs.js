const s={slug:"chess-number",metadata:{title:"Chess Endgame Databases and Computational Limits",questionPreview:`Perfect play in chess endgames can be computed by brute force. But as pieces increase, the computations explode. What are the limits of perfect knowledge?
`,concepts:["game-theory","computational-complexity","combinatorics"],difficulty:"open",tags:["open","computational","game-theory"],dateCreated:"2025-10-22T00:00:00.000Z",lastUpdated:"2025-10-22T00:00:00.000Z"},content:`<h2 class="markdown-h1">Perfect Information Games</h2>
<p>Chess is a <strong>perfect information</strong> game: both players see the full board state, and there are no random elements. This means optimal play is, in principle, computable.</p>
<p>For chess endgames (positions with few pieces remaining), computers can calculate <strong>perfect play</strong>: the provably optimal move in every position.</p>
<h2 class="markdown-h1">Endgame Tablebases</h2>
<p><strong>Endgame tablebases</strong> are databases containing perfect play for all possible positions with a given set of pieces.</p>
<p><strong>Example</strong>: The "King and Rook versus King" endgame.</p>
<ul>
<li>All positions with these three pieces</li>
<li>For each position: whether it's won for white, drawn, or won for black</li>
<li>If won: the optimal move and the "distance to mate" (minimum moves to checkmate with perfect play)</li>
</ul>
<h2 class="markdown-h1">The Computational Challenge</h2>
<p>As the number of pieces increases, the number of positions explodes.</p>
<p><strong>Known tablebases</strong> (as of 2025):</p>
<ul>
<li><strong>3 pieces</strong>: Trivial (solved in 1970s)</li>
<li><strong>4 pieces</strong>: Solved completely</li>
<li><strong>5 pieces</strong>: Solved completely (1990s)</li>
<li><strong>6 pieces</strong>: Solved completely (2012)</li>
<li><strong>7 pieces</strong>: <strong>Solved completely</strong> (2012-2020, Lomonosov tablebases)</li>
<li><strong>8 pieces</strong>: <strong>Partially solved</strong> (ongoing)</li>
<li><strong>9+ pieces</strong>: Far beyond current capability</li>
</ul>
<p>The 7-piece tablebases required 140 terabytes of compressed data and years of computation on supercomputers.</p>
<h2 class="markdown-h1">Surprising Discoveries</h2>
<p>Tablebases revealed positions that defy human intuition:</p>
<p><strong>Example</strong>: King and Queen versus King and Rook</p>
<ul>
<li>Humans believed this was usually won in 20-30 moves</li>
<li>Tablebases showed some positions require up to <strong>244 moves</strong> for optimal checkmate!</li>
<li>These "tablebase draws" (under 50-move rule) led to rule changes in correspondence chess</li>
</ul>
<h2 class="markdown-h1">The Research Challenge</h2>
<p><strong>Part A</strong>: Estimate how many unique chess positions exist with 7 pieces on the board (including both kings). Explain why this is a lower bound on the tablebase size required.</p>
<p><strong>Part B</strong>: The 7-piece tablebases required approximately 140 TB of highly compressed data. Estimate the uncompressed size and the computational time required to generate them.</p>
<p><strong>Part C</strong>: Chess has 32 pieces at the start. Estimate the total number of possible chess positions (legal positions, not just arrangements). Why is this astronomically larger than tablebase positions?</p>
<p><strong>Part D</strong>: Research the <strong>50-move rule</strong> in chess. How do tablebases reveal positions that are theoretically won but practically drawn under tournament rules?</p>
<p><strong>Part E</strong>: Even if we could compute perfect play for all positions, why wouldn't this "solve" chess? Discuss the difference between computing full-game trees versus endgame tablebases.</p>
<p><strong>Part F</strong>: Research <strong>generalised chess</strong> (on larger boards, with more pieces, or different rules). What theoretical results exist about the computational complexity of solving chess variants?</p>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part A, consider: board has 64 squares, 7 pieces must be placed (including 2 kings with constraints), and positions must be legal.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part B, supercomputers with thousands of cores ran for months. Estimate core-hours required.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part C, Shannon estimated 10^43 legal positions. The game tree (all possible games) is estimated at 10^120 nodes.</p></div></details>
<details class="hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>For Part E, chess has a branching factor of ~35 and games last ~40 moves. How does this compare to endgames?</p></div></details>
<details class="solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p><strong>Answer</strong>: Computations below for Parts A-C. Parts D-F discuss open questions and theoretical limits.</p><h3 class="markdown-h2">Part A: Estimating 7-Piece Positions</h3><p>To estimate the number of positions with 7 pieces (including both kings):</p><p><strong>Pieces</strong>: 2 kings + 5 other pieces from {Queen, Rook, Bishop, Knight, Pawn} for each colour.</p><p><strong>Placement constraints</strong>:</p><ul>
<li>White king: 64 positions</li>
<li>Black king: 63 positions (can't be adjacent to white king; actually ~58-60 legal)</li>
<li>5 remaining pieces: chosen from up to 30 piece types (pawn on different files, different colours)</li>
<li>Each additional piece: ≈ 62, 61, 60, 59, 58 remaining squares</li>
</ul><p><strong>Rough calculation</strong>:
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>64</mn><mo>×</mo><mn>60</mn><mo>×</mo><mrow><mo fence="true">(</mo><mfrac linethickness="0px"><mn>32</mn><mn>5</mn></mfrac><mo fence="true">)</mo></mrow><mo>×</mo><mfrac><mrow><mn>62</mn><mo stretchy="false">!</mo></mrow><mrow><mn>57</mn><mo stretchy="false">!</mo></mrow></mfrac><mo>≈</mo><mn>64</mn><mo>×</mo><mn>60</mn><mo>×</mo><mn>201,376</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo>≈</mo><msup><mn>10</mn><mn>15</mn></msup></mrow><annotation encoding="application/x-tex">64 \\times 60 \\times {32 \\choose 5} \\times \\frac{62!}{57!} \\approx 64 \\times 60 \\times 201{,}376 \\times 10^8 \\approx 10^{15}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">64</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">60</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.2451em;vertical-align:-0.35em;"></span><span class="mord"><span class="mord"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size1">(</span></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8951em;"><span style="top:-2.355em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.144em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">32</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size1">)</span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.2251em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8801em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">57</span><span class="mclose mtight">!</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">62</span><span class="mclose mtight">!</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">64</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">60</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">201</span><span class="mord"><span class="mpunct">,</span></span><span class="mord">376</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">15</span></span></span></span></span></span></span></span></span></span></span></span></p><p><strong>More careful accounting</strong>:</p><ul>
<li>Must avoid illegal positions (pawns on first/last rank, kings in check when it's not their move)</li>
<li>Symmetry reduces unique positions (horizontal reflection is not always distinct)</li>
<li>Material combinations must be legal (e.g., can't have 9 white queens from legal promotions)</li>
</ul><p><strong>Actual 7-piece tablebase</strong>: Approximately <strong>500 billion to 1 trillion</strong> legal positions per piece combination.</p><p>With hundreds of different piece combinations (KQRvKRR, KQQvKQ, etc.), the total across all 7-piece combinations is in the <strong>tens of trillions</strong> of positions.</p><h3 class="markdown-h2">Part B: Storage and Computation</h3><p><strong>7-piece Lomonosov tablebases</strong>:</p><ul>
<li><strong>Compressed size</strong>: ~140 terabytes</li>
<li><strong>Compression ratio</strong>: Approximately 100<div></div> or better using specialised algorithms</li>
<li><strong>Uncompressed</strong>: Estimated <strong>14 petabytes</strong> (14,000 TB)</li>
</ul><p>Each position requires:</p><ul>
<li>Win/loss/draw status: 2 bits (4 states: win for white, win for black, draw, illegal)</li>
<li>Distance to mate (if won): ~8 bits (up to 255 moves)</li>
<li>Optimal move: ~6 bits (up to 64 moves in most positions)</li>
</ul><p>Total: ~16 bits = 2 bytes per position.</p><p>For <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><mn>13</mn></msup></mrow><annotation encoding="application/x-tex">10^{13}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">13</span></span></span></span></span></span></span></span></span></span></span></span> positions: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup></mrow><annotation encoding="application/x-tex">2 \\times 10^{13}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">13</span></span></span></span></span></span></span></span></span></span></span></span> bytes = 20 TB uncompressed per piece combination.</p><p>With ~700+ piece combinations computed: 20 TB × 700 ≈ 14 petabytes. ✓</p><p><strong>Computation time</strong>:</p><ul>
<li><strong>Hardware</strong>: Supercomputers with thousands of CPU cores</li>
<li><strong>Duration</strong>: 2012-2020 (8 years of intermittent computation)</li>
<li><strong>Core-hours</strong>: Estimated <strong>hundreds of millions</strong> of core-hours</li>
<li><strong>Method</strong>: Retrograde analysis (work backwards from checkmate positions)</li>
</ul><p><strong>Cost</strong>: Computing 7-piece tablebases cost approximately $10-50 million in computational resources.</p><h3 class="markdown-h2">Part C: All Chess Positions</h3><p><strong>Shannon number</strong>: Claude Shannon (1950) estimated approximately <strong>10^43</strong> legal chess positions exist.</p><p><strong>Game tree complexity</strong>: The number of possible games (sequences of moves) is estimated at <strong>10^120</strong>, called the Shannon number for the game tree.</p><p><strong>Why so much larger?</strong></p><ul>
<li>Endgame tablebases: <strong>7 pieces, all positions</strong></li>
<li>Full chess: <strong>Up to 32 pieces</strong>, all positions</li>
</ul><p>With more pieces:</p><ul>
<li>More possible piece combinations (32 pieces, not 7)</li>
<li>More squares occupied (less constraint)</li>
<li>More game history states (castling rights, en passant, 50-move counter)</li>
</ul><p><strong>Estimate</strong>:</p><ul>
<li>Average legal chess position: 20-40 pieces remaining</li>
<li>Midgame positions: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><mn>40</mn></msup></mrow><annotation encoding="application/x-tex">10^{40}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">40</span></span></span></span></span></span></span></span></span></span></span></span> to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><mn>45</mn></msup></mrow><annotation encoding="application/x-tex">10^{45}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">45</span></span></span></span></span></span></span></span></span></span></span></span> unique positions</li>
<li>Opening book positions: Additional <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding="application/x-tex">10^6</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">6</span></span></span></span></span></span></span></span></span></span></span> to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><mn>9</mn></msup></mrow><annotation encoding="application/x-tex">10^9</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">9</span></span></span></span></span></span></span></span></span></span></span> memorisable positions</li>
</ul><p>Even with <strong>1 exabyte</strong> (10^18 bytes) of storage (unrealistic today), we could store only <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>≈</mo><msup><mn>10</mn><mn>17</mn></msup></mrow><annotation encoding="application/x-tex">\\approx 10^{17}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4831em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">17</span></span></span></span></span></span></span></span></span></span></span></span> positions. This is <strong>10 trillion times smaller</strong> than the estimated state space.</p><p><strong>Conclusion</strong>: Complete chess tablebases (all positions, not just endgames) are <strong>impossible</strong> with any conceivable technology. The universe doesn't contain enough atoms to store them.</p><h3 class="markdown-h2">Part D: The 50-Move Rule</h3><p><strong>50-move rule</strong>: If 50 consecutive moves pass without a pawn move or capture, either player can claim a draw.</p><p><strong>Why it exists</strong>: Prevents endless repetition and forces progress.</p><p><strong>Tablebase complications</strong>:</p><p>Some endgame positions are <strong>theoretically won</strong> but require more than 50 moves:</p><ul>
<li>King + Queen vs King + Rook: Up to <strong>244 moves</strong> (optimal play)</li>
<li>King + 2 Bishops vs King + Knight: Up to <strong>66 moves</strong></li>
<li>King + Rook + Bishop vs King + Rook: Up to <strong>223 moves</strong></li>
</ul><p><strong>Practical implication</strong>: Under tournament rules with the 50-move rule, these positions are <strong>draws</strong> despite being theoretically won.</p><p><strong>Rule adaptations</strong>:</p><ul>
<li><strong>Correspondence chess</strong> (unlimited think time): Some organisations extended the 50-move rule to 75 moves for specific endgames after tablebase discoveries</li>
<li><strong>Computer chess</strong>: Engines with tablebase access know these positions are drawn under 50-move rule, altering their play</li>
</ul><p><strong>Philosophical question</strong>: What is "true" chess? The theoretical game (no 50-move rule) or the practical game (with draw rules)?</p><h3 class="markdown-h2">Part E: Why Tablebases Don't "Solve" Chess</h3><p>Even with perfect 7-piece endgame knowledge, chess remains <strong>unsolved</strong> because:</p><p><strong>1. Starting position has 32 pieces</strong>:</p><ul>
<li>Tablebases help only when ≤7 pieces remain</li>
<li>Most of the game (opening, middlegame) is unreachable</li>
</ul><p><strong>2. Branching factor</strong>:</p><ul>
<li>Average position: <strong>~35 legal moves</strong></li>
<li>Game length: <strong>~80 plies</strong> (40 moves per side)</li>
<li>Game tree: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>35</mn><mn>80</mn></msup><mo>≈</mo><msup><mn>10</mn><mn>123</mn></msup></mrow><annotation encoding="application/x-tex">35^{80} \\approx 10^{123}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">3</span><span class="mord"><span class="mord">5</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">80</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">123</span></span></span></span></span></span></span></span></span></span></span></span> possible games</li>
<li>Completely intractable</li>
</ul><p><strong>3. Computational complexity</strong>:</p><ul>
<li>Creating an opening book for all positions: requires computing <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><mn>43</mn></msup></mrow><annotation encoding="application/x-tex">10^{43}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">43</span></span></span></span></span></span></span></span></span></span></span></span> positions</li>
<li>Each position: evaluate dozens of moves</li>
<li>Total computation: far beyond universal computing capacity</li>
</ul><p><strong>4. Heuristics vs perfection</strong>:</p><ul>
<li>Top chess engines (Stockfish, AlphaZero) use:
<ul>
<li><strong>Heuristic evaluation</strong>: Position assessment based on patterns, not perfect calculation</li>
<li><strong>Limited search depth</strong>: Look ahead 20-40 plies, not to game end</li>
<li><strong>Monte Carlo tree search</strong>: Probabilistic sampling, not exhaustive</li>
</ul>
</li>
<li>They play superhuman chess but don't know perfect moves</li>
</ul><p><strong>5. Opening theory</strong>:</p><ul>
<li>First 10-15 moves: memorised opening books</li>
<li>Positions are too complex for exhaustive analysis</li>
<li>Rely on historical game databases and statistical success rates</li>
</ul><p><strong>Solving chess</strong> would mean proving the game-theoretic value (win for white, draw, or win for black) from the starting position with best play by both sides. This remains far beyond reach.</p><h3 class="markdown-h2">Part F: Generalised Chess and Complexity</h3><p><strong>Theoretical results</strong>:</p><p><strong>Chess on nxn boards</strong> (Fraenkel &#x26; Lichtenstein, 1981):</p><ul>
<li>Determining whether a position is won for a player is <strong>EXPTIME-complete</strong></li>
<li>This means no polynomial-time algorithm exists (assuming EXPTIME ≠ P)</li>
</ul><p><strong>Generalised chess</strong> (unbounded board, unbounded pieces):</p><ul>
<li>Determining checkmate is <strong>undecidable</strong> in some variants</li>
<li>Certain rule variants make chess as hard as arbitrary computation</li>
</ul><p><strong>Specific variants</strong>:</p><ul>
<li><strong>Infinite chess</strong> (infinite board): Checkmate problem is undecidable</li>
<li><strong>Chess with different piece sets</strong>: Complexity varies; some remain EXPTIME-complete</li>
<li><strong>Fairy chess</strong> (modified rules): Ranges from PSPACE-complete to undecidable</li>
</ul><p><strong>Practical takeaway</strong>:
Chess (and similar games) are not just hard to solve—they're provably hard in a computational complexity sense. Even with unlimited time and resources, some variants cannot be solved at all.</p><p><strong>Open question</strong>:
Is standard 8×8 chess:</p><ul>
<li>A forced win for White?</li>
<li>A draw with perfect play?</li>
<li>(Extremely unlikely) A forced win for Black?</li>
</ul><p>We may never know. The computational barriers are insurmountable with any technology we can envision.</p><h3 class="markdown-h2">The Beauty of Unsolvability</h3><p>Chess remains intellectually rich precisely because it's unsolvable:</p><ul>
<li><strong>Strategic depth</strong>: No perfect opening book</li>
<li><strong>Creative play</strong>: Room for innovation and surprise</li>
<li><strong>Human relevance</strong>: Even superhuman engines don't "solve" the game</li>
<li><strong>Perpetual mystery</strong>: The game-theoretic value remains unknown</li>
</ul><p>Unlike checkers (solved as a draw in 2007) or Connect Four (solved in 1988), chess retains its mystery. Endgame tablebases give us glimpses of perfection, but the full game remains beautifully, permanently beyond complete knowledge.</p></div></details>`,rawContent:`
# Perfect Information Games

Chess is a **perfect information** game: both players see the full board state, and there are no random elements. This means optimal play is, in principle, computable.

For chess endgames (positions with few pieces remaining), computers can calculate **perfect play**: the provably optimal move in every position.

# Endgame Tablebases

**Endgame tablebases** are databases containing perfect play for all possible positions with a given set of pieces.

**Example**: The "King and Rook versus King" endgame.
- All positions with these three pieces
- For each position: whether it's won for white, drawn, or won for black
- If won: the optimal move and the "distance to mate" (minimum moves to checkmate with perfect play)

# The Computational Challenge

As the number of pieces increases, the number of positions explodes.

**Known tablebases** (as of 2025):
- **3 pieces**: Trivial (solved in 1970s)
- **4 pieces**: Solved completely
- **5 pieces**: Solved completely (1990s)
- **6 pieces**: Solved completely (2012)
- **7 pieces**: **Solved completely** (2012-2020, Lomonosov tablebases)
- **8 pieces**: **Partially solved** (ongoing)
- **9+ pieces**: Far beyond current capability

The 7-piece tablebases required 140 terabytes of compressed data and years of computation on supercomputers.

# Surprising Discoveries

Tablebases revealed positions that defy human intuition:

**Example**: King and Queen versus King and Rook
- Humans believed this was usually won in 20-30 moves
- Tablebases showed some positions require up to **244 moves** for optimal checkmate!
- These "tablebase draws" (under 50-move rule) led to rule changes in correspondence chess

# The Research Challenge

**Part A**: Estimate how many unique chess positions exist with 7 pieces on the board (including both kings). Explain why this is a lower bound on the tablebase size required.

**Part B**: The 7-piece tablebases required approximately 140 TB of highly compressed data. Estimate the uncompressed size and the computational time required to generate them.

**Part C**: Chess has 32 pieces at the start. Estimate the total number of possible chess positions (legal positions, not just arrangements). Why is this astronomically larger than tablebase positions?

**Part D**: Research the **50-move rule** in chess. How do tablebases reveal positions that are theoretically won but practically drawn under tournament rules?

**Part E**: Even if we could compute perfect play for all positions, why wouldn't this "solve" chess? Discuss the difference between computing full-game trees versus endgame tablebases.

**Part F**: Research **generalised chess** (on larger boards, with more pieces, or different rules). What theoretical results exist about the computational complexity of solving chess variants?

:::hint
For Part A, consider: board has 64 squares, 7 pieces must be placed (including 2 kings with constraints), and positions must be legal.
:::

:::hint
For Part B, supercomputers with thousands of cores ran for months. Estimate core-hours required.
:::

:::hint
For Part C, Shannon estimated 10^43 legal positions. The game tree (all possible games) is estimated at 10^120 nodes.
:::

:::hint
For Part E, chess has a branching factor of ~35 and games last ~40 moves. How does this compare to endgames?
:::

:::solution
**Answer**: Computations below for Parts A-C. Parts D-F discuss open questions and theoretical limits.

## Part A: Estimating 7-Piece Positions

To estimate the number of positions with 7 pieces (including both kings):

**Pieces**: 2 kings + 5 other pieces from {Queen, Rook, Bishop, Knight, Pawn} for each colour.

**Placement constraints**:
- White king: 64 positions
- Black king: 63 positions (can't be adjacent to white king; actually ~58-60 legal)
- 5 remaining pieces: chosen from up to 30 piece types (pawn on different files, different colours)
- Each additional piece: ≈ 62, 61, 60, 59, 58 remaining squares

**Rough calculation**:
$$64 \\times 60 \\times {32 \\choose 5} \\times \\frac{62!}{57!} \\approx 64 \\times 60 \\times 201{,}376 \\times 10^8 \\approx 10^{15}$$

**More careful accounting**:
- Must avoid illegal positions (pawns on first/last rank, kings in check when it's not their move)
- Symmetry reduces unique positions (horizontal reflection is not always distinct)
- Material combinations must be legal (e.g., can't have 9 white queens from legal promotions)

**Actual 7-piece tablebase**: Approximately **500 billion to 1 trillion** legal positions per piece combination.

With hundreds of different piece combinations (KQRvKRR, KQQvKQ, etc.), the total across all 7-piece combinations is in the **tens of trillions** of positions.

## Part B: Storage and Computation

**7-piece Lomonosov tablebases**:
- **Compressed size**: ~140 terabytes
- **Compression ratio**: Approximately 100:1 or better using specialised algorithms
- **Uncompressed**: Estimated **14 petabytes** (14,000 TB)

Each position requires:
- Win/loss/draw status: 2 bits (4 states: win for white, win for black, draw, illegal)
- Distance to mate (if won): ~8 bits (up to 255 moves)
- Optimal move: ~6 bits (up to 64 moves in most positions)

Total: ~16 bits = 2 bytes per position.

For $10^{13}$ positions: $2 \\times 10^{13}$ bytes = 20 TB uncompressed per piece combination.

With ~700+ piece combinations computed: 20 TB × 700 ≈ 14 petabytes. ✓

**Computation time**:
- **Hardware**: Supercomputers with thousands of CPU cores
- **Duration**: 2012-2020 (8 years of intermittent computation)
- **Core-hours**: Estimated **hundreds of millions** of core-hours
- **Method**: Retrograde analysis (work backwards from checkmate positions)

**Cost**: Computing 7-piece tablebases cost approximately $10-50 million in computational resources.

## Part C: All Chess Positions

**Shannon number**: Claude Shannon (1950) estimated approximately **10^43** legal chess positions exist.

**Game tree complexity**: The number of possible games (sequences of moves) is estimated at **10^120**, called the Shannon number for the game tree.

**Why so much larger?**
- Endgame tablebases: **7 pieces, all positions**
- Full chess: **Up to 32 pieces**, all positions

With more pieces:
- More possible piece combinations (32 pieces, not 7)
- More squares occupied (less constraint)
- More game history states (castling rights, en passant, 50-move counter)

**Estimate**:
- Average legal chess position: 20-40 pieces remaining
- Midgame positions: $10^{40}$ to $10^{45}$ unique positions
- Opening book positions: Additional $10^6$ to $10^9$ memorisable positions

Even with **1 exabyte** (10^18 bytes) of storage (unrealistic today), we could store only $\\approx 10^{17}$ positions. This is **10 trillion times smaller** than the estimated state space.

**Conclusion**: Complete chess tablebases (all positions, not just endgames) are **impossible** with any conceivable technology. The universe doesn't contain enough atoms to store them.

## Part D: The 50-Move Rule

**50-move rule**: If 50 consecutive moves pass without a pawn move or capture, either player can claim a draw.

**Why it exists**: Prevents endless repetition and forces progress.

**Tablebase complications**:

Some endgame positions are **theoretically won** but require more than 50 moves:
- King + Queen vs King + Rook: Up to **244 moves** (optimal play)
- King + 2 Bishops vs King + Knight: Up to **66 moves**
- King + Rook + Bishop vs King + Rook: Up to **223 moves**

**Practical implication**: Under tournament rules with the 50-move rule, these positions are **draws** despite being theoretically won.

**Rule adaptations**:
- **Correspondence chess** (unlimited think time): Some organisations extended the 50-move rule to 75 moves for specific endgames after tablebase discoveries
- **Computer chess**: Engines with tablebase access know these positions are drawn under 50-move rule, altering their play

**Philosophical question**: What is "true" chess? The theoretical game (no 50-move rule) or the practical game (with draw rules)?

## Part E: Why Tablebases Don't "Solve" Chess

Even with perfect 7-piece endgame knowledge, chess remains **unsolved** because:

**1. Starting position has 32 pieces**:
- Tablebases help only when ≤7 pieces remain
- Most of the game (opening, middlegame) is unreachable

**2. Branching factor**:
- Average position: **~35 legal moves**
- Game length: **~80 plies** (40 moves per side)
- Game tree: $35^{80} \\approx 10^{123}$ possible games
- Completely intractable

**3. Computational complexity**:
- Creating an opening book for all positions: requires computing $10^{43}$ positions
- Each position: evaluate dozens of moves
- Total computation: far beyond universal computing capacity

**4. Heuristics vs perfection**:
- Top chess engines (Stockfish, AlphaZero) use:
  - **Heuristic evaluation**: Position assessment based on patterns, not perfect calculation
  - **Limited search depth**: Look ahead 20-40 plies, not to game end
  - **Monte Carlo tree search**: Probabilistic sampling, not exhaustive
- They play superhuman chess but don't know perfect moves

**5. Opening theory**:
- First 10-15 moves: memorised opening books
- Positions are too complex for exhaustive analysis
- Rely on historical game databases and statistical success rates

**Solving chess** would mean proving the game-theoretic value (win for white, draw, or win for black) from the starting position with best play by both sides. This remains far beyond reach.

## Part F: Generalised Chess and Complexity

**Theoretical results**:

**Chess on nxn boards** (Fraenkel & Lichtenstein, 1981):
- Determining whether a position is won for a player is **EXPTIME-complete**
- This means no polynomial-time algorithm exists (assuming EXPTIME ≠ P)

**Generalised chess** (unbounded board, unbounded pieces):
- Determining checkmate is **undecidable** in some variants
- Certain rule variants make chess as hard as arbitrary computation

**Specific variants**:
- **Infinite chess** (infinite board): Checkmate problem is undecidable
- **Chess with different piece sets**: Complexity varies; some remain EXPTIME-complete
- **Fairy chess** (modified rules): Ranges from PSPACE-complete to undecidable

**Practical takeaway**:
Chess (and similar games) are not just hard to solve—they're provably hard in a computational complexity sense. Even with unlimited time and resources, some variants cannot be solved at all.

**Open question**:
Is standard 8×8 chess:
- A forced win for White?
- A draw with perfect play?
- (Extremely unlikely) A forced win for Black?

We may never know. The computational barriers are insurmountable with any technology we can envision.

## The Beauty of Unsolvability

Chess remains intellectually rich precisely because it's unsolvable:
- **Strategic depth**: No perfect opening book
- **Creative play**: Room for innovation and surprise
- **Human relevance**: Even superhuman engines don't "solve" the game
- **Perpetual mystery**: The game-theoretic value remains unknown

Unlike checkers (solved as a draw in 2007) or Connect Four (solved in 1988), chess retains its mystery. Endgame tablebases give us glimpses of perfection, but the full game remains beautifully, permanently beyond complete knowledge.
:::
`,dynamicBlocks:[]};export{s as default};
