import{d as t,o as a,c as p,C as l}from"./app-a7c4fdb4.js";const o={class:"markdown-body"},n={title:"关于 SSG 设计 && 图床搭建",date:"2024-03-29T00:00:00.000Z",brief:"博客设计",image:"https://image.insorker.site/2024/03/3987b17d6d50ab968458436b9b0dba42.webp"},d="",h=t({__name:"site-build",setup(r,{expose:i}){return i({frontmatter:{title:"关于 SSG 设计 && 图床搭建",date:"2024-03-29T00:00:00.000Z",brief:"博客设计",image:"https://image.insorker.site/2024/03/3987b17d6d50ab968458436b9b0dba42.webp"},excerpt:void 0}),(S,e)=>(a(),p("div",o,e[0]||(e[0]=[l('<h1>关于 SSG</h1><p>一般有三种渲染方式</p><ul><li>客户端渲染 CSR (Client Side Render)</li><li>服务端渲染 SSR (Server Side Render)</li><li>静态页面渲染 SSG (Static Site Generation)</li></ul><p>三者的区别简单来说就是：</p><ul><li>客户端渲染是浏览器接收到基本的 HTML 骨架、CSS 和 JS，这个时候页面不是完整的，需要浏览器去进一步渲染内容。</li><li>服务端渲染则会在服务端把所有内容渲染好，包括动态的内容，然后发送给客户端。对于需要与用户交互的内容，则通过 JS 向服务器发送请求，再将得到的动态数据插入到页面中。</li><li>静态页面渲染的思路更加简洁，如果页面的内容不需要更新，那么为什么不在开发过程中就生成的静态页面呢？所以 SSG 在网页构建时就生成了所有静态页面，而不是用户申请的时候再动态生成。</li></ul><blockquote><p>SSR 和 SSG 都对于搜索引擎优化（SEO）非常有利。因为搜索引擎在爬虫时爬取的是 HTML 页面，而不会等到 JS 加载完成。</p></blockquote><p>就实际应用而言，如果你的网页没有用户定制化内容，也没有需要动态更新的内容，那么 SSG 更好，反之 SSR。同时 SSG 可以利用 GitHub Pages 这种静态网站托管服务进行部署。</p><h1>技术选型</h1><p>既然选择了 SSG，那么我想前端框架应该比后端框架的优势更加明显，因为后端框架的本质也是在构建时将内容渲染到页面中，无需服务器端的服务，那还不如前端框架写网页更加舒服。</p><p>受到 vitepress 的影响，我最后选择了 vue 来进行开发。</p><h2>页面构建</h2><p>页面构建选用了 vite-ssg 作为核心构建静态页面。vite-plugin-md 负责渲染将 md 文件，vite-plugin-pages 负责将 md 文件转化成路由。</p><h2>markdown 解析</h2><p>使用 gray-matter 进行解析。highlight.js 渲染代码高亮。katex 渲染数学公式。</p><h2>评论</h2><p>使用了 giscus。原理是将评论转化为 github issues 进行存取。</p><h2>图标</h2><p>选取 iconify 和 remixicon 分别用作互动图标和网站图标库。</p><h1>图床搭建</h1><p>可以参考<a href="https://zhuanlan.zhihu.com/p/604285576">使用 Cloudflare + Backblaze B2+PicGo的搭建免费图床</a>和<a href="https://juejin.cn/post/7223027325037117497?searchId=2023080918313474D20DAE448CB168C01C">Backblaze + Cloudflare + Picgo 打造免费顺畅的图床体验</a>，有时间的话我再自己写一篇。</p><p>至于你可能会问的“为什么不用 OSS？”，其实是因为 OSS 可能会被恶意攻击，例如<a href="https://www.bilibili.com/video/BV1Tb411Q7V4/">没想到又被攻击了！赔了1.5万，我真服了！</a>。从我个人的角度，我不算技术大牛，也没钱，虽然这件事有很多解决方案，但只要存在风险就没有永久太平，或者永久的低消费。所以最好的办法就是不用 OSS，也正巧我找到了 Backblaze 的方案，免费，和 Cloudflare 联动，速度不算慢，完全满足了我的需要，于是就一拍即合了。</p><h1>部署</h1><p>使用 netlify 进行部署，Cloudflare 作为域名解析服务器，具体细节我也记不得了，现在主打一个能用就行（</p><p>另外为了用上我的图床域名 image.insorker.site，我特地把域名 DNS 解析从阿里云里迁到了 Cloudflare 里，所以 netlify 的速度优势可能会因此小一些。</p>',24)])))}});export{h as default,d as excerpt,n as frontmatter};
