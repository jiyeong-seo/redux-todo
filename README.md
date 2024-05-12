![header](https://capsule-render.vercel.app/api?type=waving&color=FAED7D&text=%20TodoList%20%20&height=220&fontSize=50&fontColor=5d5d5d)
# 🗓 My Todo List 🗓

<a href="https://ibb.co/jhXhxjH"><img src="https://i.ibb.co/b191yG7/2024-05-12-10-11-12.png" alt="2024-05-12-10-11-12" border="0" /></a>

# 주소: [My Todo List](https://redux-todo-teal-seven.vercel.app/)

# 1. 폴더 구조
### 📁 상위 폴더 구조
<img width="212" alt="스크린샷 2022-10-13 오후 7 06 49" src="https://user-images.githubusercontent.com/92812508/195570956-032c16cc-374c-448a-aaa0-811cfa07045d.png">

### 📁 common 하위 폴더 구조
<img width="288" alt="스크린샷 2022-10-13 오후 7 08 04" src="https://user-images.githubusercontent.com/92812508/195571189-b53a1ae3-da52-4e9f-8bf4-94e69f5ad610.png">

###  📁 components 하위 폴더 구조
<img width="323" alt="스크린샷 2022-10-13 오후 7 08 46" src="https://user-images.githubusercontent.com/92812508/195575437-02edee31-075e-4a0d-a8c5-8bea1c88d024.png">

###  📁 pages 하위 폴더 구조
<img width="325" alt="스크린샷 2022-10-13 오후 7 09 02" src="https://user-images.githubusercontent.com/92812508/195575532-1a11234c-59e5-4074-ae23-a45c941c3c83.png">

###  📁 redux / shared(Router) 하위 폴더 구조
<img width="325" alt="스크린샷 2022-10-13 오후 7 10 36" src="https://user-images.githubusercontent.com/92812508/195575769-801b72c0-45b9-4b84-9dd0-da392a2d1e49.png">

# 컴포넌트를 위와 같은 폴더 구조로 분리한 이유
##  📁 common 폴더
- Todo 프로젝트 뿐만 아니라 모든 프로젝트에서의 재사용이 가능한 컴포넌트들의 모음
- 컴포넌트 내부에 직접적으로 값을 전달하지 않고 children 과 prpos만을 사용하여 값을 전달하도록 정의하여 재사용성을 높힘
##  📁 components 폴더
- 페이지별로 사용할 수 있는 컴포넌트들을 포함한 폴더들을 하위 폴더로 갖는 폴더
  e.g) components/todoList => Todo List에서만 사용하는 컴포넌트 폴더 => common폴더에 정의한 컴포넌트들만을 사용하여 재사용 100%!
## 📁 pages 폴더
- 각각의 프로젝트들(페이지)을 하위 폴더로 갖는 폴더
- e.g) pages/todoList => components에서 만든 Todo List 관련 props를 종합하여 만든 프로젝트(페이지)를 갖는 폴더
## 📁 redux 폴더
- redux 관련 config와 modul폴더를 하위로 갖는 폴더
## 📁 shared 폴더
- Router 관련 파일을 하위로 갖는 폴더


## 2. 기능

1. **Todo 추가 기능**

2. **Todo 삭제 기능**

3. **Todo 상태 변경 기능 - 완료 / 취소** 

4. **Todo 상세페이지 기능** 


![Footer](https://capsule-render.vercel.app/api?type=waving&color=FAED7D&height=220&fontSize=50&fontColor=5d5d5d&section=footer)
