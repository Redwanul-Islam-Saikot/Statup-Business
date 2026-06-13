const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5 3 19 12 5 21" fill="white" />
  </svg>
);

const IconArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Explore() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left text content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
            Many Blocks and Components
          </h2>

          <p className="text-gray-400 leading-relaxed mb-10 max-w-sm">
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design.
          </p>

          <button className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-6 py-3 text-[#1a1a2e] font-medium hover:border-gray-300 transition-colors">
            Explore
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

       
        <div className="relative rounded-2xl overflow-hidden aspect-16/10">
          <img
            src="/Video Player.png"
            alt="Video player preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="w-20 h-20 rounded-full bg-[#4f3ce8] flex items-center justify-center shadow-lg hover:bg-[#4334c9] transition-colors"
            >
              <IconPlay />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}