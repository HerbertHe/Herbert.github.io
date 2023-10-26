import{_ as o,o as e,c as d,Q as a}from"./chunks/framework.53d25516.js";const c="/img/Snipaste_2020-03-09_14-28-07.png",t="/img/Snipaste_2020-03-09_14-42-25.png",n="/img/Snipaste_2020-03-09_14-54-57.png",l="/img/Snipaste_2020-03-09_14-55-42.png",i="/img/Snipaste_2020-03-09_14-57-00.png",f=JSON.parse('{"title":"配置Goland主题与工程环境","description":"","frontmatter":{"title":"配置Goland主题与工程环境","date":"2020-03-09T13:58:20.000Z","toc":true,"tags":["golang","goland","go"]},"headers":[],"relativePath":"posts/zh/配置Goland主题与工程环境.md","filePath":"posts/zh/配置Goland主题与工程环境.md"}'),r={name:"posts/zh/配置Goland主题与工程环境.md"},s=a('<h2 id="关于goland与vscode的比较" tabindex="-1">关于Goland与vscode的比较 <a class="header-anchor" href="#关于goland与vscode的比较" aria-label="Permalink to &quot;关于Goland与vscode的比较&quot;">​</a></h2><p>Goland为JetBrains出品的针对于Go编程的IDE，与IDEA、Webstorm、Pycharm等耳熟能详的IDE的风格基本相似。针对于不同的语言，略有差异。vscode通过安装插件也可以搭建优雅的Go开发环境，但是在参考了很多网上的帖子和走过很多坑之后还是放弃了，继续使用了Goland。</p><h3 id="goland的优越性" tabindex="-1">Goland的优越性 <a class="header-anchor" href="#goland的优越性" aria-label="Permalink to &quot;Goland的优越性&quot;">​</a></h3><ul><li>代码智能提示</li><li>完备的项目开发流程</li></ul><h3 id="goland的缺点" tabindex="-1">Goland的缺点 <a class="header-anchor" href="#goland的缺点" aria-label="Permalink to &quot;Goland的缺点&quot;">​</a></h3><ul><li>纯英文的开发环境，很容易导致功能了解不完全和误操作</li><li>自不知道哪一版的更新之后，Goland的中文显示就崩掉了，需要自己配置</li><li>从非Goland创建的工程移植，本地库的导入需要手动操作</li><li>需要自行做一些IDE关于proxy的配置</li></ul><h2 id="配置goland主题和字体" tabindex="-1">配置Goland主题和字体 <a class="header-anchor" href="#配置goland主题和字体" aria-label="Permalink to &quot;配置Goland主题和字体&quot;">​</a></h2><p>在这里我使用的是<code>Material Theme UI</code>这个插件，<code>File</code>-&gt;<code>Settings</code>-&gt;<code>Plugins</code>-&gt;<code>Marketplace</code>搜索就好了，选择一个自己喜欢的主题。</p><img src="'+c+'"><p>字体的配置在<code>File</code>-&gt;<code>Settings</code>-&gt;<code>Editor</code>的<code>Font</code>、<code>Color Scheme</code>的<code>Color Scheme Font</code>和<code>Console Font</code>下</p><img src="'+t+'"><p>字体推荐使用的是<code>Fira Code</code>看起来很舒服，但是在显示的时候如果习惯普通的符号的话，对于<code>===</code>、<code>!=</code>、<code>!==</code>等这些符号看起来可能会比较陌生。字体链接: <a href="https://github.com/tonsky/FiraCode" target="_blank" rel="noreferrer">GitHub</a></p><blockquote><p>一定要配置<code>Fallback font</code>这一项不然汉字可能出现渲染问题！</p></blockquote><h2 id="关于ide配置和项目配置" tabindex="-1">关于IDE配置和项目配置 <a class="header-anchor" href="#关于ide配置和项目配置" aria-label="Permalink to &quot;关于IDE配置和项目配置&quot;">​</a></h2><p>默认情况下，只要你根据golang的配置要求配置了<code>GOROOT</code>和<code>GOPATH</code>，IDE都会默认找到对应的本地库，可以通过下图的位置来检查。</p><img src="'+n+'"><img src="'+l+'"><img src="'+i+'"><h2 id="从别的ide迁到goland" tabindex="-1">从别的IDE迁到Goland <a class="header-anchor" href="#从别的ide迁到goland" aria-label="Permalink to &quot;从别的IDE迁到Goland&quot;">​</a></h2><p>根据go语言的特性，默认go的源代码必须位于<code>GOPATH</code>的<code>src</code>下，go在更新后提供了<code>go module</code>的包管理工具，强烈建议在新的项目中使用<code>go mod init xxx.xxx</code>的方式使用<code>go module</code>来初始化项目的包管理，以此来抽离项目于默认的文件夹。从别的IDE迁移至<code>Goland</code>请仔细检查上图中的配置，否则可能会导致本地包智能提示无法识别的问题。</p><p>在上图<code>Go Modules</code>的proxy配置中，强烈建议改为上图配置以解决国内网络环境对于包下载的不友好，配置 <code>https://goproxy.cn,direct</code></p><p>同样建议使用<code>go env</code>检查<code>GOPROXY</code>，<code>go env set GOPROXY=https://goproxy.cn,direct</code></p>',22),_=[s];function p(g,h,m,u,G,b){return e(),d("div",null,_)}const P=o(r,[["render",p]]);export{f as __pageData,P as default};
