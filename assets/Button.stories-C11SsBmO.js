import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,n}from"./iframe-Cfof-CBm.js";import{n as r,t as i}from"./Button-BtSgbizB.js";import{Ao as a,H as o,Qt as s,nr as c,t as l}from"./icons-BS4H7Flo.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l(),t(),r(),u=n(),d={title:`UI Kit/Button`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`stroke`,`link`]},size:{control:`select`,options:[`small`,`middle`,`large`]},disabled:{control:`boolean`},danger:{control:`boolean`}},args:{children:`Button title`,variant:`primary`,size:`middle`,disabled:!1}},f={},p={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,u.jsx)(i,{...e,variant:`primary`,children:`Primary`}),(0,u.jsx)(i,{...e,variant:`secondary`,children:`Secondary`}),(0,u.jsx)(i,{...e,variant:`stroke`,children:`Stroke`}),(0,u.jsx)(i,{...e,variant:`link`,children:`Link`})]})},m={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,u.jsx)(i,{...e,size:`small`,children:`Small`}),(0,u.jsx)(i,{...e,size:`middle`,children:`Middle`}),(0,u.jsx)(i,{...e,size:`large`,children:`Large`})]})},h={parameters:{docs:{description:{story:"Заливка `bg/black-disabled` у всех типов, кроме Stroke — у него рамка `border/black-disabled` и прозрачный фон. Те же два токена используют Checkbox и Radio в disabled."}}},render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,u.jsx)(i,{...e,variant:`primary`,disabled:!0,children:`Primary`}),(0,u.jsx)(i,{...e,variant:`secondary`,disabled:!0,children:`Secondary`}),(0,u.jsx)(i,{...e,variant:`stroke`,disabled:!0,children:`Stroke`}),(0,u.jsx)(i,{...e,variant:`link`,disabled:!0,children:`Link`})]})},g={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,u.jsx)(i,{...e,variant:`secondary`,danger:!0,children:`Secondary`}),(0,u.jsx)(i,{...e,variant:`stroke`,danger:!0,children:`Stroke`}),(0,u.jsx)(i,{...e,variant:`link`,danger:!0,children:`Link`})]})},_={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,u.jsx)(i,{...e,icon:(0,u.jsx)(s,{size:14}),children:`Слева`}),(0,u.jsx)(i,{...e,icon:(0,u.jsx)(s,{size:14}),iconPosition:`end`,children:`Справа`})]})},v={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,u.jsx)(i,{...e,variant:`primary`,icon:(0,u.jsx)(s,{size:14}),children:null}),(0,u.jsx)(i,{...e,variant:`secondary`,icon:(0,u.jsx)(c,{size:14}),children:null}),(0,u.jsx)(i,{...e,variant:`stroke`,icon:(0,u.jsx)(a,{size:14}),children:null}),(0,u.jsx)(i,{...e,variant:`link`,icon:(0,u.jsx)(o,{size:14}),children:null})]})},y={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,u.jsx)(i,{...e,variant:`secondary`,danger:!0,children:`Default`}),(0,u.jsx)(i,{...e,variant:`stroke`,danger:!0,children:`Default`}),(0,u.jsx)(i,{...e,variant:`link`,danger:!0,children:`Default`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,u.jsx)(i,{...e,variant:`secondary`,danger:!0,disabled:!0,children:`Disabled`}),(0,u.jsx)(i,{...e,variant:`stroke`,danger:!0,disabled:!0,children:`Disabled`}),(0,u.jsx)(i,{...e,variant:`link`,danger:!0,disabled:!0,children:`Disabled`})]})]})},b=[`Playground`,`Variants`,`Sizes`,`Disabled`,`Danger`,`WithIcon`,`IconOnly`,`DangerStates`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="stroke">Stroke</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      <Button {...args} size="small">Small</Button>
      <Button {...args} size="middle">Middle</Button>
      <Button {...args} size="large">Large</Button>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button {...args} variant="secondary" danger>Secondary</Button>
      <Button {...args} variant="stroke" danger>Stroke</Button>
      <Button {...args} variant="link" danger>Link</Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button {...args} icon={<IconSearch size={buttonIconSize} />}>Слева</Button>
      <Button {...args} icon={<IconSearch size={buttonIconSize} />} iconPosition="end">Справа</Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{g as Danger,y as DangerStates,h as Disabled,v as IconOnly,f as Playground,m as Sizes,p as Variants,_ as WithIcon,b as __namedExportsOrder,d as default};