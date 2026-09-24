import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-Cfof-CBm.js";import{n as r,t as i}from"./Button-BtSgbizB.js";import{ma as a,t as o}from"./icons-BS4H7Flo.js";import{n as s,t as c}from"./IconButton-BQ9qaj_y.js";import{n as l,t as u}from"./ModalHead-CUe0Mj_z.js";import{n as d,t as f}from"./modalStoryFrame-B9xMibrw.js";function p({withDescription:e,withBreadcrumbs:t,withIcon:n,...r}){let[o,s]=(0,m.useState)(!0),l=r.size??`s`,d=r.device??`web`;return o?(0,h.jsxs)(f,{size:l,device:d,children:[(0,h.jsx)(u,{title:`Заголовок модального окна`,...r,description:e?_:void 0,breadcrumbs:t?v:void 0,icon:n?(0,h.jsx)(c,{variant:`secondary`,label:`Подробнее об окне`,icon:(0,h.jsx)(a,{})}):void 0,onClose:()=>s(!1)}),(0,h.jsx)(`div`,{style:{height:24}})]}):(0,h.jsx)(i,{variant:`link`,onClick:()=>s(!0),children:`Окно закрыто крестиком — открыть снова`})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{m=t(),o(),r(),s(),l(),d(),h=n(),g=`
Источник — Figma UI Kit «Практис»: **ModalHead** (node 11543:13906) из набора ModalPieces.

Шапка модального окна — молекула, живёт только в модалке. Окно — рамка без отступов, у шапки
свои: **Web S** — 20 (окно S), **Web M** — 24 (окна M, L и боковые), **Mob** — 16 по бокам и 20
сверху. Снизу отступа нет — его даёт окно. Ширина — по окну.

| Проп | Что | В Figma |
|---|---|---|
| \`title\` | заголовок: Medium 20, на мобильной 18 | — |
| \`size\` / \`device\` | Web S / Web M / Mob | Size, Device |
| \`description\` | пояснение под заголовком; не передано — нет | Explanatory text |
| \`closable\` | крестик — кнопка-иконка secondary; бывает не нужен | Close icon |
| \`breadcrumbs\` | хлебные крошки: крошка до 230px, дальше отточие и тултип | Breadcrumbs |
| \`icon\` | кнопка-иконка перед заголовком | First button |
| \`grabber\` | полоска сверху у мобильной шторки | Show grabber |

Длинный заголовок переносится, крестик остаётся в правом верхнем углу.
`,_=`Дополнительная информация, необходимая для того, чтобы понять зачем нужно это модальное окно и какие действия я смогу выполнить в нем.`,v=[`Корпус 1`,`Секция 1.1`,`Этаж 1`],y={control:!1,table:{category:`Для разработчиков — передаётся из кода`}},b=e=>({control:`boolean`,name:e,table:{category:`Слоты`}}),x={title:`UI Kit/Modal/ModalHead`,component:u,parameters:{layout:`padded`,docs:{description:{component:g}}},tags:[`autodocs`],argTypes:{title:{control:`text`},size:{control:`inline-radio`,options:[`s`,`m`]},device:{control:`inline-radio`,options:[`web`,`mob`]},withDescription:b(`пояснение`),closable:{control:`boolean`,name:`крестик`,table:{category:`Слоты`}},withBreadcrumbs:b(`хлебные крошки`),withIcon:b(`кнопка-иконка перед заголовком`),grabber:{control:`boolean`,name:`грабер (мобильная)`,table:{category:`Слоты`}},description:y,breadcrumbs:y,icon:y,onClose:y},args:{title:`Заголовок модального окна`,size:`s`,device:`web`,withDescription:!0,closable:!0,withBreadcrumbs:!1,withIcon:!1,grabber:!0}},S={parameters:{docs:{description:{story:`Слоты включаются в панели «Слоты». Крестик закрывает окно.`}}},render:e=>(0,h.jsx)(p,{...e})},C={name:`Web S / Web M / Mob`,parameters:{docs:{description:{story:`Три варианта из макета, каждый в окне своей ширины: S 360, M 700, мобильное 360.`}}},render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,h.jsx)(p,{size:`s`,withDescription:!0}),(0,h.jsx)(p,{size:`m`,withDescription:!0}),(0,h.jsx)(p,{device:`mob`,withDescription:!0})]})},w={name:`Все слоты`,parameters:{docs:{description:{story:`Кнопка-иконка перед заголовком, пояснение, хлебные крошки и крестик вместе.`}}},render:()=>(0,h.jsx)(p,{size:`m`,withDescription:!0,withBreadcrumbs:!0,withIcon:!0})},T={name:`Только заголовок`,parameters:{docs:{description:{story:`Без пояснения и без крестика — например, окно с формой, которое закрывается только кнопками.`}}},render:()=>(0,h.jsx)(p,{size:`s`,closable:!1})},E={name:`Длинный заголовок`,parameters:{docs:{description:{story:`Заголовок переносится, крестик остаётся в правом верхнем углу. Длинная крошка обрезается на 230px, полный текст — в тултипе.`}}},render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,h.jsx)(p,{size:`s`,title:`Удалить без возможности восстановления все выбранные документы?`,withDescription:!0}),(0,h.jsxs)(f,{size:`m`,children:[(0,h.jsx)(u,{size:`m`,title:`Перенос помещений`,breadcrumbs:[`ЖК «Северная долина», корпус 12, секция 4 — жилая часть`,`Секция 1.1`,`Этаж 1`],closable:!1}),(0,h.jsx)(`div`,{style:{height:24}})]})]})},D=[`Playground`,`Variants`,`Slots`,`Minimal`,`LongTitle`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слоты включаются в панели «Слоты». Крестик закрывает окно.'
      }
    }
  },
  render: args => <Live {...args as Partial<Args>} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Web S / Web M / Mob',
  parameters: {
    docs: {
      description: {
        story: 'Три варианта из макета, каждый в окне своей ширины: S 360, M 700, мобильное 360.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Live size="s" withDescription />
      <Live size="m" withDescription />
      <Live device="mob" withDescription />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Все слоты',
  parameters: {
    docs: {
      description: {
        story: 'Кнопка-иконка перед заголовком, пояснение, хлебные крошки и крестик вместе.'
      }
    }
  },
  render: () => <Live size="m" withDescription withBreadcrumbs withIcon />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Только заголовок',
  parameters: {
    docs: {
      description: {
        story: 'Без пояснения и без крестика — например, окно с формой, которое закрывается только кнопками.'
      }
    }
  },
  render: () => <Live size="s" closable={false} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Длинный заголовок',
  parameters: {
    docs: {
      description: {
        story: 'Заголовок переносится, крестик остаётся в правом верхнем углу. Длинная крошка обрезается на 230px, полный текст — в тултипе.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Live size="s" title="Удалить без возможности восстановления все выбранные документы?" withDescription />
      <ModalStoryFrame size="m">
        <ModalHead size="m" title="Перенос помещений" breadcrumbs={['ЖК «Северная долина», корпус 12, секция 4 — жилая часть', 'Секция 1.1', 'Этаж 1']} closable={false} />
        <div style={{
        height: 24
      }} />
      </ModalStoryFrame>
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as LongTitle,T as Minimal,S as Playground,w as Slots,C as Variants,D as __namedExportsOrder,x as default};