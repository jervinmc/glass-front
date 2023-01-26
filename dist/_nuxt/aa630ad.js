(window.webpackJsonp=window.webpackJsonp||[]).push([[71,42],{666:function(t,e,r){"use strict";r(11),r(10),r(19),r(20);var n=r(3),o=(r(6),r(57),r(68),r(32),r(13),r(25),r(51),r(647),r(46),r(648),r(649),r(650),r(651),r(652),r(653),r(654),r(655),r(656),r(657),r(658),r(659),r(660),r(48),r(15),r(426),r(1)),c=r(87),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(r,n){return r[t+Object(l.G)(n)]=e(),r}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:j}})),_=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},P=m("alignContent",(function(){return{type:String,default:null,validator:_}})),x={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(P)},C={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,r){var n=C[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},y),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:_}},P),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var f=E.get(l);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var n=r[t],o=k(e,t,n);o&&f.push(o)}));f.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),E.set(l,f)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},670:function(t,e,r){"use strict";var n=r(18),o=(r(13),r(25),r(57),r(68),[function(t){return t&&Object.keys(t).length&&t.constructor===Object||"This is field is required"}]),c=[function(t){return"object"===Object(n.a)(t)||"This field must be a reference from the list"}];e.a={standardRules:[function(t){return!!t||"This field is required"}],emptyObjectFieldRule:o,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],emailFormatRule:[function(t){return null===t||""===t||(/.+@.+\..+/.test(t)||"E-mail must be valid")}],max10Char:[function(t){return t.length<=10||"Input too long!"}],max150Char:[function(t){return t.length<150||"Input too long!"}],mobileChar:[function(t){return 10===t.length&&!t.includes("-")||12===t.length||"Invalid mobile format"}],fieldArrayRule:[function(t){return 0!==t.length||"This field is required"}],fieldArraySingleRule:[function(t){return 0!==t.length||"This field is required"},function(t){return!(t.length>1)||"You must choose only 1 role"}],notObjectFieldRule:c}},695:function(t,e,r){"use strict";var n=r(3),o=(r(57),r(68),r(175),r(10),r(6),r(15),r(69),r(172),r(13),r(11),r(19),r(20),r(14)),c=r(98),l=r(137);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},723:function(t,e,r){"use strict";r.r(e);var n=r(586),o=r(799),c=r(695),l=r(666),d=r(638),f=(r(13),r(11),r(10),r(6),r(19),r(15),r(20),r(5)),v=r(3),h=(r(47),r(670));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={data:function(){return O(O({birthdateMenu:!1,isLoaded:!1,register:{firstname:"",lastname:"",gender:"",email:"",confirm_email:"",mobile_number:"",birthdate:"",address:"",province:"",city:"",barangay:"",password:"",confirm_password:""}},h.a),{},{isValid:!1})},methods:{submitHandler:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isLoaded=!0,t.$refs.form.validate(),t.isValid){e.next=4;break}return e.abrupt("return");case 4:return console.log(t.register),e.prev=5,t.register.is_active=!1,e.next=9,t.$store.dispatch("users/addUser",t.register);case 9:alert("Successful ! We have sent an email to you for verification."),location="/login",e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),alert(e.t0);case 16:t.isLoaded=!1;case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))()}}},j=r(95),component=Object(j.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-10"},[e(c.a,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[e("div",{staticClass:"py-10",attrs:{align:"start"}},[e("div",{staticClass:"py-10 secondary--text text-h4",attrs:{align:"center"}},[t._v("\n        CREATE AN ACCOUNT\n      ")]),t._v(" "),e("div",[e(l.a,[e(o.a,[t._v("\n            Firstname\n            "),e(d.a,{attrs:{outlined:"",rules:t.standardRules},model:{value:t.register.firstname,callback:function(e){t.$set(t.register,"firstname",e)},expression:"register.firstname"}})],1),t._v(" "),e(o.a,[t._v("\n            Lastname\n            "),e(d.a,{attrs:{outlined:"",rules:t.standardRules},model:{value:t.register.lastname,callback:function(e){t.$set(t.register,"lastname",e)},expression:"register.lastname"}})],1)],1)],1),t._v(" "),e("div",[e(l.a,[e(o.a,[t._v("\n            Email Address\n            "),e(d.a,{attrs:{outlined:"",rules:t.standardRules},model:{value:t.register.email,callback:function(e){t.$set(t.register,"email",e)},expression:"register.email"}})],1)],1)],1),t._v(" "),e("div",[e(l.a)],1),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div",[e(l.a,[e(o.a,[t._v("\n            Password\n            "),e(d.a,{attrs:{outlined:"",rules:t.standardRules,type:"password"},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}})],1),t._v(" "),e(o.a,[t._v("\n            Confirm Password\n            "),e(d.a,{attrs:{outlined:"",type:"password",rules:t.standardRules},model:{value:t.register.confirm_password,callback:function(e){t.$set(t.register,"confirm_password",e)},expression:"register.confirm_password"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"px-10 pointer",attrs:{align:"center"}},[e(n.a,{attrs:{width:"200",dark:"",depressed:"",color:"grey"}},[t._v(" Cancel ")]),t._v(" "),e(n.a,{attrs:{width:"200",loading:t.isLoaded,dark:"",depressed:"",color:"secondary",type:"submit"}},[t._v("\n          Submit\n        ")])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},808:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Register"}},components:{RegistrationForm:r(723).default}},o=r(95),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",[t("registration-form")],1)}),[],!1,null,null,null);e.default=component.exports}}]);