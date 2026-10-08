import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ps as r,Wo as i,oi as a,t as o}from"./icons-CXeS3Xzr.js";import{r as s,t as c}from"./Surface-i_8E7dtq.js";import{n as l,t as u}from"./StatCard-VbEw3gP7.js";function d(e){let[t,n]=(0,m.useState)(0),r=/^\d+$/.test(e.value);return(0,h.jsxs)(y,{children:[(0,h.jsx)(`div`,{style:{maxWidth:320},children:(0,h.jsx)(u,{title:e.title,value:r?Number(e.value):e.value,unit:e.unit||void 0,tone:e.tone,size:e.size,note:e.note||void 0,delta:e.deltaValue?{value:e.deltaValue,good:_[e.deltaGood],period:e.deltaPeriod||void 0}:void 0,trend:e.withTrend?w.sum:void 0,progress:e.withProgress?{value:124e4,max:248e4,caption:`Оплачено 1 240 000 ₽`}:void 0,icon:e.withIcon?(0,h.jsx)(a,{}):void 0,onClick:e.clickable?()=>n(e=>e+1):void 0,actionLabel:`Открыть детализацию суммы`,actionText:e.actionText||void 0})}),e.clickable&&(0,h.jsxs)(`p`,{style:{margin:`12px 0 0`,fontFamily:`Inter, sans-serif`,fontSize:12,color:`var(--stat-card-title)`},children:[`Нажатий: `,t]})]})}function f(){let[e,t]=(0,m.useState)(`late`),n=e=>t(t=>t===e?null:e);return(0,h.jsx)(y,{children:(0,h.jsxs)(c,{children:[(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Заявок в работе`,value:36,note:`8 ждут согласования`,onClick:()=>n(`work`),selected:e===`work`,actionLabel:`Показать заявки в работе`,actionText:`Открыть список`}),(0,h.jsx)(u,{title:`Сумма договоров`,value:248e4,unit:`₽`,note:`Оплачено 1 240 000 ₽`,onClick:()=>n(`sum`),selected:e===`sum`,actionLabel:`Показать заявки с договором`,actionText:`Детализация`}),(0,h.jsx)(u,{title:`Просрочено`,value:4,tone:`danger`,note:`Самая старая — 12 дней`,onClick:()=>n(`late`),selected:e===`late`,actionLabel:`Показать просроченные заявки`,actionText:`Показать просроченные`})]}),(0,h.jsx)(`p`,{style:{margin:`16px 0 0`,fontFamily:`Inter, sans-serif`,fontSize:14,color:`var(--stat-card-title)`},children:e?`Таблица ниже — ${{work:`в работе`,sum:`с договором`,late:`просроченные`}[e]} заявки. Нажмите плитку ещё раз, чтобы снять фильтр.`:`Фильтр снят — показаны все заявки.`})]})})}function p({placement:e}){return(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{iconPlacement:e,icon:(0,h.jsx)(i,{}),title:`Заявок в работе`,value:36,delta:{value:`+6`,period:`за неделю`}}),(0,h.jsx)(u,{iconPlacement:e,icon:(0,h.jsx)(a,{}),tone:`success`,title:`Оплачено`,value:124e4,unit:`₽`,progress:{value:124e4,max:248e4,caption:`из 2 480 000 ₽`}}),(0,h.jsx)(u,{iconPlacement:e,icon:(0,h.jsx)(r,{}),tone:`warning`,title:`Срок истекает`,value:7,note:`в ближайшие 3 дня`}),(0,h.jsx)(u,{iconPlacement:e,icon:(0,h.jsx)(r,{}),tone:`danger`,title:`Просрочено`,value:4,delta:{value:`+2`,good:!1,period:`за неделю`}})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{m=t(),o(),s(),l(),h=n(),g='\nПлитка показателя для дашбордов и сводок над таблицами. В Figma UI Kit «Практис» такой плитки нет —\nсобрана по правилам кита из его частей: **Card** (подложка Surface, ховер и выбор), **Surface** 3-го уровня (подложка иконки), иконки кита. На согласовании у\nдизайнера.\n\n| Проп | Значения | Стиль |\n|---|---|---|\n| `title` | подпись | Base Normal 14, text/grey-secondary |\n| `value`, `unit`, `precision` | число с разрядами через пробел или текст; единица мельче и серым | H2 24 (`size="l"` — H1 32), табличные цифры; единица Large 16 / xl 20 |\n| `tone` | `default` · `danger` — просрочено · `warning` — срок истекает · `success` — выполнено | цвет значения — text/…-primary; шкала и спарклайн — bg/… (main); у кликабельной danger / warning обводка красная / оранжевая |\n| `delta` | `{ value, good?, period? }` — value со знаком: «+12%», «−3» | цветной текст Base Medium 14: good — text/success-primary, плохо — text/danger-primary, без оценки — text/grey-primary; период — Small 12 серым |\n| `note` | строка пояснения | Small Normal 12 |\n| `trend` | история значения, от старых к новым | спарклайн 40, линия 2 |\n| `progress` | `{ value, max, caption?, aside? }` — «из скольких» | StackedBar: один сегмент цвета плитки + остаток |\n| `segments` | состав: `{ value, color, label }[]` | StackedBar с числами и легендой |\n| `icon`, `iconPlacement` | иконка кита в строке подписи; `end` — справа (по умолчанию), `start` — перед подписью | 16 в подложке 24, скругление 6; цвет — по `tone` |\n| `onClick` / `href`, `selected`, `actionLabel` | плитка ведёт в список или фильтрует таблицу; `selected` — фильтр включён | как у Card |\n| `actionText` | подпись действия внизу кликабельной плитки | Base 14, text/accent |\n\n**Правила.**\n- Синего значения нет: синий в ките — ссылки и действия. Сумма — обычным цветом.\n- Цвет значения — только когда он что-то значит (просрочено, срок, выполнено). Три цветных числа\n  в ряд — уже шум.\n- Хорошо ли рост, решает экран: рост суммы — `good: true`, рост просрочки — `good: false`.\n- Подложка по правилам Surface: на сером фоне страницы плитка белая (20), в белой панели — серая (12).\n- Для пары «подпись — значение» внутри карточки или модалки — **Statistic**, не эта плитка.\n',_={хорошо:!0,плохо:!1,"без оценки":void 0},v={title:`UI Kit/Карточки/StatCard`,id:`ui-kit-statcard`,parameters:{layout:`padded`,docs:{description:{component:g}}},tags:[`autodocs`],argTypes:{title:{control:`text`},value:{control:`text`,description:`Только цифры — число с разрядами; иначе текст как есть`},unit:{control:`text`},tone:{control:`inline-radio`,options:[`default`,`danger`,`warning`,`success`]},size:{control:`inline-radio`,options:[`m`,`l`]},note:{control:`text`},deltaValue:{name:`delta.value`,control:`text`,table:{category:`Изменение`}},deltaGood:{name:`delta.good`,control:`inline-radio`,options:[`хорошо`,`плохо`,`без оценки`],table:{category:`Изменение`}},deltaPeriod:{name:`delta.period`,control:`text`,table:{category:`Изменение`}},withTrend:{name:`trend`,control:`boolean`,table:{category:`Слоты`}},withProgress:{name:`progress`,control:`boolean`,table:{category:`Слоты`}},withIcon:{name:`icon`,control:`boolean`,table:{category:`Слоты`}},clickable:{name:`onClick`,control:`boolean`,table:{category:`Слоты`}},actionText:{control:`text`,table:{category:`Слоты`}}},args:{title:`Сумма договоров`,value:`2480000`,unit:`₽`,tone:`default`,size:`m`,note:``,deltaValue:`+12%`,deltaGood:`хорошо`,deltaPeriod:`к прошлому месяцу`,withTrend:!1,withProgress:!1,withIcon:!1,clickable:!1,actionText:`Детализация`}},y=({children:e})=>(0,h.jsx)(`div`,{style:{padding:24,background:`var(--surface-grey, #f5f8fb)`,borderRadius:12},children:e}),b=({children:e})=>(0,h.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:16},children:e}),x=[`октябрь 2025`,`ноябрь 2025`,`декабрь 2025`,`январь`,`февраль`,`март`,`апрель`,`май`,`июнь`,`июль`,`август`,`сентябрь`],S=[`7 июл`,`14 июл`,`21 июл`,`28 июл`,`4 авг`,`11 авг`,`18 авг`,`25 авг`,`1 сен`,`8 сен`,`15 сен`,`22 сен`].map(e=>`неделя с ${e}`),C=(e,t)=>e.map((e,n)=>({value:e,label:t[n]})),w={work:[22,24,23,27,26,28,30,29,31,30,33,36],sum:[16e5,17e5,172e4,19e5,185e4,2e6,21e5,205e4,22e5,23e5,2214e3,248e4],late:[1,0,1,1,2,1,1,2,2,3,2,4]},T={render:e=>(0,h.jsx)(d,{...e})},E={name:`Сводка в белой панели`,parameters:{docs:{description:{story:`Три показателя в белой подложке блока: плитки внутри становятся серыми со скруглением 12 — Surface делает это сам. Цвет у значения только у просрочки.`}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsx)(c,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Заявок в работе`,value:36,delta:{value:`+6`,period:`за неделю`}}),(0,h.jsx)(u,{title:`Сумма договоров`,value:248e4,unit:`₽`,delta:{value:`+12%`,good:!0,period:`к прошлому месяцу`}}),(0,h.jsx)(u,{title:`Просрочено`,value:4,tone:`danger`,delta:{value:`+2`,good:!1,period:`за неделю`}})]})})})},D={name:`Прямо на фоне страницы`,parameters:{docs:{description:{story:`Без общей панели плитки — белые, верхний уровень лейаута (скругление 20, отступ 24).`}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Заявок в работе`,value:36,note:`из 52 за месяц`}),(0,h.jsx)(u,{title:`Сумма договоров`,value:248e4,unit:`₽`,note:`по 36 заявкам`}),(0,h.jsx)(u,{title:`Просрочено`,value:4,tone:`danger`,note:`11% заявок в работе`})]})})},O={name:`С динамикой`,parameters:{docs:{description:{story:`Спарклайн — история значения без осей: видно, растёт или падает. Линия плавная, но не рисует пиков, которых нет в данных. Наведите — направляющая, точка и тултип со значением и периодом. Цвет — синий, у tone — свой.`}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsx)(c,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Заявок в работе`,value:36,delta:{value:`+6`,period:`за неделю`},trend:C(w.work,S)}),(0,h.jsx)(u,{title:`Сумма договоров`,value:248e4,unit:`₽`,delta:{value:`+12%`,good:!0,period:`к прошлому месяцу`},trend:C(w.sum,x)}),(0,h.jsx)(u,{title:`Просрочено`,value:4,tone:`danger`,delta:{value:`+2`,good:!1,period:`за неделю`},trend:C(w.late,S)})]})})})},k={name:`Со шкалой «из скольких»`,parameters:{docs:{description:{story:`Доля и прогресс видны без подсчёта. Подпись справа по умолчанию — процент; её можно заменить на норму.`}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsx)(c,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Заявок согласовано`,value:28,unit:`из 36`,progress:{value:28,max:36},tone:`success`}),(0,h.jsx)(u,{title:`Сумма договоров`,value:248e4,unit:`₽`,progress:{value:124e4,max:248e4,caption:`Оплачено 1 240 000 ₽`}}),(0,h.jsx)(u,{title:`Просрочено`,value:4,unit:`из 36`,tone:`danger`,progress:{value:4,max:36,caption:`11% заявок`,aside:`норма до 5%`}})]})})})},A={name:`Состав`,parameters:{docs:{description:{story:`Из чего складывается значение — полоса StackedBar с числами и легендой. Наведите на сегмент — тултип.`}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsx)(c,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Юзер-таски BPMN`,value:10,segments:[{value:5,color:`info`,label:`На согласовании`},{value:2,color:`success`,label:`Согласовано`},{value:2,color:`neutral`,label:`В работе`},{value:1,color:`danger`,label:`Просрочено`}]}),(0,h.jsx)(u,{title:`Заявки`,value:36,segments:[{value:16,color:`neutral`,label:`В работе`},{value:12,color:`info`,label:`На согласовании`},{value:5,color:`warning`,label:`На доработке`},{value:3,color:`danger`,label:`Просрочено`}]})]})})})},j={name:`Плитка-фильтр`,parameters:{docs:{description:{story:`Нажатие по плитке фильтрует таблицу; выбранная — обводка 2px (как выбранная Card), ховер — 1px. Состояние держит история.`}}},render:()=>(0,h.jsx)(f,{})},M={margin:`0 0 12px`,fontFamily:`Inter, sans-serif`,fontSize:14,fontWeight:500,color:`var(--text-grey-primary)`},N={name:`С иконкой`,parameters:{docs:{description:{story:'Иконка 16 в подложке 24 — в строке подписи, ничего не сдвигает. По умолчанию `iconPlacement="end"` — справа у края плитки; `"start"` — перед подписью. У обычной плитки подложка нейтральная, у плитки со статусом `tone` — цвета статуса.'}}},render:()=>(0,h.jsxs)(y,{children:[(0,h.jsx)(`p`,{style:M,children:`iconPlacement="end" — справа (по умолчанию)`}),(0,h.jsx)(c,{children:(0,h.jsx)(p,{placement:`end`})}),(0,h.jsx)(`p`,{style:{...M,marginTop:24},children:`iconPlacement="start" — перед подписью`}),(0,h.jsx)(c,{children:(0,h.jsx)(p,{placement:`start`})})]})},P={name:`Главный показатель`,parameters:{docs:{description:{story:'`size="l"` — один на экран, остальные рядом обычного размера.'}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:16},children:[(0,h.jsx)(`div`,{style:{gridColumn:`span 2`,display:`grid`},children:(0,h.jsx)(u,{size:`l`,title:`Сумма договоров за сентябрь`,value:248e4,unit:`₽`,delta:{value:`+12%`,good:!0,period:`в августе 2 214 000 ₽`},trend:C(w.sum,x)})}),(0,h.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,h.jsx)(u,{title:`Заявок в работе`,value:36,delta:{value:`+6`,period:`за неделю`}}),(0,h.jsx)(u,{title:`Просрочено`,value:4,tone:`danger`,delta:{value:`+2`,good:!1,period:`за неделю`}})]})]})})},F={name:`Цвета значения`,render:()=>(0,h.jsx)(y,{children:(0,h.jsx)(c,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Заявок в работе`,value:36,delta:{value:`−3`,period:`за неделю`}}),(0,h.jsx)(u,{title:`Просрочено`,value:4,tone:`danger`,delta:{value:`+2`,good:!1,period:`за неделю`}}),(0,h.jsx)(u,{title:`Срок истекает`,value:7,tone:`warning`,note:`в ближайшие 3 дня`}),(0,h.jsx)(u,{title:`Закрыто в срок`,value:96,unit:`%`,tone:`success`,delta:{value:`+4%`,good:!0,period:`к прошлому месяцу`}})]})})})},I={name:`Длинные подписи и узкая плитка`,parameters:{docs:{description:{story:`Подпись переносится; значение — в одну строку, не влезает — отточие и полное число в подсказке. Для узких плиток лучше сократить заранее: value="12,7" unit="млрд ₽". Данных ещё нет — прочерк и строка, когда появятся.`}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Сумма договоров с подрядчиками по всем объектам программы реновации`,value:12676938080,unit:`₽`,delta:{value:`−0,4%`,good:!1,period:`к плану квартала`}}),(0,h.jsx)(u,{title:`Средняя сумма`,value:218616.27,precision:2,unit:`₽`}),(0,h.jsx)(u,{title:`Средний срок согласования`,value:`—`,note:`Посчитаем после первой согласованной заявки`}),(0,h.jsx)(`div`,{style:{maxWidth:200},children:(0,h.jsx)(u,{title:`Остаток`,value:12676938080,unit:`₽`})})]})})},L={name:`Состояния кликабельной`,parameters:{docs:{description:{story:`Обычное, ховер, нажатие, выбрана, фокус с клавиатуры — от Card. У плитки danger / warning обводка своего цвета; кольцо фокуса — синее, одно на весь кит.`}}},render:()=>(0,h.jsx)(y,{children:(0,h.jsx)(c,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u,{title:`Обычная`,value:36,onClick:()=>{},actionLabel:`Открыть`,actionText:`Открыть список`}),(0,h.jsx)(u,{title:`Ховер`,value:36,onClick:()=>{},actionLabel:`Открыть`,actionText:`Открыть список`,forceState:`hover`}),(0,h.jsx)(u,{title:`Нажатие`,value:36,onClick:()=>{},actionLabel:`Открыть`,actionText:`Открыть список`,forceState:`active`}),(0,h.jsx)(u,{title:`Выбрана`,value:36,onClick:()=>{},actionLabel:`Открыть`,actionText:`Открыть список`,selected:!0}),(0,h.jsx)(u,{title:`Фокус`,value:36,onClick:()=>{},actionLabel:`Открыть`,actionText:`Открыть список`,forceState:`focus`}),(0,h.jsx)(u,{title:`Алерт, ховер`,value:4,tone:`danger`,onClick:()=>{},actionLabel:`Открыть`,actionText:`Показать просроченные`,forceState:`hover`}),(0,h.jsx)(u,{title:`Алерт, выбрана`,value:4,tone:`danger`,onClick:()=>{},actionLabel:`Открыть`,actionText:`Показать просроченные`,selected:!0}),(0,h.jsx)(u,{title:`Предупреждение, выбрана`,value:7,tone:`warning`,onClick:()=>{},actionLabel:`Открыть`,actionText:`Показать`,selected:!0})]})})})},R=[`Playground`,`InPanel`,`OnPage`,`Trend`,`Progress`,`Segments`,`Clickable`,`WithIcon`,`Hero`,`Tones`,`Edge`,`States`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: a => <PlaygroundStory {...a as Args} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Сводка в белой панели',
  parameters: {
    docs: {
      description: {
        story: 'Три показателя в белой подложке блока: плитки внутри становятся серыми со скруглением 12 — Surface делает это сам. Цвет у значения только у просрочки.'
      }
    }
  },
  render: () => <Page>
      <Surface>
        <Row>
          <StatCard title="Заявок в работе" value={36} delta={{
          value: '+6',
          period: 'за неделю'
        }} />
          <StatCard title="Сумма договоров" value={2480000} unit="₽" delta={{
          value: '+12%',
          good: true,
          period: 'к прошлому месяцу'
        }} />
          <StatCard title="Просрочено" value={4} tone="danger" delta={{
          value: '+2',
          good: false,
          period: 'за неделю'
        }} />
        </Row>
      </Surface>
    </Page>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Прямо на фоне страницы',
  parameters: {
    docs: {
      description: {
        story: 'Без общей панели плитки — белые, верхний уровень лейаута (скругление 20, отступ 24).'
      }
    }
  },
  render: () => <Page>
      <Row>
        <StatCard title="Заявок в работе" value={36} note="из 52 за месяц" />
        <StatCard title="Сумма договоров" value={2480000} unit="₽" note="по 36 заявкам" />
        <StatCard title="Просрочено" value={4} tone="danger" note="11% заявок в работе" />
      </Row>
    </Page>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'С динамикой',
  parameters: {
    docs: {
      description: {
        story: 'Спарклайн — история значения без осей: видно, растёт или падает. Линия плавная, но не рисует пиков, которых нет в данных. Наведите — направляющая, точка и тултип со значением и периодом. Цвет — синий, у tone — свой.'
      }
    }
  },
  render: () => <Page>
      <Surface>
        <Row>
          <StatCard title="Заявок в работе" value={36} delta={{
          value: '+6',
          period: 'за неделю'
        }} trend={withLabels(HISTORY.work, WEEKS)} />
          <StatCard title="Сумма договоров" value={2480000} unit="₽" delta={{
          value: '+12%',
          good: true,
          period: 'к прошлому месяцу'
        }} trend={withLabels(HISTORY.sum, MONTHS)} />
          <StatCard title="Просрочено" value={4} tone="danger" delta={{
          value: '+2',
          good: false,
          period: 'за неделю'
        }} trend={withLabels(HISTORY.late, WEEKS)} />
        </Row>
      </Surface>
    </Page>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Со шкалой «из скольких»',
  parameters: {
    docs: {
      description: {
        story: 'Доля и прогресс видны без подсчёта. Подпись справа по умолчанию — процент; её можно заменить на норму.'
      }
    }
  },
  render: () => <Page>
      <Surface>
        <Row>
          <StatCard title="Заявок согласовано" value={28} unit="из 36" progress={{
          value: 28,
          max: 36
        }} tone="success" />
          <StatCard title="Сумма договоров" value={2480000} unit="₽" progress={{
          value: 1240000,
          max: 2480000,
          caption: 'Оплачено 1 240 000 ₽'
        }} />
          <StatCard title="Просрочено" value={4} unit="из 36" tone="danger" progress={{
          value: 4,
          max: 36,
          caption: '11% заявок',
          aside: 'норма до 5%'
        }} />
        </Row>
      </Surface>
    </Page>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Состав',
  parameters: {
    docs: {
      description: {
        story: 'Из чего складывается значение — полоса StackedBar с числами и легендой. Наведите на сегмент — тултип.'
      }
    }
  },
  render: () => <Page>
      <Surface>
        <Row>
          <StatCard title="Юзер-таски BPMN" value={10} segments={[{
          value: 5,
          color: 'info',
          label: 'На согласовании'
        }, {
          value: 2,
          color: 'success',
          label: 'Согласовано'
        }, {
          value: 2,
          color: 'neutral',
          label: 'В работе'
        }, {
          value: 1,
          color: 'danger',
          label: 'Просрочено'
        }]} />
          <StatCard title="Заявки" value={36} segments={[{
          value: 16,
          color: 'neutral',
          label: 'В работе'
        }, {
          value: 12,
          color: 'info',
          label: 'На согласовании'
        }, {
          value: 5,
          color: 'warning',
          label: 'На доработке'
        }, {
          value: 3,
          color: 'danger',
          label: 'Просрочено'
        }]} />
        </Row>
      </Surface>
    </Page>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Плитка-фильтр',
  parameters: {
    docs: {
      description: {
        story: 'Нажатие по плитке фильтрует таблицу; выбранная — обводка 2px (как выбранная Card), ховер — 1px. Состояние держит история.'
      }
    }
  },
  render: () => <ClickableStory />
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'С иконкой',
  parameters: {
    docs: {
      description: {
        story: 'Иконка 16 в подложке 24 — в строке подписи, ничего не сдвигает. По умолчанию \`iconPlacement="end"\` — справа у края плитки; \`"start"\` — перед подписью. У обычной плитки подложка нейтральная, у плитки со статусом \`tone\` — цвета статуса.'
      }
    }
  },
  render: () => <Page>
      <p style={caption}>iconPlacement="end" — справа (по умолчанию)</p>
      <Surface>
        <IconRow placement="end" />
      </Surface>
      <p style={{
      ...caption,
      marginTop: 24
    }}>iconPlacement="start" — перед подписью</p>
      <Surface>
        <IconRow placement="start" />
      </Surface>
    </Page>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Главный показатель',
  parameters: {
    docs: {
      description: {
        story: '\`size="l"\` — один на экран, остальные рядом обычного размера.'
      }
    }
  },
  render: () => <Page>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 16
    }}>
        <div style={{
        gridColumn: 'span 2',
        display: 'grid'
      }}>
          <StatCard size="l" title="Сумма договоров за сентябрь" value={2480000} unit="₽" delta={{
          value: '+12%',
          good: true,
          period: 'в августе 2 214 000 ₽'
        }} trend={withLabels(HISTORY.sum, MONTHS)} />
        </div>
        <div style={{
        display: 'grid',
        gap: 16
      }}>
          <StatCard title="Заявок в работе" value={36} delta={{
          value: '+6',
          period: 'за неделю'
        }} />
          <StatCard title="Просрочено" value={4} tone="danger" delta={{
          value: '+2',
          good: false,
          period: 'за неделю'
        }} />
        </div>
      </div>
    </Page>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Цвета значения',
  render: () => <Page>
      <Surface>
        <Row>
          <StatCard title="Заявок в работе" value={36} delta={{
          value: '−3',
          period: 'за неделю'
        }} />
          <StatCard title="Просрочено" value={4} tone="danger" delta={{
          value: '+2',
          good: false,
          period: 'за неделю'
        }} />
          <StatCard title="Срок истекает" value={7} tone="warning" note="в ближайшие 3 дня" />
          <StatCard title="Закрыто в срок" value={96} unit="%" tone="success" delta={{
          value: '+4%',
          good: true,
          period: 'к прошлому месяцу'
        }} />
        </Row>
      </Surface>
    </Page>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Длинные подписи и узкая плитка',
  parameters: {
    docs: {
      description: {
        story: 'Подпись переносится; значение — в одну строку, не влезает — отточие и полное число в подсказке. Для узких плиток лучше сократить заранее: value="12,7" unit="млрд ₽". Данных ещё нет — прочерк и строка, когда появятся.'
      }
    }
  },
  render: () => <Page>
      <Row>
        <StatCard title="Сумма договоров с подрядчиками по всем объектам программы реновации" value={12676938080} unit="₽" delta={{
        value: '−0,4%',
        good: false,
        period: 'к плану квартала'
      }} />
        <StatCard title="Средняя сумма" value={218616.27} precision={2} unit="₽" />
        <StatCard title="Средний срок согласования" value="—" note="Посчитаем после первой согласованной заявки" />
        <div style={{
        maxWidth: 200
      }}>
          <StatCard title="Остаток" value={12676938080} unit="₽" />
        </div>
      </Row>
    </Page>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Состояния кликабельной',
  parameters: {
    docs: {
      description: {
        story: 'Обычное, ховер, нажатие, выбрана, фокус с клавиатуры — от Card. У плитки danger / warning обводка своего цвета; кольцо фокуса — синее, одно на весь кит.'
      }
    }
  },
  render: () => <Page>
      <Surface>
        <Row>
          <StatCard title="Обычная" value={36} onClick={() => {}} actionLabel="Открыть" actionText="Открыть список" />
          <StatCard title="Ховер" value={36} onClick={() => {}} actionLabel="Открыть" actionText="Открыть список" forceState="hover" />
          <StatCard title="Нажатие" value={36} onClick={() => {}} actionLabel="Открыть" actionText="Открыть список" forceState="active" />
          <StatCard title="Выбрана" value={36} onClick={() => {}} actionLabel="Открыть" actionText="Открыть список" selected />
          <StatCard title="Фокус" value={36} onClick={() => {}} actionLabel="Открыть" actionText="Открыть список" forceState="focus" />
          <StatCard title="Алерт, ховер" value={4} tone="danger" onClick={() => {}} actionLabel="Открыть" actionText="Показать просроченные" forceState="hover" />
          <StatCard title="Алерт, выбрана" value={4} tone="danger" onClick={() => {}} actionLabel="Открыть" actionText="Показать просроченные" selected />
          <StatCard title="Предупреждение, выбрана" value={7} tone="warning" onClick={() => {}} actionLabel="Открыть" actionText="Показать" selected />
        </Row>
      </Surface>
    </Page>
}`,...L.parameters?.docs?.source}}}})))()}z();export{j as Clickable,I as Edge,P as Hero,E as InPanel,D as OnPage,T as Playground,k as Progress,A as Segments,L as States,F as Tones,O as Trend,N as WithIcon,R as __namedExportsOrder,v as default};