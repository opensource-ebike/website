"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8608],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(o),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||a;return o?r.createElement(d,i(i({ref:t},c),{},{components:o})):r.createElement(d,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7964:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=o(3117),n=o(102),a=(o(7294),o(3905)),i=["components"],l={},s=void 0,p={unversionedId:"tsdz2/Flash-the-firmware-on-860C-850C-using-bootloader",id:"tsdz2/Flash-the-firmware-on-860C-850C-using-bootloader",title:"Flash-the-firmware-on-860C-850C-using-bootloader",description:"\\\\TOC\\\\",source:"@site/docs/tsdz2/Flash-the-firmware-on-860C-850C-using-bootloader.md",sourceDirName:"tsdz2",slug:"/tsdz2/Flash-the-firmware-on-860C-850C-using-bootloader",permalink:"/docs/tsdz2/Flash-the-firmware-on-860C-850C-using-bootloader",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/Flash-the-firmware-on-860C-850C-using-bootloader.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"Flash-the-firmware-on-850C-using-SWD",permalink:"/docs/tsdz2/Flash-the-firmware-on-850C-using-SWD"},next:{title:"Flash-the-firmware-on-Bafang-850C-LCD",permalink:"/docs/tsdz2/Flash-the-firmware-on-Bafang-850C-LCD"}},c={},u=[{value:"Connector",id:"connector",level:2}],h={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"_","_","TOC","_","_"),(0,a.kt)("p",null,'You can install the firmware using a \\"bootloader box\\" connected to the\ndisplay connector (the one the connects to TSDZ2 motor) and to PC.'),(0,a.kt)("h1",{id:"diy_bootloader_box"},"DIY bootloader box"),(0,a.kt)("p",null,"If you don\\'t want to buy the original bootloader box from the\nmanufacturer or some shops, you can always use any USB\\<-",">",'UART 3.3V,\nlike the cheap ones used on Arduino. Also you will need to power the\ndisplay with your ebike battery or with a \\"power booster board\\".'),(0,a.kt)("p",null,"If you decide to use a power booster board, please note that is probably\nrated to output 35V max, make sure you stay within the 27-35V range\n(unlike the picture below shows) for the output, or you\\'ll most likely\nstrain the on-board voltage regulator for the USB-TTL module and\nirreversibly damage it."),(0,a.kt)("p",null,"User elfnino\n",(0,a.kt)("a",{parentName:"p",href:"wrote_on_the_forum",title:"wikilink"},"<https://endless-sphere.com/forums/viewtopic.php?f=30&t=93818&start=3875#p1504093>"),"\nabout his own DIY bootloader box that you can take as an example:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/850C-bootloader_box-1.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/850C-bootloader_box-1.jpg")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/850C-bootloader_box-2.jpg"},"https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/850C-bootloader_box-2.jpg")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Display connector"),": I recommend to get male to male version of\nthe Bafang display extension cable, and use one connector for the\nbootloader box and other to connect 860C/850C with TSDZ2:\n",(0,a.kt)("a",{parentName:"li",href:"https://www.aliexpress.com/item/32861639327.html"},"1"),". See more\ndetailed specification of the connector in the\n",(0,a.kt)("inlineCode",{parentName:"li"},'<a href="#Connector">'),"{=html}next section",(0,a.kt)("inlineCode",{parentName:"li"},"</a>"),"{=html}."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"USBtoUART adapter"),": there are more types available (for instance,\nsearch on Ebay for Arduino FTDI cable) I recommend the one on the\npicture (CP2102 USB-TTL board) with diamond like chip placement.\nOther types might be more sensitive to AC power supply of your PC or\nlaptop: ",(0,a.kt)("a",{parentName:"li",href:"https://www.aliexpress.com/item/32288431622.html"},"2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"power booster board (Step Up buck DC booster)"),": (optional, only\nneeded if your prefer to not use your ebike battery to power the\ndisplay) needed to power 860C/850C directly from the USB 5V supply,\nmake sure there is at least 27V available on the booster output:\n",(0,a.kt)("a",{parentName:"li",href:"https://www.aliexpress.com/item/32807600304.html"},"3"))),(0,a.kt)("h2",{id:"connector"},"Connector"),(0,a.kt)("p",null,"The connector on the display is the HIGO mini-B (also known as Julet\nGen-1, or simply e-bike 6\u2009mm round waterproof connector) 5-pin\n(green---this series of connectors is colour-coded according to the\nnumber of pins (both male and female are the same colour)). The display\nhas a female connector, so you will need to buy a\n",(0,a.kt)("inlineCode",{parentName:"p"},"<b>"),"{=html}male",(0,a.kt)("inlineCode",{parentName:"p"},"</b>"),"{=html} connector. You can find one on Ebay or\nAliexpress, and also on many other online shops."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Bafang 860C/850C wires"),"   ",(0,a.kt)("strong",{parentName:"p"},"motor controller wire function"),"\nbrown wire                   (P+) battery voltage\norange wire                  Vin\nblack wire                   GND ground\ngreen wire                   UART TX motor controller\nwhite wire                   UART RX motor controller"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'Note that \\"PL\\" label on the following image is the same as \\"Vin\\":\\\n',(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/Color_LCD/raw/master/Bafang_color_LCD_860C/850C_860C_connector.jpg"},"https://github.com/OpenSource-EBike-firmware/Color_LCD/raw/master/Bafang_color_LCD_860C/850C_860C_connector.jpg")),(0,a.kt)("h1",{id:"flash_firmware"},"Flash firmware"),(0,a.kt)("p",null,"0","."," Your operating system may or may not have automatically installed a\ndriver for the USB to UART adapter. If you are using the one recommended\nabove, it is either the same or similar as the one used in the Eco\nCycles box, so the driver download they recommend will also work for us\n(",(0,a.kt)("a",{parentName:"p",href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"},"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"),")."),(0,a.kt)("p",null,"1","."," download our most recent firmware here (860C /\n850C_vx.x.x-bootloader.bin):\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSource-EBike-firmware/Color_LCD/releases"},"https://github.com/OpenSource-EBike-firmware/Color_LCD/releases")),(0,a.kt)("p",null,"2","."," follow the guide written Eco Cycles (sorry, Windows software only)\nfor how to install the firmware (use version you did download on 1.):\n",(0,a.kt)("a",{parentName:"p",href:"https://www.eco-ebike.com/blogs/eco-cycles-instructionals/850c-tsdz2-open-source-firmware-bootloader-update-tutorial"},"https://www.eco-ebike.com/blogs/eco-cycles-instructionals/850c-tsdz2-open-source-firmware-bootloader-update-tutorial")),(0,a.kt)("p",null,'After you have selected the firmware file for 850c display with the\n\\"OpenFirmWare\\" button and pushed the \\"UpdateFirmWare\\" button, if the\nActivity Log shows \\"waiting',".",'..\\" repeatedly, even after a quick press\nof the power button on the display, check that the display LCD screen\nshows nothing but black. If the flashing does not start and the message\nin the program kept repeating \\"waiting',".",'..\\", you might be able to get\nsome information from your USB to UART device (for example, some devices\nhave LEDs that can show voltage present on transmit or receive. If you\npower the display on and off with a long press of the power button, you\nmay see LED behavior to help you determine the problem). Also, while the\nAPT software is waiting, the numbers values near the APT window at the\nbottom labelled \\"Tx\\" are constantly increasing, while number near the\nwindow labelled \\"Rx\\" stays at \\"0\\". This means that there is a\nproblem with Tx and/or Rx connection. Check your wiring for breaks or\nreversal and try again.'),(0,a.kt)("p",null,"(The Tx count was going up, while the Rx stayed at zero, however, after\nswitching the display on using the remote power button, the Rx count\nstarted going up. I kept switching the display on and off until the\nupdate started proceeding. It only took several power cycles.)"))}m.isMDXComponent=!0}}]);