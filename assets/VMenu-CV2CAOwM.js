import{m as M,a as T,u as A,b as p,V as y}from"./VOverlay-CkfSs0T3.js";import{f as S}from"./forwardRefs-DWGaNmQL.js";import{a4 as K,aR as I,aa as O,aH as R,aS as U,af as g,r as N,Q as F,ae as L,M as j,w as H,p as b,ai as Q,b as w,aN as $,b2 as q,ak as V,b3 as z,b4 as P}from"./index-DqsIOPiu.js";const B=K({id:String,...I(M({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:T}}),["absolute"])},"VMenu"),Y=O()({name:"VMenu",props:B(),emits:{"update:modelValue":l=>!0},setup(l,E){let{slots:i}=E;const r=R(l,"modelValue"),{scopeId:x}=A(),h=U(),f=g(()=>l.id||`v-menu-${h}`),n=N(),a=F(p,null),c=L(0);j(p,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(r.value=!1,a==null||a.closeParents())},40)}});async function v(e){var s,u,d;const t=e.relatedTarget,o=e.target;await q(),r.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=V(n.value.contentEl)[0])==null||d.focus())}H(r,e=>{e?(a==null||a.register(),document.addEventListener("focusin",v,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",v))});function C(){a==null||a.closeParents()}function D(e){var t,o,s;l.disabled||e.key==="Tab"&&(z(V((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),P(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),P(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const k=g(()=>b({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":f.value,onKeydown:m},l.activatorProps));return Q(()=>{const e=y.filterProps(l);return w(y,b({ref:n,id:f.value,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:k.value,"onClick:outside":C,onKeydown:D},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return w($,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),S({id:f,ΨopenChildren:c},n)}});export{Y as V};
