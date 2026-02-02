const e={slug:"two-gloves-and-three-patients",metadata:{id:"puzzle-43",title:"Two Gloves and Three Patients",slug:"two-gloves-and-three-patients",difficulty:"easy",concepts:["logic"],tags:["has-solution"],credit:"Classic puzzle. Question and solution written by Puzzlestone Peak.",dateCreated:"2026-02-02",lastUpdated:"2026-02-02",preview:"You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but...",websitePreview:"You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but..."},content:`<p>You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but can only find two surgical gloves. You’ll have to make do.</p>
<p>You need to operate on all three patients in succession using just these two gloves, without causing any contamination.</p>
<p>The rules:</p>
<ul>
<li>Wearing a glove contaminates its inside (from your hand), and operating on a patient contaminates its outside.</li>
<li>You must not touch any patient with a side of a glove contaminated by you.</li>
<li>You must not touch any side of a glove that has been contaminated by a patient.</li>
<li>If a clean surface touches a contaminated surface, the clean surface becomes contaminated too.</li>
<li>You must not cross-contaminate between patients.</li>
</ul>
<p>How can you perform all three operations with just two gloves while following these rules?</p>
<details class="content-block solution-block" data-type="solution"><summary class="solution-label">Solution</summary><div class="solution-content markdown-content prose max-w-none px-4 py-4 space-y-4"><p>The key insight is that gloves can be turned inside out, and contaminated surfaces can safely touch other contaminated surfaces.</p><p><strong>Patient 1</strong>: Wear both gloves, one on top of the other (glove A directly on your hand, glove B over glove A). Operate on Patient 1. The outer side of glove B is now contaminated by Patient 1.</p><p><strong>Patient 2</strong>: Remove glove B but keep glove A on. Operate on Patient 2 with just glove A. The outer side of glove A is now contaminated by Patient 2.</p><p><strong>Patient 3</strong>: Remove glove A. Turn glove B inside out and put it on your hand. The side that was contaminated by Patient 1 is now facing inward (toward your hand), and the clean inner side is facing outward. Now put glove A over glove B, also inside out. Glove A’s clean inner side faces outward toward Patient 3, while its Patient 2-contaminated outer side faces inward, touching glove B’s Patient 1-contaminated outer side.</p><p>This arrangement ensures that Patient 3 only touches clean surfaces, the two patients’ contaminations only touch each other, and your hand only touches surfaces already contaminated by you.</p></div></details>`,rawContent:`
You’re a surgeon in a remote clinic when three patients arrive requiring emergency operations. Supplies are running low—you rummage through the stockroom but can only find two surgical gloves. You’ll have to make do.

You need to operate on all three patients in succession using just these two gloves, without causing any contamination.

The rules:

- Wearing a glove contaminates its inside (from your hand), and operating on a patient contaminates its outside.
- You must not touch any patient with a side of a glove contaminated by you.
- You must not touch any side of a glove that has been contaminated by a patient.
- If a clean surface touches a contaminated surface, the clean surface becomes contaminated too.
- You must not cross-contaminate between patients.

How can you perform all three operations with just two gloves while following these rules?

:::solution
The key insight is that gloves can be turned inside out, and contaminated surfaces can safely touch other contaminated surfaces.

**Patient 1**: Wear both gloves, one on top of the other (glove A directly on your hand, glove B over glove A). Operate on Patient 1. The outer side of glove B is now contaminated by Patient 1.

**Patient 2**: Remove glove B but keep glove A on. Operate on Patient 2 with just glove A. The outer side of glove A is now contaminated by Patient 2.

**Patient 3**: Remove glove A. Turn glove B inside out and put it on your hand. The side that was contaminated by Patient 1 is now facing inward (toward your hand), and the clean inner side is facing outward. Now put glove A over glove B, also inside out. Glove A’s clean inner side faces outward toward Patient 3, while its Patient 2-contaminated outer side faces inward, touching glove B’s Patient 1-contaminated outer side.

This arrangement ensures that Patient 3 only touches clean surfaces, the two patients’ contaminations only touch each other, and your hand only touches surfaces already contaminated by you.
:::
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
