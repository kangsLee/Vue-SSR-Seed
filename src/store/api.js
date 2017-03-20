// 캐시할 api를 선언해둔다.

import api from 'create-api'

// 매 15분마다 프론트 페이지를 웜캐싱 한다. (웜캐싱 : 메모리에 올림)
// 모든 요청에 대해 한번만 수행되어야 한다.
// if (api.onServer && !api.warmCacheStarted) {
//   api.warmCacheStarted = true
//   warmCache()
// }

// function warmCache () {
//   fetch 수행코드 입력
//   setTimeout(warmCache, 1000 * 60 * 15)
// }

function fetch (child) {
  const cache = api.cachedItems
  if (cache && cache.has(child)) {
    return Promise.resolve(cache.get(child))
  } else {
    return new Promise((resolve, reject) => {
      api.get(child).then(res => {
        cache && cache.set(child, res.data)
        resolve(res.data)
      }, reject)
    })
  }
}

export function fetchUser (id) {
  return fetch(`users/${id}`)
}

export function fetchMovies () {
  return api.cachedIds && api.cachedIds[`movies`]
    ? Promise.resolve(api.cachedIds[`movies`])
    : fetch(`movies`)
}
