(function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/unseen/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"008d":function(e,t,a){"use strict";a("c2b7")},"044a":function(e,t,a){e.exports=a.p+"img/pawn_4.a281cce8.png"},"05ac":function(e,t,a){e.exports=a.p+"img/pawn_3.a337a850.png"},"05c8":function(e,t,a){},"0ab2":function(e,t,a){e.exports=a.p+"img/logo.591f5fc5.gif"},"0ea0":function(e,t,a){},1:function(e,t){},2079:function(e,t,a){},"2f79":function(e,t,a){e.exports=a.p+"img/pawn_0.ceb5bf40.png"},4353:function(e,t,a){e.exports=a.p+"img/pawn_mister_x.ff74ef9a.png"},"436e":function(e,t,a){e.exports=a.p+"img/pawn_2.cd6bc56b.png"},"45e7":function(e,t,a){},5080:function(e,t,a){"use strict";a("b575")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t){var a=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(a)}a("72d8");const c={};c.render=r;var o=c,i=(a("b0c0"),a("6c02")),s={class:"main-panel"};function l(e,t,a,r,c,o){var i=Object(n["w"])("Header"),l=Object(n["w"])("GameHistory"),u=Object(n["w"])("GameButtons"),p=Object(n["w"])("UserHamburgerMenu");return Object(n["p"])(),Object(n["d"])("div",s,[Object(n["g"])(i,{logged:c.logged},null,8,["logged"]),Object(n["g"])(l,{games:c.games},null,8,["games"]),Object(n["g"])(u,{logged:c.logged},null,8,["logged"]),Object(n["g"])(p,{login:{username:c.username,logged:c.logged}},null,8,["login"])])}var u=Object(n["G"])("data-v-192659a0");Object(n["s"])("data-v-192659a0");var p={class:"header__main-panel"},d=Object(n["g"])("h1",null,"Unseen",-1);Object(n["q"])();var b=u((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",p,[d,a.logged?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:0,onClick:t[1]||(t[1]=function(){return o.login&&o.login.apply(o,arguments)})},"Login"))])})),m={name:"Header",props:{logged:{type:Boolean,required:!0}},methods:{login:function(){var e=window.location;window.location.href="/auth/google?from_location="+e}}};a("5080");m.render=b,m.__scopeId="data-v-192659a0";var g=m,O=Object(n["G"])("data-v-7b9431da");Object(n["s"])("data-v-7b9431da");var j={class:"my-games__main-panel"},_={key:0};Object(n["q"])();var f=O((function(e,t,a,r,c,o){var i=Object(n["w"])("Game");return Object(n["p"])(),Object(n["d"])("div",j,[a.games&&a.games.length>0?(Object(n["p"])(),Object(n["d"])("span",_,"Active games")):Object(n["e"])("",!0),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.games,(function(e){return Object(n["p"])(),Object(n["d"])(i,{key:e.game_id,game:e},null,8,["game"])})),128))])})),y=Object(n["G"])("data-v-07b604bc");Object(n["s"])("data-v-07b604bc");var v={class:"game__main-panel"},h={class:"game__date-container"};Object(n["q"])();var w=y((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",v,[Object(n["g"])("div",{class:"name-container",id:a.game.game_id+"container"},[Object(n["g"])("h1",{id:a.game.game_id+"name",class:{overflows:c.overflows}},Object(n["z"])(a.game.game_id),11,["id"])],8,["id"]),Object(n["g"])("div",h,Object(n["z"])(a.game.date),1)])})),P={name:"Game",props:{game:{type:Object,required:!0}},data:function(){return{overflows:!1}},mounted:function(){var e=document.getElementById(this.game.game_id+"name"),t=document.getElementById(this.game.game_id+"container");e&&(this.overflows=t.clientWidth<e.scrollWidth)}};a("cad6");P.render=w,P.__scopeId="data-v-07b604bc";var C=P,k={name:"GameHistory",components:{Game:C},props:{games:{required:!0}}};a("c7ff");k.render=f,k.__scopeId="data-v-7b9431da";var T=k,G=Object(n["G"])("data-v-3c390812");Object(n["s"])("data-v-3c390812");var M={class:"manage-new-game__main-class"},S={class:"game-info__wrapper"},E=Object(n["g"])("div",{class:"back-arrow"},null,-1),x=Object(n["g"])("button",null,"Join",-1),I={class:"game-info__wrapper"},q=Object(n["g"])("div",{class:"back-arrow"},null,-1),A=Object(n["g"])("button",null,"Create",-1);Object(n["q"])();var X=G((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",M,[null===c.choice?(Object(n["p"])(),Object(n["d"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return c.choice="join"})},"Join game")):Object(n["e"])("",!0),null===c.choice?(Object(n["p"])(),Object(n["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.choice="create"})},"Create game")):Object(n["e"])("",!0),Object(n["E"])(Object(n["g"])("div",S,[Object(n["g"])("form",{onSubmit:t[5]||(t[5]=Object(n["F"])((function(){return o.joinGame&&o.joinGame.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",{class:"back-arrow-wrapper",onClick:t[3]||(t[3]=function(e){return c.choice=null})},[E]),Object(n["E"])(Object(n["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.gameToJoin=e})},null,512),[[n["B"],c.gameToJoin]]),x],32)],512),[[n["C"],"join"===c.choice]]),Object(n["E"])(Object(n["g"])("div",I,[Object(n["g"])("form",{onSubmit:t[8]||(t[8]=Object(n["F"])((function(){return o.createGame&&o.createGame.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",{class:"back-arrow-wrapper",onClick:t[6]||(t[6]=function(e){return c.choice=null})},[q]),Object(n["E"])(Object(n["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.gameToCreate=e})},null,512),[[n["B"],c.gameToCreate]]),A],32)],512),[[n["C"],"create"===c.choice]]),c.showPopup?(Object(n["p"])(),Object(n["d"])("div",{key:2,class:"game-buttons__popup-background",onClick:t[12]||(t[12]=function(e){return c.showPopup=!1})},[Object(n["g"])("div",{class:"game-buttons__popup",onClick:t[11]||(t[11]=Object(n["F"])((function(){}),["stop"]))},[Object(n["g"])("h1",null,Object(n["z"])(c.popupMessage),1),Object(n["g"])("div",null,[Object(n["g"])("button",{onClick:t[9]||(t[9]=function(e){return o.redirectToGame(c.popupGame)})},Object(n["z"])(c.popupConfirmButton),1),Object(n["g"])("button",{onClick:t[10]||(t[10]=function(e){return c.showPopup=!1})},"Cancel")])])])):Object(n["e"])("",!0)])})),L=1.1,N=100,U=5,R=5,B={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},Y="https://papero.tk",z="https://papero.tk/user/get_info",H="https://papero.tk/server/unseen/games/all",J="https://papero.tk/server/unseen/games/status_by_id",K="https://papero.tk/auth/local",F=a("bc3a"),D=a.n(F),$={name:"GameButtons",data:function(){return{router:Object(i["d"])(),choice:null,gameToJoin:null,gameToCreate:null,showPopup:!1,popupMessage:"",popupConfirmButton:"",popupGame:null}},methods:{joinGame:function(){var e=this;D.a.get(J,{params:{game_id:this.gameToJoin}}).then((function(t){t.data?e.router.push({name:"Game",params:{gameId:e.gameToJoin}}):(e.popupMessage="This game does not exist",e.popupConfirmButton="Create it now",e.popupGame=e.gameToJoin,e.showPopup=!0)}))},createGame:function(){var e=this;D.a.get(J,{params:{game_id:this.gameToCreate}}).then((function(t){t.data?(e.popupMessage="This game already exists",e.popupConfirmButton="Join it now",e.popupGame=e.gameToCreate,e.showPopup=!0):e.router.push({name:"Game",params:{gameId:e.gameToCreate}})}))},redirectToGame:function(e){this.router.push({name:"Game",params:{gameId:e}})}}};a("e383");$.render=X,$.__scopeId="data-v-3c390812";var V=$,Q=a("0ab2"),W=a.n(Q),Z=a("a405"),ee=a.n(Z),te=Object(n["G"])("data-v-b116e08e");Object(n["s"])("data-v-b116e08e");var ae={class:"user-hamburger-menu__menu"},ne={key:0,class:"logged-menu"},re=Object(n["f"])("Username: "),ce=Object(n["g"])("button",null,"Logout",-1),oe={key:1,class:"not-logged-menu"},ie=Object(n["g"])("p",null,"You are currently not logged in",-1),se=Object(n["g"])("img",{src:ee.a},null,-1);Object(n["q"])();var le=te((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!c.show}],onClick:t[5]||(t[5]=Object(n["F"])((function(){}),["stop"]))},[Object(n["g"])("div",ae,[Object(n["g"])("img",{class:"home-button",src:W.a,onClick:t[1]||(t[1]=function(){return o.redirectToHome&&o.redirectToHome.apply(o,arguments)})}),a.login.username?(Object(n["p"])(),Object(n["d"])("div",ne,[Object(n["g"])("div",null,[Object(n["g"])("p",null,[re,Object(n["g"])("strong",null,Object(n["z"])(a.login.username),1)]),ce]),a.login.logged?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:0,class:"procede-with-google",onClick:t[2]||(t[2]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Activate sync with google"))])):(Object(n["p"])(),Object(n["d"])("div",oe,[ie,Object(n["g"])("button",{class:"procede-with-google",onClick:t[3]||(t[3]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Sign in now with google")]))]),Object(n["g"])("div",{class:["user-hamburger-menu__icon",{rotated:c.show}],onClick:t[4]||(t[4]=function(e){return c.show=!c.show})},[se],2)],2)})),ue={name:"UserHamburgerMenu",props:{login:{required:!0}},data:function(){return{show:!1}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.show=!1}))},methods:{redirectToHome:function(){window.location="https://papero.tk"},redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e}}};a("af7d");ue.render=le,ue.__scopeId="data-v-b116e08e";var pe=ue,de={name:"Home",components:{UserHamburgerMenu:pe,GameButtons:V,GameHistory:T,Header:g},data:function(){return{logged:!0,games:null,username:null}},mounted:function(){var e=this;D.a.get(z).then((function(t){t.data?(e.logged=t.data.google_signed_in,e.username=t.data.username):e.logged=!1})),D.a.get(H).then((function(t){e.games=t.data}))}};a("de3f");de.render=l;var be=de,me=Object(n["G"])("data-v-636d30db");Object(n["s"])("data-v-636d30db");var ge={class:"game__main-panel"};Object(n["q"])();var Oe=me((function(e,t,a,r,c,o){var i=Object(n["w"])("PregamePhase"),s=Object(n["w"])("GamePhase"),l=Object(n["w"])("PostGamePhase");return Object(n["p"])(),Object(n["d"])("div",ge,[0===r.status?(Object(n["p"])(),Object(n["d"])(i,{key:0,players:r.players,"current-player":r.currentPlayer,onJoingame:r.joinGame,onQuitgame:r.quitGame,onKickplayer:r.kickPlayer,onChangecolor:r.changeColor,onChangemisterx:r.changeMisterX,onStartgame:r.startGame},null,8,["players","current-player","onJoingame","onQuitgame","onKickplayer","onChangecolor","onChangemisterx","onStartgame"])):1===r.status?(Object(n["p"])(),Object(n["d"])(s,{key:1,players:r.players,"current-player":r.currentPlayer,game:r.game},null,8,["players","current-player","game"])):2===r.status?(Object(n["p"])(),Object(n["d"])(l,{key:2})):Object(n["e"])("",!0)])})),je=(a("4160"),a("159b"),a("d3b7"),a("25f0"),Object(n["G"])("data-v-2dd80bfd"));Object(n["s"])("data-v-2dd80bfd");var _e={class:"pregame-phase__main-panel"},fe=Object(n["g"])("header",{class:"pregame-phase__header"},"Unseen",-1),ye={class:"pregame-phase__players"},ve=Object(n["g"])("div",{class:"pregame-phase__players-table"},null,-1),he={class:"pregame-phase__buttons"},we={class:"pregame-phase__information-panel"},Pe=Object(n["g"])("label",{for:"pregame-phase__url"},"Copy the url and share it with your friends!",-1),Ce=Object(n["g"])("br",null,null,-1),ke={id:"pregame-phase__url",class:"pregame-phase__copy"},Te=Object(n["f"])("Copy"),Ge=Object(n["g"])("label",{for:"pregame-phase__tag"},"Or send them this tag!",-1),Me=Object(n["g"])("br",null,null,-1),Se={id:"pregame-phase__tag",class:"pregame-phase__copy"},Ee=Object(n["f"])("Copy"),xe={class:"pregame-phase__admin-and-mister-x"},Ie=Object(n["f"])("The admin of this lobby is: ");Object(n["q"])();var qe=je((function(e,t,a,r,c,o){var i=Object(n["w"])("PlayerLabel"),s=Object(n["w"])("ChangeColorPopup"),l=Object(n["w"])("ChangeMisterXPopup"),u=Object(n["x"])("clipboard");return Object(n["p"])(),Object(n["d"])("div",_e,[fe,Object(n["g"])("div",ye,[ve,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.players,(function(r){return Object(n["p"])(),Object(n["d"])(i,{key:r.local_id,player:r,"current-player":a.currentPlayer,onKickplayer:t[1]||(t[1]=function(t){return e.$emit("kickplayer",t)})},null,8,["player","current-player"])})),128))]),Object(n["g"])("div",he,[a.currentPlayer&&!a.currentPlayer.is_mister_x?(Object(n["p"])(),Object(n["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return c.showChangeColorPopup=!0})},"Change your pawn")):Object(n["e"])("",!0),a.currentPlayer?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:1,class:"pregame-phase__buttons__join-game",onClick:t[3]||(t[3]=function(t){return e.$emit("joingame")})},"Join game")),a.currentPlayer&&a.currentPlayer.is_admin?(Object(n["p"])(),Object(n["d"])("button",{key:2,onClick:t[4]||(t[4]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start game")):Object(n["e"])("",!0),!a.currentPlayer||!a.currentPlayer.is_admin||1===a.players.length&&a.currentPlayer.is_mister_x?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:3,class:{"pregame-phase__buttons__change-mister-x":!o.misterXUsername,"pulse-mister-x":c.pulseMisterXButton},onClick:t[5]||(t[5]=function(e){return c.showChangeMisterXPopup=!0})},"Choose Mister X",2)),a.currentPlayer&&1!==a.players.length?(Object(n["p"])(),Object(n["d"])("button",{key:4,onClick:t[6]||(t[6]=function(t){return e.$emit("quitgame")})},"Quit game")):Object(n["e"])("",!0)]),Object(n["g"])("div",we,[Object(n["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[8]||(t[8]=function(e){return c.hoverUrl=!0}),onMouseleave:t[9]||(t[9]=function(e){return c.hoverUrl=!1})},[Pe,Ce,Object(n["g"])("p",ke,Object(n["z"])(o.url.toString()),1),Object(n["E"])(Object(n["g"])("button",{class:{"copy-hover":c.hoverUrl},onClick:t[7]||(t[7]=function(){return o.onCopiedUrl&&o.onCopiedUrl.apply(o,arguments)})},[Te,Object(n["g"])("span",{class:{copied:c.copiedUrl}},"Copied",2)],2),[[u,o.url,"copy"]])],32),Object(n["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[11]||(t[11]=function(e){return c.hoverTag=!0}),onMouseleave:t[12]||(t[12]=function(e){return c.hoverTag=!1})},[Ge,Me,Object(n["g"])("p",Se,Object(n["z"])(o.id),1),Object(n["E"])(Object(n["g"])("button",{class:{"copy-hover":c.hoverTag},onClick:t[10]||(t[10]=function(){return o.onCopiedTag&&o.onCopiedTag.apply(o,arguments)})},[Ee,Object(n["g"])("span",{class:{copied:c.copiedTag}},"Copied",2)],2),[[u,o.id,"copy"]])],32),Object(n["g"])("div",xe,[Object(n["g"])("p",null,[Ie,Object(n["g"])("strong",null,Object(n["z"])(o.adminUsername),1)])])]),c.showChangeColorPopup?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:"pregame-phase__popup",onClick:t[14]||(t[14]=function(e){return c.showChangeColorPopup=!1})},[Object(n["g"])(s,{players:a.players,onChangecolor:t[13]||(t[13]=function(t){return e.$emit("changecolor",t)})},null,8,["players"])])):Object(n["e"])("",!0),c.showChangeMisterXPopup?(Object(n["p"])(),Object(n["d"])("div",{key:1,class:"pregame-phase__popup",onClick:t[16]||(t[16]=function(e){return c.showChangeMisterXPopup=!1})},[Object(n["g"])(l,{players:a.players,"current-player":a.currentPlayer,onChangemisterx:t[15]||(t[15]=function(t){return e.$emit("changemisterx",t)})},null,8,["players","current-player"])])):Object(n["e"])("",!0)])})),Ae=Object(n["G"])("data-v-04f04e17");Object(n["s"])("data-v-04f04e17");var Xe={class:"player-label__info-labels"},Le={class:"player-label__username-label"},Ne={key:0,class:"player-label__is-you-label"};Object(n["q"])();var Ue=Ae((function(e,t,r,c,o,i){return Object(n["p"])(),Object(n["d"])("div",{class:["player-label__main-panel",{"player-label__admin-player":r.player.is_admin}]},[Object(n["g"])("img",{src:r.player.is_mister_x?a("4353"):a("5a8c")("./pawn_"+r.player.color+".png"),class:{"kicked-player":o.fadeOut,"hover-animation":o.hoverPlayerAnimation},onClick:t[1]||(t[1]=function(){return i.kickPlayer&&i.kickPlayer.apply(i,arguments)})},null,10,["src"]),Object(n["g"])("div",Xe,[Object(n["g"])("strong",Le,Object(n["z"])(r.player.username),1),i.isYou?(Object(n["p"])(),Object(n["d"])("strong",Ne,"You")):Object(n["e"])("",!0)])],2)})),Re={name:"PlayerLabel",props:{player:{type:Object,required:!0},currentPlayer:{required:!0}},data:function(){return{fadeOut:!1,hoverPlayerAnimation:!0}},methods:{kickPlayer:function(){var e=this;if(!this.isYou&&this.currentPlayer.is_admin){this.fadeOut=!0,this.hoverPlayerAnimation=!1;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(2).then((function(){e.$emit("kickplayer",e.player.local_id)}))}}},computed:{isYou:function(){return!!this.currentPlayer&&this.currentPlayer.local_id===this.player.local_id}}};a("9aa1");Re.render=Ue,Re.__scopeId="data-v-04f04e17";var Be=Re,Ye=Object(n["G"])("data-v-4eeb591d");Object(n["s"])("data-v-4eeb591d");var ze={class:"change-popup__main-panel"},He=Object(n["g"])("div",{class:"change-popup__table-panel"},null,-1),Je={class:"change-popup__available-pawns"};Object(n["q"])();var Ke=Ye((function(e,t,r,c,o,i){return Object(n["p"])(),Object(n["d"])("div",ze,[He,Object(n["g"])("div",Je,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.colorsAvailable,(function(t){return Object(n["p"])(),Object(n["d"])("img",{src:a("5a8c")("./pawn_"+t+".png"),key:t,onClick:function(a){return e.$emit("changecolor",t)}},null,8,["src","onClick"])})),128))])])})),Fe=(a("caad"),{name:"ChangeColorPopup",props:{players:{type:Array,required:!0}},computed:{colorsAvailable:function(){for(var e=[],t=0;t<this.players.length;t++)e.push(this.players[t].color);for(var a=[],n=0;n<R;n++)e.includes(n)||a.push(n);return a}}});a("65ed");Fe.render=Ke,Fe.__scopeId="data-v-4eeb591d";var De=Fe,$e=Object(n["G"])("data-v-4af72e0f");Object(n["s"])("data-v-4af72e0f");var Ve={class:"change-popup__main-panel"},Qe=Object(n["g"])("div",{class:"change-popup__table-panel"},null,-1),We={class:"change-popup__available-pawns"},Ze={class:"player-label__info-labels"},et={class:"player-label__username-label"},tt={key:0,class:"player-label__is-you-label"};Object(n["q"])();var at=$e((function(e,t,r,c,o,i){return Object(n["p"])(),Object(n["d"])("div",Ve,[Qe,Object(n["g"])("div",We,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.players,(function(t){return Object(n["E"])((Object(n["p"])(),Object(n["d"])("div",{class:["change-popup__player-label",{"player-label__admin-player":t.is_admin}],key:t.local_id},[Object(n["g"])("img",{src:t.is_mister_x?a("4353"):a("5a8c")("./pawn_"+t.color+".png"),onClick:function(a){return e.$emit("changemisterx",t.local_id)}},null,8,["src","onClick"]),Object(n["g"])("div",Ze,[Object(n["g"])("strong",et,Object(n["z"])(t.username),1),t.local_id===r.currentPlayer.local_id?(Object(n["p"])(),Object(n["d"])("strong",tt,"You")):Object(n["e"])("",!0)])],2)),[[n["C"],!t.is_mister_x]])})),128))])])})),nt={name:"ChangeMisterXPopup",props:{players:{type:Array,required:!0},currentPlayer:{required:!0}}};a("f0f2");nt.render=at,nt.__scopeId="data-v-4af72e0f";var rt=nt,ct={name:"PregamePhase",components:{ChangeMisterXPopup:rt,ChangeColorPopup:De,PlayerLabel:Be},props:{players:{type:Array,required:!0},currentPlayer:{required:!0}},data:function(){return{showChangeColorPopup:!1,showChangeMisterXPopup:!1,hoverUrl:!1,hoverTag:!1,copiedUrl:!1,copiedTag:!1,pulseMisterXButton:!1}},methods:{onCopiedUrl:function(){var e=this;this.copiedUrl=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedUrl=!1}))},onCopiedTag:function(){var e=this;this.copiedTag=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedTag=!1}))},startGame:function(){var e=this;if(this.misterXUsername)this.$emit("startgame");else{this.pulseMisterXButton=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.pulseMisterXButton=!1}))}}},computed:{url:function(){return window.location},id:function(){return Object(i["c"])().params.gameId},adminUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_admin)return this.players[e].username;return null},misterXUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_mister_x)return this.players[e].username;return null}}};a("5a08");ct.render=qe,ct.__scopeId="data-v-2dd80bfd";var ot=ct,it=Object(n["G"])("data-v-2527c12a");Object(n["s"])("data-v-2527c12a");var st={class:"game-phase__main-panel"};Object(n["q"])();var lt=it((function(e,t,a,r,c,o){var i=Object(n["w"])("MapManager"),s=Object(n["w"])("GameSideBarNormal"),l=Object(n["w"])("GameSideBarMisterX");return Object(n["p"])(),Object(n["d"])("div",st,[Object(n["g"])(i,{class:"game-phase__map-manager"}),a.currentPlayer.is_mister_x?(Object(n["p"])(),Object(n["d"])(l,{key:1,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"])):(Object(n["p"])(),Object(n["d"])(s,{key:0,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"]))])})),ut=Object(n["G"])("data-v-42da2f0e"),pt=ut((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:"map-manager__main-panel",onWheel:t[1]||(t[1]=Object(n["F"])((function(){return o.zoom&&o.zoom.apply(o,arguments)}),["prevent"])),onMousedown:t[2]||(t[2]=Object(n["F"])((function(){return o.mouseDown&&o.mouseDown.apply(o,arguments)}),["prevent"])),onMousemove:t[3]||(t[3]=Object(n["F"])((function(){return o.mouseMove&&o.mouseMove.apply(o,arguments)}),["prevent"])),onMouseup:t[4]||(t[4]=Object(n["F"])((function(){return o.mouseUp&&o.mouseUp.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("img",{src:"/assets/map.jpeg",class:"map-manager__map",style:{width:o.imgPercentage+"%"}},null,4)],32)})),dt={name:"MapManager",data:function(){return{deltaY:0,dragging:!1}},methods:{verticalScroll:function(e,t){t.scrollTop+=e},horizontalScroll:function(e,t){t.scrollLeft+=e},keyPressed:function(e){var t=".map-manager__main-panel";switch(e.key.toString().toLowerCase()){case"w":this.verticalScroll(-U,document.querySelector(t));break;case"arrowup":this.verticalScroll(-U,document.querySelector(t));break;case"a":this.horizontalScroll(-U,document.querySelector(t));break;case"arrowleft":this.horizontalScroll(-U,document.querySelector(t));break;case"s":this.verticalScroll(U,document.querySelector(t));break;case"arrowdown":this.verticalScroll(U,document.querySelector(t));break;case"d":this.horizontalScroll(U,document.querySelector(t));break;case"arrowright":this.horizontalScroll(U,document.querySelector(t));break}},mouseDown:function(){this.dragging=!0},mouseMove:function(e){this.dragging&&(e.target.parentNode.style.cursor="move",e.target.parentNode.scrollLeft-=e.movementX,e.target.parentNode.scrollTop-=e.movementY)},mouseUp:function(e){this.dragging=!1,e.target.parentNode.style.cursor="auto"},zoom:function(e){var t=1;this.deltaY+e.deltaY<0?this.deltaY=0:(this.deltaY+=e.deltaY,t=Math.pow(L,e.deltaY/N));var a=document.querySelector(".map-manager__main-panel"),n=e.offsetX*(t-1)+a.scrollLeft*t,r=e.offsetY*(t-1)+a.scrollTop*t;a.scrollLeft=Math.round(n),a.scrollTop=Math.round(r)}},computed:{imgPercentage:function(){return 100*Math.pow(L,this.deltaY/N)}},mounted:function(){window.addEventListener("keydown",this.keyPressed)}};a("e59f");dt.render=pt,dt.__scopeId="data-v-42da2f0e";var bt=dt,mt=Object(n["G"])("data-v-11f1ca98");Object(n["s"])("data-v-11f1ca98");var gt={class:"game-sidebar-normal__main-panel"},Ot={class:"game-sidebar-normal__players"},jt={class:"game-sidebar-normal__transport-cards"},_t={class:"game-sidebar-normal__transport-wrapper"},ft={class:"game-sidebar-normal__transport-wrapper"},yt={class:"game-sidebar-normal__transport-wrapper"},vt={class:"game-sidebar-normal__misterx-table"};Object(n["q"])();var ht=mt((function(e,t,a,r,c,o){var i=Object(n["w"])("PlayerLabel"),s=Object(n["w"])("TransportCard"),l=Object(n["w"])("MisterXTable");return Object(n["p"])(),Object(n["d"])("div",gt,[Object(n["g"])("div",Ot,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.players,(function(e){return Object(n["p"])(),Object(n["d"])(i,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(n["g"])("div",jt,[Object(n["g"])("div",_t,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.remainingTaxis,(function(e){return Object(n["p"])(),Object(n["d"])(s,{key:e,src:"/assets/taxi_icon.png",color:"yellow"})})),128))]),Object(n["g"])("div",ft,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.remainingBuses,(function(e){return Object(n["p"])(),Object(n["d"])(s,{key:e,src:"/assets/bus_icon.png",color:"blue"})})),128))]),Object(n["g"])("div",yt,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.remainingUndergrounds,(function(e){return Object(n["p"])(),Object(n["d"])(s,{key:e,src:"/assets/underground_icon.svg",color:"red"})})),128))])]),Object(n["g"])("div",vt,[Object(n["g"])(l)])])})),wt=Object(n["G"])("data-v-622d1fb6");Object(n["s"])("data-v-622d1fb6");var Pt={class:"player-label__main-panel"},Ct={key:0,src:"/assets/misterx_icon.png"};Object(n["q"])();var kt=wt((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",Pt,[Object(n["g"])("div",{class:["player-label__player-information",{"player-label__playing-player":a.isPlaying}]},[Object(n["g"])("div",{class:"player-label__color-badge",style:{backgroundColor:o.playerColor}},null,4),Object(n["g"])("strong",null,Object(n["z"])(a.player.username),1),a.player.is_mister_x?(Object(n["p"])(),Object(n["d"])("img",Ct)):Object(n["e"])("",!0)],2)])})),Tt={name:"PlayerLabel",props:{player:{type:Object,required:!0},isPlaying:{type:Boolean,required:!0}},computed:{playerColor:function(){return R[this.player.color]}}};a("b5fc");Tt.render=kt,Tt.__scopeId="data-v-622d1fb6";var Gt=Tt,Mt=Object(n["G"])("data-v-343523c3"),St=Mt((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:"transport-card__main-panel",style:{backgroundColor:a.color}},[Object(n["g"])("img",{class:"transport-card__image",src:a.src},null,8,["src"])],4)})),Et={name:"TransportCard",props:{src:{type:String,required:!0},color:{type:String,required:!0}}};a("9be6");Et.render=St,Et.__scopeId="data-v-343523c3";var xt=Et,It=(a("2532"),Object(n["G"])("data-v-7d7830d9"));Object(n["s"])("data-v-7d7830d9");var qt=Object(n["g"])("div",{class:"mister-x-table__turn-transport"},null,-1);Object(n["q"])();var At=It((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:"mister-x-table__main-panel",style:{gridTemplateRows:"repeat("+c.gameConfig.number_of_total_turns/4+", 1fr)"}},[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.gameConfig.number_of_total_turns,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"mister-x-table__turn__wrapper",key:e},[Object(n["g"])("div",{class:["mister-x-table__turn-number",{"mister-x-table__revelation-turn-number":c.gameConfig.mister_x_is_visible_turns.includes(e)}]},Object(n["z"])(e),3),qt])})),128))],4)})),Xt={name:"MisterXTable",data:function(){return{gameConfig:B}}};a("9fc6");Xt.render=At,Xt.__scopeId="data-v-7d7830d9";var Lt=Xt,Nt={name:"GameSideBarNormal",components:{MisterXTable:Lt,TransportCard:xt,PlayerLabel:Gt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}},computed:{remainingTaxis:function(){return B.taxi-this.currentPlayer.used_taxi},remainingBuses:function(){return B.bus-this.currentPlayer.used_bus},remainingUndergrounds:function(){return B.underground-this.currentPlayer.used_underground}}};a("c86b");Nt.render=ht,Nt.__scopeId="data-v-11f1ca98";var Ut=Nt,Rt=Object(n["G"])("data-v-6aebdd9a");Object(n["s"])("data-v-6aebdd9a");var Bt={class:"game-sidebar-normal__main-panel"},Yt={class:"game-sidebar-normal__players"},zt={class:"game-sidebar-normal__transport-cards"},Ht={class:"game-sidebar-normal__transport-wrapper"},Jt={class:"game-sidebar-normal__transport-wrapper"},Kt={class:"game-sidebar-normal__misterx-table"};Object(n["q"])();var Ft=Rt((function(e,t,a,r,c,o){var i=Object(n["w"])("PlayerLabel"),s=Object(n["w"])("TransportCard"),l=Object(n["w"])("MisterXTable");return Object(n["p"])(),Object(n["d"])("div",Bt,[Object(n["g"])("div",Yt,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.game.players,(function(e){return Object(n["p"])(),Object(n["d"])(i,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(n["g"])("div",zt,[Object(n["g"])("div",Ht,[(Object(n["p"])(),Object(n["d"])(n["a"],null,Object(n["v"])(2,(function(e){return Object(n["g"])(s,{key:e,src:"/assets/2x_icon.png",color:"none"})})),64))]),Object(n["g"])("div",Jt,[(Object(n["p"])(),Object(n["d"])(n["a"],null,Object(n["v"])(5,(function(e){return Object(n["g"])(s,{key:e,src:"/assets/secret_transport_icon.png",color:"black"})})),64))])]),Object(n["g"])("div",Kt,[Object(n["g"])(l)])])})),Dt={name:"GameSideBarNormal",components:{MisterXTable:Lt,TransportCard:xt,PlayerLabel:Gt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("97a4");Dt.render=Ft,Dt.__scopeId="data-v-6aebdd9a";var $t=Dt,Vt={name:"GamePhase",components:{GameSideBarNormal:Ut,GameSideBarMisterX:$t,MapManager:bt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("008d");Vt.render=lt,Vt.__scopeId="data-v-2527c12a";var Qt=Vt,Wt=Object(n["G"])("data-v-20d2bdd2"),Zt=Wt((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",null," postgame ")})),ea={name:"PostGamePhase"};ea.render=Zt,ea.__scopeId="data-v-20d2bdd2";var ta=ea,aa={CONNECT_TO_GAME:"connect-to-game",JOIN_GAME:"join-game",QUIT_GAME:"quit-game",KICK_PLAYER:"kick-from-game",LOBBY_MODIFIED:"lobby-modified",CHANGE_COLOR:"change-color",CHANGE_MISTER_X:"change-mister-x",START_GAME:"start-game",MOVE:"move",MOVE_MISTER_X:"move-mister-x",END_GAME:"end-game"},na=a("8055"),ra=a.n(na),ca=a("a1e9"),oa={name:"Game",components:{PostGamePhase:ta,GamePhase:Qt,PregamePhase:ot},setup:function(){var e=ra()(Y,{path:"/unseen/socket.io/"}),t=Object(i["c"])().params.gameId,a=Object(ca["j"])(void 0),n=Object(ca["j"])(void 0),r=Object(ca["j"])([]),c=Object(ca["j"])({});function o(e){a.value=e.status,null!=e.your_local_id?e.players.forEach((function(t){t.local_id===e.your_local_id&&(n.value=t)})):n.value=null,r.value=e.players,c.value={playingPlayer:e.players_turn,isRevelation:e.is_revelation_turn,lastMisterXKnownPosition:e.last_known_position,misterXMoves:e.mister_x_moves}}function s(){e.emit(aa.JOIN_GAME)}function l(){e.emit(aa.QUIT_GAME)}function u(t){e.emit(aa.KICK_PLAYER,t)}function p(t){e.emit(aa.CHANGE_COLOR,t)}function d(){e.emit(aa.START_GAME)}function b(t){e.emit(aa.CHANGE_MISTER_X,t)}return e.emit(aa.CONNECT_TO_GAME,{game_id:t}),e.on(aa.CONNECT_TO_GAME,(function(e){o(e)})),e.on(aa.LOBBY_MODIFIED,(function(e){o(e)})),e.on(aa.START_GAME,(function(e){o(e)})),{status:a,currentPlayer:n,players:r,game:c,joinGame:s,quitGame:l,kickPlayer:u,changeColor:p,changeMisterX:b,startGame:d}}};a("c525");oa.render=Oe,oa.__scopeId="data-v-636d30db";var ia=oa,sa=[{path:"/unseen",name:"Home",component:be},{path:"/unseen/:gameId",name:"Game",component:ia}],la=Object(i["a"])({history:Object(i["b"])(),base:"unseen",routes:sa});la.beforeEach((function(e,t,a){"Game"===e.name?D.a.get(z).then((function(e){e.data?a():D.a.get(K).then((function(){a()}))})):a()}));var ua=la,pa=(a("a9e3"),a("5502")),da=Object(pa["a"])({state:{status:{type:Number},currentPlayer:{type:Object},players:{type:Array},playingPlayer:{type:String},isRevelation:{type:Boolean},lastMisterXKnownPosition:{type:Number},misterXMoves:{type:Array}},mutations:{SET_STATUS:function(e,t){e.status=t},SET_CURRENT_PLAYER:function(e,t){e.currentPlayer=t},SET_PLAYERS:function(e,t){e.players=t},SET_PLAYING_PLAYER:function(e,t){e.playingPlayer=t},SET_IS_REVELATION:function(e,t){e.isRevelation=t},SET_LAST_MISTER_X_KNOWN_POSITION:function(e,t){e.lastMisterXKnownPosition=t},SET_MISTER_X_MOVES:function(e,t){e.misterXMoves=t}},actions:{setStatus:function(e,t){var a=e.commit;a("SET_STATUS",t)},setCurrentPlayer:function(e,t){var a=e.commit;a("SET_CURRENT_PLAYER",t)},setPlayers:function(e,t){var a=e.commit;a("SET_PLAYERS",t)},setPlayingPlayer:function(e,t){var a=e.commit;a("SET_PLAYING_PLAYER",t)},setIsRevelation:function(e,t){var a=e.commit;a("SET_IS_REVELATION",t)},setLastMisterXKnownPosition:function(e,t){var a=e.commit;a("SET_LAST_MISTER_X_KNOWN_POSITION",t)},setMisterXMoves:function(e,t){var a=e.commit;a("SET_MISTER_X_MOVES",t)}},modules:{}}),ba=a("c479"),ma=a.n(ba),ga=Object(n["c"])(o);ga.use(ua),ga.use(da),ga.use(ma.a),ga.mount("#app")},"5a08":function(e,t,a){"use strict";a("def4")},"5a8c":function(e,t,a){var n={"./pawn_0.png":"2f79","./pawn_1.png":"624c","./pawn_2.png":"436e","./pawn_3.png":"05ac","./pawn_4.png":"044a","./pawn_mister_x.png":"4353"};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="5a8c"},"624c":function(e,t,a){e.exports=a.p+"img/pawn_1.a4e8246a.png"},"65ed":function(e,t,a){"use strict";a("b656")},"72d8":function(e,t,a){"use strict";a("a7bb")},"881d":function(e,t,a){},"90ad":function(e,t,a){},"97a4":function(e,t,a){"use strict";a("9815")},9815:function(e,t,a){},"9aa1":function(e,t,a){"use strict";a("90ad")},"9be6":function(e,t,a){"use strict";a("b99c")},"9fc6":function(e,t,a){"use strict";a("e25a")},a405:function(e,t,a){e.exports=a.p+"img/hamburger_icon.dfd455a4.png"},a7bb:function(e,t,a){},af7d:function(e,t,a){"use strict";a("45e7")},b575:function(e,t,a){},b5fc:function(e,t,a){"use strict";a("f8bf")},b656:function(e,t,a){},b99c:function(e,t,a){},c2b7:function(e,t,a){},c525:function(e,t,a){"use strict";a("d2a3")},c7ff:function(e,t,a){"use strict";a("e448")},c86b:function(e,t,a){"use strict";a("05c8")},cad6:function(e,t,a){"use strict";a("0ea0")},cd9b:function(e,t,a){},d2a3:function(e,t,a){},de3f:function(e,t,a){"use strict";a("2079")},def4:function(e,t,a){},e25a:function(e,t,a){},e383:function(e,t,a){"use strict";a("cd9b")},e448:function(e,t,a){},e59f:function(e,t,a){"use strict";a("eb72")},eb72:function(e,t,a){},f0f2:function(e,t,a){"use strict";a("881d")},f8bf:function(e,t,a){}});
//# sourceMappingURL=app.606416b1.js.map