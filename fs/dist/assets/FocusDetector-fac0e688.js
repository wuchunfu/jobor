import{aR as ke,c4 as Se,c5 as Be,bc as Q,bg as O,c6 as Ie,b8 as N,M as D,k as me,l as C,bN as Te,bM as Ee,bL as Ae,m as B,aw as re,n as G,d as P,p as Oe,bb as Fe,c7 as Ne,aO as ve,c8 as se,c9 as Ce,al as be,aL as Le,z as ne,ah as Ve,h as I,bP as Ye,ca as Xe,aq as We,cb as je,bf as _e,i as H,ai as ae,a9 as He,aN as ue,a$ as K}from "./index-bbb52c5f.js";let J=[];const we=new WeakMap;function De(){J.forEach(n=>n(...we.get(n))),J=[]}function ye(n, ...e){we.set(n,e),!J.includes(n)&&J.push(n)===1&&requestAnimationFrame(De)}function rt(n, e){let{target:t}=n;for(; t;){if(t.dataset&&t.dataset[e]!==void 0)return!0;t=t.parentElement}return!1}function st(n, e="default", t=[]){const o=n.$slots[e];return o===void 0?t:o()}function at(n={}, e){const t=ke({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=n,u= l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(v=>{if(v!==l.key)return;const w=r[v];if(typeof w=="function")w(l);else{const{stop:$=!1,prevent:a=!1}=w;$&&l.stopPropagation(),a&&l.preventDefault(),w.handler(l)}})},f= l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}o!==void 0&&Object.keys(o).forEach(v=>{if(v!==l.key)return;const w=o[v];if(typeof w=="function")w(l);else{const{stop:$=!1,prevent:a=!1}=w;$&&l.stopPropagation(),a&&l.preventDefault(),w.handler(l)}})},h=()=>{(e===void 0||e.value)&&(N("keydown",document,u),N("keyup",document,f)),e!==void 0&&D(e, l=>{l?(N("keydown",document,u),N("keyup",document,f)):(O("keydown",document,u),O("keyup",document,f))})};return Se()?(Be(h),Q(()=>{(e===void 0||e.value)&&(O("keydown",document,u),O("keyup",document,f))})):h(),Ie(t)}const ut=me("n-internal-select-menu"),Pe=me("n-internal-select-menu-body"),ge="__disabled__";function xe(n){const e=C(Te,null),t=C(Ee,null),r=C(Ae,null),o=C(Pe,null),u=B();if(typeof document<"u"){u.value=document.fullscreenElement;const f=()=>{u.value=document.fullscreenElement};re(()=>{N("fullscreenchange",document,f)}),Q(()=>{O("fullscreenchange",document,f)})}return G(()=>{var f;const{to:h}=n;return h!==void 0?h===!1?ge:h===!0?u.value||"body":h:e!=null&&e.value?(f=e.value.$el)!==null&&f!==void 0?f:e.value:t!=null&&t.value?t.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:h??(u.value||"body")})}xe.tdkey=ge;xe.propTo={type:[String,Object,Boolean],default:void 0};let A=null;function Me(){if(A===null&&(A=document.getElementById("v-binder-view-measurer"),A===null)){A=document.createElement("div"),A.id="v-binder-view-measurer";const{style:n}=A;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(A)}return A.getBoundingClientRect()}function Ke(n, e){const t=Me();return{top:e,left:n,height:0,width:0,right:t.width-n,bottom:t.height-e}}function oe(n){const e=n.getBoundingClientRect(),t=Me();return{left:e.left-t.left,top:e.top-t.top,bottom:t.height+t.top-e.bottom,right:t.width+t.left-e.right,width:e.width,height:e.height}}function qe(n){return n.nodeType===9?null:n.parentNode}function $e(n){if(n===null)return null;const e=qe(n);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:t,overflowX:r,overflowY:o}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+o+r))return e}return $e(e)}const Ue=P({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var e;Oe("VBinder",(e=Fe())===null||e===void 0?void 0:e.proxy);const t=C("VBinder",null),r=B(null),o= d=>{r.value=d,t&&n.syncTargetWithParent&&t.setTargetRef(d)};let u=[];const f=()=>{let d=r.value;for(; d=$e(d),d!==null;)u.push(d);for(const k of u)N("scroll",k,$,!0)},h=()=>{for(const d of u)O("scroll",d,$,!0);u=[]},l=new Set,v= d=>{l.size===0&&f(),l.has(d)||l.add(d)},w= d=>{l.has(d)&&l.delete(d),l.size===0&&h()},$=()=>{ye(a)},a=()=>{l.forEach(d=>d())},c=new Set,b= d=>{c.size===0&&N("resize",window,y),c.has(d)||c.add(d)},p= d=>{c.has(d)&&c.delete(d),c.size===0&&O("resize",window,y)},y=()=>{c.forEach(d=>d())};return Q(()=>{O("resize",window,y),h()}),{targetRef:r,setTargetRef:o,addScrollListener:v,removeScrollListener:w,addResizeListener:b,removeResizeListener:p}},render(){return Ne("binder",this.$slots)}}),dt=Ue,ft=P({name:"Target",setup(){const{setTargetRef:n,syncTarget:e}=C("VBinder");return{syncTarget:e,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:e}=this;return n?ve(se("follower",this.$slots),[[e]]):se("follower",this.$slots)}}),{c:L}=Ce(),ze="vueuc-style";function de(n){return n&-n}class Ge{constructor(e, t){this.l=e,this.min=t;const r=new Array(e+1);for(let o=0; o<e+1; ++o)r[o]=0;this.ft=r}add(e, t){if(t===0)return;const{l:r,ft:o}=this;for(e+=1; e<=r;)o[e]+=t,e+=de(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;const{ft:t,min:r,l:o}=this;if(e>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=e*r;for(; e>0;)u+=t[e],e-=de(e);return u}getBound(e){let t=0,r=this.l;for(; r>t;){const o=Math.floor((t+r)/2),u=this.sum(o);if(u>e){r=o;continue}else if(u<e){if(t===o)return this.sum(t+1)<=e?t+1:o;t=o}else return o}return t}}const q={top:"bottom",bottom:"top",left:"right",right:"left"},fe={start:"end",center:"center",end:"start"},le={top:"height",bottom:"height",left:"width",right:"width"},Je={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Qe={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Ze={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},he={top:!0,bottom:!1,left:!0,right:!1},ce={top:"end",bottom:"start",left:"end",right:"start"};function Re(n, e, t, r, o, u){if(!o||u)return{placement:n,top:0,left:0};const[f,h]=n.split("-");let l=h??"center",v={top:0,left:0};const w=(c, b, p)=>{let y=0,d=0;const k=t[c]-e[b]-e[c];return k>0&&r&&(p?d=he[b]?k:-k:y=he[b]?k:-k),{left:y,top:d}},$=f==="left"||f==="right";if(l!=="center"){const c=Ze[n],b=q[c],p=le[c];if(t[p]>e[p]){if(e[c]+e[p]<t[p]){const y=(t[p]-e[p])/2;e[c]<y||e[b]<y?e[c]<e[b]?(l=fe[h],v=w(p,b,$)):v=w(p,c,$):l="center"}}else t[p]<e[p]&&e[b]<0&&e[c]>e[b]&&(l=fe[h])}else{const c=f==="bottom"||f==="top"?"left":"top",b=q[c],p=le[c],y=(t[p]-e[p])/2;(e[c]<y||e[b]<y)&&(e[c]>e[b]?(l=ce[c],v=w(p,c,$)):(l=ce[b],v=w(p,b,$)))}let a=f;return e[f]<t[le[f]]&&e[f]<e[q[f]]&&(a=q[f]),{placement:l!=="center"?`${a}-${l}`:a,left:v.left,top:v.top}}function et(n, e){return e?Qe[n]:Je[n]}function tt(n, e, t, r, o, u){if(u)switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2+r)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2+r)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width/2+o)}px`,transform:"translateX(-50%)"}}}const nt=L([L(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),L(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[L("> *",{pointerEvents:"all"})])]),ht=P({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const e=C("VBinder"),t=G(()=>n.enabled!==void 0?n.enabled:n.show),r=B(null),o=B(null),u=()=>{const{syncTrigger:a}=n;a.includes("scroll")&&e.addScrollListener(l),a.includes("resize")&&e.addResizeListener(l)},f=()=>{e.removeScrollListener(l),e.removeResizeListener(l)};re(()=>{t.value&&(l(),u())});const h=be();nt.mount({id:"vueuc/binder",head:!0,anchorMetaName:ze,ssr:h}),Q(()=>{f()}),Le(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const a=r.value;if(a===null)return;const c=e.targetRef,{x:b,y:p,overlap:y}=n,d=b!==void 0&&p!==void 0?Ke(b,p):oe(c);a.style.setProperty("--v-target-width",`${Math.round(d.width)}px`),a.style.setProperty("--v-target-height",`${Math.round(d.height)}px`);const{width:k,minWidth:V,placement:Y,internalShift:X,flip:Z}=n;a.setAttribute("v-placement",Y),y?a.setAttribute("v-overlap",""):a.removeAttribute("v-overlap");const{style:T}=a;k==="target"?T.width=`${d.width}px`:k!==void 0?T.width=k:T.width="",V==="target"?T.minWidth=`${d.width}px`:V!==void 0?T.minWidth=V:T.minWidth="";const R=oe(a),W=oe(o.value),{left:j,top:i,placement:s}=Re(Y,d,R,X,Z,y),m=et(s,y),{left:g,top:x,transform:z}=tt(s,W,d,i,j,y);a.setAttribute("v-placement",s),a.style.setProperty("--v-offset-left",`${Math.round(j)}px`),a.style.setProperty("--v-offset-top",`${Math.round(i)}px`),a.style.transform=`translateX(${g}) translateY(${x}) ${z}`,a.style.setProperty("--v-transform-origin",m),a.style.transformOrigin=m};D(t, a=>{a?(u(),v()):f()});const v=()=>{We().then(l).catch(a=>console.error(a))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(a=>{D(ne(n,a),l)}),["teleportDisabled"].forEach(a=>{D(ne(n,a),v)}),D(ne(n,"syncTrigger"), a=>{a.includes("resize")?e.addResizeListener(l):e.removeResizeListener(l),a.includes("scroll")?e.addScrollListener(l):e.removeScrollListener(l)});const w=Ve(),$=G(()=>{const{to:a}=n;if(a!==void 0)return a;w.value});return{VBinder:e,mergedEnabled:t,offsetContainerRef:o,followerRef:r,mergedTo:$,syncPosition:l}},render(){return I(Xe,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,e;const t=I("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[I("div",{class:"v-binder-follower-content",ref:"followerRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))]);return this.zindexable?ve(t,[[Ye,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});let U;function ot(){return U===void 0&&("matchMedia"in window?U=window.matchMedia("(pointer:coarse)").matches:U=!1),U}let ie;function pe(){return ie===void 0&&(ie="chrome"in window?window.devicePixelRatio:1),ie}const lt=L(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[L("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[L("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),ct=P({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const e=be();lt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:ze,ssr:e}),re(()=>{const{defaultScrollIndex:i,defaultScrollKey:s}=n;i!=null?b({index:i}):s!=null&&b({key:s})});let t=!1,r=!1;je(()=>{if(t=!1,!r){r=!0;return}b({top:$.value,left:w})}),_e(()=>{t=!0,r||(r=!0)});const o=H(()=>{const i=new Map,{keyField:s}=n;return n.items.forEach((m, g)=>{i.set(m[s],g)}),i}),u=B(null),f=B(void 0),h=new Map,l=H(()=>{const{items:i,itemSize:s,keyField:m}=n,g=new Ge(i.length,s);return i.forEach((x, z)=>{const M=x[m],S=h.get(M);S!==void 0&&g.add(z,S)}),g}),v=B(0);let w=0;const $=B(0),a=G(()=>Math.max(l.value.getBound($.value-ae(n.paddingTop))-1,0)),c=H(()=>{const{value:i}=f;if(i===void 0)return[];const{items:s,itemSize:m}=n,g=a.value,x=Math.min(g+Math.ceil(i/m+1),s.length-1),z=[];for(let M=g; M<=x; ++M)z.push(s[M]);return z}),b=(i, s)=>{if(typeof i=="number"){k(i,s,"auto");return}const{left:m,top:g,index:x,key:z,position:M,behavior:S,debounce:E=!0}=i;if(m!==void 0||g!==void 0)k(m,g,S);else if(x!==void 0)d(x,S,E);else if(z!==void 0){const ee=o.value.get(z);ee!==void 0&&d(ee,S,E)}else M==="bottom"?k(0,Number.MAX_SAFE_INTEGER,S):M==="top"&&k(0,0,S)};let p,y=null;function d(i, s, m){const{value:g}=l,x=g.sum(i)+ae(n.paddingTop);if(!m)u.value.scrollTo({left:0,top:x,behavior:s});else{p=i,y!==null&&window.clearTimeout(y),y=window.setTimeout(()=>{p=void 0,y=null},16);const{scrollTop:z,offsetHeight:M}=u.value;if(x>z){const S=g.get(i);x+S<=z+M||u.value.scrollTo({left:0,top:x+S-M,behavior:s})}else u.value.scrollTo({left:0,top:x,behavior:s})}}function k(i, s, m){u.value.scrollTo({left:i,top:s,behavior:m})}function V(i, s){var m,g,x;if(t||n.ignoreItemResize||j(s.target))return;const{value:z}=l,M=o.value.get(i),S=z.get(M),E=(x=(g=(m=s.borderBoxSize)===null||m===void 0?void 0:m[0])===null||g===void 0?void 0:g.blockSize)!==null&&x!==void 0?x:s.contentRect.height;if(E===S)return;E-n.itemSize===0?h.delete(i):h.set(i,E-n.itemSize);const _=E-S;if(_===0)return;z.add(M,_);const F=u.value;if(F!=null){if(p===void 0){const te=z.sum(M);F.scrollTop>te&&F.scrollBy(0,_)}else if(M<p)F.scrollBy(0,_);else if(M===p){const te=z.sum(M);E+te>F.scrollTop+F.offsetHeight&&F.scrollBy(0,_)}W()}v.value++}const Y=!ot();let X=!1;function Z(i){var s;(s=n.onScroll)===null||s===void 0||s.call(n,i),(!Y||!X)&&W()}function T(i){var s;if((s=n.onWheel)===null||s===void 0||s.call(n,i),Y){const m=u.value;if(m!=null){if(i.deltaX===0&&(m.scrollTop===0&&i.deltaY<=0||m.scrollTop+m.offsetHeight>=m.scrollHeight&&i.deltaY>=0))return;i.preventDefault(),m.scrollTop+=i.deltaY/pe(),m.scrollLeft+=i.deltaX/pe(),W(),X=!0,ye(()=>{X=!1})}}}function R(i){if(t||j(i.target)||i.contentRect.height===f.value)return;f.value=i.contentRect.height;const{onResize:s}=n;s!==void 0&&s(i)}function W(){const{value:i}=u;i!=null&&($.value=i.scrollTop,w=i.scrollLeft)}function j(i){let s=i;for(; s!==null;){if(s.style.display==="none")return!0;s=s.parentElement}return!1}return{listHeight:f,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:H(()=>{const{itemResizable:i}=n,s=K(l.value.sum());return v.value,[n.itemsStyle,{boxSizing:"content-box",height:i?"":s,minHeight:i?s:"",paddingTop:K(n.paddingTop),paddingBottom:K(n.paddingBottom)}]}),visibleItemsStyle:H(()=>(v.value,{transform:`translateY(${K(l.value.sum(a.value))})`})),viewportItems:c,listElRef:u,itemsElRef:B(null),scrollTo:b,handleListResize:R,handleListScroll:Z,handleListWheel:T,handleItemResize:V}},render(){const{itemResizable:n,keyField:e,keyToIndex:t,visibleItemsTag:r}=this;return I(ue,{onResize:this.handleListResize},{default:()=>{var o,u;return I("div",He(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?I("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[I(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(f=>{const h=f[e],l=t.get(h),v=this.$slots.default({item:f,index:l})[0];return n?I(ue,{key:h,onResize: w=>this.handleItemResize(h,w)},{default:()=>v}):(v.key=h,v)})})]):(u=(o=this.$slots).empty)===null||u===void 0?void 0:u.call(o)])}})}}),pt=P({props:{onFocus:Function,onBlur:Function},setup(n){return()=>I("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}});export{pt as F,ct as V,L as a,ye as b,ze as c,Pe as d,ht as e,ft as f,st as g,rt as h,ut as i,dt as j,at as k,xe as u};
