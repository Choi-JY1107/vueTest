# project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 컨포넌트 생성할 때 참고할 것
app.js로 vue로 개발된 화면이 처음 받아오는 파일은 import
사이즈가 작거나, 사용자 빈도수가 낮은 애들은 웹팩없이
사이즈가 크거나, 사용자 빈도수가 높은 애들은 웹팩있게

### views는 메인 화면 
view에서 html 태그는 template 태그 안에
components는 자주 사용되는 것

### 네이밍
view는 뒤에 View라는 접미사 넣기