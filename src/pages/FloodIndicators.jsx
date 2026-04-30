import TopographicBackground from '../components/layout/TopographicBackground';

function FloodIndicatorsPage() {
  return (
    <main className="relative min-h-screen p-8">
      <TopographicBackground />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Flood Prediction System</h1>
        <p className="text-gray-700">AI-driven flood predictions and forecasting models.</p>
      </div>
    </main>
  )
}

export default FloodIndicatorsPage;
