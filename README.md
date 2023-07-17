## Nuber Eats FrontEnd

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
