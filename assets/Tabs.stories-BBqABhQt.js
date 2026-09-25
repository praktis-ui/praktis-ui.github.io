import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CvEwutAq.js";import{n as r,t as i}from"./Button-CAqVpk3e.js";import{n as a,t as o}from"./Tabs-BPSR2Zmz.js";import{n as s,t as c}from"./Tag-BXyiHTmi.js";var l,u,d,f,p;function m(){return(m=e((()=>{l=`_page_1h4is_2`,u=`_caption_1h4is_4`,d=`_stack_1h4is_6`,f=`_content_1h4is_7`,p={page:l,caption:u,stack:d,content:f}})))()}function h({items:e,width:t,caption:n}){let[r,i]=(0,g.useState)(e[0].key);return(0,_.jsxs)(`div`,{children:[n&&(0,_.jsx)(`p`,{className:p.caption,children:n}),(0,_.jsx)(`div`,{className:p.page,style:{width:t},children:(0,_.jsx)(o,{items:e,activeKey:r,onChange:i,children:(0,_.jsxs)(`div`,{className:p.content,children:[`Содержимое вкладки «`,e.find(e=>e.key===r)?.label,`»`]})})})]})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{g=t(),r(),s(),a(),m(),_=n(),v=`
Источник — **не Figma-кит**, а прототип «Praktis · График тендеров»: оттуда форма и цвета.
Правила ширины и движение согласованы на прототипе «Справочники НСИ» (2026-09-23).
Если в Figma-ките появится свой Tabs — сверить и привести к нему.

## Правила ширины

| Правило | Как сделано |
|---|---|
| Вкладки заполняют ряд поровну | \`flex: 1 1 0\` |
| Каждая не шире **300px** | \`max-width: 300px\` — если вкладок мало, они не растягиваются на всю ширину |
| Не уже самого длинного слова | \`min-width: min-content\` — слово никогда не рвётся посередине; если все не влезают, ряд листается вбок |
| Подпись по центру, до **3 строк** | перенос только между словами, дальше отточие (\`line-clamp: 3\`) |
| Короткие слова не висят в конце строки | «и», «в», «по» привязаны к следующему неразрывным пробелом: «Конструкции / и сети» |

## Движение

На дефолтах antd, на которых стоит весь кит, — те же, что у Button и Input:

| Состояние | Что происходит | Время |
|---|---|---|
| Ховер | фон \`#eaf0f5 → #d5e0eb\`, подпись приподнимается на 1px | .2s, motionEaseInOut |
| Нажатие | фон \`#c6d4e1\` (как у нажатой secondary-кнопки), подпись сжимается до .96 | .1s |
| Волна | круг акцента 14% из точки нажатия расходится и гаснет | .4s, motionEaseOutCirc |
| Выбор | вкладка плавно наливается цветом панели и сливается с ней | .2s |

Волна — своё: у antd для вкладок её нет. При системной настройке «уменьшить движение» переходы и волна отключаются.

## Скрытие

\`hidden: true\` у пункта — вкладка плавно схлопывается (.3s, motionDurationSlow), соседние так же
плавно занимают место. Прозрачность уходит быстрее ширины, чтобы сжимаемую подпись не было видно.
Скрытая вкладка остаётся в разметке, но недоступна мышью, клавиатурой и скринридером. Если скрыть
выбранную — переключить на другую должен тот, кто скрывает (компонент сам выбор не меняет).

## Клавиатура

Стрелки ← →, Home, End переключают вкладку и переводят на неё фокус. В ряду табом попадаешь
только на выбранную вкладку (WAI-ARIA tabs). Кольцо фокуса — внутрь: вкладка приклеена к
панели, и внешнее кольцо обрезалось бы о неё.

## Панель

\`children\` рисуются в панели под вкладками. Выбранная вкладка и панель одного цвета
(\`--tabs-bg-active\`) и сливаются; левый верхний угол панели прямой — к нему приклеена первая
вкладка. Без \`children\` компонент — только ряд вкладок, панель своя.
`,y=[{key:`works`,label:`Работы`},{key:`acts`,label:`Акты`},{key:`materials`,label:`Материалы`},{key:`normdoc`,label:`Нормативка`},{key:`frames`,label:`Конструкции и сети`},{key:`tenders`,label:`Тендеры`},{key:`refs`,label:`Классификаторы`,badge:(0,_.jsx)(c,{status:`processing`,children:`новое`})},{key:`service`,label:`Служебное`,badge:(0,_.jsx)(c,{status:`processing`,children:`новое`})}],b={title:`UI Kit/Tabs`,component:o,parameters:{layout:`padded`,docs:{description:{component:v}}},tags:[`autodocs`],argTypes:{children:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}}},args:{items:y}},x={render:e=>(0,_.jsx)(h,{items:e.items})},S={name:`Правила ширины`,parameters:{docs:{description:{story:`Одни и те же правила на разной ширине контейнера. Широкий — вкладки делят ряд поровну. Вкладок мало — каждая упирается в 300px и не растягивается. Узкий — вкладки сжимаются до своего самого длинного слова, подписи переносятся по словам, лишнее уезжает в прокрутку ряда.`}}},render:()=>(0,_.jsxs)(`div`,{className:p.stack,children:[(0,_.jsx)(h,{items:y,width:1200,caption:`1200px, 8 вкладок — заполняют ряд поровну, по ~145px`}),(0,_.jsx)(h,{items:y.slice(0,3),width:1200,caption:`1200px, 3 вкладки — каждая упирается в max 300px`}),(0,_.jsx)(h,{items:y,width:640,caption:`640px, 8 вкладок — не уже самого длинного слова, ряд листается вбок`})]})},C={name:`Длинные подписи`,parameters:{docs:{description:{story:`Перенос только между словами, максимум 3 строки, дальше отточие. «и» не остаётся в конце строки — привязано к следующему слову.`}}},render:()=>(0,_.jsx)(h,{width:720,items:[{key:`a`,label:`Конструкции и сети`},{key:`b`,label:`Производственный календарь и переносы выходных дней`},{key:`c`,label:`Марки рабочей документации по разделам проекта и подразделам с нормативными ссылками на ГОСТ`},{key:`d`,label:`Акты`}]})},w={name:`С плашкой`,parameters:{docs:{description:{story:"Слот `badge` — справа от подписи, не переносится и не сжимается. В примере — Tag кита."}}},render:()=>(0,_.jsx)(h,{items:y.slice(4)})},T={name:`Без панели`,parameters:{docs:{description:{story:"Без `children` — только ряд вкладок; панель под ними рисуется своя."}}},render:function(){let[e,t]=(0,g.useState)(`works`);return(0,_.jsx)(`div`,{className:p.page,children:(0,_.jsx)(o,{items:y,activeKey:e,onChange:t})})}},E=(0,_.jsx)(c,{status:`default`,title:`изменения`,children:`изм.`}),D=(0,_.jsx)(c,{status:`processing`,children:`новое`}),O={name:`Скрытие вкладок`,parameters:{docs:{description:{story:`Пример из прототипа НСИ: «Только новое» прячет вкладки, где ничего не менялось. Если была открыта скрываемая вкладка — переключаем на первую видимую.`}}},render:function(){let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(`works`),a=[{key:`works`,label:`Работы`,badge:E},{key:`acts`,label:`Акты`,hidden:e},{key:`materials`,label:`Материалы`,badge:E},{key:`normdoc`,label:`Нормативка`,hidden:e},{key:`frames`,label:`Конструкции и сети`,hidden:e},{key:`tenders`,label:`Тендеры`,badge:E},{key:`refs`,label:`Классификаторы`,badge:D},{key:`service`,label:`Служебное`,badge:D}];return(0,_.jsxs)(`div`,{className:p.stack,children:[(0,_.jsx)(`div`,{children:(0,_.jsx)(i,{size:`small`,variant:e?`primary`:`secondary`,"aria-pressed":e,onClick:()=>{let i=!e;t(i),i&&a.find(e=>e.key===n&&!e.badge)&&r(`works`)},children:`Только новое`})}),(0,_.jsx)(`div`,{className:p.page,children:(0,_.jsx)(o,{items:a,activeKey:n,onChange:r,children:(0,_.jsxs)(`div`,{className:p.content,children:[`Содержимое вкладки «`,a.find(e=>e.key===n)?.label,`»`]})})})]})}},k=[`Playground`,`WidthRules`,`LongLabels`,`WithBadge`,`WithoutPanel`,`Hiding`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Demo items={args.items} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Правила ширины',
  parameters: {
    docs: {
      description: {
        story: 'Одни и те же правила на разной ширине контейнера. Широкий — вкладки делят ряд поровну. ' + 'Вкладок мало — каждая упирается в 300px и не растягивается. Узкий — вкладки сжимаются до своего ' + 'самого длинного слова, подписи переносятся по словам, лишнее уезжает в прокрутку ряда.'
      }
    }
  },
  render: () => <div className={demo.stack}>
      <Demo items={NSI} width={1200} caption="1200px, 8 вкладок — заполняют ряд поровну, по ~145px" />
      <Demo items={NSI.slice(0, 3)} width={1200} caption="1200px, 3 вкладки — каждая упирается в max 300px" />
      <Demo items={NSI} width={640} caption="640px, 8 вкладок — не уже самого длинного слова, ряд листается вбок" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Длинные подписи',
  parameters: {
    docs: {
      description: {
        story: 'Перенос только между словами, максимум 3 строки, дальше отточие. «и» не остаётся в конце строки — ' + 'привязано к следующему слову.'
      }
    }
  },
  render: () => <Demo width={720} items={[{
    key: 'a',
    label: 'Конструкции и сети'
  }, {
    key: 'b',
    label: 'Производственный календарь и переносы выходных дней'
  }, {
    key: 'c',
    label: 'Марки рабочей документации по разделам проекта и подразделам с нормативными ссылками на ГОСТ'
  }, {
    key: 'd',
    label: 'Акты'
  }]} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'С плашкой',
  parameters: {
    docs: {
      description: {
        story: 'Слот \`badge\` — справа от подписи, не переносится и не сжимается. В примере — Tag кита.'
      }
    }
  },
  render: () => <Demo items={NSI.slice(4)} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Без панели',
  parameters: {
    docs: {
      description: {
        story: 'Без \`children\` — только ряд вкладок; панель под ними рисуется своя.'
      }
    }
  },
  render: function Render() {
    const [key, setKey] = useState('works');
    return <div className={demo.page}>
        <Tabs items={NSI} activeKey={key} onChange={setKey} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Скрытие вкладок',
  parameters: {
    docs: {
      description: {
        story: 'Пример из прототипа НСИ: «Только новое» прячет вкладки, где ничего не менялось. ' + 'Если была открыта скрываемая вкладка — переключаем на первую видимую.'
      }
    }
  },
  render: function Render() {
    const [onlyNew, setOnlyNew] = useState(false);
    const [key, setKey] = useState('works');
    const items: TabItem[] = [{
      key: 'works',
      label: 'Работы',
      badge: changed
    }, {
      key: 'acts',
      label: 'Акты',
      hidden: onlyNew
    }, {
      key: 'materials',
      label: 'Материалы',
      badge: changed
    }, {
      key: 'normdoc',
      label: 'Нормативка',
      hidden: onlyNew
    }, {
      key: 'frames',
      label: 'Конструкции и сети',
      hidden: onlyNew
    }, {
      key: 'tenders',
      label: 'Тендеры',
      badge: changed
    }, {
      key: 'refs',
      label: 'Классификаторы',
      badge: fresh
    }, {
      key: 'service',
      label: 'Служебное',
      badge: fresh
    }];
    const toggle = () => {
      const next = !onlyNew;
      setOnlyNew(next);
      if (next && items.find(t => t.key === key && !t.badge)) setKey('works');
    };
    return <div className={demo.stack}>
        <div>
          <Button size="small" variant={onlyNew ? 'primary' : 'secondary'} aria-pressed={onlyNew} onClick={toggle}>
            Только новое
          </Button>
        </div>
        <div className={demo.page}>
          <Tabs items={items} activeKey={key} onChange={setKey}>
            <div className={demo.content}>Содержимое вкладки «{items.find(t => t.key === key)?.label}»</div>
          </Tabs>
        </div>
      </div>;
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{O as Hiding,C as LongLabels,x as Playground,S as WidthRules,w as WithBadge,T as WithoutPanel,k as __namedExportsOrder,b as default};