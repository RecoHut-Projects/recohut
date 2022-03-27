"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8881],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=s,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],i={title:"Personalized Unexpectedness in  Recommender Systems",authors:"sparsh",tags:["personalization"]},l=void 0,c={permalink:"/recohut/blog/2021/10/01/personalized-unexpectedness-in-recommender-systems",editUrl:"https://github.com/sparsh-ai/recohut/blog/blog/2021-10-01-personalized-unexpectedness-in-recommender-systems.mdx",source:"@site/blog/2021-10-01-personalized-unexpectedness-in-recommender-systems.mdx",title:"Personalized Unexpectedness in  Recommender Systems",description:"Classical recommender systems typically provides familier items, which not only bores customer after some time, but create a critical bias problem also, generally known as filter bubble or echo chamber problem.",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"personalization",permalink:"/recohut/blog/tags/personalization"}],readingTime:2.96,truncated:!1,authors:[{name:"Sparsh Agarwal",title:"Principal Developer",url:"https://github.com/sparsh-ai",imageURL:"https://avatars.githubusercontent.com/u/62965911?v=4",key:"sparsh"}],frontMatter:{title:"Personalized Unexpectedness in  Recommender Systems",authors:"sparsh",tags:["personalization"]},prevItem:{title:"PDF to Wordcloud via Mail",permalink:"/recohut/blog/2021/10/01/pdf-to-wordcloud-via-mail"},nextItem:{title:"Predicting Electronics Resale Price",permalink:"/recohut/blog/2021/10/01/predicting-electronics-resale-price"}},m={authorsImageUrls:[void 0]},p=[{value:"Model",id:"model",level:3},{value:"Offline Experiment Results",id:"offline-experiment-results",level:3},{value:"Online A/B Test Results",id:"online-ab-test-results",level:3},{value:"Code Walkthrough",id:"code-walkthrough",level:3},{value:"References",id:"references",level:3}],d={toc:p};function u(e){var t=e.components,i=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Classical recommender systems typically provides familier items, which not only bores customer after some time, but create a critical bias problem also, generally known as ",(0,o.kt)("em",{parentName:"p"},"filter bubble")," or ",(0,o.kt)("em",{parentName:"p"},"echo chamber problem"),". "),(0,o.kt)("p",null,"To address this issue, instead of recommending best matching product all the time, we intentionally recommend a random product. For example, if a user subscribed to Netflix one month ago and watching action movies all the time. If we recommend another action movie, there is a high probability that user will click but keeping in mind the long-term user satisfaction and to address the filter bubble bias, we would recommend a comedy movie. Surprisingly, this strategy works!!"),(0,o.kt)("p",null,"The most common metric is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"diversity"))," factor but diversity only measures dispersion among recommended items. The better alternative is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"unexpectedness"))," factor. It measures deviations of recommended items from user expectations and thus captures the concept of user surprise and allows recommender systems to break from the filter bubble. The goal is to provide novel, surprising and satisfying recommendations. "),(0,o.kt)("p",null,"Including session-based information into the design of an unexpected recommender system is beneficial. For example, it is more reasonable to recommend the next episode of a TV series to the user who has just finished the first episode, instead of recommending new types of videos to that person. On the other hand, if the user has been binge-watching the same TV series in one night, it is better to recommend something different to him or her."),(0,o.kt)("h3",{id:"model"},"Model"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"/img/content-blog-raw-blog-personalized-unexpectedness-in-recommender-systems-untitled.png",src:n(62642).Z,width:"1130",height:"412"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Overview of the proposed PURS model. The base model estimates the click-through rate of certain user-item pairs, while the unexpected model captures the unexpectedness of the new recommendation as well as user perception towards unexpectedness.")),(0,o.kt)("h3",{id:"offline-experiment-results"},"Offline Experiment Results"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"/img/content-blog-raw-blog-personalized-unexpectedness-in-recommender-systems-untitled-1.png",src:n(77032).Z,width:"1213",height:"283"})),(0,o.kt)("h3",{id:"online-ab-test-results"},"Online A/B Test Results"),(0,o.kt)("p",null,"Authors conducted the online A/B test at Alibaba-Youku, a major video recommendation platform from 2019-11 to 2019-12. During the testing period, they compared the proposed PURS model with the latest production model in the company. They measured the performance using standard business metrics: ",(0,o.kt)("strong",{parentName:"p"},"VV")," (Video View, average video viewed by each user), ",(0,o.kt)("strong",{parentName:"p"},"TS")," (Time Spent, average time that each user spends on the platform), ",(0,o.kt)("strong",{parentName:"p"},"ID")," (Impression Depth, average impression through one session) and ",(0,o.kt)("strong",{parentName:"p"},"CTR")," (Click-Through-Rate, the percentage of user clicking on the recommended video). They also measure the novelty of the recommended videos using the unexpectedness and coverage measures."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Represents statistical significance at the 0.95 level.",src:n(69991).Z,width:"792",height:"66"})),(0,o.kt)("p",null,"Represents statistical significance at the 0.95 level."),(0,o.kt)("h3",{id:"code-walkthrough"},"Code Walkthrough"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: PURS is ",(0,o.kt)("em",{parentName:"p"},"implemented in Tensorflow 1.x"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unexpected attention (",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/lpworld/PURS/blob/master/model.py"},"model.py"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def unexp_attention(self, querys, keys, keys_id):\n        """\n        Same Attention as in the DIN model\n        queries:     [Batchsize, 1, embedding_size]\n        keys:        [Batchsize, max_seq_len, embedding_size]  max_seq_len is the number of keys(e.g. number of clicked creativeid for each sample)\n        keys_id:     [Batchsize, max_seq_len]\n        """\n        querys = tf.expand_dims(querys, 1)\n        keys_length = tf.shape(keys)[1] # padded_dim\n        embedding_size = querys.get_shape().as_list()[-1]\n        keys = tf.reshape(keys, shape=[-1, keys_length, embedding_size])\n        querys = tf.reshape(tf.tile(querys, [1, keys_length, 1]), shape=[-1, keys_length, embedding_size])\n\n        net = tf.concat([keys, keys - querys, querys, keys*querys], axis=-1)\n        for units in [32,16]:\n            net = tf.layers.dense(net, units=units, activation=tf.nn.relu)\n        att_wgt = tf.layers.dense(net, units=1, activation=tf.sigmoid)        # shape(batch_size, max_seq_len, 1)\n        outputs = tf.reshape(att_wgt, shape=[-1, 1, keys_length], name="weight")  #shape(batch_size, 1, max_seq_len)\n        scores = outputs\n        scores = scores / (embedding_size ** 0.5)       # scale\n        scores = tf.nn.softmax(scores)\n        outputs = tf.matmul(scores, keys)    #(batch_size, 1, embedding_size)\n        outputs = tf.reduce_sum(outputs, 1, name="unexp_embedding")   #(batch_size, embedding_size)\n        return outputs\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unexpected metric calculation (",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/lpworld/PURS/blob/master/train.py"},"train.py"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def unexpectedness(sess, model, test_set):\n    unexp_list = []\n    for _, uij in DataInput(test_set, batch_size):\n        score, label, user, item, unexp = model.test(sess, uij)\n        for index in range(len(score)):\n            unexp_list.append(unexp[index])\n    return np.mean(unexp_list)\n")),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2106.02771v1.pdf"},"https://arxiv.org/pdf/2106.02771v1.pdf")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lpworld/PURS"},"https://github.com/lpworld/PURS"))))}u.isMDXComponent=!0},77032:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-personalized-unexpectedness-in-recommender-systems-untitled-1-a53c9776871c615a07a1ed66b415a0b0.png"},69991:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-personalized-unexpectedness-in-recommender-systems-untitled-2-f913dc7e387c8c255ac6d22c86606a7d.png"},62642:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-personalized-unexpectedness-in-recommender-systems-untitled-22ce831b716e0985a764afbaf921c052.png"}}]);