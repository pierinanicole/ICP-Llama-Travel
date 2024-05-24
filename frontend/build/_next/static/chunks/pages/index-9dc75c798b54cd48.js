(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9536:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7423)}])},7423:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return i}});var l=a(4246),t=a(3929);function n(){let{isAuthenticated:e,currentIdentity:s}=(0,t.aC)();return(0,l.jsx)("header",{className:"bg-white",children:(0,l.jsxs)("nav",{className:"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8","aria-label":"Global",children:[(0,l.jsx)("div",{className:"flex lg:flex-1",children:(0,l.jsx)("a",{href:"#",className:"-m-1.5 p-1.5",children:(0,l.jsx)("span",{className:"sr-only",children:"Ares Connect"})})}),(0,l.jsx)("div",{className:"lg:flex lg:gap-x-12"}),(0,l.jsx)("div",{className:"lg:flex lg:flex-1 lg:justify-end",children:e?(0,l.jsx)(t.sv,{identity:s}):(0,l.jsx)(t.vP,{children:"Login"})})]})})}var r=a(7378);function i(){let{isAuthenticated:e,currentIdentity:s}=(0,t.aC)(),a=(0,t.NF)("backend",s),[i,c]=(0,r.useState)("pending"),[o,x]=(0,r.useState)(null),[u,h]=(0,r.useState)(!1);async function m(){try{h(!0),await a.get("/health"),c("Ok")}catch(e){console.error({error:e}),c("Error")}finally{h(!1)}}async function g(){try{h(!0);let e=await a.get("/users/me");if(!e.data)return;console.log({response:e}),x(e.data)}catch(e){console.error({error:e})}finally{h(!1)}}return(0,r.useEffect)(()=>{m()},[]),(0,r.useEffect)(()=>{e?g():x(null)},[s]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{}),(0,l.jsxs)("main",{className:"p-6 relative",children:[(0,l.jsx)("main",{className:"p-6 relative",children:(0,l.jsx)("div",{className:"relative z-10",children:(0,l.jsx)("div",{className:"llama-travel-bg",children:(0,l.jsx)("h1",{className:"text-2xl text-center text-white font-serif",children:"LLAMA TRAVEL"})})})}),u&&(0,l.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50",children:(0,l.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-b-4 border-white"})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 py-8",children:(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6",children:[(0,l.jsx)("h2",{className:"text-xl font-bold mb-2",children:"Informacion del usuario"}),(0,l.jsxs)("p",{className:"mt-4 text-sm text-gray-500",children:[(0,l.jsx)("strong",{children:"Estado:"})," ",e?"Authenticated":"Not Authenticated"]}),(0,l.jsxs)("p",{className:"text-gray-700",children:[(0,l.jsx)("strong",{children:"ID:"})," ",s.getPrincipal().toString()]})]})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-2xl text-center",children:"Rese\xf1as"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 py-8",children:[(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6",children:[(0,l.jsx)("h2",{className:"text-xl font-bold mb-2",children:"Deja tu comentario!!!"}),o?(0,l.jsx)("p",{children:"Rese\xf1a creada"}):(0,l.jsx)(d,{identity:s,loading:u,setLoading:h,onProfileCreated:function(e){x(e)}})]}),(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6",children:[(0,l.jsx)("h2",{className:"text-xl font-bold mb-2",children:"Nuestras Rese\xf1as"}),o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:"text-gray-700",children:[(0,l.jsx)("strong",{children:"Puntuacion:"})," ",null==o?void 0:o.username]}),(0,l.jsxs)("p",{className:"text-gray-700",children:[(0,l.jsx)("strong",{children:"Comentario:"})," ",null==o?void 0:o.bio]})]}):(0,l.jsx)("p",{children:"Por favor llene los campos"})]})]})]})]})]})}function d(e){let s=(0,t.NF)("backend",e.identity),[a,n]=(0,r.useState)(""),[i,d]=(0,r.useState)(""),c=async l=>{if(l.preventDefault(),!a||!i){alert("Please fill all fields");return}try{e.loading&&e.setLoading(!0);let l=await s.post("/users",{username:a,bio:i},{headers:{"Content-Type":"application/json"}});e.onProfileCreated(l.data)}catch(e){alert("Error creating profile: ".concat(e.data))}finally{e.loading&&e.setLoading(!1)}};return(0,l.jsxs)("form",{onSubmit:c,children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"name",className:"block text-gray-700 font-bold mb-2",children:"Puntuacion del 1-5:"}),(0,l.jsx)("input",{id:"name",type:"text",className:"w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",value:a,onChange:e=>{n(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-gray-700 font-bold mb-2",children:"Comentario:"}),(0,l.jsx)("input",{id:"email",type:"text",className:"w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",value:i,onChange:e=>{d(e.target.value)}})]}),(0,l.jsx)("button",{type:"submit",disabled:e.loading,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Submit"})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9536)}),_N_E=e.O()}]);