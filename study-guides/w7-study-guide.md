<span id="page1"></span>**<span style="font-size:23.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Learning Objectives - Big O analysis</span>**

<span style="position:absolute;
z-index:-1895862272;margin-left:0px;margin-top:17px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Big O notation is ONLY concerned with performance relative to its input size.</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Big O notation describes an algorithm's worst case. Big O describes how the runtime of an algorithm scales with the amount of data it has to work on</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We can measure both time and space, but are mostly concerned with time (memory is cheap and abundant)</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Order the common complexity classes according to their growth rate</span>**

<span style="position:absolute;
z-index:-1895861248;margin-left:0px;margin-top:14px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<table class="MsoNormalTable" data-border="0" data-cellspacing="0" data-cellpadding="0" style="margin-left:.5pt;border-collapse:collapse"><tbody><tr class="odd" style="height:22.5pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-bottom: none; padding: 0in 0in 0in 0in; height: 22.5pt"><p><strong><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Name</span></strong></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: solid #DDDDDD 1.0pt; border-left: none; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 22.5pt"><p><strong><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Big O Notation</span></strong></p></td></tr><tr class="even" style="height:6.5pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 6.5pt"><p><span style="font-size:5.5pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 6.5pt"><p><span style="font-size:5.5pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Constant</span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(1)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Logarithmic</span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(log(n))</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Linear</span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Linear Logarithmic</span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n*log(n))</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Polynomial</span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n^m)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Exponential</span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(m^n)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Factorial</span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n!)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="145" data-valign="bottom" style="width: 109.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="131" data-valign="bottom" style="width: 98.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr></tbody></table>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2. Identify the complexity classes of common sort methods</span>**

<span style="position:absolute;
z-index:-1895860224;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<table class="MsoNormalTable" data-border="0" data-cellspacing="0" data-cellpadding="0" style="margin-left:.5pt;border-collapse:collapse"><tbody><tr class="odd" style="height:22.5pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border: solid #DDDDDD 1.0pt; border-bottom: none; padding: 0in 0in 0in 0in; height: 22.5pt"><p><strong><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Algorithm</span></strong></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border-top: solid #DDDDDD 1.0pt; border-left: none; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 22.5pt"><p><strong><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Runtime Complexity</span></strong></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border-top: solid #DDDDDD 1.0pt; border-left: none; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 22.5pt"><p><strong><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Memory Efficiency</span></strong></p></td></tr><tr class="even" style="height:6.5pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 6.5pt"><p><span style="font-size:5.5pt"> </span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 6.5pt"><p><span style="font-size:5.5pt"> </span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 6.5pt"><p><span style="font-size:5.5pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Bubble Sort</span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n^2)</span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(1)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Selection Sort</span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n^2)</span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(1)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border: solid #DDDDDD 1.0pt; border-top: none; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Insertion Sort</span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n^2)</span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Merge Sort</span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n * log(n))</span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border: none; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border: solid #DDDDDD 1.0pt; border-top: none; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; background: #F8F8F8; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr><tr class="odd" style="height:23.3pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border-top: none; border-left: solid #DDDDDD 1.0pt; border-bottom: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">Quick Sort</span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n^2)</span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border: none; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 23.3pt"><p><span style="font-size:10.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(n)</span></p></td></tr><tr class="even" style="height:4.7pt"><td width="119" data-valign="bottom" style="width: 89.0pt; border: solid #DDDDDD 1.0pt; border-top: none; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="167" data-valign="bottom" style="width: 125.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td><td width="156" data-valign="bottom" style="width: 117.0pt; border-top: none; border-left: none; border-bottom: solid #DDDDDD 1.0pt; border-right: solid #DDDDDD 1.0pt; padding: 0in 0in 0in 0in; height: 4.7pt"><p><span style="font-size:4.0pt"> </span></p></td></tr></tbody></table>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">3. Identify complexity classes of code</span>**

<span style="position:absolute;
z-index:-1895859200;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(1) </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Do a known number of things, these don't grow with input size.</span>

<span style="position:absolute;
z-index:-1895858176;margin-left:0px;margin-top:26px;width:904px;height:97px"><img src="w7-study-guide_files/image002.jpg" width="904" height="97" /></span><span style="position:relative;z-index:-1895857152"><span style="position:absolute;
left:0px;top:-15px;width:39px;height:20px"><img src="w7-study-guide_files/image003.jpg" width="39" height="20" /></span></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">firstThing = li => { </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// n would be input size</span>*

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">li\[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\];</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">};</span>

<span style="position:absolute;
z-index:-1895856128;margin-left:0px;margin-top:46px;width:904px;height:132px"><img src="w7-study-guide_files/image004.jpg" width="904" height="132" /></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">threeHundredThousandTimesLog = name => {</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; </span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:teal">300000</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">; i++) {</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(name);</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">};</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">O(log n) </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Typically "divide and conquer" type algorithms</span>

<span style="position:absolute;
z-index:-1895855104;margin-left:0px;margin-top:26px;width:904px;height:132px"><img src="w7-study-guide_files/image004.jpg" width="904" height="132" /></span><span style="position:relative;z-index:-1895854080"><span style="position:absolute;
left:0px;top:-15px;width:68px;height:20px"><img src="w7-study-guide_files/image005.jpg" width="68" height="20" /></span></span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">splitInHalf = n => {</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(n &lt;= </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return** n;</span>

<span style="font-size:18.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">splitInHalf(n / </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:18.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page2"></span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">O(n) </span><span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Where we do a fixed number of things per item in the input</span>

<span style="position:absolute;
z-index:-1895853056;margin-left:-5px;margin-top:27px;width:904px;height:132px"><img src="w7-study-guide_files/image004.jpg" width="904" height="132" /></span><span style="position:relative;z-index:-1895852032"><span style="position:absolute;
left:-5px;top:-14px;width:39px;height:20px"><img src="w7-study-guide_files/image003.jpg" width="39" height="20" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">printAll = li => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">li.forEach(ele => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(ele);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">};</span>

<span style="position:absolute;
z-index:-1895851008;margin-left:-5px;margin-top:46px;width:904px;height:167px"><img src="w7-study-guide_files/image006.jpg" width="904" height="167" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">find = (li, value) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; li.length; i++) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(li\[i\] === value) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">false</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="position:absolute;
z-index:-1895849984;margin-left:-5px;margin-top:46px;width:904px;height:167px"><img src="w7-study-guide_files/image006.jpg" width="904" height="167" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">printALot = (li) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; li.length; i++) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** j = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; j &lt; </span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:teal">300000</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">; j++) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(li\[i\]);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="position:absolute;
z-index:-1895848960;margin-left:-5px;margin-top:47px;width:81px;height:20px"><img src="w7-study-guide_files/image007.jpg" width="81" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">O(n log n)</span>

<span style="position:absolute;
z-index:-1895847936;margin-left:-5px;margin-top:24px;width:904px;height:201px"><img src="w7-study-guide_files/image008.jpg" width="904" height="201" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">splitButIterate = (li) => { </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// \[1,2,3,4,5,6,7,8\]</span>*

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(li.length &lt; </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return** li;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">midIdx = li.length / </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">splitButIterate(li.slice(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, midIdx)); </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// 1,2,3,4</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">splitButIterate(li.slice(midIdx)); </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// 5,6,7,8</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">li.forEach(ele => </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(ele))</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">};</span>

<span style="position:absolute;
z-index:-1895846912;margin-left:-5px;margin-top:47px;width:53px;height:20px"><img src="w7-study-guide_files/image009.jpg" width="53" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">O(n^2)</span>

<span style="position:absolute;
z-index:-1895845888;margin-left:-5px;margin-top:25px;width:904px;height:167px"><img src="w7-study-guide_files/image006.jpg" width="904" height="167" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">dreadedDubs = (li) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; li.length; i++) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** j = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; j &lt; li.length; j++) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">print(j);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="position:absolute;
z-index:-1895844864;margin-left:-5px;margin-top:47px;width:53px;height:20px"><img src="w7-study-guide_files/image009.jpg" width="53" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">O(2^n)</span>

<span style="position:absolute;
z-index:-1895843840;margin-left:-5px;margin-top:25px;width:904px;height:149px"><img src="w7-study-guide_files/image010.jpg" width="904" height="149" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">twoN = (n) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(n == </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">) **return** n;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">twoN(n - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">twoN(n - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="position:absolute;
z-index:-1895842816;margin-left:-5px;margin-top:47px;width:45px;height:20px"><img src="w7-study-guide_files/image011.jpg" width="45" height="20" /></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">O(n!)</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895841792;margin-left:76px;margin-top:75px;width:904px;height:167px"><img src="w7-study-guide_files/image006.jpg" width="904" height="167" /></span><span id="page3"></span>

**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">factorial = (n) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(n === </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">) **return** n;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; n; i++) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">factorial(n - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">};</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Memoization and Tabulation Learning Objectives</span>**

<span style="position:absolute;
z-index:-1895840768;margin-left:0px;margin-top:15px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Apply memoization to recursive problems to make them less than polynomial time</span>**

<span style="position:relative;
z-index:-1895839744"><span style="position:absolute;left:0px;top:-7px;
width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span></span><span style="position:
absolute;z-index:-1895838720;margin-left:0px;margin-top:16px;width:904px;
height:132px"><img src="w7-study-guide_files/image004.jpg" width="904" height="132" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fibonacci = (n, memo = { </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">}) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(n **in** memo) **return** memo\[n\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">memo\[n\] = fibonacci(n - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, memo) + fibonacci(n - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">, memo);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">memo\[n\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">};</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Apply tabulation to iterative problems to make them less than polynomial time</span>**

<span style="position:relative;
z-index:-1895837696"><span style="position:absolute;left:0px;top:-7px;
width:904px;height:380px"><img src="w7-study-guide_files/image012.jpg" width="904" height="380" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">tabulatedFib</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(n) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:129%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">create a blank array with n reserved spots </span>***<span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">let </span>**<span style="font-size:9.0pt;line-height:129%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">table = **new** </span><span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#0086B3">Array</span><span style="font-size:9.0pt;line-height:129%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">(n);</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">seed the first two values</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">table\[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\] = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">table\[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\] = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">complete the table by moving from left to right,</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">following the fibonacci pattern</span>*

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt;= n; i += </span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">) {</span>

<span style="font-size:10.0pt"> </span>

<table class="MsoNormalTable" data-border="0" data-cellspacing="0" data-cellpadding="0" style="margin-left:17.0pt;border-collapse:collapse"><tbody><tr class="odd" style="height:10.35pt"><td colspan="2" width="269" data-valign="bottom" style="width: 202.0pt; padding: 0in 0in 0in 0in; height: 10.35pt"><p><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">table[i] = table[i - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
  color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
  color:#333333">] + table[i</span></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 10.35pt"><p><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">];</span></p></td></tr><tr class="even" style="height:13.0pt"><td width="229" data-valign="bottom" style="width: 172.0pt; padding: 0in 0in 0in 0in; height: 13.0pt"><p><span style="font-size:9.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 13.0pt"><p> </p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 13.0pt"><p> </p></td></tr><tr class="odd" style="height:26.7pt"><td width="229" data-valign="bottom" style="width: 172.0pt; padding: 0in 0in 0in 0in; height: 26.7pt"><p><strong><span style="font-size:9.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span></strong><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">table[n];</span></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 26.7pt"><p><span style="font-size:15.0pt"> </span></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 26.7pt"><p><span style="font-size:12.0pt"> </span></p></td></tr><tr class="even" style="height:12.3pt"><td width="229" data-valign="bottom" style="width: 172.0pt; padding: 0in 0in 0in 0in; height: 12.3pt"><p><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
  color:#333333">}</span></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 12.3pt"><p><span style="font-size:10.5pt"> </span></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 12.3pt"><p><span style="font-size:10.5pt"> </span></p></td></tr><tr class="odd" style="height:26.0pt"><td width="229" data-valign="bottom" style="width: 172.0pt; padding: 0in 0in 0in 0in; height: 26.0pt"><p><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
  color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
  color:#333333">.log(tabulatedFib(</span><span style="font-size:9.0pt;
  font-family:&quot;Arial&quot;,sans-serif;color:teal">7</span><span style="font-size:
  9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">));</span></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 26.0pt"><p><em><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//</span></em></p></td><td width="40" data-valign="bottom" style="width: 30.0pt; padding: 0in 0in 0in 0in; height: 26.0pt"><p><em><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">=&gt; 13</span></em></p></td></tr></tbody></table>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Sorting Algorithms Learning Objectives</span>**

<span style="position:absolute;
z-index:-1895836672;margin-left:0px;margin-top:16px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Explain the complexity of and write a function that performs bubble sort on an array of numbers</span>**

<span style="position:relative;
z-index:-1895835648"><span style="position:absolute;left:0px;top:-7px;
width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895834624;margin-left:76px;margin-top:76px;width:904px;height:357px"><img src="w7-study-guide_files/image013.jpg" width="904" height="357" /></span><span id="page4"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">swap</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array, idx1, idx2) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">\[array\[idx1\], array\[idx2\]\] = \[array\[idx2\], array\[idx1\]\]</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">bubbleSort</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">swapped = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">false</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">while </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!swapped) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">swapped = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; array.length; i++) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array\[i\] &gt; array\[i + </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">\]) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">swap(array, i, i+</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">swapped = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">false</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

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
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Time Complexity: O(n^2)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The inner for loop contributes O(n) in isolation. In the worst case scenario, the while loop will need to run n times to bring all n elements into their final resting</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">positions.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Space Complexity: O(1)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Bubble sort uses the same amount of memory and create the same amount of variables regardless of the size of the input.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Explain the complexity of and write a function that performs selection sort on an array of numbers</span>**

<span style="position:relative;
z-index:-1895833600"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:397px"><img src="w7-study-guide_files/image014.jpg" width="904" height="397" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">swap</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(arr, index1, index2) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">\[arr\[index1\], arr\[index2\]\] = \[arr\[index2\], arr\[index1\]\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">selectionSort</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(list) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; list.length; i++) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">min = i;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** j = i + </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; j &lt; list.length; j++) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(list\[j\] &lt; list\[min\]) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">min = j;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(min !== i) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">swap(list, i, min);</span>

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

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Time Complexity: O(n^2)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The outer loop i contributes O(n) in isolation. The inner loop j will contribute roughly O(n / 2) on average. The two loops are nested so our total time complexity</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">is O(n \* n / 2) = O(n^2).</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Space Complexity: O(1)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We use the same amount of memory and create the same amount of variables regardless of the size of our input.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Explain the complexity of and write a function that performs insertion sort on an array of numbers</span>**

<span style="position:relative;
z-index:-1895832576"><span style="position:absolute;left:0px;top:-5px;
width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895831552;margin-left:76px;margin-top:76px;width:904px;height:271px"><img src="w7-study-guide_files/image015.jpg" width="904" height="271" /></span><span id="page5"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">insertionSort</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(list) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">for </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**let** i = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">; i &lt; list.length; i++) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">value = list\[i\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">hole = i;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">while </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(hole &gt; </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">&& list\[hole - </span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\] &gt; value) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">list\[hole\] = list\[hole - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">hole--;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">list\[hole\] = value;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Time Complexity: O(n^2)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The outer loop i contributes O(n) in isolation. The inner while loop will contribute roughly O(n / 2) on average. The two loops are nested so our total time complexity is O(n \* n / 2) = O(n^2).</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Space Complexity: O(1)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We use the same amount of memory and create the same amount of variables regardless of the size of our input.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">4.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Explain the complexity of and write a function that performs merge sort on an array of numbers</span>**

<span style="position:relative;
z-index:-1895830528"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:449px"><img src="w7-study-guide_files/image016.jpg" width="904" height="449" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">merge</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array1, array2) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">result = \[\]</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">while </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array1.length && array2.length) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array1\[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\] &lt; array2\[</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">\]) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">result.push(array1.shift());</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:117%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">} **else** { result.push(array2.shift());</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\[...result, ...array1, ...array2\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">mergeSort</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array.length &lt;= </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return** array;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">mid = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">Math</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.floor(array.length / </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">left = mergeSort(array.slice(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">, mid));</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">right = mergeSort(array.slice(mid));</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">merge(left, right);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Time Complexity: O(n log(n))</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
line-height:185%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Since we split the array in half each time, the number of recursive calls is O(log(n)). The while loop within the merge function contributes O(n) in isolation and we call that for every recursive mergeSort call.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Space Complexity: O(n)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We will create a new subarray for each element in the original input.</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">5.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Explain the complexity of and write a function that performs quick sort on an array of numbers</span>**

<span style="position:relative;
z-index:-1895829504"><span style="position:absolute;left:0px;top:-5px;
width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895828480;margin-left:76px;margin-top:76px;width:904px;height:271px"><img src="w7-study-guide_files/image017.jpg" width="904" height="271" /></span><span id="page6"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">quickSort</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(array.length &lt;= </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return** array;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">pivot = array.shift();</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">left = array.filter(x => x &lt; pivot);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">right = array.filter(x => x &gt;= pivot);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">sortedLeft = quickSort(left);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">sortedRight = quickSort(right);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">\[...sortedLeft, pivot, ...sortedRight\];</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Time Complexity</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

*<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Avg Case: O(n log(n))</span>*

<span style="position:relative;
z-index:-1895827456"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The partition step alone is O(n). We are lucky and always choose the median as the pivot. This will halve the array length at every step of the recursion O(log(n)).</span>

<span style="font-size:10.0pt"> </span>

*<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Worst Case: O(n2)</span>*

<span style="position:relative;
z-index:-1895826432"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">We are unlucky and always choose the min or max as the pivot. This means one partition will contain everything, and the other partition is empty O(n).</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Space Complexity: O(n)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Our implementation of quickSort uses O(n) space because of the partition arrays we create.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">6.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.</span>**

<span style="position:relative;
z-index:-1895825408"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:293px"><img src="w7-study-guide_files/image019.jpg" width="904" height="293" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">binarySearch</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(list, target) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(list.length === </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return** </span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:teal">false</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">mid = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">Math</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.floor(list.length / </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">2</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(list\[mid\] === target) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else if** (list\[mid\] &gt; target) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;line-height:121%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">return </span>**<span style="font-size:9.0pt;line-height:121%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">binarySearch(list.slice(</span><span style="font-size:9.0pt;line-height:121%;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;line-height:121%;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">, mid), target); } **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">binarySearch(list.slice(mid+</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">), target);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Time Complexity: O(log(n))</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The number of recursive calls is the number of times we must halve the array until it's length becomes 0.</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:15.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">\*\*Space Complexity: O(n)</span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Our implementation uses n space due to half arrays we create using slice.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Lists, Stacks and Queues Learning Objectives</span>**

<span style="position:absolute;
z-index:-1895824384;margin-left:0px;margin-top:16px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Explain and implement a List</span>**

<span style="position:absolute;
z-index:-1895823360;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;line-height:200%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">A Linked List is a list made of up individual nodes, each node containing a value and a reference to the next node (and optionally the previous node) in the list.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:162%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The List itself only needs to keep track of the head node (and optionally the tail node if you want to add things to the end of the list in constant time) of the list, since it can follow the references on the head (or tail) node to get to any other node. The list can optionally also keep track of the length of the list.</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Linked Lists enable the following operations:</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page7"></span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">addToTail </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Adds a new node to the tail of the list</span>

<span style="position:relative;
z-index:-1895822336"><span style="position:absolute;left:9px;top:-14px;
width:92px;height:41px"><img src="w7-study-guide_files/image020.jpg" width="92" height="41" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">addToHead </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Adds a new node to the head of the list</span>

<span style="position:relative;
z-index:-1895821312"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895820288;margin-left:27px;margin-top:6px;width:68px;
height:20px"><img src="w7-study-guide_files/image021.jpg" width="68" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">insertAt </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Inserts a new node at a certain position in the list</span>

<span style="position:relative;
z-index:-1895819264"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895818240;margin-left:27px;margin-top:5px;width:81px;
height:20px"><img src="w7-study-guide_files/image007.jpg" width="81" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">removeTail </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Removes the tail node from the list</span>

<span style="position:relative;
z-index:-1895817216"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895816192;margin-left:27px;margin-top:5px;width:81px;
height:20px"><img src="w7-study-guide_files/image007.jpg" width="81" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">removeHead </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Removes the head node from the list</span>

<span style="position:relative;
z-index:-1895815168"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895814144;margin-left:27px;margin-top:5px;width:53px;
height:20px"><img src="w7-study-guide_files/image009.jpg" width="53" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">remove </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Removes a node from a certain position in the list</span>

<span style="position:relative;
z-index:-1895813120"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895812096;margin-left:27px;margin-top:5px;width:68px;
height:20px"><img src="w7-study-guide_files/image021.jpg" width="68" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">contains </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Searches the list for a node with a particular value</span>

<span style="position:relative;
z-index:-1895811072"><span style="position:absolute;left:9px;top:-10px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895810048;margin-left:27px;margin-top:5px;width:32px;
height:20px"><img src="w7-study-guide_files/image022.jpg" width="32" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">get </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Gets the node at a specific position</span>

<span style="position:relative;
z-index:-1895809024"><span style="position:absolute;left:9px;top:-10px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895808000;margin-left:27px;margin-top:5px;width:32px;
height:20px"><img src="w7-study-guide_files/image022.jpg" width="32" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">set </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Sets the value of a node at a specific position</span>

<span style="position:relative;
z-index:-1895806976"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895805952;margin-left:27px;margin-top:6px;width:39px;
height:20px"><img src="w7-study-guide_files/image023.jpg" width="39" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">size </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">- Gets the length of the Linked List</span>

<span style="position:relative;
z-index:-1895804928"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image018.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">A Node could be expressed as a class like this:</span>

<span style="position:absolute;
z-index:-1895803904;margin-left:0px;margin-top:26px;width:904px;height:149px"><img src="w7-study-guide_files/image024.jpg" width="904" height="149" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">class </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#445588">Node</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">constructor</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(value, next) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.value = value;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.next = next;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">while a basic Linked List class could look like this:</span>

<span style="position:absolute;
z-index:-1895802880;margin-left:0px;margin-top:25px;width:904px;height:991px"><img src="w7-study-guide_files/image025.jpg" width="904" height="991" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">class </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#445588">LinkedList</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">constructor</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.head = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">addToTail(val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">newNode = **new** Node(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.head) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.head = newNode;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail.next = newNode;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail = newNode;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length++;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">removeTail() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.head) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">undefined</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">current = **this**.head;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">newTail = current;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">while </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(current.next) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">newTail = current;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">current = current.next;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail = newTail;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail.next = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length--;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**this**.length === </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.head = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">current;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">addToHead(val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">newNode = **new** Node(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.head) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.head = newNode;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail = newNode;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">newNode.next = **this**.head;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.head = newNode;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length++;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">removeHead() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.head) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">undefined</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">currentHead = **this**.head;</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895801856;left:0px;margin-left:76px;margin-top:76px;width:904px;
height:1168px"><img src="w7-study-guide_files/image026.jpg" width="904" height="1168" /></span><span id="page8"></span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.head = currentHead.next;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length--;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**this**.length === </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.tail = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">currentHead;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">contains(target) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">node = **this**.head;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">while </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(node) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(node.value === target) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">node = node.next;</span>

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

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">get</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index &lt; </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">|| index &gt;= **this**.length) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">counter = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">let </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">current = **this**.head;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">while </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(counter !== index) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">current = current.next;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">counter++;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">current;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">set</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index, val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">foundNode = **this**.get(index);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(foundNode) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">foundNode.value = val;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

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
font-family:&quot;Arial&quot;,sans-serif;color:#333333">insert(index, val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index &lt; </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">|| index &gt; **this**.length) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">false</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index === **this**.length) **return** !!**this**.addToTail(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index === </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return** !!**this**.addToHead(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">newNode = **new** Node(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">prev = **this**.get(index - </span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">temp = prev.next;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">prev.next = newNode;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">newNode.next = temp;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length++;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">true</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">remove(index) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index &lt; </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">|| index &gt;= **this**.length) **return** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">undefined</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index === </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return this**.removeHead();</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(index === **this**.length - </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">1</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) **return this**.removeTail();</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">previousNode = **this**.get(index - </span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:teal">1</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">removed = previousNode.next;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">previousNode.next = removed.next;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length--;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">removed;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">size() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2. Explain and implement a Stack</span>**

<span style="position:absolute;
z-index:-1895800832;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">A Stack is a Last In First Out (LIFO) Data structure.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">You can usually perform the following operations on a stack:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">push </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">a value onto the top of the stack</span>

<span style="position:relative;
z-index:-1895799808"><span style="position:absolute;left:9px;top:-14px;
width:56px;height:41px"><img src="w7-study-guide_files/image027.jpg" width="56" height="41" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">pop </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">a value off the top of the stack</span>

<span style="position:relative;
z-index:-1895798784"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image028.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895797760;margin-left:27px;margin-top:6px;width:39px;
height:20px"><img src="w7-study-guide_files/image029.jpg" width="39" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">size </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">get the size of the stack</span>

<span style="position:relative;
z-index:-1895796736"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image028.jpg" width="7" height="7" /></span></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The example below uses the same Node class as our Linked List.</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page9"></span><span style="font-size:9.5pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">You could also use a plain array to implement a stack (and people often do)</span>

<span style="position:absolute;
z-index:-1895795712;margin-left:0px;margin-top:28px;width:904px;height:600px"><img src="w7-study-guide_files/image030.jpg" width="904" height="600" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">class </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#445588">Stack</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">constructor</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.top = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">push(val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">newNode = **new** Node(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.top) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.top = newNode;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;line-height:129%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">const </span>**<span style="font-size:9.0pt;line-height:129%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">temp = **this**.top; **this**.top = newNode; **this**.top.next = temp;</span>

<span style="font-size:9.0pt;line-height:97%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">++**this**.length;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">pop() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.top) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">temp = **this**.top;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.top = **this**.top.next;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length--;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">temp.value;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">size() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">3. Explain and implement a Queue</span>**

<span style="position:absolute;
z-index:-1895794688;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w7-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Again this uses the same Node class as the Linked List and Stack.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">You could also use a plain array to implement a queue (and people often do)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Queues are a First In First Out (FIFO) data structure.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Queues usually implement the following operations:</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">enqueue </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Adds a value to the back of the queue</span>

<span style="position:relative;
z-index:-1895793664"><span style="position:absolute;left:10px;top:-14px;
width:77px;height:41px"><img src="w7-study-guide_files/image031.jpg" width="77" height="41" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">dequeue </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Removes a value from the front of the queue</span>

<span style="position:relative;
z-index:-1895792640"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image028.jpg" width="7" height="7" /></span></span><span style="position:
absolute;z-index:-1895791616;margin-left:27px;margin-top:6px;width:39px;
height:20px"><img src="w7-study-guide_files/image029.jpg" width="39" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">size </span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Gets the size of the queue</span>

<span style="position:relative;
z-index:-1895790592"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w7-study-guide_files/image028.jpg" width="7" height="7" /></span></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895789568;margin-left:76px;margin-top:76px;width:904px;height:669px"><img src="w7-study-guide_files/image032.jpg" width="904" height="669" /></span><span id="page10"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">class </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#445588">Queue</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">constructor</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.front = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.back = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">0</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">enqueue(val) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">newNode = **new** Node(val);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.front) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.front = newNode;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.back = newNode;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;line-height:131%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">this</span>**<span style="font-size:9.0pt;line-height:131%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.back.next = newNode; **this**.back = newNode;</span>

<span style="font-size:9.0pt;line-height:97%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">++**this**.length;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">dequeue() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(!**this**.front) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">temp = **this**.front;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**this**.front === **this**.back) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.back = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:teal">null</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.front = **this**.front.next;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length--;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">temp.value;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">size() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return this</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.length;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>
