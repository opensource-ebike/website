"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1916],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:6},l="Using the stlinkv2",u={unversionedId:"display/stlinkv2",id:"display/stlinkv2",title:"Using the stlinkv2",description:"STLinkV2 is the programmer to use to flash the TSDZ2 motor firmware and the NRF52840 board bootloader.",source:"@site/docs/display/stlinkv2.md",sourceDirName:"display",slug:"/display/stlinkv2",permalink:"/docs/display/stlinkv2",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/display/stlinkv2.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"displaySidebar",previous:{title:"Device Firmware Update (DFU)",permalink:"/docs/display/dfu"},next:{title:"TSDZ2 Wireless Project",permalink:"/docs/display/TSDZ2 wireless project/"}},p={},c=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Known issues using STLinkV2 clones to update OpenSourceEBike firmware.",id:"known-issues-using-stlinkv2-clones-to-update-opensourceebike-firmware",level:2},{value:"Easy OpenOCD Update Script",id:"easy-openocd-update-script",level:2}],d={toc:c};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-stlinkv2"},"Using the stlinkv2"),(0,i.kt)("p",null,"STLinkV2 is the programmer to use to flash the TSDZ2 motor firmware and the NRF52840 board bootloader."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"stlink",src:n(3857).Z,width:"1370",height:"1160"})),(0,i.kt)("p",null,"You can buy STLinkV2 clones on EBay or Aliexpress for very cheap prices like 2\u20ac (shipping included)"),(0,i.kt)("p",null,"Whilst the cases look the same, there appear to be several different designs of boards inside with different microcontrollers. A few users have reported problems. If you buy one that has issues - you may be able to fix it by updating the firmware - see Troubleshooting below."),(0,i.kt)("p",null,"Some suggestions to buy STLinkV2:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'you can buy from EBay or Aliexpress and search for "STLinkV2"'),(0,i.kt)("li",{parentName:"ul"},"since they are really cheap, buy a few units",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"buy from different sellers and only 1 unit from each seller in case one doesn't work.")))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you have issues using your STLinkV2 clone adapter - try updating the firmware to the latest version."),(0,i.kt)("p",null,"You can get firmware from STMicroelectronics' ",(0,i.kt)("a",{parentName:"p",href:"https://www.st.com/en/development-tools/stsw-link007.html"},"website"),". Note - if you are using a clone this is not supported by the manufacturer. ",(0,i.kt)("strong",{parentName:"p"},"Use at your own risk.")),(0,i.kt)("p",null,"The update tool will show you the current firmware version of your adapter:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"firmware",src:n(255).Z,width:"550",height:"311"})),(0,i.kt)("h2",{id:"known-issues-using-stlinkv2-clones-to-update-opensourceebike-firmware"},"Known issues using STLinkV2 clones to update OpenSourceEBike firmware."),(0,i.kt)("p",null,"If openocd throws the below error when trying to flash any of the EBike firmware then update the STlinkv2 firmware to the latest version using the instructions above."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Error: ST-Link version does not support DAP direct transport")),(0,i.kt)("p",null,"If you get the below error when running openocd to update EBike firmware - make sure you are using the full paths for all referenced target/device scripts as arguments for the openocd command line. The exact paths depend on how you have installed or compiled openocd - and the OS you are using."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Error: invalid command name "dap"')),(0,i.kt)("p",null,"See the following link for more information and other solutions for the above error : ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53714503/openocd-error-invalid-command-name-dap-cant-connect-blue-pill-via-st-link"},"https://stackoverflow.com/questions/53714503/openocd-error-invalid-command-name-dap-cant-connect-blue-pill-via-st-link")),(0,i.kt)("h2",{id:"easy-openocd-update-script"},"Easy OpenOCD Update Script"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy this ",(0,i.kt)("a",{parentName:"li",href:"openocd.cfg"},"config file")," into the same folder as openocd binary - name it openocd.cfg"),(0,i.kt)("li",{parentName:"ul"},"Copy fw into same folder"),(0,i.kt)("li",{parentName:"ul"},"Update filename in script if necessary - default is TSDZ2_bootloader_with_sd.hex"),(0,i.kt)("li",{parentName:"ul"},"Run openocd to flash the firmware")))}f.isMDXComponent=!0},255:function(e,t,n){t.Z=n.p+"assets/images/stlink_fwupdate-f3a6c992d1dd968f52a2fbfec9182d07.png"},3857:function(e,t,n){t.Z=n.p+"assets/images/stlinkv2-96182e9b8a76e92bd5b18bddfc59ea29.png"}}]);