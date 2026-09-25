import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Pagination-C5fBfI2q.js";import{n as i}from"./iframe-r_k3QGfr.js";function a({pages:e=57,...t}){let[n,i]=(0,o.useState)(1);return(0,s.jsx)(r,{...t,current:n,total:e*10,pageSize:10,onChange:i})}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=t(),n(),s=i(),c={title:`UI Kit/Pagination`,component:r,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: **Pagination** (node 2069:4965), только сам компонент.

Обёртка над antd Pagination: какие номера показывать, когда ставить многоточие и переход на
страницу — логика antd. Наши размеры, цвета, иконки и подпись «Перейти на … стр.».

| Проп | Что делает | В Figma |
|---|---|---|
| \`size\` | large (30px) / small (24px) | Type |
| \`jumper\` | поле «Перейти на … стр.» | Status = Jumper |
| \`current\`, \`total\`, \`pageSize\`, \`onChange\` | как у antd | — |

На первой странице левая стрелка неактивна, на последней — правая (описание в макете).
Многоточие кликабельно — перелистывает на 5 страниц, это поведение antd.

Выбор «Показывать N записей» сюда не входит — он в подвале таблицы.
`}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`large`,`small`]},jumper:{control:`boolean`,name:`поле «Перейти на»`},pages:{control:{type:`number`,min:1,max:200},name:`страниц всего`},disabled:{control:`boolean`},current:{control:!1},total:{control:!1},onChange:{control:!1}},args:{size:`large`,jumper:!1,pages:57,disabled:!1}},l={parameters:{docs:{description:{story:`Листай стрелками, номерами и многоточием; с включённым полем — впиши номер и Enter.`}}},render:e=>(0,s.jsx)(a,{...e})},u={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[`large`,`small`].flatMap(e=>[!1,!0].map(t=>(0,s.jsx)(a,{size:e,jumper:t},e+t)))})},d={render:()=>(0,s.jsx)(a,{disabled:!0})},f=[`Playground`,`Variants`,`Disabled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Листай стрелками, номерами и многоточием; с включённым полем — впиши номер и Enter.'
      }
    }
  },
  render: args => <Live {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {(['large', 'small'] satisfies PaginationSize[]).flatMap(size => [false, true].map(jumper => <Live key={size + jumper} size={size} jumper={jumper} />))}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Live disabled />
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Disabled,l as Playground,u as Variants,f as __namedExportsOrder,c as default};