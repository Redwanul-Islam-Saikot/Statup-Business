const testimonials = [
  {
    quote:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    name: "Rayhan Curran",
    image: "/Rayhan.png",
    highlighted: false,
  },
  {
    quote:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    name: "Kayley Frame",
    image: "/Kayley.png",
    highlighted: false,
  },
  {
    quote: "The most important part of the Startup Framework is the samples",
    name: "Gene Whitfield",
    image: "/Gene.png",
    highlighted: false,
  },
  {
    quote:
      "I've built my website with Startup just in one day, and it was ready-to-go.",
    name: "Allan Kim",
    image: "/Allan.png",
    highlighted: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-gray-400 mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f1f3d]">
            What Clients say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20">
          {testimonials.map(({ quote, name, image, highlighted }) => (
            <div key={name} className="flex gap-5">
              <img
                src={image}
                alt={name}
                className={`w-16 h-16 rounded-lg object-cover shrink-0 ${
                  highlighted ? "border-2 border-[#5b4fe8] p-0.5" : ""
                }`}
              />
              <div>
                <p className="text-[#1a1a2e] leading-relaxed mb-6">{quote}</p>
                <p className="text-xs font-semibold tracking-[0.2em] text-gray-400">
                  {name.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}