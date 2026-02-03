# Paola D'Onofrio - Landing Page

Landing page per **Paola D'Onofrio**, storico atelier di abiti da sposa a Roma dal 1982.

## Panoramica

Landing page minimalista con funzionalità di switch tra due attività:
- **Atelier**: Abiti da sposa e alta moda su misura con sartoria interna
- **Luxury Outlet**: Abiti da sposa in pronta consegna a prezzi esclusivi

## Tech Stack

- **Vite** - Build tool e dev server
- **React 19** - Libreria UI
- **Tailwind CSS 3** - Styling utility-first
- **Lucide React** - Icone

## Struttura Progetto

```
paoladonofrio-website/
├── public/
│   ├── logo.png                    # Logo aziendale
│   ├── atelier.png                 # Immagine Atelier (desktop)
│   ├── atelier-mobile.png          # Immagine Atelier (mobile/tablet)
│   ├── luxury_outlet.png           # Immagine Outlet (desktop)
│   └── luxury_outlet-mobile.png    # Immagine Outlet (mobile/tablet)
├── src/
│   ├── App.jsx                     # Componente principale
│   ├── main.jsx                    # Entry point React
│   └── index.css                   # Stili globali e animazioni
├── index.html                      # HTML template
├── tailwind.config.js              # Configurazione Tailwind
├── vite.config.js                  # Configurazione Vite
├── postcss.config.js               # Configurazione PostCSS
└── package.json                    # Dipendenze e scripts
```

## Funzionalità

### Toggle Switch Atelier/Outlet
- Cambio dinamico di tutti gli elementi (testi, colori, immagini, layout)
- Transizioni fluide con fade-out istantaneo e fade-in animato
- Layout speculare: Atelier (testo sx, immagine dx) / Outlet (testo dx, immagine sx)

### Design Responsive
- **Mobile-first**: Layout ottimizzato per dispositivi mobili
- **Immagini responsive**: Immagini diverse per mobile/tablet e desktop via `<picture>`
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Palette Colori
| Elemento | Colore | HEX |
|----------|--------|-----|
| Blu primario | Brand Blue | `#001042` |
| Bianco | White | `#FFFFFF` |

### Schema Colori per Modalità

**Atelier:**
- Background: Bianco
- Testo: Blu
- Header/Footer: Blu con testo bianco

**Luxury Outlet:**
- Background: Blu
- Testo: Bianco
- Header/Footer: Bianco con testo blu

## Elementi Landing Page

### Header
- Logo (con inversione colore automatica)
- Bottone switch per cambiare modalità

### Main Content
- **Titolo**: Nome dell'attività
- **Sottotitolo**: Value proposition
- **Descrizione**: Testo descrittivo dell'attività
- **Trust Badges**: 3 elementi di fiducia (es. "Dal 1982", "Sartoria interna", "Appuntamenti privati")
- **CTA Principale**: Bottone WhatsApp "Prenota Appuntamento"
- **Link Secondario**: "Visita il sito completo" (link piccolo)
- **Immagine**: Foto rappresentativa con aspect ratio responsive

### Footer
- Copyright
- Indirizzo: MARY S.R.L. – Viale Trastevere, 248 – 00153 Roma
- Social Links: Facebook, Instagram, Email

## Contatti Configurati

| Attività | WhatsApp |
|----------|----------|
| Atelier | +39 340 368 0023 |
| Outlet | +39 342 628 5267 |

**Social:**
- Facebook: @paoladonofrioatelier
- Instagram: @paoladonofrioatelier
- Email: help@paoladonofrio.it

## Installazione

```bash
# Clona il repository
git clone https://github.com/alessiobuccarella/paoladonofrio-landingpage.git

# Entra nella directory
cd paoladonofrio-landingpage

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## Scripts Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia server di sviluppo (http://localhost:5173) |
| `npm run build` | Build di produzione in `/dist` |
| `npm run preview` | Preview della build di produzione |
| `npm run lint` | Esegue ESLint |

## Deploy

Il progetto è configurato per il deploy automatico su **Vercel**:

1. Ogni push su `main` triggera un nuovo deploy
2. Build automatica con Vite
3. Preview deploy per branch/PR

**URL Produzione**: [Da configurare su Vercel]

## Git Workflow

```bash
# Verifica modifiche
git status

# Aggiungi file modificati
git add .

# Commit
git commit -m "descrizione modifiche"

# Push su GitHub (trigger deploy Vercel)
git push
```

## Ottimizzazioni Conversioni

La landing è stata ottimizzata per massimizzare le conversioni:

1. **Un solo obiettivo**: Prenotare appuntamento via WhatsApp
2. **CTA chiaro e prominente**: Bottone WhatsApp ben visibile
3. **Trust badges**: Elementi di fiducia ("Dal 1982", "Sartoria interna", etc.)
4. **Minime distrazioni**: Social links solo nel footer
5. **Testi concreti**: Descrizioni che comunicano valore reale
6. **Mobile-first**: Ottimizzato per conversioni da mobile

## Informazioni Aziendali

**MARY S.R.L.**
Viale Trastevere, 248
00153 Roma

---

Sviluppato da [Nextar](https://nextar.it)