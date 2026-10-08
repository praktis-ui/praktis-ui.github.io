import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./TextArea-BccMUnBw.js";function a(){let[e,t]=(0,o.useState)(m);return(0,s.jsxs)(l,{children:[(0,s.jsx)(i,{label:`Растёт без предела`,value:e,onChange:e=>t(e.target.value),placeholder:`Печатайте — поле растёт`}),(0,s.jsx)(i,{label:`maxRows={4} — дальше прокрутка`,defaultValue:`${m}\n\n${m}`,maxRows:4})]})}var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o=t(),r(),s=n(),c={title:`UI Kit/Поля и выбор/TextArea`,id:`ui-kit-textarea`,component:i,parameters:{layout:`padded`,docs:{description:{component:'\nМногострочное поле. Источник — Figma UI Kit «Практис», Textarea (node 814:1151). Основа — antd\n`Input.TextArea`, вид — как у **Input** кита: те же цвета рамки, наведения, фокуса, ошибки и отключённого\nполя, та же подпись со звёздочкой и значком подсказки, тот же текст ошибки под полем.\n\n**Размеров нет:** поле по умолчанию на 2 строки текста (высота 52, как Default в макете) и растёт по высоте\nпо мере ввода. `maxRows` — после скольких строк перестать расти и прокручивать (полоса прокрутки кита);\nпо умолчанию растёт без предела. Уголка растягивания нет — поле растёт само.\n\n| Проп | Значения |\n|---|---|\n| `label`, `required`, `infoText` | подпись, звёздочка, подсказка у «i» — как у Input. Нет `label` — поле без подписи (история «Без подписи») |\n| `status="error"` + `errorMessage` | красная рамка и текст под полем |\n| `disabled` | отключено |\n| `maxRows` | предел роста в строках |\n| остальное | как у antd `Input.TextArea` (`value`, `onChange`, `placeholder`, `maxLength`, `showCount`…) |\n\nШирина — по контейнеру (в макете задаёт дизайнер под задачу).\n'}}},tags:[`autodocs`],argTypes:{withLabel:{name:`С подписью`,control:`boolean`,description:`Выключить — поле без подписи, звёздочки и значка подсказки (label не передаётся)`},label:{control:`text`,if:{arg:`withLabel`}},required:{control:`boolean`,if:{arg:`withLabel`}},infoText:{control:`text`,if:{arg:`withLabel`}},placeholder:{control:`text`},errorMessage:{control:`text`},status:{control:`inline-radio`,options:[void 0,`error`]},disabled:{control:`boolean`},maxRows:{control:{type:`number`,min:2}}},args:{withLabel:!0,label:`Комментарий`,placeholder:`Опишите замечание`,required:!0,infoText:`Увидят все участники согласования`}},l=({children:e})=>(0,s.jsx)(`div`,{style:{width:360,display:`flex`,flexDirection:`column`,gap:24},children:e}),u=({withLabel:e,label:t,...n})=>(0,s.jsx)(i,{...n,label:e?t:void 0}),d={render:e=>(0,s.jsx)(l,{children:(0,s.jsx)(u,{...e})})},f={name:`Без подписи`,args:{withLabel:!1},parameters:{docs:{description:{story:"Не передан `label` — поле без подписи, звёздочки и значка подсказки, как у Input."}}},render:e=>(0,s.jsx)(l,{children:(0,s.jsx)(u,{...e})})},p={name:`С подписью и без`,render:()=>(0,s.jsxs)(l,{children:[(0,s.jsx)(i,{label:`Комментарий`,required:!0,infoText:`Увидят все участники согласования`,placeholder:`Опишите замечание`}),(0,s.jsx)(i,{placeholder:`Опишите замечание`})]})},m=`Не приложен протокол испытаний бетона на прочность для захватки 3. Прошу дополнить исполнительную документацию и повторно отправить акт на согласование до пятницы.`,h={name:`Состояния`,parameters:{docs:{description:{story:`Пустое, заполненное, отключённое, с ошибкой. Наведение и фокус — наведите и нажмите.`}}},render:()=>(0,s.jsxs)(l,{children:[(0,s.jsx)(i,{label:`Пустое`,required:!0,infoText:`Подсказка`,placeholder:`Example`}),(0,s.jsx)(i,{label:`Заполненное`,required:!0,defaultValue:`Example`}),(0,s.jsx)(i,{label:`Отключено`,required:!0,disabled:!0,placeholder:`Example`}),(0,s.jsx)(i,{label:`С ошибкой`,required:!0,status:`error`,errorMessage:`Поле обязательно для заполнения`,placeholder:`Example`})]})},g={name:`Растёт по мере ввода`,parameters:{docs:{description:{story:"Начинается с 2 строк, растёт с каждой новой. С `maxRows` после предела появляется прокрутка."}}},render:()=>(0,s.jsx)(a,{})},_=[`Playground`,`Bare`,`WithAndWithout`,`States`,`Grow`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: a => <Box>
      <Field {...a as Args} />
    </Box>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'С подписью и без',
  render: () => <Box>
      <TextArea label="Комментарий" required infoText="Увидят все участники согласования" placeholder="Опишите замечание" />
      <TextArea placeholder="Опишите замечание" />
    </Box>
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Растёт по мере ввода',
  parameters: {
    docs: {
      description: {
        story: 'Начинается с 2 строк, растёт с каждой новой. С \`maxRows\` после предела появляется прокрутка.'
      }
    }
  },
  render: () => <GrowStory />
}`,...g.parameters?.docs?.source}}}})))()}v();export{f as Bare,g as Grow,d as Playground,h as States,p as WithAndWithout,_ as __namedExportsOrder,c as default};