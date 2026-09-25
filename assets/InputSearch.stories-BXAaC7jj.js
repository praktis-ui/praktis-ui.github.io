import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-r_k3QGfr.js";import{n,t as r}from"./InputSearch-B9TJM4Mj.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a={title:`UI Kit/InputSearch`,component:r,parameters:{layout:`centered`,docs:{description:{component:`
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
`}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},errorMessage:{control:`text`},placeholder:{control:`text`},allowClear:{control:`boolean`}},args:{size:`m`,label:`Label`,required:!0}},o={},s={args:{label:void 0}},c={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,i.jsx)(r,{...e,size:`s`,label:void 0}),(0,i.jsx)(r,{...e,size:`m`,label:void 0})]})},l={parameters:{docs:{description:{story:`Кликни в Default — фокус-рамка та же, что у Input/Password (blue/600). Наведи на кнопку-лупу — её собственная рамка и иконка станут акцентно-синими, как в демо antd.`}}},render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,i.jsx)(r,{...e,label:void 0,placeholder:`Default`}),(0,i.jsx)(r,{...e,label:void 0,defaultValue:`Field content`}),(0,i.jsx)(r,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})},u={},d={args:{disabled:!0,defaultValue:`Field content`}},f={args:{label:void 0,defaultValue:`Field content`}},p=[`Playground`,`Bare`,`Sizes`,`States`,`WithLabel`,`Disabled`,`AllowClear`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <InputSearch {...args} size="s" label={undefined} />
      <InputSearch {...args} size="m" label={undefined} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Field content'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    defaultValue: 'Field content'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as AllowClear,s as Bare,d as Disabled,o as Playground,c as Sizes,l as States,u as WithLabel,p as __namedExportsOrder,a as default};