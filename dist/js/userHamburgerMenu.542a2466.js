(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userHamburgerMenu"],{"0894":function(e,t,s){},"4b0d":function(e,t,s){"use strict";s("f273")},"5d86":function(e,t,s){"use strict";s.r(t);var n=s("7a23"),a=s("cf05"),c=s.n(a),o=Object(n["M"])("data-v-7f46ee6f");Object(n["v"])("data-v-7f46ee6f");var r={key:0,class:"notification-badge"},i={class:"user-hamburger-menu__menu"},u={key:0,class:"user-menu"},l=Object(n["g"])("Username: "),d={key:1,class:"user-menu"},g=Object(n["h"])("p",null,"You are currently not logged in",-1);Object(n["t"])();var b=o((function(e,t,s,a,o,b){var m=Object(n["A"])("ChatContainer");return Object(n["s"])(),Object(n["e"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!s.show}],onClick:t[7]||(t[7]=Object(n["L"])((function(){}),["stop"]))},[Object(n["h"])("div",{class:["user-hamburger-menu__icon",{rotated:s.show}],onClick:t[1]||(t[1]=function(){return b.toggleMenu&&b.toggleMenu.apply(b,arguments)})},[Object(n["h"])("img",{src:s.src,alt:"menu"},null,8,["src"]),s.showChat&&!s.show&&s.unreadMessages?(Object(n["s"])(),Object(n["e"])("div",r)):Object(n["f"])("",!0)],2),Object(n["h"])("div",i,[Object(n["h"])("img",{class:"home-button",src:c.a,onClick:t[2]||(t[2]=function(){return b.redirectToHome&&b.redirectToHome.apply(b,arguments)}),alt:"Home"}),b.username?(Object(n["s"])(),Object(n["e"])("div",u,[Object(n["h"])("div",null,[Object(n["h"])("p",null,[l,Object(n["h"])("strong",null,Object(n["E"])(decodeURIComponent(b.username)),1)]),s.disableLogout?Object(n["f"])("",!0):(Object(n["s"])(),Object(n["e"])("button",{key:0,onClick:t[3]||(t[3]=function(){return b.logout&&b.logout.apply(b,arguments)})},"Logout"))]),b.logged?Object(n["f"])("",!0):(Object(n["s"])(),Object(n["e"])("button",{key:0,class:"proceed-with-google",onClick:t[4]||(t[4]=function(){return b.redirectToGoogle&&b.redirectToGoogle.apply(b,arguments)})},"Activate sync with google"))])):(Object(n["s"])(),Object(n["e"])("div",d,[g,Object(n["h"])("button",{class:"proceed-with-google",onClick:t[5]||(t[5]=function(){return b.redirectToGoogle&&b.redirectToGoogle.apply(b,arguments)})},"Sign in now with google")])),s.showChat?(Object(n["s"])(),Object(n["e"])(m,{key:2,messages:s.messages,onSendMessage:t[6]||(t[6]=function(t){return e.$emit("send-message",t)})},null,8,["messages"])):Object(n["f"])("",!0)])],2)})),m=s("5502"),j=s("e6fd"),O=s("bc3a"),h=s.n(O),f=Object(n["M"])("data-v-29cddaaa");Object(n["v"])("data-v-29cddaaa");var p={class:"chat__container",id:"chat-container"},v=Object(n["h"])("button",null,"Send",-1);Object(n["t"])();var _=f((function(e,t,s,a,c,o){var r=Object(n["A"])("InfoMessage"),i=Object(n["A"])("RegularMessage");return Object(n["s"])(),Object(n["e"])("div",{class:"chat__main-panel",onKeydown:t[3]||(t[3]=Object(n["L"])((function(){}),["stop"]))},[Object(n["h"])("div",p,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(s.messages,(function(e,t){return Object(n["s"])(),Object(n["e"])("div",{class:"chat__message-container",key:t},[-1===e.localId?(Object(n["s"])(),Object(n["e"])(r,{key:0,message:e},null,8,["message"])):(Object(n["s"])(),Object(n["e"])(i,{key:1,message:e},null,8,["message"]))])})),128))]),Object(n["h"])("form",{class:"chat__input",onSubmit:t[2]||(t[2]=Object(n["L"])((function(){return o.sendMessage&&o.sendMessage.apply(o,arguments)}),["prevent"]))},[Object(n["K"])(Object(n["h"])("input",{placeholder:"Type a message","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.message=e})},null,512),[[n["G"],c.message]]),v],32)],32)})),w=Object(n["M"])("data-v-0cd7bf87");Object(n["v"])("data-v-0cd7bf87");var y={class:"regular-message__body"};Object(n["t"])();var M=w((function(e,t,s,a,c,o){return Object(n["s"])(),Object(n["e"])("div",{class:["regular-message__main-panel",{"right-aligned":s.message.fromYou}]},[Object(n["h"])("strong",{class:"regular-message__username",style:{color:s.message.color}},Object(n["E"])(s.message.username),5),Object(n["h"])("p",y,Object(n["E"])(s.message.body),1)],2)})),k={name:"RegularMessage",props:{message:Object}};s("6f61");k.render=M,k.__scopeId="data-v-0cd7bf87";var C=k,I=Object(n["M"])("data-v-75975d6c");Object(n["v"])("data-v-75975d6c");var T={class:"info-message__main-panel"},L={class:"info-message__body"};Object(n["t"])();var A=I((function(e,t,s,a,c,o){return Object(n["s"])(),Object(n["e"])("div",T,[Object(n["h"])("p",L,Object(n["E"])(s.message.body),1)])})),G={name:"InfoMessage",props:{message:Object}};s("ee0a");G.render=A,G.__scopeId="data-v-75975d6c";var H=G,E={name:"ChatContainer",components:{InfoMessage:H,RegularMessage:C},props:{messages:Array},data:function(){return{message:null}},methods:{sendMessage:function(){this.message&&""!==this.message&&(this.$emit("send-message",{message:this.message}),this.message="")}}};s("b926");E.render=_,E.__scopeId="data-v-29cddaaa";var U=E,$={name:"UserHamburgerMenu",components:{ChatContainer:U},props:{showChat:Boolean,messages:Array,disableLogout:Boolean,unreadMessages:Boolean,src:{required:!0},show:Boolean},data:function(){return{store:Object(m["b"])()}},computed:{logged:function(){return this.store.state.logged},username:function(){return this.store.state.username}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.$emit("toggle-show",!1)}))},methods:{toggleMenu:function(){this.$emit("toggle-show",!this.show),this.$emit("chat-opened")},redirectToHome:function(){window.location.href="/"},redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e},logout:function(){h.a.get(j["h"]),this.store.dispatch("setLogged",!1),this.store.dispatch("setUsername",null)}}};s("4b0d");$.render=b,$.__scopeId="data-v-7f46ee6f";t["default"]=$},"6f61":function(e,t,s){"use strict";s("c1a5")},b926:function(e,t,s){"use strict";s("c731")},c1a5:function(e,t,s){},c731:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.d2ad68a3.png"},ee0a:function(e,t,s){"use strict";s("0894")},f273:function(e,t,s){}}]);
//# sourceMappingURL=userHamburgerMenu.542a2466.js.map