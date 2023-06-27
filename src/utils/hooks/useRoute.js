/**
 * 封装路由跳转
 */

import { useRoute, useRouter } from 'vue-router'

//路由跳转
const goPage = () => {
  const route = useRoute()
  const router = useRouter()

  const push = (path, query) => {
    router.push({ path, query })
  }

  const goBack = () => {
    router.go(-1)
  }

  return {
    route,
    router,
    push,
    goBack
  }
}

export default goPage
