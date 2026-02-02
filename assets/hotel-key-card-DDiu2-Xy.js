const e={slug:"hotel-key-card",metadata:{id:"puzzle-draft-168",title:"Hotel Key Card",published:!1,difficulty:"easy",concepts:[],tags:[],dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",preview:"A certain hotel room lock is opened by scanning a key card. In theory, one enters the room by inserting and removing the key card once. In practice, however,...",websitePreview:"A certain hotel room lock is opened by scanning a key card. In theory, one enters the room by inserting and removing the key card once. In practice, however,..."},content:`


<p>A certain hotel room lock is opened by scanning a key card. In theory, one enters the room by inserting and removing the key card once. In practice, however, the key card is ambiguously labeled, so that either of two orientations might be the correct orientation of the card. In theory, of course, one could just try one orientation, and if it didn't work try the other. In practice, however, the card reader sometimes fails, so that after trying each orientation once, one may still not have gained access to the room.</p>
<p>A few more details:</p>
<p>(a) Either of the two orientations is equally likely to be cor- rect.</p>
<p>(b) The success rate of a correctly oriented card is p with 0 &#x3C; p &#x3C; 1.</p>
<p>(c) Failure on either side of the card is indistinguishable, so it does not give any information about whether the orientation of the card was correct.</p>
<p>(d) An attempted scan takes 1 second to succeed or fail; reversing the orientation also takes 1 second.</p>
<p>The last property means that in 3 seconds one could try one orientation 3 times or each orientation once (using the middle second to flip it over). In either case, of course, one might still be standing in the hall and need to decide what to do next.</p>
<p>So what attempt strategy would you use to enter the room? Why?</p>
<p>Feel free to consider fixed values of p (p = .5 or p = .9, for example) as special cases. What if p is fixed but unknown?</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml](https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml) -->

A certain hotel room lock is opened by scanning a key card. In theory, one enters the room by inserting and removing the key card once. In practice, however, the key card is ambiguously labeled, so that either of two orientations might be the correct orientation of the card. In theory, of course, one could just try one orientation, and if it didn't work try the other. In practice, however, the card reader sometimes fails, so that after trying each orientation once, one may still not have gained access to the room.

A few more details:

(a) Either of the two orientations is equally likely to be cor- rect.

(b) The success rate of a correctly oriented card is p with 0 \\< p \\< 1.

(c) Failure on either side of the card is indistinguishable, so it does not give any information about whether the orientation of the card was correct.

(d) An attempted scan takes 1 second to succeed or fail; reversing the orientation also takes 1 second.

The last property means that in 3 seconds one could try one orientation 3 times or each orientation once (using the middle second to flip it over). In either case, of course, one might still be standing in the hall and need to decide what to do next.

So what attempt strategy would you use to enter the room? Why?

Feel free to consider fixed values of p (p = .5 or p = .9, for example) as special cases. What if p is fixed but unknown?
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
