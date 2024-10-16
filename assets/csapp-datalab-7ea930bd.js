import{d as n,o as p,c as l,C as e}from"./app-f7a2e5c5.js";const c={class:"markdown-body"},j={title:"csapp-lab datalab",date:"2024-09-12T00:00:00.000Z",tags:["csapp"],brief:"csapp datalab",image:"https://image.insorker.site/2024/09/5d6b4c3e5cf3784e860094c9f6299f8c.webp",series:"csapp"},u="",o=n({__name:"csapp-datalab",setup(t,{expose:a}){return a({frontmatter:{title:"csapp-lab datalab",date:"2024-09-12T00:00:00.000Z",tags:["csapp"],brief:"csapp datalab",image:"https://image.insorker.site/2024/09/5d6b4c3e5cf3784e860094c9f6299f8c.webp",series:"csapp"},excerpt:void 0}),(r,s)=>(p(),l("div",c,s[0]||(s[0]=[e(`<h1>前言</h1><p>第二次做 csapp 的 lab 了。</p><h1>题目</h1><h2>1. bitXor</h2><p>问题由两个小问题组成。</p><ol><li>取出所有 x 是 1，y 是 0 的比特</li></ol><pre><code class="language-c">x &amp; ~y
</code></pre><ol start="2"><li>x 或 y 的运算</li></ol><pre><code class="language-c">~(~x &amp; ~y)
</code></pre><p>然后拼接一下就行了</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">bitXor</span><span class="hljs-params">(<span class="hljs-type">int</span> x, <span class="hljs-type">int</span> y)</span> {
  <span class="hljs-keyword">return</span> ~(~(~x &amp; y) &amp; ~(x &amp; ~y));
}
</code></pre><h2>2. tmin</h2><p>比较简单。</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">tmin</span><span class="hljs-params">(<span class="hljs-type">void</span>)</span> {
  <span class="hljs-keyword">return</span> <span class="hljs-number">1</span> &lt;&lt; <span class="hljs-number">31</span>;
}
</code></pre><h2>3. isTmax</h2><p>我想出来的方法需要处理边界情况，首先想到 tmax 的性质 <code class="">tmax + 1 == ~tmax</code></p><pre><code class="language-c">!(~(x + <span class="hljs-number">1</span>) ^ x)
</code></pre><p>但是这个性质 -1 同样满足，所以要单独排除 -1</p><pre><code class="language-c">!!~x
</code></pre><p>连起来就是</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">isTmax</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  <span class="hljs-keyword">return</span> !(~(x + <span class="hljs-number">1</span>) ^ x) &amp; !!~x;
}
</code></pre><h2>4. allOddBits</h2><p>首先想到构造 oddbits，即</p><pre><code class="language-c"><span class="hljs-type">int</span> ob = <span class="hljs-number">0xAA</span> + (<span class="hljs-number">0xAA</span> &lt;&lt; <span class="hljs-number">8</span>) + (<span class="hljs-number">0xAA</span> &lt;&lt; <span class="hljs-number">16</span>) + (<span class="hljs-number">0xAA</span> &lt;&lt; <span class="hljs-number">24</span>);
</code></pre><p>然后就简单了，先把 x 中非 ob 的 bits 去掉，在判断和 ob 是否相等就行了</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">allOddBits</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  <span class="hljs-type">int</span> ob = <span class="hljs-number">0xAA</span> + (<span class="hljs-number">0xAA</span> &lt;&lt; <span class="hljs-number">8</span>) + (<span class="hljs-number">0xAA</span> &lt;&lt; <span class="hljs-number">16</span>) + (<span class="hljs-number">0xAA</span> &lt;&lt; <span class="hljs-number">24</span>);

  <span class="hljs-keyword">return</span> !((x &amp; ob) ^ ob);
}
</code></pre><h2>5. negate</h2><p>补码定义。</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">negate</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  <span class="hljs-keyword">return</span> ~x + <span class="hljs-number">1</span>;
}
</code></pre><h2>8. isLessOrEqual</h2><p>先做这个，后面要用。</p><p><code class="">x &lt;= y</code> 可以看作 <code class="">0 &lt;= y - x</code>，也即 <code class="">0 &lt;= y + (-x)</code>。</p><p><code class="">-x</code> 上一题做过了，<code class="">y + (-x)</code> 很好写</p><pre><code class="language-c">y + (~x + <span class="hljs-number">1</span>)
</code></pre><p>而 <code class="">0 &lt;= z</code> 其实就是判断符号位是否为 1，也就是和 tmin 与一下就行了</p><pre><code class="language-c">!(z &amp; (<span class="hljs-number">1</span> &lt;&lt; <span class="hljs-number">31</span>))
</code></pre><p>很容易就能写出最终答案。</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">isLessOrEqual</span><span class="hljs-params">(<span class="hljs-type">int</span> x, <span class="hljs-type">int</span> y)</span> {
  <span class="hljs-keyword">return</span> !((y + (~x + <span class="hljs-number">1</span>)) &amp; (<span class="hljs-number">1</span> &lt;&lt; <span class="hljs-number">31</span>));
}
</code></pre><h2>6. isAsciiDigit</h2><p>有了上一题的基础这题就简单了，当然这题既然顺序在前就必然有更简单的做法。</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">isAsciiDigit</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  <span class="hljs-keyword">return</span> !((x + (~<span class="hljs-number">0x30</span> + <span class="hljs-number">1</span>)) &amp; (<span class="hljs-number">1</span> &lt;&lt; <span class="hljs-number">31</span>)) &amp; !((<span class="hljs-number">0x39</span> + (~x + <span class="hljs-number">1</span>)) &amp; (<span class="hljs-number">1</span> &lt;&lt; <span class="hljs-number">31</span>));
}
</code></pre><h2>7. conditional</h2><p>思路就是如果 <code class="">x == 0</code>，那么 <code class="">x @ y == 0</code>，反之 <code class="">x != 0</code> 则 <code class="">x @ y == y</code>。</p><p>很容易就能想到 0 和 -1，因为正好 <code class="">0 &amp; y == 0</code> 且 <code class="">-1 &amp; y == y</code>，而且 0 和 -1 可以通过取反相互转换，那么代码就很好写了</p><pre><code class="language-c">x = ~(~!x + <span class="hljs-number">1</span>);
x &amp; y
</code></pre><p>完整答案如下。</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">conditional</span><span class="hljs-params">(<span class="hljs-type">int</span> x, <span class="hljs-type">int</span> y, <span class="hljs-type">int</span> z)</span> {
  x = ~(~!x + <span class="hljs-number">1</span>);

  <span class="hljs-keyword">return</span> (x &amp; y) | (~x &amp; z);
}
</code></pre><h2>9. logicalNeg</h2><p>先说一个思路。首先通过移位将所有位的 1 同时汇聚到最低位上，然后和 1 做与就可以分别出 0 和非 0 了，代码如下</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">logicalNeg</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  x = x | (x &gt;&gt; <span class="hljs-number">16</span>);
  x = x | (x &gt;&gt; <span class="hljs-number">8</span>);
  x = x | (x &gt;&gt; <span class="hljs-number">4</span>);
  x = x | (x &gt;&gt; <span class="hljs-number">2</span>);
  x = x | (x &gt;&gt; <span class="hljs-number">1</span>);

  <span class="hljs-keyword">return</span> ~(x &amp; <span class="hljs-number">1</span>) + <span class="hljs-number">2</span>;
}
</code></pre><p>然而很可惜的是，虽然这个思路还是挺优美的，但是因为用了 13 个符号，刚好超了一个，所以不是正解。</p><p>另一个思路就是判断符号位，如果 x 是 0，那么 x 和 -x 的符号位都是 0，反之 x 不是 0，那么 x 和 -x 的符号位至少有一个是 1。</p><pre><code class="language-c">((x &gt;&gt; <span class="hljs-number">31</span>) | ((~x + <span class="hljs-number">1</span>) &gt;&gt; <span class="hljs-number">31</span>)) &amp; <span class="hljs-number">1</span>
</code></pre><p>这时候答案是反过来的，也就是 !!x，所以我们要把 1 变成 0，0 变成 1，即</p><pre><code class="language-c">(~z + <span class="hljs-number">1</span>) + <span class="hljs-number">1</span>
</code></pre><p>最终答案</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">logicalNeg</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  <span class="hljs-keyword">return</span> ~(((x &gt;&gt; <span class="hljs-number">31</span>) | ((~x + <span class="hljs-number">1</span>) &gt;&gt; <span class="hljs-number">31</span>)) &amp; <span class="hljs-number">1</span>) + <span class="hljs-number">2</span>;
}
</code></pre><h2>10. howManyBits</h2><p>题意是这样的，问你最少多少 bit 的字长可以用有符号数的形式表示某个数。</p><p>题目有两个难点。</p><ol><li><p>之前的题目本质都是在原有的数的基础上做运算，而这题更多的是已知答案在 1 ~ 32 之间，要求你用分支预测推断出正确答案。</p></li><li><p>正数和负数形式不同，要归一化。</p></li></ol><p>第一个难点，我的思路是以正数为例，最小的补码表示法包含一个符号位和一些数字位，符号位前面的所有比特都是 0。那么我只需要找到符号位的 0 的位置就可以的到最终答案。</p><p>第二个难点，我只需要把正数转化为负数就行了，因为正数和他对应的负数所需要的位数是一样的。但是请注意，处于边界上的元素是不一样的，也就是当正数是 tmax + 1 时，tmax + 1 的负数会变成 tmin 导致少了一位，比如 1 的表示是 01，但是 -1 的表示是 1。解决方法也很简单，变成负数的时候再减 1 就行了，对于边界情况 0 也没问题，0 的负数是 0，减一是 -1，howManyBits(0) == howManyBits(-1) == 1。</p><p>综上首先，我们将 x 转化为其负数减一</p><pre><code class="language-c">flag = ~((x &gt;&gt; <span class="hljs-number">31</span>) &amp; <span class="hljs-number">1</span>) + <span class="hljs-number">1</span>;
x = (flag &amp; x) | (~flag &amp; ~x);
</code></pre><p>然后以前 16 位举例，如果 x 的前 16 位全是 1，那么取反可以的到 0，否则是一个非 0 的数</p><pre><code class="language-c">tmp = ~(x &gt;&gt; <span class="hljs-number">16</span>);
</code></pre><p>两次取 ! 进行归一化，得到 0 或者 1</p><pre><code class="language-c">tmp = !!~(x &gt;&gt; <span class="hljs-number">16</span>);
</code></pre><p>如果 tmp 为 0，即 x 的前 16 位全是 1，那么符号位应该在后 16 位，反之 tmp 为 1，即 x 的前 16 位存在 0，则符号位在前 16 位。通过这个分析我们可以得到一个偏置</p><pre><code class="language-c">bias = !!~(x &gt;&gt; <span class="hljs-number">16</span>) &lt;&lt; <span class="hljs-number">4</span>;
ans = ans + bias;
x = x &gt;&gt; bias;
</code></pre><p>每次得到符号位的偏置，再加到一起，就可以得到最终答案了。</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">howManyBits</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  <span class="hljs-type">int</span> ans = <span class="hljs-number">1</span>, flag = <span class="hljs-number">0</span>, bias = <span class="hljs-number">0</span>;

  <span class="hljs-comment">// x = x &gt;= 0 ? x : -x + 1;</span>
  flag = ~((x &gt;&gt; <span class="hljs-number">31</span>) &amp; <span class="hljs-number">1</span>) + <span class="hljs-number">1</span>;
  x = (flag &amp; x) | (~flag &amp; ~x);

  <span class="hljs-comment">// bias = (x &gt;&gt; 16) &amp; 0xFFFF == 0xFFFF ? 0 : 1</span>
  <span class="hljs-comment">// bias = bias * 16</span>
  bias = !!~(x &gt;&gt; <span class="hljs-number">16</span>) &lt;&lt; <span class="hljs-number">4</span>;
  ans = ans + bias;
  x = x &gt;&gt; bias;

  bias = !!~(x &gt;&gt; <span class="hljs-number">8</span>) &lt;&lt; <span class="hljs-number">3</span>;
  ans = ans + bias;
  x = x &gt;&gt; bias;

  bias = !!~(x &gt;&gt; <span class="hljs-number">4</span>) &lt;&lt; <span class="hljs-number">2</span>;
  ans = ans + bias;
  x = x &gt;&gt; bias;

  bias = !!~(x &gt;&gt; <span class="hljs-number">2</span>) &lt;&lt; <span class="hljs-number">1</span>;
  ans = ans + bias;
  x = x &gt;&gt; bias;

  bias = !!~(x &gt;&gt; <span class="hljs-number">1</span>);
  ans = ans + bias;
  x = x &gt;&gt; bias;

  bias = !!~x;
  ans = ans + bias;
  x = x &gt;&gt; bias;

  <span class="hljs-keyword">return</span> ans;
}
</code></pre><h2>11. floatScale2</h2><p>不多解释。下面的几道浮点数题都比较简单，心态放平别觉得没见过就做不出来，分类讨论就行了。</p><pre><code class="language-c"><span class="hljs-type">unsigned</span> <span class="hljs-title function_">floatScale2</span><span class="hljs-params">(<span class="hljs-type">unsigned</span> uf)</span> {
  <span class="hljs-type">int</span> s = (uf &gt;&gt; <span class="hljs-number">31</span>) &amp; <span class="hljs-number">0x1</span>;
  <span class="hljs-type">int</span> <span class="hljs-built_in">exp</span> = (uf &gt;&gt; <span class="hljs-number">23</span>) &amp; <span class="hljs-number">0xFF</span>;
  <span class="hljs-type">int</span> frac = uf &amp; <span class="hljs-number">0x7FFFFF</span>;

  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">exp</span> == <span class="hljs-number">0xFF</span>) {
    <span class="hljs-keyword">return</span> uf;
  }
  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-built_in">exp</span> == <span class="hljs-number">0</span>) {
    frac = frac &lt;&lt; <span class="hljs-number">1</span>;
  }
  <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">exp</span> = <span class="hljs-built_in">exp</span> + <span class="hljs-number">1</span>;
  }

  <span class="hljs-keyword">return</span> (s &lt;&lt; <span class="hljs-number">31</span>) + (<span class="hljs-built_in">exp</span> &lt;&lt; <span class="hljs-number">23</span>) + frac;
}
</code></pre><h2>12. floatFloat2Int</h2><p>不多解释。</p><pre><code class="language-c"><span class="hljs-type">int</span> <span class="hljs-title function_">floatFloat2Int</span><span class="hljs-params">(<span class="hljs-type">unsigned</span> uf)</span> {
  <span class="hljs-type">int</span> s = (uf &gt;&gt; <span class="hljs-number">31</span>) &amp; <span class="hljs-number">0x1</span>;
  <span class="hljs-type">int</span> <span class="hljs-built_in">exp</span> = (uf &gt;&gt; <span class="hljs-number">23</span>) &amp; <span class="hljs-number">0xFF</span>;
  <span class="hljs-type">int</span> frac = uf &amp; <span class="hljs-number">0x7FFFFF</span>;

  s = (<span class="hljs-number">1</span> - <span class="hljs-number">2</span> * s);

  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">exp</span> == <span class="hljs-number">0xFF</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-number">0x80000000</span>u;
  }
  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-built_in">exp</span> &gt;= <span class="hljs-number">127</span>) {
    <span class="hljs-keyword">if</span> (frac &lt;= <span class="hljs-number">0x400000</span>) {
      <span class="hljs-keyword">return</span> s * (<span class="hljs-number">1</span> &lt;&lt; (<span class="hljs-built_in">exp</span> - <span class="hljs-number">127</span>));
    }
    <span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">return</span> s * (<span class="hljs-number">1</span> &lt;&lt; (<span class="hljs-built_in">exp</span> - <span class="hljs-number">127</span>)) * <span class="hljs-number">2</span>;
    }
  }

  <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}
</code></pre><h2>13. floatPower2</h2><p>不多解释。</p><pre><code class="language-c"><span class="hljs-type">unsigned</span> <span class="hljs-title function_">floatPower2</span><span class="hljs-params">(<span class="hljs-type">int</span> x)</span> {
  <span class="hljs-keyword">if</span> (x &gt; <span class="hljs-number">127</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-number">0xFF</span> &lt;&lt; <span class="hljs-number">23</span>;
  }
  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (x &gt;= <span class="hljs-number">-126</span>) {
    <span class="hljs-keyword">return</span> (x + <span class="hljs-number">127</span>) &lt;&lt; <span class="hljs-number">23</span>;
  }
  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (x &gt;= <span class="hljs-number">-149</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span> &lt;&lt; (x + <span class="hljs-number">127</span>);
  }

  <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}
</code></pre>`,82)])))}});export{o as default,u as excerpt,j as frontmatter};
