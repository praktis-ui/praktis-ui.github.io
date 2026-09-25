import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Bulb-z3Ojhia7.js";import{n as i}from"./iframe-r_k3QGfr.js";import{n as a,t as o}from"./Button-Dnmtfa_s.js";import{fo as s,t as c}from"./icons-CxwqsfdL.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l=t(),a(),c(),n(),u=i(),d="\nИсточник — Figma UI Kit «Практис»: **Bulb** (node 1597:3612). Заменил **Badge / Сount** — компоненты\nдублировали друг друга, старый удалён (решение Анастасии 2026-09-24).\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `kind` | `dot` — точка 8px · `count` — пилюля от 16×16, текст 10/600 белый · `text` — цветной текст 10/600 | Type = Shape / ShapeText / Text |\n| `size` | у count: `default` — 16, текст 10 · `small` — 12, текст 8 (для тегирования папок) | Type = ShapeText / Mob ShapeText |\n| `color` | green · red · blue · orange (шкала 600) | Color |\n| `ring` | светлое кольцо 1px — по умолчанию только на элементе (`children`) | — (добавлено) |\n\n**Кольцо.** На элементе (иконка, бабл) точка получает светлое кольцо — так она не сливается с краем.\nРядом с текстом кольца нет: на серой строке оно выглядело бы белым ореолом.\n\n**С `children`** значок встаёт в угол элемента, **без** — стоит сам, например рядом с подписью.\nПоявление и прокрутка цифр при смене числа — анимация antd.\n\n\n**Контраст:** белые цифры на цветах 600 — от 2.0:1 (green, orange) до 3.0:1 (red); для мелкого текста\nнужно 4.5:1. Точки без текста это не касается.\n",f=[`green`,`red`,`blue`,`orange`],p={display:`flex`,gap:24,alignItems:`center`,fontFamily:`Inter, sans-serif`,fontSize:14},m={title:`UI Kit/Bulb`,component:r,parameters:{layout:`padded`,docs:{description:{component:d}}},tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:[`dot`,`count`,`text`]},color:{control:`inline-radio`,options:f},count:{control:`text`},ring:{control:`boolean`},size:{control:`inline-radio`,options:[`default`,`small`]},children:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}}},args:{kind:`count`,color:`green`,count:`99+`}},h={},g={name:`Типы × цвета`,render:()=>(0,u.jsxs)(`div`,{style:{...p,display:`grid`,gridTemplateColumns:`repeat(5, max-content)`,gap:`16px 40px`},children:[(0,u.jsx)(`span`,{style:{opacity:.6,fontSize:12},children:`dot`}),(0,u.jsx)(`span`,{style:{opacity:.6,fontSize:12},children:`text`}),(0,u.jsx)(`span`,{style:{opacity:.6,fontSize:12},children:`count`}),(0,u.jsx)(`span`,{style:{opacity:.6,fontSize:12},children:`count small`}),(0,u.jsx)(`span`,{}),f.map(e=>(0,u.jsxs)(`div`,{style:{display:`contents`},children:[(0,u.jsx)(r,{kind:`dot`,color:e}),(0,u.jsx)(r,{kind:`text`,color:e,count:`99+`}),(0,u.jsx)(r,{kind:`count`,color:e,count:`99+`}),(0,u.jsx)(r,{kind:`count`,size:`small`,color:e,count:`99+`}),(0,u.jsx)(`span`,{style:{opacity:.6},children:e})]},e))]})},_=e=>({background:e,padding:`10px 14px`,borderRadius:8,display:`flex`,gap:10,alignItems:`center`}),v={name:`Светлое кольцо`,parameters:{docs:{description:{story:"Кольцо 1px (border/primary-inverse) отделяет значок от того, на чём он лежит. Рядом с текстом — без кольца, на элементе — с кольцом. По умолчанию кольцо включается само, если есть `children`; вручную — `ring`."}}},render:()=>(0,u.jsxs)(`div`,{style:{...p,display:`grid`,gridTemplateColumns:`max-content repeat(3, max-content)`,gap:`14px 18px`},children:[(0,u.jsx)(`span`,{}),(0,u.jsx)(`span`,{style:{opacity:.6,fontSize:12},children:`белый фон`}),(0,u.jsx)(`span`,{style:{opacity:.6,fontSize:12},children:`серый фон #f5f8fb`}),(0,u.jsx)(`span`,{style:{opacity:.6,fontSize:12},children:`на бабле #e0ebfe`}),(0,u.jsx)(`span`,{children:`Рядом с текстом — без кольца`}),[`#ffffff`,`#f5f8fb`,`#e0ebfe`].map(e=>(0,u.jsxs)(`div`,{style:_(e),children:[`Раздел проекта `,(0,u.jsx)(r,{color:`green`}),` `,(0,u.jsx)(r,{color:`blue`})]},e)),(0,u.jsx)(`span`,{children:`На элементе — с кольцом`}),[`#ffffff`,`#f5f8fb`,`#e0ebfe`].map(e=>(0,u.jsxs)(`div`,{style:_(e),children:[(0,u.jsx)(r,{color:`green`,children:(0,u.jsx)(s,{size:24})}),(0,u.jsx)(r,{kind:`count`,color:`red`,count:3,children:(0,u.jsx)(s,{size:24})}),(0,u.jsx)(r,{color:`orange`,ring:!0})]},e))]})},y={name:`На элементе`,parameters:{docs:{description:{story:`Нажмите +1 / −1 — antd анимирует смену числа.`}}},render:function(){let[e,t]=(0,l.useState)(3);return(0,u.jsxs)(`div`,{style:p,children:[(0,u.jsx)(r,{color:`blue`,children:(0,u.jsx)(s,{size:24})}),(0,u.jsx)(r,{kind:`count`,color:`red`,count:e,children:(0,u.jsx)(s,{size:24})}),(0,u.jsx)(o,{size:`small`,variant:`secondary`,onClick:()=>t(e+1),children:`+1`}),(0,u.jsx)(o,{size:`small`,variant:`secondary`,onClick:()=>t(Math.max(0,e-1)),children:`−1`})]})}},b={name:`Мелкая пилюля — тегирование папок`,parameters:{docs:{description:{story:'`size="small"`: min 12, текст 8. В макете — Mob ShapeText, в вебе нужен для тегирования папок.'}}},render:()=>(0,u.jsx)(`div`,{style:{...p,flexDirection:`column`,alignItems:`flex-start`,gap:12},children:[[`Проектная документация`,12,`blue`],[`Исполнительная`,3,`green`],[`Замечания`,7,`red`],[`На согласовании`,99,`orange`]].map(([e,t,n])=>(0,u.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[`📁 `,e,` `,(0,u.jsx)(r,{kind:`count`,size:`small`,color:n,count:t})]},e))})},x=[`Playground`,`Kinds`,`Ring`,`OnElement`,`FolderTags`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Типы × цвета',
  render: () => <div style={{
    ...row,
    display: 'grid',
    gridTemplateColumns: 'repeat(5, max-content)',
    gap: '16px 40px'
  }}>
      <span style={{
      opacity: 0.6,
      fontSize: 12
    }}>dot</span>
      <span style={{
      opacity: 0.6,
      fontSize: 12
    }}>text</span>
      <span style={{
      opacity: 0.6,
      fontSize: 12
    }}>count</span>
      <span style={{
      opacity: 0.6,
      fontSize: 12
    }}>count small</span>
      <span />
      {COLORS.map(c => <div key={c} style={{
      display: 'contents'
    }}>
          <Bulb kind="dot" color={c} />
          <Bulb kind="text" color={c} count="99+" />
          <Bulb kind="count" color={c} count="99+" />
          <Bulb kind="count" size="small" color={c} count="99+" />
          <span style={{
        opacity: 0.6
      }}>{c}</span>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Светлое кольцо',
  parameters: {
    docs: {
      description: {
        story: 'Кольцо 1px (border/primary-inverse) отделяет значок от того, на чём он лежит. Рядом с текстом — без кольца, ' + 'на элементе — с кольцом. По умолчанию кольцо включается само, если есть \`children\`; вручную — \`ring\`.'
      }
    }
  },
  render: () => <div style={{
    ...row,
    display: 'grid',
    gridTemplateColumns: 'max-content repeat(3, max-content)',
    gap: '14px 18px'
  }}>
      <span />
      <span style={{
      opacity: 0.6,
      fontSize: 12
    }}>белый фон</span>
      <span style={{
      opacity: 0.6,
      fontSize: 12
    }}>серый фон #f5f8fb</span>
      <span style={{
      opacity: 0.6,
      fontSize: 12
    }}>на бабле #e0ebfe</span>
      <span>Рядом с текстом — без кольца</span>
      {['#ffffff', '#f5f8fb', '#e0ebfe'].map(bg => <div key={bg} style={pad(bg)}>Раздел проекта <Bulb color="green" /> <Bulb color="blue" /></div>)}
      <span>На элементе — с кольцом</span>
      {['#ffffff', '#f5f8fb', '#e0ebfe'].map(bg => <div key={bg} style={pad(bg)}>
          <Bulb color="green"><IconEye size={24} /></Bulb>
          <Bulb kind="count" color="red" count={3}><IconEye size={24} /></Bulb>
          <Bulb color="orange" ring />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'На элементе',
  parameters: {
    docs: {
      description: {
        story: 'Нажмите +1 / −1 — antd анимирует смену числа.'
      }
    }
  },
  render: function Render() {
    const [n, setN] = useState(3);
    return <div style={row}>
        <Bulb color="blue"><IconEye size={24} /></Bulb>
        <Bulb kind="count" color="red" count={n}><IconEye size={24} /></Bulb>
        <Button size="small" variant="secondary" onClick={() => setN(n + 1)}>+1</Button>
        <Button size="small" variant="secondary" onClick={() => setN(Math.max(0, n - 1))}>−1</Button>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Мелкая пилюля — тегирование папок',
  parameters: {
    docs: {
      description: {
        story: '\`size="small"\`: min 12, текст 8. В макете — Mob ShapeText, в вебе нужен для тегирования папок.'
      }
    }
  },
  render: () => <div style={{
    ...row,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12
  }}>
      {[['Проектная документация', 12, 'blue'], ['Исполнительная', 3, 'green'], ['Замечания', 7, 'red'], ['На согласовании', 99, 'orange']].map(([name, n, c]) => <span key={name as string} style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }}>
          📁 {name} <Bulb kind="count" size="small" color={c as BulbColor} count={n as number} />
        </span>)}
    </div>
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as FolderTags,g as Kinds,y as OnElement,h as Playground,v as Ring,x as __namedExportsOrder,m as default};