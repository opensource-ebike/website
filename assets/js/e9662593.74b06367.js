"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1009],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),m=o,k=h["".concat(l,".").concat(m)]||h[m]||u[m]||s;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5060:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=r(102),s=(r(7294),r(3905)),a=["components"],i={},l=void 0,c={unversionedId:"tsdz2/improvements/How-to-install-brake-sensors",id:"tsdz2/improvements/How-to-install-brake-sensors",title:"How-to-install-brake-sensors",description:"TSDZ2 supports the regular cheap ebike brake sensors, like levers brake",source:"@site/docs/tsdz2/improvements/How-to-install-brake-sensors.md",sourceDirName:"tsdz2/improvements",slug:"/tsdz2/improvements/How-to-install-brake-sensors",permalink:"/docs/tsdz2/improvements/How-to-install-brake-sensors",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/improvements/How-to-install-brake-sensors.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"How-to-improve-pedal-distance-to-frame-Q-factor",permalink:"/docs/tsdz2/improvements/How-to-improve-pedal-distance-to-frame-Q-factor"},next:{title:"How-to-install-motor-temperature-sensor",permalink:"/docs/tsdz2/improvements/How-to-install-motor-temperature-sensor"}},p={},u=[],h={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'TSDZ2 supports the regular cheap ebike brake sensors, like levers brake\nsensor, magnetic brake sensors or the \\"hidden wire brakes sensor\\".'),(0,s.kt)("p",null,"You can buy brake sensors on online shops like BMSBattery or PSWPower,\nat prices like 5\u20ac each pair."),(0,s.kt)("p",null,"NOTE: it is really important to make sure the brake sensor installation\nis complete and fully working before booting the display, otherwise it\ncannot be properly initialized and the full digit and symbols will be\ndisplayed."),(0,s.kt)("h1",{id:"circuitry"},"Circuitry"),(0,s.kt)("p",null,"The brake sensors are to be wired in an ",(0,s.kt)("a",{parentName:"p",href:"https://endless-sphere.com/forums/viewtopic.php?p=1521439#p1521439"},"open\ncircuit"),",\nwhere closing the circuit indicates to the controller that a lever has\nbeen pulled. This means that you can have one or more brake sensors\nwired in parallel, and when any given switch is triggered the controller\nwill stop turning the motor."),(0,s.kt)("p",null,"If you\\'re upgrading from the VLCD5, the brake sensors have plugs that\nat first glance appear to have three pins - but only two are actually\nmolded into the plug. You can verify continuity with a multimeter when\nthe lever is pulled."),(0,s.kt)("h1",{id:"magnetic_brake_sensors"},"Magnetic brake sensors"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/magnetic_brake_sensor-01.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/magnetic_brake_sensor-01.jpg")),(0,s.kt)("p",null,"This are the most easy and flexible brake sensors to install, since they\nwill be glued to the original bicycle brake lever (a must on hydraulic\nbrakes). They also have only 2 wires to be connected. They act like a\nmechanical switch, you don\\'t need to care about which wires colors of\nthe brake sensor you connect to the motor controller wires ","-","- follow\nthe next table for the connections."),(0,s.kt)("p",null,'You can find on online shops that sell this sensors as \\"BAFANG\nHydraulic Brake Sensor\\" but don\\\'t worry because this are generic\nsensor that work also on TSDZ2.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Connections between brake sensor and TSDZ2 display cable:")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"  ",(0,s.kt)("strong",{parentName:"p"},"Brake sensor"),"   ",(0,s.kt)("strong",{parentName:"p"},"TSDZ2 controller wire function"),"\ncolor 1            GND ground\ncolor 2            BRAKE"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"In order to keep the possibility to disconnect the magnetic brake\nsensors it is recommended to adopt the following configuration:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Y-splitter (to be cut only at one end to isolate the two correct\nwires to be connected to GND and BRAKE)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"n.2 magnetic sensors (to be connected to the splitter above)")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/brake_sensor_schematic.png"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/brake_sensor_schematic.png")),(0,s.kt)("h1",{id:"lever_brake_sensors"},"Lever brake sensors"),(0,s.kt)("p",null,"The lever brake sensors will substitute the original brake levers of the\noriginal bicycle."),(0,s.kt)("p",null,"This type of brake sensors come with 2 wires and they act like a\nmechanical switch, you don\\'t need to care about which wires colors of\nthe brake sensor you connected to the motor controller wires ","-","- follow\nthe next table for the connections."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Connections between brake sensor and TSDZ2 display cable:")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"  ",(0,s.kt)("strong",{parentName:"p"},"Brake sensor"),"   ",(0,s.kt)("strong",{parentName:"p"},"TSDZ2 controller wire function"),"\ncolor 1            GND ground\ncolor 2            BRAKE"),(0,s.kt)("hr",null),(0,s.kt)("h1",{id:"hwb_hidden_wire_brakes_sensor"},'\\"HWB (hidden wire brakes) sensor\\"'),(0,s.kt)("p",null,"Different from lever brake sensors and magnetic brake sensors, this ones\nhave 3 wires and they need to be connected with a specific combination.\nConnect GND, 5V and BRAKE wires to the same wires of the motor\ncontroller."),(0,s.kt)("p",null,"HWB sensor wires:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/HWB_brake_wires.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/HWB_brake_wires.jpg")),(0,s.kt)("p",null,"NOTE: The HWB sensor needed 5V wire is only available on the TSDZ2\nthrottle version - see next section for a possible solution on the TSDZ2\nthrottle no version."))}m.isMDXComponent=!0}}]);