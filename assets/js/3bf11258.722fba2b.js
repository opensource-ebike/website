"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6250],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,w=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(w,a(a({ref:t},u),{},{components:n})):r.createElement(w,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9314:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={},s=void 0,c={unversionedId:"tsdz2/displays/Wire-KT-LCD3-to-TSDZ2",id:"tsdz2/displays/Wire-KT-LCD3-to-TSDZ2",title:"Wire-KT-LCD3-to-TSDZ2",description:"The KT-LCD3 is signal compatible with TSZD2 motor controller however it",source:"@site/docs/tsdz2/displays/Wire-KT-LCD3-to-TSDZ2.md",sourceDirName:"tsdz2/displays",slug:"/tsdz2/displays/Wire-KT-LCD3-to-TSDZ2",permalink:"/docs/tsdz2/displays/Wire-KT-LCD3-to-TSDZ2",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/tsdz2/displays/Wire-KT-LCD3-to-TSDZ2.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"Wire-860C-850C-to-TSDZ2",permalink:"/docs/tsdz2/displays/Wire-860C-850C-to-TSDZ2"},next:{title:"Wire-SW102-to-TSDZ2",permalink:"/docs/tsdz2/displays/Wire-SW102-to-TSDZ2"}},u={},p=[{value:"6 pin controller (usually this is a TSDZ2 without throttle):",id:"pin_controller_usually_this_is_a_tsdz2_without_throttle",level:2},{value:"8 pin controller (usually this is a TSDZ2 with throttle):",id:"pin_controller_usually_this_is_a_tsdz2_with_throttle",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The KT-LCD3 is signal compatible with TSZD2 motor controller however it\nuses a different connector so you will need to manage the wiring\nconnection yourself."),(0,i.kt)("p",null,"The simplest option is to cut your existing display cable at the\ndisplay, and either splice it to the KT-LCD3 cable (easiest), or wire it\ndirectly to the KT-LCD3 board. Obviously this renders your original\ndisplay useless without splicing its cable back together. If you want\neither throttle or brake sensor functions, you will also need to connect\nthose components to wires in the original cable (the KT-LCD3 plays no\npart in those functions)"),(0,i.kt)("p",null,"To avoid cutting your original display cable, you would need to find the\nsource of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/tsdz2-plug-dimensions.jpg"},"Higo Mini-A dimension\nconnector")),(0,i.kt)("p",null,"The KT-LCD3 kit comes with an extension cable with plug, ready to be\nspliced. KT-LCD3 connectors looks like Higo ",(0,i.kt)("a",{parentName:"p",href:"https://www.higoconnector.com/products/z209bm-p-00-a0-1000/K999K#title"},"mini-B\nZ209"),",\navailable from ",(0,i.kt)("a",{parentName:"p",href:"https://www.e-bike-technologies.de/index.php/en/connectors/higo/dustcaps-for-higo-mini-b-connectors"},"EBike\nTechnologies"),"."),(0,i.kt)("p",null,"TSZD2 motors models are sold with or without a throttle connection. The\ncable that goes from the motor controller to LCD is different and here\nare the details ","-","- you need to identify your cable signals (use a\nmultimeter to measure between GND and P+ battery voltage):"),(0,i.kt)("h2",{id:"pin_controller_usually_this_is_a_tsdz2_without_throttle"},"6 pin controller (usually this is a TSDZ2 without throttle):"),(0,i.kt)("p",null,"+------------+--------------------------+---------------------------+\n| wire color | function                 | description               |\n+============+==========================+===========================+\n| green      | P+                       | battery voltage           |\n+------------+--------------------------+---------------------------+\n| black      | GND                      | ground                    |\n+------------+--------------------------+---------------------------+\n| white      | Vin                      | ground when LCD disabled  |\n|            |                          | and P+ (battery voltage)  |\n|            |                          | when LCD is enabled       |\n+------------+--------------------------+---------------------------+\n| brown      | UART TX motor controller | sends digital data to LCD |\n+------------+--------------------------+---------------------------+\n| orange     | UART RX motor controller | receives digital data to  |\n|            |                          | LCD                       |\n+------------+--------------------------+---------------------------+\n| purple     | brake                    | this signal is active     |\n|            |                          | low, meaning that when    |\n|            |                          | brakes are not active,    |\n|            |                          | this wire has 5V and with |\n|            |                          | brakes active this wire   |\n|            |                          | has 0 volts.\\             |\n|            |                          | Leave this wire           |\n|            |                          | unconnected if you will   |\n|            |                          | not be using brake        |\n|            |                          | sensors.                  |\n+------------+--------------------------+---------------------------+"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hurzhurz/tsdz2/raw/master/images/tsdz2-plug.jpg",title:"wikilink"},"100px")),(0,i.kt)("h2",{id:"pin_controller_usually_this_is_a_tsdz2_with_throttle"},(0,i.kt)("a",{parentName:"h2",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&hilit=flash+lcd3&start=3525#p1415134"},"8 pin")," controller (usually this is a TSDZ2 with throttle):"),(0,i.kt)("p",null,"+------------+--------------------------+---------------------------+\n| wire color | function                 | description               |\n+============+==========================+===========================+\n| blue       | P+                       | battery voltage           |\n+------------+--------------------------+---------------------------+\n| black      | GND                      | ground                    |\n+------------+--------------------------+---------------------------+\n| red        | Vin                      | ground when LCD disabled  |\n|            |                          | and P+ (battery voltage)  |\n|            |                          | when LCD is enabled       |\n+------------+--------------------------+---------------------------+\n| brown      | UART TX motor controller | sends digital data to LCD |\n+------------+--------------------------+---------------------------+\n| yellow     | UART RX motor controller | receives digital data to  |\n|            |                          | LCD                       |\n+------------+--------------------------+---------------------------+\n| green      | brake                    | this signal is active     |\n|            |                          | low, meaning that when    |\n|            |                          | brakes are not active,    |\n|            |                          | this wire has 5V and with |\n|            |                          | brakes active this wire   |\n|            |                          | has 0 volts. Wired with   |\n|            |                          | the 5V wire and black GND |\n|            |                          | wire for 3 pin throttle.\\ |\n|            |                          | Leave this wire           |\n|            |                          | unconnected if you will   |\n|            |                          | not be using brake        |\n|            |                          | sensors.                  |\n+------------+--------------------------+---------------------------+\n| white      | 5V                       |                           |\n+------------+--------------------------+---------------------------+\n| orange     | throttle                 | wired with the 5V wire    |\n|            |                          | and black ground wire for |\n|            |                          | 3 pin throttle            |\n+------------+--------------------------+---------------------------+"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_8Pin_Connector_Higo_B8_Cable_Map_2.jpg",title:"wikilink"},"\nwidth=500px")),(0,i.kt)("h1",{id:"summary_of_connections_between_kt_lcd3_bafang_850c_and_tsdz2_motor_cable"},"Summary of connections between KT-LCD3, Bafang 850C and TSDZ2 motor cable"),(0,i.kt)("p",null,"  KT-LCD3 wire color   6 wire color (no throttle)   8 wire color (throttle)   TSDZ2 controller wire function"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"  red                  green                        blue                      (P+) battery voltage\nblue                 white                        red                       Vin\nblack                black                        black                     GND ground\ngreen                brown                        brown                     UART TX motor controller\nyellow               orange                       yellow                    UART RX motor controller\nna                   purple                       green                     Use with brakes\nna                   na                           orange                    Use with throttle\nna                   na                           white                     For hidden brakes and throttle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.endless-sphere.com/forums/download/file.php?id=239409&mode=view"},'KT-LCD3 0.1\\" Motor Connector\nPhoto')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sondorsforum.com/applications/core/interface/imageproxy/imageproxy.php?img=https%3A%2F%2Fi.imgur.com%2FGqfwM0S.jpg&key=1203f163b099843d28eb7d621793818bafcc3cbc1c177a2dd9ee66a2afc4ae07"},"KT-LCD3 LCD end Round\nConnectors"))),(0,i.kt)("p",null,'You can wire the brakes to brake wire and you will also need to wire the\nGND wire. If you are using a "hidden wire brake sensor", you will also\nneed to connect the 5V wire.'),(0,i.kt)("p",null,"For the throttle, you will need to connect the throttle wire, the GND\nand 5V wire."),(0,i.kt)("p",null,"Some example of soldering wires :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-02.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-02.jpg")),(0,i.kt)("p",null,"(nb. Correct way is to stagger the cuts so that they would not short\neven without heatshrink, this makes a small neat bundle)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-01.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-01.jpg")))}d.isMDXComponent=!0}}]);