"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[999],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1856:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),l=["components"],a={},s="TSDZ2 Wireless Project",p={unversionedId:"display/TSDZ2 wireless project/index",id:"display/TSDZ2 wireless project/index",title:"TSDZ2 Wireless Project",description:"Background",source:"@site/docs/display/TSDZ2 wireless project/index.md",sourceDirName:"display/TSDZ2 wireless project",slug:"/display/TSDZ2 wireless project/",permalink:"/docs/display/TSDZ2 wireless project/",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/display/TSDZ2 wireless project/index.md",tags:[],version:"current",frontMatter:{},sidebar:"displaySidebar",previous:{title:"Using the stlinkv2",permalink:"/docs/display/stlinkv2"},next:{title:"Installing the bootloader",permalink:"/docs/display/TSDZ2 wireless project/bootloader"}},c={},u=[{value:"Background",id:"background",level:2},{value:"EBike wireless controller",id:"ebike-wireless-controller",level:2},{value:"Mobile app",id:"mobile-app",level:2},{value:"Fully wireless and wired remotes",id:"fully-wireless-and-wired-remotes",level:2},{value:"Garmin Edge / cycling GPS displays",id:"garmin-edge--cycling-gps-displays",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Operating Instructions",id:"operating-instructions",level:2},{value:"Community help",id:"community-help",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tsdz2-wireless-project"},"TSDZ2 Wireless Project"),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The project objective is to provide wireless to the TSDZ2 mid drive motor, free and OpenSource, making it support GPS bike computers, a mobile app and a wireless remote. The goal is to emulate and improve upon commercially available wirelessly controlled ebikes like the  ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=F43oqj1Zlww"},"Specialized Turbo Levo Ebike"),"."),(0,o.kt)("p",null,"The project utilizes the proven and popular ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenSourceEBike/TSDZ2_wiki/wiki"},"TSDZ2 Flexible Open Source firmware"))," (original developed to be used with the SW102 or 850C/860C displays running our OpenSource firmware)."),(0,o.kt)("h2",{id:"ebike-wireless-controller"},"EBike wireless controller"),(0,o.kt)("p",null,"We have developed a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/display/TSDZ2%20wireless%20project/ebike_wireless_controller"},"DIY EBike wireless controller"))," to connect to the motor controller, on the display connector. With it alone, you can power on/off the TSDZ2 motor, increase/decrease assist levels and see the Ebike battery level.",(0,o.kt)("br",null),"\nThis wireless controller implements Bluetooth and ANT, is easy to build and costs only 25\u20ac in materials."),(0,o.kt)("p",null,"Picture of our DIY EBike wireless controller:",(0,o.kt)("br",null),"\n",(0,o.kt)("img",{src:r(5522).Z,width:"350",height:"171"}),(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(5025).Z,width:"350",height:"291"}),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"mobile-app"},"Mobile app"),(0,o.kt)("p",null,"We also developed a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/display/TSDZ2%20wireless%20project/android_app_operation"},"mobile app"))," and with that you can control the TSDZ2 motor as also change his configurations - there are over 100 configuration options that can be customized to fit any user's particular requirements!"),(0,o.kt)("p",null,"Screenshots of our mobile app:",(0,o.kt)("br",null),"\n",(0,o.kt)("img",{alt:"android",src:r(8714).Z,width:"250",height:"542"})," ",(0,o.kt)("img",{alt:"android",src:r(3271).Z,width:"257",height:"542"})),(0,o.kt)("h2",{id:"fully-wireless-and-wired-remotes"},"Fully wireless and wired remotes"),(0,o.kt)("p",null,"We have also developed a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"remote/build_remotes"},"DIY fully wireless remote")),". There is also more simple wired remote if you prefer.",(0,o.kt)("br",null),"\nWith this remotes, is possible to power on/off the TSDZ2 motor, increase/decrease assist levels, display Ebike battery level and more.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"The wireless remote can also connect to a GPS display like a Garmin Edge to change data pages. It costs only 20\u20ac in materials and uses a coin battery that will work for more than 2 years."),(0,o.kt)("p",null,"Pictures of our DIY fully wireless remote button with connection for brake sensors:",(0,o.kt)("br",null),"\n",(0,o.kt)("img",{src:r(9795).Z,width:"350",height:"228"}),(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(6376).Z,width:"350",height:"228"}),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"garmin-edge--cycling-gps-displays"},"Garmin Edge / cycling GPS displays"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/display/TSDZ2%20wireless%20project/ebike_wireless_controller"},"EBike wireless controller")," implements the ANT+ LEV (ANT+ EBike) protocol standard and with that, the Garmin Edge or other cycling GPS displays that support this standard, support natively the EBike. We tested on Garmin Edge 830 and Edge 1000 and you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"see and change the assist level using the touch screen"),(0,o.kt)("li",{parentName:"ul"},"see other EBike information like the battery SOC, speed, etc")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"remote/build_remotes"},"wireless remote")," implements ANT+ CONTROLS protocol standard and a click on the menu button will change the Garmin Edge page.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"The following image shows a page on Garmin Edge 830, showing EBike battery SOC, assist level and speed. It also shows other information like the graph of the rider heart rate:",(0,o.kt)("br",null),"\n",(0,o.kt)("img",{src:r(2545).Z,width:"350",height:"418"}),(0,o.kt)("br",null)),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The steps for building the wireless motor controller and the remote control are described below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/display/TSDZ2%20wireless%20project/ebike_wireless_controller"},"How to build the TSDZ2 EBike Wireless Controller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/display/TSDZ2%20wireless%20project/remote/build_remotes"},"How to build a remote"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"operating-instructions"},"Operating Instructions"),(0,o.kt)("p",null,"You are now ready to enjoy your new wirelessly controlled ebike."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/display/TSDZ2%20wireless%20project/wireless_motor_operation"},"EBike wireless controller operating instructions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/display/TSDZ2%20wireless%20project/android_app_operation"},"Mobile app operating instructions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/display/TSDZ2%20wireless%20project/operation"},"Remote operating instructions"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"community-help"},"Community help"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forum message: ",(0,o.kt)("a",{parentName:"li",href:"https://endless-sphere.com/forums/viewtopic.php?t=106346"},"EBike wireless standard (like Specialized Turbo Levo) - OpenSource")),(0,o.kt)("li",{parentName:"ul"},"Developers: see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenSourceEBike/TSDZ2_wireless/blob/master/EBike_wireless_remote/documentation/README.md"},"documentation"))))}m.isMDXComponent=!0},5025:function(e,t,r){t.Z=r.p+"assets/images/3d_printed_box-2-b826764193c886549d7fb26b30e33ee5.png"},5522:function(e,t,r){t.Z=r.p+"assets/images/3d_printed_box-e4fe1ba56ed503bfa552c8081b69670a.png"},8714:function(e,t,r){t.Z=r.p+"assets/images/android1-small-caa866357fedc9647a0314c212e96d4c.jpg"},3271:function(e,t,r){t.Z=r.p+"assets/images/android2-small-887000c3a039d28ebfe127e1ca3318aa.jpg"},2545:function(e,t,r){t.Z=r.p+"assets/images/garmin_edge_830-01-350x-60d38b21fd06bc2f991d23fbd46b37f6.jpg"},9795:function(e,t,r){t.Z=r.p+"assets/images/ebike_wireless_remote-01-350x-4efadb220e9291c828873cb5644d5644.jpg"},6376:function(e,t,r){t.Z=r.p+"assets/images/ebike_wireless_remote-03-350x-3c0732289d8af9779cba303f1023af02.jpg"}}]);