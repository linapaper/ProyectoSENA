import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const createTransporter = () => {
  return nodemailer.createTransport({
    port: 465,
    host: "SMTP.MI.COM.CO",
    auth: {
      user: "comercial@inlines.com.co",
      pass: "Em23h8l17_2020"
    },
    secure: true,
    debug: true,
    logger: true
  });
};
const POST = async ({ request }) => {
  try {
    console.log("🚀 Iniciando proceso de envío de email...");
    const data = await request.json();
    const { formType = "contactate", ...formData } = data;
    if (formType === "dejanos-contactarte") {
      return handleDejanosContactarte(formData);
    } else {
      return handleContactate(formData);
    }
  } catch (error) {
    const err = error;
    console.error("❌ Error detallado al enviar el email:", {
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
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
async function handleContactate({ name, email, message }) {
  const transporter = createTransporter();
  console.log("📝 Datos del formulario Contáctate:", { name, email, message });
  const mailOptions = {
    from: `"Formulario Web Inlines" <${"comercial@inlines.com.co"}>`,
    to: "comercial@inlines.com.co",
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
      <hr>
      <p><small>Enviado desde el formulario "Contáctate con nosotros" de la web</small></p>
    `
  };
  const info = await transporter.sendMail(mailOptions);
  console.log("✅ Email de Contáctate enviado:", info.messageId);
  return new Response(
    JSON.stringify({
      message: "Email enviado correctamente",
      messageId: info.messageId
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
async function handleDejanosContactarte({ name, email, cellphone, contactMethod }) {
  const transporter = createTransporter();
  console.log("📝 Datos del formulario Déjanos contactarte:", {
    name,
    email,
    cellphone,
    contactMethod
  });
  const mailOptions = {
    from: `"Formulario Web Inlines" <${"comercial@inlines.com.co"}>`,
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
    `
  };
  const info = await transporter.sendMail(mailOptions);
  console.log("✅ Email de Déjanos contactarte enviado:", info.messageId);
  return new Response(
    JSON.stringify({
      message: "Email enviado correctamente",
      messageId: info.messageId
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
