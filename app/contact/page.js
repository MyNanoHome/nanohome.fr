'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const config = searchParams.get('config');
    const total = searchParams.get('total');
    const commande = searchParams.get('commande');

    if (commande) {
      setSubject('Commande Nano S1');
      setMessage(`Bonjour, je souhaite commander une Nano S1 avec les options suivantes :\n\n${commande}\n\nPrix total : ${total} € TTC (livraison France incluse)\n\nMerci de me contacter pour finaliser ma commande.`);
    } else if (config) {
      setSubject('Devis Nano S1');
      setMessage(`Bonjour, je suis intéressé par la Nano S1 avec la configuration suivante :\n\nOptions : ${config}\n\nPrix total : ${total} € TTC (livraison France incluse)\n\nMerci de me faire parvenir un devis personnalisé.`);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      project: form.project.value,
      message: form.message.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setSent(true);
      else alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    } catch {
      alert('Erreur réseau. Veuillez réessayer.');
    }
    setSending(false);
  };

  if (sent) {
    return (
      <section className="section section-alt">
        <div className="container-narrow" style={{ textAlign: 'center', padding: '60px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
          <h2>Message envoyé !</h2>
          <p style={{ maxWidth: 400, margin: '12px auto 0' }}>
            Merci ! Nous vous répondrons sous 48h à l&apos;adresse indiquée.
          </p>
          <a href="/" className="btn btn-outline" style={{ marginTop: 24 }}>Retour à l&apos;accueil</a>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-alt">
      <div className="container-narrow">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group reveal">
              <label htmlFor="name">Nom &amp; Prénom</label>
              <input type="text" id="name" name="name" placeholder="Votre nom" required />
            </div>
            <div className="form-group reveal reveal-delay-1">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="votre@email.fr" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group reveal reveal-delay-1">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone" placeholder="06 XX XX XX XX" />
            </div>
            <div className="form-group reveal reveal-delay-2">
              <label htmlFor="project">Type de projet</label>
              <select id="project" name="project">
                <option value="">— Sélectionnez —</option>
                <option value="jardin">Cabine de jardin</option>
                <option value="bureau">Bureau</option>
                <option value="maison">Maison</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="form-group reveal reveal-delay-2">
            <label htmlFor="message">Votre message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet, vos envies, vos questions..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="reveal reveal-delay-3">
            <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
              {sending ? 'Envoi en cours...' : 'Envoyer le message'}
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.85em' }}></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="hero-compact">
        <span className="section-label reveal visible">Contact</span>
        <h1 className="reveal visible reveal-delay-1">Parlons de votre projet</h1>
        <p className="reveal visible reveal-delay-2">
          Que vous ayez une question, un projet précis, ou simplement envie
          d&apos;en savoir plus — nous sommes là pour vous répondre.
        </p>
      </section>

      <Suspense fallback={<div className="section"><div className="container" style={{ textAlign: 'center' }}>Chargement...</div></div>}>
        <ContactForm />
      </Suspense>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Autres moyens</span>
          <h2 className="reveal reveal-delay-1">Restons en contact</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', marginTop: 48 }}>
            <div className="reveal" style={{ textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--orange-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.3rem', color: 'var(--orange)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h4 style={{ marginBottom: 4 }}>Email</h4>
              <p style={{ fontSize: '0.85rem' }}>contact@mynanohome.fr</p>
            </div>
            <div className="reveal reveal-delay-1" style={{ textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--orange-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.3rem', color: 'var(--orange)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h4 style={{ marginBottom: 4 }}>Instagram</h4>
              <p style={{ fontSize: '0.85rem' }}>@mynanohome</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
