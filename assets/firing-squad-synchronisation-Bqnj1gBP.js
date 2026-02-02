const e={slug:"firing-squad-synchronisation",metadata:{id:"puzzle-draft-212",title:"Firing Squad Synchronisation",published:!1,difficulty:"medium",dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"A prisoner is awaiting execution by firing squad. A row of N robotic soldiers stands nearby. These robotic soldiers can be in a finite number of states (they...",websitePreview:"A prisoner is awaiting execution by firing squad. A row of N robotic soldiers stands nearby. These robotic soldiers can be in a finite number of states (they..."},content:`


<p>A prisoner is awaiting execution by firing squad. A row of N robotic soldiers stands nearby.</p>
<p>These robotic soldiers can be in a finite number of states (they are all finite state machines). A clock provides a sequence of time steps: 0, 1, 2, etc.. At each step, the state of each soldier is given by a transition function. This function takes three arguments as input: the soldier's previous state, the previous state of the soldier to the right, and the previous state of the soldier to the left. The transition function must be identical for all soldiers except for the soldiers at the ends of the row, whom could have different transition functions.</p>
<p>One of the soldiers at one end of the row is deemed the general of the squad. Initially at time 0, the general is in state qinit, whereas all other soliders are in state qsleep. The objective is to get all soldiers to enter the state qbang simultaneously for the first time, thereby riddling the prisoner with N bullets.</p>
<p>Design state machines and transition functions for the robotic soldiers which will accomplish this objective, given that the number of states for a soldier cannot depend on N. What is the running time of your system in terms of N?</p>
<p>Hint (achievable running time): If your machines are sufficiently clever, you can achieve O(N) time! There's even a solution that takes exactly 2N - 2 time steps.</p>
<p>Note 1: If we did not specify "for the first time", a trivial solution would be to have all soldiers keep firing, and eventually they will all be in state qbang.</p>
<p>Note 2: In a sense, the heart of this problem is that no soldier knows what N is.</p>
<p>Note 3: Problem originally posed by J. Myhill in 1957.</p>
<p>Note 4: This problem describes something called a cellular automaton. The soldiers are like "cells", and how a cell is updated depends on the state of nearby cells. Perhaps the most well-known cellular automaton is John Conway's Game of Life.</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml](https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml) -->

A prisoner is awaiting execution by firing squad. A row of N robotic soldiers stands nearby.

These robotic soldiers can be in a finite number of states (they are all finite state machines). A clock provides a sequence of time steps: 0, 1, 2, etc.. At each step, the state of each soldier is given by a transition function. This function takes three arguments as input: the soldier's previous state, the previous state of the soldier to the right, and the previous state of the soldier to the left. The transition function must be identical for all soldiers except for the soldiers at the ends of the row, whom could have different transition functions.

One of the soldiers at one end of the row is deemed the general of the squad. Initially at time 0, the general is in state qinit, whereas all other soliders are in state qsleep. The objective is to get all soldiers to enter the state qbang simultaneously for the first time, thereby riddling the prisoner with N bullets.

Design state machines and transition functions for the robotic soldiers which will accomplish this objective, given that the number of states for a soldier cannot depend on N. What is the running time of your system in terms of N?

Hint (achievable running time): If your machines are sufficiently clever, you can achieve O(N) time! There's even a solution that takes exactly 2N - 2 time steps.

Note 1: If we did not specify "for the first time", a trivial solution would be to have all soldiers keep firing, and eventually they will all be in state qbang.

Note 2: In a sense, the heart of this problem is that no soldier knows what N is.

Note 3: Problem originally posed by J. Myhill in 1957.

Note 4: This problem describes something called a cellular automaton. The soldiers are like "cells", and how a cell is updated depends on the state of nearby cells. Perhaps the most well-known cellular automaton is John Conway's Game of Life.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
