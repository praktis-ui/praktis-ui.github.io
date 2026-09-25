import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ei as r,In as i,Kt as a,P as o,t as s}from"./icons-B1LEmBjt.js";import{n as c,t as l}from"./Button-Df609tLh.js";import{n as u,t as d}from"./DropdownMenu-DwBg5wsn.js";function f(){let[e,t]=(0,p.useState)(``),n=[...v,{key:`e`,label:`Электромонтажные работы`},{key:`f`,label:`Отделочные работы`}].filter(t=>`type`in t||String(t.label).toLowerCase().includes(e.toLowerCase()));return(0,m.jsx)(d,{items:n,mark:`checkbox`,maxHeight:180,open:!0,popupRender:n=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:{padding:8,paddingBottom:0},children:(0,m.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Поиск`,style:{width:`100%`,boxSizing:`border-box`,padding:`6px 12px`,borderRadius:4,border:`1px solid #dddddd`}})}),n]}),children:(0,m.jsx)(l,{variant:`secondary`,children:`Виды работ`})})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{p=t(),s(),c(),u(),m=n(),h=`
Источник — Figma UI Kit «Практис»: **Dropdown Menu / Menu Item** (node 189:2587).

Обёртка над antd Dropdown: позиционирование, открытие, клавиатура и портал — его, наши только
разметка пункта и стили.

Сам пункт — **отдельный компонент** [UI Kit/DropdownMenuItem](?path=/docs/ui-kit-dropdownmenuitem--docs):
меню складывает эти же пункты внутрь antd-меню и своей второй отрисовки не имеет. Если пункты
нужны без выпадающего списка (списком в панели, в карточке, в боковом меню) — бери их напрямую.

## Как легли варианты из Figma

Их в макете много, но в коде они сводятся к четырём вещам:

| В Figma | В коде |
|---|---|
| Type = Icon / Text | \`icon\` у пункта — есть или нет |
| Type = Checkbox / Tick / Radio | \`mark\` у **всего меню** |
| State = default / hover / selected / disabled … | состояния во время работы, их делает CSS |
| Multue-line = off / on | \`multiline\` — умещать текст в несколько строк |

\`mark\` — чем помечать выбранное: \`none\` (ничем, только фон и цвет текста), \`tick\`
(галочка справа), \`checkbox\` (чекбокс слева, множественный выбор), \`radio\` (радиокнопка
слева, одиночный). Это свойство меню, а не пункта: в макете внутри одного списка либо везде
чекбоксы, либо везде галочки — вперемешку они не встречаются.

## Две строки — это не то же самое, что многострочность

Это независимые вещи, и путать их не надо:

- \`multiline\` — про **основной текст пункта**: умещать его в несколько строк или держать
  в одну и обрезать отточием;
- \`description\` — **вторая строка**, пояснение под основным текстом.

Пояснение бывает и у однострочного пункта, и у многострочного — в макете это две колонки,
«Двойной текст: одна строка» и «Двойной текст: мульти». См. историю **DoubleText**.

## Разделители

Три варианта Sep из макета — это типы пунктов списка:

- \`{ type: 'divider' }\` — только линия;
- \`{ type: 'group', label }\` — подпись с линией сверху;
- \`{ type: 'group', label, line: false }\` — подпись без линии.

## Размеры

Ширина по умолчанию **260px** — рекомендованная в макете. Она фиксированная, как у Select:
длинный пункт уходит в отточие, а не растягивает список. Меняется пропом \`width\`.
\`maxHeight\` включает прокрутку — полоса берётся из **UI Kit/Scrollbar** (вариант \`xs\`),
как и нарисовано в макете. При длинных списках в макете рекомендовано добавлять поиск — это
обычный **UI Kit/Input** над меню, см. историю **WithSearch**.
`,g=[{key:`role`,label:`Заказчик/Организатор`,icon:(0,m.jsx)(i,{size:16})},{type:`group`,label:`Сменить аккаунт:`},{key:`profile`,label:`Настройки профиля`,icon:(0,m.jsx)(a,{size:16})},{key:`setl`,label:`ООО «Сетл Тех»`,icon:(0,m.jsx)(o,{size:16})},{type:`divider`},{key:`long`,label:`ООО «Охушки такие воробушки и другое длинное название»`,icon:(0,m.jsx)(o,{size:16}),disabled:!0},{key:`logout`,label:`Выйти`,icon:(0,m.jsx)(r,{size:16})}],_=[{key:`a`,label:`Настройки профиля`},{key:`b`,label:`ООО «Сетл Тех»`},{key:`c`,label:`ООО «Охушки такие воробушки»`,disabled:!0},{key:`d`,label:`Выйти`}],v=[{type:`group`,label:`Виды работ:`,line:!1},{key:`metal`,label:`Монтаж металлических конструкций`},{key:`mono`,label:`Монолитные работы`},{key:`brick`,label:`Кирпичная кладка`},{key:`facade`,label:`Фасадные работы`},{key:`roof`,label:`Кровельные работы`},{key:`glass`,label:`Остекление`}],y=[{key:`a`,label:`Dropdown item`,description:`Double text text text`,icon:(0,m.jsx)(o,{size:16})},{key:`b`,label:`Dropdown item`,description:`Double text text text`},{key:`c`,label:`Dropdown item`,description:`Double text text text`},{key:`d`,label:`Dropdown item`,description:`Double text text text`,disabled:!0}],b=[{key:`a`,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`,icon:(0,m.jsx)(o,{size:16})},{key:`b`,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`},{key:`c`,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`,disabled:!0}],x={title:`UI Kit/Навигация/DropdownMenu`,id:`ui-kit-dropdownmenu`,component:d,parameters:{layout:`padded`,docs:{description:{component:h},story:{height:`400px`}}},decorators:[e=>(0,m.jsx)(`div`,{style:{minHeight:340},children:(0,m.jsx)(e,{})})],tags:[`autodocs`],argTypes:{mark:{control:`inline-radio`,options:[`none`,`tick`,`checkbox`,`radio`]},multiline:{control:`boolean`},width:{control:`number`},maxHeight:{control:`number`},selectedKeys:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},defaultSelectedKeys:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}}},args:{items:g,mark:`none`,children:(0,m.jsx)(l,{variant:`secondary`,children:`Открыть меню`})}},S={},C={parameters:{docs:{description:{story:`Тот самый «Пример выпадающего списка ЛК» из макета.`}}},args:{defaultSelectedKeys:[`profile`],mark:`tick`}},w={args:{items:_}},T={args:{items:_,mark:`tick`,defaultSelectedKeys:[`a`]}},E={parameters:{docs:{description:{story:`Множественный выбор — так меню выглядит в мультиселектах.`}}},args:{items:v,mark:`checkbox`,defaultSelectedKeys:[`metal`,`mono`]}},D={parameters:{docs:{description:{story:`Радиокнопка слева — одиночный выбор: новый выбор снимает предыдущий.`}}},args:{items:v,mark:`radio`,defaultSelectedKeys:[`mono`]}},O={parameters:{docs:{description:{story:"`multiline` выключен (по умолчанию): длинный текст обрезается отточием, высота пункта не меняется."}}},args:{items:[{key:`a`,label:`Длинное название пункта, которое не помещается в одну строку`,icon:(0,m.jsx)(o,{size:16})},{key:`b`,label:`Короткий пункт`,icon:(0,m.jsx)(o,{size:16})}]}},k={parameters:{docs:{description:{story:"Слева `multiline` выключен, справа включён — при одинаковом `description`. Вторая строка от многострочности не зависит."}}},render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`},children:[(0,m.jsx)(d,{items:y,mark:`tick`,defaultSelectedKeys:[`c`],width:285,open:!0,children:(0,m.jsx)(l,{variant:`secondary`,children:`Двойной текст — одна строка`})}),(0,m.jsx)(d,{items:b,mark:`tick`,multiline:!0,defaultSelectedKeys:[`b`],width:285,open:!0,children:(0,m.jsx)(l,{variant:`secondary`,children:`Двойной текст — мульти`})})]})},A={parameters:{docs:{description:{story:"При `maxHeight` включается прокрутка. Полоса — наш скроллбар (`xs`), как в макете."}}},args:{items:[...v,{key:`e`,label:`Электромонтажные работы`},{key:`f`,label:`Отделочные работы`},{key:`g`,label:`Благоустройство`}],mark:`checkbox`,maxHeight:180}},j={parameters:{docs:{description:{story:"Поиск — не часть компонента: в макете это отдельное поле над списком. Здесь показано, как его подставить через `popupRender`. Меню открыто принудительно, чтобы было видно."}}},render:()=>(0,m.jsx)(f,{})},M={parameters:{docs:{description:{story:`Наведи на пункты: обычный, выбранный, выбранный под курсором, задизейбленный и выбранный-задизейбленный (его нельзя развыбрать — текст полной яркости на едва сером фоне, иконка и галочка приглушены).`}}},args:{items:[{key:`default`,label:`Обычный пункт`},{key:`selected`,label:`Выбранный пункт`},{key:`disabled`,label:`Задизейбленный пункт`,disabled:!0},{key:`disabled-selected`,label:`Выбранный, нельзя развыбрать`,disabled:!0}],mark:`tick`,defaultSelectedKeys:[`selected`,`disabled-selected`],open:!0}},N=[`Playground`,`Account`,`TextOnly`,`TickMark`,`CheckboxMark`,`RadioMark`,`SingleLine`,`DoubleText`,`Scrolling`,`WithSearch`,`States`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Тот самый «Пример выпадающего списка ЛК» из макета.'
      }
    }
  },
  args: {
    defaultSelectedKeys: ['profile'],
    mark: 'tick'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: plainItems
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: plainItems,
    mark: 'tick',
    defaultSelectedKeys: ['a']
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Множественный выбор — так меню выглядит в мультиселектах.'
      }
    }
  },
  args: {
    items: workItems,
    mark: 'checkbox',
    defaultSelectedKeys: ['metal', 'mono']
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Радиокнопка слева — одиночный выбор: новый выбор снимает предыдущий.'
      }
    }
  },
  args: {
    items: workItems,
    mark: 'radio',
    defaultSelectedKeys: ['mono']
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`multiline\` выключен (по умолчанию): длинный текст обрезается отточием, высота пункта не меняется.'
      }
    }
  },
  args: {
    items: [{
      key: 'a',
      label: 'Длинное название пункта, которое не помещается в одну строку',
      icon: <IconUser size={16} />
    }, {
      key: 'b',
      label: 'Короткий пункт',
      icon: <IconUser size={16} />
    }]
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слева \`multiline\` выключен, справа включён — при одинаковом \`description\`. Вторая строка от многострочности не зависит.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      <DropdownMenu items={doubleItems} mark="tick" defaultSelectedKeys={['c']} width={285} open>
        <Button variant="secondary">Двойной текст — одна строка</Button>
      </DropdownMenu>
      <DropdownMenu items={doubleMultilineItems} mark="tick" multiline defaultSelectedKeys={['b']} width={285} open>
        <Button variant="secondary">Двойной текст — мульти</Button>
      </DropdownMenu>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'При \`maxHeight\` включается прокрутка. Полоса — наш скроллбар (\`xs\`), как в макете.'
      }
    }
  },
  args: {
    items: [...workItems, {
      key: 'e',
      label: 'Электромонтажные работы'
    }, {
      key: 'f',
      label: 'Отделочные работы'
    }, {
      key: 'g',
      label: 'Благоустройство'
    }],
    mark: 'checkbox',
    maxHeight: 180
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Поиск — не часть компонента: в макете это отдельное поле над списком. Здесь показано, как его подставить через \`popupRender\`. Меню открыто принудительно, чтобы было видно.'
      }
    }
  },
  render: () => <SearchExample />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Наведи на пункты: обычный, выбранный, выбранный под курсором, задизейбленный и выбранный-задизейбленный (его нельзя развыбрать — текст полной яркости на едва сером фоне, иконка и галочка приглушены).'
      }
    }
  },
  args: {
    items: [{
      key: 'default',
      label: 'Обычный пункт'
    }, {
      key: 'selected',
      label: 'Выбранный пункт'
    }, {
      key: 'disabled',
      label: 'Задизейбленный пункт',
      disabled: true
    }, {
      key: 'disabled-selected',
      label: 'Выбранный, нельзя развыбрать',
      disabled: true
    }],
    mark: 'tick',
    defaultSelectedKeys: ['selected', 'disabled-selected'],
    open: true
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{C as Account,E as CheckboxMark,k as DoubleText,S as Playground,D as RadioMark,A as Scrolling,O as SingleLine,M as States,w as TextOnly,T as TickMark,j as WithSearch,N as __namedExportsOrder,x as default};