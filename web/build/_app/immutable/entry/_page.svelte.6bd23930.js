import{L as E,S as Ke,i as Qe,s as Ge,M as it,f as u,k as i,l as m,o as p,C as e,q as x,N as o,n as le,x as j,O as pt,P as ct,F as ht,j as C,h as U,p as O,m as B,D as Je,v as r,Q as S,r as gt,R as Y,H as rt,I as at,J as lt,t as st,b as ot,K as ut}from"../chunks/index.683d2cf0.js";import{d as dt,w as W}from"../chunks/index.1da823fd.js";const we=W(1),$=W(.5),se=W(1),ee=W(0),de=W(0),te=W(.5),oe=W(1),ue=W(0),fe=W(0),ft=dt([$,se,ee,de,te,oe,ue,fe],([t,n,a,d,s,f,_,c])=>[t,n,a,d,s,f,_,c]);async function mt(){var t=await fetch("/nextState"),n=await t.json();return $.set(n.L1),se.set(n.M1),ee.set(n.Theta1),de.set(n.Omega1),te.set(n.L2),oe.set(n.M2),ue.set(n.Theta2),fe.set(n.Omega2),null}async function V(){const t={upperLength:E($),upperMass:E(se),upperAngle:E(ee),upperAngularVelocity:E(de),lowerLength:E(te),lowerMass:E(oe),lowerAngle:E(ue),lowerAngularVelocity:E(fe)},n={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};(await fetch("/setState",n)).ok||console.log("ERROR posting state!")}const{window:Ye}=ct;function _t(t){let n,a,d;return it(t[3]),{c(){n=u("canvas"),this.h()},l(s){n=i(s,"CANVAS",{class:!0}),m(n).forEach(p),this.h()},h(){e(n,"class","svelte-6yx2j8")},m(s,f){x(s,n,f),t[4](n),a||(d=o(Ye,"resize",t[3]),a=!0)},p:le,i:le,o:le,d(s){s&&p(n),t[4](null),a=!1,d()}}}const ae=500;function vt(t,n,a){let d;j(t,we,l=>a(5,d=l));let s;var f,_;async function c(){a(0,s.height=f,s),a(0,s.width=f,s);var l=s.getContext("2d");l.lineWidth=5,l.fillStyle="rgba(255,255,255,1)",l.fillRect(0,0,s.width,s.height),l.strokeStyle="rgba(0,0,0,1)",l.fillStyle="rgba(0,0,0,1)",l.save(),l.translate(s.width/2,s.height/3),l.rotate(E(ee)),l.beginPath(),l.moveTo(0,0),l.lineTo(0,ae*E($)),l.stroke(),l.translate(0,ae*E($)),l.beginPath(),l.arc(0,0,ae*.05*E(se),0,2*Math.PI),l.closePath(),l.fill(),l.rotate(E(ue)-E(ee)),l.beginPath(),l.moveTo(0,0),l.lineTo(0,ae*E(te)),l.stroke(),l.translate(0,ae*E(te)),l.beginPath(),l.arc(0,0,ae*.05*E(oe),0,2*Math.PI),l.closePath(),l.fill(),l.restore()}function b(){c(),!d&&(mt(),window.requestAnimationFrame(b))}const h=we.subscribe(l=>{b()});ft.subscribe(l=>{c()}),pt(h);function A(){a(1,f=Ye.innerWidth),a(2,_=Ye.innerHeight)}function v(l){ht[l?"unshift":"push"](()=>{s=l,a(0,s)})}return[s,f,_,A,v]}class bt extends Ke{constructor(n){super(),Qe(this,n,vt,_t,Ge,{})}}function yt(t){let n;return{c(){n=U("PAUSE")},l(a){n=B(a,"PAUSE")},m(a,d){x(a,n,d)},d(a){a&&p(n)}}}function At(t){let n;return{c(){n=U("PLAY")},l(a){n=B(a,"PLAY")},m(a,d){x(a,n,d)},d(a){a&&p(n)}}}function wt(t){let n,a,d,s,f,_,c,b,h,A,v,l,ie,w,pe,q,ce,L,he,R,g,Le,M,Ee,K,Pe,I,Se,H,ge,Ve,Me,z,Q,Ie,T,Te,G,De,D,ke,J,X,Ne,k,Ue,Z,Be,N,Ce,Xe;function Ze(y,P){return y[0]?At:yt}let me=Ze(t),F=me(t);return{c(){n=u("div"),a=u("div"),d=u("div"),s=u("button"),F.c(),f=C(),_=u("form"),c=u("div"),b=u("h2"),h=U("Upper Pendulum"),A=C(),v=u("div"),l=u("label"),ie=U(`Length
                    `),w=u("input"),pe=C(),q=u("label"),ce=U(`Mass
                    `),L=u("input"),he=C(),R=u("div"),g=u("label"),Le=U(`Angle
                    `),M=u("input"),Ee=C(),K=u("label"),Pe=U(`Angular Velocity
                    `),I=u("input"),Se=C(),H=u("div"),ge=u("h2"),Ve=U("Lower Pendulum"),Me=C(),z=u("div"),Q=u("label"),Ie=U(`Length
                    `),T=u("input"),Te=C(),G=u("label"),De=U(`Mass
                    `),D=u("input"),ke=C(),J=u("div"),X=u("label"),Ne=U(`Angle
                    `),k=u("input"),Ue=C(),Z=u("label"),Be=U(`Angular Velocity
                    `),N=u("input"),this.h()},l(y){n=i(y,"DIV",{});var P=m(n);a=i(P,"DIV",{class:!0,style:!0});var xe=m(a);d=i(xe,"DIV",{class:!0});var $e=m(d);s=i($e,"BUTTON",{id:!0});var et=m(s);F.l(et),et.forEach(p),$e.forEach(p),xe.forEach(p),f=O(P),_=i(P,"FORM",{});var _e=m(_);c=i(_e,"DIV",{class:!0,style:!0});var ne=m(c);b=i(ne,"H2",{});var tt=m(b);h=B(tt,"Upper Pendulum"),tt.forEach(p),A=O(ne),v=i(ne,"DIV",{class:!0});var ve=m(v);l=i(ve,"LABEL",{for:!0});var Oe=m(l);ie=B(Oe,`Length
                    `),w=i(Oe,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),Oe.forEach(p),pe=O(ve),q=i(ve,"LABEL",{for:!0});var He=m(q);ce=B(He,`Mass
                    `),L=i(He,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),He.forEach(p),ve.forEach(p),he=O(ne),R=i(ne,"DIV",{class:!0});var be=m(R);g=i(be,"LABEL",{for:!0});var Re=m(g);Le=B(Re,`Angle
                    `),M=i(Re,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),Re.forEach(p),Ee=O(be),K=i(be,"LABEL",{for:!0});var je=m(K);Pe=B(je,`Angular Velocity
                    `),I=i(je,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),je.forEach(p),be.forEach(p),ne.forEach(p),Se=O(_e),H=i(_e,"DIV",{class:!0,style:!0});var re=m(H);ge=i(re,"H2",{});var nt=m(ge);Ve=B(nt,"Lower Pendulum"),nt.forEach(p),Me=O(re),z=i(re,"DIV",{class:!0});var ye=m(z);Q=i(ye,"LABEL",{for:!0});var qe=m(Q);Ie=B(qe,`Length
                    `),T=i(qe,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),qe.forEach(p),Te=O(ye),G=i(ye,"LABEL",{for:!0});var Fe=m(G);De=B(Fe,`Mass
                    `),D=i(Fe,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),Fe.forEach(p),ye.forEach(p),ke=O(re),J=i(re,"DIV",{class:!0});var Ae=m(J);X=i(Ae,"LABEL",{for:!0});var We=m(X);Ne=B(We,`Angle
                    `),k=i(We,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),We.forEach(p),Ue=O(Ae),Z=i(Ae,"LABEL",{for:!0});var ze=m(Z);Be=B(ze,`Angular Velocity
                    `),N=i(ze,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0,name:!0}),ze.forEach(p),Ae.forEach(p),re.forEach(p),_e.forEach(p),P.forEach(p),this.h()},h(){e(s,"id","isPausedButton"),e(d,"class","grid"),e(a,"class","container"),Je(a,"margin","5px 0"),e(w,"type","range"),e(w,"min","0"),e(w,"max","1"),e(w,"step","0.01"),e(w,"id","upperLength"),e(w,"name","upperLength"),e(l,"for","upperLength"),e(L,"type","range"),e(L,"min","0.01"),e(L,"max","5"),e(L,"step","0.01"),e(L,"id","upperMass"),e(L,"name","upperMass"),e(q,"for","upperMass"),e(v,"class","grid"),e(M,"type","range"),e(M,"min","-3.14"),e(M,"max","3.14"),e(M,"step","0.01"),e(M,"id","upperAngle"),e(M,"name","upperAngle"),e(g,"for","upperAngle"),e(I,"type","range"),e(I,"min","-10"),e(I,"max","10"),e(I,"step","0.01"),e(I,"id","upperAngularVelocity"),e(I,"name","upperAngularVelocity"),e(K,"for","upperAngularVelocity"),e(R,"class","grid"),e(c,"class","container"),Je(c,"margin","5px 0"),e(T,"type","range"),e(T,"min","0"),e(T,"max","1"),e(T,"step","0.01"),e(T,"id","lowerLength"),e(T,"name","lowerLength"),e(Q,"for","lowerLength"),e(D,"type","range"),e(D,"min","0.01"),e(D,"max","5"),e(D,"step","0.01"),e(D,"id","lowerMass"),e(D,"name","lowerMass"),e(G,"for","lowerMass"),e(z,"class","grid"),e(k,"type","range"),e(k,"min","-3.14"),e(k,"max","3.14"),e(k,"step","0.01"),e(k,"id","lowerAngle"),e(k,"name","lowerAngle"),e(X,"for","lowerAngle"),e(N,"type","range"),e(N,"min","-10"),e(N,"max","10"),e(N,"step","0.01"),e(N,"id","lowerAngularVelocity"),e(N,"name","lowerAngularVelocity"),e(Z,"for","lowerAngularVelocity"),e(J,"class","grid"),e(H,"class","container"),Je(H,"margin","5px 0")},m(y,P){x(y,n,P),r(n,a),r(a,d),r(d,s),F.m(s,null),r(n,f),r(n,_),r(_,c),r(c,b),r(b,h),r(c,A),r(c,v),r(v,l),r(l,ie),r(l,w),S(w,t[1]),r(v,pe),r(v,q),r(q,ce),r(q,L),S(L,t[2]),r(c,he),r(c,R),r(R,g),r(g,Le),r(g,M),S(M,t[3]),r(R,Ee),r(R,K),r(K,Pe),r(K,I),S(I,t[4]),r(_,Se),r(_,H),r(H,ge),r(ge,Ve),r(H,Me),r(H,z),r(z,Q),r(Q,Ie),r(Q,T),S(T,t[5]),r(z,Te),r(z,G),r(G,De),r(G,D),S(D,t[6]),r(H,ke),r(H,J),r(J,X),r(X,Ne),r(X,k),S(k,t[7]),r(J,Ue),r(J,Z),r(Z,Be),r(Z,N),S(N,t[8]),Ce||(Xe=[o(s,"click",t[9]),o(w,"change",t[10]),o(w,"input",t[10]),o(w,"change",V),o(w,"input",V),o(L,"change",t[11]),o(L,"input",t[11]),o(L,"change",V),o(L,"input",V),o(M,"change",t[12]),o(M,"input",t[12]),o(M,"change",V),o(M,"input",V),o(I,"change",t[13]),o(I,"input",t[13]),o(I,"change",V),o(I,"input",V),o(T,"change",t[14]),o(T,"input",t[14]),o(T,"change",V),o(T,"input",V),o(D,"change",t[15]),o(D,"input",t[15]),o(D,"change",V),o(D,"input",V),o(k,"change",t[16]),o(k,"input",t[16]),o(k,"change",V),o(k,"input",V),o(N,"change",t[17]),o(N,"input",t[17]),o(N,"change",V),o(N,"input",V)],Ce=!0)},p(y,[P]){me!==(me=Ze(y))&&(F.d(1),F=me(y),F&&(F.c(),F.m(s,null))),P&2&&S(w,y[1]),P&4&&S(L,y[2]),P&8&&S(M,y[3]),P&16&&S(I,y[4]),P&32&&S(T,y[5]),P&64&&S(D,y[6]),P&128&&S(k,y[7]),P&256&&S(N,y[8])},i:le,o:le,d(y){y&&p(n),F.d(),Ce=!1,gt(Xe)}}}function Lt(t,n,a){let d,s,f,_,c,b,h,A,v;j(t,we,g=>a(0,d=g)),j(t,$,g=>a(1,s=g)),j(t,se,g=>a(2,f=g)),j(t,ee,g=>a(3,_=g)),j(t,de,g=>a(4,c=g)),j(t,te,g=>a(5,b=g)),j(t,oe,g=>a(6,h=g)),j(t,ue,g=>a(7,A=g)),j(t,fe,g=>a(8,v=g));function l(){we.update(g=>1-g)}function ie(){s=Y(this.value),$.set(s)}function w(){f=Y(this.value),se.set(f)}function pe(){_=Y(this.value),ee.set(_)}function q(){c=Y(this.value),de.set(c)}function ce(){b=Y(this.value),te.set(b)}function L(){h=Y(this.value),oe.set(h)}function he(){A=Y(this.value),ue.set(A)}function R(){v=Y(this.value),fe.set(v)}return[d,s,f,_,c,b,h,A,v,l,ie,w,pe,q,ce,L,he,R]}class Et extends Ke{constructor(n){super(),Qe(this,n,Lt,wt,Ge,{})}}function Pt(t){let n,a,d,s,f,_,c,b;return f=new bt({}),c=new Et({}),{c(){n=u("h1"),a=U("Double Pendulum"),d=C(),s=u("div"),rt(f.$$.fragment),_=C(),rt(c.$$.fragment),this.h()},l(h){n=i(h,"H1",{});var A=m(n);a=B(A,"Double Pendulum"),A.forEach(p),d=O(h),s=i(h,"DIV",{class:!0});var v=m(s);at(f.$$.fragment,v),_=O(v),at(c.$$.fragment,v),v.forEach(p),this.h()},h(){e(s,"class","grid")},m(h,A){x(h,n,A),r(n,a),x(h,d,A),x(h,s,A),lt(f,s,null),r(s,_),lt(c,s,null),b=!0},p:le,i(h){b||(st(f.$$.fragment,h),st(c.$$.fragment,h),b=!0)},o(h){ot(f.$$.fragment,h),ot(c.$$.fragment,h),b=!1},d(h){h&&p(n),h&&p(d),h&&p(s),ut(f),ut(c)}}}class Mt extends Ke{constructor(n){super(),Qe(this,n,null,Pt,Ge,{})}}export{Mt as default};