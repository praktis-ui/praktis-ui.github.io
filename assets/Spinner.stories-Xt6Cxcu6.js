import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Spinner-FQin62xI.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`UI Kit/Сообщения и окна/Spinner`,id:`ui-kit-spinner`,component:r,parameters:{layout:`padded`,docs:{description:{component:"\nИсточник — Figma UI Kit «Практис»: спиннер из Select, State=loading (node 814:2625). Единственный\nспиннер в макете — общий для кита: им показывают загрузку Select, MultiSelect, DatePicker, Input,\nInputPassword, InputSearch и Button (проп `loading` у каждого).\n\n| Проп | Значения | |\n|---|---|---|\n| `tone` | `accent` / `current` / `block` | accent — как в макете (трек blue/400, дуга blue/600), для полей; current — цветом текста, для кнопок; block — крупный с толстой линией, на месте содержимого (Figma Spin 9256:6828) |\n| `size` | число | в полях 18, в кнопках 14, block — 48 (в LoadingState) |\n\nОбычно отдельно не нужен — берётся проп `loading` у компонента, а загрузка блока или страницы — **LoadingState**.\n"}}},tags:[`autodocs`],argTypes:{tone:{control:`inline-radio`,options:[`accent`,`current`,`block`]},size:{control:`number`}},args:{tone:`accent`,size:18}},o={},s={name:`Цвет: accent, current, block`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,fontFamily:`Inter, sans-serif`,fontSize:12,color:`#7e7e7e`},children:[(0,i.jsxs)(`span`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{}),` accent`]}),(0,i.jsxs)(`span`,{style:{display:`flex`,gap:8,alignItems:`center`,color:`#41484a`},children:[(0,i.jsx)(r,{tone:`current`,size:14}),` current на светлом`]}),(0,i.jsxs)(`span`,{style:{display:`flex`,gap:8,alignItems:`center`,color:`#ffffff`,background:`#3c83f6`,padding:`8px 12px`,borderRadius:6},children:[(0,i.jsx)(r,{tone:`current`,size:14}),` current на синем`]}),(0,i.jsxs)(`span`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{tone:`block`,size:48}),` block 48`]})]})},c=[`Playground`,`Tones`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Цвет: accent, current, block',
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    color: '#7e7e7e'
  }}>
      <span style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <Spinner /> accent
      </span>
      <span style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: '#41484a'
    }}>
        <Spinner tone="current" size={14} /> current на светлом
      </span>
      <span style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: '#ffffff',
      background: '#3c83f6',
      padding: '8px 12px',
      borderRadius: 6
    }}>
        <Spinner tone="current" size={14} /> current на синем
      </span>
      <span style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <Spinner tone="block" size={48} /> block 48
      </span>
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Playground,s as Tones,c as __namedExportsOrder,a as default};