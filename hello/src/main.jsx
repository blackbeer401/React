import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 처음 만들어질때 자동으로 실행된
// 혹시 종료 한 후 다시 실행하고 싶다면? 
// 터미널에서 해당폴더로 이동 한 후  npm run dev 입력

// npm run dev -- --host 를 사용하면 같은 네트워크의 다른 컴퓨터 에서도 접속이 가능하다



// 웹서버에 배포실습
// 터미널에서 이 프로젝트 파일들을 순수 html css js 형태로 만드러주는 명령어 실행.
// npm run build 
// 정상적으로 수행되면  프로젝트 폴더에 dist(배포본) 라는 이름의 폴더가 새로 생겨남

// 그 dist 폴더 안에 있는 파일과 폴더들을 서버에 업로드 하면 된다.

// 주의!
// 혹시 호스팅할때 index.html의 위치가 .. root 폴더가 아니면? (현재 연습중인 dothome 에서는 html 폴더)
// 더불어  /vite 처럼 서브경로가 있다면 페이지가 보이지 않을것임 
// ex)https://monster2026aix.dothome.co.kr/ 여기가 root 
// ex)https://monster2026aix.dothome.co.kr/vite/

// 서브 경로를 vite.config 에 등록해야함