import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.53d25516.js";const m=JSON.parse('{"title":"Nodejs安装若干问题避坑","description":"","frontmatter":{"title":"Nodejs安装若干问题避坑","date":"2020-01-26T21:43:54.000Z","toc":true,"tags":["Nodejs","Frontend","前端开发","环境搭建","nvm"]},"headers":[],"relativePath":"posts/zh/Nodejs安装若干问题避坑.md","filePath":"posts/zh/Nodejs安装若干问题避坑.md"}'),p={name:"posts/zh/Nodejs安装若干问题避坑.md"},o=l(`<h2 id="nodejs的windows下传统安装" tabindex="-1">nodejs的windows下传统安装 <a class="header-anchor" href="#nodejs的windows下传统安装" aria-label="Permalink to &quot;nodejs的windows下传统安装&quot;">​</a></h2><p><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">nodejs官网</a>下载：LTS为长期支持版，Current是最新版</p><blockquote><p>根据官网给的安装包一步步来即可安装</p></blockquote><h2 id="nodejs的不同版本安装思考" tabindex="-1">nodejs的不同版本安装思考 <a class="header-anchor" href="#nodejs的不同版本安装思考" aria-label="Permalink to &quot;nodejs的不同版本安装思考&quot;">​</a></h2><p>由于平时可能涉及到的node版本不同导致所用的代码会出现各种各样的问题，node的版本管理工具切换node版本显得比较重要！在<code>Linux/Mac</code>端<code>nvm</code>很好的解决了版本管理的问题，在Windows端不可使用<code>nvm</code>进行管理！</p><p>Github项目<a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">nvm-windows</a>利用go语言开发解决了Windows环境下的nodejs管理问题！</p><blockquote><p>下面对 <code>nodejs</code> 和 <code>node</code>, <code>nvm</code> 和 <code>nvm-windows</code> 不加以区分</p></blockquote><h2 id="配置安装nvm-windows" tabindex="-1">配置安装nvm-windows <a class="header-anchor" href="#配置安装nvm-windows" aria-label="Permalink to &quot;配置安装nvm-windows&quot;">​</a></h2><ol><li><p>首先建议<code>卸载</code>本地环境下的nodejs，以便更好地管理node版本</p></li><li><p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">releases</a>中下载最新的安装包</p><blockquote><p>建议使用: <code>nvm-setup.zip</code> 傻瓜式安装, <code>nvm-noinstall.zip</code> 为绿色版需要自行配置</p></blockquote></li><li><p>安装配置<code>nvm-windows</code></p><ul><li><code>nvm</code> 安装路径可以自定义</li><li>symlink为超链接的目标目录，即用<code>nvm use</code>切换node版本时，本质上是切换链接的指向！symlink配置之后安装工具会把链接的地址加入系统环境变量之中，下面将会详述<code>nvm</code>的命令和具体使用！这个目录就当成node的安装目录就好了。</li></ul></li></ol><h2 id="nvm命令详解" tabindex="-1">nvm命令详解 <a class="header-anchor" href="#nvm命令详解" aria-label="Permalink to &quot;nvm命令详解&quot;">​</a></h2><ul><li><p><code>nvm version</code>: 查询当前的nvm版本</p></li><li><p><code>nvm</code>: 列出所有的命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Running</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1.1</span><span style="color:#9ECBFF;">.7.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Usage:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arch</span><span style="color:#E1E4E8;">                     </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">显示node运行在32位还是在64位系统上</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">versio</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [arch] </span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> 利用nvm下载node, 可以指定版本下载或者</span><span style="color:#9ECBFF;">&quot;latest&quot;</span><span style="color:#E1E4E8;">下载最新稳定版, 可选指定下载32/64位的版本, 默认与系统架构相同。</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#B392F0;">arch参数为</span><span style="color:#B392F0;">&quot;all&quot;</span><span style="color:#B392F0;">则32/64位版本都下载,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">命令后面添加--insecure可以跳过SSL检查下载</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> [available]         </span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> 列出所有的node下载, </span><span style="color:#9ECBFF;">&quot;nvm list available&quot;</span><span style="color:#E1E4E8;"> 命令可以查看所有可下载的node版本, 别名ls</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;">                       </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">允许进行node版本管理</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">off</span><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">不允许进行node版本管理</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> [url]              </span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> 为下载配置代理, url参数为空打印当前代理, 参数为</span><span style="color:#9ECBFF;">&quot;none&quot;</span><span style="color:#E1E4E8;">删除代理</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node_mirror</span><span style="color:#E1E4E8;"> [url]        </span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> 设置node镜像, 默认是 https://nodejs.org/dist/ （国内可用: https://npm.taobao.org/mirrors/node/）</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm_mirror</span><span style="color:#E1E4E8;"> [url]         </span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> 设置npm镜像, 默认是 https://github.com/npm/cli/archive/ （国内可用淘宝镜像: https://npm.taobao.org/mirrors/npm/）</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">versio</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">卸载指定版本node</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> [version] [arch]     </span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> 切换指定使用的node版本, 可选指定32或64位架构, </span><span style="color:#9ECBFF;">&quot;arch&quot;</span><span style="color:#E1E4E8;">参数可选</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> [path]              </span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> 设置nvm管理的不同版本node的储存位置, 如果路径没有设置就打印当前nvm安装的目录（ps: 这个其实可以不用设置的）</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">显示当前Windows环境下nvm的版本,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">别名</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Running</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1.1</span><span style="color:#032F62;">.7.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Usage:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arch</span><span style="color:#24292E;">                     </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">显示node运行在32位还是在64位系统上</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">versio</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [arch] </span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> 利用nvm下载node, 可以指定版本下载或者</span><span style="color:#032F62;">&quot;latest&quot;</span><span style="color:#24292E;">下载最新稳定版, 可选指定下载32/64位的版本, 默认与系统架构相同。</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#6F42C1;">arch参数为</span><span style="color:#6F42C1;">&quot;all&quot;</span><span style="color:#6F42C1;">则32/64位版本都下载,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">命令后面添加--insecure可以跳过SSL检查下载</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> [available]         </span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> 列出所有的node下载, </span><span style="color:#032F62;">&quot;nvm list available&quot;</span><span style="color:#24292E;"> 命令可以查看所有可下载的node版本, 别名ls</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span><span style="color:#24292E;">                       </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">允许进行node版本管理</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">off</span><span style="color:#24292E;">                      </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">不允许进行node版本管理</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> [url]              </span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> 为下载配置代理, url参数为空打印当前代理, 参数为</span><span style="color:#032F62;">&quot;none&quot;</span><span style="color:#24292E;">删除代理</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node_mirror</span><span style="color:#24292E;"> [url]        </span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> 设置node镜像, 默认是 https://nodejs.org/dist/ （国内可用: https://npm.taobao.org/mirrors/node/）</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm_mirror</span><span style="color:#24292E;"> [url]         </span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> 设置npm镜像, 默认是 https://github.com/npm/cli/archive/ （国内可用淘宝镜像: https://npm.taobao.org/mirrors/npm/）</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">versio</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">      </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">卸载指定版本node</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> [version] [arch]     </span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> 切换指定使用的node版本, 可选指定32或64位架构, </span><span style="color:#032F62;">&quot;arch&quot;</span><span style="color:#24292E;">参数可选</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> [path]              </span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> 设置nvm管理的不同版本node的储存位置, 如果路径没有设置就打印当前nvm安装的目录（ps: 这个其实可以不用设置的）</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;">                  </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">显示当前Windows环境下nvm的版本,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">别名</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v</span></span></code></pre></div></li></ul><h2 id="win10一般配置nvm" tabindex="-1">Win10一般配置nvm <a class="header-anchor" href="#win10一般配置nvm" aria-label="Permalink to &quot;Win10一般配置nvm&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 设置64位架构</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置node镜像</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node_mirror</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置npm镜像</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm_mirror</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://npm.taobao.org/mirrors/npm/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有可以下载的node</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 以12.14.1版本为例下载node</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12.14</span><span style="color:#9ECBFF;">.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有已下载的node</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换使用12.14.1</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12.14</span><span style="color:#9ECBFF;">.1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 设置64位架构</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置node镜像</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node_mirror</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置npm镜像</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm_mirror</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://npm.taobao.org/mirrors/npm/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有可以下载的node</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 以12.14.1版本为例下载node</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12.14</span><span style="color:#032F62;">.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有已下载的node</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换使用12.14.1</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12.14</span><span style="color:#032F62;">.1</span></span></code></pre></div><h2 id="需要注意的问题" tabindex="-1">需要注意的问题 <a class="header-anchor" href="#需要注意的问题" aria-label="Permalink to &quot;需要注意的问题&quot;">​</a></h2><ol><li><p><code>nvm</code>管理node时，利用npm/yarn全局下载的包只能是下载到当前使用版本的node的node_modules\\node_global\\node_modules下，如果切换node版本，依赖包是要重新下载的！</p></li><li><p>由于yarn和npm全局下载的包在node_modules中的结构是不同的，yarn全局下载的包使用PowerShell跑的时候找不到命令，所以强烈建议全局下载例如Taro、Vue、React等的脚手架工具时使用npm做node的依赖包管理，而非yarn</p></li><li><p>因为yarn可以多线程下载，下载包的速度比npm要快还能多，所以建议在项目中使用yarn进行包管理</p></li><li><p>安装过程中出现的异常通常可以通过重启或者使用<code>管理员身份打开</code>解决</p></li></ol><h2 id="npm-yarn包镜像源的管理" tabindex="-1">npm/yarn包镜像源的管理 <a class="header-anchor" href="#npm-yarn包镜像源的管理" aria-label="Permalink to &quot;npm/yarn包镜像源的管理&quot;">​</a></h2><blockquote><p>强烈建议使用<code>yrm</code>进行镜像源管理</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 下载yrm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yrm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有可以使用的镜像源</span></span>
<span class="line"><span style="color:#B392F0;">yrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 示例使用taobao镜像源</span></span>
<span class="line"><span style="color:#B392F0;">yrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">taobao</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 下载yrm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yrm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有可以使用的镜像源</span></span>
<span class="line"><span style="color:#6F42C1;">yrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 示例使用taobao镜像源</span></span>
<span class="line"><span style="color:#6F42C1;">yrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">taobao</span></span></code></pre></div><h2 id="yrm命令详解" tabindex="-1">yrm命令详解 <a class="header-anchor" href="#yrm命令详解" aria-label="Permalink to &quot;yrm命令详解&quot;">​</a></h2><blockquote><p>命令行使用<code>yrm</code>即可显示所有的yrm命令</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Usage:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cli</span><span style="color:#E1E4E8;"> [options] [command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Options:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-V,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">输出版本</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-h,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span><span style="color:#E1E4E8;">                   </span><span style="color:#9ECBFF;">输出使用信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Commands:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;">                           </span><span style="color:#9ECBFF;">列出所有的仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">current</span><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">展示当前的仓库名</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">仓库</span><span style="color:#E1E4E8;">名</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">                 </span><span style="color:#9ECBFF;">使用指定的仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">仓库</span><span style="color:#E1E4E8;">名</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [home]    添加一个自定义仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">del</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">仓库</span><span style="color:#E1E4E8;">名</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">                 </span><span style="color:#9ECBFF;">删除一个仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">home</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">仓库</span><span style="color:#E1E4E8;">名</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [browser]      用可选浏览器打开仓库首页</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;"> [仓库名]                展示指定仓库或者所有仓库的响应时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">help</span><span style="color:#E1E4E8;">                         </span><span style="color:#9ECBFF;">打印帮助</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Usage:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cli</span><span style="color:#24292E;"> [options] [command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Options:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-V,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span><span style="color:#24292E;">                </span><span style="color:#032F62;">输出版本</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-h,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span><span style="color:#24292E;">                   </span><span style="color:#032F62;">输出使用信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Commands:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ls</span><span style="color:#24292E;">                           </span><span style="color:#032F62;">列出所有的仓库</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">current</span><span style="color:#24292E;">                      </span><span style="color:#032F62;">展示当前的仓库名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">use</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">仓库</span><span style="color:#24292E;">名</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">                 </span><span style="color:#032F62;">使用指定的仓库</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">仓库</span><span style="color:#24292E;">名</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [home]    添加一个自定义仓库</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">del</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">仓库</span><span style="color:#24292E;">名</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">                 </span><span style="color:#032F62;">删除一个仓库</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">home</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">仓库</span><span style="color:#24292E;">名</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [browser]      用可选浏览器打开仓库首页</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">test</span><span style="color:#24292E;"> [仓库名]                展示指定仓库或者所有仓库的响应时间</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">help</span><span style="color:#24292E;">                         </span><span style="color:#032F62;">打印帮助</span></span></code></pre></div>`,21),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{m as __pageData,C as default};
