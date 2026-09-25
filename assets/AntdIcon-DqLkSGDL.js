import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{F as r,P as i,lt as a}from"./es-CSafq9iR.js";import{C as o,D as s,Dt as c,Et as l,Mt as u,Ot as d,Pt as f,Tt as p,ct as m,et as h,jt as g,kt as _,nt as v,st as y,w as b}from"./useToken-zok5am4n.js";import{n as x,t as S}from"./Context-CaFk-63V.js";import{a as C}from"./Compact-CwIA_b3B.js";function w(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}function T(e,t){g(e,`[@ant-design/icons] ${t}`)}function E(e){return u(e)===`object`&&typeof e.name==`string`&&typeof e.theme==`string`&&(u(e.icon)===`object`||typeof e.icon==`function`)}function D(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var r=e[n];switch(n){case`class`:t.className=r,delete t.class;break;default:delete t[n],t[w(n)]=r}return t},{})}function O(e,t,n){return n?j.createElement(e.tag,p(p({key:t},D(e.attrs)),n),(e.children||[]).map(function(n,r){return O(n,`${t}-${e.tag}-${r}`)})):j.createElement(e.tag,p({key:t},D(e.attrs)),(e.children||[]).map(function(n,r){return O(n,`${t}-${e.tag}-${r}`)}))}function k(e){return s(e)[0]}function A(e){return e?Array.isArray(e)?e:[e]:[]}var j,M,N;function P(){return(P=t((()=>{l(),o(),h(),_(),j=e(n()),x(),M=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,N=function(e){var t=(0,j.useContext)(S),n=t.csp,r=t.prefixCls,i=t.layer,a=M;r&&(a=a.replace(/anticon/g,r)),i&&(a=`@layer ${i} {
${a}
}`),(0,j.useEffect)(function(){var t=e.current,r=C(t);v(a,`@ant-design-icons`,{prepend:!i,csp:n,attachTo:r})},[])}})))()}function F(e){var t=e.primaryColor,n=e.secondaryColor;z.primaryColor=t,z.secondaryColor=n||k(t),z.calculated=!!n}function I(){return p({},z)}var L,R,z,B;function V(){return(V=t((()=>{r(),l(),L=e(n()),P(),R=[`icon`,`className`,`onClick`,`style`,`primaryColor`,`secondaryColor`],z={primaryColor:`#333`,secondaryColor:`#E6E6E6`,calculated:!1},B=function(e){var t=e.icon,n=e.className,r=e.onClick,a=e.style,o=e.primaryColor,s=e.secondaryColor,c=i(e,R),l=L.useRef(),u=z;if(o&&(u={primaryColor:o,secondaryColor:s||k(o)}),N(l),T(E(t),`icon should be icon definiton, but got ${t}`),!E(t))return null;var d=t;return d&&typeof d.icon==`function`&&(d=p(p({},d),{},{icon:d.icon(u.primaryColor,u.secondaryColor)})),O(d.icon,`svg-${d.name}`,p(p({className:n,onClick:r,style:a,"data-icon":d.name,width:`1em`,height:`1em`,fill:`currentColor`,"aria-hidden":`true`},c),{},{ref:l}))},B.displayName=`IconReact`,B.getTwoToneColors=I,B.setTwoToneColors=F})))()}function H(e){var t=A(e),n=y(t,2),r=n[0],i=n[1];return B.setTwoToneColors({primaryColor:r,secondaryColor:i})}function U(){var e=B.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}function W(){return(W=t((()=>{m(),V(),P()})))()}var G,K,q,J;function Y(){return(Y=t((()=>{m(),d(),r(),G=e(n()),K=e(a()),o(),x(),V(),W(),P(),q=[`className`,`icon`,`spin`,`rotate`,`tabIndex`,`onClick`,`twoToneColor`],H(b.primary),J=G.forwardRef(function(e,t){var n=e.className,r=e.icon,a=e.spin,o=e.rotate,s=e.tabIndex,l=e.onClick,u=e.twoToneColor,d=i(e,q),p=G.useContext(S),m=p.prefixCls,h=m===void 0?`anticon`:m,g=p.rootClassName,_=(0,K.default)(g,h,c(c({},`${h}-${r.name}`,!!r.name),`${h}-spin`,!!a||r.name===`loading`),n),v=s;v===void 0&&l&&(v=-1);var b=o?{msTransform:`rotate(${o}deg)`,transform:`rotate(${o}deg)`}:void 0,x=A(u),C=y(x,2),w=C[0],T=C[1];return G.createElement(`span`,f({role:`img`,"aria-label":r.name},d,{ref:t,tabIndex:v,onClick:l,className:_}),G.createElement(B,{icon:r,primaryColor:w,secondaryColor:T,style:b}))}),J.displayName=`AntdIcon`,J.getTwoToneColor=U,J.setTwoToneColor=H})))()}export{Y as n,J as t};