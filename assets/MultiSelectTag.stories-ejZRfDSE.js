import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-r_k3QGfr.js";import{n as r,t as i}from"./MultiSelectTag-DZllilWS.js";function a(){let[e,t]=(0,o.useState)([`Пункт`,`Какой-то пункт`,`Длинный текст пункта`,`Норм пункт`]);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,width:260},children:[e.map(e=>(0,s.jsx)(i,{onRemove:()=>t(t=>t.filter(t=>t!==e)),children:e},e)),e.length===0&&(0,s.jsx)(`span`,{style:{fontSize:12,opacity:.6},children:`Всё удалено`})]})}var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=t(),r(),s=n(),c={title:`UI Kit/MultiSelectTag`,component:i,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: атомы **multi-select__value** и
**multi-select__value_btn-delete** (внутри node 1148:2420).

Самостоятельный компонент: **UI Kit/MultiSelect** складывает такие теги внутрь поля, но тег
пригоден и сам по себе — например показать выбранное вне поля.

## Из чего состоит

| Проп | Что делает |
|---|---|
| \`children\` | текст тега |
| \`onRemove\` | крестик удаления; не передан — тега без крестика |
| \`disabled\` | заблокирован: крестик не показывается |

\`Type = lable\` и \`Type = overflow\` из макета — это один компонент: «+N» — тот же тег без
крестика. Размеры: \`s\` — 18px, текст 12px, в поле мультиселекта; \`m\` — 23px, текст 14px, в
ячейке таблицы.

Тег никогда не шире контейнера: длинный текст уходит в отточие. Клик по крестику не всплывает —
внутри поля он удаляет тег, не открывая список.
`}}},tags:[`autodocs`],argTypes:{disabled:{control:`boolean`}},args:{children:`Какой-то пункт`,disabled:!1}},l={render:e=>(0,s.jsx)(i,{...e,onRemove:()=>{}})},u={parameters:{docs:{description:{story:`С крестиком, без крестика («+N»), заблокированный.`}}},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,s.jsx)(i,{onRemove:()=>{},children:`Text`}),(0,s.jsx)(i,{children:`+3`}),(0,s.jsx)(i,{disabled:!0,onRemove:()=>{},children:`Text`})]})},d={parameters:{docs:{description:{story:`В контейнере 160px: длинный текст уходит в отточие, крестик остаётся на месте.`}}},render:()=>(0,s.jsx)(`div`,{style:{width:160,border:`1px dashed #dddddd`,padding:6},children:(0,s.jsx)(i,{onRemove:()=>{},children:`Очень длинное название пункта, которое не помещается`})})},f={parameters:{docs:{description:{story:`Те же теги без поля — крестики удаляют по-настоящему. Список хранит сама история.`}}},render:()=>(0,s.jsx)(a,{})},p=[`Playground`,`Variants`,`Truncated`,`OutsideField`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <MultiSelectTag {...args} onRemove={() => {}} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'С крестиком, без крестика («+N»), заблокированный.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 6,
    alignItems: 'center'
  }}>
      <MultiSelectTag onRemove={() => {}}>Text</MultiSelectTag>
      <MultiSelectTag>+3</MultiSelectTag>
      <MultiSelectTag disabled onRemove={() => {}}>
        Text
      </MultiSelectTag>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'В контейнере 160px: длинный текст уходит в отточие, крестик остаётся на месте.'
      }
    }
  },
  render: () => <div style={{
    width: 160,
    border: '1px dashed #dddddd',
    padding: 6
  }}>
      <MultiSelectTag onRemove={() => {}}>Очень длинное название пункта, которое не помещается</MultiSelectTag>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Те же теги без поля — крестики удаляют по-настоящему. Список хранит сама история.'
      }
    }
  },
  render: () => <OutsideExample />
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as OutsideField,l as Playground,d as Truncated,u as Variants,p as __namedExportsOrder,c as default};