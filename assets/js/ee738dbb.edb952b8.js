"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6705],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8161:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={},u=void 0,s={unversionedId:"tsdz2/displays/Features-and-configurations-for-Bafang-850C-LCD-firmware-v0.2.0",id:"tsdz2/displays/Features-and-configurations-for-Bafang-850C-LCD-firmware-v0.2.0",title:"Features-and-configurations-for-Bafang-850C-LCD-firmware-v0.2.0",description:"The following only applies to firmware version 0.2.X!",source:"@site/docs/tsdz2/displays/Features-and-configurations-for-Bafang-850C-LCD-firmware-v0.2.0.md",sourceDirName:"tsdz2/displays",slug:"/tsdz2/displays/Features-and-configurations-for-Bafang-850C-LCD-firmware-v0.2.0",permalink:"/docs/tsdz2/displays/Features-and-configurations-for-Bafang-850C-LCD-firmware-v0.2.0",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/tsdz2/displays/Features-and-configurations-for-Bafang-850C-LCD-firmware-v0.2.0.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"860C-850C-displays",permalink:"/docs/tsdz2/displays/860C-850C-displays"},next:{title:"KT-LCD3",permalink:"/docs/tsdz2/displays/KT-LCD3"}},c={},f=[{value:"1. Main Screen",id:"main_screen",level:2},{value:"Battery SOC",id:"battery_soc",level:3},{value:"Numeric fields",id:"numeric_fields",level:3},{value:"Name",id:"name",level:4},{value:"Value",id:"value",level:4},{value:"Graph",id:"graph",level:3},{value:"Name",id:"name_1",level:4},{value:"Value",id:"value_1",level:4},{value:"2. Configuration Menu",id:"configuration_menu",level:2}],d={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The following only applies to firmware version 0.2.X!")),(0,i.kt)("p",null,"_","_","TOC","_","_"),(0,i.kt)("h2",{id:"main_screen"},"1. Main Screen"),(0,i.kt)("h3",{id:"battery_soc"},"Battery SOC"),(0,i.kt)("p",null,"-"," Battery SOC bars based on voltage\\"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Battery SOC bars based on Coulomb counting\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: volts\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: battery SOC based on voltage\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: battery SOC based on Coulomb counting\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: battery SOC increment/decrement\\")),(0,i.kt)("h3",{id:"numeric_fields"},"Numeric fields"),(0,i.kt)("h4",{id:"name"},"Name"),(0,i.kt)("p",null,"List of possible variables."),(0,i.kt)("h4",{id:"value"},"Value"),(0,i.kt)("p",null,"Different actions based on specific variable, like reset trip time."),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("h4",{id:"name_1"},"Name"),(0,i.kt)("p",null,"List of possible variables."),(0,i.kt)("h4",{id:"value_1"},"Value"),(0,i.kt)("p",null,"Different actions based on specific variable, like show average or not."),(0,i.kt)("p",null,"-"," Battery SOC bars based on voltage\\"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Battery SOC bars based on Coulomb counting\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: volts\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: battery SOC based on voltage\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: battery SOC based on Coulomb counting\\"),(0,i.kt)("li",{parentName:"ul"},"Battery numeric field: battery SOC increment/decrement\\")),(0,i.kt)("h2",{id:"configuration_menu"},"2. Configuration Menu"),(0,i.kt)("p",null,"If you have doubts of each option, please read the ",(0,i.kt)("em",{parentName:"p"},"2. Configuration\nMenu")," on ","[","Features and configurations for version 0.19.X","]"," of KT-LCD3."))}p.isMDXComponent=!0}}]);