(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{634:function(t,e,n){"use strict";var o=n(18),r=(n(57),n(13),n(6),n(31),n(678)),c=n(62),l=n(14),h=n(2),d=n(12),f=Object(l.a)(r.a,c.a);e.a=f.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(o.a)(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(h.u)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(d.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(h.t)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var n=null;if(this.activator){var o=this.internalActivator?this.$el:document;n="string"==typeof this.activator?o.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var r=this.activatorNode[0].componentInstance;n=r&&r.$options.mixins&&r.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?r.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot:function(){return Object(h.t)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},635:function(t,e,n){"use strict";n(69);var o=n(1);e.a=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},636:function(t,e,n){"use strict";var o=n(136),r=(n(32),n(57),n(68),n(1)),c=n(2);e.a=r.a.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var content=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[content])+2:Object(c.v)(content);return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],base=this.$el,e=[this.stackMinZIndex,Object(c.v)(base)],n=[].concat(Object(o.a)(document.getElementsByClassName("v-menu__content--active")),Object(o.a)(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<n.length;r++)t.includes(n[r])||e.push(Object(c.v)(n[r]));return Math.max.apply(Math,e)}}})},637:function(t,e,n){"use strict";var o=n(3),r=n(18),c=(n(6),n(15),n(57),n(68),n(58),n(46),n(222)),l=n(2),h=n(14),d=n(12);function f(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e.a=Object(h.a)(c.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){var e=Object(r.a)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var n=new MutationObserver((function(o){o.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(n.disconnect(),f(e))}));n.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else f(e)}},methods:{getScopeIdAttrs:function(){var t=Object(l.q)(this.$vnode,"context.$options._scopeId");return t&&Object(o.a)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(d.c)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},663:function(t,e,n){"use strict";n(11),n(10),n(19),n(20);var o=n(3),r=(n(6),n(57),n(68),n(32),n(13),n(25),n(51),n(640),n(46),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(648),n(649),n(650),n(651),n(652),n(653),n(48),n(15),n(426),n(1)),c=n(87),l=n(2);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(n,o){return n[t+Object(l.G)(o)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:y}})),x=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:x}})),A=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:A}})),T={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(j)},k={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var o=k[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:A}},j),render:function(t,e){var n=e.props,data=e.data,r=e.children,l="";for(var h in n)l+=String(n[h]);var d=$.get(l);return d||function(){var t,e;for(e in d=[],T)T[e].forEach((function(t){var o=n[t],r=C(e,t,o);r&&d.push(r)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),r)}})},678:function(t,e,n){"use strict";n(36),n(69);var o=n(1);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}})},697:function(t,e,n){var content=n(698);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("7132a15d",content,!0,{sourceMap:!1})},698:function(t,e,n){var o=n(23),r=n(28),c=n(29),l=o(!1),h=r(c);l.push([t.i,"@font-face{font-family:Avenir;src:url("+h+') format("truetype")}@font-face{font-family:Avenir-Bold;src:url('+h+') format("truetype")}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}',""]),t.exports=l},712:function(t,e,n){"use strict";n(13),n(11),n(10),n(6),n(19),n(15),n(20);var o=n(3),r=(n(697),n(41));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},728:function(t,e,n){"use strict";n(172),n(6);var o=n(41);e.a=o.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:o.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},757:function(t,e,n){"use strict";n(13),n(11),n(10),n(19),n(15),n(20);var o=n(136),r=n(3),c=(n(36),n(172),n(6),n(58),n(46),n(32),n(77),n(69),n(57),n(68),n(787),n(728)),l=n(634),h=n(678),d=n(209),f=n(636),v=n(100),m=n(637),y=n(14),O=n(2);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(y.a)(f.a,Object(v.b)(["top","right","bottom","left","absolute"]),l.a,m.a).extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=(!1!==this.attach?a.offsetLeft:a.left)||0,n=Math.max(a.width,t.width),o=0;if(o+=e,(this.left||this.$vuetify.rtl&&!this.right)&&(o-=n-a.width),this.offsetX){var r=isNaN(Number(this.maxWidth))?a.width:Math.min(a.width,Number(this.maxWidth));o+=this.left?-r:a.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=0;return this.top&&(e+=a.height-t.height),!1!==this.attach?e+=a.offsetTop:e+=a.top+this.pageYOffset,this.offsetY&&(e+=this.top?-a.height:a.height),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),e},hasActivator:function(){return!!(this.$slots.activator||this.$scopedSlots.activator||this.activator||this.inputActivator)},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!=typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(O.h)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(O.h)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var n=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.absoluteYOffset+e,o=this.dimensions.activator,r=this.dimensions.content.height,c=n<t+r;return c&&this.offsetOverflow&&o.top>r?t=this.pageYOffset+(o.top-r):c&&!this.allowOverflow?t=n-r-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){for(var t=this.getActivator();t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=l.a.options.methods.genActivatorListeners.call(this),n=e.click;return n&&(e.click=function(e){t.openOnClick&&n&&n(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var rect=t.getBoundingClientRect();return{top:Math.round(rect.top),left:Math.round(rect.left),bottom:Math.round(rect.bottom),right:Math.round(rect.right),width:Math.round(rect.width),height:Math.round(rect.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var rect=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var style=window.getComputedStyle(t);rect.left=parseInt(style.marginLeft),rect.top=parseInt(style.marginTop)}return rect},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var n=e.$refs.content;n&&"none"===n.style.display?(n.style.display="inline-block",t(),n.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!=typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:w({},this.dimensions.activator),content:w({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var n=this.getActivator();if(!n)return;e.activator=this.measure(n),e.activator.offsetLeft=n.offsetLeft,!1!==this.attach?e.activator.offsetTop=n.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var n=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+n.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+n.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}}),j=n(635),T=n(163),k=n(41),C=n(210),$=n(220),D=n(12),E=n(588);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(y.a)(d.a,h.a,j.a,T.a,k.a,A);e.a=P.extend({name:"v-menu",directives:{ClickOutside:C.a,Resize:$.a},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(O.h)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){return(this.auto?"200px":Object(O.h)(this.maxHeight))||"0"},calculatedMaxWidth:function(){return Object(O.h)(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(O.h)(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(O.h)(Math.min(e,t))||"0"},calculatedTop:function(){return(this.auto?Object(O.h)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop())||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var n=this.tiles[t];n.classList.add("v-list-item--highlighted");var o=this.$refs.content.scrollTop,r=this.$refs.content.clientHeight;o>n.offsetTop-8?Object(E.b)(n.offsetTop-n.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):o+r<n.offsetTop+n.clientHeight+8&&Object(E.b)(n.offsetTop-r+2*n.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(D.e)("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var n=e.offsetTop-this.calcScrollPosition(),o=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-o-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==O.y.tab){if(t.keyCode===O.y.down)this.nextTile();else if(t.keyCode===O.y.up)this.prevTile();else if(t.keyCode===O.y.end)this.lastTile();else if(t.keyCode===O.y.home)this.firstTile();else{if(t.keyCode!==O.y.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=l.a.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?N(N({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=A.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var content=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[content]):content},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(o.a)(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:N(N({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:N(N(N({},this.rootThemeClasses),this.roundedClasses),{},Object(r.a)({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){e.target.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){var n;null!=(n=e.$refs.content)&&n.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===O.y.esc){setTimeout((function(){e.isActive=!1}));var n=this.getActivator();this.$nextTick((function(){return n&&n.focus()}))}else!this.isActive&&[O.y.up,O.y.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this;return t("div",{staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]},[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},787:function(t,e,n){var content=n(788);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("1f651591",content,!0,{sourceMap:!1})},788:function(t,e,n){var o=n(23),r=n(28),c=n(29),l=o(!1),h=r(c);l.push([t.i,"@font-face{font-family:Avenir;src:url("+h+') format("truetype")}@font-face{font-family:Avenir-Bold;src:url('+h+') format("truetype")}.v-menu{display:none}.v-menu--attached{display:inline}.v-menu__content{position:absolute;display:inline-block;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);border-radius:4px}.v-menu__content--active{pointer-events:none}.v-menu__content--auto .v-list-item{transition-property:transform,opacity;transition-duration:.3s;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-menu__content--fixed{position:fixed}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list-item{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list-item{transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list-item{opacity:0;transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list-item--active{opacity:1;transform:none!important;pointer-events:auto}',""]),t.exports=l}}]);