import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const navLinks = ["Home", "About Us", "Our App", "Contacts"];
function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { style: styles$2.nav, children: [
    /* @__PURE__ */ jsx("div", { style: styles$2.logo, children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Epixelab Logo", style: { height: "40px", width: "auto" } }) }),
    /* @__PURE__ */ jsx("ul", { style: styles$2.navLinks, className: "desktop-nav-links", children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActive(link),
        style: {
          ...styles$2.navLink,
          ...active === link ? styles$2.navLinkActive : {}
        },
        children: link
      }
    ) }, link)) }),
    /* @__PURE__ */ jsxs("div", { style: styles$2.authButtons, className: "desktop-auth-buttons", children: [
      /* @__PURE__ */ jsx("button", { style: styles$2.loginBtn, children: "Log in" }),
      /* @__PURE__ */ jsx("button", { style: styles$2.signupBtn, children: "Sign up" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setMobileMenuOpen(!mobileMenuOpen),
        style: styles$2.mobileMenuBtn,
        className: "mobile-menu-btn",
        children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", children: [
          /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18", strokeWidth: "2" })
        ] })
      }
    ),
    mobileMenuOpen && /* @__PURE__ */ jsxs("div", { style: styles$2.mobileMenu, children: [
      /* @__PURE__ */ jsx("ul", { style: styles$2.mobileNavLinks, children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setActive(link);
            setMobileMenuOpen(false);
          },
          style: {
            ...styles$2.mobileNavLink,
            ...active === link ? styles$2.mobileNavLinkActive : {}
          },
          children: link
        }
      ) }, link)) }),
      /* @__PURE__ */ jsxs("div", { style: styles$2.mobileAuthButtons, children: [
        /* @__PURE__ */ jsx("button", { style: styles$2.mobileLoginBtn, children: "Log in" }),
        /* @__PURE__ */ jsx("button", { style: styles$2.mobileSignupBtn, children: "Sign up" })
      ] })
    ] })
  ] });
}
const styles$2 = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    height: "68px",
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    borderBottom: "1px solid #f0f0f0",
    boxSizing: "border-box",
    position: "relative"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    minWidth: "120px"
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "36px",
    flex: 1,
    justifyContent: "center"
  },
  navLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333333",
    fontWeight: 400,
    fontFamily: "inherit",
    padding: 0,
    letterSpacing: "0.01em",
    transition: "color 0.15s"
  },
  navLinkActive: {
    fontWeight: 700,
    color: "#111111"
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  loginBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333333",
    fontFamily: "inherit",
    fontWeight: 400,
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "color 0.15s",
    whiteSpace: "nowrap"
  },
  signupBtn: {
    background: "#F26419",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
    fontWeight: 600,
    padding: "10px 22px",
    borderRadius: "8px",
    transition: "background 0.15s",
    whiteSpace: "nowrap"
  },
  /* Mobile Menu */
  mobileMenuBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#333333",
    padding: "8px",
    fontSize: "24px"
  },
  mobileMenu: {
    position: "absolute",
    top: "68px",
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #f0f0f0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    zIndex: 1e3,
    padding: "16px 20px"
  },
  mobileNavLinks: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    margin: "0 0 16px 0",
    padding: 0,
    gap: "12px"
  },
  mobileNavLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333333",
    fontWeight: 400,
    fontFamily: "inherit",
    padding: "8px 0",
    letterSpacing: "0.01em",
    transition: "color 0.15s",
    textAlign: "left"
  },
  mobileNavLinkActive: {
    fontWeight: 700,
    color: "#F26419"
  },
  mobileAuthButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderTop: "1px solid #f0f0f0",
    paddingTop: "12px"
  },
  mobileLoginBtn: {
    background: "none",
    border: "1px solid #F26419",
    cursor: "pointer",
    fontSize: "15px",
    color: "#F26419",
    fontFamily: "inherit",
    fontWeight: 600,
    padding: "10px 16px",
    borderRadius: "8px",
    transition: "all 0.15s"
  },
  mobileSignupBtn: {
    background: "#F26419",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
    fontWeight: 600,
    padding: "10px 16px",
    borderRadius: "8px",
    transition: "background 0.15s"
  }
};
const footerLinks = ["Portfolio", "How it Works", "Pricing", "About", "Login"];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { style: styles$1.wrapper, children: [
    /* @__PURE__ */ jsxs("div", { style: styles$1.topRow, children: [
      /* @__PURE__ */ jsx("div", { style: styles$1.logo, children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Epixelab Logo", style: { height: "23px", width: "111px" } }) }),
      /* @__PURE__ */ jsx("p", { style: styles$1.copyright, children: "© 2020 Epixelab. All rights reserved." }),
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { style: styles$1.navLinks, children: footerLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", style: styles$1.navLink, children: link }) }, link)) }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { style: styles$1.divider }),
    /* @__PURE__ */ jsx("p", { style: styles$1.tagline, children: "Startup Framework contains components and complex blocks which can easily be integrated into almost any design." })
  ] });
}
const styles$1 = {
  wrapper: {
    padding: "24px 20px 32px",
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    boxSizing: "border-box",
    width: "100%"
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "20px"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    minWidth: "100px"
  },
  copyright: {
    margin: 0,
    fontSize: "clamp(12px, 2vw, 14px)",
    color: "#444444",
    fontWeight: 400
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "clamp(16px, 3vw, 28px)",
    flexWrap: "wrap"
  },
  navLink: {
    fontSize: "clamp(12px, 2vw, 14px)",
    color: "#222222",
    textDecoration: "none",
    fontWeight: 400,
    letterSpacing: "0.01em",
    transition: "color 0.15s"
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e8e8e8",
    margin: "0 0 20px 0"
  },
  tagline: {
    margin: 0,
    fontSize: "clamp(12px, 2vw, 13px)",
    color: "#aaaaaa",
    fontWeight: 400,
    lineHeight: 1.6,
    maxWidth: "640px"
  }
};
const MainLayout = UNSAFE_withComponentProps(function MainLayout2() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainLayout
}, Symbol.toStringTag, { value: "Module" }));
function EpixeLabHero() {
  return /* @__PURE__ */ jsxs("section", { style: styles.section, children: [
    /* @__PURE__ */ jsxs("div", { style: styles.left, children: [
      /* @__PURE__ */ jsx("h1", { style: styles.heading, children: "We boost growth for your statup business" }),
      /* @__PURE__ */ jsx("p", { style: styles.subtext, children: "Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment" }),
      /* @__PURE__ */ jsxs("div", { style: styles.actions, children: [
        /* @__PURE__ */ jsx("button", { style: styles.ctaBtn, children: "Get Started" }),
        /* @__PURE__ */ jsxs("button", { style: styles.learnBtn, children: [
          /* @__PURE__ */ jsx("span", { style: styles.playCircle, children: /* @__PURE__ */ jsx(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx("polygon", { points: "5,3 13,8 5,13", fill: "#333" })
            }
          ) }),
          /* @__PURE__ */ jsx("span", { style: styles.learnText, children: "Learn More" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: styles.right, children: /* @__PURE__ */ jsx("div", { style: styles.imagePlaceholder, children: /* @__PURE__ */ jsxs("div", { style: styles.heroImageWrapper, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/joyful.png",
          alt: "Joyful",
          style: styles.joyfulImg
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Group 7.png",
          alt: "Group 7",
          style: styles.group7Img
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Light.png",
          alt: "Light",
          style: styles.lightImg
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Group 4.png",
          alt: "Group 4",
          style: styles.group4Img
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Arrow.png",
          alt: "Arrow",
          style: styles.arrowImg
        }
      )
    ] }) }) })
  ] });
}
const styles = {
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "clamp(30px, 8vw, 60px) clamp(20px, 6vw, 80px)",
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    minHeight: "clamp(400px, 100vh, 600px)",
    boxSizing: "border-box",
    gap: "clamp(20px, 5vw, 40px)",
    overflow: "hidden",
    flexWrap: "wrap"
  },
  left: {
    flex: "0 0 45%",
    maxWidth: "520px",
    /* Tablet */
    minWidth: "300px"
  },
  heading: {
    fontSize: "clamp(28px, 5vw, 56px)",
    fontWeight: 800,
    color: "#0d1b3e",
    lineHeight: 1.1,
    margin: "0 0 24px 0",
    letterSpacing: "-1px"
  },
  subtext: {
    fontSize: "clamp(13px, 2vw, 15px)",
    color: "#555555",
    lineHeight: 1.7,
    margin: "0 0 40px 0",
    maxWidth: "460px"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    flexWrap: "wrap"
  },
  ctaBtn: {
    backgroundColor: "#F26419",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "clamp(13px, 2vw, 15px)",
    fontWeight: 600,
    fontFamily: "inherit",
    padding: "14px 32px",
    borderRadius: "10px",
    transition: "background 0.15s",
    whiteSpace: "nowrap"
  },
  learnBtn: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    padding: 0
  },
  playCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "3px solid #F26419",
    backgroundColor: "#fff",
    flexShrink: 0
  },
  learnText: {
    fontSize: "clamp(13px, 2vw, 15px)",
    fontWeight: 700,
    color: "#111111"
  },
  /* Right */
  right: {
    flex: "0 0 50%",
    position: "relative",
    height: "clamp(300px, 60vw, 520px)",
    minWidth: "280px",
    minHeight: "300px"
  },
  imagePlaceholder: {
    position: "absolute",
    right: "0",
    top: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    border: "2px solid #cce0ff",
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.3)",
    overflow: "visible"
  },
  heroImageWrapper: {
    position: "relative",
    width: "clamp(280px, 90vw, 606px)",
    height: "auto",
    aspectRatio: "606/618",
    maxWidth: "100%"
  },
  joyfulImg: {
    position: "relative",
    width: "100%",
    height: "auto",
    zIndex: 1,
    maxWidth: "100%"
  },
  group7Img: {
    position: "absolute",
    top: "clamp(5%, 10%, 15%)",
    left: "clamp(-50%, -30%, -10%)",
    width: "clamp(250px, 50vw, 475px)",
    height: "auto",
    aspectRatio: "475/273",
    zIndex: 2,
    maxWidth: "90vw",
    objectFit: "contain"
  },
  lightImg: {
    position: "absolute",
    top: "clamp(25%, 35%, 45%)",
    left: "clamp(-50%, -25%, -10%)",
    width: "clamp(180px, 35vw, 329.58px)",
    height: "auto",
    aspectRatio: "329.58/230.31",
    transform: "rotate(350deg)",
    zIndex: 2,
    maxWidth: "85vw",
    objectFit: "contain"
  },
  group4Img: {
    position: "absolute",
    top: "clamp(65%, 78%, 85%)",
    left: "clamp(-55%, -35%, -10%)",
    width: "clamp(250px, 50vw, 475px)",
    height: "auto",
    aspectRatio: "475/273",
    zIndex: 2,
    maxWidth: "90vw",
    objectFit: "contain"
  },
  arrowImg: {
    position: "absolute",
    top: "clamp(10%, 20%, 30%)",
    left: "clamp(50%, 65%, 75%)",
    width: "clamp(120px, 30vw, 229.58px)",
    height: "auto",
    aspectRatio: "229.58/230.31",
    transform: "rotate(10deg)",
    zIndex: 2,
    maxWidth: "70vw",
    objectFit: "contain"
  }
};
const IconActivity = ({ className }) => /* @__PURE__ */ jsx(
  "img",
  {
    src: "/Activity.png",
    alt: "Graphic Design icon",
    className
  }
);
const IconVideo = ({ className }) => /* @__PURE__ */ jsx(
  "img",
  {
    src: "/Video.png",
    alt: "Video Editing icon",
    className
  }
);
const IconBarChart = ({ className }) => /* @__PURE__ */ jsx(
  "img",
  {
    src: "/Chart.png",
    alt: "Digital Marketing icon",
    className
  }
);
const services = [
  {
    icon: IconActivity,
    title: "Graphic Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet."
  },
  {
    icon: IconVideo,
    title: "Video Editing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet."
  },
  {
    icon: IconBarChart,
    title: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet."
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-16 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold tracking-[0.3em] text-gray-400 mb-3", children: "SERVICE" }),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-extrabold text-[#050f1b] mb-12", children: "Our Vision & Our Goal" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: services.map(({ icon: Icon, title, description }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] px-8 py-10 flex flex-col items-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 object-contain" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#15171c] mb-4", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 leading-relaxed mb-8", children: description }),
          /* @__PURE__ */ jsx("button", { className: "bg-[#ff6a00] hover:bg-[#e85f00] text-white font-medium px-7 py-3 rounded-full transition-colors", children: "Learn More" })
        ]
      },
      title
    )) })
  ] }) });
}
const IconPlay = () => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("polygon", { points: "5 3 19 12 5 21", fill: "white" }) });
const IconArrowRight = ({ className }) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
  /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })
] });
function Explore() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-16 px-6 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6", children: "Many Blocks and Components" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed mb-10 max-w-sm", children: "Startup Framework contains components and complex blocks which can easily be integrated into almost any design." }),
      /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center gap-2 border border-gray-200 rounded-full px-6 py-3 text-[#1a1a2e] font-medium hover:border-gray-300 transition-colors", children: [
        "Explore",
        /* @__PURE__ */ jsx(IconArrowRight, { className: "w-4 h-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden aspect-16/10", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Video Player.png",
          alt: "Video player preview",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Play video",
          className: "w-20 h-20 rounded-full bg-[#4f3ce8] flex items-center justify-center shadow-lg hover:bg-[#4334c9] transition-colors",
          children: /* @__PURE__ */ jsx(IconPlay, {})
        }
      ) })
    ] })
  ] }) });
}
const testimonials = [
  {
    quote: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    name: "Rayhan Curran",
    image: "/Rayhan.png",
    highlighted: false
  },
  {
    quote: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    name: "Kayley Frame",
    image: "/Kayley.png",
    highlighted: false
  },
  {
    quote: "The most important part of the Startup Framework is the samples",
    name: "Gene Whitfield",
    image: "/Gene.png",
    highlighted: false
  },
  {
    quote: "I've built my website with Startup just in one day, and it was ready-to-go.",
    name: "Allan Kim",
    image: "/Allan.png",
    highlighted: false
  }
];
function TestimonialsSection() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-16 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold tracking-[0.3em] text-gray-400 mb-3", children: "TESTIMONIALS" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-extrabold text-[#0f1f3d]", children: "What Clients say about us" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20", children: testimonials.map(({ quote, name, image, highlighted }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: image,
          alt: name,
          className: `w-16 h-16 rounded-lg object-cover shrink-0 ${highlighted ? "border-2 border-[#5b4fe8] p-0.5" : ""}`
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[#1a1a2e] leading-relaxed mb-6", children: quote }),
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold tracking-[0.2em] text-gray-400", children: name.toUpperCase() })
      ] })
    ] }, name)) })
  ] }) });
}
const TwitterIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M22 5.92c-.7.31-1.45.52-2.24.61.8-.48 1.42-1.24 1.71-2.15-.75.45-1.6.78-2.49.96A4.02 4.02 0 0015.5 4c-2.22 0-4.02 1.8-4.02 4.02 0 .32.04.63.11.93-3.34-.17-6.3-1.77-8.28-4.2-.35.6-.55 1.29-.55 2.03 0 1.4.71 2.63 1.78 3.35-.66-.02-1.28-.2-1.82-.5v.05c0 1.96 1.39 3.6 3.23 3.98-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.07.52 1.62 2.03 2.8 3.82 2.83A8.07 8.07 0 012 19.54a11.38 11.38 0 006.15 1.8c7.38 0 11.42-6.11 11.42-11.42v-.52c.78-.56 1.46-1.25 2-2.04-.72.32-1.5.54-2.3.63z" }) });
const FacebookIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.03c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v7.03C18.34 21.2 22 17.06 22 12.07z" }) });
const DribbbleIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M12 2a10 10 0 100 20 10 10 0 000-20zm5.9 5.3c-1.2-.6-2.9-.9-4.5-.9-.3 0-.7 0-1 .1.8 1.3 1.5 2.9 1.8 4.2 2.1-.6 3.8-1.6 3.7-3.4 0 0-.1-.5-.1-.9 0-.4-.1-.7-.1-1.1zM6.7 7.6c.1.7.4 1.4.9 2.1 1.6 2.3 4.9 3.4 8 3.6-.3.7-.6 1.3-.9 1.9-3.1-.2-6.6-.9-9-3.6-.7-.8-1-1.7-1.1-2.6.5.2 1 .3 1.9.6z" }) });
const team = [
  {
    name: "Vanessa Laird",
    role: "UI DESIGNER",
    image: "/Vanessa.png"
  },
  {
    name: "Mason Campbell",
    role: "UI DESIGNER",
    image: "/Mason.png"
  },
  {
    name: "Irea Evans",
    role: "CLIENT MANAGER",
    image: "/Irea.png"
  }
];
function EnvelopeIllustration() {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "/Frame.png",
      alt: "Email frame",
      className: "w-full h-auto rounded-3xl shadow-lg"
    }
  );
}
function TeamAndNewsletter() {
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-white py-16 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-gray-400 mb-2", children: "OUR TEAM" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-[#0f1f3d]", children: "Meet The Team" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-24", children: team.map(({ name, role, image }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "border border-gray-100 rounded-lg overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center pt-8 pb-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                alt: name,
                className: "w-20 h-20 rounded-full object-cover mb-4"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[#1a1a4e]", children: name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] text-gray-400 mt-1", children: role })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 border-t border-gray-100", children: [
            /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center py-3 text-gray-400 border-r border-gray-100 hover:text-[#ff6a00] transition-colors", children: /* @__PURE__ */ jsx(TwitterIcon, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center py-3 text-gray-400 border-r border-gray-100 hover:text-[#ff6a00] transition-colors", children: /* @__PURE__ */ jsx(FacebookIcon, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsx("button", { className: "flex items-center justify-center py-3 text-gray-400 hover:text-[#ff6a00] transition-colors", children: /* @__PURE__ */ jsx(DribbbleIcon, { className: "w-4 h-4" }) })
          ] })
        ]
      },
      name
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-gray-400 mb-2", children: "NEWSLETTER" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-[#0f1f3d]", children: "Subscribe to Our Newsletter" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-xs mx-auto md:mx-0", children: /* @__PURE__ */ jsx(EnvelopeIllustration, {}) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed mb-6", children: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "Your E-mail here...",
            className: "w-full border border-gray-200 rounded-full px-6 py-4 mb-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-[#ff6a00]"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/Group 21.png",
            alt: "Newsletter group illustration",
            className: "mt-6 rounded-3xl shadow-lg",
            style: { width: "700px", height: "49px", objectFit: "cover" }
          }
        )
      ] })
    ] })
  ] }) });
}
function meta({}) {
  return [{
    title: "Statup Business"
  }, {
    name: "description",
    content: "Welcome to Statup Businesss!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(EpixeLabHero, {}), /* @__PURE__ */ jsx(Services, {}), /* @__PURE__ */ jsx(Explore, {}), /* @__PURE__ */ jsx(TestimonialsSection, {}), /* @__PURE__ */ jsx(TeamAndNewsletter, {})]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CFmDIFuz.js", "imports": ["/assets/jsx-runtime-Ca1JtvnU.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-B6U9_KQZ.js", "imports": ["/assets/jsx-runtime-Ca1JtvnU.js"], "css": ["/assets/root-aFeCXbmp.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "../layouts/MainLayout": { "id": "../layouts/MainLayout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/MainLayout-BTYfdXrf.js", "imports": ["/assets/jsx-runtime-Ca1JtvnU.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "../layouts/MainLayout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-DPvRJA9m.js", "imports": ["/assets/jsx-runtime-Ca1JtvnU.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-42b6dc43.js", "version": "42b6dc43", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "v8_passThroughRequests": true, "v8_trailingSlashAwareDataRequests": true, "unstable_previewServerPrerendering": false, "v8_middleware": true, "v8_splitRouteModules": true, "v8_viteEnvironmentApi": true };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "../layouts/MainLayout": {
    id: "../layouts/MainLayout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "../layouts/MainLayout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
