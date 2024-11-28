import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

// Removemos la config de edge runtime por ahora
// export const config = {
//   runtime: 'edge',
//   regions: ['iad1'],
// };

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.MAIL_HOST) {
    throw new Error('Missing email configuration environment variables');
  }

  return nodemailer.createTransport({
    port: 465,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('🚀 Request recibido en:', request.url);
    const data = await request.json();
    console.log('📦 Datos recibidos:', data);

    const { formType = 'contactate', ...formData } = data;

    if (formType === 'dejanos-contactarte') {
      return handleDejanosContactarte(formData);
    } else {
      return handleContactate(formData);
    }
  } catch (error) {
    console.error('❌ Error:', error);
    return new Response(
      JSON.stringify({
        message: "Error al enviar el email",
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// Manejador para el formulario "Contáctate con nosotros"
async function handleContactate({ name, email, message }: { name: string, email: string, message: string }) {
  const transporter = createTransporter();

  console.log('📝 Datos del formulario Contáctate:', { name, email, message });

  const mailOptions = {
    from: `"Formulario Web Inlines" <${import.meta.env.EMAIL_USER}>`,
    to: "comercial@inlines.com.co",
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
      <hr>
      <p><small>Enviado desde el formulario "Contáctate con nosotros" de la web</small></p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Email de Contáctate enviado:', info.messageId);

  return new Response(
    JSON.stringify({
      message: "Email enviado correctamente",
      messageId: info.messageId
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Manejador para el formulario "Déjanos contactarte"
async function handleDejanosContactarte({ name, email, cellphone, contactMethod }: { name: string, email: string, cellphone: string, contactMethod: string }) {
  const transporter = createTransporter();

  console.log('📝 Datos del formulario Déjanos contactarte:', {
    name,
    email,
    cellphone,
    contactMethod
  });

  const mailOptions = {
    from: `"Formulario Web Inlines" <${import.meta.env.EMAIL_USER}>`,
    to: "comercial@inlines.com.co",
    subject: `Solicitud de contacto de ${name}`,
    html: `
      <h2>Nueva solicitud de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${cellphone}</p>
      <p><strong>Método de contacto preferido:</strong> ${contactMethod}</p>
      <hr>
      <p><small>Enviado desde el formulario "Déjanos contactarte" de la web</small></p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Email de Déjanos contactarte enviado:', info.messageId);

  return new Response(
    JSON.stringify({
      message: "Email enviado correctamente",
      messageId: info.messageId
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
