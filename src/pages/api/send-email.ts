import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

// Definir interface para el error de NodeMailer
interface NodemailerError extends Error {
  code?: string;
  command?: string;
}

// Configuración común del transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    port: 465,
    host: import.meta.env.MAIL_HOST,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
    secure: true,
    debug: true,
    logger: true
  });
};

// Endpoint para el formulario "Contáctate con nosotros"
export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('🚀 Iniciando proceso de envío de email...');

    const data = await request.json();
    const { formType = 'contactate', ...formData } = data;

    // Usar el formType para determinar qué tipo de correo enviar
    if (formType === 'dejanos-contactarte') {
      return handleDejanosContactarte(formData);
    } else {
      return handleContactate(formData);
    }
  } catch (error) {
    const err = error as NodemailerError;
    console.error('❌ Error detallado al enviar el email:', {
      name: err.name,
      message: err.message,
      stack: err.stack,
      code: err.code,
      command: err.command
    });

    return new Response(
      JSON.stringify({
        message: "Error al enviar el email",
        error: {
          name: err.name,
          message: err.message,
          code: err.code
        }
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
