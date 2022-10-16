"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1970],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,w=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(w,a(a({ref:t},u),{},{components:n})):r.createElement(w,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={},s=void 0,c={unversionedId:"tsdz2/Wire-860C-850C-to-TSDZ2",id:"tsdz2/Wire-860C-850C-to-TSDZ2",title:"Wire-860C-850C-to-TSDZ2",description:"The 860/850C display are signal compatible with TSZD2 motor controller.",source:"@site/docs/tsdz2/Wire-860C-850C-to-TSDZ2.md",sourceDirName:"tsdz2",slug:"/tsdz2/Wire-860C-850C-to-TSDZ2",permalink:"/docs/tsdz2/Wire-860C-850C-to-TSDZ2",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/Wire-860C-850C-to-TSDZ2.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"Why-should-you-use-the-Flexible-OpenSource-firmware-on-your-TSDZ2",permalink:"/docs/tsdz2/Why-should-you-use-the-Flexible-OpenSource-firmware-on-your-TSDZ2"},next:{title:"Wire-KT-LCD3-to-TSDZ2",permalink:"/docs/tsdz2/Wire-KT-LCD3-to-TSDZ2"}},u={},h=[{value:"6 pin controller (usually this is a TSDZ2 without throttle):",id:"pin_controller_usually_this_is_a_tsdz2_without_throttle",level:2},{value:"8 pin controller (usually this is a TSDZ2 with throttle):",id:"pin_controller_usually_this_is_a_tsdz2_with_throttle",level:2}],p={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The 860/850C display are signal compatible with TSZD2 motor controller.\nMotors sold in a bundle with the 850C display can be used with 860C\ninterchangeably (the 850C stock firmware works with the TSDZ2 stock\nfirmware, but the 860C doesn\\'t). Other motors, while signal compatible,\nuse different connectors/pinouts, so you will need to manage the wiring\nconnection yourself."),(0,i.kt)("p",null,"One option is to cut your existing display cable at the display and\nsplice it to the 850C cable. Obviously this renders your original\ndisplay useless without splicing its cable back together. If you want\neither throttle or brake sensor functions, you will also need to connect\nthose components to wires in the original cable (the 850C plays no part\nin those functions)"),(0,i.kt)("p",null,"Important: You must disconnect both the battery and the motor when\nmodifying the wiring loom. The motor contains capacitors which are\nlikely to irreversibly damage the display if the motor is left connected\nand the loom is wired incorrectly. Once you have modified the loom you\nmust carefully recheck your work before reconnecting the display, motor\nand battery."),(0,i.kt)("p",null,"To avoid cutting your original display cable, you would need to find the\nsource of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/tsdz2-plug-dimensions.jpg"},"Higo Mini-A dimension\nconnector")),(0,i.kt)("p",null,"TSZD2 motors models are sold with or without a throttle connection. The\ncable that goes from the motor controller to display is different and\nhere are the details ","-","- you need to identify your cable signals (use a\nmultimeter to measure between GND and P+ battery voltage):"),(0,i.kt)("h2",{id:"pin_controller_usually_this_is_a_tsdz2_without_throttle"},"6 pin controller (usually this is a TSDZ2 without throttle):"),(0,i.kt)("p",null,"+------------+--------------------------+---------------------------+\n| wire color | function                 | description               |\n+============+==========================+===========================+\n| green      | P+                       | battery voltage           |\n+------------+--------------------------+---------------------------+\n| black      | GND                      | ground                    |\n+------------+--------------------------+---------------------------+\n| white      | Vin                      | ground when LCD disabled  |\n|            |                          | and P+ (battery voltage)  |\n|            |                          | when LCD is enabled       |\n+------------+--------------------------+---------------------------+\n| brown      | UART TX motor controller | sends digital data to LCD |\n+------------+--------------------------+---------------------------+\n| orange     | UART RX motor controller | receives digital data to  |\n|            |                          | LCD                       |\n+------------+--------------------------+---------------------------+\n| purple     | brake                    | this signal is active     |\n|            |                          | low, meaning that when    |\n|            |                          | brakes are not active,    |\n|            |                          | this wire has 5V and with |\n|            |                          | brakes active this wire   |\n|            |                          | has 0 volts.\\             |\n|            |                          | Leave this wire           |\n|            |                          | unconnected if you will   |\n|            |                          | not be using brake        |\n|            |                          | sensors.                  |\n+------------+--------------------------+---------------------------+"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hurzhurz/tsdz2/raw/master/images/tsdz2-plug.jpg",title:"wikilink"},"100px")),(0,i.kt)("h2",{id:"pin_controller_usually_this_is_a_tsdz2_with_throttle"},(0,i.kt)("a",{parentName:"h2",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&hilit=flash+lcd3&start=3525#p1415134"},"8 pin")," controller (usually this is a TSDZ2 with throttle):"),(0,i.kt)("p",null,"+------------+--------------------------+---------------------------+\n| wire color | function                 | description               |\n+============+==========================+===========================+\n| blue       | P+                       | battery voltage           |\n+------------+--------------------------+---------------------------+\n| black      | GND                      | ground                    |\n+------------+--------------------------+---------------------------+\n| red        | Vin                      | ground when LCD disabled  |\n|            |                          | and P+ (battery voltage)  |\n|            |                          | when LCD is enabled       |\n+------------+--------------------------+---------------------------+\n| brown      | UART TX motor controller | sends digital data to LCD |\n+------------+--------------------------+---------------------------+\n| yellow     | UART RX motor controller | receives digital data to  |\n|            |                          | LCD                       |\n+------------+--------------------------+---------------------------+\n| green      | brake                    | this signal is active     |\n|            |                          | low, meaning that when    |\n|            |                          | brakes are not active,    |\n|            |                          | this wire has 5V and with |\n|            |                          | brakes active this wire   |\n|            |                          | has 0 volts. Wired with   |\n|            |                          | the 5V wire and black GND |\n|            |                          | wire for 3 pin throttle.\\ |\n|            |                          | Leave this wire           |\n|            |                          | unconnected if you will   |\n|            |                          | not be using brake        |\n|            |                          | sensors.                  |\n+------------+--------------------------+---------------------------+\n| white      | 5V                       |                           |\n+------------+--------------------------+---------------------------+\n| orange     | throttle                 | wired with the 5V wire    |\n|            |                          | and black ground wire for |\n|            |                          | 3 pin throttle            |\n+------------+--------------------------+---------------------------+"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_8Pin_Connector_Higo_B8_Cable_Map_2.jpg",title:"wikilink"},"\nwidth=500px")),(0,i.kt)("h1",{id:"summary_of_connections_between_860c850c_and_tsdz2_motor_cable"},"Summary of connections between 860C/850C and TSDZ2 motor cable"),(0,i.kt)("p",null,"  Bafang 860C/850C wire color   6 wire color (no throttle)   8 wire color (throttle)   TSDZ2 controller wire function"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"  brown                         green                        blue                      (P+) battery voltage\norange                        white                        red                       Vin\nblack                         black                        black                     GND ground\ngreen                         brown                        brown                     UART TX motor controller\nwhite                         orange                       yellow                    UART RX motor controller\nna                            purple                       green                     Use with brakes\nna                            na                           orange                    Use with throttle\nna                            na                           white                     For hidden brakes and throttle"),(0,i.kt)("p",null,'You can wire the brakes to brake wire and you will also need to wire the\nGND wire. If you are using a "hidden wire brake sensor", you will also\nneed to connect the 5V wire.'),(0,i.kt)("p",null,"For the throttle, you will need to connect the throttle wire, the GND\nand 5V wire."),(0,i.kt)("p",null,"Some example of soldering wires :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-02.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-02.jpg")),(0,i.kt)("p",null,"(nb. Correct way is to stagger the cuts so that they would not short\neven without heatshrink, this makes a small neat bundle)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-01.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-01.jpg")))}d.isMDXComponent=!0}}]);