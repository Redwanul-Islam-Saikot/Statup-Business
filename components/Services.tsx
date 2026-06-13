const IconActivity = ({ className }: { className?: string }) => (
  <img
    src="/Activity.png"
    alt="Graphic Design icon"
    className={className}
  />
);

const IconVideo = ({ className }: { className?: string }) => (
  <img
    src="/Video.png"
    alt="Video Editing icon"
    className={className}
  />
);

const IconBarChart = ({ className }: { className?: string }) => (
  <img
    src="/Chart.png"
    alt="Digital Marketing icon"
    className={className}
  />
);

const services = [
  {
    icon: IconActivity,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
  {
    icon: IconVideo,
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
  {
    icon: IconBarChart,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-gray-400 mb-3">
          SERVICE
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#050f1b] mb-12">
          Our Vision &amp; Our Goal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] px-8 py-10 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 object-contain" />
              </div>

              <h3 className="text-2xl font-bold text-[#15171c] mb-4">
                {title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-8">
                {description}
              </p>

              <button className="bg-[#ff6a00] hover:bg-[#e85f00] text-white font-medium px-7 py-3 rounded-full transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

