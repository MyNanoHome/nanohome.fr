import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, project, message } = data;

    // SMTP config Ionos
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.fr',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'contact@mynanohome.fr',
        pass: process.env.SMTP_PASS,
      },
    });

    // Build subject and body
    const isOrder = message.toLowerCase().includes('commander');
    const subject = isOrder
      ? `[Commande] ${name} — Nano S1`
      : `[Contact] ${name} — NANO HOME`;

    const mailOptions = {
      from: 'contact@mynanohome.fr',
      to: 'contact@mynanohome.fr',
      replyTo: email,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e8630a; border-bottom: 2px solid #e8630a; padding-bottom: 8px;">
            ${isOrder ? '🛒 Nouvelle commande' : '📩 Nouveau message'}
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px 0; color: #666;">Nom</td><td style="font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="font-weight: 500;">${email}</td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="font-weight: 500;">${phone}</td></tr>` : ''}
            ${project ? `<tr><td style="padding: 8px 0; color: #666;">Projet</td><td style="font-weight: 500;">${project}</td></tr>` : ''}
          </table>

          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <strong style="display: block; margin-bottom: 8px;">Message :</strong>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #999; font-size: 0.85rem; margin-top: 24px;">
            Envoyé depuis mynanohome.fr
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
