"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6401],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27699:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),l=["components"],a={},s="Wireless remote",c={unversionedId:"display/TSDZ2 wireless project/TSDZ2_wireless_remote",id:"display/TSDZ2 wireless project/TSDZ2_wireless_remote",title:"Wireless remote",description:"Schematic",source:"@site/docs/display/TSDZ2 wireless project/TSDZ2_wireless_remote.md",sourceDirName:"display/TSDZ2 wireless project",slug:"/display/TSDZ2 wireless project/TSDZ2_wireless_remote",permalink:"/docs/display/TSDZ2 wireless project/TSDZ2_wireless_remote",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/display/TSDZ2 wireless project/TSDZ2_wireless_remote.md",tags:[],version:"current",frontMatter:{},sidebar:"displaySidebar",previous:{title:"TSDZ2 wireless board",permalink:"/docs/display/TSDZ2 wireless project/TSDZ2_wireless"},next:{title:"Mobile app operation",permalink:"/docs/display/TSDZ2 wireless project/android_app_operation"}},p={},u=[{value:"Schematic",id:"schematic",level:2},{value:"How to build wireless remote",id:"how-to-build-wireless-remote",level:2},{value:"Firmware Installation",id:"firmware-installation",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wireless-remote"},"Wireless remote"),(0,i.kt)("h2",{id:"schematic"},"Schematic"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[![] (ebike_remote_wireless-schematic.png)] (ebike_remote_wireless-schematic.png)")),(0,i.kt)("h2",{id:"how-to-build-wireless-remote"},"How to build wireless remote"),(0,i.kt)("p",null,"You will need to acquire the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-Dongle"},"Wireless board - nRF52840 Nordic USB Dongle")),": costs 10\u20ac and can be bought in many online shops.",(0,i.kt)("br",null),(0,i.kt)("img",{src:r(70089).Z,width:"347",height:"244"}),(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VLCD5 Keypad"),': costs 10\u20ac, this is the keypad from the TSDZ2 original display. Can be bought in many online shops like EBay".',(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"![](VLCD5_keypad.png)"),(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CR2032 coin cell"),": costs 1\u20ac, can be bought in any local shop or on EBay or other online shops."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("br",null),"![](cr2032.png)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))),(0,i.kt)("h2",{id:"firmware-installation"},"Firmware Installation"),(0,i.kt)("p",null,"Once you have put the board assembled you are now ready to program the wireless bootloader.\nfollow the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/TSDZ2_wireless/tree/master/EBike_wireless_bootloader"},"here"),".\nWith the bootloader installed you can now program the Over the Air (OTA) updates for the wireless remote located ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/TSDZ2_wireless/releases"},"here")))}d.isMDXComponent=!0},70089:function(e,t,r){t.Z=r.p+"assets/images/NRF52840-0b417dc04f8f74eaf03676dae8f9b607.png"}}]);