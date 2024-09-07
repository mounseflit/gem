import{_ as u,n as p,f as i,o as f,l as g,b as e,q as x,v as w,x as b,u as a,d as o,t as h,m as l,k as _,r as v}from"./index-b710355a.js";const y={class:"flex min-h-full flex-col justify-center pt-24 pb-12 sm:px-6 lg:px-8"},k=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[o(' <div class="bg-primary-color p-4 w-[60%] m-auto rounded-md block sm:hidden"> '),o(' <LogoImg class="mx-auto h-12 w-auto" /> '),o(" </div> "),e("h2",{class:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"}," Reset your password ")],-1),P={class:"mt-8 mx-5 sm:mx-auto sm:w-full sm:max-w-md"},S={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},E=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email address",-1),q={class:"mt-1"},B={class:"text-red-600 text-sm capitalize"},M=e("div",null,[e("button",{type:"submit",class:"flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," Send Reset Password Email ")],-1),d={__name:"resetPassword",setup(V){p();const s=i({email:""}),t=i(null);async function m(){try{t.value="",await _.post("/auth/forgotPassword",s.value),localStorage.setItem("email",s.value.email),v.push("/resetEmailSent")}catch(r){t.value=r.response.data.message}}return(r,n)=>(f(),g("div",y,[k,e("div",P,[e("div",S,[e("form",{class:"space-y-6",onSubmit:x(m,["prevent"])},[e("div",null,[E,e("div",q,[w(e("input",{"onUpdate:modelValue":n[0]||(n[0]=c=>a(s).email=c),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"bg-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},null,512),[[b,a(s).email]])])]),o(` <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1">
              <input
                v-model="user.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="bg-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div> `),e("div",B,h(a(t)),1),M],32)])])]))}};typeof l=="function"&&l(d);const C=u(d,[["__file","/usr/src/app/src/pages/resetPassword.vue"]]);export{C as default};
