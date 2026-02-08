const e={slug:"covering-a-chessboard-5",metadata:{id:"puzzle-draft-64",title:"Covering a Chessboard 5",published:!1,difficulty:{concepts:"medium",reasoning:"medium"},concepts:[],tags:[],dateCreated:"[PLACEHOLDER]",lastUpdated:"[PLACEHOLDER]",preview:"You’re given an 8x8 chessboard. You can place S tetrominos on the board, with each one covering exactly 4 tiles. These pieces can be rotated by 90° increments...",websitePreview:"You’re given an 8x8 chessboard. You can place S tetrominos on the board, with each one covering exactly 4 tiles. These pieces can be rotated by 90° increments..."},content:`<h3 class="markdown-h2">You’re given an 8x8 chessboard. You can place S tetrominos on the board, with each one covering exactly 4 tiles. These pieces can be rotated by 90° increments or flipped. Can you cover the entire chessboard? If yes, show an arrangement of such a covering. If not, prove why it cannot be done.</h3>
<p>It cannot be done.</p>
<p>Start with the corner tile. The only way to fill it with the S piece is with one of the following options.</p>
<p>[flip this diagram left-right]<br>
<img alt=""></p>
<p>Let’s consider the first case. Notice the empty tile beneath the first piece. To cover this tile, we are forced to place an S piece here. By the same argument, we can force a 3rd S piece. This leaves us with a corner that cannot be filled by another S piece, no matter what we do.</p>
<p>[diagram]</p>
<p>The second case is analogous to the first case by reflecting the chessboard by the diagonal.</p>`,rawContent:`You’re given an 8x8 chessboard. You can place S tetrominos on the board, with each one covering exactly 4 tiles. These pieces can be rotated by 90° increments or flipped. Can you cover the entire chessboard? If yes, show an arrangement of such a covering. If not, prove why it cannot be done.
---

It cannot be done.

Start with the corner tile. The only way to fill it with the S piece is with one of the following options.

\\[flip this diagram left-right\\]  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACCCAYAAAB7LRxZAAAFUklEQVR4Xu3dzauUZRjAYf+A1Ci17w8oa9HnPqkgDVL7wGyTu1LM0ha2tU0uTMu1excJCokZ+A+khoquXCi2FwRBQbdPPC+MTDPK6fg+9818XIsLZWbOszhz8ztnZg7vveTu3bsFIMuS0RsAIokOkEp0gFSiA6QSHSCV6ACpRAdIJTpAKtEBUokOkEp0gFSiA6QSHSCV6ACpRAdIJTpAKtEBUokOkEp0gFSiA6QSHSCV6ACpRAdIJTpAKtEBUokOkEp0gFRNo3Pr1q2yZ8+P5YO168qFCxfG7u/j2rV/yvoNG8vOXd+X69evj93fR+TZ586dK+++9375ae/e7vszev+8iZyRyLPNSDtNo3P27N9l5aonyiNLl5Xt278Zu7+P/fsPdOdWJ0/+OXZ/H5Fnf/X11u7cJ596upw/f37s/nkTOSORZ5uRdppGp/4E+OTTz8qKlavKiRN/jN3fx5kzZ8vzL7xY3lmzpvupM3p/H5FnHzt2rDz2+IqyefMX5caNG2P3z5vIGYk824y00zQ6AAsRHSCV6ACpRAdIJTpAKtEBUokOkEp0gFSiA6QSHSCV6ACpRAdIJTpAKtEBUokOkGpio3Pnzp2ye/cP3cWNvtyy5T9XVLt69Wp58623y7Llj5ajR4+OfS0wuSY2OlW9KNNH6zd04fn14MHuthqfrdu2dbft2/dzF6fRrwMm10RHp/rr9OnyzLPPder/Dx061AWnxqj1tWqBeBMfneq3I0fK0mXLy+pXXu2ugVtfWtWXWKOPAybfVESnvqTasePb7jcc7+PAdJuK6Ny+fbt8t3OX6MAMmIro1MjU2AxeXr308upy+fLlsccBk69pdCKWnV26dKlb/VHfSK57jQ4c+KX5G8kWqeWJmJGByLPNSDtNo9N62dnwR+b1U6t6W31S6t/ttPzI3CK1PK1nZFjk2WaknabRabnsLPOPAy1Sy9NyRkZFnm1G2mkaHYCFiA6QSnSAVKIDpBIdIJXoAKlEB0glOkAq0QFSiQ6QSnSAVKIDpBIdIJXoAKlEB0glOkCq3tE5depUdzGt0esWD29wqP8u9jKMmRfxYnqZv+nTOzr1yRlct3jDxo/vXflssKtq7boPH/qasjZ8shDzN316R6cafnLqAFy8ePHexdTrVs7Rxy+GDZ8sxPxNlybRqa5cuVJee/2N7sLYdVVMy189bfhkIeZvejSLTjXYT/Wwr6MfZPj1ecthYraYv+nQNDq/Hz8e8qTb8Mn/Yf6mQ7PoDN7RH/x6W5+gw4cPjz3uYdjwyULM3/RoEp2bN2+WTZs+v/cu/+ibb6OPXwwbPmdL/R603sI57fM3bzPSOzrDH1nWJ74OQL29/pSpt7X6yNKGz9nQegvnLMzfvM1I7+jMwh9n2d6Yp/UWzlmYv3mbkd7RAVgM0QFSiQ6QSnSAVKIDpBIdIJXoAKlEB0glOkAq0QFSiQ6QSnSAVKIDpBIdIJXoAKl6RyfqeibMjsgZiTybGL2jE7nsjNkQOSORZxOjd3SqyGVnzIbIGYk8m/aaRKeKXHbGbIickcizaatZdKqoZWfMjsgZiTybdppGJ2rZGbMjckYiz6adZtGJXHbGbIickcizaatJdCKXnQ1ELsSLPHveFqk9SOSMRJ49YEba6R2dyGVnwyIX4kWePW+L1O4nckYizx5mRtrpHZ2sP86KXIgXefa8LVK7n8gZiTx7mBlpp3d0ABZDdIBUogOkEh0glegAqUQHSCU6QCrRAVKJDpBKdIBUogOkEh0glegAqUQHSCU6QCrRAVKJDpBKdIBUogOkEh0glegAqUQHSCU6QKp/AZeRZEYz6d2MAAAAAElFTkSuQmCC)

Let’s consider the first case. Notice the empty tile beneath the first piece. To cover this tile, we are forced to place an S piece here. By the same argument, we can force a 3rd S piece. This leaves us with a corner that cannot be filled by another S piece, no matter what we do.

\\[diagram\\]

The second case is analogous to the first case by reflecting the chessboard by the diagonal.
`,dynamicBlocks:[],inlineComponents:{}};export{e as default};
