(function(t){function e(e){for(var r,l,n=e[0],c=e[1],o=e[2],u=0,v=[];u<n.length;u++)l=n[u],a[l]&&v.push(a[l][0]),a[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,n=1;n<s.length;n++){var c=s[n];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var r={},a={app:0},i=[];function l(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=r,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(s,r,function(e){return t[e]}.bind(null,r));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"16b4":function(t,e,s){"use strict";var r=s("2bd6"),a=s.n(r);a.a},"2bd6":function(t,e,s){},"311e":function(t,e,s){"use strict";var r=s("6862"),a=s.n(r);a.a},"387b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container mx-auto p-4"},[s("h1",{staticClass:"mb-2 mt-8"},[t._v("Vue Renderless Carousel")]),s("h2",{staticClass:"mb-4"},[t._v("Sample implementations")]),t._m(0),t._m(1),t._m(2),s("div",{staticClass:"my-8"},[s("bar-carousel",[s("rl-carousel-slide",[s("div",{staticClass:"border border-blue p-8 mx-8 text-center text-3xl",staticStyle:{width:"20vw"}},[t._v("One")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-red p-8 mx-8 text-center text-3xl",staticStyle:{width:"40vw"}},[t._v("Two")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-green p-8 mx-8 text-center text-3xl",staticStyle:{width:"80vw"}},[t._v("Three")])])],1),s("div",{staticClass:"text-center mt-8"},[s("button",{staticClass:"font-semibold mb-2 mt-8",on:{click:function(e){t.showBar=!t.showBar}}},[t._v("\n          "+t._s(t.showBar?"Hide":"Show")+" Code\n          "),s("i",{staticClass:"fa fa-chevron-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showBar,expression:"showBar"}]},[s("code",{attrs:{"data-gist-id":"a96f139e8151bc1d00ca60ad1259f986"}})])],1),s("hr"),t._m(3),s("div",{staticClass:"m-8"},[s("vertical-carousel",[s("rl-carousel-slide",[s("div",{staticClass:"border border-blue p-8 ml-4 mr-8 my-8 text-3xl flex items-center justify-center",staticStyle:{height:"50px"}},[t._v("One")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-red p-8 ml-4 mr-8 my-4 text-3xl flex items-center justify-center",staticStyle:{height:"100px"}},[t._v("Two")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-green p-8 ml-4 mr-8 my-4 text-3xl flex items-center justify-center",staticStyle:{height:"150px"}},[t._v("Three")])])],1),s("div",{staticClass:"text-center mt-8"},[s("button",{staticClass:"font-semibold mb-2 mt-8",on:{click:function(e){t.showVertical=!t.showVertical}}},[t._v("\n          "+t._s(t.showVertical?"Hide":"Show")+" Code\n          "),s("i",{staticClass:"fa fa-chevron-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showVertical,expression:"showVertical"}]},[s("code",{attrs:{"data-gist-id":"bdfa626cf08b8f243cf5b77dbf40c7dd"}})])],1),s("hr"),t._m(4),s("div",{staticClass:"my-8"},[s("number-carousel",[s("rl-carousel-slide",{staticClass:"w-full"},[s("div",{staticClass:"flex items-center justify-center text-3xl border border-blue bg-blue-lightest p-8 m-8"},[t._v("One")])]),s("rl-carousel-slide",{staticClass:"w-full"},[s("div",{staticClass:"flex items-center justify-center text-3xl border border-red p-8 bg-red-lightest m-8"},[t._v("Two")])]),s("rl-carousel-slide",{staticClass:"w-full"},[s("div",{staticClass:"flex items-center justify-center text-3xl border border-green p-8 bg-green-lightest m-8"},[t._v("Three")])])],1),s("div",{staticClass:"text-center mt-8"},[s("button",{staticClass:"font-semibold mb-2 mt-8",on:{click:function(e){t.showNumber=!t.showNumber}}},[t._v("\n          "+t._s(t.showNumber?"Hide":"Show")+" Code\n          "),s("i",{staticClass:"fa fa-chevron-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showNumber,expression:"showNumber"}]},[s("code",{attrs:{"data-gist-id":"f57f264bd0ae5b755ec6b7ccd2d3e43f"}})])],1),s("hr"),t._m(5),s("div",{staticClass:"my-8"},[s("arrow-carousel",[s("rl-carousel-slide",{staticClass:"w-full"},[s("div",{staticClass:"border border-blue p-8 mx-8 mt-8 text-center text-3xl"},[t._v("One")])]),s("rl-carousel-slide",{staticClass:"w-full"},[s("div",{staticClass:"border border-red p-8 mx-8 mt-8 text-center text-3xl"},[t._v("Two")])]),s("rl-carousel-slide",{staticClass:"w-full"},[s("div",{staticClass:"border border-green p-8 mx-8 mt-8 text-center text-3xl"},[t._v("Three")])]),s("rl-carousel-slide",{staticClass:"w-full"},[s("div",{staticClass:"border border-orange p-8 mx-8 mt-8 text-center text-3xl"},[t._v("Four")])])],1),s("div",{staticClass:"text-center mt-8"},[s("button",{staticClass:"font-semibold mb-2 mt-8",on:{click:function(e){t.showArrow=!t.showArrow}}},[t._v("\n          "+t._s(t.showArrow?"Hide":"Show")+" Code\n          "),s("i",{staticClass:"fa fa-chevron-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showArrow,expression:"showArrow"}]},[s("code",{attrs:{"data-gist-id":"dd036ff721115075d77a38ce363f88df"}})])],1),s("hr"),t._m(6),s("div",{staticClass:"my-8"},[s("synchronized-carousel",[s("template",{slot:"first"},[s("rl-carousel-slide",[s("div",{staticClass:"border border-blue p-8 mx-8 mt-8 text-center text-3xl",staticStyle:{width:"20vw"}},[t._v("One")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-red p-8 mx-8 mt-8 text-center text-3xl",staticStyle:{width:"20vw"}},[t._v("Two")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-green p-8 mx-8 mt-8 text-center text-3xl",staticStyle:{width:"20vw"}},[t._v("Three")])])],1),s("template",{slot:"second"},[s("rl-carousel-slide",[s("div",{staticClass:"border border-blue p-8 mx-8 mt-8 text-center text-3xl",staticStyle:{width:"40vw"}},[t._v("One")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-red p-8 mx-8 mt-8 text-center text-3xl",staticStyle:{width:"40vw"}},[t._v("Two")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-green p-8 mx-8 mt-8 text-center text-3xl",staticStyle:{width:"40vw"}},[t._v("Three")])])],1)],2),s("div",{staticClass:"text-center mt-8"},[s("button",{staticClass:"font-semibold mb-2 mt-8",on:{click:function(e){t.showSynchronized=!t.showSynchronized}}},[t._v("\n          "+t._s(t.showSynchronized?"Hide":"Show")+" Code\n          "),s("i",{staticClass:"fa fa-chevron-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSynchronized,expression:"showSynchronized"}]},[s("code",{attrs:{"data-gist-id":"ccaefc4fb1071ec6319cdbd668939c94"}})])],1),s("hr"),t._m(7),s("div",{staticClass:"my-8"},[s("bar-carousel",t._l(t.dynamicSlides,function(e){return s("rl-carousel-slide",{key:e},[s("div",{staticClass:"border border-blue p-8 mx-8 text-center text-3xl",staticStyle:{width:"20vw"}},[t._v(t._s(e))])])}),1),s("div",{staticClass:"flex justify-around"},[s("button",{on:{click:function(e){t.dynamicSlides+=1}}},[t._v("Add Slide")]),s("button",{attrs:{disabled:t.dynamicSlides<=1},on:{click:function(e){t.dynamicSlides-=1}}},[t._v("Remove Slide")])]),s("div",{staticClass:"text-center mt-8"},[s("button",{staticClass:"font-semibold mb-2 mt-8",on:{click:function(e){t.showDynamic=!t.showDynamic}}},[t._v("\n          "+t._s(t.showDynamic?"Hide":"Show")+" Code\n          "),s("i",{staticClass:"fa fa-chevron-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDynamic,expression:"showDynamic"}]},[s("code",{attrs:{"data-gist-id":"3270a28bea0f8d6e6aff33f33af739a6"}})])],1),s("hr"),t._m(8),s("div",{staticClass:"my-8"},[s("alignable-carousel",{attrs:{align:t.dynamicAlign}},[s("rl-carousel-slide",[s("div",{staticClass:"border border-blue p-8 mx-8 text-center text-3xl",staticStyle:{width:"20vw"}},[t._v("One")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-red p-8 mx-8 text-center text-3xl",staticStyle:{width:"40vw"}},[t._v("Two")])]),s("rl-carousel-slide",[s("div",{staticClass:"border border-green p-8 mx-8 text-center text-3xl",staticStyle:{width:"80vw"}},[t._v("Three")])])],1),s("div",{staticClass:"flex justify-around"},[s("button",{on:{click:function(e){t.dynamicAlign="left"}}},[t._v("Left")]),s("button",{on:{click:function(e){t.dynamicAlign="center"}}},[t._v("Centre")]),s("button",{on:{click:function(e){t.dynamicAlign="right"}}},[t._v("Right")])]),s("div",{staticClass:"text-center mt-8"},[s("button",{staticClass:"font-semibold mb-2 mt-8",on:{click:function(e){t.showBar=!t.showBar}}},[t._v("\n          "+t._s(t.showBar?"Hide":"Show")+" Code\n          "),s("i",{staticClass:"fa fa-chevron-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showBar,expression:"showBar"}]},[s("code",{attrs:{"data-gist-id":"37c8f4825100ee56961b280795f2c001"}})])],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mb-8"},[t._v("\n      Here are some examples of the sort of things you can do on top of\n      "),s("a",{attrs:{href:"https://github.com/mpbarlow/vue-renderless-carousel",target:"_blank"}},[t._v("vue-renderless-carousel")]),t._v(". Please feel free to use these, or base your own carousels off them. CSS utility classes\n      via the fantastic\n      "),s("a",{attrs:{href:"https://tailwindcss.com"}},[t._v("Tailwind CSS")]),t._v(".\n    ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-8"},[s("h3",[t._v("Table of Contents")]),s("ul",[s("li",[s("a",{attrs:{href:"#bar"}},[t._v("Bar")])]),s("li",[s("a",{attrs:{href:"#vertical"}},[t._v("Vertical")])]),s("li",[s("a",{attrs:{href:"#number"}},[t._v("Number")])]),s("li",[s("a",{attrs:{href:"#arrow"}},[t._v("Arrow")])]),s("li",[s("a",{attrs:{href:"#synchronised"}},[t._v("Synchronised")])]),s("li",[s("a",{attrs:{href:"#dynamic"}},[t._v("Dynamic")])]),s("li",[s("a",{attrs:{href:"#alignable"}},[t._v("Different Alignments")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4"},[s("a",{attrs:{name:"bar"}}),s("h3",{staticClass:"mb-4"},[t._v("Bar")]),s("ul",[s("li",[t._v("Bar controls underneath")]),s("li",[t._v("Variable size slides")]),s("li",[t._v("Autoscrolling via interval function")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4"},[s("a",{attrs:{name:"vertical"}}),s("h3",{staticClass:"mb-4"},[t._v("Vertical")]),s("ul",[s("li",[t._v("Circular controls on the left")]),s("li",[t._v("Variable size slides")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4"},[s("a",{attrs:{name:"number"}}),s("h3",{staticClass:"mb-4"},[t._v("Number")]),s("ul",[s("li",[t._v("Numeric controls overlapping content")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4"},[s("a",{attrs:{name:"arrow"}}),s("h3",{staticClass:"mb-4"},[t._v("Arrow")]),s("ul",[s("li",[t._v("No wrapping")]),s("li",[t._v("Animated chevron controls")]),s("li",[t._v("No animation on transition")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4"},[s("a",{attrs:{name:"synchronised"}}),s("h3",{staticClass:"mb-4"},[t._v("Synchronised")]),s("ul",[s("li",[t._v("Changing one immediately updates the other")]),s("li",[t._v("Driven by events emitted by each carousel")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4"},[s("a",{attrs:{name:"dynamic"}}),s("h3",{staticClass:"mb-4"},[t._v("Dynamic")]),s("ul",[s("li",[t._v("Variable number of slides")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4"},[s("a",{attrs:{name:"alignable"}}),s("h3",{staticClass:"mb-4"},[t._v("Different Alignments")]),s("ul",[s("li",[t._v("Align the active slide either left, center, or right")])])])}],l=s("538a"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("rl-carousel",{attrs:{align:t.align},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.wrapperStyles,a=e.slides,i=a.count,l=a.active;return s("div",{},[s("div",{staticClass:"overflow-hidden text-center"},[s("div",t._b({},"div",r,!1),[t._t("default")],2)]),s("div",{staticClass:"mt-4 text-center"},t._l(i,function(e,r){return s("span",{key:r,staticClass:"mx-1 cursor-pointer",on:{click:function(e){t.slide=r}}},[s("svg",{staticClass:"stroke-current",class:{"text-grey":l!==r,"text-grey-dark":l===r},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"20"}},[s("line",{attrs:{x1:"0",y1:"10",x2:"30",y2:"10","stroke-width":"2"}})])])}),0)])}}],!0),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}})},c=[],o={name:"alignable-carousel",components:{RlCarousel:l["a"]},props:{align:{type:String,default:"center"}},data:function(){return{slide:0}}},d=o,u=(s("bedf"),s("2877")),v=Object(u["a"])(d,n,c,!1,null,"2046a2ec",null),f=v.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("rl-carousel",{attrs:{"no-wrap":"",static:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.wrapperStyles,a=e.slides,i=(a.count,a.active);return s("div",{},[s("div",{staticClass:"overflow-hidden"},[s("div",t._b({staticClass:"w-full"},"div",r,!1),[t._t("default")],2)]),s("div",{staticClass:"absolute pt-8 ml-8 w-16 h-full pin-t pin-l flex items-stretch",on:{click:function(e){t.slide=i-1,t.triggerAnimation("Left")}}},[s("div",{staticClass:"group flex-grow flex items-center justify-center cursor-pointer"},[s("span",{staticClass:"control-chevron text-xl group-hover:text-3xl text-grey group-hover:text-grey-dark",class:{"animate-left":t.animateLeft}},[s("i",{staticClass:"fa fa-chevron-left"})])])]),s("div",{staticClass:"absolute pt-8 mr-8 w-16 h-full pin-t pin-r flex items-stretch",on:{click:function(e){t.slide=i+1,t.triggerAnimation("Right")}}},[s("div",{staticClass:"group flex-grow flex items-center justify-center cursor-pointer"},[s("span",{staticClass:"control-chevron text-xl group-hover:text-3xl text-grey group-hover:text-grey-dark",class:{"animate-right":t.animateRight}},[s("i",{staticClass:"fa fa-chevron-right"})])])])])}}],!0),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}})},h=[],b={name:"arrow-carousel",components:{RlCarousel:l["a"]},data:function(){return{slide:0,animateLeft:!1,animateRight:!1}},methods:{triggerAnimation:function(t){var e=this;this["animate".concat(t)]=!0,setTimeout(function(){e["animate".concat(t)]=!1},1e3)}}},w=b,x=(s("90e3"),Object(u["a"])(w,m,h,!1,null,"320269c3",null)),p=x.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("rl-carousel",{on:{"swipe-recognized":t.clearInterval},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.wrapperStyles,a=e.slides,i=a.count,l=a.active;return s("div",{},[s("div",{staticClass:"overflow-hidden text-center"},[s("div",t._b({},"div",r,!1),[t._t("default")],2)]),s("div",{staticClass:"mt-4 text-center"},t._l(i,function(e,r){return s("span",{key:r,staticClass:"mx-1 cursor-pointer",on:{click:function(e){t.slide=r,t.clearInterval()}}},[s("svg",{staticClass:"stroke-current",class:{"text-grey":l!==r,"text-grey-dark":l===r},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"20"}},[s("line",{attrs:{x1:"0",y1:"10",x2:"30",y2:"10","stroke-width":"2"}})])])}),0)])}}],!0),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}})},C=[],y=(s("6b54"),{name:"bar-carousel",components:{RlCarousel:l["a"]},data:function(){return{slide:0,interval:void 0}},methods:{clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){clearInterval(this.interval)})},created:function(){var t=this;this.interval=setInterval(function(){t.slide+=1},2e3)}}),g=y,S=(s("7c3a"),Object(u["a"])(g,_,C,!1,null,"4243eceb",null)),k=S.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("rl-carousel",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.wrapperStyles,a=e.slides,i=a.count,l=a.active;a.moveTo;return s("div",{},[s("div",{staticClass:"overflow-hidden"},[s("div",t._b({staticClass:"w-full"},"div",r,!1),[t._t("default")],2)]),s("div",{staticClass:"absolute w-full pin-b flex items-end justify-end pr-8 pb-8"},t._l(i,function(e,r){return s("div",{key:r,staticClass:"mb-2 mr-2 p-1 cursor-pointer text-center",class:{active:l===r},on:{click:function(e){t.slide=r,t.autoscroll=!1}}},[s("span",{class:{"text-grey text-base":l!==r,"text-2xl active":l===r}},[t._v("\n          "+t._s(e)+"\n        ")])])}),0)])}}],!0),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}})},A=[],O={name:"number-carousel",components:{RlCarousel:l["a"]},data:function(){return{slide:0,autoscroll:-2e3}}},T=O,N=(s("16b4"),Object(u["a"])(T,j,A,!1,null,"78e609e4",null)),$=N.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("rl-carousel",{attrs:{vertical:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.wrapperStyles,a=e.slides,i=a.count,l=a.active;return s("div",{staticClass:"flex",staticStyle:{height:"300px"}},[i>1?s("div",{staticClass:"text-center flex flex-col justify-center"},t._l(i,function(e,r){return s("span",{key:r,staticClass:"mx-1 cursor-pointer block",on:{click:function(e){t.slide=r,t.autoscroll=!1}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[s("circle",{staticClass:"fill-current",class:{"text-grey":l!==r,"text-grey-dark":l===r},attrs:{cx:"5",cy:"5",r:"5"}})])])}),0):t._e(),s("div",{staticClass:"w-full overflow-hidden"},[s("div",t._b({staticClass:"flex flex-col w-full"},"div",r,!1),[t._t("default")],2)])])}}],!0),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}})},B=[],R={name:"vertical-carousel",components:{RlCarousel:l["a"]},data:function(){return{slide:0,autoscroll:2e3}}},V=R,z=(s("e7e9"),Object(u["a"])(V,E,B,!1,null,"2a6dde77",null)),D=z.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("rl-carousel",{on:{"slide-changed":function(e){return t.slide2=e}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.wrapperStyles,a=e.slides,i=a.count,l=a.active;return s("div",{},[s("div",{staticClass:"overflow-hidden text-center"},[s("div",t._b({},"div",r,!1),[t._t("first")],2)]),s("div",{staticClass:"mt-4 text-center"},t._l(i,function(e,r){return s("span",{key:r,staticClass:"mx-1 cursor-pointer",on:{click:function(e){t.slide1=r}}},[s("svg",{staticClass:"stroke-current",class:{"text-grey":l!==r,"text-grey-dark":l===r},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"20"}},[s("line",{attrs:{x1:"0",y1:"10",x2:"30",y2:"10","stroke-width":"2"}})])])}),0)])}}],!0),model:{value:t.slide1,callback:function(e){t.slide1=e},expression:"slide1"}}),s("rl-carousel",{on:{"slide-changed":function(e){return t.slide1=e}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.wrapperStyles,a=e.slides,i=a.count,l=a.active;return s("div",{},[s("div",{staticClass:"overflow-hidden text-center"},[s("div",t._b({},"div",r,!1),[t._t("second")],2)]),s("div",{staticClass:"mt-4 text-center"},t._l(i,function(e,r){return s("span",{key:r,staticClass:"mx-1 cursor-pointer",on:{click:function(e){t.slide2=r}}},[s("svg",{staticClass:"stroke-current",class:{"text-grey":l!==r,"text-grey-dark":l===r},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"20"}},[s("line",{attrs:{x1:"0",y1:"10",x2:"30",y2:"10","stroke-width":"2"}})])])}),0)])}}],!0),model:{value:t.slide2,callback:function(e){t.slide2=e},expression:"slide2"}})],1)},P=[],I={name:"synchronized-carousel",components:{RlCarousel:l["a"]},data:function(){return{slide1:0,slide2:0}}},L=I,M=(s("311e"),Object(u["a"])(L,H,P,!1,null,"36a9332e",null)),J=M.exports,F=(s("7dc4"),{name:"app",components:{AlignableCarousel:f,ArrowCarousel:p,NumberCarousel:$,RlCarouselSlide:l["b"],BarCarousel:k,SynchronizedCarousel:J,VerticalCarousel:D},data:function(){return{showArrow:!1,showBar:!1,showDynamic:!1,showNumber:!1,showVertical:!1,showSynchronized:!1,dynamicSlides:3,dynamicAlign:"center"}}}),q=F,G=Object(u["a"])(q,a,i,!1,null,null,null),K=G.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(K)}}).$mount("#app")},6179:function(t,e,s){},6862:function(t,e,s){},"7c3a":function(t,e,s){"use strict";var r=s("9539"),a=s.n(r);a.a},"7dc4":function(t,e,s){},"90e3":function(t,e,s){"use strict";var r=s("387b"),a=s.n(r);a.a},9539:function(t,e,s){},bedf:function(t,e,s){"use strict";var r=s("d608"),a=s.n(r);a.a},d608:function(t,e,s){},e7e9:function(t,e,s){"use strict";var r=s("6179"),a=s.n(r);a.a}});
//# sourceMappingURL=app.d7672afa.js.map