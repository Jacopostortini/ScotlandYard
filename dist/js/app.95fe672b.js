(function(e){function t(t){for(var r,o,s=t[0],i=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},c=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"008d":function(e,t,a){"use strict";a("c2b7")},"05c8":function(e,t,a){},"05e9":function(e,t,a){},"0cfc":function(e,t,a){"use strict";a("1e6e")},"0f4e":function(e,t,a){},1:function(e,t){},1297:function(e,t,a){"use strict";a("05e9")},1408:function(e,t,a){},"142e":function(e,t,a){"use strict";a("4ab8")},"1e46":function(e,t,a){},"1e6e":function(e,t,a){},3141:function(e,t,a){"use strict";a("5357")},"371b":function(e,t,a){},4889:function(e,t,a){"use strict";a("1408")},"4ab8":function(e,t,a){},5357:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t){var a=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(a)}a("3141");const c={};c.render=n;var o=c,s=a("6c02"),i=Object(r["F"])("data-v-a5d8d606");Object(r["s"])("data-v-a5d8d606");var l={class:"main-panel"};Object(r["q"])();var u=i((function(e,t,a,n,c,o){var s=Object(r["w"])("Header"),i=Object(r["w"])("MyGames"),u=Object(r["w"])("ManageNewGame");return Object(r["p"])(),Object(r["d"])("div",l,[Object(r["g"])(s),Object(r["g"])(i),Object(r["g"])(u)])})),p=Object(r["F"])("data-v-ec2c2742");Object(r["s"])("data-v-ec2c2742");var d={class:"header__main-panel"},b=Object(r["g"])("h1",null,"Unseen",-1);Object(r["q"])();var m=p((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",d,[b,c.googleLogged?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(){return o.login&&o.login.apply(o,arguments)})},"Login"))])})),g={name:"Header",data:function(){return{googleLogged:!1}},methods:{login:function(){window.location.href="http://papero.tk/auth/google"}}};a("142e");g.render=m,g.__scopeId="data-v-ec2c2742";var O=g,j=Object(r["F"])("data-v-4fcd504e");Object(r["s"])("data-v-4fcd504e");var _={class:"my-games__main-panel"},y=Object(r["g"])("span",null,"Active games",-1);Object(r["q"])();var f=j((function(e,t,a,n,c,o){var s=Object(r["w"])("Game");return Object(r["p"])(),Object(r["d"])("div",_,[y,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.myGames,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.gameId,game:e},null,8,["game"])})),128))])})),v=(a("b0c0"),Object(r["F"])("data-v-1772ca5c"));Object(r["s"])("data-v-1772ca5c");var h={class:"game__main-panel"};Object(r["q"])();var P=v((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",h,[Object(r["g"])("div",{class:"name-container",id:a.game.gameId+"container"},[Object(r["g"])("h1",{id:a.game.gameId+"name",class:{overflows:c.overflows}},Object(r["z"])(a.game.name),11,["id"])],8,["id"]),Object(r["g"])("span",null,Object(r["z"])(a.game.date),1)])})),w={name:"Game",props:{game:{type:Object,required:!0}},data:function(){return{overflows:!1}},mounted:function(){var e=document.getElementById(this.game.gameId+"name"),t=document.getElementById(this.game.gameId+"container");e&&(this.overflows=t.clientWidth<e.scrollWidth)}};a("0cfc");w.render=P,w.__scopeId="data-v-1772ca5c";var k=w,C=1.1,M=100,T=5,S=5,E={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},I="http://api.unseen.papero.tk",G=[{gameId:0,date:"01/02/2003",name:"Questa è una partita con un nome lunghissimo"},{gameId:1,date:"01/02/2003",name:"gallogallo"},{gameId:2,date:"01/02/2003",name:"gallogallo"},{gameId:3,date:"01/02/2003",name:"gallogallo"},{gameId:4,date:"01/02/2003",name:"gallogallo"}],q={name:"MyGames",components:{Game:k},data:function(){return{myGames:G}}};a("4889");q.render=f,q.__scopeId="data-v-4fcd504e";var A=q,x=Object(r["F"])("data-v-7dc45b49");Object(r["s"])("data-v-7dc45b49");var X={class:"manage-new-game__main-class"},N={key:2,class:"game-info__wrapper"},L=Object(r["g"])("div",{class:"back-arrow"},null,-1),R=Object(r["g"])("input",{placeholder:"Insert game name"},null,-1),U=Object(r["g"])("button",null,"Join",-1),Y={key:3,class:"game-info__wrapper"},B=Object(r["g"])("div",{class:"back-arrow"},null,-1),F=Object(r["g"])("input",{placeholder:"Insert game name"},null,-1),z=Object(r["g"])("button",null,"Create",-1);Object(r["q"])();var K=x((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",X,[null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return c.choice="join"})},"Join game")):Object(r["e"])("",!0),null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.choice="create"})},"Create game")):Object(r["e"])("",!0),"join"===c.choice?(Object(r["p"])(),Object(r["d"])("div",N,[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[3]||(t[3]=function(e){return c.choice=null})},[L]),R,U])):Object(r["e"])("",!0),"create"===c.choice?(Object(r["p"])(),Object(r["d"])("div",Y,[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[4]||(t[4]=function(e){return c.choice=null})},[B]),F,z])):Object(r["e"])("",!0)])})),D={name:"ManageNewGame",data:function(){return{choice:null}}};a("d98c");D.render=K,D.__scopeId="data-v-7dc45b49";var H=D,J={name:"Home",components:{ManageNewGame:H,MyGames:A,Header:O}};a("90a0");J.render=u,J.__scopeId="data-v-a5d8d606";var $=J,Q=Object(r["F"])("data-v-57aad056");Object(r["s"])("data-v-57aad056");var V={class:"game__main-panel"};Object(r["q"])();var W=Q((function(e,t,a,n,c,o){var s=Object(r["w"])("PregamePhase"),i=Object(r["w"])("GamePhase"),l=Object(r["w"])("PostGamePhase");return Object(r["p"])(),Object(r["d"])("div",V,[0===n.status?(Object(r["p"])(),Object(r["d"])(s,{key:0,players:n.players,"current-player":n.currentPlayer,onJoingame:n.joinGame,onQuitgame:n.quitGame,onKickplayer:n.kickPlayer,onChangecolor:n.changeColor,onChangemisterx:n.changeMisterX,onStartgame:n.startGame},null,8,["players","current-player","onJoingame","onQuitgame","onKickplayer","onChangecolor","onChangemisterx","onStartgame"])):1===n.status?(Object(r["p"])(),Object(r["d"])(i,{key:1,players:n.players,"current-player":n.currentPlayer,game:n.game},null,8,["players","current-player","game"])):2===n.status?(Object(r["p"])(),Object(r["d"])(l,{key:2})):Object(r["e"])("",!0)])})),Z=(a("4160"),a("159b"),a("d3b7"),a("25f0"),Object(r["F"])("data-v-26c0b92a"));Object(r["s"])("data-v-26c0b92a");var ee={class:"pregame-phase__main-panel"},te=Object(r["g"])("header",{class:"pregame-phase__header"},"Unseen",-1),ae={class:"pregame-phase__players"},re=Object(r["g"])("div",{class:"pregame-phase__players-table"},null,-1),ne={class:"pregame-phase__buttons"},ce={class:"pregame-phase__information-panel"},oe=Object(r["g"])("label",{for:"pregame-phase__url"},"Copy the url and share it with your friends!",-1),se=Object(r["g"])("br",null,null,-1),ie={id:"pregame-phase__url",class:"pregame-phase__copy"},le=Object(r["f"])("Copy"),ue=Object(r["g"])("label",{for:"pregame-phase__tag"},"Or send them this tag!",-1),pe=Object(r["g"])("br",null,null,-1),de={id:"pregame-phase__tag",class:"pregame-phase__copy"},be=Object(r["f"])("Copy"),me={class:"pregame-phase__admin-and-mister-x"},ge=Object(r["f"])("The admin of this lobby is: ");Object(r["q"])();var Oe=Z((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("ChangeColorPopup"),l=Object(r["w"])("ChangeMisterXPopup"),u=Object(r["x"])("clipboard");return Object(r["p"])(),Object(r["d"])("div",ee,[te,Object(r["g"])("div",ae,[re,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(n){return Object(r["p"])(),Object(r["d"])(s,{key:n.local_id,player:n,"current-player":a.currentPlayer,onKickplayer:t[1]||(t[1]=function(t){return e.$emit("kickplayer",t)})},null,8,["player","current-player"])})),128))]),Object(r["g"])("div",ne,[a.currentPlayer&&!a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return c.showChangeColorPopup=!0})},"Change your pawn")):Object(r["e"])("",!0),a.currentPlayer?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:1,class:"pregame-phase__buttons__join-game",onClick:t[3]||(t[3]=function(t){return e.$emit("joingame")})},"Join game")),a.currentPlayer&&a.currentPlayer.is_admin?(Object(r["p"])(),Object(r["d"])("button",{key:2,onClick:t[4]||(t[4]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start game")):Object(r["e"])("",!0),!a.currentPlayer||!a.currentPlayer.is_admin||1===a.players.length&&a.currentPlayer.is_mister_x?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:3,class:{"pregame-phase__buttons__change-mister-x":!o.misterXUsername,"pulse-mister-x":c.pulseMisterXButton},onClick:t[5]||(t[5]=function(e){return c.showChangeMisterXPopup=!0})},"Choose Mister X",2)),a.currentPlayer&&1!==a.players.length?(Object(r["p"])(),Object(r["d"])("button",{key:4,onClick:t[6]||(t[6]=function(t){return e.$emit("quitgame")})},"Quit game")):Object(r["e"])("",!0)]),Object(r["g"])("div",ce,[Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[8]||(t[8]=function(e){return c.hoverUrl=!0}),onMouseleave:t[9]||(t[9]=function(e){return c.hoverUrl=!1})},[oe,se,Object(r["g"])("p",ie,Object(r["z"])(o.url.toString()),1),Object(r["D"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverUrl},onClick:t[7]||(t[7]=function(){return o.onCopiedUrl&&o.onCopiedUrl.apply(o,arguments)})},[le,Object(r["g"])("span",{class:{copied:c.copiedUrl}},"Copied",2)],2),[[u,o.url,"copy"]])],32),Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[11]||(t[11]=function(e){return c.hoverTag=!0}),onMouseleave:t[12]||(t[12]=function(e){return c.hoverTag=!1})},[ue,pe,Object(r["g"])("p",de,Object(r["z"])(o.id),1),Object(r["D"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverTag},onClick:t[10]||(t[10]=function(){return o.onCopiedTag&&o.onCopiedTag.apply(o,arguments)})},[be,Object(r["g"])("span",{class:{copied:c.copiedTag}},"Copied",2)],2),[[u,o.id,"copy"]])],32),Object(r["g"])("div",me,[Object(r["g"])("p",null,[ge,Object(r["g"])("strong",null,Object(r["z"])(o.adminUsername),1)])])]),c.showChangeColorPopup?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"pregame-phase__popup",onClick:t[14]||(t[14]=function(e){return c.showChangeColorPopup=!1})},[Object(r["g"])(i,{players:a.players,onChangecolor:t[13]||(t[13]=function(t){return e.$emit("changecolor",t)})},null,8,["players"])])):Object(r["e"])("",!0),c.showChangeMisterXPopup?(Object(r["p"])(),Object(r["d"])("div",{key:1,class:"pregame-phase__popup",onClick:t[16]||(t[16]=function(e){return c.showChangeMisterXPopup=!1})},[Object(r["g"])(l,{players:a.players,"current-player":a.currentPlayer,onChangemisterx:t[15]||(t[15]=function(t){return e.$emit("changemisterx",t)})},null,8,["players","current-player"])])):Object(r["e"])("",!0)])})),je=Object(r["F"])("data-v-eef82e6e");Object(r["s"])("data-v-eef82e6e");var _e={class:"player-label__info-labels"},ye={class:"player-label__username-label"},fe={key:0,class:"player-label__is-you-label"};Object(r["q"])();var ve=je((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:["player-label__main-panel",{"player-label__admin-player":a.player.is_admin}]},[Object(r["g"])("img",{src:a.player.is_mister_x?"/assets/pawn_mister_x.png":"/assets/pawn_"+a.player.color+".png",class:{"kicked-player":c.fadeOut,"hover-animation":c.hoverPlayerAnimation},onClick:t[1]||(t[1]=function(){return o.kickPlayer&&o.kickPlayer.apply(o,arguments)})},null,10,["src"]),Object(r["g"])("div",_e,[Object(r["g"])("strong",ye,Object(r["z"])(a.player.username),1),o.isYou?(Object(r["p"])(),Object(r["d"])("strong",fe,"You")):Object(r["e"])("",!0)])],2)})),he={name:"PlayerLabel",props:{player:{type:Object,required:!0},currentPlayer:{required:!0}},data:function(){return{fadeOut:!1,hoverPlayerAnimation:!0}},methods:{kickPlayer:function(){var e=this;if(!this.isYou&&this.currentPlayer.is_admin){this.fadeOut=!0,this.hoverPlayerAnimation=!1;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(2).then((function(){e.$emit("kickplayer",e.player.local_id)}))}}},computed:{isYou:function(){return!!this.currentPlayer&&this.currentPlayer.local_id===this.player.local_id}}};a("852c");he.render=ve,he.__scopeId="data-v-eef82e6e";var Pe=he,we=Object(r["F"])("data-v-16e594e6");Object(r["s"])("data-v-16e594e6");var ke={class:"change-popup__main-panel"},Ce=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),Me={class:"change-popup__available-pawns"};Object(r["q"])();var Te=we((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",ke,[Ce,Object(r["g"])("div",Me,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.colorsAvailable,(function(t){return Object(r["p"])(),Object(r["d"])("img",{src:"/assets/pawn_"+t+".png",key:t,onClick:function(a){return e.$emit("changecolor",t)}},null,8,["src","onClick"])})),128))])])})),Se=(a("caad"),{name:"ChangeColorPopup",props:{players:{type:Array,required:!0}},computed:{colorsAvailable:function(){for(var e=[],t=0;t<this.players.length;t++)e.push(this.players[t].color);for(var a=[],r=0;r<S;r++)e.includes(r)||a.push(r);return a}}});a("9c04");Se.render=Te,Se.__scopeId="data-v-16e594e6";var Ee=Se,Ie=Object(r["F"])("data-v-be35ed7e");Object(r["s"])("data-v-be35ed7e");var Ge={class:"change-popup__main-panel"},qe=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),Ae={class:"change-popup__available-pawns"},xe={class:"player-label__info-labels"},Xe={class:"player-label__username-label"},Ne={key:0,class:"player-label__is-you-label"};Object(r["q"])();var Le=Ie((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",Ge,[qe,Object(r["g"])("div",Ae,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(t){return Object(r["D"])((Object(r["p"])(),Object(r["d"])("div",{class:["change-popup__player-label",{"player-label__admin-player":t.is_admin}],key:t.local_id},[Object(r["g"])("img",{src:t.is_mister_x?"/assets/pawn_mister_x.png":"/assets/pawn_"+t.color+".png",onClick:function(a){return e.$emit("changemisterx",t.local_id)}},null,8,["src","onClick"]),Object(r["g"])("div",xe,[Object(r["g"])("strong",Xe,Object(r["z"])(t.username),1),t.local_id===a.currentPlayer.local_id?(Object(r["p"])(),Object(r["d"])("strong",Ne,"You")):Object(r["e"])("",!0)])],2)),[[r["B"],!t.is_mister_x]])})),128))])])})),Re={name:"ChangeMisterXPopup",props:{players:{type:Array,required:!0},currentPlayer:{required:!0}}};a("f6bf");Re.render=Le,Re.__scopeId="data-v-be35ed7e";var Ue=Re,Ye={name:"PregamePhase",components:{ChangeMisterXPopup:Ue,ChangeColorPopup:Ee,PlayerLabel:Pe},props:{players:{type:Array,required:!0},currentPlayer:{required:!0}},data:function(){return{showChangeColorPopup:!1,showChangeMisterXPopup:!1,hoverUrl:!1,hoverTag:!1,copiedUrl:!1,copiedTag:!1,pulseMisterXButton:!1}},methods:{onCopiedUrl:function(){var e=this;this.copiedUrl=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedUrl=!1}))},onCopiedTag:function(){var e=this;this.copiedTag=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedTag=!1}))},startGame:function(){var e=this;if(this.misterXUsername)this.$emit("startgame");else{this.pulseMisterXButton=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.pulseMisterXButton=!1}))}}},computed:{url:function(){return window.location},id:function(){return Object(s["c"])().params.gameId},adminUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_admin)return this.players[e].username;return null},misterXUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_mister_x)return this.players[e].username;return null}}};a("6ef6");Ye.render=Oe,Ye.__scopeId="data-v-26c0b92a";var Be=Ye,Fe=Object(r["F"])("data-v-2527c12a");Object(r["s"])("data-v-2527c12a");var ze={class:"game-phase__main-panel"};Object(r["q"])();var Ke=Fe((function(e,t,a,n,c,o){var s=Object(r["w"])("MapManager"),i=Object(r["w"])("GameSideBarNormal"),l=Object(r["w"])("GameSideBarMisterX");return Object(r["p"])(),Object(r["d"])("div",ze,[Object(r["g"])(s,{class:"game-phase__map-manager"}),a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])(l,{key:1,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"])):(Object(r["p"])(),Object(r["d"])(i,{key:0,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"]))])})),De=Object(r["F"])("data-v-42da2f0e"),He=De((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"map-manager__main-panel",onWheel:t[1]||(t[1]=Object(r["E"])((function(){return o.zoom&&o.zoom.apply(o,arguments)}),["prevent"])),onMousedown:t[2]||(t[2]=Object(r["E"])((function(){return o.mouseDown&&o.mouseDown.apply(o,arguments)}),["prevent"])),onMousemove:t[3]||(t[3]=Object(r["E"])((function(){return o.mouseMove&&o.mouseMove.apply(o,arguments)}),["prevent"])),onMouseup:t[4]||(t[4]=Object(r["E"])((function(){return o.mouseUp&&o.mouseUp.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("img",{src:"/assets/map.jpeg",class:"map-manager__map",style:{width:o.imgPercentage+"%"}},null,4)],32)})),Je={name:"MapManager",data:function(){return{deltaY:0,dragging:!1}},methods:{verticalScroll:function(e,t){t.scrollTop+=e},horizontalScroll:function(e,t){t.scrollLeft+=e},keyPressed:function(e){var t=".map-manager__main-panel";switch(e.key.toString().toLowerCase()){case"w":this.verticalScroll(-T,document.querySelector(t));break;case"arrowup":this.verticalScroll(-T,document.querySelector(t));break;case"a":this.horizontalScroll(-T,document.querySelector(t));break;case"arrowleft":this.horizontalScroll(-T,document.querySelector(t));break;case"s":this.verticalScroll(T,document.querySelector(t));break;case"arrowdown":this.verticalScroll(T,document.querySelector(t));break;case"d":this.horizontalScroll(T,document.querySelector(t));break;case"arrowright":this.horizontalScroll(T,document.querySelector(t));break}},mouseDown:function(){this.dragging=!0},mouseMove:function(e){this.dragging&&(e.target.parentNode.style.cursor="move",e.target.parentNode.scrollLeft-=e.movementX,e.target.parentNode.scrollTop-=e.movementY)},mouseUp:function(e){this.dragging=!1,e.target.parentNode.style.cursor="auto"},zoom:function(e){var t=1;this.deltaY+e.deltaY<0?this.deltaY=0:(this.deltaY+=e.deltaY,t=Math.pow(C,e.deltaY/M));var a=document.querySelector(".map-manager__main-panel"),r=e.offsetX*(t-1)+a.scrollLeft*t,n=e.offsetY*(t-1)+a.scrollTop*t;a.scrollLeft=Math.round(r),a.scrollTop=Math.round(n)}},computed:{imgPercentage:function(){return 100*Math.pow(C,this.deltaY/M)}},mounted:function(){window.addEventListener("keydown",this.keyPressed)}};a("e59f");Je.render=He,Je.__scopeId="data-v-42da2f0e";var $e=Je,Qe=Object(r["F"])("data-v-11f1ca98");Object(r["s"])("data-v-11f1ca98");var Ve={class:"game-sidebar-normal__main-panel"},We={class:"game-sidebar-normal__players"},Ze={class:"game-sidebar-normal__transport-cards"},et={class:"game-sidebar-normal__transport-wrapper"},tt={class:"game-sidebar-normal__transport-wrapper"},at={class:"game-sidebar-normal__transport-wrapper"},rt={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var nt=Qe((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",Ve,[Object(r["g"])("div",We,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",Ze,[Object(r["g"])("div",et,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingTaxis,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/taxi_icon.png",color:"yellow"})})),128))]),Object(r["g"])("div",tt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingBuses,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/bus_icon.png",color:"blue"})})),128))]),Object(r["g"])("div",at,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingUndergrounds,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/underground_icon.svg",color:"red"})})),128))])]),Object(r["g"])("div",rt,[Object(r["g"])(l)])])})),ct=Object(r["F"])("data-v-622d1fb6");Object(r["s"])("data-v-622d1fb6");var ot={class:"player-label__main-panel"},st={key:0,src:"/assets/misterx_icon.png"};Object(r["q"])();var it=ct((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",ot,[Object(r["g"])("div",{class:["player-label__player-information",{"player-label__playing-player":a.isPlaying}]},[Object(r["g"])("div",{class:"player-label__color-badge",style:{backgroundColor:o.playerColor}},null,4),Object(r["g"])("strong",null,Object(r["z"])(a.player.username),1),a.player.is_mister_x?(Object(r["p"])(),Object(r["d"])("img",st)):Object(r["e"])("",!0)],2)])})),lt={name:"PlayerLabel",props:{player:{type:Object,required:!0},isPlaying:{type:Boolean,required:!0}},computed:{playerColor:function(){return S[this.player.color]}}};a("b5fc");lt.render=it,lt.__scopeId="data-v-622d1fb6";var ut=lt,pt=Object(r["F"])("data-v-343523c3"),dt=pt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"transport-card__main-panel",style:{backgroundColor:a.color}},[Object(r["g"])("img",{class:"transport-card__image",src:a.src},null,8,["src"])],4)})),bt={name:"TransportCard",props:{src:{type:String,required:!0},color:{type:String,required:!0}}};a("9be6");bt.render=dt,bt.__scopeId="data-v-343523c3";var mt=bt,gt=(a("2532"),Object(r["F"])("data-v-7d7830d9"));Object(r["s"])("data-v-7d7830d9");var Ot=Object(r["g"])("div",{class:"mister-x-table__turn-transport"},null,-1);Object(r["q"])();var jt=gt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__main-panel",style:{gridTemplateRows:"repeat("+c.gameConfig.number_of_total_turns/4+", 1fr)"}},[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.gameConfig.number_of_total_turns,(function(e){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__turn__wrapper",key:e},[Object(r["g"])("div",{class:["mister-x-table__turn-number",{"mister-x-table__revelation-turn-number":c.gameConfig.mister_x_is_visible_turns.includes(e)}]},Object(r["z"])(e),3),Ot])})),128))],4)})),_t={name:"MisterXTable",data:function(){return{gameConfig:E}}};a("9fc6");_t.render=jt,_t.__scopeId="data-v-7d7830d9";var yt=_t,ft={name:"GameSideBarNormal",components:{MisterXTable:yt,TransportCard:mt,PlayerLabel:ut},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}},computed:{remainingTaxis:function(){return E.taxi-this.currentPlayer.used_taxi},remainingBuses:function(){return E.bus-this.currentPlayer.used_bus},remainingUndergrounds:function(){return E.underground-this.currentPlayer.used_underground}}};a("c86b");ft.render=nt,ft.__scopeId="data-v-11f1ca98";var vt=ft,ht=Object(r["F"])("data-v-6aebdd9a");Object(r["s"])("data-v-6aebdd9a");var Pt={class:"game-sidebar-normal__main-panel"},wt={class:"game-sidebar-normal__players"},kt={class:"game-sidebar-normal__transport-cards"},Ct={class:"game-sidebar-normal__transport-wrapper"},Mt={class:"game-sidebar-normal__transport-wrapper"},Tt={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var St=ht((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",Pt,[Object(r["g"])("div",wt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.game.players,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",kt,[Object(r["g"])("div",Ct,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(2,(function(e){return Object(r["g"])(i,{key:e,src:"/assets/2x_icon.png",color:"none"})})),64))]),Object(r["g"])("div",Mt,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(5,(function(e){return Object(r["g"])(i,{key:e,src:"/assets/secret_transport_icon.png",color:"black"})})),64))])]),Object(r["g"])("div",Tt,[Object(r["g"])(l)])])})),Et={name:"GameSideBarNormal",components:{MisterXTable:yt,TransportCard:mt,PlayerLabel:ut},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("97a4");Et.render=St,Et.__scopeId="data-v-6aebdd9a";var It=Et,Gt={name:"GamePhase",components:{GameSideBarNormal:vt,GameSideBarMisterX:It,MapManager:$e},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("008d");Gt.render=Ke,Gt.__scopeId="data-v-2527c12a";var qt=Gt,At=Object(r["F"])("data-v-20d2bdd2"),xt=At((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",null," postgame ")})),Xt={name:"PostGamePhase"};Xt.render=xt,Xt.__scopeId="data-v-20d2bdd2";var Nt=Xt,Lt={CONNECT_TO_GAME:"connect-to-game",JOIN_GAME:"join-game",QUIT_GAME:"quit-game",KICK_PLAYER:"kick-from-game",LOBBY_MODIFIED:"lobby-modified",CHANGE_COLOR:"change-color",CHANGE_MISTER_X:"change-mister-x",START_GAME:"start-game",MOVE:"move",MOVE_MISTER_X:"move-mister-x",END_GAME:"end-game"},Rt=a("8055"),Ut=a.n(Rt),Yt=a("a1e9"),Bt={name:"Game",components:{PostGamePhase:Nt,GamePhase:qt,PregamePhase:Be},setup:function(){var e=Ut()(I),t=Object(s["c"])().params.gameId,a=Object(Yt["j"])(void 0),r=Object(Yt["j"])(void 0),n=Object(Yt["j"])([]),c=Object(Yt["j"])({}),o=prompt("id:"),i=prompt("username:");function l(e){console.log(e),a.value=e.status,null!=e.your_local_id?e.players.forEach((function(t){t.local_id===e.your_local_id&&(r.value=t)})):r.value=null,n.value=e.players,c.value={playingPlayer:e.players_turn,isRevelation:e.is_revelation_turn,lastMisterXKnownPosition:e.last_known_position,misterXMoves:e.mister_x_moves}}function u(){e.emit(Lt.JOIN_GAME)}function p(){e.emit(Lt.QUIT_GAME)}function d(t){e.emit(Lt.KICK_PLAYER,t)}function b(t){e.emit(Lt.CHANGE_COLOR,t)}function m(){e.emit(Lt.START_GAME)}function g(t){e.emit(Lt.CHANGE_MISTER_X,t)}return e.emit(Lt.CONNECT_TO_GAME,{user_id:o,game_id:t,username:i}),e.on(Lt.CONNECT_TO_GAME,(function(e){l(e)})),e.on(Lt.LOBBY_MODIFIED,(function(e){l(e)})),e.on(Lt.START_GAME,(function(e){l(e)})),{status:a,currentPlayer:r,players:n,game:c,joinGame:u,quitGame:p,kickPlayer:d,changeColor:b,changeMisterX:g,startGame:m}}};a("1297");Bt.render=W,Bt.__scopeId="data-v-57aad056";var Ft=Bt,zt=[{path:"/unseen",name:"Home",component:$},{path:"/unseen/:gameId",name:"Game",component:Ft}],Kt=Object(s["a"])({history:Object(s["b"])(),routes:zt}),Dt=Kt,Ht=(a("a9e3"),a("5502")),Jt=Object(Ht["a"])({state:{status:{type:Number},currentPlayer:{type:Object},players:{type:Array},playingPlayer:{type:String},isRevelation:{type:Boolean},lastMisterXKnownPosition:{type:Number},misterXMoves:{type:Array}},mutations:{SET_STATUS:function(e,t){e.status=t},SET_CURRENT_PLAYER:function(e,t){e.currentPlayer=t},SET_PLAYERS:function(e,t){e.players=t},SET_PLAYING_PLAYER:function(e,t){e.playingPlayer=t},SET_IS_REVELATION:function(e,t){e.isRevelation=t},SET_LAST_MISTER_X_KNOWN_POSITION:function(e,t){e.lastMisterXKnownPosition=t},SET_MISTER_X_MOVES:function(e,t){e.misterXMoves=t}},actions:{setStatus:function(e,t){var a=e.commit;a("SET_STATUS",t)},setCurrentPlayer:function(e,t){var a=e.commit;a("SET_CURRENT_PLAYER",t)},setPlayers:function(e,t){var a=e.commit;a("SET_PLAYERS",t)},setPlayingPlayer:function(e,t){var a=e.commit;a("SET_PLAYING_PLAYER",t)},setIsRevelation:function(e,t){var a=e.commit;a("SET_IS_REVELATION",t)},setLastMisterXKnownPosition:function(e,t){var a=e.commit;a("SET_LAST_MISTER_X_KNOWN_POSITION",t)},setMisterXMoves:function(e,t){var a=e.commit;a("SET_MISTER_X_MOVES",t)}},modules:{}}),$t=a("c479"),Qt=a.n($t),Vt=Object(r["c"])(o);Vt.use(Dt),Vt.use(Jt),Vt.use(Qt.a),Vt.mount("#app")},"576e":function(e,t,a){},"6ef6":function(e,t,a){"use strict";a("1e46")},"852c":function(e,t,a){"use strict";a("9c42")},"90a0":function(e,t,a){"use strict";a("c709")},"97a4":function(e,t,a){"use strict";a("9815")},9815:function(e,t,a){},"9be6":function(e,t,a){"use strict";a("b99c")},"9c04":function(e,t,a){"use strict";a("576e")},"9c42":function(e,t,a){},"9fc6":function(e,t,a){"use strict";a("e25a")},b5fc:function(e,t,a){"use strict";a("f8bf")},b99c:function(e,t,a){},c2b7:function(e,t,a){},c709:function(e,t,a){},c86b:function(e,t,a){"use strict";a("05c8")},d98c:function(e,t,a){"use strict";a("371b")},e25a:function(e,t,a){},e59f:function(e,t,a){"use strict";a("eb72")},eb72:function(e,t,a){},f6bf:function(e,t,a){"use strict";a("0f4e")},f8bf:function(e,t,a){}});
//# sourceMappingURL=app.95fe672b.js.map