(this.webpackJsonpkeyboardracer=this.webpackJsonpkeyboardracer||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),o=n(4),a=n.n(o),i=(n(9),n(0));function c(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"})}),Object(i.jsx)("div",{className:"title",children:"Keyboard Racer"})]})}var h=n(2);n(11);function l(){return["The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own. It gets its light from the Sun. The Moo keeps changing its shape as it moves round the Earth. It spins on its axis in 27.3 days stars were named after the Edwin Aldrin were the first ones to set their foot on the Moon on 21 July 1969 They reached the Moon in their space craft named Apollo II.","The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas. The surface of the Sun is known as the photosphere. The photosphere is surrounded by a thin layer of gas known as the chromospheres. Without the Sun, there would be no life on Earth. There would be no plants, no animals and no human beings. As, all the living things on Earth get their energy from the Sun for their survival.","The Solar System consists of the Sun Moon and Planets. It also consists of comets, meteoroids and asteroids. The Sun is the largest member of the Solar System. In order of distance from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto; the dwarf planet. The Sun is at the centre of the Solar System and the planets, asteroids, comets and meteoroids revolve around it."][Math.floor(3*Math.random())]}function u(){var e=Object(r.useState)(0),t=Object(h.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){s((function(e){return e+1}))}),1e3);return function(){console.log("timer cleared"),console.log(n),clearTimeout(e)}}),[n]),Object(i.jsxs)("div",{children:["Timer - ",n]})}function d(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)({lastPart:"",currentWord:"",restParagraph:""}),a=Object(h.a)(o,2),c=a[0],d=a[1],f=Object(r.useState)({}),b=Object(h.a)(f,2),g=b[0],j=b[1],p=Object(r.useState)(),m=Object(h.a)(p,2),O=m[0],y=m[1],S=Object(r.useState)(!1),v=Object(h.a)(S,2),w=v[0],x=v[1],M=Object(r.useState)(!1),T=Object(h.a)(M,2),k=T[0],P=T[1],I=Object(r.useRef)(""),E=Object(r.useRef)(),W=Object(r.useRef)(),J=Object(r.useState)(l),N=Object(h.a)(J,2),R=N[0];N[1];function A(e){return e.trim().split(/\s+/).length}function D(e){!k&&n.length<=0&&(P(!0),y(Date.now()/1e3)),n.length<R.length-1?s((function(){return n+e})):(s((function(){return n+e})),I.current.disabled="disabled","red"==E.current.style.color?console.log("errors"):console.log("success!"))}return Object(r.useEffect)((function(){if(n==R.substring(0,n.length)?E.current.style.color="green":E.current.style.color="red",n.length==R.length){console.log("finished"),x(!0),P(!1);var e=Date.now()/1e3-O;y(e),j({seconds:Math.floor(e),minutes:Math.floor(e/60),WPM:Math.floor(A(R)/(e/60))}),W.current.innerHTML="You finished typing in "+Math.floor(e/60).toString()+" Minutes \n WPM : "+Math.floor(A(R)/(e/60)).toString(),I.current.value=n}}),[n]),Object(r.useEffect)((function(){var e=R.substring(n.length,R.length),t=e.substring(0,e.indexOf(" ")),r=R.substring(0,n.length);d({lastPart:r,currentWord:t,restParagraph:e.substring(t.length,e.length)})}),[n]),Object(i.jsxs)("div",{className:"body",children:[k?Object(i.jsx)(u,{}):Object(i.jsxs)("div",{children:[" ",w?"You have completed Typing the Paragraph in "+g.seconds.toString()+" Seconds":"Timer will start once you start typing"]}),Object(i.jsx)("h4",{children:"Paragraph"}),Object(i.jsxs)("p",{ref:E,children:[c.lastPart,Object(i.jsx)("b",{children:c.currentWord}),c.restParagraph]}),Object(i.jsx)("textarea",{ref:I,onKeyDown:function(e){" "==e.key||"enter"==e.key?D(" "):e.key.length<=1?D(e.key):"Backspace"==e.key&&function(){var e=n.substring(0,n.length-1);s(e)}()},placeholder:"Tap here to type..."}),Object(i.jsx)("div",{ref:W})]})}var f=function(){return Object(i.jsxs)("div",{className:"App",style:{},children:[Object(i.jsx)(c,{}),Object(i.jsx)(d,{})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ec13d984.chunk.js.map