import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Mn as n,Ro as r,W as i,mo as a,t as o}from"./icons-B1LEmBjt.js";import{n as s,t as c}from"./IconButton-DAsFP9RX.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),s(),l=t(),u=`
Источник — Figma UI Kit «Практис»: **IconButton**, «Кнопки-иконки» для таблиц и модалок
(node 1704:1410). 24×24: иконка 20px и отступ 2px.

| Проп | Что делает | В Figma |
|---|---|---|
| \`variant\` | primary / secondary / red | Type |
| \`icon\` | иконка из кита | — |
| \`label\` | что делает кнопка: для экранного диктора и тултипа | — |
| \`disabled\` | заблокирована | State = Disabled |

Hover / Active / Focus — состояния во время работы, работают сами. **Secondary** в покое серая,
а на ховере и нажатии становится синей, как Primary — так в макете. Focus — кольцо, только при
переходе с клавиатуры (Tab), по клику мышью его нет.
`,d=[`primary`,`secondary`,`red`],f={title:`UI Kit/Кнопки/IconButton`,id:`ui-kit-iconbutton`,component:c,parameters:{layout:`padded`,docs:{description:{component:u}}},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:d},disabled:{control:`boolean`},label:{control:`text`},icon:{control:!1},forceState:{control:!1,table:{category:`Для витрины`}}},args:{icon:(0,l.jsx)(n,{}),label:`Удалить`,variant:`primary`,disabled:!1}},p={},m={parameters:{docs:{description:{story:`Все состояния из макета. Hover, Active и Focus здесь показаны принудительно; вживую они работают сами.`}}},render:()=>{let e={fontSize:12,opacity:.6,textAlign:`center`};return(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`90px repeat(3, 110px)`,rowGap:18,alignItems:`center`,justifyItems:`center`,fontFamily:`Inter, sans-serif`},children:[(0,l.jsx)(`span`,{}),d.map(t=>(0,l.jsx)(`span`,{style:e,children:t},t)),[`default`,`hover`,`active`,`focus`,`disabled`].map(t=>(0,l.jsxs)(`div`,{style:{display:`contents`},children:[(0,l.jsx)(`span`,{style:{...e,justifySelf:`start`},children:t}),d.map(e=>(0,l.jsx)(c,{variant:e,icon:(0,l.jsx)(n,{}),label:`Удалить`,tooltip:!1,disabled:t===`disabled`,forceState:t===`hover`||t===`active`||t===`focus`?t:void 0},e))]},t))]})}},h={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,l.jsx)(c,{icon:(0,l.jsx)(r,{}),label:`Скачать`}),(0,l.jsx)(c,{icon:(0,l.jsx)(a,{}),label:`Посмотреть`}),(0,l.jsx)(c,{icon:(0,l.jsx)(i,{}),label:`Удалить`,variant:`red`})]})},g=[`Playground`,`States`,`Group`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все состояния из макета. Hover, Active и Focus здесь показаны принудительно; вживую они работают сами.'
      }
    }
  },
  render: () => {
    const head = {
      fontSize: 12,
      opacity: 0.6,
      textAlign: 'center'
    } as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '90px repeat(3, 110px)',
      rowGap: 18,
      alignItems: 'center',
      justifyItems: 'center',
      fontFamily: 'Inter, sans-serif'
    }}>
        <span />
        {VARIANTS.map(v => <span key={v} style={head}>{v}</span>)}
        {(['default', 'hover', 'active', 'focus', 'disabled'] as const).map(state => <div key={state} style={{
        display: 'contents'
      }}>
            <span style={{
          ...head,
          justifySelf: 'start'
        }}>{state}</span>
            {VARIANTS.map(v => <IconButton key={v} variant={v} icon={<IconRemove />} label="Удалить" tooltip={false} disabled={state === 'disabled'} forceState={state === 'hover' || state === 'active' || state === 'focus' ? state : undefined} />)}
          </div>)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      <IconButton icon={<IconDownload2 />} label="Скачать" />
      <IconButton icon={<IconEye />} label="Посмотреть" />
      <IconButton icon={<IconTrash />} label="Удалить" variant="red" />
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Group,p as Playground,m as States,g as __namedExportsOrder,f as default};