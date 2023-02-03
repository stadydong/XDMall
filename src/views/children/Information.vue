<template>
  <div class="infomation">
		<h2 class="text-2xl pl-4 py-4 bg-zinc-150 mb-0">账号资料</h2>
    <div class=" content px-4">
      <div class=" flex py-4 border-b">
        <img :src="userInfo.imgUrl" alt="" class=" h-20 w-20">
        <div class=" ml-2 w-32 text-center">
          <div class="mb-2 text-xl">修改头像</div>
          <a-button type="primary">
            上传头像
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState({
      userInfo:state=>state.MainStore.userInfo
    })
  }
}
</script>

<style scoped>

</style>