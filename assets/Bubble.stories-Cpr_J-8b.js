import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Bulb-BsK2nRww.js";import{n as i}from"./iframe-CvEwutAq.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{a=`_bubble_1325p_45`,o=`_white_1325p_62`,s=`_grey_1325p_63`,c=`_selected_1325p_65`,l=`_xs_1325p_70`,u=`_s_1325p_65`,d=`_m_1325p_72`,f=`_label_1325p_74`,p=`_dot_1325p_89`,m=`_count_1325p_97`,h=`_group_1325p_102`,g=`_group_xs_1325p_103`,_=`_scroll_1325p_107`,v=`_dragging_1325p_123`,y={bubble:a,white:o,grey:s,selected:c,xs:l,s:u,m:d,label:f,dot:p,count:m,new:`_new_1325p_100`,group:h,group_xs:g,scroll:_,dragging:v}})))()}function x({children:e,size:t=`s`,on:n=`white`,selected:i=!1,dot:a=!1,count:o,isNew:s=!1,newColor:c=`blue`,className:l,...u}){return(0,w.jsxs)(`button`,{type:`button`,...u,"aria-pressed":u.role===`tab`?void 0:i,className:[y.bubble,y[t],y[n],i?y.selected:``,l].filter(Boolean).join(` `),children:[a&&(0,w.jsx)(`span`,{className:y.dot,"aria-hidden":!0}),(0,w.jsx)(`span`,{className:y.label,children:e}),o!=null&&(0,w.jsx)(`span`,{className:y.count,children:o}),s&&(0,w.jsx)(`span`,{className:y.new,children:(0,w.jsx)(r,{kind:`dot`,color:c,ring:!0})})]})}function S({items:e,activeKey:t,defaultActiveKey:n,onChange:r,size:i=`s`,on:a=`white`,overflow:o=`wrap`,className:s,...c}){let[l,u]=(0,C.useState)(n??e[0]?.key),d=t??l,f=(0,C.useRef)(null),p=(0,C.useRef)(null),[m,h]=(0,C.useState)(!1);(0,C.useEffect)(()=>{let e=f.current;if(o!==`scroll`||!e)return;let t=t=>{if(Math.abs(t.deltaY)<=Math.abs(t.deltaX))return;let n=e.scrollWidth-e.clientWidth;n<=0||t.deltaY<0&&e.scrollLeft<=0||t.deltaY>0&&e.scrollLeft>=n-1||(t.preventDefault(),e.scrollLeft=Math.max(0,Math.min(n,e.scrollLeft+t.deltaY)))};return e.addEventListener(`wheel`,t,{passive:!1}),()=>e.removeEventListener(`wheel`,t)},[o]);let g=e=>{let t=f.current;o===`scroll`&&t&&e.pointerType===`mouse`&&e.button===0&&(t.scrollWidth<=t.clientWidth||(p.current={x:e.clientX,left:t.scrollLeft,moved:!1}))},_=e=>{let t=p.current,n=f.current;if(!t||!n)return;let r=e.clientX-t.x;if(!t.moved&&Math.abs(r)>4){t.moved=!0,h(!0);try{n.setPointerCapture(e.pointerId)}catch{}}t.moved&&(n.scrollLeft=t.left-r)},v=()=>{p.current&&(p.current.moved||(p.current=null),h(!1))},b=e=>{p.current?.moved&&(e.preventDefault(),e.stopPropagation()),p.current=null};(0,C.useEffect)(()=>{let e=f.current;if(o!==`scroll`||!e)return;let t=e.querySelector(`[data-key="${CSS.escape(String(d))}"]`);if(!t)return;let n=t.offsetLeft-e.offsetLeft,r=n+t.offsetWidth,i=n<e.scrollLeft?n-8:r>e.scrollLeft+e.clientWidth?r-e.clientWidth+8:null;i!==null&&e.scrollTo({left:i,behavior:`smooth`})},[d,o]);let S=e=>{t===void 0&&u(e),r?.(e)},T=t=>{let n=e.findIndex(e=>e.key===d),r={ArrowRight:n+1,ArrowLeft:n-1,Home:0,End:e.length-1}[t.key];if(r===void 0||!e.length)return;t.preventDefault();let i=e[(r+e.length)%e.length];S(i.key),f.current?.querySelector(`[data-key="${CSS.escape(i.key)}"]`)?.focus()};return(0,w.jsx)(`div`,{...c,ref:f,role:`tablist`,onKeyDown:T,onPointerDown:g,onPointerMove:_,onPointerUp:v,onPointerCancel:v,onClickCapture:b,className:[y.group,y[`group_${i}`],o===`scroll`?y.scroll:``,m?y.dragging:``,s].filter(Boolean).join(` `),children:e.map(e=>(0,w.jsx)(x,{"data-key":e.key,role:`tab`,"aria-selected":e.key===d,tabIndex:e.key===d?0:-1,size:i,on:a,selected:e.key===d,dot:e.dot,count:e.count,isNew:e.isNew,newColor:e.newColor,onClick:()=>S(e.key),children:e.label},e.key))})}var C,w;function T(){return(T=e((()=>{C=t(),n(),b(),w=i(),x.__docgenInfo={description:``,methods:[],displayName:`Bubble`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 's' | 'm'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`}]},description:``,defaultValue:{value:`'s'`,computed:!1}},on:{required:!1,tsType:{name:`union`,raw:`'white' | 'grey'`,elements:[{name:`literal`,value:`'white'`},{name:`literal`,value:`'grey'`}]},description:`На каком фоне лежит: white — бабл серый, grey — бабл белый.`,defaultValue:{value:`'white'`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},dot:{required:!1,tsType:{name:`boolean`},description:`Точка статуса слева от подписи.`,defaultValue:{value:`false`,computed:!1}},count:{required:!1,tsType:{name:`ReactNode`},description:`Счётчик справа от подписи.`},isNew:{required:!1,tsType:{name:`boolean`},description:`Точка «новое» в правом верхнем углу (Bulb kind="dot").`,defaultValue:{value:`false`,computed:!1}},newColor:{required:!1,tsType:{name:`union`,raw:`'green' | 'red' | 'blue' | 'orange'`,elements:[{name:`literal`,value:`'green'`},{name:`literal`,value:`'red'`},{name:`literal`,value:`'blue'`},{name:`literal`,value:`'orange'`}]},description:`Цвет точки «новое» — как у Bulb. По умолчанию синий, как в макете Bubble.`,defaultValue:{value:`'blue'`,computed:!1}}},composes:[`ButtonHTMLAttributes`]},S.__docgenInfo={description:`Группа баблов как вкладки: один выбран, стрелки/Home/End переключают (WAI-ARIA tabs).`,methods:[],displayName:`BubbleTabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BubbleItem`}],raw:`BubbleItem[]`},description:``},activeKey:{required:!1,tsType:{name:`string`},description:``},defaultActiveKey:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 's' | 'm'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`}]},description:``,defaultValue:{value:`'s'`,computed:!1}},on:{required:!1,tsType:{name:`union`,raw:`'white' | 'grey'`,elements:[{name:`literal`,value:`'white'`},{name:`literal`,value:`'grey'`}]},description:``,defaultValue:{value:`'white'`,computed:!1}},overflow:{required:!1,tsType:{name:`union`,raw:`'wrap' | 'scroll'`,elements:[{name:`literal`,value:`'wrap'`},{name:`literal`,value:`'scroll'`}]},description:"Не помещаются в ширину: `wrap` — переносятся на следующую строку; `scroll` — остаются в одну\nстроку и уходят вбок, прокрутка без видимой полосы. Двигать: мышью перетаскиванием, обычным\nколесом, тачпадом, свайпом, стрелками. Выбранный бабл сам доезжает в видимую область.",defaultValue:{value:`'wrap'`,computed:!1}}},composes:[`Omit`]}})))()}function E({on:e,title:t,children:n}){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{style:j,children:t}),(0,O.jsx)(`div`,{style:A(e),children:n})]})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{D=t(),T(),O=i(),k={title:`UI Kit/Bubble`,component:x,parameters:{layout:`padded`,docs:{description:{component:`
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
`}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`xs`,`s`,`m`]},on:{control:`inline-radio`,options:[`white`,`grey`]},children:{control:`text`},count:{control:`text`}},args:{children:`Корпус 1`,size:`s`,on:`white`,selected:!1,dot:!1,isNew:!1}},A=e=>({background:e===`grey`?`var(--bubble-on-white)`:`var(--bubble-on-grey)`,padding:16,borderRadius:12,display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`}),j={fontFamily:`Inter, sans-serif`,fontSize:12,opacity:.6,margin:`0 0 6px`},M={render:e=>(0,O.jsx)(E,{on:e.on??`white`,title:`on="${e.on}"`,children:(0,O.jsx)(x,{...e})})},N={name:`Размеры × фон × состояние`,parameters:{docs:{description:{story:`Наведите курсор — ховер голубой на обоих фонах.`}}},render:()=>(0,O.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16},children:[`white`,`grey`].map(e=>(0,O.jsx)(E,{on:e,title:e===`white`?`on="white" — на белом фоне`:`on="grey" — на сером фоне`,children:[`xs`,`s`,`m`].map(t=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,O.jsx)(x,{size:t,on:e,children:`Корпус 1`}),(0,O.jsx)(x,{size:t,on:e,selected:!0,children:`Корпус 1`})]},t))},e))})},P={name:`Точка статуса и счётчик`,parameters:{docs:{description:{story:"Бывший Type=Status из макета — теперь `dot` и `count` в любом размере."}}},render:()=>(0,O.jsxs)(E,{on:`white`,title:`dot + count`,children:[(0,O.jsx)(x,{size:`xs`,dot:!0,count:12,children:`Черновик`}),(0,O.jsx)(x,{size:`s`,dot:!0,count:12,children:`Черновик`}),(0,O.jsx)(x,{size:`s`,dot:!0,count:3,selected:!0,children:`На согласовании`}),(0,O.jsx)(x,{size:`s`,count:128,children:`Все`})]})},F={name:`Новое`,render:()=>(0,O.jsxs)(E,{on:`white`,title:`isNew — Bulb kind="dot" кита`,children:[(0,O.jsx)(x,{size:`xs`,isNew:!0,children:`Корпус 2`}),(0,O.jsx)(x,{size:`s`,isNew:!0,children:`Корпус 2`}),(0,O.jsx)(x,{size:`s`,isNew:!0,selected:!0,children:`Корпус 2`})]})},I={name:`Плитки m — до 3 строк`,render:()=>(0,O.jsxs)(E,{on:`grey`,title:`size="m", ширина 126, текст по центру, дальше отточие`,children:[(0,O.jsx)(x,{size:`m`,on:`grey`,children:`Корпус 1`}),(0,O.jsx)(x,{size:`m`,on:`grey`,selected:!0,children:`Подземный паркинг`}),(0,O.jsx)(x,{size:`m`,on:`grey`,children:`Встроенно-пристроенные помещения первого этажа`})]})},L={name:`Длинная подпись`,render:()=>(0,O.jsx)(`div`,{style:{width:260},children:(0,O.jsx)(E,{on:`white`,title:`контейнер 260px`,children:(0,O.jsx)(x,{size:`s`,children:`Корпус 1, секция А, подъезд 3`})})})},R={name:`BubbleTabs — группа`,render:function(){let[e,t]=(0,D.useState)(`k1`);return(0,O.jsx)(E,{on:`white`,title:`стрелки ← → переключают`,children:(0,O.jsx)(S,{activeKey:e,onChange:t,items:[{key:`k1`,label:`Корпус 1`},{key:`k2`,label:`Корпус 2`,isNew:!0},{key:`k3`,label:`Корпус 3`},{key:`park`,label:`Паркинг`,count:4}]})})}},z={name:`BubbleTabs — уходят вбок (overflow="scroll")`,parameters:{docs:{description:{story:`Вкладки карточки тендера в ширине содержимого боковой модалки L (652px). Не помещаются — уходят вбок без полосы. Попробуйте: перетащить ряд мышью, покрутить обычным колесом над рядом, выбрать последнюю вкладку стрелкой →.`}}},render:function(){let[e,t]=(0,D.useState)(`main`);return(0,O.jsx)(`div`,{style:{width:652},children:(0,O.jsx)(E,{on:`white`,title:`652px — ширина содержимого боковой модалки L (700 − отступы)`,children:(0,O.jsx)(S,{overflow:`scroll`,activeKey:e,onChange:t,items:[{key:`main`,label:`Основное`},{key:`set`,label:`Набор техкарт`},{key:`norm`,label:`Нормативы сроков`,isNew:!0},{key:`check`,label:`Чек-лист подачи`,isNew:!0},{key:`tz`,label:`Шаблон ТЗ`,isNew:!0},{key:`keys`,label:`Ключи и версия`,isNew:!0}]})})})}},B=[`Playground`,`Matrix`,`StatusAndCount`,`New`,`Tiles`,`LongLabel`,`Tabs`,`Scroll`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <Surface on={args.on ?? 'white'} title={\`on="\${args.on}"\`}><Bubble {...args} /></Surface>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Новое',
  render: () => <Surface on="white" title="isNew — Bulb kind=&quot;dot&quot; кита">
      <Bubble size="xs" isNew>Корпус 2</Bubble>
      <Bubble size="s" isNew>Корпус 2</Bubble>
      <Bubble size="s" isNew selected>Корпус 2</Bubble>
    </Surface>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Плитки m — до 3 строк',
  render: () => <Surface on="grey" title="size=&quot;m&quot;, ширина 126, текст по центру, дальше отточие">
      <Bubble size="m" on="grey">Корпус 1</Bubble>
      <Bubble size="m" on="grey" selected>Подземный паркинг</Bubble>
      <Bubble size="m" on="grey">Встроенно-пристроенные помещения первого этажа</Bubble>
    </Surface>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Длинная подпись',
  render: () => <div style={{
    width: 260
  }}>
      <Surface on="white" title="контейнер 260px">
        <Bubble size="s">Корпус 1, секция А, подъезд 3</Bubble>
      </Surface>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{L as LongLabel,N as Matrix,F as New,M as Playground,z as Scroll,P as StatusAndCount,R as Tabs,I as Tiles,B as __namedExportsOrder,k as default};