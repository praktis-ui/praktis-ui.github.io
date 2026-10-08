import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Breadcrumbs-DVLbDXqu.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`UI Kit/Навигация/Breadcrumbs`,id:`ui-kit-breadcrumbs`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nХлебные крошки — путь до текущей страницы. Источник — Figma, структура сервиса «Хеадер и меню в шапке»\n(mvpN7SgEA7jFhCk4iNFE8L, node 6397:591728).\n\n| Проп | Что |\n|---|---|\n| `items` | крошки по порядку: `label`, `href` (ссылка) или `onClick` (кнопка) |\n\n- **Последняя крошка — текущая страница:** серая (text/black-secondary), не нажимается, для экранного диктора\n  помечена как текущая (`aria-current="page"`).\n- **Остальные** — text/black-primary, при наведении акцентный синий.\n- **Длинная крошка** — не шире 230, одна строка, отточие посреди слова и полный текст тултипом (только если\n  правда обрезано).\n- Между крошками — стрелка Fat `angle-arrow-right` 12 (стрелки — только Fat), зазор 8, строка 20.\n- Не помещаются в ширину — переносятся на следующую строку.\n\nНа странице крошки ставит `AppLayout` (`breadcrumbs`), в боковой модалке — `ModalHead` (`breadcrumbs`).\nОтдельно — если нужны вне каркаса.\n'}}},argTypes:{items:{control:`object`}},args:{items:[{label:`Объекты`,href:`#`},{label:`Многоквартирный дом со встроенными помещениями`,href:`#`},{label:`Доступы`}]}},o={},s={name:`Варианты`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,fontFamily:`Inter, sans-serif`},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:12,color:`#66788c`,marginBottom:8},children:`Две крошки`}),(0,i.jsx)(r,{items:[{label:`Объекты`,href:`#`},{label:`ЖК «Чистое небо»`}]})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:12,color:`#66788c`,marginBottom:8},children:`Длинные — отточие и тултип, не шире 230`}),(0,i.jsx)(r,{items:[{label:`Объекты`,href:`#`},{label:`Многоквартирный дом со встроенными помещениями и подземной автостоянкой`,href:`#`},{label:`Железобетонные конструкции корпус 1, секции 1–4`}]})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:12,color:`#66788c`,marginBottom:8},children:`Кнопки вместо ссылок (onClick)`}),(0,i.jsx)(r,{items:[{label:`Проекты`,onClick:()=>{}},{label:`Шаблоны`,onClick:()=>{}},{label:`Шаблон РД`}]})]}),(0,i.jsxs)(`div`,{style:{width:360},children:[(0,i.jsx)(`div`,{style:{fontSize:12,color:`#66788c`,marginBottom:8},children:`Узко — переносятся`}),(0,i.jsx)(r,{items:[{label:`Объекты`,href:`#`},{label:`ЖК «Чистое небо»`,href:`#`},{label:`Корпус 1`,href:`#`},{label:`Документы`}]})]})]})},c=[`Playground`,`Variants`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Варианты',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    fontFamily: 'Inter, sans-serif'
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#66788c',
        marginBottom: 8
      }}>Две крошки</div>
        <Breadcrumbs items={[{
        label: 'Объекты',
        href: '#'
      }, {
        label: 'ЖК «Чистое небо»'
      }]} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#66788c',
        marginBottom: 8
      }}>Длинные — отточие и тултип, не шире 230</div>
        <Breadcrumbs items={[{
        label: 'Объекты',
        href: '#'
      }, {
        label: 'Многоквартирный дом со встроенными помещениями и подземной автостоянкой',
        href: '#'
      }, {
        label: 'Железобетонные конструкции корпус 1, секции 1–4'
      }]} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#66788c',
        marginBottom: 8
      }}>Кнопки вместо ссылок (onClick)</div>
        <Breadcrumbs items={[{
        label: 'Проекты',
        onClick: () => {}
      }, {
        label: 'Шаблоны',
        onClick: () => {}
      }, {
        label: 'Шаблон РД'
      }]} />
      </div>
      <div style={{
      width: 360
    }}>
        <div style={{
        fontSize: 12,
        color: '#66788c',
        marginBottom: 8
      }}>Узко — переносятся</div>
        <Breadcrumbs items={[{
        label: 'Объекты',
        href: '#'
      }, {
        label: 'ЖК «Чистое небо»',
        href: '#'
      }, {
        label: 'Корпус 1',
        href: '#'
      }, {
        label: 'Документы'
      }]} />
      </div>
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Playground,s as Variants,c as __namedExportsOrder,a as default};