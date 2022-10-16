"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[597],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),p=o,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},45803:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),s=["components"],i={},c=void 0,l={unversionedId:"tsdz2/How-TSDZ2-torque-sensor-works",id:"tsdz2/How-TSDZ2-torque-sensor-works",title:"How-TSDZ2-torque-sensor-works",description:"Video illustration on how the torque sensor works//www.youtube.com/watch?v=mK3fbxvDF3I",source:"@site/docs/tsdz2/How-TSDZ2-torque-sensor-works.md",sourceDirName:"tsdz2",slug:"/tsdz2/How-TSDZ2-torque-sensor-works",permalink:"/docs/tsdz2/How-TSDZ2-torque-sensor-works",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/How-TSDZ2-torque-sensor-works.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"About the TSDZ2 Flexible OpenSource firmware",permalink:"/docs/tsdz2/Home"},next:{title:"The Difference Between Standard and Advanced Mode",permalink:"/docs/tsdz2/How-to-Calibrate-the-Cadence-Sensor"}},u={},d=[],h={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Video illustration on how the torque sensor works: ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=mK3fbxvDF3I"},"https://www.youtube.com/watch?v=mK3fbxvDF3I")),(0,a.kt)("p",null,"sysrq wrote: \u2191Mar 11 2019 12:20pm\nDoes anybody know how the tsdz2 torque sensor rotary transformer can work only with two wires?\n",(0,a.kt)("a",{parentName:"p",href:"https://www.omega.com/literature/transa"},"https://www.omega.com/literature/transa")," ... orce3.html\n",(0,a.kt)("a",{parentName:"p",href:"http://www.sensorland.com/HowPage075.html"},"http://www.sensorland.com/HowPage075.html"),"\nI showed it to a very smart electrical engineer at work, and he was impressed by the simplicity."),(0,a.kt)("p",null,"Here is what he said in non-technical language:"),(0,a.kt)("p",null,"The two coils are, as you said, a transformer. An alternating current on the bike side induces an alternating current in the rotating coil. The controller feeds an alternating current to the fixed coil. It has to be alternating current because transformers only work with alternating current."),(0,a.kt)("p",null,"The fact one coil is rotating and the other is stationary makes no difference. The power across the transformer is unchanged with rotation."),(0,a.kt)("p",null,"The distance between the coils is important. That is why they are faced with low friction material and rub. Contact keeps the distance constant and is not a problem at crank rpm levels."),(0,a.kt)("p",null,"The torque is sensed by a hall effect sensor and a magnet, arranged and mounted so torque on the cranks flexes the steel in a way that moves the two with respect to each other. A hall sensor and magnetic can be very sensitive to very small movements."),(0,a.kt)("p",null,"The sensor sensor draws more and less power with magnet position. In effect the sensor is an electrical load that varies with torque. The load is powered by the current passed through the transformer."),(0,a.kt)("p",null,"The controller reads the torque by measuring the current going to the sensor. Since electrical load varies with torque current varies as well. So the signal is the power draw. Clever! No separate signal connection needed."),(0,a.kt)("p",null,"In the most basic terms:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use a transformer to carry power across a moving interface without sliding contacts."),(0,a.kt)("li",{parentName:"ol"},"Make an AC torque sensor that varies electrical load with torque."),(0,a.kt)("li",{parentName:"ol"},"Measure current to the sensor.")),(0,a.kt)("p",null,"It is well designed for an ebike, robust and inexpensive. It is not how an instrumentation grade sensor would be made. Hall effect sensors are susceptible to nearby magnetic fields, strain gages would be more linear and resistant to magnetic interference. The rubbing coils might bounce or generate heat at high rpm, precision guidance and an air gap could be added. The mechanical design of the axle could be improved to improve linearity. But these changes cost money and add weight and complexity. Accuracy is fine for ebike assist. Many ebike torque sensors make worse compromises."),(0,a.kt)("p",null,"Some only measure torque applied to one crank, the TSDZ2 sensors measures both. Some ebike sensors measure bending forces on the axle as well as torque. The TSDZ2 mechanical isolates torque pretty well. If it was being sold as a separate torque sensor I think it would be towards the high end."),(0,a.kt)("p",null,"A lot of good electrical and mechanical design went into the TSDZ2."))}p.isMDXComponent=!0}}]);