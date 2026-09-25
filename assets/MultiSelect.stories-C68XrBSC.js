import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./tooltip-Ci0gRXVe.js";import{n as i,t as a}from"./select-CcF-Ig_9.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{Kl as s,Pn as c,Wl as l,t as u}from"./icons-B1LEmBjt.js";import{h as d,m as f}from"./tokens-Cf9IueZ-.js";import{a as p,i as m,r as h}from"./iframe-BbKzeMWs.js";import{n as g,t as _}from"./DropdownMenuItem-DMH5YJhD.js";import{n as v,t as y}from"./InputChrome-wP-YAE1Z.js";import{n as b,t as x}from"./SelectSpinner-C5fkGL9D.js";import{n as S,t as C}from"./Select.module-D8niTVgo.js";import{n as w,t as T}from"./MultiSelectTag-BPkXIaVr.js";var E,D,O,k,A,j;function M(){return(M=e((()=>{E=`_multi_zbwue_4`,D=`_m_zbwue_3`,O=`_s_zbwue_3`,k=`_popup_zbwue_149`,A=`_omittedList_zbwue_179`,j={multi:E,m:D,s:O,popup:k,omittedList:A}})))()}function N({size:e=`m`,label:t,required:n,infoText:i,errorMessage:o,status:u,className:f,disabled:p,loading:g=!1,loadError:v=!1,onRetry:b,singleLine:S=!1,options:w,value:E,defaultValue:D,onChange:O,open:k,onOpenChange:A,placeholder:M,getPopupContainer:N,popupClassName:L,emptyState:R,...z}){let[B,V]=(0,P.useState)(D??[]),H=E!==void 0,U=(H?E:B)??[],[W,G]=(0,P.useState)(!1),[K,q]=(0,P.useState)(``),J=g||v,Y=u===`error`||v,X=g?(0,F.jsx)(x,{}):v?(0,F.jsx)(`span`,{className:C.retryIcon,onClick:e=>{e.stopPropagation(),b?.()},children:(0,F.jsx)(c,{size:18})}):!J&&(k??W)?(0,F.jsx)(`span`,{className:C.arrowUp,children:(0,F.jsx)(l,{size:18})}):(0,F.jsx)(`span`,{className:C.arrowDown,children:(0,F.jsx)(s,{size:18})}),Z=(0,F.jsx)(a,{...z,mode:`multiple`,showSearch:z.showSearch??!1,disabled:p,status:Y?`error`:u,size:I[e],options:w,value:U,onChange:(e,t)=>{H||V(e),O?.(e,t)},open:!J&&k,notFoundContent:z.notFoundContent??(K.trim()?(0,F.jsx)(m,{size:`xs`,kind:`notFound`}):(0,F.jsx)(m,{size:`xs`,...R??h})),onSearch:e=>{q(e),z.onSearch?.(e)},onOpenChange:e=>{G(e),e||q(``),A?.(e)},placeholder:g?`Loading...`:M,suffixIcon:X,menuItemSelectedIcon:null,optionRender:e=>(0,F.jsx)(_,{mark:`checkbox`,label:e.label,selected:e.value!==void 0&&U.includes(e.value),disabled:e.data.disabled}),tagRender:({label:e,value:t,onClose:n,isMaxTag:r})=>r?(0,F.jsx)(F.Fragment,{children:e}):(0,F.jsx)(T,{disabled:p,onRemove:()=>n(),children:e},String(t)),maxTagCount:S?`responsive`:void 0,maxTagPlaceholder:e=>(0,F.jsx)(r,{color:d.tooltipBg,title:(0,F.jsx)(`div`,{className:j.omittedList,children:e.map(e=>(0,F.jsx)(`div`,{children:e.label},String(e.value)))}),children:(0,F.jsxs)(T,{disabled:p,children:[`+`,e.length]})}),getPopupContainer:N??(e=>e.closest(`[data-theme]`)??document.body),popupClassName:[j.popup,L].filter(Boolean).join(` `),className:[C.select,j.multi,j[e],g?C.loading:``,f].filter(Boolean).join(` `)});return(0,F.jsx)(y,{label:t,required:n,infoText:i,errorMessage:o,isError:Y,disabled:p,field:Z,valueTooltip:null})}var P,F,I;function L(){return(L=e((()=>{i(),n(),P=t(),u(),f(),g(),p(),v(),S(),b(),M(),w(),F=o(),I={s:`small`,m:`middle`},N.__docgenInfo={description:``,methods:[],displayName:`MultiSelect`,props:{emptyState:{required:!1,tsType:{name:`EmptyStateContent`},description:`Что показать в пустом списке: заголовок и мелко — чего ждать (или что сделать, с кнопкой).
Не передано — запасной «Вариантов пока нет». «Ничего не найдено» по поиску — своё, готовое.`},size:{required:!1,tsType:{name:`union`,raw:`'s' | 'm'`,elements:[{name:`literal`,value:`'s'`},{name:`literal`,value:`'m'`}]},description:``,defaultValue:{value:`'m'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},infoText:{required:!1,tsType:{name:`string`},description:``},errorMessage:{required:!1,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:`Спиннер + "Loading..." вместо шеврона; дропдаун временно не открывается.`,defaultValue:{value:`false`,computed:!1}},loadError:{required:!1,tsType:{name:`boolean`},description:`Не удалось загрузить опции — красная рамка + иконка рефреша; клик по ней вызывает onRetry.`,defaultValue:{value:`false`,computed:!1}},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},singleLine:{required:!1,tsType:{name:`boolean`},description:`Теги в одну строку («Если нужно в 1 строку» в макете): не поместившиеся сворачиваются в «+N»
с тултипом. По умолчанию выключено — поле растёт по высоте и показывает все теги.`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{L(),R=o(),z={title:`UI Kit/Поля и выбор/MultiSelect`,id:`ui-kit-multiselect`,component:N,parameters:{layout:`padded`,docs:{description:{component:`
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
`},story:{height:`420px`}}},decorators:[e=>(0,R.jsx)(`div`,{style:{minHeight:360},children:(0,R.jsx)(e,{})})],tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},singleLine:{control:`boolean`},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`},loadError:{control:`boolean`}},args:{size:`m`,options:[{value:`p1`,label:`Пункт`},{value:`p2`,label:`Какой-то пункт`},{value:`p3`,label:`Длинный текст пункта`},{value:`p4`,label:`Пункт`},{value:`p5`,label:`Норм пункт`},{value:`p6`,label:`Какой-то пункт`},{value:`p7`,label:`Очень длинное название пункта, которое не помещается в ширину поля`},{value:`p8`,label:`Заблокированный пункт`,disabled:!0}],placeholder:`Please select`,label:`Label`,required:!0,infoText:`Можно выбрать несколько`,errorMessage:`Поле обязательно для заполнения`}},B={},V={args:{label:void 0,infoText:void 0}},H={parameters:{docs:{description:{story:`Режим по умолчанию — «Если нужно видеть все» из макета. Поле хагается по высоте под все теги; тег с длинным текстом занимает всю ширину и обрезается отточием.`}}},args:{label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`,`p3`,`p4`,`p5`,`p6`,`p7`]}},U={parameters:{docs:{description:{story:`«Если нужно в 1 строку» из макета. Наведи на «+N» — тултип перечисляет скрытые теги.`}}},args:{label:void 0,infoText:void 0,singleLine:!0,defaultValue:[`p1`,`p2`,`p3`,`p5`,`p6`]}},W={render:e=>(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,R.jsx)(N,{...e,size:`s`,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]}),(0,R.jsx)(N,{...e,size:`m`,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]})]})},G={parameters:{docs:{description:{story:`Default → Filled → Disabled → Disabled + Filled → Loading → Error. У Disabled + Filled теги без крестиков, как в макете.`}}},render:e=>(0,R.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`flex-start`},children:[(0,R.jsx)(N,{...e,label:void 0,infoText:void 0}),(0,R.jsx)(N,{...e,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]}),(0,R.jsx)(N,{...e,label:void 0,infoText:void 0,disabled:!0}),(0,R.jsx)(N,{...e,label:void 0,infoText:void 0,disabled:!0,defaultValue:[`p1`,`p2`]}),(0,R.jsx)(N,{...e,label:void 0,infoText:void 0,loading:!0}),(0,R.jsx)(N,{...e,label:void 0,infoText:void 0,status:`error`})]})},K={args:{defaultValue:[`p1`,`p2`]}},q={args:{disabled:!0,defaultValue:[`p1`,`p2`]}},J={args:{loading:!0}},Y={args:{loadError:!0}},X={args:{status:`error`}},Z={parameters:{docs:{description:{story:`Список открыт принудительно: пункты с чекбоксами — тот же **DropdownMenuItem**, что в дропдаун-меню.`}}},args:{label:void 0,infoText:void 0,defaultValue:[`p1`,`p3`],open:!0}},Q=[`Playground`,`Bare`,`SeeAll`,`SingleLine`,`Sizes`,`States`,`WithLabel`,`Disabled`,`Loading`,`LoadError`,`Error`,`OpenList`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    infoText: undefined
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <MultiSelect {...args} size="s" label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
      <MultiSelect {...args} size="m" label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['p1', 'p2']
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: ['p1', 'p2']
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    loadError: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{V as Bare,q as Disabled,X as Error,Y as LoadError,J as Loading,Z as OpenList,B as Playground,H as SeeAll,U as SingleLine,W as Sizes,G as States,K as WithLabel,Q as __namedExportsOrder,z as default};