import { useState } from 'react';

const ZoomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ImageCard = ({ image, onClick }) => (
  <div
    className="flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative cursor-pointer group"
    onClick={() => onClick(image)}
  >
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
      style={{ aspectRatio: image.wide ? '16/7' : '4/3' }}
      onError={(e) => { e.target.src = 'https://placehold.co/800x600/e2e8f0/475569?text=Image'; }}
    />
    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
      <div className="bg-white/95 text-blue-900 px-6 py-3 rounded-full text-base font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 backdrop-blur-sm">
        <ZoomIcon />
        تكبير الصورة
      </div>
    </div>
  </div>
);

const Flood1966Section = ({ title, text, images }) => {
  const [openImage, setOpenImage] = useState(null);
  const isSingle = images.length === 1;

  return (
    <>
      <div className="flex flex-col gap-10 mb-16 w-full max-w-5xl mx-auto items-center" dir="rtl">

        {/* Section Header */}
        <div className="flex items-center justify-center gap-6 w-full">
          <div className="hidden md:block flex-1 h-px bg-linear-to-r from-transparent to-slate-300"></div>
          <span className="bg-white text-blue-900 border border-slate-200 px-8 py-3 rounded-full text-xl font-bold shadow-md text-center">
            {title}
          </span>
          <div className="hidden md:block flex-1 h-px bg-linear-to-l from-transparent to-slate-300"></div>
        </div>

        {/* Main Card */}
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl duration-300">
          <div className="flex flex-col items-center">

            {/* Text */}
            <div className="w-full py-8 text-right" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">{text}</p>
            </div>

            {/* Images */}
            <div className={`w-full px-4 md:px-10 lg:px-12 pb-10 ${isSingle ? '' : 'flex flex-row gap-4 items-stretch'}`}>
              {images.map((image, i) => (
                <ImageCard key={i} image={image} onClick={setOpenImage} />
              ))}
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
            <button
              className="absolute top-4 right-4 sm:top-0 sm:right-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-50 backdrop-blur-md"
              onClick={() => setOpenImage(null)}
              aria-label="إغلاق"
            >
              <CloseIcon />
            </button>
            <div className="text-center mb-6 mt-12 sm:mt-0">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 text-sm sm:text-base">انقر في أي مكان للإغلاق</p>
            </div>
            <div className="relative max-w-full max-h-[85vh] flex items-center justify-center">
              <img
                src={openImage.src}
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

export default Flood1966Section;
