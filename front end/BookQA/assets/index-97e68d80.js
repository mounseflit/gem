import{_ as V,o as j,c as I,w as i,a as n,u as s,U,h as w,b as e,G as N,d as l,V as M,e as k,t as B,S as P,r as b,f as y,s as T,g as z,i as G,j as R,k as S,l as $,F as q,m as C}from"./index-b710355a.js";const E="/assets/celebrate-5bde956f.png",F=e("div",{class:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"},null,-1),H={class:"fixed inset-0 z-10 overflow-y-auto"},L={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},A={class:"mt-3 text-center sm:mt-5 pt-4 fldex justify-center flex-col"},K=e("img",{src:E,alt:"",class:"w-[50%] h-10D my-4 mx-auto"},null,-1),J={__name:"paidMembershipModal",props:{open:Boolean,currentLimitation:String,title:String},emits:["closeModal"],setup(v,{emit:p}){const c=p;function r(){c("closeModal")}function t(){r(),b.push("/myspace")}return(_,h)=>(j(),I(s(P),{as:"template",show:v.open},{default:i(()=>[n(s(U),{as:"div",class:"relative z-[9999]",onClose:r},{default:i(()=>[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[F]),_:1}),e("div",H,[e("div",L,[n(s(w),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:i(()=>[n(s(N),{class:"relative transform overflow-hidden rounded-lg bg-white pxd-4 pbd-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:pd-6 w-[90%]"},{default:i(()=>[e("div",null,[l(` <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                >
                  <CheckIcon
                    class="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div> `),e("div",A,[n(s(M),{as:"h5",class:"leading-6 text-gray-900 font-extrabold text-2xl"},{default:i(()=>[k("Congratulation")]),_:1}),K,n(s(M),{as:"h5",class:"text-bold leading-6 text-gray-900 font-medium text-md md:text-2xl"},{default:i(()=>[k("you have "+B(v.title)+" membership now",1)]),_:1}),l(` <div class="mt-2">
                    <p class="text-md text-gray-500">
                      {{ currentLimitation?.subHeading }}
                    </p>
                  </div> `)])]),e("div",{class:"flex my-8"},[e("button",{type:"button",class:"text-sm md:text-lg m-auto inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:cold-start-2",onClick:t}," Go back to your Space ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},O=V(J,[["__file","/usr/src/app/src/components/common/paidMembershipModal.vue"]]);const Q={class:"pt-44 pb-20 w-full h-full flex items-center flex-col justify-center"},W={class:"py-4 font-medium text-2xl capitalize"},D={__name:"index",setup(v){const p=y(null),c=y(!1),{currentUser:r}=T(z()),t=y(null),_=G();R(async()=>{var a,d,u;const{data:m}=await S.get("/membership"),o=(a=_.query)==null?void 0:a.plan;t.value=m.find(f=>f.title===o),t.value||b.push("/myspace"),((d=r.value)==null?void 0:d.membership.id)===((u=t.value)==null?void 0:u.id)&&b.push("/myspace"),paypal.Buttons({style:{shape:"pill",color:"white",layout:"vertical",label:"subscribe"},createSubscription:(f,x)=>{var g;return x.subscription.create({plan_id:(g=t.value)==null?void 0:g.planID})},onApprove:(f,x)=>{h(f.subscriptionID)}}).render(p.value)});async function h(m){var a;c.value=!0;const{data:o}=await S.post("/membership",null,{params:{planID:(a=t.value)==null?void 0:a.id,subscriptionID:m}});r.value.membership=o}return(m,o)=>{var d,u;const a=O;return j(),$(q,null,[e("div",Q,[e("div",{ref_key:"buttonContainer",ref:p,class:"w-[90%] sm:w-auto text-center bg-white p-10 rounded-3xl shadow-md"},[e("h3",W," buy "+B((d=s(_).query)==null?void 0:d.plan)+" membership ",1),l(` <button @click="buySubscription('I-3E7VU8RM5KTH')">Pay</button> `),l(' <button @click="showModal = true">Pay</button> ')],512)]),l(" {{ showModal }} "),n(a,{open:c.value,onCloseModal:o[0]||(o[0]=()=>{c.value=!1}),title:(u=t.value)==null?void 0:u.title},null,8,["open","title"]),l(` <div class="confetti">
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
  </div> `)],64)}}};typeof C=="function"&&C(D);const Y=V(D,[["__file","/usr/src/app/src/pages/checkout/index.vue"]]);export{Y as default};
