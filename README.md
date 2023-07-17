## Nuber Eats FrontEnd

# 17.18 Header part Two

Fontawesome 설치

npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

+추가 스타일
npm install --save @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons

https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

# 17.17 Header part One

em, rem
em, rem은 CSS의 font-size 속성 값에 비례해서 결정되는 상대 단위이다.
em의 경우, 해당 단위가 사용되고 있는 요소의 font-size 속성 값이 기준
rem에서 root, 즉 최상위 요소의 font-size 속성 값이 기준 (HTML에서 최상위 요소는 html태그)
따라서 rem 경우, html 요소의 font-size 속성 값이 기준이 됩니다.

# 17.16 Routers and 404s

react-router-dom v6에서 Switch가 Routes로 변경되었고,
exact가 삭제되었으며 Not Found는 path에 \*을 넣어주면 됩니다.
child는 element프로퍼티로 전달해주면 됩니다.
https://stackoverflow.com/questions/67050966/how-to-build-a-404-page-with-react-router-dom-v6

Redirect도 삭제되었으며, element로 Navigate를 넣어주시면됩니다
https://stackoverflow.com/questions/69868956/how-to-redirect-in-react-router-v6

# 17.15 Using the Token

Header
Apollo Links를 함께 연결하여 모든 HTTP 요청에 authorization 헤더를 추가하십시오.
request를 할 때마다 localStorage에서 토큰을 가져와서 헤더에 추가해서 보낼 수 있습니다.
https://www.apollographql.com/docs/react/networking/authentication/#header

Apollo Link
Apollo Link 라이브러리를 사용하면 Apollo 클라이언트와 GraphQL 서버 간의 데이터 흐름을 사용자 지정할 수 있습니다.
https://www.apollographql.com/docs/react/api/link/introduction/

Array.prototype.concat()
concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

# 17.14 Saving the Token

react-helmet-async
npm i react-helmet-async
https://www.npmjs.com/package/react-helmet-async

로그인 전에 remember me라는 체크리스트를 통해 체크 시 로그인을 유지시키고, 체크하지 않을 시 브라우저 종료시 로그인을 유지시키지 않는 기능도 고려해보기

# 17.13 Create Account Mutation part Two

자바스크립트 email 정규표현식

```
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

https://emailregex.com/

React Router 6버전 사용시
history=>navigate로 변경

```
const navigate = useNavigate();

navigate("/login");
navigate("/login",{ state : { email, password } } ); // state 사용시
```

계정 생성후, 생성한 이메일과 비밀번호를 state에 담아서 Login페이지로 보낼 수 있습니다. 보낸 이메일과 비밀번호는 useLocation을 통해 가져와서 바로 form 창에 넣어줄 수 있습니다.

```
interface LocationState{
email: string;
password: string;
}

const location: Location = useLocation();
const state=location.state as LocationState
```

# 17.12 Create Account Mutation

React Helmet
npm i react-helmet
npm i @types/react-helmet -D
https://www.npmjs.com/package/react-helmet

또는 React Helmet Async사용
npm i react-helmet-async
npm i @types/react-helmet-async -D

https://www.npmjs.com/package/react-helmet-async

# 17.11 UI Clonning part Two

Customizing Colors
https://tailwindcss.com/docs/customizing-colors

Adding additional colors
기본 팔레트에 새로운 색상을 추가하려면 구성 파일의 theme.extend.colors 섹션에 추가하세요.
https://tailwindcss.com/docs/customizing-colors#adding-additional-colors

# 17.10 UI Clonning

우버이츠 로고 SVG파일

https://www.ubereats.com/_static/8b969d35d373b512664b78f912f19abc.svg

https://raw.githubusercontent.com/nomadcoders/nuber-eats-frontend/23ac6dbdde8631f177e7f2612de7e587f371f096/src/images/logo.svg

# 17.7 Apollo Codegen

https://www.graphql-code-generator.com/docs/guides/react
여기서 graphql-code-generator를 설치 하시면됩니다

# 17.6 Login Mutation part One

apollo-tooling
Apollo 워크플로를 위한 개발 및 생산 도구

npm install -g apollo
npm install apollo

https://github.com/apollographql/apollo-tooling

# 17.5 Form Login

Ring Width
box shadow가 있는 outline을 만들기 위한 유틸리티입니다.
https://tailwindcss.com/docs/ring-width

useForm()에서 errors대신 formState: { errors }로 가져오시면 됩니다.

PostCSS Language Support
위 vscode extension설치하면
@tailwind, @apply에 syntax error가 없어집니다

# 17.4 Form Design

TailwindCSS 클래스 검색
TailwindCSS 클래스들을 검색하고 찾아볼 수 있는 사이트입니다.
https://tailwind.build/classes
https://shuffle.dev/tailwind/classes

클래스 삭제 후, 자동완성 다시 켜기(Mac)
스페이스바 또는 option+esc

## Nuber Eats BackEnd

#16.1 TailwindCSS part One
https://tailwindcss.com/docs/installation
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

#16.3 Apollo Setup
https://www.apollographql.com/docs/react/get-started
npm install @apollo/client graphql

#16.4 React Router Dom
https://www.npmjs.com/package/react-router-dom?activeTab=versions
npm i react-router-dom
npm i react-router-dom@5.3.4
