import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Modal-BKzYaljs.js";import{l as i,n as a}from"./iframe-CvEwutAq.js";import{n as o,t as s}from"./Button-CAqVpk3e.js";import{Ja as c,Js as l,So as u,ba as d,bn as f,cs as p,ct as m,cu as h,fc as g,gc as _,nt as v,t as y}from"./icons-BmsQWa6t.js";import{l as b,u as x}from"./HeaderParts-BBNGXDjd.js";import{n as S,t as C}from"./DropdownMenuItem-C2PARjlA.js";import{n as w,t as T}from"./SideBar-C1MyrCvX.js";function E({children:e,page:t}){return(0,j.jsxs)(`div`,{style:{display:`flex`,width:960,height:680,overflow:`hidden`,borderRadius:12,background:`#f5f8fb`,boxShadow:`0 0 0 1px #eef3f9`,fontFamily:`Inter, sans-serif`},children:[e,(0,j.jsxs)(`main`,{style:{flex:1,minWidth:0,padding:24,display:`flex`,flexDirection:`column`,gap:16},children:[(0,j.jsx)(`div`,{style:{fontSize:20,fontWeight:500,color:`#41484a`},children:t}),[0,1,2].map(e=>(0,j.jsx)(`div`,{style:{height:120,borderRadius:12,background:`#ffffff`}},e))]})]})}function D({items:e=P,...t}){let{logo:n=`setl-group`,title:r=``,defaultCollapsed:i=!1,multiline:a=!1,withFooter:o=!0}=t,[s,c]=(0,A.useState)(`accr-new`);return(0,j.jsx)(E,{page:L[s],children:(0,j.jsx)(T,{logo:n===`нет`?void 0:n,title:r||void 0,items:e,footerItems:o?I:void 0,selectedKey:s,onSelect:c,defaultOpenKeys:[`accr`],defaultCollapsed:i,multiline:a},String(i))})}function O({children:e}){return(0,j.jsx)(`div`,{style:{position:`relative`,width:360,height:740,overflow:`hidden`,borderRadius:24,boxShadow:`0 0 0 1px #dddddd`,background:`#f5f8fb`,fontFamily:`Inter, sans-serif`},children:e})}function k({logo:e=`setl-group`,title:t=``}){let[n,i]=(0,A.useState)(!0),[a,o]=(0,A.useState)(!1),[c,l]=(0,A.useState)(`accr-new`);return(0,j.jsxs)(O,{children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:16},children:[(0,j.jsx)(s,{variant:`secondary`,size:`small`,icon:(0,j.jsx)(_,{size:14}),"aria-label":`Открыть меню`,onClick:()=>i(!0)}),(0,j.jsx)(`span`,{style:{fontSize:16,fontWeight:500,color:`#41484a`},children:L[c]})]}),(0,j.jsx)(T,{device:`mob`,open:n,onClose:()=>i(!1),getContainer:!1,logo:e===`нет`?void 0:e,title:t||void 0,items:P,footerItems:I,selectedKey:c,onSelect:e=>{l(e),i(!1)},defaultOpenKeys:[`accr`],account:{name:`Иванов Антон`,job:`ООО “Сетл Тех”`,onClick:()=>o(!0)}}),(0,j.jsx)(r,{device:`mob`,open:a,onClose:()=>o(!1),getContainer:!1,title:`Иванов Антон`,description:`ООО “Сетл Тех”`,closable:!0,children:(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`},children:U.map(e=>(0,j.jsx)(C,{label:e.label,description:e.description,icon:e.icon,role:`button`,tabIndex:0,onClick:()=>o(!1)},e.key))})})]})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{A=t(),y(),i(),o(),S(),x(),n(),w(),j=a(),M=`
Источник — Figma UI Kit «Практис»: «Меню для Практис» (node 2048:1915) — Menu: Opened, Menu: Closed
и мобильное Menu.

**SideBar** — боковая панель целиком: логотип и/или название кабинета, кнопка со стрелкой, пункты
(**SideMenu**) и нижние пункты под чертой.

| Проп | Что |
|---|---|
| \`logo\` | логотип — **HeaderLogo** кита, тот же, что в шапке: Praktis / Практис / Setl Group / Айкона |
| \`title\` | название кабинета («Личный кабинет контрагента») — вместо логотипа или рядом |
| \`items\` | пункты меню — как у SideMenu |
| \`footerItems\` | нижние пункты под чертой (Техподдержка) |
| \`collapsed\` | свёрнута. Не передано — панель помнит сама |
| \`device="mob"\` | мобильная: \`open\`, \`onClose\`, \`account\` |

**Как работает (правила макета):**
- раскрыта — 300, свёрнута — 72, только иконки. **Стрелка** сворачивает и закрепляет обратно;
- **свёрнутая раскрывается при наведении поверх контента** — место на странице остаётся 72, контент
  не сдвигается. Мышь ушла — снова свёрнута. И так до следующего нажатия на стрелку. С клавиатуры —
  так же, когда фокус на пункте;
- **нижние пункты зафиксированы внизу меню:** пунктов мало — стоят сразу под чертой; много —
  основные прокручиваются, нижние остаются на месте;
- **активный раздел подсвечен всегда** — выбор общий для основных и нижних пунктов;
- высота — вся высота места, куда панель поставили (обычно экран).

**Мобильная:** выезжает слева на весь экран, справа сверху крестик, внизу плашка кабинета —
нажатие открывает шторку с меню кабинета.
`,N=e=>(0,j.jsx)(e,{size:16}),P=[{key:`home`,label:`Главная`,icon:N(d)},{key:`accr`,label:`Аккредитации`,icon:N(h),children:[{key:`accr-new`,label:`Заявки на аккредитацию`,count:3},{key:`accr-current`,label:`Текущие аккредитации`}]},{key:`tenders`,label:`Тендеры`,icon:N(v)},{key:`staff`,label:`Сотрудники`,icon:N(u)},{key:`rating`,label:`Оценка производства`,icon:N(l)},{key:`resources`,label:`Ресурсы`,icon:N(f)}],F=[...P,{key:`contracts`,label:`Договоры`,icon:N(p)},{key:`docs`,label:`Документы`,icon:N(c),children:[{key:`docs-ks`,label:`Акты КС-2 и справки КС-3`},{key:`docs-other`,label:`Прочие документы`}]},{key:`plan`,label:`Планирование`,icon:N(g)},{key:`archive`,label:`Архив`,icon:N(c)}],I=[{key:`support`,label:`Техподдержка`,icon:N(m)}],L=Object.fromEntries([...F,...I].flatMap(e=>[[e.key,String(e.label)],...(e.children??[]).map(e=>[e.key,String(e.label)])])),R={title:`UI Kit/SideMenu/SideBar`,parameters:{layout:`padded`,docs:{description:{component:M}}},tags:[`autodocs`],argTypes:{logo:{control:`select`,options:[`setl-group`,`praktis`,`praktis-ru`,`icona`,`нет`],name:`логотип`},title:{control:`text`,name:`название кабинета`},defaultCollapsed:{control:`boolean`,name:`свёрнута при открытии страницы`},multiline:{control:`boolean`,name:`текст пунктов в несколько строк`},withFooter:{control:`boolean`,name:`нижние пункты (Техподдержка)`,table:{category:`Слоты`}}},args:{logo:`setl-group`,title:``,defaultCollapsed:!1,multiline:!1,withFooter:!0}},z={parameters:{docs:{description:{story:`Всё живое: пункт — открывает раздел (заголовок справа меняется), стрелка — сворачивает. Сверни и наведи мышь на панель — раскроется поверх контента.`}}},render:e=>(0,j.jsx)(D,{...e})},B={name:`Свёрнутая: раскрытие по наведению`,parameters:{docs:{description:{story:`Свёрнута — 72, только иконки. Наведи мышь — раскроется поверх контента, убери — свернётся. Стрелка закрепляет раскрытой.`}}},render:()=>(0,j.jsx)(D,{defaultCollapsed:!0})},V={name:`Название кабинета вместо логотипа`,parameters:{docs:{description:{story:`Как в макете «Личный кабинет контрагента»: вместо логотипа — название.`}}},render:()=>(0,j.jsx)(D,{logo:`нет`,title:`Личный кабинет контрагента`})},H={name:`Много пунктов`,parameters:{docs:{description:{story:`Пункты не помещаются — прокручиваются, Техподдержка остаётся внизу на месте.`}}},render:()=>(0,j.jsx)(D,{items:F})},U=b.filter(e=>!(`type`in e)),W={name:`Мобильная`,parameters:{docs:{description:{story:`Выезжает слева на весь экран. Крестик — закрыть, выбор раздела — тоже закрывает. Плашка кабинета внизу открывает шторку с меню кабинета. Меню — кнопка слева вверху.`},story:{height:`780px`}}},render:e=>(0,j.jsx)(k,{...e})},G=[`Playground`,`Collapsed`,`WithTitle`,`ManyItems`,`Mobile`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Всё живое: пункт — открывает раздел (заголовок справа меняется), стрелка — сворачивает. Сверни и наведи мышь на панель — раскроется поверх контента.'
      }
    }
  },
  render: args => <Live {...args} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Свёрнутая: раскрытие по наведению',
  parameters: {
    docs: {
      description: {
        story: 'Свёрнута — 72, только иконки. Наведи мышь — раскроется поверх контента, убери — свернётся. Стрелка закрепляет раскрытой.'
      }
    }
  },
  render: () => <Live defaultCollapsed />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Название кабинета вместо логотипа',
  parameters: {
    docs: {
      description: {
        story: 'Как в макете «Личный кабинет контрагента»: вместо логотипа — название.'
      }
    }
  },
  render: () => <Live logo="нет" title="Личный кабинет контрагента" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Много пунктов',
  parameters: {
    docs: {
      description: {
        story: 'Пункты не помещаются — прокручиваются, Техподдержка остаётся внизу на месте.'
      }
    }
  },
  render: () => <Live items={MANY_ITEMS} />
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Мобильная',
  parameters: {
    docs: {
      description: {
        story: 'Выезжает слева на весь экран. Крестик — закрыть, выбор раздела — тоже закрывает. Плашка кабинета внизу открывает шторку с меню кабинета. Меню — кнопка слева вверху.'
      },
      story: {
        height: '780px'
      }
    }
  },
  render: args => <MobileLive {...args} />
}`,...W.parameters?.docs?.source}}}})))()}K();export{B as Collapsed,H as ManyItems,W as Mobile,z as Playground,V as WithTitle,G as __namedExportsOrder,R as default};