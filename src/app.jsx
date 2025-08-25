import Header from './components/Header'
import Hero from './components/Hero'
import { Services } from './components/Services'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Numbers from './components/Numbers'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
    // Inicializa Meta Pixel solo una vez
    if (typeof window.fbq !== "undefined") return;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", "1433480561311220"); // tu ID de pixel
    window.fbq("track", "PageView");
  }, []);

  



  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Numbers />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  )
}