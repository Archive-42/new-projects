<span id="page1"></span>**<span style="font-size:23.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">HTTP Learning Objectives</span>**

<span style="position:absolute;
z-index:-1895862784;margin-left:0px;margin-top:17px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
line-height:185%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">HTTP stands for **HyperText Transfer Protocol.** Is a protocol for transmitting hypermedia documents, such as HTML. HTTP requests can have up to three parts: a request line, headers, and a body.</span>

<span style="font-size:12.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Match the header fields of HTTP with a bank of definitions</span>**

<span style="position:absolute;
z-index:-1895861760;margin-left:0px;margin-top:14px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

**<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">HTTP headers </span>**<span style="font-size:10.0pt;
line-height:185%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">let the client and the server pass additional information with an HTTP request or response. Here are some common request headers you'll see:</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Host: specifies the domain name of the server.</span>

<span style="position:relative;
z-index:-1895860736"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">User-Agent: a string that identifies the operating system, software vendor or version of the requester.</span>

<span style="position:relative;
z-index:-1895859712"><span style="position:absolute;left:9px;top:-10px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Referer: the address of the previous web page from which a link to the currently requested page was followed.</span>

<span style="position:relative;
z-index:-1895858688"><span style="position:absolute;left:9px;top:-10px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Accept: informs the server about the types of data that can be sent back.</span>

<span style="position:relative;
z-index:-1895857664"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Content-Type: Indicates the media type found in the body of the HTTP message.</span>

<span style="position:relative;
z-index:-1895856640"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Matching HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their common uses</span>**

<span style="position:relative;
z-index:-1895855616"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">GET: a request to retrieve data. It will never have a body.</span>

<span style="position:relative;
z-index:-1895854592"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">POST: sends data to the server creating a new resource.</span>

<span style="position:relative;
z-index:-1895853568"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">PUT: updates a resource on the server.</span>

<span style="position:relative;
z-index:-1895852544"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">PATCH: similar to PUT, but it applies partial modifications to a resource.</span>

<span style="position:relative;
z-index:-1895851520"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">DELETE: deletes the specified resource.</span>

<span style="position:relative;
z-index:-1895850496"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">3.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Match common HTTP status codes (200, 302, 400, 401, 402, 403, 404, 500) to their meanings</span>**

<span style="position:relative;
z-index:-1895849472"><span style="position:absolute;left:0px;top:-7px;
width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">HTTP response status codes indicate whether a specific HTTP request has been successfully completed.</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">200: OK. The request has succeeded.</span>

<span style="position:relative;
z-index:-1895848448"><span style="position:absolute;left:9px;top:-8px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">302: Found. The URI of requested resource has been changed temporarily.</span>

<span style="position:relative;
z-index:-1895847424"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">400: Bad Request. The server could not understand the request due to invalid syntax.</span>

<span style="position:relative;
z-index:-1895846400"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">401: Unathorized. The client must authenticate itself to get the requested response.</span>

<span style="position:relative;
z-index:-1895845376"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">402: Payment Required.</span>

<span style="position:relative;
z-index:-1895844352"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">403: Forbidden. The client does not have access rights to the content.</span>

<span style="position:relative;
z-index:-1895843328"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">404: Not Found. The server can not find the requested resource.</span>

<span style="position:relative;
z-index:-1895842304"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">500: Internal Server Error. The range from 500-599 indicate server errors.</span>

<span style="position:relative;
z-index:-1895841280"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image002.jpg" width="7" height="7" /></span></span>

<span style="font-size:12.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">4. Send a simple HTTP request to google.com</span>**

<span style="position:absolute;
z-index:-1895840256;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">netcat (nc) allows you to open a direct connection with a URL and manually send HTTP requests.</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Request</span>**

<span style="position:absolute;
z-index:-1895839232;margin-left:0px;margin-top:27px;width:904px;height:80px"><img src="w6-study-guide_files/image003.jpg" width="904" height="80" /></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">nc -v google.com 80</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">GET / HTTP/1.1</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Response</span>**

<span style="position:absolute;
z-index:-1895838208;margin-left:0px;margin-top:26px;width:904px;height:184px"><img src="w6-study-guide_files/image004.jpg" width="904" height="184" /></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">HTTP/1.1 200 OK</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Date: Thu, 28 May 2020 20:50:17 GMT</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Expires: -1</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Cache-Control: private, max-age=0</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">Content-Type: text/html; charset=ISO-8859-1</span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">&lt;!doctype html></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">&lt;html></span>

<span style="font-size:12.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">&lt;/html></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page2"></span>**<span style="font-size:18.0pt;line-height:137%;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">5.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">Write a very simple HTTP server using ‘http’ in node with paths that will result in the common HTTP status codes</span>**

<span style="position:relative;
z-index:-1895837184"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:397px"><img src="w6-study-guide_files/image005.jpg" width="904" height="397" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">http = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'http'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">http.createServer(**function**(request, response) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(request.url === </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'/'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">response.writeHead(</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:teal">200</span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">,</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">{ </span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'Content-Type'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">: </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'text/html'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> }</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">response.write(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'&lt;h1>OK&lt;/h1>'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">response.end();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">} **else** {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">response.writeHead(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">404</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">response.end();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}).listen(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">8080</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, **function**() {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'listening for requests on port 8080...'</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Promises Lesson Learning Objectives I</span>**

<span style="position:absolute;
z-index:-1895836160;margin-left:0px;margin-top:16px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Instantiate a Promise object</span>**

<span style="position:absolute;
z-index:-1895835136;margin-left:0px;margin-top:13px;width:904px;height:311px"><img src="w6-study-guide_files/image006.jpg" width="904" height="311" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">myPromise = **new** </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#0086B3">Promise</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">((resolve, reject) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">try </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">{</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:122%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">try some code, if it works, then we can call \`resolve()\` </span>*<span style="font-size:9.0pt;line-height:122%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">someAsynchronousFunctionThatMightFail(result => {</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">If the async function works, it'll call this callback</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:122%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">and pass us the result of whatever it did. </span>*<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">resolve(result); </span>*<span style="font-size:9.0pt;
line-height:122%;font-family:&quot;Arial&quot;,sans-serif;color:#999988">// Then we can call resolve with the result.</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">catch </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(error) {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:111%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:111%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">if we get an error we can call \`reject()\` with the error </span>*<span style="font-size:9.0pt;line-height:111%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">reject(error);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2. Use Promises to write more maintainable asynchronous code</span>**

<span style="position:absolute;
z-index:-1895834112;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Let's assume we want to wait 10 seconds, do a thing, then wait 10 more then do</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:177%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">a different thing, then wait 30 seconds and do a final thing. We can use setTimeout but with callbacks it looks like this:</span>

<span style="position:absolute;
z-index:-1895833088;margin-left:0px;margin-top:8px;width:904px;height:201px"><img src="w6-study-guide_files/image007.jpg" width="904" height="201" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">setTimeout(() => { </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">// Look at all the deep nesting!</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">doAThing();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">setTimeout(() => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">doADifferentThing();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">setTimeout(() => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">doAFinalThing();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}, </span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">30000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}, </span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">10000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}, </span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">10000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">If we wrap setTimeout in a promise like this:</span>

<span style="position:absolute;
z-index:-1895832064;margin-left:0px;margin-top:27px;width:904px;height:132px"><img src="w6-study-guide_files/image008.jpg" width="904" height="132" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">sleep = (milliseconds) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return new </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">Promise</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">((resolve) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">setTimeout(resolve, milliseconds);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page3"></span><span style="font-size:10.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">Then we can write code that looks like this using our </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">sleep</span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> function.</span>

<span style="position:relative;
z-index:-1895831040"><span style="position:absolute;left:0px;top:-14px;
width:904px;height:433px"><img src="w6-study-guide_files/image009.jpg" width="904" height="433" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">sleep(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">doAThing();</span><span style="font-size:10.0pt;line-height:
122%">         </span>*<span style="font-size:9.0pt;line-height:122%;
font-family:&quot;Arial&quot;,sans-serif;color:#999988">// We don't need to return a promise here \`.then()\` // automatically returns one anyway.</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">sleep(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">); </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">// We have to return the promise we</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">got from the sleep function</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">then() is smart enough to know when</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">we return a promise vs just returning a value</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">doADifferentThing();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">sleep(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">3000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">doAFinalThing();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Using shortened arrow function syntax we can make this even shorter and</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">make it look really synchronous, even though it's asynchronous.</span>

<span style="position:absolute;
z-index:-1895830016;margin-left:0px;margin-top:25px;width:904px;height:167px"><img src="w6-study-guide_files/image010.jpg" width="904" height="167" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">sleep(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => doAThing())</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => sleep(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">))</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => doADifferentThing())</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => sleep(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">3000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">))</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then(() => doAFinalThing());</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">You can also use </span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">Promise.all()</span><span style="font-size:
10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> when you don't care about the order.</span>

<span style="position:relative;
z-index:-1895828992"><span style="position:absolute;left:0px;top:-15px;
width:904px;height:416px"><img src="w6-study-guide_files/image011.jpg" width="904" height="416" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'fs'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">).promises </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// requires the promises version of fs</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:111%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;line-height:111%;font-family:
&quot;Arial&quot;,sans-serif;color:#999988">Read in three files and concatenate them together. </span>*<span style="font-size:9.0pt;line-height:111%;font-family:
&quot;Arial&quot;,sans-serif;color:#0086B3">Promise</span><span style="font-size:9.0pt;
line-height:111%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.all(\[</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;line-height:
124%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs.readFile(</span><span style="font-size:9.0pt;line-height:124%;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"d1.md"</span><span style="font-size:9.0pt;line-height:
124%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;line-height:124%;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;line-height:
124%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">), fs.readFile(</span><span style="font-size:9.0pt;line-height:124%;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"d2.md"</span><span style="font-size:9.0pt;line-height:
124%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;line-height:124%;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;line-height:
124%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">), fs.readFile(</span><span style="font-size:9.0pt;line-height:124%;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"d3.md"</span><span style="font-size:9.0pt;line-height:
124%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;line-height:124%;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;line-height:
124%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">),</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">\])</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then((contents1, contents2, contents3) => { </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// Even though they run</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">asynchronously</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">in an indeterminate order,</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">Promise.all keeps them in the</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">right order in the arguments</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">list</span>*

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">contents1 + contents2 + contents3;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then((concatted) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(concatted);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Imagine if we tried to do this without Promises:</span>

<span style="position:absolute;
z-index:-1895827968;margin-left:0px;margin-top:27px;width:904px;height:201px"><img src="w6-study-guide_files/image012.jpg" width="904" height="201" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'fs'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs.readFile(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"d1.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, contents1 => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs.readFile(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"d1.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, contents2 => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs.readFile(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"d3.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, contents3 => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(contents1 + contents2 + contents3);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">In fact this isn't doing the same thing at all! This is actually only reading</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">the next file when the first one is completed. Promise.all() is probably</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">faster since all the readFiles are kicked off at the same time.</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span id="page4"></span>**<span style="font-size:18.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">3. Use the fetch API to make Promise-based API calls</span>**

<span style="position:absolute;
z-index:-1895826944;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span><span style="position:absolute;z-index:-1895825920;margin-left:0px;margin-top:35px;
width:904px;height:201px"><img src="w6-study-guide_files/image012.jpg" width="904" height="201" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;line-height:117%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">const </span>**<span style="font-size:9.0pt;line-height:117%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fetch = </span><span style="font-size:9.0pt;line-height:117%;font-family:&quot;Arial&quot;,sans-serif;
color:#0086B3">require</span><span style="font-size:9.0pt;line-height:117%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">(</span><span style="font-size:
9.0pt;line-height:117%;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'node-fetch'</span><span style="font-size:9.0pt;line-height:117%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">); </span>*<span style="font-size:9.0pt;line-height:
117%;font-family:&quot;Arial&quot;,sans-serif;color:#999988">// we need this to use fetch in node</span>***<span style="font-size:9.0pt;line-height:117%;font-family:
&quot;Arial&quot;,sans-serif;color:#333333"> </span>***<span style="font-size:9.0pt;
line-height:117%;font-family:&quot;Arial&quot;,sans-serif;color:#999988">// It's built into the browser</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fetch(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"https://ifconfig.me/all.json"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then((response) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">response.json(); </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// the json() method returns a promise and is async</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then((data) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(data);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Async and Await Learning Objectives</span>**

<span style="position:absolute;
z-index:-1895824896;margin-left:0px;margin-top:16px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Use async/await with promise-based functions to write asynchronous code that behaves synchronously.</span>**

<span style="position:relative;
z-index:-1895823872"><span style="position:absolute;left:0px;top:-7px;
width:904px;height:484px"><img src="w6-study-guide_files/image013.jpg" width="904" height="484" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">slow</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return new </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">Promise</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">((resolve, reject) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">setTimeout(() => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">resolve(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'That was slow.'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}, </span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">2000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">fast</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return new </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">Promise</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">((resolve, reject) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">setTimeout(() => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">resolve(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'That was fast.'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}, </span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">1000</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">async function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">syncLike</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">slowVal = **await** slow();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(slowVal);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fastVal = **await** fast();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(fastVal);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">syncLike(); </span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">// Prints 'that was slow.' after 2000ms, then 'that was fast.' after 1000ms</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">The real power comes in leveraging libraries that support promises like </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">fs</span>

<span style="position:relative;
z-index:-1895822848"><span style="position:absolute;left:409px;top:-14px;
width:24px;height:20px"><img src="w6-study-guide_files/image014.jpg" width="24" height="20" /></span></span><span style="position:
absolute;z-index:-1895821824;margin-left:15px;margin-top:7px;width:45px;
height:20px"><img src="w6-study-guide_files/image015.jpg" width="45" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">of </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">fetch</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Instead of:</span>

<span style="position:absolute;
z-index:-1895820800;margin-left:0px;margin-top:27px;width:904px;height:271px"><img src="w6-study-guide_files/image016.jpg" width="904" height="271" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"fs"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">concatFiles</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs.readFile(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"d1.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, (err, contents1) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs.readFile(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"d1.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, (err, contents2) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs.readFile(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"d3.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, (err, contents3) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(contents1 + contents2 + contents3);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">concatFiles();</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.5pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We can do this:</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895819776;margin-left:76px;margin-top:76px;width:904px;height:219px"><img src="w6-study-guide_files/image017.jpg" width="904" height="219" /></span><span id="page5"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fs = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"fs"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">).promises;</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">async function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">concatFiles</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">contents1 = **await** fs.readFile(</span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#DD1144">"d1.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">contents2 = **await** fs.readFile(</span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#DD1144">"d2.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">contents3 = **await** fs.readFile(</span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#DD1144">"d3.md"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"utf-8"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(contents1 + contents2 + contents3);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">concatFiles();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Or when using fetch, instead of this:</span>

<span style="position:absolute;
z-index:-1895818752;margin-left:0px;margin-top:26px;width:904px;height:340px"><img src="w6-study-guide_files/image018.jpg" width="904" height="340" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fetch = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"node-fetch"</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">getIpAddress</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(callback) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return new </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">Promise</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">((resolve) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">fetch(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"https://ifconfig.me/all.json"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">)</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then((response) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">response.json();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">.then((ipInfo) => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">resolve(ipInfo);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">getIpAddress().then(ipInfo => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">console</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.log(ipInfo);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">We can just write this:</span>

<span style="position:absolute;
z-index:-1895817728;margin-left:0px;margin-top:27px;width:904px;height:271px"><img src="w6-study-guide_files/image016.jpg" width="904" height="271" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">fetch = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'node-fetch'</span><span style="font-size:9.0pt;font-family:
&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">async function </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#990000">getIpAddress</span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">() {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">response = **await** fetch(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"https://ifconfig.me/all.json"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;line-height:121%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">const </span>**<span style="font-size:9.0pt;line-height:121%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">ipInfo = **await** response.json(); </span>*<span style="font-size:9.0pt;line-height:121%;font-family:&quot;Arial&quot;,sans-serif;
color:#999988">// Remember .json() returns a promise</span>***<span style="font-size:9.0pt;line-height:121%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> return </span>**<span style="font-size:9.0pt;line-height:
121%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">ipInfo;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">Rememeber to use await, we must be inside an async function, so</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">I just made an async IIFE.</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**async**() => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">ipInfo = **await** getIpAddress();</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">})()</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Much better!</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">HTML Learning Objectives</span>**

<span style="position:absolute;
z-index:-1895816704;margin-left:0px;margin-top:15px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:116%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:116%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">You'll be able to create structurally and semantically valid HTML5 pages using the following elements: html, head, title, link, script, The six header tags, p, article, section, main, nav, header, footer, ul, ol, li, a, img, table, thead, tbody, tfoot, tr, th, td.</span>**

<span style="position:absolute;
z-index:-1895815680;margin-left:0px;margin-top:0px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895814656;margin-left:76px;margin-top:76px;width:904px;height:361px"><img src="w6-study-guide_files/image019.jpg" width="904" height="361" /></span><span id="page6"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999999">&lt;!DOCTYPE html></span>**

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;html></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;head></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;title></span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">HTML Example</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:navy">&lt;/title></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;link </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">rel</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">=</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"stylesheet"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy"> </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">href</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">=</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"style.css"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">&gt;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;script </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">async type</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">=</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"module"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy"> </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">src</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">=</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"index.js"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">&gt;&lt;/script></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;/head></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;body></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;main></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;h1></span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">An HTML page example</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:navy">&lt;/h1></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;p></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">This is a very basic HTML page. For more examples click</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;a </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:teal">href</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:navy">=</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"https://open.appacademy.io/learn/js-py---apr-2020-online/week-6-apr-2020-online/brushing-up-on-your-ht</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;/p></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;/main></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;/body></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:navy">&lt;/html></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:23.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Testing Learning Objectives</span>**

<span style="position:absolute;
z-index:-1895813632;margin-left:0px;margin-top:15px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">1. Explain the "red-green-refactor" loop of test-driven development.</span>**

<span style="position:absolute;
z-index:-1895812608;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Red, Green, Refactor refers to the development loop at the heart of TDD.</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;line-height:142%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">RED: </span>**<span style="font-size:10.0pt;line-height:142%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">We begin by writing a test (or tests) that speicify what we expect our code to do. We run the test, to see it fail, and in doing so we ensure that our test won't be a false positive.</span>

<span style="position:relative;
z-index:-1895811584"><span style="position:absolute;left:9px;top:-36px;
width:7px;height:7px"><img src="w6-study-guide_files/image020.jpg" width="7" height="7" /></span></span>

**<span style="font-size:10.0pt;line-height:138%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">GREEN: </span>**<span style="font-size:10.0pt;line-height:
138%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">We write the minimum amount of code to get our test to pass. This step may take just a few moments, or a longer time depending on the complexity of the task.</span>

<span style="position:relative;
z-index:-1895810560"><span style="position:absolute;left:9px;top:-37px;
width:7px;height:7px"><img src="w6-study-guide_files/image020.jpg" width="7" height="7" /></span></span>

**<span style="font-size:10.0pt;line-height:152%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">REFACTOR: </span>**<span style="font-size:10.0pt;line-height:
152%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">The big advantage of test driven development is that it means we always have a set of tests that cover our codebase. This means that we can safely make changes to our code, and as long as our tests still pass, we can be confident that the changes did not break any functionality. This gives us the confidence to be able to constantly refactor and simplify our code - we include a refactor step after each time we add a passing test, but it isn't always necessary to make changes.</span>

<span style="position:relative;
z-index:-1895809536"><span style="position:absolute;left:9px;top:-87px;
width:7px;height:7px"><img src="w6-study-guide_files/image020.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">2. Identify the definitions of SyntaxError, ReferenceError, and TypeError</span>**

<span style="position:absolute;
z-index:-1895808512;margin-left:0px;margin-top:13px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;line-height:143%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">SyntaxError: </span>**<span style="font-size:10.0pt;
line-height:143%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">These errors refer to problems with the *syntax* of our code, they usually refer to either missing or rogue characters that cause the compiler to be able to understand the code we are feeding it.</span>

<span style="position:relative;
z-index:-1895807488"><span style="position:absolute;left:9px;top:-37px;
width:7px;height:7px"><img src="w6-study-guide_files/image020.jpg" width="7" height="7" /></span></span>

**<span style="font-size:10.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">ReferenceError: </span>**<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">These errors refer to times in our code where we reference a variable that is *not* available in the current scope.</span>

<span style="position:relative;
z-index:-1895806464"><span style="position:absolute;left:9px;top:-9px;
width:7px;height:7px"><img src="w6-study-guide_files/image020.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:10.0pt;line-height:177%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">TypeError: </span>**<span style="font-size:10.0pt;line-height:
177%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">These errors refer to times in our code where we reference a variable of the *wrong type*. Modifying a value that cannot be changed, using a value in an inappropriate way, or an argument of an unexpected type being passed to a function, are all causes of TypeErrors.</span>

<span style="position:relative;
z-index:-1895805440"><span style="position:absolute;left:9px;top:-48px;
width:7px;height:7px"><img src="w6-study-guide_files/image020.jpg" width="7" height="7" /></span></span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">3. Create, modify, and get to pass a suite of Mocha tests</span>**

<span style="position:absolute;
z-index:-1895804416;margin-left:0px;margin-top:14px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">A minimal example:</span>

<span style="position:absolute;
z-index:-1895803392;margin-left:0px;margin-top:28px;width:204px;height:20px"><img src="w6-study-guide_files/image021.jpg" width="204" height="20" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">test/reverse-string.spec.js</span>

<span style="position:absolute;
z-index:-1895802368;margin-left:0px;margin-top:25px;width:904px;height:253px"><img src="w6-study-guide_files/image022.jpg" width="904" height="253" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">assert = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"assert"</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">reverseString = </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#0086B3">require</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">'../lib/reverse-string'</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">).reverseString;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">describe(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"reverseString"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, () => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">it(</span><span style="font-size:
9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"should reverse simple strings"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">, () => {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">assert.equal(reverseString(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"fun"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">), </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"nuf"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">it(</span><span style="font-size:9.0pt;line-height:122%;
font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"should throw a TypeError if it doesn't receive a string"</span><span style="font-size:9.0pt;
line-height:122%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, () => { assert.throws(() => reverseString(</span><span style="font-size:9.0pt;
line-height:122%;font-family:&quot;Arial&quot;,sans-serif;color:teal">0</span><span style="font-size:9.0pt;line-height:122%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">));</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="position:absolute;
z-index:-1895801344;margin-left:0px;margin-top:47px;width:161px;height:20px"><img src="w6-study-guide_files/image023.jpg" width="161" height="20" /></span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">lib/reverse-string.js</span>

<span style="font-size:11.0pt;font-family:&quot;Times New Roman&quot;,serif">  
</span>

<span style="position:absolute;
z-index:-1895800320;margin-left:76px;margin-top:76px;width:904px;height:219px"><img src="w6-study-guide_files/image024.jpg" width="904" height="219" /></span><span id="page7"></span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">const </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">reverseString = (str) => {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">if </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(**typeof** str !== </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#DD1144">"string"</span><span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">) {</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">throw new </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">TypeError</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"expecting a string arg"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">);</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">return </span>**<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">"nuf"</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">;</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#0086B3">module</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">.exports = {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">reverseString</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">}</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">This minimal example also shows the importance of thorough testing. Though all tests here pass, it would be trivial to come up with a case where our reverseString implementation doesn't do what we want. </span><span style="font-size:9.0pt;line-height:185%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">reverseString('foo')</span><span style="font-size:10.0pt;
line-height:185%;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> for example.</span>

<span style="position:relative;
z-index:-1895799296"><span style="position:absolute;left:322px;top:-35px;
width:153px;height:20px"><img src="w6-study-guide_files/image025.jpg" width="153" height="20" /></span></span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">4.<span style="font:7.0pt &quot;Times New Roman&quot;">  </span></span><span style="font-size:18.0pt;line-height:137%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Use Chai to structure your tests using behavior-driven development principles</span>**

<span style="position:relative;
z-index:-1895798272"><span style="position:absolute;left:0px;top:-6px;
width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Chai gives us the human-readable verbage that have become popular in the BDD (Behavior Driven Developement) world:</span>

<span style="position:absolute;
z-index:-1895797248;margin-left:0px;margin-top:26px;width:904px;height:356px"><img src="w6-study-guide_files/image026.jpg" width="904" height="356" /></span>

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

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Both the </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">should</span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> and </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">expect</span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333"> style assertion terminology are considered BDD style, while the </span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">assert</span><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> style expressions are a throwback to TDD style.</span>

<span style="position:relative;
z-index:-1895796224"><span style="position:absolute;left:52px;top:-15px;
width:133px;height:20px"><img src="w6-study-guide_files/image027.jpg" width="133" height="20" /></span></span><span style="position:
relative;z-index:-1895795200"><span style="position:absolute;left:554px;
top:-15px;width:53px;height:20px"><img src="w6-study-guide_files/image028.jpg" width="53" height="20" /></span></span>

<span style="font-size:10.0pt"> </span>

**<span style="font-size:18.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">5. Use the pre- and post-test hooks provided by Mocha</span>**

<span style="position:absolute;
z-index:-1895794176;margin-left:0px;margin-top:15px;width:904px;height:1px"><img src="w6-study-guide_files/image001.jpg" width="904" height="1" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">Mocha provides four pre and post test hooks. These should be used to set up preconditions and clean up after your tests.</span>

<span style="position:absolute;
z-index:-1895793152;margin-left:0px;margin-top:26px;width:904px;height:375px"><img src="w6-study-guide_files/image029.jpg" width="904" height="375" /></span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">describe(</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#DD1144">'hooks'</span><span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#333333">, **function**() {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">before(**function**() {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">runs once before the first test in this block</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">after(**function**() {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">runs once after the last test in this block</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">beforeEach(**function**() {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">runs before each test in this block</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">afterEach(**function**() {</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">runs after each test in this block</span>*

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

*<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#999988"> </span>*

<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">//<span style="font:7.0pt &quot;Times New Roman&quot;">     </span></span>*<span style="font-size:9.0pt;font-family:&quot;Arial&quot;,sans-serif;color:#999988">test cases</span>*

<span style="font-size:10.0pt"> </span>

<span style="font-size:9.0pt;
font-family:&quot;Arial&quot;,sans-serif;color:#333333">});</span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt"> </span>

<span style="font-size:10.0pt;
line-height:186%;font-family:&quot;Arial&quot;,sans-serif;color:#333333">Hooks *run in the order they are defined*, as appropriate; all </span><span style="font-size:9.0pt;line-height:186%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">before()</span><span style="font-size:10.0pt;line-height:186%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> hooks run (once), then any </span><span style="font-size:9.0pt;line-height:186%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">beforeEach()</span><span style="font-size:10.0pt;line-height:
186%;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> hooks, tests, any </span><span style="font-size:9.0pt;line-height:186%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">afterEach()</span><span style="font-size:10.0pt;line-height:
186%;font-family:&quot;Arial&quot;,sans-serif;color:#333333"> hooks, and finally </span><span style="font-size:9.0pt;line-height:186%;font-family:&quot;Arial&quot;,sans-serif;
color:#333333">after()</span><span style="font-size:10.0pt;line-height:186%;
font-family:&quot;Arial&quot;,sans-serif;color:#333333"> hooks (once).</span>

<span style="position:relative;
z-index:-1895792128"><span style="position:absolute;left:339px;top:-57px;
width:67px;height:20px"><img src="w6-study-guide_files/image030.jpg" width="67" height="20" /></span></span><span style="position:
relative;z-index:-1895791104"><span style="position:absolute;left:565px;
top:-57px;width:96px;height:20px"><img src="w6-study-guide_files/image031.jpg" width="96" height="20" /></span></span><span style="position:
relative;z-index:-1895790080"><span style="position:absolute;left:766px;
top:-57px;width:89px;height:20px"><img src="w6-study-guide_files/image032.jpg" width="89" height="20" /></span></span><span style="position:
relative;z-index:-1895789056"><span style="position:absolute;left:61px;
top:-35px;width:60px;height:20px"><img src="w6-study-guide_files/image033.jpg" width="60" height="20" /></span></span>
