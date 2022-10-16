"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8774],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3238:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),s=["components"],i={},l="TSDZ2 wireless board",c={unversionedId:"display/TSDZ2 wireless project/TSDZ2_wireless",id:"display/TSDZ2 wireless project/TSDZ2_wireless",title:"TSDZ2 wireless board",description:"You will need to acquire the following components:",source:"@site/docs/display/TSDZ2 wireless project/TSDZ2_wireless.md",sourceDirName:"display/TSDZ2 wireless project",slug:"/display/TSDZ2 wireless project/TSDZ2_wireless",permalink:"/docs/display/TSDZ2 wireless project/TSDZ2_wireless",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/display/TSDZ2 wireless project/TSDZ2_wireless.md",tags:[],version:"current",frontMatter:{},sidebar:"displaySidebar",previous:{title:"Remote Control Power Analysis",permalink:"/docs/display/TSDZ2 wireless project/Power_Analysis"},next:{title:"Wireless remote",permalink:"/docs/display/TSDZ2 wireless project/TSDZ2_wireless_remote"}},u={},p=[{value:"Schematic",id:"schematic",level:2},{value:"Firmware Installation",id:"firmware-installation",level:2}],d={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tsdz2-wireless-board"},"TSDZ2 wireless board"),(0,a.kt)("p",null,"You will need to acquire the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-Dongle"},"Wireless board - nRF52840 Nordic USB Dongle")),": costs 10\u20ac and can be bought in many online shops.",(0,a.kt)("br",null),(0,a.kt)("img",{src:r(89).Z,width:"347",height:"244"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"60V -> 5V power board - EBike buck dd7818ta 80V -> 5V 1A"),': costs 4\u20ac and can be bought in many online shops like EBay, just search for "EBike buck dd7818ta 80". Other DC-DC converters can be used, like the ',(0,a.kt)("a",{parentName:"li",href:"https://uk.farnell.com/tracopower/tec-2-4811wi/dc-dc-converter-5v-0-4a/dp/2854928"},"Traco power TEC-2-4811WI"),". Please note that any DC converter that you choose must have a voltage input of at least 60V and a 5V output.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("img",{src:r(2075).Z,width:"250",height:"139"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("img",{src:r(4882).Z,width:"197",height:"153"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Power switch BTS4140N"),": costs 2\u20ac, can be bought on EBay or other shops.",(0,a.kt)("br",null),(0,a.kt)("img",{src:r(4253).Z,width:"246",height:"205"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transistor BSP296"),": costs 2\u20ac, can be bought on EBay or other shops.",(0,a.kt)("br",null),(0,a.kt)("img",{src:r(4577).Z,width:"300",height:"300"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TSDZ2 display extension cable"),": costs 6\u20ac, can be bought on EBay or other shops.",(0,a.kt)("br",null),(0,a.kt)("img",{src:r(6956).Z,width:"200",height:"200"}),(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("h2",{id:"schematic"},"Schematic"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(3916).Z},(0,a.kt)("img",{src:r(1689).Z,width:"2305",height:"942"}))),(0,a.kt)("h2",{id:"firmware-installation"},"Firmware Installation"),(0,a.kt)("p",null,"Once you have put the board assembled you are now ready to program the wireless bootloader.\nfollow the instructions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/TSDZ2_wireless/tree/master/EBike_wireless_bootloader"},"here"),".\nWith the bootloader installed you can now program the Over the Air (OTA) updates for the wireless motor controller located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/TSDZ2_wireless/releases"},"here")),(0,a.kt)("p",null,"To program the motor configuration and control the TSDZ2, download and install the android app from here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/TSDZ2_wireless/releases"},"https://github.com/OpenSourceEBike/TSDZ2_wireless/releases")))}m.isMDXComponent=!0},3916:function(e,t,r){t.Z=r.p+"assets/files/TSDZ2_wireless-schematic-cd8e7f3da5ee055d7bbd6d1827c6e7bd.png"},4253:function(e,t,r){t.Z=r.p+"assets/images/4140-2031e98d4138c0f53ce36f69b2c9ab89.png"},2075:function(e,t,r){t.Z=r.p+"assets/images/60V_DC_DC-b1d0979fd402cc07a3d548bd1c2e7367.png"},89:function(e,t,r){t.Z=r.p+"assets/images/NRF52840-0b417dc04f8f74eaf03676dae8f9b607.png"},6956:function(e,t,r){t.Z=r.p+"assets/images/TSDZ2_cable-331468cb07fff1d8e3a1ec29a7a1d106.png"},1689:function(e,t,r){t.Z=r.p+"assets/images/TSDZ2_wireless-schematic-cd8e7f3da5ee055d7bbd6d1827c6e7bd.png"},4577:function(e,t,r){t.Z=r.p+"assets/images/bsp296-0c28f3b9f0cec4557690d3d44b347ca3.png"},4882:function(e,t,r){t.Z=r.p+"assets/images/tec-363b40979cfe03f19d1c1aead4e95d18.png"}}]);