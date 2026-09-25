import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CvEwutAq.js";import{n as r,t as i}from"./Tag-BXyiHTmi.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a=`_line_ng5b2_24`,o=`_white_ng5b2_36`,s=`_grey_ng5b2_37`,c=`_label_ng5b2_39`,l=`_value_ng5b2_40`,u=`_lv_ng5b2_43`,d=`_equal_ng5b2_47`,f=`_mobile_ng5b2_51`,p=`_list_ng5b2_55`,m=`_listMobile_ng5b2_56`,h=`_title_ng5b2_57`,g=`_rows_ng5b2_65`,_={line:a,white:o,grey:s,label:c,value:l,lv:u,equal:d,mobile:f,list:p,listMobile:m,title:h,rows:g}})))()}function y({label:e,children:t,type:n=`lv`,color:r=`white`,mobile:i=!1,className:a,...o}){return(0,S.jsxs)(`div`,{...o,className:[_.line,_[r],i?_.mobile:_[n],a].filter(Boolean).join(` `),children:[(0,S.jsx)(`div`,{className:_.label,children:e}),(0,S.jsx)(`div`,{className:_.value,children:t})]})}function b({title:e,type:t=`lv`,mobile:n=!1,zebra:r=!0,children:i,className:a,...o}){let s=0,c=x.Children.map(i,e=>{if(!(0,x.isValidElement)(e))return e;let i=e,a=r&&s++%2==1?`grey`:`white`;return(0,x.cloneElement)(i,{type:i.props.type??t,mobile:i.props.mobile??n,color:i.props.color??a})});return(0,S.jsxs)(`div`,{...o,className:[_.list,n?_.listMobile:``,a].filter(Boolean).join(` `),children:[e!=null&&(0,S.jsx)(`div`,{className:_.title,children:e}),(0,S.jsx)(`div`,{className:_.rows,children:c})]})}var x,S;function C(){return(C=e((()=>{x=t(),v(),S=n(),y.__docgenInfo={description:``,methods:[],displayName:`TextLine`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:`Подпись слева (в макете «lable»).`},children:{required:!1,tsType:{name:`ReactNode`},description:`Значение справа: текст, тег, что угодно.`},type:{required:!1,tsType:{name:`union`,raw:`'lv' | 'equal'`,elements:[{name:`literal`,value:`'lv'`},{name:`literal`,value:`'equal'`}]},description:``,defaultValue:{value:`'lv'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'white' | 'grey'`,elements:[{name:`literal`,value:`'white'`},{name:`literal`,value:`'grey'`}]},description:``,defaultValue:{value:`'white'`,computed:!1}},mobile:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]},b.__docgenInfo={description:`Список строк: тип и мобильный вид задаются один раз на весь список, фон чередуется сам.`,methods:[],displayName:`TextList`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:`Заголовок списка (H5). Необязателен.`},type:{required:!1,tsType:{name:`union`,raw:`'lv' | 'equal'`,elements:[{name:`literal`,value:`'lv'`},{name:`literal`,value:`'equal'`}]},description:``,defaultValue:{value:`'lv'`,computed:!1}},mobile:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},zebra:{required:!1,tsType:{name:`boolean`},description:`Чередовать фон строк: белая, серая, белая… Цвет, заданный у строки явно, сильнее.`,defaultValue:{value:`true`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})))()}var w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{r(),C(),w=n(),T=`
Источник — Figma UI Kit «Практис»: **Текстовые строки** (node 5832:2756). Строки «подпись — значение»
для карточек и модалок.

| Проп | Что делает | В Figma |
|---|---|---|
| \`type="lv"\` | подпись 200–340px, значение от 392px до конца строки | Type = L<V |
| \`type="equal"\` | подпись и значение поровну | Type = Equal |
| \`mobile\` | значение под подписью через 4px, шрифт 13 | Mobile |
| \`color\` | фон white / grey | Color |
| \`children\` | значение: текст или тег | Text / Tag |

Между подписью и значением всегда 20px. Длинный текст переносится — строка растёт в высоту.
Не помещаются обе части рядом — значение переходит под подпись с отступом 4px.

**TextList** — список строк: \`title\` (H5, отступ 8; на мобильном 15px и 4), общий \`type\` и \`mobile\`,
фон чередуется сам — белая, серая, белая… Цвет, заданный у строки явно, сильнее.
`,E=`Уральская, 23-25, (Amber club), Очередь, (:1935), СПб, Василеостровский р-н, Уральская ул., 23-25`,D={title:`UI Kit/TextLine`,component:y,parameters:{layout:`padded`,docs:{description:{component:T}}},tags:[`autodocs`],argTypes:{type:{control:`inline-radio`,options:[`lv`,`equal`]},color:{control:`inline-radio`,options:[`white`,`grey`]},mobile:{control:`boolean`},label:{control:`text`},children:{control:`text`}},args:{label:`Объект`,children:E,type:`lv`,color:`grey`,mobile:!1}},O=e=>({width:e,maxWidth:`100%`}),k={render:e=>(0,w.jsx)(`div`,{style:O(1080),children:(0,w.jsx)(y,{...e})})},A={name:`L<V — подпись короче значения`,parameters:{docs:{description:{story:`Пример из макета: короткие и длинные подписи, короткие и длинные значения.`}}},render:()=>(0,w.jsx)(`div`,{style:O(1080),children:(0,w.jsxs)(b,{title:`Заголовок 3`,children:[(0,w.jsx)(y,{label:`Название`,children:`Лещинский`}),(0,w.jsx)(y,{label:`Адрес`,children:`дер. Ромашки, Выборгский р-н`}),(0,w.jsx)(y,{label:`Неснижаемый общий складской остаток (метр кубический)`,children:`500`}),(0,w.jsx)(y,{label:`Кол-во продукции возможно взять под ответственное хранение (метр кубический)`,children:`500 000`}),(0,w.jsx)(y,{label:`Объект`,children:E})]})})},j={name:`Equal — поровну`,render:()=>(0,w.jsx)(`div`,{style:O(752),children:(0,w.jsxs)(b,{title:`Заголовок 1`,type:`equal`,children:[(0,w.jsx)(y,{label:`Тип тендера`,children:`Строительно-монтажные работы`}),(0,w.jsx)(y,{label:`Дата проведения тендера`,children:`12.01.2024`}),(0,w.jsx)(y,{label:`Наименование тендера`,children:`Выполнение полного комплекса работ по организации строительной площадки`})]})})},M={name:`Тег вместо текста`,render:()=>(0,w.jsx)(`div`,{style:O(1080),children:(0,w.jsxs)(b,{children:[(0,w.jsx)(y,{label:`Статус`,children:(0,w.jsx)(i,{status:`success`,icon:!0,children:`Аккредитован`})}),(0,w.jsx)(y,{label:`Проверка`,children:(0,w.jsx)(i,{status:`warning`,icon:!0,children:`На согласовании`})})]})})},N={name:`Узкий контейнер`,parameters:{docs:{description:{story:`520px: подпись (от 200) и значение (от 392) рядом не помещаются — значение уходит под подпись через 4px.`}}},render:()=>(0,w.jsx)(`div`,{style:O(520),children:(0,w.jsxs)(b,{children:[(0,w.jsx)(y,{label:`Объект`,children:E}),(0,w.jsx)(y,{label:`Название`,children:`Лещинский`})]})})},P={render:()=>(0,w.jsx)(`div`,{style:O(296),children:(0,w.jsxs)(b,{title:`Заголовок 2`,mobile:!0,children:[(0,w.jsx)(y,{label:`Название`,children:`Лещинский`}),(0,w.jsx)(y,{label:`Адрес`,children:`дер. Ромашки, Выборгский р-н`}),(0,w.jsx)(y,{label:`Кол-во продукции возможно взять под ответственное хранение (метр кубический)`,children:`500 000`})]})})},F=[`Playground`,`LessThanValue`,`Equal`,`WithTag`,`Narrow`,`Mobile`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div style={box(1080)}><TextLine {...args} /></div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'L<V — подпись короче значения',
  parameters: {
    docs: {
      description: {
        story: 'Пример из макета: короткие и длинные подписи, короткие и длинные значения.'
      }
    }
  },
  render: () => <div style={box(1080)}>
      <TextList title="Заголовок 3">
        <TextLine label="Название">Лещинский</TextLine>
        <TextLine label="Адрес">дер. Ромашки, Выборгский р-н</TextLine>
        <TextLine label="Неснижаемый общий складской остаток (метр кубический)">500</TextLine>
        <TextLine label="Кол-во продукции возможно взять под ответственное хранение (метр кубический)">500 000</TextLine>
        <TextLine label="Объект">{ADDR}</TextLine>
      </TextList>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Equal — поровну',
  render: () => <div style={box(752)}>
      <TextList title="Заголовок 1" type="equal">
        <TextLine label="Тип тендера">Строительно-монтажные работы</TextLine>
        <TextLine label="Дата проведения тендера">12.01.2024</TextLine>
        <TextLine label="Наименование тендера">Выполнение полного комплекса работ по организации строительной площадки</TextLine>
      </TextList>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Тег вместо текста',
  render: () => <div style={box(1080)}>
      <TextList>
        <TextLine label="Статус"><Tag status="success" icon>Аккредитован</Tag></TextLine>
        <TextLine label="Проверка"><Tag status="warning" icon>На согласовании</Tag></TextLine>
      </TextList>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Узкий контейнер',
  parameters: {
    docs: {
      description: {
        story: '520px: подпись (от 200) и значение (от 392) рядом не помещаются — значение уходит под подпись через 4px.'
      }
    }
  },
  render: () => <div style={box(520)}>
      <TextList>
        <TextLine label="Объект">{ADDR}</TextLine>
        <TextLine label="Название">Лещинский</TextLine>
      </TextList>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={box(296)}>
      <TextList title="Заголовок 2" mobile>
        <TextLine label="Название">Лещинский</TextLine>
        <TextLine label="Адрес">дер. Ромашки, Выборгский р-н</TextLine>
        <TextLine label="Кол-во продукции возможно взять под ответственное хранение (метр кубический)">500 000</TextLine>
      </TextList>
    </div>
}`,...P.parameters?.docs?.source}}}})))()}I();export{j as Equal,A as LessThanValue,P as Mobile,N as Narrow,k as Playground,M as WithTag,F as __namedExportsOrder,D as default};