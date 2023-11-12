(self.webpackChunksurvey_app=self.webpackChunksurvey_app||[]).push([[22],{3433:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>O});var a=t(2791),r=t(1087),n=t(184);const i=function(){return(0,n.jsx)("div",{className:"modal fade",id:"terms-txt",tabIndex:"-1",role:"dialog","aria-labelledby":"termsLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h4",{className:"modal-title",id:"termsLabel",children:"Terms and conditions"}),(0,n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsx)("h6",{children:"1. Acceptance of Terms"}),(0,n.jsx)("p",{children:"By accessing and using OpinionHarbor, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use this Website."}),(0,n.jsx)("h6",{children:"2. User Registration"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"a"}),(0,n.jsx)("p",{children:" To participate in surveys and use certain features of the Website, you may be required to register an account. You agree to provide accurate and up-to-date information during the registration process, including your name, email address, and any other requested information."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"b"}),(0,n.jsx)("p",{children:"You are responsible for maintaining the confidentiality of your account credentials, and you are solely responsible for all activities that occur under your account."})]})]}),(0,n.jsx)("h6",{children:"3. User Content"}),(0,n.jsx)("p",{children:"You may be asked to submit information and content, including your name, programming stack languages, gender, certificates, and a brief description of yourself. You retain ownership of the content you provide"})]}),(0,n.jsx)("div",{className:"modal-footer",children:(0,n.jsx)("button",{type:"button",className:"btn_1","data-bs-dismiss":"modal",children:"Close"})})]})})})};var o=t(1243);const c={options:{production:"https://opinion-harbor-6c2c204c10f4.herokuapp.com/api/options",development:"http://127.0.0.1:8000/api/options"},responses:{production:"https://opinion-harbor-6c2c204c10f4.herokuapp.com/api/questions/responses",development:"http://127.0.0.1:8000/api/questions/responses"},questions:{production:"https://opinion-harbor-6c2c204c10f4.herokuapp.com/api/questions",development:"http://127.0.0.1:8000/api/questions"},certificates:{production:"https://opinion-harbor-6c2c204c10f4.herokuapp.com/api/questions/certificates",development:"http://127.0.0.1:8000/api/questions/certificates"},download:{production:"https://opinion-harbor-6c2c204c10f4.herokuapp.com/api/questions/responses/certificates",development:"http://127.0.0.1:8000/api/questions/responses/certificates"}};var l=t(8175);const d=()=>(0,n.jsxs)(l.ZP,{speed:2,width:200,height:50,viewBox:"0 0 200 50",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,n.jsx)("rect",{x:"0",y:"15",rx:"5",ry:"5",width:"150",height:"10"}),(0,n.jsx)("rect",{x:"0",y:"30",rx:"5",ry:"5",width:"100",height:"10"})]});var u=t(3623),m=t.n(u);const h=function(e){let{setStepValid:s,setFinalFormData:t}=e;const l=(0,a.useRef)(null),[u,h]=(0,a.useState)(null),[p,x]=(0,a.useState)(!0),[j,f]=(0,a.useState)({full_name:"",terms:!1}),[g,b]=(0,a.useState)({full_name:!0,terms:!0}),[v,y]=(0,a.useState)({full_name:"",terms:""});(0,a.useEffect)((()=>{const e=Object.values(j).some((e=>""===e)),t=Object.values(g).every((e=>e))&&!e;s(t)}),[j,g,s]);const _=e=>{const{name:a,value:r,type:n,checked:i}=e.target;let o="";r?"checkbox"===n&&(o=i?"":"Please accept the Terms and Conditions",b({...g,[a]:i})):o="This field is required.",b({...g,[a]:!o}),y({...v,[a]:o}),f({...j,[a]:"checkbox"===n?i:r});const c=Object.values(g).every((e=>e));s(c),t((e=>({...e,[a]:"checkbox"===n?i:r})))};return(0,a.useEffect)((()=>{l.current&&l.current.focus()}),[]),(0,a.useEffect)((()=>{const e=c.questions.production;o.Z.get(e).then((e=>{const s=m().xml2json(e.data,{compact:!0,spaces:4}),t=JSON.parse(s);if(t&&t.questions&&t.questions.question){const e=t.questions.question;for(const s of e)if(s._attributes&&"full_name"===s._attributes.name){const e={_attributes:s._attributes,text:s.text?s.text._text:null,description:s.description?s.description._text:null};h(e);break}}else console.error("Invalid questions data structure");x(!1)})).catch((e=>{console.log("Error fetching question:",e)}))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"summary step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"1/6"}),"Basic details"]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"1"}),(0,n.jsx)("div",{className:"form-group",children:p?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)("br",{})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{children:"First Name"}),(0,n.jsx)("input",{type:"text",name:u&&u._attributes.name,className:"form-control required ".concat(g.full_name?"":"is-invalid "),placeholder:u&&u.text,title:u&&u.description,value:j.full_name,onChange:_,ref:l,required:u&&u._attributes.required}),v.full_name&&(0,n.jsx)("div",{className:"invalid-feedback",children:v.full_name})]})})]})}),(0,n.jsxs)("div",{className:"form-check form-group terms",children:[(0,n.jsxs)("label",{className:" form-check-label container_check",htmlFor:"invalidCheck3",children:["Please accept our"," ",(0,n.jsxs)(r.rU,{to:"#","data-bs-toggle":"modal","data-bs-target":"#terms-txt",rel:"noreferrer",children:[" ","Terms and conditions"]}),(0,n.jsx)("input",{type:"checkbox",name:"terms",id:"invalidCheck3","aria-describedby":"invalidFeedbackCheck3",checked:j.terms,onChange:_,required:!0,className:"form-check-input required ".concat(g.terms?"":"is-invalid ")}),(0,n.jsx)("span",{className:"checkmark"})]}),v.terms&&(0,n.jsx)("div",{id:"invalidFeedbackCheck3",className:"invalid-feedback",children:v.terms})]})]}),(0,n.jsx)(i,{})]})};const p=function(e){let{setStepValid:s,setFinalFormData:t}=e;const r=(0,a.useRef)(null),[l,u]=(0,a.useState)(null),[h,p]=(0,a.useState)(!0),[x,j]=(0,a.useState)({email_address:""}),[f,g]=(0,a.useState)({email_address:!0}),[b,v]=(0,a.useState)({email_address:""});return(0,a.useEffect)((()=>{const e=Object.values(x).some((e=>""===e)),t=Object.values(f).every((e=>e))&&!e;s(t)}),[x,f,s]),(0,a.useEffect)((()=>{r.current&&r.current.focus()}),[]),(0,a.useEffect)((()=>{const e=c.questions.production;o.Z.get(e).then((e=>{const s=m().xml2json(e.data,{compact:!0,spaces:4}),t=JSON.parse(s);if(t&&t.questions&&t.questions.question){const e=t.questions.question;for(const s of e)if(s._attributes&&"email_address"===s._attributes.name){const e={_attributes:s._attributes,text:s.text?s.text._text:null,description:s.description?s.description._text:null};u(e);break}}else console.error("Invalid questions data structure");p(!1)})).catch((e=>{console.log("Error fetching question:",e)}))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"summary step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"2/6"}),"Basic details"]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"2"}),(0,n.jsx)("div",{className:"form-group",children:h?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)("br",{})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{children:"Email Address"}),(0,n.jsx)("input",{type:"text",name:l&&l._attributes.name,className:"form-control required ".concat(f.email_address?"":"is-invalid "),placeholder:l&&l.text,title:l&&l.description,value:x.email_address,onChange:e=>{const{name:a,value:r,type:n,checked:i}=e.target;let o="";if("email_address"===a)if(r){/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(r)||(o="Please enter a valid email address.")}else o="This field is required.";g({...f,[a]:!o}),v({...b,[a]:o}),j({...x,[a]:"checkbox"===n?i:r});const c=Object.values(f).every((e=>e));s(c),t((e=>({...e,[a]:"checkbox"===n?i:r})))},ref:r,required:l&&l._attributes.required}),b.email_address&&(0,n.jsx)("div",{className:"invalid-feedback",children:b.email_address})]})})]})})]}),(0,n.jsx)(i,{})]})};const x=function(e){let{setStepValid:s,setFinalFormData:t}=e;const r=(0,a.useRef)(null),[i,l]=(0,a.useState)(null),[u,h]=(0,a.useState)(!0),[p,x]=(0,a.useState)({description:""}),[j,f]=(0,a.useState)({description:!0}),[g,b]=(0,a.useState)({description:""});return(0,a.useEffect)((()=>{const e=Object.values(p).some((e=>""===e)),t=Object.values(j).every((e=>e))&&!e;s(t)}),[p,j,s]),(0,a.useEffect)((()=>{const e=c.questions.production;o.Z.get(e).then((e=>{const s=m().xml2json(e.data,{compact:!0,spaces:4}),t=JSON.parse(s);if(t&&t.questions&&t.questions.question){const e=t.questions.question;for(const s of e)if(s._attributes&&"description"===s._attributes.name){const e={_attributes:s._attributes,text:s.text?s.text._text:null,description:s.description?s.description._text:null};l(e);break}}else console.error("Invalid questions data structure");h(!1)})).catch((e=>{console.log("Error fetching question:",e)}))}),[]),(0,a.useEffect)((()=>{r.current&&r.current.focus()}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"summary step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"3/6"}),"Basic details"]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"3"}),(0,n.jsx)("div",{className:"form-group",children:u?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)("br",{})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{children:"Description"}),(0,n.jsx)("textarea",{name:i&&i._attributes.name,className:"form-control required ".concat(j.description?"":"is-invalid "),spellCheck:"true",placeholder:i&&i.text,title:i&&i.description,value:p.description,onChange:e=>{const{name:a,value:r}=e.target;let n="";r||(n="This field is required."),f({...j,[a]:!n}),b({...g,[a]:n}),x({...p,[a]:r});const i=Object.values(j).every((e=>e));s(i),t((e=>({...e,[a]:r})))},ref:r,required:i&&i._attributes.required}),g.description&&(0,n.jsx)("div",{className:"invalid-feedback",children:g.description})]})})]})})]})})};var j=t(3402);const f=function(e){let{setStepValid:s,setFinalFormData:t}=e;const[r,i]=(0,a.useState)(!0),[l,u]=(0,a.useState)([]),[m,h]=(0,a.useState)({gender:""}),[p,x]=(0,a.useState)({gender:!0}),[f,g]=(0,a.useState)({gender:""});(0,a.useEffect)((()=>{const e=Object.values(m).some((e=>""===e)),t=Object.values(p).every((e=>e))&&!e;s(t)}),[m,p,s]),(0,a.useEffect)((()=>{const e=c.options.production;o.Z.get(e).then((e=>{u(e.data.gender),i(!1)})).catch((e=>{j.ZP.error("Error fetching gender options")}))}),[]);const b=e=>{const{name:a,value:r}=e.target;let n="";"gender"===a&&(r||(n="Please select a gender."),x({...p,[a]:!n})),g({...f,[a]:n}),h({...m,[a]:r});const i=Object.values(p).every((e=>e));s(i),t((e=>({...e,[a]:r})))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"summary step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"4/6"}),"General Description"]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"4"}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Gender"}),(0,n.jsx)("br",{}),r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)("br",{}),(0,n.jsx)(d,{}),(0,n.jsx)("br",{}),(0,n.jsx)(d,{})]}):(0,n.jsx)("div",{className:"form-group",children:l.map((e=>(0,n.jsxs)("label",{className:"container_radio version_2",children:[e.option.charAt(0).toUpperCase()+e.option.slice(1),(0,n.jsx)("input",{type:"radio",name:"gender",value:e.option,className:"required",onChange:b}),(0,n.jsx)("span",{className:"checkmark"})]},e.id)))}),f.gender&&(0,n.jsx)("div",{className:"invalid-feedback",children:f.gender})]})]})})]}),(0,n.jsx)(j.x7,{})]})};const g=function(e){let{setStepValid:s,setFinalFormData:t}=e;const[r,i]=(0,a.useState)(!0),[l,u]=(0,a.useState)([]),[m,h]=(0,a.useState)([]),[p,x]=(0,a.useState)(""),f=c.options.production;(0,a.useEffect)((()=>{o.Z.get(f).then((e=>{u(e.data.programming_stack),i(!1)})).catch((()=>{j.ZP.error("Error fetching programming stack options")}))}),[f]),(0,a.useEffect)((()=>{const e=m.length>0;x(e?"":"Choose at least one programming language");s(e);const a={programming_stack:e?m.join(","):""};t((e=>({...e,...a})))}),[m,t,s]);const g=e=>{const s=e.target.value;e.target.checked?h([...m,s]):h(m.filter((e=>e!==s)))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"summary step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"5/6"}),"Programming stacks"]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"5"}),(0,n.jsx)("div",{className:"column-container",children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)("br",{}),(0,n.jsx)(d,{}),(0,n.jsx)("br",{}),(0,n.jsx)(d,{}),(0,n.jsx)("br",{}),(0,n.jsx)(d,{}),(0,n.jsx)("br",{}),(0,n.jsx)(d,{})]}):l.map((e=>(0,n.jsx)("div",{className:"form-check",children:(0,n.jsxs)("label",{htmlFor:"form-check-".concat(e.id),className:"form-check-label container_radio version_2",children:[e.option.charAt(0).toUpperCase()+e.option.slice(1),(0,n.jsx)("input",{type:"checkbox",id:"form-check-".concat(e.id),name:"programming_stack",className:"form-check-input ".concat(p?"is-invalid ":""),value:e.option,onChange:g}),(0,n.jsx)("span",{className:"checkmark"})]})},e.id)))}),p&&(0,n.jsx)("div",{className:"error-message text-danger",children:p})]})})]}),(0,n.jsx)(j.x7,{})]})};const b=function(e){let{setStepValid:s,setFinalFormData:t}=e;const[r,i]=(0,a.useState)(!0),[l,u]=(0,a.useState)(null),[h,p]=(0,a.useState)([]),[x,j]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(h.length>0){const e=h.every((e=>"application/pdf"===e.type));j(e?"":"Upload only PDF files");s(e);const a={certificate:e?h:""};t((e=>({...e,...a})))}else s(!1)}),[t,h,s]),(0,a.useEffect)((()=>{const e=c.questions.production;o.Z.get(e).then((e=>{const s=m().xml2json(e.data,{compact:!0,spaces:4}),t=JSON.parse(s);if(t&&t.questions&&t.questions.question){const e=t.questions.question;for(const s of e)if(s._attributes&&"certificates"===s._attributes.name){const e={_attributes:s._attributes,text:s.text?s.text._text:null,description:s.description?s.description._text:null};u(e);break}}else console.error("Invalid questions data structure");i(!1)})).catch((e=>{console.log("Error fetching question:",e)}))}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"summary step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"6/6"}),"Certificates"]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"6"}),(0,n.jsx)("div",{className:"form-group",children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)("br",{})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{children:"Upload your certificates"}),(0,n.jsx)("input",{type:l&&l._attributes.type,name:"certificate",required:l&&l._attributes.required,className:"form-control required ".concat(x?"is-invalid ":""),placeholder:l&&l.text,accept:".pdf",title:l&&l.description,multiple:!0,onChange:e=>{const s=e.target.files;p([...s])}}),x&&(0,n.jsx)("div",{className:"error-message invalid-feedback",children:x})]})})]})})]})})};var v=t(9434),y=t(4177);const _=function(e){let{setStepValid:s}=e;const t=(0,v.v9)((e=>e.formState.usersData)),r=(0,v.I0)();return(0,a.useEffect)((()=>{null===t&&r((0,y.uC)(1)),s(!0)}),[t,r,s]),(0,n.jsxs)("div",{className:"submit step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"6/6"})," Summary"]}),(0,n.jsx)("div",{className:"summary",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"1"}),(0,n.jsx)("h5",{children:"What is your full name?"}),t.full_name&&(0,n.jsx)("p",{children:t.full_name})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"2"}),(0,n.jsx)("h5",{children:"What is your email address"}),t.email_address&&(0,n.jsx)("p",{children:t.email_address})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"3"}),(0,n.jsx)("h5",{children:"Description"}),t.description&&(0,n.jsx)("p",{children:t.description})]})]})})]})};var N=t(9806),S=t(1632);const k=function(){const e=(0,v.v9)((e=>e.formState.usersData)),s=(0,v.I0)();return(0,a.useEffect)((()=>{null===e&&s((0,y.uC)(1))}),[e,s]),(0,n.jsxs)("div",{className:"submit step",children:[(0,n.jsxs)("h3",{className:"main_question",children:[(0,n.jsx)("strong",{children:"6/6"})," Summary"]}),(0,n.jsx)("div",{className:"summary",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"4"}),(0,n.jsx)("h5",{children:"Gender"}),e.gender&&(0,n.jsx)("p",{children:e.gender})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"5"}),(0,n.jsx)("h5",{children:"Programming stacks"}),e.programming_stack&&(0,n.jsx)("p",{children:e.programming_stack})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"6"}),(0,n.jsx)("h5",{children:"Certificates"}),e.certificate&&e.certificate.map(((e,s)=>(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:["".concat(s+1," : "),(0,n.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(N.G,{icon:S.gSj,style:{color:"#FF0000",marginLeft:"5px"}})," ",e.name]})]})},s)))]})]})})]})};var q=t(5238),F=t.n(q);const w=e=>{let{type:s,message:t}=e;const a={success:S.f8k,error:S.RLE,info:S.sqG},r={backgroundColor:"info"===s?"#d63384":"",color:"white",padding:"1rem",borderRadius:"0.25rem",display:"flex",alignItems:"center"};return(0,n.jsxs)("div",{style:r,children:[(0,n.jsx)(N.G,{icon:a[s],style:{marginRight:"0.5rem"}}),t]})};var C=t(3393);const E=function(){const e=(0,a.useRef)(null),[s,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),l=(0,v.v9)(y.me),[d,u]=(0,a.useState)(null),[m,N]=(0,a.useState)(!1),S=(0,v.v9)((e=>e.formState.usersData)),q=(0,v.I0)(),E=()=>{l.stepState<8&&(q((0,y.uC)(l.stepState+1)),q((0,y._Y)(l.percentage+16.6667)))},P=()=>{l.stepState>1&&(q((0,y.uC)(l.stepState-1)),q((0,y._Y)(l.percentage-16.6667)))};return(0,a.useEffect)((()=>{if(null!==d&&"object"===typeof d){7===Object.keys(d).length&&q((0,y.V_)(d))}}),[d,q]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{id:"wizard_container",children:[7!==l.stepState&&8!==l.stepState&&(0,n.jsx)("div",{id:"top-wizard",children:(0,n.jsx)("div",{id:"progressbar",className:"ui-progressbar ui-widget ui-widget-content ui-corner-all",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":l.percentage,children:(0,n.jsx)("div",{className:"ui-progressbar-value ui-widget-header ui-corner-left",style:{width:"".concat(l.percentage,"%")}})})}),(0,n.jsxs)("form",{id:"wrapped",encType:"multipart/form-data",onSubmit:e=>{e.preventDefault()},ref:e,children:[(0,n.jsxs)("div",{id:"middle-wizard",children:[1===l.stepState&&(0,n.jsx)(h,{setStepValid:N,setFinalFormData:u}),2===l.stepState&&(0,n.jsx)(p,{setStepValid:N,setFinalFormData:u}),3===l.stepState&&(0,n.jsx)(x,{setStepValid:N,setFinalFormData:u}),4===l.stepState&&(0,n.jsx)(f,{setStepValid:N,setFinalFormData:u}),5===l.stepState&&(0,n.jsx)(g,{setStepValid:N,setFinalFormData:u}),6===l.stepState&&(0,n.jsx)(b,{setStepValid:N,setFinalFormData:u}),7===l.stepState&&(0,n.jsx)(_,{setStepValid:N}),1!==l.stepState&&2!==l.stepState&&3!==l.stepState&&4!==l.stepState&&5!==l.stepState&&6!==l.stepState&&7!==l.stepState&&(0,n.jsx)(k,{})]}),(0,n.jsxs)("div",{id:"bottom-wizard",children:[1===l.stepState&&(0,n.jsx)("button",{type:"button",name:"forward",className:"forward",onClick:E,disabled:!m,children:"Next"}),l.stepState>1&&l.stepState<8&&(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)("button",{type:"button",name:"backward",className:"backward",onClick:P,children:"Prev"}),(0,n.jsx)("button",{type:"button",name:"forward",className:"forward",onClick:E,disabled:!m,children:7===l.stepState?"Next Page":"Next"})]}),8===l.stepState&&(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)("button",{type:"button",name:"backward",className:"backward",onClick:P,children:8===l.stepState?"Prev Page":"Prev"}),(0,n.jsx)(F(),{trigger:(0,n.jsx)("button",{type:"submit",name:"process",className:"submit",children:s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("i",{className:"fa fa-spinner-third fa-solid"}),"Submitting..."]}):"Submit"}),title:"Confirm submitting your survey data",text:(0,n.jsx)("div",{children:"Are you sure you want to submit data provided in the survey form?"}),confirmText:"Yes, I am sure",cancelText:"No",onConfirmClicked:()=>{if(S){const e=new FormData,s=c.responses.production;e.append("full_name",S.full_name),e.append("email_address",S.email_address),e.append("description",S.description),e.append("gender",S.gender),e.append("programming_stack",S.programming_stack),S.certificate.forEach(((s,t)=>{e.append("certificate",s)})),t(!0),o.Z.put(s,e,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{t(!1),200===e.status&&(j.ZP.success("Survey data submitted successfully"),i(!0),setTimeout((()=>{i(!1)}),5e3))})).catch((e=>{t(!1);const s=e.response.data.errors;void 0!==e.response.data.errors?Object.keys(s).forEach((e=>{const t=s[e],a=e.charAt(0).toUpperCase()+e.slice(1);Array.isArray(t)?t.forEach((e=>{j.ZP.error("".concat(a,": ").concat(e))})):j.ZP.error("".concat(a,": ").concat(t))})):j.ZP.error(e.response.data.message)}))}else q((0,y.uC)(1))},onCancelClicked:e=>{j.ZP.custom((e=>(0,n.jsx)(w,{type:"info",message:"You have cancelled the submission of your survey data."})))}})]})]})]})]}),(0,n.jsx)(j.x7,{}),r&&(0,n.jsx)(C.Z,{})]})};var P=t(3513);const Z=function(e){let{setData:s}=e;const t=(0,a.useRef)(null),r=(0,a.useRef)(null),[i,l]=(0,a.useState)(!1),[d,u]=(0,a.useState)({email_address:""}),[h,p]=(0,a.useState)({email_address:""}),x=()=>{r.current&&r.current.click()};return(0,a.useEffect)((()=>{t.current&&t.current.focus()}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"modal fade",id:"email-search-modal",tabIndex:"-1",role:"dialog","aria-labelledby":"serachLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h4",{className:"modal-title",id:"termsLabel",children:"Filter Responses By Email Address"}),(0,n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref:r})]}),(0,n.jsx)("div",{className:"modal-body",children:(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();if(Object.values(h).some((e=>e)))j.ZP.error(h.email_address);else{const e=c.responses.production+"?email_address="+d.email_address;l(!0),o.Z.get(e).then((e=>{const t=m().xml2json(e.data,{compact:!0,spaces:4}),a=JSON.parse(t);if(a&&a.question_responses&&a.question_responses.question_response){const e=a.question_responses.question_response;s([e]);const t=Array.isArray(e)?e.length:e?1:0;j.ZP.success("Found ".concat(t," record(s)")),x()}else console.error("Invalid question_responses data structure");l(!1)})).catch((()=>{l(!1),j.ZP.error("Error fetching qusetion")}))}},children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("div",{style:{float:"left",marginBottom:"5px"},children:"Email address"}),(0,n.jsx)("input",{ref:t,className:"form-control ".concat(h.email_address?"is-invalid ":""),type:"search",placeholder:"Input email address",title:"Input email address",name:"email_address",onChange:e=>{const{name:s,value:t}=e.target;let a="";"email_address"===s&&(t.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(a="Invalid email address"):a="Email address is required"),p((e=>({...e,[s]:a}))),u((e=>({...e,[s]:t})))}}),h.email_address&&(0,n.jsx)("div",{className:"invalid-feedback",children:h.email_address})]}),(0,n.jsx)("button",{type:"submit",name:"process",className:"submit",children:i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("i",{className:"fa fa-spinner-third fa-solid"}),"Seraching..."]}):"Search"})]})}),(0,n.jsx)("div",{className:"modal-footer",children:(0,n.jsx)("button",{type:"button",className:"btn_1","data-bs-dismiss":"modal",children:"Close"})})]})})}),(0,n.jsx)(j.x7,{})]})};const D=function(e){let{certificateId:s}=e;const[t,r]=(0,a.useState)([]),[i,d]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=c.certificates.production+"/"+s;d(!0),o.Z.get(e).then((e=>{d(!1),e.data.length>0?r(e.data):j.ZP.error("No data found in the response.")})).catch((()=>{d(!1),j.ZP.error("Error fetching qusetion")}))}),[s]);const h=[{name:"Id",selector:e=>e.id,sortable:!0,searchable:!0},{name:"Name",selector:e=>e.name,sortable:!0,searchable:!0},{name:"Download",cell:e=>(0,n.jsx)(F(),{trigger:(0,n.jsx)("button",{type:"submit",name:"process",className:"btn btn-primary btn-sm",children:u?"Downloading...":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.G,{icon:S.q7m})," Download"]})}),title:"Confirm downloading",text:(0,n.jsx)("div",{children:"Are you sure you want to download this file?"}),confirmText:"Yes, I am sure",cancelText:"No",onConfirmClicked:()=>p(e.id,e.name),onCancelClicked:x})}],p=(e,s)=>{const t=c.download.production+"/"+e;m(!0),o.Z.get(t).then((e=>{m(!1);const t=e.headers["content-type"];if(t&&t.toLowerCase().includes("application/pdf")){const a=new Blob([e.data],{type:t}),r=document.createElement("a");r.href=window.URL.createObjectURL(a),r.download="".concat(s,".pdf"),document.body.appendChild(r),r.click(),document.body.removeChild(r),j.ZP.custom((e=>(0,n.jsx)(w,{type:"info",message:"File is downloading."})))}else j.ZP.error("Invalid content type. Unable to download the file.")})).catch((()=>{m(!1),j.ZP.error("Error downloading certificate")}))},x=()=>{j.ZP.custom((e=>(0,n.jsx)(w,{type:"info",message:"You have cancelled download of the certificate"})))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"modal fade ",id:"myModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Download Certificates"}),(0,n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,n.jsx)("div",{className:"modal-body",children:i?(0,n.jsx)(l.aV,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(P.ZP,{columns:h,data:t,pagination:!0,paginationComponentOptions:{rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",selectAllRowsItem:!0,selectAllRowsItemText:"All"}})})})]})})}),(0,n.jsx)(j.x7,{})]})},I=()=>{const[e,s]=(0,a.useState)(!0),[t,i]=(0,a.useState)(null),d=(0,a.useRef)(null),[u,h]=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=c.responses.production;o.Z.get(e).then((e=>{const t=m().xml2json(e.data,{compact:!0,spaces:4}),a=JSON.parse(t);if(a&&a.question_responses&&a.question_responses.question_response){const e=a.question_responses.question_response;h(e)}else console.error("Invalid question_responses data structure");s(!1)})).catch((()=>{j.ZP.error("Error fetching qusetion")}))}),[]);const p=[{name:"Full Name",selector:e=>{var s;return null===(s=e.full_name)||void 0===s?void 0:s._text},sortable:!0,searchable:!0},{name:"Email Address",selector:e=>{var s;return null===(s=e.email_address)||void 0===s?void 0:s._text},sortable:!0,searchable:!0},{name:"Description",selector:e=>{var s;return null===(s=e.description)||void 0===s?void 0:s._text},sortable:!0},{name:"Gender",selector:e=>{var s;return null===(s=e.gender)||void 0===s?void 0:s._text},sortable:!0,searchable:!0},{name:"Programming Stacks",selector:e=>{var s;return null===(s=e.programming_stack)||void 0===s?void 0:s._text},sortable:!0},{name:"Certificates",selector:e=>{var s;const t=null===(s=e.certificates)||void 0===s?void 0:s.certificate;return t?Array.isArray(t)?t.map((e=>(0,n.jsxs)("span",{children:[e._text,(0,n.jsx)("br",{})]},e._attributes.id))):(0,n.jsxs)("span",{children:[t._text,(0,n.jsx)("br",{})]},t._attributes.id):""},sortable:!0},{name:"Date Responded",selector:e=>{var s;return null===(s=e.date_responded)||void 0===s?void 0:s._text},sortable:!0},{name:"Select",cell:e=>(0,n.jsxs)(r.rU,{to:"#","data-bs-toggle":"modal",onClick:()=>{var s,t;return x(null===(s=e.id)||void 0===s?void 0:s._text,null===(t=e.id)||void 0===t?void 0:t._text)},"data-bs-target":"#myModal",rel:"noreferrer",children:[(0,n.jsx)(N.G,{icon:S.gSj})," Certificates"]})}],x=e=>{i(e)};return(0,a.useEffect)((()=>{d.current&&d.current.focus()}),[]),(0,n.jsxs)(n.Fragment,{children:[e?(0,n.jsx)(l.aV,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.rU,{to:"#","data-bs-toggle":"modal","data-bs-target":"#email-search-modal",rel:"noreferrer",className:"float",title:"filter by email address",children:(0,n.jsx)(N.G,{className:"my-float",icon:S.wn1})}),(0,n.jsx)(Z,{setData:h}),(0,n.jsx)(P.ZP,{columns:p,data:u,pagination:!0,paginationComponentOptions:{rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",selectAllRowsItem:!0,selectAllRowsItemText:"All"}}),(0,n.jsx)(D,{certificateId:t}),")}"]}),(0,n.jsx)(j.x7,{})]})};const O=function(){const e=(0,v.I0)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"container-fluid full-height",children:(0,n.jsxs)("div",{className:"row row-height",children:[(0,n.jsx)("div",{className:"col-lg-6 content-left",children:(0,n.jsxs)("div",{className:"content-left-wrapper",children:[(0,n.jsx)(r.rU,{to:"/",id:"logo",rel:"noreferrer",children:(0,n.jsx)("img",{src:"/static/assets/img/logo.png",alt:"",width:"49",height:"35"})}),(0,n.jsx)("div",{id:"social",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://facebook.com",children:(0,n.jsx)("i",{className:"icon-facebook"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://twitter.com",children:(0,n.jsx)("i",{className:"icon-twitter"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://instagram.com",children:(0,n.jsx)("i",{className:"icon-instagram"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://linkedin.com",children:(0,n.jsx)("i",{className:"icon-linkedin"})})})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("figure",{children:(0,n.jsx)("img",{src:"static/assets/img/info_graphic_1.svg",alt:"",className:"img-fluid"})}),(0,n.jsx)("h2",{children:"OpinionHarbor Survey"}),(0,n.jsx)("p",{children:"Discover, Share, and Influence. Welcome to OpinionHarbor, where your opinions matter. Take part in surveys that impact industries, shape products, and influence change. Join a community of voices, express your thoughts, and help build a better tomorrow."}),(0,n.jsx)("button",{type:"button",className:"btn_1 rounded",target:"_parent",onClick:()=>{e((0,y.uC)(1)),e((0,y.V_)(null)),e((0,y._Y)(33.33))},children:"Start Your Survey"})]}),(0,n.jsxs)("div",{className:"copy",children:["\xa9 ",(new Date).getFullYear()," OpinionHarbor. All Rights Reserved"]})]})}),(0,n.jsx)("div",{className:"col-lg-6 content-right",id:"start",children:(0,n.jsxs)("div",{className:"tabs",children:[(0,n.jsxs)("div",{className:"tab-2",children:[(0,n.jsx)("label",{className:"label",htmlFor:"tab2-1",children:"Survey Form"}),(0,n.jsx)("input",{id:"tab2-1",name:"tabs-two",type:"radio",checked:"checked",onChange:()=>{}}),(0,n.jsx)("div",{children:(0,n.jsx)(E,{})})]}),(0,n.jsxs)("div",{className:"tab-2",children:[(0,n.jsx)("label",{className:"label",htmlFor:"tab2-2",children:"Survey Response"}),(0,n.jsx)("input",{id:"tab2-2",name:"tabs-two",type:"radio",onChange:()=>{}}),(0,n.jsx)("div",{children:(0,n.jsx)(I,{})})]})]})})]})})})}},2361:()=>{},4616:()=>{}}]);
//# sourceMappingURL=22.a04be0b3.chunk.js.map