import TopographicBackground from '../components/layout/TopographicBackground';
import MapSection from '../components/shared/MapSection';
import { indicatorsSections } from '../data/indicatorsData';

function FloodIndicatorsPage() {
  return (
    <main className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center overflow-x-hidden" dir="rtl">
      <TopographicBackground />
      <div className="w-full max-w-[1500px] flex flex-col items-center relative z-10">
        
        {/* Page Header matching HydrologyMaps */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
            <h1 className="text-[8rem] font-black text-blue-900 pointer-events-none whitespace-nowrap overflow-hidden">
              المؤشرات
            </h1>
          </div>
          
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100 shadow-sm">
            التحليل المكاني
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            المؤشرات
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed relative z-10 font-medium">
            تعد المؤاشرات الطيفيه من اهم الأدوات المستخدمه في تحليل صور الاستشعار عن بعد ،حيث تعتمد علي معاملات رياضيه بين نطاقات طيفية مختبلفة بهدف استخراج معلومات دقيقة عن الظواهر الطبيعية مثل الغطاء النباتي و المياه و التربة. وتسهم هذه المؤاشرات في الكشف عن التغيرات المكانية و الزمانية، وتسهيل مقارنه البيانات بين الفترات المختلفه، مما يدعم دقه التحليل الجغرافي.
          </p>
          <div className="h-1.5 w-24 bg-linear-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-8 rounded-full relative z-10"></div>
        </div>

        {indicatorsSections.map((section) => (
          <MapSection key={section.id} {...section} />
        ))}

      </div>
    </main>
  )
}


export default FloodIndicatorsPage;
