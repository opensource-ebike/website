"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1953],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=p(r),d=n,c=h["".concat(s,".").concat(d)]||h[d]||m[d]||o;return r?a.createElement(c,i(i({ref:e},u),{},{components:r})):a.createElement(c,i({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34948:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],l={},s=void 0,p={unversionedId:"tsdz2/TSZD2-Hardware-Information",id:"tsdz2/TSZD2-Hardware-Information",title:"TSZD2-Hardware-Information",description:"This project came from Flexible Opensource Firmware.",source:"@site/docs/tsdz2/TSZD2-Hardware-Information.md",sourceDirName:"tsdz2",slug:"/tsdz2/TSZD2-Hardware-Information",permalink:"/docs/tsdz2/TSZD2-Hardware-Information",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/TSZD2-Hardware-Information.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"TSDZ2-motor-demagnetized-due-to-overheating",permalink:"/docs/tsdz2/TSDZ2-motor-demagnetized-due-to-overheating"},next:{title:"TSDZ2 Firmware Updating & Open Source firmware",permalink:"/docs/tsdz2/Tutorial-BETA"}},u={},m=[{value:"Winding Resistance",id:"winding-resistance",level:2},{value:"Gears",id:"gears",level:2},{value:"Motor Controller",id:"motor-controller",level:2},{value:"Torque Sensor",id:"torque-sensor",level:2}],h={toc:m};function d(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This project came from ",(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/FLEXIBLE_OPENSOURCE_FIRMWARE.html"},"Flexible Opensource Firmware"),"."),(0,o.kt)("p",null,"Most of the reverse engineering information is there, especially ",(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/development_tsdz2/"},"Hardware information and manuals")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/hurzhurz/tsdz2"},"Hurzhurz information")," (look in the .md files)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://endless-sphere.com/forums/download/file.php?id=239100"},"Offical Tongsheng Protocol")," and reputedly better ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hurzhurz/tsdz2/blob/master/serial-communication.md#motor-control-flags"},"Hurzhurz version")),(0,o.kt)("h1",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,"TSDZ2 connectors are ",(0,o.kt)("a",{parentName:"p",href:"http://www.higocon.com/en/product/?24_38.html"},"Higo HG-F.S-Z*09A, Mini-A"),". KT-LCD3 uses Higo MiniB"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Wire-KT-LCD3-to-TSDZ2"},"LCD3 - TSZD2 Connectors and Wiring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hurzhurz/tsdz2/blob/master/pinout.md"},"TSDZ2 Connector Pinouts"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/tsdz2-plug-dimensions.jpg"},"dimensions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sondorsforum.com/applications/core/interface/imageproxy/imageproxy.php?img=https%3A%2F%2Fi.imgur.com%2FGqfwM0S.jpg&key=1203f163b099843d28eb7d621793818bafcc3cbc1c177a2dd9ee66a2afc4ae07"},"KT-LCD3 Connector closeup"))),(0,o.kt)("h1",{id:"motor"},"Motor"),(0,o.kt)("p",null,"We know there are 2 type of motors: 36V 4000 RPMs and 48V 4000 RPMs (this later works at 52V also, is the same motor). As for the controller, is just the same for all different configurations: supports from battery 20V up to 60V. Yes, you can run 52v/14s on EITHER motor actually, the '36v type' motor will just spin a little faster with less torque than the '48v type' motor - but they both are compatible. "),(0,o.kt)("h2",{id:"winding-resistance"},"Winding Resistance"),(0,o.kt)("p",null,"This should be a useful diagnostic, and tell us if TS changes the motors. ",(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/development_tsdz2/About_Tongsheng_TSDZ2_mid_drive_motors--Motor.html"},"See"),". R ,L is measured between any pair of wires (so is 2 windings in series)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"V"),(0,o.kt)("th",{parentName:"tr",align:null},"R-Measured"),(0,o.kt)("th",{parentName:"tr",align:null},"R Single"),(0,o.kt)("th",{parentName:"tr",align:null},"L Single"),(0,o.kt)("th",{parentName:"tr",align:null},"Measured??"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"36"),(0,o.kt)("td",{parentName:"tr",align:null},"0.123"),(0,o.kt)("td",{parentName:"tr",align:null},"0.06"),(0,o.kt)("td",{parentName:"tr",align:null},"76uH"),(0,o.kt)("td",{parentName:"tr",align:null},"R measured (sb23Nov18), L estimated 76=135*(36/48)^2, Lmeasured 85uH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"48"),(0,o.kt)("td",{parentName:"tr",align:null},"0.25"),(0,o.kt)("td",{parentName:"tr",align:null},"0.125"),(0,o.kt)("td",{parentName:"tr",align:null},"135uH"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"gears"},"Gears"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&p=1388947&hilit=gear+ratio#p1388947"},"see gears")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Gear"),(0,o.kt)("th",{parentName:"tr",align:null},"Teeth"),(0,o.kt)("th",{parentName:"tr",align:null},"Ratio"),(0,o.kt)("th",{parentName:"tr",align:null},"rpm@60rpm"),(0,o.kt)("th",{parentName:"tr",align:null},"Tooth Whine Hz@60rpm"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Final Gear"),(0,o.kt)("td",{parentName:"tr",align:null},"92"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"60"),(0,o.kt)("td",{parentName:"tr",align:null},"92")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Blue Shaft"),(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"9.2"),(0,o.kt)("td",{parentName:"tr",align:null},"92"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Blue Gear"),(0,o.kt)("td",{parentName:"tr",align:null},"36"),(0,o.kt)("td",{parentName:"tr",align:null},"9.2"),(0,o.kt)("td",{parentName:"tr",align:null},"552"),(0,o.kt)("td",{parentName:"tr",align:null},"331")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Motor Shaft"),(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},"41.4"),(0,o.kt)("td",{parentName:"tr",align:null},"2484"),(0,o.kt)("td",{parentName:"tr",align:null},"331")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Motor Poles"),(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},"331"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"331")))),(0,o.kt)("p",null,"(One way to diagnose gear noise problems can be by spectrum analysis of the whine - you can get an audio analyser for phone.)"),(0,o.kt)("p",null,"Spragg clutch is ",(0,o.kt)("a",{parentName:"p",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&p=1399996&hilit=teeth+gear+ratio#p1399996"},"HF1216 bearing and it has a maximum torque of 12.2 Nm")),(0,o.kt)("h2",{id:"motor-controller"},"Motor Controller"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/development_tsdz2/About_Tongsheng_TSDZ2_mid_drive_motors--Motor_controller.html"},"see")," I am a little confused re battery voltage on the standard units, my 48V unit will not run on anything over 56.6v where as a 14s battery fully charged is 58.6v, are you saying that its the controller which is limiting the upper voltage and that we should be able to reprogramme it to suit ? Yes. The hardware supports that range of voltages I wrote before but original firmware is limiting."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2-Smart-EBike/blob/master/src/controller/pins.h"},"CPU Pin Assignment"),", ",(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/development_tsdz2/Datasheets_and_application_notes--STM8S105S4T6.html"},"STM8S105C4 Documents")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/development/EmbeddedFiles/32-BMSBattery_S06S-Kuteng_EBike_motor_controller_schematic.pdf"},"Similar Kunteng Controller Schematic")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Although uses the ",(0,o.kt)("a",{parentName:"li",href:"https://opensourceebikefirmware.bitbucket.io/development_tsdz2/Datasheets_and_application_notes--STM8S105S4T6.html"},"STM8S105C4")," (should have 16kbytes flash memory) and the original firmware seems to use about 15kbytes of flash memory, I was able to flash a 18Kbytes flash memory (our OpenSource firmware for Kunteng controllers) and read after and it is the same -- this means the STM8S105C4 has at least the same flash memory size of STM8S105C6!! (This is something that is not new on ST microcontrollers.)"),(0,o.kt)("li",{parentName:"ul"},"PB5 (ADC_AIN5) | in | battery_current (14 ADC bits step per 1 amp; this signal amplified by the opamp 358)\nAlso found that there is a signal to protect from battery over current of about 22 amps. Also shunt should be of about 0.023 ohms resistance: "),(0,o.kt)("li",{parentName:"ul"},"The battery_current is measured using the LM385 opamp in an non inverting configuration. The pin 1 is the output and has a low pass filter."),(0,o.kt)("li",{parentName:"ul"},"The pin 3 (+) has the signal input and pin 2 (-) has the feedback loop, composed of R1 = 11k and R2 = 1k."),(0,o.kt)("li",{parentName:"ul"},"The gain is: (R1 / R2) + 1 = (11k / 1k) + 1 = 12."),(0,o.kt)("li",{parentName:"ul"},"We know that 1 Amp of battery current is equal to 14 ADC 8 bits steps, so 1 Amp = (5V / 255) * 14 = 0.275V."),(0,o.kt)("li",{parentName:"ul"},"Each 1 Amp at the shunt is then 0.275V / 12 = 0.023V. This also means shunt should has 0.023 ohms resistance."),(0,o.kt)("li",{parentName:"ul"},"Since there is a transistor that has a base resistor connected throught a 1K resisitor to the shunt voltage, and also the base has"),(0,o.kt)("li",{parentName:"ul"},"another connected resistor of 27K, I think the transistor will switch on at arround 0.5V on the shunt voltage and that means arround 22 amps."),(0,o.kt)("li",{parentName:"ul"},"The microcontroller should read the turned on transistor signal on PD0, to detect the battery_over_current of 22 amps.\nAlso, the microcontroller can disable the 5V voltage of the circuit and this way turn it of, including itself:"),(0,o.kt)("li",{parentName:"ul"},"PD4 | out | enable/disable 5V output of the circuit, meaning it can turn off all the system including the microcontroller itself"),(0,o.kt)("li",{parentName:"ul"},"So, there is a XL7005 (I think is sued another on top of the board):\nWide 5V to 80V Operation Voltage\nOutput Adjustable from 1.25V to 20V, 0.4A"),(0,o.kt)("li",{parentName:"ul"},"LM358")),(0,o.kt)("h2",{id:"torque-sensor"},"Torque Sensor"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.pedelecforum.de/forum/index.php?threads/funktionsprinzip-drehmomentsensor-im-mittelmotor-sfm-du-250-p-tsdz2.45029/"},"Analysis"),"  (in german)\n",(0,o.kt)("a",{parentName:"p",href:"https://translate.google.com/translate?sl=de&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=https%3A%2F%2Fwww.pedelecforum.de%2Fforum%2Findex.php%3Fthreads%2Ffunktionsprinzip-drehmomentsensor-im-mittelmotor-sfm-du-250-p-tsdz2.45029%2F&edit-text="},"translate to english")),(0,o.kt)("p",null,"The PAS sensor is 24 magnets in the torque sensor coupling coil ring."),(0,o.kt)("p",null,"(Calibrating Torque and Power](",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Calibrating-Torque-and-Power"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Calibrating-Torque-and-Power"),")"),(0,o.kt)("h1",{id:"display-units"},"Display Units"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OSEF currently uses ",(0,o.kt)("a",{parentName:"li",href:"http://www.szktdz.com"},"Kunteng")," KT-LCD3 display with STM8, and is adding Bafang 850"),(0,o.kt)("li",{parentName:"ul"},"Original TS displays VLCD5 uses otp haier micros, and can't be changed. "),(0,o.kt)("li",{parentName:"ul"},"XH18 uses STM8, so may become usable. HH has started ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hurzhurz/xh18lcd"},"xh18 lcd project"),". ",(0,o.kt)("a",{parentName:"li",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&p=1392107&hilit=xh18#p1392107"},"pic")," ",(0,o.kt)("a",{parentName:"li",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&p=1413918&hilit=xh18#p1413918"},"[f/w]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Bluetooth-and-USB"},"Blue and USB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.wptm.hu/ebmdisplay/"},"EBMDisplay ")," Android App for Bluetooth")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/development/Motor_controllers--BMSBattery_S_series--LCD_control_panel.html"},"More display info")),(0,o.kt)("p",null,"KT-LCD3 uses STM8S105C6T6 that has 32kbytes of flash memory, which should be plenty.\nThe only other IC on the board is the LCD controller ",(0,o.kt)("a",{parentName:"p",href:"http://www.holtek.com/productdetail/-/vg/ht1622"},"Holtek HT1622")," that has datasheet in English language, there are even ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MartyMacGyver/LCD_HT1622_16SegLcd"},"OpenSource Arduino firmware for it"),". "),(0,o.kt)("p",null,"Appears to be ",(0,o.kt)("a",{parentName:"p",href:"https://endless-sphere.com/forums/download/file.php?id=234155&mode=view"},"variants with a different display driver")," (SHT32E22) but it looks like its pin compatible for the connected pins."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTM-CTAZAUMd8RtW5SWPnMefDgj7QYZbeXzm2miu3nnYPnQ5ZL"},"KT-LCD3 LCD Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFBCCEStyp3k5i-E7BqNa28befkmFGdpKD2JHCAMJ5jXkLnptWw"},"KT-LCD5 LCD Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elektrolurchbike.de/osCommerce2.3.1Deutsch/catalog/images/schema%20lcd6.jpg"},"KT-LCD6 LCD Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eJOcc26xcFJC2zRFc4qvQ3M5UXSBDFitzx-jTeZLNqAMKNjN6A"},"KT-LCD7 LCD Pattern"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opensourceebikefirmware.bitbucket.io/development/images/13-2.png"},"KT-LCD5B")," also appears to use the same chips, less voltage and power numbers. How compatible is it with LCD3? "),(0,o.kt)("p",null,"The first part of the Schematic is done (the interesting bits LOL)\n",(0,o.kt)("a",{parentName:"p",href:"http://52.25.253.50/forums/download/file.php?id=234642&sid=dfac13d38edaa1476f4da58a6ea999f7"},"LCD3_display_V0_1.pdf")),(0,o.kt)("p",null,"few interesting things i see:"),(0,o.kt)("p",null,"PA2 needs to be logic HIGH to keep the LCD on. this works like a keep alive. write a low and the LDO loses power and turns off (i tested this behaviour)"),(0,o.kt)("p",null,"with PE3 you can short part of the resistors before the LDO. i think this is to accomodate different input voltages."),(0,o.kt)("p",null,"STM8 reads the battery voltage on pin PE7. The current value is sent by the controller over UART. "),(0,o.kt)("h1",{id:"stuffing-up"},"Stuffing Up!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://endless-sphere.com/forums/viewtopic.php?f=2&t=94070&start=75#p1395703"},"I burn my KT LCD3, I connect 48V version to 14s battery (about 58V)")),(0,o.kt)("li",{parentName:"ul"},"Plug the two connectors (M to F) of the motor unit together. Blows up controller. (Hint: paint connectors with different nail varnish colors or put colored heatshrink on.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&start=2750#p1395963"},"Use a thread lock and check the fixing of bolts more often. I missed this moment and the body broke in half"))))}d.isMDXComponent=!0}}]);