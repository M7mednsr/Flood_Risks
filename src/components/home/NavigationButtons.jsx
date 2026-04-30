import { Link } from 'react-router-dom';

const buttons = [
  {
    label: 'Hydrology Maps',
    description: 'Explore river flow data, drainage basins, and hydrological risk zones across Florence.',
    path: '/hydrology',
    gradient: 'from-blue-700 to-cyan-500',
    hoverGradient: 'hover:from-blue-800 hover:to-cyan-600',
    shadow: 'hover:shadow-cyan-500/30',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15c0-3 2.5-5 4.5-3.5S11 14 13 12s3-5 5-3.5S21 12 21 15a9 9 0 01-18 0z" />
      </svg>
    ),
  },
  {
    label: 'Flood 1966',
    description: 'Analyse elevation models, terrain profiles, and surface features of the Florence basin.',
    path: '/flood1966',
    gradient: 'from-slate-700 to-indigo-600',
    hoverGradient: 'hover:from-slate-800 hover:to-indigo-700',
    shadow: 'hover:shadow-indigo-500/30',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 0V4" />
      </svg>
    ),
  }
];

export default function NavigationButtons() {
  return (
    <section id="explore" className="w-full bg-slate-50 pt-8 pb-16 sm:pt-16 sm:pb-32 md:pt-24 md:pb-48 px-4 sm:px-6 lg:px-8">

      {/* Centred column */}
      <div className="flex flex-col items-center text-center">

        {/* Section header */}
        <p className="text-blue-600 uppercase tracking-widest text-xs font-bold mb-2">
          Explore the data
        </p>
        <h2 className="text-slate-800 font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl mb-3">
          Navigate to Key Analysis Layers
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed mb-10 sm:mb-12">
          Select a module below to dive into Florence&apos;s flood risk datasets,
          maps, and predictive analytics.
        </p>

        {/* Card grid — 1 col mobile / 2 col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-4/5 sm:w-full max-w-3xl">
          {buttons.map((btn) => (
            <Link
              key={btn.path}
              to={btn.path}
              className={`
                group relative overflow-hidden rounded-2xl
                bg-linear-to-br ${btn.gradient} ${btn.hoverGradient}
                text-white shadow-lg hover:shadow-2xl ${btn.shadow}
                transition-all duration-300 ease-in-out hover:-translate-y-1.5
                p-4 sm:p-10 flex flex-col items-center text-center gap-3 sm:gap-5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
              `}
            >
              {/* Decorative circles */}
              <span className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
              <span className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500" />

              {/* Icon */}
              <div className="relative z-10 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7">
                {btn.icon}
              </div>

              {/* Text */}
              <div className="relative z-10 flex-1">
                <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 tracking-tight">{btn.label}</h3>
                <p className="text-xs sm:text-base text-white/80 leading-relaxed">{btn.description}</p>
              </div>

              {/* Arrow CTA */}
              <div className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-white/90 group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-200 bg-white/10 hover:bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                <span>Explore</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Explicit spacer to force bottom scroll area */}
      <div className="h-12 md:h-20 w-full"></div>
    </section>
  );
}
