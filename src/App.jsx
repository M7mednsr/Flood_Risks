import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import HydrologyMapsPage from './pages/HydrologyMaps'
import FloodIndicatorsPage from './pages/FloodIndicators'
import FloodHazardsPage from './pages/FloodHazards'
import TopographicMapsPage from './pages/TopographicMaps'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hazards" element={<FloodHazardsPage />} />
          <Route path="/hydrology" element={<HydrologyMapsPage />} />
          <Route path="/indicators" element={<FloodIndicatorsPage />} />
          <Route path="/topography" element={<TopographicMapsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
