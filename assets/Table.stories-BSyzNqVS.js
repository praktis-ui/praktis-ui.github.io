import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Table-FEifYhuA.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{W as a,t as o}from"./icons-CXeS3Xzr.js";import{n as s,t as c}from"./IconButton-CddcZKCT.js";import{n as l,t as u}from"./TableCell-DOa2dHIv.js";import{n as d,t as f}from"./TableCellParts-B0YMa3sP.js";import{n as p,t as m}from"./Tag-oTIrj8-1.js";function h({withSelection:e=!0,withPagination:t=!0,...n}){let[i,a]=(0,v.useState)([]);return(0,y.jsx)(r,{columns:E,dataSource:C,...n,rowSelection:e?{selectedRowKeys:i,onChange:a}:void 0,pagination:t?{pageSize:10}:!1})}function g(){let[e,t]=(0,v.useState)(I),n=e=>(n,r)=>t(t=>t.map(t=>t.key===n.key?{...t,[e]:r}:t));return(0,y.jsx)(r,{pagination:!1,dataSource:e,columns:[{title:`Вид работ`,dataIndex:`work`},{title:`Ед. изм.`,dataIndex:`unit`,width:120},{title:`Объём`,dataIndex:`volume`,width:240,editable:{onSave:n(`volume`),placeholder:`Число`}},{title:`Цена, ₽`,dataIndex:`price`,width:240,editable:{onSave:n(`price`),placeholder:`Число`}}]})}function _({size:e=`large`,withSelection:t=!1}){let[n,i]=(0,v.useState)(R),[a,o]=(0,v.useState)([]);return(0,y.jsx)(r,{size:e,pagination:!1,dataSource:n,onRowsReorder:i,rowSelection:t?{selectedRowKeys:a,onChange:o}:void 0,columns:[{title:`Этап`,dataIndex:`name`},{title:`Ответственный`,dataIndex:`owner`,width:280},{title:`Срок`,dataIndex:`until`,width:160}]})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{v=t(),s(),o(),p(),n(),l(),d(),y=i(),b="\nИсточник — Figma UI Kit «Практис»: **Table Item** (node 1641:3589) — шапка, ячейки, подвал и\nпримеры «таблица-дерево», «таблица с тегами».\n\nОбёртка над [antd Table](https://ant.design/components/table): сортировка, выбор строк, дерево,\nприлипающая шапка — логика antd. Наши вид, атомы и подвал.\n\n| Что | Как |\n|---|---|\n| Размер | `size` — large / medium / small: строки 56 / 46 / 36, шапка 54 / 46 / 38 |\n| Колонки и данные | `columns`, `dataSource` — как у antd |\n| Сортировка | `sorter` у колонки — как у antd; кликается вся ячейка шапки, по кругу нет → по возрастанию → по убыванию |\n| Выбор строк | `rowSelection` — как у antd; в шапке «выбрать все» с частичным выбором |\n| Дерево | `children` у строк данных — отступ 26px на уровень и шеврон ставит antd, чекбокс едет вместе с уровнем; чекбокс родителя работает как «выбрать все» для его детей |\n| Прилипающая шапка | `sticky` — как у antd. Прилипает к ближайшей прокручиваемой области (страница или панель с прокруткой); обёртка с `overflow: hidden` между таблицей и этой областью прилипание ломает |\n| Подвал | `pagination` — `{ pageSize, pageSizeOptions }` или `false` |\n| Перестановка строк | `onRowsReorder(rows)` — слева колонка с ручкой DragHandle, строку тянут за неё мышью, пальцем или с клавиатуры; порядок хранит экран. Для дерева не включается |\n| Редактирование по клику | `editable: { onSave, placeholder }` у колонки — наведение показывает рамку поля, клик — поле, Enter или уход из поля — сохранить, Esc — отменить |\n\n**Ячейки.** Строка или число в данных сами становятся ячейкой-текстом: до двух строк, дальше\nотточие посреди слова и полный текст в тултипе. Для остального — `render` колонки и\n**TableCell** со слотами (вторая строка, иконки, номер, действия), `Tag`, `TableTags`.\n\n**Раскрытие дерева** анимировано: шеврон поворачивается, вложенные строки проявляются. У antd\nстроки появляются без анимации — это наше дополнение. Сворачивание мгновенное.\n\n**Пока нет:** фильтры в шапке, вложенные таблицы, редактирование строкой целиком.\n",x=[`Кронштадт, Тулонская аллея, д.2 (кад. №:3791)`,`11 оч, уч. 37 (:3367), СПб, Красносельский р-н, территория предприятия "Предпортовый"`,`Санкт-Петербург, Приморский пр., д. 72, лит. А`,`Ленинградская обл., Всеволожский р-н, г. Мурино, ул. Шоссе в Лаврики`],S=[{text:`Архивный`,status:`default`},{text:`Проект`,status:`default`},{text:`На согласовании`,status:`processing`},{text:`Подписан`,status:`success`},{text:`Отклонён`,status:`error`}],C=Array.from({length:57},(e,t)=>({key:`c${t+1}`,number:`НС${31+t%9}-КР-${2019+t%6}/${t+1}`,object:x[t%x.length],date:`${String(1+t*7%28).padStart(2,`0`)}.${String(1+t*5%12).padStart(2,`0`)}.${2019+t%6}`,status:S[t%S.length]})),w=[{key:`k5`,number:`КР-К5/2019`,object:x[0],date:`13.09.2020`,status:S[0],children:[{key:`ns31`,number:`НС31-КР-2020`,object:x[1],date:`20.08.2020`,status:S[1],children:[{key:`ns31-1`,number:`НС31-КР-2020/1`,object:x[1],date:`20.08.2020`,status:S[1],children:[{key:`ns31-1-1`,number:`НС31-КР-2020/1.1`,object:x[1],date:`20.08.2020`,status:S[1]},{key:`ns31-1-2`,number:`НС31-КР-2020/1.2`,object:x[1],date:`20.08.2020`,status:S[1]}]}]},{key:`ns32`,number:`НС32-КР-2021`,object:x[2],date:`02.03.2021`,status:S[2]}]},{key:`k6`,number:`КР-К6/2020`,object:x[3],date:`11.11.2020`,status:S[3],children:[{key:`ns40`,number:`НС40-КР-2022`,object:x[3],date:`05.04.2022`,status:S[2]}]},{key:`k7`,number:`КР-К7/2021`,object:x[2],date:`17.06.2021`,status:S[4]}],T=e=>{let[t,n,r]=e.split(`.`);return new Date(`${r}-${n}-${t}`).getTime()},E=[{title:`Номер договора`,dataIndex:`number`,width:300,sorter:(e,t)=>e.number.localeCompare(t.number,`ru`)},{title:`Объект`,dataIndex:`object`,sorter:(e,t)=>e.object.localeCompare(t.object,`ru`)},{title:`Дата договора`,dataIndex:`date`,width:180,sorter:(e,t)=>T(e.date)-T(t.date)},{title:`Статус`,dataIndex:`status`,width:220,render:e=>(0,y.jsx)(m,{status:e.status,children:e.text})}],D={control:!1,table:{category:`Для разработчиков — передаётся из кода`}},O={title:`UI Kit/Данные/Table/Table`,id:`ui-kit-table-table`,component:r,parameters:{layout:`padded`,docs:{description:{component:b}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`large`,`medium`,`small`]},withSelection:{control:`boolean`,name:`выбор строк`,table:{category:`Возможности`}},withPagination:{control:`boolean`,name:`подвал с пагинацией`,table:{category:`Возможности`}},columns:D,dataSource:D,rowSelection:D,expandable:D,pagination:D,sticky:D},args:{size:`large`,withSelection:!0,withPagination:!0}},k={parameters:{docs:{description:{story:`Всё живое: сортировка по клику на заголовок, выбор строк и «выбрать все» (при части выбранных — частичная отметка), листание и «Показывать: N записей» в подвале.`}}},render:e=>(0,y.jsx)(h,{...e})},A={name:`Дерево`,parameters:{docs:{description:{story:`Пример «таблица-дерево» из макета. Отступ 26px на уровень и шеврон ставит antd, чекбокс едет вместе с уровнем и стоит у текста. У строки без вложенностей места под шеврон нет — текст сразу за чекбоксом. Чекбокс родителя работает как «выбрать все» в шапке: выбрана часть детей — частичная отметка, отметили родителя — выбраны все дети, сняли — снято у всех.`}}},render:()=>(0,y.jsx)(h,{dataSource:w,expandable:{defaultExpandedRowKeys:[`k5`,`ns31`,`ns31-1`]}})},j={parameters:{docs:{description:{story:`Одни и те же данные в трёх размерах.`}}},render:()=>(0,y.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[`large`,`medium`,`small`].map(e=>(0,y.jsx)(h,{size:e,dataSource:C.slice(0,3),withPagination:!1},e))})},M={name:`Прилипающая шапка`,parameters:{docs:{description:{story:`Прокрути таблицу — шапка остаётся наверху. Шапка прилипает к ближайшей прокручиваемой области: к странице или к панели с прокруткой, как здесь.`}}},render:()=>(0,y.jsx)(`div`,{style:{height:420,overflow:`auto`},children:(0,y.jsx)(h,{sticky:!0,withPagination:!1})})},N=[`Монолитные работы`,`Кровля`,`Фасадные работы`,`Электромонтаж`,`Вентиляция`,`Благоустройство`],P=Array.from({length:4},(e,t)=>({key:`a${t}`,org:[`ООО «СтройМонтаж»`,`АО «Северная верфь строй»`,`ООО «Балтийская кровельная компания»`,`ИП Смирнов А. В.`][t],inn:[`7801234567`,`7812345678`,`7823456789`,`781234567890`][t],works:N.slice(t,t+2+t),until:[`31.12.2026`,`15.06.2027`,`01.03.2026`,`30.09.2026`][t]})),F={name:`С тегами и действиями`,parameters:{docs:{description:{story:`Содержимое ячеек через render колонки: TableCell со второй строкой, TableTags, кнопка-действие IconButton.`}}},render:()=>(0,y.jsx)(r,{pagination:!1,dataSource:P,columns:[{title:`Организация`,dataIndex:`org`,width:320,render:(e,t)=>(0,y.jsx)(u,{secondary:`ИНН ${t.inn}`,children:e})},{title:`Виды работ`,dataIndex:`works`,render:e=>(0,y.jsx)(f,{tags:e.map(e=>({key:e,label:e}))})},{title:`Действует до`,dataIndex:`until`,width:180},{key:`actions`,width:72,render:()=>(0,y.jsx)(u,{align:`center`,children:(0,y.jsx)(c,{variant:`red`,label:`Удалить`,icon:(0,y.jsx)(a,{})})})}]})},I=[{key:`e1`,work:`Монолитные работы`,unit:`м³`,volume:`45`,price:`8 200`},{key:`e2`,work:`Кровля`,unit:`м²`,volume:``,price:`1 150`},{key:`e3`,work:`Фасадные работы`,unit:`м²`,volume:`1 320`,price:``},{key:`e4`,work:`Электромонтаж`,unit:`шт`,volume:``,price:``}],L={name:`Редактирование по клику`,parameters:{docs:{description:{story:`Механика antd «edit-cell», вид — фрейм правок редактирования в макете. Пустая ячейка подсвечена — её нужно заполнить. Наведение: рамка поля, текст не сдвигается. Клик: активное поле. Enter или клик мимо — сохранить, Esc — отменить. С клавиатуры: Tab до ячейки, Enter.`}}},render:()=>(0,y.jsx)(g,{})},R=[{key:`s1`,name:`Разработка проектной документации`,owner:`ООО «Проект-Север»`,until:`15.10.2026`},{key:`s2`,name:`Экспертиза проекта`,owner:`ГАУ «Леноблгосэкспертиза»`,until:`30.11.2026`},{key:`s3`,name:`Получение разрешения на строительство`,owner:`Отдел ИРД`,until:`20.12.2026`},{key:`s4`,name:`Подготовка площадки`,owner:`ООО «СтройМонтаж»`,until:`31.01.2027`},{key:`s5`,name:`Устройство котлована`,owner:`ООО «СтройМонтаж»`,until:`15.03.2027`}],z={name:`Перестановка строк`,parameters:{docs:{description:{story:`Строку тянут за ручку слева (атом DragHandle): остальные строки расступаются, перетаскиваемая приподнята тенью. С клавиатуры: Tab до ручки, пробел — взять, стрелки — двигать, пробел — поставить, Esc — отменить. Сортировку по колонкам вместе с перестановкой не включаем — непонятно, какой порядок главный. С выбором строк ручка стоит перед чекбоксом.`}}},render:()=>(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,y.jsx)(_,{}),(0,y.jsx)(_,{size:`small`,withSelection:!0})]})},B=[`Playground`,`Tree`,`Sizes`,`StickyHeader`,`WithTags`,`EditableCells`,`RowsReorder`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Всё живое: сортировка по клику на заголовок, выбор строк и «выбрать все» (при части выбранных — частичная отметка), листание и «Показывать: N записей» в подвале.'
      }
    }
  },
  render: args => <Live {...args as Partial<PlaygroundArgs>} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Редактирование по клику',
  parameters: {
    docs: {
      description: {
        story: 'Механика antd «edit-cell», вид — фрейм правок редактирования в макете. Пустая ячейка подсвечена — её нужно заполнить. Наведение: рамка поля, текст не сдвигается. Клик: активное поле. Enter или клик мимо — сохранить, Esc — отменить. С клавиатуры: Tab до ячейки, Enter.'
      }
    }
  },
  render: () => <EditableDemo />
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Перестановка строк',
  parameters: {
    docs: {
      description: {
        story: 'Строку тянут за ручку слева (атом DragHandle): остальные строки расступаются, перетаскиваемая приподнята тенью. С клавиатуры: Tab до ручки, пробел — взять, стрелки — двигать, пробел — поставить, Esc — отменить. Сортировку по колонкам вместе с перестановкой не включаем — непонятно, какой порядок главный. С выбором строк ручка стоит перед чекбоксом.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <ReorderDemo />
      <ReorderDemo size="small" withSelection />
    </div>
}`,...z.parameters?.docs?.source}}}})))()}V();export{L as EditableCells,k as Playground,z as RowsReorder,j as Sizes,M as StickyHeader,A as Tree,F as WithTags,B as __namedExportsOrder,O as default};