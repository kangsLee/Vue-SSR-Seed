import LRU from 'lru-cache'
import axios from 'axios'

let api

if (process.__API__) {
  api = process.__API__
} else {
  api = process.__API__ = axios.create({
    baseURL: 'http://localhost:8080/api'
  })
  api.onServer = true
  // SSR의 사전패치 데이터 캐싱
  api.cachedItems = LRU({
    max: 10000,
    maxAge: 1000 * 60 * 15
  })

  // 서버 실행 후 리스트 사전 캐싱
  api.cachedIds = {}
  api.get(`movies`).then(res => {
    api.cachedIds[`movies`] = res.data
  })
}

export default api
