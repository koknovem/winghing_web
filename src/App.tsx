import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Gallery />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
