export const metadata = {
  title: 'Nos capsules — Espaces premium habitables | NANO HOME',
  description: 'Découvrez nos capsules design NANO HOME pour vos terrains et jardins. Structure acier premium, livrées clé en main en France.',
};

export default function ProduitPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-compact">
        <span className="section-label reveal visible">Nos capsules</span>
        <h1 className="reveal visible reveal-delay-1">
          Des espaces premium<br />pour vos projets.
        </h1>
        <p className="reveal visible reveal-delay-2" style={{ maxWidth: 560, margin: '0 auto' }}>
          Des capsules design pour vos terrains et vos jardins, livrées clé en
          main en France.
        </p>
      </section>

      {/* ===== GRILLE PRODUITS ===== */}
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {/* Nano S1 — DISPONIBLE */}
            <div className="product-card reveal">
              <a href="/nano-s1" className="product-card-image" style={{ textDecoration: 'none', position: 'relative' }}>
                <span className="coming-badge" style={{ background: 'var(--orange)', color: '#fff' }}>Disponible</span>
                <img src="/nanos1-01.jpg" alt="Nano S1" style={{ width: '100%', display: 'block', borderRadius: 0 }} />
              </a>
              <div className="product-card-body">
                <h3 style={{ margin: 0 }}><a href="/nano-s1" style={{ textDecoration: 'none', color: 'inherit' }}>Nano S1</a></h3>
                <div className="product-subtitle">4.6 m² — Capsule bureau</div>
                <p>Un espace privé design et fonctionnel pour le télétravail, la création ou la détente. Structure acier premium, isolation polyuréthane, double vitrage LOW-E.</p>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--orange)' }}>15 000 € TTC</span>
                  <a href="/nano-s1" className="btn btn-primary" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                    Voir la fiche <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHOTOS SUPPLÉMENTAIRES ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label reveal">Galerie</span>
            <h2 className="reveal reveal-delay-1">Découvrez la Nano S1</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="reveal reveal-delay-2">
            <img src="/nanos1-02.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <img src="/nanos1-03.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <img src="/nanos1-04.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <img src="/nanos1-05.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <img src="/nanos1-06.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <img src="/nanos1-01.jpg" alt="Nano S1" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ===== CARACTÉRISTIQUES RAPIDES ===== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Caractéristiques</span>
          <h2 className="reveal reveal-delay-1">Des chiffres qui comptent</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 40, maxWidth: 700, margin: '40px auto 0' }}>
            <div className="reveal" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--orange)' }}>4.6 m²</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiaire)' }}>Surface</div>
            </div>
            <div className="reveal reveal-delay-1" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--orange)' }}>2.15 m</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiaire)' }}>Dimensions</div>
            </div>
            <div className="reveal reveal-delay-2" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--orange)' }}>1 T</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiaire)' }}>Poids</div>
            </div>
            <div className="reveal reveal-delay-3" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--orange)' }}>15 k€</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiaire)' }}>TTC livré</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Contact</span>
          <h2 className="reveal reveal-delay-1">La Nano S1 vous intéresse ?</h2>
          <p className="reveal reveal-delay-2">Configurez votre Nano S1 et passez commande en ligne.</p>
          <div className="reveal reveal-delay-3">
            <a href="/nano-s1" className="btn btn-white">
              Commander
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}>
                <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
