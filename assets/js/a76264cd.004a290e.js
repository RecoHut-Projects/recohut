"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5058],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={},l="Text Similarity",c={unversionedId:"concept-extras/nlp/text-similarity",id:"concept-extras/nlp/text-similarity",title:"Text Similarity",description:"/img/content-concepts-raw-nlp-text-similarity-img.png",source:"@site/docs/concept-extras/nlp/text-similarity.mdx",sourceDirName:"concept-extras/nlp",slug:"/concept-extras/nlp/text-similarity",permalink:"/recohut/docs/concept-extras/nlp/text-similarity",editUrl:"https://github.com/sparsh-ai/recohut/docs/concept-extras/nlp/text-similarity.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text Generation",permalink:"/recohut/docs/concept-extras/nlp/text-generation"},next:{title:"Text Style Transfer",permalink:"/recohut/docs/concept-extras/nlp/text-style-transfer"}},d={},u=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Models</strong>",id:"models",level:2},{value:"BERT",id:"bert",level:3},{value:"Bag-of-words",id:"bag-of-words",level:3},{value:"DeepRank",id:"deeprank",level:3},{value:"FAISS",id:"faiss",level:3},{value:"Similarity Measures",id:"similarity-measures",level:3},{value:"<strong>Process flow</strong>",id:"process-flow",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Semantic Relation Estimation",id:"semantic-relation-estimation",level:3},{value:"Finding Hardware Parts in Warehouse",id:"finding-hardware-parts-in-warehouse",level:3},{value:"Image + Text Similarity",id:"image--text-similarity",level:3},{value:"Text Recommendation",id:"text-recommendation",level:3}],m={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-similarity"},"Text Similarity"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"/img/content-concepts-raw-nlp-text-similarity-img.png",src:n(28846).Z,width:"960",height:"720"})),(0,r.kt)("h2",{id:"introduction"},(0,r.kt)("strong",{parentName:"h2"},"Introduction")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Definition:")," Text similarity has to determine how 'close' two pieces of text are both in surface closeness (lexical similarity) and meaning (semantic similarity)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Applications:")," Duplicate document detection, text clustering, product recommendations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scope:")," No scope decided yet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tools:")," Sentence Transformer Library, Universal Sentence Encoder Model (TFHub), Scikit-learn")),(0,r.kt)("h2",{id:"models"},(0,r.kt)("strong",{parentName:"h2"},"Models")),(0,r.kt)("h3",{id:"bert"},"BERT"),(0,r.kt)("p",null,"Use transfer learning to fine-tune a BERT encoder. This encoder will work as a feature extractor. e.g.  the most common version of BERT convert any given text into a numeric vector of length 768 (this vector is also known as contextual embedding)."),(0,r.kt)("h3",{id:"bag-of-words"},"Bag-of-words"),(0,r.kt)("p",null,"Extract features using models like TF-IDF, CountVectorizer."),(0,r.kt)("h3",{id:"deeprank"},"DeepRank"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://arxiv.org/abs/1710.05649"},"DeepRank: A New Deep Architecture for Relevance Ranking in Information Retrieval. arXiv, 2017."))),(0,r.kt)("h3",{id:"faiss"},"FAISS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://arxiv.org/abs/1702.08734"},"Billion-scale similarity search with GPUs. arXiv, 2017."))),(0,r.kt)("p",null,"Faiss is a library for efficient similarity search and clustering of dense vectors."),(0,r.kt)("h3",{id:"similarity-measures"},"Similarity Measures"),(0,r.kt)("p",null,"L1 (Manhatten distance), L2 (Euclidean distance), Hinge Loss for Triplets."),(0,r.kt)("h2",{id:"process-flow"},(0,r.kt)("strong",{parentName:"h2"},"Process flow")),(0,r.kt)("p",null,"Step 1: Collect Text Data"),(0,r.kt)("p",null,"Fetch the raw text dataset into a directory."),(0,r.kt)("p",null,"Step 2: Encoder Training/Fine-tuning"),(0,r.kt)("p",null,"Download the pre-trained models if available (e.g. BERT model) or train the model from scratch (e.g. TF-IDF model). After training/fine-tuning the model, we will save it as a feature extractor for later use."),(0,r.kt)("p",null,"Step 3: Text Vectorization"),(0,r.kt)("p",null,"Now, we will use the encoder (prepared in step 2) to encode the text (prepared in step 1). We will save the feature vector of each image as an array in a directory. After processing, we will save these embeddings for later use."),(0,r.kt)("p",null,"Step 4: Metadata and Indexing"),(0,r.kt)("p",null,"We will assign a unique id to each text document and create dictionaries to locate information of these documents: 1) Document id to document name dictionary, 2) Document id to document feature vector dictionary, and 3) (optional) Document id to metadata product id dictionary. We will also create a Document id to document feature vector indexing. Then we will save these dictionaries and index objects for later use."),(0,r.kt)("p",null,"Step 5: UAT Testing"),(0,r.kt)("p",null,"Wrap the model inference engine in API for client testing. We will receive a text document from the user, encode it with our text encoder, find TopK similar vectors using Indexing object, and retrieve the text documents (and metadata) using dictionaries. We send these documents (and metadata) back to the user."),(0,r.kt)("p",null,"Step 6: Deployment"),(0,r.kt)("p",null,"Deploy the model on cloud or edge as per the requirement."),(0,r.kt)("p",null,"Step 7: Documentation"),(0,r.kt)("p",null,"Prepare the documentation and transfer all assets to the client."),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("h3",{id:"semantic-relation-estimation"},"Semantic Relation Estimation"),(0,r.kt)("p",null,"To maintain a level of coherence and similarity among various letters and speeches, a model was built that will help in assessing this document similarity. In approach 1, TF-IDF with Latent semantic indexing was used to extract features and cosine similarity as the distance metric. In approach 2, BERT with PCA was used for feature extraction and 3 distance measures - L1, L2, and cosine, for similarity calculation. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Semantic-Similarity-085a0be7e70f4dec99a06c07cca3b12c"},"this")," notion."),(0,r.kt)("h3",{id:"finding-hardware-parts-in-warehouse"},"Finding Hardware Parts in Warehouse"),(0,r.kt)("p",null,"There are millions of hardware items (e.g. 0.5mm steel wire grade q195) in the warehouse and customer generally asks for items in natural language (e.g. grade195 steel wire with 0.5mm thickness). A text similarity system was built using an ensemble of 3 Bag-of-words based Count vectorizer model with different types of tokenization process and n-gram range. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Finding-Hardware-Parts-in-Warehouse-922EE-fa28cf6931a94fa89ad2d4d2183f6bcc"},"this")," notion."),(0,r.kt)("h3",{id:"image--text-similarity"},"Image + Text Similarity"),(0,r.kt)("p",null,"Use the textual details and images of products, find the exact similar product among different groups. Around 35 GB of retail product images was scraped and used to build the system. Checkout the notion ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Image-Text-Similarity-fe5130324ae14ab48a30c93444348f4a"},"here"),"."),(0,r.kt)("h3",{id:"text-recommendation"},"Text Recommendation"),(0,r.kt)("p",null,"For the given BRM text, recommend top-5 GAO text. We used universal sentence encoder to encode the text and calculated cosine similarity within group. Then an item-based recommender model was used to find most suitable top-K candidates in GAO based on the interaction history. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Text-Recommendation-System-351c57bdb60e40da8531bf19c867314a"},"this")," notion."))}p.isMDXComponent=!0},28846:function(e,t,n){t.Z=n.p+"assets/images/content-concepts-raw-nlp-text-similarity-img-528d822a1bdc6f9e204efa92c96e64b5.png"}}]);