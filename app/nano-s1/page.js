import { metadata } from './metadata';
export { metadata };
import Configurator from './Configurator';

export default function NanoS1Page() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-compact">
        <span className="section-label reveal visible">Nouveau</span>
        <h1 className="reveal visible reveal-delay-1">
          Nano S1<br />Un espace privé, dans votre jardin.
        </h1>
        <p className="reveal visible reveal-delay-2" style={{ maxWidth: 560, margin: '0 auto' }}>
          Design et fonctionnel pour le télétravail, la création ou la détente. Construction acier premium, livré et installé en France.
        </p>
        <div className="reveal visible reveal-delay-3" style={{ marginTop: 32 }}>
          <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--orange)' }}>15 000 € TTC</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiaire)', marginLeft: 12 }}>— Livraison France incluse</span>
        </div>
        <div className="hero-actions" style={{ marginTop: 24, justifyContent: 'center' }}>
          <a href="/contact" className="btn btn-primary">
            Nous contacter
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}>
              <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ===== GALERIE PHOTOS ===== */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {['01','02','03','04','05','06'].map(n => (
              <img key={n} src={`/nanos1-${n}.jpg`} alt={`Nano S1 — Vue ${n}`}
                style={{ width:'100%', borderRadius: 8, display: 'block' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESCRIPTION ===== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <span className="section-label reveal">Concept</span>
          <h2 className="reveal reveal-delay-1">Un espace à vous, hors du temps</h2>
          <p className="reveal reveal-delay-2" style={{ marginBottom: 48 }}>
          La Nano S1 est bien plus qu&apos;une cabine de jardin. C&apos;est un espace privé, design et fonctionnel, pensé pour ceux qui veulent s&apos;évader sans quitter leur terrain.
          </p>

          <div className="features-grid" style={{ textAlign: 'left' }}>
            <div className="feature-card reveal">
              <div className="feature-number">💼</div>
              <h3>Bureau de télétravail</h3>
              <p>Un espace calme et lumineux pour travailler chez vous sans être à la maison.</p>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-number">🎨</div>
              <h3>Atelier de création</h3>
              <p>Peinture, musique, artisanat — la Nano S1 devient votre refuge créatif.</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-number">🧘</div>
              <h3>Salon de détente</h3>
              <p>Méditation, yoga, lecture — tout est possible dans 4.6 m² pensés pour vous.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FICHE TECHNIQUE ===== */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label reveal">Fiche technique</span>
            <h2 className="reveal reveal-delay-1">Caractéristiques</h2>
          </div>

          <div className="specs-group reveal">
            <h3 style={sectionTitleStyle}>Dimensions &amp; Poids</h3>
            <SpecRow label="Dimensions extérieures" value="2.15 × 2.15 × 2.30 m" />
            <SpecRow label="Surface intérieure" value="4.6 m²" />
            <SpecRow label="Poids total" value="1 000 kg" />
            <SpecRow label="Occupation" value="1 personne" />
          </div>

          <div className="specs-group reveal reveal-delay-1">
            <h3 style={sectionTitleStyle}>Construction</h3>
            <SpecRow label="Structure" value="Acier galvanisé antisismique" />
            <SpecRow label="Isolation" value="Polyuréthane projeté 100mm" />
            <SpecRow label="Vitrage" value="Double vitrage 6+15A+6 LOW-E anti-UV" />
            <SpecRow label="Menuiseries" value="Aluminium à rupture de pont thermique 110mm" />
            <SpecRow label="Revêtement extérieur" value="Aluminium aviation 2mm — peinture fluorocarbone" />
            <SpecRow label="Cloisons intérieures" value="Plaque carbone cristal" />
          </div>

          <div className="specs-group reveal reveal-delay-2">
            <h3 style={sectionTitleStyle}>Équipements</h3>
            <SpecRow label="Porte d&apos;entrée" value="Acier inox 304 sur mesure" />
            <SpecRow label="Serrure" value="Connectée — empreinte, code, carte, clé" />
            <SpecRow label="Sol" value="SPC silent stone 5mm + pare-vapeur" />
            <SpecRow label="Éclairage" value="OPPLE LED" />
            <SpecRow label="Prises" value="NVC série ultra-fine" />
            <SpecRow label="Mobilier inclus" value="Meuble sur mesure (rangement / plan de travail)" />
          </div>

          <div className="specs-group reveal reveal-delay-2">
            <h3 style={sectionTitleStyle}>Garantie</h3>
            <SpecRow label="Structure principale" value="20 ans" />
            <SpecRow label="Étanchéité / joints" value="15 ans" />
            <SpecRow label="Appareils électriques" value="12 mois" />
          </div>
        </div>
      </section>

      {/* ===== CONFIGURATEUR ===== */}
      <Configurator />

      {/* ===== CTA ===== */}
      <section className="cta-section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Contact</span>
          <h2 className="reveal reveal-delay-1">La Nano S1 vous intéresse ?</h2>
          <p className="reveal reveal-delay-2">Recevez une documentation complète et un devis personnalisé sous 48h.</p>
          <div className="reveal reveal-delay-3">
            <a href="/contact" className="btn btn-white">
              Nous contacter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1 }}>
                <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <p style={{ marginTop: 16, fontSize: '0.85rem', opacity: 0.5 }}>15 000 € TTC — Livraison France incluse</p>
        </div>
      </section>
    </>
  );
}

function SpecRow({ label, value }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', padding: '10px 0',
      borderBottom: '1px solid var(--border-light)', fontSize: '0.9rem'
    }}>
      <span style={{ color: 'var(--text-tertiaire)' }}>{label}</span>
      <span style={{ fontWeight: 500 }}>{value}</span>
    </div>
  );
}

const sectionTitleStyle = {
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--text-tertiaire)',
  marginBottom: 12,
};
