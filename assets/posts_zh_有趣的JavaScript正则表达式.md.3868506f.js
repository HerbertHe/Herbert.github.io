import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.53d25516.js";const g=JSON.parse('{"title":"有趣的JavaScript正则表达式","description":"","frontmatter":{"title":"有趣的JavaScript正则表达式","date":"2021-04-11T08:32:35.000Z","toc":true,"tags":["JavaScript"]},"headers":[],"relativePath":"posts/zh/有趣的JavaScript正则表达式.md","filePath":"posts/zh/有趣的JavaScript正则表达式.md"}'),l={name:"posts/zh/有趣的JavaScript正则表达式.md"},o=p(`<h2 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h2><p>正则表达式被广泛用于文本的提取和测试, 相比于编译原理来说它足够的简单; 而相较于字符匹配来说, 又足够的功能强大。著名的markdown解析器 <code>marked.js</code> 即是使用来进行解析的, 然后生成markdown语法树进行渲染。而且正则表达式被绝大多数的高级编程语言支持, 除了实现的程度和实现的方法不太一致之外, 均可以得到很好的通用。</p><p>正则表达式上手较为容易而且写法各异, 但想精通比较困难, 如何快速上手和提高正则的执行效率就不赘述了。</p><h2 id="有趣的javascript正则表达式" tabindex="-1">有趣的JavaScript正则表达式 <a class="header-anchor" href="#有趣的javascript正则表达式" aria-label="Permalink to &quot;有趣的JavaScript正则表达式&quot;">​</a></h2><p>与匹配相关的JavaScript相关函数主要是 <code>String.prototype.match()</code>、<code>RegExp.prototype.test()</code> 和 <code>RegExp.prototype.exec()</code></p><p>相关MDN文档如下:</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" target="_blank" rel="noreferrer">String.prototype.match()</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" target="_blank" rel="noreferrer">RegExp.prototype.test()</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" target="_blank" rel="noreferrer">RegExp.prototype.exec()</a></li></ul><h2 id="一个有趣的-bug" tabindex="-1">一个有趣的&quot;BUG&quot; <a class="header-anchor" href="#一个有趣的-bug" aria-label="Permalink to &quot;一个有趣的&quot;BUG&quot;&quot;">​</a></h2><p>下述代码节选自 <a href="https://github.com/HerbertHe/olex/blob/main/src/core/lex/lexer.ts#L14" target="_blank" rel="noreferrer">OLEX</a></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">documnetclass{article}</span><span style="color:#79B8FF;">\\n\\\\</span><span style="color:#9ECBFF;">usepackage{sdfsfsdf}</span><span style="color:#79B8FF;">\\n\\\\</span><span style="color:#9ECBFF;">usepackage{9ubb}</span><span style="color:#79B8FF;">\\n\\\\</span><span style="color:#9ECBFF;">usepackage{example}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">usepackageRegex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#DBEDFF;">usepackage</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">(</span><span style="color:#85E89D;font-weight:bold;">\\[</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[a-zA-Z0-9 ]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#85E89D;font-weight:bold;">\\]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\{</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[a-zA-Z0-9</span><span style="color:#85E89D;font-weight:bold;">\\-</span><span style="color:#79B8FF;">]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#85E89D;font-weight:bold;">\\}</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PackageChecker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">tex</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">packages</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PackagesType</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PackageCheckerType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">usepackageRegex.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(tex)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 没使用额外的包</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, tex]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 注意上面会改变lastIndex的位置, 需要进行重置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ---- 注意这里 Attention Here ----</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// usepackageRegex.lastIndex = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">packsSet</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">packages.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">()])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> pack</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> ((pack </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> usepackageRegex.</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(tex)) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(pack)  </span><span style="color:#6A737D;">// 注意这里的打印值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">packsSet.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(pack[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, pack[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">], tex]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, tex.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(usepackageRegex, </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">)]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">documnetclass{article}</span><span style="color:#005CC5;">\\n\\\\</span><span style="color:#032F62;">usepackage{sdfsfsdf}</span><span style="color:#005CC5;">\\n\\\\</span><span style="color:#032F62;">usepackage{9ubb}</span><span style="color:#005CC5;">\\n\\\\</span><span style="color:#032F62;">usepackage{example}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">usepackageRegex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#032F62;">usepackage</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">(</span><span style="color:#22863A;font-weight:bold;">\\[</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[a-zA-Z0-9 ]</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#22863A;font-weight:bold;">\\]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">*</span><span style="color:#22863A;font-weight:bold;">\\{</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[a-zA-Z0-9</span><span style="color:#22863A;font-weight:bold;">\\-</span><span style="color:#005CC5;">]</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#22863A;font-weight:bold;">\\}</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PackageChecker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">tex</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">packages</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PackagesType</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PackageCheckerType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">usepackageRegex.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(tex)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 没使用额外的包</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, tex]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 注意上面会改变lastIndex的位置, 需要进行重置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ---- 注意这里 Attention Here ----</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// usepackageRegex.lastIndex = 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">packsSet</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">packages.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">()])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> pack</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> ((pack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> usepackageRegex.</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(tex)) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(pack)  </span><span style="color:#6A737D;">// 注意这里的打印值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">packsSet.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(pack[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, pack[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">], tex]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, tex.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(usepackageRegex, </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">)]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>上述的注意打印值的部分输出的结果会是什么呢？第一次全局匹配的结果是 <code>\\\\usepackage{sdfsfsdf}</code> 还是 <code>\\\\usepackage{9ubb}</code>？这是个问题。</p></blockquote><p>如果把注意部分注释掉的代码, 取消注释结果又是什么呢？</p><p>因此就引出了一个非常值得注意的正则表达式属性 <code>lastIndex</code>, 而 <code>test()</code> 和 <code>exec()</code> 均会改变 <code>lastIndex</code>的值。这个属性可以理解为正则表达式匹配的指针, 下一次的匹配是从 <code>lastIndex</code> 的值开始的。在上述的代码中, 使用了 <code>test()</code> 方法逻辑对函数执行效率进行提高, 因此下面的匹配使用 <code>exec()</code> 的结果中, <strong>匹配从 <code>\\\\usepackage{9ubb}</code> 开始!</strong></p><p>为了得到正确的结果, 则必须对 <code>lastIndex</code> 的值进行重置</p><h2 id="拓展-——-全局匹配结果的问题" tabindex="-1">拓展 —— 全局匹配结果的问题 <a class="header-anchor" href="#拓展-——-全局匹配结果的问题" aria-label="Permalink to &quot;拓展 —— 全局匹配结果的问题&quot;">​</a></h2><p>JavaScript中为了匹配特定字符串的特定匹配分组的值, 只能采取循环 <code>exec()</code> 的方式, 因为匹配不到之时返回的结果为 <strong>null</strong></p><p>因此我们可以通过下面的方法, 来全局匹配文本的特定部分</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">documnetclass{article}</span><span style="color:#79B8FF;">\\n\\\\</span><span style="color:#9ECBFF;">usepackage{sdfsfsdf}</span><span style="color:#79B8FF;">\\n\\\\</span><span style="color:#9ECBFF;">usepackage{9ubb}</span><span style="color:#79B8FF;">\\n\\\\</span><span style="color:#9ECBFF;">usepackage{example}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">usepackageRegex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#DBEDFF;">usepackage</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">(</span><span style="color:#85E89D;font-weight:bold;">\\[</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[a-zA-Z0-9 ]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#85E89D;font-weight:bold;">\\]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\{</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[a-zA-Z0-9</span><span style="color:#85E89D;font-weight:bold;">\\-</span><span style="color:#79B8FF;">]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#85E89D;font-weight:bold;">\\}</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> pack</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> ((pack </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> usepackageRegex.</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(tex)) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(pack)  </span><span style="color:#6A737D;">// 注意这里的打印值</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">documnetclass{article}</span><span style="color:#005CC5;">\\n\\\\</span><span style="color:#032F62;">usepackage{sdfsfsdf}</span><span style="color:#005CC5;">\\n\\\\</span><span style="color:#032F62;">usepackage{9ubb}</span><span style="color:#005CC5;">\\n\\\\</span><span style="color:#032F62;">usepackage{example}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">usepackageRegex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#032F62;">usepackage</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">(</span><span style="color:#22863A;font-weight:bold;">\\[</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[a-zA-Z0-9 ]</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#22863A;font-weight:bold;">\\]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">*</span><span style="color:#22863A;font-weight:bold;">\\{</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[a-zA-Z0-9</span><span style="color:#22863A;font-weight:bold;">\\-</span><span style="color:#005CC5;">]</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#22863A;font-weight:bold;">\\}</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> pack</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> ((pack </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> usepackageRegex.</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(tex)) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(pack)  </span><span style="color:#6A737D;">// 注意这里的打印值</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,18),e=[o];function c(t,r,y,E,F,i){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{g as __pageData,u as default};
