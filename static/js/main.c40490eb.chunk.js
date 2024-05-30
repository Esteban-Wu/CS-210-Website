(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{34:function(e,s,t){},37:function(e,s,t){},72:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(9),i=t.n(c),n=(t(34),t(20)),o=t(27),l=t.n(o),r=(t(37),t(38),t(5)),d=t.n(r),j=t(8),m=t.p+"static/media/cool_video.921db372.mp4",b=t.p+"static/media/David.5253e9d8.mp4",h=t(0);class x extends a.Component{render(){if(!this.props.data)return null;this.props.data.project,this.props.data.github,this.props.data.description;return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsxs)("nav",{className:"navbar",id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",style:{backgroundColor:"black",fontFamily:"Marion"},children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)(j.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:750,children:"Mercedes-Benz AI Palette"})}),Object(h.jsx)("li",{children:Object(h.jsx)(j.Link,{className:"link",activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:750,children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(j.Link,{className:"link",activeClass:"active",to:"prototype",spy:!0,smooth:!0,offset:0,duration:750,children:"Prototype"})}),Object(h.jsx)("li",{children:Object(h.jsx)(j.Link,{className:"link",activeClass:"active",to:"process",spy:!0,smooth:!0,offset:0,duration:750,children:"Process"})}),Object(h.jsx)("li",{children:Object(h.jsx)(j.Link,{className:"link",activeClass:"active",to:"team",spy:!0,smooth:!0,offset:0,duration:750,children:"Team"})})]})]}),Object(h.jsxs)("div",{className:"row banner",children:[Object(h.jsx)("div",{className:"video-container",children:Object(h.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"background-video",playsInline:!0,children:Object(h.jsx)("source",{src:m,type:"video/mp4"})})}),Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)(d.a,{bottom:!0,children:Object(h.jsx)("h1",{className:"responsive-headline",children:"Mercedes-Benz AI Palette"})}),Object(h.jsx)(d.a,{bottom:!0,duration:1200,children:Object(h.jsx)("h3",{children:"Elevating the car experience with GenAI personas"})}),Object(h.jsx)("hr",{}),Object(h.jsx)(d.a,{bottom:!0,duration:2e3,children:Object(h.jsxs)("a",{href:"https://github.com/cs210/2024-Mercedes-1",className:"button btn github-btn",children:[Object(h.jsx)("i",{className:"fa fa-github"}),"GitHub"]})})]})]}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)(j.Link,{className:"link",activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:750,children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}var p=x;class u extends a.Component{render(){return this.props.data?Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(d.a,{bottom:!0,children:Object(h.jsx)("div",{className:"twelve columns body-text",children:Object(h.jsxs)("ul",{className:"copyright",children:[Object(h.jsx)("li",{children:"\xa9 Copyright 2024 Team KERBY"}),Object(h.jsxs)("li",{children:["Design by"," ",Object(h.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})})}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)(j.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:750,children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})}):null}}var O=u,g=t(28),v=t.n(g);t(70),t(71);class N extends a.Component{constructor(e){super(e),this.state={slideIndex:0}}render(){if(!this.props.data)return null;const e={arrows:!1,dots:!0,infinite:!0,speed:1500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,pauseOnDotsHover:!0,customPaging:function(e){return Object(h.jsx)("a",{children:Object(h.jsx)("img",{src:this.state.slideIndex===e?"images/dot_filled.png":"images/dot_empty.png"})})}.bind(this),beforeChange:(e,s)=>this.setState({slideIndex:s})};return Object(h.jsx)("section",{id:"about",className:"about-background section-background",children:Object(h.jsx)(d.a,{duration:1e3,children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns main-col body-text",children:[Object(h.jsx)("h2",{style:{fontFamily:"Marrion",fontSize:32},children:"About"}),Object(h.jsxs)(v.a,{...e,style:{paddingTop:60,paddingBottom:100},children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"seven columns main-col body-text",children:Object(h.jsxs)("p",{children:["The Mercedes-Benz AI Palette is a set of ",Object(h.jsx)("span",{className:"bold-body-text red",children:"conversational AI personas"})," that a driver can interact with. We crafted three personas \u2014 Football Commentator, Old Sport, and Art & Nature \u2014 to mimic the speech and personality of renowned figures like Peter Drury, Frank Sinatra, and David Attenborough. Powered by GenAI, these personas engage in ",Object(h.jsx)("span",{className:"bold-body-text red",children:"dialogue"}),", react to ",Object(h.jsx)("span",{className:"bold-body-text red",children:"events"})," such as turns, accelerations, and offer ",Object(h.jsx)("span",{className:"bold-body-text red",children:"persona-specific interactions"}),"."]})}),Object(h.jsx)("div",{className:"five columns",style:{height:"220px"},children:Object(h.jsx)("div",{className:"floating-image-container",children:Object(h.jsx)("img",{className:"floating-image",src:"images/about_visual1.png",alt:"Visual"})})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"seven columns main-col body-text",children:Object(h.jsxs)("p",{children:["We built our personas in an app on the ",Object(h.jsx)("span",{className:"bold-body-text red",children:"Android"})," platform using",Object(h.jsx)("span",{className:"bold-body-text red",children:" conversational LLMs"})," and",Object(h.jsx)("span",{className:"bold-body-text red",children:" text-to-speech"})," synthesis. ",Object(h.jsx)("span",{className:"bold-body-text red",children:"Fine-tuned"})," on specific datasets for each real-world figure, our models capture their distinct style, voice, and tone. This ensures that conversations feel authentic and sound like a real friend."]})}),Object(h.jsx)("div",{className:"five columns",style:{height:"220px"},children:Object(h.jsx)("div",{className:"floating-image-container",children:Object(h.jsx)("img",{className:"floating-image",src:"images/about_visual2.png",alt:"Visual"})})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"seven columns main-col body-text",children:Object(h.jsxs)("p",{children:["Each persona not only engages in conversations with the driver but also reacts to various",Object(h.jsx)("span",{className:"bold-body-text red",children:" driving events detected with sensors"})," mounted on a physical minicar. We aim to implement two events (honking and acceleration) as high-priority goals in our MVP, with three additional events (turning, parking, maintaining distance from other vehicles) set as stretch goals."]})}),Object(h.jsx)("div",{className:"five columns",style:{height:"350px"},children:Object(h.jsx)("div",{className:"floating-image-container",children:Object(h.jsx)("img",{className:"floating-image",src:"images/about_visual3.jpeg",alt:"Visual"})})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"seven columns main-col body-text",children:Object(h.jsxs)("p",{children:["Additionally, each persona offers unique features: the Football Commentator provides updates on",Object(h.jsx)("span",{className:"bold-body-text red",children:" football news"}),", the Old Sport",Object(h.jsx)("span",{className:"bold-body-text red",children:" introduces new songs"}),", and Art & Nature utilizes computer vision to",Object(h.jsx)("span",{className:"bold-body-text red",children:" narrate landscapes"})," and ",Object(h.jsx)("span",{className:"bold-body-text red",children:" respond to the driver\u2019s gestures"}),"."]})}),Object(h.jsx)("div",{className:"five columns",style:{height:"220px"},children:Object(h.jsx)("div",{className:"floating-image-container",children:Object(h.jsx)("img",{className:"floating-image",src:"images/about_visual6.png",alt:"Visual"})})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"seven columns main-col body-text",children:Object(h.jsxs)("p",{children:["To optimize performance within the vehicle, we strive to ",Object(h.jsx)("span",{className:"bold-body-text red",children:"minimize the system size"})," while maintaining the aforementioned functionality. Specifically, our ",Object(h.jsx)("span",{className:"bold-body-text red",children:"LLMs and text-to-speech models are limited to 2B parameters"}),", suitable for embedded systems. Additionally, we utilize ",Object(h.jsx)("span",{className:"bold-body-text red",children:"LangChain"})," for conversation retention and",Object(h.jsx)("span",{className:"bold-body-text red",children:" RAG"})," for domain-specific knowledge insertion to enhance conversation quality."]})}),Object(h.jsx)("div",{className:"five columns",style:{height:"220px"},children:Object(h.jsx)("div",{className:"floating-image-container",children:Object(h.jsx)("img",{className:"floating-image",src:"images/about_visual5.png",alt:"Visual"})})})]})]})]})})})})}}var f=N;class y extends a.Component{getRandomColor(){let e="#";for(let s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}render(){return this.props.data?Object(h.jsx)("section",{id:"prototype",className:"section-background prototype-background",children:Object(h.jsxs)(d.a,{left:!0,duration:1300,children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"seven columns main-col",style:{height:"320px"},children:Object(h.jsx)("div",{className:"floating-image-container",children:Object(h.jsx)("img",{className:"floating-image",src:"images/about_visual2.png",alt:"Visual"})})}),Object(h.jsxs)("div",{className:"five columns body-text",children:[Object(h.jsx)("h2",{style:{fontFamily:"Marrion",fontSize:32,marginBottom:40},children:"Prototype"}),Object(h.jsx)("p",{children:"Try out our most recent prototype of the Mercedes-Benz AI Palette on your tablet."}),Object(h.jsx)("row",{children:Object(h.jsxs)("ul",{className:"social",children:[Object(h.jsxs)("a",{href:"https://drive.google.com/file/d/1YcotKdVsUu_imWog_RkpUcDjcdlmt9bd/view?usp=sharing",className:"button btn primary-btn",children:[Object(h.jsx)("i",{className:"fa fa-download"}),Object(h.jsx)("span",{className:"button-text",children:"Download"})]}),Object(h.jsxs)("a",{href:"https://github.com/cs210/Mercedes1-2024-App",className:"button btn secondary-btn",children:[Object(h.jsx)("i",{className:"fa fa-github"}),Object(h.jsx)("span",{className:"button-text",children:"GitHub"})]})]})})]})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns",style:{height:"320px",marginTop:"80px"},children:[Object(h.jsx)("p",{children:"Watch our use case simulation video to see the Mercedes car drive through a lush green forest, narrated by David Attenborough. This video showcases the immersive capabilities and user experience enhancements made possible by our AI-driven personas."}),Object(h.jsx)("div",{style:{width:"100%"},children:Object(h.jsx)("video",{controls:!0,loop:!0,playsInline:!0,style:{width:"100%"},children:Object(h.jsx)("source",{src:b,type:"video/mp4"})})})]})})]})}):null}}var w=y;class k extends a.Component{render(){return this.props.data?Object(h.jsx)("section",{id:"team",className:"section-background team-background",children:Object(h.jsx)(r.Fade,{bottom:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"twelve columns collapsed body-text center-text",children:Object(h.jsx)("h2",{style:{fontFamily:"Marrion",fontSize:32,marginBottom:"48px"},children:"Team"})}),Object(h.jsxs)("div",{class:"row",className:"twelve columns collapsed body-text center-text",style:{marginBottom:"200px"},children:[Object(h.jsx)("div",{className:"one columns"}),Object(h.jsxs)("div",{className:"two columns center-text",children:[Object(h.jsx)("div",{className:"profile-pic-container",children:Object(h.jsx)("img",{src:"images/katherine.jpeg",alt:"Profile pic",className:"profile-pic"})}),Object(h.jsx)("p",{children:"Katherine C. '24"})]}),Object(h.jsxs)("div",{className:"two columns center-text",children:[Object(h.jsx)("div",{className:"profile-pic-container",children:Object(h.jsx)("img",{src:"images/esteban.jpeg",alt:"Profile pic",className:"profile-pic"})}),Object(h.jsx)("p",{children:"Esteban W. '24"})]}),Object(h.jsxs)("div",{className:"two columns center-text",children:[Object(h.jsx)("div",{className:"profile-pic-container",children:Object(h.jsx)("img",{src:"images/ryan.jpg",alt:"Profile pic",className:"profile-pic"})}),Object(h.jsx)("p",{children:"Ryan K. '24"})]}),Object(h.jsxs)("div",{className:"two columns center-text",children:[Object(h.jsx)("div",{className:"profile-pic-container",children:Object(h.jsx)("img",{src:"images/will.jpeg",alt:"Profile pic",className:"profile-pic"})}),Object(h.jsx)("p",{children:"Will F. '25"})]}),Object(h.jsxs)("div",{className:"two columns center-text",children:[Object(h.jsx)("div",{className:"profile-pic-container",children:Object(h.jsx)("img",{src:"images/yannie.png",alt:"Profile pic",className:"profile-pic"})}),Object(h.jsx)("p",{children:"Yannie T. '24"})]}),Object(h.jsx)("div",{className:"one columns"})]})]})})}):null}}var C=k;class P extends a.Component{render(){return this.props.data?Object(h.jsx)("section",{id:"process",className:"section-background process-background",children:Object(h.jsxs)(d.a,{left:!0,duration:1e3,distance:"40px",children:[Object(h.jsx)("div",{className:"row",style:{marginBottom:"30px"},children:Object(h.jsxs)("div",{className:"twelve columns collapsed body-text center-text",children:[Object(h.jsx)("h2",{style:{fontFamily:"Marrion",fontSize:32},children:"Process"}),Object(h.jsx)("p",{children:"Here are the steps we took in our design and development process."})]})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_rocket.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"Product Proposal"}),Object(h.jsx)("p",{className:"body-text",children:"We wrote a product requirements document (PRD) and presented it to our Mercedes liaisons."}),Object(h.jsxs)("a",{href:"documents/prd.pdf",className:"custom-button btn primary-btn",children:[Object(h.jsx)("i",{className:"fa fa-file-text"}),Object(h.jsx)("span",{className:"button-text-process",children:"Proposal (PDF)"})]})]}),Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_announce.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"HQ Presentation"}),Object(h.jsx)("p",{className:"body-text",children:"We traveled to the Mercedes-Benz HQ in Germany to present our idea and initial prototype."}),Object(h.jsxs)("a",{href:"documents/germany_presentation.pdf",className:"custom-button btn primary-btn",children:[Object(h.jsx)("i",{className:"fa fa-desktop"}),Object(h.jsx)("span",{className:"button-text-process",children:"Slides (PDF)"})]})]}),Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_charts.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"System Diagram"}),Object(h.jsx)("p",{className:"body-text",children:"We created a system diagram to illustrate how our various components interact with each other."}),Object(h.jsxs)("a",{href:"images/diagram.png",className:"custom-button btn primary-btn",children:[Object(h.jsx)("i",{className:"fa fa-picture-o"}),Object(h.jsx)("span",{className:"button-text-process",children:"Diagram (PNG)"})]})]}),Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_coins.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"Contract of Deliverables"}),Object(h.jsx)("p",{className:"body-text",children:"We identified our key performance indicators and listed what we will deliver by the end of Spring quarter."}),Object(h.jsxs)("a",{href:"documents/cod.pdf",className:"custom-button btn primary-btn",children:[Object(h.jsx)("i",{className:"fa fa-file-text"}),Object(h.jsx)("span",{className:"button-text-process",children:"Deliverables (PDF)"})]})]})]}),Object(h.jsxs)("div",{className:"row process-icon",children:[Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_person.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"Real Customer Profile"}),Object(h.jsx)("p",{className:"body-text",children:"We connected with two people who are our target customers and created profiles for them."}),Object(h.jsxs)("a",{href:"https://www.canva.com/design/DAGDUmHMKT4/vKJZDT8G63vg2QXlM3Hb_g/view?utm_content=DAGDUmHMKT4&utm_campaign=designshare&utm_medium=link&utm_source=editor",className:"custom-button btn primary-btn",children:[Object(h.jsx)("i",{className:"fa fa-user"}),Object(h.jsx)("span",{className:"button-text-process",children:"Profile (Canva)"})]})]}),Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_rocket2.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"MVP"}),Object(h.jsx)("p",{className:"body-text",children:"We built our minimum viable prototype using Android, Python, Firebase, Arduino, and a minicar."}),Object(h.jsxs)("a",{href:"#",className:"custom-button btn secondary-btn",children:[Object(h.jsx)("i",{className:"fa fa-bullhorn"}),Object(h.jsx)("span",{className:"button-text-process",children:"Coming Soon"})]})]}),Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_support.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"Product Launch"}),Object(h.jsx)("p",{className:"body-text",children:"We launched our product to external users, measured our KPIs, and improved our MVP based on feedback."}),Object(h.jsxs)("a",{href:"#",className:"custom-button btn secondary-btn",children:[Object(h.jsx)("i",{className:"fa fa-bullhorn"}),Object(h.jsx)("span",{className:"button-text-process",children:"Coming Soon"})]})]}),Object(h.jsxs)("div",{className:"three columns center-text",style:{marginTop:"30px"},children:[Object(h.jsx)("div",{className:"process-icon",children:Object(h.jsx)("img",{src:"images/icon_announce2.svg",alt:"Icon"})}),Object(h.jsx)("p",{className:"bold-body-text",children:"Demo Video"}),Object(h.jsx)("p",{className:"body-text",children:"Watch this video for a concise overview of the Mercedes-Benz AI Palette and to witness it in action."}),Object(h.jsxs)("a",{href:"#",className:"custom-button btn secondary-btn",children:[Object(h.jsx)("i",{className:"fa fa-bullhorn"}),Object(h.jsx)("span",{className:"button-text-process",children:"Coming Soon"})]})]})]})]})}):null}}var D=P,T=t.p+"static/media/splash_button.22850e0c.png";var S=function(e){return Object(h.jsx)("div",{className:"splash-screen",children:Object(h.jsx)("img",{src:T,alt:"Splash Button",className:"splash-button",onClick:e.handler})})},A=t(29);class I extends a.Component{constructor(e){super(e),this.state={splash:!0,foo:"bar",resumeData:{},fade:""},this.handlerOnClick=this.handlerOnClick.bind(this),n.a.initialize("UA-110570651-1"),n.a.pageview(window.location.pathname)}handlerOnClick(){this.setState({fade:"fade-out"}),setTimeout((()=>{this.setState({splash:!1,fade:"fade-in"})}),1e3)}getResumeData(){l.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}componentDidMount(){this.getResumeData()}render(){return Object(h.jsx)("div",{className:"App ".concat(this.state.fade),children:this.state.splash?Object(h.jsx)(S,{handler:this.handlerOnClick}):Object(h.jsxs)("div",{children:[Object(h.jsx)(A.a,{url:"https://calendly.com/kerwy/user-testing",rootElement:document.getElementById("root"),text:"Book a Test Session",textColor:"#ffffff",color:"#BC2C22"}),Object(h.jsx)(p,{data:this.state.resumeData.main}),Object(h.jsx)(f,{data:this.state.resumeData.main}),Object(h.jsx)(w,{data:this.state.resumeData.resume}),Object(h.jsx)(D,{data:this.state.resumeData.portfolio}),Object(h.jsx)(C,{data:this.state.resumeData.main}),Object(h.jsx)(O,{data:this.state.resumeData.main})]})})}}var M=I;var _=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((s=>{let{getCLS:t,getFID:a,getFCP:c,getLCP:i,getTTFB:n}=s;t(e),a(e),c(e),i(e),n(e)}))};i.a.render(Object(h.jsx)(M,{}),document.getElementById("root")),_()}},[[72,1,2]]]);
//# sourceMappingURL=main.c40490eb.chunk.js.map