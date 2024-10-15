import{d as s,r as d,o as p,c as l,C as r,a,j as n,h as o,w as f}from"./app-f7a2e5c5.js";const b={class:"markdown-body"},h={title:"csapp-lab bomb",date:"2024-09-18T00:00:00.000Z",tags:["csapp"],brief:"csapp bomb",image:"https://image.insorker.site/2024/09/5d6b4c3e5cf3784e860094c9f6299f8c.webp",series:"csapp"},_="",$=s({__name:"csapp-bomb",setup(t,{expose:c}){return c({frontmatter:{title:"csapp-lab bomb",date:"2024-09-18T00:00:00.000Z",tags:["csapp"],brief:"csapp bomb",image:"https://image.insorker.site/2024/09/5d6b4c3e5cf3784e860094c9f6299f8c.webp",series:"csapp"},excerpt:void 0}),(m,e)=>{const x=d("node");return p(),l("div",b,[e[3]||(e[3]=r(`<h1>前言</h1><p>加油吧。附 gdb 运行带参数的文件的用法。</p><pre><code class="language-shell">insorker ../CSAPP/bomb main* ⇡ ❯ gdb -h | grep args                                                            16:26:51
    gdb [options] --args executable-file [inferior-arguments ...]
  --args             Arguments after executable-file are passed to inferior.
</code></pre><h1>题目</h1><h2>1. phase_1</h2><p>汇编代码如下</p><pre><code class="language-asm">0000000000400ee0 &lt;phase_1&gt;:
  400ee0:	48 83 ec 08          	sub    $0x8,%rsp
  400ee4:	be 00 24 40 00       	mov    $0x402400,%esi
  400ee9:	e8 4a 04 00 00       	call   401338 &lt;strings_not_equal&gt;
  400eee:	85 c0                	test   %eax,%eax
  400ef0:	74 05                	je     400ef7 &lt;phase_1+0x17&gt;
  400ef2:	e8 43 05 00 00       	call   40143a &lt;explode_bomb&gt;
  400ef7:	48 83 c4 08          	add    $0x8,%rsp
  400efb:	c3                   	ret
</code></pre><p>查看一下 <code class="">$0x402400</code> 里面是什么</p><pre><code class="language-gdb">(gdb) print (char *)0x402400
$2 = 0x402400 &quot;Border relations with Canada have never been better.&quot;
</code></pre><p>所以答案是 <code class="">Border relations with Canada have never been better.</code>。</p><h2>2. phase_2</h2><p>汇编代码如下</p><pre><code class="language-asm">0000000000400efc &lt;phase_2&gt;:
  400efc:	55                   	push   %rbp
  400efd:	53                   	push   %rbx
  400efe:	48 83 ec 28          	sub    $0x28,%rsp
  400f02:	48 89 e6             	mov    %rsp,%rsi
  400f05:	e8 52 05 00 00       	call   40145c &lt;read_six_numbers&gt;
  400f0a:	83 3c 24 01          	cmpl   $0x1,(%rsp)
  400f0e:	74 20                	je     400f30 &lt;phase_2+0x34&gt;
  400f10:	e8 25 05 00 00       	call   40143a &lt;explode_bomb&gt;
  400f15:	eb 19                	jmp    400f30 &lt;phase_2+0x34&gt;
  400f17:	8b 43 fc             	mov    -0x4(%rbx),%eax
  400f1a:	01 c0                	add    %eax,%eax
  400f1c:	39 03                	cmp    %eax,(%rbx)
  400f1e:	74 05                	je     400f25 &lt;phase_2+0x29&gt;
  400f20:	e8 15 05 00 00       	call   40143a &lt;explode_bomb&gt;
  400f25:	48 83 c3 04          	add    $0x4,%rbx
  400f29:	48 39 eb             	cmp    %rbp,%rbx
  400f2c:	75 e9                	jne    400f17 &lt;phase_2+0x1b&gt;
  400f2e:	eb 0c                	jmp    400f3c &lt;phase_2+0x40&gt;
  400f30:	48 8d 5c 24 04       	lea    0x4(%rsp),%rbx
  400f35:	48 8d 6c 24 18       	lea    0x18(%rsp),%rbp
  400f3a:	eb db                	jmp    400f17 &lt;phase_2+0x1b&gt;
  400f3c:	48 83 c4 28          	add    $0x28,%rsp
  400f40:	5b                   	pop    %rbx
  400f41:	5d                   	pop    %rbp
  400f42:	c3                   	ret    
</code></pre><p>耐心理顺，就可以发现第一个数是 1</p><pre><code class="language-asm">  400f0a:	83 3c 24 01          	cmpl   $0x1,(%rsp)
</code></pre><p>剩下的数依次乘 2，一共有六个数，通过循环的方式实现</p><pre><code class="language-asm">  400f05:	e8 52 05 00 00       	call   40145c &lt;read_six_numbers&gt;
  ...
  400f17:	8b 43 fc             	mov    -0x4(%rbx),%eax
  400f1a:	01 c0                	add    %eax,%eax
  ...
  400f30:	48 8d 5c 24 04       	lea    0x4(%rsp),%rbx
</code></pre><p>如果不确定六个数的顺序，可以先猜一种，然后用 gdb 调试就行了，所以最终答案是 <code class="">1 2 4 8 16 32</code>。</p><h2>3. phase_3</h2><p>汇编代码如下</p><pre><code class="language-asm">0000000000400f43 &lt;phase_3&gt;:
  400f43:	48 83 ec 18          	sub    $0x18,%rsp
  400f47:	48 8d 4c 24 0c       	lea    0xc(%rsp),%rcx
  400f4c:	48 8d 54 24 08       	lea    0x8(%rsp),%rdx
  400f51:	be cf 25 40 00       	mov    $0x4025cf,%esi
  400f56:	b8 00 00 00 00       	mov    $0x0,%eax
  400f5b:	e8 90 fc ff ff       	call   400bf0 &lt;__isoc99_sscanf@plt&gt;
  400f60:	83 f8 01             	cmp    $0x1,%eax
  400f63:	7f 05                	jg     400f6a &lt;phase_3+0x27&gt;
  400f65:	e8 d0 04 00 00       	call   40143a &lt;explode_bomb&gt;
  400f6a:	83 7c 24 08 07       	cmpl   $0x7,0x8(%rsp)
  400f6f:	77 3c                	ja     400fad &lt;phase_3+0x6a&gt;
  400f71:	8b 44 24 08          	mov    0x8(%rsp),%eax
  400f75:	ff 24 c5 70 24 40 00 	jmp    *0x402470(,%rax,8)
  400f7c:	b8 cf 00 00 00       	mov    $0xcf,%eax
  400f81:	eb 3b                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400f83:	b8 c3 02 00 00       	mov    $0x2c3,%eax
  400f88:	eb 34                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400f8a:	b8 00 01 00 00       	mov    $0x100,%eax
  400f8f:	eb 2d                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400f91:	b8 85 01 00 00       	mov    $0x185,%eax
  400f96:	eb 26                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400f98:	b8 ce 00 00 00       	mov    $0xce,%eax
  400f9d:	eb 1f                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400f9f:	b8 aa 02 00 00       	mov    $0x2aa,%eax
  400fa4:	eb 18                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400fa6:	b8 47 01 00 00       	mov    $0x147,%eax
  400fab:	eb 11                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400fad:	e8 88 04 00 00       	call   40143a &lt;explode_bomb&gt;
  400fb2:	b8 00 00 00 00       	mov    $0x0,%eax
  400fb7:	eb 05                	jmp    400fbe &lt;phase_3+0x7b&gt;
  400fb9:	b8 37 01 00 00       	mov    $0x137,%eax
  400fbe:	3b 44 24 0c          	cmp    0xc(%rsp),%eax
  400fc2:	74 05                	je     400fc9 &lt;phase_3+0x86&gt;
  400fc4:	e8 71 04 00 00       	call   40143a &lt;explode_bomb&gt;
  400fc9:	48 83 c4 18          	add    $0x18,%rsp
  400fcd:	c3                   	ret    
</code></pre><p>这题有不同的分支。首先很容易看出来题目要求输入两个参数。</p><pre><code class="language-asm">  400f5b:	e8 90 fc ff ff       	call   400bf0 &lt;__isoc99_sscanf@plt&gt;
  400f60:	83 f8 01             	cmp    $0x1,%eax
  400f63:	7f 05                	jg     400f6a &lt;phase_3+0x27&gt;
  400f65:	e8 d0 04 00 00       	call   40143a &lt;explode_bomb&gt;
</code></pre><p>两个参数的位置按先后顺序分别是 <code class="">0x8 + $rsp</code> 和 <code class="">0xc + $rsp</code>。至于为什么是 <code class="">%rcx</code> 和 <code class="">%rdx</code>，因为 <code class="">sscanf</code> 的原型是 <code class="">int sscanf(const char *buffer, const char *format, [argument]... );</code>，读取的参数要从第三个算起，所以不是 <code class="">%rdi</code> 和 <code class="">%rsi</code>。</p><pre><code class="language-asm">  400f47:	48 8d 4c 24 0c       	lea    0xc(%rsp),%rcx
  400f4c:	48 8d 54 24 08       	lea    0x8(%rsp),%rdx
  ...
  400f5b:	e8 90 fc ff ff       	call   400bf0 &lt;__isoc99_sscanf@plt&gt;
</code></pre><p>然后就是分支跳转的地方，显然第一个参数是正数且要小于 7。然后会进行一次跳转，跳转的地址是 <code class="">0x402470(,%rax,8)</code>。</p><pre><code class="language-asm">  400f6a:	83 7c 24 08 07       	cmpl   $0x7,0x8(%rsp)
  400f6f:	77 3c                	ja     400fad &lt;phase_3+0x6a&gt;
  400f71:	8b 44 24 08          	mov    0x8(%rsp),%eax
  400f75:	ff 24 c5 70 24 40 00 	jmp    *0x402470(,%rax,8)
</code></pre><p>这里以第一个参数（<code class="">0x8 + $rsp</code>，即这里的 <code class="">$rax</code>）为 0 为例。带入计算一下</p><pre><code class="language-gdb">(gdb) p /x *(int*)(0x402470+$rax*8)
$29 = 0x400f7c
</code></pre><p>这个地址对应的汇编代码如下，也就很容易得到第二个参数的值是 <code class="">0xcf</code>，即 207。</p><pre><code class="language-asm">  400f7c:	b8 cf 00 00 00       	mov    $0xcf,%eax
  400f81:	eb 3b                	jmp    400fbe &lt;phase_3+0x7b&gt;
  ...
  400fbe:	3b 44 24 0c          	cmp    0xc(%rsp),%eax
  400fc2:	74 05                	je     400fc9 &lt;phase_3+0x86&gt;
  400fc4:	e8 71 04 00 00       	call   40143a &lt;explode_bomb&gt;
</code></pre><p>当然这只是一种答案，剩余答案的思路也是一样的，上述操作对应的解是 <code class="">0 207</code>。</p><h2>4. phase_4</h2><p>汇编代码如下</p><pre><code class="language-asm">0000000000400fce &lt;func4&gt;:
  400fce:	48 83 ec 08          	sub    $0x8,%rsp
  400fd2:	89 d0                	mov    %edx,%eax
  400fd4:	29 f0                	sub    %esi,%eax
  400fd6:	89 c1                	mov    %eax,%ecx
  400fd8:	c1 e9 1f             	shr    $0x1f,%ecx
  400fdb:	01 c8                	add    %ecx,%eax
  400fdd:	d1 f8                	sar    %eax
  400fdf:	8d 0c 30             	lea    (%rax,%rsi,1),%ecx
  400fe2:	39 f9                	cmp    %edi,%ecx
  400fe4:	7e 0c                	jle    400ff2 &lt;func4+0x24&gt;
  400fe6:	8d 51 ff             	lea    -0x1(%rcx),%edx
  400fe9:	e8 e0 ff ff ff       	call   400fce &lt;func4&gt;
  400fee:	01 c0                	add    %eax,%eax
  400ff0:	eb 15                	jmp    401007 &lt;func4+0x39&gt;
  400ff2:	b8 00 00 00 00       	mov    $0x0,%eax
  400ff7:	39 f9                	cmp    %edi,%ecx
  400ff9:	7d 0c                	jge    401007 &lt;func4+0x39&gt;
  400ffb:	8d 71 01             	lea    0x1(%rcx),%esi
  400ffe:	e8 cb ff ff ff       	call   400fce &lt;func4&gt;
  401003:	8d 44 00 01          	lea    0x1(%rax,%rax,1),%eax
  401007:	48 83 c4 08          	add    $0x8,%rsp
  40100b:	c3                   	ret    

000000000040100c &lt;phase_4&gt;:
  40100c:	48 83 ec 18          	sub    $0x18,%rsp
  401010:	48 8d 4c 24 0c       	lea    0xc(%rsp),%rcx
  401015:	48 8d 54 24 08       	lea    0x8(%rsp),%rdx
  40101a:	be cf 25 40 00       	mov    $0x4025cf,%esi
  40101f:	b8 00 00 00 00       	mov    $0x0,%eax
  401024:	e8 c7 fb ff ff       	call   400bf0 &lt;__isoc99_sscanf@plt&gt;
  401029:	83 f8 02             	cmp    $0x2,%eax
  40102c:	75 07                	jne    401035 &lt;phase_4+0x29&gt;
  40102e:	83 7c 24 08 0e       	cmpl   $0xe,0x8(%rsp)
  401033:	76 05                	jbe    40103a &lt;phase_4+0x2e&gt;
  401035:	e8 00 04 00 00       	call   40143a &lt;explode_bomb&gt;
  40103a:	ba 0e 00 00 00       	mov    $0xe,%edx
  40103f:	be 00 00 00 00       	mov    $0x0,%esi
  401044:	8b 7c 24 08          	mov    0x8(%rsp),%edi
  401048:	e8 81 ff ff ff       	call   400fce &lt;func4&gt;
  40104d:	85 c0                	test   %eax,%eax
  40104f:	75 07                	jne    401058 &lt;phase_4+0x4c&gt;
  401051:	83 7c 24 0c 00       	cmpl   $0x0,0xc(%rsp)
  401056:	74 05                	je     40105d &lt;phase_4+0x51&gt;
  401058:	e8 dd 03 00 00       	call   40143a &lt;explode_bomb&gt;
  40105d:	48 83 c4 18          	add    $0x18,%rsp
  401061:	c3                   	ret    
</code></pre><p>先看 phase_4，同样先读取两个参数 <code class="">%rcx</code> 和 <code class="">%rdx</code>，同时要求 <code class="">%rdx</code> 小于或等于 <code class="">0xe</code>。</p><pre><code class="language-asm">  401010:	48 8d 4c 24 0c       	lea    0xc(%rsp),%rcx
  401015:	48 8d 54 24 08       	lea    0x8(%rsp),%rdx
  ...
  401024:	e8 c7 fb ff ff       	call   400bf0 &lt;__isoc99_sscanf@plt&gt;
  ...
  40102e:	83 7c 24 08 0e       	cmpl   $0xe,0x8(%rsp)
  401033:	76 05                	jbe    40103a &lt;phase_4+0x2e&gt;
  401035:	e8 00 04 00 00       	call   40143a &lt;explode_bomb&gt;
</code></pre><p>然后给 <code class="">%edx</code> 赋值 <code class="">0xe</code>，给 <code class="">%esi</code> 赋值 <code class="">0x0</code>，给 <code class="">%edi</code> 赋值 <code class="">%rdx</code>（输入的参数值），最后调用函数 <code class="">func4()</code>。</p><p>整理一下就是 <code class="">phase_4(a, b) { func4(a, 0, 0xe); }</code></p><pre><code class="language-asm">  40103a:	ba 0e 00 00 00       	mov    $0xe,%edx
  40103f:	be 00 00 00 00       	mov    $0x0,%esi
  401044:	8b 7c 24 08          	mov    0x8(%rsp),%edi
  401048:	e8 81 ff ff ff       	call   400fce &lt;func4&gt;
</code></pre><p>看向函数 <code class="">func4</code>，整理一下可以得到大致的伪代码</p><pre><code class="language-asm"># edi = a, esi = 0, edx = 0xe
# eax = edx;          // eax = 0xe
  400fd2:	89 d0                	mov    %edx,%eax
# eax = eax - esi;    // eax = 0xe
  400fd4:	29 f0                	sub    %esi,%eax
# ecx = eax;          // ecx = 0xe
  400fd6:	89 c1                	mov    %eax,%ecx
# ecx = ecx &gt;&gt; 0x1f;  // ecx = 0
  400fd8:	c1 e9 1f             	shr    $0x1f,%ecx
# eax = eax + ecx;    // eax = 0xe
  400fdb:	01 c8                	add    %ecx,%eax
# eax = eax &gt;&gt; 1;     // eax = 0x7
  400fdd:	d1 f8                	sar    %eax
# ecx = eax + esi;    // ecx = 0x7
  400fdf:	8d 0c 30             	lea    (%rax,%rsi,1),%ecx
# if (ecx &lt;= edi)
#   goto 400ff2
  400fe2:	39 f9                	cmp    %edi,%ecx
  400fe4:	7e 0c                	jle    400ff2 &lt;func4+0x24&gt;
# edx = ecx - 1;      // 
# func4()
  400fe6:	8d 51 ff             	lea    -0x1(%rcx),%edx
  400fe9:	e8 e0 ff ff ff       	call   400fce &lt;func4&gt;
# return 2 *
  400fee:	01 c0                	add    %eax,%eax
  400ff0:	eb 15                	jmp    401007 &lt;func4+0x39&gt;
# eax = 0;
  400ff2:	b8 00 00 00 00       	mov    $0x0,%eax
# if (ecx &gt;= edi)
#   goto 401007
  400ff7:	39 f9                	cmp    %edi,%ecx
  400ff9:	7d 0c                	jge    401007 &lt;func4+0x39&gt;
# esi = ecx + 1;
# func4()
  400ffb:	8d 71 01             	lea    0x1(%rcx),%esi
  400ffe:	e8 cb ff ff ff       	call   400fce &lt;func4&gt;
# return 1 + 2 *
  401003:	8d 44 00 01          	lea    0x1(%rax,%rax,1),%eax
  401007:	48 83 c4 08          	add    $0x8,%rsp
  40100b:	c3                   	ret    

</code></pre><p>上面一大坨适合自己推导自己看，更人性化的代码如下</p><pre><code class="language-c">phase_4(a, b) {
  func4(a, <span class="hljs-number">0</span>, <span class="hljs-number">14</span>);
}

<span class="hljs-type">int</span> <span class="hljs-title function_">func4</span><span class="hljs-params">(<span class="hljs-type">int</span> a, <span class="hljs-type">int</span> b, <span class="hljs-type">int</span> c)</span> {
  <span class="hljs-type">int</span> mid = (c + b) &gt;&gt; <span class="hljs-number">1</span>;

  <span class="hljs-keyword">if</span> (mid &gt; a) {
    <span class="hljs-keyword">return</span> <span class="hljs-number">2</span> * func4(a, b, e - <span class="hljs-number">1</span>);
  }
  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (mid &lt; a) {
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span> + <span class="hljs-number">2</span> * func4(a, e + <span class="hljs-number">1</span>, c);
  }

  <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}
</code></pre><p>不想想太多的话，直接 <code class="">a == 7</code> 就行了，因为从后面的代码可以看出需要 <code class="">func4</code> 的返回值为 0。同时第二个参数必须是 0。</p><pre><code class="language-asm">  40104d:	85 c0                	test   %eax,%eax
  40104f:	75 07                	jne    401058 &lt;phase_4+0x4c&gt;
  401051:	83 7c 24 0c 00       	cmpl   $0x0,0xc(%rsp)
  401056:	74 05                	je     40105d &lt;phase_4+0x51&gt;
  401058:	e8 dd 03 00 00       	call   40143a &lt;explode_bomb&gt;
</code></pre><p>最终答案是 <code class="">7 0</code>，感觉这题怪怪的，没前面的题目出的好。</p><h2>5. phase_5</h2><p>汇编代码如下</p><pre><code class="language-asm">0000000000401062 &lt;phase_5&gt;:
  401062:	53                   	push   %rbx
  401063:	48 83 ec 20          	sub    $0x20,%rsp
  401067:	48 89 fb             	mov    %rdi,%rbx
  40106a:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  401071:	00 00 
  401073:	48 89 44 24 18       	mov    %rax,0x18(%rsp)
  401078:	31 c0                	xor    %eax,%eax
  40107a:	e8 9c 02 00 00       	call   40131b &lt;string_length&gt;
  40107f:	83 f8 06             	cmp    $0x6,%eax
  401082:	74 4e                	je     4010d2 &lt;phase_5+0x70&gt;
  401084:	e8 b1 03 00 00       	call   40143a &lt;explode_bomb&gt;
  401089:	eb 47                	jmp    4010d2 &lt;phase_5+0x70&gt;
  40108b:	0f b6 0c 03          	movzbl (%rbx,%rax,1),%ecx
  40108f:	88 0c 24             	mov    %cl,(%rsp)
  401092:	48 8b 14 24          	mov    (%rsp),%rdx
  401096:	83 e2 0f             	and    $0xf,%edx
  401099:	0f b6 92 b0 24 40 00 	movzbl 0x4024b0(%rdx),%edx
  4010a0:	88 54 04 10          	mov    %dl,0x10(%rsp,%rax,1)
  4010a4:	48 83 c0 01          	add    $0x1,%rax
  4010a8:	48 83 f8 06          	cmp    $0x6,%rax
  4010ac:	75 dd                	jne    40108b &lt;phase_5+0x29&gt;
  4010ae:	c6 44 24 16 00       	movb   $0x0,0x16(%rsp)
  4010b3:	be 5e 24 40 00       	mov    $0x40245e,%esi
  4010b8:	48 8d 7c 24 10       	lea    0x10(%rsp),%rdi
  4010bd:	e8 76 02 00 00       	call   401338 &lt;strings_not_equal&gt;
  4010c2:	85 c0                	test   %eax,%eax
  4010c4:	74 13                	je     4010d9 &lt;phase_5+0x77&gt;
  4010c6:	e8 6f 03 00 00       	call   40143a &lt;explode_bomb&gt;
  4010cb:	0f 1f 44 00 00       	nopl   0x0(%rax,%rax,1)
  4010d0:	eb 07                	jmp    4010d9 &lt;phase_5+0x77&gt;
  4010d2:	b8 00 00 00 00       	mov    $0x0,%eax
  4010d7:	eb b2                	jmp    40108b &lt;phase_5+0x29&gt;
  4010d9:	48 8b 44 24 18       	mov    0x18(%rsp),%rax
  4010de:	64 48 33 04 25 28 00 	xor    %fs:0x28,%rax
  4010e5:	00 00 
  4010e7:	74 05                	je     4010ee &lt;phase_5+0x8c&gt;
  4010e9:	e8 42 fa ff ff       	call   400b30 &lt;__stack_chk_fail@plt&gt;
  4010ee:	48 83 c4 20          	add    $0x20,%rsp
  4010f2:	5b                   	pop    %rbx
  4010f3:	c3                   	ret    
</code></pre><p>一眼可以看到一个没见过的东西 <code class="">%fs:0x28</code>，不用管他，不影响做题。</p><p>首先输入一串字符，要求字符长度等于 6。</p><pre><code class="language-asm">  401078:	31 c0                	xor    %eax,%eax
  40107a:	e8 9c 02 00 00       	call   40131b &lt;string_length&gt;
  40107f:	83 f8 06             	cmp    $0x6,%eax
  401082:	74 4e                	je     4010d2 &lt;phase_5+0x70&gt;
  401084:	e8 b1 03 00 00       	call   40143a &lt;explode_bomb&gt;
</code></pre><p>然后题目每次读取一个你输入的字符，放在 <code class="">$rdx</code> 中。</p><pre><code class="language-asm">  40108b:	0f b6 0c 03          	movzbl (%rbx,%rax,1),%ecx
  40108f:	88 0c 24             	mov    %cl,(%rsp)
  401092:	48 8b 14 24          	mov    (%rsp),%rdx
  ...
  4010a4:	48 83 c0 01          	add    $0x1,%rax
  4010a8:	48 83 f8 06          	cmp    $0x6,%rax
  4010ac:	75 dd                	jne    40108b &lt;phase_5+0x29&gt;
  ...
  4010d2:	b8 00 00 00 00       	mov    $0x0,%eax
  4010d7:	eb b2                	jmp    40108b &lt;phase_5+0x29&gt;
</code></pre><p>与上 <code class="">0xf</code> 取最低四位作为偏置，从另一个字符串中取字符，一共取六个，放在 <code class="">$rsp+0x10</code> 为起始的栈上。</p><pre><code class="language-asm">  401096:	83 e2 0f             	and    $0xf,%edx
  401099:	0f b6 92 b0 24 40 00 	movzbl 0x4024b0(%rdx),%edx
  4010a0:	88 54 04 10          	mov    %dl,0x10(%rsp,%rax,1)
  4010a4:	48 83 c0 01          	add    $0x1,%rax
  4010a8:	48 83 f8 06          	cmp    $0x6,%rax
  4010ac:	75 dd                	jne    40108b &lt;phase_5+0x29&gt;
</code></pre><p>查看 <code class="">0x4024b0</code> 处的字符串得到</p><pre><code class="language-gdb">(gdb) p (char*)(0x4024b0)
$10 = 0x4024b0 &lt;array&gt; &quot;maduiersnfotvbylSo you think you can stop the bomb with ctrl-c, do you?&quot;
</code></pre><p>读取完成后，<code class="">$rdi</code> 存了我们读的 6 个数，<code class="">$rsi</code> 存了 <code class="">0x40245e</code> 里的字符串，然后调用 <code class="">string_not_equal</code> 这个函数。</p><pre><code class="language-asm">  4010ae:	c6 44 24 16 00       	movb   $0x0,0x16(%rsp)
  4010b3:	be 5e 24 40 00       	mov    $0x40245e,%esi
  4010b8:	48 8d 7c 24 10       	lea    0x10(%rsp),%rdi
  4010bd:	e8 76 02 00 00       	call   401338 &lt;strings_not_equal&gt;
  4010c2:	85 c0                	test   %eax,%eax
  4010c4:	74 13                	je     4010d9 &lt;phase_5+0x77&gt;
</code></pre><p>查看 <code class="">0x40245e</code> 处的字符串得到</p><pre><code class="language-asm">(gdb) p (char*)(0x40245e)
$11 = 0x40245e &quot;flyers&quot;
</code></pre><p>综上，我们输入的六个字符的末尾 4 位组成了 “maduiersnfotvbylSo you think you can stop the bomb with ctrl-c, do you?” 中的下标，而这些下标取出的字符串应该对应 “flyers”。</p><p>所以下标应该分别以 9、F、E、5、6、7 结尾，查看 <code class="">man ascii</code> 可以得到</p><pre><code class="">Oct   Dec   Hex   Char
111   73    49    I
117   79    4F    O
116   78    4E    N
105   69    45    E
106   70    46    F
107   71    47    G
</code></pre><p>所以答案是 <code class="">IONEFG</code>。</p><h2>6. phase_6</h2><p>汇编代码如下</p><pre><code class="language-asm">00000000004010f4 &lt;phase_6&gt;:
  4010f4:	41 56                	push   %r14
  4010f6:	41 55                	push   %r13
  4010f8:	41 54                	push   %r12
  4010fa:	55                   	push   %rbp
  4010fb:	53                   	push   %rbx
  4010fc:	48 83 ec 50          	sub    $0x50,%rsp
  401100:	49 89 e5             	mov    %rsp,%r13
  401103:	48 89 e6             	mov    %rsp,%rsi
  401106:	e8 51 03 00 00       	call   40145c &lt;read_six_numbers&gt;
  40110b:	49 89 e6             	mov    %rsp,%r14
  40110e:	41 bc 00 00 00 00    	mov    $0x0,%r12d
  401114:	4c 89 ed             	mov    %r13,%rbp
  401117:	41 8b 45 00          	mov    0x0(%r13),%eax
  40111b:	83 e8 01             	sub    $0x1,%eax
  40111e:	83 f8 05             	cmp    $0x5,%eax
  401121:	76 05                	jbe    401128 &lt;phase_6+0x34&gt;
  401123:	e8 12 03 00 00       	call   40143a &lt;explode_bomb&gt;
  401128:	41 83 c4 01          	add    $0x1,%r12d
  40112c:	41 83 fc 06          	cmp    $0x6,%r12d
  401130:	74 21                	je     401153 &lt;phase_6+0x5f&gt;
  401132:	44 89 e3             	mov    %r12d,%ebx
  401135:	48 63 c3             	movslq %ebx,%rax
  401138:	8b 04 84             	mov    (%rsp,%rax,4),%eax
  40113b:	39 45 00             	cmp    %eax,0x0(%rbp)
  40113e:	75 05                	jne    401145 &lt;phase_6+0x51&gt;
  401140:	e8 f5 02 00 00       	call   40143a &lt;explode_bomb&gt;
  401145:	83 c3 01             	add    $0x1,%ebx
  401148:	83 fb 05             	cmp    $0x5,%ebx
  40114b:	7e e8                	jle    401135 &lt;phase_6+0x41&gt;
  40114d:	49 83 c5 04          	add    $0x4,%r13
  401151:	eb c1                	jmp    401114 &lt;phase_6+0x20&gt;
  401153:	48 8d 74 24 18       	lea    0x18(%rsp),%rsi
  401158:	4c 89 f0             	mov    %r14,%rax
  40115b:	b9 07 00 00 00       	mov    $0x7,%ecx
  401160:	89 ca                	mov    %ecx,%edx
  401162:	2b 10                	sub    (%rax),%edx
  401164:	89 10                	mov    %edx,(%rax)
  401166:	48 83 c0 04          	add    $0x4,%rax
  40116a:	48 39 f0             	cmp    %rsi,%rax
  40116d:	75 f1                	jne    401160 &lt;phase_6+0x6c&gt;
  40116f:	be 00 00 00 00       	mov    $0x0,%esi
  401174:	eb 21                	jmp    401197 &lt;phase_6+0xa3&gt;
  401176:	48 8b 52 08          	mov    0x8(%rdx),%rdx
  40117a:	83 c0 01             	add    $0x1,%eax
  40117d:	39 c8                	cmp    %ecx,%eax
  40117f:	75 f5                	jne    401176 &lt;phase_6+0x82&gt;
  401181:	eb 05                	jmp    401188 &lt;phase_6+0x94&gt;
  401183:	ba d0 32 60 00       	mov    $0x6032d0,%edx
  401188:	48 89 54 74 20       	mov    %rdx,0x20(%rsp,%rsi,2)
  40118d:	48 83 c6 04          	add    $0x4,%rsi
  401191:	48 83 fe 18          	cmp    $0x18,%rsi
  401195:	74 14                	je     4011ab &lt;phase_6+0xb7&gt;
  401197:	8b 0c 34             	mov    (%rsp,%rsi,1),%ecx
  40119a:	83 f9 01             	cmp    $0x1,%ecx
  40119d:	7e e4                	jle    401183 &lt;phase_6+0x8f&gt;
  40119f:	b8 01 00 00 00       	mov    $0x1,%eax
  4011a4:	ba d0 32 60 00       	mov    $0x6032d0,%edx
  4011a9:	eb cb                	jmp    401176 &lt;phase_6+0x82&gt;
  4011ab:	48 8b 5c 24 20       	mov    0x20(%rsp),%rbx
  4011b0:	48 8d 44 24 28       	lea    0x28(%rsp),%rax
  4011b5:	48 8d 74 24 50       	lea    0x50(%rsp),%rsi
  4011ba:	48 89 d9             	mov    %rbx,%rcx
  4011bd:	48 8b 10             	mov    (%rax),%rdx
  4011c0:	48 89 51 08          	mov    %rdx,0x8(%rcx)
  4011c4:	48 83 c0 08          	add    $0x8,%rax
  4011c8:	48 39 f0             	cmp    %rsi,%rax
  4011cb:	74 05                	je     4011d2 &lt;phase_6+0xde&gt;
  4011cd:	48 89 d1             	mov    %rdx,%rcx
  4011d0:	eb eb                	jmp    4011bd &lt;phase_6+0xc9&gt;
  4011d2:	48 c7 42 08 00 00 00 	movq   $0x0,0x8(%rdx)
  4011d9:	00 
  4011da:	bd 05 00 00 00       	mov    $0x5,%ebp
  4011df:	48 8b 43 08          	mov    0x8(%rbx),%rax
  4011e3:	8b 00                	mov    (%rax),%eax
  4011e5:	39 03                	cmp    %eax,(%rbx)
  4011e7:	7d 05                	jge    4011ee &lt;phase_6+0xfa&gt;
  4011e9:	e8 4c 02 00 00       	call   40143a &lt;explode_bomb&gt;
  4011ee:	48 8b 5b 08          	mov    0x8(%rbx),%rbx
  4011f2:	83 ed 01             	sub    $0x1,%ebp
  4011f5:	75 e8                	jne    4011df &lt;phase_6+0xeb&gt;
  4011f7:	48 83 c4 50          	add    $0x50,%rsp
  4011fb:	5b                   	pop    %rbx
  4011fc:	5d                   	pop    %rbp
  4011fd:	41 5c                	pop    %r12
  4011ff:	41 5d                	pop    %r13
  401201:	41 5e                	pop    %r14
  401203:	c3                   	ret    
</code></pre><p>这道题分成两个部分，第一部分要求输入 6 个数，存在 <code class="">%r13</code> 中。</p><pre><code class="language-asm">  401100:	49 89 e5             	mov    %rsp,%r13
  401103:	48 89 e6             	mov    %rsp,%rsi
  401106:	e8 51 03 00 00       	call   40145c &lt;read_six_numbers&gt;
  40110b:	49 89 e6             	mov    %rsp,%r14
  40110e:	41 bc 00 00 00 00    	mov    $0x0,%r12d
  401114:	4c 89 ed             	mov    %r13,%rbp
  401117:	41 8b 45 00          	mov    0x0(%r13),%eax
  40111b:	83 e8 01             	sub    $0x1,%eax
  40111e:	83 f8 05             	cmp    $0x5,%eax
  401121:	76 05                	jbe    401128 &lt;phase_6+0x34&gt;
  401123:	e8 12 03 00 00       	call   40143a &lt;explode_bomb&gt;
  401128:	41 83 c4 01          	add    $0x1,%r12d
  40112c:	41 83 fc 06          	cmp    $0x6,%r12d
  401130:	74 21                	je     401153 &lt;phase_6+0x5f&gt;
  401132:	44 89 e3             	mov    %r12d,%ebx
  401135:	48 63 c3             	movslq %ebx,%rax
  401138:	8b 04 84             	mov    (%rsp,%rax,4),%eax
  40113b:	39 45 00             	cmp    %eax,0x0(%rbp)
  40113e:	75 05                	jne    401145 &lt;phase_6+0x51&gt;
  401140:	e8 f5 02 00 00       	call   40143a &lt;explode_bomb&gt;
  401145:	83 c3 01             	add    $0x1,%ebx
  401148:	83 fb 05             	cmp    $0x5,%ebx
  40114b:	7e e8                	jle    401135 &lt;phase_6+0x41&gt;
  40114d:	49 83 c5 04          	add    $0x4,%r13
  401151:	eb c1                	jmp    401114 &lt;phase_6+0x20&gt;
</code></pre><p>每个数都要小于等于 6。</p><pre><code class="language-asm">  401117:	41 8b 45 00          	mov    0x0(%r13),%eax
  40111b:	83 e8 01             	sub    $0x1,%eax
  40111e:	83 f8 05             	cmp    $0x5,%eax
  401121:	76 05                	jbe    401128 &lt;phase_6+0x34&gt;
  401123:	e8 12 03 00 00       	call   40143a &lt;explode_bomb&gt;
</code></pre><p>每个数都不能和前一个数相等。</p><pre><code class="language-asm">  401114:	4c 89 ed             	mov    %r13,%rbp
  ...
  401128:	41 83 c4 01          	add    $0x1,%r12d
  40112c:	41 83 fc 06          	cmp    $0x6,%r12d
  401130:	74 21                	je     401153 &lt;phase_6+0x5f&gt;
  401132:	44 89 e3             	mov    %r12d,%ebx
  401135:	48 63 c3             	movslq %ebx,%rax
  401138:	8b 04 84             	mov    (%rsp,%rax,4),%eax
  40113b:	39 45 00             	cmp    %eax,0x0(%rbp)
  40113e:	75 05                	jne    401145 &lt;phase_6+0x51&gt;
  ...
  40114d:	49 83 c5 04          	add    $0x4,%r13
</code></pre><p>第二部分</p><pre><code class="language-asm">  401153:	48 8d 74 24 18       	lea    0x18(%rsp),%rsi
  401158:	4c 89 f0             	mov    %r14,%rax
  40115b:	b9 07 00 00 00       	mov    $0x7,%ecx
  401160:	89 ca                	mov    %ecx,%edx
  401162:	2b 10                	sub    (%rax),%edx
  401164:	89 10                	mov    %edx,(%rax)
  401166:	48 83 c0 04          	add    $0x4,%rax
  40116a:	48 39 f0             	cmp    %rsi,%rax
  40116d:	75 f1                	jne    401160 &lt;phase_6+0x6c&gt;
  40116f:	be 00 00 00 00       	mov    $0x0,%esi
  401174:	eb 21                	jmp    401197 &lt;phase_6+0xa3&gt;
  401176:	48 8b 52 08          	mov    0x8(%rdx),%rdx
  40117a:	83 c0 01             	add    $0x1,%eax
  40117d:	39 c8                	cmp    %ecx,%eax
  40117f:	75 f5                	jne    401176 &lt;phase_6+0x82&gt;
  401181:	eb 05                	jmp    401188 &lt;phase_6+0x94&gt;
  401183:	ba d0 32 60 00       	mov    $0x6032d0,%edx
  401188:	48 89 54 74 20       	mov    %rdx,0x20(%rsp,%rsi,2)
  40118d:	48 83 c6 04          	add    $0x4,%rsi
  401191:	48 83 fe 18          	cmp    $0x18,%rsi
  401195:	74 14                	je     4011ab &lt;phase_6+0xb7&gt;
  401197:	8b 0c 34             	mov    (%rsp,%rsi,1),%ecx
  40119a:	83 f9 01             	cmp    $0x1,%ecx
  40119d:	7e e4                	jle    401183 &lt;phase_6+0x8f&gt;
  40119f:	b8 01 00 00 00       	mov    $0x1,%eax
  4011a4:	ba d0 32 60 00       	mov    $0x6032d0,%edx
  4011a9:	eb cb                	jmp    401176 &lt;phase_6+0x82&gt;
  4011ab:	48 8b 5c 24 20       	mov    0x20(%rsp),%rbx
  4011b0:	48 8d 44 24 28       	lea    0x28(%rsp),%rax
  4011b5:	48 8d 74 24 50       	lea    0x50(%rsp),%rsi
  4011ba:	48 89 d9             	mov    %rbx,%rcx
  4011bd:	48 8b 10             	mov    (%rax),%rdx
  4011c0:	48 89 51 08          	mov    %rdx,0x8(%rcx)
  4011c4:	48 83 c0 08          	add    $0x8,%rax
  4011c8:	48 39 f0             	cmp    %rsi,%rax
  4011cb:	74 05                	je     4011d2 &lt;phase_6+0xde&gt;
  4011cd:	48 89 d1             	mov    %rdx,%rcx
  4011d0:	eb eb                	jmp    4011bd &lt;phase_6+0xc9&gt;
  4011d2:	48 c7 42 08 00 00 00 	movq   $0x0,0x8(%rdx)
  4011d9:	00 
  4011da:	bd 05 00 00 00       	mov    $0x5,%ebp
  4011df:	48 8b 43 08          	mov    0x8(%rbx),%rax
  4011e3:	8b 00                	mov    (%rax),%eax
  4011e5:	39 03                	cmp    %eax,(%rbx)
  4011e7:	7d 05                	jge    4011ee &lt;phase_6+0xfa&gt;
  4011e9:	e8 4c 02 00 00       	call   40143a &lt;explode_bomb&gt;
  4011ee:	48 8b 5b 08          	mov    0x8(%rbx),%rbx
  4011f2:	83 ed 01             	sub    $0x1,%ebp
  4011f5:	75 e8                	jne    4011df &lt;phase_6+0xeb&gt;
  4011f7:	48 83 c4 50          	add    $0x50,%rsp
  4011fb:	5b                   	pop    %rbx
  4011fc:	5d                   	pop    %rbp
  4011fd:	41 5c                	pop    %r12
  4011ff:	41 5d                	pop    %r13
  401201:	41 5e                	pop    %r14
  401203:	c3                   	ret    
</code></pre><p>首先用 7 减去每个数。</p><pre><code class="language-asm">  401153:	48 8d 74 24 18       	lea    0x18(%rsp),%rsi
  401158:	4c 89 f0             	mov    %r14,%rax
  40115b:	b9 07 00 00 00       	mov    $0x7,%ecx
  401160:	89 ca                	mov    %ecx,%edx
  401162:	2b 10                	sub    (%rax),%edx
  401164:	89 10                	mov    %edx,(%rax)
  401166:	48 83 c0 04          	add    $0x4,%rax
  40116a:	48 39 f0             	cmp    %rsi,%rax
  40116d:	75 f1                	jne    401160 &lt;phase_6+0x6c&gt;
</code></pre><p>然后将 6 个地址存到栈上，同时按照你的输入排序，从 <code class="">0x6032d0</code> 开始，到 <code class="">0x603320</code> 结束。</p><pre><code class="language-asm">  40116f:	be 00 00 00 00       	mov    $0x0,%esi
  401174:	eb 21                	jmp    401197 &lt;phase_6+0xa3&gt;
  401176:	48 8b 52 08          	mov    0x8(%rdx),%rdx
  40117a:	83 c0 01             	add    $0x1,%eax
  40117d:	39 c8                	cmp    %ecx,%eax
  40117f:	75 f5                	jne    401176 &lt;phase_6+0x82&gt;
  401181:	eb 05                	jmp    401188 &lt;phase_6+0x94&gt;
  401183:	ba d0 32 60 00       	mov    $0x6032d0,%edx
  401188:	48 89 54 74 20       	mov    %rdx,0x20(%rsp,%rsi,2)
  40118d:	48 83 c6 04          	add    $0x4,%rsi
  401191:	48 83 fe 18          	cmp    $0x18,%rsi
  401195:	74 14                	je     4011ab &lt;phase_6+0xb7&gt;
  401197:	8b 0c 34             	mov    (%rsp,%rsi,1),%ecx
  40119a:	83 f9 01             	cmp    $0x1,%ecx
  40119d:	7e e4                	jle    401183 &lt;phase_6+0x8f&gt;
  40119f:	b8 01 00 00 00       	mov    $0x1,%eax
  4011a4:	ba d0 32 60 00       	mov    $0x6032d0,%edx
  4011a9:	eb cb                	jmp    401176 &lt;phase_6+0x82&gt;
</code></pre>`,82)),a("p",null,[e[1]||(e[1]=n("这里非常难想，除非运气好 gdb 显示了 ")),o(x,null,{default:f(()=>e[0]||(e[0]=[n("，否则真的很难想到是链表。")])),_:1}),e[2]||(e[2]=a("pre",null,[a("code",{class:"language-gdb"},`(gdb) x/12ag 0x6032d0
0x6032d0 <node1>:       0x10000014c     0x6032e0 <node2>
0x6032e0 <node2>:       0x2000000a8     0x0
0x6032f0 <node3>:       0x30000039c     0x603300 <node4>
0x603300 <node4>:       0x4000002b3     0x603310 <node5>
0x603310 <node5>:       0x5000001dd     0x603320 <node6>
0x603320 <node6>:       0x6000001bb     0x6032d0 <node1>
(gdb) x/24dw 0x6032d0
0x6032d0 <node1>:       332     1       6304480 0
0x6032e0 <node2>:       168     2       0       0
0x6032f0 <node3>:       924     3       6304512 0
0x603300 <node4>:       691     4       6304528 0
0x603310 <node5>:       477     5       6304544 0
0x603320 <node6>:       443     6       6304464 0
`)],-1))]),e[4]||(e[4]=a("p",null,"然后就按照链表中的值排序存储就行了，最后一部分是比较链表中存储的值。",-1)),e[5]||(e[5]=a("p",null,[n("最终答案是 "),a("code",{class:""},"4 3 2 1 6 5"),n("。")],-1))])}}});export{$ as default,_ as excerpt,h as frontmatter};
