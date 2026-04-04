import heroBg from '../../assets/HeroImage.png';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image — fills full width, height auto so it never crops */}
      <img
        src={heroBg}
        alt="Aerial view of Florence river during flood risk"
        className="w-full h-auto block object-cover"
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div style={{ marginLeft: '20%' }}>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm text-blue-200 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block" />
            Risk Analysis Platform
          </span>

          {/* Main heading */}
          <h1 className="text-white font-extrabold drop-shadow-2xl text-left leading-tight tracking-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Flood Risks
            <br />
            <span className="text-blue-300">in Florence</span>
            <span className="text-white">, Italy</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
