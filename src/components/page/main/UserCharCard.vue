<template>
  <div class="">
    <div class=" flex pt-2">
      <img :src="userImg" class=" ml-2 w-12 h-12 rounded-full flex-shrink-0" alt="">
      <div class="char-info mr-2 ml-4 flex-1">
        <div class=" mb-1  text-xs text-gray-400 font-semibold">{{ title }} <span class=" ml-2 text-sm">{{ createTime }}</span></div>
        <div class=" relative">
          <div class="div text-lg w-auto px-4 rounded-md min-h-11 h-auto py-2 inline-block bg-zinc-200">
            {{ content }}
            <!-- max-h-5 h-full -->
          </div>
          <!-- 消息窗旁边的三角形 -->
          <div class="bod absolute w-0 h-0 -left-3 top-3 border-transparent border-t-16 border-l-16 border-t-zinc-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    content:{
      type:String
    },
    title:{
      type:String
    },
    createTime:{
      type:String
    },
    userImg:{
      type:String
    }
  }
}
</script>

<style scoped>

</style>
