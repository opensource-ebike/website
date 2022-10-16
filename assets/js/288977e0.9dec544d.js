"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6871],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,h=c["".concat(s,".").concat(m)]||c[m]||f[m]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4377:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],l={},s=void 0,p={unversionedId:"tsdz2/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3",id:"tsdz2/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3",title:"How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3",description:"Please follow the next steps to be able to flash the firmware.",source:"@site/docs/tsdz2/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3.md",sourceDirName:"tsdz2",slug:"/tsdz2/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3",permalink:"/docs/tsdz2/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"How-to-calibrate-the-torque-sensor",permalink:"/docs/tsdz2/How-to-calibrate-the-torque-sensor"},next:{title:"How-to-improve-motor-heat-dissipation",permalink:"/docs/tsdz2/How-to-improve-motor-heat-dissipation"}},u={},f=[{value:"Flash firmware on Linux",id:"flash_firmware_on_linux",level:2}],c={toc:f};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Please follow the next steps to be able to flash the firmware."),(0,o.kt)("p",null,"_","_","TOC","_","_"),(0,o.kt)("h1",{id:"buy_stlinkv2_clone"},"Buy STLinkV2 clone"),(0,o.kt)("p",null,"To be able to flash the firmware (both for TSDZ2 motor controller and\nKT-LCD3), you will need the cheap clone of STLinkV2, that you can buy on\nEBay as cheap as 2.3\u20ac."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING:")," we found that some STLinkV2 clones can\\'t flash very well\nthe motor controller while other do it well. A good idea is to buy like\n3 different STLinkV2 clones, from different shops."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/STLinkV2_clone.png"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/STLinkV2_clone.png")),(0,o.kt)("h1",{id:"wire_the_stlinkv2_to_the_lcd3"},"Wire the STLinkV2 to the LCD3"),(0,o.kt)("p",null,"Open the LCD3 and find the flashing pins top right side with label J7.\nFrom left to right on J7 pins, connect the following pins:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pin1: connect to STLinkV2 5V pin"),(0,o.kt)("li",{parentName:"ul"},"pin2: connect to STLinkV2 SWIM pin"),(0,o.kt)("li",{parentName:"ul"},"pin3: connect to STLinkV2 GND pin"),(0,o.kt)("li",{parentName:"ul"},"pin4: connect to STLinkV2 RST pin")),(0,o.kt)("p",null,"Some pictures:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-05.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-05.jpg")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-04.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-04.jpg")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-05.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-05.jpg")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-02.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-02.jpg")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-01.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-01.jpg")),(0,o.kt)("h1",{id:"download_and_flash_our_firmware"},"Download and flash our firmware"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.st.com/en/development-tools/stvp-stm32.html"},"Download ST Visual Programming utility for Windows\nhere"),". This\nsoftware is from the STM8S105 manufacture for flashing the firmware.\nNOTE: if you are on Linux or MAC, you can use other alternative\ntool. For instance, ",(0,o.kt)("a",{parentName:"li",href:"https://opensourceebikefirmware.bitbucket.io/development_tsdz2/Various--2018.04.18_-_original_firmware_and_debug_session_using_OpenOCD.html"},"on Linux you can use\nstm8flash"),"."),(0,o.kt)("li",{parentName:"ol"},"A video tutorial is ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/bxEHDFCaKH8"},"1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2-Smart-EBike/releases"},"Download the firmware hex file from\nhere"),".\nPick the file with name KT_LCD3_xxxxxx.hex."),(0,o.kt)("li",{parentName:"ol"},"Erase the STM8 as this way the read protection will be disabled. If\nyou don\\'t disable the read protection/erase, next step will fail."),(0,o.kt)("li",{parentName:"ol"},"Finally, flash the firmware.")),(0,o.kt)("h2",{id:"flash_firmware_on_linux"},"Flash firmware on Linux"),(0,o.kt)("p",null,"The process is the same as how to ",(0,o.kt)("a",{parentName:"p",href:"Flash_the_firmware_on_TSDZ2",title:"wikilink"},"Flash the firmware on\nTSDZ2"),", using the appropriate\nhex file for the LCD3"))}m.isMDXComponent=!0}}]);