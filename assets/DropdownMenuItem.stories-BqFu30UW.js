import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{g as n,h as r,n as i}from"./iframe-Cfof-CBm.js";import{M as a,Wt as o,t as s,wi as c}from"./icons-BS4H7Flo.js";import{n as l,t as u}from"./DropdownMenuItem-BkrxdI56.js";function d(e){let[t,n]=(0,h.useState)(e.selected??!1);return(0,g.jsx)(u,{...e,selected:t,onClick:()=>{e.disabled||n(e=>!e)}})}function f({children:e,width:t=244}){let{token:r}=n.useToken(),i={display:`flex`,flexDirection:`column`,gap:4,width:t,boxSizing:`border-box`,flexShrink:0,padding:8,borderRadius:6,background:r.colorBgContainer,border:`1px solid ${r.colorBorder}`};return(0,g.jsx)(`div`,{style:i,children:e})}function p({mark:e}){let[t,n]=(0,h.useState)([`a`]),r=e===`checkbox`,i=e=>n(t=>r?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t.includes(e)?t:[e]);return(0,g.jsxs)(f,{width:220,children:[(0,g.jsxs)(`div`,{style:{fontSize:12,opacity:.6,padding:`0 12px`},children:[`mark="`,e,`"`]}),[{key:`a`,label:`Первый пункт`},{key:`b`,label:`Второй пункт`}].map(n=>(0,g.jsx)(u,{mark:e,label:n.label,selected:t.includes(n.key),onClick:()=>i(n.key)},n.key))]})}function m(){let[e,t]=(0,h.useState)(`profile`);return(0,g.jsx)(f,{width:260,children:[{key:`profile`,label:`Настройки профиля`,icon:(0,g.jsx)(o,{size:16})},{key:`company`,label:`ООО «Сетл Тех»`,icon:(0,g.jsx)(a,{size:16})},{key:`logout`,label:`Выйти`,icon:(0,g.jsx)(c,{size:16})}].map(n=>(0,g.jsx)(u,{label:n.label,icon:n.icon,selected:e===n.key,onClick:()=>t(n.key)},n.key))})}var h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),h=t(),s(),l(),g=i(),_={title:`UI Kit/DropdownMenuItem`,component:u,parameters:{layout:`padded`,docs:{description:{component:"\nИсточник — Figma UI Kit «Практис»: **DropdownMenu/DropdownMenuItem** (внутри node 189:2587).\n\nОтдельная молекула, а не часть **UI Kit/DropdownMenu**: в выпадающем списке она используется\nчаще всего, но пригодится и там, где выпадающего списка нет — списком в панели, в карточке,\nв боковом меню. Весь внешний вид пункта живёт здесь: **UI Kit/DropdownMenu** складывает эти же\nкомпоненты внутрь меню antd и своей второй отрисовки не имеет.\n\n## Из чего состоит\n\n| Проп | Что делает |\n|---|---|\n| `label` | основной текст |\n| `description` | вторая строка-пояснение под основным текстом |\n| `icon` | иконка 16×16 слева — есть или нет |\n| `mark` | чем помечать выбранное |\n| `multiline` | умещать текст в несколько строк вместо отточия |\n| `selected`, `disabled` | состояние |\n\n`mark`: `none` — ничем, только фон и цвет текста; `tick` — галочка справа; `checkbox` —\nчекбокс слева; `radio` — радиокнопка слева. Чекбокс и радио **только показывают** состояние,\nклики они не перехватывают — обрабатывает сам пункт.\n\n## Почему пропы не повторяют оси Figma\n\nВ макете ось **Type** смешивает две независимые вещи: `Icon`/`Text` — это про **наличие\nиконки**, а `Checkbox`/`Tick` — про **способ пометки выбранного**. Из-за этого «пункт без\nметки» в неё не помещается: его некуда назвать.\n\nЗдесь они разведены: за иконку отвечает `icon`, за метку — `mark` (и у него есть честное\nзначение `none`). Иконка и метка сочетаются свободно — например иконка вместе с чекбоксом.\nОсь `Multue-line` тоже не отвечает за вторую строку: `multiline` — про перенос основного\nтекста, `description` — про пояснение, и они независимы.\n\n## Что пункт не делает сам\n\nНе хранит выбор и не обрабатывает клавиатуру: `selected` и `disabled` приходят снаружи.\nВнутри меню это берёт на себя antd, снаружи — тот, кто ставит пункт. Ховер нативный, задавать\nего не нужно.\n"}}},tags:[`autodocs`],argTypes:{mark:{control:`inline-radio`,options:[`none`,`tick`,`checkbox`,`radio`]},selected:{control:`boolean`},disabled:{control:`boolean`},multiline:{control:`boolean`}},args:{label:`Настройки профиля`,mark:`none`,selected:!1,disabled:!1,multiline:!1}},v={parameters:{docs:{description:{story:"Кликни по пункту — выбор переключится. Важно: переключает его не сам пункт, а история: `selected` всегда приходит снаружи. Пункт только показывает состояние и сообщает о клике через `onClick`."}}},render:e=>(0,g.jsx)(`div`,{style:{width:244},children:(0,g.jsx)(d,{...e})})},y={parameters:{docs:{description:{story:`Иконка — просто ещё один проп: сочетается с любой меткой и со второй строкой. В последнем пункте иконка и чекбокс стоят вместе — в осях Figma такой комбинации просто нет.`}}},render:e=>(0,g.jsxs)(f,{children:[(0,g.jsx)(u,{...e,label:`С иконкой`,icon:(0,g.jsx)(a,{size:16})}),(0,g.jsx)(u,{...e,label:`Без иконки`}),(0,g.jsx)(u,{...e,label:`Со второй строкой`,description:`Пояснение под основным текстом`,icon:(0,g.jsx)(o,{size:16})}),(0,g.jsx)(u,{...e,label:`Иконка и чекбокс`,icon:(0,g.jsx)(o,{size:16}),mark:`checkbox`,selected:!0})]})},b={parameters:{docs:{description:{story:"Все четыре значения `mark` — по ним можно кликать. У `checkbox` выбор множественный, у `radio` и `tick` одиночный; но это правило задаёт история, пункт лишь показывает переданное `selected`."}}},render:()=>(0,g.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[`none`,`tick`,`checkbox`,`radio`].map(e=>(0,g.jsx)(p,{mark:e},e))})},x={parameters:{docs:{description:{story:`Наведи мышью, чтобы увидеть Hover и Hover-Selected. Последний пункт — «выбранный по умолчанию, который нельзя развыбрать»: единственный disabled без приглушения текста, фон едва серый (не синий), иконка и галочка приглушены.`}}},render:e=>(0,g.jsxs)(f,{children:[(0,g.jsx)(u,{...e,label:`Default`,icon:(0,g.jsx)(a,{size:16})}),(0,g.jsx)(u,{...e,label:`Selected`,icon:(0,g.jsx)(a,{size:16}),selected:!0,mark:`tick`}),(0,g.jsx)(u,{...e,label:`Disabled`,icon:(0,g.jsx)(a,{size:16}),disabled:!0}),(0,g.jsx)(u,{...e,label:`Disabled-Selected`,icon:(0,g.jsx)(a,{size:16}),disabled:!0,selected:!0,mark:`tick`})]})},S={parameters:{docs:{description:{story:"Слева `multiline` выключен — текст режется отточием, справа включён — переносится. `description` одинаковый."}}},render:e=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,g.jsx)(f,{children:(0,g.jsx)(u,{...e,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`,icon:(0,g.jsx)(a,{size:16})})}),(0,g.jsx)(f,{children:(0,g.jsx)(u,{...e,multiline:!0,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`,icon:(0,g.jsx)(a,{size:16})})})]})},C={parameters:{docs:{description:{story:`Ради чего компонент и вынесли: те же пункты без всякого выпадающего меню — например боковая панель. Выбор здесь хранит сам экран, пункт только показывает его.`}}},render:()=>(0,g.jsx)(m,{})},w=[`Playground`,`WithIcon`,`Marks`,`States`,`Multiline`,`OutsideMenu`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кликни по пункту — выбор переключится. Важно: переключает его не сам пункт, а история: \`selected\` всегда приходит снаружи. Пункт только показывает состояние и сообщает о клике через \`onClick\`.'
      }
    }
  },
  render: args => <div style={{
    width: 244
  }}>
      <PlaygroundExample {...args} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Иконка — просто ещё один проп: сочетается с любой меткой и со второй строкой. В последнем пункте иконка и чекбокс стоят вместе — в осях Figma такой комбинации просто нет.'
      }
    }
  },
  render: args => <Panel>
      <DropdownMenuItem {...args} label="С иконкой" icon={<IconUser size={16} />} />
      <DropdownMenuItem {...args} label="Без иконки" />
      <DropdownMenuItem {...args} label="Со второй строкой" description="Пояснение под основным текстом" icon={<IconSetting size={16} />} />
      <DropdownMenuItem {...args} label="Иконка и чекбокс" icon={<IconSetting size={16} />} mark="checkbox" selected />
    </Panel>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все четыре значения \`mark\` — по ним можно кликать. У \`checkbox\` выбор множественный, у \`radio\` и \`tick\` одиночный; но это правило задаёт история, пункт лишь показывает переданное \`selected\`.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      {(['none', 'tick', 'checkbox', 'radio'] satisfies DropdownMenuMark[]).map(mark => <MarkPanel key={mark} mark={mark} />)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Наведи мышью, чтобы увидеть Hover и Hover-Selected. Последний пункт — «выбранный по умолчанию, который нельзя развыбрать»: единственный disabled без приглушения текста, фон едва серый (не синий), иконка и галочка приглушены.'
      }
    }
  },
  render: args => <Panel>
      <DropdownMenuItem {...args} label="Default" icon={<IconUser size={16} />} />
      <DropdownMenuItem {...args} label="Selected" icon={<IconUser size={16} />} selected mark="tick" />
      <DropdownMenuItem {...args} label="Disabled" icon={<IconUser size={16} />} disabled />
      <DropdownMenuItem {...args} label="Disabled-Selected" icon={<IconUser size={16} />} disabled selected mark="tick" />
    </Panel>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слева \`multiline\` выключен — текст режется отточием, справа включён — переносится. \`description\` одинаковый.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <Panel>
        <DropdownMenuItem {...args} label="Длинное название пункта в две строки" description="пример: по умолчанию выбранный пункт, который нельзя развыбрать" icon={<IconUser size={16} />} />
      </Panel>
      <Panel>
        <DropdownMenuItem {...args} multiline label="Длинное название пункта в две строки" description="пример: по умолчанию выбранный пункт, который нельзя развыбрать" icon={<IconUser size={16} />} />
      </Panel>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Ради чего компонент и вынесли: те же пункты без всякого выпадающего меню — например боковая панель. Выбор здесь хранит сам экран, пункт только показывает его.'
      }
    }
  },
  render: () => <SidePanelExample />
}`,...C.parameters?.docs?.source}}}})))()}T();export{b as Marks,S as Multiline,C as OutsideMenu,v as Playground,x as States,y as WithIcon,w as __namedExportsOrder,_ as default};