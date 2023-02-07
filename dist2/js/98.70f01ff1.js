"use strict";(self["webpackChunkvue2_view"]=self["webpackChunkvue2_view"]||[]).push([[98],{7098:function(t,s,e){e.r(s),e.d(s,{default:function(){return v}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"h-full w-full pt-20 bg-zinc-50"},[s("header",{staticClass:"px-40 w-full h-20 flex justify-between bg-black text-white fixed top-0 z-50"},[t._m(0),s("div",{staticClass:"h-right flex justify-center h-full items-center"},[s("div",{staticClass:"h-search relative"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"h-8 text-sm text-black rounded w-60 pl-4 placeholder-gray-400 outline-none focus:ring-4 focus:ring-white focus:ring-opacity-20",attrs:{type:"text",name:"keyword",placeholder:"请输入商品信息"},domProps:{value:t.keyword},on:{input:function(s){s.target.composing||(t.keyword=s.target.value)}}}),t._m(1)]),s("router-link",{staticClass:"text-white",attrs:{to:"/goods"}},[s("div",{staticClass:"h-8 px-8 leading-8"},[t._v("全部商品")])]),s("div",{staticClass:"h-8 px-8 leading-8"},[t._v("|")]),s("a-popover",{attrs:{placement:"bottom"}},[s("template",{slot:"content"},[s("div",{staticClass:"text-center pt-6"},[s("div",{staticClass:"userImg w-16 h-16 rounded-full mx-auto overflow-hidden border relative"},[s("img",{staticClass:"w-16 h-16 absolute left-0 top-0",attrs:{src:t.userInfo.imgUrl}})]),s("div",{staticClass:"px-16 w-44 text-center border-b pt-1 pb-2"},[t._v(t._s(t.userNameV))]),s("router-link",{staticClass:"text-black",attrs:{to:"/user/orderList"}},[s("div",{staticClass:"px-10 py-2 border-b hover:bg-zinc-200"},[t._v("我的订单")])]),s("router-link",{staticClass:"text-black",attrs:{to:"/user/information"}},[s("div",{staticClass:"px-10 py-2 border-b hover:bg-zinc-200"},[t._v("账号资料")])]),s("router-link",{staticClass:"text-black",attrs:{to:"/user/addressList"}},[s("div",{staticClass:"px-10 py-2 border-b hover:bg-zinc-200"},[t._v("收货地址")])]),s("router-link",{staticClass:"text-black",attrs:{to:"/user/coupon"}},[s("div",{staticClass:"px-10 py-2 border-b hover:bg-zinc-200"},[t._v("售后服务")])]),s("router-link",{staticClass:"text-black",attrs:{to:"/user/support"}},[s("div",{staticClass:"px-10 py-2 border-b hover:bg-zinc-200"},[t._v("我的优惠")])]),s("a",{staticClass:"text-black",attrs:{"href.sync":""},on:{click:t.logout}},[s("div",{staticClass:"px-10 py-2 text-center hover:bg-zinc-200"},[t._v("退出")])])],1)]),s("a",{staticClass:"h-8 iconfont icon-wode text-xl px-8 text-white flex items-center"})],2),s("a-popover",{attrs:{placement:"bottom"},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[s("template",{slot:"content"},[s("div",{staticClass:"w-96-scroll relative"},[s("div",{staticClass:"cart-d w-96-scroll max-h-84 overflow-auto pb-20"},t._l(t.carList,(function(t){return s("div",{key:t.id,staticClass:"py-4 border-b pl-4 last:border-b-0"},[s("ProductCart",{attrs:{num:t.num,title:t.product.productDetail.title,imgUrl:t.product.productImageUrl,price:t.product.productDetail.salePrice}})],1)})),0),s("div",{staticClass:"w-96 cart-handler h-20 border-t flex justify-between items-center bg-white absolute bottom-0"},[s("div",{staticClass:"cart-left ml-4"},[s("div",{staticClass:"text-sm text-zinc-300 tracking-widest"},[t._v("共"+t._s(t.productTotal)+"件商品")]),s("div",{staticClass:"text-base mt-1"},[t._v("合计: "),s("span",{staticClass:"text-red-600"},[t._v("￥ "),s("span",{staticClass:"text-2xl"},[t._v(t._s(t.totalPrice))])])])]),s("div",{staticClass:"cart-right mr-4"},[s("router-link",{attrs:{to:"/cart"}},[s("button",{staticClass:"bg-blue-600 text-white h-12 text-xl px-6 rounded-lg"},[t._v("去购物车")])])],1)])])]),s("div",{staticClass:"h-8 iconfont icon-gouwucheman text-2xl px-8"})],2)],1)]),t.showNav?s("nav",{staticClass:"px-40 nav h-20 flex space-x-6 items-center bg-white shadow-2xl"},t._l(t.navList,(function(e,i){return s("div",{key:e.id},[s("span",{staticClass:"mr-6 font-bold"},[t._v("·")]),s("a",{class:{activeNav:i===t.currentIndex},attrs:{href:e.toUrl}},[t._v(t._s(e.title))])])})),0):t._e(),s("router-view"),t._m(2)],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"h-left flex justify-center h-full items-center"},[s("a",{attrs:{href:"/"}},[s("div",{staticClass:"h-8 w-8 text-2xl bg-white text-center text-black rounded-3xl p-2 box-content"},[t._v("M")])])])},function(){var t=this,s=t._self._c;return s("a",{attrs:{"href.sync":""}},[s("span",{staticClass:"iconfont icon-sousuo absolute text-gray-400 right-1 text-xl h-8 flex items-center top-0"})])},function(){var t=this,s=t._self._c;return s("footer",{staticClass:"px-40 pb-10"},[s("div",{staticClass:"footer-content flex pt-16 pb-6"},[s("div",{staticClass:"left flex justify-between w-2/3"},[s("div",{staticClass:"flex flex-col w-1/5"},[s("div",{staticClass:"siteinfo-title"},[t._v("选购指南")]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("购买指南")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("支付方式")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("送货政策")])])]),s("div",{staticClass:"flex flex-col w-1/5"},[s("div",{staticClass:"siteinfo-title"},[t._v("服务支持")]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("官方开源")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("项目前端")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("项目后端")])])]),s("div",{staticClass:"flex flex-col w-1/5"},[s("div",{staticClass:"siteinfo-title"},[t._v("自助服务")]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("个人博客")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("个人简介")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("关于小M")])])]),s("div",{staticClass:"flex flex-col w-1/5"},[s("div",{staticClass:"siteinfo-title"},[t._v("其他项目")]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"siteinfo-text"},[t._v("待开发...")])])]),s("div",{staticClass:"flex flex-col w-1/5"},[s("div",{staticClass:"siteinfo-title"},[t._v("友情链接")]),s("a",{attrs:{href:"https://vuex.vuejs.org"}},[s("div",{staticClass:"siteinfo-text"},[t._v("Vuex")])]),s("a",{attrs:{href:"https://router.vuejs.org"}},[s("div",{staticClass:"siteinfo-text"},[t._v("Vue-Route")])]),s("a",{attrs:{href:"https://cn.vuejs.org/"}},[s("div",{staticClass:"siteinfo-text"},[t._v("Vue")])])])]),s("div",{staticClass:"right w-1/2 flex flex-col justify-center items-end"},[s("div",{staticClass:"text-2xl text-cyan-500"},[t._v("XXXXXXXXXXX")]),s("div",{staticClass:"text-xs text-stone-400 mt-2"},[t._v("周一至周日 10:00-23:00")])])]),s("div",{staticClass:"border border-stone-100"}),s("div",{staticClass:"text-sm text-stone-600 mt-6"},[t._v("本项目为个人学习项目所有设计内容来源于网络")])])}],r=(e(7658),e(3822)),l={data(){return{keyword:"",visible:!1,setTimeInstance:null}},methods:{toUrl(t){console.log(t)},logout(){localStorage.removeItem("token"),this.$router.push({path:"/login"})},changeVisible(){this.setTimeInstance&&clearTimeout(this.setTimeInstance),this.setTimeInstance=setTimeout((()=>{this.visible=!1}),3e3)}},computed:{...(0,r.rn)({navList:t=>t.HomeStore.navList,currentIndex:t=>t.HomeStore.currentIndex,userInfo:t=>t.MainStore.userInfo,carList:t=>t.MainStore.carList}),...(0,r.Se)(["totalPrice","productTotal"]),userNameV(){return JSON.parse(localStorage.getItem("username"))},showNav(){return this.$route.meta.showNav}},created(){this.$store.dispatch("GetNavList"),this.$store.dispatch("GetUserInfo",this),console.log(this.$store.getters.totalPrice)}},o=l,c=e(1001),n=(0,c.Z)(o,i,a,!1,null,null,null),v=n.exports}}]);