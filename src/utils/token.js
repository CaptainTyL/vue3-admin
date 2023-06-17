import { lStorage } from './cache'

const TOKEN_CODE = 'access_token'
const DURATION = 6 * 60 * 60

export const getToken = () => {
  return lStorage.get(TOKEN_CODE)
}

export const setToken = token => {
  return lStorage.set(TOKEN_CODE, token, DURATION)
}

export const removeToken = () => {
  lStorage.remove(TOKEN_CODE)
}
