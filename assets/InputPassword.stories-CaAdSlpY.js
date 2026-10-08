import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./InputPassword-ntsggNH_.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),a={title:`UI Kit/Поля и выбор/InputPassword`,id:`ui-kit-inputpassword`,component:r,parameters:{layout:`centered`,docs:{description:{component:'\nИсточник — Figma UI Kit «Практис», компонент Password (node 773:329). Визуально и по\nповедению — тот же `Input` (те же токены цвета, тот же `InputChrome` для label/required/\ninfoText/errorMessage — см. документацию **UI Kit/Input**), плюс переключатель видимости\n(глаз) справа — стандартное поведение antd `Input.Password` (type="password" ↔ "text" по\nклику), только со своими иконками (`IconEye`/`IconEyeDisable` из кита вместо antd-дефолта).\n\n**Тултип с полным значением при обрезке — здесь намеренно отключён**, в отличие от обычного\n`Input`: он раскрывал бы замаскированный пароль открытым текстом при наведении. Остальные\nтултипы (лейбл-инфо, сообщение об ошибке) работают как обычно.\n'}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`,name:`loading (загрузка)`},errorMessage:{control:`text`}},args:{placeholder:`Input password`,size:`m`,label:`Label`,required:!0}},o={},s={args:{label:void 0}},c={args:{label:void 0,defaultValue:`Motherlode`}},l={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,i.jsx)(r,{...e,size:`s`,label:void 0,defaultValue:`Motherlode`}),(0,i.jsx)(r,{...e,size:`m`,label:void 0,defaultValue:`Motherlode`})]})},u={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,i.jsx)(r,{...e,label:void 0,placeholder:`Default`}),(0,i.jsx)(r,{...e,label:void 0,defaultValue:`Motherlode`}),(0,i.jsx)(r,{...e,label:void 0,status:`error`,placeholder:`Error`}),(0,i.jsx)(r,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})},d={args:{status:`error`,errorMessage:`Поле обязательно для заполнения`}},f={args:{disabled:!0,defaultValue:`Motherlode`}},p={name:`Загрузка`,parameters:{docs:{description:{story:"Проп `loading`: спиннер у правого края, после глаза (как у Select). Печатать можно."}}},args:{loading:!0,defaultValue:`secret-password`}},m=[`Playground`,`Bare`,`ToggleVisibility`,`Sizes`,`States`,`Error`,`Disabled`,`Loading`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    defaultValue: 'Motherlode'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <InputPassword {...args} size="s" label={undefined} defaultValue="Motherlode" />
      <InputPassword {...args} size="m" label={undefined} defaultValue="Motherlode" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <InputPassword {...args} label={undefined} placeholder="Default" />
      <InputPassword {...args} label={undefined} defaultValue="Motherlode" />
      <InputPassword {...args} label={undefined} status="error" placeholder="Error" />
      <InputPassword {...args} label={undefined} disabled placeholder="Disabled" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    errorMessage: 'Поле обязательно для заполнения'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Motherlode'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{s as Bare,f as Disabled,d as Error,p as Loading,o as Playground,l as Sizes,u as States,c as ToggleVisibility,m as __namedExportsOrder,a as default};