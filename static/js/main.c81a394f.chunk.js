(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/KariyaPark_Trim.e530bfbb.mp4"},113:function(e,t,a){e.exports=a.p+"static/media/bali_art.0284986a.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/lighthouse_digital_art.2e64c933.jpg"},120:function(e,t,a){e.exports=a.p+"static/media/samurai_digital_art.573bdde3.jpg"},121:function(e,t,a){e.exports=a.p+"static/media/storefront_digital_art.cf319cfa.jpg"},124:function(e,t,a){},125:function(e,t,a){},174:function(e,t,a){e.exports=a.p+"static/media/linkedin.ebf40b1e.svg"},175:function(e,t,a){e.exports=a.p+"static/media/instagram.11e06a0b.svg"},176:function(e,t,a){e.exports=a.p+"static/media/youtube.fbae9fa0.svg"},180:function(e,t,a){e.exports=a.p+"static/media/hard_work.7ef8d771.jpg"},181:function(e,t,a){e.exports=a.p+"static/media/Clevelandstreet.afe9b549.jpg"},182:function(e,t,a){e.exports=a.p+"static/media/mewithmask.e6eae8a9.jpg"},183:function(e,t,a){e.exports=a.p+"static/media/SamuraiLapse.699e7492.mp4"},184:function(e,t,a){e.exports=a.p+"static/media/Paper-note.0f51cdf4.svg"},185:function(e,t,a){e.exports=a.p+"static/media/RutvikPandya.77b10d0f.pdf"},186:function(e,t,a){e.exports=a.p+"static/media/jardinbotanique.70a7c7ad.jpeg"},190:function(e,t,a){e.exports=a.p+"static/media/view1_crop_art.cf28e2d2.jpg"},191:function(e,t,a){e.exports=a.p+"static/media/view1_art.bede5538.jpg"},192:function(e,t,a){e.exports=a.p+"static/media/rue_art.784a5bf9.jpg"},193:function(e,t,a){e.exports=a.p+"static/media/car_street_art.8cf89446.jpg"},194:function(e,t,a){e.exports=a.p+"static/media/car_street_crop_art.b60fa5ad.jpg"},195:function(e,t,a){e.exports=a.p+"static/media/arcade_art.19ff3fdc.jpeg"},196:function(e,t,a){e.exports=a.p+"static/media/arcade_crop_art.cbcd2c49.jpeg"},197:function(e,t,a){e.exports=a.p+"static/media/disney_art.bd5cf09a.jpg"},198:function(e,t,a){e.exports=a.p+"static/media/disney_crop_art.a63367b2.jpg"},199:function(e,t,a){e.exports=a.p+"static/media/cherry_art.65ef29d8.jpg"},200:function(e,t,a){e.exports=a.p+"static/media/cherry_crop_art.5e10ebc2.jpg"},203:function(e,t,a){e.exports=a(476)},207:function(e,t,a){},208:function(e,t,a){},472:function(e,t,a){},473:function(e,t,a){e.exports=a.p+"static/media/creative.52d6165e.jpg"},474:function(e,t,a){},476:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),c=(a(71),a(10)),o=a(17),s=a(16),m=a(15),u=(a(207),a(44)),d=(a(124),a(34)),p=a(29);var h=function(){return r.a.createElement("footer",{className:"mt-5 position"},r.a.createElement(u.a,{fluid:!0},r.a.createElement(d.a,{className:"border-top border-grey justify-content-between p-3"},r.a.createElement(p.a,{className:"p-0 d-flex justify-content-end"},"Made by Rutvik using React."))))},g=a(8),b=(a(208),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={maxIsVisible:0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=r.a.Children.count(this.props.children),a=0;this.interval=setInterval((function(){++a>t&&clearInterval(e.interval),e.setState({maxIsVisible:a})}),this.delay)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.transitionDuration;return r.a.createElement("div",{className:this.props.className},r.a.Children.map(this.props.children,(function(a,n){return r.a.createElement("div",{className:e.props.childClassName,style:{transition:"opacity ".concat(t,"ms, transform ").concat(t,"ms"),transform:"translateY(".concat(e.state.maxIsVisible>n?0:20,"px)"),opacity:e.state.maxIsVisible>n?1:0}},a)})))}},{key:"delay",get:function(){return this.props.delay||50}},{key:"transitionDuration",get:function(){return this.props.transitionDuration||400}}]),a}(n.Component)),f=a(480);var E=function(e){return r.a.createElement(b,null,r.a.createElement(f.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"justify-content-end py-5"},r.a.createElement(p.a,{md:8,sm:12},r.a.createElement(b,null,e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&r.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))))},y=a(53),v=(a(125),a(122)),w=(a(209),a(481)),k=a(70),x=a(482);var T=function(e){return e.link.includes("youtube")?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,r.a.createElement(x.a,{show:e.show,onHide:function(){return e.setModalVisible(!1)}},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,e.title)),r.a.createElement(x.a.Body,null,r.a.createElement("iframe",{width:"470",height:"315",src:e.link,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement(x.a.Footer,null,r.a.createElement(w.a,{variant:"dark",onClick:function(){return e.setModalVisible(!1)}},"Close"))))):e.link.includes("_art")?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,r.a.createElement(x.a,{show:e.show,fullscreen:!0,onHide:function(){return e.setFullscreen(!0),void e.setModalVisible(!1)}},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,e.title)),r.a.createElement(x.a.Body,null,r.a.createElement("img",{width:"100%",height:"100%",src:e.imgModal,className:"img-in-modal hover-lg"})),r.a.createElement(x.a.Footer,null,r.a.createElement(w.a,{variant:"dark",onClick:function(){return e.setModalVisible(!1)}},"Close"))))):void 0};var N=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}}),a=Object(n.useState)(!1),i=Object(v.a)(a,2),l=i[0],c=i[1],o=Object(n.useState)(!0),s=Object(v.a)(o,2),m=s[0],u=s[1];return e.link.includes("youtube")?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a.div,{className:"r-card-info mt-5 ",style:t},r.a.createElement("p",{className:"r-card-title font-weight-bolder"},e.title),r.a.createElement("p",{className:"r-card-sub-title font-weight-bolder"},e.subTitle),r.a.createElement(w.a,{variant:"dark",onClick:function(){return c(!0)}},"View")),r.a.createElement(T,{title:e.title,link:e.link,show:l,imgModal:e.imgModal,setModalVisible:c})):e.link.includes("_art")?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a.div,{className:"r-card-info mt-5 ",style:t},r.a.createElement("p",{className:"r-card-title font-weight-bolder"},e.title),r.a.createElement("p",{className:"r-card-sub-title font-weight-bolder"},e.subTitle),r.a.createElement("a",{href:"",target:"_blank"}),r.a.createElement(w.a,{variant:"dark",onClick:function(){return c(!0)}},"View")),r.a.createElement(T,{title:e.title,subTitle:e.subTitle,link:e.link,imgModal:e.imgModal,show:l,setModalVisible:c,fullscreen:m,setFullscreen:u,imgSrc:e.imgSrc})):r.a.createElement(k.a.div,{className:"r-card-info mt-5 ",style:t},r.a.createElement("p",{className:"r-card-title font-weight-bolder"},e.title),r.a.createElement("p",{className:"r-card-sub-title font-weight-bolder"},e.subTitle),r.a.createElement("a",{href:e.link,target:"_self",rel:"noopener noreferrer"},"View"))},S=a(173),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={item:e.item},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{className:"border-radius-small hover r-card-video",videoSrc:this.props.item.imgSrc,pausedOverlay:r.a.createElement("img",{src:this.props.item.thumbnail}),loadingOverlay:r.a.createElement("div",{className:"loading-overlay"},r.a.createElement("div",{className:"loading-spinner"}))})}}]),a}(r.a.Component);var j=function(e){return e.item.imgSrc.includes(".mp4")?r.a.createElement("div",{className:"d-inline-block r-card",onClick:function(t){return e.click(e.item)}},r.a.createElement(b,null,r.a.createElement(I,{id:"lapse-video",item:{title:e.item.title,subTitle:e.item.subTitle,imgSrc:e.item.imgSrc,thumbnail:e.item.thumbnail,link:e.item.link}}),e.item.selected&&r.a.createElement(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))):e.item.imgSrc.includes("_art")?r.a.createElement("div",{className:"d-inline-block r-card",onClick:function(t){return e.click(e.item)}},r.a.createElement(b,null,r.a.createElement("img",{className:"border-radius-small hover r-card-video",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,imgSrc:e.item.imgSrc,imgModal:e.item.imgModal}))):r.a.createElement("div",{className:"d-inline-block r-card",onClick:function(t){return e.click(e.item)}},r.a.createElement(b,null,r.a.createElement("img",{className:"border-radius-small hover r-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})))},_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(y.a)(n.state.items);a[e].selected=!0,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(j,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:e.items?e.items:{}},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{fluid:!0},r.a.createElement(d.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component),M=a(478),A=a(477),C=a(37),O=a(174),B=a.n(O),D=a(175),P=a.n(D),F=a(176),V=a.n(F);var L=function(){return r.a.createElement(M.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement(M.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(M.a.Collapse,{id:"navbar-toggle"},r.a.createElement(p.a,{className:"p-0 d-flex",md:1,sm:12},r.a.createElement("a",{href:"https://www.linkedin.com/in/rutvik-pandya-uw/",target:"_blank"},r.a.createElement("img",{className:"r-svg",src:B.a})),r.a.createElement("a",{href:"https://www.instagram.com/_rutvikp_/",target:"_blank"},r.a.createElement("img",{className:"r-svg",src:P.a})),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCy_GTm-p1nITBNO4uhydR8w",target:"_blank"},r.a.createElement("img",{className:"r-svg",src:V.a}))),r.a.createElement(A.a,{className:"ml-auto"},r.a.createElement(C.b,{className:"nav-link",to:"/home"},"Home"),r.a.createElement(C.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(C.b,{className:"nav-link",to:"/art"},"My Art"),r.a.createElement(C.b,{className:"nav-link",to:"/experience"},"Experience"),r.a.createElement(C.b,{className:"nav-link",to:"/contact"},"Contact Me"))))},R=a(180),q=a.n(R),H=a(181),W=a.n(H),z=a(182),U=a.n(z);var Q=function(e){return r.a.createElement("div",{name:"test"},r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(b,null,r.a.createElement(E,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(_,{items:[{id:0,title:"Work Experience",subTitle:"Professional life",imgSrc:q.a,link:"my-app/#/experience",selected:!1},{id:1,title:"My Art",subTitle:"Check out my art!",link:"my-app/#/art",imgSrc:W.a,selected:!1},{id:2,title:"About Me",subTitle:"Get to know me!",link:"my-app/#/about",imgSrc:U.a,selected:!1}]})),r.a.createElement(h,null)))};a(472);var J=function(e){return r.a.createElement(u.a,{fluid:!0},r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(p.a,{md:8},e.children)))},Y=(a(473),a(183)),$=a.n(Y),G=a(84),K=a.n(G),X=a(85),Z=a.n(X);var ee=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(E,{title:e.title,style:{color:"white"}}),r.a.createElement(J,null,r.a.createElement(_,{items:[{id:0,title:"Photography",subTitle:"Some of my clicks!\ud83d\udcf8",imgSrc:Z.a,link:"/art/photography",selected:!1},{id:1,title:"Drone Videos",subTitle:"Check out my drone videos!\ud83d\ude81",link:"/art/drone",imgSrc:K.a,selected:!1},{id:2,title:"Digital Art",subTitle:"Some of my art work from procreate!\ud83d\udd8a",imgSrc:$.a,link:"/art/digital-art",selected:!1}]})),r.a.createElement(h,null)))},te=a(112),ae=a.n(te),ne=a(113),re=a.n(ne);var ie=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(E,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(J,null,r.a.createElement(_,{items:[{id:0,title:"Ontario, Canada",subTitle:"My First Drone Video!",imgSrc:ae.a,link:"https://www.youtube.com/embed/gsNeFNn2wpU",selected:!1},{id:1,title:"Qu\xe9bec, Canada",subTitle:"My Second Drone Video!",link:"https://www.youtube.com/embed/6JLM8AKBMuQ",imgSrc:K.a,selected:!1},{id:2,title:"Bali, Indonesia",subTitle:"Coming Fall 2022",imgSrc:re.a,link:"/art/drone",selected:!1}]})),r.a.createElement(h,null)))},le=a(184),ce=a.n(le),oe=a(185),se=a.n(oe);var me=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(E,{title:e.title}),r.a.createElement(J,null,r.a.createElement(b,null,r.a.createElement("h2",{className:"display-5 font-weight-bolder"}," Resume "),r.a.createElement("a",{href:se.a,target:"_blank"},r.a.createElement("img",{className:"r-svg-large",src:ce.a})),r.a.createElement("hr",{size:"50"}),r.a.createElement("h2",{className:"display-5 font-weight-bolder"}," ANSYS Inc. "),r.a.createElement("h4",null,"Software Developer | Intern | April 2021 - August 2021 "),r.a.createElement("h5",{className:"font-weight-lighter"}," Ansys was the company that brought forth my realization and interest towards Software Development. Working with the Account and Store team, I was able to get a wide range of experiences ranging from Angular to Microsoft Azure. Using these technologies I was able to help refactor portions of the admin website into reusable components. This included multiple analytics tables to various modals used to purchase additional products from Ansys. I also got to experience the customer service aspect of the business as I worked hand-in-hand with developers to add their applications to the Ansys catalog. I was able to bring the efficiency of applications added to store from 3-4 apps/month to around 14-15 apps/month while improving customer satisfaction."),r.a.createElement("hr",{size:"50"}),r.a.createElement("br",null),r.a.createElement("h2",{className:"display-5 font-weight-bolder"}," Electrovaya Inc. "),r.a.createElement("h4",null," Firmware Engineer | Intern | September 2020 - December 2020 "),r.a.createElement("h5",{className:"font-weight-lighter"},' Through my many internships, I tried to apply to a variety of jobs to get a better understanding of all the aspects of Mechatronics. At Electrovaya, I was also able to experience working on the Firmware side. Here, I was given the opportunity to work on a project that could help reduce the cost of the testing equipment used in the end of line battery testing. I designed a 2-layer PCB in Eagle that used "CAN Bus Logger with SD-Card" as a base, connects externally using a DB9 connecter, has micro-fit headers to allow further application and interaction with the MCU (STM32F405) and a coin-cell battery holder that maintains the internal RTC when the module is powered off. This reduced the cost of the testing equipment from $200USD(previously used Wilke CAN-Bus I/O Modules) to $25USD a piece. I also modified the presently used testing equipment to send messages at various baud rates, allowing for the testing capabilities on many different batteries. I also had the opportunity to work with LabVIEW and design a tool that can receive and transmit CAN data to batteries allowing employees to monitor and test the batteries in a much faster and precise manner. The tool allowed for logging, error code identification, obtaining the V/I/T state of the battery as well as a search functionality for thousands of incoming messages.'),r.a.createElement("hr",{size:"50"}),r.a.createElement("br",null),r.a.createElement("h2",{className:"display-5 font-weight-bolder"}," Bendix Commercial Vehicle System LLC. "),r.a.createElement("h4",null," Mechatronics Product Developer | Intern | January 2020 - April 2020 "),r.a.createElement("h5",{className:"font-weight-lighter"}," At Bendix I had the chance to work on the assembly of an Air-Board that represented Bendix's brake systems, employed by over 70% of trucks in North America. I also had the chance to design and make a PCB in PADS Layout that used an Arduino Pro Mini, NeoPixel Lights to promote STEM outreach for an event designed for students. I cut an assembled 40 of these pieces improving my circuit design, soldering, coding and planning skills."),r.a.createElement("hr",{size:"50"}),r.a.createElement("br",null),r.a.createElement("h2",{className:"display-5 font-weight-bolder"}," Loopio Inc. "),r.a.createElement("h4",null," Automation Engineer | Intern | April 2019 - August 2019 "),r.a.createElement("h5",{className:"font-weight-lighter"}," At Loopio, I gained a better appreciation for testing in a Software environment as it can help design a very robust and efficent product. I had the opportunity to design 50+ automation scripts with Selenium and PHP to test various core features of the product. I maintained Bitbucket pipelines everyday to ensure 100% of the automation test suite was successful. I also had the chance to implement FullStory (third-party analytics software) to allow for analysts to monitor the website without accessing private customer data. One of the most interesting portions of the term was when I got to work on re-factoring React code. Additionally, I worked on resolving 50+ bugs and necessary design tweaks on the website."),r.a.createElement("hr",{size:"50"}),r.a.createElement("br",null),r.a.createElement("h2",{className:"display-5 font-weight-bolder"}," Yulio Technologies Inc."),r.a.createElement("h4",null," QA/Developer | Intern | April 2019 - August 2019 & September 2018 - December 8 "),r.a.createElement("h5",{className:"font-weight-lighter"}," As my first internship, I was able to gain a lot of experience working at a company here. At Yulio I got experience using Django to creat charts that gathered data on the website's activity based on thousand of active users, I added multiple features and fixed multiple bugs/issues found in the company's website. On the project side of things, I prepared and ran multiple meetings as a bridge between marketing and developers to introduce new fatures and realeases from both sides"),r.a.createElement("hr",{size:"50"}),r.a.createElement("br",null))),r.a.createElement(h,null)))},ue=a(186),de=a.n(ue);a(474);var pe=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(E,{title:e.title}),r.a.createElement(J,null,r.a.createElement(b,null,r.a.createElement("img",{className:"profile-size hover",src:de.a}),r.a.createElement("h6",null," Hi! "),r.a.createElement("br",null),r.a.createElement("h5",null,"I am a soon to be graduate from the Universtity of Waterloo! I love trying out new things and have thus increased my hobbies to a ridiculous amount! Some of my many hobbies include photography, digital art, creating/editing drone videos and riding around my longboard. "),r.a.createElement("br",null),r.a.createElement("h4",null,"I have had a wide variety of experiences from my past internships. In the past, I have worked as an automation engineer at Loopio, Inc. where I gained a better appreciation for the required robustness of applications. Most recently, I have worked as a Software Developer at Ansys, Inc. where I had the opportunity to work on the Account and Store side."))),r.a.createElement(h,null)))},he=a(201),ge=a(483),be=a(187),fe=a(189),Ee=a(188);var ye=function(e){return r.a.createElement(b,null,r.a.createElement(ge.a,{class:"contact-form",onSubmit:function(e){e.preventDefault(),he.a.sendForm("service_gzhb5uj","template_7vhlsjd",e.target,"user_fDU55kSpP1o6o3Rv7ddp4").then((function(e){return console.log(e.text),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Send Request")),r.a.createElement(x.a.Body,null,"Successfully sent!"))}),(function(e){return console.log(e.text),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Send Request")),r.a.createElement(x.a.Body,null,"Error: ",e.text,";"))})),e.target.reset()}},r.a.createElement(be.a,{className:"mt-5",controlId:"headerInfo"},r.a.createElement(fe.a,null,"Email Address"),r.a.createElement(Ee.a,{type:"email",id:"email",name:"email",placeholder:"Your email here.",required:!0}),r.a.createElement(fe.a,null,"Subject"),r.a.createElement(Ee.a,{type:"subject",id:"subject",name:"subject",placeholder:"Subject",required:!0})),r.a.createElement(be.a,{className:"mt-5",controlId:"messageBody"},r.a.createElement(fe.a,null,"Message "),r.a.createElement(Ee.a,{as:"textarea",id:"message",name:"message",placeholder:"Message",rows:3,required:!0})),r.a.createElement(w.a,{variant:"dark",type:"submit",value:"Send"},"Submit")))};var ve=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(E,{title:e.title}),r.a.createElement(J,null,r.a.createElement(b,null,r.a.createElement("h5",{className:"font-weight-lighter"}," If you wish to contact me, you can reach me right from here! I am also open to drone filming work!"),r.a.createElement("br",null),r.a.createElement("h6",null,"My Personal Email:"),r.a.createElement("a",{href:"mailto:rutvik.pandyaa@gmail.com"},"rutvik.pandyaa@gmail.com"),r.a.createElement("br",null),r.a.createElement("h6",null,"My Personal Phone: "),r.a.createElement("h7",null,"(647) 390-6311")),r.a.createElement(ye,null)),r.a.createElement(h,null)))},we=a(190),ke=a.n(we),xe=a(191),Te=a.n(xe),Ne=a(192),Se=a.n(Ne),Ie=a(193),je=a.n(Ie),_e=a(194),Me=a.n(_e),Ae=a(195),Ce=a.n(Ae),Oe=a(196),Be=a.n(Oe),De=a(197),Pe=a.n(De),Fe=a(198),Ve=a.n(Fe),Le=a(199),Re=a.n(Le),qe=a(200),He=a.n(qe);var We=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(E,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(J,null,r.a.createElement(_,{items:[{id:0,title:"Rue du Petit Champlain",subTitle:"Qu\xe9bec City, Qu\xe9bec",imgSrc:Z.a,imgModal:Se.a,link:"_art",selected:!1},{id:1,title:"Jardin Botanique",subTitle:"Montreal, Canada",imgSrc:ke.a,imgModal:Te.a,link:"_art",selected:!1},{id:2,title:"Fairmont Le Ch\xe2teau Frontenac",subTitle:"Qu\xe9bec City, Qu\xe9bec",imgSrc:Me.a,imgModal:je.a,link:"_art",selected:!1},{id:3,title:"The Arcade",subTitle:"Cleveland, Ohio",imgSrc:Be.a,imgModal:Ce.a,link:"_art",selected:!1},{id:4,title:"Walt Disney World\xae Resort",subTitle:"Orlando, Florida",imgSrc:Ve.a,imgModal:Pe.a,link:"_art",selected:!1},{id:5,title:"Cherry Blossom",subTitle:"Toronto, Ontario",imgSrc:He.a,imgModal:Re.a,link:"_art",selected:!1}]})),r.a.createElement(h,null)))},ze=a(119),Ue=a.n(ze),Qe=a(120),Je=a.n(Qe),Ye=a(121),$e=a.n(Ye);var Ge=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"p-0 ",fluid:!0},r.a.createElement(L,null),r.a.createElement(E,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(J,null,r.a.createElement(_,{items:[{id:0,title:"Lighthouse",imgSrc:Ue.a,imgModal:Ue.a,link:"_art",selected:!1},{id:1,title:"Samurai",imgSrc:Je.a,imgModal:Je.a,link:"_art",selected:!1},{id:2,title:"Store Front",subTitle:"Work In Progress",imgSrc:$e.a,imgModal:$e.a,link:"_art",selected:!1}]})),r.a.createElement(h,null)))},Ke=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Rutvik",headerLinks:[{title:"Home",path:"/home"},{title:"About",path:"/about"},{title:"Experience",path:"/experience"},{title:"Art",path:"/art"},{title:"Contact",path:"/contact"}],home:{title:"Rutvik Pandya ",subTitle:"All About Me",text:"Explore my page and learn more about me!"},about:{title:"About Me"},experience:{title:"Experience"},contact:{title:"Contact Me"},art:{title:"My Art"},photography:{title:"Photography",subTitle:"Some of my clicks!"},drone:{title:"Drone Videos",subTitle:"Filmed on DJI Mavic Mini 2",text:"Edited by me in Premiere Pro"},digitalArt:{title:"Digital Art",subTitle:"Using Procreate"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,null,r.a.createElement(g.b,{exact:!0,path:"/"},r.a.createElement(g.a,{to:"/home"})),r.a.createElement(g.b,{path:"/home",exact:!0,render:function(){return r.a.createElement(Q,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(g.b,{path:"/about",exact:!0,render:function(){return r.a.createElement(pe,{title:e.state.about.title,subTitle:e.state.about.subTitle,text:e.state.about.text})}}),r.a.createElement(g.b,{path:"/contact",exact:!0,render:function(){return r.a.createElement(ve,{title:e.state.contact.title,subTitle:e.state.contact.subTitle,text:e.state.contact.text})}}),r.a.createElement(g.b,{path:"/experience",exact:!0,render:function(){return r.a.createElement(me,{title:e.state.experience.title,subTitle:e.state.experience.subTitle,text:e.state.experience.text})}}),r.a.createElement(g.b,{path:"/art",exact:!0,render:function(){return r.a.createElement(ee,{title:e.state.art.title,subtitle:e.state.art.subTitle,text:e.state.art.text})}}),r.a.createElement(g.b,{path:"/art/drone",exact:!0,render:function(){return r.a.createElement(ie,{title:e.state.drone.title,subTitle:e.state.drone.subTitle,text:e.state.drone.text})}}),r.a.createElement(g.b,{path:"/art/photography",exact:!0,render:function(){return r.a.createElement(We,{title:e.state.photography.title,subTitle:e.state.photography.subTitle,text:e.state.photography.text})}}),r.a.createElement(g.b,{path:"/art/digital-art",exact:!0,render:function(){return r.a.createElement(Ge,{title:e.state.digitalArt.title,subTitle:e.state.digitalArt.subTitle,text:e.state.digitalArt.text})}}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(475);l.a.render(r.a.createElement("div",null,r.a.createElement(Ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/MontTremblantFinalNoBars_Trim.ecb72d5d.mp4"},85:function(e,t,a){e.exports=a.p+"static/media/rue_crop_art.74351ea7.jpg"}},[[203,1,2]]]);
//# sourceMappingURL=main.c81a394f.chunk.js.map