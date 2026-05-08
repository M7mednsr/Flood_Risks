import TopographicBackground from '../components/layout/TopographicBackground';
import Flood1966Images from '../components/flood1966/Flood1966Images';
import Flood1966Section from '../components/flood1966/Flood1966Section';
import { flood1966Sections } from '../data/flood1966Data';

function Flood1966Page() {
  return (
    <main className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center overflow-x-hidden" dir="rtl">
      <TopographicBackground />
      <div className="w-full max-w-[1500px] flex flex-col items-center relative z-10">

        {/* Page Header */}
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
            <h1 className="text-[8rem] font-black text-blue-900 pointer-events-none whitespace-nowrap overflow-hidden">
              فيضان 1966
            </h1>
          </div>

          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100 shadow-sm">
            حدث تاريخي
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            فيضان 1966
          </h1>
          <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto mt-8 rounded-full relative z-10"></div>
        </div>

        {/* Right Aligned Subtitle */}
        <div className="w-full text-right mb-16 px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 border-r-4 border-blue-500 pr-4 py-1 mx-10">
            الكارثه التي هددت التراث الإنساني:
          </h2>
        </div>
      <div className="h-6  md:h-10 w-full"></div>

        {/* Hero Images — Section 1 */}
        <Flood1966Images />

        {/* Sections 2–9 — data driven */}
        {flood1966Sections.map((section) => (
          <Flood1966Section
            key={section.id}
            title={section.title}
            text={section.text}
            images={section.images}
          />
        ))}

      </div>
    </main>
  );
}

export default Flood1966Page;

