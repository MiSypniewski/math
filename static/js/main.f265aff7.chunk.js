(this.webpackJsonpmath_v2=this.webpackJsonpmath_v2||[]).push([[0],{16:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12),i=t.n(o),c=t(7),u=t(3),l=t(1),f=t(24),d=t(2);function s(){var e=Object(d.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');\n\n  *, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    font-size: 62.5%;\n    /* background-color: #E6E6E6; */\n    background-color: #FAFAFA;\n    }\n\n  body {\n    font-size: 1.6rem;\n    font-family: \"Montserrat\", sans-serif;\n    /* color: #e8eaed; */\n  }\n"]);return s=function(){return e},e}var m=Object(l.b)(s()),g={lightBlue:"#62A8FF",blue:"#166EDC",lightFiolet:"#9689ED",fiolet:"#5B4DBE",yellow:"#FFD00D",green:"#68d391",red:"#DB342C",lightRed:"#E8382E",black:"#21283C",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem",xxl:"5.5rem"},size:{mobileS:"320px",mobileM:"375px",mobileL:"410px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"}};function b(){var e=Object(d.a)(["\n      width: 160px;\n\n      ::before {\n        width: 160px;\n      }\n    "]);return b=function(){return e},e}function p(){var e=Object(d.a)(["\n      font-size: ",";\n    "]);return p=function(){return e},e}function h(){var e=Object(d.a)(["\n      background-color: ",";\n      ::before {\n        background-color: ",";\n      }\n\n      :hover {\n        background-color: ",";\n        ::before {\n          background-color: ",";\n        }\n      }\n    "]);return h=function(){return e},e}function v(){var e=Object(d.a)(["\n  display: block;\n  position: relative;\n  height: 64px;\n  width: 128px;\n  padding: 8px 16px;\n  font-size: ",";\n  font-weight: ",";\n  cursor: pointer;\n  background-color: ",';\n  color: #ffffff;\n  border: none;\n  border-radius: 16px;\n  box-shadow: 0px 8px 12px -4px rgba(0, 0, 0, 0.5);\n  text-align: center;\n\n  :active {\n    top: 4px;\n    left: 0;\n    ::before {\n      top: 0px;\n      left: 0px;\n    }\n  }\n\n  ::before {\n    display: block;\n    position: absolute;\n    content: "";\n    height: 64px;\n    width: 128px;\n    top: 4px;\n    left: 0px;\n    border-radius: 16px;\n    border: none;\n    z-index: -1;\n    background-color: ',";\n  }\n\n  :hover {\n    background-color: ",";\n\n    ::before {\n      background-color: ",";\n    }\n  }\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return v=function(){return e},e}var x=l.d.button(v(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.bold}),(function(e){return e.theme.blue}),(function(e){return e.theme.blue}),(function(e){return e.theme.lightBlue}),(function(e){return e.theme.lightBlue}),(function(e){return e.fiolet&&Object(l.c)(h(),(function(e){return e.theme.fiolet}),(function(e){return e.theme.fiolet}),(function(e){return e.theme.lightFiolet}),(function(e){return e.theme.lightFiolet}))}),(function(e){return e.largeText&&Object(l.c)(p(),(function(e){return e.theme.fontSize.m}))}),(function(e){return e.big&&Object(l.c)(b())})),w={main:"main",start:"start",settings:"settings",results:"results"},E={good:"Dobrze",bad:"\u0179le",overtime:"Czas min\u0105\u0142",fiolet:"fiolet"},j={wrong:"\u274c",good:"\u2714\ufe0f",time:"\ud83d\udd52",back:"\u2b05\ufe0f",hacker:"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb",teacher:"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfeb",settings:"\u2699\ufe0f",brain:"\ud83e\udde0",cup:"\ud83c\udfc6"};function O(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 64px;\n  width: 100%;\n  border-bottom: 1px solid #cccccc;\n  line-height: 64px;\n  box-shadow: 0px 8px 12px -4px rgba(0, 0, 0, 0.5);\n"]);return O=function(){return e},e}function y(){var e=Object(d.a)(["\n  height: 63px;\n  width: 64px;\n  text-align: center;\n  font-weight: ",";\n"]);return y=function(){return e},e}function k(){var e=Object(d.a)(["\n  height: 63px;\n  width: 64px;\n  text-align: center;\n  font-size: ",";\n"]);return k=function(){return e},e}var A=l.d.div(k(),(function(e){return e.theme.fontSize.xl})),S=l.d.div(y(),(function(e){return e.theme.bold})),T=l.d.div(O());var M=function(e){var n=e.title,t=void 0===n?"Matematyka":n,r=e.btnLeftFn,o=void 0===r?function(e){return console.log(e)}:r,i=e.btnLeftFnProperty,c=void 0===i?w.main:i,u=e.rightText,l=void 0===u?"":u;return a.a.createElement(T,null,a.a.createElement(A,{onClick:function(){return o(c)}},"Matematyka"===t?j.teacher:j.back),a.a.createElement("h3",null,t),l?a.a.createElement(S,null,l," / 10"):a.a.createElement(S,null))};function F(){var e=Object(d.a)(["\n  margin: 16px auto 0;\n"]);return F=function(){return e},e}function z(){var e=Object(d.a)(["\n  display: flex;\n  margin-top: 120px;\n\n  height: 100px;\n  width: 100%;\n  flex-direction: column;\n  /* flex-wrap: wrap; */\n  justify-content: space-between;\n  align-items: center;\n"]);return z=function(){return e},e}var L=l.d.div(z()),C=l.d.div(F());var R=function(e){var n=e.changePage;return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{text:"Matematyka"}),a.a.createElement(L,null,a.a.createElement(C,null,a.a.createElement(x,{big:!0,onClick:function(){return n(w.start,0)}},"Rozpocznij ",j.brain)),a.a.createElement(C,null,a.a.createElement(x,{big:!0,onClick:function(){return n(w.results,0)}},"Wyniki ",j.cup)),a.a.createElement(C,null,a.a.createElement(x,{big:!0,onClick:function(){return n(w.settings,0)}},"Ustawienia ",j.settings))))};function P(){var e=Object(d.a)(["\n  margin: 24px auto;\n  display: grid;\n  grid-template-columns: 7fr 3fr;\n  grid-gap: 8px 16px;\n  align-items: center;\n"]);return P=function(){return e},e}function I(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-weight: ",";\n  margin: 8px auto;\n  justify-content: space-around;\n"]);return I=function(){return e},e}function N(){var e=Object(d.a)(["\n  text-align: center;\n  font-weight: ",";\n\n  color: ",";\n"]);return N=function(){return e},e}function B(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  justify-items: center;\n  align-items: center;\n  font-weight: ",";\n\n  color: ",";\n"]);return B=function(){return e},e}function D(){var e=Object(d.a)(["\n  color: ",";\n"]);return D=function(){return e},e}function W(){var e=Object(d.a)(["\n  display: ",";\n  margin: 16px auto;\n"]);return W=function(){return e},e}var J=l.d.div(W(),(function(e){return e.isVisible?"block":"none"})),V=l.d.div(D(),(function(e){var n=e.theme,t=e.color;return t===E.good?n.green:t===E.overtime?n.yellow:t===E.bad?n.red:t===E.fiolet?n.fiolet:void 0})),Z=l.d.div(B(),(function(e){return e.theme.bold}),(function(e){var n=e.theme,t=e.color;return t===E.good?n.green:t===E.overtime?n.yellow:t===E.bad?n.red:void 0})),U=l.d.div(N(),(function(e){return e.theme.bold}),(function(e){var n=e.theme,t=e.color;return t===E.good?n.green:t===E.overtime?n.yellow:t===E.bad?n.red:void 0})),_=l.d.div(I(),(function(e){return e.theme.bold})),K=l.d.div(P());var $=function(e){var n=e.result,t=e.isVisible;return a.a.createElement(J,{isVisible:t},a.a.createElement(_,null,a.a.createElement(V,{color:E.fiolet},"Lekcja: ",n.lesson)),a.a.createElement(_,null,a.a.createElement(V,{color:E.good},j.good,": ",n.correctAnswer),a.a.createElement(V,{color:E.bad},j.wrong,": ",n.wrongAnswer)),a.a.createElement(K,null,n.answerTable.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,{key:e.id,color:e.answer},a.a.createElement("div",null,e.a),a.a.createElement("div",null,e.type),a.a.createElement("div",null,e.b),a.a.createElement("div",null,"="),a.a.createElement("div",null,e.c)),a.a.createElement(U,{key:Object(f.a)(),color:e.answer},e.emoji))}))))};function q(){var e=Object(d.a)(["\n  margin-top: 8px;\n"]);return q=function(){return e},e}function G(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-weight: ",";\n  justify-content: space-around;\n  color: ",";\n"]);return G=function(){return e},e}var H=l.d.div(G(),(function(e){return e.theme.bold}),(function(e){return e.theme.fiolet})),Q=l.d.div(q());var X=function(e){var n=e.result,t=Object(r.useState)(!1),o=Object(u.a)(t,2),i=o[0],c=o[1];return a.a.createElement(Q,{onClick:function(){c((function(e){return!e}))}},a.a.createElement(H,null,a.a.createElement("div",null,n.date),a.a.createElement("div",null,n.precent,"%")),a.a.createElement($,{key:n.id,isVisible:i,result:n}))};function Y(){var e=Object(d.a)(["\n  width: 95%;\n  margin: 16px auto;\n"]);return Y=function(){return e},e}var ee=l.d.div(Y());var ne=function(e){var n=e.changePage,t=JSON.parse(localStorage.getItem("db"));return console.log(t),a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{title:"Wyniki",btnLeftFn:n,btnLeftFnProperty:w.main}),a.a.createElement(ee,null,t?t.map((function(e){return a.a.createElement(X,{key:Object(f.a)(),result:e})})):a.a.createElement("div",null,"Brak wynik\xf3w")))};function te(){var e=Object(d.a)(["\n  display: block;\n  height: 24px;\n  width: 90%;\n  margin: 16px auto 0;\n  background-color: #ffffff;\n  color: #ffffff;\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n\n  font-weight: ",';\n  box-shadow: 0px 8px 12px -4px rgba(0, 0, 0, 0.5);\n\n  ::before {\n    display: block;\n    content: "";\n    height: 24px;\n    border-radius: 8px;\n    width: ',";\n    background-color: ",";\n  }\n"]);return te=function(){return e},e}var re=l.d.div(te(),(function(e){return e.theme.bold}),(function(e){var n=e.precent;return"".concat(n,"%")}),(function(e){var n=e.theme;return e.fiolet?n.lightFiolet:n.yellow}));var ae=function(e){var n=e.remainingTime,t=e.useTimer,r=e.fiolet,o=void 0!==r&&r,i=n/t*100;return a.a.createElement(re,{precent:i,fiolet:o})};function oe(){var e=Object(d.a)(["\n  width: 80%;\n  height: 128px;\n  line-height: 128px;\n  color: #ffffff;\n  margin: 24px auto 0;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.75);\n"]);return oe=function(){return e},e}function ie(){var e=Object(d.a)(["\n  width: 80%;\n  height: 128px;\n  line-height: 128px;\n  margin: 24px auto 0;\n  font-size: ",";\n  font-weight: ",";\n  background-color: #ffffff;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.75);\n"]);return ie=function(){return e},e}function ce(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 16px;\n  max-width: 300px;\n  margin: 32px auto 0;\n  justify-items: center;\n  align-items: center;\n"]);return ce=function(){return e},e}var ue=l.d.div(ce()),le=l.d.div(ie(),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.bold})),fe=l.d.div(oe(),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.bold}),(function(e){var n=e.lastAnswer,t=e.theme;return n===E.good?t.green:t.lightFiolet}));var de=function(e){var n=e.task,t=e.checkAnswer,o=e.lastAnswer,i=e.setLastAnswer,c=e.useTimer,l=void 0===c?0:c,f=Object(r.useState)(!1),d=Object(u.a)(f,2),s=d[0],m=d[1],g=Object(r.useState)(l),b=Object(u.a)(g,2),p=b[0],h=b[1];return Object(r.useEffect)((function(){o?(m(!0),setTimeout((function(){m(!1),i("")}),500)):m(!1)}),[o]),Object(r.useEffect)((function(){var e=setInterval((function(){return h((function(e){return e-1}))}),100);return 0===l?clearInterval(e):p<=0?(t(E.overtime,n.c,n.a,n.b,n.type),clearInterval(e)):function(){clearInterval(e)}}),[p]),a.a.createElement(a.a.Fragment,null,0!==l?a.a.createElement(ae,{remainingTime:p,useTimer:l}):null,s?a.a.createElement(fe,{lastAnswer:o},o):a.a.createElement(le,null,n.a," ",n.type," ",n.b," = ",a.a.createElement("span",null,"?")),a.a.createElement(ue,null,n.fakeAnswer.map((function(e){return a.a.createElement(x,{key:e.id,largeText:!0,transparentText:o===E.good,onClick:function(){return t(e,n.c,n.a,n.b,n.type)},value:e},e)}))))};function se(){var e=Object(d.a)(["\n  text-align: center;\n  font-weight: ",";\n\n  color: ",";\n"]);return se=function(){return e},e}function me(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  justify-items: center;\n  align-items: center;\n  font-weight: ",";\n  font-size: ",";\n\n  color: ",";\n"]);return me=function(){return e},e}function ge(){var e=Object(d.a)(["\n  color: ",";\n"]);return ge=function(){return e},e}function be(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-weight: ",";\n  justify-content: space-around;\n"]);return be=function(){return e},e}function pe(){var e=Object(d.a)(["\n  margin: 32px auto;\n  display: grid;\n  grid-template-columns: 7fr 3fr;\n  grid-gap: 8px 16px;\n  align-items: center;\n"]);return pe=function(){return e},e}function he(){var e=Object(d.a)(["\n  width: 95%;\n  margin: 16px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return he=function(){return e},e}var ve=l.d.div(he()),xe=l.d.div(pe()),we=l.d.div(be(),(function(e){return e.theme.bold})),Ee=l.d.div(ge(),(function(e){var n=e.theme,t=e.color;return t===E.good?n.green:t===E.overtime?n.yellow:t===E.bad?n.red:void 0})),je=l.d.div(me(),(function(e){return e.theme.bold}),(function(e){return e.theme.fontSize.m}),(function(e){var n=e.theme,t=e.color;return t===E.good?n.green:t===E.overtime?n.yellow:t===E.bad?n.red:void 0})),Oe=l.d.div(se(),(function(e){return e.theme.bold}),(function(e){var n=e.theme,t=e.color;return t===E.good?n.green:t===E.overtime?n.yellow:t===E.bad?n.red:void 0}));var ye=function(e){var n=e.changePage,t=e.countCorrectAnswer,r=e.countWrongAnswer,o=e.answerTable,i=e.currentLesson,c=t,u=t+r,l=c/u*100,d=[],s={id:Object(f.a)(),lesson:i,date:(new Date).toLocaleString("pl-PL",{hour12:!1,hour:"numeric",minute:"2-digit",second:"2-digit",year:"numeric",month:"2-digit",day:"2-digit"}),correctAnswer:t,wrongAnswer:r,precent:Math.floor(l),answerTable:o},m=JSON.parse(localStorage.getItem("db"));return m&&(d=m),d.unshift(s),localStorage.setItem("lastLesson",i),localStorage.setItem("db",JSON.stringify(d)),a.a.createElement(ve,null,a.a.createElement(we,null,a.a.createElement(Ee,{color:E.good},j.good,": ",t),a.a.createElement(Ee,{color:E.bad},j.wrong,": ",r)),a.a.createElement(ae,{remainingTime:c,useTimer:u,fiolet:!0}),a.a.createElement(xe,null,o.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(je,{color:e.answer},a.a.createElement("div",null,e.a),a.a.createElement("div",null,e.type),a.a.createElement("div",null,e.b),a.a.createElement("div",null,"="),a.a.createElement("div",null,e.c)),a.a.createElement(Oe,{color:e.answer},e.emoji))}))),a.a.createElement(x,{fiolet:!0,onClick:function(){return n(w.main)}},"OK"))};var ke=function(e){var n=e.changePage,t=e.currentTask,r=e.tasksTable,o=e.checkAnswer,i=e.countCorrectAnswer,c=e.countWrongAnswer,u=e.lastAnswer,l=e.setLastAnswer,f=e.useTimer,d=e.answerTable,s=e.currentLesson,m="Lekcja ".concat(s);return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{title:m,btnLeftFn:n,btnLeftFnProperty:w.main,rightText:t<r.length?t+1:""}),t<r.length?a.a.createElement(de,{key:r[t].id,task:r[t],checkAnswer:o,lastAnswer:u,setLastAnswer:l,useTimer:f}):a.a.createElement(ye,{countWrongAnswer:c,countCorrectAnswer:i,changePage:n,answerTable:d,currentLesson:s}))};function Ae(){var e=Object(d.a)(["\n  width: 100%;\n  margin: 16px auto;\n  padding: 0 16px;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  /* flex-direction: row; */\n  justify-content: space-around;\n  align-items: center;\n"]);return Ae=function(){return e},e}function Se(){var e=Object(d.a)(["\n  margin: 32px auto;\n"]);return Se=function(){return e},e}function Te(){var e=Object(d.a)(["\n  max-width: 64px;\n  text-align: center;\n  margin-left: 8px;\n  padding: 4px 16px;\n  border-radius: 4px;\n"]);return Te=function(){return e},e}function Me(){var e=Object(d.a)(["\n  width: 100%;\n  margin: 8px auto;\n"]);return Me=function(){return e},e}function Fe(){var e=Object(d.a)(["\n  width: 95%;\n  margin: 32px auto;\n"]);return Fe=function(){return e},e}var ze=l.d.div(Fe()),Le=l.d.div(Me()),Ce=l.d.input(Te()),Re=Object(l.d)(x)(Se()),Pe=l.d.div(Ae());var Ie=function(e){var n,t=e.changePage,r=e.setTimer,o=e.useTimer,i=e.setAdditionRange,c=e.additionRange,u=e.setMultiplicationRange,l=e.multiplicationRange;return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{title:"Ustawienia",btnLeftFn:t,btnLeftFnProperty:w.main}),a.a.createElement(ze,null,a.a.createElement(Pe,null,a.a.createElement("label",{htmlFor:"additionRange"},"Zakres dodawania i odejmowania: "),a.a.createElement(Ce,{id:"additionRange",type:"number",value:c,onChange:function(e){return i(e.target.value)}})),a.a.createElement(Pe,null,a.a.createElement("label",{htmlFor:"multiplicationRange"},"Zakres mono\u017cenia i dzielenia:"),a.a.createElement(Ce,{id:"multiplicationRange",type:"number",value:l,onChange:function(e){return u(e.target.value)}})),a.a.createElement(Pe,null,a.a.createElement("label",{htmlFor:"useTimer"},"Ile czasu na zadanie (sekundy):"),a.a.createElement(Ce,{id:"useTimer",type:"number",value:(n=o,Number(n)/10),onChange:function(e){return r(function(e){return 10*Number(e)}(e.target.value))}})),a.a.createElement(Le,null,a.a.createElement(Re,{fiolet:!0,onClick:function(){var e={additionRange:c,multiplicationRange:l,useTimer:o};localStorage.setItem("settings",JSON.stringify(e)),t(w.main)}},"Zapisz"))))};function Ne(e){var n=[];n.push(e);var t=100;t=e<10?20:e<30?50:e<50?70:e<60?80:100;for(var r=0;r<5;r++)for(var a=!0;a;){var o=Math.floor(Math.random()*t);-1===n.indexOf(o)&&(n.push(o),a=!1)}return function(e){for(var n,t,r=e.length;0!==r;)t=Math.floor(Math.random()*r),n=e[r-=1],e[r]=e[t],e[t]=n;return e}(n)}function Be(e,n){for(var t=[],r=0;r<10;r++){var a=Math.floor(4*Math.random()+1);switch(a){case 1:t.push(De(r,e));break;case 2:t.push(We(r,e));break;case 3:t.push(Je(r,n));break;case 4:t.push(Ve(r,n));break;default:console.log("Sorry, we are out of ".concat(a,"."))}}return t}var De=function(e,n){var t=Math.floor(Math.random()*n),r=Math.floor(Math.random()*(n-t)+1),a=t+r;return{id:e,type:"+",a:t,b:r,c:a,fakeAnswer:Ne(a),answer:""}},We=function(e,n){var t=Math.floor(Math.random()*n),r=Math.floor(Math.random()*(n-t)+1);if(t>r){var a=t-r;return{id:e,type:"-",a:t,b:r,c:a,fakeAnswer:Ne(a),answer:""}}var o=r-t;return{id:e,type:"-",a:r,b:t,c:o,fakeAnswer:Ne(o),answer:""}},Je=function(e,n){var t=Math.floor(10*Math.random()+1),r=Math.floor(Math.random()*n+1),a=t*r;return{id:e,type:"x",a:t,b:r,c:a,fakeAnswer:Ne(a),answer:""}};function Ve(e,n){var t=Math.floor(10*Math.random()+1),r=Math.floor(Math.random()*n+1);return{id:e,type:":",a:t*r,b:r,c:t,fakeAnswer:Ne(t),answer:""}}var Ze=function(){var e=Object(r.useState)(w.main),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(0),d=Object(u.a)(i,2),s=d[0],b=d[1],p=Object(r.useState)(10),h=Object(u.a)(p,2),v=h[0],x=h[1],O=Object(r.useState)(""),y=Object(u.a)(O,2),k=y[0],A=y[1],S=Object(r.useState)(0),T=Object(u.a)(S,2),M=T[0],F=T[1],z=Object(r.useState)(0),L=Object(u.a)(z,2),C=L[0],P=L[1],I=Object(r.useState)(100),N=Object(u.a)(I,2),B=N[0],D=N[1],W=Object(r.useState)(10),J=Object(u.a)(W,2),V=J[0],Z=J[1],U=Object(r.useState)(Be(B,V)),_=Object(u.a)(U,2),K=_[0],$=_[1],q=Object(r.useState)([]),G=Object(u.a)(q,2),H=G[0],Q=G[1],X=Object(r.useState)(0),Y=Object(u.a)(X,2),ee=Y[0],te=Y[1];function re(e){w.start===e&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;b(e),F(0),P(0),$(Be(B,V)),A(""),te((function(e){return e+1})),Q([])}(),o(e)}return Object(r.useEffect)((function(){var e=localStorage.getItem("lastLesson");te(Number(e));var n=JSON.parse(localStorage.getItem("settings"));n&&(D(Number(n.additionRange)),Z(Number(n.multiplicationRange)),x(Number(n.useTimer)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(l.a,{theme:g},t===w.main?a.a.createElement(R,{changePage:re}):null,t===w.start?a.a.createElement(ke,{tasksTable:K,currentTask:s,lastAnswer:k,setLastAnswer:A,countCorrectAnswer:M,countWrongAnswer:C,checkAnswer:function(e,n,t,r,a){e===n?(b((function(e){return e+1})),F((function(e){return e+1})),A(E.good),Q((function(n){return[].concat(Object(c.a)(n),[{id:Object(f.a)(),a:t,b:r,c:e,type:a,answer:E.good,emoji:j.good}])}))):e===E.overtime?(b((function(e){return e+1})),P((function(e){return e+1})),A(E.overtime),Q((function(e){return[].concat(Object(c.a)(e),[{id:Object(f.a)(),a:t,b:r,c:n,type:a,answer:E.overtime,emoji:j.time}])}))):(P((function(e){return e+1})),A(E.bad),Q((function(n){return[].concat(Object(c.a)(n),[{id:Object(f.a)(),a:t,b:r,c:e,type:a,answer:E.bad,emoji:j.wrong}])})))},changePage:re,useTimer:v,answerTable:H,currentLesson:ee}):null,t===w.results?a.a.createElement(ne,{changePage:re}):null,t===w.settings?a.a.createElement(Ie,{changePage:re,setTimer:x,useTimer:v,setAdditionRange:D,additionRange:B,setMultiplicationRange:Z,multiplicationRange:V}):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f265aff7.chunk.js.map