import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./input-C-C8TBDf.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{fo as a,mo as o,t as s}from"./icons-B1LEmBjt.js";import{n as c,t as l}from"./Spinner-q0D00AAW.js";import{a as u,n as d,o as f,t as p}from"./InputChrome-wP-YAE1Z.js";function m({size:e=`m`,label:t,required:n,infoText:i,errorMessage:s,status:c,className:d,disabled:f,loading:m,suffix:v,...y}){let b=(0,h.useRef)(null),x=(0,g.jsx)(r.Password,{...y,suffix:m?(0,g.jsx)(l,{}):v,"aria-busy":m||void 0,ref:b,disabled:f,status:c,size:_[e],className:[u.input,d].filter(Boolean).join(` `),iconRender:e=>e?(0,g.jsx)(o,{size:14}):(0,g.jsx)(a,{size:14})});return(0,g.jsx)(p,{label:t,required:n,infoText:i,errorMessage:s,isError:c===`error`,disabled:f,field:x,valueTooltip:null})}var h,g,_;function v(){return(v=e((()=>{n(),h=t(),s(),c(),d(),f(),g=i(),_={s:`small`,m:`middle`},m.__docgenInfo={description:``,methods:[],displayName:`InputPassword`,props:{size:{required:!1,tsType:{name:`union`,raw:`'s' | 'm'`,elements:[{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`}]},description:``,defaultValue:{value:`'m'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},infoText:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:`Идёт загрузка (проверка значения, подгрузка данных) — спиннер справа в поле. Печатать можно.
В Figma у полей загрузки нет — спиннер тот же, что у Select в загрузке.`}},composes:[`Omit`]}})))()}var y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{v(),y=i(),b={title:`UI Kit/Поля и выбор/InputPassword`,id:`ui-kit-inputpassword`,component:m,parameters:{layout:`centered`,docs:{description:{component:'\nИсточник — Figma UI Kit «Практис», компонент Password (node 773:329). Визуально и по\nповедению — тот же `Input` (те же токены цвета, тот же `InputChrome` для label/required/\ninfoText/errorMessage — см. документацию **UI Kit/Input**), плюс переключатель видимости\n(глаз) справа — стандартное поведение antd `Input.Password` (type="password" ↔ "text" по\nклику), только со своими иконками (`IconEye`/`IconEyeDisable` из кита вместо antd-дефолта).\n\n**Тултип с полным значением при обрезке — здесь намеренно отключён**, в отличие от обычного\n`Input`: он раскрывал бы замаскированный пароль открытым текстом при наведении. Остальные\nтултипы (лейбл-инфо, сообщение об ошибке) работают как обычно.\n'}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`,name:`loading (загрузка)`},errorMessage:{control:`text`}},args:{placeholder:`Input password`,size:`m`,label:`Label`,required:!0}},x={},S={args:{label:void 0}},C={args:{label:void 0,defaultValue:`Motherlode`}},w={render:e=>(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,y.jsx)(m,{...e,size:`s`,label:void 0,defaultValue:`Motherlode`}),(0,y.jsx)(m,{...e,size:`m`,label:void 0,defaultValue:`Motherlode`})]})},T={render:e=>(0,y.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,y.jsx)(m,{...e,label:void 0,placeholder:`Default`}),(0,y.jsx)(m,{...e,label:void 0,defaultValue:`Motherlode`}),(0,y.jsx)(m,{...e,label:void 0,status:`error`,placeholder:`Error`}),(0,y.jsx)(m,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})},E={args:{status:`error`,errorMessage:`Поле обязательно для заполнения`}},D={args:{disabled:!0,defaultValue:`Motherlode`}},O={name:`Загрузка`,parameters:{docs:{description:{story:"Проп `loading`: спиннер у правого края, после глаза (как у Select). Печатать можно."}}},args:{loading:!0,defaultValue:`secret-password`}},k=[`Playground`,`Bare`,`ToggleVisibility`,`Sizes`,`States`,`Error`,`Disabled`,`Loading`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    defaultValue: 'Motherlode'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <InputPassword {...args} size="s" label={undefined} defaultValue="Motherlode" />
      <InputPassword {...args} size="m" label={undefined} defaultValue="Motherlode" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <InputPassword {...args} label={undefined} placeholder="Default" />
      <InputPassword {...args} label={undefined} defaultValue="Motherlode" />
      <InputPassword {...args} label={undefined} status="error" placeholder="Error" />
      <InputPassword {...args} label={undefined} disabled placeholder="Disabled" />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    errorMessage: 'Поле обязательно для заполнения'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Motherlode'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка',
  parameters: {
    docs: {
      description: {
        story: 'Проп \`loading\`: спиннер у правого края, после глаза (как у Select). Печатать можно.'
      }
    }
  },
  args: {
    loading: true,
    defaultValue: 'secret-password'
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{S as Bare,D as Disabled,E as Error,O as Loading,x as Playground,w as Sizes,T as States,C as ToggleVisibility,k as __namedExportsOrder,b as default};