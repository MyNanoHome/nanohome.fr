export const metadata = {
  title: 'Notre concept — NANO HOME',
  description: 'Découvrez la philosophie NANO HOME : des habitats intelligents, design et accessibles.',
};

export default function ConceptPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-compact">
        <span className="section-label reveal visible">Notre philosophie</span>
        <h1 className="reveal visible reveal-delay-1">
          L&apos;intelligence<br />de l&apos;espace.
        </h1>
        <p className="reveal visible reveal-delay-2">
          Nous ne construisons pas des maisons plus petites. Nous concevons
          des habitats plus intelligents.
        </p>
      </section>

      {/* ===== MANIFESTE ===== */}
      <section className="statement-section" style={{ paddingTop: 0 }}>
        <div className="container-text">
          <h2 className="reveal">
            Pourquoi <span className="orange-word">NANO HOME</span> ?
          </h2>
          <p className="reveal reveal-delay-1">
            Le logement traditionnel devient de plus en plus coûteux, rigide et
            contraignant. NANO HOME est né d&apos;une conviction&nbsp;: il est possible
            d&apos;habiter mieux, avec moins de surface, sans sacrifier le confort
            ni le design.
          </p>
          <p className="reveal reveal-delay-2">
            Chaque capsule est pensée comme un espace de vie complet —
            optimisé dans chaque détail, de la qualité des matériaux à
            l&apos;agencement intérieur, en passant par l&apos;efficacité énergétique.
          </p>
          <div className="divider reveal reveal-delay-3"></div>
          <p className="reveal reveal-delay-3">
            Notre approche associe le meilleur du design architectural
            à un process de fabrication maîtrisé, pour offrir des habitats
            premium à des prix accessibles.
          </p>
        </div>
      </section>

      {/* ===== 3 PILIERS ===== */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label reveal">Nos piliers</span>
            <h2 className="reveal reveal-delay-1">Trois engagements</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-number">01</div>
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L22 12L12 22L2 12Z"/>
                </svg>
              </div>
              <h3>Design &amp; Architecture</h3>
              <p>
                Des lignes épurées, des proportions étudiées, des matériaux
                soigneusement sélectionnés. L&apos;esthétique au service du
                quotidien.
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-number">02</div>
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6M10 21h4M15.09 14.39A6 6 0 1 0 9 14.39V16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.61z"/>
                </svg>
              </div>
              <h3>Technologie &amp; Confort</h3>
              <p>
                Domotique intégrée, solutions énergétiques performantes,
                isolation haut niveau — tout ce qu&apos;il faut pour vivre mieux,
                simplement.
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-number">03</div>
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Qualité &amp; Durabilité</h3>
              <p>
                Des partenaires fabricants certifiés, un contrôle qualité
                rigoureux, et une traçabilité complète de chaque composant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOTRE APPROCHE ===== */}
      <section className="section">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label reveal">Notre approche</span>
            <h2 className="reveal reveal-delay-1">Comment ça marche</h2>
          </div>

          <div className="numbered-list">
            <div className="numbered-item reveal">
              <div className="numbered-item-num">01</div>
              <div>
                <h3>On écoute votre projet</h3>
                <p>Vous nous parlez de vos besoins, de votre terrain, de vos envies. On vous conseille sur le modèle et les options les plus adaptées.</p>
              </div>
            </div>
            <div className="numbered-item reveal reveal-delay-1">
              <div className="numbered-item-num">02</div>
              <div>
                <h3>On conçoit ensemble</h3>
                <p>Plan, finitions, couleurs, équipements — votre capsule est entièrement personnalisable. On vous accompagne dans chaque choix.</p>
              </div>
            </div>
            <div className="numbered-item reveal reveal-delay-2">
              <div className="numbered-item-num">03</div>
              <div>
                <h3>On fabrique et on livre</h3>
                <p>Fabrication sur mesure, transport, installation et finitions inclus. Votre capsule arrive prête à vivre, clé en main.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Une question ?</span>
          <h2 className="reveal reveal-delay-1">On vous répond</h2>
          <p className="reveal reveal-delay-2">
            Pas encore convaincu ? Posez-nous toutes vos questions,
            on se fera un plaisir d&apos;y répondre.
          </p>
          <div className="reveal reveal-delay-3">
            <a href="/contact" className="btn btn-white">
              Nous contacter
              <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8em' }}></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
