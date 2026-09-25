import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{l as n,n as r}from"./iframe-CvEwutAq.js";import{n as i,t as a}from"./Button-CAqVpk3e.js";import{Ao as o,H as s,Qt as c,nr as l,t as u}from"./icons-BmsQWa6t.js";function d(){let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(0);return(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,p.jsx)(a,{loading:e,onClick:()=>{r(e=>e+1),t(!0),setTimeout(()=>t(!1),2e3)},children:`Сохранить`}),(0,p.jsxs)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,color:`#7e7e7e`},children:[`сохранений: `,n]})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{f=t(),u(),n(),i(),p=r(),m={title:`UI Kit/Button`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`stroke`,`link`]},size:{control:`select`,options:[`small`,`middle`,`large`]},disabled:{control:`boolean`},danger:{control:`boolean`},loading:{control:`boolean`,name:`loading (загрузка)`}},args:{children:`Button title`,variant:`primary`,size:`middle`,disabled:!1}},h={},g={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(a,{...e,variant:`primary`,children:`Primary`}),(0,p.jsx)(a,{...e,variant:`secondary`,children:`Secondary`}),(0,p.jsx)(a,{...e,variant:`stroke`,children:`Stroke`}),(0,p.jsx)(a,{...e,variant:`link`,children:`Link`})]})},_={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,p.jsx)(a,{...e,size:`small`,children:`Small`}),(0,p.jsx)(a,{...e,size:`middle`,children:`Middle`}),(0,p.jsx)(a,{...e,size:`large`,children:`Large`})]})},v={parameters:{docs:{description:{story:"Заливка `bg/black-disabled` у всех типов, кроме Stroke — у него рамка `border/black-disabled` и прозрачный фон. Те же два токена используют Checkbox и Radio в disabled."}}},render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(a,{...e,variant:`primary`,disabled:!0,children:`Primary`}),(0,p.jsx)(a,{...e,variant:`secondary`,disabled:!0,children:`Secondary`}),(0,p.jsx)(a,{...e,variant:`stroke`,disabled:!0,children:`Stroke`}),(0,p.jsx)(a,{...e,variant:`link`,disabled:!0,children:`Link`})]})},y={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(a,{...e,variant:`secondary`,danger:!0,children:`Secondary`}),(0,p.jsx)(a,{...e,variant:`stroke`,danger:!0,children:`Stroke`}),(0,p.jsx)(a,{...e,variant:`link`,danger:!0,children:`Link`})]})},b={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(a,{...e,icon:(0,p.jsx)(c,{size:14}),children:`Слева`}),(0,p.jsx)(a,{...e,icon:(0,p.jsx)(c,{size:14}),iconPosition:`end`,children:`Справа`})]})},x={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,p.jsx)(a,{...e,variant:`primary`,icon:(0,p.jsx)(c,{size:14}),children:null}),(0,p.jsx)(a,{...e,variant:`secondary`,icon:(0,p.jsx)(l,{size:14}),children:null}),(0,p.jsx)(a,{...e,variant:`stroke`,icon:(0,p.jsx)(o,{size:14}),children:null}),(0,p.jsx)(a,{...e,variant:`link`,icon:(0,p.jsx)(s,{size:14}),children:null})]})},S={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(a,{...e,variant:`secondary`,danger:!0,children:`Default`}),(0,p.jsx)(a,{...e,variant:`stroke`,danger:!0,children:`Default`}),(0,p.jsx)(a,{...e,variant:`link`,danger:!0,children:`Default`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,p.jsx)(a,{...e,variant:`secondary`,danger:!0,disabled:!0,children:`Disabled`}),(0,p.jsx)(a,{...e,variant:`stroke`,danger:!0,disabled:!0,children:`Disabled`}),(0,p.jsx)(a,{...e,variant:`link`,danger:!0,disabled:!0,children:`Disabled`})]})]})},C={name:`Загрузка`,parameters:{docs:{description:{story:"Проп `loading`: спиннер встаёт на место иконки (или перед текстом), кнопка не нажимается. Спиннер — цветом текста кнопки. В Figma у кнопок загрузки нет — сделано по образцу загрузки Select. Первая кнопка живая: нажми — 2 секунды «сохранения»."}}},render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,p.jsx)(d,{}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,p.jsx)(a,{...e,variant:`primary`,loading:!0,children:`Primary`}),(0,p.jsx)(a,{...e,variant:`secondary`,loading:!0,children:`Secondary`}),(0,p.jsx)(a,{...e,variant:`stroke`,loading:!0,children:`Stroke`}),(0,p.jsx)(a,{...e,variant:`link`,loading:!0,children:`Link`}),(0,p.jsx)(a,{...e,variant:`secondary`,danger:!0,loading:!0,children:`Danger`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,p.jsx)(a,{...e,variant:`primary`,size:`small`,loading:!0,children:`Small`}),(0,p.jsx)(a,{...e,variant:`primary`,size:`large`,loading:!0,children:`Large`}),(0,p.jsx)(a,{...e,variant:`secondary`,icon:(0,p.jsx)(l,{size:14}),loading:!0,children:null}),(0,p.jsx)(a,{...e,variant:`stroke`,icon:(0,p.jsx)(o,{size:14}),loading:!0,children:`С иконкой`})]})]})},w=[`Playground`,`Variants`,`Sizes`,`Disabled`,`Danger`,`WithIcon`,`IconOnly`,`DangerStates`,`Loading`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="stroke">Stroke</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      <Button {...args} size="small">Small</Button>
      <Button {...args} size="middle">Middle</Button>
      <Button {...args} size="large">Large</Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Заливка \`bg/black-disabled\` у всех типов, кроме Stroke — у него рамка \`border/black-disabled\` и прозрачный фон. Те же два токена используют Checkbox и Radio в disabled.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button {...args} variant="primary" disabled>Primary</Button>
      <Button {...args} variant="secondary" disabled>Secondary</Button>
      <Button {...args} variant="stroke" disabled>Stroke</Button>
      <Button {...args} variant="link" disabled>Link</Button>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button {...args} variant="secondary" danger>Secondary</Button>
      <Button {...args} variant="stroke" danger>Stroke</Button>
      <Button {...args} variant="link" danger>Link</Button>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button {...args} icon={<IconSearch size={buttonIconSize} />}>Слева</Button>
      <Button {...args} icon={<IconSearch size={buttonIconSize} />} iconPosition="end">Справа</Button>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      <Button {...args} variant="primary" icon={<IconSearch size={buttonIconSize} />}>{null}</Button>
      <Button {...args} variant="secondary" icon={<IconPlus size={buttonIconSize} />}>{null}</Button>
      <Button {...args} variant="stroke" icon={<IconEdit size={buttonIconSize} />}>{null}</Button>
      <Button {...args} variant="link" icon={<IconTrash size={buttonIconSize} />}>{null}</Button>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button {...args} variant="secondary" danger>Default</Button>
        <Button {...args} variant="stroke" danger>Default</Button>
        <Button {...args} variant="link" danger>Default</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button {...args} variant="secondary" danger disabled>Disabled</Button>
        <Button {...args} variant="stroke" danger disabled>Disabled</Button>
        <Button {...args} variant="link" danger disabled>Disabled</Button>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка',
  parameters: {
    docs: {
      description: {
        story: 'Проп \`loading\`: спиннер встаёт на место иконки (или перед текстом), кнопка не нажимается. Спиннер — цветом текста кнопки. В Figma у кнопок загрузки нет — сделано по образцу загрузки Select. Первая кнопка живая: нажми — 2 секунды «сохранения».'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <SaveDemo />
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
        <Button {...args} variant="primary" loading>Primary</Button>
        <Button {...args} variant="secondary" loading>Secondary</Button>
        <Button {...args} variant="stroke" loading>Stroke</Button>
        <Button {...args} variant="link" loading>Link</Button>
        <Button {...args} variant="secondary" danger loading>Danger</Button>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
        <Button {...args} variant="primary" size="small" loading>Small</Button>
        <Button {...args} variant="primary" size="large" loading>Large</Button>
        <Button {...args} variant="secondary" icon={<IconPlus size={buttonIconSize} />} loading>{null}</Button>
        <Button {...args} variant="stroke" icon={<IconEdit size={buttonIconSize} />} loading>С иконкой</Button>
      </div>
    </div>
}`,...C.parameters?.docs?.source}}}})))()}T();export{y as Danger,S as DangerStates,v as Disabled,x as IconOnly,C as Loading,h as Playground,_ as Sizes,g as Variants,b as WithIcon,w as __namedExportsOrder,m as default};