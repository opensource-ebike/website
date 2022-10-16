"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=s(n),c=r,d=h["".concat(u,".").concat(c)]||h[c]||p[c]||o;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={},u=void 0,s={unversionedId:"tsdz2/development/TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares-DEVELOPMENT",id:"tsdz2/development/TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares-DEVELOPMENT",title:"TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares-DEVELOPMENT",description:"NOTE: Before start using the firmware, you must configure correctly the",source:"@site/docs/tsdz2/development/TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares-DEVELOPMENT.md",sourceDirName:"tsdz2/development",slug:"/tsdz2/development/TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares-DEVELOPMENT",permalink:"/docs/tsdz2/development/TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares-DEVELOPMENT",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/development/TSDZ2-and-KT-LCD3-advanced-features-with-Flexible-OpenSource-firmwares-DEVELOPMENT.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"Improved-communications-protocol",permalink:"/docs/tsdz2/development/Improved-communications-protocol"},next:{title:"Development",permalink:"/docs/tsdz2/development/"}},m={},p=[{value:"0: General Basic setup",id:"general_basic_setup",level:2},{value:"1: Battery voltage &amp; current setup",id:"battery_voltage_current_setup",level:2},{value:"2: Battery power setup",id:"battery_power_setup",level:2},{value:"3: Assist level setup",id:"assist_level_setup",level:2},{value:"4: startup power boost",id:"startup_power_boost",level:2},{value:"5: motor temperature protection",id:"motor_temperature_protection",level:2},{value:"How it works",id:"how_it_works",level:3}],h={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NOTE: Before start using the firmware, you must configure correctly the\noptions on LCD3. For instance, you should configure your battery low\nvoltage cut off (battery voltage when it is discharged) and all the\nother parameters ","-","- follow the next section."),(0,o.kt)("p",null,"KT-LCD3 shows and/or configure the following from TSDZ2 motor:"),(0,o.kt)("h1",{id:"main_screen"},"1. Main screen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"<u>"),"{=html}Main screen",(0,o.kt)("inlineCode",{parentName:"strong"},"</u>"),"{=html}"),": this is the default screen\nafter turn on the LCD.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}assist level",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: Assist level\nscales/amplify the torque sensor signal, if you want a higher\nassist level from the motor, choose the max assist level value.\nAssist level has 5 levels in total and user can define (on\nfirmware configuration) a custom scale value for each level.\nLevel 0 keep always the motor disabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}ebike wheel speed",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: the value can be\nshown in kms or mph."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}battery power",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: real time value in watts\nof the power being draw from the battery."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}battery state of charge",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: 6 different\nlevels. When battery is empty, the empty symbol on LCD will also\nblink (state of charge is based on battery voltage and can be\nsetup on the motor controller firmware configuration)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}lights",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: enabled with a button up long\npress, the motor controller will enable the ebike lights. LCD\nbacklight will also be enabled. (backlight intensity can be\nsetup on the motor controller firmware configuration)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}brake",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: LCD symbol is enabled when user\npress the ebike brakes, good to check that sensor brakes are\nworking."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}walk assist",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: although it is implemented\non LCD, it is not yet implemented on the motor controller.\nEnabled with a button down long press."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}odometer field",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: the following\ninformation will cycle with on/off button click",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}battery voltage",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see your battery\npack voltage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}battery current",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the current\nbeing draw from your battery pack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}battery power",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the accumulated\nbattery power (in watts/hour) draw from your battery pack,\nsince last battery full charge. This value is automatically\nreset when LCD turns on and battery voltage equals to\ncharged battery voltage - this value can also be reset or\nset to a custom value on the configurations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}pedal cadence",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the pedals\ncadence in rotations per minute."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}battery state of charge in percentage",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}:\nthis value can be shown as an option on the temperature field.\nThe percentage is based on the accumulated battery power draw\nfrom your battery pack and user can define on LCD configurations\nmenu, the battery pack total watts/hour.")))),(0,o.kt)("h1",{id:"max_battery_power_screen"},"2. Max battery power screen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"<u>"),"{=html}Max battery power screen",(0,o.kt)("inlineCode",{parentName:"strong"},"</u>"),"{=html}"),": Motor\ncontroller will automatically choose a battery current in a way to\nlimit the max battery power usage. The battery current value will\nnever be higher than the max battery current setup on the\nconfigurations screen. Long click on on/off and up buttons to enter\non this screen. Up and down buttons to increase/decrease the value.\nLong click of on/off button lo leave.")),(0,o.kt)("h1",{id:"configurations_screen"},"3. Configurations screen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"<u>"),"{=html}Configurations screen",(0,o.kt)("inlineCode",{parentName:"strong"},"</u>"),"{=html}"),": long click on up\nand down buttons to enter on this screen. On/off button click to\nenter on subscreens and on/off button click to cycle on subscreens,\nlong press on/off to exit menue")),(0,o.kt)("p",null,"THE FOLLOWING CONFIGURATION VALUES ARE FOR VERSION 10!! YOU ALLWAYS NEED\nTO FLASH SAME VERSION ON BOTH, MOTOR AND LCD"),(0,o.kt)("h2",{id:"general_basic_setup"},"0: General Basic setup"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"submenu number"),"   ",(0,o.kt)("strong",{parentName:"p"},"configuration name"),"   ",(0,o.kt)("strong",{parentName:"p"},"default value"),"   ",(0,o.kt)("strong",{parentName:"p"},"description"),"\n0                    Maximum wheel speed      50                  Put in your speed limit (by law) to run legal on public roads , the motor will fade out from - 0.5 km/h to +2,0 km/h in Europe often 25 km/h\n1                    Wheel perimeter in mm    2050                first estimate: 26",(0,o.kt)("em",{parentName:"p"},"= 2050; 27"),"= 2150; 27.5",(0,o.kt)("em",{parentName:"p"},"=2215; 28"),"= 2250; 29\\'\\'=2300\n2                    Speed Unit               0 km/h              0 is km/h and 1 is miles per hour ( british miles of course)"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"battery_voltage_current_setup"},"1: Battery voltage & current setup"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"submenu number"),"   ",(0,o.kt)("strong",{parentName:"p"},"configuration name"),"        ",(0,o.kt)("strong",{parentName:"p"},"default value"),"   ",(0,o.kt)("strong",{parentName:"p"},"description"),"\n0                    Number of cells               13                  24V -",">","6/7?; 36v-",">","10; 48V-",">","13 based on the voltage of comon Samsung or Parasonic cells\n1                    Maximum current of battery    16 (amps)           This is the maximum current that will be pulled from your batteries by the TSDZ2 motor controller. This value is limited internally by the firmware to the safe value of 18 amps.\n2                    battery low cut-off voltage   39                  The controller will reduce power to stay over this limit! usualy 2.85-3.05 V per cell of (39.0 (3.0 ","*"," 13 = 39.0)). The standard Samsung cells allow down to 2.75V but you need some savety margine because not all cells are discharging in the same way, but by setting too high you loose range power on a discharged battery and capacity I like 29V for 10 Cells but 30V is saver"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"battery_power_setup"},"2: Battery power setup"),(0,o.kt)("p",null,"+----------------+----------------+----------------+----------------+\n| ",(0,o.kt)("strong",{parentName:"p"},"submenu      | *              | "),"default      | ",(0,o.kt)("em",{parentName:"p"},"              |\n| number**       | "),"configuration | value",(0,o.kt)("strong",{parentName:"p"},"        | *description")," |\n|                | name**         |                |                |\n+----------------+----------------+----------------+----------------+\n| 0              | Enable /       | 0              | Enable/disable |\n|                | disable show   |                | for the gauge  |\n|                | the percentage |                | in the         |\n|                | of battery     |                | temperature    |\n|                | charge (SOC)   |                | field. 0 to    |\n|                | in temperature |                | disable and 1  |\n|                | field          |                | to enable.     |\n+----------------+----------------+----------------+----------------+\n| 1              | Increment or   | 0              | You can switch |\n|                | decrement      |                | if the         |\n|                |                |                | percentage     |\n|                |                |                | should go form |\n|                |                |                | 0% - 100% or   |\n|                |                |                | from 100% to   |\n|                |                |                | 0% - set 0 for |\n|                |                |                | the first      |\n|                |                |                | option and 1   |\n|                |                |                | for the other. |\n+----------------+----------------+----------------+----------------+\n| 2              | Voltage to     | 54.2 (volts)   | On power on    |\n|                | reset Wh       |                | the LCD, this  |\n|                | counter        |                | value is       |\n|                |                |                | compared to    |\n|                |                |                | the battery    |\n|                |                |                | voltage and if |\n|                |                |                | is lower,      |\n|                |                |                | means that     |\n|                |                |                | battery is     |\n|                |                |                | fully charged  |\n|                |                |                | and the Wh     |\n|                |                |                | counter is     |\n|                |                |                | reset.\\        |\n|                |                |                | To find the    |\n|                |                |                | correct value  |\n|                |                |                | for this       |\n|                |                |                | field, fully   |\n|                |                |                | charge your    |\n|                |                |                | battery and    |\n|                |                |                | measure the    |\n|                |                |                | voltage on     |\n|                |                |                | LCD3, use a    |\n|                |                |                | slight lower   |\n|                |                |                | voltage value  |\n|                |                |                | for this       |\n|                |                |                | field,         |\n|                |                |                | example: my    |\n|                |                |                | 48V battery    |\n|                |                |                | charges up to  |\n|                |                |                | 54.6 volts and |\n|                |                |                | so I use the   |\n|                |                |                | value 54.2.    |\n+----------------+----------------+----------------+----------------+\n| 3              | Total watt     | 0              | Adjust the     |\n|                | hour           |                | battery pack   |\n|                |                |                | power. You can |\n|                |                |                | fully charge   |\n|                |                |                | the battery    |\n|                |                |                | and then       |\n|                |                |                | discharge it   |\n|                |                |                | fully and use  |\n|                |                |                | the measured   |\n|                |                |                | value to input |\n|                |                |                | here. The      |\n|                |                |                | value that     |\n|                |                |                | supplier give  |\n|                |                |                | you is often   |\n|                |                |                | to a quite     |\n|                |                |                | high, you      |\n|                |                |                | should expect  |\n|                |                |                | a value of     |\n|                |                |                | maybe 85% -    |\n|                |                |                | 90% (I use 350 |\n|                |                |                | for my 386 wh  |\n|                |                |                | battery).      |\n+----------------+----------------+----------------+----------------+\n| 4              | Used power     | 0              | Counted value  |\n|                | (wh) of        |                | for used watt  |\n|                | battery        |                | hour from the  |\n|                |                |                | battery. This  |\n|                |                |                | value is reset |\n|                |                |                | automatically  |\n|                |                |                | when you power |\n|                |                |                | on the LCD and |\n|                |                |                | the battery is |\n|                |                |                | fully charged. |\n+----------------+----------------+----------------+----------------+"),(0,o.kt)("h2",{id:"assist_level_setup"},"3: Assist level setup"),(0,o.kt)("p",null,"Here you can choose how many assist levels are used (the ones you can\nchoose on LCD3 when clicking up and down buttons). You can also choose\nthe max power value in watts that motor will use to assist you."),(0,o.kt)("p",null,"+----------------+----------------+----------------+----------------+\n| ",(0,o.kt)("strong",{parentName:"p"},"submenu      | *              | "),"default      | ",(0,o.kt)("em",{parentName:"p"},"              |\n| number**       | "),"configuration | value",(0,o.kt)("strong",{parentName:"p"},"        | *description")," |\n|                | name**         |                |                |\n+----------------+----------------+----------------+----------------+\n| 0              | Number of      | 9              | Please select  |\n|                | assist levels  |                | the number of  |\n|                |                |                | assist levels  |\n|                |                |                | you like to    |\n|                |                |                | use from min.  |\n|                |                |                | 1 to max. 9    |\n+----------------+----------------+----------------+----------------+\n| 1              | Assist level 1 | 400            | Max value of   |\n|                | power          |                | motor energy   |\n|                |                |                | (in watts)     |\n|                |                |                | that motor     |\n|                |                |                | will use to    |\n|                |                |                | assist you, on |\n|                |                |                | this assist    |\n|                |                |                | level. The     |\n|                |                |                | motor will use |\n|                |                |                | this max value |\n|                |                |                | only when you  |\n|                |                |                | hit the max    |\n|                |                |                | torque sensor  |\n|                |                |                | force ","*"," max   |\n|                |                |                | pedal          |\n|                |                |                | cadence.\\      |\n|                |                |                | \\              |\n|                |                |                | Use higher     |\n|                |                |                | values (more   |\n|                |                |                | than what      |\n|                |                |                | motor can      |\n|                |                |                | give) to get   |\n|                |                |                | more           |\n|                |                |                | sensitivity    |\n|                |                |                | from the       |\n|                |                |                | torque sensor, |\n|                |                |                | like you can   |\n|                |                |                | setup a value  |\n|                |                |                | of 2000 that   |\n|                |                |                | will double    |\n|                |                |                | the torque     |\n|                |                |                | sensitivity    |\n|                |                |                | comparing to   |\n|                |                |                | use the value  |\n|                |                |                | of 1000.       |\n+----------------+----------------+----------------+----------------+\n| 2              | Assist level X | ",".","...          | The same a     |\n|                | power          |                | previous but   |\n|                |                |                | for assist     |\n|                |                |                | level X.       |\n+----------------+----------------+----------------+----------------+"),(0,o.kt)("h2",{id:"startup_power_boost"},"4: startup power boost"),(0,o.kt)("p",null,"Here you can configure the BOOST feature. This feature gives a peak of\npower to the motor at startup. The amount of time of the peak as also\nthe amount of motor power during the peak, can be configured. You can\nalso disable this feature if you prefer."),(0,o.kt)("p",null,"+----------------+----------------+----------------+----------------+\n| ",(0,o.kt)("strong",{parentName:"p"},"submenu      | *              | "),"default      | ",(0,o.kt)("em",{parentName:"p"},"              |\n| number**       | "),"configuration | value",(0,o.kt)("strong",{parentName:"p"},"        | *description")," |\n|                | name**         |                |                |\n+----------------+----------------+----------------+----------------+\n| 0              | Config         | 0              | 0 to enable    |\n|                |                |                | power boost    |\n|                |                |                | only when      |\n|                |                |                | startup and    |\n|                |                |                | bicycle wheel  |\n|                |                |                | speed is equal |\n|                |                |                | to zero; 1 to  |\n|                |                |                | enable power   |\n|                |                |                | boost every    |\n|                |                |                | time pedal     |\n|                |                |                | cadence or     |\n|                |                |                | torque sensor  |\n|                |                |                | are zero       |\n+----------------+----------------+----------------+----------------+\n| 1              | limit boost    | 0              | 1 to enable    |\n|                | power to max   |                | power boost    |\n|                | battery power  |                | limit to the   |\n|                | value          |                | Max battery    |\n|                |                |                | power value    |\n|                |                |                | and 0 to       |\n|                |                |                | disable.       |\n+----------------+----------------+----------------+----------------+\n| 2              | boost time     | 25 (2.5        | 0 to disable   |\n|                |                | seconds)       | startup power  |\n|                |                |                | boost feature. |\n+----------------+----------------+----------------+----------------+\n| 3              | fade           | 25 (2.5        | fade out from  |\n|                | out/transition | seconds)       | boost power to |\n|                | time           |                | regular power. |\n+----------------+----------------+----------------+----------------+\n| 4              | assist level 1 | 200            | Max value of   |\n|                | boost power    |                | motor energy   |\n|                |                |                | (in watts)     |\n|                |                |                | that motor     |\n|                |                |                | will use to    |\n|                |                |                | assist you     |\n|                |                |                | during power   |\n|                |                |                | boost, on this |\n|                |                |                | assist level.  |\n|                |                |                | The motor will |\n|                |                |                | use this max   |\n|                |                |                | value only     |\n|                |                |                | when you hit   |\n|                |                |                | the max torque |\n|                |                |                | sensor force.\\ |\n|                |                |                | \\              |\n|                |                |                | Use higher     |\n|                |                |                | values (more   |\n|                |                |                | than what      |\n|                |                |                | motor can      |\n|                |                |                | give) to get   |\n|                |                |                | more           |\n|                |                |                | sensitivity    |\n|                |                |                | from the       |\n|                |                |                | torque sensor, |\n|                |                |                | like you can   |\n|                |                |                | setup a value  |\n|                |                |                | of 2000 that   |\n|                |                |                | will double    |\n|                |                |                | the torque     |\n|                |                |                | sensitivity    |\n|                |                |                | comparing to   |\n|                |                |                | use the value  |\n|                |                |                | of 1000.       |\n+----------------+----------------+----------------+----------------+\n| 5              | assist level X | ","-","-","-          | The same a     |\n|                | boost power    |                | previous but   |\n|                |                |                | for assist     |\n|                |                |                | level X.       |\n+----------------+----------------+----------------+----------------+"),(0,o.kt)("h2",{id:"motor_temperature_protection"},"5: motor temperature protection"),(0,o.kt)("p",null,"This feature is for protecting your motor from overheating and avoid\npermanent damage/loss of torque ","-","- see here: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"TSDZ2_motor_demagnetized_due_to_overheating",title:"wikilink"},"TSDZ2 motor\ndemagnetized due to\noverheating")),".\nYou can only use and enable this feature ",(0,o.kt)("a",{parentName:"p",href:"How_to_install_motor_temperature_sensor",title:"wikilink"},"if you installed the motor\ntemperature sensor"),"."),(0,o.kt)("h3",{id:"how_it_works"},"How it works"),(0,o.kt)("p",null,"On LCD3 temperature field you will be able to see the motor temperature\nvalue. Once the configured minimum motor temperature value is hit, the\nmotor current will start to be reduced and as long as it increases, the\nmore the current will be reduce. After hitting the configured maximum\nmotor temperature value, the motor is shutoff."),(0,o.kt)("p",null,"The temperature value shown on LCD3 will blink when the motor current is\nbeing limited and will blink faster for higher rates of limited current.\nFinally, if the motor is shutoff, the blink rate will be very fast."),(0,o.kt)("p",null,"Possible configurations on LCD3:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"submenu number"),"   ",(0,o.kt)("strong",{parentName:"p"},"configuration name"),"            ",(0,o.kt)("strong",{parentName:"p"},"default value"),"    ",(0,o.kt)("strong",{parentName:"p"},"description"),"\n0                    enable motor temperature sensor   0 (disabled)         NOTE: if you don\\'t have the ",(0,o.kt)("a",{parentName:"p",href:"How_to_install_motor_temperature_sensor",title:"wikilink"},"motor temperature sensor installed"),", you should disable this option and ignore the next configurations.\n1                    enable current limiting           0 (disabled)         limit the motor current to avoid the motor get over the max temperature.\n2                    min temperature                   75 degrees Celsius   motor temperature value at which the motor current will start to be limited.\n3                    max temperature                   85 degrees Celsius   motor temperature max value at which the motor current will be zero / motor shutoff."),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}6: various",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}0: motor voltage type",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: default\nvalue: 0. 0 for 48V brushless motor (TSDZ2 52V version has a\n48V brushless motor); 1 for 36V brushless motor. This\nconfiguration is needed for FOC calculations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}1: motor assistance startup without pedal\nrotation",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: default value: 0 (disabled). 1 to\nenable this feature. Recommended to keep at 0 value if you\ndon\\'t have brake sensors installed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}2: PAS max cadence",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: default\nvalue: 110. This value is used for calculation of human\npedal power that will after be used for motor assist level.")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}7: advanced technical data",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html} (the\nfollowing values are read only, user can\\'t change them)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}0: adc throttle",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the current\nvalue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}1: throttle",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the current value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}2: adc pedal torque sensor",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the\ncurrent value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}3: pedal torque sensor",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the\ncurrent value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}4: pedal cadence",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the current\nvalue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}5: pedal human power",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the\ncurrent value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}6: PWM duty_cycle",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the current\nvalue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}7: motor speed in ERPs",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the\ncurrent value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<u>"),"{=html}8: FOC angle",(0,o.kt)("inlineCode",{parentName:"li"},"</u>"),"{=html}: see the current\nvalue. This value must be multiplied by 1.4 to get and angle\nvalue in degrees.")))))))}c.isMDXComponent=!0}}]);