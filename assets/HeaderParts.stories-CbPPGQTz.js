import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-r_k3QGfr.js";import{t as r,vc as i,wc as a}from"./icons-CxwqsfdL.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./HeaderParts-DsUOqYlJ.js";function g(){let[e,t]=(0,y.useState)(`objects`);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,b.jsxs)(S,{label:`клик — текущий`,children:[(0,b.jsx)(d,{icon:(0,b.jsx)(i,{}),label:`Объекты`,active:e===`objects`,onClick:()=>t(`objects`)}),(0,b.jsx)(d,{icon:(0,b.jsx)(a,{}),label:`Задачи`,active:e===`tasks`,onClick:()=>t(`tasks`)}),(0,b.jsx)(d,{label:`Без иконки`,active:e===`plain`,onClick:()=>t(`plain`)})]}),(0,b.jsxs)(S,{label:`точки-метки`,children:[(0,b.jsx)(d,{icon:(0,b.jsx)(i,{}),label:`Есть новое`,dot:`green`,active:e===`new`,onClick:()=>t(`new`)}),(0,b.jsx)(d,{icon:(0,b.jsx)(a,{}),label:`Нужно действие`,dot:`red`,active:e===`todo`,onClick:()=>t(`todo`)})]}),(0,b.jsxs)(S,{label:`счётчик`,children:[(0,b.jsx)(d,{icon:(0,b.jsx)(i,{}),label:`Заявки`,count:3,active:e===`req`,onClick:()=>t(`req`)}),(0,b.jsx)(d,{icon:(0,b.jsx)(a,{}),label:`Тендеры`,count:`99+`,active:e===`tenders`,onClick:()=>t(`tenders`)})]})]})}function _(){let[e,t]=(0,y.useState)(null),n=e=>()=>t(e);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,b.jsxs)(S,{label:`без подписи`,children:[(0,b.jsx)(c,{label:`Уведомления`,onClick:n(`пустая`)}),(0,b.jsx)(c,{label:`Уведомления`,count:`99+`,onClick:n(`счётчик зелёный`)}),(0,b.jsx)(c,{label:`Уведомления`,count:`99+`,countColor:`red`,onClick:n(`счётчик красный`)})]}),(0,b.jsxs)(S,{label:`с подписью`,children:[(0,b.jsx)(c,{label:`Уведомления`,showLabel:!0,onClick:n(`пустая с подписью`)}),(0,b.jsx)(c,{label:`Уведомления`,showLabel:!0,count:`99+`,onClick:n(`зелёный с подписью`)}),(0,b.jsx)(c,{label:`Уведомления`,showLabel:!0,count:`99+`,countColor:`red`,onClick:n(`красный с подписью`)})]}),(0,b.jsxs)(S,{label:`задачи`,children:[(0,b.jsx)(c,{label:`Задачи`,icon:(0,b.jsx)(p,{}),onClick:n(`задачи`)}),(0,b.jsx)(c,{label:`Задачи`,icon:(0,b.jsx)(p,{}),count:`3`,onClick:n(`задачи со счётчиком`)}),(0,b.jsx)(c,{label:`Задачи`,showLabel:!0,icon:(0,b.jsx)(p,{}),count:`3`,onClick:n(`задачи с подписью`)})]}),(0,b.jsxs)(S,{label:`«Загрузки»`,children:[(0,b.jsx)(c,{label:`Загрузки`,icon:(0,b.jsx)(m,{}),status:`loading`,onClick:n(`загрузка без подписи`)}),(0,b.jsx)(c,{label:`Загрузки`,showLabel:!0,icon:(0,b.jsx)(m,{}),status:`loading`,onClick:n(`загрузка`)}),(0,b.jsx)(c,{label:`Загрузки`,showLabel:!0,icon:(0,b.jsx)(m,{}),status:`error`,onClick:n(`ошибка загрузки`)})]}),(0,b.jsx)(`span`,{style:{fontSize:12,color:`#7e7e7e`,fontFamily:`Inter, sans-serif`,minHeight:15},children:e?`Нажато: ${e}`:` `})]})}function v(){let[e,t]=(0,y.useState)(null);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,minHeight:360},children:[(0,b.jsxs)(S,{label:`обычный / длинное имя / узкий`,children:[(0,b.jsx)(u,{name:`Иванов Антон`,job:`ООО “Сетл Тех”`,menu:l,onMenuClick:t}),(0,b.jsx)(u,{name:`Константинопольский Константин`,job:`ООО “Охушки эти воробушки”`,menu:l,onMenuClick:t}),(0,b.jsx)(u,{name:`Иванов Антон`,compact:!0,menu:l,onMenuClick:t})]}),(0,b.jsx)(`span`,{style:{fontSize:12,color:`#7e7e7e`,fontFamily:`Inter, sans-serif`},children:e?`Выбрано в меню: ${e}`:` `})]})}var y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{y=t(),r(),h(),s(),b=n(),x={title:`UI Kit/Header/Части`,parameters:{layout:`padded`,docs:{description:{component:`
Молекулы шапки — живут только в ней. Источник — Figma UI Kit «Практис», node 986:1967.

- **HeaderMenuItem** — пункт меню: иконка 20 + текст 16; наведение — голубая полоска снизу,
  текущий раздел — синяя; точка-метка — **Bulb** кита: зелёная «есть новое», красная «нужно действие»;
  счётчик (\`count\`) — тот же Bulb, синий, после текста (как в боковом меню).
- **HeaderButton** — уведомления, задачи, «Загрузки», доп. кнопки: 49×49, с подписью — шире;
  счётчик зелёный или красный; у «Загрузок» — крутилка и ошибка.
- **HeaderAppButton** — единственная круглая кнопка, привлекает внимание, открывает спецмодалку.
- **HeaderAccount** — кабинет: аватар, имя, организация; открывает меню (DropdownMenu кита).
  Узкий вариант (планшет) — только аватар.
- **HeaderLogo** — Praktis, Praktis RU, Setl Group, Айкона; в тёмной теме сама берёт тёмную версию из макета.
`},story:{height:`400px`}}},decorators:[e=>(0,b.jsx)(`div`,{style:{minHeight:340},children:(0,b.jsx)(e,{})})],tags:[`autodocs`]},S=({children:e,label:t})=>(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`160px 1fr`,alignItems:`center`,gap:16,fontFamily:`Inter, sans-serif`},children:[(0,b.jsx)(`span`,{style:{fontSize:12,color:`#7e7e7e`},children:t}),(0,b.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:e})]}),C={name:`HeaderMenuItem`,parameters:{docs:{description:{story:`Клик — пункт становится текущим. Наведение — голубая полоска.`}}},render:()=>(0,b.jsx)(g,{})},w={name:`HeaderButton`,parameters:{docs:{description:{story:`Пустая, со счётчиком «есть новое» (зелёный) и «важное» (красный); с подписью и без; «Загрузки» — идёт загрузка и ошибка. Под кнопками — какая нажата.`}}},render:()=>(0,b.jsx)(_,{})},T={name:`HeaderAppButton`,parameters:{docs:{description:{story:`Наведение и нажатие — голубой темнее. Неактивная — серая.`}}},render:()=>(0,b.jsxs)(S,{label:`обычная / неактивная`,children:[(0,b.jsx)(f,{label:`Все сервисы`}),(0,b.jsx)(f,{label:`Все сервисы`,disabled:!0})]})},E={name:`HeaderAccount`,parameters:{docs:{description:{story:`Клик — меню кабинета. Длинное имя обрезается отточием. Узкий вариант — только аватар.`}}},render:()=>(0,b.jsx)(v,{})},D={name:`HeaderLogo`,parameters:{docs:{description:{story:`Переключи тему в тулбаре — логотипы сменятся на тёмную версию.`}}},render:()=>(0,b.jsxs)(S,{label:`praktis / praktis-ru / setl-group / icona`,children:[(0,b.jsx)(o,{type:`praktis`}),(0,b.jsx)(o,{type:`praktis-ru`}),(0,b.jsx)(o,{type:`setl-group`}),(0,b.jsx)(o,{type:`icona`})]})},O=[`MenuItems`,`Buttons`,`AppButton`,`Account`,`Logos`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'HeaderMenuItem',
  parameters: {
    docs: {
      description: {
        story: 'Клик — пункт становится текущим. Наведение — голубая полоска.'
      }
    }
  },
  render: () => <MenuDemo />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'HeaderButton',
  parameters: {
    docs: {
      description: {
        story: 'Пустая, со счётчиком «есть новое» (зелёный) и «важное» (красный); с подписью и без; «Загрузки» — идёт загрузка и ошибка. Под кнопками — какая нажата.'
      }
    }
  },
  render: () => <ButtonsDemo />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'HeaderAppButton',
  parameters: {
    docs: {
      description: {
        story: 'Наведение и нажатие — голубой темнее. Неактивная — серая.'
      }
    }
  },
  render: () => <Row label="обычная / неактивная">
      <HeaderAppButton label="Все сервисы" />
      <HeaderAppButton label="Все сервисы" disabled />
    </Row>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'HeaderAccount',
  parameters: {
    docs: {
      description: {
        story: 'Клик — меню кабинета. Длинное имя обрезается отточием. Узкий вариант — только аватар.'
      }
    }
  },
  render: () => <AccountDemo />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'HeaderLogo',
  parameters: {
    docs: {
      description: {
        story: 'Переключи тему в тулбаре — логотипы сменятся на тёмную версию.'
      }
    }
  },
  render: () => <Row label="praktis / praktis-ru / setl-group / icona">
      <HeaderLogo type="praktis" />
      <HeaderLogo type="praktis-ru" />
      <HeaderLogo type="setl-group" />
      <HeaderLogo type="icona" />
    </Row>
}`,...D.parameters?.docs?.source}}}})))()}k();export{E as Account,T as AppButton,w as Buttons,D as Logos,C as MenuItems,O as __namedExportsOrder,x as default};