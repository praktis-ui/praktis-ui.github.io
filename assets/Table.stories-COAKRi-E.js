import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Table-C7JZy2oE.js";import{n as i}from"./iframe-CvEwutAq.js";import{H as a,t as o}from"./icons-BmsQWa6t.js";import{n as s,t as c}from"./IconButton-CU701fuw.js";import{i as l,n as u,r as d,t as f}from"./TableCellParts-kCEJhwhm.js";import{n as p,t as m}from"./Tag-BXyiHTmi.js";function h({withSelection:e=!0,withPagination:t=!0,...n}){let[i,a]=(0,_.useState)([]);return(0,v.jsx)(r,{columns:T,dataSource:S,...n,rowSelection:e?{selectedRowKeys:i,onChange:a}:void 0,pagination:t?{pageSize:10}:!1})}function g(){let[e,t]=(0,_.useState)(F),n=e=>(n,r)=>t(t=>t.map(t=>t.key===n.key?{...t,[e]:r}:t));return(0,v.jsx)(r,{pagination:!1,dataSource:e,columns:[{title:`Вид работ`,dataIndex:`work`},{title:`Ед. изм.`,dataIndex:`unit`,width:120},{title:`Объём`,dataIndex:`volume`,width:240,editable:{onSave:n(`volume`),placeholder:`Число`}},{title:`Цена, ₽`,dataIndex:`price`,width:240,editable:{onSave:n(`price`),placeholder:`Число`}}]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{_=t(),s(),o(),p(),n(),l(),u(),v=i(),y="\nИсточник — Figma UI Kit «Практис»: **Table Item** (node 1641:3589) — шапка, ячейки, подвал и\nпримеры «таблица-дерево», «таблица с тегами».\n\nОбёртка над [antd Table](https://ant.design/components/table): сортировка, выбор строк, дерево,\nприлипающая шапка — логика antd. Наши вид, атомы и подвал.\n\n| Что | Как |\n|---|---|\n| Размер | `size` — large / medium / small: строки 56 / 46 / 36, шапка 54 / 46 / 38 |\n| Колонки и данные | `columns`, `dataSource` — как у antd |\n| Сортировка | `sorter` у колонки — как у antd; кликается вся ячейка шапки, по кругу нет → по возрастанию → по убыванию |\n| Выбор строк | `rowSelection` — как у antd; в шапке «выбрать все» с частичным выбором |\n| Дерево | `children` у строк данных — отступ 26px на уровень и шеврон ставит antd, чекбокс едет вместе с уровнем; чекбокс родителя работает как «выбрать все» для его детей |\n| Прилипающая шапка | `sticky` — как у antd. Прилипает к ближайшей прокручиваемой области (страница или панель с прокруткой); обёртка с `overflow: hidden` между таблицей и этой областью прилипание ломает |\n| Подвал | `pagination` — `{ pageSize, pageSizeOptions }` или `false` |\n| Редактирование по клику | `editable: { onSave, placeholder }` у колонки — наведение показывает рамку поля, клик — поле, Enter или уход из поля — сохранить, Esc — отменить |\n\n**Ячейки.** Строка или число в данных сами становятся ячейкой-текстом: до двух строк, дальше\nотточие посреди слова и полный текст в тултипе. Для остального — `render` колонки и\n**TableCell** со слотами (вторая строка, иконки, номер, действия), `Tag`, `TableTags`.\n\n**Раскрытие дерева** анимировано: шеврон поворачивается, вложенные строки проявляются. У antd\nстроки появляются без анимации — это наше дополнение. Сворачивание мгновенное.\n\n**Пока нет:** фильтры в шапке, вложенные таблицы, перетаскивание строк, редактирование строкой целиком.\n",b=[`Кронштадт, Тулонская аллея, д.2 (кад. №:3791)`,`11 оч, уч. 37 (:3367), СПб, Красносельский р-н, территория предприятия "Предпортовый"`,`Санкт-Петербург, Приморский пр., д. 72, лит. А`,`Ленинградская обл., Всеволожский р-н, г. Мурино, ул. Шоссе в Лаврики`],x=[{text:`Архивный`,status:`default`},{text:`Проект`,status:`default`},{text:`На согласовании`,status:`processing`},{text:`Подписан`,status:`success`},{text:`Отклонён`,status:`error`}],S=Array.from({length:57},(e,t)=>({key:`c${t+1}`,number:`НС${31+t%9}-КР-${2019+t%6}/${t+1}`,object:b[t%b.length],date:`${String(1+t*7%28).padStart(2,`0`)}.${String(1+t*5%12).padStart(2,`0`)}.${2019+t%6}`,status:x[t%x.length]})),C=[{key:`k5`,number:`КР-К5/2019`,object:b[0],date:`13.09.2020`,status:x[0],children:[{key:`ns31`,number:`НС31-КР-2020`,object:b[1],date:`20.08.2020`,status:x[1],children:[{key:`ns31-1`,number:`НС31-КР-2020/1`,object:b[1],date:`20.08.2020`,status:x[1],children:[{key:`ns31-1-1`,number:`НС31-КР-2020/1.1`,object:b[1],date:`20.08.2020`,status:x[1]},{key:`ns31-1-2`,number:`НС31-КР-2020/1.2`,object:b[1],date:`20.08.2020`,status:x[1]}]}]},{key:`ns32`,number:`НС32-КР-2021`,object:b[2],date:`02.03.2021`,status:x[2]}]},{key:`k6`,number:`КР-К6/2020`,object:b[3],date:`11.11.2020`,status:x[3],children:[{key:`ns40`,number:`НС40-КР-2022`,object:b[3],date:`05.04.2022`,status:x[2]}]},{key:`k7`,number:`КР-К7/2021`,object:b[2],date:`17.06.2021`,status:x[4]}],w=e=>{let[t,n,r]=e.split(`.`);return new Date(`${r}-${n}-${t}`).getTime()},T=[{title:`Номер договора`,dataIndex:`number`,width:300,sorter:(e,t)=>e.number.localeCompare(t.number,`ru`)},{title:`Объект`,dataIndex:`object`,sorter:(e,t)=>e.object.localeCompare(t.object,`ru`)},{title:`Дата договора`,dataIndex:`date`,width:180,sorter:(e,t)=>w(e.date)-w(t.date)},{title:`Статус`,dataIndex:`status`,width:220,render:e=>(0,v.jsx)(m,{status:e.status,children:e.text})}],E={control:!1,table:{category:`Для разработчиков — передаётся из кода`}},D={title:`UI Kit/Table/Table`,component:r,parameters:{layout:`padded`,docs:{description:{component:y}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`large`,`medium`,`small`]},withSelection:{control:`boolean`,name:`выбор строк`,table:{category:`Возможности`}},withPagination:{control:`boolean`,name:`подвал с пагинацией`,table:{category:`Возможности`}},columns:E,dataSource:E,rowSelection:E,expandable:E,pagination:E,sticky:E},args:{size:`large`,withSelection:!0,withPagination:!0}},O={parameters:{docs:{description:{story:`Всё живое: сортировка по клику на заголовок, выбор строк и «выбрать все» (при части выбранных — частичная отметка), листание и «Показывать: N записей» в подвале.`}}},render:e=>(0,v.jsx)(h,{...e})},k={name:`Дерево`,parameters:{docs:{description:{story:`Пример «таблица-дерево» из макета. Отступ 26px на уровень и шеврон ставит antd, чекбокс едет вместе с уровнем и стоит у текста. У строки без вложенностей места под шеврон нет — текст сразу за чекбоксом. Чекбокс родителя работает как «выбрать все» в шапке: выбрана часть детей — частичная отметка, отметили родителя — выбраны все дети, сняли — снято у всех.`}}},render:()=>(0,v.jsx)(h,{dataSource:C,expandable:{defaultExpandedRowKeys:[`k5`,`ns31`,`ns31-1`]}})},A={parameters:{docs:{description:{story:`Одни и те же данные в трёх размерах.`}}},render:()=>(0,v.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[`large`,`medium`,`small`].map(e=>(0,v.jsx)(h,{size:e,dataSource:S.slice(0,3),withPagination:!1},e))})},j={name:`Прилипающая шапка`,parameters:{docs:{description:{story:`Прокрути таблицу — шапка остаётся наверху. Шапка прилипает к ближайшей прокручиваемой области: к странице или к панели с прокруткой, как здесь.`}}},render:()=>(0,v.jsx)(`div`,{style:{height:420,overflow:`auto`},children:(0,v.jsx)(h,{sticky:!0,withPagination:!1})})},M=[`Монолитные работы`,`Кровля`,`Фасадные работы`,`Электромонтаж`,`Вентиляция`,`Благоустройство`],N=Array.from({length:4},(e,t)=>({key:`a${t}`,org:[`ООО «СтройМонтаж»`,`АО «Северная верфь строй»`,`ООО «Балтийская кровельная компания»`,`ИП Смирнов А. В.`][t],inn:[`7801234567`,`7812345678`,`7823456789`,`781234567890`][t],works:M.slice(t,t+2+t),until:[`31.12.2026`,`15.06.2027`,`01.03.2026`,`30.09.2026`][t]})),P={name:`С тегами и действиями`,parameters:{docs:{description:{story:`Содержимое ячеек через render колонки: TableCell со второй строкой, TableTags, кнопка-действие IconButton.`}}},render:()=>(0,v.jsx)(r,{pagination:!1,dataSource:N,columns:[{title:`Организация`,dataIndex:`org`,width:320,render:(e,t)=>(0,v.jsx)(d,{secondary:`ИНН ${t.inn}`,children:e})},{title:`Виды работ`,dataIndex:`works`,render:e=>(0,v.jsx)(f,{tags:e.map(e=>({key:e,label:e}))})},{title:`Действует до`,dataIndex:`until`,width:180},{key:`actions`,width:72,render:()=>(0,v.jsx)(d,{align:`center`,children:(0,v.jsx)(c,{variant:`red`,label:`Удалить`,icon:(0,v.jsx)(a,{})})})}]})},F=[{key:`e1`,work:`Монолитные работы`,unit:`м³`,volume:`45`,price:`8 200`},{key:`e2`,work:`Кровля`,unit:`м²`,volume:``,price:`1 150`},{key:`e3`,work:`Фасадные работы`,unit:`м²`,volume:`1 320`,price:``},{key:`e4`,work:`Электромонтаж`,unit:`шт`,volume:``,price:``}],I={name:`Редактирование по клику`,parameters:{docs:{description:{story:`Механика antd «edit-cell», вид — фрейм правок редактирования в макете. Пустая ячейка подсвечена — её нужно заполнить. Наведение: рамка поля, текст не сдвигается. Клик: активное поле. Enter или клик мимо — сохранить, Esc — отменить. С клавиатуры: Tab до ячейки, Enter.`}}},render:()=>(0,v.jsx)(g,{})},L=[`Playground`,`Tree`,`Sizes`,`StickyHeader`,`WithTags`,`EditableCells`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Всё живое: сортировка по клику на заголовок, выбор строк и «выбрать все» (при части выбранных — частичная отметка), листание и «Показывать: N записей» в подвале.'
      }
    }
  },
  render: args => <Live {...args as Partial<PlaygroundArgs>} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Дерево',
  parameters: {
    docs: {
      description: {
        story: 'Пример «таблица-дерево» из макета. Отступ 26px на уровень и шеврон ставит antd, чекбокс едет вместе с уровнем и стоит у текста. У строки без вложенностей места под шеврон нет — текст сразу за чекбоксом. Чекбокс родителя работает как «выбрать все» в шапке: выбрана часть детей — частичная отметка, отметили родителя — выбраны все дети, сняли — снято у всех.'
      }
    }
  },
  render: () => <Live dataSource={TREE} expandable={{
    defaultExpandedRowKeys: ['k5', 'ns31', 'ns31-1']
  }} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Одни и те же данные в трёх размерах.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      {(['large', 'medium', 'small'] satisfies TableSize[]).map(size => <Live key={size} size={size} dataSource={CONTRACTS.slice(0, 3)} withPagination={false} />)}
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Прилипающая шапка',
  parameters: {
    docs: {
      description: {
        story: 'Прокрути таблицу — шапка остаётся наверху. Шапка прилипает к ближайшей прокручиваемой области: к странице или к панели с прокруткой, как здесь.'
      }
    }
  },
  render: () => <div style={{
    height: 420,
    overflow: 'auto'
  }}>
      <Live sticky withPagination={false} />
    </div>
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'С тегами и действиями',
  parameters: {
    docs: {
      description: {
        story: 'Содержимое ячеек через render колонки: TableCell со второй строкой, TableTags, кнопка-действие IconButton.'
      }
    }
  },
  render: () => <Table<Accreditation> pagination={false} dataSource={ACCREDITATIONS} columns={[{
    title: 'Организация',
    dataIndex: 'org',
    width: 320,
    render: (org: string, row) => <TableCell secondary={\`ИНН \${row.inn}\`}>{org}</TableCell>
  }, {
    title: 'Виды работ',
    dataIndex: 'works',
    render: (works: string[]) => <TableTags tags={works.map(w => ({
      key: w,
      label: w
    }))} />
  }, {
    title: 'Действует до',
    dataIndex: 'until',
    width: 180
  }, {
    key: 'actions',
    width: 72,
    render: () => <TableCell align="center">
              <IconButton variant="red" label="Удалить" icon={<IconTrash />} />
            </TableCell>
  }]} />
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Редактирование по клику',
  parameters: {
    docs: {
      description: {
        story: 'Механика antd «edit-cell», вид — фрейм правок редактирования в макете. Пустая ячейка подсвечена — её нужно заполнить. Наведение: рамка поля, текст не сдвигается. Клик: активное поле. Enter или клик мимо — сохранить, Esc — отменить. С клавиатуры: Tab до ячейки, Enter.'
      }
    }
  },
  render: () => <EditableDemo />
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as EditableCells,O as Playground,A as Sizes,j as StickyHeader,k as Tree,P as WithTags,L as __namedExportsOrder,D as default};