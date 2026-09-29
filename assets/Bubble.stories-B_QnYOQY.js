import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i,t as a}from"./Bubble-U-_dHN-H.js";function o({on:e,title:t,children:n}){return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{style:d,children:t}),(0,c.jsx)(`div`,{style:u(e),children:n})]})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{s=t(),i(),c=n(),l={title:`UI Kit/Навигация/Bubble`,id:`ui-kit-bubble`,component:a,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: **Bubble** (node 6602:3840). Вкладки-«пузыри» — переключатель
внутри модалок и разделов. Тоже вкладки, но другие, чем **Tabs**.

Макет упрощён (разбор с Анастасией 2026-09-24): в Figma было 36 вариантов на пяти осях с дырами.

| Проп | Значения | Что было в Figma |
|---|---|---|
| \`size\` | \`xs\` пилюля 24 · \`s\` пилюля 36 · \`m\` плитка 60 (ширина 126, до 3 строк) | Size + Device (Mob/Tablet/Web), Tablet 79 убран |
| \`on\` | \`white\` — лежит на белом (бабл серый) · \`grey\` — на сером (бабл белый) | Color = Dark / White |
| \`selected\` | выбран | Status = Active; Hover и Hover/Active — это CSS |
| \`dot\`, \`count\` | точка статуса слева, счётчик справа | Type = Status (был только в одном размере) |
| \`isNew\` | точка «новое» в углу — **Bulb** кита | свойство New (своя точка 10px) |

**Состояния:** ховер на обоих фонах голубой (blue/200), выбранный — blue/320 и акцентный текст,
выбранный под курсором — blue/350. Анимация — дефолты antd, как у кнопок.

**Шрифт** \`s\` и \`m\` — Base/Normal: 14 в вебе, 13 на мобильном (адаптивный токен). \`xs\` — Small/Normal 12.

**Ширина** пилюль — по содержимому, длинная подпись уходит в отточие.

**BubbleTabs** — группа как вкладки: один выбран, стрелки ← →, Home, End.

## Когда вкладки не помещаются

| \`overflow\` | Что происходит | Где |
|---|---|---|
| \`wrap\` (по умолчанию) | переносятся на следующую строку | на странице, где место по высоте есть |
| \`scroll\` | остаются в одну строку и уходят вбок, **полосы прокрутки не видно** | внутри модалок и панелей, где вкладки — одна строка над содержимым |

Как двигать ряд при \`overflow="scroll"\`:

| Чем | Как |
|---|---|
| Мышь — перетаскивание | зажать на ряду и тянуть вбок, курсор «рука». Сдвиг больше 4px — это перетаскивание: вкладка под курсором при отпускании **не выбирается** |
| Мышь — колесо | обычное колесо, без Shift, двигает ряд вбок. Упёрся в край — колесо снова крутит страницу или модалку |
| Тачпад, свайп | как обычная горизонтальная прокрутка |
| Клавиатура | ← → Home End переключают вкладку, выбранная сама доезжает в видимую область |

Ряд не распирает родителя шириной всех вкладок в линию и не сжимается по высоте — его можно
класть в боковую модалку и любую flex-колонку.
`}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`xs`,`s`,`m`]},on:{control:`inline-radio`,options:[`white`,`grey`]},children:{control:`text`},count:{control:`text`}},args:{children:`Корпус 1`,size:`s`,on:`white`,selected:!1,dot:!1,isNew:!1}},u=e=>({background:e===`grey`?`var(--bubble-on-white)`:`var(--bubble-on-grey)`,padding:16,borderRadius:12,display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`}),d={fontFamily:`Inter, sans-serif`,fontSize:12,opacity:.6,margin:`0 0 6px`},f={render:e=>(0,c.jsx)(o,{on:e.on??`white`,title:`on="${e.on}"`,children:(0,c.jsx)(a,{...e})})},p={name:`Размеры × фон × состояние`,parameters:{docs:{description:{story:`Наведите курсор — ховер голубой на обоих фонах.`}}},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16},children:[`white`,`grey`].map(e=>(0,c.jsx)(o,{on:e,title:e===`white`?`on="white" — на белом фоне`:`on="grey" — на сером фоне`,children:[`xs`,`s`,`m`].map(t=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(a,{size:t,on:e,children:`Корпус 1`}),(0,c.jsx)(a,{size:t,on:e,selected:!0,children:`Корпус 1`})]},t))},e))})},m={name:`Точка статуса и счётчик`,parameters:{docs:{description:{story:"Бывший Type=Status из макета — теперь `dot` и `count` в любом размере."}}},render:()=>(0,c.jsxs)(o,{on:`white`,title:`dot + count`,children:[(0,c.jsx)(a,{size:`xs`,dot:!0,count:12,children:`Черновик`}),(0,c.jsx)(a,{size:`s`,dot:!0,count:12,children:`Черновик`}),(0,c.jsx)(a,{size:`s`,dot:!0,count:3,selected:!0,children:`На согласовании`}),(0,c.jsx)(a,{size:`s`,count:128,children:`Все`})]})},h={name:`Новое`,render:()=>(0,c.jsxs)(o,{on:`white`,title:`isNew — Bulb kind="dot" кита`,children:[(0,c.jsx)(a,{size:`xs`,isNew:!0,children:`Корпус 2`}),(0,c.jsx)(a,{size:`s`,isNew:!0,children:`Корпус 2`}),(0,c.jsx)(a,{size:`s`,isNew:!0,selected:!0,children:`Корпус 2`})]})},g={name:`Плитки m — до 3 строк`,render:()=>(0,c.jsxs)(o,{on:`grey`,title:`size="m", ширина 126, текст по центру, дальше отточие`,children:[(0,c.jsx)(a,{size:`m`,on:`grey`,children:`Корпус 1`}),(0,c.jsx)(a,{size:`m`,on:`grey`,selected:!0,children:`Подземный паркинг`}),(0,c.jsx)(a,{size:`m`,on:`grey`,children:`Встроенно-пристроенные помещения первого этажа`})]})},_={name:`Длинная подпись`,render:()=>(0,c.jsx)(`div`,{style:{width:260},children:(0,c.jsx)(o,{on:`white`,title:`контейнер 260px`,children:(0,c.jsx)(a,{size:`s`,children:`Корпус 1, секция А, подъезд 3`})})})},v={name:`BubbleTabs — группа`,render:function(){let[e,t]=(0,s.useState)(`k1`);return(0,c.jsx)(o,{on:`white`,title:`стрелки ← → переключают`,children:(0,c.jsx)(r,{activeKey:e,onChange:t,items:[{key:`k1`,label:`Корпус 1`},{key:`k2`,label:`Корпус 2`,isNew:!0},{key:`k3`,label:`Корпус 3`},{key:`park`,label:`Паркинг`,count:4}]})})}},y={name:`BubbleTabs — уходят вбок (overflow="scroll")`,parameters:{docs:{description:{story:`Вкладки карточки тендера в ширине содержимого боковой модалки L (652px). Не помещаются — уходят вбок без полосы. Попробуйте: перетащить ряд мышью, покрутить обычным колесом над рядом, выбрать последнюю вкладку стрелкой →.`}}},render:function(){let[e,t]=(0,s.useState)(`main`);return(0,c.jsx)(`div`,{style:{width:652},children:(0,c.jsx)(o,{on:`white`,title:`652px — ширина содержимого боковой модалки L (700 − отступы)`,children:(0,c.jsx)(r,{overflow:`scroll`,activeKey:e,onChange:t,items:[{key:`main`,label:`Основное`},{key:`set`,label:`Набор техкарт`},{key:`norm`,label:`Нормативы сроков`,isNew:!0},{key:`check`,label:`Чек-лист подачи`,isNew:!0},{key:`tz`,label:`Шаблон ТЗ`,isNew:!0},{key:`keys`,label:`Ключи и версия`,isNew:!0}]})})})}},b=[`Playground`,`Matrix`,`StatusAndCount`,`New`,`Tiles`,`LongLabel`,`Tabs`,`Scroll`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Surface on={args.on ?? 'white'} title={\`on="\${args.on}"\`}><Bubble {...args} /></Surface>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Размеры × фон × состояние',
  parameters: {
    docs: {
      description: {
        story: 'Наведите курсор — ховер голубой на обоих фонах.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  }}>
      {(['white', 'grey'] as BubbleOn[]).map(on => <Surface key={on} on={on} title={on === 'white' ? 'on="white" — на белом фоне' : 'on="grey" — на сером фоне'}>
          {(['xs', 's', 'm'] as BubbleSize[]).map(size => <div key={size} style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
              <Bubble size={size} on={on}>Корпус 1</Bubble>
              <Bubble size={size} on={on} selected>Корпус 1</Bubble>
            </div>)}
        </Surface>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Точка статуса и счётчик',
  parameters: {
    docs: {
      description: {
        story: 'Бывший Type=Status из макета — теперь \`dot\` и \`count\` в любом размере.'
      }
    }
  },
  render: () => <Surface on="white" title="dot + count">
      <Bubble size="xs" dot count={12}>Черновик</Bubble>
      <Bubble size="s" dot count={12}>Черновик</Bubble>
      <Bubble size="s" dot count={3} selected>На согласовании</Bubble>
      <Bubble size="s" count={128}>Все</Bubble>
    </Surface>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Новое',
  render: () => <Surface on="white" title="isNew — Bulb kind=&quot;dot&quot; кита">
      <Bubble size="xs" isNew>Корпус 2</Bubble>
      <Bubble size="s" isNew>Корпус 2</Bubble>
      <Bubble size="s" isNew selected>Корпус 2</Bubble>
    </Surface>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Плитки m — до 3 строк',
  render: () => <Surface on="grey" title="size=&quot;m&quot;, ширина 126, текст по центру, дальше отточие">
      <Bubble size="m" on="grey">Корпус 1</Bubble>
      <Bubble size="m" on="grey" selected>Подземный паркинг</Bubble>
      <Bubble size="m" on="grey">Встроенно-пристроенные помещения первого этажа</Bubble>
    </Surface>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Длинная подпись',
  render: () => <div style={{
    width: 260
  }}>
      <Surface on="white" title="контейнер 260px">
        <Bubble size="s">Корпус 1, секция А, подъезд 3</Bubble>
      </Surface>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'BubbleTabs — группа',
  render: function Render() {
    const [key, setKey] = useState('k1');
    return <Surface on="white" title="стрелки ← → переключают">
        <BubbleTabs activeKey={key} onChange={setKey} items={[{
        key: 'k1',
        label: 'Корпус 1'
      }, {
        key: 'k2',
        label: 'Корпус 2',
        isNew: true
      }, {
        key: 'k3',
        label: 'Корпус 3'
      }, {
        key: 'park',
        label: 'Паркинг',
        count: 4
      }]} />
      </Surface>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'BubbleTabs — уходят вбок (overflow="scroll")',
  parameters: {
    docs: {
      description: {
        story: 'Вкладки карточки тендера в ширине содержимого боковой модалки L (652px). Не помещаются — уходят вбок без полосы. ' + 'Попробуйте: перетащить ряд мышью, покрутить обычным колесом над рядом, выбрать последнюю вкладку стрелкой →.'
      }
    }
  },
  render: function Render() {
    const [key, setKey] = useState('main');
    return <div style={{
      width: 652
    }}>
        <Surface on="white" title="652px — ширина содержимого боковой модалки L (700 − отступы)">
          <BubbleTabs overflow="scroll" activeKey={key} onChange={setKey} items={[{
          key: 'main',
          label: 'Основное'
        }, {
          key: 'set',
          label: 'Набор техкарт'
        }, {
          key: 'norm',
          label: 'Нормативы сроков',
          isNew: true
        }, {
          key: 'check',
          label: 'Чек-лист подачи',
          isNew: true
        }, {
          key: 'tz',
          label: 'Шаблон ТЗ',
          isNew: true
        }, {
          key: 'keys',
          label: 'Ключи и версия',
          isNew: true
        }]} />
        </Surface>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as LongLabel,p as Matrix,h as New,f as Playground,y as Scroll,m as StatusAndCount,v as Tabs,g as Tiles,b as __namedExportsOrder,l as default};