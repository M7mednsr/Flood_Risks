import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import HydrologyMapsPage from './pages/HydrologyMaps'
import FloodIndicatorsPage from './pages/FloodIndicators'
import FloodHazardsPage from './pages/FloodHazards'
import Flood1966 from './pages/Flood1966'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hazards" element={<FloodHazardsPage />} />
          <Route path="/hydrology" element={<HydrologyMapsPage />} />
          <Route path="/indicators" element={<FloodIndicatorsPage />} />
          <Route path="/flood1966" element={<Flood1966 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
