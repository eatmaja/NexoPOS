import{n as f}from"./ns-avatar-image-b0a3f8ba.js";import{_ as b,n as h}from"./currency-47ec5b79.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as i,a6 as n,z as l,A as e,c as a,F as g,ac as x}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as d}from"./npm~@vue~shared_-82b01912.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~numeral-faf61dd1.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-481192b6.js";const w={name:"ns-profile-widget",components:{nsAvatarImage:f},data(){return{svg:"",user:ns.user,profileDetails:[]}},computed:{avatarUrl(){return this.url.length===0?"":this.url}},mounted(){this.loadUserProfileWidget()},methods:{__:b,nsCurrency:h,loadUserProfileWidget(s){nsHttpClient.get(`/api/reports/cashier-report${s?"?refresh=true":""}`).subscribe(t=>{this.profileDetails=t})}}},y={id:"ns-best-cashiers",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},k={class:"flex-auto"},C={class:"head text-center border-b w-full flex justify-between items-center p-2"},P={class:"flex -mx-1"},U={class:"px-1"},D={class:"px-1"},W={class:"body"},j={class:"h-40 flex items-center justify-center"},B={class:"rounded-full border-4 border-gray-400 bg-white shadow-lg overflow-hidden"},$={class:"border-t border-box-edge"};function z(s,t,A,F,r,m){const p=i("ns-icon-button"),c=i("ns-close-button"),u=i("ns-avatar-image");return n(),l("div",y,[e("div",k,[e("div",C,[e("h5",null,d(m.__("Profile")),1),e("div",P,[e("div",U,[a(p,{"class-name":"la-sync-alt",onClick:t[0]||(t[0]=o=>m.loadUserProfileWidget(!0))})]),e("div",D,[a(c,{onClick:t[1]||(t[1]=o=>s.$emit("onRemove"))})])])]),e("div",W,[e("div",j,[e("div",B,[a(u,{size:32,url:r.user.attributes.avatar_link,name:r.user.username},null,8,["url","name"])])]),e("div",$,[e("ul",null,[(n(!0),l(g,null,x(r.profileDetails,(o,_)=>(n(),l("li",{key:_,class:"border-b border-box-edge p-2 flex justify-between"},[e("span",null,d(o.label),1),e("span",null,d(o.value),1)]))),128))])])])])])}const de=v(w,[["render",z]]);export{de as default};
