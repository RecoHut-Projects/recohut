"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4499],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Object detection with OpenCV",authors:"sparsh",tags:["object detection","opencv","vision"]},l=void 0,s={permalink:"/recohut/blog/2021/10/01/object-detection-with-opencv",editUrl:"https://github.com/sparsh-ai/recohut/blog/blog/2021-10-01-object-detection-with-opencv.mdx",source:"@site/blog/2021-10-01-object-detection-with-opencv.mdx",title:"Object detection with OpenCV",description:"Face detection",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"object detection",permalink:"/recohut/blog/tags/object-detection"},{label:"opencv",permalink:"/recohut/blog/tags/opencv"},{label:"vision",permalink:"/recohut/blog/tags/vision"}],readingTime:1.565,truncated:!1,authors:[{name:"Sparsh Agarwal",title:"Principal Developer",url:"https://github.com/sparsh-ai",imageURL:"https://avatars.githubusercontent.com/u/62965911?v=4",key:"sparsh"}],frontMatter:{title:"Object detection with OpenCV",authors:"sparsh",tags:["object detection","opencv","vision"]},prevItem:{title:"Object Detection Hands-on Exercises",permalink:"/recohut/blog/2021/10/01/object-detection-hands-on-exercises"},nextItem:{title:"Object detection with YOLO3",permalink:"/recohut/blog/2021/10/01/object-detection-with-yolo3"}},d={authorsImageUrls:[void 0]},p=[{value:"<strong>Face detection</strong>",id:"face-detection",level:2},{value:"<strong>Eyes detection</strong>",id:"eyes-detection",level:2},{value:"<strong>Pedestrian detection</strong>",id:"pedestrian-detection",level:2},{value:"<strong>Car detection</strong>",id:"car-detection",level:2},{value:"<strong>Car number plate detection</strong>",id:"car-number-plate-detection",level:2}],u={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"face-detection"},(0,a.kt)("strong",{parentName:"h2"},"Face detection")),(0,a.kt)("p",null,"We will use the frontal face Haar cascade classifier model to detect faces in the given image. The following function first passes the given image into the classifier model to detect a list of face bounding boxes and then runs a loop to draw a red rectangle box around each detected face in the image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def detect_faces(fix_img):\n    face_rects = face_classifier.detectMultiScale(fix_img)\n    for (x, y, w, h) in face_rects:\n        cv2.rectangle(fix_img,\n                     (x,y),\n                     (x+w, y+h),\n                     (255,0,0),\n                     10)\n    return fix_img\n")),(0,a.kt)("h2",{id:"eyes-detection"},(0,a.kt)("strong",{parentName:"h2"},"Eyes detection")),(0,a.kt)("p",null,"The process is almost similar to the face detection process. Instead of frontal face Haar cascade, we will use the eye detection Haar cascade model."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Input image",src:n(95769).Z,width:"381",height:"223"})),(0,a.kt)("p",null,"Input image"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"detected faces and eyes in the image",src:n(50634).Z,width:"381",height:"223"})),(0,a.kt)("p",null,"detected faces and eyes in the image"),(0,a.kt)("h2",{id:"pedestrian-detection"},(0,a.kt)("strong",{parentName:"h2"},"Pedestrian detection")),(0,a.kt)("p",null,"We will use the full-body Haar cascade classifier model for pedestrian detection. We will apply this model to a video this time. The following function will run the model on each frame of the video to detect the pedestrians:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# While Loop\nwhile cap.isOpened():\n    # Read the capture\n        ret, frame = cap.read()\n    # Pass the Frame to the Classifier\n        bodies = body_classifier.detectMultiScale(frame, 1.2, 3)\n    # if Statement\n        if ret == True:\n        # Bound Boxes to Identified Bodies\n                for (x,y,w,h) in bodies:\n            cv2.rectangle(frame,\n                         (x,y),\n                         (x+w, y+h),\n                         (25,125,225),\n                         5)\n            cv2.imshow('Pedestrians', frame) \n        # Exit with Esc button\n                if cv2.waitKey(1) == 27:\n            break  \n    # else Statement\n        else:\n        break\n    \n# Release the Capture & Destroy All Windows\ncap.release()\ncv2.destroyAllWindows()\n")),(0,a.kt)("h2",{id:"car-detection"},(0,a.kt)("strong",{parentName:"h2"},"Car detection")),(0,a.kt)("p",null,"The process is almost similar to the pedestrian detection process. Again, we will use this model on a video. Instead of people Haar cascade, we will use the car cascade model."),(0,a.kt)("h2",{id:"car-number-plate-detection"},(0,a.kt)("strong",{parentName:"h2"},"Car number plate detection")),(0,a.kt)("p",null,"The process is almost similar to the face and eye detection process. We will use the car number plate cascade model."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"You can find the code ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/sparsh-ai/0D7ACA15"},"here")," on Github.")))}f.isMDXComponent=!0},50634:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-object-detection-with-opencv-untitled-1-d023975b118cde980a874199f93b9035.png"},95769:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-object-detection-with-opencv-untitled-44fc11078a43a07dc3e4ec7f84197d25.png"}}]);