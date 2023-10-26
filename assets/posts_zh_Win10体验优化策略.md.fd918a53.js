import{_ as o,o as a,c as t,Q as i}from"./chunks/framework.53d25516.js";const e="/img/Snipaste_2021-02-02_16-03-42.png",l="/img/Snipaste_2021-02-02_18-06-51.png",r="/img/Snipaste_2021-02-02_18-08-20.png",s="/img/Snipaste_2021-02-02_16-56-17.png",n="/img/Snipaste_2021-02-02_16-58-11.png",c="/img/Snipaste_2021-02-02_16-59-42.png",p="/img/Snipaste_2021-02-02_17-01-42.png",h="/img/Snipaste_2021-02-02_17-33-03.png",d="/img/Snipaste_2021-02-02_18-10-20.png",x=JSON.parse('{"title":"Win10体验优化策略","description":"","frontmatter":{"title":"Win10体验优化策略","date":"2021-02-02T15:47:22.000Z","toc":true,"tags":["Win10","Windows","C盘清理"]},"headers":[],"relativePath":"posts/zh/Win10体验优化策略.md","filePath":"posts/zh/Win10体验优化策略.md"}'),u={name:"posts/zh/Win10体验优化策略.md"},_=i('<h2 id="写在前面的" tabindex="-1">写在前面的 <a class="header-anchor" href="#写在前面的" aria-label="Permalink to &quot;写在前面的&quot;">​</a></h2><p>随着代码越写越多，越来越发现自己有很严重的精神洁癖。尤其在对于自己日常使用的软件体验上，无论是手机还是PC。这篇帖子着重讲述，这么多年来对于Win10系统使用的体验优化，还有对于C盘清理的经验。</p><p>希望Win10体验不会随着时间而变得更差，首先需要养成一个良好的使用习惯。下面的每一节将从不同的纬度提升PC的使用体验，无论是基础软件、辅助功能还是高级玩法。</p><h2 id="使用pc您需要做的事情-含基础软件" tabindex="-1">使用PC您需要做的事情（含基础软件） <a class="header-anchor" href="#使用pc您需要做的事情-含基础软件" aria-label="Permalink to &quot;使用PC您需要做的事情（含基础软件）&quot;">​</a></h2><p>明确一个观念，PC是你的个人财产，不要被任何第三方厂商所绑架。所以，为了您的PC更好报于您更好的体验，请在每一次安装软件之前谨慎！</p><blockquote><p>这里所有的优化体验都基于您的电脑是一个素机的情况下（参考<em>素人</em>的释义）。如果您是小白，但凡您的电脑出现了2345、360系、百度系、腾讯系等的任何软件，请优先考虑<strong>重装</strong>，而不是尝试去做清理！</p></blockquote><h3 id="对于刚拆封的电脑" tabindex="-1">对于刚拆封的电脑 <a class="header-anchor" href="#对于刚拆封的电脑" aria-label="Permalink to &quot;对于刚拆封的电脑&quot;">​</a></h3><ul><li><p>检查您的C盘，看容量是否少于100G（用于开发等应不少于120G）；如果是，建议您在下面检查软件之后，直接重装调整分区；如果您只有一个盘，建议分给C盘不少于120G的空间，其他空间给D盘</p></li><li><p>实现检查您的<strong>程序与功能</strong>，<code>控制面板 ---&gt; 卸载程序</code></p></li></ul><p><img src="'+e+'" alt="图片"></p><blockquote><p>因为某些厂商本来就不是什么好东西，自己会自带某些推广的软件，实际点名<strong>联想</strong>。如果您的电脑不是联想的游戏本系列，没有自带电竞版的电脑管家，建议包含您所不必要的软件和联想电脑管家一起干掉。它存在的唯一用处对于非游戏本来说，几乎只有更新驱动，驱动的更新频率极低。如果你对此并不是必要，就直接卸掉，反正用的时候官网可以继续下载。</p></blockquote><ul><li>安装<strong>必要</strong>的软件</li></ul><p>对于国内绝大部分人来说，日常使用的软件根本没有多少。下面会列举最常用的建议</p><ol><li>使用正版的<code>Microsoft Office</code>，而不是广告里找功能的<code>WPS</code></li><li>使用默认的<code>Win10 自带输入法</code>，而不是第三方输入法（第三方输入法会导致直接广告和个人信息被收集）</li><li>使用默认的<code>Windows Defender</code>也要好于任何国内的杀毒软件，您可以外加<code>火绒安全软件</code>来做<strong>防御</strong>。如果自带了送的<code>迈克菲McAFee</code>，白嫖完之后可以卸掉了</li><li>如果您需要使用<code>腾讯QQ</code>，请使用<code>Tim</code>而不是<code>QQ</code></li><li>浏览器在最新的Win10中已经内置了Chromium版的Edge，如果不是，请<a href="https://www.microsoft.com/zh-cn/edge" target="_blank" rel="noreferrer">官网</a>升级您的Edge。除此之外，您还可以使用Chrome和Firefox，而非包括但不限于 “2345极速浏览器”、“360安全浏览器”、“360极速浏览器”、“QQ浏览器”等，如果您希望您的电脑广告满天飞的话</li><li>有些电脑可能会不带压缩软件，或者带了Winrar。如果自带了Winrar，请卸掉，可以使用<strong>无广告版本的</strong>bandzip（bandzip后面的版本出现了广告）和PeaZip</li></ol><h3 id="对于使用了一段时间" tabindex="-1">对于使用了一段时间 <a class="header-anchor" href="#对于使用了一段时间" aria-label="Permalink to &quot;对于使用了一段时间&quot;">​</a></h3><ul><li>打开您的<strong>程序与功能</strong>，<code>控制面板 ---&gt; 卸载程序</code></li></ul><p><img src="'+e+'" alt="图片"></p><ul><li>卸掉2345系的任何软件</li></ul><p>包括但不限于2345网址导航、2345看图王、2345加速浏览器、2345安全卫士、2345王牌浏览器、2345王牌输入法等，您随便去搜一下就知道这个东西有多恶心，希望这家公司早日倒闭。您的电脑如果在电脑城购买或线下实体店购买，极有可能携带着这些“病毒”，2345是有推广费的</p><blockquote><p>如果说360是流氓的话，毫不客气的说2345就是强奸犯，但凡您的电脑里出现弹窗、捆绑下载等，仔细注意这个玩意</p></blockquote><ul><li>卸掉所有除<strong>360杀毒</strong>（如果您迫切需要的话）的360系软件</li></ul><p>360安全团队在杀毒的领域很厉害，但请记住“免费的永远是最贵的”，<strong>360杀毒</strong>属于调教之后还可用的，其他的碰都不要碰。包括但不限于360安全卫士、鲁大师、360极速浏览器、360安全浏览器等，自带的Windows Defender已经足够满足个人用户的需求</p><ul><li>卸掉几乎所有的腾讯系和百度系的软件</li></ul><p>腾讯系所必要使用的受社交的绑架，对于普通用户来说只有QQ和微信，QQ极其臃肿而且充满了大量的不必要营销、广告、捆绑下载等。如果你在电脑上没有这些需求，那建议一个都别装，腾讯系所有的数据缓存都在C盘里</p><p>现在除了百度搜索之外，我实在想不到有什么不可以替代百度的使用场景，百度搜索也可以用油猴的脚本直接去掉广告。</p><ul><li>卸掉所有给您带来不好体验的软件，但凡它们是可替代的</li></ul><h2 id="必要的设置和良好的习惯" tabindex="-1">必要的设置和良好的习惯 <a class="header-anchor" href="#必要的设置和良好的习惯" aria-label="Permalink to &quot;必要的设置和良好的习惯&quot;">​</a></h2><h3 id="必要的设置" tabindex="-1">必要的设置 <a class="header-anchor" href="#必要的设置" aria-label="Permalink to &quot;必要的设置&quot;">​</a></h3><ul><li>修改<code>Microsoft Store</code>默认的数据位置，<code>设置 ---&gt; 系统 ---&gt; 储存 ---&gt; 更改新内容的保存位置</code></li></ul><p><img src="'+l+'" alt="图片"></p><p><img src="'+r+'" alt="图片"></p><ul><li>无论是不是新机，请检查浏览器的主页锁定情况，国内流氓尤其喜欢篡改浏览器主页</li></ul><p><img src="'+s+'" alt="图片"></p><ul><li>开启弹窗拦截，以免存在漏网之鱼</li></ul><p><img src="'+n+'" alt="图片"></p><ul><li>检查启动项，删掉不必要自启动的软件，会显著提高开机速度</li></ul><p><img src="'+c+'" alt="图片"></p><ul><li>检查右键管理，以免过多的右键菜单栏占用</li></ul><p><img src="'+p+'" alt="图片"></p><ul><li>对于Adobe系的软件(eg. PhotoShop)</li></ul><p>请修改首先首选项，再去下载软件</p><h3 id="良好的习惯" tabindex="-1">良好的习惯 <a class="header-anchor" href="#良好的习惯" aria-label="Permalink to &quot;良好的习惯&quot;">​</a></h3><ol><li>不要下载来路不明的软件</li><li>不要下载不必要的国内大厂软件</li><li>仔细使用搜索引擎和知乎等，查看软件评价</li><li>去官网下载，而不是所谓的“应用市场”或“软件管家”</li><li>使用自定义路径的方式来安装软件，而非默认安装！系统盘和软件安装盘请分离！</li><li>使用可替代的开源软件可能会是一个更好的选择</li></ol><h2 id="辅助功能" tabindex="-1">辅助功能 <a class="header-anchor" href="#辅助功能" aria-label="Permalink to &quot;辅助功能&quot;">​</a></h2><p>为了提高PC的体验，可能需要一些辅助的工具，来达到更好的用户体验，下面列举了一些不错的软件</p><blockquote><p>所有的软件都在 <a href="https://nucotech.github.io/RecommendProjects/#/tools/?id=windows%e5%b9%b3%e5%8f%b0" target="_blank" rel="noreferrer">NucoTech推荐的项目</a> 有所推荐</p></blockquote><ul><li>QuickLook 快速预览文件</li><li>Snipaste 极强的截屏软件</li><li>PotPlayer 最强的播放器</li><li>Wallpaper Engine 保守好评的壁纸软件</li><li>Internet Download Manager / XDM 多线程下载工具</li><li>Auto Dark Mode 自动切换夜间模式</li><li>flu.x 根据时间自动调节色温</li><li>utools Alt+Space快速解锁技能，支持自己开发插件</li></ul><blockquote><p>浏览器优化可以参考 <a href="https://nucotech.github.io/RecommendProjects/#/tools/?id=%e6%b5%8f%e8%a7%88%e5%99%a8%e6%8f%92%e4%bb%b6" target="_blank" rel="noreferrer">浏览器插件</a></p></blockquote><h2 id="高级玩法" tabindex="-1">高级玩法 <a class="header-anchor" href="#高级玩法" aria-label="Permalink to &quot;高级玩法&quot;">​</a></h2><blockquote><p>本人强烈不建议小白乱更改电脑设置，此部分及之后的，您需要知晓您的每一步所可能导致的后果</p></blockquote><h3 id="使用更专业的杀毒软件" tabindex="-1">使用更专业的杀毒软件 <a class="header-anchor" href="#使用更专业的杀毒软件" aria-label="Permalink to &quot;使用更专业的杀毒软件&quot;">​</a></h3><p>火绒主要在于防御，杀毒推荐卡巴斯基和小红伞，自己实际使用卡巴斯基感觉有点卡，并且对于网页浏览的侵入特别强</p><h3 id="更改到公共dns" tabindex="-1">更改到公共DNS <a class="header-anchor" href="#更改到公共dns" aria-label="Permalink to &quot;更改到公共DNS&quot;">​</a></h3><p>前段时间看到火绒安全通报了联通官网被挂马之后，可笑死我了，这些厂商经常污染DNS导致了很多操蛋的事情。我在 <a href="./提升国内GitHub访问体验.html">提升国内GitHub访问体验</a> 中也提到过</p><p>还是建议使用AliDNS，其他的<code>8.8.8.8</code>和<code>114.114.114.114</code>也行</p><h3 id="使用switchhosts-更改hosts" tabindex="-1">使用SwitchHosts!更改Hosts <a class="header-anchor" href="#使用switchhosts-更改hosts" aria-label="Permalink to &quot;使用SwitchHosts!更改Hosts&quot;">​</a></h3><p>直接修改Windows系统的hosts文件感觉特别难受，可以使用 <a href="https://github.com/oldj/SwitchHosts" target="_blank" rel="noreferrer">SwitchHosts!</a>，可以订阅自动更新Hosts</p><h2 id="清理c盘" tabindex="-1">清理C盘 <a class="header-anchor" href="#清理c盘" aria-label="Permalink to &quot;清理C盘&quot;">​</a></h2><p>Windows的目录结构设计让我感到极其难受，我更喜欢类Unix系统的挂载。Windows作为系统盘的C盘，经常会因为使用时间的而变得越来越空间不够，有些方式可能不太适合小白，请谨慎操作</p><h3 id="清理缓存等基础垃圾" tabindex="-1">清理缓存等基础垃圾 <a class="header-anchor" href="#清理缓存等基础垃圾" aria-label="Permalink to &quot;清理缓存等基础垃圾&quot;">​</a></h3><p>使用垃圾清理可以清理缓存、日志等最基础的垃圾</p><p><img src="'+h+'" alt="图片"></p><h3 id="工具清除深层垃圾" tabindex="-1">工具清除深层垃圾 <a class="header-anchor" href="#工具清除深层垃圾" aria-label="Permalink to &quot;工具清除深层垃圾&quot;">​</a></h3><p>可以使用 <a href="http://www.chuyu.me/zh-Hans/" target="_blank" rel="noreferrer">Dism++</a> 来做更深层次的清理，如果您不知道您对某一项的勾选会导致什么后果，那就使用默认的配置就好了</p><h3 id="手动清理可能并不算是垃圾" tabindex="-1">手动清理可能并不算是垃圾 <a class="header-anchor" href="#手动清理可能并不算是垃圾" aria-label="Permalink to &quot;手动清理可能并不算是垃圾&quot;">​</a></h3><blockquote><p>本部分可能会导致不可逆的后果，请谨慎对待</p></blockquote><ul><li>优化Windows系统导致的占用</li></ul><p>参考知乎专栏 <a href="https://zhuanlan.zhihu.com/p/87565681" target="_blank" rel="noreferrer">移除pagefile.sys和hiberfil.sys获取C盘空间</a></p><blockquote><p>需要注意的是如果要删除hiberfil.sys文件，其命令是<code>powercfg -h off</code></p></blockquote><ul><li>手动分析和清理某些数据</li></ul><p>这里使用的工具是WinDirStat，每个人的文件内容都不完全相同，酌情清理</p><p><img src="'+d+'" alt="图片"></p><blockquote><p>Program Files(x86)、Program Files、ProgramData、User目录下面的部分文件按大小和用途，可以部分清理</p></blockquote>',72),b=[_];function g(m,f,q,k,P,S){return a(),t("div",null,b)}const W=o(u,[["render",g]]);export{x as __pageData,W as default};
