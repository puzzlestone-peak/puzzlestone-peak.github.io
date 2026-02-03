const e={slug:"two-gloves-and-three-patients",metadata:{id:"puzzle-43",title:"Two Gloves and Three Patients",slug:"two-gloves-and-three-patients",difficulty:"easy",concepts:["logic"],tags:["has-solution","starter"],credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",preview:"You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but...",websitePreview:"You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but..."},content:`<p>You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but can only find two pairs surgical gloves. You’ll have to make do.</p>
<p>You need to operate on all three patients in succession using just these two pairs of gloves, without causing any contamination.</p>
<p>The rules:</p>
<ul>
<li>Each operation requires you to use both hands.</li>
<li>Wearing a glove contaminates its inside (from your hand), and operating on a patient contaminates its outside.</li>
<li>You must not touch any patient with a side of a glove contaminated by you.</li>
<li>You must not touch any side of a glove that has been contaminated by a patient.</li>
<li>If a clean surface touches a contaminated surface, the clean surface becomes contaminated too.</li>
<li>You must not cross-contaminate between patients.</li>
<li>You may put on or take off gloves without contaminating additional surfaces.</li>
</ul>
<p>How can you perform all three operations with just two gloves while following these rules?</p>
<details class="content-block hint-block" data-type="hint"><summary class="hint-label">Hint</summary><div class="hint-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>You can</p></div></details>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The key insight is that gloves can be turned inside out, and contaminated surfaces can safely touch other contaminated surfaces.</p><p>Let's call the pairs of gloves A and B respectively.</p><p><strong>Patient 1</strong>: Wear gloves A first, then wear gloves B on top of it. Operate on patient 1. The inner side of gloves A is now contaminated by you, and the outer side of gloves B is now contaminated by Patient 1.</p><p><strong>Patient 2</strong>: Remove gloves B but keep gloves A on. Operate on Patient 2 with just gloves A. The outer side of gloves A is now contaminated by Patient 2.</p><p><strong>Patient 3</strong>: Turn gloves B inside out and put it over gloves A, so that the sides contaminated by Patient 1 and 2 are touching each other. The clean side of gloves B should be facing outwards, allowing you to perform the final operation safely.</p></div></details>`,rawContent:`
You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but can only find two pairs surgical gloves. You’ll have to make do.

You need to operate on all three patients in succession using just these two pairs of gloves, without causing any contamination.

The rules:

- Each operation requires you to use both hands.
- Wearing a glove contaminates its inside (from your hand), and operating on a patient contaminates its outside.
- You must not touch any patient with a side of a glove contaminated by you.
- You must not touch any side of a glove that has been contaminated by a patient.
- If a clean surface touches a contaminated surface, the clean surface becomes contaminated too.
- You must not cross-contaminate between patients.
- You may put on or take off gloves without contaminating additional surfaces.

How can you perform all three operations with just two gloves while following these rules?

:::hint
You can 
:::

:::solution
The key insight is that gloves can be turned inside out, and contaminated surfaces can safely touch other contaminated surfaces.

Let's call the pairs of gloves A and B respectively.

**Patient 1**: Wear gloves A first, then wear gloves B on top of it. Operate on patient 1. The inner side of gloves A is now contaminated by you, and the outer side of gloves B is now contaminated by Patient 1.

**Patient 2**: Remove gloves B but keep gloves A on. Operate on Patient 2 with just gloves A. The outer side of gloves A is now contaminated by Patient 2.

**Patient 3**: Turn gloves B inside out and put it over gloves A, so that the sides contaminated by Patient 1 and 2 are touching each other. The clean side of gloves B should be facing outwards, allowing you to perform the final operation safely.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
