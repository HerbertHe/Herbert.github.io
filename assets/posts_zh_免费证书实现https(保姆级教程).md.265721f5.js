import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.53d25516.js";const p="/img/20190801231928.png",o="/img/20190801232653.png",b=JSON.parse('{"title":"免费证书实现https(保姆级教程)","description":"","frontmatter":{"title":"免费证书实现https(保姆级教程)","date":"2019-08-01T11:38:13.000Z","toc":true,"tags":["domain","https","Ubuntu18","nginx","ssl"],"categories":["Linux","环境搭建"]},"headers":[],"relativePath":"posts/zh/免费证书实现https(保姆级教程).md","filePath":"posts/zh/免费证书实现https(保姆级教程).md"}'),e={name:"posts/zh/免费证书实现https(保姆级教程).md"},t=l('<h2 id="使用certbot" tabindex="-1">使用Certbot <a class="header-anchor" href="#使用certbot" aria-label="Permalink to &quot;使用Certbot&quot;">​</a></h2><p>Certbot使用的是<a href="https://letsencrypt.org" target="_blank" rel="noreferrer">Let&#39;s Encrypt</a>的证书，该组织也强烈建议使用<a href="https://certbot.eff.org/" target="_blank" rel="noreferrer">Certbot</a>获取证书。</p><h2 id="certbot配置" tabindex="-1">Certbot配置 <a class="header-anchor" href="#certbot配置" aria-label="Permalink to &quot;Certbot配置&quot;">​</a></h2><p>使用这个的目的是获取通配符证书，也就是支持二级域的证书验证，避免https错误的预警。</p><ul><li>主机商: 阿里云</li><li>系统版本: Ubuntu18.04</li><li>Web服务: nginx</li><li>使用环境: python3</li></ul><h3 id="在certbot" tabindex="-1">在Certbot <a class="header-anchor" href="#在certbot" aria-label="Permalink to &quot;在Certbot&quot;">​</a></h3><p>进入<a href="https://certbot.eff.org/" target="_blank" rel="noreferrer">Certbot</a>选择Web服务和系统</p><img src="'+p+'"><p>上图我选的是在Ubuntu18.04上面跑的nginx。下面的提示就是你使用证书实现https之前需要有一个正常运行的网站，并且得有sudo的权限(直接云服务器实例，轻量应用服务器之类的就可以了)</p><img src="'+o+`"><p>可以选择 <strong>默认(Default)</strong> 和 <strong>通配符(wildcard)</strong></p><h4 id="默认的就是一张单域名的证书-我用的是通配符的-直接通配符的可以跳过这一节" tabindex="-1">默认的就是一张单域名的证书 (我用的是通配符的，直接通配符的可以跳过这一节) <a class="header-anchor" href="#默认的就是一张单域名的证书-我用的是通配符的-直接通配符的可以跳过这一节" aria-label="Permalink to &quot;默认的就是一张单域名的证书 (我用的是通配符的，直接通配符的可以跳过这一节)&quot;">​</a></h4><ol><li><p>SSH连接</p></li><li><p>添加Certbot PPA到库(阿里云root下不需要sudo就直接可以的，下同)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">software-properties-common</span></span>
<span class="line"><span style="color:#B392F0;">add-apt-repository</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">universe</span></span>
<span class="line"><span style="color:#B392F0;">add-apt-repository</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ppa:certbot/certbot</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">software-properties-common</span></span>
<span class="line"><span style="color:#6F42C1;">add-apt-repository</span><span style="color:#24292E;"> </span><span style="color:#032F62;">universe</span></span>
<span class="line"><span style="color:#6F42C1;">add-apt-repository</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ppa:certbot/certbot</span></span>
<span class="line"><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div></li><li><p>下载Certbot</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python-certbot-nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python-certbot-nginx</span></span></code></pre></div></li><li><p>选择使用一种方式(推荐使用手动！！)</p><p>自动：使用Certbot下载证书并且更新你的nginx设置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--nginx</span></span></code></pre></div><p>手动：只下载证书，手动配置/重启/重载nginx(手动配置nginx需要对nginx有一定的了解，下面的参考文章里有阿里云ssl配置的参考)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certonly</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--nginx</span></span>
<span class="line"><span style="color:#6A737D;"># 主要区别就在于certonly这个参数，通配符咱们也会遇到</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certonly</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--nginx</span></span>
<span class="line"><span style="color:#6A737D;"># 主要区别就在于certonly这个参数，通配符咱们也会遇到</span></span></code></pre></div><blockquote><p>证书成功生成之后会有信息显示证书所在的位置的，或者运行下面的命令查看证书，然后配置nginx的ssl_certificate和ssl_certificate_key这两个参数就好了。其中privkey.pem对应的就是ssl_certificate_key的目标文件。</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certificates</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certificates</span></span></code></pre></div></li><li><p>测试自动更新</p><p>Certbot支持自动更新证书，然后自动添加了定时任务，就不需要手动更新证书了。官网说在/etc/crontab、/etc/cron.*/*或者systemctl list-timers里面使用了，不放心的可以手动添加定时任务并且设置重启nginx的。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">renew</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dry-run</span></span>
<span class="line"><span style="color:#6A737D;"># --dry-run这个参数用于测试的</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">renew</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dry-run</span></span>
<span class="line"><span style="color:#6A737D;"># --dry-run这个参数用于测试的</span></span></code></pre></div></li><li><p>查看的网站的状态</p><p>这个要看具体的配置，80端口开启ssl直接就好了，443端口https访问！</p></li></ol><h4 id="通配符证书" tabindex="-1">通配符证书 <a class="header-anchor" href="#通配符证书" aria-label="Permalink to &quot;通配符证书&quot;">​</a></h4><ol><li><p>检查DNS服务商是否被支持（国内的就不用看了）</p></li><li><p>SSH连接</p></li><li><p>添加Certbot PPA到库(阿里云root下不需要sudo就直接可以的，下同)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">software-properties-common</span></span>
<span class="line"><span style="color:#B392F0;">add-apt-repository</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">universe</span></span>
<span class="line"><span style="color:#B392F0;">add-apt-repository</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ppa:certbot/certbot</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">software-properties-common</span></span>
<span class="line"><span style="color:#6F42C1;">add-apt-repository</span><span style="color:#24292E;"> </span><span style="color:#032F62;">universe</span></span>
<span class="line"><span style="color:#6F42C1;">add-apt-repository</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ppa:certbot/certbot</span></span>
<span class="line"><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div></li><li><p>下载Certbot</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python-certbot-nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python-certbot-nginx</span></span></code></pre></div></li><li><p>下载正确的插件(国内的，从这一步开始咱们就可以下一章了！)</p></li></ol><h2 id="通配符插件国内主机如何解决之使用certbot-letencrypt-wildcardcertificates-alydns-au" tabindex="-1">通配符插件国内主机如何解决之使用certbot-letencrypt-wildcardcertificates-alydns-au <a class="header-anchor" href="#通配符插件国内主机如何解决之使用certbot-letencrypt-wildcardcertificates-alydns-au" aria-label="Permalink to &quot;通配符插件国内主机如何解决之使用certbot-letencrypt-wildcardcertificates-alydns-au&quot;">​</a></h2><p>Certbot官方有给出插件的编写的方法，也有提供第三方的插件(有兴趣自行去了解)。国内有大佬自己写了插件，在此使用的是<a href="https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au" target="_blank" rel="noreferrer">certbot-letencrypt-wildcardcertificates-alydns-au</a>，文档比较友好，并且issues的回复也很快。</p><blockquote><p>特别提醒： <strong>下面官方的使用参考文档中的所有./certbot-auto命令不再支持！请使用直接使用certbot！</strong> 下面是基于aliyun+python+nginx的演示，具体流程和参数说明请直接参考官方文档！！</p></blockquote><h3 id="下载到-var下" tabindex="-1">下载到/var下 <a class="header-anchor" href="#下载到-var下" aria-label="Permalink to &quot;下载到/var下&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certbot-letencrypt-wildcardcertificates-alydns-au</span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0777</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">au.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certbot-letencrypt-wildcardcertificates-alydns-au</span></span>
<span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0777</span><span style="color:#24292E;"> </span><span style="color:#032F62;">au.sh</span></span></code></pre></div><h3 id="配置domain-ini" tabindex="-1">配置domain.ini <a class="header-anchor" href="#配置domain-ini" aria-label="Permalink to &quot;配置domain.ini&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">domain.ini</span></span>
<span class="line"><span style="color:#6A737D;"># 如果有自己域名后缀的话就不用执行下面修改了</span></span>
<span class="line"><span style="color:#B392F0;">nano</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">domain.ini</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">domain.ini</span></span>
<span class="line"><span style="color:#6A737D;"># 如果有自己域名后缀的话就不用执行下面修改了</span></span>
<span class="line"><span style="color:#6F42C1;">nano</span><span style="color:#24292E;"> </span><span style="color:#032F62;">domain.ini</span></span></code></pre></div><h3 id="获取阿里云的accesskey-腾讯云请参考官方文档" tabindex="-1">获取阿里云的accesskey(腾讯云请参考官方文档) <a class="header-anchor" href="#获取阿里云的accesskey-腾讯云请参考官方文档" aria-label="Permalink to &quot;获取阿里云的accesskey(腾讯云请参考官方文档)&quot;">​</a></h3><p>参考 <a href="https://help.aliyun.com/knowledge_detail/38738.html" target="_blank" rel="noreferrer">阿里云API Key和Secret的申请</a></p><h3 id="修改au-sh参数" tabindex="-1">修改au.sh参数 <a class="header-anchor" href="#修改au-sh参数" aria-label="Permalink to &quot;修改au.sh参数&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nano</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">au.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nano</span><span style="color:#24292E;"> </span><span style="color:#032F62;">au.sh</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 填写下面两个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">ALY_KEY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">ALY_TOKEN</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 命令行路径可以修改，/usr/bin/python可以改为/usr/bin/python3，不过作者已经对python2、3都进行了适配</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 填写下面两个参数</span></span>
<span class="line"><span style="color:#24292E;">ALY_KEY</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">ALY_TOKEN</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 命令行路径可以修改，/usr/bin/python可以改为/usr/bin/python3，不过作者已经对python2、3都进行了适配</span></span></code></pre></div><h3 id="申请证书-nginx-python" tabindex="-1">申请证书(nginx+python) <a class="header-anchor" href="#申请证书-nginx-python" aria-label="Permalink to &quot;申请证书(nginx+python)&quot;">​</a></h3><p>测试配置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certonly</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.example.com</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--preferred-challenges</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dns</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dry-run</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--manual-auth-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-cleanup-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certonly</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.example.com</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--preferred-challenges</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dns</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dry-run</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">--manual-auth-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-cleanup-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 一个顶级域名获取通配符证书直接修改*.example.com为自己的就好了，上述命令去掉--dry-run参数</span></span>
<span class="line"><span style="color:#6A737D;"># 以baidu.com举例(python)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certonly</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.baidu.com</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--preferred-challenges</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dns</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-auth-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-cleanup-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 一个顶级域名获取通配符证书直接修改*.example.com为自己的就好了，上述命令去掉--dry-run参数</span></span>
<span class="line"><span style="color:#6A737D;"># 以baidu.com举例(python)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certonly</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.baidu.com</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--preferred-challenges</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dns</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-auth-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-cleanup-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre></div><p>SAN通配符证书(直接添加-d 和域名就好了)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 基于官方示例(python)</span></span>
<span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certonly</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.example.com</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.example.org</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">www.example.cn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--preferred-challenges</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dns</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-auth-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-cleanup-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 基于官方示例(python)</span></span>
<span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certonly</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.example.com</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.example.org</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">www.example.cn</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--preferred-challenges</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dns</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-auth-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-cleanup-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre></div><h3 id="配置nginx" tabindex="-1">配置nginx <a class="header-anchor" href="#配置nginx" aria-label="Permalink to &quot;配置nginx&quot;">​</a></h3><p>上面包括下面的所有命令都带certonly，因此所有的操作都是只做认证，nginx需要自行修改配置！！</p><blockquote><p>证书成功生成之后会有信息显示证书所在的位置的，或者运行下面的命令查看证书，然后配置nginx的ssl_certificate和ssl_certificate_key这两个参数就好了。其中privkey.pem对应的就是ssl_certificate_key的目标文件。</p></blockquote><p>如果不知道证书的位置，可以使用下面的命令查看</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certificates</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certificates</span></span></code></pre></div><p>配置完成之后</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span></span></code></pre></div><h3 id="证书的续期" tabindex="-1">证书的续期 <a class="header-anchor" href="#证书的续期" aria-label="Permalink to &quot;证书的续期&quot;">​</a></h3><p>请直接参考<a href="https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au/blob/master/README.md" target="_blank" rel="noreferrer">官方文档</a>，下面贴出来的只是基于官方文档的 <strong>阿里云+python版</strong> shell，官方演示shell使用的都是php和阿里云！！</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 所有证书renew</span></span>
<span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">renew</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--manual</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--preferred-challenges</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dns</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-auth-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-cleanup-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 某一张证书续期</span></span>
<span class="line"><span style="color:#6A737D;"># 查看证书</span></span>
<span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certificates</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 记住证书名，比如simplehttps.com</span></span>
<span class="line"><span style="color:#B392F0;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">renew</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cert-name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">simplehttps.com</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--manual-auth-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual-cleanup-hook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 所有证书renew</span></span>
<span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">renew</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">--manual</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--preferred-challenges</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dns</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-auth-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-cleanup-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 某一张证书续期</span></span>
<span class="line"><span style="color:#6A737D;"># 查看证书</span></span>
<span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certificates</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 记住证书名，比如simplehttps.com</span></span>
<span class="line"><span style="color:#6F42C1;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">renew</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cert-name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">simplehttps.com</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">--manual-auth-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual-cleanup-hook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre></div><h3 id="加入crontab" tabindex="-1">加入crontab <a class="header-anchor" href="#加入crontab" aria-label="Permalink to &quot;加入crontab&quot;">​</a></h3><p>因为我使用了nginx，所以添加crontab就直接renew成功之后重启nginx了。这里强烈建议service nginx restart重启！nginx -s reload重载nginx.conf配置时并不一定会报错而带来影响debug的问题。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nano</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/crontab</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nano</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/crontab</span></span></code></pre></div><p>添加内容</p><div class="language-crontab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">crontab</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1 1 */1 * * root certbot-auto renew --manual --preferred-challenges dns --deploy-hook  &quot;service nginx restart&quot; --manual-auth-hook &quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot; --manual-cleanup-hook &quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1 1 */1 * * root certbot-auto renew --manual --preferred-challenges dns --deploy-hook  &quot;service nginx restart&quot; --manual-auth-hook &quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly add&quot; --manual-cleanup-hook &quot;/var/certbot-letencrypt-wildcardcertificates-alydns-au/au.sh python aly clean&quot;</span></span></code></pre></div><p>然后，就结束了！！</p><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/u010102390/article/details/80505451" target="_blank" rel="noreferrer">linux的crontab定时配置全过程</a></li><li><a href="https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au/blob/master/README.md" target="_blank" rel="noreferrer">插件certbot-letencrypt-wildcardcertificates-alydns-au的使用</a></li><li><a href="https://help.aliyun.com/knowledge_detail/95491.html?spm=5176.2020520163.cas.52.5cd656a7iFDuEI" target="_blank" rel="noreferrer">Nginx/Tengine服务器安装SSL证书</a></li></ul>`,51),c=[t];function r(i,y,d,h,E,u){return a(),n("div",null,c)}const g=s(e,[["render",r]]);export{b as __pageData,g as default};
