<span id="page1"></span>**<span style="font-size:23.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Binary Trees and Binary Search Trees</span>**

<span style="position:absolute;
z-index:-1895857152;margin-left:0px;margin-top:17px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Explain and implement a Binary Tree</span>**

<span style="position:absolute;
z-index:-1895856128;margin-left:0px;margin-top:14px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">A Binary Tree is a Tree where nodes have at most 2 children, usually we represent these as 'left' and 'right'.</span>

<span style="position:absolute;
z-index:-1895855104;margin-left:0px;margin-top:6px;width:904px;height:167px"><img src="w8-study-guide_files/image002.jpg" width="904" height="167" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">class </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#445588">TreeNode</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">constructor</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(val) {</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.val = val;</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.left = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.right = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="position:absolute;
z-index:-1895854080;margin-left:0px;margin-top:46px;width:904px;height:253px"><img src="w8-study-guide_files/image003.jpg" width="904" height="253" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">a = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'a'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">b = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'b'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">c = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'c'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">d = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'d'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">e = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'e'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">f = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'f'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">a.left = b;</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">a.right = c;</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">b.left = d;</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">b.right = e;</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">c.right = f;</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Creates the following Binary Tree</span>

<span style="position:absolute;
z-index:-1895853056;margin-left:0px;margin-top:27px;width:456px;height:295px"></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Here's a complete implementation of a binary search tree</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895852032;margin-left:76px;margin-top:76px;width:904px;height:1224px"><img src="w8-study-guide_files/image005.jpg" width="904" height="1224" /></span><span id="page2"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">class </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#445588">TreeNode</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">constructor</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.val = val;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.left = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.right = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">class </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#445588">BST</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">constructor</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.root = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">insert(val, currentNode=**this**.root) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.root) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.root = **new** TreeNode(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(val &lt; currentNode.val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!currentNode.left) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">currentNode.left = **new** TreeNode(val);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.insert(val, currentNode.left);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!currentNode.right) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">currentNode.right = **new** TreeNode(val);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.insert(val, currentNode.right);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">searchRecur(val, currentNode=**this**.root) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!currentNode) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">false</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(val &lt; currentNode.val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.searchRecur(val, currentNode.left);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else if** (val &gt; currentNode.val){</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.searchRecur(val, currentNode.right);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">searchIter(val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">currentNode = **this**.root;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">while </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(currentNode) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(val &lt; currentNode.val) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">currentNode = currentNode.left;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:125%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">} **else if** (val &gt; currentNode.val){ currentNode = currentNode.right;</span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">false</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">module</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.exports = {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">TreeNode,</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">BST</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">};</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Identify the three types of tree traversals: pre-order, in-order, and post-order</span>**

<span style="position:relative;
z-index:-1895851008"><span style="position:absolute;left:0px;top:-7px;
width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">These are all depth first traversals, which means using recursion.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Pre-order</span>**

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Access the data of the current node</span>

<span style="font-size:9.5pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Recursively visit the left sub tree</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page3"></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">3. Recursively visit the right sub tree</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">In-Order</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Recursively visit the left sub tree</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Access the data of the current node</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Recursively visit the right sub tree</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Post-Order</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Recursively visit the left sub tree</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Recursively visit the right sub tree</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Access the data of the current node</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Explain and implement a Binary Search Tree</span>**

<span style="position:absolute;
z-index:-1895849984;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">A Binary Search Tree is a special kind of Binary Tree where the following is true:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">given any node of the tree, the values in the left subtree must all be strictly less than the given node's value.</span>

<span style="position:relative;
z-index:-1895848960"><span style="position:absolute;left:9px;top:-7px;
width:7px;height:7px"><img src="w8-study-guide_files/image006.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">and the values in the right subtree must all be greater than or equal to the given node's value</span>

<span style="position:relative;
z-index:-1895847936"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image006.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Or to say it with recursion:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">the left subtree contains values less than the root</span>

<span style="position:relative;
z-index:-1895846912"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w8-study-guide_files/image006.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">AND the right subtree contains values greater than or equal to the root</span>

<span style="position:relative;
z-index:-1895845888"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image006.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">AND the left subtree is a Binary Search Tree</span>

<span style="position:relative;
z-index:-1895844864"><span style="position:absolute;left:9px;top:-10px;
width:7px;height:7px"><img src="w8-study-guide_files/image006.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">AND the right subtree is a Binary Search Tree</span>

<span style="position:relative;
z-index:-1895843840"><span style="position:absolute;left:9px;top:-10px;
width:7px;height:7px"><img src="w8-study-guide_files/image006.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Some definitions of binary search trees allow duplicates and some do not. We can write our code to deal with the duplicates though.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Example of a Binary Search Tree:</span>

<span style="position:absolute;
z-index:-1895842816;margin-left:0px;margin-top:27px;width:904px;height:253px"><img src="w8-study-guide_files/image007.jpg" width="904" height="253" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">ten = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'10'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">five = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'5'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">sixteen = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'16'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">one = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'1'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">seven = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'7'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">sixteenDuplicate = **new** TreeNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'16'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">ten.left = five;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">ten.right = sixteen;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">five.left = one;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">five.right = seven;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">sixteen.right = sixteenDuplicate;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Generates this tree:</span>

<span style="position:absolute;
z-index:-1895841792;margin-left:0px;margin-top:27px;width:464px;height:369px"><img src="w8-study-guide_files/image008.jpg" width="464" height="369" /></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page4"></span><span style="font-size:10.0pt;line-height:162%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Usually we will write a class for our BST so we can have an "insert" method. This way we can control the order of how we insert the nodes to make sure the tree is a binary search tree and also a balanced BST.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Graphs</span>**

<span style="position:absolute;
z-index:-1895840768;margin-left:0px;margin-top:15px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Explain and implement a Graph</span>**

<span style="position:absolute;
z-index:-1895839744;margin-left:0px;margin-top:12px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">A graph is a collection of nodes and any edges between those nodes. It is a broad category. Linked lists and trees are both subclasses of graphs.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We can build a graph out of objects by making a GraphNode class</span>**

<span style="position:absolute;
z-index:-1895838720;margin-left:0px;margin-top:28px;width:904px;height:305px"><img src="w8-study-guide_files/image009.jpg" width="904" height="305" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:119%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:119%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Class based Graph </span>***<span style="font-size:9.0pt;line-height:119%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">class </span><span style="font-size:9.0pt;line-height:
119%;font-family:&quot;Arial&quot;,sans-serif;color:#445588">GraphNode</span><span style="font-size:9.0pt;line-height:119%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> </span>**<span style="font-size:9.0pt;line-height:119%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

**<span style="font-size:9.0pt;line-height:145%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">constructor</span>**<span style="font-size:9.0pt;line-height:
145%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(val) { **this**.val = val; **this**.neighbors = \[\];</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">a = **new** GraphNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'a'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">b = **new** GraphNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'b'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">c = **new** GraphNode(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'c'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">a.neighbors = \[b\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">b.neighbors = \[c\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">c.neighbors = \[a\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Adjacency Lists are another way to make a graph</span>**

<span style="position:absolute;
z-index:-1895837696;margin-left:0px;margin-top:28px;width:904px;height:149px"><img src="w8-study-guide_files/image010.jpg" width="904" height="149" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:125%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:125%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">adjacency list (Non-class based) </span>***<span style="font-size:9.0pt;line-height:125%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">let </span>**<span style="font-size:9.0pt;line-height:125%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">graph = {</span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'a'</span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">: \[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'b'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\],</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'b'</span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">: \[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'c'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\],</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'c'</span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">: \[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'a'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\]</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Breadth-first Search on the adjacency list graph.</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">When doing breadth first, iterative is simpler and easier.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We can use a queue to do this.</span>

<span style="font-size:10.0pt"> </span>

*<span style="font-size:10.0pt;line-height:169%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Extra Challenge, use the Queue class we made last week as the queue to use inside of this function, instead of just using an array as a queue</span>*

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895836672;margin-left:76px;margin-top:76px;width:904px;height:531px"><img src="w8-study-guide_files/image011.jpg" width="904" height="531" /></span><span id="page5"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">breadthFirstSearch</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(graph, startingNode, targetVal) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:125%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">      </span></span>*<span style="font-size:9.0pt;line-height:125%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Populate our queue with the starting Node </span>***<span style="font-size:9.0pt;line-height:125%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">let </span>**<span style="font-size:9.0pt;line-height:125%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">queue = \[ startingNode \];</span>

<span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">      </span></span>*<span style="font-size:9.0pt;line-height:129%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Create a new empty Set to hold the nodes we've visited </span>***<span style="font-size:9.0pt;line-height:129%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">visited = **new** </span><span style="font-size:9.0pt;
line-height:129%;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">Set</span><span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">();</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">        </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">Keep going until the queue is empty</span>*

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">while</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(queue.length) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:129%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Dequeue the first thing from the queue </span>***<span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">let </span>**<span style="font-size:9.0pt;line-height:129%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">node = queue.shift();</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">If we've visited this node before, then just continue, which goes</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">back up to the while loop</span>*

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(visited.has(node)) **continue**;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:122%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Add the node to the visited set. </span>*<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">visited.add(node);</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">Check to see if the node is the one we are looking for, if it is</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">return true</span>*

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(node === targetVal) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:122%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Enqueue the node's neighbors from the adjacency graph onto the queue </span>*<span style="font-size:9.0pt;
line-height:122%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">queue.push(...graph\[node\]);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:114%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">      </span></span>*<span style="font-size:9.0pt;line-height:114%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">If we made it through the loop without finding one, return false </span>***<span style="font-size:9.0pt;
line-height:114%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;line-height:114%;font-family:&quot;Arial&quot;,sans-serif;
color:teal">false</span><span style="font-size:9.0pt;line-height:114%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">breadthFirstSearch(graph, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'a'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'c'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">); </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">// true</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Depth-first Search on the adjacency list graph.</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">It is easier to do a recursive solution for depth first.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Depth first usually uses a stack, in this case the recursive call-stack is acting as our</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">stack.</span>

<span style="position:absolute;
z-index:-1895835648;margin-left:0px;margin-top:26px;width:904px;height:444px"><img src="w8-study-guide_files/image012.jpg" width="904" height="444" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">depthFirstSearch</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(graph, startingNode, targetVal, visited=new Set()) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:119%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">      </span></span>*<span style="font-size:9.0pt;line-height:119%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">If we found the node, return true </span>***<span style="font-size:9.0pt;line-height:119%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">if </span>**<span style="font-size:9.0pt;line-height:119%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">(startingNode === targetVal) {</span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">neighbors = graph\[startingNode\];</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** neighbor **of** neighbors) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">If the neighbor has already been visited, we can</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">skip it.</span>*

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(visited.has(neighbor)) **continue**;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:122%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Add the neighbor to the visited set </span>*<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">visited.add(neighbor);</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;line-height:
125%;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:125%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Now we recurse to check the neighbor and return the result </span>***<span style="font-size:9.0pt;line-height:125%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;line-height:125%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">depthFirstSearch(graph, neighbor, targetVal, visited);</span>

<span style="font-size:9.0pt;line-height:97%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:114%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">      </span></span>*<span style="font-size:9.0pt;line-height:114%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">If we didn't find it, return true </span>***<span style="font-size:9.0pt;line-height:114%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">return </span>**<span style="font-size:9.0pt;line-height:114%;
font-family:&quot;Arial&quot;,sans-serif;color:teal">false</span><span style="font-size:
9.0pt;line-height:114%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(depthFirstSearch(graph,</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3"> </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'a'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">,</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3"> </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'c'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">));</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Network Models Objectives</span>**

<span style="position:absolute;
z-index:-1895834624;margin-left:0px;margin-top:15px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Describe the structure and function of network models from the perspective of a developer</span>**

<span style="position:relative;
z-index:-1895833600"><span style="position:absolute;left:0px;top:-7px;
width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">OSI is a reference model and doesn't match up very well to how things actually</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">work in the real world. It has seven layers. Some descriptions of the OSI model</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">try to fit our existing tech into the seven layer model but it doesn't match up</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">exactly with how networks work today.</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">OSI Network Model</span>**

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page6"></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Application - HTTP</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Presentation - JPEG/GIF</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Session - RPC</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">4.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Transport - TCP/UDP</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">5.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Network - IP</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">6.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Data Link - Ethernet</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">7.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Physical - DSL, 802.11</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The TCP/IP model is the actual way networks today work, it is simpler than the OSI model and has only four layers.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">TCP/IP Network Model</span>**

<span style="position:absolute;
z-index:-1895832576;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Application - HTTP, HTTPS, FTP, SMTP, etc</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Transport - TCP or UDP</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Internet - IP</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">4.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Link - Ethernet</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Internet Protocol Suite Objectives</span>**

<span style="position:absolute;
z-index:-1895831552;margin-left:0px;margin-top:16px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Identify the correct fields of an IPv6 header</span>**

<span style="position:absolute;
z-index:-1895830528;margin-left:0px;margin-top:13px;width:904px;height:741px"><img src="w8-study-guide_files/image013.jpg" width="904" height="741" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2. Distinguish an IPv4 packet from an IPv6</span>**

<span style="position:absolute;
z-index:-1895829504;margin-left:0px;margin-top:14px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The Version number is stored in the headers of IP packets as a binary number.</span>

<span style="position:absolute;
z-index:-1895828480;margin-left:0px;margin-top:27px;width:904px;height:80px"><img src="w8-study-guide_files/image014.jpg" width="904" height="80" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">IPv4 = 4 = 0100</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">IPv6 </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">= 6 = 0110</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page7"></span><span style="font-size:10.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">IPv4 addresses are made up of 4 octets, each a 8-bit binary number converted to decimal.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Example: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">192.168.1.1</span>

<span style="position:relative;
z-index:-1895827456"><span style="position:absolute;left:57px;top:-15px;
width:88px;height:20px"><img src="w8-study-guide_files/image015.jpg" width="88" height="20" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">IPv6 addresses are made up of a 128bit number. It is usually resprentened in</span>

<span style="position:absolute;
z-index:-1895826432;margin-left:287px;margin-top:7px;width:17px;height:20px"><img src="w8-study-guide_files/image016.jpg" width="17" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">hexidecimal, with every four digits separated by a </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Example: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2001:0db8:85a3:0000:0000:8a2e:0370:7334</span>

<span style="position:relative;
z-index:-1895825408"><span style="position:absolute;left:58px;top:-14px;
width:289px;height:20px"><img src="w8-study-guide_files/image017.jpg" width="289" height="20" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">In IPv6 addresses you can also compress the zeros to make it shorter to write:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The rules are:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">An entire string of zeros can be removed, you can only do this once.</span>

<span style="position:relative;
z-index:-1895824384"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">4 zeros can be removed, leaving only a single zero.</span>

<span style="position:relative;
z-index:-1895823360"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Leading zeros can be removed.</span>

<span style="position:relative;
z-index:-1895822336"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Example: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2001:db8:85a3::0:8a2e:370:7334</span>

<span style="position:relative;
z-index:-1895821312"><span style="position:absolute;left:58px;top:-14px;
width:225px;height:20px"><img src="w8-study-guide_files/image019.jpg" width="225" height="20" /></span></span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Describe the following subjects and how they relate to one another: IP Addresses, Domain Names, and DNS</span>**

<span style="position:relative;
z-index:-1895820288"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:10.0pt"> </span>

*<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">IP Address </span>*<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- The internet protocol address assigned to a particular networking device (Ethernet adapter, Wi-Fi Adapter, etc). IPv4 example:</span>

<span style="position:relative;
z-index:-1895819264"><span style="position:absolute;left:9px;top:-7px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895818240;margin-left:27px;margin-top:7px;width:89px;
height:20px"><img src="w8-study-guide_files/image020.jpg" width="89" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">192.168.1.1 </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.</span>

<span style="position:absolute;
z-index:-1895817216;margin-left:487px;margin-top:5px;width:203px;height:20px"><img src="w8-study-guide_files/image021.jpg" width="203" height="20" /></span>

<span style="font-size:10.0pt"> </span>

*<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Domain Name </span>*<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- A human readable name assigned to an IP address. Examples: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">google.com</span>*<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>*<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">or </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">appacademy.io</span>

<span style="position:relative;
z-index:-1895816192"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

*<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">DNS </span>*<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Domain Name System: A protocol (on UDP port 53) that allows our computer to talk to a DNS Server and *resolve* a Domain Name into an IP</span>

<span style="position:relative;
z-index:-1895815168"><span style="position:absolute;left:9px;top:-10px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895814144;margin-left:139px;margin-top:5px;width:81px;
height:20px"><img src="w8-study-guide_files/image022.jpg" width="81" height="20" /></span><span style="position:absolute;z-index:-1895813120;margin-left:319px;margin-top:5px;
width:103px;height:20px"><img src="w8-study-guide_files/image023.jpg" width="103" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Address. Example: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">google.com</span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> might resolve to </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">172.217.6.142</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Common DNS Record Types are:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">A - Directly maps a domain name to an IPv4 Address</span>

<span style="position:relative;
z-index:-1895812096"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">AAAA - Directly maps a domain name to an IPv6 Address</span>

<span style="position:relative;
z-index:-1895811072"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">CNAME - Maps a domain name to another domain name</span>

<span style="position:relative;
z-index:-1895810048"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">MX - Defines the mail server for a domain</span>

<span style="position:relative;
z-index:-1895809024"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">NS - Defines the DNS Servers for a zone (domain)</span>

<span style="position:relative;
z-index:-1895808000"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">SOA - Defines which DNS Server is the authority for a zone(domain)</span>

<span style="position:relative;
z-index:-1895806976"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">4. Identify use cases for the TCP and UDP protocols</span>**

<span style="position:absolute;
z-index:-1895805952;margin-left:0px;margin-top:14px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">TCP - Transmission Control Protocol</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">TCP is used when you want reliable connections and you want the packets to reach the destination in the correct order. Web Browsing, Downloading Files, fetching Email from a server, Streaming Music or Video are all examples of TCP</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">UDP - user Datagram Protocol</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">UDP is used when you don't mind an more unreliable connection, but where real time interactivity is more important. If you drop a few packets, no big deal.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Examples are Voice Over IP Telephone calls, and Video Chat systems like Facetime or Zoom.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">5.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Describe the following subjects and how they relate to one another: MAC Address, IP Address, and a port</span>**

<span style="position:relative;
z-index:-1895804928"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:10.0pt"> </span>

*<span style="font-size:10.0pt;line-height:141%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">MAC Address </span>*<span style="font-size:10.0pt;line-height:
141%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- A hardware address assigned to every physical networking device on a network. These are assigned usually at the time the device was manufacturered, although in some case they can be changed via software. They look like a series of Hexidecimal values separated by </span><span style="font-size:9.0pt;line-height:141%;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">:</span><span style="font-size:10.0pt;
line-height:141%;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> characters. Example: </span><span style="font-size:9.0pt;line-height:141%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">ea:de:36:d9:5a:b8</span><span style="font-size:10.0pt;
line-height:141%;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> . They are used to communicate on the local network *only*.</span>

<span style="position:relative;
z-index:-1895803904"><span style="position:absolute;left:9px;top:-57px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
relative;z-index:-1895802880"><span style="position:absolute;left:796px;
top:-43px;width:17px;height:20px"><img src="w8-study-guide_files/image016.jpg" width="17" height="20" /></span></span><span style="position:
relative;z-index:-1895801856"><span style="position:absolute;left:84px;
top:-21px;width:132px;height:20px"><img src="w8-study-guide_files/image024.jpg" width="132" height="20" /></span></span>

*<span style="font-size:10.0pt;line-height:138%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">IP Address </span>*<span style="font-size:10.0pt;line-height:
138%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- An address assigned to a networking device. These are usually assigned in software, and may be automatically assigned by an ISP or by a router on a local network using DHCP. They are used to </span><span style="font-size:9.0pt;line-height:138%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">route</span><span style="font-size:10.0pt;line-height:138%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> connections across multiple networks. Example: IPV4 Address </span><span style="font-size:9.0pt;line-height:138%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">192.168.1.1</span><span style="font-size:10.0pt;line-height:
138%;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> . A Router will map IP Addresses to MAC Addresses to keep track of connections.</span>

<span style="position:relative;
z-index:-1895800832"><span style="position:absolute;left:9px;top:-57px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
relative;z-index:-1895799808"><span style="position:absolute;left:349px;
top:-43px;width:47px;height:20px"><img src="w8-study-guide_files/image025.jpg" width="47" height="20" /></span></span><span style="position:
relative;z-index:-1895798784"><span style="position:absolute;left:762px;
top:-43px;width:89px;height:20px"><img src="w8-study-guide_files/image020.jpg" width="89" height="20" /></span></span>

*<span style="font-size:10.0pt;line-height:
158%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Port </span>*<span style="font-size:10.0pt;line-height:158%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">- Represents a TCP/UDP connection on an actual computer. Valid ports are numbers in the range from 0-65535. Used by the operating system of a computer to route TCP connections to the right program running on a computer. These programs can be said to be "listening" on a port. No two programs are allowed to listen on the same port at once. The default ports for web servers are HTTP(80) and HTTPS(443).</span>

<span style="position:relative;
z-index:-1895797760"><span style="position:absolute;left:9px;top:-66px;
width:7px;height:7px"><img src="w8-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">6. Identify the fields of a TCP segment</span>**

<span style="position:absolute;
z-index:-1895796736;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page8"></span><span style="font-size:10.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">This was covered in the optional lectures and therefore isn't on the assessment</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">7. Describe how a TCP connection is negotiated</span>**

<span style="position:absolute;
z-index:-1895795712;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">This was covered in the optional lectures and therefore isn't on the assessment</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">8.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Explaining the difference between network devices like a router and a switch</span>**

**<span style="font-size:18.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**

<span style="font-size:10.0pt;line-height:143%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span>*<span style="font-size:10.0pt;line-height:143%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Hub </span>*<span style="font-size:10.0pt;line-height:143%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">- A device which hooks multiple computers together over ethernet and blindly repeats ethernet packets to all the other devices on a local area network. These are not used much anymore</span>

<span style="font-size:10.0pt;line-height:138%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span>*<span style="font-size:10.0pt;line-height:138%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Switch </span>*<span style="font-size:10.0pt;line-height:
138%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- A device which intelligently hooks multiple computers together over ethernet and sends ethernet packets to the correct devices on a local area network based on MAC Addresses.</span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">   </span></span>*<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Router </span>*<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- A device which is reponsible for routing IP packets BETWEEN different networks.</span>

<span style="position:relative;
z-index:-1895794688"><span style="position:absolute;left:0px;top:-124px;
width:904px;height:1px"><img src="w8-study-guide_files/image001.jpg" width="904" height="1" /></span></span>
