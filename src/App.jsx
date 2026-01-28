import { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, ExternalLink, ArrowLeftRight } from 'lucide-react';

const App = () => {
  const [isAtelier, setIsAtelier] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animazione iniziale
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Gestione dello switch con animazione
  const handleSwitch = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    // Elementi nascosti istantaneamente, aspetta un frame per il render
    setTimeout(() => {
      setIsAtelier(!isAtelier);
      // Aspetta che il layout cambi, poi mostra con fade-in
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 50);
  };

  // Contenuti per le due modalità
  const content = {
    atelier: {
      title: "L'Arte della Sartoria",
      subtitle: "Atelier",
      description: "Immerso in una prestigiosa cornice di specchi dorati e mobili d'epoca, l'Atelier di Paola D'Onofrio ti accoglierà con personale altamente qualificato per vedere esauditi i tuoi sogni.",
      image: "/atelier.png",
      bgColor: "bg-white",
      textColor: "text-brand-blue",
      accentColor: "text-brand-blue-light",
      buttonBg: "bg-brand-blue",
      buttonText: "text-white",
      borderColor: "border-brand-blue/20",
      // Header con colore opposto
      headerBg: "bg-brand-blue",
      headerText: "text-white",
      logoInvert: "brightness-0 invert",
      // Layout: testo a sinistra, immagine a destra
      textOrder: "lg:order-1",
      imageOrder: "lg:order-2",
      textAlign: "lg:text-left lg:items-start",
    },
    outlet: {
      title: "Il Lusso Accessibile",
      subtitle: "Luxury Outlet",
      description: "Una selezione di pezzi unici da sposa e da cerimonia a prezzi esclusivi per realizzare i sogni di ognuna di voi. Brand prestigiosi, occasioni uniche: l'eleganza senza compromessi.",
      image: "/luxury-outlet.png",
      bgColor: "bg-brand-blue",
      textColor: "text-white",
      accentColor: "text-white/70",
      buttonBg: "bg-white",
      buttonText: "text-brand-blue",
      borderColor: "border-white/20",
      // Header con colore opposto
      headerBg: "bg-white",
      headerText: "text-brand-blue",
      logoInvert: "",
      // Layout: testo a destra, immagine a sinistra
      textOrder: "lg:order-2",
      imageOrder: "lg:order-1",
      textAlign: "lg:text-right lg:items-end",
    }
  };

  const current = isAtelier ? content.atelier : content.outlet;

  return (
    <div
      className={`min-h-screen ${current.bgColor} transition-colors duration-1000 ease-in-out`}
    >
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <header
          className={`w-full py-4 md:py-6 px-4 md:px-8 flex items-center justify-between ${current.headerBg} transition-colors duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Paola D'Onofrio"
              className={`h-10 md:h-14 w-auto transition-all duration-1000 ${current.logoInvert}`}
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://www.facebook.com/paoladonofrioatelier"
              target="_blank"
              rel="noopener noreferrer"
              className={`${current.headerText} hover:opacity-70 transition-all duration-300`}
              aria-label="Facebook"
            >
              <Facebook size={20} className="md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.instagram.com/paoladonofrioatelier"
              target="_blank"
              rel="noopener noreferrer"
              className={`${current.headerText} hover:opacity-70 transition-all duration-300`}
              aria-label="Instagram"
            >
              <Instagram size={20} className="md:w-6 md:h-6" />
            </a>
            <a
              href="mailto:help@paoladonofrio.it"
              className={`${current.headerText} hover:opacity-70 transition-all duration-300`}
              aria-label="Email"
            >
              <Mail size={20} className="md:w-6 md:h-6" />
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center px-4 md:px-8 lg:px-16 py-8 md:py-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Text Content */}
              <div
                className={`order-2 ${current.textOrder} ${current.textAlign} flex flex-col content-transition ${
                  isLoaded ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
                } ${isAnimating ? 'content-hidden' : ''}`}
              >
                {/* Subtitle */}
                <p
                  className={`font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-2 md:mb-4 ${current.accentColor} content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  {current.subtitle}
                </p>

                {/* Title */}
                <h1
                  className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-4 md:mb-6 ${current.textColor} content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  {current.title}
                </h1>

                {/* Description */}
                <p
                  className={`font-sans text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-xl ${current.accentColor} content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  {current.description}
                </p>

                {/* Toggle Switch */}
                <div
                  className={`mb-6 md:mb-8 content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  <button
                    onClick={handleSwitch}
                    disabled={isAnimating}
                    className={`toggle-switch flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full border-2 ${current.borderColor} ${current.textColor} hover:scale-105 active:scale-95 transition-transform duration-300 font-sans text-sm md:text-base font-medium`}
                    aria-label={`Passa a ${isAtelier ? 'Luxury Outlet' : 'Atelier'}`}
                  >
                    <ArrowLeftRight size={18} className="md:w-5 md:h-5" />
                    <span>
                      Scopri {isAtelier ? 'Luxury Outlet' : 'Atelier'}
                    </span>
                  </button>
                </div>

                {/* CTA Button */}
                <a
                  href="https://paoladonofrio.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 md:gap-3 ${current.buttonBg} ${current.buttonText} px-6 py-3 md:px-8 md:py-4 rounded-full font-sans text-sm md:text-base font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  Visita il Sito Completo
                  <ExternalLink size={16} className="md:w-5 md:h-5" />
                </a>
              </div>

              {/* Image */}
              <div
                className={`order-1 ${current.imageOrder} content-transition ${
                  isLoaded ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'
                } ${isAnimating ? 'content-hidden' : ''}`}
              >
                <div
                  className={`image-container rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  <img
                    src={current.image}
                    alt={isAtelier ? "Atelier Paola D'Onofrio" : "Luxury Outlet"}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover transition-transform duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          className={`w-full py-4 md:py-6 px-4 md:px-8 text-center ${
            isLoaded ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'
          }`}
        >
          <p className={`font-sans text-xs md:text-sm ${current.accentColor} transition-colors duration-1000`}>
            © {new Date().getFullYear()} Paola D'Onofrio. Tutti i diritti riservati.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
