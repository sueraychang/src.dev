"use strict";(self.webpackChunksrc_dev=self.webpackChunksrc_dev||[]).push([[963],{270:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>u});var r=o(5893),i=o(1151);const c={sidebar_position:1,title:"Coroutines Basics"},l=void 0,t={id:"kotlin/coroutines/coroutines-basic",title:"Coroutines Basics",description:"\u6b64\u7bc7\u7b46\u8a18\u4e3b\u8981\u4ecb\u7d39\u6700\u57fa\u672c\u7684 Coroutines \u5167\u5bb9\u3002",source:"@site/docs/kotlin/coroutines/coroutines-basic.md",sourceDirName:"kotlin/coroutines",slug:"/kotlin/coroutines/coroutines-basic",permalink:"/src.dev/docs/kotlin/coroutines/coroutines-basic",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Coroutines Basics"},sidebar:"tutorialSidebar",previous:{title:"Coroutines",permalink:"/src.dev/docs/category/coroutines"}},s={},u=[{value:"runBlocking",id:"runblocking",level:4},{value:"launch",id:"launch",level:4},{value:"delay",id:"delay",level:4},{value:"Structured Concurrency",id:"structured-concurrency",level:2},{value:"Suspending Function",id:"suspending-function",level:2},{value:"Scope builder",id:"scope-builder",level:2},{value:"Job",id:"job",level:2}];function d(n){const e={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u6b64\u7bc7\u7b46\u8a18\u4e3b\u8981\u4ecb\u7d39\u6700\u57fa\u672c\u7684 Coroutines \u5167\u5bb9\u3002"}),"\n",(0,r.jsx)(e.p,{children:"Coroutine (\u5354\u7a0b) \u662f\u4e00\u500b\u53ef\u4ee5\u88ab\u66ab\u505c (suspendable) \u7684\u4e00\u6bb5\u4efb\u52d9\u7a0b\u5f0f\uff0c\u6982\u5ff5\u6709\u9ede\u985e\u4f3c Thread \u53ef\u4ee5\u5c07\u4e0d\u540c\u7684\u7a0b\u5f0f\u78bc\u540c\u6b65\u7684\u57f7\u884c\u3002\u7136\u800c Coroutine \u4e26\u4e0d\u6703\u88ab\u56fa\u5b9a\u5728 Thread \u4e2d\uff0c\u800c\u662f\u53ef\u4ee5\u5728 A Thread \u66ab\u505c\uff0c B Thread \u6062\u5fa9\u7e7c\u7e8c\u57f7\u884c\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["Coroutine \u53ef\u4ee5\u8996\u70ba\u8f15\u91cf\u5316\u7684 Thread\uff0c",(0,r.jsx)(e.strong,{children:"\u4f46\u4ed6\u5176\u5be6\u8207 Thread \u4e0d\u540c"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u7bc4\u4f8b\u662f\u4e00\u500b coroutine\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:'fun main() = runBlocking { // this: CoroutineScope\n    launch { // launch a new coroutine and continue\n        delay(1000L) // non-blocking delay for 1 second (default time unit is ms)\n        println("World!") // print after delay\n    }\n    println("Hello") // main coroutine continues while a previous one is delayed\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-powershell",metastring:'title="\u57f7\u884c\u7d50\u679c"',children:"Hello\nWorld!\n"})}),"\n",(0,r.jsx)(e.h4,{id:"runblocking",children:"runBlocking"}),"\n",(0,r.jsx)(e.p,{children:"runBlocking \u662f\u4e00\u500b coroutine builder\uff0c\u5b83\u5efa\u7acb\u4e86\u4e00\u500b coroutine \u4e26\u4e14\u6703\u963b\u585e (block) \u5b83\u7576\u4e0b\u57f7\u884c\u7684 Thread (\u4ee5\u9019\u500b\u7bc4\u4f8b\u5c31\u662f main thread)\u3002\u5b83\u662f\u88ab\u8a2d\u8a08\u4f86\u6a4b\u63a5\u4e00\u822c\u975e coroutine \u7a0b\u5f0f\u78bc\u5230\u53ef\u4ee5\u88ab\u66ab\u505c\u98a8\u683c (suspending style) \u7684\u7a0b\u5f0f\u78bc\uff0c\u901a\u5e38\u50c5\u7528\u5728 main function \u6216\u6e2c\u8a66\u76ee\u7684\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5 runBlocking \u6703 block main thread \u76f4\u5230\u5176\u5167\u90e8\u7684\u6240\u6709 coroutines \u90fd\u57f7\u884c\u5b8c\u7562\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"launch",children:"launch"}),"\n",(0,r.jsx)(e.p,{children:"launch \u4e5f\u662f\u4e00\u500b coroutine builder\uff0c\u5b83\u7522\u751f\u4e86\u4e00\u500b\u65b0\u7684 coroutine\uff0c\u5176\u5167\u90e8\u7684\u7a0b\u5f0f\u78bc\u5c07\u6703\u88ab\u540c\u6b65\u7684\u57f7\u884c\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"delay",children:"delay"}),"\n",(0,r.jsx)(e.p,{children:"delay \u662f\u4e00\u500b\u7279\u6b8a\u7684\u66ab\u505c\u7684\u51fd\u6578 (suspending function)\uff0c\u5b83\u6703\u66ab\u505c\u76ee\u524d\u7684 coroutine \u4e00\u4e9b\u6642\u9593\u3002\u7576 coroutine \u88ab\u66ab\u505c\u5f8c\uff0c\u9019\u500b Thread \u4e26\u4e0d\u6703\u88ab\u5361\u4f4f\uff0c\u800c\u662f\u5176\u4ed6\u4f7f\u7528\u9019\u500b Thread \u7684 coroutine \u6703\u7e7c\u7e8c\u57f7\u884c\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"structured-concurrency",children:"Structured Concurrency"}),"\n",(0,r.jsx)(e.p,{children:"Coroutine \u9075\u5b88 Structured Concurrency \u539f\u5247\uff0c\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f Coroutine \u7d81\u5b9a\u4e86 scope \u7576\u4f5c\u751f\u547d\u9031\u671f\u7684\u6982\u5ff5\u3002\u6bcf\u500b coroutine \u90fd\u5fc5\u9808\u5728\u67d0\u500b CoroutineScope \u5167\u624d\u80fd\u57f7\u884c\u3002\u4ee5\u7b2c\u4e00\u500b\u7bc4\u4f8b\u4f86\u8aaa\uff0crunBlocking \u5efa\u7acb\u4e86\u4e00\u500b CoroutineScope\uff0c\u800c launch \u5efa\u7acb\u4e86\u4e00\u500b coroutine \u5728 runBlocking \u7684 CoroutineScope \u88cf\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5be6\u969b\u7684\u61c9\u7528\uff0cCoroutineScope \u907f\u514d\u8b93\u5176\u4e2d\u7684 coroutine \u907a\u5931\u6216\u9020\u6210 memory leak\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"suspending-function",children:"Suspending Function"}),"\n",(0,r.jsx)(e.p,{children:"\u5c07\u4e4b\u524d\u7684\u7bc4\u4f8b\u7a0b\u5f0f\u78bc\u91cd\u69cb\u6210 suspending function:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:'fun main() = runBlocking { // this: CoroutineScope\n    launch { doWorld() }\n    println("Hello")\n}\n\n// this is your first suspending function\nsuspend fun doWorld() {\n    delay(1000L)\n    println("World!")\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u7576\u4e00\u822c fun \u524d\u9762\u52a0\u4e86 suspend \u4fee\u98fe\u7b26\u5f8c\uff0c\u4ee3\u8868\u9019\u500b function \u9664\u4e86\u53ef\u4ee5\u7528\u5728 coroutine \u88e1\u9762\u4ee5\u5916\uff0c\u51fd\u6578\u5167\u90e8\u9084\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6 suspending function (\u5982 delay()) \u4f86\u66ab\u505c\u7576\u4e0b\u7684 coroutine\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"scope-builder",children:"Scope builder"}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u7528 coroutineScope \u4f86\u5efa\u7acb\u4e00\u500b scope\uff0c\u5b83\u8207 runBlocking \u985e\u4f3c\uff0c\u4f46 coroutineScope \u662f\u4e00\u500b suspend function\uff0c\u4e5f\u5c31\u662f\u5b83\u4e0d\u6703\u963b\u585e Thread\uff0c\u76f8\u53cd\u7684 runBlocking \u662f\u4e00\u500b\u4e00\u822c\u7684 function \u4e26\u4e14\u5b83\u6703\u963b\u585e\u76ee\u524d\u7684 Thread\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",metastring:'title="Scope builder \u7528\u6cd5\u7bc4\u4f8b\uff0c\u5c07\u539f\u672c runBlocking \u7684\u5167\u5bb9\u5305\u5728\u4e00\u500b coroutineScope \u5167"',children:'fun main() = runBlocking {\n    doWorld()\n}\n\nsuspend fun doWorld() = coroutineScope {  // this: CoroutineScope\n    launch {\n        delay(1000L)\n        println("World!")\n    }\n    println("Hello")\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-powershell",metastring:'title="\u57f7\u884c\u7d50\u679c\u4e00\u6a23"',children:"Hello\nWorld!\n"})}),"\n",(0,r.jsx)(e.p,{children:"coroutineScope \u53ef\u4ee5\u7528\u5728\u4efb\u4f55 suspend fun \u5167\uff0c\u4e26\u4e14\u5176\u5167\u90e8\u53ef\u4ee5\u6709\u591a\u500b coroutine \u540c\u6642\u9032\u884c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:'// Sequentially executes doWorld followed by "Done"\nfun main() = runBlocking {\n    doWorld()\n    println("Done")\n}\n\n// Concurrently executes both sections\nsuspend fun doWorld() = coroutineScope { // this: CoroutineScope\n    launch {\n        delay(2000L)\n        println("World 2")\n    }\n    launch {\n        delay(1000L)\n        println("World 1")\n    }\n    println("Hello")\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["coroutineScope \u5167\u7684\u5169\u500b launch \u6703 ",(0,r.jsx)(e.em,{children:(0,r.jsx)(e.strong,{children:"\u540c\u6642"})})," \u57f7\u884c\u3002",(0,r.jsx)(e.br,{}),"\n","\u6b64\u6642\u56e0\u70ba doWorld() \u662f suspend fun\uff0crunBlocking \u7684\u5167\u5bb9\u6703\u7b49\u5230 doWorld \u7d50\u675f\u5f8c\u624d\u7e7c\u7e8c\u9032\u884c\u4e0b\u53bb\uff0c\u6240\u4ee5\u6700\u5f8c\u8f38\u51fa\u70ba\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-powershell",children:"Hello\nWorld 1\nWorld 2\nDone\n"})}),"\n",(0,r.jsx)(e.h2,{id:"job",children:"Job"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"launch"})," \u6703\u56de\u50b3\u4e00\u500b job \u7269\u4ef6\uff0c\u82e5\u6709\u5ba3\u544a\u8b8a\u6578\u53bb\u63a5\u5b83\u7684\u56de\u50b3\u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u5229\u7528\u9019\u500b\u8b8a\u6578\u53bb\u5f37\u5236\u7b49\u5f85 launch \u7684 coroutine \u5b8c\u6210\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5229\u7528 ",(0,r.jsx)(e.code,{children:"job.join()"})," \uff0c\u6703 suspend \u76ee\u524d\u7684 coroutine \u76f4\u5230 launch \u7684\u5167\u5bb9\u5b8c\u6210\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",metastring:'title="\u4f7f\u7528 job.join()"',children:'val job = launch { // launch a new coroutine and keep a reference to its Job\n    delay(1000L)\n    println("World!")\n}\nprintln("Hello")\njob.join() // wait until child coroutine completes\nprintln("Done") \n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-powershell",metastring:'title="\u57f7\u884c\u7d50\u679c"',children:"Hello\nWorld!\nDone\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53c3\u8003\uff1a\n",(0,r.jsx)(e.a,{href:"https://kotlinlang.org/docs/coroutines-basics.html",children:"Coroutines Basics"})]})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>t,a:()=>l});var r=o(7294);const i={},c=r.createContext(i);function l(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);