const e={slug:"cublet-colouring-1",metadata:{id:"puzzle-draft-326",title:"Cublet Colouring 1",published:!1,difficulty:"hard",concepts:["geometry"],tags:["has-solution"],credit:`Puzzle concept from TED-Ed (YouTube video: https://www.youtube.com/watch?v=SXXrQlJoNsw).
Question and solution written by Puzzlestone Peak.
`,dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"On your friend’s table, you notice a big red cube made out of 27 smaller cubes arranged in a 3 by 3 by 3 arrangement. When you visit him the next day, you...",websitePreview:"On your friend’s table, you notice a big red cube made out of 27 smaller cubes arranged in a 3 by 3 by 3 arrangement. When you visit him the next day, you..."},content:`<p>On your friend’s table, you notice a big red cube made out of 27 smaller cubes arranged in a 3 by 3 by 3 arrangement. When you visit him the next day, you notice that the big red cube has been replaced by a green one. On the third day, it is replaced by a blue one. Curious, you ask him about the red, green, and blue cubes.</p>
<p>“Oh, this?” he points to the cube. “The red, green, and blue cubes are actually the same cube.”</p>
<p>He takes apart the blue cube, showing the 27 smaller cubes with red, green, and blue sides painted on them. He then reassembles the cubes to form the big red cube again, then the green cube, then the blue cube.</p>
<p>Fascinated, you buy 27 small cubes and 3 colours of paint. How can you paint the sides of the 27 small cubes so that you can assemble them into a larger red cube, a larger green cube, and a larger blue cube?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>It’s harder to visualise this problem in 3D, so let’s start with a square made of 9 smaller squares. The sides of each square can be painted a colour, so let’s paint the perimeter of the large square red.</p><p>[diagram]</p><p>We separate the first row of squares and bring it to the bottom.</p><p>[diagram]</p><p>Then we separate the first column of squares and bring it to the back.</p><p>[diagram]</p><p>We’re now left with a big square that has an uncoloured perimeter. This time, we’ll paint it green.</p><p>[diagram]</p><p>In the same way, we can separate the first row and column of the square and loop it around. We can now paint the new uncoloured perimeter blue, and we are done.</p><p>Notice that if we perform the row and column shifts once more, we end up with a square with a green perimeter.</p><p>[diagram]</p><p>Now, let’s extend this to 3D. We start with a cube made of 27 smaller cubes, and paint it red. We do the same shift, this time taking the top, front, and side and moving them over. This reveals a large uncoloured cube, which we can paint green. Repeat this one more time for the blue colour, and we have 27 small cubes that can be reassembled to cubes of 3 different colours.</p><p>This method can extend to any number of colours, For example, if you have a 4 by 4 by 4 cube, you can paint the smaller cubes with 4 different colours to allow the setup to be reconstructed into larger cubes with any of the 4 colours.</p><p>In general, starting with any n-dimensional hypercube, you can split it into k by k by k by … smaller hypercubes, then paint their boundaries different colours to form k different-coloured cubes.</p></div></details>`,rawContent:`
On your friend’s table, you notice a big red cube made out of 27 smaller cubes arranged in a 3 by 3 by 3 arrangement. When you visit him the next day, you notice that the big red cube has been replaced by a green one. On the third day, it is replaced by a blue one. Curious, you ask him about the red, green, and blue cubes.

“Oh, this?” he points to the cube. “The red, green, and blue cubes are actually the same cube.”

He takes apart the blue cube, showing the 27 smaller cubes with red, green, and blue sides painted on them. He then reassembles the cubes to form the big red cube again, then the green cube, then the blue cube.

Fascinated, you buy 27 small cubes and 3 colours of paint. How can you paint the sides of the 27 small cubes so that you can assemble them into a larger red cube, a larger green cube, and a larger blue cube?

:::solution
It’s harder to visualise this problem in 3D, so let’s start with a square made of 9 smaller squares. The sides of each square can be painted a colour, so let’s paint the perimeter of the large square red.

\\[diagram\\]

We separate the first row of squares and bring it to the bottom.

\\[diagram\\]

Then we separate the first column of squares and bring it to the back.

\\[diagram\\]

We’re now left with a big square that has an uncoloured perimeter. This time, we’ll paint it green.

\\[diagram\\]

In the same way, we can separate the first row and column of the square and loop it around. We can now paint the new uncoloured perimeter blue, and we are done.

Notice that if we perform the row and column shifts once more, we end up with a square with a green perimeter.

\\[diagram\\]

Now, let’s extend this to 3D. We start with a cube made of 27 smaller cubes, and paint it red. We do the same shift, this time taking the top, front, and side and moving them over. This reveals a large uncoloured cube, which we can paint green. Repeat this one more time for the blue colour, and we have 27 small cubes that can be reassembled to cubes of 3 different colours.

This method can extend to any number of colours, For example, if you have a 4 by 4 by 4 cube, you can paint the smaller cubes with 4 different colours to allow the setup to be reconstructed into larger cubes with any of the 4 colours.

In general, starting with any n-dimensional hypercube, you can split it into k by k by k by … smaller hypercubes, then paint their boundaries different colours to form k different-coloured cubes.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
