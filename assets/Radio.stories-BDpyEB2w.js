import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CvEwutAq.js";import{n,t as r}from"./Radio-t1ZPH1NE.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a={title:`UI Kit/Radio`,component:r,parameters:{layout:`centered`,docs:{description:{component:"\nИсточник — Figma UI Kit «Практис»: компонент Radio (node 95:2860), только Text=False —\nвариант со встроенной подписью отдельно не делали, как и у Checkbox: `antd.Radio` и так\nрендерит произвольные `children` рядом.\n\nKind=Active/Inactive → проп `checked`, State=Hover — нативный `:hover`, State=Disabled →\nпроп `disabled`.\n\n## Отличия от antd-дефолта\n\n- Тот же принцип, что у **UI Kit/Checkbox**: hover на уже активном radio темнеет до\n  `button/accent-hover` (`blue/700`, `#1a68e8`) — и кольцо, и точка. В Figma такого\n  состояния нет, в ките делаем правильно (2026-09-17). Disabled — общие с кнопками и чекбоксом\n  `bg/black-disabled` (заливка) и `border/black-disabled` (рамка).\n- **Заливка активного radio инвертирована.** antd по умолчанию красит ВЕСЬ круг акцентным\n  цветом и вырезает белую точку внутри. В Figma наоборот: тонкое цветное кольцо (просто рамка)\n  и отдельная закрашенная точка внутри, с видимым просветом фона между ними — переопределено в\n  `Radio.module.css` (disabled-состояние уже совпадало без правок — antd там красит именно\n  фон в серый, как и нужно).\n\n## Готча в самой Figma\n\n`Kind=Inactive, State=Hover` в Figma экспортировался идентично `State=Default` (тот же серый\n`#dddddd`, без акцентной синей рамки на hover) — в отличие от Checkbox, где hover у\nнеактивного состояния явно красит рамку в синий. Сделано по аналогии с Checkbox (рамка на\nhover синеет) — на случай, если это просто недоделанный вариант в Figma, а не осознанное\nотличие radio от checkbox.\n"}}},tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`}}},o={args:{defaultChecked:!1}},s={parameters:{docs:{description:{story:`Слева направо: Active, Inactive. Сверху вниз: Default, Disabled.`}}},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,i.jsx)(r,{checked:!0}),(0,i.jsx)(r,{checked:!1})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,i.jsx)(r,{checked:!0,disabled:!0}),(0,i.jsx)(r,{checked:!1,disabled:!0})]})]})},c={args:{defaultChecked:!0}},l={args:{disabled:!0}},u={args:{disabled:!0,defaultChecked:!0}},d={render:()=>(0,i.jsxs)(r.Group,{defaultValue:`b`,children:[(0,i.jsx)(r,{value:`a`}),(0,i.jsx)(r,{value:`b`}),(0,i.jsx)(r,{value:`c`})]})},f={render:e=>(0,i.jsx)(r,{...e,children:`Подпись рядом с radio`})},p=[`Playground`,`States`,`Active`,`Disabled`,`DisabledActive`,`Group`,`WithLabel`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слева направо: Active, Inactive. Сверху вниз: Default, Disabled.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div style={{
      display: 'flex',
      gap: 16
    }}>
        <Radio checked />
        <Radio checked={false} />
      </div>
      <div style={{
      display: 'flex',
      gap: 16
    }}>
        <Radio checked disabled />
        <Radio checked={false} disabled />
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Radio.Group defaultValue="b">
      <Radio value="a" />
      <Radio value="b" />
      <Radio value="c" />
    </Radio.Group>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Radio {...args}>Подпись рядом с radio</Radio>
}`,...f.parameters?.docs?.source}}}})))()}m();export{c as Active,l as Disabled,u as DisabledActive,d as Group,o as Playground,s as States,f as WithLabel,p as __namedExportsOrder,a as default};