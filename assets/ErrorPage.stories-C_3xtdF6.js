import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Df609tLh.js";import{a,i as o}from"./iframe-BbKzeMWs.js";import{a as s,c}from"./HeaderParts-CZoLHyoV.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l=`_image404_295qr_5`,u=`_page500_295qr_14`,d=`_column_295qr_26`,f=`_logo_295qr_36`,p=`_text_295qr_41`,m=`_title_295qr_50`,h=`_description_295qr_51`,g=`_actions_295qr_66`,_=`_image500_295qr_73`,v={image404:l,page500:u,column:d,logo:f,text:p,title:m,description:h,actions:g,image500:_}})))()}var b;function x(){return(x=e((()=>{b=``+new URL(`error-404-DpUop_wR.webp`,import.meta.url).href})))()}var S;function C(){return(C=e((()=>{S=``+new URL(`error-500-DCEkX6fB.webp`,import.meta.url).href})))()}function w(e){if(e.code===404){let{title:t,description:n,homeHref:r=`/`,action:i,className:a}=e;return(0,T.jsx)(o,{size:`m`,className:a,image:(0,T.jsx)(`img`,{className:v.image404,src:b,width:282,height:246,alt:``}),title:t??`Страница не найдена`,description:n??`Страница, на которую вы пытаетесь попасть, не существует или была удалена`,action:i??{label:`Перейти на главную`,href:r}})}let{title:t,description:n,logo:r=`praktis`,onRetry:a=()=>window.location.reload(),onBack:c=()=>window.history.back(),className:l}=e;return(0,T.jsxs)(`main`,{className:[v.page500,l].filter(Boolean).join(` `),children:[(0,T.jsxs)(`div`,{className:v.column,children:[(0,T.jsx)(`div`,{className:v.logo,children:(0,T.jsx)(s,{type:r})}),(0,T.jsxs)(`div`,{className:v.text,children:[(0,T.jsx)(`h1`,{className:v.title,children:t??`Упс! Что-то пошло не так`}),(0,T.jsx)(`p`,{className:v.description,children:n??`Перезагрузите страницу, возможно, все исправится само`})]}),(0,T.jsxs)(`div`,{className:v.actions,children:[(0,T.jsx)(i,{variant:`stroke`,size:`large`,onClick:c,children:`Вернуться назад`}),(0,T.jsx)(i,{variant:`primary`,size:`large`,onClick:a,children:`Обновить`})]})]}),(0,T.jsx)(`img`,{className:v.image500,src:S,width:481,height:481,alt:``})]})}var T;function E(){return(E=e((()=>{r(),c(),a(),y(),x(),C(),T=n(),w.__docgenInfo={description:``,methods:[],displayName:`ErrorPage`}})))()}function D(){let[e,t]=(0,O.useState)(``);return(0,k.jsxs)(`div`,{style:{position:`relative`},children:[(0,k.jsx)(w,{code:500,onRetry:()=>t(`нажали «Обновить» (в жизни — перезагрузка страницы)`),onBack:()=>t(`нажали «Вернуться назад» (в жизни — назад в истории)`)}),e&&(0,k.jsx)(`span`,{style:{position:`absolute`,left:24,bottom:16,fontFamily:`Inter, sans-serif`,fontSize:12,color:`#7e7e7e`},children:e})]})}var O,k,A,j,M,N;function P(){return(P=e((()=>{O=t(),E(),k=n(),A={title:`UI Kit/Сообщения и окна/EmptyState/ErrorPage`,id:`ui-kit-emptystate-errorpage`,component:w,parameters:{docs:{description:{component:"\nИсточник — Figma UI Kit «Практис»: «Пустые страницы и ошибки» (canvas 7768:4600), компоненты\n**400** (7779:5008) и **500** (7779:11069).\n\n| `code` | Где | Что внутри | Пропы |\n|---|---|---|---|\n| `404` | вместо содержимого страницы, шапка и меню на месте | EmptyState M с картинкой, «Перейти на главную» | `homeHref` (по умолчанию «/»), `action` |\n| `500` | на весь экран — сервис не загрузился | логотип, текст, «Вернуться назад» и «Обновить», картинка | `logo` (HeaderLogo кита), `onBack`, `onRetry` |\n\nЗаголовок и пояснение можно заменить (`title`, `description`). По умолчанию «Обновить»\nперезагружает страницу, «Вернуться назад» — шаг назад в истории браузера.\n\n**Решено по-своему:** зазор до картинки у 500 — 76 (в макете 77, сетка 4); на экране уже 900\n500 складывается в колонку (мобильной версии в макете нет); опечатка «пытатесь» исправлена.\n"}}},tags:[`autodocs`],argTypes:{code:{control:!1}}},j={name:`404 — страница не найдена`,args:{code:404},parameters:{layout:`padded`,docs:{description:{story:`Внутри страницы сервиса — вместо содержимого; в примере белая подложка рабочей области.`}}},render:()=>(0,k.jsx)(`div`,{style:{height:640,background:`var(--surface-white, #ffffff)`,borderRadius:20,boxShadow:`0 0 0 1px #eef3f9`},children:(0,k.jsx)(w,{code:404,homeHref:`#`})})},M={name:`500 — что-то пошло не так`,args:{code:500},parameters:{layout:`fullscreen`,edgeToEdge:!0,docs:{description:{story:`На весь экран. В истории кнопки только пишут, что нажато, — чтобы страница Storybook не перезагружалась.`},story:{inline:!1,height:`720px`}}},render:()=>(0,k.jsx)(D,{})},N=[`NotFound`,`ServerError`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '404 — страница не найдена',
  args: {
    code: 404
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Внутри страницы сервиса — вместо содержимого; в примере белая подложка рабочей области.'
      }
    }
  },
  render: () => <div style={{
    height: 640,
    background: 'var(--surface-white, #ffffff)',
    borderRadius: 20,
    boxShadow: '0 0 0 1px #eef3f9'
  }}>
      <ErrorPage code={404} homeHref="#" />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '500 — что-то пошло не так',
  args: {
    code: 500
  },
  parameters: {
    layout: 'fullscreen',
    edgeToEdge: true,
    docs: {
      description: {
        story: 'На весь экран. В истории кнопки только пишут, что нажато, — чтобы страница Storybook не перезагружалась.'
      },
      story: {
        inline: false,
        height: '720px'
      }
    }
  },
  render: () => <ServerErrorDemo />
}`,...M.parameters?.docs?.source}}}})))()}P();export{j as NotFound,M as ServerError,N as __namedExportsOrder,A as default};