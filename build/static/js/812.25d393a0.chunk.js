"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812,637,342,315,399],{680:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return u}});var r=t(609),i=t(6355),o=t(3504),a=t(9637),c=t(184),u=function(){var n=(0,r.kg)().movies;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Title,{children:"Popular movies today"}),(0,c.jsx)(a.List,{children:n.map((function(n){var e=n.title,t=n.id,r=n.poster_path;return(0,c.jsx)(a.Items,{children:(0,c.jsx)(a.Card,{children:(0,c.jsxs)(o.rU,{to:"/movies/".concat(t),children:[(0,c.jsx)("img",{src:r&&"".concat("https://image.tmdb.org/t/p/w200").concat(r),alt:e}),(0,c.jsxs)(a.Wrapper,{children:[(0,c.jsx)(i.Cys,{}),(0,c.jsx)(a.Description,{children:e})]})]})})},t)}))})]})}},9637:function(n,e,t){t.r(e),t.d(e,{Description:function(){return l},Items:function(){return f},Card:function(){return d},List:function(){return m},Title:function(){return h},Wrapper:function(){return x}});var r,i,o,a,c,u,s=t(168),p=t(5751),l=p.ZP.div(r||(r=(0,s.Z)(["\n  margin-left: ",";\n  color: ",";\n  font-size: 10px;\n  font-weight: 700;\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.purple})),f=p.ZP.li(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  transition: transform "," ease;\n  flex-basis: calc((100% - 240px) / 4);\n\n  &:hover {\n    transform: scale(1.1);\n    color: ",";\n  }\n  @media (max-width: 768px) {\n    flex-basis: unset;\n  }\n"])),(function(n){return n.theme.animation}),(function(n){return n.theme.colors.rgbPink})),d=p.ZP.div(o||(o=(0,s.Z)(["\n  background-color: ",";\n  max-width: 200px;\n  max-height: 360px;\n"])),(function(n){return n.theme.colors.white})),m=p.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  justify-content: space-evenly;\n"]))),h=p.ZP.h2(c||(c=(0,s.Z)(["\n  margin: ",";\n"])),(function(n){return n.theme.spacing(4)})),x=p.ZP.div(u||(u=(0,s.Z)(["\n  display: flex;\n  margin: ",";\n"])),(function(n){return n.theme.spacing(3)}))},1686:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return r.HomePage}});var r=t(680)},7315:function(n,e,t){t.r(e),t.d(e,{MovieDetailsPage:function(){return r.MovieDetailsPage}});var r=t(8986)},4315:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return b}});var r=t(1413),i=t(5861),o=t(885),a=t(7757),c=t.n(a),u=t(2791),s=t(9390),p=t(9399),l=t(3504),f=t(6871),d=t(8565),m=t(6183),h=t(6140),x=t(6856),g=t(3728),v=t(184),b=function(){var n=(0,s.cI)(),e=n.register,t=n.handleSubmit,a=n.resetField,b=(0,u.useState)(!1),Z=(0,o.Z)(b,2),P=Z[0],k=Z[1],j=(0,u.useState)(null),w=(0,o.Z)(j,2),y=(w[0],w[1]),M=(0,u.useState)([]),I=(0,o.Z)(M,2),q=I[0],F=I[1],L=(0,l.lr)(),D=(0,o.Z)(L,2),H=D[0],W=D[1],_=H.get("query"),C=(0,f.TH)(),S=(0,f.s0)();(0,u.useEffect)((function(){function n(){return(n=(0,i.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k(!0),n.prev=1,_){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,(0,d.z8)(_);case 6:if(e=n.sent,F(e),0!==e.length){n.next=11;break}return(0,h.ZP)("There is no movie with this title",{icon:"\ud83d\ude45\u200d\u2640\ufe0f"}),n.abrupt("return");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),y(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,13,16,19]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[_]);return(0,v.jsxs)(p.Wrapper,{children:[(0,v.jsxs)(p.Form,{onSubmit:t((function(n){W(n.query),S({pathname:C.pathname,search:"query=".concat(n.query)}),a("query")})),children:[(0,v.jsx)(p.Input,(0,r.Z)((0,r.Z)({},e("query",{required:!0})),{},{placeholder:"Type any movie"})),(0,v.jsx)(p.Button,{type:"submit",children:(0,v.jsx)(g.Vph,{})})]}),P&&(0,v.jsx)(m.a,{}),q&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p.LinkWrapper,{children:q.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,v.jsx)("div",{children:(0,v.jsxs)(p.Link,{to:"/movies/".concat(e),state:{from:{location:C,label:"Back to movies"}},children:[(0,v.jsx)(x.ex0,{}),t,r&&(0,v.jsx)(p.Img,{children:(0,v.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(r),alt:t})})]})},e)}))})}),(0,v.jsx)(h.x7,{})]})}},9399:function(n,e,t){t.r(e),t.d(e,{Link:function(){return b},Img:function(){return Z},Wrapper:function(){return P},Icon:function(){return k},Form:function(){return j},Input:function(){return w},Button:function(){return y},LinkWrapper:function(){return M}});var r,i,o,a,c,u,s,p,l,f,d=t(168),m=t(5751),h=t(3504),x=t(6856),g=(0,m.F4)(r||(r=(0,d.Z)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),v=(0,m.F4)(i||(i=(0,d.Z)(["\n  0% {\n  border-color: ",";\n  box-shadow: 0 0 5px #00b7ff33, inset 0 0 5px #001aff19, 0 2px 0 #000;\n  }\t\n  100% {\n  border-color: ",";\n  box-shadow: 0 0 20px #00eeff99, inset 0 0 10px #0066ff66, 0 2px 0 #000;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.lightBlue})),b=(0,m.ZP)(h.OL)(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: ",";\n  gap: ",";\n  color: #f1e2f2;\n  &.active {\n    color: ",";\n  }\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(100)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.pink}),(function(n){return n.theme.colors.black})),Z=m.ZP.span(a||(a=(0,d.Z)(["\n  border-radius: 5px 5px 5px 5px;\n  visibility: hidden;\n  position: absolute;\n  left: 350px;\n  background: #fff;\n  box-shadow: -2px 2px 10px -1px #333;\n  border-radius: 5px;\n  transition: transform "," ease;\n\n  ",":hover & {\n    visibility: visible;\n    transform: scale(0.5) rotate(-20deg);\n  }\n"])),(function(n){return n.theme.animation}),b),P=m.ZP.div(c||(c=(0,d.Z)(["\n  background: linear-gradient(195deg, #d81dc1, #3d0346, #c92be1);\n  background-size: 180% 180%;\n  animation: "," 3s ease infinite;\n  height: ",";\n  margin: -12px;\n  padding: 4px 12px;\n"])),g,(function(n){return n.theme.spacing(300)})),k=(0,m.ZP)(x.ex0)(u||(u=(0,d.Z)(["\n  margin-right: ",";\n"])),(function(n){return n.theme.spacing(2)})),j=m.ZP.form(s||(s=(0,d.Z)(["\n  position: relative;\n  margin-bottom: ",";\n  max-width: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(40)})),w=m.ZP.input(p||(p=(0,d.Z)(["\n  animation: "," 800ms ease-out infinite alternate;\n  border-radius: 10px;\n  color: ",";\n  background: ",";\n  padding: ",";\n  width: 100%;\n"])),v,(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.rgbPink}),(function(n){return n.theme.spacing(2)})),y=m.ZP.button(l||(l=(0,d.Z)(["\n  background-color: transparent;\n  border-radius: 50%;\n  border: none;\n  position: absolute;\n  top: 50%;\n  right: -10px;\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.3) translateY(-35%);\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.purple})),M=m.ZP.div(f||(f=(0,d.Z)(["\n  position: relative;\n"])))},2342:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return r.MoviesPage}});var r=t(4315)},4812:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return r.HomePage},MoviesPage:function(){return i.MoviesPage},MovieDetailsPage:function(){return o.MovieDetailsPage}});var r=t(1686),i=t(2342),o=t(7315)}}]);
//# sourceMappingURL=812.25d393a0.chunk.js.map