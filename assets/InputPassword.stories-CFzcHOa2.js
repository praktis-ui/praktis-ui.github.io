import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./input-D09Zds6B.js";import{n as i}from"./iframe-r_k3QGfr.js";import{fo as a,t as o,uo as s}from"./icons-CxwqsfdL.js";import{a as c,n as l,o as u,t as d}from"./InputChrome-PdrhLdIi.js";function f({size:e=`m`,label:t,required:n,infoText:i,errorMessage:o,status:l,className:u,disabled:f,...g}){let _=(0,p.useRef)(null),v=(0,m.jsx)(r.Password,{...g,ref:_,disabled:f,status:l,size:h[e],className:[c.input,u].filter(Boolean).join(` `),iconRender:e=>e?(0,m.jsx)(a,{size:14}):(0,m.jsx)(s,{size:14})});return(0,m.jsx)(d,{label:t,required:n,infoText:i,errorMessage:o,isError:l===`error`,disabled:f,field:v,valueTooltip:null})}var p,m,h;function g(){return(g=e((()=>{n(),p=t(),o(),l(),u(),m=i(),h={s:`small`,m:`middle`},f.__docgenInfo={description:``,methods:[],displayName:`InputPassword`,props:{size:{required:!1,tsType:{name:`union`,raw:`'s' | 'm'`,elements:[{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`}]},description:``,defaultValue:{value:`'m'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},infoText:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})))()}var _,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{g(),_=i(),v={title:`UI Kit/InputPassword`,component:f,parameters:{layout:`centered`,docs:{description:{component:'\nИсточник — Figma UI Kit «Практис», компонент Password (node 773:329). Визуально и по\nповедению — тот же `Input` (те же токены цвета, тот же `InputChrome` для label/required/\ninfoText/errorMessage — см. документацию **UI Kit/Input**), плюс переключатель видимости\n(глаз) справа — стандартное поведение antd `Input.Password` (type="password" ↔ "text" по\nклику), только со своими иконками (`IconEye`/`IconEyeDisable` из кита вместо antd-дефолта).\n\n**Тултип с полным значением при обрезке — здесь намеренно отключён**, в отличие от обычного\n`Input`: он раскрывал бы замаскированный пароль открытым текстом при наведении. Остальные\nтултипы (лейбл-инфо, сообщение об ошибке) работают как обычно.\n'}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},errorMessage:{control:`text`}},args:{placeholder:`Input password`,size:`m`,label:`Label`,required:!0}},y={},b={args:{label:void 0}},x={args:{label:void 0,defaultValue:`Motherlode`}},S={render:e=>(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,_.jsx)(f,{...e,size:`s`,label:void 0,defaultValue:`Motherlode`}),(0,_.jsx)(f,{...e,size:`m`,label:void 0,defaultValue:`Motherlode`})]})},C={render:e=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,_.jsx)(f,{...e,label:void 0,placeholder:`Default`}),(0,_.jsx)(f,{...e,label:void 0,defaultValue:`Motherlode`}),(0,_.jsx)(f,{...e,label:void 0,status:`error`,placeholder:`Error`}),(0,_.jsx)(f,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})},w={args:{status:`error`,errorMessage:`Поле обязательно для заполнения`}},T={args:{disabled:!0,defaultValue:`Motherlode`}},E=[`Playground`,`Bare`,`ToggleVisibility`,`Sizes`,`States`,`Error`,`Disabled`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    defaultValue: 'Motherlode'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <InputPassword {...args} size="s" label={undefined} defaultValue="Motherlode" />
      <InputPassword {...args} size="m" label={undefined} defaultValue="Motherlode" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <InputPassword {...args} label={undefined} placeholder="Default" />
      <InputPassword {...args} label={undefined} defaultValue="Motherlode" />
      <InputPassword {...args} label={undefined} status="error" placeholder="Error" />
      <InputPassword {...args} label={undefined} disabled placeholder="Disabled" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    errorMessage: 'Поле обязательно для заполнения'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Motherlode'
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{b as Bare,T as Disabled,w as Error,y as Playground,S as Sizes,C as States,x as ToggleVisibility,E as __namedExportsOrder,v as default};