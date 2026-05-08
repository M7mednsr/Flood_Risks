import { useState } from 'react';
import img1 from '../../assets/flood1966/img1.jpeg';
import img2 from '../../assets/flood1966/img2.jpeg';

const Flood1966Images = () => {
  const [openImage, setOpenImage] = useState(null); // null | 'img1' | 'img2'

  return (
    <>
      {/* Dual Images Card Section */}
      <div className="flex justify-center items-center my-12 py-8">
        <div className="w-full max-w-5xl bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl shadow-2xl p-6 flex flex-row gap-4 items-stretch">

          {/* Left image — clickable */}
          <div
            className="flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative cursor-pointer group/img1"
            onClick={() => setOpenImage('img1')}
          >
            <img
              src={img1}
              alt="فيضان 1966 - صورة أولى"
              className="w-full h-full object-cover block group-hover/img1:scale-[1.02] transition-transform duration-700 ease-in-out"
              style={{ aspectRatio: '4/3' }}
              onError={(e) => { e.target.src = 'https://placehold.co/800x600/e2e8f0/475569?text=Image+1' }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover/img1:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/95 text-blue-900 px-6 py-3 rounded-full text-base font-bold shadow-2xl opacity-0 group-hover/img1:opacity-100 transition-all duration-300 transform translate-y-4 group-hover/img1:translate-y-0 flex items-center gap-2 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                تكبير الصورة
              </div>
            </div>
          </div>

          {/* Right image — clickable */}
          <div
            className="flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative cursor-pointer group/img2"
            onClick={() => setOpenImage('img2')}
          >
            <img
              src={img2}
              alt="فيضان 1966 - صورة ثانية"
              className="w-full h-full object-cover block group-hover/img2:scale-[1.02] transition-transform duration-700 ease-in-out"
              style={{ aspectRatio: '4/3' }}
              onError={(e) => { e.target.src = 'https://placehold.co/800x600/e2e8f0/475569?text=Image+2' }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover/img2:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/95 text-blue-900 px-6 py-3 rounded-full text-base font-bold shadow-2xl opacity-0 group-hover/img2:opacity-100 transition-all duration-300 transform translate-y-4 group-hover/img2:translate-y-0 flex items-center gap-2 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                تكبير الصورة
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Modal */}
      {openImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setOpenImage(null)}
          dir="rtl"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-0 sm:right-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-50 backdrop-blur-md"
              onClick={() => setOpenImage(null)}
              aria-label="إغلاق"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6 mt-12 sm:mt-0">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">فيضان 1966</h3>
              <p className="text-slate-400 text-sm sm:text-base">انقر في أي مكان للإغلاق</p>
            </div>

            <div className="relative max-w-full max-h-[85vh] flex items-center justify-center">
              <img
                src={openImage === 'img1' ? img1 : img2}
                alt="فيضان 1966 - مكبرة"
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

export default Flood1966Images;
