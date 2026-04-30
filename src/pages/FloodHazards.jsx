import TopographicBackground from '../components/layout/TopographicBackground';
import FloodHazardMap from '../components/hazards/FloodHazardMap';

function FloodHazardsPage() {
  return (
    <main className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center overflow-x-hidden" dir="rtl">
      <TopographicBackground />
      <div className="w-full max-w-[1500px] flex flex-col items-center relative z-10">
        
        {/* Page Header matching HydrologyMaps */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
            <h1 className="text-[8rem]  text-blue-900 pointer-events-none whitespace-nowrap overflow-hidden">
              مخاطر الفيضانات
            </h1>
          </div>
          
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100 shadow-sm">
            التحليل المكاني
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            
              مخاطر الفيضانات 
            
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
            تقييم وتحليل مناطق الخطر المحتملة بناءً على النماذج الهيدرولوجية.
          </p>
          <div className="h-1.5 w-24 bg-linear-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-8 rounded-full relative z-10"></div>
        </div>

        {/* Map Container */}
        <div>
          <FloodHazardMap />
        </div>

      </div>
    </main>
  )
}

export default FloodHazardsPage;
