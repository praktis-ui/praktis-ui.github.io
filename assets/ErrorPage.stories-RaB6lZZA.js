import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import"./figma-colors-lO-pgkJ7.js";import{n as r,t as i}from"./Button-DL0K3-Hy.js";import{c as a,s as o}from"./iframe-tj-JeiRJ.js";import{a as s,c}from"./HeaderParts-BowsSfei.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l=`_image404_13l6d_5`,u=`_page500_13l6d_14`,d=`_column_13l6d_27`,f=`_text_13l6d_36`,p=`_title_13l6d_45`,m=`_description_13l6d_46`,h=`_actions_13l6d_61`,g=`_image500_13l6d_68`,_=`_page503_13l6d_102`,v=`_video_13l6d_119`,y=`_textCenter_13l6d_135`,b=`_cornerLogo_13l6d_141`,x={image404:l,page500:u,column:d,text:f,title:p,description:m,actions:h,image500:g,page503:_,video:v,textCenter:y,cornerLogo:b}})))()}var C;function w(){return(w=e((()=>{C=``+new URL(`error-404-DpUop_wR.webp`,import.meta.url).href})))()}var T;function E(){return(E=e((()=>{T=``+new URL(`error-500-DCEkX6fB.webp`,import.meta.url).href})))()}var D;function O(){return(O=e((()=>{D=``+new URL(`maintenance-poster-DD5oLJLx.webp`,import.meta.url).href})))()}var k;function A(){return(A=e((()=>{k=``+new URL(`maintenance-C0nUQ_vg.mp4`,import.meta.url).href})))()}function j(){let e=(0,N.useRef)(null),[t]=(0,N.useState)(()=>typeof window<`u`&&window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches);return(0,N.useEffect)(()=>{t||e.current?.play().catch(()=>void 0)},[t]),t?(0,P.jsx)(`img`,{className:x.video,src:D,width:480,height:360,alt:``}):(0,P.jsx)(`video`,{ref:e,className:x.video,src:k,width:480,height:360,muted:!0,autoPlay:!0,playsInline:!0,preload:`auto`,"aria-hidden":!0})}function M(e){if(e.code===503){let{title:t,description:n,logo:r=`praktis`,className:i}=e;return(0,P.jsxs)(`main`,{className:[x.page503,i].filter(Boolean).join(` `),children:[r&&(0,P.jsx)(`div`,{className:x.cornerLogo,children:(0,P.jsx)(s,{type:r})}),(0,P.jsx)(j,{}),(0,P.jsxs)(`div`,{className:[x.text,x.textCenter].join(` `),children:[(0,P.jsx)(`h1`,{className:x.title,children:t??`Ведутся технические работы`}),(0,P.jsx)(`p`,{className:x.description,children:n??`Сервис временно недоступен. Скоро всё заработает — попробуйте зайти позже`})]})]})}if(e.code===404){let{title:t,description:n,homeHref:r=`/`,action:i,className:a}=e;return(0,P.jsx)(o,{size:`m`,className:a,image:(0,P.jsx)(`img`,{className:x.image404,src:C,width:282,height:246,alt:``}),title:t??`Страница не найдена`,description:n??`Страница, на которую вы пытаетесь попасть, не существует или была удалена`,action:i??{label:`Перейти на главную`,href:r}})}let{title:t,description:n,logo:r=`praktis`,onRetry:a=()=>window.location.reload(),onBack:c=()=>window.history.back(),className:l}=e;return(0,P.jsxs)(`main`,{className:[x.page500,l].filter(Boolean).join(` `),children:[(0,P.jsx)(`div`,{className:x.cornerLogo,children:(0,P.jsx)(s,{type:r})}),(0,P.jsxs)(`div`,{className:x.column,children:[(0,P.jsxs)(`div`,{className:x.text,children:[(0,P.jsx)(`h1`,{className:x.title,children:t??`Упс! Что-то пошло не так`}),(0,P.jsx)(`p`,{className:x.description,children:n??`Перезагрузите страницу, возможно, все исправится само`})]}),(0,P.jsxs)(`div`,{className:x.actions,children:[(0,P.jsx)(i,{variant:`stroke`,size:`large`,onClick:c,children:`Вернуться назад`}),(0,P.jsx)(i,{variant:`primary`,size:`large`,onClick:a,children:`Обновить`})]})]}),(0,P.jsx)(`img`,{className:x.image500,src:T,width:481,height:481,alt:``})]})}var N,P;function F(){return(F=e((()=>{N=t(),r(),c(),a(),S(),w(),E(),O(),A(),P=n(),M.__docgenInfo={description:``,methods:[],displayName:`ErrorPage`}})))()}function I(){let[e,t]=(0,L.useState)(``);return(0,R.jsxs)(`div`,{style:{position:`relative`},children:[(0,R.jsx)(M,{code:500,onRetry:()=>t(`нажали «Обновить» (в жизни — перезагрузка страницы)`),onBack:()=>t(`нажали «Вернуться назад» (в жизни — назад в истории)`)}),e&&(0,R.jsx)(`span`,{style:{position:`absolute`,left:24,bottom:16,fontFamily:`Inter, sans-serif`,fontSize:12,color:`#7e7e7e`},children:e})]})}var L,R,z,B,V,H,U;function W(){return(W=e((()=>{L=t(),F(),R=n(),z={title:`UI Kit/Сообщения и окна/EmptyState/ErrorPage`,id:`ui-kit-emptystate-errorpage`,component:M,parameters:{docs:{description:{component:"\nИсточник — Figma UI Kit «Практис»: «Пустые страницы и ошибки» (canvas 7768:4600), компоненты\n**400** (7779:5008) и **500** (7779:11069). **503** — технические работы, в макете его нет, сделан по решению дизайнера.\n\n| `code` | Где | Что внутри | Пропы |\n|---|---|---|---|\n| `404` | вместо содержимого страницы, шапка и меню на месте | EmptyState M с картинкой, «Перейти на главную» | `homeHref` (по умолчанию «/»), `action` |\n| `500` | на весь экран — сервис не загрузился | логотип в углу (на месте логотипа шапки), текст, «Вернуться назад» и «Обновить», картинка | `logo` (HeaderLogo кита), `onBack`, `onRetry` |\n| `503` | на весь экран — технические работы | логотип в углу (на месте логотипа шапки), видео: сцена собирается и замирает на последнем кадре; под ним заголовок и пояснение | `logo` (HeaderLogo кита, `false` — без логотипа) |\n\nЗаголовок и пояснение можно заменить (`title`, `description`). По умолчанию «Обновить»\nперезагружает страницу, «Вернуться назад» — шаг назад в истории браузера.\n\n**Решено по-своему:** зазор до картинки у 500 — 76 (в макете 77, сетка 4); на экране уже 900\n500 складывается в колонку (мобильной версии в макете нет); опечатка «пытатесь» исправлена.\n\n**503:** видео играет один раз (без звука) и остаётся на последнем кадре. Если в системе выключена анимация —\nсразу последний кадр. Фон ролика подогнан к фону страницы, края растворяются; в тёмной теме видео — светлой\nкарточкой со скруглением (у видео нет прозрачности).\n"}}},tags:[`autodocs`],argTypes:{code:{control:!1}}},B={name:`404 — страница не найдена`,args:{code:404},parameters:{layout:`padded`,docs:{description:{story:`Внутри страницы сервиса — вместо содержимого; в примере белая подложка рабочей области.`}}},render:()=>(0,R.jsx)(`div`,{style:{height:640,background:`var(--surface-white, #ffffff)`,borderRadius:20,boxShadow:`0 0 0 1px #eef3f9`},children:(0,R.jsx)(M,{code:404,homeHref:`#`})})},V={name:`500 — что-то пошло не так`,args:{code:500},parameters:{layout:`fullscreen`,edgeToEdge:!0,docs:{description:{story:`На весь экран. В истории кнопки только пишут, что нажато, — чтобы страница Storybook не перезагружалась.`},story:{inline:!1,height:`720px`}}},render:()=>(0,R.jsx)(I,{})},H={name:`503 — технические работы`,args:{code:503},parameters:{layout:`fullscreen`,edgeToEdge:!0,docs:{description:{story:`Сцена собирается и замирает. Посмотреть ещё раз — обновите историю.`},story:{inline:!1,height:`720px`}}}},U=[`NotFound`,`ServerError`,`Maintenance`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '503 — технические работы',
  args: {
    code: 503
  },
  parameters: {
    layout: 'fullscreen',
    edgeToEdge: true,
    docs: {
      description: {
        story: 'Сцена собирается и замирает. Посмотреть ещё раз — обновите историю.'
      },
      story: {
        inline: false,
        height: '720px'
      }
    }
  }
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as Maintenance,B as NotFound,V as ServerError,U as __namedExportsOrder,z as default};