import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Surface-BxmxNMlD.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a={title:`UI Kit/Лейаут/Surface`,id:`ui-kit-surface`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`
Подложка — правила лейаута дизайнера (2026-09-24).

| Правило | Как в компоненте |
|---|---|
| Цвет подложки противоположен фону под ней: на сером — белая, на белом — серая | \`on\` — на каком фоне лежит; по умолчанию берётся от родительской подложки |
| Скругления по вложенности: 20 → 12 → 6 | \`level\` 1 / 2 / 3; по умолчанию — родительский + 1 |
| Обводка только по запросу | \`bordered\`, по умолчанию выключена (цвет border/cards #eaf0f5) |
| Тени у подложек нет | тень — только у модалок и выпадающих списков |

При вложении всё работает само: \`<Surface><Surface>…</Surface></Surface>\` без параметров — белая 20, внутри серая 12.
Отступ внутри по уровню — 24 / 16 / 12, \`padding\` переопределяет.

Отступы между подложками — 16, по бокам рабочей области — минимум 24 (\`layoutSpacing\` в tokens.ts).
`}}},tags:[`autodocs`],argTypes:{on:{control:`inline-radio`,options:[`grey`,`white`]},level:{control:`inline-radio`,options:[1,2,3]},bordered:{control:`boolean`},as:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}}}},o=({children:e,tone:t=`grey`})=>(0,i.jsx)(`div`,{style:{background:t===`grey`?`var(--surface-grey)`:`var(--surface-white)`,padding:24,fontFamily:`Inter, sans-serif`,fontSize:14},children:e}),s={margin:0,color:`inherit`},c={args:{children:`Подложка`},render:e=>(0,i.jsx)(o,{tone:e.on??`grey`,children:(0,i.jsx)(r,{...e})})},l={name:`Вложение — правила срабатывают сами`,parameters:{docs:{description:{story:`Три подложки без единого параметра: белая 20 на сером → серая 12 → белая 6.`}}},render:()=>(0,i.jsx)(o,{children:(0,i.jsxs)(r,{children:[(0,i.jsx)(`p`,{style:s,children:`Уровень 1 — белая, скругление 20, отступ 24`}),(0,i.jsx)(`div`,{style:{height:16}}),(0,i.jsxs)(r,{children:[(0,i.jsx)(`p`,{style:s,children:`Уровень 2 — серая, 12, отступ 16`}),(0,i.jsx)(`div`,{style:{height:12}}),(0,i.jsx)(r,{children:(0,i.jsx)(`p`,{style:s,children:`Уровень 3 — белая, 6, отступ 12`})})]})]})})},u={name:`Между подложками — 16`,render:()=>(0,i.jsx)(o,{children:(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16},children:[(0,i.jsx)(r,{children:(0,i.jsx)(`p`,{style:s,children:`Блок`})}),(0,i.jsx)(r,{children:(0,i.jsx)(`p`,{style:s,children:`Блок`})})]})})},d={name:`На белом фоне`,parameters:{docs:{description:{story:'`on="white"` — подложка на белом становится серой.'}}},render:()=>(0,i.jsx)(o,{tone:`white`,children:(0,i.jsx)(r,{on:`white`,level:2,children:(0,i.jsx)(`p`,{style:s,children:`Серая подложка на белом, уровень 2`})})})},f={name:`С обводкой — только по запросу`,render:()=>(0,i.jsx)(o,{children:(0,i.jsx)(r,{bordered:!0,children:(0,i.jsx)(`p`,{style:s,children:`Обводка border/cards — только если её попросили в макете`})})})},p=[`Playground`,`Nesting`,`Gap`,`OnWhite`,`Bordered`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Подложка'
  },
  render: args => <Page tone={args.on ?? 'grey'}><Surface {...args} /></Page>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Вложение — правила срабатывают сами',
  parameters: {
    docs: {
      description: {
        story: 'Три подложки без единого параметра: белая 20 на сером → серая 12 → белая 6.'
      }
    }
  },
  render: () => <Page>
      <Surface>
        <p style={text}>Уровень 1 — белая, скругление 20, отступ 24</p>
        <div style={{
        height: 16
      }} />
        <Surface>
          <p style={text}>Уровень 2 — серая, 12, отступ 16</p>
          <div style={{
          height: 12
        }} />
          <Surface>
            <p style={text}>Уровень 3 — белая, 6, отступ 12</p>
          </Surface>
        </Surface>
      </Surface>
    </Page>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Между подложками — 16',
  render: () => <Page>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }}>
        <Surface><p style={text}>Блок</p></Surface>
        <Surface><p style={text}>Блок</p></Surface>
      </div>
    </Page>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'На белом фоне',
  parameters: {
    docs: {
      description: {
        story: '\`on="white"\` — подложка на белом становится серой.'
      }
    }
  },
  render: () => <Page tone="white">
      <Surface on="white" level={2}><p style={text}>Серая подложка на белом, уровень 2</p></Surface>
    </Page>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'С обводкой — только по запросу',
  render: () => <Page>
      <Surface bordered><p style={text}>Обводка border/cards — только если её попросили в макете</p></Surface>
    </Page>
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Bordered,u as Gap,l as Nesting,d as OnWhite,c as Playground,p as __namedExportsOrder,a as default};