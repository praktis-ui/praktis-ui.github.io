import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./InputSearch-DUPnqUY7.js";function a(){let[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)([]);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,width:300},children:[(0,s.jsx)(i,{placeholder:`Поиск по договорам`,loading:e,onSearch:e=>{r(t=>[...t,e||`(пусто)`]),t(!0),setTimeout(()=>t(!1),1500)}}),(0,s.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,color:`#7e7e7e`},children:n.length?`искали: ${n.join(`, `)}`:`введи текст и нажми Enter`})]})}var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o=t(),r(),s=n(),c={title:`UI Kit/Поля и выбор/InputSearch`,id:`ui-kit-inputsearch`,component:i,parameters:{layout:`centered`,docs:{description:{component:`
Источник — Figma UI Kit «Практис», компонент Search (node 2249:979). Та же обвязка
(label/required/infoText/errorMessage) и те же цветовые токены, что у \`Input\`/\`InputPassword\`
— см. **UI Kit/Input**.

Раньше здесь был один переопределённый цвет — акцентный синий фокус-рамки (\`#3c83f6\`) вместо
общего \`#689ff8\` (blue/600). Разбор в самой Figma показал, что это была несогласованность
(человеческая ошибка при сборке компонента), а не задуманное отличие — с 2026-09-10
унифицировано на общий \`border/input-focus\`, отдельного override в коде больше нет.

Едва заметная рамка у disabled (\`#f2f2f2\`) раньше была только здесь — с 2026-09-10
унифицирована на все инпуты кита (см. **UI Kit/Input**).

Кнопка-лупа справа — \`enterButton\` со своей иконкой. В покое её рамка \`#cbcbcb\`, как у поля,
чтобы контрол читался единым (так в Figma), и она не наследует состояния поля: при hover/focus
самого поля кнопка не меняется.

**При наведении на саму кнопку** рамка вокруг неё и иконка уходят в акцентный синий
\`#3c83f6\` — как в [демо antd](https://ant.design/components/input#input-demo-search-input),
где эта область подсвечивается целиком. Архитектура тут антовская (кнопка — обычный antd
\`Button\`), свои у нас только размеры и цвета покоя; в Figma отдельного варианта под hover
именно кнопки нет — там State описывает поле целиком.

\`allowClear\` включён по умолчанию со своей иконкой крестика.
`}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`,name:`loading (загрузка)`},errorMessage:{control:`text`},placeholder:{control:`text`},allowClear:{control:`boolean`}},args:{size:`m`,label:`Label`,required:!0}},l={},u={args:{label:void 0}},d={render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,s.jsx)(i,{...e,size:`s`,label:void 0}),(0,s.jsx)(i,{...e,size:`m`,label:void 0})]})},f={parameters:{docs:{description:{story:`Кликни в Default — фокус-рамка та же, что у Input/Password (blue/600). Наведи на кнопку-лупу — её собственная рамка и иконка станут акцентно-синими, как в демо antd.`}}},render:e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(i,{...e,label:void 0,placeholder:`Default`}),(0,s.jsx)(i,{...e,label:void 0,defaultValue:`Field content`}),(0,s.jsx)(i,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})},p={},m={args:{disabled:!0,defaultValue:`Field content`}},h={args:{label:void 0,defaultValue:`Field content`}},g={name:`Загрузка`,parameters:{docs:{description:{story:"Проп `loading`: спиннер вместо лупы, повторный поиск (Enter, кнопка) не запускается — как у antd Input.Search. Слева — живой пример."}}},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`},children:[(0,s.jsx)(a,{}),(0,s.jsx)(`div`,{style:{width:300},children:(0,s.jsx)(i,{defaultValue:`Договор поставки`,loading:!0})})]})},_=[`Playground`,`Bare`,`Sizes`,`States`,`WithLabel`,`Disabled`,`AllowClear`,`Loading`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <InputSearch {...args} size="s" label={undefined} />
      <InputSearch {...args} size="m" label={undefined} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кликни в Default — фокус-рамка та же, что у Input/Password (blue/600). Наведи на кнопку-лупу — её собственная рамка и иконка станут акцентно-синими, как в демо antd.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <InputSearch {...args} label={undefined} placeholder="Default" />
      <InputSearch {...args} label={undefined} defaultValue="Field content" />
      <InputSearch {...args} label={undefined} disabled placeholder="Disabled" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Field content'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    defaultValue: 'Field content'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка',
  parameters: {
    docs: {
      description: {
        story: 'Проп \`loading\`: спиннер вместо лупы, повторный поиск (Enter, кнопка) не запускается — как у antd Input.Search. Слева — живой пример.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      <SearchDemo />
      <div style={{
      width: 300
    }}>
        <InputSearch defaultValue="Договор поставки" loading />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}}})))()}v();export{h as AllowClear,u as Bare,m as Disabled,g as Loading,l as Playground,d as Sizes,f as States,p as WithLabel,_ as __namedExportsOrder,c as default};