import WaterBasinsMap from '../components/hydrology/WaterBasinsMap';
import FlowDirectionMap from '../components/hydrology/FlowDirectionMap';
import FalseCellsMap from '../components/hydrology/FalseCellsMap';
import OutlierProcessingMap from '../components/hydrology/OutlierProcessingMap';
import FlowAccumulationMap from '../components/hydrology/FlowAccumulationMap';
import TopographicBackground from '../components/layout/TopographicBackground';

function HydrologyMapsPage() {
  return (
    <main className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center overflow-x-hidden" dir="rtl">
      <TopographicBackground />
      <div className="w-full max-w-[1500px] flex flex-col items-center relative z-10">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
            <h1 className="text-[8rem] font-black text-blue-900 pointer-events-none whitespace-nowrap overflow-hidden">
              هيدرولوجيا
            </h1>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight relative z-10">
            الخرائط الهيدرولوجية
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
            تحليل مفصل لاتجاهات الجريان السطحي والمخاطر الهيدرولوجية في منطقة الدراسة.
          </p>
          <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto mt-8 rounded-full relative z-10"></div>
        </div>

        <div >
          <WaterBasinsMap />
          <FlowDirectionMap />
          <FalseCellsMap />
          <OutlierProcessingMap />
          <FlowAccumulationMap />
          {/* Future maps will be added here */}
        </div>
      </div>
    </main>
  )
}

export default HydrologyMapsPage;
