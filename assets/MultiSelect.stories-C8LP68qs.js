import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./tooltip-9Pw5DVgc.js";import{n as i,t as a}from"./select-BJIyQTVS.js";import{l as o,n as s,u as c}from"./iframe-Cfof-CBm.js";import{Bl as l,Hl as u,Mn as d,t as f}from"./icons-BS4H7Flo.js";import{n as p,t as m}from"./InputChrome-xn7DFgZ0.js";import{i as h,n as g,r as _,t as v}from"./SelectSpinner-DNCqWpwT.js";import{n as y,t as b}from"./DropdownMenuItem-BkrxdI56.js";import{n as x,t as S}from"./MultiSelectTag-Ce3y0_Vl.js";var C,w,T,E,D,O;function k(){return(k=e((()=>{C=`_multi_zbwue_4`,w=`_m_zbwue_3`,T=`_s_zbwue_3`,E=`_popup_zbwue_149`,D=`_omittedList_zbwue_179`,O={multi:C,m:w,s:T,popup:E,omittedList:D}})))()}function A({size:e=`m`,label:t,required:n,infoText:i,errorMessage:o,status:s,className:f,disabled:p,loading:h=!1,loadError:g=!1,onRetry:y,singleLine:x=!1,options:C,value:w,defaultValue:T,onChange:E,open:D,onOpenChange:k,placeholder:A,getPopupContainer:P,popupClassName:F,...I}){let[L,R]=(0,j.useState)(T??[]),z=w!==void 0,B=(z?w:L)??[],[V,H]=(0,j.useState)(!1),U=h||g,W=s===`error`||g,G=h?(0,M.jsx)(v,{}):g?(0,M.jsx)(`span`,{className:_.retryIcon,onClick:e=>{e.stopPropagation(),y?.()},children:(0,M.jsx)(d,{size:18})}):!U&&(D??V)?(0,M.jsx)(`span`,{className:_.arrowUp,children:(0,M.jsx)(l,{size:18})}):(0,M.jsx)(`span`,{className:_.arrowDown,children:(0,M.jsx)(u,{size:18})}),K=(0,M.jsx)(a,{...I,mode:`multiple`,showSearch:I.showSearch??!1,disabled:p,status:W?`error`:s,size:N[e],options:C,value:B,onChange:(e,t)=>{z||R(e),E?.(e,t)},open:!U&&D,onOpenChange:e=>{H(e),k?.(e)},placeholder:h?`Loading...`:A,suffixIcon:G,menuItemSelectedIcon:null,optionRender:e=>(0,M.jsx)(b,{mark:`checkbox`,label:e.label,selected:e.value!==void 0&&B.includes(e.value),disabled:e.data.disabled}),tagRender:({label:e,value:t,onClose:n,isMaxTag:r})=>r?(0,M.jsx)(M.Fragment,{children:e}):(0,M.jsx)(S,{disabled:p,onRemove:()=>n(),children:e},String(t)),maxTagCount:x?`responsive`:void 0,maxTagPlaceholder:e=>(0,M.jsx)(r,{color:c.tooltipBg,title:(0,M.jsx)(`div`,{className:O.omittedList,children:e.map(e=>(0,M.jsx)(`div`,{children:e.label},String(e.value)))}),children:(0,M.jsxs)(S,{disabled:p,children:[`+`,e.length]})}),getPopupContainer:P??(e=>e.closest(`[data-theme]`)??document.body),popupClassName:[O.popup,F].filter(Boolean).join(` `),className:[_.select,O.multi,O[e],h?_.loading:``,f].filter(Boolean).join(` `)});return(0,M.jsx)(m,{label:t,required:n,infoText:i,errorMessage:o,isError:W,disabled:p,field:K,valueTooltip:null})}var j,M,N;function P(){return(P=e((()=>{i(),n(),j=t(),f(),o(),y(),p(),h(),g(),k(),x(),M=s(),N={s:`small`,m:`middle`},A.__docgenInfo={description:``,methods:[],displayName:`MultiSelect`,props:{size:{required:!1,tsType:{name:`union`,raw:`'s' | 'm'`,elements:[{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`}]},description:``,defaultValue:{value:`'m'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},infoText:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:`Спиннер + "Loading..." вместо шеврона; дропдаун временно не открывается.`,defaultValue:{value:`false`,computed:!1}},loadError:{required:!1,tsType:{name:`boolean`},description:`Не удалось загрузить опции — красная рамка + иконка рефреша; клик по ней вызывает onRetry.`,defaultValue:{value:`false`,computed:!1}},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},singleLine:{required:!1,tsType:{name:`boolean`},description:`Теги в одну строку («Если нужно в 1 строку» в макете): не поместившиеся сворачиваются в «+N»
с тултипом. По умолчанию выключено — поле растёт по высоте и показывает все теги.`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{P(),F=s(),I={title:`UI Kit/MultiSelect`,component:A,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: **Select / Multi** (node 1148:2420).

Построен на **UI Kit/Select**: та же обвязка (label / required / infoText / errorMessage), те же
стили поля, размеры s/m, состояния loading и loadError, та же фиксированная ширина 200px.
Отличия — то, ради чего мультиселект и нужен.

## Теги

Выбранное показывается тегами — это атом **multi-select__value** из макета, в коде
\`MultiSelectTag\` (самостоятельный компонент, см. **UI Kit/MultiSelectTag**). Тег никогда не
шире поля: длинный текст уходит в отточие **на максимальной ширине**, а следующий тег
переносится на строку ниже. Крестик удаляет тег, не открывая список.

Тег один на оба размера поля (18px, текст 12px): поле m = 9 + 18 + 9 = 36, поле s = 6 + 18 + 6 = 30.
Тег размера m (14px) — для ячеек таблицы, в поле мультиселекта он не используется.

## Два режима

- **«Если нужно видеть все»** (по умолчанию) — поле растёт по высоте под все теги.
- **«Если нужно в 1 строку»** (\`singleLine\`) — теги в одну строку, не поместившиеся
  сворачиваются в **«+N»**: тот же тег без крестика, при наведении — тултип со списком скрытого.
  Сколько тегов влезло, antd считает сам.

## Список

В списке — чекбоксы, как в макете DropdownMenu («использование в мультиселектах»). Пункты
рисуются нашим **UI Kit/DropdownMenuItem** с \`mark="checkbox"\` — тот же компонент, что в
дропдаун-меню, второй отрисовки пункта в ките нет.

Поиск по вводу в само поле выключен: в макете для длинных списков поиск — отдельное поле над
списком. Включается снаружи через \`showSearch\`.
`},story:{height:`420px`}}},decorators:[e=>(0,F.jsx)(`div`,{style:{minHeight:360},children:(0,F.jsx)(e,{})})],tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},singleLine:{control:`boolean`},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`},loadError:{control:`boolean`}},args:{size:`m`,options:[{value:`p1`,label:`Пункт`},{value:`p2`,label:`Какой-то пункт`},{value:`p3`,label:`Длинный текст пункта`},{value:`p4`,label:`Пункт`},{value:`p5`,label:`Норм пункт`},{value:`p6`,label:`Какой-то пункт`},{value:`p7`,label:`Очень длинное название пункта, которое не помещается в ширину поля`},{value:`p8`,label:`Заблокированный пункт`,disabled:!0}],placeholder:`Please select`,label:`Label`,required:!0,infoText:`Можно выбрать несколько`,errorMessage:`Поле обязательно для заполнения`}},L={},R={args:{label:void 0,infoText:void 0}},z={parameters:{docs:{description:{story:`Режим по умолчанию — «Если нужно видеть все» из макета. Поле хагается по высоте под все теги; тег с длинным текстом занимает всю ширину и обрезается отточием.`}}},args:{label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`,`p3`,`p4`,`p5`,`p6`,`p7`]}},B={parameters:{docs:{description:{story:`«Если нужно в 1 строку» из макета. Наведи на «+N» — тултип перечисляет скрытые теги.`}}},args:{label:void 0,infoText:void 0,singleLine:!0,defaultValue:[`p1`,`p2`,`p3`,`p5`,`p6`]}},V={render:e=>(0,F.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,F.jsx)(A,{...e,size:`s`,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]}),(0,F.jsx)(A,{...e,size:`m`,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]})]})},H={parameters:{docs:{description:{story:`Default → Filled → Disabled → Disabled + Filled → Loading → Error. У Disabled + Filled теги без крестиков, как в макете.`}}},render:e=>(0,F.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`flex-start`},children:[(0,F.jsx)(A,{...e,label:void 0,infoText:void 0}),(0,F.jsx)(A,{...e,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]}),(0,F.jsx)(A,{...e,label:void 0,infoText:void 0,disabled:!0}),(0,F.jsx)(A,{...e,label:void 0,infoText:void 0,disabled:!0,defaultValue:[`p1`,`p2`]}),(0,F.jsx)(A,{...e,label:void 0,infoText:void 0,loading:!0}),(0,F.jsx)(A,{...e,label:void 0,infoText:void 0,status:`error`})]})},U={args:{defaultValue:[`p1`,`p2`]}},W={args:{disabled:!0,defaultValue:[`p1`,`p2`]}},G={args:{loading:!0}},K={args:{loadError:!0}},q={args:{status:`error`}},J={parameters:{docs:{description:{story:`Список открыт принудительно: пункты с чекбоксами — тот же **DropdownMenuItem**, что в дропдаун-меню.`}}},args:{label:void 0,infoText:void 0,defaultValue:[`p1`,`p3`],open:!0}},Y=[`Playground`,`Bare`,`SeeAll`,`SingleLine`,`Sizes`,`States`,`WithLabel`,`Disabled`,`Loading`,`LoadError`,`Error`,`OpenList`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    infoText: undefined
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Режим по умолчанию — «Если нужно видеть все» из макета. Поле хагается по высоте под все теги; тег с длинным текстом занимает всю ширину и обрезается отточием.'
      }
    }
  },
  args: {
    label: undefined,
    infoText: undefined,
    defaultValue: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'] satisfies MultiSelectValue[]
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '«Если нужно в 1 строку» из макета. Наведи на «+N» — тултип перечисляет скрытые теги.'
      }
    }
  },
  args: {
    label: undefined,
    infoText: undefined,
    singleLine: true,
    defaultValue: ['p1', 'p2', 'p3', 'p5', 'p6'] satisfies MultiSelectValue[]
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <MultiSelect {...args} size="s" label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
      <MultiSelect {...args} size="m" label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default → Filled → Disabled → Disabled + Filled → Loading → Error. У Disabled + Filled теги без крестиков, как в макете.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <MultiSelect {...args} label={undefined} infoText={undefined} />
      <MultiSelect {...args} label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
      <MultiSelect {...args} label={undefined} infoText={undefined} disabled />
      <MultiSelect {...args} label={undefined} infoText={undefined} disabled defaultValue={['p1', 'p2']} />
      <MultiSelect {...args} label={undefined} infoText={undefined} loading />
      <MultiSelect {...args} label={undefined} infoText={undefined} status="error" />
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['p1', 'p2']
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: ['p1', 'p2']
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    loadError: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Список открыт принудительно: пункты с чекбоксами — тот же **DropdownMenuItem**, что в дропдаун-меню.'
      }
    }
  },
  args: {
    label: undefined,
    infoText: undefined,
    defaultValue: ['p1', 'p3'],
    open: true
  }
}`,...J.parameters?.docs?.source}}}})))()}X();export{R as Bare,W as Disabled,q as Error,K as LoadError,G as Loading,J as OpenList,L as Playground,z as SeeAll,B as SingleLine,V as Sizes,H as States,U as WithLabel,Y as __namedExportsOrder,I as default};