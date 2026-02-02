const e={slug:"poisoned-wine-bottle-extension",metadata:{id:"puzzle-draft-295",title:"Poisoned Wine Bottle (Extension)",published:!1,difficulty:"expert",concepts:[],tags:[],dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",preview:"Continuation of this puzzle <<Poisoned Wine Bottle>> Before the king gets to administer the bottles of wine to the prisoners, an advisor stops him. He says...",websitePreview:"Continuation of this puzzle <<Poisoned Wine Bottle>> Before the king gets to administer the bottles of wine to the prisoners, an advisor stops him. He says..."},content:`<p>Continuation of this puzzle &#x3C;&#x3C;Poisoned Wine Bottle>></p>
<h3 class="markdown-h2">Before the king gets to administer the bottles of wine to the prisoners, an advisor stops him. He says that if more than 8 prisoners die, the townspeople might get angry and revolt. How can the king administer the poison so that no more than 8 prisoners die?</h3>
<p>From the previous puzzle, we know that a minimum of 10 prisoners are needed to find the poisoned bottle. But let’s notice the following 10-digit binary numbers.</p>
<p>0111111111 = 511<br>
1011111111 = 767<br>
1101111111 = 895<br>
1110111111 = 959<br>
1111011111 = 991<br>
1111101111 = 1007<br>
1111110111 = 1015<br>
1111111011 = 1019<br>
1111111101 = 1021<br>
1111111110 = 1022<br>
1111111111 = 1023</p>
<p>These are the only bottles of wine that are fed to 9 or 10 prisoners: 10 of these numbers would require that the corresponding bottle be administered to 9 prisoners, and 1 number requires all 10 prisoners.</p>
<p>Only 5 of our bottles (511, 767, 895, 959, and 991) are affected by this, so we can relabel them to another number that doesn’t break our new rule. A simple relabelling would be:<br>
511 → 1001 (1111101001)<br>
767 → 1002 (1111101010)<br>
895 → 1003 (1111101011)<br>
959 → 1004 (1111101100)<br>
991 → 1005 (1111101101)</p>
<p>With this new strategy, the king can find the poisoned bottle, with only at most 8 prisoners dying.</p>`,rawContent:`Continuation of this puzzle \\<\\<Poisoned Wine Bottle>>

Before the king gets to administer the bottles of wine to the prisoners, an advisor stops him. He says that if more than 8 prisoners die, the townspeople might get angry and revolt. How can the king administer the poison so that no more than 8 prisoners die?
---

From the previous puzzle, we know that a minimum of 10 prisoners are needed to find the poisoned bottle. But let’s notice the following 10-digit binary numbers.

0111111111 = 511  
1011111111 = 767  
1101111111 = 895  
1110111111 = 959  
1111011111 = 991  
1111101111 = 1007  
1111110111 = 1015  
1111111011 = 1019  
1111111101 = 1021  
1111111110 = 1022  
1111111111 = 1023

These are the only bottles of wine that are fed to 9 or 10 prisoners: 10 of these numbers would require that the corresponding bottle be administered to 9 prisoners, and 1 number requires all 10 prisoners.

Only 5 of our bottles (511, 767, 895, 959, and 991\\) are affected by this, so we can relabel them to another number that doesn’t break our new rule. A simple relabelling would be:  
511 → 1001 (1111101001)  
767 → 1002 (1111101010)  
895 → 1003 (1111101011)  
959 → 1004 (1111101100)  
991 → 1005 (1111101101)

With this new strategy, the king can find the poisoned bottle, with only at most 8 prisoners dying.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
