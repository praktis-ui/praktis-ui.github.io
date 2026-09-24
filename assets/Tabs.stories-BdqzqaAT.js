import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-Cfof-CBm.js";import{n as r,t as i}from"./Button-BtSgbizB.js";import{n as a,t as o}from"./Tag-fBPE1zYf.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{s=`_root_rekt8_32`,c=`_list_rekt8_34`,l=`_tab_rekt8_40`,u=`_label_rekt8_68`,d=`_badge_rekt8_77`,f=`_ripple_rekt8_140`,p=`_panel_rekt8_154`,m={root:s,list:c,tab:l,label:u,badge:d,ripple:f,"tabs-ripple":`_tabs-ripple_rekt8_1`,panel:p}})))()}function g(e){let t=e.currentTarget;if(t.getAttribute(`aria-selected`)===`true`||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let n=t.getBoundingClientRect(),r=Math.hypot(n.width,n.height)*2,i=document.createElement(`span`);i.className=m.ripple,i.style.cssText=`width:${r}px;height:${r}px;left:${e.clientX-n.left-r/2}px;top:${e.clientY-n.top-r/2}px`,t.appendChild(i);let a=()=>i.remove();i.addEventListener(`animationend`,a),window.setTimeout(a,800)}function _({items:e,activeKey:t,defaultActiveKey:n,onChange:r,children:i,className:a,...o}){let[s,c]=(0,v.useState)(n??e[0]?.key),l=t??s,u=(0,v.useId)(),d=(0,v.useRef)(null),f=e=>{t===void 0&&c(e),r?.(e)},p=t=>{let n=e.filter(e=>!e.hidden),r=n.findIndex(e=>e.key===l),i={ArrowRight:r+1,ArrowLeft:r-1,Home:0,End:n.length-1}[t.key];if(i===void 0||!n.length)return;t.preventDefault();let a=n[(i+n.length)%n.length];f(a.key),d.current?.querySelector(`[data-key="${CSS.escape(a.key)}"]`)?.focus()};return(0,y.jsxs)(`div`,{...o,className:[m.root,a].filter(Boolean).join(` `),children:[(0,y.jsx)(`div`,{ref:d,className:m.list,role:`tablist`,onKeyDown:p,children:e.map(e=>{let t=e.key===l;return(0,y.jsxs)(`button`,{type:`button`,role:`tab`,"data-key":e.key,id:`${u}-tab-${e.key}`,"aria-selected":t,"aria-controls":i===void 0?void 0:`${u}-panel`,tabIndex:t&&!e.hidden?0:-1,"aria-hidden":e.hidden||void 0,"data-hidden":e.hidden||void 0,className:m.tab,onPointerDown:g,onClick:()=>f(e.key),children:[(0,y.jsx)(`span`,{className:m.label,children:b(e.label)}),e.badge!==void 0&&(0,y.jsx)(`span`,{className:m.badge,children:e.badge})]},e.key)})}),i!==void 0&&(0,y.jsx)(`div`,{id:`${u}-panel`,role:`tabpanel`,"aria-labelledby":`${u}-tab-${l}`,className:m.panel,children:i})]})}var v,y,b;function x(){return(x=e((()=>{v=t(),h(),y=n(),b=e=>e.replace(/(^|\s)(\S{1,2}) /g,`$1$2\xA0`),_.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},activeKey:{required:!1,tsType:{name:`string`},description:``},defaultActiveKey:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:`Содержимое панели под вкладками. Выбранная вкладка сливается с ней по цвету. Без children — только ряд вкладок.`}},composes:[`Omit`]}})))()}var S,C,w,T,E;function D(){return(D=e((()=>{S=`_page_1h4is_2`,C=`_caption_1h4is_4`,w=`_stack_1h4is_6`,T=`_content_1h4is_7`,E={page:S,caption:C,stack:w,content:T}})))()}function O({items:e,width:t,caption:n}){let[r,i]=(0,k.useState)(e[0].key);return(0,A.jsxs)(`div`,{children:[n&&(0,A.jsx)(`p`,{className:E.caption,children:n}),(0,A.jsx)(`div`,{className:E.page,style:{width:t},children:(0,A.jsx)(_,{items:e,activeKey:r,onChange:i,children:(0,A.jsxs)(`div`,{className:E.content,children:[`Содержимое вкладки «`,e.find(e=>e.key===r)?.label,`»`]})})})]})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{k=t(),r(),a(),x(),D(),A=n(),j=`
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
`,M=[{key:`works`,label:`Работы`},{key:`acts`,label:`Акты`},{key:`materials`,label:`Материалы`},{key:`normdoc`,label:`Нормативка`},{key:`frames`,label:`Конструкции и сети`},{key:`tenders`,label:`Тендеры`},{key:`refs`,label:`Классификаторы`,badge:(0,A.jsx)(o,{status:`processing`,children:`новое`})},{key:`service`,label:`Служебное`,badge:(0,A.jsx)(o,{status:`processing`,children:`новое`})}],N={title:`UI Kit/Tabs`,component:_,parameters:{layout:`padded`,docs:{description:{component:j}}},tags:[`autodocs`],args:{items:M}},P={render:e=>(0,A.jsx)(O,{items:e.items})},F={name:`Правила ширины`,parameters:{docs:{description:{story:`Одни и те же правила на разной ширине контейнера. Широкий — вкладки делят ряд поровну. Вкладок мало — каждая упирается в 300px и не растягивается. Узкий — вкладки сжимаются до своего самого длинного слова, подписи переносятся по словам, лишнее уезжает в прокрутку ряда.`}}},render:()=>(0,A.jsxs)(`div`,{className:E.stack,children:[(0,A.jsx)(O,{items:M,width:1200,caption:`1200px, 8 вкладок — заполняют ряд поровну, по ~145px`}),(0,A.jsx)(O,{items:M.slice(0,3),width:1200,caption:`1200px, 3 вкладки — каждая упирается в max 300px`}),(0,A.jsx)(O,{items:M,width:640,caption:`640px, 8 вкладок — не уже самого длинного слова, ряд листается вбок`})]})},I={name:`Длинные подписи`,parameters:{docs:{description:{story:`Перенос только между словами, максимум 3 строки, дальше отточие. «и» не остаётся в конце строки — привязано к следующему слову.`}}},render:()=>(0,A.jsx)(O,{width:720,items:[{key:`a`,label:`Конструкции и сети`},{key:`b`,label:`Производственный календарь и переносы выходных дней`},{key:`c`,label:`Марки рабочей документации по разделам проекта и подразделам с нормативными ссылками на ГОСТ`},{key:`d`,label:`Акты`}]})},L={name:`С плашкой`,parameters:{docs:{description:{story:"Слот `badge` — справа от подписи, не переносится и не сжимается. В примере — Tag кита."}}},render:()=>(0,A.jsx)(O,{items:M.slice(4)})},R={name:`Без панели`,parameters:{docs:{description:{story:"Без `children` — только ряд вкладок; панель под ними рисуется своя."}}},render:function(){let[e,t]=(0,k.useState)(`works`);return(0,A.jsx)(`div`,{className:E.page,children:(0,A.jsx)(_,{items:M,activeKey:e,onChange:t})})}},z=(0,A.jsx)(o,{status:`default`,title:`изменения`,children:`изм.`}),B=(0,A.jsx)(o,{status:`processing`,children:`новое`}),V={name:`Скрытие вкладок`,parameters:{docs:{description:{story:`Пример из прототипа НСИ: «Только новое» прячет вкладки, где ничего не менялось. Если была открыта скрываемая вкладка — переключаем на первую видимую.`}}},render:function(){let[e,t]=(0,k.useState)(!1),[n,r]=(0,k.useState)(`works`),a=[{key:`works`,label:`Работы`,badge:z},{key:`acts`,label:`Акты`,hidden:e},{key:`materials`,label:`Материалы`,badge:z},{key:`normdoc`,label:`Нормативка`,hidden:e},{key:`frames`,label:`Конструкции и сети`,hidden:e},{key:`tenders`,label:`Тендеры`,badge:z},{key:`refs`,label:`Классификаторы`,badge:B},{key:`service`,label:`Служебное`,badge:B}];return(0,A.jsxs)(`div`,{className:E.stack,children:[(0,A.jsx)(`div`,{children:(0,A.jsx)(i,{size:`small`,variant:e?`primary`:`secondary`,"aria-pressed":e,onClick:()=>{let i=!e;t(i),i&&a.find(e=>e.key===n&&!e.badge)&&r(`works`)},children:`Только новое`})}),(0,A.jsx)(`div`,{className:E.page,children:(0,A.jsx)(_,{items:a,activeKey:n,onChange:r,children:(0,A.jsxs)(`div`,{className:E.content,children:[`Содержимое вкладки «`,a.find(e=>e.key===n)?.label,`»`]})})})]})}},H=[`Playground`,`WidthRules`,`LongLabels`,`WithBadge`,`WithoutPanel`,`Hiding`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <Demo items={args.items} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'С плашкой',
  parameters: {
    docs: {
      description: {
        story: 'Слот \`badge\` — справа от подписи, не переносится и не сжимается. В примере — Tag кита.'
      }
    }
  },
  render: () => <Demo items={NSI.slice(4)} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}U();export{V as Hiding,I as LongLabels,P as Playground,F as WidthRules,L as WithBadge,R as WithoutPanel,H as __namedExportsOrder,N as default};