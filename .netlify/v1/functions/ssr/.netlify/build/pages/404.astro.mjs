/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dlq-rg80.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BE3Mh0Vn.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404: No encontrado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white flex items-center justify-center p-4"> <div class="text-center"> <!-- Logo --> <div class="flex justify-center mb-8"> <!-- <Image
          src={logo}
          alt="1nLines Logo"
          class="w-48 md:w-64"
        /> --> </div> <!-- Mensaje de error --> <h1 class="text-6xl font-bold text-[#8647EA] mb-4">404</h1> <h2 class="text-2xl font-semibold text-gray-800 mb-4">
Página no encontrada
</h2> <p class="text-gray-600 mb-8 max-w-md mx-auto">
Lo sentimos, la página que estás buscando no existe o ha sido movida.
</p> <!-- Botón de regreso --> <a href="/" class="inline-flex items-center px-6 py-3 text-white bg-[#8647EA] hover:bg-[#6d34c7] rounded-lg transition-colors duration-200"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Volver al inicio
</a> <!-- Información de contacto --> <div class="mt-12 text-gray-600"> <p class="mb-2">¿Necesitas ayuda?</p> <p>
Contáctanos en <a href="mailto:info@inlines.com.co" class="text-[#8647EA] hover:underline">info@inlines.com.co</a> </p> </div> </div> </main> ` })}`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/pages/404.astro", void 0);

const $$file = "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
