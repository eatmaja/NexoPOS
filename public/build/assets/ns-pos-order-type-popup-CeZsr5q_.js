import{p as T,d as v,P,F as z,b as S,a as j,v as F,w as Q}from"./bootstrap-De26revC.js";import{_ as h,n as R}from"./currency-Dtag6qPd.js";import{a as I,k as B,j as E,l as M,n as H}from"./ns-prompt-popup-BbbY2Lby.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as m,o as i,c as l,f as p,e as c,a as e,t as o,g as N,F as g,b as k,w as f,i as w,h as K,B as D,n as L}from"./runtime-core.esm-bundler-DYLTeUDs.js";import{n as G}from"./ns-orders-preview-popup-DFSCrAyW.js";const Y={name:"ns-pos-quantity-popup",props:["popup"],components:{nsNumpad:I,nsNumpadPlus:B},data(){return{finalValue:1,virtualStock:null,options:{},optionsSubscription:null,allSelected:!0,isLoading:!1}},beforeDestroy(){this.optionsSubscription.unsubscribe()},mounted(){this.optionsSubscription=POS.options.subscribe(t=>{this.options=t}),this.popup.params.product.quantity&&(this.finalValue=this.popup.params.product.quantity),this.popupCloser()},unmounted(){nsHotPress.destroy("pos-quantity-numpad"),nsHotPress.destroy("pos-quantity-backspace"),nsHotPress.destroy("pos-quantity-enter")},methods:{__:h,popupCloser:T,closePopup(){this.popup.params.reject(!1),this.popup.close()},updateQuantity(t){this.finalValue=t},defineQuantity(t){const{product:n,data:a}=this.popup.params;if(t===0)return v.error(h("Please provide a quantity")).subscribe();if(n.$original().stock_management==="enabled"&&n.$original().type==="materialized"){const b=POS.getStockUsage(n.$original().id,a.unit_quantity_id)-(n.quantity||0);if(t>parseFloat(a.$quantities().quantity)-b)return v.error(h("Unable to add the product, there is not enough stock. Remaining %s").replace("%s",a.$quantities().quantity-b)).subscribe()}this.resolve({quantity:t})},resolve(t){this.popup.params.resolve(t),this.popup.close()}}},J={class:"ns-box shadow min-h-2/5-screen w-3/4-screen md:w-3/5-screen lg:w-2/5-screen xl:w-2/5-screen relative"},X={key:0,id:"loading-overlay",style:{background:"rgb(202 202 202 / 49%)"},class:"flex w-full h-full absolute top-O left-0 items-center justify-center"},Z={class:"flex-shrink-0 flex justify-between items-center p-2 border-b ns-box-header"},$={class:"text-xl font-bold text-primary text-center"},ee={id:"screen",class:"h-24 primary ns-box-body flex items-center justify-center"},se={class:"font-bold text-3xl"};function te(t,n,a,b,r,s){const x=m("ns-spinner"),u=m("ns-close-button"),y=m("ns-numpad"),C=m("ns-numpad-plus");return i(),l("div",J,[r.isLoading?(i(),l("div",X,[p(x)])):c("",!0),e("div",Z,[e("div",null,[e("h1",$,o(s.__("Define Quantity")),1)]),e("div",null,[p(u,{onClick:n[0]||(n[0]=_=>s.closePopup())})])]),e("div",ee,[e("h1",se,o(r.finalValue),1)]),r.options.ns_pos_numpad==="default"?(i(),N(y,{key:1,floating:r.options.ns_pos_allow_decimal_quantities,onChanged:n[1]||(n[1]=_=>s.updateQuantity(_)),onNext:n[2]||(n[2]=_=>s.defineQuantity(_)),value:r.finalValue},null,8,["floating","value"])):c("",!0),r.options.ns_pos_numpad==="advanced"?(i(),N(C,{key:2,onChanged:n[3]||(n[3]=_=>s.updateQuantity(_)),onNext:n[4]||(n[4]=_=>s.defineQuantity(_)),value:r.finalValue},null,8,["value"])):c("",!0)])}const oe=O(Y,[["render",te]]);class Nn{constructor(n){this.product=n}run(n){return new Promise((a,b)=>{const r=this.product;if(POS.options.getValue().ns_pos_show_quantity!==!1||!POS.processingAddQueue)P.show(oe,{resolve:a,reject:b,product:r,data:n});else{if(r.$original().stock_management==="enabled"&&r.$original().type==="materialized"){const u=POS.getStockUsage(r.$original().id,n.unit_quantity_id)-(r.quantity||0);if(1>parseFloat(n.$quantities().quantity)-u)return v.error(h("Unable to add the product, there is not enough stock. Remaining %s").replace("%s",(n.$quantities().quantity-u).toString())).subscribe()}a({quantity:1})}})}}const ne={mounted(){this.closeWithOverlayClicked(),this.loadTransactionFields()},props:["popup"],data(){return{fields:[],isSubmiting:!1,formValidation:new z}},methods:{__:h,closeWithOverlayClicked:T,proceed(){const t=this.popup.params.customer,n=this.formValidation.extractFields(this.fields);this.isSubmiting=!0,S.post(`/api/customers/${t.id}/account-history`,n).subscribe({next:a=>{this.isSubmiting=!1,v.success(a.message).subscribe(),this.popup.params.resolve(a),this.popup.close()},error:a=>{this.isSubmiting=!1,v.error(a.message).subscribe(),this.popup.params.reject(a)}})},close(){this.popup.close(),this.popup.params.reject(!1)},loadTransactionFields(){S.get("/api/fields/ns.customers-account").subscribe({next:t=>{this.fields=this.formValidation.createFields(t)}})}}},re={class:"w-6/7-screen md:w-5/7-screen lg:w-4/7-screen h-6/7-screen md:h-5/7-screen lg:h-5/7-screen overflow-hidden shadow-lg ns-box flex flex-col relative"},ie={class:"p-2 border-b ns-box-header flex justify-between items-center"},le={class:"font-semibold"},ce={class:"flex-auto overflow-y-auto"},ue={key:0,class:"h-full w-full flex items-center justify-center"},ae={key:1,class:"p-2"},de={class:"p-2 ns-box-footer justify-between border-t flex"},_e=e("div",null,null,-1),pe={class:"px-1"},he={class:"-mx-2 flex flex-wrap"},fe={class:"px-1"},me={class:"px-1"},be={key:0,class:"h-full w-full absolute flex items-center justify-center",style:{background:"rgb(0 98 171 / 45%)"}};function ye(t,n,a,b,r,s){const x=m("ns-close-button"),u=m("ns-spinner"),y=m("ns-field"),C=m("ns-button");return i(),l("div",re,[e("div",ie,[e("h2",le,o(s.__("New Transaction")),1),e("div",null,[p(x,{onClick:n[0]||(n[0]=_=>s.close())})])]),e("div",ce,[r.fields.length===0?(i(),l("div",ue,[p(u)])):c("",!0),r.fields.length>0?(i(),l("div",ae,[(i(!0),l(g,null,k(r.fields,(_,V)=>(i(),N(y,{field:_,key:V},null,8,["field"]))),128))])):c("",!0)]),e("div",de,[_e,e("div",pe,[e("div",he,[e("div",fe,[p(C,{type:"error",onClick:n[1]||(n[1]=_=>s.close())},{default:f(()=>[w(o(s.__("Close")),1)]),_:1})]),e("div",me,[p(C,{type:"info",onClick:n[2]||(n[2]=_=>s.proceed())},{default:f(()=>[w(o(s.__("Proceed")),1)]),_:1})])])])]),r.isSubmiting===0?(i(),l("div",be,[p(u)])):c("",!0)])}const xe=O(ne,[["render",ye]]),ve={name:"ns-pos-coupons-load-popup",props:["popup"],components:{nsNotice:E},data(){return{placeHolder:h("Coupon Code"),couponCode:null,order:null,activeTab:"apply-coupon",orderSubscriber:null,coupon:null}},mounted(){this.popupCloser(),this.orderSubscriber=POS.order.subscribe(t=>{this.order=K(t),this.order.coupons.length>0&&(this.activeTab="active-coupons")}),this.popup.params&&this.popup.params.apply_coupon&&(this.couponCode=this.popup.params.apply_coupon,this.getCoupon(this.couponCode).subscribe({next:t=>{this.coupon=t,this.apply()}}))},unmounted(){this.orderSubscriber.unsubscribe()},methods:{__:h,popupCloser:T,popupResolver:j,selectCustomer(){Popup.show(U)},cancel(){this.coupon=null,this.couponCode=null},removeCoupon(t){this.order.coupons.splice(t,1),POS.refreshCart()},apply(){try{if(this.coupon.valid_hours_start!==null&&!ns.date.moment.isAfter(this.coupon.valid_hours_start)&&this.coupon.valid_hours_start.length>0)return v.error(h("The coupon is out from validity date range.")).subscribe();if(this.coupon.valid_hours_end!==null&&!ns.date.moment.isBefore(this.coupon.valid_hours_end)&&this.coupon.valid_hours_end.length>0)return v.error(h("The coupon is out from validity date range.")).subscribe();const t=this.coupon.products;if(t.length>0){const b=t.map(r=>r.product_id);if(this.order.products.filter(r=>b.includes(r.product_id)).length===0)return v.error(h("This coupon requires products that aren't available on the cart at the moment.")).subscribe()}const n=this.coupon.categories;if(n.length>0){const b=n.map(r=>r.category_id);if(this.order.products.filter(r=>b.includes(r.$original().category_id)).length===0)return v.error(h("This coupon requires products that belongs to specific categories that aren't included at the moment.").replace("%s")).subscribe()}let a={customer_coupon_id:this.coupon.customer_coupon.length>0?this.coupon.customer_coupon[0].id:0,minimum_cart_value:this.coupon.minimum_cart_value,maximum_cart_value:this.coupon.maximum_cart_value,name:this.coupon.name,type:this.coupon.type,value:0,coupon_id:this.coupon.id,limit_usage:this.coupon.limit_usage,code:this.coupon.code,discount_value:this.coupon.discount_value,categories:this.coupon.categories,products:this.coupon.products};this.cancel(),POS.pushCoupon(a),this.activeTab="active-coupons",setTimeout(()=>{this.popupResolver(a)},500),v.success(h("The coupon has applied to the cart.")).subscribe()}catch(t){console.log(t)}},getCouponType(t){switch(t){case"percentage_discount":return h("Percentage");case"flat_discount":return h("Flat");default:return h("Unknown Type")}},getDiscountValue(t){switch(t.type){case"percentage_discount":return t.discount_value+"%";case"flat_discount":return this.$options.filters.currency(t.discount_value)}},closePopup(){this.popupResolver(!1)},setActiveTab(t){this.activeTab=t,t==="apply-coupon"&&setTimeout(()=>{document.querySelector(".coupon-field").select()},10)},getCoupon(t){return!this.order.customer_id>0?v.error(h("You must select a customer before applying a coupon.")):S.post(`/api/customers/coupons/${t}`,{customer_id:this.order.customer_id})},loadCoupon(){const t=this.couponCode;this.getCoupon(t).subscribe({next:n=>{this.coupon=n,v.success(h("The coupon has been loaded.")).subscribe()},error:n=>{v.error(n.message||h("An unexpected error occurred.")).subscribe()}})}}},ge={class:"shadow-lg ns-box w-95vw md:w-3/6-screen lg:w-2/6-screen"},we={class:"border-b ns-box-header p-2 flex justify-between items-center"},Ce={class:"font-bold"},ke={class:"p-1 ns-box-body"},Pe={class:"border-2 input-group info rounded flex"},Se=["placeholder"],Te={class:"pt-2"},Oe={key:0,class:"pt-2 flex"},Ve={key:1,class:"pt-2"},je={class:"overflow-hidden"},Le={key:0,class:"pt-2 fade-in-entrance anim-duration-500 overflow-y-auto ns-scrollbar h-64"},Ne={class:"w-full ns-table"},Ae={class:"p-2 w-1/2 border"},qe={class:"p-2 w-1/2 border"},Re={class:"p-2 w-1/2 border"},He={class:"p-2 w-1/2 border"},Fe={class:"p-2 w-1/2 border"},Qe={class:"p-2 w-1/2 border"},De={class:"p-2 w-1/2 border"},Ue={class:"p-2 w-1/2 border"},We={class:"p-2 w-1/2 border"},ze={class:"p-2 w-1/2 border"},Ie={class:"p-2 w-1/2 border"},Be={class:"p-2 w-1/2 border"},Ee={key:0},Me={class:"p-2 w-1/2 border"},Ke={class:"p-2 w-1/2 border"},Ge={key:0},Ye={key:0},Je={class:"flex-auto"},Xe={class:"font-semibold text-primary p-2 flex justify-between"},Ze={key:0,class:"flex justify-between elevation-surface border items-center p-2"},$e={key:0,class:"flex"};function es(t,n,a,b,r,s){const x=m("ns-close-button"),u=m("ns-notice"),y=m("ns-tabs-item"),C=m("ns-tabs");return i(),l("div",ge,[e("div",we,[e("h3",Ce,o(s.__("Load Coupon")),1),e("div",null,[p(x,{onClick:n[0]||(n[0]=_=>s.closePopup())})])]),e("div",ke,[p(C,{onActive:n[5]||(n[5]=_=>s.setActiveTab(_)),active:r.activeTab},{default:f(()=>[p(y,{label:s.__("Apply A Coupon"),padding:"p-2",identifier:"apply-coupon"},{default:f(()=>[e("div",Pe,[D(e("input",{ref:"coupon",onKeyup:n[1]||(n[1]=Q(_=>s.loadCoupon(),["enter"])),"onUpdate:modelValue":n[2]||(n[2]=_=>r.couponCode=_),type:"text",class:"coupon-field w-full text-primary p-2 outline-none",placeholder:r.placeHolder},null,40,Se),[[F,r.couponCode]]),e("button",{onClick:n[3]||(n[3]=_=>s.loadCoupon()),class:"px-3 py-2"},o(s.__("Load")),1)]),e("div",Te,[p(u,{color:"info"},{description:f(()=>[w(o(s.__("Input the coupon code that should apply to the POS. If a coupon is issued for a customer, that customer must be selected priorly.")),1)]),_:1})]),r.order&&r.order.customer_id===void 0?(i(),l("div",Oe,[e("button",{onClick:n[4]||(n[4]=_=>s.selectCustomer()),class:"w-full border p-2 outline-none ns-numpad-key info cursor-pointer text-center"},o(s.__("Click here to choose a customer.")),1)])):c("",!0),r.order&&r.order.customer_id!==void 0?(i(),l("div",Ve,[p(u,{color:"success"},{description:f(()=>[w(o(s.__("Loading Coupon For : ")+`${r.order.customer.first_name} ${r.order.customer.last_name}`),1)]),_:1})])):c("",!0),e("div",je,[r.coupon?(i(),l("div",Le,[e("table",Ne,[e("tbody",null,[e("tr",null,[e("td",Ae,o(s.__("Coupon Name")),1),e("td",qe,o(r.coupon.name),1)]),e("tr",null,[e("td",Re,o(s.__("Discount"))+" ("+o(s.getCouponType(r.coupon.type))+")",1),e("td",He,o(s.getDiscountValue(r.coupon)),1)]),e("tr",null,[e("td",Fe,o(s.__("Usage")),1),e("td",Qe,o((r.coupon.customer_coupon.length>0?r.coupon.customer_coupon[0].usage:0)+"/"+(r.coupon.limit_usage||s.__("Unlimited"))),1)]),e("tr",null,[e("td",De,o(s.__("Valid From")),1),e("td",Ue,o(r.coupon.valid_hours_start||s.__("N/A")),1)]),e("tr",null,[e("td",We,o(s.__("Valid Till")),1),e("td",ze,o(r.coupon.valid_hours_end||s.__("N/A")),1)]),e("tr",null,[e("td",Ie,o(s.__("Categories")),1),e("td",Be,[e("ul",null,[(i(!0),l(g,null,k(r.coupon.categories,_=>(i(),l("li",{class:"rounded-full px-3 py-1 border",key:_.id},o(_.category.name),1))),128)),r.coupon.categories.length===0?(i(),l("li",Ee,o(s.__("Not applicable")),1)):c("",!0)])])]),e("tr",null,[e("td",Me,o(s.__("Products")),1),e("td",Ke,[e("ul",null,[(i(!0),l(g,null,k(r.coupon.products,_=>(i(),l("li",{class:"rounded-full px-3 py-1 border",key:_.id},o(_.product.name),1))),128)),r.coupon.products.length===0?(i(),l("li",Ge,o(s.__("Not applicable")),1)):c("",!0)])])])])])])):c("",!0)])]),_:1},8,["label"]),p(y,{label:s.__("Active Coupons"),padding:"p-1",identifier:"active-coupons"},{default:f(()=>[r.order?(i(),l("ul",Ye,[(i(!0),l(g,null,k(r.order.coupons,(_,V)=>(i(),l("li",{key:V,class:"flex justify-between elevation-surface border items-center px-2 py-1"},[e("div",Je,[e("h3",Xe,[e("span",null,o(_.name),1),e("span",null,o(s.getDiscountValue(_)),1)])]),e("div",null,[p(x,{onClick:A=>s.removeCoupon(V)},null,8,["onClick"])])]))),128)),r.order.coupons.length===0?(i(),l("li",Ze,o(s.__("No coupons applies to the cart.")),1)):c("",!0)])):c("",!0)]),_:1},8,["label"])]),_:1},8,["active"])]),r.coupon?(i(),l("div",$e,[e("button",{onClick:n[6]||(n[6]=_=>s.apply()),class:"w-1/2 px-3 py-2 bg-success-tertiary text-white font-bold"},o(s.__("Apply")),1),e("button",{onClick:n[7]||(n[7]=_=>s.cancel()),class:"w-1/2 px-3 py-2 bg-error-tertiary text-white font-bold"},o(s.__("Cancel")),1)])):c("",!0)])}const ss=O(ve,[["render",es]]),ts={name:"ns-pos-customers",props:["popup"],data(){return{activeTab:"create-customers",customer:null,subscription:null,orders:[],options:{},optionsSubscriber:null,selectedTab:"orders",isLoadingCoupons:!1,isLoadingRewards:!1,isLoadingHistory:!1,isLoadingOrders:!1,coupons:[],userCan:t=>POS.userCan(t),rewardsResponse:[],order:null,walletHistories:[]}},components:{nsPaginate:M},unmounted(){this.subscription.unsubscribe(),this.optionsSubscriber.unsubscribe()},mounted(){this.closeWithOverlayClicked(),this.optionsSubscriber=POS.options.subscribe(t=>{this.options=t}),this.subscription=POS.order.subscribe(t=>{this.order=t,this.popup.params.customer!==void 0?(this.activeTab="account-payment",this.customer=this.popup.params.customer,this.loadCustomerOrders()):t.customer!==void 0&&(this.activeTab="account-payment",this.customer=t.customer,this.loadCustomerOrders())}),this.popupCloser()},methods:{__:h,nsCurrency:R,reload(){this.loadCustomerOrders()},popupResolver:j,popupCloser:T,getWalletHistoryLabel(t){switch(t){case"add":return h("Crediting");case"deduct":return h("Removing");case"refund":return h("Refunding");case"payment":return h("Payment");default:return h("Unknow")}},getType(t){switch(t){case"percentage_discount":return h("Percentage Discount");case"flat_discount":return h("Flat Discount")}},closeWithOverlayClicked:T,async openOrderOptions(t){try{const n=await new Promise((a,b)=>{P.show(G,{order:t,resolve:a,reject:b})});this.reload()}catch{v.error(h("An error occurred while opening the order options")).subscribe()}},doChangeTab(t){this.selectedTab=t,t==="coupons"&&this.loadCoupons(),t==="rewards"&&this.loadRewards(),t==="wallet-history"&&this.loadAccounHistory(),t==="orders"&&this.loadCustomerOrders()},loadAccounHistory(){this.isLoadingHistory=!0,S.get(`/api/customers/${this.customer.id}/account-history`).subscribe({next:t=>{this.walletHistories=t.data,this.isLoadingHistory=!1},error:t=>{this.isLoadingHistory=!1}})},loadCoupons(){this.isLoadingCoupons=!0,S.get(`/api/customers/${this.customer.id}/coupons`).subscribe({next:t=>{this.coupons=t,this.isLoadingCoupons=!1},error:t=>{this.isLoadingCoupons=!1}})},loadRewards(t=`/api/customers/${this.customer.id}/rewards`){this.isLoadingRewards=!0,S.get(t).subscribe({next:n=>{this.rewardsResponse=n,this.isLoadingRewards=!1},error:n=>{this.isLoadingRewards=!1}})},prefillForm(t){this.popup.params.name!==void 0&&(t.main.value=this.popup.params.name)},openCustomerSelection(){this.popup.close(t=>{P.show(U)})},loadCustomerOrders(){this.isLoadingOrders=!0,S.get(`/api/customers/${this.customer.id}/orders`).subscribe({next:t=>{this.orders=t,this.isLoadingOrders=!1},error:t=>{this.isLoadingOrders=!1}})},newTransaction(t){new Promise((a,b)=>{P.show(xe,{customer:t,resolve:a,reject:b})}).then(a=>{POS.loadCustomer(t.id).subscribe(b=>{POS.selectCustomer(b)})})},applyCoupon(t){this.order.customer===void 0?P.show(H,{title:h("Use Customer ?"),message:h("No customer is selected. Would you like to proceed with this customer ?"),onAction:n=>{n&&POS.selectCustomer(this.customer).then(a=>{this.proceedApplyingCoupon(t)})}}):this.order.customer.id===this.customer.id?this.proceedApplyingCoupon(t):this.order.customer.id!==this.customer.id&&P.show(H,{title:h("Change Customer ?"),message:h("Would you like to assign this customer to the ongoing order ?"),onAction:n=>{n&&POS.selectCustomer(this.customer).then(a=>{this.proceedApplyingCoupon(t)})}})},proceedApplyingCoupon(t){new Promise((n,a)=>{P.show(ss,{apply_coupon:t.code,resolve:n,reject:a})}).then(n=>{this.popupResolver(!1)}).catch(n=>{})},handleSavedCustomer(t){v.success(t.message).subscribe(),POS.selectCustomer(t.data.entry),this.popup.close()}}},os={id:"ns-pos-customers",class:"shadow-lg rounded w-95vw h-95vh lg:w-3/5-screen flex flex-col overflow-hidden"},rs={class:"ns-header p-2 flex justify-between items-center border-b"},is={class:"font-semibold"},ls={class:"ns-body flex-auto flex p-2 overflow-y-auto"},cs={key:1,class:"h-full flex-col w-full flex items-center justify-center text-primary"},us=e("i",{class:"lar la-hand-paper ns-icon text-6xl"},null,-1),as={class:"font-medium text-2xl"},ds={key:0,class:"flex-auto w-full flex items-center justify-center flex-col p-4"},_s=e("i",{class:"lar la-frown text-6xl"},null,-1),ps={class:"font-medium text-2xl"},hs={class:"my-2"},fs={key:1,class:"flex flex-col flex-auto"},ms={class:"flex-auto p-2 flex flex-col"},bs={class:"flex flex-wrap"},ys={class:"px-4 mb-4 w-full"},xs={class:"font-semibold"},vs={class:"flex flex-wrap ns-tab-cards -mx-2 w-full"},gs={class:"px-2 mb-4 w-full md:w-1/4 flex"},ws={class:"rounded-lg shadow w-full bg-transparent bg-gradient-to-br from-success-secondary to-green-700 p-2 flex flex-col text-white"},Cs={class:"font-medium text-lg"},ks={class:"w-full flex justify-end"},Ps={class:"font-bold"},Ss={class:"px-2 mb-4 w-full md:w-1/4 flex"},Ts={class:"rounded-lg shadow w-full bg-transparent bg-gradient-to-br from-error-secondary to-red-700 p-2 text-white"},Os={class:"font-medium text-lg"},Vs={class:"w-full flex justify-end"},js={class:"font-bold"},Ls={class:"px-2 mb-4 w-full md:w-1/4 flex"},Ns={class:"rounded-lg shadow w-full bg-transparent bg-gradient-to-br from-blue-500 to-blue-700 p-2 text-white"},As={class:"font-medium text-lg"},qs={class:"w-full flex justify-end"},Rs={class:"font-bold"},Hs={class:"px-2 mb-4 w-full md:w-1/4 flex"},Fs={class:"rounded-lg shadow w-full bg-transparent bg-gradient-to-br from-teal-500 to-teal-700 p-2 text-white"},Qs={class:"font-medium text-lg"},Ds={class:"w-full flex justify-end"},Us={class:"font-bold"},Ws={class:"flex flex-auto flex-col overflow-hidden"},zs={key:0,class:"flex-auto h-full justify-center flex items-center"},Is={class:"py-2 w-full"},Bs={class:"font-semibold text-primary"},Es={class:"flex-auto flex-col flex overflow-hidden"},Ms={class:"flex-auto overflow-y-auto"},Ks={class:"table ns-table w-full"},Gs={class:"text-primary"},Ys={colspan:"3",width:"150",class:"p-2 border font-semibold"},Js={width:"50",class:"p-2 border font-semibold"},Xs={class:"text-primary"},Zs={key:0},$s={class:"border p-2 text-center",colspan:"4"},et={colspan:"3",class:"border p-2 text-center"},st={class:"flex flex-col items-start"},tt={class:"font-bold"},ot={class:"md:-mx-2 w-full flex flex-col md:flex-row"},nt={class:"md:px-2 flex items-start w-full md:w-1/4"},rt={class:"md:px-2 flex items-start w-full md:w-1/4"},it={class:"md:px-2 flex items-start w-full md:w-1/4"},lt={class:"border p-2 text-center"},ct=["onClick"],ut=e("i",{class:"las la-wallet"},null,-1),at={class:"ml-1"},dt={key:0,class:"flex-auto h-full justify-center flex items-center"},_t={class:"py-2 w-full"},pt={class:"font-semibold text-primary"},ht={class:"flex-auto flex-col flex overflow-hidden"},ft={class:"flex-auto overflow-y-auto"},mt={class:"table ns-table w-full"},bt={class:"text-primary"},yt={colspan:"3",width:"150",class:"p-2 border font-semibold"},xt={class:"text-primary"},vt={key:0},gt={class:"border p-2 text-center",colspan:"3"},wt={colspan:"3",class:"border p-2 text-center"},Ct={class:"flex flex-col items-start"},kt={class:"font-bold"},Pt={class:"md:-mx-2 w-full flex flex-col md:flex-row"},St={class:"md:px-2 flex items-start w-full md:w-1/3"},Tt={class:"md:px-2 flex items-start w-full md:w-1/3"},Ot={key:0,class:"flex-auto h-full justify-center flex items-center"},Vt={class:"py-2 w-full"},jt={class:"font-semibold text-primary"},Lt={class:"flex-auto flex-col flex overflow-hidden"},Nt={class:"flex-auto overflow-y-auto"},At={class:"table ns-table w-full"},qt={class:"text-primary"},Rt={width:"150",class:"p-2 border font-semibold"},Ht={class:"p-2 border font-semibold"},Ft=e("th",{class:"p-2 border font-semibold"},null,-1),Qt={class:"text-primary text-sm"},Dt={key:0},Ut={class:"border p-2 text-center",colspan:"4"},Wt={width:"300",class:"border p-2"},zt={class:""},It={class:"-mx-2 flex"},Bt={class:"text-xs text-primary px-2"},Et={class:"text-xs text-primary px-2"},Mt={class:"border p-2 text-center"},Kt={key:0},Gt={key:1},Yt={class:"border p-2 text-right"},Jt={key:0,class:"flex-auto h-full justify-center flex items-center"},Xt={class:"py-2 w-full"},Zt={class:"font-semibold text-primary"},$t={class:"flex-auto flex-col flex overflow-hidden"},eo={class:"flex-auto overflow-y-auto"},so={class:"table ns-table w-full"},to={class:"text-primary"},oo={width:"150",class:"p-2 border font-semibold"},no={class:"p-2 border font-semibold"},ro={class:"p-2 border font-semibold"},io={key:0,class:"text-primary text-sm"},lo={key:0},co={class:"border p-2 text-center",colspan:"4"},uo={width:"300",class:"border p-2"},ao={class:"text-center"},_o={width:"300",class:"border p-2"},po={class:"text-center"},ho={width:"300",class:"border p-2"},fo={class:"text-center"},mo={class:"py-1 flex justify-end"},bo={class:"p-2 border-t border-box-edge flex justify-between"},yo=e("div",null,null,-1);function xo(t,n,a,b,r,s){const x=m("ns-close-button"),u=m("ns-crud-form"),y=m("ns-tabs-item"),C=m("ns-button"),_=m("ns-spinner"),V=m("ns-paginate"),A=m("ns-tabs");return i(),l("div",os,[e("div",rs,[e("h3",is,o(s.__("Customers")),1),e("div",null,[p(x,{onClick:n[0]||(n[0]=d=>a.popup.close())})])]),e("div",ls,[p(A,{active:r.activeTab,onActive:n[7]||(n[7]=d=>r.activeTab=d)},{default:f(()=>[p(y,{identifier:"create-customers",label:s.__("New Customer")},{default:f(()=>[r.userCan("nexopos.create.customers")?(i(),N(u,{key:0,onUpdated:n[1]||(n[1]=d=>s.prefillForm(d)),onSave:n[2]||(n[2]=d=>s.handleSavedCustomer(d)),"submit-url":"/api/crud/ns.customers",src:"/api/crud/ns.customers/form-config"},{title:f(()=>[w(o(s.__("Customer Name")),1)]),save:f(()=>[w(o(s.__("Save Customer")),1)]),_:1})):c("",!0),r.userCan("nexopos.create.customers")?c("",!0):(i(),l("div",cs,[us,e("h3",as,o(s.__("Not Authorized")),1),e("p",null,o(s.__("Creating customers has been explicitly disabled from the settings.")),1)]))]),_:1},8,["label"]),p(y,{identifier:"account-payment",label:s.__("Customer Account"),class:"flex",padding:"p-0 flex"},{default:f(()=>[r.customer===null?(i(),l("div",ds,[_s,e("h3",ps,o(s.__("No Customer Selected")),1),e("p",null,o(s.__("In order to see a customer account, you need to select one customer.")),1),e("div",hs,[p(C,{onClick:n[3]||(n[3]=d=>s.openCustomerSelection()),type:"info"},{default:f(()=>[w(o(s.__("Select Customer")),1)]),_:1})])])):c("",!0),r.customer?(i(),l("div",fs,[e("div",ms,[e("div",bs,[e("div",ys,[e("h2",xs,o(s.__("Summary For"))+" : "+o(r.customer.first_name),1)]),e("div",vs,[e("div",gs,[e("div",ws,[e("h3",Cs,o(s.__("Purchases")),1),e("div",ks,[e("h2",Ps,o(s.nsCurrency(r.customer.purchases_amount)),1)])])]),e("div",Ss,[e("div",Ts,[e("h3",Os,o(s.__("Owed")),1),e("div",Vs,[e("h2",js,o(s.nsCurrency(r.customer.owed_amount)),1)])])]),e("div",Ls,[e("div",Ns,[e("h3",As,o(s.__("Wallet Amount")),1),e("div",qs,[e("h2",Rs,o(s.nsCurrency(r.customer.account_amount)),1)])])]),e("div",Hs,[e("div",Fs,[e("h3",Qs,o(s.__("Credit Limit")),1),e("div",Ds,[e("h2",Us,o(s.nsCurrency(r.customer.credit_limit_amount)),1)])])])])]),e("div",Ws,[p(A,{active:r.selectedTab,onChangeTab:n[5]||(n[5]=d=>s.doChangeTab(d))},{default:f(()=>[p(y,{identifier:"orders",label:s.__("Orders")},{default:f(()=>[r.isLoadingOrders?(i(),l("div",zs,[p(_,{size:"36"})])):c("",!0),r.isLoadingOrders?c("",!0):(i(),l(g,{key:1},[e("div",Is,[e("h2",Bs,o(s.__("Last Purchases")),1)]),e("div",Es,[e("div",Ms,[e("table",Ks,[e("thead",null,[e("tr",Gs,[e("th",Ys,o(s.__("Order")),1),e("th",Js,o(s.__("Options")),1)])]),e("tbody",Xs,[r.orders.length===0?(i(),l("tr",Zs,[e("td",$s,o(s.__("No orders...")),1)])):c("",!0),(i(!0),l(g,null,k(r.orders,d=>(i(),l("tr",{key:d.id},[e("td",et,[e("div",st,[e("h3",tt,o(s.__("Code"))+": "+o(d.code),1),e("div",ot,[e("div",nt,[e("small",null,o(s.__("Total"))+": "+o(s.nsCurrency(d.total)),1)]),e("div",rt,[e("small",null,o(s.__("Status"))+": "+o(d.human_status),1)]),e("div",it,[e("small",null,o(s.__("Delivery"))+": "+o(d.human_delivery_status),1)])])])]),e("td",lt,[e("button",{onClick:W=>s.openOrderOptions(d),class:"rounded-full h-8 px-2 flex items-center justify-center border border-gray ns-inset-button success"},[ut,e("span",at,o(s.__("Options")),1)],8,ct)])]))),128))])])])])],64))]),_:1},8,["label"]),p(y,{identifier:"wallet-history",label:s.__("Wallet History")},{default:f(()=>[r.isLoadingHistory?(i(),l("div",dt,[p(_,{size:"36"})])):c("",!0),r.isLoadingHistory?c("",!0):(i(),l(g,{key:1},[e("div",_t,[e("h2",pt,o(s.__("Wallet History")),1)]),e("div",ht,[e("div",ft,[e("table",mt,[e("thead",null,[e("tr",bt,[e("th",yt,o(s.__("Transaction")),1)])]),e("tbody",xt,[r.walletHistories.length===0?(i(),l("tr",vt,[e("td",gt,o(s.__("No History...")),1)])):c("",!0),(i(!0),l(g,null,k(r.walletHistories,d=>(i(),l("tr",{key:d.id},[e("td",wt,[e("div",Ct,[e("h3",kt,o(s.__("Transaction"))+": "+o(s.getWalletHistoryLabel(d.operation)),1),e("div",Pt,[e("div",St,[e("small",null,o(s.__("Amount"))+": "+o(s.nsCurrency(t.amount)),1)]),e("div",Tt,[e("small",null,o(s.__("Date"))+": "+o(d.created_at),1)])])])])]))),128))])])])])],64))]),_:1},8,["label"]),p(y,{identifier:"coupons",label:s.__("Coupons")},{default:f(()=>[r.isLoadingCoupons?(i(),l("div",Ot,[p(_,{size:"36"})])):c("",!0),r.isLoadingCoupons?c("",!0):(i(),l(g,{key:1},[e("div",Vt,[e("h2",jt,o(s.__("Coupons")),1)]),e("div",Lt,[e("div",Nt,[e("table",At,[e("thead",null,[e("tr",qt,[e("th",Rt,o(s.__("Name")),1),e("th",Ht,o(s.__("Type")),1),Ft])]),e("tbody",Qt,[r.coupons.length===0?(i(),l("tr",Dt,[e("td",Ut,o(s.__("No coupons for the selected customer...")),1)])):c("",!0),(i(!0),l(g,null,k(r.coupons,d=>(i(),l("tr",{key:d.id},[e("td",Wt,[e("h3",null,o(d.name),1),e("div",zt,[e("ul",It,[e("li",Bt,o(s.__("Usage :"))+" "+o(d.usage)+"/"+o(d.limit_usage),1),e("li",Et,o(s.__("Code :"))+" "+o(d.code),1)])])]),e("td",Mt,[w(o(s.getType(d.coupon.type))+" ",1),d.coupon.type==="percentage_discount"?(i(),l("span",Kt," ("+o(d.coupon.discount_value)+"%) ",1)):c("",!0),d.coupon.type==="flat_discount"?(i(),l("span",Gt," ("+o(s.nsCurrency(t.value))+") ",1)):c("",!0)]),e("td",Yt,[p(C,{onClick:W=>s.applyCoupon(d),type:"info"},{default:f(()=>[w(o(s.__("Use Coupon")),1)]),_:2},1032,["onClick"])])]))),128))])])])])],64))]),_:1},8,["label"]),p(y,{identifier:"rewards",label:s.__("Rewards")},{default:f(()=>[r.isLoadingRewards?(i(),l("div",Jt,[p(_,{size:"36"})])):c("",!0),r.isLoadingRewards?c("",!0):(i(),l(g,{key:1},[e("div",Xt,[e("h2",Zt,o(s.__("Rewards")),1)]),e("div",$t,[e("div",eo,[e("table",so,[e("thead",null,[e("tr",to,[e("th",oo,o(s.__("Name")),1),e("th",no,o(s.__("Points")),1),e("th",ro,o(s.__("Target")),1)])]),r.rewardsResponse.data?(i(),l("tbody",io,[r.rewardsResponse.data.length===0?(i(),l("tr",lo,[e("td",co,o(s.__("No rewards available the selected customer...")),1)])):c("",!0),(i(!0),l(g,null,k(r.rewardsResponse.data,d=>(i(),l("tr",{key:d.id},[e("td",uo,[e("h3",ao,o(d.reward_name),1)]),e("td",_o,[e("h3",po,o(d.points),1)]),e("td",ho,[e("h3",fo,o(d.target),1)])]))),128))])):c("",!0)])])]),e("div",mo,[p(V,{pagination:r.rewardsResponse,onLoad:n[4]||(n[4]=d=>s.loadRewards(d))},null,8,["pagination"])])],64))]),_:1},8,["label"])]),_:1},8,["active"])])]),e("div",bo,[yo,e("div",null,[p(C,{onClick:n[6]||(n[6]=d=>s.newTransaction(r.customer)),type:"info"},{default:f(()=>[w(o(s.__("Account Transaction")),1)]),_:1})])])])):c("",!0)]),_:1},8,["label"])]),_:1},8,["active"])])])}const q=O(ts,[["render",xo]]),An=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),vo={props:["popup"],data(){return{searchCustomerValue:"",orderSubscription:null,order:{},debounceSearch:null,customers:[],isLoading:!1}},computed:{customerSelected(){return!1}},watch:{searchCustomerValue(t){clearTimeout(this.debounceSearch),this.debounceSearch=setTimeout(()=>{this.searchCustomer(t)},500)}},mounted(){this.orderSubscription=POS.order.subscribe(t=>{this.order=t}),this.getRecentCustomers(),this.$refs.searchField.focus(),this.popupCloser()},unmounted(){this.orderSubscription.unsubscribe()},methods:{__:h,popupCloser:T,nsCurrency:R,resolveIfQueued:j,attemptToChoose(){if(this.customers.length===1)return this.selectCustomer(this.customers[0]);v.info(h("Too many results.")).subscribe()},openCustomerHistory(t,n){n.stopImmediatePropagation(),this.popup.close(),P.show(q,{customer:t,activeTab:"account-payment"})},selectCustomer(t){this.customers.forEach(n=>n.selected=!1),t.selected=!0,this.isLoading=!0,POS.selectCustomer(t).then(n=>{this.isLoading=!1,this.resolveIfQueued(t)}).catch(n=>{this.isLoading=!1})},searchCustomer(t){S.post("/api/customers/search",{search:t}).subscribe(n=>{n.forEach(a=>a.selected=!1),this.customers=n})},createCustomerWithMatch(t){this.resolveIfQueued(!1),P.show(q,{name:t})},getRecentCustomers(){this.isLoading=!0,S.get("/api/customers/recently-active").subscribe({next:t=>{this.isLoading=!1,t.forEach(n=>n.selected=!1),this.customers=t},error:t=>{this.isLoading=!1}})}}},go={id:"ns-pos-customer-select-popup",class:"ns-box shadow-xl w-4/5-screen md:w-2/5-screen xl:w-108"},wo={id:"header",class:"border-b ns-box-header text-center font-semibold text-2xl py-2"},Co={class:"relative"},ko={class:"p-2 border-b ns-box-body items-center flex justify-between"},Po={class:"flex items-center justify-between"},So=e("i",{class:"las la-eye"},null,-1),To=[So],Oo={class:"p-2 border-b ns-box-body flex justify-between text-primary"},Vo={class:"input-group flex-auto border-2 rounded"},jo={class:"h-3/5-screen xl:h-2/5-screen overflow-y-auto ns-scrollbar"},Lo={class:"ns-vertical-menu"},No={key:0,class:"p-2 text-center text-primary"},Ao={class:"border-b border-dashed border-info-primary"},qo=["onClick"],Ro={class:"flex flex-col"},Ho={key:0,class:"text-xs text-secondary"},Fo={key:1,class:"text-xs text-secondary"},Qo={class:"flex items-center"},Do={key:0,class:"text-error-primary"},Uo={key:1},Wo={class:"purchase-amount"},zo=["onClick"],Io=e("i",{class:"las la-eye"},null,-1),Bo=[Io],Eo={key:0,class:"z-10 top-0 absolute w-full h-full flex items-center justify-center"};function Mo(t,n,a,b,r,s){const x=m("ns-spinner");return i(),l("div",go,[e("div",wo,[e("h2",null,o(s.__("Select Customer")),1)]),e("div",Co,[e("div",ko,[e("span",null,o(s.__("Selected"))+" : ",1),e("div",Po,[e("span",null,o(r.order.customer?`${r.order.customer.first_name} ${r.order.customer.last_name}`:"N/A"),1),r.order.customer?(i(),l("button",{key:0,onClick:n[0]||(n[0]=u=>s.openCustomerHistory(r.order.customer,u)),class:"mx-2 rounded-full h-8 w-8 flex items-center justify-center border ns-inset-button hover:border-transparent"},To)):c("",!0)])]),e("div",Oo,[e("div",Vo,[D(e("input",{ref:"searchField",onKeydown:n[1]||(n[1]=Q(u=>s.attemptToChoose(),["enter"])),"onUpdate:modelValue":n[2]||(n[2]=u=>r.searchCustomerValue=u),placeholder:"Search Customer",type:"text",class:"outline-none w-full p-2"},null,544),[[F,r.searchCustomerValue]])])]),e("div",jo,[e("ul",Lo,[r.customers&&r.customers.length===0?(i(),l("li",No,o(s.__("No customer match your query...")),1)):c("",!0),r.customers&&r.customers.length===0?(i(),l("li",{key:1,onClick:n[3]||(n[3]=u=>s.createCustomerWithMatch(r.searchCustomerValue)),class:"p-2 cursor-pointer text-center text-primary"},[e("span",Ao,o(s.__("Create a customer")),1)])):c("",!0),(i(!0),l(g,null,k(r.customers,u=>(i(),l("li",{onClick:y=>s.selectCustomer(u),key:u.id,class:"cursor-pointer p-2 border-b text-primary flex justify-between items-center"},[e("div",Ro,[e("span",null,o(u.first_name)+" "+o(u.last_name),1),u.group?(i(),l("small",Ho,o(u.group.name),1)):(i(),l("small",Fo,o(s.__("No Group Assigned")),1))]),e("p",Qo,[u.owe_amount>0?(i(),l("span",Do,"-"+o(s.nsCurrency(u.owe_amount)),1)):c("",!0),u.owe_amount>0?(i(),l("span",Uo,"/")):c("",!0),e("span",Wo,o(s.nsCurrency(u.purchases_amount)),1),e("button",{onClick:y=>s.openCustomerHistory(u,y),class:"mx-2 rounded-full h-8 w-8 flex items-center justify-center border ns-inset-button info"},Bo,8,zo)])],8,qo))),128))])]),r.isLoading?(i(),l("div",Eo,[p(x,{size:"24",border:"8"})])):c("",!0)])])}const U=O(vo,[["render",Mo]]),Ko={name:"ns-pos-discount-popup",props:["popup"],data(){return{finalValue:1,virtualStock:null,popupSubscription:null,mode:"",type:"",allSelected:!0,isLoading:!1,keys:[...[7,8,9].map(t=>({identifier:t,value:t})),...[4,5,6].map(t=>({identifier:t,value:t})),...[1,2,3].map(t=>({identifier:t,value:t})),{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",icon:"la-share"}]}},mounted(){this.mode=this.popup.params.reference.discount_type||"percentage",this.type=this.popup.params.type,this.mode==="percentage"?this.finalValue=this.popup.params.reference.discount_percentage||1:this.finalValue=this.popup.params.reference.discount||1,this.popupCloser()},methods:{__:h,nsCurrency:R,popupResolver:j,popupCloser:T,setPercentageType(t){this.mode=t},closePopup(){this.popup.close()},inputValue(t){t.identifier==="next"?(this.popup.params.onSubmit({discount_type:this.mode,discount_percentage:this.mode==="percentage"?this.finalValue:void 0,discount:this.mode==="flat"?this.finalValue:void 0}),this.popup.close()):t.identifier==="backspace"?this.allSelected?(this.finalValue=0,this.allSelected=!1):(this.finalValue=this.finalValue.toString(),this.finalValue=this.finalValue.substr(0,this.finalValue.length-1)||0):this.allSelected?(this.finalValue=t.value,this.finalValue=parseFloat(this.finalValue),this.allSelected=!1):(this.finalValue+=""+t.value,this.finalValue=parseFloat(this.finalValue),this.mode==="percentage"&&(this.finalValue=this.finalValue>100?100:this.finalValue))}}},Go={id:"discount-popup",class:"ns-box shadow min-h-2/5-screen w-6/7-screen md:w-3/5-screen lg:w-3/5-screen xl:w-2/5-screen relative"},Yo={class:"flex-shrink-0 flex justify-between items-center p-2 border-b ns-box-header"},Jo={key:0,class:"text-xl font-bold text-primary text-center"},Xo={key:1,class:"text-xl font-bold text-primary text-center"},Zo={id:"screen",class:"h-16 ns-box-body text-white flex items-center justify-center"},$o={class:"font-bold text-3xl"},en={key:0},sn={key:1},tn={id:"switch-mode",class:"flex"},on=e("hr",{class:"border-r border-box-edge"},null,-1),nn={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-3"},rn=["onClick"],ln={key:0};function cn(t,n,a,b,r,s){const x=m("ns-close-button");return i(),l("div",Go,[e("div",Yo,[e("div",null,[r.type==="product"?(i(),l("h1",Jo,o(s.__("Product Discount")),1)):c("",!0),r.type==="cart"?(i(),l("h1",Xo,o(s.__("Cart Discount")),1)):c("",!0)]),e("div",null,[p(x,{onClick:n[0]||(n[0]=u=>s.closePopup())})])]),e("div",Zo,[e("h1",$o,[r.mode==="flat"?(i(),l("span",en,o(s.nsCurrency(r.finalValue)),1)):c("",!0),r.mode==="percentage"?(i(),l("span",sn,o(r.finalValue)+"%",1)):c("",!0)])]),e("div",tn,[e("button",{onClick:n[1]||(n[1]=u=>s.setPercentageType("flat")),class:L([r.mode==="flat"?"bg-tab-active":"bg-tab-inactive text-tertiary","outline-none w-1/2 py-2 flex items-center justify-center"])},o(s.__("Flat")),3),on,e("button",{onClick:n[2]||(n[2]=u=>s.setPercentageType("percentage")),class:L([r.mode==="percentage"?"bg-tab-active":"bg-tab-inactive text-tertiary","outline-none w-1/2 py-2 flex items-center justify-center"])},o(s.__("Percentage")),3)]),e("div",nn,[(i(!0),l(g,null,k(r.keys,(u,y)=>(i(),l("div",{onClick:C=>s.inputValue(u),key:y,class:"text-primary ns-numpad-key info text-xl font-bold border h-24 flex items-center justify-center cursor-pointer"},[u.value!==void 0?(i(),l("span",ln,o(u.value),1)):c("",!0),u.icon?(i(),l("i",{key:1,class:L(["las",u.icon])},null,2)):c("",!0)],8,rn))),128))])])}const qn=O(Ko,[["render",cn]]),un={data(){return{types:[],settingsSubscription:null,urls:{}}},props:["popup"],mounted(){this.settingsSubscription=POS.settings.subscribe(t=>{this.urls=t.urls}),this.types=POS.types.getValue(),Object.values(this.types).length===1&&this.select(Object.keys(this.types)[0]),this.popupCloser()},methods:{__:h,popupCloser:T,popupResolver:j,resolveIfQueued:j,async select(t){Object.values(this.types).forEach(a=>a.selected=!1),this.types[t].selected=!0;const n=this.types[t];try{const a=await POS.triggerOrderTypeSelection(n);POS.types.next(this.types),this.resolveIfQueued(n)}catch(a){throw a}}}},an={id:"ns-order-type",class:"h-full w-4/5-screen md:w-2/5-screen lg:w-2/5-screen xl:w-2/6-screen shadow-lg"},dn={id:"header",class:"h-16 flex justify-center items-center"},_n={class:"font-bold"},pn={key:0,class:"ns-box-body grid grid-flow-row grid-cols-1 grid-rows-1"},hn={class:"h-full w-full flex items-center justify-center flex-col"},fn=e("i",{class:"las la-frown text-7xl text-error-tertiary"},null,-1),mn={class:"p-4 md:w-2/3"},bn={class:"text-center"},yn={class:"flex justify-center mt-4 mb-2 -mx-2"},xn={class:"px-2"},vn={class:"px-2"},gn={key:1,class:"ns-box-body grid grid-flow-row grid-cols-2 grid-rows-2"},wn=["onClick"],Cn=["src"],kn={class:"font-semibold text-xl my-2"};function Pn(t,n,a,b,r,s){const x=m("ns-link");return i(),l("div",an,[e("div",dn,[e("h3",_n,o(s.__("Define The Order Type")),1)]),Object.values(r.types).length===0?(i(),l("div",pn,[e("div",hn,[fn,e("div",mn,[e("p",bn,o(s.__("No payment type has been selected on the settings. Please check your POS features and choose the supported order type")),1),e("div",yn,[e("div",xn,[p(x,{target:"_blank",type:"info",href:"https://my.nexopos.com/en/documentation/components/order-types"},{default:f(()=>[w(o(s.__("Read More")),1)]),_:1})]),e("div",vn,[p(x,{target:"_blank",type:"info",href:r.urls.order_type_url},{default:f(()=>[w(o(s.__("Configure")),1)]),_:1},8,["href"])])])])])])):c("",!0),Object.values(r.types).length>0?(i(),l("div",gn,[(i(!0),l(g,null,k(r.types,u=>(i(),l("div",{onClick:y=>s.select(u.identifier),key:u.identifier,class:L([u.selected?"active":"","ns-numpad-key info h-56 flex items-center justify-center flex-col cursor-pointer border"])},[e("img",{src:u.icon,alt:"",class:"w-32 h-32"},null,8,Cn),e("h4",kn,o(u.label),1)],10,wn))),128))])):c("",!0)])}const Rn=O(un,[["render",Pn]]);export{Nn as P,qn as a,Rn as b,ss as c,An as d,U as n};