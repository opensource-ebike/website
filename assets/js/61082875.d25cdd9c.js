"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6751],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=o,f=h["".concat(s,".").concat(d)]||h[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},99356:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={},s=void 0,u={unversionedId:"tsdz2/How-to-install-the-Flexible-OpenSource-firmware",id:"tsdz2/How-to-install-the-Flexible-OpenSource-firmware",title:"How-to-install-the-Flexible-OpenSource-firmware",description:"These notes will help you to install or update the Flexible Open Source",source:"@site/docs/tsdz2/How-to-install-the-Flexible-OpenSource-firmware.md",sourceDirName:"tsdz2",slug:"/tsdz2/How-to-install-the-Flexible-OpenSource-firmware",permalink:"/docs/tsdz2/How-to-install-the-Flexible-OpenSource-firmware",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/How-to-install-the-Flexible-OpenSource-firmware.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"How-to-install-motor-temperature-sensor",permalink:"/docs/tsdz2/How-to-install-motor-temperature-sensor"},next:{title:"Huguenot-Nihola-cargo-trike",permalink:"/docs/tsdz2/Huguenot-Nihola-cargo-trike"}},p={},c=[],h={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These notes will help you to install or update the Flexible Open Source\nfirmware on the TSDZ2 motor controller. To build the display you should\nsee here:\n",(0,a.kt)("a",{parentName:"p",href:"https://opensourceebike.github.io/"},"<https://opensourceebike.github.io>"),"."),(0,a.kt)("p",null,"\\\n",(0,a.kt)("strong",{parentName:"p"},"IMPORTANT NOTES:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installing the open source firmware will void your warranty of the\nTSDZ2 and displays."),(0,a.kt)("li",{parentName:"ul"},"We are not responsible for any personal injuries or accidents caused\nby use of this firmware."),(0,a.kt)("li",{parentName:"ul"},"There is no guarantee of safety using this firmware, please use it\nat your own risk."),(0,a.kt)("li",{parentName:"ul"},"We advise you to consult the laws of your country and tailor the\nmotor configuration accordingly."),(0,a.kt)("li",{parentName:"ul"},"Please be aware of your surroundings and maintain a safe riding\nstyle.")),(0,a.kt)("p",null,"\\\n","_","_","TOC","_","_"),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Note: If you are afraid to do the installation by yourself, you can ask\nat a local ebike shop as they should easily be able to do it, as the\ntechnical difficulty is small."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=nj8GxKHut3o"},"Jbalat did a series of videos explaining how to install the\nfirmware"))," (please note\nthat this video shows the old display that is not used anymore)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTES:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Motor configurations:")," TSDZ2 motor configurations found on online\nshops (36V, 48V, 52V, whichever power in watts, with throttle or\nwithout) the motor controller is just the same. The only relevant\ndifference is brushless motor inside, that there are only 2\ndifferent: 36V and 48V motor (52V systems use the 48V motor)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Motor max power without damage by heating:")," the motor can handle\nonly about 8 or 10 amps continuously (10 amps with a 52V battery is\n520 watts) otherwise it will heat up fast and damage permanently the\nmotor. Peaks of 18 amps can be used, like at startup or for short\ntime but it is advised to install the motor temperature sensor so\nthe firmware will be able to protect the motor, by reducing the\nmotor current as soon the starts heating after a defined threshold.")),(0,a.kt)("h1",{id:"steps_for_the_installation_or_update"},"Steps for the installation or update"),(0,a.kt)("p",null,"Before start, please first read all the steps to find the tools you will\nneed to have."),(0,a.kt)("p",null,"NOTE 1: when you install or update the firmware, you need to do it both\nfor TSZD2 motor and display, as the display firmware expects a specific\nversion of firmware installed on TSDZ2 motor."),(0,a.kt)("p",null,"NOTE 2: when you need to install and use the various software tools, if\nthey are not available to your computer operation system, you can try to\nuse a virtual machine like ",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"Virtual Box")," -\nthis may be a lengthy and hard process because you will probably need to\nlearn how to install and use a virtual machine as also how to install\nand use a different operation system."),(0,a.kt)("p",null,"If you are updating the firmware, skip the steps 1 and 3."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Build the display, ",(0,a.kt)("a",{parentName:"li",href:"https://opensourceebike.github.io/"},"see here"),"."),(0,a.kt)("li",{parentName:"ol"},"Wire display to TSDZ2, ",(0,a.kt)("a",{parentName:"li",href:"wire_display",title:"wikilink"},"see here"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"Flash_the_firmware_on_TSDZ2",title:"wikilink"},"Flash the firmware on\nTSDZ2"))))}d.isMDXComponent=!0}}]);