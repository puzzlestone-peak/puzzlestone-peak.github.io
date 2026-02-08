const e={slug:"rooms-and-houses",metadata:{id:"puzzle-draft-300",title:"Rooms and Houses",published:!1,difficulty:{concepts:"medium",reasoning:"medium"},dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"Prove that if every room in a house has an even number of doors, then there must be an even number of doors on the outside of the house. solution: Let the...",websitePreview:"Prove that if every room in a house has an even number of doors, then there must be an even number of doors on the outside of the house. solution: Let the..."},content:`


<p>Prove that if every room in a house has an even number of doors, then there must be an even number of doors on the outside of the house.</p>
<p>solution:</p>
<p>Let the rooms be R1, R2, . . . , Rk and let room R1 have d1 doors, room R2 have d2 doors, etc. Then since d1, d2, . . . , dk are all even, so is d1+d2+· · ·+dk. Let’s take a moment to think about the sum d1+d2+· · ·+dk. Since all doors on the inside of the house are the doors of exactly two rooms, each inside door is counted twice. On the other hand, the doors to the outside of the house are only counted once. Therefore, if I is the number of inside doors and O is the number of outside doors, then d1 +d2 +· · ·+dk = 2I +O. Since d1 + d2 + · · · + dk is even and 2I is certainly even, we see that O = (d1 + d2 + · · · + dk) − 2I must be even. This is exactly what we wanted to prove!</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf](https://circles.math.ucla.edu/circles/lib/data/Handout-1035-1074.pdf) -->

Prove that if every room in a house has an even number of doors, then there must be an even number of doors on the outside of the house.

solution:

Let the rooms be R1, R2, . . . , Rk and let room R1 have d1 doors, room R2 have d2 doors, etc. Then since d1, d2, . . . , dk are all even, so is d1+d2+· · ·+dk. Let’s take a moment to think about the sum d1+d2+· · ·+dk. Since all doors on the inside of the house are the doors of exactly two rooms, each inside door is counted twice. On the other hand, the doors to the outside of the house are only counted once. Therefore, if I is the number of inside doors and O is the number of outside doors, then d1 +d2 +· · ·+dk = 2I +O. Since d1 + d2 + · · · + dk is even and 2I is certainly even, we see that O = (d1 + d2 + · · · + dk) − 2I must be even. This is exactly what we wanted to prove!
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
