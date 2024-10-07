import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import BaseContent from './pages/BaseContent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseContent />} >
          <Route index element={<Home />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
