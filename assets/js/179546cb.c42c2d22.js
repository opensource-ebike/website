"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5057],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,l=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(l,i(i({ref:t},c),{},{components:r})):n.createElement(l,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37723:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],m={},u=void 0,s={unversionedId:"tsdz2/TSDZ2-motor-demagnetized-due-to-overheating",id:"tsdz2/TSDZ2-motor-demagnetized-due-to-overheating",title:"TSDZ2-motor-demagnetized-due-to-overheating",description:"2018.08.01:",source:"@site/docs/tsdz2/TSDZ2-motor-demagnetized-due-to-overheating.md",sourceDirName:"tsdz2",slug:"/tsdz2/TSDZ2-motor-demagnetized-due-to-overheating",permalink:"/docs/tsdz2/TSDZ2-motor-demagnetized-due-to-overheating",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/TSDZ2-motor-demagnetized-due-to-overheating.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares",permalink:"/docs/tsdz2/TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares"},next:{title:"TSZD2-Hardware-Information",permalink:"/docs/tsdz2/TSZD2-Hardware-Information"}},c={},p=[],d={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2018.08.01:"),(0,a.kt)("p",null,"I was trying to discharge fast and fully my battery and for that I was\nrunning TSDZ2 motor at max current possible, near the 18 amps. I\nverified that my motor got very hot and I even got cut offs from the\nmotor controller because it knows that motor is very hot in some way. On\nthe next day, I noted that my motor was asking the same power as usual\nbut it had only like half of the force/torque!! After some comparison\nwith other ebike running with same TSDZ2, I found that my motor wasn\\'t\nworking properly and so I decided to open it."),(0,a.kt)("p",null,"I think the motor got to much heat because there is signs of that (seems\nit get the higher temperature on the side of phase wires, probably\nbecause currents are strong there). Although the coils could be in short\ncircuit, they aren\\'t but I verified that the magnets are much weak on\nthe more brown/burned side (I verified the attraction to a piece of\nmetal) and searching on google I found:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The Curie temperature of high-grade Neodymium (with added terbium and\ndysprosium) is 320C / 600F. However, common neo magnets are made from\nthe cheapest grade, and can start to lose some of their magnetism at\naround 80C (170F).")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"E-bike motor magnets are a grade that is slightly higher than the\ncheapest variety, because they are often subjected to higher temps than\nthey should be by unsuspecting customers. Years of posted experiments by\nreal E-bikers on endless-sphere have produced a commonly held\nrule-of-thumb to avoid heating your E-bike motor to above 95C (200F).")),(0,a.kt)("p",null,"In: ",(0,a.kt)("a",{parentName:"p",href:"https://www.electricbike.com/motor-tech-learn-the-terms-part-1"},"https://www.electricbike.com/motor-tech-learn-the-terms-part-1")),(0,a.kt)("p",null,"Next I went and exchanged the motor for a new one I had in stock and I\ngot back the full torque of TSDZ2!!"),(0,a.kt)("p",null,"Pictures of the demagnetized motor that clearly got to much hot:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-01.jpg"},"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-01.jpg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-02.jpg"},"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-02.jpg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-03.jpg"},"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-03.jpg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-04.jpg"},"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-04.jpg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-05.jpg"},"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-05.jpg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-06.jpg"},"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-06.jpg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-07.jpg"},"https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-07.jpg")),(0,a.kt)("p",null,"As a reference, this is a picture of a new motor:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_48V_motor_magnets.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_48V_motor_magnets.jpg")))}h.isMDXComponent=!0}}]);