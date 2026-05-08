import { useState } from 'react';

const MapSection = ({ id, title, titleDir = 'rtl', description, image, analysis, conclusion }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-10 mb-16 w-full max-w-[1600px] mx-auto items-center" dir="rtl">

        {/* Section Header */}
        <div className="flex items-center justify-center gap-6 w-full">
          <div className="hidden md:block flex-1 h-px bg-linear-to-r from-transparent to-slate-300"></div>
          <span
            className="bg-white text-blue-900 border border-slate-200 px-8 py-3 rounded-full text-xl font-bold shadow-md text-center"
            dir={titleDir}
          >
            {title}
          </span>
          <div className="hidden md:block flex-1 h-px bg-linear-to-l from-transparent to-slate-300"></div>
        </div>

        {/* Main Card */}
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl duration-300 group">
          <div className="flex flex-col items-center">

            {/* Map Image */}
            <div
              className="w-full relative overflow-hidden bg-slate-50 cursor-pointer group/image"
              onClick={() => setIsImageOpen(true)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-[80vh] object-contain group-hover/image:scale-[1.02] transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover/image:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/95 text-blue-900 px-8 py-4 rounded-full text-lg font-bold shadow-2xl opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform translate-y-4 group-hover/image:translate-y-0 flex items-center gap-3 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  تكبير الخريطة
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center bg-linear-gradient-to-b from-slate-50 to-white relative text-center">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mt-8 mb-4 pb-4 border-b-2 border-slate-200 inline-block text-center mx-auto" dir={titleDir}>
                {title}
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium text-center max-w-3xl mx-auto">
                {description}
              </p>

              {/* Analysis + Conclusion Boxes */}
              <div className="flex flex-col xl:flex-row gap-8 lg:gap-10 w-full max-w-6xl mx-auto justify-center items-stretch">

                {/* Analysis */}
                <div className="flex-1 h-full bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group/box hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300 flex flex-col items-center">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-400 to-blue-600"></div>
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 mb-5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">التحليل</h3>
                  <p
                    className="text-slate-600 leading-relaxed text-center text-base flex-1 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: analysis }}
                  />
                </div>

                {/* Conclusion */}
                <div className="flex-1 h-full bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group/box hover:border-emerald-200 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-300 flex flex-col items-center">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-emerald-400 to-emerald-600"></div>
                  <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 mb-5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">الاستنتاج</h3>
                  <p
                    className="text-slate-600 leading-relaxed text-center text-base flex-1"
                    dangerouslySetInnerHTML={{ __html: conclusion }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setIsImageOpen(false)}
          dir="rtl"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto">
            <button
              className="absolute top-4 right-4 sm:top-0 sm:right-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-50 backdrop-blur-md"
              onClick={() => setIsImageOpen(false)}
              aria-label="إغلاق"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-6 mt-12 sm:mt-0">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3" dir={titleDir}>{title}</h3>
              <p className="text-slate-400 text-sm sm:text-base">انقر في أي مكان للإغلاق</p>
            </div>
            <div className="relative max-w-full max-h-[85vh] flex items-center justify-center">
              <img
                src={image.src}
                alt={`${title} - مكبرة`}
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
      <div className="h-12 md:h-20 w-full"></div>
    </>
  );
};

export default MapSection;
