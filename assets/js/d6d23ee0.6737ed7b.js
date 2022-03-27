"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4179],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=c,d=f["".concat(a,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:c,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45360:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(67294),c=r(39960),o=r(63725),s=r(86010),i="cardContainer_woeA",a="cardContainerLink_iOSj",u="cardTitle_pNjP",l="cardDescription_qC_k",p=r(13919),f=r(95999);function m(e){var t=e.href,r=e.children,o=(0,s.Z)("card margin-bottom--lg padding--lg",i,t&&a);return t?n.createElement(c.Z,{href:t,className:o},r):n.createElement("div",{className:o},r)}function d(e){var t=e.href,r=e.icon,c=e.title,o=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:c},r," ",c),n.createElement("div",{className:(0,s.Z)("text--truncate",l),title:o},o))}function y(e){var t=e.item,r=(0,o.Wl)(t);return n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,f.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function h(e){var t,r=e.item,c=(0,p.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:c,title:r.label,description:null==s?void 0:s.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(g,{item:e}))})))}},77448:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(87462),c=r(63366),o=(r(67294),r(3905)),s=r(45360),i=r(63725),a=["components"],u={},l="Success Stories",p={unversionedId:"concept-extras/success-stories/success-stories",id:"concept-extras/success-stories/success-stories",title:"Success Stories",description:"In the following sections, we will learn more about the following success stories:",source:"@site/docs/concept-extras/success-stories/success-stories.mdx",sourceDirName:"concept-extras/success-stories",slug:"/concept-extras/success-stories/",permalink:"/recohut/docs/concept-extras/success-stories/",editUrl:"https://github.com/sparsh-ai/recohut/docs/concept-extras/success-stories/success-stories.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scalarization",permalink:"/recohut/docs/concept-extras/scalarization"},next:{title:"1mg Prod2vec",permalink:"/recohut/docs/concept-extras/success-stories/1mg-prod2vec"}},f={},m=[],d={toc:m};function y(e){var t=e.components,r=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"success-stories"},"Success Stories"),(0,o.kt)("p",null,"In the following sections, we will learn more about the following success stories:"),(0,o.kt)(s.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);