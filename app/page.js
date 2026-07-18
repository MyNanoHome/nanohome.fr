export default function HomePage() {
  return (
    <>
      {/* ==============================
          HERO — Plein écran, minimal
      ============================== */}
      <section className="hero">
        <div className="hero-brand reveal visible">
          <div className="hero-brand-main">
            <span className="hero-brand-text">
              N<span className="lamda">Λ</span>NO{' '}
              <span className="orange">HOME</span>
            </span>
          </div>
          <div className="hero-brand-sub">
            L&apos;intelligence de l&apos;espace
          </div>
        </div>

        <p className="hero-tagline reveal visible reveal-delay-2">
          Des habitats compacts, design et accessibles — conçus pour améliorer
          votre confort de vie sans les contraintes du logement traditionnel.
        </p>

        <div className="hero-actions reveal visible reveal-delay-4">
          <a href="/produit" className="btn btn-primary">
            Découvrir nos capsules
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}>
              <path d="M5 12h14"/>
              <path d="M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/concept" className="btn btn-outline">
            Notre concept
          </a>
        </div>

        <div className="hero-accent">
          <span className="hero-accent-text">Découvrir</span>
          <div className="hero-accent-line"></div>
        </div>
      </section>

      {/* ==============================
          STATEMENT — Typographie pure
      ============================== */}
      <section className="statement-section">
        <div className="container-narrow">
          <h2 className="reveal">
            Repenser l&apos;espace,<br />
            c&apos;est <span className="orange-word">repenser la façon<br />d&apos;habiter</span>.
          </h2>
          <p className="reveal reveal-delay-1">
            Chaque mètre carré est pensé, optimisé, sublimé. Nos capsules
            transforment votre extérieur en véritable espace de vie — sans
            compromis sur le confort, le design ou la qualité.
          </p>
        </div>
      </section>

      {/* ==============================
          VALEURS — 3 piliers
      ============================== */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label reveal">Notre promesse</span>
            <h2 className="reveal reveal-delay-1">Une nouvelle génération d&apos;habitat</h2>
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
                Lignes épurées, proportions étudiées, lumière naturelle —
                chaque espace est optimisé pour le bien-être quotidien.
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-number">02</div>
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4.5"/>
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5.64 5.64l1.42 1.42M16.95 16.95l1.41 1.41M5.64 18.36l1.42-1.42M16.95 7.05l1.41-1.41"/>
                </svg>
              </div>
              <h3>Liberté &amp; Autonomie</h3>
              <p>
                Nos solutions sont conçues pour une indépendence énergétique réelle.
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-number">03</div>
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3>Qualité Accessible</h3>
              <p>
                Une qualité architecturale premium, sans compromis sur le
                confort ni la durabilité — à un prix juste et transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          NANO S1 — Produit disponible
      ============================== */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Nouveau — Disponible</span>
          <h2 className="reveal reveal-delay-1">Nano S1<br />Votre espace dans votre jardin</h2>
          <p className="reveal reveal-delay-2" style={{ maxWidth: 560, margin: '0 auto 40px' }}>
            Un espace privé, design et fonctionnel pour le télétravail, la création ou la détente. Livré et installé en France.
          </p>

          <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32, maxWidth: 800, margin: '0 auto 32px' }}>
            <img src="/nanos1-01.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <img src="/nanos1-02.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <img src="/nanos1-03.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
          </div>

          <div className="reveal reveal-delay-3">
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--orange)', marginBottom: 8 }}>15 000 € TTC</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiaire)', marginBottom: 24 }}>Livraison France incluse</div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/nano-s1" className="btn btn-primary">
                Découvrir
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}>
                  <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/contact" className="btn btn-outline">Demander un devis</a>
            </div>
          </div>
        </div>
      </section>


      {/* ==============================
          CTA FINAL — Dark section
      ============================== */}
      <section className="cta-section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Contact</span>
          <h2 className="reveal reveal-delay-1">Prêt à franchir le pas ?</h2>
          <p className="reveal reveal-delay-2">
            Discutons de votre projet — sans engagement. Nous vous guidons
            de la réflexion à l&apos;installation.
          </p>
          <div className="reveal reveal-delay-3">
            <a href="/contact" className="btn btn-white">
              Nous contacter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}>
                <path d="M5 12h14"/>
                <path d="M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
