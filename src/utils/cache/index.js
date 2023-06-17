import { createStorage } from './storage'

const prefixKey = 'YunCang_Admin_'

export const createLocalStorage = (option = {}) => {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage
  })
}

export const createSessionStorage = (option = {}) => {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage
  })
}

export const lStorage = createLocalStorage({ prefixKey })

export const sStorage = createSessionStorage({ prefixKey })
