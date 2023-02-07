"use strict";(self["webpackChunkvue2_view"]=self["webpackChunkvue2_view"]||[]).push([[858],{9858:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-detail bg-zinc-50"},[e("div",{staticClass:"header px-40 py-4 bg-zinc-50 flex"},[e("div",{staticClass:"flex-shrink-0 bg-white w-96"},[e("img",{staticClass:"w-96 h-96",attrs:{src:t.activeImgUrl,alt:t.productInfo.title}}),e("div",{staticClass:"swiper-box relative px-14 group"},[e("div",{staticClass:"left-btn hidden group-hover:block"},[e("div",{ref:"s_prev",staticClass:"swiper-button-prev"})]),e("div",{ref:"swiper",staticClass:"swiper h-20-scroll w-full"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.productInfo.detailImg,(function(s,i){return e("div",{key:s,staticClass:"swiper-slide flex justify-center items-center",class:{activeImg:i===t.activeIndex},on:{click:function(e){return t.changeActiveImg(i)}}},[e("img",{staticClass:"h-20 w-full",attrs:{src:s,alt:s.title}})])})),0)]),e("div",{staticClass:"right-btn hidden group-hover:block"},[e("div",{ref:"s_next",staticClass:"swiper-button-next"})])])]),e("div",{staticClass:"product-desc bg-zinc-100 flex-1"},[e("div",{staticClass:"text-2xl pl-10 mt-8"},[t._v(" "+t._s(t.productInfo.title)+" ")]),e("div",{staticClass:"text pl-10 text-zinc-400 mt-2 border-b pb-6"},[t._v(" "+t._s(t.productInfo.desc)+" ")]),e("div",{staticClass:"pl-10 py-4 text-3xl text-red-500 font-bold border-b"},[e("span",{staticClass:"text-xl"},[t._v("￥")]),t._v(" "+t._s(t.productInfo.salePrice)+" ")]),e("div",{staticClass:"pl-10 text-2xl flex border-b py-4"},[e("span",{staticClass:"mr-8"},[t._v("数量")]),e("button",{staticClass:"w-10 h-10 rounded-3xl flex items-center justify-center bg-white",on:{click:function(e){return t.changeProductNum(-1)}}},[t._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductNum,expression:"ProductNum"}],staticClass:"mx-4 w-20 text-center bg-none",attrs:{type:"text"},domProps:{value:t.ProductNum},on:{input:function(e){e.target.composing||(t.ProductNum=e.target.value)}}}),e("button",{staticClass:"w-10 h-10 rounded-3xl flex items-center justify-center bg-white",on:{click:function(e){return t.changeProductNum(1)}}},[t._v("+")])]),t._m(0)])]),e("div",{staticClass:"datu px-40 bg-zinc-50 mt-10 pb-10"},[e("h2",{staticClass:"text-2xl m-0 pl-4 py-4 bg-zinc-150"},[t._v("产品详细介绍图")]),e("img",{staticClass:"w-full",attrs:{src:t.productInfo.detailInfoImg,alt:t.productInfo.title}})])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pl-10 mt-8"},[e("button",{staticClass:"text-white text-xl px-10 py-4 bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500 rounded-md"},[t._v("加入购物车")]),e("button",{staticClass:"ml-6 bg-zinc-200 text-xl px-10 py-4 bg-gradient-to-t from-zinc-200 via-zinc-300 to-zinc-200 rounded-md"},[t._v("现在购买")])])}],c=s(3390),a=s(2619);const l=t=>a.Z.get(`/product-detail/${t}`);var n={data(){return{productInfo:{},activeIndex:0,ProductNum:1}},computed:{activeImgUrl(){let t=this.productInfo.detailImg?this.productInfo.detailImg[this.activeIndex]:"";return t}},async created(){let t=this.$route.query.productDetailId;try{const e=await l(t);e.data.detailImg=e.data.detailImg.split(","),this.productInfo=e.data,console.log(e)}catch(e){}},methods:{changeActiveImg(t){this.activeIndex=t},changeProductNum(t){if(this.ProductNum>=this.productInfo.limitNum)this.ProductNum=this.productInfo.limitNum;else if(this.ProductNum<1)this.ProductNum=1;else{if(1===this.ProductNum)return-1!=t?void(this.ProductNum=this.ProductNum+t):void 0;this.ProductNum=this.ProductNum+t}}},watch:{productInfo(){this.$nextTick((()=>{new c.ZP(this.$refs.swiper,{modules:[c.rj,c.W_],slidesPerView:3,grid:{fill:"column",rows:1},navigation:{nextEl:this.$refs.s_next,prevEl:this.$refs.s_prev}})}))}}},o=n,u=s(1001),d=(0,u.Z)(o,i,r,!1,null,"a5a5eef6",null),p=d.exports}}]);