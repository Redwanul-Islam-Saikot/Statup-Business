const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 5.92c-.7.31-1.45.52-2.24.61.8-.48 1.42-1.24 1.71-2.15-.75.45-1.6.78-2.49.96A4.02 4.02 0 0015.5 4c-2.22 0-4.02 1.8-4.02 4.02 0 .32.04.63.11.93-3.34-.17-6.3-1.77-8.28-4.2-.35.6-.55 1.29-.55 2.03 0 1.4.71 2.63 1.78 3.35-.66-.02-1.28-.2-1.82-.5v.05c0 1.96 1.39 3.6 3.23 3.98-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.07.52 1.62 2.03 2.8 3.82 2.83A8.07 8.07 0 012 19.54a11.38 11.38 0 006.15 1.8c7.38 0 11.42-6.11 11.42-11.42v-.52c.78-.56 1.46-1.25 2-2.04-.72.32-1.5.54-2.3.63z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.03c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v7.03C18.34 21.2 22 17.06 22 12.07z" />
  </svg>
);

const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm5.9 5.3c-1.2-.6-2.9-.9-4.5-.9-.3 0-.7 0-1 .1.8 1.3 1.5 2.9 1.8 4.2 2.1-.6 3.8-1.6 3.7-3.4 0 0-.1-.5-.1-.9 0-.4-.1-.7-.1-1.1zM6.7 7.6c.1.7.4 1.4.9 2.1 1.6 2.3 4.9 3.4 8 3.6-.3.7-.6 1.3-.9 1.9-3.1-.2-6.6-.9-9-3.6-.7-.8-1-1.7-1.1-2.6.5.2 1 .3 1.9.6z" />
  </svg>
);

const team = [
  {
    name: "Vanessa Laird",
    role: "UI DESIGNER",
    image: "/Vanessa.png",
  },
  {
    name: "Mason Campbell",
    role: "UI DESIGNER",
    image: "/Mason.png",
  },
  {
    name: "Irea Evans",
    role: "CLIENT MANAGER",
    image: "/Irea.png",
  },
];

function EnvelopeIllustration() {
  return (
    <img
      src="/Frame.png"
      alt="Email frame"
      className="w-full h-auto rounded-3xl shadow-lg"
    />
  );
}

export default function TeamAndNewsletter() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Team section */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-2">
            OUR TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f3d]">
            Meet The Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {team.map(({ name, role, image }) => (
            <div
              key={name}
              className="border border-gray-100 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col items-center pt-8 pb-6">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold text-[#1a1a4e]">{name}</h3>
                <p className="text-xs tracking-[0.2em] text-gray-400 mt-1">
                  {role}
                </p>
              </div>
              <div className="grid grid-cols-3 border-t border-gray-100">
                <button className="flex items-center justify-center py-3 text-gray-400 border-r border-gray-100 hover:text-[#ff6a00] transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center py-3 text-gray-400 border-r border-gray-100 hover:text-[#ff6a00] transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center py-3 text-gray-400 hover:text-[#ff6a00] transition-colors">
                  <DribbbleIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

       
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-2">
            NEWSLETTER
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f3d]">
            Subscribe to Our Newsletter
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xs mx-auto md:mx-0">
            <EnvelopeIllustration />
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>

           <input
              type="email"
              placeholder="Your E-mail here..."
              className="w-full border border-gray-200 rounded-full px-6 py-4 mb-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-[#ff6a00]"
            />
           

            <img
              src="/Group 21.png"
              alt="Newsletter group illustration"
              className="mt-6 rounded-3xl shadow-lg"
              style={{ width: "700px", height: "49px", objectFit: "cover" }}
            />

          </div>
        </div>
      </div>
    </div>
  );
}