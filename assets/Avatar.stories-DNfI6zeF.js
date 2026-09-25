import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CvEwutAq.js";import{n,t as r}from"./Avatar-Cwo3l8q0.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`UI Kit/Avatar`,component:r,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: **avatar** (node 8067:4654).

Фото пользователя или инициалы (две первые буквы имени) на сером квадрате.
Размеры: **s** 16, **m** 30, **l** 38 (кнопка кабинета в шапке у планшета).
`}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`s`,`m`,`l`]},name:{control:`text`},src:{control:`text`,name:`src (ссылка на фото)`}},args:{name:`Иванов Антон`,size:`m`}},o={},s=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2030%2030%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%238ab5fa%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233c83f6%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%2230%22%20height%3D%2230%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2212%22%20r%3D%225%22%20fill%3D%22%23fff%22%20opacity%3D%22.85%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%2219%22%20width%3D%2218%22%20height%3D%2211%22%20rx%3D%229%22%20fill%3D%22%23fff%22%20opacity%3D%22.85%22%2F%3E%3C%2Fsvg%3E`,c={name:`Инициалы и фото, все размеры`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[[`s`,`m`,`l`].map(e=>(0,i.jsx)(r,{name:`Иванов Антон`,size:e},e)),[`s`,`m`,`l`].map(e=>(0,i.jsx)(r,{name:`Иванов Антон`,size:e,src:s},`p`+e))]})},l=[`Playground`,`Sizes`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Инициалы и фото, все размеры',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {(['s', 'm', 'l'] as const).map(s => <Avatar key={s} name="Иванов Антон" size={s} />)}
      {(['s', 'm', 'l'] as const).map(s => <Avatar key={'p' + s} name="Иванов Антон" size={s} src={PHOTO} />)}
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{o as Playground,c as Sizes,l as __namedExportsOrder,a as default};