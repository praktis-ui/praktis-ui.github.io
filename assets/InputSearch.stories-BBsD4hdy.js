import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./input-cSo9z8EP.js";import{n as i}from"./iframe-Cfof-CBm.js";import{An as a,Qt as o,t as s}from"./icons-BS4H7Flo.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./InputChrome-xn7DFgZ0.js";var m,h;function g(){return(g=e((()=>{m=`_search_1g5jt_20`,h={search:m}})))()}function _({size:e=`m`,label:t,required:n,infoText:i,errorMessage:s,status:u,className:d,disabled:f,allowClear:m=!0,placeholder:g=`Search`,defaultValue:_,value:x,onChange:S,...C}){let w=(0,v.useRef)(null),[T,E]=(0,v.useState)(()=>String(x??_??``)),D=l(()=>w.current?.input,[T]),O=(0,y.jsx)(r.Search,{...C,ref:w,disabled:f,status:u,size:b[e],placeholder:g,defaultValue:_,value:x,onChange:e=>{E(e.target.value),S?.(e)},allowClear:m===!0?{clearIcon:(0,y.jsx)(a,{size:14})}:m,enterButton:(0,y.jsx)(o,{size:14}),className:[h.search,c.input,d].filter(Boolean).join(` `)});return(0,y.jsx)(p,{label:t,required:n,infoText:i,errorMessage:s,isError:u===`error`,disabled:f,field:O,valueTooltip:{truncated:D,value:T}})}var v,y,b;function x(){return(x=e((()=>{n(),v=t(),s(),u(),g(),d(),f(),y=i(),b={s:`small`,m:`middle`},_.__docgenInfo={description:``,methods:[],displayName:`InputSearch`,props:{size:{required:!1,tsType:{name:`union`,raw:`'s' | 'm'`,elements:[{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`}]},description:``,defaultValue:{value:`'m'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},infoText:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`ReactNode`},description:``},allowClear:{defaultValue:{value:`true`,computed:!1},required:!1},placeholder:{defaultValue:{value:`'Search'`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{x(),S=i(),C={title:`UI Kit/InputSearch`,component:_,parameters:{layout:`centered`,docs:{description:{component:`
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
`}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`}},args:{size:`m`,label:`Label`,required:!0}},w={},T={args:{label:void 0}},E={render:e=>(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,S.jsx)(_,{...e,size:`s`,label:void 0}),(0,S.jsx)(_,{...e,size:`m`,label:void 0})]})},D={parameters:{docs:{description:{story:`Кликни в Default — фокус-рамка та же, что у Input/Password (blue/600). Наведи на кнопку-лупу — её собственная рамка и иконка станут акцентно-синими, как в демо antd.`}}},render:e=>(0,S.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,S.jsx)(_,{...e,label:void 0,placeholder:`Default`}),(0,S.jsx)(_,{...e,label:void 0,defaultValue:`Field content`}),(0,S.jsx)(_,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})},O={},k={args:{disabled:!0,defaultValue:`Field content`}},A={args:{label:void 0,defaultValue:`Field content`}},j=[`Playground`,`Bare`,`Sizes`,`States`,`WithLabel`,`Disabled`,`AllowClear`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <InputSearch {...args} size="s" label={undefined} />
      <InputSearch {...args} size="m" label={undefined} />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Field content'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    defaultValue: 'Field content'
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{A as AllowClear,T as Bare,k as Disabled,w as Playground,E as Sizes,D as States,O as WithLabel,j as __namedExportsOrder,C as default};