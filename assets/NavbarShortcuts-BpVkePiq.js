import{P as h}from"./vue3-perfect-scrollbar.esm-BV8aJvUA.js";import{j as b,a as g,o,f as n,e,b as t,_ as r,m as d,c as V,F as v,h as y,v as x,d as i,t as f}from"./index-DqsIOPiu.js";import{V as C}from"./VMenu-CV2CAOwM.js";import{V as S,a as w}from"./VCard-CdIAQPY6.js";import{V as A}from"./VDivider-BhquYJNW.js";import{V as k,a as I}from"./VRow-DYuPNokq.js";import{V as z}from"./VAvatar-DNk7bdOb.js";import"./VOverlay-CkfSs0T3.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-DDntxkyX.js";import"./VCardText-Bgz9_bkw.js";/* empty css              */const B=i("h6",{class:"text-base font-weight-medium"}," Shortcuts ",-1),D={class:"text-base font-weight-medium mt-3 mb-0"},M={class:"text-sm mb-0"},P={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(l){const s=l,c=b();return(m,p)=>{const u=g("IconBtn");return o(),n(u,null,{default:e(()=>[t(r,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(C,{activator:"parent",offset:"12px",location:"bottom end"},{default:e(()=>[t(S,{width:m.$vuetify.display.smAndDown?330:380,"max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(w,{class:"py-3"},{append:e(()=>[t(u,{size:"small",color:"high-emphasis"},{default:e(()=>[t(r,{size:"20",icon:"tabler-plus"})]),_:1})]),default:e(()=>[B]),_:1}),t(A),t(d(h),{options:{wheelPropagation:!1}},{default:e(()=>[t(k,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),V(v,null,y(s.shortcuts,(a,_)=>(o(),n(I,{key:a.title,cols:"6",class:x(["text-center border-t cursor-pointer pa-6 shortcut-icon",(_+1)%2?"border-e":""]),onClick:$=>d(c).push(a.to)},{default:e(()=>[t(z,{variant:"tonal",size:"50"},{default:e(()=>[t(r,{size:"26",color:"high-emphasis",icon:a.icon},null,8,["icon"])]),_:2},1024),i("h6",D,f(a.title),1),i("p",M,f(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["width"])]),_:1})]),_:1})}}},O={__name:"NavbarShortcuts",setup(l){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file-dollar",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-users",title:"Role Management",subtitle:"Permission",to:{name:"apps-roles"}},{icon:"tabler-device-desktop-analytics",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}}];return(c,m)=>{const p=P;return o(),n(p,{shortcuts:s})}}};export{O as default};
