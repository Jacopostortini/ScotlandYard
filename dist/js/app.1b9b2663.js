(function(e){function t(t){for(var r,o,i=t[0],s=t[1],l=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},c=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/unseen/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0018":function(e,t,a){},"008d":function(e,t,a){"use strict";a("c2b7")},"044a":function(e,t,a){e.exports=a.p+"img/pawn_4.a281cce8.png"},"05ac":function(e,t,a){e.exports=a.p+"img/pawn_3.a337a850.png"},"05c8":function(e,t,a){},1:function(e,t){},"2a98":function(e,t,a){},"2f79":function(e,t,a){e.exports=a.p+"img/pawn_0.ceb5bf40.png"},4353:function(e,t,a){e.exports=a.p+"img/pawn_mister_x.ff74ef9a.png"},"436e":function(e,t,a){e.exports=a.p+"img/pawn_2.cd6bc56b.png"},"487e":function(e,t,a){"use strict";a("a0aa")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t){var a=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(a)}a("72d8");const c={};c.render=n;var o=c,i=a("6c02"),s=Object(r["G"])("data-v-affcb4da");Object(r["s"])("data-v-affcb4da");var l={class:"main-panel"};Object(r["q"])();var u=s((function(e,t,a,n,c,o){var i=Object(r["w"])("Header"),s=Object(r["w"])("MyGames"),u=Object(r["w"])("ManageNewGame");return Object(r["p"])(),Object(r["d"])("div",l,[Object(r["g"])(i,{logged:c.logged},null,8,["logged"]),Object(r["g"])(s,{games:c.games},null,8,["games"]),Object(r["g"])(u)])})),p=Object(r["G"])("data-v-38ce3ce7");Object(r["s"])("data-v-38ce3ce7");var d={class:"header__main-panel"},b=Object(r["g"])("h1",null,"Unseen",-1);Object(r["q"])();var m=p((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",d,[b,a.logged?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(){return o.login&&o.login.apply(o,arguments)})},"Login"))])})),g={name:"Header",props:{logged:{type:Boolean,required:!0}},methods:{login:function(){var e=window.location;window.location.href="/auth/google?from_location="+e}}};a("f363");g.render=m,g.__scopeId="data-v-38ce3ce7";var O=g,j=Object(r["G"])("data-v-2cf21ad3");Object(r["s"])("data-v-2cf21ad3");var _={class:"my-games__main-panel"},f={key:0};Object(r["q"])();var y=j((function(e,t,a,n,c,o){var i=Object(r["w"])("Game");return Object(r["p"])(),Object(r["d"])("div",_,[a.games&&a.games.length>0?(Object(r["p"])(),Object(r["d"])("span",f,"Active games")):Object(r["e"])("",!0),(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.games,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e.game_id,game:e},null,8,["game"])})),128))])})),v=Object(r["G"])("data-v-5c3477ca");Object(r["s"])("data-v-5c3477ca");var h={class:"game__main-panel"};Object(r["q"])();var P=v((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",h,[Object(r["g"])("div",{class:"name-container",id:a.game.game_id+"container"},[Object(r["g"])("h1",{id:a.game.game_id+"name",class:{overflows:c.overflows}},Object(r["z"])(a.game.game_id),11,["id"])],8,["id"]),Object(r["g"])("span",null,Object(r["z"])(a.game.date),1)])})),w={name:"Game",props:{game:{type:Object,required:!0}},data:function(){return{overflows:!1}},mounted:function(){var e=document.getElementById(this.game.game_id+"name"),t=document.getElementById(this.game.game_id+"container");e&&(this.overflows=t.clientWidth<e.scrollWidth)}};a("f19d");w.render=P,w.__scopeId="data-v-5c3477ca";var C=w,k={name:"MyGames",components:{Game:C},props:{games:{type:Array,required:!0}}};a("9f7c");k.render=y,k.__scopeId="data-v-2cf21ad3";var T=k,M=Object(r["G"])("data-v-89a9f632");Object(r["s"])("data-v-89a9f632");var S={class:"manage-new-game__main-class"},G={class:"game-info__wrapper"},E=Object(r["g"])("div",{class:"back-arrow"},null,-1),I=Object(r["g"])("button",null,"Join",-1),x={class:"game-info__wrapper"},q=Object(r["g"])("div",{class:"back-arrow"},null,-1),A=Object(r["g"])("button",null,"Create",-1);Object(r["q"])();var X=M((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",S,[null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return c.choice="join"})},"Join game")):Object(r["e"])("",!0),null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.choice="create"})},"Create game")):Object(r["e"])("",!0),Object(r["E"])(Object(r["g"])("div",G,[Object(r["g"])("form",{onSubmit:t[5]||(t[5]=Object(r["F"])((function(){return o.joinGame&&o.joinGame.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[3]||(t[3]=function(e){return c.choice=null})},[E]),Object(r["E"])(Object(r["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.gameToJoin=e})},null,512),[[r["B"],c.gameToJoin]]),I],32)],512),[[r["C"],"join"===c.choice]]),Object(r["E"])(Object(r["g"])("div",x,[Object(r["g"])("form",{onSubmit:t[8]||(t[8]=Object(r["F"])((function(){return o.createGame&&o.createGame.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[6]||(t[6]=function(e){return c.choice=null})},[q]),Object(r["E"])(Object(r["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.gameToCreate=e})},null,512),[[r["B"],c.gameToCreate]]),A],32)],512),[[r["C"],"create"===c.choice]])])})),N={name:"ManageNewGame",data:function(){return{router:Object(i["d"])(),choice:null,gameToJoin:null,gameToCreate:null}},methods:{joinGame:function(){this.router.push({name:"Game",params:{gameId:this.gameToJoin}})},createGame:function(){this.router.push({name:"Game",params:{gameId:this.gameToCreate}})}}};a("487e");N.render=X,N.__scopeId="data-v-89a9f632";var L=N,U=a("bc3a"),R=a.n(U),Y=1.1,B=100,z=5,J=5,K={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},D="https://papero.tk",F="https://papero.tk/user/get_info",H="https://papero.tk/server/unseen/games/all",$={name:"Home",components:{ManageNewGame:L,MyGames:T,Header:O},data:function(){return{logged:!0,games:null}},mounted:function(){var e=this;R.a.get(F).then((function(t){e.logged=!!t.data})),R.a.get(H).then((function(t){e.games=t.data}))}};a("eafb");$.render=u,$.__scopeId="data-v-affcb4da";var V=$,Q=Object(r["G"])("data-v-636d30db");Object(r["s"])("data-v-636d30db");var W={class:"game__main-panel"};Object(r["q"])();var Z=Q((function(e,t,a,n,c,o){var i=Object(r["w"])("PregamePhase"),s=Object(r["w"])("GamePhase"),l=Object(r["w"])("PostGamePhase");return Object(r["p"])(),Object(r["d"])("div",W,[0===n.status?(Object(r["p"])(),Object(r["d"])(i,{key:0,players:n.players,"current-player":n.currentPlayer,onJoingame:n.joinGame,onQuitgame:n.quitGame,onKickplayer:n.kickPlayer,onChangecolor:n.changeColor,onChangemisterx:n.changeMisterX,onStartgame:n.startGame},null,8,["players","current-player","onJoingame","onQuitgame","onKickplayer","onChangecolor","onChangemisterx","onStartgame"])):1===n.status?(Object(r["p"])(),Object(r["d"])(s,{key:1,players:n.players,"current-player":n.currentPlayer,game:n.game},null,8,["players","current-player","game"])):2===n.status?(Object(r["p"])(),Object(r["d"])(l,{key:2})):Object(r["e"])("",!0)])})),ee=(a("4160"),a("159b"),a("d3b7"),a("25f0"),Object(r["G"])("data-v-1c26d38c"));Object(r["s"])("data-v-1c26d38c");var te={class:"pregame-phase__main-panel"},ae=Object(r["g"])("header",{class:"pregame-phase__header"},"Unseen",-1),re={class:"pregame-phase__players"},ne=Object(r["g"])("div",{class:"pregame-phase__players-table"},null,-1),ce={class:"pregame-phase__buttons"},oe={class:"pregame-phase__information-panel"},ie=Object(r["g"])("label",{for:"pregame-phase__url"},"Copy the url and share it with your friends!",-1),se=Object(r["g"])("br",null,null,-1),le={id:"pregame-phase__url",class:"pregame-phase__copy"},ue=Object(r["f"])("Copy"),pe=Object(r["g"])("label",{for:"pregame-phase__tag"},"Or send them this tag!",-1),de=Object(r["g"])("br",null,null,-1),be={id:"pregame-phase__tag",class:"pregame-phase__copy"},me=Object(r["f"])("Copy"),ge={class:"pregame-phase__admin-and-mister-x"},Oe=Object(r["f"])("The admin of this lobby is: ");Object(r["q"])();var je=ee((function(e,t,a,n,c,o){var i=Object(r["w"])("PlayerLabel"),s=Object(r["w"])("ChangeColorPopup"),l=Object(r["w"])("ChangeMisterXPopup"),u=Object(r["x"])("clipboard");return Object(r["p"])(),Object(r["d"])("div",te,[ae,Object(r["g"])("div",re,[ne,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(n){return Object(r["p"])(),Object(r["d"])(i,{key:n.local_id,player:n,"current-player":a.currentPlayer,onKickplayer:t[1]||(t[1]=function(t){return e.$emit("kickplayer",t)})},null,8,["player","current-player"])})),128))]),Object(r["g"])("div",ce,[a.currentPlayer&&!a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return c.showChangeColorPopup=!0})},"Change your pawn")):Object(r["e"])("",!0),a.currentPlayer?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:1,class:"pregame-phase__buttons__join-game",onClick:t[3]||(t[3]=function(t){return e.$emit("joingame")})},"Join game")),a.currentPlayer&&a.currentPlayer.is_admin?(Object(r["p"])(),Object(r["d"])("button",{key:2,onClick:t[4]||(t[4]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start game")):Object(r["e"])("",!0),!a.currentPlayer||!a.currentPlayer.is_admin||1===a.players.length&&a.currentPlayer.is_mister_x?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:3,class:{"pregame-phase__buttons__change-mister-x":!o.misterXUsername,"pulse-mister-x":c.pulseMisterXButton},onClick:t[5]||(t[5]=function(e){return c.showChangeMisterXPopup=!0})},"Choose Mister X",2)),a.currentPlayer&&1!==a.players.length?(Object(r["p"])(),Object(r["d"])("button",{key:4,onClick:t[6]||(t[6]=function(t){return e.$emit("quitgame")})},"Quit game")):Object(r["e"])("",!0)]),Object(r["g"])("div",oe,[Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[8]||(t[8]=function(e){return c.hoverUrl=!0}),onMouseleave:t[9]||(t[9]=function(e){return c.hoverUrl=!1})},[ie,se,Object(r["g"])("p",le,Object(r["z"])(o.url.toString()),1),Object(r["E"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverUrl},onClick:t[7]||(t[7]=function(){return o.onCopiedUrl&&o.onCopiedUrl.apply(o,arguments)})},[ue,Object(r["g"])("span",{class:{copied:c.copiedUrl}},"Copied",2)],2),[[u,o.url,"copy"]])],32),Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[11]||(t[11]=function(e){return c.hoverTag=!0}),onMouseleave:t[12]||(t[12]=function(e){return c.hoverTag=!1})},[pe,de,Object(r["g"])("p",be,Object(r["z"])(o.id),1),Object(r["E"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverTag},onClick:t[10]||(t[10]=function(){return o.onCopiedTag&&o.onCopiedTag.apply(o,arguments)})},[me,Object(r["g"])("span",{class:{copied:c.copiedTag}},"Copied",2)],2),[[u,o.id,"copy"]])],32),Object(r["g"])("div",ge,[Object(r["g"])("p",null,[Oe,Object(r["g"])("strong",null,Object(r["z"])(o.adminUsername),1)])])]),c.showChangeColorPopup?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"pregame-phase__popup",onClick:t[14]||(t[14]=function(e){return c.showChangeColorPopup=!1})},[Object(r["g"])(s,{players:a.players,onChangecolor:t[13]||(t[13]=function(t){return e.$emit("changecolor",t)})},null,8,["players"])])):Object(r["e"])("",!0),c.showChangeMisterXPopup?(Object(r["p"])(),Object(r["d"])("div",{key:1,class:"pregame-phase__popup",onClick:t[16]||(t[16]=function(e){return c.showChangeMisterXPopup=!1})},[Object(r["g"])(l,{players:a.players,"current-player":a.currentPlayer,onChangemisterx:t[15]||(t[15]=function(t){return e.$emit("changemisterx",t)})},null,8,["players","current-player"])])):Object(r["e"])("",!0)])})),_e=Object(r["G"])("data-v-04f04e17");Object(r["s"])("data-v-04f04e17");var fe={class:"player-label__info-labels"},ye={class:"player-label__username-label"},ve={key:0,class:"player-label__is-you-label"};Object(r["q"])();var he=_e((function(e,t,n,c,o,i){return Object(r["p"])(),Object(r["d"])("div",{class:["player-label__main-panel",{"player-label__admin-player":n.player.is_admin}]},[Object(r["g"])("img",{src:n.player.is_mister_x?a("4353"):a("5a8c")("./pawn_"+n.player.color+".png"),class:{"kicked-player":o.fadeOut,"hover-animation":o.hoverPlayerAnimation},onClick:t[1]||(t[1]=function(){return i.kickPlayer&&i.kickPlayer.apply(i,arguments)})},null,10,["src"]),Object(r["g"])("div",fe,[Object(r["g"])("strong",ye,Object(r["z"])(n.player.username),1),i.isYou?(Object(r["p"])(),Object(r["d"])("strong",ve,"You")):Object(r["e"])("",!0)])],2)})),Pe={name:"PlayerLabel",props:{player:{type:Object,required:!0},currentPlayer:{required:!0}},data:function(){return{fadeOut:!1,hoverPlayerAnimation:!0}},methods:{kickPlayer:function(){var e=this;if(!this.isYou&&this.currentPlayer.is_admin){this.fadeOut=!0,this.hoverPlayerAnimation=!1;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(2).then((function(){e.$emit("kickplayer",e.player.local_id)}))}}},computed:{isYou:function(){return!!this.currentPlayer&&this.currentPlayer.local_id===this.player.local_id}}};a("9aa1");Pe.render=he,Pe.__scopeId="data-v-04f04e17";var we=Pe,Ce=Object(r["G"])("data-v-4eeb591d");Object(r["s"])("data-v-4eeb591d");var ke={class:"change-popup__main-panel"},Te=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),Me={class:"change-popup__available-pawns"};Object(r["q"])();var Se=Ce((function(e,t,n,c,o,i){return Object(r["p"])(),Object(r["d"])("div",ke,[Te,Object(r["g"])("div",Me,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(i.colorsAvailable,(function(t){return Object(r["p"])(),Object(r["d"])("img",{src:a("5a8c")("./pawn_"+t+".png"),key:t,onClick:function(a){return e.$emit("changecolor",t)}},null,8,["src","onClick"])})),128))])])})),Ge=(a("caad"),{name:"ChangeColorPopup",props:{players:{type:Array,required:!0}},computed:{colorsAvailable:function(){for(var e=[],t=0;t<this.players.length;t++)e.push(this.players[t].color);for(var a=[],r=0;r<J;r++)e.includes(r)||a.push(r);return a}}});a("65ed");Ge.render=Se,Ge.__scopeId="data-v-4eeb591d";var Ee=Ge,Ie=Object(r["G"])("data-v-4af72e0f");Object(r["s"])("data-v-4af72e0f");var xe={class:"change-popup__main-panel"},qe=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),Ae={class:"change-popup__available-pawns"},Xe={class:"player-label__info-labels"},Ne={class:"player-label__username-label"},Le={key:0,class:"player-label__is-you-label"};Object(r["q"])();var Ue=Ie((function(e,t,n,c,o,i){return Object(r["p"])(),Object(r["d"])("div",xe,[qe,Object(r["g"])("div",Ae,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.players,(function(t){return Object(r["E"])((Object(r["p"])(),Object(r["d"])("div",{class:["change-popup__player-label",{"player-label__admin-player":t.is_admin}],key:t.local_id},[Object(r["g"])("img",{src:t.is_mister_x?a("4353"):a("5a8c")("./pawn_"+t.color+".png"),onClick:function(a){return e.$emit("changemisterx",t.local_id)}},null,8,["src","onClick"]),Object(r["g"])("div",Xe,[Object(r["g"])("strong",Ne,Object(r["z"])(t.username),1),t.local_id===n.currentPlayer.local_id?(Object(r["p"])(),Object(r["d"])("strong",Le,"You")):Object(r["e"])("",!0)])],2)),[[r["C"],!t.is_mister_x]])})),128))])])})),Re={name:"ChangeMisterXPopup",props:{players:{type:Array,required:!0},currentPlayer:{required:!0}}};a("f0f2");Re.render=Ue,Re.__scopeId="data-v-4af72e0f";var Ye=Re,Be={name:"PregamePhase",components:{ChangeMisterXPopup:Ye,ChangeColorPopup:Ee,PlayerLabel:we},props:{players:{type:Array,required:!0},currentPlayer:{required:!0}},data:function(){return{showChangeColorPopup:!1,showChangeMisterXPopup:!1,hoverUrl:!1,hoverTag:!1,copiedUrl:!1,copiedTag:!1,pulseMisterXButton:!1}},methods:{onCopiedUrl:function(){var e=this;this.copiedUrl=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedUrl=!1}))},onCopiedTag:function(){var e=this;this.copiedTag=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedTag=!1}))},startGame:function(){var e=this;if(this.misterXUsername)this.$emit("startgame");else{this.pulseMisterXButton=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.pulseMisterXButton=!1}))}}},computed:{url:function(){return window.location},id:function(){return Object(i["c"])().params.gameId},adminUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_admin)return this.players[e].username;return null},misterXUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_mister_x)return this.players[e].username;return null}}};a("f48a");Be.render=je,Be.__scopeId="data-v-1c26d38c";var ze=Be,Je=Object(r["G"])("data-v-2527c12a");Object(r["s"])("data-v-2527c12a");var Ke={class:"game-phase__main-panel"};Object(r["q"])();var De=Je((function(e,t,a,n,c,o){var i=Object(r["w"])("MapManager"),s=Object(r["w"])("GameSideBarNormal"),l=Object(r["w"])("GameSideBarMisterX");return Object(r["p"])(),Object(r["d"])("div",Ke,[Object(r["g"])(i,{class:"game-phase__map-manager"}),a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])(l,{key:1,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"])):(Object(r["p"])(),Object(r["d"])(s,{key:0,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"]))])})),Fe=Object(r["G"])("data-v-42da2f0e"),He=Fe((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"map-manager__main-panel",onWheel:t[1]||(t[1]=Object(r["F"])((function(){return o.zoom&&o.zoom.apply(o,arguments)}),["prevent"])),onMousedown:t[2]||(t[2]=Object(r["F"])((function(){return o.mouseDown&&o.mouseDown.apply(o,arguments)}),["prevent"])),onMousemove:t[3]||(t[3]=Object(r["F"])((function(){return o.mouseMove&&o.mouseMove.apply(o,arguments)}),["prevent"])),onMouseup:t[4]||(t[4]=Object(r["F"])((function(){return o.mouseUp&&o.mouseUp.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("img",{src:"/assets/map.jpeg",class:"map-manager__map",style:{width:o.imgPercentage+"%"}},null,4)],32)})),$e={name:"MapManager",data:function(){return{deltaY:0,dragging:!1}},methods:{verticalScroll:function(e,t){t.scrollTop+=e},horizontalScroll:function(e,t){t.scrollLeft+=e},keyPressed:function(e){var t=".map-manager__main-panel";switch(e.key.toString().toLowerCase()){case"w":this.verticalScroll(-z,document.querySelector(t));break;case"arrowup":this.verticalScroll(-z,document.querySelector(t));break;case"a":this.horizontalScroll(-z,document.querySelector(t));break;case"arrowleft":this.horizontalScroll(-z,document.querySelector(t));break;case"s":this.verticalScroll(z,document.querySelector(t));break;case"arrowdown":this.verticalScroll(z,document.querySelector(t));break;case"d":this.horizontalScroll(z,document.querySelector(t));break;case"arrowright":this.horizontalScroll(z,document.querySelector(t));break}},mouseDown:function(){this.dragging=!0},mouseMove:function(e){this.dragging&&(e.target.parentNode.style.cursor="move",e.target.parentNode.scrollLeft-=e.movementX,e.target.parentNode.scrollTop-=e.movementY)},mouseUp:function(e){this.dragging=!1,e.target.parentNode.style.cursor="auto"},zoom:function(e){var t=1;this.deltaY+e.deltaY<0?this.deltaY=0:(this.deltaY+=e.deltaY,t=Math.pow(Y,e.deltaY/B));var a=document.querySelector(".map-manager__main-panel"),r=e.offsetX*(t-1)+a.scrollLeft*t,n=e.offsetY*(t-1)+a.scrollTop*t;a.scrollLeft=Math.round(r),a.scrollTop=Math.round(n)}},computed:{imgPercentage:function(){return 100*Math.pow(Y,this.deltaY/B)}},mounted:function(){window.addEventListener("keydown",this.keyPressed)}};a("e59f");$e.render=He,$e.__scopeId="data-v-42da2f0e";var Ve=$e,Qe=Object(r["G"])("data-v-11f1ca98");Object(r["s"])("data-v-11f1ca98");var We={class:"game-sidebar-normal__main-panel"},Ze={class:"game-sidebar-normal__players"},et={class:"game-sidebar-normal__transport-cards"},tt={class:"game-sidebar-normal__transport-wrapper"},at={class:"game-sidebar-normal__transport-wrapper"},rt={class:"game-sidebar-normal__transport-wrapper"},nt={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var ct=Qe((function(e,t,a,n,c,o){var i=Object(r["w"])("PlayerLabel"),s=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",We,[Object(r["g"])("div",Ze,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",et,[Object(r["g"])("div",tt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingTaxis,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e,src:"/assets/taxi_icon.png",color:"yellow"})})),128))]),Object(r["g"])("div",at,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingBuses,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e,src:"/assets/bus_icon.png",color:"blue"})})),128))]),Object(r["g"])("div",rt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingUndergrounds,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e,src:"/assets/underground_icon.svg",color:"red"})})),128))])]),Object(r["g"])("div",nt,[Object(r["g"])(l)])])})),ot=Object(r["G"])("data-v-622d1fb6");Object(r["s"])("data-v-622d1fb6");var it={class:"player-label__main-panel"},st={key:0,src:"/assets/misterx_icon.png"};Object(r["q"])();var lt=ot((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",it,[Object(r["g"])("div",{class:["player-label__player-information",{"player-label__playing-player":a.isPlaying}]},[Object(r["g"])("div",{class:"player-label__color-badge",style:{backgroundColor:o.playerColor}},null,4),Object(r["g"])("strong",null,Object(r["z"])(a.player.username),1),a.player.is_mister_x?(Object(r["p"])(),Object(r["d"])("img",st)):Object(r["e"])("",!0)],2)])})),ut={name:"PlayerLabel",props:{player:{type:Object,required:!0},isPlaying:{type:Boolean,required:!0}},computed:{playerColor:function(){return J[this.player.color]}}};a("b5fc");ut.render=lt,ut.__scopeId="data-v-622d1fb6";var pt=ut,dt=Object(r["G"])("data-v-343523c3"),bt=dt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"transport-card__main-panel",style:{backgroundColor:a.color}},[Object(r["g"])("img",{class:"transport-card__image",src:a.src},null,8,["src"])],4)})),mt={name:"TransportCard",props:{src:{type:String,required:!0},color:{type:String,required:!0}}};a("9be6");mt.render=bt,mt.__scopeId="data-v-343523c3";var gt=mt,Ot=(a("2532"),Object(r["G"])("data-v-7d7830d9"));Object(r["s"])("data-v-7d7830d9");var jt=Object(r["g"])("div",{class:"mister-x-table__turn-transport"},null,-1);Object(r["q"])();var _t=Ot((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__main-panel",style:{gridTemplateRows:"repeat("+c.gameConfig.number_of_total_turns/4+", 1fr)"}},[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.gameConfig.number_of_total_turns,(function(e){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__turn__wrapper",key:e},[Object(r["g"])("div",{class:["mister-x-table__turn-number",{"mister-x-table__revelation-turn-number":c.gameConfig.mister_x_is_visible_turns.includes(e)}]},Object(r["z"])(e),3),jt])})),128))],4)})),ft={name:"MisterXTable",data:function(){return{gameConfig:K}}};a("9fc6");ft.render=_t,ft.__scopeId="data-v-7d7830d9";var yt=ft,vt={name:"GameSideBarNormal",components:{MisterXTable:yt,TransportCard:gt,PlayerLabel:pt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}},computed:{remainingTaxis:function(){return K.taxi-this.currentPlayer.used_taxi},remainingBuses:function(){return K.bus-this.currentPlayer.used_bus},remainingUndergrounds:function(){return K.underground-this.currentPlayer.used_underground}}};a("c86b");vt.render=ct,vt.__scopeId="data-v-11f1ca98";var ht=vt,Pt=Object(r["G"])("data-v-6aebdd9a");Object(r["s"])("data-v-6aebdd9a");var wt={class:"game-sidebar-normal__main-panel"},Ct={class:"game-sidebar-normal__players"},kt={class:"game-sidebar-normal__transport-cards"},Tt={class:"game-sidebar-normal__transport-wrapper"},Mt={class:"game-sidebar-normal__transport-wrapper"},St={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var Gt=Pt((function(e,t,a,n,c,o){var i=Object(r["w"])("PlayerLabel"),s=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",wt,[Object(r["g"])("div",Ct,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.game.players,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",kt,[Object(r["g"])("div",Tt,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(2,(function(e){return Object(r["g"])(s,{key:e,src:"/assets/2x_icon.png",color:"none"})})),64))]),Object(r["g"])("div",Mt,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(5,(function(e){return Object(r["g"])(s,{key:e,src:"/assets/secret_transport_icon.png",color:"black"})})),64))])]),Object(r["g"])("div",St,[Object(r["g"])(l)])])})),Et={name:"GameSideBarNormal",components:{MisterXTable:yt,TransportCard:gt,PlayerLabel:pt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("97a4");Et.render=Gt,Et.__scopeId="data-v-6aebdd9a";var It=Et,xt={name:"GamePhase",components:{GameSideBarNormal:ht,GameSideBarMisterX:It,MapManager:Ve},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("008d");xt.render=De,xt.__scopeId="data-v-2527c12a";var qt=xt,At=Object(r["G"])("data-v-20d2bdd2"),Xt=At((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",null," postgame ")})),Nt={name:"PostGamePhase"};Nt.render=Xt,Nt.__scopeId="data-v-20d2bdd2";var Lt=Nt,Ut={CONNECT_TO_GAME:"connect-to-game",JOIN_GAME:"join-game",QUIT_GAME:"quit-game",KICK_PLAYER:"kick-from-game",LOBBY_MODIFIED:"lobby-modified",CHANGE_COLOR:"change-color",CHANGE_MISTER_X:"change-mister-x",START_GAME:"start-game",MOVE:"move",MOVE_MISTER_X:"move-mister-x",END_GAME:"end-game"},Rt=a("8055"),Yt=a.n(Rt),Bt=a("a1e9"),zt={name:"Game",components:{PostGamePhase:Lt,GamePhase:qt,PregamePhase:ze},setup:function(){var e=Yt()(D,{path:"/unseen/socket.io/"}),t=Object(i["c"])().params.gameId,a=Object(Bt["j"])(void 0),r=Object(Bt["j"])(void 0),n=Object(Bt["j"])([]),c=Object(Bt["j"])({});function o(e){a.value=e.status,null!=e.your_local_id?e.players.forEach((function(t){t.local_id===e.your_local_id&&(r.value=t)})):r.value=null,n.value=e.players,c.value={playingPlayer:e.players_turn,isRevelation:e.is_revelation_turn,lastMisterXKnownPosition:e.last_known_position,misterXMoves:e.mister_x_moves}}function s(){e.emit(Ut.JOIN_GAME)}function l(){e.emit(Ut.QUIT_GAME)}function u(t){e.emit(Ut.KICK_PLAYER,t)}function p(t){e.emit(Ut.CHANGE_COLOR,t)}function d(){e.emit(Ut.START_GAME)}function b(t){e.emit(Ut.CHANGE_MISTER_X,t)}return e.emit(Ut.CONNECT_TO_GAME,{game_id:t}),e.on(Ut.CONNECT_TO_GAME,(function(e){o(e)})),e.on(Ut.LOBBY_MODIFIED,(function(e){o(e)})),e.on(Ut.START_GAME,(function(e){o(e)})),{status:a,currentPlayer:r,players:n,game:c,joinGame:s,quitGame:l,kickPlayer:u,changeColor:p,changeMisterX:b,startGame:d}}};a("c525");zt.render=Z,zt.__scopeId="data-v-636d30db";var Jt=zt,Kt=[{path:"/unseen",name:"Home",component:V},{path:"/unseen/:gameId",name:"Game",component:Jt}],Dt=Object(i["a"])({history:Object(i["b"])(),base:"unseen",routes:Kt}),Ft=Dt,Ht=(a("a9e3"),a("5502")),$t=Object(Ht["a"])({state:{status:{type:Number},currentPlayer:{type:Object},players:{type:Array},playingPlayer:{type:String},isRevelation:{type:Boolean},lastMisterXKnownPosition:{type:Number},misterXMoves:{type:Array}},mutations:{SET_STATUS:function(e,t){e.status=t},SET_CURRENT_PLAYER:function(e,t){e.currentPlayer=t},SET_PLAYERS:function(e,t){e.players=t},SET_PLAYING_PLAYER:function(e,t){e.playingPlayer=t},SET_IS_REVELATION:function(e,t){e.isRevelation=t},SET_LAST_MISTER_X_KNOWN_POSITION:function(e,t){e.lastMisterXKnownPosition=t},SET_MISTER_X_MOVES:function(e,t){e.misterXMoves=t}},actions:{setStatus:function(e,t){var a=e.commit;a("SET_STATUS",t)},setCurrentPlayer:function(e,t){var a=e.commit;a("SET_CURRENT_PLAYER",t)},setPlayers:function(e,t){var a=e.commit;a("SET_PLAYERS",t)},setPlayingPlayer:function(e,t){var a=e.commit;a("SET_PLAYING_PLAYER",t)},setIsRevelation:function(e,t){var a=e.commit;a("SET_IS_REVELATION",t)},setLastMisterXKnownPosition:function(e,t){var a=e.commit;a("SET_LAST_MISTER_X_KNOWN_POSITION",t)},setMisterXMoves:function(e,t){var a=e.commit;a("SET_MISTER_X_MOVES",t)}},modules:{}}),Vt=a("c479"),Qt=a.n(Vt),Wt=Object(r["c"])(o);Wt.use(Ft),Wt.use($t),Wt.use(Qt.a),Wt.mount("#app")},"5a8c":function(e,t,a){var r={"./pawn_0.png":"2f79","./pawn_1.png":"624c","./pawn_2.png":"436e","./pawn_3.png":"05ac","./pawn_4.png":"044a","./pawn_mister_x.png":"4353"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id="5a8c"},6038:function(e,t,a){},"624c":function(e,t,a){e.exports=a.p+"img/pawn_1.a4e8246a.png"},"65ed":function(e,t,a){"use strict";a("b656")},"72d8":function(e,t,a){"use strict";a("a7bb")},"79e9":function(e,t,a){},"881d":function(e,t,a){},"90ad":function(e,t,a){},"97a4":function(e,t,a){"use strict";a("9815")},9815:function(e,t,a){},"9aa1":function(e,t,a){"use strict";a("90ad")},"9be6":function(e,t,a){"use strict";a("b99c")},"9f7c":function(e,t,a){"use strict";a("0018")},"9fc6":function(e,t,a){"use strict";a("e25a")},a0aa:function(e,t,a){},a7bb:function(e,t,a){},b5fc:function(e,t,a){"use strict";a("f8bf")},b656:function(e,t,a){},b99c:function(e,t,a){},c2b7:function(e,t,a){},c525:function(e,t,a){"use strict";a("d2a3")},c86b:function(e,t,a){"use strict";a("05c8")},d2a3:function(e,t,a){},e25a:function(e,t,a){},e59f:function(e,t,a){"use strict";a("eb72")},eafb:function(e,t,a){"use strict";a("6038")},eb72:function(e,t,a){},f0f2:function(e,t,a){"use strict";a("881d")},f19d:function(e,t,a){"use strict";a("2a98")},f363:function(e,t,a){"use strict";a("ffcc")},f48a:function(e,t,a){"use strict";a("79e9")},f8bf:function(e,t,a){},ffcc:function(e,t,a){}});
//# sourceMappingURL=app.1b9b2663.js.map