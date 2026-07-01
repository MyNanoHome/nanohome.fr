export const metadata = {
  title: 'Nos capsules — NANO HOME',
  description: 'Découvrez les capsules NANO HOME : des espaces modulaires design, livrés clé en main dans votre jardin.',
};

export default function ProduitPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-compact">
        <span className="section-label reveal visible">Nos capsules</span>
        <h1 className="reveal visible reveal-delay-1">
          Des espaces à vivre,<br />dans votre jardin.
        </h1>
        <p className="reveal visible reveal-delay-2">
          Compactes, design et fonctionnelles — nos capsules transforment votre
          extérieur en véritables espaces de vie, livrés clé en main.
        </p>
      </section>

      {/* ===== GRILLE PRODUITS ===== */}
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {/* Solo */}
            <div className="product-card reveal">
              <div className="product-card-image">
                <span className="coming-badge">À venir</span>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="product-card-body">
                <h3>Solo</h3>
                <div className="product-subtitle">~20 m² — Studio</div>
                <p>
                  L&apos;essentiel, magnifiquement pensé. Un espace compact et
                  lumineux, idéal pour un bureau, un studio d&apos;appoint ou
                  une chambre d&apos;hôtes indépendante.
                </p>
                <div style={{ marginTop: 16 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiaire)' }}>
                    🛏️
                     1 pièce
                     <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span>
                     🚿
                     Salle d&apos;eau
                     <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span>
                     🍳
                     Kitchenette
                  </span>
                </div>
              </div>
            </div>

            {/* Duo */}
            <div className="product-card reveal reveal-delay-1">
              <div className="product-card-image">
                <span className="coming-badge">À venir</span>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="product-card-body">
                <h3>Duo</h3>
                <div className="product-subtitle">~30 m² — 2 pièces</div>
                <p>
                  Un véritable petit logement avec espace nuit séparé. Parfait
                  pour accueillir un proche, un locataire ou aménager un
                  studio de création.
                </p>
                <div style={{ marginTop: 16 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiaire)' }}>
                    🛏️
                     2 pièces
                     <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span>
                     🚿
                     Salle d&apos;eau
                     <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span>
                     🍳
                     Cuisine équipée
                  </span>
                </div>
              </div>
            </div>

            {/* Family */}
            <div className="product-card reveal reveal-delay-2">
              <div className="product-card-image">
                <span className="coming-badge">À venir</span>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="product-card-body">
                <h3>Family</h3>
                <div className="product-subtitle">~45 m² — 3 pièces</div>
                <p>
                  Notre plus grand modèle. Un véritable espace de vie familial
                  avec chambres séparées, salon spacieux et cuisine entièrement
                  équipée.
                </p>
                <div style={{ marginTop: 16 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiaire)' }}>
                    🛏️
                     3 pièces
                     <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span>
                     🚿
                     Salle d&apos;eau
                     <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span>
                     🍳
                     Cuisine complète
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFO ===== */}
      <section className="section section-alt">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">En développement</span>
          <h2 className="reveal reveal-delay-1">Bientôt disponibles</h2>
          <p className="reveal reveal-delay-2" style={{ maxWidth: 560, margin: '0 auto 24px' }}>
            Nous sélectionnons les meilleurs modèles pour vous offrir le
            meilleur rapport qualité-prix. Chaque capsule sera personnalisable
            selon vos besoins.
          </p>
          <p className="reveal reveal-delay-2" style={{ maxWidth: 560, margin: '0 auto' }}>
            Inscrivez-vous pour être informé du lancement et recevoir les
            caractéristiques détaillées de chaque modèle.
          </p>
          <div className="divider-center reveal reveal-delay-3" style={{ marginTop: 32 }}></div>
          <div className="reveal reveal-delay-3" style={{ marginTop: 32 }}>
            <a href="/contact" className="btn btn-primary">
              Être informé du lancement
              <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8em' }}></i>
            </a>
          </div>
        </div>
      </section>

      {/* ===== OPTIONS ===== */}
      <section className="section">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label reveal">Personnalisation</span>
            <h2 className="reveal reveal-delay-1">Une capsule qui vous ressemble</h2>
            <p className="reveal reveal-delay-2">
              Finitions, couleurs, agencement, équipements — chaque capsule
              est unique et adaptée à vos besoins.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3>Finitions au choix</h3>
              <p>Bois, stratifié, carrelage, peinture — choisissez vos matériaux et vos couleurs.</p>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4.5"/>
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5.64 5.64l1.42 1.42M16.95 16.95l1.41 1.41M5.64 18.36l1.42-1.42M16.95 7.05l1.41-1.41"/>
                </svg>
              </div>
              <h3>Autonomie énergétique</h3>
              <p>Panneaux solaires, récupération d&apos;eau de pluie, isolation renforcée — vivez en toute liberté.</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3>Domotique intégrée</h3>
              <p>Contrôle de l&apos;éclairage, du chauffage et de la sécurité depuis votre smartphone.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
