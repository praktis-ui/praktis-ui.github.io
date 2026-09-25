import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{P as r,Sa as i,Sc as a,Xa as o,fu as s,gc as c,it as l,t as u,us as d}from"./icons-B1LEmBjt.js";import{i as f,n as p,r as m,t as h}from"./SideMenu-4OWreiYR.js";function g({collapsed:e=!1,multiline:t=!1}){let[n,r]=(0,_.useState)(`accr-current`);return(0,v.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`,fontFamily:`Inter, sans-serif`},children:[(0,v.jsx)(`div`,{style:{width:e?40:268,padding:16,background:`#ffffff`,borderRadius:12,boxShadow:`0 0 0 1px #eef3f9`},children:(0,v.jsx)(h,{items:x,selectedKey:n,onSelect:r,defaultOpenKeys:[`accr`],collapsed:e,multiline:t})}),(0,v.jsxs)(`span`,{style:{fontSize:12,color:`#7e7e7e`},children:[`Текущий раздел: `,n]})]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{_=t(),u(),p(),f(),v=n(),y=`
Источник — Figma UI Kit «Практис»: **Menu__items** (node 2048:1916) из «Меню для Практис»
(node 2048:1915).

**SideMenu** — пункты бокового меню на antd Menu (inline): выбор, раскрытие групп с анимацией,
клавиатура. Каждый пункт рисует **SideMenuItem** — его можно ставить и отдельно.

| Проп | Что | В Figma |
|---|---|---|
| \`items\` | разделы; у раздела с \`children\` — группа | Type = Main / Groupe / Сhild |
| \`selectedKey\` | текущий раздел | Status = Selected |
| \`disabled\` у пункта | недоступен | Status = Disabled |
| \`count\` у пункта | счётчик — **Bulb** кита; в свёрнутом — точка на иконке | Bulb |
| \`collapsed\` | свёрнутое меню — только иконки, 40×46 | Turn = On |
| \`multiline\` | текст в несколько строк; пункт растёт, не меньше 46. Выключен — одна строка с отточием, 46. Можно задать и у отдельного пункта | — |

**Логика, которую развели с макетом:**
- **раскрыта группа и выбрана — разные вещи.** Стрелка показывает раскрытие (вверх — открыта).
  В макете «Groupe Selected» — это синяя группа со стрелкой вверх, а в примере раскрытой группы
  стрелка вниз;
- **группа подсвечена, когда внутри выбранный раздел, но группа закрыта.** Открыта — подсвечен
  сам раздел;
- **в свёрнутом меню раскрытые группы остаются раскрытыми** — вместо их пунктов точки, как в макете.
  Если бы группы закрывались, при раскрытии панели наведением всё под ними прыгало бы.
`,b=e=>(0,v.jsx)(e,{size:16}),x=[{key:`home`,label:`Главная`,icon:b(i)},{key:`accr`,label:`Аккредитации`,icon:b(s),count:3,children:[{key:`accr-new`,label:`Заявки на аккредитацию`,count:3},{key:`accr-current`,label:`Текущие аккредитации`},{key:`accr-archive`,label:`Архив`}]},{key:`contracts`,label:`Договоры`,icon:b(d)},{key:`objects`,label:`ЖК «Самый лучший совершенно невероятный жилой комплекс»`,icon:b(a)},{key:`tenders`,label:`Тендеры`,icon:b(l),count:`99+`},{key:`docs`,label:`Документы`,icon:b(o),children:[{key:`docs-ks`,label:`Акты выполненных работ по форме КС-2 и справки КС-3`},{key:`docs-other`,label:`Прочие документы`}]},{key:`plan`,label:`Планирование`,icon:b(c),disabled:!0},{key:`staff`,label:`Сотрудники`,icon:b(r)}],S={title:`UI Kit/Навигация/SideMenu/SideMenu`,id:`ui-kit-sidemenu-sidemenu`,parameters:{layout:`padded`,docs:{description:{component:y}}},tags:[`autodocs`],argTypes:{collapsed:{control:`boolean`,name:`свёрнуто (только иконки)`},multiline:{control:`boolean`,name:`текст в несколько строк`}},args:{collapsed:!1,multiline:!1}},C={parameters:{docs:{description:{story:`Клик — раздел становится текущим, группа раскрывается и сворачивается. Закрой «Аккредитации» — группа подсветится, потому что текущий раздел внутри.`}}},render:e=>(0,v.jsx)(g,{...e})},w={name:`В одну строку / в несколько`,parameters:{docs:{description:{story:`Слева — одна строка с отточием, пункт 46. Справа — перенос, длинный пункт растёт.`}}},render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`},children:[(0,v.jsx)(g,{}),(0,v.jsx)(g,{multiline:!0})]})},T={name:`Свёрнутое меню`,parameters:{docs:{description:{story:`Только иконки, 40×46. Счётчик — точкой на иконке. У раскрытой группы — точки её пунктов, текущий подсвечен. Закрой группу — подсветится она.`}}},render:()=>(0,v.jsx)(g,{collapsed:!0})},E=[`group`,`main`,`child`],D=[`default`,`hover`,`selected`,`disabled`],O={name:`SideMenuItem: все варианты`,parameters:{docs:{description:{story:`Как в компоненте макета: типы × состояния, раскрытое и свёрнутое. Ховер показан принудительно; вживую — от мыши.`}}},render:()=>(0,v.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`80px repeat(3, 268px 40px)`,gap:`12px 16px`,alignItems:`center`,fontFamily:`Inter, sans-serif`},children:[(0,v.jsx)(`span`,{}),E.flatMap(e=>[(0,v.jsx)(`span`,{style:{fontSize:12,color:`#7e7e7e`},children:e},e),(0,v.jsx)(`span`,{},e+`c`)]),D.map(e=>(0,v.jsxs)(`div`,{style:{display:`contents`},children:[(0,v.jsx)(`span`,{style:{fontSize:12,color:`#7e7e7e`},children:e}),E.flatMap(t=>[!1,!0].map(n=>(0,v.jsx)(m,{type:t,label:`Аккредитации`,icon:b(s),collapsed:n,selected:e===`selected`,disabled:e===`disabled`,forceHover:e===`hover`,open:t===`group`&&e===`selected`},t+n)))]},e))]})},k={name:`SideMenuItem: счётчик`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,v.jsx)(`div`,{style:{width:268},children:(0,v.jsx)(m,{label:`Тендеры`,icon:b(l),count:`99+`})}),(0,v.jsx)(m,{label:`Тендеры`,icon:b(l),count:`99+`,collapsed:!0})]})},A=[`Playground`,`Multiline`,`Collapsed`,`ItemStates`,`ItemCount`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Клик — раздел становится текущим, группа раскрывается и сворачивается. Закрой «Аккредитации» — группа подсветится, потому что текущий раздел внутри.'
      }
    }
  },
  render: args => <Live {...args} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'В одну строку / в несколько',
  parameters: {
    docs: {
      description: {
        story: 'Слева — одна строка с отточием, пункт 46. Справа — перенос, длинный пункт растёт.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      <Live />
      <Live multiline />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Свёрнутое меню',
  parameters: {
    docs: {
      description: {
        story: 'Только иконки, 40×46. Счётчик — точкой на иконке. У раскрытой группы — точки её пунктов, текущий подсвечен. Закрой группу — подсветится она.'
      }
    }
  },
  render: () => <Live collapsed />
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'SideMenuItem: все варианты',
  parameters: {
    docs: {
      description: {
        story: 'Как в компоненте макета: типы × состояния, раскрытое и свёрнутое. Ховер показан принудительно; вживую — от мыши.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '80px repeat(3, 268px 40px)',
    gap: '12px 16px',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif'
  }}>
      <span />
      {TYPES.flatMap(t => [<span key={t} style={{
      fontSize: 12,
      color: '#7e7e7e'
    }}>{t}</span>, <span key={t + 'c'} />])}
      {STATES.map(st => <div key={st} style={{
      display: 'contents'
    }}>
          <span style={{
        fontSize: 12,
        color: '#7e7e7e'
      }}>{st}</span>
          {TYPES.flatMap(t => [false, true].map(collapsed => <SideMenuItem key={t + collapsed} type={t} label="Аккредитации" icon={I(IconAccreditations)} collapsed={collapsed} selected={st === 'selected'} disabled={st === 'disabled'} forceHover={st === 'hover'} open={t === 'group' && st === 'selected'} />))}
        </div>)}
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'SideMenuItem: счётчик',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <div style={{
      width: 268
    }}>
        <SideMenuItem label="Тендеры" icon={I(IconTenders)} count="99+" />
      </div>
      <SideMenuItem label="Тендеры" icon={I(IconTenders)} count="99+" collapsed />
    </div>
}`,...k.parameters?.docs?.source}}}})))()}j();export{T as Collapsed,k as ItemCount,O as ItemStates,w as Multiline,C as Playground,A as __namedExportsOrder,S as default};