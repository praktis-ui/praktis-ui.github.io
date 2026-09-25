import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Modal-QgpmzswK.js";import{n as i,t as a}from"./Checkbox-CjXPEdxB.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-Df609tLh.js";import{n as l,t as u}from"./Select-Di3wnAEz.js";import{n as d,t as f}from"./Input-AC4B0iwg.js";function p({long:e}){let t=e?8:1;return(0,b.jsx)(b.Fragment,{children:Array.from({length:t},(e,t)=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,b.jsx)(f,{label:t===0?`ФИО`:`Поле ${t+1}`,placeholder:`Введите ФИО`}),(0,b.jsx)(u,{label:`Должность`,required:!0,placeholder:`Выберите должность`,style:{width:`100%`},options:[{value:`pm`,label:`Руководитель проекта`},{value:`eng`,label:`Инженер ПТО`}]})]},t))})}function m({title:e,items:t}){let[n,r]=(0,y.useState)(t.slice(0,2));return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,b.jsx)(`div`,{style:{fontSize:16,fontWeight:500},children:e}),(0,b.jsx)(a.Group,{value:n,onChange:e=>r(e),style:{display:`flex`,flexDirection:`column`,gap:12},children:t.map(e=>(0,b.jsx)(a,{value:e,children:e},e))})]})}function h({long:e}){let t=e?6:2;return(0,b.jsx)(b.Fragment,{children:Array.from({length:t},(e,t)=>(0,b.jsx)(m,{title:t%2==0?`Статус`:`Тип договора`,items:t%2==0?[`В работе`,`Просрочен`,`Завершен`,`Архив`]:[`Подряд`,`Поставка`,`Услуги`]},t))})}function g({children:e}){return(0,b.jsx)(`div`,{style:{position:`relative`,width:360,height:740,overflow:`hidden`,borderRadius:24,boxShadow:`0 0 0 1px #dddddd`,background:`#f5f8fb`,padding:16,boxSizing:`border-box`},children:e})}function _({label:e=`Открыть окно`,...t}){let{device:n=`web`,size:i=`s`,side:a=!1,withDescription:o=!0,closable:s=!0,withCheckbox:l=!1,withExtra:u=!1,withCancel:d=!0,longContent:f=!1}=t,[m,_]=(0,y.useState)(!1),[v,x]=(0,y.useState)(!1),S=()=>_(!1),C=n===`mob`,T=C?a:a&&i!==`s`,E=(0,b.jsx)(r,{...C?{device:`mob`,side:a}:i===`s`?{size:`s`}:{size:i,side:T},open:m,onClose:S,getContainer:!C&&void 0,title:T?`Фильтры`:`Заголовок модального окна`,description:o&&!T?w:void 0,closable:s,buttons:{primary:{label:T?`Применить`:`Основное действие`,onClick:S},cancel:d?{label:T?`Сбросить`:`Отмена`,onClick:S}:void 0,extra:u?{label:`Доп. действие`,onClick:S}:void 0,checkbox:l?{label:`Больше не показывать`,checked:v,onChange:x}:void 0},children:T?(0,b.jsx)(h,{long:f}):(0,b.jsx)(p,{long:f})}),D=(0,b.jsx)(c,{variant:`stroke`,onClick:()=>_(!0),children:e});return C?(0,b.jsxs)(g,{children:[D,E]}):(0,b.jsxs)(b.Fragment,{children:[D,E]})}function v(){let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{variant:`stroke`,onClick:()=>t(!0),children:`Открыть окно`}),(0,b.jsx)(r,{open:e,onClose:()=>t(!1),title:`Техническая поддержка`,description:`Закрывается по Esc и клику на фон.`,children:(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(`span`,{style:{color:`#7e7e7e`,fontSize:12},children:`Телефоны`}),(0,b.jsx)(`span`,{children:`+7 000 000-00-00`}),(0,b.jsx)(`span`,{children:`+7 000 000-00-01`})]})})]})}var y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{y=t(),s(),i(),d(),l(),n(),b=o(),x=`
Источник — Figma UI Kit «Практис»: **ModalWindow_Slot** (node 11408:7544) и правила под ним.

Окно — рамка без отступов из трёх частей: **ModalHead** (шапка), содержимое и **ModalButtons**
(блок кнопок). Отступы у частей свои, окна отличаются шириной и отступами.

| Размер | По центру | Боковая панель | Отступы |
|---|---|---|---|
| **S** | 360 | — | 20, кнопки столбиком |
| **M** | 700 | 500 | 24, кнопки строкой |
| **L** | 1040 | 700 | 24, кнопки строкой |

- Между частями — 24. Содержимое: каждый верхний блок — секция, между секциями 24.
- **По центру:** высота по содержимому, но не ближе 100px к краям экрана; дальше прокручивается
  только содержимое, шапка и кнопки на месте.
- **Боковая:** справа на всю высоту, скругление только слева; кнопки прижаты к низу.
- Фон под окном — #282828 24% с размытием 4.
- Закрывается крестиком, по Esc и по клику на фон (Esc и фон можно выключить — \`keyboard\`,
  \`maskClosable\`). Окно по центру — antd Modal, боковое — antd Drawer.

**Мобильные** (\`device="mob"\`): отступы 16, между частями 20.
- **Шторка** — снизу во всю ширину, скругление сверху, грабер; высота по содержимому, но не ближе
  48px к верху экрана, кнопки прижаты к низу.
- **Боковая** (\`side\`) — справа на всю высоту, во всю ширину без 32px слева, скругление слева.

**Пока нет:** типов окон (информационное / с формой / критическое).
`,S=e=>({control:`boolean`,name:e,table:{category:`Слоты`}}),C={title:`UI Kit/Сообщения и окна/Modal/Modal`,id:`ui-kit-modal-modal`,parameters:{layout:`padded`,docs:{description:{component:x}}},tags:[`autodocs`],argTypes:{device:{control:`inline-radio`,options:[`web`,`mob`]},size:{control:`inline-radio`,options:[`s`,`m`,`l`],name:`size (у мобильных нет)`},side:{control:`boolean`,name:`боковая (M, L и мобильная)`},withDescription:S(`пояснение`),closable:S(`крестик`),withCheckbox:S(`чекбокс`),withExtra:S(`«Доп. действие»`),withCancel:S(`«Отмена»`),longContent:{control:`boolean`,name:`много содержимого (прокрутка)`}},args:{device:`web`,size:`s`,side:!1,withDescription:!0,closable:!0,withCheckbox:!1,withExtra:!1,withCancel:!0,longContent:!1}},w=`Дополнительная информация, необходимая для того, чтобы понять зачем нужно это модальное окно и какие действия я смогу выполнить в нем.`,T={parameters:{docs:{description:{story:`Размер, боковой вариант и слоты — в панели справа. «Открыть окно».`}}},render:e=>(0,b.jsx)(_,{...e})},E={name:`Размеры S / M / L`,parameters:{docs:{description:{story:`Окна по центру: S 360, M 700, L 1040. У S кнопки столбиком, у M и L — строкой.`}}},render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,b.jsx)(_,{size:`s`,label:`Окно S`,withCheckbox:!0,withExtra:!0}),(0,b.jsx)(_,{size:`m`,label:`Окно M`,withCheckbox:!0,withExtra:!0}),(0,b.jsx)(_,{size:`l`,label:`Окно L`,withCheckbox:!0,withExtra:!0})]})},D={name:`Боковая панель M / L`,parameters:{docs:{description:{story:`Справа на всю высоту экрана: M 500, L 700. Кнопки прижаты к низу.`}}},render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,b.jsx)(_,{size:`m`,side:!0,label:`Боковая M`,withExtra:!0}),(0,b.jsx)(_,{size:`l`,side:!0,label:`Боковая L`,withExtra:!0})]})},O={name:`Много содержимого`,parameters:{docs:{description:{story:`Окно дорастает до 100px от краёв экрана, дальше прокручивается только содержимое — шапка и кнопки на месте.`}}},render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,b.jsx)(_,{size:`s`,longContent:!0,label:`Окно S, прокрутка`}),(0,b.jsx)(_,{size:`m`,longContent:!0,label:`Окно M, прокрутка`}),(0,b.jsx)(_,{size:`m`,side:!0,longContent:!0,label:`Боковая M, прокрутка`})]})},k={name:`Мобильные: шторка и боковая`,parameters:{docs:{description:{story:`Окна открываются внутри рамки телефона 360×740. Шторка — снизу, по содержимому; с большим содержимым дорастает до 48px от верха и прокручивается. Боковая — на всю высоту, слева остаётся 32px.`}}},render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,b.jsx)(_,{device:`mob`,label:`Шторка`,withCheckbox:!0,withExtra:!0}),(0,b.jsx)(_,{device:`mob`,label:`Шторка, прокрутка`,longContent:!0}),(0,b.jsx)(_,{device:`mob`,side:!0,label:`Боковая`})]})},A={name:`Без кнопок`,parameters:{docs:{description:{story:`Части независимы: окно без блока кнопок заканчивается содержимым с отступом снизу, как в информационном окне из макета.`}}},render:()=>(0,b.jsx)(v,{})},j=[`Playground`,`Sizes`,`Side`,`Scroll`,`Mobile`,`NoButtons`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Размер, боковой вариант и слоты — в панели справа. «Открыть окно».'
      }
    }
  },
  render: args => <Live {...args} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Размеры S / M / L',
  parameters: {
    docs: {
      description: {
        story: 'Окна по центру: S 360, M 700, L 1040. У S кнопки столбиком, у M и L — строкой.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Live size="s" label="Окно S" withCheckbox withExtra />
      <Live size="m" label="Окно M" withCheckbox withExtra />
      <Live size="l" label="Окно L" withCheckbox withExtra />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Боковая панель M / L',
  parameters: {
    docs: {
      description: {
        story: 'Справа на всю высоту экрана: M 500, L 700. Кнопки прижаты к низу.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Live size="m" side label="Боковая M" withExtra />
      <Live size="l" side label="Боковая L" withExtra />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Много содержимого',
  parameters: {
    docs: {
      description: {
        story: 'Окно дорастает до 100px от краёв экрана, дальше прокручивается только содержимое — шапка и кнопки на месте.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Live size="s" longContent label="Окно S, прокрутка" />
      <Live size="m" longContent label="Окно M, прокрутка" />
      <Live size="m" side longContent label="Боковая M, прокрутка" />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Мобильные: шторка и боковая',
  parameters: {
    docs: {
      description: {
        story: 'Окна открываются внутри рамки телефона 360×740. Шторка — снизу, по содержимому; с большим содержимым дорастает до 48px от верха и прокручивается. Боковая — на всю высоту, слева остаётся 32px.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <Live device="mob" label="Шторка" withCheckbox withExtra />
      <Live device="mob" label="Шторка, прокрутка" longContent />
      <Live device="mob" side label="Боковая" />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Без кнопок',
  parameters: {
    docs: {
      description: {
        story: 'Части независимы: окно без блока кнопок заканчивается содержимым с отступом снизу, как в информационном окне из макета.'
      }
    }
  },
  render: () => <NoButtonsDemo />
}`,...A.parameters?.docs?.source}}}})))()}M();export{k as Mobile,A as NoButtons,T as Playground,O as Scroll,D as Side,E as Sizes,j as __namedExportsOrder,C as default};