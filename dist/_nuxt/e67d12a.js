(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{666:function(t,n,e){"use strict";e(11),e(10),e(19),e(20);var r=e(3),o=(e(6),e(57),e(68),e(32),e(13),e(25),e(51),e(647),e(46),e(648),e(649),e(650),e(651),e(652),e(653),e(654),e(655),e(656),e(657),e(658),e(659),e(660),e(48),e(15),e(426),e(1)),c=e(87),l=e(2);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var j=["sm","md","lg","xl"],v=["start","end","center"];function y(t,n){return j.reduce((function(e,r){return e[t+Object(l.G)(r)]=n(),e}),{})}var O=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},m=y("justify",(function(){return{type:String,default:null,validator:h}})),C=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:C}})),P={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(S)},k={align:"align",justify:"justify",alignContent:"align-content"};function _(t,n,e){var r=k[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var x=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:C}},S),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var f in e)l+=String(e[f]);var d=x.get(l);return d||function(){var t,n;for(n in d=[],P)P[n].forEach((function(t){var r=e[t],o=_(n,t,r);o&&d.push(o)}));d.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),x.set(l,d)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},804:function(t,n,e){"use strict";e.r(n);var r=e(799),o=e(666),c={name:"InspirePage"},l=e(95),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n(o.a,[n(r.a,{staticClass:"text-center"},[n("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),t._v(" "),n("blockquote",{staticClass:"blockquote"},[t._v("\n      “First, solve the problem. Then, write the code.”\n      "),n("footer",[n("small",[n("em",[t._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);