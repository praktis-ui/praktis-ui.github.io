import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Modal-C1Lv7ERo.js";import{n as i}from"./iframe-r_k3QGfr.js";import{t as a,vc as o,wc as s}from"./icons-CxwqsfdL.js";import{c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./HeaderParts-DsUOqYlJ.js";import{n as _,t as v}from"./Header-C_KOwd6X.js";function y({logo:e=`setl-group`,withModuleName:t=!0,withMenu:n=!0,withActions:i=!0,withAppButton:a=!0,compactAccount:c=!1}){let[g,_]=(0,b.useState)(`objects`),[y,S]=(0,b.useState)(null),[C,w]=(0,b.useState)(!1);return(0,x.jsxs)(T,{children:[(0,x.jsx)(v,{logo:e===`нет`?void 0:e,moduleName:t?`Сервис КС`:void 0,onModuleClick:()=>S(`название модуля`),menu:n&&[(0,x.jsx)(f,{icon:(0,x.jsx)(o,{}),label:`Объекты`,active:g===`objects`,onClick:()=>_(`objects`)},`objects`),(0,x.jsx)(f,{icon:(0,x.jsx)(s,{}),label:`Задачи`,dot:`red`,active:g===`tasks`,onClick:()=>_(`tasks`)},`tasks`)],actions:i&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l,{label:`Загрузки`,icon:(0,x.jsx)(h,{}),status:`loading`,onClick:()=>S(`Загрузки`)}),(0,x.jsx)(l,{label:`Задачи`,icon:(0,x.jsx)(m,{}),count:`3`,onClick:()=>S(`Задачи`)}),(0,x.jsx)(l,{label:`Уведомления`,count:`99+`,countColor:`red`,onClick:()=>S(`Уведомления`)})]}),appButton:a&&(0,x.jsx)(p,{label:`Все сервисы`,onClick:()=>w(!0)}),account:(0,x.jsx)(d,{name:`Лаврентьев Александр`,job:`ООО “Сетл Тех”`,compact:c,menu:u,onMenuClick:e=>S(`кабинет → ${e}`)})}),(0,x.jsx)(`div`,{style:{marginTop:12,fontSize:12,color:`#7e7e7e`,fontFamily:`Inter, sans-serif`,minHeight:15},children:y?`Нажато: ${y}`:` `}),(0,x.jsx)(r,{size:`m`,side:!0,open:C,onClose:()=>w(!1),title:`Все сервисы`,children:(0,x.jsx)(`div`,{children:`Здесь спецмодалка, на которую ведёт круглая кнопка.`})})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=t(),a(),n(),_(),g(),c(),x=i(),S=`
Источник — Figma UI Kit «Практис»: **Header** (node 2377:25021) и «Компоненты шапка с меню
горизонтальным» (node 986:1967).

Три колонки: слева логотип и название модуля, по центру меню, справа кнопки и кабинет. Все части,
кроме кабинета, необязательные и могут быть все сразу.

| Проп | Что | Молекула |
|---|---|---|
| \`logo\` | логотип; бывает в боковом меню — тогда в шапке не нужен | Header_logo |
| \`moduleName\` | название модуля: с логотипом — кнопка, без — заголовок 18 | — |
| \`menu\` | пункты меню, разделители ставятся сами | **HeaderMenuItem** |
| \`actions\` | уведомления, задачи, «Загрузки», доп. кнопки | **HeaderButton** |
| \`appButton\` | единственная круглая кнопка — открывает спецмодалку, есть в каждом сервисе | **HeaderAppButton** |
| \`account\` | кабинет — есть всегда, открывает меню | **HeaderAccount** |

Молекулы по отдельности — в «UI Kit/Header/Части».
`,C=e=>({control:`boolean`,name:e,table:{category:`Слоты`}}),w={title:`UI Kit/Header/Header`,parameters:{layout:`fullscreen`,docs:{description:{component:S},story:{height:`400px`}}},decorators:[e=>(0,x.jsx)(`div`,{style:{minHeight:340},children:(0,x.jsx)(e,{})})],tags:[`autodocs`],argTypes:{logo:{control:`select`,options:[`нет`,`praktis`,`praktis-ru`,`setl-group`,`icona`],name:`логотип`,table:{category:`Слоты`}},withModuleName:C(`название модуля`),withMenu:C(`меню`),withActions:C(`кнопки (уведомления, задачи, загрузки)`),withAppButton:C(`круглая кнопка`),compactAccount:{control:`boolean`,name:`кабинет узкий (планшет)`}},args:{logo:`setl-group`,withModuleName:!0,withMenu:!0,withActions:!0,withAppButton:!0,compactAccount:!1}},T=({children:e})=>(0,x.jsx)(`div`,{style:{padding:24,background:`#f5f8fb`,minHeight:200,boxSizing:`border-box`},children:e}),E={parameters:{docs:{description:{story:`Части включаются в панели «Слоты». Всё живое: разделы переключаются, меню кабинета открывается, круглая кнопка открывает боковую модалку.`}}},render:e=>(0,x.jsx)(y,{...e})},D={name:`Логотип + название модуля (Type=Logo)`,render:()=>(0,x.jsx)(y,{withActions:!1,withAppButton:!1})},O={name:`Только название (Type=Name, логотип в боковом меню)`,render:()=>(0,x.jsx)(y,{logo:`нет`,withActions:!1,withAppButton:!1})},k={name:`Всё сразу`,render:()=>(0,x.jsx)(y,{})},A={name:`Минимум: только кабинет`,render:()=>(0,x.jsx)(y,{logo:`нет`,withModuleName:!1,withMenu:!1,withActions:!1,withAppButton:!1})},j={name:`Узкий кабинет (планшет)`,render:()=>(0,x.jsx)(y,{compactAccount:!0,withActions:!1})},M=[`Playground`,`WithLogo`,`NameOnly`,`Everything`,`Minimal`,`Tablet`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Части включаются в панели «Слоты». Всё живое: разделы переключаются, меню кабинета открывается, круглая кнопка открывает боковую модалку.'
      }
    }
  },
  render: args => <Live {...args} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Логотип + название модуля (Type=Logo)',
  render: () => <Live withActions={false} withAppButton={false} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Только название (Type=Name, логотип в боковом меню)',
  render: () => <Live logo="нет" withActions={false} withAppButton={false} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Всё сразу',
  render: () => <Live />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Минимум: только кабинет',
  render: () => <Live logo="нет" withModuleName={false} withMenu={false} withActions={false} withAppButton={false} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Узкий кабинет (планшет)',
  render: () => <Live compactAccount withActions={false} />
}`,...j.parameters?.docs?.source}}}})))()}N();export{k as Everything,A as Minimal,O as NameOnly,E as Playground,j as Tablet,D as WithLogo,M as __namedExportsOrder,w as default};