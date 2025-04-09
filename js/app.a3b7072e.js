(function(){"use strict";var e={1516:function(e,t,a){var s=a(5130),l=a(6768),n=a(4232),o=a(144),r=a(782);a(8111),a(116);const i={class:"select-command"};var u=(0,l.pM)({__name:"selectCommandType",setup(e){const t=(0,r.Pj)(),a=(0,l.EW)((()=>t.state.selectedEvent)),s=(0,l.EW)((()=>0===a.value.existingTeam.length));(0,l.sV)((()=>{s.value&&(o.value=!1)}));const o=(0,l.EW)({get:()=>t.state.steps.stepsFields.isAlone,set:e=>{t.state.steps.stepsFields.isAlone=e,t.state.steps.stepsFields.isAlone?(t.state.steps.stepsFields.instructor=!1,t.state.steps.stepsFields.isAlone=!1,setTimeout((()=>{t.state.steps.stepsFields.isAlone=!0}),100)):t.state.steps.stepsFields.instructor=null,t.state.steps.stepsFields.selectedStages=[],t.state.steps.stepsFields.yachtType=null}});return(e,t)=>((0,l.uX)(),(0,l.CE)("div",i,[(0,l.Lk)("button",{class:(0,n.C4)(["big-btn",{_active:!1===o.value}]),onClick:t[0]||(t[0]=e=>o.value=!1)}," У меня команда ",2),s.value?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,n.C4)(["big-btn",{_active:!0===o.value}]),onClick:t[1]||(t[1]=e=>o.value=!0)}," Я один ",2))]))}}),c=a(1241);const d=(0,c.A)(u,[["__scopeId","data-v-4d50df9c"]]);var m=d;const p={class:"custom-radio"},v=["id","name","value","checked","aria-checked","disabled"],f=["for"],b={class:"radio-label"};var h=(0,l.pM)({__name:"radio-input",props:{modelValue:{},value:{},name:{},id:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,s=t,n=(0,l.EW)((()=>a.modelValue===a.value)),o=()=>{s("update:modelValue",a.value),s("updateValue",n)};return(e,t)=>((0,l.uX)(),(0,l.CE)("div",p,[(0,l.Lk)("input",{type:"radio",id:e.id,name:e.name,value:e.value,checked:n.value,onChange:o,"aria-checked":n.value,disabled:e.disabled,role:"radio"},null,40,v),(0,l.Lk)("label",{for:e.id},[t[0]||(t[0]=(0,l.Lk)("span",{class:"radio-button","aria-hidden":"true"},null,-1)),(0,l.Lk)("span",b,[(0,l.RG)(e.$slots,"default")])],8,f)]))}});const k=(0,c.A)(h,[["__scopeId","data-v-a97de530"]]);var _=k;const y={key:0,class:"select-yacht"},g={class:"select-yacht__row"},L={key:0,class:"select-yacht__row"};var E=(0,l.pM)({__name:"selectYachtType",setup(e){const t=(0,r.Pj)(),a=(0,l.EW)((()=>t.state.staffsPositions)),s=(0,o.KR)(null),i=(0,l.EW)((()=>t.state.steps.stepsFields)),u=(0,l.EW)((()=>t.state.selectedEvent)),c=(0,l.EW)((()=>Object.keys(u.value.newTeam)));function d(e){return c.value.includes(e.position)}const m=(0,l.EW)({get:()=>i.value.yachtType,set:e=>{i.value.yachtType=e,i.value.yachtType=null,setTimeout((()=>{i.value.yachtType=e}),100),t.state.steps.stepsFields.selectedStages=[],"Яхта в другом клубе"===e.btnText?t.state.steps.stepsFields.instructor=!1:t.state.steps.stepsFields.instructor=null}});return(0,l.wB)(s,(e=>{m.value=e?"":a.value[0]})),(e,t)=>a.value.length>0?((0,l.uX)(),(0,l.CE)("div",y,[(0,l.Lk)("div",g,[(0,l.bF)(_,{disabled:!d(a.value[0]),name:"yachtType1",id:"yachtType123",value:!1,onUpdateValue:t[0]||(t[0]=e=>s.value=!1)},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(a.value[0].btnText),1)])),_:1},8,["disabled"]),(0,l.bF)(_,{name:"yachtType1",id:"yachtTypee347",value:!0,modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),disabled:!d(a.value[1])&&!d(a.value[2])},{default:(0,l.k6)((()=>t[4]||(t[4]=[(0,l.eW)("Своя яхта")]))),_:1},8,["modelValue","disabled"])]),s.value?((0,l.uX)(),(0,l.CE)("div",L,[(0,l.bF)(_,{disabled:!d(a.value[1]),name:"yachtType2",id:"yachtType3465",value:a.value[1],modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e)},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(a.value[1].btnText),1)])),_:1},8,["disabled","value","modelValue"]),(0,l.bF)(_,{disabled:!d(a.value[2]),name:"yachtType2",id:"yachtType986",value:a.value[2],modelValue:m.value,"onUpdate:modelValue":t[3]||(t[3]=e=>m.value=e)},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)(a.value[2].btnText),1)])),_:1},8,["disabled","value","modelValue"])])):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0)}});const T=(0,c.A)(E,[["__scopeId","data-v-7fffa75e"]]);var F=T;a(4114);const C={class:"custom-checkbox"},V=["id","name","value","checked","disabled"],w=["for"],W={class:"checkbox-label"};var O=(0,l.pM)({__name:"check-input",props:{modelValue:Boolean,value:String,name:String,id:String,disabled:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,s=t,n=(0,l.EW)((()=>a.modelValue)),o=()=>{s("update:modelValue",!a.modelValue),s("updateValue",!a.modelValue)};return(t,a)=>((0,l.uX)(),(0,l.CE)("div",C,[(0,l.Lk)("input",{type:"checkbox",id:e.id,name:e.name,value:e.value,checked:n.value,onChange:o,disabled:e.disabled,role:"checkbox"},null,40,V),(0,l.Lk)("label",{for:e.id},[a[0]||(a[0]=(0,l.Lk)("span",{class:"checkbox-box","aria-hidden":"true"},null,-1)),(0,l.Lk)("span",W,[(0,l.RG)(t.$slots,"default")])],8,w)]))}});const x=(0,c.A)(O,[["__scopeId","data-v-1332ba53"]]);var A=x;function P(e){const t=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],a=new Date(e),s=a.getDate(),l=t[a.getMonth()];return`${s} ${l}`}a(7588);function N(e){let t=!0;return e.services.forEach((e=>{e.records_count===e.capacity&&(t=!1)})),t}const I={class:"select-command"},S={key:0},B={key:1,class:"_invalid-text"};var $=(0,l.pM)({__name:"selectStages",setup(e){const t=(0,r.Pj)(),a=(0,o.Kh)([!1,!1,!1,!1,!1,!1,!1]),s=(0,l.EW)((()=>t.state.selectedEvent)),i=(0,l.EW)((()=>t.state.steps.stepsFields)),u=(0,l.EW)((()=>i.value.isAlone)),c=(0,l.EW)((()=>i.value.yachtType));function d(e,t){if(e.name2){const a=/\/(.*?)\//;let s=1===t?e.name.match(a):e.name2.match(a);if(s)return s[1].trim()}if(v(e))return e.name;if(1===t){const t=e.name,a=P(e.services[0].date);return`${t} — ${a}`}if(2===t){const t=e.name2,a=P(e.services2[0].date);return`${t} — ${a}`}}const m=(0,l.EW)((()=>{let e;return e=u.value?s.value.existingTeam:s.value.newTeam[c.value.position],e.sort(((e,t)=>e.number-t.number))}));function p(e,a){if(v(a))return;console.log(e);const s=t.state.steps.stepsFields.selectedStages;if(e)s.push(a);else{const e=a.number,t=s.findIndex((t=>t.number===e));s.splice(t,1)}}function v(e){return 0===e.services.length}return(0,l.hi)((()=>{t.state.steps.stepsFields.selectedStages=[]})),(e,t)=>((0,l.uX)(),(0,l.CE)("div",I,[t[1]||(t[1]=(0,l.Lk)("h2",{class:"tit-h2"},"Отметьте этапы участия (можно несколько):",-1)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(m.value,((e,s)=>((0,l.uX)(),(0,l.Wv)(A,{value:!1,modelValue:a[s],"onUpdate:modelValue":e=>a[s]=e,id:`selectStage${e.number}`,key:e.number,onUpdateValue:t=>p(t,e),disabled:v(e),class:(0,n.C4)({"_invalid-text":!(0,o.R1)(N)(e)})},{default:(0,l.k6)((()=>[(0,l.Lk)("p",null,(0,n.v_)(d(e,1)),1),e.name2?((0,l.uX)(),(0,l.CE)("p",S,(0,n.v_)(d(e,2)),1)):(0,l.Q3)("",!0),(0,o.R1)(N)(e)?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("p",B,t[0]||(t[0]=[(0,l.eW)(" Мест нет, но мы можем добавить вас в "),(0,l.Lk)("span",{class:"fw-700"},"лист ожидания",-1)])))])),_:2},1032,["modelValue","onUpdate:modelValue","id","onUpdateValue","disabled","class"])))),128))]))}});const M=(0,c.A)($,[["__scopeId","data-v-09f0e0b1"]]);var X=M;const j={class:"select-instructor"},U={class:"select-instructor__row"},R={key:0};var D=(0,l.pM)({__name:"selectInstructor",setup(e){const t=(0,r.Pj)(),a=(0,o.KR)(null);return(0,l.wB)(a,(()=>{t.state.steps.stepsFields.instructor="on"===a.value})),(0,l.hi)((()=>{t.state.steps.stepsFields.instructor=null,t.state.steps.stepsFields.comment=""})),(e,n)=>((0,l.uX)(),(0,l.CE)("div",j,[(0,l.Lk)("div",U,[(0,l.bF)(_,{name:"selectInstructor",id:"selectInstructor1",value:"on",modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e)},{default:(0,l.k6)((()=>n[3]||(n[3]=[(0,l.eW)("С инструктором")]))),_:1},8,["modelValue"]),(0,l.bF)(_,{name:"selectInstructor",id:"selectInstructor2",value:"off",modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e)},{default:(0,l.k6)((()=>n[4]||(n[4]=[(0,l.eW)("Без инструктора")]))),_:1},8,["modelValue"])]),"on"===a.value?((0,l.uX)(),(0,l.CE)("div",R,[n[5]||(n[5]=(0,l.Lk)("label",{class:"label-title",for:"texarea47653"},"Комментарий:",-1)),(0,l.bo)((0,l.Lk)("textarea",{"onUpdate:modelValue":n[2]||(n[2]=e=>(0,o.R1)(t).state.steps.stepsFields.comment=e),placeholder:"Есть любимый инструктор? Укажите имя — постараемся его назначить",class:"default-textarea",id:"texarea47653"},null,512),[[s.Jo,(0,o.R1)(t).state.steps.stepsFields.comment]])])):(0,l.Q3)("",!0)]))}});const Q=(0,c.A)(D,[["__scopeId","data-v-587b352b"]]);var G=Q;a(1148);const z={class:"tit-h2"},q={class:"member-form__item"},K={class:"member-form__item"},H={key:0,class:"member-form__item"},J=["required"],Y={class:"member-form__item"},Z={class:"member-form__item"},ee={class:"member-form__item"},te={key:0,class:"error-message"},ae={class:"member-form__link"},se={class:"member-form__link"},le={key:0,class:"member-form__link member-form__left"},ne=["href"],oe={class:"member-form__link"},re={class:""},ie={class:"member-form__link"},ue=["disabled"];var ce=(0,l.pM)({__name:"memberDataForm",setup(e){const t=(0,r.Pj)(),a=(0,l.EW)((()=>t.state.steps.stepsFields)),i=(0,l.EW)((()=>t.state.steps.memberForm)),u=(0,l.EW)((()=>a.value.isAlone)),c=(0,l.EW)((()=>t.state.selectedEvent)),d=(0,o.Kh)({email:!0,phone:!0,teamName:!0,name:!0,lastName:!0,dateBorn:!0}),m=(0,o.Kh)({marketingConsent:!1,dataProcessingConsent:!1,competitionRulesConsent:!1,bookingAgreementConsent:!1}),p=(0,l.EW)((()=>Object.values(m).every(Boolean)));function v(e){switch(e){case"email":{const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;d.email=e.test(i.value.email);break}case"phone":d.phone=!!i.value.phone;break;case"teamName":d.teamName=u.value||!!i.value.teamName;break;case"name":d.name=i.value.name.length>=2;break;case"lastName":d.lastName=i.value.lastName.length>=2;break;case"dateBorn":{const e=new Date,t=new Date(i.value.dateBorn);let a=e.getFullYear()-t.getFullYear();const s=e.getMonth()-t.getMonth(),l=e.getDate()-t.getDate();(s<0||0===s&&l<0)&&a--,d.dateBorn=a>=18;break}}}function f(){v("email"),v("phone"),v("teamName"),v("name"),v("lastName"),v("dateBorn");const e=Object.values(d).every(Boolean);e&&p.value&&b()}function b(){console.log("Форма успешно валидирована и готова к отправке!"),t.dispatch("createOrders")}const h=(0,l.EW)((()=>t.state.documents.documentsForEvents)),k=(0,l.EW)((()=>h.value.find((e=>e.eventId===c.value.id)))),_=(0,l.EW)((()=>{let e="price_min";const s=t.state.steps.stepsFields.instructor;(u.value||"Яхта ZIGZAG"===a.value.yachtType.btnText)&&(e="price_max");let l=0;return a.value.selectedStages.forEach((t=>{N(t)&&(l+=t.services[0].service[e],s&&(l+=5e3),t.name2&&(l+=t.services2[0].service[e],s&&(l+=5e3)))})),l})),y=(0,l.EW)((()=>t.state.steps.createdOrdersLoading));return(e,a)=>((0,l.uX)(),(0,l.CE)("form",{class:"member-form",onSubmit:a[17]||(a[17]=(0,s.D$)((()=>{}),["prevent"]))},[(0,l.Lk)("fieldset",null,[(0,l.Lk)("legend",z,(0,n.v_)(u.value?"Данные участника:":"Данные капитана:"),1),(0,l.Lk)("div",q,[a[18]||(a[18]=(0,l.Lk)("label",{for:"email",class:"label-title"},"Email:",-1)),(0,l.bo)((0,l.Lk)("input",{type:"email",id:"email",class:(0,n.C4)(["default-input",{_invalid:!d.email}]),placeholder:"email","onUpdate:modelValue":a[0]||(a[0]=e=>i.value.email=e),required:"",onBlur:a[1]||(a[1]=e=>v("email"))},null,34),[[s.Jo,i.value.email]])]),(0,l.Lk)("div",K,[a[19]||(a[19]=(0,l.Lk)("label",{for:"phone",class:"label-title"},"Номер телефона:",-1)),(0,l.bo)((0,l.Lk)("input",{type:"tel",name:"phone",id:"phone",class:(0,n.C4)(["default-input",{_invalid:!d.phone}]),placeholder:"+7","onUpdate:modelValue":a[2]||(a[2]=e=>i.value.phone=e),required:"",onBlur:a[3]||(a[3]=e=>v("phone"))},null,34),[[s.Jo,i.value.phone,void 0,{number:!0}]])]),u.value?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",H,[a[20]||(a[20]=(0,l.Lk)("label",{for:"team-name",class:"label-title"},"Название команды:",-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",id:"team-name",class:(0,n.C4)(["default-input",{_invalid:!d.teamName}]),placeholder:"Название","onUpdate:modelValue":a[4]||(a[4]=e=>i.value.teamName=e),required:!u.value,onBlur:a[5]||(a[5]=e=>v("teamName"))},null,42,J),[[s.Jo,i.value.teamName]])])),(0,l.Lk)("div",Y,[a[21]||(a[21]=(0,l.Lk)("label",{for:"first-name",class:"label-title"},"Имя:",-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",id:"first-name",class:(0,n.C4)(["default-input",{_invalid:!d.name}]),placeholder:"Имя","onUpdate:modelValue":a[6]||(a[6]=e=>i.value.name=e),required:"",onBlur:a[7]||(a[7]=e=>v("name"))},null,34),[[s.Jo,i.value.name]])]),(0,l.Lk)("div",Z,[a[22]||(a[22]=(0,l.Lk)("label",{for:"last-name",class:"label-title"},"Фамилия:",-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",id:"last-name",class:(0,n.C4)(["default-input",{_invalid:!d.lastName}]),placeholder:"Фамилия капитана","onUpdate:modelValue":a[8]||(a[8]=e=>i.value.lastName=e),required:"",onBlur:a[9]||(a[9]=e=>v("lastName"))},null,34),[[s.Jo,i.value.lastName]])]),(0,l.Lk)("div",ee,[a[23]||(a[23]=(0,l.Lk)("label",{for:"birth-date",class:"label-title"},"Дата рождения:",-1)),(0,l.bo)((0,l.Lk)("input",{type:"date",id:"birth-date",class:(0,n.C4)(["default-input",{_invalid:!d.dateBorn}]),"onUpdate:modelValue":a[10]||(a[10]=e=>i.value.dateBorn=e),required:"",onBlur:a[11]||(a[11]=e=>v("dateBorn"))},null,34),[[s.Jo,i.value.dateBorn]]),d.dateBorn?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("span",te,"Вам должно быть не менее 18 лет."))])]),(0,l.Lk)("fieldset",null,[(0,l.Lk)("div",ae,[(0,l.bF)(A,{modelValue:m.marketingConsent,"onUpdate:modelValue":a[12]||(a[12]=e=>m.marketingConsent=e),id:"checgdkId3",name:"n65game34"},null,8,["modelValue"]),a[24]||(a[24]=(0,l.Lk)("p",{class:"default-link"}," Я даю согласие на отправку информационно-рекламной рассылки организации ИНН 7813635955 ",-1))]),(0,l.Lk)("div",se,[(0,l.bF)(A,{modelValue:m.dataProcessingConsent,"onUpdate:modelValue":a[13]||(a[13]=e=>m.dataProcessingConsent=e),id:"cheddcckId3",name:"nadxvme34"},null,8,["modelValue"]),(0,l.Lk)("div",{class:"default-link",onClick:a[14]||(a[14]=e=>(0,o.R1)(t).state.documents.showPrivacyPolicy=!0)}," Я предоставляю согласие на обработку своих персональных данных организации ИНН 7813635955 ")]),k.value?.link?((0,l.uX)(),(0,l.CE)("div",le,[(0,l.bF)(A,{modelValue:m.competitionRulesConsent,"onUpdate:modelValue":a[15]||(a[15]=e=>m.competitionRulesConsent=e),id:"checkId343",name:"name4"},null,8,["modelValue"]),(0,l.Lk)("a",{href:k.value.link,target:"_blank",class:"default-link"},"Ознакомлен с Положением о соревнованиях",8,ne)])):(0,l.Q3)("",!0),(0,l.Lk)("div",oe,[(0,l.bF)(A,{modelValue:e.checkValue,disabled:!1,class:"hide-element"},null,8,["modelValue"]),(0,l.Lk)("div",re,[a[27]||(a[27]=(0,l.Lk)("span",{class:"default-link"},"Бронь считается подтвержденной только после заполнения формы регистрации и предоплаты 50% за каждый этап. К сожалению, если отмена происходит позже чем за 5 дней до этапа, предоплата не возвращается.",-1)),(0,l.Lk)("div",null,[a[25]||(a[25]=(0,l.Lk)("br",null,null,-1)),(0,l.eW)(" Общая стоимость: "+(0,n.v_)(_.value.toLocaleString())+" ₽ ",1),a[26]||(a[26]=(0,l.Lk)("br",null,null,-1)),(0,l.eW)(" Цена бронирования: "+(0,n.v_)((_.value/2).toLocaleString())+" ₽ ",1)])])]),(0,l.Lk)("div",ie,[(0,l.bF)(A,{modelValue:m.bookingAgreementConsent,"onUpdate:modelValue":a[16]||(a[16]=e=>m.bookingAgreementConsent=e),value:!1,id:"checkId3",name:"name34"},null,8,["modelValue"]),a[28]||(a[28]=(0,l.Lk)("a",{href:"",class:"default-link"},"Принимаю условия соглашения и бронирования",-1))])]),(0,l.Lk)("button",{class:"big-btn _active w-100",onClick:f,disabled:!p.value||y.value}," Регистрация ",8,ue)],32))}});const de=(0,c.A)(ce,[["__scopeId","data-v-5e536d25"]]);var me=de,pe=a(1387);const ve={key:0,class:"event-selection"},fe={class:"event-selection__container"};var be=(0,l.pM)({__name:"eventSelection",setup(e){const t=(0,r.Pj)(),a=((0,l.EW)((()=>t.state.groups)),(0,l.EW)((()=>t.state.parsedEvents))),n=(0,pe.lq)(),i=(0,l.EW)((()=>+n.query.eventId)),u=(0,l.EW)((()=>{if(a.value){const e=a.value.find((e=>e.id===i.value));return t.commit("setSelectedEvent",e),e}return null})),c=(0,l.EW)((()=>d.value.isAlone)),d=((0,o.KR)(0),(0,l.EW)((()=>t.state.steps.stepsFields))),p=(0,l.EW)((()=>!1===d.value.isAlone)),v=(0,l.EW)((()=>!0===d.value.isAlone||!!d.value.yachtType?.id)),f=(0,l.EW)((()=>d.value.selectedStages?.length>0&&!c.value&&"Яхта в другом клубе"!==d.value.yachtType?.btnText)),b=(0,l.EW)((()=>d.value.selectedStages?.length>0&&"boolean"===typeof d.value.instructor));return(e,t)=>u.value?((0,l.uX)(),(0,l.CE)("div",ve,[(0,l.bF)(m,{class:"event-selection__step"}),(0,l.Lk)("div",fe,[(0,l.bF)(s.eB,{name:"fade"},{default:(0,l.k6)((()=>[p.value?((0,l.uX)(),(0,l.Wv)(F,{key:0,class:"event-selection__step"})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(s.eB,{name:"fade"},{default:(0,l.k6)((()=>[v.value?((0,l.uX)(),(0,l.Wv)(X,{key:0,class:"event-selection__step"})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(s.eB,{name:"fade"},{default:(0,l.k6)((()=>[f.value?((0,l.uX)(),(0,l.Wv)(G,{key:0,class:"event-selection__step"})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(s.eB,{name:"fade"},{default:(0,l.k6)((()=>[b.value?((0,l.uX)(),(0,l.Wv)(me,{key:0,class:"event-selection__step"})):(0,l.Q3)("",!0)])),_:1})])])):(0,l.Q3)("",!0)}});const he=(0,c.A)(be,[["__scopeId","data-v-37ddb7fd"]]);var ke=he;const _e={class:"final-success"},ye={class:"row-table"},ge={class:"row-table"},Le={class:"row-table"},Ee={class:"row-table"},Te={class:"row-table"},Fe=["innerHTML"],Ce={class:"row-table"},Ve={key:0,class:"row-table"},we={class:"row-table"},We={class:"row-table"},Oe={class:"row-table"};var xe=(0,l.pM)({__name:"finalSuccess",setup(e){const t=(0,r.Pj)(),a=(0,l.EW)((()=>t.state.steps.stepsFields)),s=((0,l.EW)((()=>t.state.steps.memberForm)),(0,l.EW)((()=>t.state.steps.dealData))),o=(0,l.EW)((()=>{let e=s.value.stages;return e.replace(/,/g,"<br>")}));return(e,t)=>((0,l.uX)(),(0,l.CE)("div",_e,[t[10]||(t[10]=(0,l.Lk)("h2",{class:"tit-h2"},"Поздравляем, вы успешно зарегистрировались",-1)),t[11]||(t[11]=(0,l.Lk)("br",null,null,-1)),t[12]||(t[12]=(0,l.Lk)("div",{class:"label-title"},"Данные:",-1)),(0,l.Lk)("p",ye,[t[0]||(t[0]=(0,l.Lk)("span",null,"Событие:",-1)),(0,l.Lk)("span",null,(0,n.v_)(s.value.dealName),1)]),(0,l.Lk)("p",ge,[t[1]||(t[1]=(0,l.Lk)("span",null,"Тип регистрации:",-1)),(0,l.Lk)("span",null,(0,n.v_)(a.value.isAlone?"В сборный экипаж":"Своя команда"),1)]),(0,l.Lk)("p",Le,[t[2]||(t[2]=(0,l.Lk)("span",null,"Тип яхты:",-1)),(0,l.Lk)("span",null,(0,n.v_)(a.value.yachtType?a.value.yachtType.btnText:"Нет"),1)]),(0,l.Lk)("div",Ee,[t[3]||(t[3]=(0,l.Lk)("span",null,"Интструктор:",-1)),(0,l.Lk)("span",null,(0,n.v_)(s.value.isNeedInstructor),1)]),(0,l.Lk)("div",Te,[t[4]||(t[4]=(0,l.Lk)("span",null,"Этапы:",-1)),(0,l.Lk)("span",{innerHTML:o.value},null,8,Fe)]),(0,l.Lk)("p",Ce,[t[5]||(t[5]=(0,l.Lk)("span",null,"Номер телефона:",-1)),(0,l.Lk)("span",null,"+"+(0,n.v_)(s.value.phoneNumber),1)]),"нет"!==s.value.nameOfTeam?((0,l.uX)(),(0,l.CE)("p",Ve,[t[6]||(t[6]=(0,l.Lk)("span",null,"Название команды:",-1)),(0,l.Lk)("span",null,(0,n.v_)(s.value.nameOfTeam),1)])):(0,l.Q3)("",!0),(0,l.Lk)("p",we,[t[7]||(t[7]=(0,l.Lk)("span",null,"Имя:",-1)),(0,l.Lk)("span",null,(0,n.v_)(s.value.name),1)]),(0,l.Lk)("p",We,[t[8]||(t[8]=(0,l.Lk)("span",null,"Фамилия:",-1)),(0,l.Lk)("span",null,(0,n.v_)(s.value.lastName),1)]),(0,l.Lk)("p",Oe,[t[9]||(t[9]=(0,l.Lk)("span",null,"Дата рождения:",-1)),(0,l.Lk)("span",null,(0,n.v_)(s.value.dateOfBorn),1)])]))}});const Ae=xe;var Pe=Ae;const Ne={class:"final-modal"};var Ie=(0,l.pM)({__name:"finalModal",setup(e){(0,r.Pj)();return(e,t)=>((0,l.uX)(),(0,l.CE)("div",Ne,[(0,l.bF)(Pe)]))}});const Se=Ie;var Be=Se;const $e={key:0,class:"privacy-policy"},Me={class:"privacy-policy__inner"},Xe=["innerHTML"],je=["innerHTML"];var Ue=(0,l.pM)({__name:"privacyPolicy",setup(e){const t=(0,r.Pj)(),a=(0,l.EW)((()=>t.state.documents.privacyPolicy)),s=()=>{t.state.documents.showPrivacyPolicy=!1};return(e,t)=>a.value?((0,l.uX)(),(0,l.CE)("div",$e,[(0,l.Lk)("div",Me,[(0,l.Lk)("button",{class:"close-button",onClick:s},"×"),(0,l.Lk)("h2",{class:"tit-h3",innerHTML:a.value.attributes.legal_entity_name},null,8,Xe),(0,l.Lk)("p",null,"ИНН "+(0,n.v_)(a.value.id),1),(0,l.Lk)("div",{class:"privacy-policy__content",innerHTML:a.value.attributes.privacy_agreement_content},null,8,je)])])):(0,l.Q3)("",!0)}});const Re=(0,c.A)(Ue,[["__scopeId","data-v-fcf3712c"]]);var De=Re;const Qe={class:"loader"},Ge={class:"content"};var ze=(0,l.pM)({__name:"App",setup(e){const t=(0,r.Pj)(),a=(0,l.EW)((()=>t.state.mainLoader)),i=(0,l.EW)((()=>t.state.documents.showPrivacyPolicy));(0,o.KR)(!1),(0,o.KR)(!1);return(0,l.sV)((()=>{t.dispatch("getPrivacyPolicy"),t.dispatch("getAllGroups");const e=new ResizeObserver((e=>{for(let t of e)if(t.target===document.body){const e=t.contentRect.height;parent.postMessage({type:"setHeight",height:e},"*"),console.log(e)}}));e.observe(document.body)})),(e,r)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bo)((0,l.Lk)("div",{class:(0,n.C4)(["container",{"main-loading":a.value}])},[(0,l.bo)((0,l.Lk)("div",Qe,null,512),[[s.aG,a.value]]),(0,l.Lk)("div",Ge,[(0,l.bo)((0,l.bF)(ke,null,null,512),[[s.aG,!(0,o.R1)(t).state.steps.allOrdersCreated]]),(0,o.R1)(t).state.steps.allOrdersCreated?((0,l.uX)(),(0,l.Wv)(Be,{key:0})):(0,l.Q3)("",!0)])],2),[[s.aG,!i.value]]),(0,l.bo)((0,l.bF)(De,null,null,512),[[s.aG,i.value]])],64))}});const qe=ze;var Ke=qe;const He=[],Je=(0,pe.aE)({history:(0,pe.LA)("/zagaig/"),routes:He});var Ye=Je,Ze=a(4373);a(1701),a(3579),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698);function et(e){const t={};e.forEach((e=>{const a=tt(e.service.category.title);if(a){const{categoryId:s,name:l,type:n}=a;t[s]||(t[s]={id:s,name:l,newTeam:{},existingTeam:[]});const o=at(e.service.title);if(o){const{stageNumber:a,stageName:l}=o,r=e.staff.position.title;n.toLowerCase().includes("у меня команда")&&(t[s].newTeam[r]||(t[s].newTeam[r]=[]),st(t[s].newTeam[r],a,l,e)),n.toLowerCase().includes("я один")&&st(t[s].existingTeam,a,l,e)}}})),Object.values(t).forEach((e=>{["newTeam","existingTeam"].forEach((t=>{const a=e[t];"newTeam"===t?Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)&&lt(t)})):lt(a)}))}));const a=Object.values(t),s=nt(e);return{parsedEvents:a,staffsPositions:s}}function tt(e){const t=e.match(/^\[(\d+)\] (.+) \/ (.+)$/);if(t){const[,e,a,s]=t;return{categoryId:parseInt(e,10),name:a,type:s}}return null}function at(e){const t=e.match(/^(\d+)/);return t?{stageNumber:parseInt(t[1],10),stageName:e}:null}function st(e,t,a,s){let l=e.find((e=>e.number===t));l||(l={number:t,name:a,name2:null,services:[],services2:[]},e.push(l));const n=a.match(/ДЕНЬ (\d+)$/);n&&"2"===n[1]?(l.name2=a,l.services2.push(s)):l.services.push(s)}function lt(e){for(let t=1;t<=4;t++)e.some((e=>e.number===t))||e.push({number:t,name:`${t} ЭТАП (Прошел)`,name2:null,services:[],services2:[]})}function nt(e){const t=e.map((e=>e.staff.position.title));return Array.from(new Set(t)).map((e=>{const t=e.match(/\(([^)]+)\)/),a=t?t[1]:"",s=Math.floor(1e6*Math.random());return{position:e,btnText:a,id:s}}))}var ot=et;function rt(e){let t="";return e.forEach((e=>{t+=`${e.name}(${P(e.services[0].date)}), `,e.name2&&(t+=`${e.name2}(${P(e.services2[0].date)}), `)})),t}function it(e){let t=0;return e.forEach((e=>{t+=e.services[0].service.price_max,e.name2&&(t+=e.services2[0].service.price_max)})),t}function ut(e){let t="";return e.forEach((e=>{t+=`${e.name}(${e.services[0].service.price_max.toLocaleString()}₽), `,e.name2&&(t+=`${e.name2}(${e.services2[0].service.price_max.toLocaleString()}₽), `)})),t}function ct(e){const[t,a,s]=e.split("-");return`${s}.${a}.${t}`}var dt={state:{allOrdersCreated:!1,createdOrdersLoading:!1,stepsFields:{isAlone:null,yachtType:null,selectedStages:[],instructor:null,comment:""},memberForm:{email:"",phone:"",teamName:"",name:"",lastName:"",dateBorn:""},orderData:{comment:"",email:"",fullname:"",surname:"",phone:"",clients_count:1,is_charge_required_priority:!0,is_newsletter_allowed:!0,is_personal_data_processing_allowed:!0,is_support_charge:!0},dealData:{dealName:"",typeOfReg:"",typeOfYacht:"",stages:"",isNeedInstructor:"",price:"",priceList:"",email:"",phoneNumber:"",nameOfTeam:"",name:"",lastName:"",dateOfBorn:""}},getters:{},mutations:{fillOrderData(e){const t=e.memberForm,a=e.stepsFields,s=a.instructor?`Инструктор нужен, комментарий: ${a.comment}`:"Инструктор не нужен";e.orderData={comment:s,email:t.email,fullname:t.name,surname:t.lastName,phone:t.phone,is_personal_data_processing_allowed:!0,clients_count:1,is_charge_required_priority:!0,is_newsletter_allowed:!0,is_support_charge:!0}},fillDealData(e,t){const a=e.memberForm,s=e.stepsFields,l=s.instructor?`Инструктор нужен, комментарий: ${s.comment}`:"Инструктор не нужен";e.dealData={dealName:t.selectedEvent.name,typeOfReg:s.isAlone?"Я один":"У меня команда",typeOfYacht:s.yachtType?.position||"нет",stages:rt(s.selectedStages),isNeedInstructor:l,price:it(s.selectedStages),priceList:ut(s.selectedStages),email:a.email,phoneNumber:a.phone,nameOfTeam:a.teamName?a.teamName:"Нет",name:a.name,lastName:a.lastName,dateOfBorn:ct(a.dateBorn)}}},actions:{createOrders(e){e.state.createdOrdersLoading=!0;const t=e.state.stepsFields.selectedStages;e.state.stepsFields.selectedStages.sort(((e,t)=>e.number-t.number)),e.commit("fillOrderData"),e.commit("fillDealData",e.rootState),e.dispatch("getAllGroups",null,{root:!0}).then((()=>{const a=[];t.forEach((e=>{const t=e.services.find((e=>e.records_count<e.capacity)),s=e.services2.find((e=>e.records_count<e.capacity));t&&a.push(t.id),s&&a.push(s.id)})),console.log(a);const s=a.map(((t,a)=>new Promise((s=>{setTimeout((()=>{e.dispatch("createOrder",t),s()}),200*a)}))));Promise.all(s).finally((()=>{console.log("Все заказы созданы"),e.state.allOrdersCreated=!0,e.state.createdOrdersLoading=!1}))}))},async createOrder(e,t){return await(0,Ze.A)({url:`https://api.yclients.com/api/v1/activity/${e.rootState.salonId}/${t}/book`,method:"POST",data:e.state.orderData,headers:{Authorization:e.rootState.auth}})}}},mt={state:{privacyPolicy:null,showPrivacyPolicy:!1,documentsForEvents:[{eventId:1,link:"https://b24-flpzny.bitrix24.ru/~HszE4"},{eventId:2,link:"https://b24-flpzny.bitrix24.ru/~GUB1M"},{eventId:3,link:"https://b24-flpzny.bitrix24.ru/~pSs7j"},{eventId:4,link:""},{eventId:5,link:"https://b24-flpzny.bitrix24.ru/~IG0bc"}]},getters:{},mutations:{},actions:{async getPrivacyPolicy(e){return await(0,Ze.A)({method:"get",url:"https://api.yclients.com/api/v1/booking/locations/1268324/privacy_policy",headers:{Authorization:e.rootState.auth}}).then((t=>{e.state.privacyPolicy=t.data.data}))}}},pt=(0,r.y$)({state:{version:"1.0",auth:"Bearer gtcwf654agufy25gsadh",salonId:1268324,mainLoader:!0,groups:[],parsedEvents:null,staffsPositions:[],selectedEvent:null},getters:{},mutations:{parseGroupsArray(e,t){e.groups=t;const{parsedEvents:a,staffsPositions:s}=ot(t);e.parsedEvents=a,e.staffsPositions=s,e.mainLoader=!1},setSelectedEvent(e,t){e.selectedEvent=t}},actions:{async getAllGroups(e){return await(0,Ze.A)({method:"GET",url:`https://api.yclients.com/api/v1/activity/${e.state.salonId}/search?count=1000&from=2025-02-31&till=9999-01-01`,headers:{Authorization:e.state.auth}}).then((t=>{e.commit("parseGroupsArray",t.data.data)}))}},modules:{steps:dt,documents:mt}});(0,s.Ef)(Ke).use(pt).use(Ye).mount("#app")}},t={};function a(s){var l=t[s];if(void 0!==l)return l.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,l,n){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],l=e[c][1],n=e[c][2];for(var r=!0,i=0;i<s.length;i++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(r=!1,n<o&&(o=n));if(r){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,l,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var l,n,o=s[0],r=s[1],i=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(i)var c=i(a)}for(t&&t(s);u<o.length;u++)n=o[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},s=self["webpackChunkzigzag"]=self["webpackChunkzigzag"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(1516)}));s=a.O(s)})();
//# sourceMappingURL=app.a3b7072e.js.map