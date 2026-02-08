const e={slug:"passcode-hacking",metadata:{id:"puzzle-draft-84",title:"Passcode Hacking",published:!1,difficulty:{concepts:"hard",reasoning:"hard"},dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",concepts:[],preview:"Consider an answering machine with remote inquiry facility, where you can call the answering machine and enter a 4 digit passcode into your telephone keypad,...",websitePreview:"Consider an answering machine with remote inquiry facility, where you can call the answering machine and enter a 4 digit passcode into your telephone keypad,..."},content:`


<p>Consider an answering machine with remote inquiry facility, where you can call the answering machine and enter a 4 digit passcode into your telephone keypad, so you can listen to the messages from anywhere you like. Many of these machines will let you in if you enter the correct consecutive sequence of digits, regardless of what preceded that sequence.</p>
<p>Example: Passcode is 1234.</p>
<p>if you feed the machine 1234, you're in<br>
if you feed the machine 01234, you're in<br>
if you feed the machine 0121234, you're in<br>
if you feed the machine 94129838701234, you're in</p>
<p>To brute-force hack the machine, you could try all numbers from 0000 to 9999, sending 40000 sounds across the wire. But since you are a smart hacker, you see that there's room for optimization. What is the shortest series of digits you have to send to the answering machine in order to break the code in any case?</p>`,rawContent:`<!-- Difficulty: \\[todo\\] -->
<!-- Tags: \\[todo\\] -->
<!-- Source: [https://www.ocf.berkeley.edu/~wwu/riddles/medium.shtml](https://www.ocf.berkeley.edu/~wwu/riddles/medium.shtml) -->

Consider an answering machine with remote inquiry facility, where you can call the answering machine and enter a 4 digit passcode into your telephone keypad, so you can listen to the messages from anywhere you like. Many of these machines will let you in if you enter the correct consecutive sequence of digits, regardless of what preceded that sequence.

Example: Passcode is 1234.

if you feed the machine 1234, you're in  
if you feed the machine 01234, you're in  
if you feed the machine 0121234, you're in  
if you feed the machine 94129838701234, you're in

To brute-force hack the machine, you could try all numbers from 0000 to 9999, sending 40000 sounds across the wire. But since you are a smart hacker, you see that there's room for optimization. What is the shortest series of digits you have to send to the answering machine in order to break the code in any case?
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
