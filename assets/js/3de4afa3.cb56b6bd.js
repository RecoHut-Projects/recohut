"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4745],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56561:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={},c="SDNE",l={unversionedId:"models/sdne",id:"models/sdne",title:"SDNE",description:"Structural Deep Network Embedding",source:"@site/docs/models/sdne.mdx",sourceDirName:"models",slug:"/models/sdne",permalink:"/recohut/docs/models/sdne",editUrl:"https://github.com/sparsh-ai/recohut/docs/models/sdne.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SASRec",permalink:"/recohut/docs/models/sasrec"},next:{title:"SGL",permalink:"/recohut/docs/models/sgl"}},u={},p=[{value:"Abstract",id:"abstract",level:2},{value:"References",id:"references",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdne"},"SDNE"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Structural Deep Network Embedding")),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Network embedding is an important method to learn low-dimensional representations of vertexes in networks, aiming to capture and preserve the network structure. Almost all the existing network embedding methods adopt shallow models. However, since the underlying network structure is complex, shallow models cannot capture the highly non-linear network structure, resulting in sub-optimal network representations. Therefore, how to find a method that is able to effectively capture the highly non-linear network structure and preserve the global and local structure is an open yet important problem. To solve this problem, in this paper we propose a Structural Deep Network Embedding method, namely SDNE. More specifically, we first propose a semi-supervised deep model, which has multiple layers of non-linear functions, thereby being able to capture the highly non-linear network structure. Then we propose to exploit the first-order and second-order proximity jointly to preserve the network structure. The second-order proximity is used by the unsupervised component to capture the global network structure. While the first-order proximity is used as the supervised information in the supervised component to preserve the local network structure. By jointly optimizing them in the semi-supervised deep model, our method can preserve both the local and global network structure and is robust to sparse networks. Empirically, we conduct the experiments on five real-world networks, including a language network, a citation network and three social networks. The results show that compared to the baselines, our method can reconstruct the original network significantly better and achieves substantial gains in three applications,")),(0,i.kt)("figure",null,(0,i.kt)("p",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:"https://github.com/recohut/graph-embeddings/raw/3ae14e9b7e26389dede9d33d96465a674b8acd21/docs/_images/C662128_1.png"}),(0,i.kt)("figcaption",null,"The framework of the semi-supervised deep model of SDNE.")))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shenweichen/GraphEmbedding"},"https://github.com/shenweichen/GraphEmbedding")))}m.isMDXComponent=!0}}]);