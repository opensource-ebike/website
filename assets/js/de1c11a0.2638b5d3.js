"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3133],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2715:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={},l="Remote Control Power Analysis",c={unversionedId:"display/TSDZ2 wireless project/Power_Analysis",id:"display/TSDZ2 wireless project/Power_Analysis",title:"Remote Control Power Analysis",description:"A very useful tool for determining power utilization of nrf52840 boards is the Nordic Power Profile Kit",source:"@site/docs/display/TSDZ2 wireless project/Power_Analysis.md",sourceDirName:"display/TSDZ2 wireless project",slug:"/display/TSDZ2 wireless project/Power_Analysis",permalink:"/docs/display/TSDZ2 wireless project/Power_Analysis",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/display/TSDZ2 wireless project/Power_Analysis.md",tags:[],version:"current",frontMatter:{},sidebar:"displaySidebar",previous:{title:"Device Firmware Update (DFU)",permalink:"/docs/display/TSDZ2 wireless project/dfu"},next:{title:"TSDZ2 wireless board",permalink:"/docs/display/TSDZ2 wireless project/TSDZ2_wireless"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"Remote Control Power modes",id:"remote-control-power-modes",level:2}],h={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"remote-control-power-analysis"},"Remote Control Power Analysis"),(0,i.kt)("p",null,"A very useful tool for determining power utilization of nrf52840 boards is the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nordicsemi.com/Software-and-tools/Development-Tools/Power-Profiler-Kit-2"},"Nordic Power Profile Kit"),"\nThis tool was used with the remote control to estimate the useful lifetime of a CR2032 coin battery used with the remote control."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The remote control was powered on the VDD pin with a 3V CR3032 lithium battery following the instructions described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/display/TSDZ2%20wireless%20project/TSDZ2_wireless_remote"},"how to build the wireless remote")),(0,i.kt)("h2",{id:"remote-control-power-modes"},"Remote Control Power modes"),(0,i.kt)("p",null,"The firmware for the remote control has two low power operating modes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"POWER IDLE MODE")," This is the default power mode of the remote when it is not processing any button commands.",(0,i.kt)("br",null),"\nThe average current dissipated by the remote in this mode with Ant Lev active is 37.5 uA as shown below:",(0,i.kt)("img",{alt:"Figure 1",src:r(930).Z,width:"3141",height:"1368"}),"\n(The spikes in the current is caused by the switching voltage regulator used in the nrf52840 board. Essentially, the board power supply uses capacitive charging/discharging to reduce power consumption, and this leads to spiking in the current.)\nIf both Ant Lev and Ant Controls is active in the remote the average idle current jumps to 75.26 uA as shown below:\n",(0,i.kt)("img",{alt:"Figure 2",src:r(327).Z,width:"3150",height:"1401"}),"\nIn ",(0,i.kt)("strong",{parentName:"p"},"POWER IDLE")," mode, the remote is powered on and ready to immediately process button commands.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"POWER OFF MODE"),"\nIn this mode, the remote control turns off all  bluetooth and ANT wireless capabilities. The remote is put into a minimal power dissipation mode. The average power off current in this mode is only 0.36 uA as shown below:\n",(0,i.kt)("img",{alt:"figure 3",src:r(1329).Z,width:"3129",height:"1383"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ANT LEV TRANSMISSION MODE"),"\nIn this mode, either the plus or minus button is pressed to increase or decrease the assist level on the ebike.\nThe average current dissipated by the the remote control when the remote control is pressed once a second is 326 uA as shown below:\n",(0,i.kt)("img",{alt:"figure 4",src:r(8191).Z,width:"3138",height:"1383"}),"\nif the button is pressed once every 2 seconds, the average current drops to 169.0 uA, about 1/2 the current as expected:\n",(0,i.kt)("img",{alt:"figure 5",src:r(4953).Z,width:"3171",height:"1380"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ANT LEV + ANT CONTROLS TRANSMISSION MODE"),"\nIn this mode, both Ant Lev and Ant Controls are active. The average current is 272 uA when the plus button is pressed once every second as shown below:\n",(0,i.kt)("img",{alt:"figure 6",src:r(1551).Z,width:"3138",height:"1356"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ANT PAIRING MODE"),"\nWhen the board is searching for an ANT device, the average current dissipated by the board is 944 mA. You can see the current effects of the LEDs flashing during pairing in the current trace below:\n",(0,i.kt)("img",{alt:"figure 8",src:r(4091).Z,width:"3135",height:"1377"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BLUETOOTH PAIRING MODE"),"\nWhen the board is searching for an Bluetooth device, the average current dissipated by the board is 375.82 uA, as shown below:\n",(0,i.kt)("img",{alt:"figure 9",src:r(2552).Z,width:"3168",height:"1526"})),(0,i.kt)("h2",{parentName:"li",id:"cr2032-battery-life-estimation"},"CR2032 Battery life estimation"),(0,i.kt)("p",{parentName:"li"},"  To estimate the battery life of this battery, we use this ",(0,i.kt)("a",{target:"_blank",href:r(8043).Z},"spreadsheet"),", along with some conservative assumptions:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The milliamp-hr (mah) energy capacity of the CR2032 battery is rated at 225mah, conservatively de-rated to 80% or 180 mah based on ",(0,i.kt)("a",{parentName:"li",href:"./High_pulse_drain_impact_on_CR2032_coin_cell_battery_capacity.pdf"},"an analysis done by Nordic Semiconductor on the impact that switching power supplies have on the performance of a CR2032 coin cell"),"\nThe conclusion of this document is shown below:\n",(0,i.kt)("img",{alt:"figure 14",src:r(5190).Z,width:"3587",height:"1840"}),'\nFEP is the "Functional End Point" voltage at which the remote will no longer operate. (2 V). As can be seen from the power mode graphs above, the current peaks in the remote are between 10 and 15ma. We can therefore expect approximately 180 mah effective capacity from a CR2032 cell.\nThis is the battery capacity used in the estimation of battery life.'),(0,i.kt)("li",{parentName:"ul"},"The idle current is 75 uA (see ",(0,i.kt)("strong",{parentName:"li"},"POWER OFF MODE")," above) This assumes that you are not using a garmin bike computer. (if you are, change this value in the speadsheet to 37.5 uA)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"POWER OFF")," current is 0.036 uA")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"}),(0,i.kt)("li",{parentName:"ul"},"the average duration of a high current during a button click (where the board is in transmitting mode) is 482ms as measured below:\n",(0,i.kt)("img",{alt:"figure 12",src:r(4298).Z,width:"3120",height:"1365"})),(0,i.kt)("li",{parentName:"ul"},"The ebike is ridden 14 hrs/week"),(0,i.kt)("li",{parentName:"ul"},"The remote control spends virtually no time in bluetooth mode. (bluetooth is used only when setting up the remote)"),(0,i.kt)("li",{parentName:"ul"},"low brightness is used on the led","   Feeding these assumptions into the  ",(0,i.kt)("a",{target:"_blank",href:r(8043).Z},"Battery Life Calculator")," spreadsheet, the battery life is estimated to be ",(0,i.kt)("strong",{parentName:"li"},"22 months!"),".\n",(0,i.kt)("img",{alt:"figure 13",src:r(6238).Z,width:"2967",height:"1554"}),(0,i.kt)("h2",{parentName:"li",id:"conclusion"},"Conclusion"),"Based on quite conservative assumptions, it is expected that the remote will continue functioning well for at least a year.\n",(0,i.kt)("strong",{parentName:"li"},"Replacing the battery annually is recommended."))))}d.isMDXComponent=!0},8043:function(e,t,r){t.Z=r.p+"assets/files/Battery_Life_Calculator-c5de3393c5443fe37ca35aa2b7c6b129.xls"},2552:function(e,t,r){t.Z=r.p+"assets/images/ant_lev+bluetooth_pairing-38b2c93e3f6c7a6cfb5e3c3de0418652.png"},1551:function(e,t,r){t.Z=r.p+"assets/images/ant_lev+ctrl_1_sec_press-f40b872623e2c21b74f9cee52d0d06aa.png"},327:function(e,t,r){t.Z=r.p+"assets/images/ant_lev+ctrl_idle-d5860c36a2286a5d680c9dc7255af6e8.png"},8191:function(e,t,r){t.Z=r.p+"assets/images/ant_lev_1_sec_press-ed32a1f07f9bbcb3ff70d53f7f066f62.png"},4953:function(e,t,r){t.Z=r.p+"assets/images/ant_lev_2_sec_press-2f9c86398e1c544459acd35ed6d0f058.png"},930:function(e,t,r){t.Z=r.p+"assets/images/ant_lev_idle-7b25bb64573e71ee7e49e35aaee5a9c8.png"},4091:function(e,t,r){t.Z=r.p+"assets/images/ant_pairing-6ae4c2ca9ce21d686c936657cfb64574.png"},6238:function(e,t,r){t.Z=r.p+"assets/images/battery_life-be7153a352d03506b1769d703a31dac8.png"},5190:function(e,t,r){t.Z=r.p+"assets/images/capacity_vs_pulse_amplitude-ab98344aa690920b8d9efcf383caa69f.png"},1329:function(e,t,r){t.Z=r.p+"assets/images/deep_sleep-b55e3a68a0786b223fcba0ebb824dc26.png"},4298:function(e,t,r){t.Z=r.p+"assets/images/duration_of_button_click-853d430b37860ca63a5ad32cc51a592a.png"}}]);