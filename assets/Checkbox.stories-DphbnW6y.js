import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Checkbox-CjXPEdxB.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";function a(){let[e,t]=(0,o.useState)([_[0]]),n=e.length===_.length,i=e.length>0&&!n;return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,s.jsx)(r,{checked:n,indeterminate:i,onChange:e=>t(e.target.checked?_:[]),children:`Выбрать все`}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,paddingInlineStart:24},children:(0,s.jsx)(r.Group,{value:e,onChange:e=>t(e),children:(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:_.map(e=>(0,s.jsx)(r,{value:e,children:e},e))})})})]})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{o=t(),n(),s=i(),c={title:`UI Kit/Поля и выбор/Checkbox`,id:`ui-kit-checkbox`,component:r,parameters:{layout:`centered`,docs:{description:{component:"\nИсточник — Figma UI Kit «Практис»: компонент Checkbox (node 95:2460), только Text=False —\nвариант со встроенной подписью отдельно не делали: `antd.Checkbox` и так рендерит произвольные\n`children` рядом с боксом, ничего дополнительного для этого не потребовалось.\n\nKind=Active/Inactive/Indeterminate → пропы `checked`/`indeterminate`, State=Hover — нативный\n`:hover`, State=Disabled → проп `disabled`. Цвет активного/индетерминейта — акцентный синий\nкита (`colorPrimary`), уже общий alias-токен, отдельно не заводили.\n\nИконка галочки и вся архитектура — нативные antd\n([ant.design/components/checkbox](https://ant.design/components/checkbox)): `Checkbox`,\n`Checkbox.Group`, проп `indeterminate`. Своего ничего не рисуем, кастомизируем только цвета.\n\n## Индетерминейт = частичный выбор родителя\n\nСостояние чекбокса-родителя: в шапке таблицы или на группе/папке, когда отмечена **часть**\nдетей. Поведение при клике по такому родителю — история **CheckAll**:\n\n1. Первый клик — родитель становится полностью активным, выбираются **все** дети.\n2. Повторный клик — выбор снимается и с родителя, и со всех детей.\n\nЭто стандартное поведение antd при обычной обвязке `Checkbox` + `Checkbox.Group`, отдельной\nлогики внутри компонента не потребовалось.\n\n## Отличия от antd-дефолта\n\n- **Hover на уже активном/indeterminate** — уходит в `button/accent-hover` (`blue/700`,\n  `#1a68e8`): у активного темнеет заливка, у indeterminate — метка. В Figma такого состояния\n  нет вовсе (там hover активного не отличается от default) — решение Анастасии 2026-09-17:\n  Figma оставляем как есть, а в ките делаем правильно, как у кнопок.\n- **Disabled** — заливка `bg/black-disabled` и рамка `border/black-disabled`: те же два\n  токена, что у disabled-кнопок (заливка — у Primary/Secondary, рамка — у Stroke). До\n  2026-09-17 у контролов была своя пара (`bg/black-active` + `border/black-secondary`),\n  унифицировано и в Figma, и в коде. У antd рамка при disabled завязана на обычный\n  `colorBorder`, поэтому задана отдельно.\n- **Три разных disabled-цвета.** У antd подпись, галочка и индетерминейт-метка при disabled\n  висят на одном `colorTextDisabled`; в Figma это три разных значения: подпись `#cbcbcb`,\n  галочка `#a9a9a9`, метка — получёрная `rgba(40,40,40,0.24)`.\n"}}},tags:[`autodocs`],argTypes:{checked:{control:`boolean`},indeterminate:{control:`boolean`},disabled:{control:`boolean`}}},l={args:{defaultChecked:!1}},u={parameters:{docs:{description:{story:`Слева направо: Active, Inactive, Indeterminate. Сверху вниз: Default, Disabled. Наведи на Inactive — рамка синеет; на Active/Indeterminate — цвет темнеет до button/accent-hover; disabled на наведение не реагирует.`}}},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,s.jsx)(r,{checked:!0}),(0,s.jsx)(r,{checked:!1}),(0,s.jsx)(r,{indeterminate:!0})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,s.jsx)(r,{checked:!0,disabled:!0}),(0,s.jsx)(r,{checked:!1,disabled:!0}),(0,s.jsx)(r,{indeterminate:!0,disabled:!0})]})]})},d={args:{defaultChecked:!0}},f={args:{indeterminate:!0}},p={args:{disabled:!0}},m={args:{disabled:!0,defaultChecked:!0}},h={args:{disabled:!0,indeterminate:!0}},g={render:e=>(0,s.jsx)(r,{...e,children:`Подпись рядом с чекбоксом`})},_=[`Документ 1`,`Документ 2`,`Документ 3`],v={parameters:{docs:{description:{story:`Родитель в индетерминейте, пока отмечена часть детей. Клик по нему — выбираются все; ещё клик — снимается выбор со всех. Обвязка стандартная antd (Checkbox + Checkbox.Group), в самом компоненте ничего для этого не дописано.`}}},render:()=>(0,s.jsx)(a,{})},y=[`Playground`,`States`,`Active`,`Indeterminate`,`Disabled`,`DisabledActive`,`DisabledIndeterminate`,`WithLabel`,`CheckAll`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слева направо: Active, Inactive, Indeterminate. Сверху вниз: Default, Disabled. Наведи на Inactive — рамка синеет; на Active/Indeterminate — цвет темнеет до button/accent-hover; disabled на наведение не реагирует.'
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
        <Checkbox checked />
        <Checkbox checked={false} />
        <Checkbox indeterminate />
      </div>
      <div style={{
      display: 'flex',
      gap: 16
    }}>
        <Checkbox checked disabled />
        <Checkbox checked={false} disabled />
        <Checkbox indeterminate disabled />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    indeterminate: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Checkbox {...args}>Подпись рядом с чекбоксом</Checkbox>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Родитель в индетерминейте, пока отмечена часть детей. Клик по нему — выбираются все; ещё клик — снимается выбор со всех. Обвязка стандартная antd (Checkbox + Checkbox.Group), в самом компоненте ничего для этого не дописано.'
      }
    }
  },
  render: () => <CheckAllExample />
}`,...v.parameters?.docs?.source}}}})))()}b();export{d as Active,v as CheckAll,p as Disabled,m as DisabledActive,h as DisabledIndeterminate,f as Indeterminate,l as Playground,u as States,g as WithLabel,y as __namedExportsOrder,c as default};