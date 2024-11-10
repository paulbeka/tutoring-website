import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import BaseContent from './pages/BaseContent'
import Services from './pages/Services';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import PageNotFound from './pages/PageNotFound';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseContent />} >
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blog-post/:id" element={<BlogPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
