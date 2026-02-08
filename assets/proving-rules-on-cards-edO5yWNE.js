const e={slug:"proving-rules-on-cards",metadata:{id:"puzzle-4",title:"Proving Rules on Cards",difficulty:{concepts:"easy",reasoning:"easy"},concepts:["logic"],tags:["has-solution"],credit:`Classic puzzle created by psychologist Peter Cathcart Wason in 1966 (known as the Wason selection task).
Question and solution written by Puzzlestone Peak.
`,dateCreated:"2025-11-02",lastUpdated:"2025-11-02",changelog:"2025-11-03: Added to Puzzlestone Peak",preview:"On the table are 4 cards, each one labelled “A”, “D”, “3”, and “6” respectively. You know that every card has a letter on one side and a number on the other. I...",websitePreview:"On the table are 4 cards, each one labelled “A”, “D”, “3”, and “6” respectively. You know that every card has a letter on one side and a number on the other. I..."},content:`<p>On the table are 4 cards, each one labelled “A”, “D”, “3”, and “6” respectively. You know that every card has a letter on one side and a number on the other.</p>
<div class="dynamic-block-placeholder" data-dynamic-block-id="0" data-mode="component"><p class="text-muted-foreground text-sm">[Interactive content: component mode]</p></div>
<p>I give you the following statement: “Cards with vowels on one side always have an even number on the other side”.</p>
<p>Which cards would you have to turn over to prove if my statement is true or false?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You’ll have to flip over the cards “A” and “3”.</p><p>Your original intuition might be to flip the cards “A” and “6”, but this isn’t the case. Let’s consider the following scenarios:</p>





























<table><thead><tr><th align="left">Letter</th><th align="left">Number</th><th align="left">Statement valid?</th></tr></thead><tbody><tr><td align="left">Consonant</td><td align="left">Even</td><td align="left">Could be</td></tr><tr><td align="left">Consonant</td><td align="left">Odd</td><td align="left">Could be</td></tr><tr><td align="left">Vowel</td><td align="left">Even</td><td align="left">Could be</td></tr><tr><td align="left">Vowel</td><td align="left">Odd</td><td align="left">No</td></tr></tbody></table><p>If we see a card with a consonant on one side, knowing what’s on the other side doesn’t help us see if the statement is true or false. This means we can leave the “D” card alone.</p><p>If we encounter a card with a vowel on one side, we should check if the number on the other side is even. If it is odd, we know that the statement isn’t true. However, if it is odd, we know that the statement <em>could</em> be true, we just need to check the other cards. So we’ll have to flip over the “A” card.</p><p>If we see a card with an even number on one side, notice from the table that it doesn’t give us additional information whether or not the statement is invalid. After all, the statement doesn’t say that a card with a consonant must have an odd number on the other side. We can actually leave the “6” card alone.</p><p>If we see a card with an odd number on one side, notice from the table that if we see a vowel, we know that the statement is wrong. We’ll need to flip the “3” card over too.</p><p>In summary, flipping the cards “A” and “3” will tell us if the statement is true.</p></div></details>
<div class="inline-component-definition" style="display: none;"></div>`,rawContent:`
On the table are 4 cards, each one labelled “A”, “D”, “3”, and “6” respectively. You know that every card has a letter on one side and a number on the other.

:::dynamic
\`\`\`yaml
title: "Four cards showing A, D, 3, and 6"
use: '#diagram'
\`\`\`
:::

I give you the following statement: “Cards with vowels on one side always have an even number on the other side”.

Which cards would you have to turn over to prove if my statement is true or false?

:::solution
You’ll have to flip over the cards “A” and “3”.

Your original intuition might be to flip the cards “A” and “6”, but this isn’t the case. Let’s consider the following scenarios:

| Letter    | Number | Statement valid? |
|:----------|:-------|:-----------------|
| Consonant | Even   | Could be         |
| Consonant | Odd    | Could be         |
| Vowel     | Even   | Could be         |
| Vowel     | Odd    | No               |

If we see a card with a consonant on one side, knowing what’s on the other side doesn’t help us see if the statement is true or false. This means we can leave the “D” card alone.

If we encounter a card with a vowel on one side, we should check if the number on the other side is even. If it is odd, we know that the statement isn’t true. However, if it is odd, we know that the statement *could* be true, we just need to check the other cards. So we’ll have to flip over the “A” card.

If we see a card with an even number on one side, notice from the table that it doesn’t give us additional information whether or not the statement is invalid. After all, the statement doesn’t say that a card with a consonant must have an odd number on the other side. We can actually leave the “6” card alone.

If we see a card with an odd number on one side, notice from the table that if we see a vowel, we know that the statement is wrong. We’ll need to flip the “3” card over too.

In summary, flipping the cards “A” and “3” will tell us if the statement is true.
:::


:::component[diagram]
\`\`\`html
<div class="flex justify-center">
  <div class="flex gap-4 [&>*]:w-12 [&>*]:py-4 [&>*]:text-2xl [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:rounded-lg [&>*]:bg-card [&>*]:text-card-foreground [&>*]:border">
    <div>A</div>
    <div>D</div>
    <div>3</div>
    <div>6</div>
  </div>
</div>
\`\`\`
:::`,dynamicBlocks:[{type:"dynamic",mode:"component",componentId:"#diagram",title:"Four cards showing A, D, 3, and 6",sourceFile:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/logic/proving-rules-on-cards.md"}],inlineComponents:{diagram:{id:"diagram",layout:`<div class="flex justify-center">
  <div class="flex gap-4 [&>*]:w-12 [&>*]:py-4 [&>*]:text-2xl [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:rounded-lg [&>*]:bg-card [&>*]:text-card-foreground [&>*]:border">
    <div>A</div>
    <div>D</div>
    <div>3</div>
    <div>6</div>
  </div>
</div>`}}};export{e as default};
