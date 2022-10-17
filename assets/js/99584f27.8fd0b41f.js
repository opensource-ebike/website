"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7150],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,b=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=n(3117),o=n(102),s=(n(7294),n(3905)),i=["components"],r={sidebar_position:3},l="Build the display (M500/M600)",p={unversionedId:"display/build_display-bafang_m500_M600",id:"display/build_display-bafang_m500_M600",title:"Build the display (M500/M600)",description:"NOTE that this display only works for Bafang M500/M510/M600 motors.",source:"@site/docs/display/build_display-bafang_m500_M600.md",sourceDirName:"display",slug:"/display/build_display-bafang_m500_M600",permalink:"/docs/display/build_display-bafang_m500_M600",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/display/build_display-bafang_m500_M600.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"displaySidebar",previous:{title:"Build the display (TSDZ2)",permalink:"/docs/display/build_display"},next:{title:"Installing the bootloader",permalink:"/docs/display/bootloader"}},u={},c=[{value:"Componentes",id:"componentes",level:2},{value:"Tools",id:"tools",level:2},{value:"Step by step instructions",id:"step-by-step-instructions",level:2},{value:"Schematic explanation",id:"schematic-explanation",level:3}],h={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"build-the-display-m500m600"},"Build the display (M500/M600)"),(0,s.kt)("p",null,"NOTE that this display only works for Bafang M500/M510/M600 motors."),(0,s.kt)("p",null,"Some of the following components can be bought in online shops like Aliexpress, Ebay or at specialized electronics shops like ",(0,s.kt)("a",{parentName:"p",href:"https://mouser.com/"},"www.mouser.com")," or ",(0,s.kt)("a",{parentName:"p",href:"https://www.farnell.com/"},"www.farnell.com"),"."),(0,s.kt)("h2",{id:"componentes"},"Componentes"),(0,s.kt)("p",null,"You will need the following components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"OLED display SPI 128x64 pixels 1.3 inches or 0.96 inches (I2C display version will not work)"),": costs 3\u20ac. You need to choose the bigger or the smaller version. It is recommended the bigger 1.3 inches version (the 3D printed enclosure is only available for this one). The smaller version makes impossible to see the numbers on display while riding, you need to stop to be able to read.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(577).Z,width:"350",height:"332"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"nRF52840 Nordic USB Dongle"),": costs 11\u20ac.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(2450).Z,width:"347",height:"244"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"CAN SPI module"),": costs 4\u20ac.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(139).Z,width:"350",height:"278"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step down 80V -> 5V power board ",(0,s.kt)("a",{parentName:"strong",href:"https://export.rsdelivers.com/product/xp-power/sth0548s05/xp-power-surface-mount-dc-dc-switching-regulator/1883365"},"XP Power STH0548S05")),": costs 11\u20ac.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(2501).Z,width:"350",height:"261"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"3 or 4 buttons remote"),': costs 8\u20ac. The 3 buttons is from the EBike 850C display, that can be bought as a spare part - search on Aliexpress for "850c extension". The 4 buttons is from the EBike 860C display, that can be bought as a spare part but can be hard to find.',(0,s.kt)("br",null),"\nIf you want the ANT+ REMOTE functionalitty (Garmin Edge page change), you will need to use the 4 buttons remote, as this function happens when you press the button number 4.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(9127).Z,width:"350",height:"277"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Bafang M500/M510/M600 display extension cable (HIGO-B5 connector)"),": ",(0,s.kt)("a",{parentName:"li",href:"https://www.aliexpress.com/item/1005003656557018.html"},"costs 8\u20ac"),(0,s.kt)("br",null),(0,s.kt)("img",{src:n(8786).Z,width:"350",height:"253"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"2x Diode 1N4148"),": can be SMD 0805 size. Costs 0.1\u20ac, can be bought on EBay or other shops.",(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Resistor 470 ohms"),": can be SMD 0805 size. Costs 0.1\u20ac, can be bought on EBay or other shops.",(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Resistor 1500 ohms"),": can be SMD 0805 size. Costs 0.1\u20ac, can be bought on EBay or other shops.",(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"2x resistor 3300 ohms"),": can be SMD 0805 size. Costs 0.2\u20ac, can be bought on EBay or other shops.",(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Perf board"),": costs 1\u20ac.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(7072).Z,width:"300",height:"267"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Four screws M2x12"),": costs 1\u20ac. Buy them in black color if you plan to 3D print the enclose in black color.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(8819).Z,width:"300",height:"212"}),(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Silicone"),": costs 4\u20ac, can be bought on EBay or other shops. The silicone will be used to seal the enclosure and make it water prof. There are silicone that is fast to cure like in two hours but this can not work very well, like not gluing well to the 3D printed plastic PLA. There are small tubes of silicone at shops, that you can use just a few pieces at a time.",(0,s.kt)("br",null),(0,s.kt)("img",{src:n(6686).Z,width:"149",height:"400"}),(0,s.kt)("br",null),(0,s.kt)("br",null))),(0,s.kt)("h2",{id:"tools"},"Tools"),(0,s.kt)("p",null,"You will need at least the following tools:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Multimeter"),": to check the wires connections, voltages and components."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Power supply"),": to power the display for testing during the build, where you limit the current to a minimum to avoid burning some component in the case you soldered something wrong. If you do not have one yet, you can buy a cheap digital lab power supply of adjustable voltage up to 30V and adjustbale current up to 10A, on Aliexpress for about 50\u20ac.")),(0,s.kt)("h2",{id:"step-by-step-instructions"},"Step by step instructions"),(0,s.kt)("p",null,"1 - ",(0,s.kt)("strong",{parentName:"p"},"Flash bootloader and firmware on the nrf52840 board")," - see the page:",(0,s.kt)("br",null),"\n1.1 - ",(0,s.kt)("a",{parentName:"p",href:"/docs/display/bootloader"},"How to Flash the Wireless Bootloader on a Nordic Dongle"),(0,s.kt)("br",null),"\n1.2 - ",(0,s.kt)("a",{parentName:"p",href:"/docs/display/dfu"},"How to update the firmware"),(0,s.kt)("br",null)),(0,s.kt)("p",null,"In the steps 1.1 and 1.2 you flash the bootloader and then update the firmware, if all goes as expected, then the NRF52840 board is working."),(0,s.kt)("p",null,"2 - ",(0,s.kt)("strong",{parentName:"p"},"3D print the enclosure"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1692).Z,width:"1434",height:"1128"}),"\n3D files for 3D printing (1.3 inches OLED display only):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:n(2716).Z},"base.amf")," (purple in the picture)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:n(2387).Z},"cover.amf")," (blue in the picture)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:n(8345).Z},"clamp.amf")," (orange in the picture).")),(0,s.kt)("p",null,"3 - ",(0,s.kt)("strong",{parentName:"p"},"Build your board")),(0,s.kt)("p",null,"3.1 - Understand the circuit, see the schematic:",(0,s.kt)("br",null),"\n",(0,s.kt)("a",{target:"_blank",href:n(8464).Z},(0,s.kt)("img",{src:n(9445).Z,width:"2179",height:"1720"}))),(0,s.kt)("h3",{id:"schematic-explanation"},"Schematic explanation"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"the DC-DC converts the high battery voltage and outputs 5 volts, which will then be the input for the NRF52840 board as also to the OLED display.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'the wireless board has the NRF52840 microcontroller that is "the brain" of the display, and communicates with the OLED display and CAN module using SPI lines. It also reads the remote buttons state.',(0,s.kt)("br",null),"\nIn the case you are using 4 buttons keypad, connect the button number 4 to the pin P0.17 of the NRF52840 board.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"the CAN module sends and receive data to the Bafang motors.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"the resistors and diodes implement the same circuit as the Bafang M500/M510/M600 original display.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"when the display is off, the CTRL wire has battery voltage and P+ VBAT has 0 volts. Once the user presses ON/OFF button on the remote, the CTRL wire will then have 4.5 volts and if user long press the ON/OFF button, the P+ VBAT will get the battery voltage (to power up the display).",(0,s.kt)("br",null),"\nThe DOWN button has a similar circuit and the Bafang motor controller uses it to detect when users wants the walk assist mode."))),(0,s.kt)("p",null,"NRF52840 board pinout:\n",(0,s.kt)("img",{alt:"Pinout",src:n(711).Z,width:"1378",height:"1058"})),(0,s.kt)("p",null,"3.2 - Cut your nRF52840 board with a metal saw by hand so this way it will be smaller. Check it is ok on the enclosure, if not you can use a file tool to do the final adjustment.",(0,s.kt)("br",null),"\nAlso cut the CAN module board, the display board and the perfboard, to the similar sizes / shapes as seen on the picture. All this boards need to go inside the 3D printed enclosure - here a picture as example:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(2912).Z,width:"1280",height:"519"})),(0,s.kt)("p",null,"3.3 - Use thin double layer tape to fix the DC-DC to the back of perfboard. Solder thin wires to the GND, Vin and Vout pins (look at the datasheet of the DC-DC to find the pins) that will be used on the front side of perfboard:",(0,s.kt)("br",null),"\n",(0,s.kt)("img",{src:n(6530).Z,width:"1280",height:"893"})),(0,s.kt)("p",null,"NOTE: always triple check the connections you did as it is easy for you to do a mistake. For instance, exchanging battery voltage pin with GND pin will most probably result in a burned NRF52840 and/or the DC-DC board."),(0,s.kt)("p",null,"How can use the power supply with 10V and limited current like 50mA, to power up the DC-DC and see if it correctly provides 5V at his output. "),(0,s.kt)("p",null,"Next, use some tape to insulate the bottom of the wireless board and solder it on the front of perfboard, as seen on the image.",(0,s.kt)("br",null),"\nAlso solder the resistors and diodes as seen on the image (this are SMD 0805 size):\n",(0,s.kt)("img",{src:n(8626).Z,width:"1280",height:"1189"})),(0,s.kt)("p",null,"Wire the DC-DC output wires GND and 5V to the wireless board (follow the schematic)."),(0,s.kt)("p",null,"Now you can use the power supply with 10V and limited current like 50mA, to power up the DC-DC and see if LEDs on the wireless board blink (bootloader must be already flashed on this step) when you apply the power. You can also check that wireless board OUT pin is 3.3V."),(0,s.kt)("p",null,"Continue to wire everything as seen om the schematic but leave the CAN module for the end. See next picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(9154).Z,width:"1280",height:"988"})),(0,s.kt)("p",null,"Use thin wires when possible. For the wires of display extension cable, you will need to figure out each pin on the HIGO-B5 connector - see next image."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(2322).Z,width:"1494",height:"722"})),(0,s.kt)("p",null,"Now that you have the display cable wired, giving power to DC-DC, that will then power the wireless board and the OLED display, and the remote buttons wired, you can now connect to your Bafang motor. You can use the power supply with 30V and with current limit to a current like 100mA, to power up your Bafang motor. That way, if you made any mistakes when connecting the cables to the display, hopefully nothing will burn."),(0,s.kt)("p",null,"Assuming the bootloader and firmware are already flashed on this step, when you long press the ON/OFF button, you should see the OLED display turn on. It should not go to main screen as the motor communications are not yet ready because the CAN module board is not yet connected."),(0,s.kt)("p",null,"Finally wire the CAN module board:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3179).Z,width:"1280",height:"1003"})),(0,s.kt)("p",null,"In the end, the display should show the same way as next picture. Note that I did setup my power supply to 30V, that is why the motor controller sends the battery voltage value as about 30V and battery SOC as empty, since my motor is for a 48V battery."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(8854).Z,width:"1137",height:"1280"})),(0,s.kt)("p",null,"Now it is time to put everything inside the 3D printed enclosure. The big hole at back is enough for the two cables to be inserted. Here an example, and after using transparent silione to keep the cables in place and avoid water entrance:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(8099).Z,width:"1939",height:"1588"})),(0,s.kt)("p",null,"On the top, to protect the OLED display and avoid watter entrance, you can put large glue tape as seen on the picture. There are enough clearance on the cover 3D printed part to accomodate this tape:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(8809).Z,width:"1154",height:"689"})),(0,s.kt)("p",null,"Use the M2x12 screws to tight the cover as also to clamp to the handlebar."),(0,s.kt)("p",null,"Example of the final result:"),(0,s.kt)("p",null,"(On this picture, not glue tape were yet applied on to of the OELD display)\n",(0,s.kt)("img",{src:n(8607).Z,width:"1633",height:"1228"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(4171).Z,width:"1310",height:"1676"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(5091).Z,width:"1443",height:"1676"})))}d.isMDXComponent=!0},2716:function(e,t,n){t.Z=n.p+"assets/files/base-44bd44a6a094a1d4eacac3b23465e7fe.amf"},8345:function(e,t,n){t.Z=n.p+"assets/files/clamp-1c307053d4fc4d53d27c6bf7db62b9d2.amf"},2387:function(e,t,n){t.Z=n.p+"assets/files/cover-e21b00e151d18b8f5b9a4f591160bf3f.amf"},8464:function(e,t,n){t.Z=n.p+"assets/files/schematic-Bafang_M500_M600-ff60f309b58c224dc71df563454c4f48.png"},9127:function(e,t,n){t.Z=n.p+"assets/images/850c_keypad-e3c165b2ce1f8acade938a33bae133d0.png"},4171:function(e,t,n){t.Z=n.p+"assets/images/02-8b20b19c148712abf35c0b198da13875.png"},5091:function(e,t,n){t.Z=n.p+"assets/images/04-29d9fd300c3f193da0837cf01c65d0e7.png"},8607:function(e,t,n){t.Z=n.p+"assets/images/08-8cc6309aa4f17d07c496cb79f31b4579.png"},2322:function(e,t,n){t.Z=n.p+"assets/images/Bafang_M500_M600_Display_Cable-8f5e1c0b35421f5208f11063376de4fc.png"},2450:function(e,t,n){t.Z=n.p+"assets/images/NRF52840-0b417dc04f8f74eaf03676dae8f9b607.png"},8099:function(e,t,n){t.Z=n.p+"assets/images/build-1-231a84da4729ace0202e538b87bbde1f.png"},8809:function(e,t,n){t.Z=n.p+"assets/images/build-2-1fb5a70edb0aa462e72c23145b45e3de.png"},8854:function(e,t,n){t.Z=n.p+"assets/images/build-3-cc978b15e2915ec1258081c889188938.png"},3179:function(e,t,n){t.Z=n.p+"assets/images/build-4-0dd3a6840b634df7292a779f0ef3415d.png"},8626:function(e,t,n){t.Z=n.p+"assets/images/build-5-9ec25db6b8241eac343cbd302eb069e8.png"},9154:function(e,t,n){t.Z=n.p+"assets/images/build-6-75d59677bddbaf897e4ebfcd901a2e97.png"},2912:function(e,t,n){t.Z=n.p+"assets/images/build-7-75f161a68eb1deff36ce93dc984f9f2d.png"},6530:function(e,t,n){t.Z=n.p+"assets/images/build-8-4db1c2812bb1d3ca99a18921a0214629.png"},8786:function(e,t,n){t.Z=n.p+"assets/images/display_cable-3d02d252ac46969c559732c052aba32f.png"},1692:function(e,t,n){t.Z=n.p+"assets/images/enclosure_3d-3e20d99c5d61e49536391c523c9f19e4.png"},711:function(e,t,n){t.Z=n.p+"assets/images/nordic_pinout-6c61d93a2e0d56243c231d677b7fedcf.png"},9445:function(e,t,n){t.Z=n.p+"assets/images/schematic-Bafang_M500_M600-ff60f309b58c224dc71df563454c4f48.png"},139:function(e,t,n){t.Z=n.p+"assets/images/can_module_spi-a3494a5bcbb0e9c2ee098048e74ac33a.jpg"},2501:function(e,t,n){t.Z=n.p+"assets/images/dcdc-5d0fd72054d13b484d1e1f4de9fbdaea.png"},577:function(e,t,n){t.Z=n.p+"assets/images/oled_display_1.3-spi-788bc57679e89729c12d605f88730a1a.png"},7072:function(e,t,n){t.Z=n.p+"assets/images/perfboard-a23a3d3b2e660d345936ddfc09a68704.jpg"},8819:function(e,t,n){t.Z=n.p+"assets/images/screw-866013843a343f8af56a91e11893d4da.jpg"},6686:function(e,t,n){t.Z=n.p+"assets/images/silicone-ead417b0b6122015d5e357bbb6e0c917.jpg"}}]);