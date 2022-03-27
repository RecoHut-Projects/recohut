"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8511],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(r),d=o,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},23725:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},p="BigGraph",s={unversionedId:"models/biggraph",id:"models/biggraph",title:"BigGraph",description:"PyTorch-BigGraph: A Large-scale Graph Embedding System",source:"@site/docs/models/biggraph.mdx",sourceDirName:"models",slug:"/models/biggraph",permalink:"/recohut/docs/models/biggraph",editUrl:"https://github.com/sparsh-ai/recohut/docs/models/biggraph.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BiasOnly",permalink:"/recohut/docs/models/biasonly"},next:{title:"BPR",permalink:"/recohut/docs/models/bpr"}},l={},u=[],h={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"biggraph"},"BigGraph"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"PyTorch-BigGraph: A Large-scale Graph Embedding System")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/PyTorch-BigGraph"},"PyTorch BigGraph"),"\xa0handles the second approach, and we will do so as well below. Just for reference let\u2019s talk about the size aspect for a second. Graphs are usually encoded by their\xa0",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Adjacency_matrix"},"adjacency matrix"),". If you have a graph with 3,000 nodes and an edge between each node, you end up with around 10,000,000 entries in your matrix. Even if that\u2019s sparse, apparently this bursts most GPUs according to\xa0",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1609.02907"},"the paper"),"\xa0linked above. If\xa0you think about the usual graphs used in recommendation systems, you\u2019ll realize they are typically much larger than that."),(0,a.kt)("p",null,"BigGraph is made to work around the memory limit of machines, so it\u2019s completely file based. You\u2019ll have to trigger processes to create the appropriate file structure. And if you want run an example again, you\u2019ll have to delete the checkpoints."))}d.isMDXComponent=!0}}]);