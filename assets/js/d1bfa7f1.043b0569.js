"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9611],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="OpenSource Ebike display",p={unversionedId:"display/intro",id:"display/intro",title:"OpenSource Ebike display",description:"This display is OpenSource and easy to DIY, and was tested with Bafang **M500/M510/M600** EBike mid drive as also **TSDZ2** Ebike mid drive motor running our OpenSource firmware.",source:"@site/docs/display/intro.md",sourceDirName:"display",slug:"/display/intro",permalink:"/docs/display/intro",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/display/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"displaySidebar",next:{title:"Build the display (TSDZ2)",permalink:"/docs/display/build_display"}},u={},d=[{value:"Main advantages of this display",id:"main-advantages-of-this-display",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Project philosophy",id:"project-philosophy",level:2},{value:"How to build",id:"how-to-build",level:2},{value:"Operating Instructions",id:"operating-instructions",level:2},{value:"Community help",id:"community-help",level:2}],c={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"opensource-ebike-display"},"OpenSource Ebike display"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/ev_display_bluetooth_ant"},"This display is OpenSource")," and easy to DIY, and was tested with Bafang ",(0,i.kt)("strong",{parentName:"p"},"M500/M510/M600")," EBike mid drive as also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/TSDZ2_wiki/wiki"},(0,i.kt)("strong",{parentName:"a"},"TSDZ2")," Ebike mid drive motor running our OpenSource firmware"),".",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Main screen showing battery SOC, speed, motor power and battery power used (TSDZ2 version):",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{src:n(4547).Z,width:"500",height:"285"})),(0,i.kt)("p",null,"Configurations screen, showing some battery configuration options (TSDZ2 version):",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{src:n(6785).Z,width:"500",height:"327"})),(0,i.kt)("h2",{id:"main-advantages-of-this-display"},"Main advantages of this display"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"easy to build as DIY"),(0,i.kt)("li",{parentName:"ul"},"all the advanced configurations for the motor and battery are done directly on the display"),(0,i.kt)("li",{parentName:"ul"},"supports Bluetooth and ANT wireless communications"),(0,i.kt)("li",{parentName:"ul"},"supports 1.3 and 0.96 (TSDZ2 only) inches 128x64 OLED displays"),(0,i.kt)("li",{parentName:"ul"},"easy to install our firmware, includes OTA wireless updates"),(0,i.kt)("li",{parentName:"ul"},"easy to repair, can be opened easily and the electronic components are popular ones available worldwide"),(0,i.kt)("li",{parentName:"ul"},"easy to customize with some extra electronics so it can be reused on other devices"),(0,i.kt)("li",{parentName:"ul"},"if you decide to stop using it, you can dismantle and reuse the electronic components on other projects")),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"On the last years we developed OpenSource firmware for popular cheap EBike displays and we found some hard limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"some displays stop to work suddenly, are expensive and can not be repaired because they are sealed and are not meant to be opened"),(0,i.kt)("li",{parentName:"ul"},"manufacturers makes different versions over the time of the same display and the firmware need to be developed again (at least partially)"),(0,i.kt)("li",{parentName:"ul"},"on some displays is almost impossible to install our advanced firmware"),(0,i.kt)("li",{parentName:"ul"},"it is impossible to use the same display for different devices because sometimes there are small electronics differences on the communications, like some devices using UART, other CANBUS and other UART one wire")),(0,i.kt)("h2",{id:"project-philosophy"},"Project philosophy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"develop a simple display to be easy to build as DIY and repair. Try to use popular and easy to acquire parts"),(0,i.kt)("li",{parentName:"ul"},"small and discrete display"),(0,i.kt)("li",{parentName:"ul"},"show motor data and make motor configurations"),(0,i.kt)("li",{parentName:"ul"},"implement ANT+ LEV EBike wireless standard to send / integrate the motor data to cycling computer displays as Garmin Edge"),(0,i.kt)("li",{parentName:"ul"},"do not implement features as GPS navigation: instead users should use a cycling computer as Garmin Edge that implements navigation, has advanced cycling metrics and integrates natively with ANT+ LEV EBike wireless standard")),(0,i.kt)("h2",{id:"how-to-build"},"How to build"),(0,i.kt)("p",null,"See here ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/display/build_display"},"How to build the display - TSDZ2 version")),"."),(0,i.kt)("p",null,"See here ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/display/build_display-bafang_m500_M600"},"How to build the display - Bafang M500/M510/M600 version")),"."),(0,i.kt)("h2",{id:"operating-instructions"},"Operating Instructions"),(0,i.kt)("p",null,"See here How to use the display (TODO)"),(0,i.kt)("h2",{id:"community-help"},"Community help"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Forum message: ",(0,i.kt)("a",{parentName:"li",href:"https://endless-sphere.com/forums/viewtopic.php?f=7&t=113971"},"DIY OpenSource display for EVs, TSDZ2 EBike motor and Xiaomi scooter")),(0,i.kt)("li",{parentName:"ul"},"Developers: ",(0,i.kt)("a",{parentName:"li",href:"/docs/display/development/"},"tools used for development"))),(0,i.kt)("h1",{id:"other-projects"},"Other projects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"tsdz2_wireless/index.md"},"TSDZ2 wireless and fully wireless remote")," (with Garmin Edge integration for page change).")))}m.isMDXComponent=!0},4547:function(e,t,n){t.Z=n.p+"assets/images/display-1-small-4bcacb3b2e9c7f51ae4914916852bc6b.jpg"},6785:function(e,t,n){t.Z=n.p+"assets/images/display-2-small-f4af4bee4909e23bf49b2e64e2de5e3c.jpg"}}]);