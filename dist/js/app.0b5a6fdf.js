(function(e){function t(t){for(var r,o,s=t[0],i=t[1],l=t[2],p=0,b=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},c=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/unseen/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"008d":function(e,t,a){"use strict";a("c2b7")},"044a":function(e,t,a){e.exports=a.p+"img/pawn_4.a281cce8.png"},"0470":function(e,t,a){"use strict";a("05e3")},"05ac":function(e,t,a){e.exports=a.p+"img/pawn_3.a337a850.png"},"05c8":function(e,t,a){},"05e3":function(e,t,a){},"0ab2":function(e,t,a){e.exports=a.p+"img/logo.591f5fc5.gif"},"0ea0":function(e,t,a){},1:function(e,t){},"15e1":function(e,t,a){},"17d5":function(e,t,a){"use strict";a("7d09")},"184a":function(e,t,a){},"2a79":function(e,t,a){"use strict";a("c53a")},"2f61":function(e,t,a){},"2f79":function(e,t,a){e.exports=a.p+"img/pawn_0.ceb5bf40.png"},"37f5":function(e,t,a){"use strict";a("4411")},"3b73":function(e,t,a){"use strict";a("f4fe")},4034:function(e,t,a){"use strict";a("4a18")},4353:function(e,t,a){e.exports=a.p+"img/pawn_mister_x.ff74ef9a.png"},"436e":function(e,t,a){e.exports=a.p+"img/pawn_2.cd6bc56b.png"},4411:function(e,t,a){},"4a18":function(e,t,a){},"4b6f":function(e,t,a){"use strict";a("184a")},"4fce":function(e,t,a){"use strict";a("9120")},"50b0":function(e,t,a){},5676:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t){var a=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(a)}a("72d8");const c={};c.render=n;var o=c,s=(a("b0c0"),a("6c02")),i={class:"main-panel"};function l(e,t,a,n,c,o){var s=Object(r["w"])("Header"),l=Object(r["w"])("GameHistory"),u=Object(r["w"])("GameButtons"),p=Object(r["w"])("UserHamburgerMenu");return Object(r["p"])(),Object(r["d"])("div",i,[Object(r["g"])(s),Object(r["g"])(l,{games:c.games},null,8,["games"]),Object(r["g"])(u),Object(r["g"])(p)])}var u=Object(r["G"])("data-v-68c2bd50");Object(r["s"])("data-v-68c2bd50");var p={class:"header__main-panel"},b=Object(r["g"])("h1",null,"Unseen",-1);Object(r["q"])();var d=u((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",p,[b])})),m={name:"Header"};a("37f5");m.render=d,m.__scopeId="data-v-68c2bd50";var g=m,O=Object(r["G"])("data-v-7b9431da");Object(r["s"])("data-v-7b9431da");var j={class:"my-games__main-panel"},f={key:0};Object(r["q"])();var _=O((function(e,t,a,n,c,o){var s=Object(r["w"])("Game");return Object(r["p"])(),Object(r["d"])("div",j,[a.games&&a.games.length>0?(Object(r["p"])(),Object(r["d"])("span",f,"Active games")):Object(r["e"])("",!0),(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.games,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.game_id,game:e},null,8,["game"])})),128))])})),v=Object(r["G"])("data-v-07b604bc");Object(r["s"])("data-v-07b604bc");var y={class:"game__main-panel"},h={class:"game__date-container"};Object(r["q"])();var w=v((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",y,[Object(r["g"])("div",{class:"name-container",id:a.game.game_id+"container"},[Object(r["g"])("h1",{id:a.game.game_id+"name",class:{overflows:c.overflows}},Object(r["z"])(a.game.game_id),11,["id"])],8,["id"]),Object(r["g"])("div",h,Object(r["z"])(a.game.date),1)])})),C={name:"Game",props:{game:{type:Object,required:!0}},data:function(){return{overflows:!1}},mounted:function(){var e=document.getElementById(this.game.game_id+"name"),t=document.getElementById(this.game.game_id+"container");e&&(this.overflows=t.clientWidth<e.scrollWidth)}};a("cad6");C.render=w,C.__scopeId="data-v-07b604bc";var k=C,P={name:"GameHistory",components:{Game:k},props:{games:{required:!0}}};a("c7ff");P.render=_,P.__scopeId="data-v-7b9431da";var G=P,M=Object(r["G"])("data-v-0e005901");Object(r["s"])("data-v-0e005901");var T={class:"manage-new-game__main-class"},S={class:"game-info__wrapper"},x=Object(r["g"])("div",{class:"back-arrow"},null,-1),I=Object(r["g"])("button",null,"Join",-1),E={class:"game-info__wrapper"},q=Object(r["g"])("div",{class:"back-arrow"},null,-1),U=Object(r["g"])("button",null,"Create",-1);Object(r["q"])();var A=M((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",T,[null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return c.choice="join"})},"Join game")):Object(r["e"])("",!0),null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.choice="create"})},"Create game")):Object(r["e"])("",!0),Object(r["E"])(Object(r["g"])("div",S,[Object(r["g"])("form",{onSubmit:t[5]||(t[5]=Object(r["F"])((function(){return o.joinGame&&o.joinGame.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[3]||(t[3]=function(e){return c.choice=null})},[x]),Object(r["E"])(Object(r["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.gameToJoin=e})},null,512),[[r["B"],c.gameToJoin]]),I],32)],512),[[r["C"],"join"===c.choice]]),Object(r["E"])(Object(r["g"])("div",E,[Object(r["g"])("form",{onSubmit:t[8]||(t[8]=Object(r["F"])((function(){return o.createGame&&o.createGame.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[6]||(t[6]=function(e){return c.choice=null})},[q]),Object(r["E"])(Object(r["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.gameToCreate=e})},null,512),[[r["B"],c.gameToCreate]]),U],32)],512),[[r["C"],"create"===c.choice]]),c.showPopup?(Object(r["p"])(),Object(r["d"])("div",{key:2,class:"game-buttons__popup-background",onClick:t[12]||(t[12]=function(e){return c.showPopup=!1})},[Object(r["g"])("div",{class:"game-buttons__popup",onClick:t[11]||(t[11]=Object(r["F"])((function(){}),["stop"]))},[Object(r["g"])("h1",null,Object(r["z"])(c.popupMessage),1),Object(r["g"])("div",null,[Object(r["g"])("button",{onClick:t[9]||(t[9]=function(e){return o.redirectToGame(c.popupGame)})},Object(r["z"])(c.popupConfirmButton),1),Object(r["g"])("button",{onClick:t[10]||(t[10]=function(e){return c.showPopup=!1})},"Cancel")])])])):Object(r["e"])("",!0)])})),X=1.1,B=100,L=5,N=5,z=["red","blue","green","pink","white"],H={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},Y="https://papero.tk",J="https://papero.tk/user/get_info",R="https://papero.tk/server/unseen/games/all",F="https://papero.tk/server/unseen/games/status_by_id",D="https://papero.tk/auth/local",$="https://papero.tk/auth/logout",K=a("bc3a"),Q=a.n(K),V={name:"GameButtons",data:function(){return{router:Object(s["d"])(),choice:null,gameToJoin:null,gameToCreate:null,showPopup:!1,popupMessage:"",popupConfirmButton:"",popupGame:null}},methods:{joinGame:function(){var e=this;this.gameToJoin&&Q.a.get(F,{params:{game_id:this.gameToJoin}}).then((function(t){t.data?e.router.push({name:"Game",params:{gameId:e.gameToJoin}}):(e.popupMessage="This game does not exist",e.popupConfirmButton="Create it now",e.popupGame=e.gameToJoin,e.showPopup=!0)}))},createGame:function(){var e=this;this.gameToCreate&&Q.a.get(F,{params:{game_id:this.gameToCreate}}).then((function(t){t.data?(e.popupMessage="This game already exists",e.popupConfirmButton="Join it now",e.popupGame=e.gameToCreate,e.showPopup=!0):e.router.push({name:"Game",params:{gameId:e.gameToCreate}})}))},redirectToGame:function(e){this.router.push({name:"Game",params:{gameId:e}})}}};a("994e");V.render=A,V.__scopeId="data-v-0e005901";var W=V,Z=a("0ab2"),ee=a.n(Z),te=a("a405"),ae=a.n(te),re=Object(r["G"])("data-v-25ac28ce");Object(r["s"])("data-v-25ac28ce");var ne={class:"user-hamburger-menu__menu"},ce={key:0,class:"logged-menu"},oe=Object(r["f"])("Username: "),se={key:1,class:"not-logged-menu"},ie=Object(r["g"])("p",null,"You are currently not logged in",-1),le=Object(r["g"])("img",{src:ae.a},null,-1);Object(r["q"])();var ue=re((function(e,t,a,n,c,o){var s=Object(r["w"])("ChatContainer");return Object(r["p"])(),Object(r["d"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!c.show}],onClick:t[7]||(t[7]=Object(r["F"])((function(){}),["stop"]))},[Object(r["g"])("div",ne,[Object(r["g"])("img",{class:"home-button",src:ee.a,onClick:t[1]||(t[1]=function(){return o.redirectToHome&&o.redirectToHome.apply(o,arguments)})}),o.username?(Object(r["p"])(),Object(r["d"])("div",ce,[Object(r["g"])("div",null,[Object(r["g"])("p",null,[oe,Object(r["g"])("strong",null,Object(r["z"])(o.username),1)]),Object(r["g"])("button",{onClick:t[2]||(t[2]=function(){return o.logout&&o.logout.apply(o,arguments)})},"Logout")]),o.logged?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"procede-with-google",onClick:t[3]||(t[3]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Activate sync with google"))])):(Object(r["p"])(),Object(r["d"])("div",se,[ie,Object(r["g"])("button",{class:"procede-with-google",onClick:t[4]||(t[4]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Sign in now with google")])),a.showChat?(Object(r["p"])(),Object(r["d"])(s,{key:2,messages:a.messages,onSendMessage:t[5]||(t[5]=function(t){return e.$emit("send-message",t)})},null,8,["messages"])):Object(r["e"])("",!0)]),Object(r["g"])("div",{class:["user-hamburger-menu__icon",{rotated:c.show}],onClick:t[6]||(t[6]=function(e){return c.show=!c.show})},[le],2)],2)})),pe=a("5502"),be=Object(r["G"])("data-v-69e8012b");Object(r["s"])("data-v-69e8012b");var de={class:"chat__main-panel"},me=Object(r["g"])("button",null,"Send",-1);Object(r["q"])();var ge=be((function(e,t,a,n,c,o){var s=Object(r["w"])("InfoMessage"),i=Object(r["w"])("RegularMessage");return Object(r["p"])(),Object(r["d"])("div",de,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.messages,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{class:"chat__message-container",key:t},[-1===e.localId?(Object(r["p"])(),Object(r["d"])(s,{key:0,message:e},null,8,["message"])):(Object(r["p"])(),Object(r["d"])(i,{key:1,message:e},null,8,["message"]))])})),128)),Object(r["g"])("form",{class:"chat__input",onSubmit:t[2]||(t[2]=Object(r["F"])((function(t){return e.$emit("send-message",{message:c.message})}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{placeholder:"Type a message","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.message=e})},null,512),[[r["B"],c.message]]),me],32)])})),Oe=Object(r["G"])("data-v-7f5280ad");Object(r["s"])("data-v-7f5280ad");var je={class:"regular-message__body"};Object(r["q"])();var fe=Oe((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:["regular-message__main-panel",{"right-aligned":a.message.fromYou}]},[Object(r["g"])("strong",{class:"regular-message__username",style:{color:a.message.color}},Object(r["z"])(a.message.username),5),Object(r["g"])("p",je,Object(r["z"])(a.message.body),1)],2)})),_e={name:"RegularMessage",props:{message:Object}};a("d1c0");_e.render=fe,_e.__scopeId="data-v-7f5280ad";var ve=_e,ye=Object(r["G"])("data-v-4519be9c");Object(r["s"])("data-v-4519be9c");var he={class:"info-message__main-panel"},we={class:"info-message__body"};Object(r["q"])();var Ce=ye((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",he,[Object(r["g"])("p",we,Object(r["z"])(a.message.body),1)])})),ke={name:"InfoMessage",props:{message:Object}};a("4b6f");ke.render=Ce,ke.__scopeId="data-v-4519be9c";var Pe=ke,Ge={name:"ChatContainer",components:{InfoMessage:Pe,RegularMessage:ve},props:{messages:Array},data:function(){return{message:null}}};a("2a79");Ge.render=ge,Ge.__scopeId="data-v-69e8012b";var Me=Ge,Te={name:"UserHamburgerMenu",components:{ChatContainer:Me},props:{showChat:Boolean,messages:Array},data:function(){return{store:Object(pe["b"])(),show:!1}},computed:{logged:function(){return this.store.state.logged},username:function(){return this.store.state.username}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.show=!1}))},methods:{redirectToHome:function(){window.location.href="/"},redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e},logout:function(){Q.a.get($),this.store.dispatch("setLogged",!1),this.store.dispatch("setUsername",null)}}};a("3b73");Te.render=ue,Te.__scopeId="data-v-25ac28ce";var Se=Te,xe={name:"Home",components:{UserHamburgerMenu:Se,GameButtons:W,GameHistory:G,Header:g},data:function(){return{games:null,store:Object(pe["b"])(),messages:[{localId:0,username:"Jacopo",body:"First message",fromYou:!0,color:"red"},{localId:-1,body:"Matteo has joined"},{localId:0,username:"Jacopo",body:"First message"},{localId:-1,body:"Matteo has joined"},{localId:0,username:"Jacopo",body:"First message"},{localId:0,username:"Jacopo",body:"First message"}]}},mounted:function(){var e=this;Q.a.get(J).then((function(t){t.data?(e.store.dispatch("setLogged",t.data.google_signed_in),e.store.dispatch("setUsername",t.data.username)):e.store.dispatch("setLogged",!1)})),Q.a.get(R).then((function(t){e.games=t.data}))}};a("4fce");xe.render=l;var Ie=xe,Ee=Object(r["G"])("data-v-521e7050");Object(r["s"])("data-v-521e7050");var qe={class:"game__main-panel"};Object(r["q"])();var Ue=Ee((function(e,t,a,n,c,o){var s=Object(r["w"])("UserHamburgerMenu"),i=Object(r["w"])("PregamePhase"),l=Object(r["w"])("GamePhase"),u=Object(r["w"])("PostGamePhase");return Object(r["p"])(),Object(r["d"])("div",qe,[Object(r["g"])(s,{"show-chat":!0,messages:n.messages,onSendMessage:n.sendMessage},null,8,["messages","onSendMessage"]),0===n.status?(Object(r["p"])(),Object(r["d"])(i,{key:0,players:n.players,"current-player":n.currentPlayer,onJoingame:n.joinGame,onQuitgame:n.quitGame,onKickplayer:n.kickPlayer,onChangecolor:n.changeColor,onChangemisterx:n.changeMisterX,onStartgame:n.startGame},null,8,["players","current-player","onJoingame","onQuitgame","onKickplayer","onChangecolor","onChangemisterx","onStartgame"])):1===n.status?(Object(r["p"])(),Object(r["d"])(l,{key:1,players:n.players,"current-player":n.currentPlayer,game:n.game},null,8,["players","current-player","game"])):2===n.status?(Object(r["p"])(),Object(r["d"])(u,{key:2})):Object(r["e"])("",!0)])})),Ae=(a("4160"),a("159b"),a("d3b7"),a("25f0"),Object(r["G"])("data-v-63b32642"));Object(r["s"])("data-v-63b32642");var Xe={class:"pregame-phase__main-panel"},Be=Object(r["g"])("header",{class:"pregame-phase__header"},"Unseen",-1),Le={class:"pregame-phase__players"},Ne=Object(r["g"])("div",{class:"pregame-phase__players-table"},null,-1),ze={class:"pregame-phase__buttons"},He={class:"pregame-phase__information-panel"},Ye=Object(r["g"])("label",{for:"pregame-phase__url"},"Copy the url and share it with your friends!",-1),Je=Object(r["g"])("br",null,null,-1),Re={id:"pregame-phase__url",class:"pregame-phase__copy"},Fe=Object(r["f"])("Copy"),De=Object(r["g"])("label",{for:"pregame-phase__tag"},"Or send them this tag!",-1),$e=Object(r["g"])("br",null,null,-1),Ke={id:"pregame-phase__tag",class:"pregame-phase__copy"},Qe=Object(r["f"])("Copy"),Ve={class:"pregame-phase__admin-and-mister-x"},We=Object(r["f"])("The admin of this lobby is: ");Object(r["q"])();var Ze=Ae((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("ChangeColorPopup"),l=Object(r["w"])("ChangeMisterXPopup"),u=Object(r["x"])("clipboard");return Object(r["p"])(),Object(r["d"])("div",Xe,[Be,Object(r["g"])("div",Le,[Ne,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(n){return Object(r["p"])(),Object(r["d"])(s,{key:n.local_id,player:n,"current-player":a.currentPlayer,onKickplayer:t[1]||(t[1]=function(t){return e.$emit("kickplayer",t)})},null,8,["player","current-player"])})),128))]),Object(r["g"])("div",ze,[a.currentPlayer&&!a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return c.showChangeColorPopup=!0})},"Change your pawn")):Object(r["e"])("",!0),a.currentPlayer?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:1,class:"pregame-phase__buttons__join-game",onClick:t[3]||(t[3]=function(t){return e.$emit("joingame")})},"Join game")),a.currentPlayer&&a.currentPlayer.is_admin?(Object(r["p"])(),Object(r["d"])("button",{key:2,onClick:t[4]||(t[4]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start game")):Object(r["e"])("",!0),!a.currentPlayer||!a.currentPlayer.is_admin||1===a.players.length&&a.currentPlayer.is_mister_x?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:3,class:{"pregame-phase__buttons__change-mister-x":!o.misterXUsername,"pulse-mister-x":c.pulseMisterXButton},onClick:t[5]||(t[5]=function(e){return c.showChangeMisterXPopup=!0})},"Choose Mister X",2)),a.currentPlayer&&1!==a.players.length?(Object(r["p"])(),Object(r["d"])("button",{key:4,onClick:t[6]||(t[6]=function(t){return e.$emit("quitgame")})},"Quit game")):Object(r["e"])("",!0)]),Object(r["g"])("div",He,[Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[8]||(t[8]=function(e){return c.hoverUrl=!0}),onMouseleave:t[9]||(t[9]=function(e){return c.hoverUrl=!1})},[Ye,Je,Object(r["g"])("p",Re,Object(r["z"])(o.url.toString()),1),Object(r["E"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverUrl},onClick:t[7]||(t[7]=function(){return o.onCopiedUrl&&o.onCopiedUrl.apply(o,arguments)})},[Fe,Object(r["g"])("span",{class:{copied:c.copiedUrl}},"Copied",2)],2),[[u,o.url,"copy"]])],32),Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[11]||(t[11]=function(e){return c.hoverTag=!0}),onMouseleave:t[12]||(t[12]=function(e){return c.hoverTag=!1})},[De,$e,Object(r["g"])("p",Ke,Object(r["z"])(o.id),1),Object(r["E"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverTag},onClick:t[10]||(t[10]=function(){return o.onCopiedTag&&o.onCopiedTag.apply(o,arguments)})},[Qe,Object(r["g"])("span",{class:{copied:c.copiedTag}},"Copied",2)],2),[[u,o.id,"copy"]])],32),Object(r["g"])("div",Ve,[Object(r["g"])("p",null,[We,Object(r["g"])("strong",null,Object(r["z"])(o.adminUsername),1)])])]),c.showChangeColorPopup?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"pregame-phase__popup",onClick:t[14]||(t[14]=function(e){return c.showChangeColorPopup=!1})},[Object(r["g"])(i,{players:a.players,onChangecolor:t[13]||(t[13]=function(t){return e.$emit("changecolor",t)})},null,8,["players"])])):Object(r["e"])("",!0),c.showChangeMisterXPopup?(Object(r["p"])(),Object(r["d"])("div",{key:1,class:"pregame-phase__popup",onClick:t[16]||(t[16]=function(e){return c.showChangeMisterXPopup=!1})},[Object(r["g"])(l,{players:a.players,"current-player":a.currentPlayer,onChangemisterx:t[15]||(t[15]=function(t){return e.$emit("changemisterx",t)})},null,8,["players","current-player"])])):Object(r["e"])("",!0)])})),et=Object(r["G"])("data-v-6759a06a");Object(r["s"])("data-v-6759a06a");var tt={class:"player-label__info-labels"},at={class:"player-label__username-label"},rt={key:0,class:"player-label__is-you-label"};Object(r["q"])();var nt=et((function(e,t,n,c,o,s){return Object(r["p"])(),Object(r["d"])("div",{class:["player-label__main-panel",{"player-label__admin-player":n.player.is_admin}]},[Object(r["g"])("img",{src:n.player.is_mister_x?a("4353"):a("5a8c")("./pawn_"+n.player.color+".png"),class:{"kicked-player":o.fadeOut,"hover-animation":o.hoverPlayerAnimation},onClick:t[1]||(t[1]=function(){return s.kickPlayer&&s.kickPlayer.apply(s,arguments)})},null,10,["src"]),Object(r["g"])("div",tt,[Object(r["g"])("strong",at,Object(r["z"])(n.player.username),1),s.isYou?(Object(r["p"])(),Object(r["d"])("strong",rt,"You")):Object(r["e"])("",!0)])],2)})),ct={name:"PlayerLabel",props:{player:{type:Object,required:!0},currentPlayer:{required:!0}},data:function(){return{fadeOut:!1,hoverPlayerAnimation:!0}},methods:{kickPlayer:function(){var e=this;if(!this.isYou&&this.currentPlayer.is_admin){this.fadeOut=!0,this.hoverPlayerAnimation=!1;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(2).then((function(){e.$emit("kickplayer",e.player.local_id)}))}}},computed:{isYou:function(){return!!this.currentPlayer&&this.currentPlayer.local_id===this.player.local_id}}};a("0470");ct.render=nt,ct.__scopeId="data-v-6759a06a";var ot=ct,st=Object(r["G"])("data-v-33ce6ba8");Object(r["s"])("data-v-33ce6ba8");var it={class:"change-popup__main-panel"},lt=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),ut={class:"change-popup__available-pawns"};Object(r["q"])();var pt=st((function(e,t,n,c,o,s){return Object(r["p"])(),Object(r["d"])("div",it,[lt,Object(r["g"])("div",ut,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(s.colorsAvailable,(function(t){return Object(r["p"])(),Object(r["d"])("img",{src:a("5a8c")("./pawn_"+t+".png"),key:t,onClick:function(a){return e.$emit("changecolor",t)}},null,8,["src","onClick"])})),128))])])})),bt=(a("caad"),{name:"ChangeColorPopup",props:{players:{type:Array,required:!0}},computed:{colorsAvailable:function(){for(var e=[],t=0;t<this.players.length;t++)e.push(this.players[t].color);for(var a=[],r=0;r<N;r++)e.includes(r)||a.push(r);return a}}});a("a583");bt.render=pt,bt.__scopeId="data-v-33ce6ba8";var dt=bt,mt=Object(r["G"])("data-v-2bc6cf26");Object(r["s"])("data-v-2bc6cf26");var gt={class:"change-popup__main-panel"},Ot=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),jt={class:"change-popup__available-pawns"},ft={class:"player-label__info-labels"},_t={class:"player-label__username-label"},vt={key:0,class:"player-label__is-you-label"};Object(r["q"])();var yt=mt((function(e,t,n,c,o,s){return Object(r["p"])(),Object(r["d"])("div",gt,[Ot,Object(r["g"])("div",jt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.players,(function(t){return Object(r["E"])((Object(r["p"])(),Object(r["d"])("div",{class:["change-popup__player-label",{"player-label__admin-player":t.is_admin}],key:t.local_id},[Object(r["g"])("img",{src:t.is_mister_x?a("4353"):a("5a8c")("./pawn_"+t.color+".png"),onClick:function(a){return e.$emit("changemisterx",t.local_id)}},null,8,["src","onClick"]),Object(r["g"])("div",ft,[Object(r["g"])("strong",_t,Object(r["z"])(t.username),1),t.local_id===n.currentPlayer.local_id?(Object(r["p"])(),Object(r["d"])("strong",vt,"You")):Object(r["e"])("",!0)])],2)),[[r["C"],!t.is_mister_x]])})),128))])])})),ht={name:"ChangeMisterXPopup",props:{players:{type:Array,required:!0},currentPlayer:{required:!0}}};a("4034");ht.render=yt,ht.__scopeId="data-v-2bc6cf26";var wt=ht,Ct={name:"PregamePhase",components:{ChangeMisterXPopup:wt,ChangeColorPopup:dt,PlayerLabel:ot},props:{players:{type:Array,required:!0},currentPlayer:{required:!0}},data:function(){return{showChangeColorPopup:!1,showChangeMisterXPopup:!1,hoverUrl:!1,hoverTag:!1,copiedUrl:!1,copiedTag:!1,pulseMisterXButton:!1}},methods:{onCopiedUrl:function(){var e=this;this.copiedUrl=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedUrl=!1}))},onCopiedTag:function(){var e=this;this.copiedTag=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedTag=!1}))},startGame:function(){var e=this;if(this.misterXUsername)this.$emit("startgame");else{this.pulseMisterXButton=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.pulseMisterXButton=!1}))}}},computed:{url:function(){return window.location},id:function(){return Object(s["c"])().params.gameId},adminUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_admin)return this.players[e].username;return null},misterXUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_mister_x)return this.players[e].username;return null}}};a("17d5");Ct.render=Ze,Ct.__scopeId="data-v-63b32642";var kt=Ct,Pt=Object(r["G"])("data-v-2527c12a");Object(r["s"])("data-v-2527c12a");var Gt={class:"game-phase__main-panel"};Object(r["q"])();var Mt=Pt((function(e,t,a,n,c,o){var s=Object(r["w"])("MapManager"),i=Object(r["w"])("GameSideBarNormal"),l=Object(r["w"])("GameSideBarMisterX");return Object(r["p"])(),Object(r["d"])("div",Gt,[Object(r["g"])(s,{class:"game-phase__map-manager"}),a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])(l,{key:1,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"])):(Object(r["p"])(),Object(r["d"])(i,{key:0,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"]))])})),Tt=Object(r["G"])("data-v-42da2f0e"),St=Tt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"map-manager__main-panel",onWheel:t[1]||(t[1]=Object(r["F"])((function(){return o.zoom&&o.zoom.apply(o,arguments)}),["prevent"])),onMousedown:t[2]||(t[2]=Object(r["F"])((function(){return o.mouseDown&&o.mouseDown.apply(o,arguments)}),["prevent"])),onMousemove:t[3]||(t[3]=Object(r["F"])((function(){return o.mouseMove&&o.mouseMove.apply(o,arguments)}),["prevent"])),onMouseup:t[4]||(t[4]=Object(r["F"])((function(){return o.mouseUp&&o.mouseUp.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("img",{src:"/assets/map.jpeg",class:"map-manager__map",style:{width:o.imgPercentage+"%"}},null,4)],32)})),xt={name:"MapManager",data:function(){return{deltaY:0,dragging:!1}},methods:{verticalScroll:function(e,t){t.scrollTop+=e},horizontalScroll:function(e,t){t.scrollLeft+=e},keyPressed:function(e){var t=".map-manager__main-panel";switch(e.key.toString().toLowerCase()){case"w":this.verticalScroll(-L,document.querySelector(t));break;case"arrowup":this.verticalScroll(-L,document.querySelector(t));break;case"a":this.horizontalScroll(-L,document.querySelector(t));break;case"arrowleft":this.horizontalScroll(-L,document.querySelector(t));break;case"s":this.verticalScroll(L,document.querySelector(t));break;case"arrowdown":this.verticalScroll(L,document.querySelector(t));break;case"d":this.horizontalScroll(L,document.querySelector(t));break;case"arrowright":this.horizontalScroll(L,document.querySelector(t));break}},mouseDown:function(){this.dragging=!0},mouseMove:function(e){this.dragging&&(e.target.parentNode.style.cursor="move",e.target.parentNode.scrollLeft-=e.movementX,e.target.parentNode.scrollTop-=e.movementY)},mouseUp:function(e){this.dragging=!1,e.target.parentNode.style.cursor="auto"},zoom:function(e){var t=1;this.deltaY+e.deltaY<0?this.deltaY=0:(this.deltaY+=e.deltaY,t=Math.pow(X,e.deltaY/B));var a=document.querySelector(".map-manager__main-panel"),r=e.offsetX*(t-1)+a.scrollLeft*t,n=e.offsetY*(t-1)+a.scrollTop*t;a.scrollLeft=Math.round(r),a.scrollTop=Math.round(n)}},computed:{imgPercentage:function(){return 100*Math.pow(X,this.deltaY/B)}},mounted:function(){window.addEventListener("keydown",this.keyPressed)}};a("e59f");xt.render=St,xt.__scopeId="data-v-42da2f0e";var It=xt,Et=Object(r["G"])("data-v-11f1ca98");Object(r["s"])("data-v-11f1ca98");var qt={class:"game-sidebar-normal__main-panel"},Ut={class:"game-sidebar-normal__players"},At={class:"game-sidebar-normal__transport-cards"},Xt={class:"game-sidebar-normal__transport-wrapper"},Bt={class:"game-sidebar-normal__transport-wrapper"},Lt={class:"game-sidebar-normal__transport-wrapper"},Nt={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var zt=Et((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",qt,[Object(r["g"])("div",Ut,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",At,[Object(r["g"])("div",Xt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingTaxis,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/taxi_icon.png",color:"yellow"})})),128))]),Object(r["g"])("div",Bt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingBuses,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/bus_icon.png",color:"blue"})})),128))]),Object(r["g"])("div",Lt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingUndergrounds,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/underground_icon.svg",color:"red"})})),128))])]),Object(r["g"])("div",Nt,[Object(r["g"])(l)])])})),Ht=Object(r["G"])("data-v-622d1fb6");Object(r["s"])("data-v-622d1fb6");var Yt={class:"player-label__main-panel"},Jt={key:0,src:"/assets/misterx_icon.png"};Object(r["q"])();var Rt=Ht((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",Yt,[Object(r["g"])("div",{class:["player-label__player-information",{"player-label__playing-player":a.isPlaying}]},[Object(r["g"])("div",{class:"player-label__color-badge",style:{backgroundColor:o.playerColor}},null,4),Object(r["g"])("strong",null,Object(r["z"])(a.player.username),1),a.player.is_mister_x?(Object(r["p"])(),Object(r["d"])("img",Jt)):Object(r["e"])("",!0)],2)])})),Ft={name:"PlayerLabel",props:{player:{type:Object,required:!0},isPlaying:{type:Boolean,required:!0}},computed:{playerColor:function(){return N[this.player.color]}}};a("b5fc");Ft.render=Rt,Ft.__scopeId="data-v-622d1fb6";var Dt=Ft,$t=Object(r["G"])("data-v-343523c3"),Kt=$t((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"transport-card__main-panel",style:{backgroundColor:a.color}},[Object(r["g"])("img",{class:"transport-card__image",src:a.src},null,8,["src"])],4)})),Qt={name:"TransportCard",props:{src:{type:String,required:!0},color:{type:String,required:!0}}};a("9be6");Qt.render=Kt,Qt.__scopeId="data-v-343523c3";var Vt=Qt,Wt=(a("2532"),Object(r["G"])("data-v-7d7830d9"));Object(r["s"])("data-v-7d7830d9");var Zt=Object(r["g"])("div",{class:"mister-x-table__turn-transport"},null,-1);Object(r["q"])();var ea=Wt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__main-panel",style:{gridTemplateRows:"repeat("+c.gameConfig.number_of_total_turns/4+", 1fr)"}},[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.gameConfig.number_of_total_turns,(function(e){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__turn__wrapper",key:e},[Object(r["g"])("div",{class:["mister-x-table__turn-number",{"mister-x-table__revelation-turn-number":c.gameConfig.mister_x_is_visible_turns.includes(e)}]},Object(r["z"])(e),3),Zt])})),128))],4)})),ta={name:"MisterXTable",data:function(){return{gameConfig:H}}};a("9fc6");ta.render=ea,ta.__scopeId="data-v-7d7830d9";var aa=ta,ra={name:"GameSideBarNormal",components:{MisterXTable:aa,TransportCard:Vt,PlayerLabel:Dt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}},computed:{remainingTaxis:function(){return H.taxi-this.currentPlayer.used_taxi},remainingBuses:function(){return H.bus-this.currentPlayer.used_bus},remainingUndergrounds:function(){return H.underground-this.currentPlayer.used_underground}}};a("c86b");ra.render=zt,ra.__scopeId="data-v-11f1ca98";var na=ra,ca=Object(r["G"])("data-v-6aebdd9a");Object(r["s"])("data-v-6aebdd9a");var oa={class:"game-sidebar-normal__main-panel"},sa={class:"game-sidebar-normal__players"},ia={class:"game-sidebar-normal__transport-cards"},la={class:"game-sidebar-normal__transport-wrapper"},ua={class:"game-sidebar-normal__transport-wrapper"},pa={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var ba=ca((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",oa,[Object(r["g"])("div",sa,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.game.players,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",ia,[Object(r["g"])("div",la,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(2,(function(e){return Object(r["g"])(i,{key:e,src:"/assets/2x_icon.png",color:"none"})})),64))]),Object(r["g"])("div",ua,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(5,(function(e){return Object(r["g"])(i,{key:e,src:"/assets/secret_transport_icon.png",color:"black"})})),64))])]),Object(r["g"])("div",pa,[Object(r["g"])(l)])])})),da={name:"GameSideBarNormal",components:{MisterXTable:aa,TransportCard:Vt,PlayerLabel:Dt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("97a4");da.render=ba,da.__scopeId="data-v-6aebdd9a";var ma=da,ga={name:"GamePhase",components:{GameSideBarNormal:na,GameSideBarMisterX:ma,MapManager:It},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("008d");ga.render=Mt,ga.__scopeId="data-v-2527c12a";var Oa=ga,ja=Object(r["G"])("data-v-20d2bdd2"),fa=ja((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",null," postgame ")})),_a={name:"PostGamePhase"};_a.render=fa,_a.__scopeId="data-v-20d2bdd2";var va=_a,ya={CONNECT_TO_GAME:"connect-to-game",JOIN_GAME:"join-game",QUIT_GAME:"quit-game",KICK_PLAYER:"kick-from-game",LOBBY_MODIFIED:"lobby-modified",CHANGE_COLOR:"change-color",CHANGE_MISTER_X:"change-mister-x",CHAT:"chat",START_GAME:"start-game",MOVE:"move",MOVE_MISTER_X:"move-mister-x",END_GAME:"end-game"},ha=a("8055"),wa=a.n(ha),Ca=a("a1e9"),ka={name:"Game",components:{PostGamePhase:va,GamePhase:Oa,PregamePhase:kt,UserHamburgerMenu:Se},setup:function(){var e=wa()(Y,{path:"/unseen/socket.io/"}),t=Object(s["c"])().params.gameId,a=Object(Ca["j"])(void 0),r=Object(Ca["j"])(void 0),n=Object(Ca["j"])([]),c=Object(Ca["j"])({}),o=Object(Ca["j"])([]);function i(e){a.value=e.status,null!=e.your_local_id?e.players.forEach((function(t){t.local_id===e.your_local_id&&(r.value=t)})):r.value=null,n.value=e.players,c.value={playingPlayer:e.players_turn,isRevelation:e.is_revelation_turn,lastMisterXKnownPosition:e.last_known_position,misterXMoves:e.mister_x_moves}}function l(){e.emit(ya.JOIN_GAME)}function u(){e.emit(ya.QUIT_GAME)}function p(t){e.emit(ya.KICK_PLAYER,t)}function b(t){e.emit(ya.CHANGE_COLOR,t)}function d(){e.emit(ya.START_GAME)}function m(t){e.emit(ya.CHANGE_MISTER_X,t)}function g(t){var a=t;a._from=r.value.local_id,e.emit(ya.CHAT,a)}function O(e){var t={};t.localId=e._from,t.username=j(e._from),t.body=e.message,t.color=f(e._from),t.fromYou=e._from===r.value.local_id,o.value.push(t)}function j(e){for(var t=0;t<n.value.length;t++)if(n.value[t].local_id===e)return n.value[t].username;return null}function f(e){for(var t=0;t<n.value.length;t++)if(n.value[t].local_id===e)return z[n.value[t].color];return null}return e.emit(ya.CONNECT_TO_GAME,{game_id:t}),e.on(ya.CONNECT_TO_GAME,(function(e){i(e)})),e.on(ya.LOBBY_MODIFIED,(function(e){i(e)})),e.on(ya.START_GAME,(function(e){i(e)})),e.on(ya.CHAT,(function(e){O(e)})),{status:a,currentPlayer:r,players:n,game:c,messages:o,joinGame:l,quitGame:u,kickPlayer:p,changeColor:b,changeMisterX:m,startGame:d,sendMessage:g}}};a("681e");ka.render=Ue,ka.__scopeId="data-v-521e7050";var Pa=ka,Ga=Object(pe["a"])({state:{username:null,logged:!1},mutations:{SET_USERNAME:function(e,t){e.username=t},SET_LOGGED:function(e,t){e.logged=t}},actions:{setUsername:function(e,t){var a=e.commit;a("SET_USERNAME",t)},setLogged:function(e,t){var a=e.commit;a("SET_LOGGED",t)}}}),Ma=[{path:"/unseen",name:"Home",component:Ie},{path:"/unseen/:gameId",name:"Game",component:Pa}],Ta=Object(s["a"])({history:Object(s["b"])(),base:"unseen",routes:Ma});Ta.beforeEach((function(e,t,a){"Game"===e.name?Ga.state.username?a():Q.a.get(D).then((function(){a()})):a()}));var Sa=Ta,xa=a("c479"),Ia=a.n(xa),Ea=Object(r["c"])(o);Ea.use(Sa),Ea.use(Ga),Ea.use(Ia.a),Ea.mount("#app")},"5a8c":function(e,t,a){var r={"./pawn_0.png":"2f79","./pawn_1.png":"624c","./pawn_2.png":"436e","./pawn_3.png":"05ac","./pawn_4.png":"044a","./pawn_mister_x.png":"4353"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id="5a8c"},"624c":function(e,t,a){e.exports=a.p+"img/pawn_1.a4e8246a.png"},"681e":function(e,t,a){"use strict";a("50b0")},"72d8":function(e,t,a){"use strict";a("a7bb")},"7d09":function(e,t,a){},9120:function(e,t,a){},"97a4":function(e,t,a){"use strict";a("9815")},9815:function(e,t,a){},"994e":function(e,t,a){"use strict";a("2f61")},"9be6":function(e,t,a){"use strict";a("b99c")},"9fc6":function(e,t,a){"use strict";a("e25a")},a405:function(e,t,a){e.exports=a.p+"img/hamburger_icon.dfd455a4.png"},a583:function(e,t,a){"use strict";a("5676")},a7bb:function(e,t,a){},b5fc:function(e,t,a){"use strict";a("f8bf")},b99c:function(e,t,a){},c2b7:function(e,t,a){},c53a:function(e,t,a){},c7ff:function(e,t,a){"use strict";a("e448")},c86b:function(e,t,a){"use strict";a("05c8")},cad6:function(e,t,a){"use strict";a("0ea0")},d1c0:function(e,t,a){"use strict";a("15e1")},e25a:function(e,t,a){},e448:function(e,t,a){},e59f:function(e,t,a){"use strict";a("eb72")},eb72:function(e,t,a){},f4fe:function(e,t,a){},f8bf:function(e,t,a){}});
//# sourceMappingURL=app.0b5a6fdf.js.map