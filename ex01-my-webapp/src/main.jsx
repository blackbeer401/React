import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// MyApp.js 파일안에 있는 MyApp class 를 사용하기 위해 import 해야 한다.
import Myapp from './MyApp.jsx'
import MyApp from './MyApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MyApp>

    </MyApp>
  </StrictMode>,
)
