(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{665:function(t,n,e){"use strict";e(13),e(12),e(19),e(20);var r=e(3),c=(e(5),e(42),e(59),e(33),e(14),e(27),e(52),e(645),e(46),e(646),e(647),e(648),e(649),e(650),e(651),e(652),e(653),e(654),e(655),e(656),e(657),e(658),e(49),e(15),e(434),e(2)),o=e(89),l=e(1);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function j(t,n){return v.reduce((function(e,r){return e[t+Object(l.G)(r)]=n(),e}),{})}var O=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},w=j("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},m=j("justify",(function(){return{type:String,default:null,validator:h}})),C=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},S=j("alignContent",(function(){return{type:String,default:null,validator:C}})),_={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(S)},P={align:"align",justify:"justify",alignContent:"align-content"};function k(t,n,e){var r=P[t];if(null!=e){if(n){var c=n.replace(t,"");r+="-".concat(c)}return(r+="-".concat(e)).toLowerCase()}}var x=new Map;n.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:C}},S),render:function(t,n){var e=n.props,data=n.data,c=n.children,l="";for(var f in e)l+=String(e[f]);var d=x.get(l);return d||function(){var t,n;for(n in d=[],_)_[n].forEach((function(t){var r=e[t],c=k(n,t,r);c&&d.push(c)}));d.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),x.set(l,d)}(),t(e.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},752:function(t,n,e){"use strict";e.r(n);var r=e(797),c=e(209),o=e(665),l=e(77),f={},d=e(96),component=Object(d.a)(f,(function(){var t=this,n=t._self._c;return n(l.a,{staticClass:"d-flex justify-center align-center pl-16 white--text",attrs:{color:"#18242c",align:"center",height:"20vh",width:"20wh"}},[n(o.a,[n(r.a,[n("div",[n(c.a,{attrs:{color:"white"}},[t._v("mdi-phone")])],1),t._v("\n      Call: (+63) 935 610 4808\n    ")]),t._v(" "),n(r.a,[n("div",[n(c.a,{attrs:{color:"white"}},[t._v("mdi-phone")])],1),t._v("\n      Email: rrglassandaluminum@gmail.com\n    ")]),t._v(" "),n(r.a,[n("div",[n(c.a,{attrs:{color:"white"}},[t._v("mdi-map")])],1),t._v("\n      Pasay: (+63) 935 610 4808\n    ")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);