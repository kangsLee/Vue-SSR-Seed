# Vue.js SSR 베이스 레포

> 서버사이드랜더링을 연습하자!  
> https://github.com/ccforward/vue-ssr 를 기반으로 수정 작업

## 기본 설치

``` bash
# npm
npm install

# yarn
yarn

# develop
npm run dev

# deploy
npm run deploy

# build
npm run build
```

## 프로젝트 구조

```

project /
  build /
    dev-server.js
    vue-loader.conf.js
    webpack.base.conf.js
    webpack.client.conf.js
    webpack.server.conf.js
  dist /
  node_modules /
  public /
  server /
    api /
      index.js
      movies.js
      users.js
    config.json
  src /
    css /
      main.css
    components /
    router /
      index.js
    store /
      index.js
    views /
    app.js
    App.vue
    client-entry.js
    index.html
    server-entry.js
  .gitignore
  app.js
  package.json
```

## 서버사이드랜더링 참고 사이트
[vue-server-renderer](https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer)

