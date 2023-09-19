import{d as j,h as u,c as Me,a as Se,af as Te,ae as Ce,t as De,e as Y,g as Fe,u as le,ah as Pe,ak as ke,m as B,z as Ae,A as Oe,n as g,S as Ue,aG as _e,i as $e,a9 as Ee,aY as q,bj as J,bk as He,aH as Q,N as Z,bl as ee,B as w,az as Le}from "./index-a4639770.js";const je=j({name:"Add",render(){return u("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ze=j({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Ge=n=>{const{textColorDisabled:i}=n;return{iconColorDisabled:i}},Ke=Me({name:"InputNumber",common:Se,peers:{Button:Te,Input:Ce},self:Ge}),We=Ke;function Xe(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function Ye(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function H(n){return n==null?!0:!Number.isNaN(n)}function ne(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function L(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const qe=De([Y("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),Y("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),te=800,re=100,Je=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Ze=j({name:"InputNumber",props:Je,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:C}=Fe(n),a=le("InputNumber","-input-number",qe,We,n,p),{localeRef:h}=Pe("InputNumber"),R=ke(n),{mergedSizeRef:ie,mergedDisabledRef:ue,mergedStatusRef:ae}=R,c=B(null),z=B(null),G=B(null),D=B(n.defaultValue),oe=Ae(n,"value"),d=Oe(oe,D),v=B(""),F=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:F(r));return Math.max(...t)},de=g(()=>{const{placeholder:e}=n;return e!==void 0?e:h.value.placeholder}),M=g(()=>{const e=L(n.step);return e!==null?e===0?1:Math.abs(e):1}),K=g(()=>{const e=L(n.min);return e!==null?e:null}),W=g(()=>{const e=L(n.max);return e!==null?e:null}),I=e=>{const{value:t}=d;if(e===t){b();return}const{"onUpdate:value":r,onUpdateValue:l,onChange:s}=n,{nTriggerFormInput:f,nTriggerFormChange:x}=R;s&&w(s,e),l&&w(l,e),r&&w(r,e),D.value=e,f(),x()},o=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:l})=>{const{value:s}=v;if(l&&Ye(s))return!1;const f=(n.parse||Xe)(s);if(f===null)return t&&I(null),null;if(H(f)){const x=F(f),{precision:N}=n;if(N!==void 0&&N<x&&!r)return!1;let m=parseFloat((f+e).toFixed(N??se(f)));if(H(m)){const{value:$}=W,{value:E}=K;if($!==null&&m>$){if(!t||l)return!1;m=$}if(E!==null&&m<E){if(!t||l)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&I(m),m)}}return!1},b=()=>{const{value:e}=d;if(H(e)){const{format:t,precision:r}=n;t?v.value=t(e):e===null||r===void 0||F(e)>r?v.value=ne(e,void 0):v.value=ne(e,r)}else v.value=String(e)};b();const fe=g(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),P=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),k=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=R;t&&w(t,e),r()}function me(e){var t,r;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const l=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(l!==!1){const x=(r=c.value)===null||r===void 0?void 0:r.inputElRef;x&&(x.value=String(l||"")),d.value===l&&b()}else b();const{onBlur:s}=n,{nTriggerFormBlur:f}=R;s&&w(s,e),f(),Le(()=>{b()})}function he(e){const{onClear:t}=n;t&&w(t,e)}function A(){const{value:e}=k;if(!e){_();return}const{value:t}=d;if(t===null)n.validator||I(X());else{const{value:r}=M;o({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function O(){const{value:e}=P;if(!e){U();return}const{value:t}=d;if(t===null)n.validator||I(X());else{const{value:r}=M;o({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ve=ce,ge=me;function X(){if(n.validator)return null;const{value:e}=K,{value:t}=W;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){he(e),I(null)}function be(e){var t,r,l;!((t=G.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=z.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(l=c.value)===null||l===void 0||l.activate()}let V=null,y=null,S=null;function U(){S&&(window.clearTimeout(S),S=null),V&&(window.clearInterval(V),V=null)}function _(){T&&(window.clearTimeout(T),T=null),y&&(window.clearInterval(y),y=null)}function xe(){U(),S=window.setTimeout(()=>{V=window.setInterval(()=>{O()},re)},te),J("mouseup",document,U,{once:!0})}let T=null;function we(){_(),T=window.setTimeout(()=>{y=window.setInterval(()=>{A()},re)},te),J("mouseup",document,_,{once:!0})}const Ie=()=>{y||A()},Ve=()=>{V||O()};function ye(e){var t,r;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=c.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!k.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}else if(e.key==="ArrowDown"){if(!P.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&O()}}function Ne(e){v.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ue(d,()=>{b()});const Be={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Re=_e("InputNumber",C,p);return Object.assign(Object.assign({},Be),{rtlEnabled:Re,inputInstRef:c,minusButtonInstRef:z,addButtonInstRef:G,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:D,mergedValue:d,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:ie,mergedDisabled:ue,displayedValue:v,addable:k,minusable:P,mergedStatus:ae,handleFocus:ve,handleBlur:ge,handleClear:pe,handleMouseDown:be,handleAddClick:Ie,handleMinusClick:Ve,handleAddMousedown:we,handleMinusMousedown:xe,handleKeyDown:ye,handleUpdateDisplayedValue:Ne,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:$e(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,r,l,s]=He(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${l})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>u(ee,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Q(i["minus-icon"],()=>[u(Z,{clsPrefix:n},{default:()=>u(ze,null)})])}),C=()=>u(ee,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Q(i["add-icon"],()=>[u(Z,{clsPrefix:n},{default:()=>u(je,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(Ee,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),q(i.prefix,h=>h?u("span",{class:`${n}-input-number-prefix`},h):null)]:(a=i.prefix)===null||a===void 0?void 0:a.call(i)},suffix:()=>{var a;return this.showButton?[q(i.suffix,h=>h?u("span",{class:`${n}-input-number-suffix`},h):null),this.buttonPlacement==="right"?p():null,C()]:(a=i.suffix)===null||a===void 0?void 0:a.call(i)}}))}});export{je as A,Ze as N,ze as R};
