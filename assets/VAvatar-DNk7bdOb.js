import{aa as o,bq as y,bs as V,a6 as c,K as f,a4 as k,a5 as C,at as P,aw as S,ay as h,a8 as z,an as A,ao as b,ap as x,aC as D,aD as F,aF as I,aG as R,ai as T,b as u,_,aL as B}from"./index-DqsIOPiu.js";import{V as q}from"./VImg-DDntxkyX.js";function L(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return o()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...c()},setup(t,r){let{slots:s}=r;return()=>{var n;return f(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const w=k({start:Boolean,end:Boolean,icon:C,image:String,text:String,...c(),...P(),...S(),...h(),...z(),...A(),...b({variant:"flat"})},"VAvatar"),N=o()({name:"VAvatar",props:w(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=x(a),{colorClasses:r,colorStyles:s,variantClasses:n}=D(a),{densityClasses:m}=F(a),{roundedClasses:v}=I(a),{sizeClasses:g,sizeStyles:d}=R(a);return T(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,m.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(q,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(_,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,B(!1,"v-avatar")]}})),{}}});export{N as V,L as c};
