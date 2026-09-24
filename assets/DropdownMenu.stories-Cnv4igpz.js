import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./dropdown-BqhElmcf.js";import{n as i}from"./iframe-Cfof-CBm.js";import{n as a,t as o}from"./Button-BtSgbizB.js";import{M as s,Pn as c,Wt as l,t as u,wi as d}from"./icons-BS4H7Flo.js";import{n as f,r as p}from"./Scrollbar-BX4Tc0ko.js";import{n as m,t as h}from"./DropdownMenuItem-BkrxdI56.js";var g,_,v,y,b;function x(){return(x=e((()=>{g=`_overlay_z7fom_30`,_=`_item_z7fom_57`,v=`_group_z7fom_85`,y=`_groupNoLine_z7fom_95`,b={overlay:g,item:_,group:v,groupNoLine:y}})))()}function S({items:e,children:t,mark:n=`none`,multiline:i=!1,selectable:a,multiple:o=n===`checkbox`,selectedKeys:s,defaultSelectedKeys:c=[],onSelectedChange:l,onItemClick:u,width:d=260,maxHeight:f,overlayClassName:m,getPopupContainer:g,..._}){let[v,y]=(0,C.useState)(c),x=s!==void 0,S=x?s:v,T=a??n!==`none`,E=e=>{x||y(e),l?.(e)},D={items:(0,C.useMemo)(()=>e.map((e,t)=>`type`in e&&e.type===`divider`?{type:`divider`,key:e.key??`divider-${t}`}:`type`in e&&e.type===`group`?{type:`group`,key:e.key??`group-${t}`,label:e.label,className:e.line===!1?b.groupNoLine:b.group}:{key:e.key,disabled:e.disabled,className:b.item,label:(0,w.jsx)(h,{label:e.label,description:e.description,icon:e.icon,mark:n,selected:S.includes(e.key),disabled:e.disabled,multiline:e.multiline??i})}),[e,S,n,i]),selectable:T,multiple:o,selectedKeys:S,className:[b.menu,f?p.xs:``].filter(Boolean).join(` `),style:f?{maxHeight:f,overflowY:`auto`}:void 0,onClick:({key:e})=>u?.(e),onSelect:({selectedKeys:e})=>E(e),onDeselect:({selectedKeys:e})=>E(e)};return(0,w.jsx)(r,{..._,menu:D,overlayClassName:[b.overlay,m].filter(Boolean).join(` `),overlayStyle:{width:d,..._.overlayStyle},getPopupContainer:g??(e=>e.closest(`[data-theme]`)??document.body),children:t})}var C,w;function T(){return(T=e((()=>{n(),C=t(),f(),x(),m(),w=i(),S.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`DropdownMenuOption | DropdownMenuGroup | DropdownMenuDivider`,elements:[{name:`DropdownMenuOption`},{name:`DropdownMenuGroup`},{name:`DropdownMenuDivider`}]}],raw:`DropdownMenuEntry[]`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`Триггер — то, по чему кликают, чтобы открыть меню.`},mark:{required:!1,tsType:{name:`union`,raw:`'none' | 'tick' | 'checkbox' | 'radio'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'tick'`},{name:`literal`,value:`'checkbox'`},{name:`literal`,value:`'radio'`}]},description:``,defaultValue:{value:`'none'`,computed:!1}},multiline:{required:!1,tsType:{name:`boolean`},description:`Умещать текст пунктов в несколько строк вместо одной с отточием. Пункт может переопределить.`,defaultValue:{value:`false`,computed:!1}},selectable:{required:!1,tsType:{name:`boolean`},description:"Можно ли выбирать пункты. По умолчанию включается само, если задан `mark`."},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`mark === 'checkbox'`,computed:!1}},selectedKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultSelectedKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onSelectedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(keys: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`keys`}],return:{name:`void`}}},description:``},onItemClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Ширина меню. По умолчанию 260px — рекомендованная в Figma. Фиксированная, как у Select:
длинный пункт уходит в отточие, а не растягивает список.`,defaultValue:{value:`260`,computed:!1}},maxHeight:{required:!1,tsType:{name:`number`},description:`По достижении этой высоты включается прокрутка (в Figma — «max / назначается дизайнером»).`}},composes:[`Omit`]}})))()}function E(){let[e,t]=(0,D.useState)(``),n=[...M,{key:`e`,label:`Электромонтажные работы`},{key:`f`,label:`Отделочные работы`}].filter(t=>`type`in t||String(t.label).toLowerCase().includes(e.toLowerCase()));return(0,O.jsx)(S,{items:n,mark:`checkbox`,maxHeight:180,open:!0,popupRender:n=>(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{padding:8,paddingBottom:0},children:(0,O.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Поиск`,style:{width:`100%`,boxSizing:`border-box`,padding:`6px 12px`,borderRadius:4,border:`1px solid #dddddd`}})}),n]}),children:(0,O.jsx)(o,{variant:`secondary`,children:`Виды работ`})})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{D=t(),u(),a(),T(),O=i(),k=`
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
`,A=[{key:`role`,label:`Заказчик/Организатор`,icon:(0,O.jsx)(c,{size:16})},{type:`group`,label:`Сменить аккаунт:`},{key:`profile`,label:`Настройки профиля`,icon:(0,O.jsx)(l,{size:16})},{key:`setl`,label:`ООО «Сетл Тех»`,icon:(0,O.jsx)(s,{size:16})},{type:`divider`},{key:`long`,label:`ООО «Охушки такие воробушки и другое длинное название»`,icon:(0,O.jsx)(s,{size:16}),disabled:!0},{key:`logout`,label:`Выйти`,icon:(0,O.jsx)(d,{size:16})}],j=[{key:`a`,label:`Настройки профиля`},{key:`b`,label:`ООО «Сетл Тех»`},{key:`c`,label:`ООО «Охушки такие воробушки»`,disabled:!0},{key:`d`,label:`Выйти`}],M=[{type:`group`,label:`Виды работ:`,line:!1},{key:`metal`,label:`Монтаж металлических конструкций`},{key:`mono`,label:`Монолитные работы`},{key:`brick`,label:`Кирпичная кладка`},{key:`facade`,label:`Фасадные работы`},{key:`roof`,label:`Кровельные работы`},{key:`glass`,label:`Остекление`}],N=[{key:`a`,label:`Dropdown item`,description:`Double text text text`,icon:(0,O.jsx)(s,{size:16})},{key:`b`,label:`Dropdown item`,description:`Double text text text`},{key:`c`,label:`Dropdown item`,description:`Double text text text`},{key:`d`,label:`Dropdown item`,description:`Double text text text`,disabled:!0}],P=[{key:`a`,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`,icon:(0,O.jsx)(s,{size:16})},{key:`b`,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`},{key:`c`,label:`Длинное название пункта в две строки`,description:`пример: по умолчанию выбранный пункт, который нельзя развыбрать`,disabled:!0}],F={title:`UI Kit/DropdownMenu`,component:S,parameters:{layout:`padded`,docs:{description:{component:k},story:{height:`400px`}}},decorators:[e=>(0,O.jsx)(`div`,{style:{minHeight:340},children:(0,O.jsx)(e,{})})],tags:[`autodocs`],argTypes:{mark:{control:`inline-radio`,options:[`none`,`tick`,`checkbox`,`radio`]},multiline:{control:`boolean`},width:{control:`number`},maxHeight:{control:`number`}},args:{items:A,mark:`none`,children:(0,O.jsx)(o,{variant:`secondary`,children:`Открыть меню`})}},I={},L={parameters:{docs:{description:{story:`Тот самый «Пример выпадающего списка ЛК» из макета.`}}},args:{defaultSelectedKeys:[`profile`],mark:`tick`}},R={args:{items:j}},z={args:{items:j,mark:`tick`,defaultSelectedKeys:[`a`]}},B={parameters:{docs:{description:{story:`Множественный выбор — так меню выглядит в мультиселектах.`}}},args:{items:M,mark:`checkbox`,defaultSelectedKeys:[`metal`,`mono`]}},V={parameters:{docs:{description:{story:`Радиокнопка слева — одиночный выбор: новый выбор снимает предыдущий.`}}},args:{items:M,mark:`radio`,defaultSelectedKeys:[`mono`]}},H={parameters:{docs:{description:{story:"`multiline` выключен (по умолчанию): длинный текст обрезается отточием, высота пункта не меняется."}}},args:{items:[{key:`a`,label:`Длинное название пункта, которое не помещается в одну строку`,icon:(0,O.jsx)(s,{size:16})},{key:`b`,label:`Короткий пункт`,icon:(0,O.jsx)(s,{size:16})}]}},U={parameters:{docs:{description:{story:"Слева `multiline` выключен, справа включён — при одинаковом `description`. Вторая строка от многострочности не зависит."}}},render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`},children:[(0,O.jsx)(S,{items:N,mark:`tick`,defaultSelectedKeys:[`c`],width:285,open:!0,children:(0,O.jsx)(o,{variant:`secondary`,children:`Двойной текст — одна строка`})}),(0,O.jsx)(S,{items:P,mark:`tick`,multiline:!0,defaultSelectedKeys:[`b`],width:285,open:!0,children:(0,O.jsx)(o,{variant:`secondary`,children:`Двойной текст — мульти`})})]})},W={parameters:{docs:{description:{story:"При `maxHeight` включается прокрутка. Полоса — наш скроллбар (`xs`), как в макете."}}},args:{items:[...M,{key:`e`,label:`Электромонтажные работы`},{key:`f`,label:`Отделочные работы`},{key:`g`,label:`Благоустройство`}],mark:`checkbox`,maxHeight:180}},G={parameters:{docs:{description:{story:"Поиск — не часть компонента: в макете это отдельное поле над списком. Здесь показано, как его подставить через `popupRender`. Меню открыто принудительно, чтобы было видно."}}},render:()=>(0,O.jsx)(E,{})},K={parameters:{docs:{description:{story:`Наведи на пункты: обычный, выбранный, выбранный под курсором, задизейбленный и выбранный-задизейбленный (его нельзя развыбрать — текст полной яркости на едва сером фоне, иконка и галочка приглушены).`}}},args:{items:[{key:`default`,label:`Обычный пункт`},{key:`selected`,label:`Выбранный пункт`},{key:`disabled`,label:`Задизейбленный пункт`,disabled:!0},{key:`disabled-selected`,label:`Выбранный, нельзя развыбрать`,disabled:!0}],mark:`tick`,defaultSelectedKeys:[`selected`,`disabled-selected`],open:!0}},q=[`Playground`,`Account`,`TextOnly`,`TickMark`,`CheckboxMark`,`RadioMark`,`SingleLine`,`DoubleText`,`Scrolling`,`WithSearch`,`States`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    items: plainItems
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    items: plainItems,
    mark: 'tick',
    defaultSelectedKeys: ['a']
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Поиск — не часть компонента: в макете это отдельное поле над списком. Здесь показано, как его подставить через \`popupRender\`. Меню открыто принудительно, чтобы было видно.'
      }
    }
  },
  render: () => <SearchExample />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}}})))()}J();export{L as Account,B as CheckboxMark,U as DoubleText,I as Playground,V as RadioMark,W as Scrolling,H as SingleLine,K as States,R as TextOnly,z as TickMark,G as WithSearch,q as __namedExportsOrder,F as default};