const e={slug:"poisoned-wine-bottle",metadata:{id:"puzzle-draft-294",title:"Poisoned Wine Bottle",published:!1,difficulty:"hard",concepts:[],tags:[],dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",preview:"To celebrate a decade of his rule, the king is holding an extravagant feast, accompanied with 1000 bottles of wine. However, the day before the feast, he...",websitePreview:"To celebrate a decade of his rule, the king is holding an extravagant feast, accompanied with 1000 bottles of wine. However, the day before the feast, he..."},content:`


<p>To celebrate a decade of his rule, the king is holding an extravagant feast, accompanied with 1000 bottles of wine. However, the day before the feast, he receives a report that an unknown infiltrator had poisoned a bottle of wine with Gravedew: a deadly poison. If a person ingests even a single drop of it, they’ll drop dead in 24 hours. Gravedew is colourless, odourless, and tasteless; the only way to find out if a bottle has been poisoned is for someone to drink the wine and see if they die in 24 hours.</p>
<p>The king realises he could administer the wine to the prisoners on death row to test for the poison. If 1000 prisoners each drank a small cup of wine from each bottle, they could determine which is the poisoned wine bottle.</p>
<p>But he didn’t have 1000 prisoners on death row. How else can he administer the wine to the prisoners so that he can determine the poisoned bottle of wine in 24 hours? And what is the minimum number of prisoners needed to do so?</p>
<h3 class="markdown-h2">Hint: If the king had 999 prisoners, he could serve 1 bottle to each prisoner, leaving the 1000th bottle alone. If nobody dies after 24 hours, then the 1000th bottle is the poisoned one. However, you can do better than 999.</h3>
<p>We only need 10 prisoners to find the poisoned bottle.</p>
<p>Number the bottles of wine from 1 to 1000, and the prisoners 1 to 10. For each bottle, convert its number into a 10-digit binary number. For instance, the 700th bottle would be 1010111100. The first digit is 1, so we feed it to the first prisoner. The second digit is 0, so we don’t feed it to the second prisoner. The third digit is 1, so we feed it to the third prisoner, and so on. We do this for all the wine bottles.</p>
<p>The next day, we observe the dead prisoners. For example, if the 1st, 5th, 7th, and 8th prisoners die, we convert that into the binary number 1000101100 (where the 1s are in the 1st, 5th, 7th, and 8th position). Converting that into a decimal number, we get 556, indicating that the 556th bottle is poisoned. This is because we fed the 556th bottle to the 1st, 5th, 7th, and 8th prisoners, and no other bottles were fed to this exact set of prisoners.</p>
<p>If you’re confused, let’s consider a simpler example with 3 wine bottles and 2 prisoners.</p>
<p>Bottle 1 = 01 in binary, so we feed it to the 2nd prisoner.<br>
Bottle 2 = 10 in binary, so we feed it to the 1st prisoner.<br>
Bottle 3 = 11 in binary, so we feed it to the 1st and 2nd prisoner.</p>
<p>The next day, if the 1st prisoner dies, we know that bottle 2 is poisoned. If the 2nd prisoner dies, we know that bottle 1 is poisoned. If both prisoners die, we know that bottle 3 is poisoned.</p>
<p>Every combination of dead prisoners is unique to a bottle because the binary representation of any 2 distinct numbers will be different.</p>
<p>[Extra Credit: Proof of Optimality]</p>
<p>We can also show that for 1000 bottles, we cannot find the bottle with less than 10 prisoners. Since each prisoner either lives or dies, there will be 2^9 different combinations of outcomes = 512 outcomes, not enough to distinguish the 1000 bottles of wine.</p>
<p>10 prisoners gives us 2^10 = 1024 outcomes, allowing us to distinguish 1024 bottles of wine if we need to. We’d have to label the bottles of wine from 0 to 1023 to ensure that all of them are 10-digit binary numbers (since 1024 is a 11-digit number in binary).</p>
<p>[Extension] Now that you’ve solved this puzzle, try the following extension.</p>
<p>&#x3C;&#x3C;Poisoned Wine Bottle (Extension)>></p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: ? -->

To celebrate a decade of his rule, the king is holding an extravagant feast, accompanied with 1000 bottles of wine. However, the day before the feast, he receives a report that an unknown infiltrator had poisoned a bottle of wine with Gravedew: a deadly poison. If a person ingests even a single drop of it, they’ll drop dead in 24 hours. Gravedew is colourless, odourless, and tasteless; the only way to find out if a bottle has been poisoned is for someone to drink the wine and see if they die in 24 hours.

The king realises he could administer the wine to the prisoners on death row to test for the poison. If 1000 prisoners each drank a small cup of wine from each bottle, they could determine which is the poisoned wine bottle.

But he didn’t have 1000 prisoners on death row. How else can he administer the wine to the prisoners so that he can determine the poisoned bottle of wine in 24 hours? And what is the minimum number of prisoners needed to do so?

Hint: If the king had 999 prisoners, he could serve 1 bottle to each prisoner, leaving the 1000th bottle alone. If nobody dies after 24 hours, then the 1000th bottle is the poisoned one. However, you can do better than 999.
---

We only need 10 prisoners to find the poisoned bottle.

Number the bottles of wine from 1 to 1000, and the prisoners 1 to 10. For each bottle, convert its number into a 10-digit binary number. For instance, the 700th bottle would be 1010111100. The first digit is 1, so we feed it to the first prisoner. The second digit is 0, so we don’t feed it to the second prisoner. The third digit is 1, so we feed it to the third prisoner, and so on. We do this for all the wine bottles.

The next day, we observe the dead prisoners. For example, if the 1st, 5th, 7th, and 8th prisoners die, we convert that into the binary number 1000101100 (where the 1s are in the 1st, 5th, 7th, and 8th position). Converting that into a decimal number, we get 556, indicating that the 556th bottle is poisoned. This is because we fed the 556th bottle to the 1st, 5th, 7th, and 8th prisoners, and no other bottles were fed to this exact set of prisoners.

If you’re confused, let’s consider a simpler example with 3 wine bottles and 2 prisoners.

Bottle 1 = 01 in binary, so we feed it to the 2nd prisoner.  
Bottle 2 = 10 in binary, so we feed it to the 1st prisoner.  
Bottle 3 = 11 in binary, so we feed it to the 1st and 2nd prisoner.

The next day, if the 1st prisoner dies, we know that bottle 2 is poisoned. If the 2nd prisoner dies, we know that bottle 1 is poisoned. If both prisoners die, we know that bottle 3 is poisoned.

Every combination of dead prisoners is unique to a bottle because the binary representation of any 2 distinct numbers will be different.

\\[Extra Credit: Proof of Optimality\\]

We can also show that for 1000 bottles, we cannot find the bottle with less than 10 prisoners. Since each prisoner either lives or dies, there will be 2^9 different combinations of outcomes = 512 outcomes, not enough to distinguish the 1000 bottles of wine.

10 prisoners gives us 2^10 = 1024 outcomes, allowing us to distinguish 1024 bottles of wine if we need to. We’d have to label the bottles of wine from 0 to 1023 to ensure that all of them are 10-digit binary numbers (since 1024 is a 11-digit number in binary).

\\[Extension\\] Now that you’ve solved this puzzle, try the following extension.

\\<\\<Poisoned Wine Bottle (Extension)>>
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
