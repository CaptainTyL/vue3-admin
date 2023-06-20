import { defAxios as request } from '@/utils/http'

export function getUsers(data = {}) {
  return request({
    url: '/users',
    method: 'get',
    data
  })
}
