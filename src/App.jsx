import { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, ArrowLeftRight, MessageCircle, ExternalLink } from 'lucide-react';

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
    setTimeout(() => {
      setIsAtelier(!isAtelier);
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 50);
  };

  // Contenuti per le due modalità
  const content = {
    atelier: {
      title: "Atelier Paola D'Onofrio",
      subtitle: "Abiti da sposa e di alta moda su misura, con sartoria interna.",
      description: "Nel nostro atelier realizziamo abiti su misura: dal bozzetto alle prove, fino alla consegna. Prenota un appuntamento privato e raccontaci la tua idea: la trasformiamo in un abito unico.",
      badges: ["Dal 1982", "Sartoria interna", "Appuntamenti privati"],
      whatsapp: "393403680023",
      image: "/atelier.png",
      imageMobile: "/atelier-mobile.png",
      imagePosition: "object-top",
      bgColor: "bg-white",
      textColor: "text-brand-blue",
      accentColor: "text-brand-blue-light",
      buttonBg: "bg-brand-blue",
      buttonText: "text-white",
      buttonBorder: "border-2 border-brand-blue",
      borderColor: "border-brand-blue/20",
      badgeBg: "bg-brand-blue/10",
      badgeText: "text-brand-blue",
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
      title: "Luxury Outlet",
      subtitle: "Abiti da sposa in pronta consegna a prezzi esclusivi.",
      description: "Una selezione di abiti da sposa e cerimonia: pezzi unici, disponibilità immediata e condizioni riservate. Prenota la prova in showroom e trova il tuo abito senza compromessi.",
      badges: ["Dal 1982", "Pezzi unici", "Prezzi riservati"],
      whatsapp: "393426285267",
      image: "/luxury_outlet.png",
      imageMobile: "/luxury_outlet-mobile.png",
      imagePosition: "object-top",
      bgColor: "bg-brand-blue",
      textColor: "text-white",
      accentColor: "text-white/80",
      buttonBg: "bg-white",
      buttonText: "text-brand-blue",
      buttonBorder: "border-2 border-white",
      borderColor: "border-white/30",
      badgeBg: "bg-white/15",
      badgeText: "text-white",
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

        {/* Header - Solo logo e switch */}
        <header
          className={`w-full py-3 md:py-4 px-4 md:px-8 flex items-center justify-between ${current.headerBg} transition-colors duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Paola D'Onofrio"
              className={`h-8 md:h-12 w-auto transition-all duration-1000 ${current.logoInvert}`}
            />
          </div>

          {/* Switch Button nell'header */}
          <button
            onClick={handleSwitch}
            disabled={isAnimating}
            className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full border ${current.headerText} border-current/30 hover:bg-current/10 transition-all duration-300 font-sans text-xs md:text-sm font-medium`}
            aria-label={`Passa a ${isAtelier ? 'Outlet' : 'Atelier'}`}
          >
            <ArrowLeftRight size={14} className="md:w-4 md:h-4" />
            <span className="hidden sm:inline">
              Scopri {isAtelier ? 'Outlet' : 'Atelier'}
            </span>
            <span className="sm:hidden">
              {isAtelier ? 'Outlet' : 'Atelier'}
            </span>
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center px-4 md:px-8 lg:px-12 py-6 md:py-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

              {/* Text Content */}
              <div
                className={`order-2 ${current.textOrder} flex flex-col items-center text-center ${current.textAlign} content-transition ${
                  isLoaded ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
                } ${isAnimating ? 'content-hidden' : ''}`}
              >
                {/* Title */}
                <h1
                  className={`font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-2 md:mb-3 ${current.textColor} content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  {current.title}
                </h1>

                {/* Subtitle */}
                <p
                  className={`font-sans text-base md:text-lg lg:text-xl font-medium mb-3 md:mb-4 ${current.accentColor} content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  {current.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`font-sans text-sm md:text-base leading-relaxed mb-4 md:mb-5 max-w-lg ${current.accentColor} content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  {current.description}
                </p>

                {/* Trust Badges */}
                <div
                  className={`flex flex-wrap justify-center lg:justify-start gap-2 mb-5 md:mb-6 content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  } ${!isAtelier ? 'lg:justify-end' : ''}`}
                >
                  {current.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`${current.badgeBg} ${current.badgeText} px-3 py-1 rounded-full text-xs md:text-sm font-medium`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* CTA Principal - WhatsApp */}
                <a
                  href={`https://wa.me/${current.whatsapp}?text=Ciao, vorrei prenotare un appuntamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 md:gap-3 ${current.buttonBg} ${current.buttonText} ${current.buttonBorder} px-6 py-3 md:px-8 md:py-4 rounded-full font-sans text-sm md:text-base font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  <MessageCircle size={18} className="md:w-5 md:h-5" />
                  Prenota Appuntamento
                </a>

                {/* Link secondario - Sito completo */}
                <a
                  href="https://paoladonofrio.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 mt-3 md:mt-4 ${current.accentColor} hover:opacity-70 transition-all duration-300 font-sans text-xs md:text-sm content-transition ${
                    isAnimating ? 'content-hidden' : ''
                  }`}
                >
                  Visita il sito completo
                  <ExternalLink size={12} className="md:w-3 md:h-3" />
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
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={current.image}
                    />
                    <img
                      src={current.imageMobile}
                      alt={isAtelier ? "Atelier Paola D'Onofrio" : "Luxury Outlet"}
                      className={`w-full h-56 sm:h-72 md:h-80 lg:h-[450px] xl:h-[520px] object-cover ${current.imagePosition} transition-transform duration-1000`}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer con social e info */}
        <footer
          className={`w-full py-4 md:py-5 px-4 md:px-8 ${
            isLoaded ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <p className={`order-3 sm:order-1 font-sans text-xs ${current.accentColor} transition-colors duration-1000`}>
              © {new Date().getFullYear()} Paola D'Onofrio
            </p>

            {/* Location */}
            <p className={`order-2 sm:order-2 font-sans text-xs ${current.accentColor} transition-colors duration-1000`}>
              Roma — Viale Trastevere 248
            </p>

            {/* Social Links */}
            <div className="order-1 sm:order-3 flex items-center gap-4">
              <a
                href="https://www.facebook.com/paoladonofrioatelier"
                target="_blank"
                rel="noopener noreferrer"
                className={`${current.accentColor} hover:opacity-70 transition-all duration-300`}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/paoladonofrioatelier"
                target="_blank"
                rel="noopener noreferrer"
                className={`${current.accentColor} hover:opacity-70 transition-all duration-300`}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:help@paoladonofrio.it"
                className={`${current.accentColor} hover:opacity-70 transition-all duration-300`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
