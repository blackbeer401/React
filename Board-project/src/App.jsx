import { Routes, Route } from 'react-router-dom'

import Header from './component/Header'
import Sidebar from './component/Sidebar'

import BoardList from './pages/BoardList'
import BoardView from './pages/BoardView'
import BoardWrite from './pages/BoardWrite'
import BoardEdit from './pages/BoardEdit'

function App() {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>

      <Routes>
        <Route path="/" element={<BoardList></BoardList>}></Route>
        <Route path="/write" element={<BoardWrite></BoardWrite>}></Route>
        <Route path="/view/:no" element={<BoardView></BoardView>}></Route>
        <Route path="/edit/:no" element={<BoardEdit></BoardEdit>}></Route>
      </Routes>
    </div>
  )
}

export default App