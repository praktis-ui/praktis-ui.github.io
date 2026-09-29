import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a,t as o}from"./objectStoryData-CXQ68h-o.js";function s({children:e}){return(0,u.jsxs)(`div`,{style:{position:`relative`,width:760,borderRadius:12,overflow:`hidden`},children:[(0,u.jsx)(`img`,{src:o,alt:``,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`cover`}}),(0,u.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(52, 57, 63, 0.49)`}}),(0,u.jsx)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:16,padding:24},children:e})]})}function c(e){let[t,n]=(0,l.useState)(!1);return(0,u.jsx)(s,{children:(0,u.jsx)(`div`,{children:(0,u.jsx)(i,{label:e.label,tone:e.tone,size:e.size,star:e.star,starred:t,onStarChange:n,arrow:e.arrow})})})}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{l=t(),r(),a(),u=n(),d="\nИсточник — Figma UI Kit «Практис»: Status (node 7340:4079). Статус живёт только на фото карточки\nобъекта (**ObjectCard**) и рядом с заголовком группы объектов — для таблиц и форм есть **Tag**.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `tone` | `glass` — стекло (спокойный статус: «В работе», «Архив», «Черновик»); `warning` — истекает срок; `danger` — просрочено; `success` — завершён; `blue` — счётчик, новое | State |\n| `size` | `m` — 30, 16 Medium; `s` — 24, 13 Regular | Saze |\n| `star`, `starred`, `onStarChange` | звёздочка «в избранное» слева; с `onStarChange` — кнопка | star |\n| `arrow` | стрелка-ссылка справа (в макете — у S) | icon |\n\nЦвет не привязан к тексту: «В работе» бывает и стеклом, и оранжевым (примеры ПИР).\n",f=[`glass`,`warning`,`danger`,`success`,`blue`],p={title:`UI Kit/Карточки/ObjectCard/ObjectStatus`,id:`ui-kit-objectstatus`,parameters:{layout:`padded`,docs:{description:{component:d}}},tags:[`autodocs`],argTypes:{label:{control:`text`},tone:{control:`inline-radio`,options:f},size:{control:`inline-radio`,options:[`m`,`s`]},star:{control:`boolean`,table:{category:`Слоты`}},arrow:{control:`boolean`,table:{category:`Слоты`}}},args:{label:`В работе`,tone:`glass`,size:`m`,star:!1,arrow:!1}},m={parameters:{docs:{description:{story:`Звёздочка — живая кнопка «в избранное».`}}},render:e=>(0,u.jsx)(c,{...e})},h={name:`Цвета и размеры`,render:()=>(0,u.jsxs)(s,{children:[[`m`,`s`].map(e=>(0,u.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:f.map(t=>(0,u.jsx)(i,{tone:t,size:e,label:{glass:`В работе`,warning:`Истекает срок сдачи`,danger:`Просрочено`,success:`Завершен`,blue:`2`}[t]},t))},e)),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,u.jsx)(i,{label:`Избранное`,star:!0,starred:!0}),(0,u.jsx)(i,{label:`Не в избранном`,star:!0}),(0,u.jsx)(i,{label:`Ссылка`,size:`s`,arrow:!0})]})]})},g=[`Playground`,`Tones`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Звёздочка — живая кнопка «в избранное».'
      }
    }
  },
  render: args => <Live {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Цвета и размеры',
  render: () => <OnPhoto>
      {(['m', 's'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
          {TONES.map(tone => <ObjectStatus key={tone} tone={tone} size={size} label={{
        glass: 'В работе',
        warning: 'Истекает срок сдачи',
        danger: 'Просрочено',
        success: 'Завершен',
        blue: '2'
      }[tone]} />)}
        </div>)}
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <ObjectStatus label="Избранное" star starred />
        <ObjectStatus label="Не в избранном" star />
        <ObjectStatus label="Ссылка" size="s" arrow />
      </div>
    </OnPhoto>
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Playground,h as Tones,g as __namedExportsOrder,p as default};