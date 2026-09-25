import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Tag-ovF9xBqp.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a=`
Источник — Figma UI Kit «Практис»: **Tags** (node 151:422). Статус-тег для таблиц, карточек,
модалок: «Архивный», «На согласовании», «Аккредитован» и т.п.

| Проп | Что делает | В Figma |
|---|---|---|
| \`status\` | default / success / error / processing / warning | Status |
| \`icon\` | иконка статуса слева | Icon = True / False |

Высота 24, текст 14. У **error** и **warning** иконка чуть светлее текста — так в макете.
Длинный текст обрезается отточием по ширине контейнера.

Не путать с **MultiSelectTag** — это выбранное значение мультиселекта, у него другая задача.
`,o=[`default`,`success`,`error`,`processing`,`warning`],s={default:`Default`,success:`Success`,error:`Error`,processing:`Processing`,warning:`Warning`},c={title:`UI Kit/Данные/Tag`,id:`ui-kit-tag`,component:r,parameters:{layout:`padded`,docs:{description:{component:a}}},tags:[`autodocs`],argTypes:{status:{control:`inline-radio`,options:o},icon:{control:`boolean`},children:{control:`text`}},args:{children:`На согласовании`,status:`processing`,icon:!1}},l={},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, max-content)`,gap:`12px 24px`,fontFamily:`Inter, sans-serif`},children:[(0,i.jsx)(`span`,{style:{fontSize:12,opacity:.6},children:`Icon: False`}),(0,i.jsx)(`span`,{style:{fontSize:12,opacity:.6},children:`Icon: True`}),o.map(e=>(0,i.jsxs)(`div`,{style:{display:`contents`},children:[(0,i.jsx)(`span`,{children:(0,i.jsx)(r,{status:e,children:s[e]})}),(0,i.jsx)(`span`,{children:(0,i.jsx)(r,{status:e,icon:!0,children:s[e]})})]},e))]})},d={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:180,alignItems:`flex-start`},children:[(0,i.jsx)(r,{status:`success`,icon:!0,children:`Аккредитован`}),(0,i.jsx)(r,{status:`warning`,icon:!0,children:`Аккредитован с условием и замечаниями`})]})},f=[`Playground`,`AllStatuses`,`LongText`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: '12px 24px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <span style={{
      fontSize: 12,
      opacity: 0.6
    }}>Icon: False</span>
      <span style={{
      fontSize: 12,
      opacity: 0.6
    }}>Icon: True</span>
      {STATUSES.map(status => <div key={status} style={{
      display: 'contents'
    }}>
          <span><Tag status={status}>{LABEL[status]}</Tag></span>
          <span><Tag status={status} icon>{LABEL[status]}</Tag></span>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 180,
    alignItems: 'flex-start'
  }}>
      <Tag status="success" icon>Аккредитован</Tag>
      <Tag status="warning" icon>Аккредитован с условием и замечаниями</Tag>
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as AllStatuses,d as LongText,l as Playground,f as __namedExportsOrder,c as default};