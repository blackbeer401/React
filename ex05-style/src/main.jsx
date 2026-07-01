import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Home from './Home'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <div>
     <Home></Home>
      {/* 적용되는 이유는 import Home 을 하면 home 에 적용된 css 도 같이 적용됨 */}
      {/* 실제 웹으로 배보될 때에는 모든 .jsx파일들이 하나의 .jsx로 만들어져 보여진다. 그렇기에 css도 모두 병합되어 버린다. */}
     <h2>여긴 main.jsx의 h2</h2>
     <p className='aa'>이건 main.js의 p</p>
     <p className='bb'>이건 main.js의 p</p>
  </div>
 
  
)
