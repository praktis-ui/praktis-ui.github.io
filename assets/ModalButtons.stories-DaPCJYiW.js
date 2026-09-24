import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-Cfof-CBm.js";import{n as r,t as i}from"./ModalButtons-8g4fEHYo.js";import{n as a,t as o}from"./modalStoryFrame-B9xMibrw.js";function s({primaryLabel:e=`Основное действие`,withCheckbox:t=!0,withExtra:n=!0,withCancel:r=!0,primary:a,...s}){let[u,d]=(0,c.useState)(!0),[f,p]=(0,c.useState)(null),m=s.size??`s`,h=s.device??`web`;return(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(o,{size:m,device:h,children:[(0,l.jsx)(`div`,{style:{height:24}}),(0,l.jsx)(i,{...s,primary:{label:e,onClick:()=>p(e)},cancel:r?{onClick:()=>p(`Отмена`)}:void 0,extra:n?{label:`Доп. действие`,onClick:()=>p(`Доп. действие`)}:void 0,checkbox:t?{label:`Text checkbox`,checked:u,onChange:d}:void 0})]}),(0,l.jsx)(`div`,{style:{marginTop:8,color:`#7e7e7e`,fontSize:12,fontFamily:`Inter, sans-serif`,minHeight:15},children:f?`Нажато: ${f}`:` `})]})}var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c=t(),r(),a(),l=n(),u=`
Источник — Figma UI Kit «Практис»: **ModalButtons** (node 2346:2486) из набора ModalPieces.

Блок кнопок внизу модального окна — молекула, живёт только в модалке. Кнопки и чекбокс — из
кита: основное действие — **Button primary**, «Отмена» и «Доп. действие» — **Button stroke**,
чекбокс — **Checkbox**.

| Вариант | Раскладка | Кнопки | Отступы |
|---|---|---|---|
| **Web S** (окно S) | столбиком: чекбокс → «Доп. действие» на всю ширину → «Отмена» + «Основное действие» на остаток | 36px | 0 20 20 |
| **Web M** (окна M, L, боковые) | строкой: слева чекбокс и «Доп. действие», справа «Отмена» и «Основное действие» | 36px | 0 24 24 |
| **Mob** | как Web S | 48px, текст 15 | 0 16 16 |

Зазор между всем — 16. Чекбокс, «Доп. действие» и «Отмена» — слоты: есть, если переданы.
Основное действие есть всегда; длинная подпись обрезается отточием.
`,d={control:!1,table:{category:`Для разработчиков — передаётся из кода`}},f=e=>({control:`boolean`,name:e,table:{category:`Слоты`}}),p={title:`UI Kit/Modal/ModalButtons`,component:i,parameters:{layout:`padded`,docs:{description:{component:u}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`s`,`m`]},device:{control:`inline-radio`,options:[`web`,`mob`]},primaryLabel:{control:`text`,name:`основное действие`},withCheckbox:f(`чекбокс`),withExtra:f(`«Доп. действие»`),withCancel:f(`«Отмена»`),primary:d,cancel:d,extra:d,checkbox:d},args:{primary:{label:`Основное действие`},size:`s`,device:`web`,primaryLabel:`Основное действие`,withCheckbox:!0,withExtra:!0,withCancel:!0}},m={parameters:{docs:{description:{story:`Слоты включаются в панели «Слоты». Всё кликается.`}}},render:e=>(0,l.jsx)(s,{...e})},h={name:`Web S / Web M / Mob`,parameters:{docs:{description:{story:`Три варианта из макета со всеми слотами, каждый в окне своей ширины.`}}},render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,l.jsx)(s,{size:`s`}),(0,l.jsx)(s,{size:`m`}),(0,l.jsx)(s,{device:`mob`})]})},g={name:`Отмена + основное`,parameters:{docs:{description:{story:`Самый частый набор — без чекбокса и доп. действия.`}}},render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,l.jsx)(s,{size:`s`,withCheckbox:!1,withExtra:!1,primaryLabel:`Сохранить`}),(0,l.jsx)(s,{size:`m`,withCheckbox:!1,withExtra:!1,primaryLabel:`Сохранить`})]})},_={name:`Длинная подпись`,parameters:{docs:{description:{story:`Подпись основного действия не распирает окно — обрезается отточием.`}}},render:()=>(0,l.jsx)(s,{size:`s`,withCheckbox:!1,withExtra:!1,primaryLabel:`Отправить на согласование руководителю отдела`})},v=[`Playground`,`Variants`,`Minimal`,`LongLabel`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слоты включаются в панели «Слоты». Всё кликается.'
      }
    }
  },
  render: args => <Live {...args as Partial<Args>} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Web S / Web M / Mob',
  parameters: {
    docs: {
      description: {
        story: 'Три варианта из макета со всеми слотами, каждый в окне своей ширины.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Live size="s" />
      <Live size="m" />
      <Live device="mob" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Отмена + основное',
  parameters: {
    docs: {
      description: {
        story: 'Самый частый набор — без чекбокса и доп. действия.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Live size="s" withCheckbox={false} withExtra={false} primaryLabel="Сохранить" />
      <Live size="m" withCheckbox={false} withExtra={false} primaryLabel="Сохранить" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Длинная подпись',
  parameters: {
    docs: {
      description: {
        story: 'Подпись основного действия не распирает окно — обрезается отточием.'
      }
    }
  },
  render: () => <Live size="s" withCheckbox={false} withExtra={false} primaryLabel="Отправить на согласование руководителю отдела" />
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as LongLabel,g as Minimal,m as Playground,h as Variants,v as __namedExportsOrder,p as default};