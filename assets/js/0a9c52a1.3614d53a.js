"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8847],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={},s=void 0,d={unversionedId:"tsdz2/examples/roadbike",id:"tsdz2/examples/roadbike",title:"roadbike",description:"[[https://user-images.githubusercontent.com/105815170/170420382-e0637f46-b8b1-48db-8681-b9bd7513057d.jpg]]",source:"@site/docs/tsdz2/examples/roadbike.md",sourceDirName:"tsdz2/examples",slug:"/tsdz2/examples/roadbike",permalink:"/docs/tsdz2/examples/roadbike",draft:!1,editUrl:"https://github.com/OpenSourceEBike/OpenSourceEBike.github.io/tree/master/docs/tsdz2/examples/roadbike.md",tags:[],version:"current",frontMatter:{},sidebar:"tsdz2Sidebar",previous:{title:"kid-MTB-24",permalink:"/docs/tsdz2/examples/kid-MTB-24"},next:{title:"The Difference Between Standard and Advanced Mode",permalink:"/docs/tsdz2/improvements/How-to-Calibrate-the-Cadence-Sensor"}},u={},c=[],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[","[https://user-images.githubusercontent.com/105815170/170420382-e0637f46-b8b1-48db-8681-b9bd7513057d.jpg]","]"),(0,a.kt)("h1",{id:"converting-a-road-bike"},"Converting a Road-bike"),(0,a.kt)("p",null,"Please ride very carefully!"),(0,a.kt)("p",null,"I did not find good examples of converting a Road-bike to an e-bike but still keeping the road bike handlebar. But it is possible as I describe below.\nNone of the e-bike kits are designed for bikes with a road-bike handlebar. Using a mid-motor kit with Torque-Sensing Pedal Assist and without the Throttle, one does not need to convert the brakes."),(0,a.kt)("p",null,"Below were the choices I ordered from EcoCycles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TSDZ2 Motor Core: 48/52v"),(0,a.kt)("li",{parentName:"ul"},"Corrected 170mm Cranks (Even Q Factor)"),(0,a.kt)("li",{parentName:"ul"},"Chainring Assembly: 52T - 55mm Chainline"),(0,a.kt)("li",{parentName:"ul"},"Pre-Installed Gear: Stock Plastic "),(0,a.kt)("li",{parentName:"ul"},"Internal Temperature Sensor and Cooling Modification "),(0,a.kt)("li",{parentName:"ul"},"Wiring Harness: 1 x 1T1 Wire Harness - Motor to Display Only (No Throttle or E-Brakes)"),(0,a.kt)("li",{parentName:"ul"},"Display: 860C Display for TSDZ2 with Open Source Firmware "),(0,a.kt)("li",{parentName:"ul"},"E-Brakes: None"),(0,a.kt)("li",{parentName:"ul"},"Speed Sensor without Integrated Lighting Output"),(0,a.kt)("li",{parentName:"ul"},"Battery Connector: XT90 /Anderson"),(0,a.kt)("li",{parentName:"ul"},"'Battery Bob'  1 x Bottle Bob")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Battery"),"\n52 V x 13Ah (bought separately with Anderson connector). Please check the connection type (Anderson/ XT 60 or XT90) for both battery and kit to match.\nIn my case of the TSDZ2 it came with the Anderson and XT90 connector, while the battery came with the Anderson connector."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Chainring"),"\nIf your bike already has a 52T chainring, one does not need to order another one. I mounted both the 42t chainring and the 52t chainring. So far I did not install the front derailleur and only use the 52t chainring when riding. However, this is not ideal and I will later reinstall the front derailleur. However, some modifications are needed in this case as the current front derailleur will not work with the chainrings pushed outward."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Brake cable")),(0,a.kt)("p",null,"The brake cables had enough space between the motor and the frame as shown.\nHowever there was not enough space to keep the screws for the derailleur cable."),(0,a.kt)("p",null,"[","[https://user-images.githubusercontent.com/105815170/170428543-e8f02718-52c2-47c0-b50c-deaae373cbcf.png]","]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Handlebar")),(0,a.kt)("p",null,"In order to mount the 860C onto the Roadbike handlebar, I bought for $20 a handlebar extender. The diameter for the bike handle is larger than the so-called selector."),(0,a.kt)("p",null,"[","[https://user-images.githubusercontent.com/105815170/170430148-4b3ad65e-9266-46d0-a0f4-6d6fe4bdc92f.png]","]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Internal Temperature Sensor and Cooling Modification")," "),(0,a.kt)("p",null,'I am glad that I ordered the temperature sensor as I need to climb some hills. The motor gets hot!\nIn the graph below, one can see what happens. The max power was set to 700 W. The graph shows the motor power when riding. Please notice how the power does not stay at 700 W. Please see how the power slowly decreases in the region "climbing". Here the motor is getting hot and the power is reduced to avoid over-heating. Climbing up the hill, one needs to assist the motor! Therfore having plenty of gears is useful.\nAfter the climbing region, the power went to zero as I was cycling downhill. Here the motor has a chance to cool down, and the motor runs again with full power until it heats up again. The motor has a torque sensor, but what really determines the power is the motor temperature! Please get a temperature sensor! '),(0,a.kt)("p",null,"[","[https://user-images.githubusercontent.com/105815170/170846036-73308aa0-e2ea-4f5e-9a48-2038a54e7907.png]","]"),(0,a.kt)("p",null,"I recently added cooling fins. It helps when riding up the hill. Before I installed these fins, the motor was heating to  ~ 72 deg C and the motor powered down to ~ 300 Watt as shown above. I will study further, how much it enables one to use higher power when hill climbing. It cost ~ $20 and ~ 10 minutes to install.",(0,a.kt)("br",{parentName:"p"}),"\n","I used around 60 of 30mmx8mmx8mm Heat Sinks. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/105815170/188792637-70f7bd15-1450-4cd8-90e6-aecb53b59bb8.jpg",alt:"collingfins"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Riding")),(0,a.kt)("p",null,"I ride 13 miles to work and it takes 50 minutes. Without the e-bike kit, it would take ~ 70 minutes. I need to recharge the battery after each ride, as only ~ 30% remains. However, my ride includes hills. I much enjoy the ride."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please ride carefully! Please mind others")))}h.isMDXComponent=!0}}]);