import{a as K,e as U,w as N,v as f,f as _,d as v,g as A,u as V,i as W,j as G,h as b,F as H,B as m,C as $,I as c,D as y,E as a,G as x,H as o,a0 as B,T as i,V as Q,X as j,P as D,Q as X,a1 as Z,m as L,a2 as Y,Z as I,a3 as ee,a4 as F,a5 as q,$ as te}from"./index-04cf60af.js";import{u as z}from"./useRequest-4a6f3b67.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{a as O,N as oe}from"./FormItem-960404fe.js";import{N as M}from"./Input-d7ad98e8.js";import{N as P}from"./Icon-b6ee2b01.js";import{N as E}from"./Spin-da978b45.js";import{N as se,b as ne}from"./LayoutContent-bab11fa4.js";import{N as T}from"./GradientText-869ca789.js";import"./get-a19d687e.js";const ie=e=>{const{textColor1:s,dividerColor:n,fontWeightStrong:l}=e;return{textColor:s,color:n,fontWeight:l}},ae={name:"Divider",common:K,self:ie},re=ae,le=U("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[N("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[N("no-title",`
 display: flex;
 align-items: center;
 `)]),f("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),_("title-position-left",[f("line",[_("left",{width:"28px"})])]),_("title-position-right",[f("line",[_("right",{width:"28px"})])]),_("dashed",[f("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),_("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),f("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),N("dashed",[f("line",{backgroundColor:"var(--n-color)"})]),_("dashed",[f("line",{borderColor:"var(--n-color)"})]),_("vertical",{backgroundColor:"var(--n-color)"})]),de=Object.assign(Object.assign({},V.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),ce=v({name:"Divider",props:de,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=A(e),l=V("Divider","-divider",le,re,e,s),u=W(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:g,textColor:C,fontWeight:w}}=l.value;return{"--n-bezier":t,"--n-color":g,"--n-text-color":C,"--n-font-weight":w}}),r=n?G("divider",void 0,u,e):void 0;return{mergedClsPrefix:s,cssVars:n?void 0:u,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$slots:s,titlePlacement:n,vertical:l,dashed:u,cssVars:r,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),b("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:l,[`${t}-divider--no-title`]:!s.default,[`${t}-divider--dashed`]:u,[`${t}-divider--title-position-${n}`]:s.default&&n}],style:r},l?null:b("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!l&&s.default?b(H,null,b("div",{class:`${t}-divider__title`},this.$slots),b("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},_e=c("path",{d:"M608 112c-167.9 0-304 136.1-304 304c0 70.3 23.9 135 63.9 186.5l-41.1 41.1l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-44.9 44.9l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-65.3 65.3a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 0 0 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8c-43.1-43-66.8-100.3-66.8-161.2c0-60.9 23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8c60.9 0 118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2c0 60.9-23.7 118.2-66.8 161.2z",fill:"currentColor"},null,-1),me=[_e],pe=v({name:"KeyOutlined",render:function(s,n){return m(),$("svg",ue,me)}}),fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ve=c("path",{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",fill:"currentColor"},null,-1),ge=[ve],he=v({name:"UserOutlined",render:function(s,n){return m(),$("svg",fe,ge)}}),be={"mt-4":""},xe={flex:"","justify-center":"",class:"box"},we=v({__name:"SsoLogin",props:{provideList:null,loginInitData:null},setup(e){const{query:s}=D();D(),X();function n(){window.open(`/api/v1/jobor/oidc/redirect?next=${s.redirect}`,"_self")}return(l,u)=>{var r;return m(),$("div",be,[(r=e.loginInitData)!=null&&r.local_auth?(m(),y(o(ce),{key:0},{default:a(()=>[x(" 或 ")]),_:1})):B("",!0),c("div",xe,[i(o(j),{"mt-6":"",block:"",type:"primary",onClick:u[0]||(u[0]=t=>n())},{default:a(()=>{var t;return[x(Q(((t=e.loginInitData)==null?void 0:t.sso_tip)??"通过SSO登录"),1)]}),_:1})])])}}});const ye=R(we,[["__scopeId","data-v-eb7b51ee"]]),$e=e=>(F("data-v-bc6866bd"),e=e(),q(),e),Ce={class:"form-container"},Se=$e(()=>c("div",{class:"form-header"},[c("div",{class:"title"}," Jobor 定时任务 "),c("div",{class:"desc"})],-1)),ke=v({__name:"LoginForm",setup(e){const{query:s}=D();Z();const{data:n}=z(()=>I.toLoginInit(s),{auto:!0}),{loading:l,data:u}=z(()=>I.toLogin({}),{auto:!1}),r=L(null),t=L({}),g=L(!1),C={username:{required:!0,message:"请输入用户名",trigger:"blur"},password:{required:!0,message:"请输入密码",trigger:"blur"},mfa_code:{required:!0,message:"请输入OTP认证",trigger:"blur"}};function w(){var S;(S=r.value)==null||S.validate(async d=>{if(d)return;const h={...s,...t.value};ee(JSON.stringify(h)),g.value=!0;const{data:k,run:p}=z(()=>I.toLogin(h),{auto:!1});await p(),g.value=!1;const J=s.redirect??"/";window.open(J,"_self")})}return(S,d)=>(m(),$("div",Ce,[Se,i(o(E),{show:o(l)},{default:a(()=>{var h,k;return[(h=o(n))!=null&&h.local_auth?(m(),y(o(oe),{key:0,ref_key:"formRef",ref:r,model:t.value,rules:C},{default:a(()=>[i(o(O),{path:"username","show-label":!1},{default:a(()=>[i(o(M),{value:t.value.username,"onUpdate:value":d[0]||(d[0]=p=>t.value.username=p),placeholder:"输入用户名"},{prefix:a(()=>[i(o(P),{component:o(he)},null,8,["component"])]),_:1},8,["value"])]),_:1}),i(o(O),{path:"password","show-label":!1},{default:a(()=>[i(o(M),{value:t.value.password,"onUpdate:value":d[1]||(d[1]=p=>t.value.password=p),type:"password","show-password-on":"click",placeholder:"输入密码",onKeydown:d[2]||(d[2]=Y(p=>w(),["enter"]))},{prefix:a(()=>[i(o(P),{component:o(pe)},null,8,["component"])]),_:1},8,["value"])]),_:1}),i(o(j),{"mt-6":"",block:"",type:"primary",loading:g.value,onClick:d[3]||(d[3]=p=>w())},{default:a(()=>[x(" 登录 ")]),_:1},8,["loading"])]),_:1},8,["model"])):B("",!0),(k=o(n))!=null&&k.sso_auth?(m(),y(ye,{key:1,"login-init-data":o(n)},null,8,["login-init-data"])):B("",!0)]}),_:1},8,["show"])]))}});const Ne=R(ke,[["__scopeId","data-v-bc6866bd"]]),Le=e=>(F("data-v-107a1a2f"),e=e(),q(),e),Ie={class:"container-box",flex:"","h-full":""},ze={class:"banner",relative:"","items-center":"","justify-center":""},Be=Le(()=>c("div",{class:"banner-desc"}," 我们将始终为您提供安全可靠的分布式定时任务 ",-1)),De={class:"content",relative:"","flex-1":"",flex:"","justify-center":"","items-center":""},Re=v({__name:"LoginMain",setup(e){return(s,n)=>{const l=te("selector");return m(),y(o(E),{"h-100vh":"",show:!1},{default:a(()=>[i(o(ne),{position:"absolute"},{default:a(()=>[i(o(se),{position:"absolute"},{default:a(()=>[c("div",Ie,[c("div",ze,[i(o(T),{class:"logo-img",gradient:{deg:90,from:"rgb(255,255,255)",to:"#9bbcff"}},{default:a(()=>[x(" Jobor ")]),_:1},8,["gradient"]),i(l,{class:"banner-inner",absolute:""},{default:a(()=>[Be]),_:1})]),c("div",De,[i(o(T),{class:"logo-img",style:{"font-size":"32px"},gradient:{deg:90,from:"#4372d2",to:"rgb(163,184,225)"}},{default:a(()=>[x(" Jobor ")]),_:1},8,["gradient"]),i(Ne)])])]),_:1})]),_:1})]),_:1})}}});const Ke=R(Re,[["__scopeId","data-v-107a1a2f"]]);export{Ke as default};