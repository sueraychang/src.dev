"use strict";(self.webpackChunksrc_dev=self.webpackChunksrc_dev||[]).push([[697],{2392:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=t(5893),l=t(1151);const s={sidebar_position:1,title:"Scope Functions"},r=void 0,d={id:"kotlin/scope-functions",title:"Scope Functions",description:"let, run, with, apply and also",source:"@site/docs/kotlin/scope-functions.md",sourceDirName:"kotlin",slug:"/kotlin/scope-functions",permalink:"/src.dev/docs/kotlin/scope-functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Scope Functions"},sidebar:"tutorialSidebar",previous:{title:"Kotlin",permalink:"/src.dev/docs/category/kotlin"}},c={},a=[{value:"Function \u9078\u64c7\u6574\u7406",id:"function-\u9078\u64c7\u6574\u7406",level:2},{value:"\u5dee\u5225\u6574\u7406",id:"\u5dee\u5225\u6574\u7406",level:2},{value:"Context object: this or it",id:"context-object-this-or-it",level:3},{value:"this",id:"this",level:4},{value:"it",id:"it",level:4},{value:"let",id:"let",level:2},{value:"with",id:"with",level:2},{value:"run",id:"run",level:2},{value:"apply",id:"apply",level:2},{value:"also",id:"also",level:2},{value:"takeIf and takeUnless",id:"takeif-and-takeunless",level:2}];function o(n){const e={blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"let, run, with, apply and also"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u6587\u7b46\u8a18\u4e86 Kotlin Scope Functions \u7684\u5e38\u898b\u7528\u6cd5\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u7c21\u55ae\u4f86\u8aaa\uff0c\u9019\u4e9b\u51fd\u6578\u90fd\u662f\u7528\u4f86\u91dd\u5c0d\u67d0\u500b\u7269\u4ef6\u57f7\u884c\u67d0\u4e00\u500b\u7bc4\u570d(scope/\u6216\u53eb\u505acode block)\u7684\u7a0b\u5f0f\u78bc\u3002",(0,i.jsx)(e.br,{}),"\n","\u5728\u9019\u500b\u7bc4\u570d\u5167\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u7528\u7269\u4ef6\u540d\u7a31\u4f86\u5b58\u53d6\u8a72\u7269\u4ef6\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["Scope Functions \u4e3b\u8981\u76ee\u7684\u662f\u7528\u4f86\u5e6b\u52a9 ",(0,i.jsx)(e.strong,{children:"\u7c21\u5316\u7a0b\u5f0f\u78bc"})," \u8ddf ",(0,i.jsx)(e.strong,{children:"\u63d0\u5347\u95b1\u8b80\u6027"})," \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5e95\u4e0b\u63d0\u4f9b\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\uff0c\u5206\u5225\u662f\u6709\u7121\u4f7f\u7528 Scope Functions \u7684\u60c5\u5f62\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u4f7f\u7528 Scope Functions: let"',children:'Person("Alice", 20, "Amsterdam").let {\n    println(it)\n    it.moveTo("London")\n    it.incrementAge()\n    println(it)\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u4e0d\u4f7f\u7528 Scope Functions"',children:'val alice = Person("Alice", 20, "Amsterdam")\nprintln(alice)\nalice.moveTo("London")\nalice.incrementAge()\nprintln(alice)\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\u4e0d\u4f7f\u7528 Scope Functions \u5c31\u9700\u8981\u5ba3\u544a\u4e00\u500b\u8b8a\u6578\uff0c\u4e26\u5728\u6bcf\u4e00\u884c\u4f7f\u7528\u6642\u90fd\u91cd\u8907\u5beb\u51fa\u90a3\u500b\u8b8a\u6578\u540d\u7a31\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"function-\u9078\u64c7\u6574\u7406",children:"Function \u9078\u64c7\u6574\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u8868\u683c\u7c21\u55ae\u7684\u7e3d\u7d50\u5404\u7a2e Scope Functions \u7684\u5dee\u7570\uff1a"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Func"}),(0,i.jsx)(e.th,{children:"\u7269\u4ef6\u53c3\u8003"}),(0,i.jsx)(e.th,{children:"\u56de\u50b3"}),(0,i.jsx)(e.th,{children:"\u662f\u5426\u70ba extension function"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"let"}),(0,i.jsx)(e.td,{children:"it"}),(0,i.jsx)(e.td,{children:"\u51fd\u6578\u6700\u5f8c\u4e00\u884c\u7684\u7d50\u679c"}),(0,i.jsx)(e.td,{children:"Yes"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"run"}),(0,i.jsx)(e.td,{children:"this"}),(0,i.jsx)(e.td,{children:"\u51fd\u6578\u6700\u5f8c\u4e00\u884c\u7684\u7d50\u679c"}),(0,i.jsx)(e.td,{children:"Yes"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u76f4\u63a5\u547c\u53eb run"}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"\u51fd\u6578\u6700\u5f8c\u4e00\u884c\u7684\u7d50\u679c"}),(0,i.jsx)(e.td,{children:"No: \u7121\u53c3\u6578"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"with"}),(0,i.jsx)(e.td,{children:"this"}),(0,i.jsx)(e.td,{children:"\u51fd\u6578\u6700\u5f8c\u4e00\u884c\u7684\u7d50\u679c"}),(0,i.jsx)(e.td,{children:"No: \u5c07\u7269\u4ef6\u7576\u4f5c\u53c3\u6578\u547c\u53eb"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"apply"}),(0,i.jsx)(e.td,{children:"this"}),(0,i.jsx)(e.td,{children:"\u8a72\u7269\u4ef6\u672c\u8eab"}),(0,i.jsx)(e.td,{children:"Yes"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"also"}),(0,i.jsx)(e.td,{children:"it"}),(0,i.jsx)(e.td,{children:"\u8a72\u7269\u4ef6\u672c\u8eab"}),(0,i.jsx)(e.td,{children:"Yes"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"\xa0"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u908a\u6574\u7406\u4e86\u4f9d\u7167\u4e0d\u540c\u76ee\u7684\uff0c\u5efa\u8b70\u4f7f\u7528\u7684 Scope Function:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u91dd\u5c0d nullable \u7269\u4ef6\u70ba non-null \u7684\u6642\u5019\u518d\u57f7\u884c\uff1a let"}),"\n",(0,i.jsx)(e.li,{children:"\u5ba3\u544a\u8b8a\u6578\u6642\u589e\u52a0\u95b1\u8b80\u6027\uff1a let"}),"\n",(0,i.jsx)(e.li,{children:"\u5c0d\u7269\u4ef6\u7684 member \u8ce6\u503c\uff1a apply"}),"\n",(0,i.jsx)(e.li,{children:"\u5c0d\u7269\u4ef6\u521d\u59cb\u5316\u8ddf\u505a\u4e00\u4e9b\u904b\u7b97\uff1a run"}),"\n",(0,i.jsx)(e.li,{children:"\u57f7\u884c\u4e00\u4e9b\u63cf\u8ff0\u6027\u8cea\u53ef\u589e\u52a0\u95b1\u8b80\u6027\u7684\u5167\u5bb9\u4e26\u8ce6\u503c\uff1arun \u76f4\u63a5\u547c\u53eb"}),"\n",(0,i.jsx)(e.li,{children:"\u589e\u52a0\u984d\u5916\u6548\u679c\uff1a also"}),"\n",(0,i.jsx)(e.li,{children:"\u628a\u8981\u5c0d\u7269\u4ef6\u57f7\u884c\u7684\u4e00\u4e9b code \u5305\u5728\u51fd\u6578\u4e2d\uff1a with"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5dee\u5225\u6574\u7406",children:"\u5dee\u5225\u6574\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u4e9b\u51fd\u6578\u4e3b\u8981\u7684\u5dee\u7570\u5728\u65bc\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Context object \u4e5f\u5c31\u662f scope/code block \u5167\u4e3b\u8981\u60c5\u5883\u7269\u4ef6\u7684\u53c3\u8003\u7528\u6cd5"}),"\n",(0,i.jsx)(e.li,{children:"\u51fd\u6578\u7684\u56de\u50b3\u662f\u4ec0\u9ebc"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"context-object-this-or-it",children:"Context object: this or it"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 scope/code block \u5167\uff0c\u7269\u4ef6\u53ef\u4ee5\u7528\u7c21\u5316\u7684\u65b9\u5f0f\u4f86\u53c3\u8003\u7269\u4ef6\uff0c\u800c\u4e0d\u662f\u7528\u7269\u4ef6\u540d\u7a31\uff0c\u4ee5\u9054\u5230\u7c21\u5316\u7a0b\u5f0f\u78bc\u7684\u76ee\u7684\u3002",(0,i.jsx)(e.br,{}),"\n","\u6bcf\u500b scope function \u7686\u7528\u4e86\u5176\u4e2d\u4e00\u7a2e\u65b9\u5f0f\u4f86\u53c3\u8003\u7269\u4ef6\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"this"})," (lambda receiver)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"it"})," (lambda argument)"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u91dd\u5c0d\u4e0d\u540c Context object \u7684\u7bc4\u4f8b\uff1a"',children:'fun main() {\n    val str = "Hello"\n    // this\n    str.run {\n        println("The string\'s length: $length")\n        //println("The string\'s length: ${this.length}") // does the same\n    }\n\n    // it\n    str.let {\n        println("The string\'s length is ${it.length}")\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h4,{id:"this",children:"this"}),"\n",(0,i.jsxs)(e.p,{children:["run, with \u8ddf apply \u7528 ",(0,i.jsx)(e.code,{children:"this"})," (\u4e5f\u5c31\u662f lambda receiver) \u7684\u65b9\u5f0f\u4f86\u53c3\u8003\u7269\u4ef6\u3002",(0,i.jsx)(e.br,{}),"\n","\u800c\u5927\u90e8\u5206\u7684\u60c5\u6cc1\u4e0b ",(0,i.jsx)(e.code,{children:"this"})," \u90fd\u53ef\u4ee5\u7701\u7565\u3002",(0,i.jsx)(e.br,{}),"\n","\u4e5f\u56e0\u70ba ",(0,i.jsx)(e.code,{children:"this"})," \u5728\u88ab\u7701\u7565\u7684\u60c5\u6cc1\u4e0b\u4e0d\u5bb9\u6613\u5206\u8fa8 scope \u5167\u7684\u53c3\u6578\u662f\u5c6c\u65bc\u7269\u4ef6\u9084\u662f\u5916\u90e8\uff0c",(0,i.jsx)(e.br,{}),"\n","\u6240\u4ee5\u4e00\u822c\u4f86\u8aaa\u9019\u985e\u7684 scope functions \u6703\u7528\u4f86\u91dd\u5c0d\u53c3\u8003\u7269\u4ef6\u7684 member \u8ce6\u503c\uff0c",(0,i.jsx)(e.br,{}),"\n","\u6216\u662f\u5c0d\u53c3\u8003\u7269\u4ef6\u7684\u6210\u54e1\u51fd\u6578\u505a\u547c\u53eb\uff0c\u5728 scope \u5167\u4e0d\u6703\u53c3\u8003\u5916\u90e8\u7684\u8b8a\u6578\u6216\u51fd\u6578\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val adam = Person("Adam").apply { \n    age = 20                       // same as this.age = 20\n    city = "London"\n}\nprintln(adam)\n'})}),"\n",(0,i.jsx)(e.h4,{id:"it",children:"it"}),"\n",(0,i.jsxs)(e.p,{children:["turn, let \u8ddf also \u7528 ",(0,i.jsx)(e.code,{children:"it"})," (\u4e5f\u5c31\u662f lambda argument) \u7684\u65b9\u5f0f\u4f86\u53c3\u8003\u7269\u4ef6\u3002",(0,i.jsx)(e.br,{}),"\n","it \u70ba\u51fd\u6578\u7684\u9810\u8a2d\u5f15\u6578\u540d\u7a31\uff0c\u4e5f\u5c31\u662f\u8aaa\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u984d\u5916\u6307\u5b9a\u51fd\u6578\u5f15\u6578\u540d\u7a31\u800c\u4e0d\u7528",(0,i.jsx)(e.code,{children:"it"}),"\u3002",(0,i.jsx)(e.br,{}),"\n","\u56e0\u70ba\u5728 scope \u5167\u8981\u53c3\u8003\u7269\u4ef6\u8981\u984d\u5916\u5beb\u5f15\u6578\u540d\uff0c\u56e0\u6b64\u8f03\u9069\u5408\u6df7\u5408\u5167\u90e8\u8207\u5916\u90e8\u7684\u51fd\u6578\u6216\u8b8a\u6578(\u56e0\u70ba\u8f03\u597d\u5206\u8fa8)\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u4f7f\u7528\u9810\u8a2d\u5f15\u6578\u540d\u7a31 it\uff1a"',children:'fun getRandomInt(): Int {\n    return Random.nextInt(100).also {\n        writeToLog("getRandomInt() generated value $it")\n    }\n}\n\nval i = getRandomInt()\nprintln(i)\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u984d\u5916\u6307\u5b9a\u5f15\u6578\u540d\u7a31\u70ba value \u7684\u7528\u6cd5\uff1a"',children:'fun getRandomInt(): Int {\n    return Random.nextInt(100).also { value ->\n        writeToLog("getRandomInt() generated value $value")\n    }\n}\n\nval i = getRandomInt()\nprintln(i)\n'})}),"\n",(0,i.jsx)(e.h2,{id:"let",children:"let"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7269\u4ef6\u5728 scope \u5167\u7684\u53c3\u8003\u70ba\uff1ait"}),"\n",(0,i.jsx)(e.li,{children:"\u56de\u50b3\u70ba lambda result"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"let \u5e38\u7528\u4f86\u5728 function call \u7d50\u675f\u5f8c\uff0c\u8abf\u7528\u4e00\u500b\u6216\u591a\u500b\u51fd\u6578\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u6c92\u4f7f\u7528 let"',children:'val numbers = mutableListOf("one", "two", "three", "four", "five")\nval resultList = numbers.map { it.length }.filter { it > 3 }\nprintln(resultList) \n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u4f7f\u7528 let, \u4e0d\u9700\u8981\u518d\u5ba3\u544a\u8ddf\u4f7f\u7528 resultList \u9019\u500b\u8b8a\u6578"',children:'val numbers = mutableListOf("one", "two", "three", "four", "five")\nnumbers.map { it.length }.filter { it > 3 }.let { \n    println(it)\n    // and more function calls if needed\n} \n'})}),"\n",(0,i.jsx)(e.p,{children:"\xa0"}),"\n",(0,i.jsxs)(e.p,{children:["\u82e5 let function scope \u5167\u53ea\u6709\u4e00\u500b\u51fd\u6578\uff0c\u4e26\u4e14\u50b3\u5165\u7684\u53c3\u6578\u70ba it \uff0c\u53ef\u4ee5\u518d\u7528 method reference (",(0,i.jsx)(e.code,{children:"::"}),") \u7c21\u5beb\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val numbers = mutableListOf("one", "two", "three", "four", "five")\nnumbers.map { it.length }.filter { it > 3 }.let(::println)\n'})}),"\n",(0,i.jsx)(e.p,{children:"\xa0"}),"\n",(0,i.jsxs)(e.p,{children:["let \u4e00\u500b\u5e38\u7528\u60c5\u5883\u70ba\u5728\u7269\u4ef6\u4e0d\u70ba null \u7684\u60c5\u6cc1\u4e0b\u624d\u57f7\u884c\u5b83\uff0c",(0,i.jsx)(e.br,{}),"\n","\u901a\u5e38\u6703\u642d\u914d safe call operator ",(0,i.jsx)(e.code,{children:"?."})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"val str: String? = \"Hello\"   \n//processNonNullString(str)       // compilation error: str can be null\nval length = str?.let { \n    println(\"let() called on $it\")        \n    processNonNullString(it)      // OK: 'it' is not null inside '?.let { }'\n    it.length\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\xa0"}),"\n",(0,i.jsxs)(e.p,{children:["\u53e6\u4e00\u500b\u5e38\u7528\u60c5\u5883\u70ba\u5229\u7528 let \u5ba3\u544a\u4e00\u500b\u65b0\u7684\u8b8a\u6578\uff0c\u900f\u904e let \u5167\u7684\u908f\u8f2f\u4f86\u589e\u52a0\u95b1\u8b80\u6027\u3002",(0,i.jsx)(e.br,{}),"\n","\u4f8b\u5982\u4ee5\u4e0b\u7bc4\u4f8b\u7684 modifiedFirstItem \u8b8a\u6578\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val numbers = listOf("one", "two", "three", "four")\nval modifiedFirstItem = numbers.first().let { firstItem ->\n    println("The first item of the list is \'$firstItem\'")\n    if (firstItem.length >= 5) firstItem else "!" + firstItem + "!"\n}.uppercase()\nprintln("First item after modifications: \'$modifiedFirstItem\'")\n'})}),"\n",(0,i.jsx)(e.h2,{id:"with",children:"with"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7269\u4ef6\u5728 scope \u5167\u7684\u53c3\u8003\u70ba\uff1athis"}),"\n",(0,i.jsx)(e.li,{children:"\u56de\u50b3\u70ba lambda result"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["with \u4e0d\u662f\u4e00\u500b extension function\uff0c\u6240\u4ee5\u5beb\u6cd5\u70ba\u4e00\u822c function call\u3002",(0,i.jsx)(e.br,{}),"\n","with scope function \u8981\u5c07\u7269\u4ef6\u7576\u53c3\u6578\u50b3\u5165\uff0c\u540c\u6642\u5728 code block \u5167\u7528 this \u4f86\u53c3\u8003\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5efa\u8b70\u7528\u4f86\u57f7\u884c\u4e00\u4e9b\u4e0d\u9700\u8981\u56de\u50b3\u7d50\u679c\u7684\u51fd\u6578\u6216\u908f\u8f2f\uff0c",(0,i.jsx)(e.br,{}),"\n",'\u95b1\u8b80\u4e0a\u53ef\u4ee5\u770b\u6210 "',(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"with this object, do the following."})}),'"']}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val numbers = mutableListOf("one", "two", "three")\nwith(numbers) {\n    println("\'with\' is called with argument $this")\n    println("It contains $size elements")\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\xa0"}),"\n",(0,i.jsx)(e.p,{children:"\u4e5f\u5e38\u7528\u4f86\u5c0d\u4e00\u500b helper \u7269\u4ef6\u8ce6\u503c\uff0c\u4e5f\u662f\u4e00\u500b\u589e\u52a0\u95b1\u8b80\u6027\u7684\u7528\u6cd5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val numbers = mutableListOf("one", "two", "three")\nval firstAndLast = with(numbers) {\n    "The first element is ${first()}," +\n    " the last element is ${last()}"\n}\nprintln(firstAndLast)\n'})}),"\n",(0,i.jsx)(e.h2,{id:"run",children:"run"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7269\u4ef6\u5728 scope \u5167\u7684\u53c3\u8003\u70ba\uff1athis"}),"\n",(0,i.jsx)(e.li,{children:"\u56de\u50b3\u70ba lambda result"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["run \u57fa\u672c\u4e0a\u8207 with \u4e00\u6a23\uff0c\u552f\u4e00\u5dee\u7570\u70ba run \u662f\u4e00\u500b extension function\uff0c\u6240\u4ee5\u53ef\u4ee5\u7528\u9ede",(0,i.jsx)(e.code,{children:"."}),"\u4f86\u547c\u53eb\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"run \u5e38\u7528\u4f86\u5c0d\u8a72\u7269\u4ef6\u540c\u6642\u505a\u521d\u59cb\u5316\u8ddf\u904b\u7b97\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val service = MultiportService("https://example.kotlinlang.org", 80)\n\nval result = service.run {\n    port = 8080\n    query(prepareRequest() + " to port $port")\n}\n\n// the same code written with let() function:\nval letResult = service.let {\n    it.port = 8080\n    it.query(it.prepareRequest() + " to port ${it.port}")\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\xa0"}),"\n",(0,i.jsxs)(e.p,{children:['\u4e5f\u53ef\u4ee5\u5c07 run \u76f4\u63a5\u62ff\u4f86\u547c\u53eb\uff0c\u6b64\u6642 run function \u4e0d\u5e36\u4efb\u4f55\u53c3\u6578\uff0c\u4ecd\u7136\u56de\u50b3\u6700\u5f8c\u4e00\u884c\u7684\u7d50\u679c\u3002\n\u4e5f\u662f\u4e00\u7a2e\u589e\u52a0\u95b1\u8b80\u6027\u7684\u7528\u6cd5\uff0c\u53ef\u770b\u6210 "',(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"run the code block and compute the result."})}),'"']}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val hexNumberRegex = run {\n    val digits = "0-9"\n    val hexDigits = "A-Fa-f"\n    val sign = "+-"\n\n    Regex("[$sign]?[$digits$hexDigits]+")\n}\n\nfor (match in hexNumberRegex.findAll("+123 -FFFF !%*& 88 XYZ")) {\n    println(match.value)\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"apply",children:"apply"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7269\u4ef6\u5728 scope \u5167\u7684\u53c3\u8003\u70ba\uff1athis"}),"\n",(0,i.jsx)(e.li,{children:"\u56de\u50b3\u70ba\u8a72\u7269\u4ef6\u672c\u8eab"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5efa\u8b70\u4e3b\u8981\u7528\u4f86\u5c0d\u7269\u4ef6\u7684 member \u8ce6\u503c\uff0c",(0,i.jsx)(e.br,{}),"\n",'\u53ef\u770b\u6210 "',(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"apply the following assignments to the object."})}),'"']}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val adam = Person("Adam").apply {\n    age = 32\n    city = "London"        \n}\nprintln(adam)\n'})}),"\n",(0,i.jsx)(e.h2,{id:"also",children:"also"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7269\u4ef6\u5728 scope \u5167\u7684\u53c3\u8003\u70ba\uff1ait"}),"\n",(0,i.jsx)(e.li,{children:"\u56de\u50b3\u70ba\u8a72\u7269\u4ef6\u672c\u8eab"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5e38\u7528\u4f86\u5728 code chain \u4e2d\u589e\u52a0\u5c0d\u8a72\u7269\u4ef6\u57f7\u884c\u67d0\u4e9b\u51fd\u6578\uff0c",(0,i.jsx)(e.br,{}),"\n",'\u53ef\u770b\u6210 "',(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"and also do the following with the object."})}),'"']}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val numbers = mutableListOf("one", "two", "three")\nnumbers\n    .also { println("The list elements before adding new one: $it") }\n    .add("four") \n'})}),"\n",(0,i.jsx)(e.h2,{id:"takeif-and-takeunless",children:"takeIf and takeUnless"}),"\n",(0,i.jsxs)(e.p,{children:["kotlin \u6a19\u6e96\u51fd\u5f0f\u5eab\u4e2d\u9084\u63d0\u4f9b\u4e86\u5169\u7a2e extension function\uff0c",(0,i.jsx)(e.br,{}),"\n","\u7167\u5b57\u9762\u4e0a\u76f4\u89c0\u53ef\u4ee5\u5f97\u77e5 takeIf \u6703\u5728\u7269\u4ef6\u7b26\u5408 lambda \u5167\u689d\u4ef6\u6642\u56de\u50b3\u8a72\u7269\u4ef6\uff0c\u5426\u5247\u56de\u50b3 ",(0,i.jsx)(e.code,{children:"null"}),"\uff0c\n\u800c takeUnless \u5247\u76f8\u53cd\uff0c\u6703\u5728\u7269\u4ef6\u7b26\u5408\u689d\u4ef6\u6642\u56de\u50b3 ",(0,i.jsx)(e.code,{children:"null"}),"\uff0c\u5426\u5247\u56de\u50b3\u8a72\u7269\u4ef6\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:'val number = Random.nextInt(100)\n\nval evenOrNull = number.takeIf { it % 2 == 0 }\nval oddOrNull = number.takeUnless { it % 2 == 0 }\nprintln("even: $evenOrNull, odd: $oddOrNull")\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 code chain \u4e2d\u4f7f\u7528\u9019\u5169\u500b function \u6642\uff0c\u7279\u5225\u9700\u8981\u6ce8\u610f\u56e0\u70ba\u5b83\u5011\u6709\u53ef\u80fd\u56de\u50b3 ",(0,i.jsx)(e.code,{children:"null"}),"\uff0c\n\u5728\u5f8c\u9762\u9700\u8981\u52a0\u4e0a safe call (?)\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u4f7f\u7528 takeIf\uff1a"',children:'fun displaySubstringPosition(input: String, sub: String) {\n    input.indexOf(sub).takeIf { it >= 0 }?.let {\n        println("The substring $sub is found in $input.")\n        println("Its start position is $it.")\n    }\n}\n\ndisplaySubstringPosition("010000011", "11")\ndisplaySubstringPosition("010000011", "12")\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",metastring:'title="\u4e0d\u4f7f\u7528 takeIf\uff1a"',children:'fun displaySubstringPosition(input: String, sub: String) {\n    val index = input.indexOf(sub)\n    if (index >= 0) {\n        println("The substring $sub is found in $input.")\n        println("Its start position is $index.")\n    }\n}\n\ndisplaySubstringPosition("010000011", "11")\ndisplaySubstringPosition("010000011", "12")\n'})})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>d,a:()=>r});var i=t(7294);const l={},s=i.createContext(l);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);