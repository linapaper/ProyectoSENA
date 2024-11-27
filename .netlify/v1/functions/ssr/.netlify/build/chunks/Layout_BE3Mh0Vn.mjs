import { c as createComponent, r as renderTemplate, b as addAttribute, e as renderHead, f as renderSlot, d as createAstro } from './astro/server_Dlq-rg80.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="En Inlines nos encanta pensar en las mejores propuestas para tu idea creativa o de mejora y apoyarte a hacerlas realidad."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body id="body-page"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
