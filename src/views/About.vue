<template>
  <div class="about bg-zinc-50 h-full px-40">
    <div class="text-2xl pl-4 py-4 bg-zinc-150">关于本网站</div>
    <ul class="content bg-white">
      <li>
        1.本网站前端所使用的技术栈有 Vue2.0 + Vuex + Vue-Router + axios + Webpack
      </li>
      <li>
        2.使用组件库 ant-design-vue 1.0 + 轮播图使用swiper
      </li>
      <li>
        3.关于样式采用 Tailwindcss进行开发
      </li>
      <li>所包含的页面有首页，登录页，商品页，购物车列表，个人信息页面，由于个人无法使用微信二维码付款所以支付二维码使用Qrcode库进行模拟，
        更多的功能待解锁...</li>
      <div>---</div>
      <li>
        本网站后端采用nest.js（node框架） + TypeOrm 进行接口的开发，
        登录页验证码利用session认证，其他页面均用token验证。
      </li>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>