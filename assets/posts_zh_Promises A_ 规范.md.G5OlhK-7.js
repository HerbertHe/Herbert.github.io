import{_ as e,c as o,o as c,a6 as i}from"./chunks/framework.DqpHdag1.js";const _=JSON.parse('{"title":"Promises A+ 规范","description":"","frontmatter":{"title":"Promises A+ 规范","date":"2024-04-14T11:03:48.000Z","toc":true,"tags":["javascript","promise","规范"]},"headers":[],"relativePath":"posts/zh/Promises A+ 规范.md","filePath":"posts/zh/Promises A+ 规范.md"}'),d={name:"posts/zh/Promises A+ 规范.md"},s=i('<h2 id="写在前面的" tabindex="-1">写在前面的 <a class="header-anchor" href="#写在前面的" aria-label="Permalink to &quot;写在前面的&quot;">​</a></h2><p>比较反直觉的是，越基础的知识往往是越简单的，例如工学所用的知识是理学探索的进一步演绎。因此在演绎的层面的思想越模糊，就需要去深入去研究底层的规范和原理。</p><p>本篇是对 <strong>Promises/A+ 规范</strong> 的内容翻译。因为 javascript 所实现的 promises 互操作性，使得只要符合 <strong>Promises/A+ 规范</strong> 的实现都可以进行相互操作。因此深入理解 <strong>Promises/A+ 规范</strong> 显得尤为重要。</p><blockquote><p>规范原文：<a href="https://promisesaplus.com/" target="_blank" rel="noreferrer">https://promisesaplus.com/</a></p></blockquote><h2 id="规范概述" tabindex="-1">规范概述 <a class="header-anchor" href="#规范概述" aria-label="Permalink to &quot;规范概述&quot;">​</a></h2><p>Promises/A+ 规范是一个为 JavaScript promises 的呼声和可操作性，而制定的一个开放标准——通过实现，为了实现。</p><p><em>promise</em> 代表了异步操作的事件结果。与 promise 进行交互最基础的的方式是通过他的 <code>then</code> 方法，该方法注册回调函数用于接收 promise 的事件结果，或者 promise 不能被完成的原因(reason)。</p><p>规范的细节在于 <code>then</code> 方法的行为，为所有符合 Promise/A+ 规范的 promise 实现提供互操作的基础。因此，规范应该非常稳定。然而 Promises/A+ 组织可能偶尔对此规范进行向后兼容的小更改以解决新发现的极端情况，我们仅会在非常小心的思考、讨论和测试之后才会集成大型或者向后不兼容的更改。</p><p>历史上，Promises/A+ 澄清了更早期的 <a href="http://wiki.commonjs.org/wiki/Promises/A" target="_blank" rel="noreferrer">Promises/A 提案</a> 行为条款，并进一步拓展覆盖 <strong>事实上的(de facto)</strong> 行为，并且移除了未规定的或者有问题的部分。</p><p>最终，Promises/A+ 的核心规范并没有处理如何去创建(create)、完成(fulfill)，或者拒绝(reject) promises，取而代之地，选择关注于提供了一个互操作的 <code>then</code> 方法。在未来的配套规范的工作中可能会涉及到这些部分。</p><h2 id="_1-术语-terminology" tabindex="-1">1. 术语(Terminology) <a class="header-anchor" href="#_1-术语-terminology" aria-label="Permalink to &quot;1. 术语(Terminology)&quot;">​</a></h2><ul><li>1.1. &quot;promise&quot; 是一个有符合本规范的 <code>then</code> 方法的对象或者函数。</li><li>1.2. &quot;thenable&quot; 是一个定义 <code>then</code> 方法的对象或者函数。</li><li>1.3. &quot;value&quot; 是任意合法的 JavaScript 值（包含 <code>undefined</code>、一个 thenable 或者一个 promise）。</li><li>1.4. &quot;exception&quot; 是一个使用 <code>throw</code> 语句抛出的值。</li><li>1.5. &quot;reason&quot; 是一个表明为什么 promise 被拒绝(rejected) 的值。</li></ul><h2 id="_2-规定-requirements" tabindex="-1">2. 规定(Requirements) <a class="header-anchor" href="#_2-规定-requirements" aria-label="Permalink to &quot;2. 规定(Requirements)&quot;">​</a></h2><h3 id="_2-1-promise-状态-state" tabindex="-1">2.1. Promise 状态(State) <a class="header-anchor" href="#_2-1-promise-状态-state" aria-label="Permalink to &quot;2.1. Promise 状态(State)&quot;">​</a></h3><p>promise 必须是三种状态中的一种：pending、fulfilled 或 rejected。</p><ul><li>2.1.1. 当 pending 时，promise： <ul><li>2.1.1.1. 可能被转变到 fulfilled 或 rejected 状态。</li></ul></li><li>2.1.2. 当 fulfilled 时，promise： <ul><li>2.1.2.1. 不能被转变为任何其他的状态。</li><li>2.1.2.2. 必须有一个不可变的值。</li></ul></li><li>2.1.3. 当 rejected 时，promise： <ul><li>2.1.3.1. 不能被转变为任何其他的状态。</li><li>2.1.3.2. 必须有一个不可变的原因(reason)。</li></ul></li></ul><p>这里，“必须不可变”意味着不可变同一性（例如，<code>===</code>），但是并不意味着深层不变性。</p><h3 id="_2-2-then-方法" tabindex="-1">2.2. <code>then</code> 方法 <a class="header-anchor" href="#_2-2-then-方法" aria-label="Permalink to &quot;2.2. `then` 方法&quot;">​</a></h3><p>promise 必须提供一个 <code>then</code> 方法去获取它当前本身，或者事件结果，或者原因(reason)。</p><p>promise 的 <code>then</code> 方法接收两个参数：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">promise</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">then</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">onFulfilled</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> onRejected</span><span style="color:#D8DEE9FF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>2.2.1. <code>onFulfilled</code> 和 <code>onRejected</code> 都是可选参数：</p><ul><li>2.2.1.1. 如果 <code>onFulfilled</code> 不是一个函数，则忽略。</li><li>2.2.1.2. 如果 <code>onRejected</code> 不是一个函数，则忽略。</li></ul></li><li><p>2.2.2. 如果 <code>onFulfilled</code> 是一个函数：</p><ul><li>2.2.2.1. 必须在 <code>promise</code> 被完成之后调用，并且 <code>promise</code> 的值作为它的第一个参数。</li><li>2.2.2.2. 不能在 <code>promise</code> 被完成之前调用。</li><li>2.2.2.3. 不能被调用超过一次。</li></ul></li><li><p>2.2.3. 如果 <code>onRejected</code> 是一个函数：</p><ul><li>2.2.3.1 必须在 <code>promise</code> 被拒绝之后调用，并且 <code>promise</code> 的原因作为它的第一个参数。</li><li>2.2.3.2. 不能在 <code>promise</code> 被拒绝之前调用。</li><li>2.2.3.3. 不能被调用超过一次。</li></ul></li><li><p>2.2.4. <code>onFulfilled</code> 或者 <code>onRejected</code> 不能被调用，直到 <a href="https://es5.github.io/#x10.3" target="_blank" rel="noreferrer">执行上下文</a> 栈仅包含平台代码。<a href="#_3-注意事项-notes">3.1</a></p></li><li><p>2.2.5 <code>onFulfilled</code> 和 <code>onRejected</code> 必须作为函数被调用。（例如，不能有 <code>this</code> 的值）<a href="#_3-注意事项-notes">3.2</a></p></li><li><p>2.2.6. <code>then</code> 可能被同一个 promise 调用多次。</p><ul><li>2.2.6.1 如果/当 <code>promise</code> 被完成，所有的各自 <code>onFulfilled</code> 回调必须按照他们本来 <code>then</code> 的顺序执行。</li><li>2.2.6.2 如果/当 <code>promise</code> 被拒绝，所有的各自 <code>onRejected</code> 回调必须按照他们本来 <code>then</code> 的顺序执行。</li></ul></li><li><p>2.2.7. <code>then</code> 必须返回一个 promise <a href="#_3-注意事项-notes">3.3</a>。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">promise2</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> promise1</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">then</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">onFulfilled</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> onRejected</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>2.2.7.1. 如果 <code>onFulfilled</code> 或者 <code>onRejected</code> 返回了一个值 x，运行 Promise 处理程序 <code>[[Resolve]](promise2, x)</code>。</li><li>2.2.7.2. 如果 <code>onFulfilled</code> 或者 <code>onRejected</code> 抛出了一个异常 e，<code>promise2</code> 必须被拒绝，并拒绝原因为 e。</li><li>2.2.7.3. 如果 <code>onFulfilled</code> 不是一个函数，并且 <code>promise1</code> 被完成，<code>promise2</code> 必须被完成，并拥有与 <code>promise1</code> 相同的值。</li><li>2.2.7.4. 如果 <code>onRejected</code> 不是一个函数，并且 <code>promise1</code> 被拒绝，<code>promise2</code> 必须被拒绝，并拥有与 <code>promise1</code> 相同的原因。</li></ul></li></ul><h3 id="_2-3-promise-处理程序-resolution-procedure" tabindex="-1">2.3. Promise 处理程序(Resolution Procedure) <a class="header-anchor" href="#_2-3-promise-处理程序-resolution-procedure" aria-label="Permalink to &quot;2.3. Promise 处理程序(Resolution Procedure)&quot;">​</a></h3><p><strong>promise 处理程序(resolution procedure)</strong> 是一个获取 promise 和值的抽象操作，我们将其表示为 <code>[[Resolve]](promise, x)</code>。如果 <code>x</code> 是一个 thenable，它将尝试去使 <code>promise</code> 采用 <code>x</code> 状态，在设想的情况下，<code>x</code> 的行为至少是类 promise 的。否则，完成 promise 并且值为 <code>x</code>。</p><p>thenable 的处理允许 promise 实现互操作，只要他们暴露了一个 Promises/A+ 兼容的 <code>then</code> 方法。也允许 Promises/A+ 实现去 “同化” 带有 reasonable <code>then</code> 方法的非兼容实现。</p><p>运行 <code>[[Resolve]](promise, x)</code>，执行以下步骤：</p><ul><li>2.3.1. 如果 <code>promise</code> 和 <code>x</code> 引用同一个对象，则拒绝(reject) promise 并以 <code>TypeError</code> 作为原因(reason)。</li><li>2.3.2. 如果 <code>x</code> 是一个 promise，则采用它的状态<a href="#_3-注意事项-notes">3.4</a>： <ul><li>2.3.2.1. 如果 <code>x</code> 在 pending，<code>promise</code> 必须保持 pending 直到 <code>x</code> 被完成或拒绝。</li><li>2.3.2.2. 如果/当 <code>x</code> 被完成，则以相同的值完成 <code>promise</code>。</li><li>2.3.2.3. 如果/当 <code>x</code> 被拒绝，则以相同的原因拒绝 <code>promise</code>。</li></ul></li><li>2.3.3. 否则，如果 <code>x</code> 是一个对象或者函数， <ul><li>2.3.3.1. 让 <code>then</code> 为 <code>x.then</code>。<a href="#_3-注意事项-notes">3.5</a></li><li>2.3.3.2. 如果检索 <code>x.then</code> 的属性值抛出了一个异常 <code>e</code>，则拒绝 <code>promise</code> 并以 <code>e</code> 作为原因。</li><li>2.3.3.3. 如果一个 <code>then</code> 是一个函数，调用它并且 <code>x</code> 作为 <code>this</code>，第一个参数 <code>resolvePromise</code>，第二个参数 <code>rejectPromise</code>，并且： <ul><li>2.3.3.3.1. 如果/当 <code>resolvePromise</code> 被调用并且值为 <code>y</code>，则运行 <code>[[Resolve]](promise, y)</code>。</li><li>2.3.3.3.2. 如果/当 <code>rejectPromise</code> 被调用并且值为 <code>r</code>，则拒绝 <code>promise</code> 并以 <code>r</code> 作为原因。</li><li>2.3.3.3.3. 如果 <code>resolvePromise</code> 和 <code>rejectPromise</code> 都被调用，或者以相同的参数被多次调用，首次调用被优先采纳，并且忽略剩余的调用。</li><li>2.3.3.3.4. 如果调用 <code>then</code> 方法抛出了一个异常 <code>e</code>， <ul><li>2.3.3.3.4.1. 如果 <code>resolvePromise</code> 或者 <code>rejectPromise</code> 已经被调用，则忽略。</li><li>2.3.3.3.4.2. 否则，拒绝 <code>promise</code> 并以 <code>e</code> 作为原因。</li></ul></li></ul></li><li>2.3.4.4. 如果 <code>then</code> 不是一个函数，则以 <code>x</code> 作为值完成 <code>promise</code>。</li></ul></li><li>2.3.4. 如果 <code>x</code> 不是一个对象或者函数，则以 <code>x</code> 作为值完成 <code>promise</code>。</li></ul><p>如果 promise 被处理为一个 thenable，并且参与了一个循环 thenable 链，比如 <code>[[Resolve]](promise, thenable)</code> 递归性质事件造成 <code>[[Resolve]](promise, thenable)</code> 被再次调用，根据上面的算法将会导致无限递归。实现时被鼓励的，但并不是强制的，去检测这样的递归，并且拒绝 promise 并以一个信息化的 <code>TypeError</code> 作为原因。<a href="#_3-注意事项-notes">3.6</a></p><h2 id="_3-注意事项-notes" tabindex="-1">3. 注意事项(Notes) <a class="header-anchor" href="#_3-注意事项-notes" aria-label="Permalink to &quot;3. 注意事项(Notes)&quot;">​</a></h2><ul><li>3.1. 这里 “平台代码” 意味着引擎、环境和 promise 的实现代码。在实践中，规定确保 <code>onFulfilled</code> 和 <code>onRejected</code> 被异步执行，在事件循环中 <code>then</code> 被调用之后，并且使用一个新的栈。可以通过例如 <code>setTimeout</code> 或者 <code>setImmediate</code> 等 “宏任务” 机制，或者使用 <code>MoutationObserver</code> 或者 <code>process.nextTick</code> 等 “微任务” 机制来进行实现。自 promise 实现作为平台代码开始，当处理函数被调用之时，它本身就可能包含一个任务队列(task-scheduling queue) 或者 “蹦床(trampoline)”。</li><li>3.2. 那是，在严格模式，<code>this</code> 的值在里面为 <code>undefined</code>；在非严格模式下，它的值为全局对象。</li><li>3.3. 实现可能允许 <code>promise2 === promise1</code>，提供实现所有的规定。每种实现必须指明是否产生 <code>promise2 === promise1</code> 并且在何种控制之下。</li><li>3.4. 通常情况下，如果来源于当前实现，仅需要知道 <code>x</code> 是正确的 promise。该条款允许使用特定于实现的方法来采用已知符合 promise 的状态。</li><li>3.5. 开始处理存储 <code>x.then</code> 的引用，然后测试引用，接着调用引用，避免多次访问 <code>x.then</code> 属性。这些措施对于确保访问属性的一致性非常重要，在多次检索中的值可以发生改变。</li><li>3.6. 实现 <em>不</em> 应该对 thenable 链的深度有任何限制，并且假设超过该限制，递归是无限的。只有正确的循环才会导致 <code>TypeError</code>；如果遇到无限条不同的 thenables 链，递归永远是正确的行为。</li></ul>',30),l=[s];function r(t,a,n,p,m,u){return c(),o("div",null,l)}const f=e(d,[["render",r]]);export{_ as __pageData,f as default};
