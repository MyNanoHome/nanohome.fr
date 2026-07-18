'use client';
import { useState } from 'react';

const OPTIONS = [
  { id: 'iso', name: 'Isolation renforcée 120-150mm', price: 300 },
  { id: 'triple', name: 'Triple vitrage 6+12+6+12+6 LOW-E', price: 300 },
  { id: 'chauffage', name: 'Chauffage au sol graphene IPX7', price: 300 },
  { id: 'clim', name: 'Climatisation Midea 1.5P', price: 500 },
  { id: 'velux', name: 'Velux + store motorisé', price: 500 },
  { id: 'projecteur', name: 'Projecteur + écran JMGO', price: 500 },
  { id: 'domotique', name: 'Système domotique vocale', price: 500 },
  { id: 'store', name: 'Store latéral motorisé', price: 650 },
  { id: 'vmc', name: 'VMC double flux', price: 900 },
  { id: 'terrasse', name: 'Terrasse bois extérieure (5 m²)', price: 400 },
];

const BASE_PRICE = 15000;

export default function Configurator() {
  const [selected, setSelected] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const toggle = (id) => {
    setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const extras = OPTIONS.filter(o => selected[o.id]).reduce((s, o) => s + o.price, 0);
  const total = BASE_PRICE + extras;

  const configSummary = OPTIONS.filter(o => selected[o.id]).map(o => o.name).join(', ') || 'Aucune option';

  return (
    <section className="section" id="configurateur">
      <div className="container" style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-label reveal">Configurateur</span>
          <h2 className="reveal reveal-delay-1">Personnalisez votre Nano S1</h2>
          <p className="reveal reveal-delay-2">Choisissez vos options et obtenez le prix en temps réel.</p>
        </div>

        <div className="reveal" style={{
          background: 'var(--bg-card)',
          borderRadius: 12,
          padding: '24px 32px',
          border: '1px solid var(--border-light)',
          marginBottom: 24
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0 16px 0', borderBottom: '2px solid var(--orange)', marginBottom: 8 }}>
            <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Nano S1 — Base</span>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--orange)' }}>15 000 €</span>
          </div>

          {OPTIONS.map((opt, i) => (
            <label key={opt.id} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 0', borderBottom: '1px solid var(--border-light)',
              cursor: 'pointer', transition: 'opacity 0.2s',
              opacity: selected[opt.id] ? 1 : 0.7
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <input
                  type="checkbox"
                  checked={!!selected[opt.id]}
                  onChange={() => toggle(opt.id)}
                  style={{ width: 18, height: 18, accentColor: 'var(--orange)', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '0.95rem' }}>{opt.name}</span>
              </div>
              <span style={{ fontWeight: 600, color: 'var(--orange)', fontSize: '0.9rem' }}>
                +{opt.price} €
              </span>
            </label>
          ))}

          {/* TOTAL */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '16px 0 0 0', marginTop: 8, borderTop: '2px solid var(--border-light)'
          }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Total TTC</span>
            <span style={{ fontWeight: 700, fontSize: '1.4rem', color: 'var(--orange)' }}>
              {total.toLocaleString('fr-FR')} €
            </span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiaire)', textAlign: 'right', marginTop: 4 }}>
            Livraison France incluse
          </div>
        </div>

        {/* SUMMARY + BUTTONS */}
        <div className="reveal reveal-delay-2" style={{
          background: '#fafafa',
          borderRadius: 12,
          padding: '24px 32px',
          border: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          {extras > 0 && (
            <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiaire)', marginBottom: 16 }}>
              Options sélectionnées : <strong>{configSummary}</strong>
            </p>
          )}

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`/contact?config=${encodeURIComponent(configSummary)}&total=${total}`}
               className="btn btn-outline" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
              <i className="fa-regular fa-envelope"></i> Nous contacter
            </a>
            <a href={`/contact?commande=${encodeURIComponent(configSummary)}&total=${total}`}
               className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
              <i className="fa-regular fa-cart-shopping"></i> Commander ({total.toLocaleString('fr-FR')} €)
            </a>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiaire)', marginTop: 12, opacity: 0.6 }}>
            Sans engagement — nous vous rappelons sous 48h pour valider votre configuration
          </p>
        </div>
      </div>
    </section>
  );
}
