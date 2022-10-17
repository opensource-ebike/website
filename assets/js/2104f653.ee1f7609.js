"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[968],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:5},s="Installing the bootloader",p={unversionedId:"display/TSDZ2 wireless project/bootloader",id:"display/TSDZ2 wireless project/bootloader",title:"Installing the bootloader",description:"Components you will need:",source:"@site/docs/display/TSDZ2 wireless project/bootloader.md",sourceDirName:"display/TSDZ2 wireless project",slug:"/display/TSDZ2 wireless project/bootloader",permalink:"/docs/display/TSDZ2 wireless project/bootloader",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/display/TSDZ2 wireless project/bootloader.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"displaySidebar",previous:{title:"TSDZ2 Wireless Project",permalink:"/docs/display/TSDZ2 wireless project/"},next:{title:"Device Firmware Update (DFU)",permalink:"/docs/display/TSDZ2 wireless project/dfu"}},c={},d=[{value:"Wiring",id:"wiring",level:2},{value:"Flashing",id:"flashing",level:2},{value:"Using Windows",id:"using-windows",level:3},{value:"Using Ubuntu",id:"using-ubuntu",level:3},{value:"Congratulations!",id:"congratulations",level:2},{value:"back",id:"back",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-the-bootloader"},"Installing the bootloader"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Components you will need:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"stlinkv2.md"},"STLINK V2 (read before buying)"),": (costs $3)\n",(0,a.kt)("img",{alt:"stlink",src:n(5675).Z,width:"1370",height:"1160"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nRF52840 Nordic USB Dongle"),": from previous steps",(0,a.kt)("br",null),(0,a.kt)("img",{src:n(89).Z,width:"347",height:"244"}),(0,a.kt)("br",null))),(0,a.kt)("h2",{id:"wiring"},"Wiring"),(0,a.kt)("p",null,"For flashing the bootloader, connect the SWDCLK, SWDIO, GND and VBUS pins to the STLinkV2 and follow the flashing instructions below using either Windows or Linux.\nOnce the firmware is flashed, the STLinkV2  connection will not longer be required, as all future updates can be done wirelessly over bluetooth. "),(0,a.kt)("p",null,'The firmware HEX file to flash is "TSDZ2_bootloader_with_sd.hex" ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenSourceEBike/TSDZ2_wireless-bootloader/releases"},"located in github releases")," on the assets section."),(0,a.kt)("p",null,"Schematic for connections:\n",(0,a.kt)("img",{alt:"wiring",src:n(4875).Z,width:"3636",height:"1976"})),(0,a.kt)("p",null,"Wireless board pinout:\n",(0,a.kt)("img",{alt:"Pinout",src:n(8765).Z,width:"1378",height:"1058"})),(0,a.kt)("h2",{id:"flashing"},"Flashing"),(0,a.kt)("h3",{id:"using-windows"},"Using Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download ",(0,a.kt)("a",{parentName:"li",href:"https://gnutoolchains.com/arm-eabi/openocd/"},"openocd for windows")," and unzip the file on your PC desktop"),(0,a.kt)("li",{parentName:"ol"},"Copy the resulting folder to a convenient place on your PC. For ease of access use C:/"),(0,a.kt)("li",{parentName:"ol"},"Rename the folder openocd"),(0,a.kt)("li",{parentName:"ol"},"Copy the Wireless Bootloader .hex file you have previously downloaded into c:/openocd/bin"),(0,a.kt)("li",{parentName:"ol"},"In the Windows search box enter cmd to open a command prompt"),(0,a.kt)("li",{parentName:"ol"},"Enter cd C:/openocd/bin"),(0,a.kt)("li",{parentName:"ol"},"Enter the following. (All in one line)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'openocd.exe -f ../share/openocd/scripts/interface/stlink.cfg -f ../share/openocd/scripts/target/nrf52.cfg -c "program TSDZ2_wireless-bootloader_with_sd-v0.9.0.hex verify" -c "exit"')),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"This will flash and verify the write. If you see ",(0,a.kt)("strong",{parentName:"li"}," Verified OK "),", the flashing has been successful.")),(0,a.kt)("h3",{id:"using-ubuntu"},"Using Ubuntu"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a terminal")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install OpenOCD (to connect to STLinkV2):"),(0,a.kt)("p",{parentName:"li"},"Enter: ",(0,a.kt)("strong",{parentName:"p"},"sudo apt-get install openocd"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(7724).Z,width:"1790",height:"1055"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect the STLinkV2 to the board. For the  nRF52840 Nordic Dongle see the pinout below to connect to the SWDIO, SWDCLK, and GND pins, note that you do not need to connect the RST pin."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(8765).Z,width:"1378",height:"1058"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Note that you will also need to install the STLinkV2 udev rules file that are on the firmware/tools/ folder, so the STLinkV2 can be accessed by the OpenOCD:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo cp 60-st_link_v2.rules /etc/udev/rules.d\nsudo udevadm control --reload-rules\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the terminal window, navigate to the openocd directory, and enter the following command to start the openocd server:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ openocd -f stlink-v2.cfg -f nrf52.cfg\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(497).Z,width:"1799",height:"850"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start another terminal session to access the openocd server, and enter the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ telnet localhost 4444\n")),(0,a.kt)("p",{parentName:"li"},"Next enter the following commands on the telnet terminal:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ reset init\n$ halt\n$ nrf52.dap apreg 1 0x04 0x01\n$ nrf5 mass_erase\n$ program (path to hex)/TSDZ2_bootloader_with_sd.hex verify\n$ reset exit \n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(67).Z,width:"2318",height:"1903"})))),(0,a.kt)("p",null,"This will flash and verify the write.\nIf you see ",(0,a.kt)("strong",{parentName:"p"}," Verified OK "),", the flashing has been successful."),(0,a.kt)("h2",{id:"congratulations"},"Congratulations!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You now have the bootloader installed on the Nordic board."),(0,a.kt)("li",{parentName:"ul"},"Future firmware upgrades can be done wirelessly."),(0,a.kt)("li",{parentName:"ul"},"For more information on how to use the bootloader's Device Firmware Update (DFU) process to install a bootloader update or the remote control firmware or the wireless controller firmware, see ",(0,a.kt)("a",{parentName:"li",href:"./dfu.md"},"Understanding The Bootloader DFU Process"),".")),(0,a.kt)("h2",{id:"back"},(0,a.kt)("a",{parentName:"h2",href:"./index.md"},"back")))}m.isMDXComponent=!0},89:function(e,t,n){t.Z=n.p+"assets/images/NRF52840-0b417dc04f8f74eaf03676dae8f9b607.png"},4875:function(e,t,n){t.Z=n.p+"assets/images/ebike_wireless_bootloader-schematic-aff84b034e2bf89fb574c75e9e4563af.png"},8765:function(e,t,n){t.Z=n.p+"assets/images/nordic_pinout-6c61d93a2e0d56243c231d677b7fedcf.png"},7724:function(e,t,n){t.Z=n.p+"assets/images/openocd-2e5aabf578575c36a6d06e8e583d2cb6.png"},497:function(e,t,n){t.Z=n.p+"assets/images/openocd1-61ffdf4249709ec5137540432a162abe.png"},67:function(e,t,n){t.Z=n.p+"assets/images/openocd2-6cb6c2143382bda2ab93ab3e412509be.png"},5675:function(e,t,n){t.Z=n.p+"assets/images/stlinkv2-96182e9b8a76e92bd5b18bddfc59ea29.png"}}]);