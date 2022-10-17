"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4031],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,N=k["".concat(m,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3298:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={},m="CANBUS",p={unversionedId:"bafang/Hardware/CANBUS/canbus",id:"bafang/Hardware/CANBUS/canbus",title:"CANBUS",description:"Summary",source:"@site/docs/bafang/Hardware/CANBUS/canbus.md",sourceDirName:"bafang/Hardware/CANBUS",slug:"/bafang/Hardware/CANBUS/",permalink:"/docs/bafang/Hardware/CANBUS/",draft:!1,editUrl:"https://github.com/opensource-ebike/site/tree/master/docs/bafang/Hardware/CANBUS/canbus.md",tags:[],version:"current",frontMatter:{},sidebar:"bafangSidebar",previous:{title:"Hardware",permalink:"/docs/bafang/Hardware/"},next:{title:"display_DP_C241",permalink:"/docs/bafang/Hardware/Display/display_DP_C241"}},d={},u=[{value:"Summary",id:"summary",level:2},{value:"DIY CANBUS configuration",id:"diy-canbus-configuration",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Level matching:",id:"level-matching",level:5},{value:"The following Canbus frameid&#39;s have been identified:",id:"the-following-canbus-frameids-have-been-identified",level:5},{value:"Global Enums in BESST code",id:"global-enums-in-besst-code",level:2},{value:"Source and target devices on the canbus.",id:"source-and-target-devices-on-the-canbus",level:5},{value:"References for the BESST USB tool used to send certain CANBUS commands",id:"references-for-the-besst-usb-tool-used-to-send-certain-canbus-commands",level:5},{value:"Known working CANBUS commands",id:"known-working-canbus-commands",level:2},{value:"BESST Speed/Wheel/Circumference Setup",id:"besst-speedwheelcircumference-setup",level:5},{value:"BESST Torque Sensor Calibration",id:"besst-torque-sensor-calibration",level:5},{value:"BESST Position Sensor Calibration",id:"besst-position-sensor-calibration",level:5},{value:"Controller % Battery/Level Informations",id:"controller--batterylevel-informations",level:5},{value:"Controller Speed/Current/Voltage/Temperature Informations",id:"controller-speedcurrentvoltagetemperature-informations",level:5},{value:"Controller Speed/Wheel/Circumference Informations",id:"controller-speedwheelcircumference-informations",level:5},{value:"Controller State Informations",id:"controller-state-informations",level:5},{value:"HMI Level/Light Setup",id:"hmi-levellight-setup",level:5},{value:"Torque Sensor",id:"torque-sensor",level:5},{value:"CAN messages during operations",id:"can-messages-during-operations",level:2},{value:"HMI",id:"hmi",level:5},{value:"BESST",id:"besst",level:5},{value:"Controller (Only with the presence of the HMI or BESST)",id:"controller-only-with-the-presence-of-the-hmi-or-besst",level:5},{value:"Torque Sensor",id:"torque-sensor-1",level:5},{value:"Battery",id:"battery",level:5},{value:"CAN messages ondemand",id:"can-messages-ondemand",level:2},{value:"Torque Sensor",id:"torque-sensor-2",level:4},{value:"Controller",id:"controller",level:4},{value:"Battery",id:"battery-1",level:4},{value:"CANBUS controller update procedure",id:"canbus-controller-update-procedure",level:2}],k={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"canbus"},"CANBUS"),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"These documents, dumps and projects explain everything we currently know about the Bafang CANBUS protocol"),(0,l.kt)("h2",{id:"diy-canbus-configuration"},"DIY CANBUS configuration"),(0,l.kt)("p",null,"To configure the Bafang M500 / M600 motor without using the BESST programmer, you can use this interface."),(0,l.kt)("p",null,"Link interface USB to CAN on Amazon:\n",(0,l.kt)("a",{parentName:"p",href:"https://www.amazon.co.uk/USB-Converter-"},"https://www.amazon.co.uk/USB-Converter-")," ... 709&sr=8-2"),(0,l.kt)("p",null,"Link cables Bafang HMI M500/M600 on e-bike-technologies:\n",(0,l.kt)("a",{parentName:"p",href:"https://www.e-bike-technologies.de/inde"},"https://www.e-bike-technologies.de/inde")," ... 5-f-detail\n",(0,l.kt)("a",{parentName:"p",href:"https://www.e-bike-technologies.de/inde"},"https://www.e-bike-technologies.de/inde")," ... 5-f-detail"),(0,l.kt)("p",null,'Below are the software and the instructions for configuration and use.\nYou might need to set InnoMaker to "loopback mode" for the settings to stick.'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TODO: Insert images")),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://endless-sphere.com/forums/viewtopic.php?f=28&t=100777&start=400#p1595302"},"https://endless-sphere.com/forums/viewtopic.php?f=28&t=100777&start=400#p1595302"),")"),(0,l.kt)("h2",{id:"pinout"},"Pinout"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HIGO-B5-Female:\n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n /    1   5 \u2502\n\u2502 2         \u2502\n \\    3   4 \u2502\n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 Orange: VCC/Ctrl\n2 White : CL\n3 Brown : P+\n4 Green : CH\n5 Black : GND\n\nBit Rate 250 kBit/s\n")),(0,l.kt)("h5",{id:"level-matching"},"Level matching:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"L9"),(0,l.kt)("th",{parentName:"tr",align:null},"L5"),(0,l.kt)("th",{parentName:"tr",align:null},"L3"),(0,l.kt)("th",{parentName:"tr",align:null},"Byte"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Walk"),(0,l.kt)("td",{parentName:"tr",align:null},"Walk"),(0,l.kt)("td",{parentName:"tr",align:null},"Walk"),(0,l.kt)("td",{parentName:"tr",align:null},"06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0D")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"03")))),(0,l.kt)("h5",{id:"the-following-canbus-frameids-have-been-identified"},"The following Canbus frameid's have been identified:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("th",{parentName:"tr",align:null},"second-last-digit"),(0,l.kt)("th",{parentName:"tr",align:null},"last-digit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"announceUpgrade"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"00"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startUpgradeTransfer"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"01"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulse"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sensorSignal"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"31"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerInformation_1"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerInformation_2"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerInformation_3"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerInformation_4"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerInformation_5"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"34"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryInformation_1"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"34"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryInformation_2"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"34"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"besst"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"35"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transmissionInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transmissionInformation_1"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transmissionInformation_2"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transmissionInformation_3"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eletronicLockInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"37"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hardwareVersionNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"softwareVersionNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modelNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serialNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customerNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorCode"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bootLoad"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_1"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_2"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_3"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"13")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_4"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_5"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_6"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_7"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conParams_8"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sensorCalibration"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"61"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"positionSensorCalibration"),(0,l.kt)("td",{parentName:"tr",align:null},"SET"),(0,l.kt)("td",{parentName:"tr",align:null},"62"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear_Hmi_Total_Mileage"),(0,l.kt)("td",{parentName:"tr",align:null},"SET"),(0,l.kt)("td",{parentName:"tr",align:null},"62"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set_Hmi_Time"),(0,l.kt)("td",{parentName:"tr",align:null},"SET"),(0,l.kt)("td",{parentName:"tr",align:null},"62"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear_Hmi_Single_Mileage"),(0,l.kt)("td",{parentName:"tr",align:null},"SET"),(0,l.kt)("td",{parentName:"tr",align:null},"62"),(0,l.kt)("td",{parentName:"tr",align:null},"03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerFeatures"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"62"),(0,l.kt)("td",{parentName:"tr",align:null},"15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataOfHmi"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataOfHmi_1"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataOfHmi_2"),(0,l.kt)("td",{parentName:"tr",align:null},"GET/SET"),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataOfHmi_3"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataOfHmi_4"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"designInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chargingInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation_1"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation_2"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation_3"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation_4"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation_5"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation_6"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCellsInformation_7"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batteryCharacteristics"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set_Hmi_Card"),(0,l.kt)("td",{parentName:"tr",align:null},"SET"),(0,l.kt)("td",{parentName:"tr",align:null},"65"),(0,l.kt)("td",{parentName:"tr",align:null},"00")))),(0,l.kt)("h2",{id:"global-enums-in-besst-code"},"Global Enums in BESST code"),(0,l.kt)("h5",{id:"source-and-target-devices-on-the-canbus"},"Source and target devices on the canbus."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Torque sensor   : 0x01\nController      : 0x02\nHMI             : 0x03\nBattery         : 0x04\nBESST interface : 0x05\nAdvanced        : 0x1f\n")),(0,l.kt)("h5",{id:"references-for-the-besst-usb-tool-used-to-send-certain-canbus-commands"},"References for the BESST USB tool used to send certain CANBUS commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"WRITE_CMD           : 0x00\nREAD_CMD            : 0x01\nNORMAL_ACK          : 0x02\nERROR_ACK           : 0x03\nLONG_START_CMD      : 0x04\nLONG_TRANG_CMD      : 0x05\nLONG_END_CMD        : 0x06\nLONG_WARNING_CMD    : 0x07\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"OPT_HARDWARE_VERSION    : 0x00\nOPT_SOFTWARE_VERSION    : 0x01\nOPT_MODEL_VERSION       : 0x02\nOPT_SN                  : 0x03\nOPT_CLIENT_NO           : 0x04\n")),(0,l.kt)("p",null,"These can be used using our CANBUS frameid calculator here:\n",(0,l.kt)("a",{parentName:"p",href:"https://ornias1993.github.io/Bafang_M500_M600/index.html"},"https://ornias1993.github.io/Bafang_M500_M600/index.html")),(0,l.kt)("h2",{id:"known-working-canbus-commands"},"Known working CANBUS commands"),(0,l.kt)("h5",{id:"besst-speedwheelcircumference-setup"},"BESST Speed/Wheel/Circumference Setup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Decoding example: 05103203 6 70 17 B5 01 C0 08\nID: 05103203\nSpeed Limit Byte   1/0  : 70 17 -> 0x1770              = 6000   => 60.00km/h\nWheel Size Byte    3/2  : B5 01 -> 0x01B5 -> 0x01B . 5 = 27 . 5 => 27.5"\nCircumference Byte 5/4  : C0 08 -> 0x08C0              = 2240   => 2240mm\n\nDecoding example: 05103203 6 C4 09 D0 01 C0 08\nID: 05103203\nSpeed Limit Byte   1/0  : C4 09 -> 0x09C4              = 2500   => 25.00km/h\nWheel Size Byte    3/2  : D0 01 -> 0x01D0 -> 0x01D . 0 = 29 . 0 => 29.0"\nCircumference Byte 5/4  : E8 08 -> 0x08E8              = 2280   => 2280mm\n\nLittle-Endian byte order!\n')),(0,l.kt)("h5",{id:"besst-torque-sensor-calibration"},"BESST Torque Sensor Calibration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID: 05106101\nNumbers Byte: 0\n")),(0,l.kt)("h5",{id:"besst-position-sensor-calibration"},"BESST Position Sensor Calibration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID: 05116201\nNumbers Bytes: 0\n")),(0,l.kt)("h5",{id:"controller--batterylevel-informations"},"Controller % Battery/Level Informations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID: 02F83200\nNumbers Byte: 8\n% Battery Byte 0        : 50%(0x32) = 32\nByte 1/2/3              : 00 00 00\nByte 4                  : EE\nByte 5                  : 02\nLevel Byte 6/7          : FF FF\n")),(0,l.kt)("h5",{id:"controller-speedcurrentvoltagetemperature-informations"},"Controller Speed/Current/Voltage/Temperature Informations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Decoding example: 02F83201 8 C4 09 E8 03 E2 14 32 3C\nID: 02F83201\nNumbers Byte: 8\nSpeed Byte   1/0    : C4 09 -> 0x09C4 = 2500 => 25.00km/h\nCurrent Byte 3/2    : E8 03 -> 0x03E8 = 1000 => 10.00A\nVoltage Byte 5/4    : E2 14 -> 0x14E2 = 5346 => 53.46V\nTemp. Control. Byte 6   : 32    -> 0x32   = 50   -> 50 - 40 = 10 => 10\xb0C\nTemp. Motor Byte 7  : 3C    -> 0x3C   = 60   -> 60 - 40 = 20 => 20\xb0C\n\nLittle-Endian byte order!\n")),(0,l.kt)("h5",{id:"controller-speedwheelcircumference-informations"},"Controller Speed/Wheel/Circumference Informations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Decoding example: 02F83203 6 70 17 B5 01 C0 08\nID: 02F83203\nSpeed Limit Byte   1/0 : 70 17 -> 0x1770              = 6000   => 60.00km/h\nWheel Size Byte    3/2 : B5 01 -> 0x01B5 -> 0x01B . 5 = 27 . 5 => 27.5"\nCircumference Byte 5/4 : C0 08 -> 0x08C0              = 2240   => 2240mm\n\nDecoding example: 02F83203 6 C4 09 D0 01 C0 08\nID: 02F83203\nSpeed Limit Byte   1/0 : C4 09 -> 0x09C4              = 2500   => 25.00km/h\nWheel Size Byte    3/2 : D0 01 -> 0x01D0 -> 0x01D . 0 = 29 . 0 => 29.0"\nCircumference Byte 5/4 : E8 08 -> 0x08E8              = 2280   => 2280mm\n\nLittle-Endian byte order!\n\n')),(0,l.kt)("h5",{id:"controller-state-informations"},"Controller State Informations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID: 02FF1200\nNumbers Byte: 1\nBit0 Brake state          : 1=Brake\nBit1 Motor stopped        : 1=Stopped\nBit2 Battery undervoltage : 1=Undervoltage\n")),(0,l.kt)("h5",{id:"hmi-levellight-setup"},"HMI Level/Light Setup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'ID: 03106300\nNumbers Byte: 4\nLevels number Byte 0    : 03 / 05 / 09\nSet Level Byte 1        : Walk = 06 / 0 = 00 / 1 = 01 / 2 = 0B / 3 = 0C / 4 = 0D / 5 = 02 / 6 = 15 / 7 = 16 / 8 = 17 / 9 = 03\nButton "+" Byte 2       : Off = 00 / On = 02 / Off with light = 01 / On with light = 03\nBoost mode Byte 3       : Off = 01 / On = 00 (after two seconds of pressing the power button)\n')),(0,l.kt)("h5",{id:"torque-sensor"},"Torque Sensor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID: 01F83100\nNumbers Byte: 4\nTorque Byte 0/1     : EE 02\nCadence Byte 2      : 00\nProgressive Byte 3  : 01\n")),(0,l.kt)("h2",{id:"can-messages-during-operations"},"CAN messages during operations"),(0,l.kt)("h5",{id:"hmi"},"HMI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"03106300 every 100ms\n")),(0,l.kt)("h5",{id:"besst"},"BESST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"05F83501 every 1016ms\n")),(0,l.kt)("h5",{id:"controller-only-with-the-presence-of-the-hmi-or-besst"},"Controller (Only with the presence of the HMI or BESST)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"02F83200 every 1500ms\n02F83201 every 280ms\n02F83202 every 100ms\n02F83203 every 450ms\n02F83205 every 300ms\n02FF1200 every 490ms\n")),(0,l.kt)("h5",{id:"torque-sensor-1"},"Torque Sensor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"01F83100 every 10ms\n")),(0,l.kt)("h5",{id:"battery"},"Battery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"04F83400\n04F83401\n04F83402\n")),(0,l.kt)("h2",{id:"can-messages-ondemand"},"CAN messages ondemand"),(0,l.kt)("h4",{id:"torque-sensor-2"},"Torque Sensor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"03096000 Hardware Version Number\n03096001 Software Version Number\n03096002 Model Number\n03096003 Serial Number\n03096004 Customer Number\n")),(0,l.kt)("h4",{id:"controller"},"Controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"03116000 Hardware Version Number\n03116001 Software Version Number\n03116002 Model Number\n03116003 Serial Number\n")),(0,l.kt)("h4",{id:"battery-1"},"Battery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"03216000 Hardware Version Number\n03216001 Software Version Number\n03216002 Model Number\n03216003 Serial Number\n03216004 Customer Number\n")),(0,l.kt)("h2",{id:"canbus-controller-update-procedure"},"CANBUS controller update procedure"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Start continuesly announcing that the host (pc) is ready to transfer a firmware update:")),(0,l.kt)("p",null,"M500\n",(0,l.kt)("inlineCode",{parentName:"p"},'05FF3005 - 00 ( BESST "waiting in firmware update mode" or "Trying to transfer")\n05112000 - 88 45 02 00 (Polling: "Is Controller ready for firmware?")')," "),(0,l.kt)("p",null,"M600\n",(0,l.kt)("inlineCode",{parentName:"p"},'05FF3005 - 00 ( BESST "waiting in firmware update mode" or "Trying to transfer")\n05112000 - 89 45 02 00 (Polling: "Is Controller ready for firmware?")')," "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Wait for Controller response:"),"\nOnce you recieve this confirmation, you can stop announcing as stated in step 1."),(0,l.kt)("p",null,"M500"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'022A2000 - 88 45 82 (Response: "Controller ready to recieve firmware")\n')),(0,l.kt)("p",null,"M600"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'022A2000 - 89 45 82 (Response: "Controller ready to recieve firmware")\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. send first package:")),(0,l.kt)("p",null,"This package contains the length of the file, minus the first 16 hex bytes, transformed into hex.\nWe will use ## ## ## to represent this value."),(0,l.kt)("p",null,"``\n05142001 - ## ## ## (Transfer started from BESST, contains length in hex)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. wait for response first package:")),(0,l.kt)("p",null,"We now need to wait for the response from the controller before actually starting to send the firmware"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"022A2001 - 00 (Transfer start ack from Controller)")," "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5. send data:")),(0,l.kt)("p",null,"We now send the firmware in 8 byte chunks, minus the first 16 hex bytes.\nEach chunk will be numbered in hexadecimal, starting from 0000. After each chunk we will recieve a response verifying the transfer has been completed successfully.\nWe will use #### to represent the ever incrementing chunk numbers. While we list only one response, ofcoarse this means multiple chunks get send with incrementing frame numbers.\nWe will use XX XX XX XX XX XX XX XX to represent the file content that is getting transfered."),(0,l.kt)("p",null,"Do not send the last data package this way though..."),(0,l.kt)("p",null,"Data send:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0515#### - XX XX XX XX XX XX XX XX (Data transfer packages)\n")),(0,l.kt)("p",null,"Response from controller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"022A#### - (Data transfer packages ack from controller)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"6. send last data and end transfer:")),(0,l.kt)("p",null,"This package needs to go towards a different frameID, to signal the controller that the transfer has been completed.\nThe content of the package can vary in length up to 8 bytes, which we will simulate by using XX.\nThe #### is still the autoincrement number from step 5."),(0,l.kt)("p",null,"Data send:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0516#### - XX (Transfer completed from BESST)\n")),(0,l.kt)("p",null,"Response from controller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"022A#### - (Data transfer packages ack from controller)\n")))}s.isMDXComponent=!0}}]);