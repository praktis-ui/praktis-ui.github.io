import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./input-Dxjn_Un6.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./Scrollbar-BhJ9qhlm.js";import{n as s,t as c}from"./InputChrome-B80WoMA0.js";var l,u,d;function f(){return(f=e((()=>{l=`_textarea_jdgy8_8`,u=`_grow_jdgy8_20`,d={textarea:l,grow:u}})))()}function p({label:e,required:t,infoText:n,errorMessage:i,status:a,disabled:s,maxRows:l,className:u,...f}){let p=(0,m.jsx)(r.TextArea,{...f,disabled:s,status:a,autoSize:{minRows:2,maxRows:l},className:[l?o.xs:d.grow,d.textarea,u].filter(Boolean).join(` `)});return(0,m.jsx)(c,{label:e,required:t,infoText:n,errorMessage:i,isError:a===`error`,disabled:s,field:p,valueTooltip:null})}var m;function h(){return(h=e((()=>{n(),a(),s(),f(),m=i(),p.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:`Подпись над полем. Не передана — поле без подписи.`},required:{required:!1,tsType:{name:`boolean`},description:`Красная звёздочка у подписи.`},infoText:{required:!1,tsType:{name:`string`},description:`Текст подсказки у значка «i» рядом с подписью.`},errorMessage:{required:!1,tsType:{name:`ReactNode`},description:`Текст под полем — только при status="error".`},maxRows:{required:!1,tsType:{name:`number`},description:`После скольких строк поле перестаёт расти и прокручивается. По умолчанию растёт без предела.`}},composes:[`Omit`]}})))()}function g(){let[e,t]=(0,_.useState)(T);return(0,v.jsxs)(b,{children:[(0,v.jsx)(p,{label:`Растёт без предела`,value:e,onChange:e=>t(e.target.value),placeholder:`Печатайте — поле растёт`}),(0,v.jsx)(p,{label:`maxRows={4} — дальше прокрутка`,defaultValue:`${T}\n\n${T}`,maxRows:4})]})}var _,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{_=t(),h(),v=i(),y={title:`UI Kit/Поля и выбор/TextArea`,id:`ui-kit-textarea`,component:p,parameters:{layout:`padded`,docs:{description:{component:'\nМногострочное поле. Источник — Figma UI Kit «Практис», Textarea (node 814:1151). Основа — antd\n`Input.TextArea`, вид — как у **Input** кита: те же цвета рамки, наведения, фокуса, ошибки и отключённого\nполя, та же подпись со звёздочкой и значком подсказки, тот же текст ошибки под полем.\n\n**Размеров нет:** поле по умолчанию на 2 строки текста (высота 52, как Default в макете) и растёт по высоте\nпо мере ввода. `maxRows` — после скольких строк перестать расти и прокручивать (полоса прокрутки кита);\nпо умолчанию растёт без предела. Уголка растягивания нет — поле растёт само.\n\n| Проп | Значения |\n|---|---|\n| `label`, `required`, `infoText` | подпись, звёздочка, подсказка у «i» — как у Input. Нет `label` — поле без подписи (история «Без подписи») |\n| `status="error"` + `errorMessage` | красная рамка и текст под полем |\n| `disabled` | отключено |\n| `maxRows` | предел роста в строках |\n| остальное | как у antd `Input.TextArea` (`value`, `onChange`, `placeholder`, `maxLength`, `showCount`…) |\n\nШирина — по контейнеру (в макете задаёт дизайнер под задачу).\n'}}},tags:[`autodocs`],argTypes:{withLabel:{name:`С подписью`,control:`boolean`,description:`Выключить — поле без подписи, звёздочки и значка подсказки (label не передаётся)`},label:{control:`text`,if:{arg:`withLabel`}},required:{control:`boolean`,if:{arg:`withLabel`}},infoText:{control:`text`,if:{arg:`withLabel`}},placeholder:{control:`text`},errorMessage:{control:`text`},status:{control:`inline-radio`,options:[void 0,`error`]},disabled:{control:`boolean`},maxRows:{control:{type:`number`,min:2}}},args:{withLabel:!0,label:`Комментарий`,placeholder:`Опишите замечание`,required:!0,infoText:`Увидят все участники согласования`}},b=({children:e})=>(0,v.jsx)(`div`,{style:{width:360,display:`flex`,flexDirection:`column`,gap:24},children:e}),x=({withLabel:e,label:t,...n})=>(0,v.jsx)(p,{...n,label:e?t:void 0}),S={render:e=>(0,v.jsx)(b,{children:(0,v.jsx)(x,{...e})})},C={name:`Без подписи`,args:{withLabel:!1},parameters:{docs:{description:{story:"Не передан `label` — поле без подписи, звёздочки и значка подсказки, как у Input."}}},render:e=>(0,v.jsx)(b,{children:(0,v.jsx)(x,{...e})})},w={name:`С подписью и без`,render:()=>(0,v.jsxs)(b,{children:[(0,v.jsx)(p,{label:`Комментарий`,required:!0,infoText:`Увидят все участники согласования`,placeholder:`Опишите замечание`}),(0,v.jsx)(p,{placeholder:`Опишите замечание`})]})},T=`Не приложен протокол испытаний бетона на прочность для захватки 3. Прошу дополнить исполнительную документацию и повторно отправить акт на согласование до пятницы.`,E={name:`Состояния`,parameters:{docs:{description:{story:`Пустое, заполненное, отключённое, с ошибкой. Наведение и фокус — наведите и нажмите.`}}},render:()=>(0,v.jsxs)(b,{children:[(0,v.jsx)(p,{label:`Пустое`,required:!0,infoText:`Подсказка`,placeholder:`Example`}),(0,v.jsx)(p,{label:`Заполненное`,required:!0,defaultValue:`Example`}),(0,v.jsx)(p,{label:`Отключено`,required:!0,disabled:!0,placeholder:`Example`}),(0,v.jsx)(p,{label:`С ошибкой`,required:!0,status:`error`,errorMessage:`Поле обязательно для заполнения`,placeholder:`Example`})]})},D={name:`Растёт по мере ввода`,parameters:{docs:{description:{story:"Начинается с 2 строк, растёт с каждой новой. С `maxRows` после предела появляется прокрутка."}}},render:()=>(0,v.jsx)(g,{})},O=[`Playground`,`Bare`,`WithAndWithout`,`States`,`Grow`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: a => <Box>
      <Field {...a as Args} />
    </Box>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Без подписи',
  args: {
    withLabel: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Не передан \`label\` — поле без подписи, звёздочки и значка подсказки, как у Input.'
      }
    }
  },
  render: a => <Box>
      <Field {...a as Args} />
    </Box>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'С подписью и без',
  render: () => <Box>
      <TextArea label="Комментарий" required infoText="Увидят все участники согласования" placeholder="Опишите замечание" />
      <TextArea placeholder="Опишите замечание" />
    </Box>
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Состояния',
  parameters: {
    docs: {
      description: {
        story: 'Пустое, заполненное, отключённое, с ошибкой. Наведение и фокус — наведите и нажмите.'
      }
    }
  },
  render: () => <Box>
      <TextArea label="Пустое" required infoText="Подсказка" placeholder="Example" />
      <TextArea label="Заполненное" required defaultValue="Example" />
      <TextArea label="Отключено" required disabled placeholder="Example" />
      <TextArea label="С ошибкой" required status="error" errorMessage="Поле обязательно для заполнения" placeholder="Example" />
    </Box>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Растёт по мере ввода',
  parameters: {
    docs: {
      description: {
        story: 'Начинается с 2 строк, растёт с каждой новой. С \`maxRows\` после предела появляется прокрутка.'
      }
    }
  },
  render: () => <GrowStory />
}`,...D.parameters?.docs?.source}}}})))()}k();export{C as Bare,D as Grow,S as Playground,E as States,w as WithAndWithout,O as __namedExportsOrder,y as default};