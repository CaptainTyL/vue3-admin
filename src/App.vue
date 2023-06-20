<script setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>

<template>
  <a-config-provider :locale="zhCN">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </a-config-provider>
</template>

<style scoped lang="less">
  #app {
    height: 100%;
    .n-config-provider {
      height: inherit;
    }
  }
</style>
