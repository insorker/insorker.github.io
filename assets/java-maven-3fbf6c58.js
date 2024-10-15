import{d as t,o as n,c as l,C as p}from"./app-f7a2e5c5.js";const e={class:"markdown-body"},r={title:"[Buy Me a Java] Maven 快速上手指南",date:"2024-10-15T00:00:00.000Z",tags:["java"],brief:"Buy Me a Java 系列之 Maven",image:"https://image.insorker.site/2024/10/56013c5a0e56a63f821ce7d540aee56e.webp",series:"java"},g="",h=t({__name:"java-maven",setup(c,{expose:a}){return a({frontmatter:{title:"[Buy Me a Java] Maven 快速上手指南",date:"2024-10-15T00:00:00.000Z",tags:["java"],brief:"Buy Me a Java 系列之 Maven",image:"https://image.insorker.site/2024/10/56013c5a0e56a63f821ce7d540aee56e.webp",series:"java"},excerpt:void 0}),(d,s)=>(n(),l("div",e,s[0]||(s[0]=[p(`<p>Maven 是一个项目管理工具，可以通过配置文件（pom.xml）来管理项目的构建、报告和文档。</p><p>参考资料：</p><p><a href="https://www.bilibili.com/video/BV1uApMeWErY">https://www.bilibili.com/video/BV1uApMeWErY</a></p><p><a href="https://www.nosuchfield.com/2023/06/16/Maven-Details/">https://www.nosuchfield.com/2023/06/16/Maven-Details/</a></p><h1>Maven 的生命周期</h1><p>Maven 使用生命周期（lifecycle）表示软件开发和构建的流程，并总结出了三套默认的生命周期。</p><ul><li>clean：清理项目</li><li>default：构建项目</li><li>site：构建项目站点</li></ul><p>每个生命周期内又由多个阶段（phase）组成。phase 的执行有先后顺序的概念。在执行某个 phase 时，会按顺序从这个 lifecycle 最开始的 phase 开始执行，当上一个 phase 执行完成后会开始继续执行下一个 phase，一直执行到当前指定的 phase 结束。</p><p>这里关注几个常用的 phase。</p><table><thead><tr><th>default 的阶段</th><th>用途</th></tr></thead><tbody><tr><td>compile</td><td>编译项目主源码，编译 src/main/java 目录内的 Java 文件到输出主 classpath 目录，如 idea 中生成的 target 文件夹</td></tr><tr><td>test</td><td>执行单元测试</td></tr><tr><td>package</td><td>将编译好的代码打包成可发布的格式，如 jar</td></tr><tr><td>install</td><td>将打包好的文件安装到本地仓库</td></tr><tr><td>deploy</td><td>将打包好的文件发布到远程仓库</td></tr></tbody></table><p>简单来说就是 <code class="">编译 -&gt; 测试 -&gt; 打包 -&gt; 安装 | 发布</code> 这一套流程。</p><blockquote><p>如果是在 idea 中，点击右侧 <code class="">M</code> 按钮，点击 <code class="">Lifecycle</code> 即可看到相关选项。或者在命令行中执行相关命令可以得到同样效果。</p></blockquote><h1>配置文件 pom.xml</h1><p>这是一个新建的 maven 项目的配置文件 pom.xml，POM 是 Project Object Model 的缩写，翻译过来就是项目对象模型。</p><pre><code class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">project</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://maven.apache.org/POM/4.0.0&quot;</span> <span class="hljs-attr">xmlns:xsi</span>=<span class="hljs-string">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span>
  <span class="hljs-attr">xsi:schemaLocation</span>=<span class="hljs-string">&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">modelVersion</span>&gt;</span>4.0.0<span class="hljs-tag">&lt;/<span class="hljs-name">modelVersion</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>com.insorker<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>maven-test<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>1.0-SNAPSHOT<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">packaging</span>&gt;</span>jar<span class="hljs-tag">&lt;/<span class="hljs-name">packaging</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">name</span>&gt;</span>maven-test<span class="hljs-tag">&lt;/<span class="hljs-name">name</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">url</span>&gt;</span>http://maven.apache.org<span class="hljs-tag">&lt;/<span class="hljs-name">url</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">properties</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">project.build.sourceEncoding</span>&gt;</span>UTF-8<span class="hljs-tag">&lt;/<span class="hljs-name">project.build.sourceEncoding</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">properties</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">dependencies</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dependency</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>junit<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>junit<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>3.8.1<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">scope</span>&gt;</span>test<span class="hljs-tag">&lt;/<span class="hljs-name">scope</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dependency</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dependencies</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">project</span>&gt;</span>
</code></pre><p>项目相关的配置如下</p><table><thead><tr><th>元素</th><th>含义</th></tr></thead><tbody><tr><td>groupId</td><td>项目所属的组织或公司名</td></tr><tr><td>artifactId</td><td>项目名</td></tr><tr><td>version</td><td>项目的版本</td></tr><tr><td>name</td><td>项目的可读名称，非必须</td></tr><tr><td>description</td><td>项目的描述，非必须</td></tr><tr><td>packaging</td><td>项目的打包方式，非必须，默认为 jar</td></tr></tbody></table><p><code class="">&lt;properties&gt;</code> 标签可以定义一些常量，比如定义某个通用的版本号，避免后续修改版本号时重复修改多次。</p><pre><code class="">&lt;properties&gt;
  &lt;mybatis.spring&gt;2.2.0&lt;/mybatis.spring&gt;
&lt;/properties&gt;

&lt;dependencies&gt;
  &lt;dependency&gt;
      &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
      &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
      &lt;version&gt;\${mybatis.spring}&lt;/version&gt;
  &lt;/dependency&gt;
  ...
&lt;/dependencies&gt;
</code></pre><p><code class="">&lt;dependencies&gt;</code> 标签定义了项目相关的依赖，其中某个具体的依赖包裹在 <code class="">&lt;dependency&gt;</code> 标签中。相关的元素含义基本同上所述，这里详细描述一下新增的 <code class="">scope</code>。</p><p>scope 表示依赖的作用范围，分为 test、compile、provided 和 runtime。即依赖产生作用的不同的 classpath。</p><table><thead><tr><th>scope</th><th>含义</th></tr></thead><tbody><tr><td>compile</td><td>如果不指定就使用 compile 选项，代表编译依赖范围。使用这个配置的依赖范围的 maven 依赖，在编译、测试和运行的时候这个依赖都有效。例如 spring-code。</td></tr><tr><td>test</td><td>依赖指对测试文件生效，如，junit 在 src 文件夹中不能 import。</td></tr><tr><td>provided</td><td>依赖对编译和测试 classpath 有效，对运行时 classpath 无效。例如 servlet-api，运行时 tomcat 会提供。</td></tr><tr><td>runtime</td><td>运行时依赖范围，对测试和运行 classpath 有效，对编译时无效。例如 JDBC 驱动，代码编译的时候只需要接口，实现只在真正运行时才需要。即 SPI（Service Provider Interface）机制下常用。</td></tr></tbody></table><h1>仓库 &amp; 坐标</h1><p>Maven 通过仓库管理 jar 包，方便项目的下载或引用。共有三种仓库，分别是本地仓库、私服仓库和中央仓库。</p><p>一般项目依赖会从中央仓库进行下载，如果配置了私服仓库则会从私服仓库下载。下载好的依赖会存储在本地仓库中，本地仓库是电脑上的一个目录，项目使用的依赖可以从对应的路径找到对应的 jar 包。</p><p><a href="#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-pom.xml">配置文件 pom.xml</a> 这一节中已经提到过了 <code class="">groupId</code>、<code class="">artifactId</code> 和 <code class="">version</code> 这三个概念。通过这三个信息就如同 3 维坐标轴一样确定了一个唯一对应的依赖。</p><p>通过中央仓库，即 <a href="https://mvnrepository.com/">https://mvnrepository.com/</a> ，从中找到具体的依赖，选中某个版本（可以参考右侧的选择率），复制代码添加到 pom.xml 中即可添加依赖。</p><h1>依赖冲突</h1><p>在 idea 中查看依赖，可以发现某个依赖 A 可能依赖了某个依赖 B，依赖 C 也同时依赖了依赖 B，但是版本不同，这就产生了依赖冲突。但是不必担心，maven 会自动选择某个依赖，选择顺序为</p><ul><li>最短路径：路径最短，深度最浅的依赖优先选择</li><li>顺序选择：按从上到下的顺序选择依赖</li></ul><p>当然也可以手动选择依赖的版本。具体方法可以通过添加 <code class="">&lt;exclusion&gt;</code> 标签或 <code class="">&lt;optional&gt;</code> 标签实现，这里不再赘述。</p><h1>父子工程</h1><p>Maven 完全支持多级的父子工程结构。父项目通过 <code class="">&lt;modules&gt;</code> 标签管理子模块，如</p><pre><code class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">modules</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">module</span>&gt;</span>m-a<span class="hljs-tag">&lt;/<span class="hljs-name">module</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">module</span>&gt;</span>m-b<span class="hljs-tag">&lt;/<span class="hljs-name">module</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">module</span>&gt;</span>m-c<span class="hljs-tag">&lt;/<span class="hljs-name">module</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">modules</span>&gt;</span>
</code></pre><p>子项目通过 <code class="">&lt;parent&gt;</code> 标签从父项目继承配置。</p><pre><code class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">parent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>com.insorker<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>maven-test<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>1.0-SNAPSHOT<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">parent</span>&gt;</span>
</code></pre><p>默认继承所有 <code class="">&lt;dependencies&gt;</code> 中 <code class="">&lt;scope&gt;</code> 为 compile 的依赖，但是一般为了方便管理，在父项目的配置文件中使用 <code class="">&lt;dependencyManagement&gt;</code> 标签管理，这样子模块可以通过配置指定具体继承的依赖，配置时无需指明版本号。</p>`,37)])))}});export{h as default,g as excerpt,r as frontmatter};
