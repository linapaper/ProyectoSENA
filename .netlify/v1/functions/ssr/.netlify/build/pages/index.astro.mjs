/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderHead, f as renderSlot } from '../chunks/astro/server_BTLjYbEZ.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BFIpnITm.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
export { renderers } from '../renderers.mjs';

const logo1nLines = new Proxy({"src":"/_astro/logo_inlines.CrQ0LVV7.webp","width":286,"height":76,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/logo_inlines.webp";
							}
							
							return target[name];
						}
					});

const imgHero = new Proxy({"src":"/_astro/img_hero.BHIAeprY.webp","width":1929,"height":1299,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/img_hero.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, content, type } = Astro2.props;
  const isPDF = href.toLowerCase().endsWith(".pdf");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`px-5 py-3 text-center font-[500] transition duration-300 ease-in-out ${type === "primary" ? "bg-[#8647EA] hover:bg-[#753bd1] text-white" : "bg-[#FAFAF7] hover:bg-[#dedede] text-[#8647EA]"}`, "class")}${addAttribute(isPDF ? "_blank" : href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(href.startsWith("http") ? "noopener noreferrer" : void 0, "rel")}${addAttribute(isPDF ? "Brochure_Inlines.pdf" : void 0, "download")}> ${content} </a>`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Button.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const catalogUri = "/assets/files/CATALOGO_SERVICIOS_INLINES.pdf";
  const contactUri = "https://api.whatsapp.com/send?phone=573249804916&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20Inlines";
  return renderTemplate`${maybeRenderHead()}<div class="relative flex justify-center bg-gradient-to-t from-[#C188FF] via-white to-white m-0 p-0 overflow-hidden"> <div class="absolute md:top-[-300px] md:right-[-320px] top-[-80px] right-[-100px] h-[250px] w-[250px] md:h-[850px] md:w-[850px] bg-[#b8ecfd] opacity-30 rounded-full z-0 transition duration-300 ease-in-out"></div> <div class="flex flex-col justify-start w-full mt-[40px] md:mt-[73px] md:max-w-screen-xl px-5"> ${renderComponent($$result, "Image", $$Image, { "src": logo1nLines, "alt": "Logo 1nLines", "class": "w-[136px] h-[36px]" })} <div class="flex flex-col md:flex-row w-full justify-between space-x-0 md:space-x-5 items-center my-10 md:my-20 space-y-10 md:space-y-0"> <div class="w-full md:w-1/2 flex flex-col space-y-10"> <h1 class="md:text-[50px] text-[28px] text-[#1E1E1E] font-[800]">
Construimos soluciones tecnológicas para tu negocio o proyecto
</h1> <h5 class="md:text-[20px] text-[14px] text-[#767676] font-[400]">
En Inlines nos encanta pensar en las mejores propuestas para tu idea
          creativa o de mejora y apoyarte a hacerlas realidad.
</h5> <div class="w-full flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5"> ${renderComponent($$result, "Button", $$Button, { "href": contactUri, "content": "CONTACTAR SERVICIO", "type": "primary" })} ${renderComponent($$result, "Button", $$Button, { "href": catalogUri, "content": "VER CATÁLOGO", "type": "secondary" })} </div> </div> <div class="w-full md:w-1/2 flex flex-col justify-center items-center"> ${renderComponent($$result, "Image", $$Image, { "src": imgHero, "alt": "img", "class": "md:w-[70%] w-[100%] z-10" })} </div> </div> </div> </div>`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="En Inlines nos encanta pensar en las mejores propuestas para tu idea creativa o de mejora y apoyarte a hacerlas realidad."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body id="body-page"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/layouts/Layout.astro", void 0);

const angularImg = new Proxy({"src":"/_astro/angular.m7Wy-6pX.png","width":270,"height":135,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/png/angular.png";
							}
							
							return target[name];
						}
					});

const astroImg = new Proxy({"src":"/_astro/astro.Bv9DQ0sf.png","width":260,"height":91,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/png/astro.png";
							}
							
							return target[name];
						}
					});

const bigqueryImg = new Proxy({"src":"/_astro/bigquery.DtCinESG.png","width":272,"height":112,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/png/bigquery.png";
							}
							
							return target[name];
						}
					});

const flutterImg = new Proxy({"src":"/_astro/flutter.BDoGvnug.png","width":251,"height":73,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/png/flutter.png";
							}
							
							return target[name];
						}
					});

const nextjsImg = new Proxy({"src":"/_astro/nextjs.DTcETqRu.png","width":258,"height":137,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/png/nextjs.png";
							}
							
							return target[name];
						}
					});

const reactImg = new Proxy({"src":"/_astro/react.B9h5hq0S.png","width":130,"height":146,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/png/react.png";
							}
							
							return target[name];
						}
					});

const wordpressImg = new Proxy({"src":"/_astro/wordpress.CbaTC4tr.png","width":227,"height":147,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/png/wordpress.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Stack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Stack;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto w-full mt-[40px] md:my-[73px] md:max-w-screen-xl px-5 space-y-5 md:space-y-10" data-astro-cid-rlzglfcb> <h4 class="text-center text-[#A9A9A9] md:text-[20px] font-[500]" data-astro-cid-rlzglfcb>
ALGO DE NUESTRO STACK
</h4> <div class="carousel-container overflow-hidden relative" data-astro-cid-rlzglfcb> <div class="carousel-track flex transition-transform duration-500 ease-in-out" data-astro-cid-rlzglfcb> <!-- Grupo original de imágenes --> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": flutterImg, "alt": "Flutter", "class": "mx-auto h-[50px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": astroImg, "alt": "Astro", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": angularImg, "alt": "Angular", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": bigqueryImg, "alt": "BigQuery", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": wordpressImg, "alt": "WordPress", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": nextjsImg, "alt": "Next.js", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": reactImg, "alt": "React", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <!-- Duplicado completo del grupo de imágenes --> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": flutterImg, "alt": "Flutter", "class": "mx-auto h-[50px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": astroImg, "alt": "Astro", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": angularImg, "alt": "Angular", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": bigqueryImg, "alt": "BigQuery", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": wordpressImg, "alt": "WordPress", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": nextjsImg, "alt": "Next.js", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> <div class="carousel-item min-w-[200px] px-4" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Image", $$Image, { "src": reactImg, "alt": "React", "class": "mx-auto h-[70px] w-auto", "data-astro-cid-rlzglfcb": true })} </div> </div> </div> </div>  `;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Stack.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const contactUri = "https://api.whatsapp.com/send?phone=573249804916&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20Inlines";
  const contactEmail = "comercial@inlines.com.co";
  const contactNumber = "3249804916";
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#2D234B] flex md:justify-start w-full mt-20 md:mt-0"> <div class="md:max-w-screen-xl space-y-5 md:space-y-0 mx-auto flex flex-col px-5 md:px-0 md:flex-row justify-center md:justify-between items-center md:items-end w-full py-20"> <div class="space-y-5 text-center md:text-left"> <h4 class="text-[#FFF] text-[16px] md:text-[20px] font-[800]">INLINES COLOMBIA S.A.S</h4> <h4 class="text-[#767676] text-[14px] md:text-[20px] font-[400]">Neiva - Huila</h4> <a${addAttribute(`mailto:${contactEmail}`, "href")} class="block"> <h4 class="text-[#767676] hover:text-[#ccc] text-[14px] md:text-[20px] font-[400]"> ${contactEmail} </h4> </a> <a${addAttribute(contactUri, "href")} class="block" target="_blank"> <h4 class="text-[#767676] hover:text-[#ccc] text-[14px] md:text-[20px] font-[400]"> ${contactNumber} </h4> </a> </div> <h4 class="text-[#767676] text-[14px] md:text-[20px] text-center font-[400]">
Todos los derechos reservados ${(/* @__PURE__ */ new Date()).getFullYear()} ©️
</h4> </div> </footer>`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Footer.astro", void 0);

const contact = new Proxy({"src":"/_astro/contact.BWN6Z1Ca.webp","width":1074,"height":1542,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/contact.webp";
							}
							
							return target[name];
						}
					});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto flex flex-col justify-start w-full mt-[40px] md:my-[73px] md:max-w-screen-xl px-5 space-y-3" data-astro-cid-xmivup5a> <h4 class="text-[#A9A9A9] md:text-[20px] font-[500]" data-astro-cid-xmivup5a>
¿DESEAS MÁS INFORMACIÓN?
</h4> <div class="relative bg-white py-5 px-5 md:px-20 justify-between items-center flex flex-col md:flex-row max-h-[1200px]" data-astro-cid-xmivup5a> <div class="square-box" data-astro-cid-xmivup5a> <div data-astro-cid-xmivup5a></div> <div data-astro-cid-xmivup5a></div> <div data-astro-cid-xmivup5a></div> <div data-astro-cid-xmivup5a></div> <div data-astro-cid-xmivup5a></div> <div data-astro-cid-xmivup5a></div> <div data-astro-cid-xmivup5a></div> </div> <div class="w-full md:w-1/3 justify-center hidden md:flex" data-astro-cid-xmivup5a> ${renderComponent($$result, "Image", $$Image, { "src": contact, "alt": "Contacta a 1nLines", "class": "w-[150px] md:w-[430px]", "data-astro-cid-xmivup5a": true })} </div> <div class="w-full md:w-2/3" data-astro-cid-xmivup5a> <div class="w-full flex flex-col space-y-5" data-astro-cid-xmivup5a> <button id="btn-contactate-con-nosotros" class="md:text-[36px] text-[18px] bg-[#8647EA] hover:bg-[#753bd1] font-semibold shadow-sm text-right text-white px-2 md:px-7 py-2 md:py-4 transition duration-300 ease-in-out" data-astro-cid-xmivup5a>
Contáctate con nosotros
</button> <button id="btn-dejanos-contactarte" class="md:text-[36px] text-[18px] bg-[#FAFAF7] hover:bg-[#dedede] font-semibold text-[#8647EA] shadow-sm text-left px-2 md:px-7 py-2 md:py-4 transition duration-300 ease-in-out" data-astro-cid-xmivup5a>
Déjanos contactarte
</button> </div> </div> </div> </div>  `;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Contact.astro", void 0);

const special_rates = new Proxy({"src":"/_astro/special_rates.BGxrieoO.webp","width":444,"height":434,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/special_rates.webp";
							}
							
							return target[name];
						}
					});

const consulting = new Proxy({"src":"/_astro/consulting.H7SyC10H.webp","width":613,"height":456,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/consulting.webp";
							}
							
							return target[name];
						}
					});

const experience = new Proxy({"src":"/_astro/experience.360xAX4S.webp","width":547,"height":450,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/experience.webp";
							}
							
							return target[name];
						}
					});

const $$Profits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto flex flex-col justify-start w-full mt-[100px] md:max-w-screen-xl px-5 space-y-3 md:mt-[40px]"> <h4 class="text-[#A9A9A9] md:text-[20px] font-[500]">
¿EN QUÉ TE BENEFICIAS AL ELEGIRNOS?
</h4> <div class="bg-[#482172] rounded-[18px] py-5 px-5 md:px-20 justify-between items-center text-[#C9D9F6] text-[20px] flex flex-col md:flex-row space-y-10 md:space-y-0 shadow-lg"> <div class="flex flex-col justify-center items-center w-full md:max-w-[300px] md:space-y-3 space-y-0"> ${renderComponent($$result, "Image", $$Image, { "src": special_rates, "alt": "Tarifas especiales y acuerdos de pago par Pymes", "class": "w-[100px] md:w-[142px] md:h-[139px]" })} <h5 class="text-center text-[14px] md:text-[16px]">
Tarifas especiales y acuerdos de pago para Pymes
</h5> </div> <div class="flex flex-col justify-center items-center md:max-w-[300px]"> ${renderComponent($$result, "Image", $$Image, { "src": experience, "alt": "Desarrolladores con experiencia profesional", "class": "w-[125px] md:w-[175px] md:h-[144px]" })} <h5 class="text-center text-[14px] md:text-[16px]">
Personal con experiencia profesional en desarrollo de software
</h5> </div> <div class="flex flex-col justify-center items-center md:max-w-[300px]"> ${renderComponent($$result, "Image", $$Image, { "src": consulting, "alt": "Asesoramiento y seguimiento personalizado", "class": "w-[125px] md:w-[196px] md:h-[146px]" })} <h5 class="text-center text-[14px] md:text-[16px]">
Asesoramiento y seguimiento personalizado de tus necesitades de negocio
</h5> </div> </div> </div>`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Profits.astro", void 0);

const Carousel = () => {
  const [deviceType, setDeviceType] = useState(null);
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ["android", "webos", "iphone", "ipad", "ipod", "blackberry", "windows phone"];
      const isMobile = mobileKeywords.some((keyword) => userAgent.includes(keyword));
      setDeviceType(isMobile ? 2 : 3);
    };
    detectDevice();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ jsxs(
    Swiper,
    {
      slidesPerView: deviceType,
      spaceBetween: 30,
      loop: true,
      pagination: {
        clickable: true
      },
      navigation: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      modules: [Pagination, Navigation, Autoplay],
      className: "mySwiper",
      children: [
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/img/webp/creacion-producto.webp", alt: "img creacion de producto" }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-[14px] md:text-[16px]", children: "Creación de productos digitales" })
        ] }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/img/webp/mantenimiento.webp", alt: "img mantenimiento" }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-[14px] md:text-[16px]", children: "Mantenimiento o reconstrucción de software" })
        ] }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/img/webp/inteligencia-de-negocios.webp", alt: "img inteligencia de negocios" }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-[14px] md:text-[16px]", children: "Consultoría en Inteligencia de Negocios con datos" })
        ] }) }),
        /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/img/webp/posicionamiento.webp", alt: "img posicionamiento" }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-[14px] md:text-[16px]", children: "Posicionamiento web" })
        ] }) })
      ]
    }
  ) });
};

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const contactUri = "https://api.whatsapp.com/send?phone=573249804916&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20Inlines";
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto flex flex-col justify-start w-full my-[40px] md:my-[60px] md:max-w-screen-xl px-5 space-y-3"> <h4 class="text-[#A9A9A9] md:text-[20px] font-[500]">
¿QUÉ SERVICIOS BRINDAMOS?
</h4> <div class="bg-white py-5 px-5 md:px-0 flex flex-col md:flex-row max-h-[1200px] h-[450px] md:space-x-10 space-x-0 space-y-10 md:space-y-0"> <div class="w-full md:w-1/3 flex flex-col justify-between"> <h2 class="text-[#1E1E1E] md:text-[38px] text-[18px] font-bold leading-tight">
Con las mejores herramientas y personal ofrecemos:
</h2> <div class="flex-col"> <p class="text-[#A9A9A9] md:text-[20px] font-[500] mb-7">
Si lo que estás buscando es otro tipo de servicio, y este está
          relacionado con software, no dudes en contactarnos.
</p> ${renderComponent($$result, "Button", $$Button, { "href": contactUri, "content": "CONTACTAR SERVICIO", "type": "primary" })} </div> </div> <div class="w-full md:w-2/3 flex flex-col justify-center">${renderComponent($$result, "Carousel", Carousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Carousel", "client:component-export": "default" })}</div> </div> </div>`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Portfolio.astro", void 0);

const imgContact$1 = new Proxy({"src":"/_astro/img_contact.B722GN5V.webp","width":371,"height":440,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/img_contact.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$ModalContactate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ModalContactate;
  const { id, idClose } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="fixed hidden inset-0 z-50 transform transition-all duration-300 ease-in-out" data-astro-cid-hytdvlvh> <!-- Overlay con fade --> <div class="fixed inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out modal-backdrop" data-astro-cid-hytdvlvh></div> <!-- Container del Modal --> <div class="fixed inset-0 z-50 overflow-y-auto" data-astro-cid-hytdvlvh> <div class="flex min-h-full items-center justify-center p-4 text-center" data-astro-cid-hytdvlvh> <!-- Modal Content con slide y fade --> <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-in-out opacity-0 translate-y-4 sm:translate-y-0 modal-content w-full max-w-[700px]" data-astro-cid-hytdvlvh> <div class="flex items-center justify-between p-5" data-astro-cid-hytdvlvh> <h3 class="text-lg font-semibold text-gray-900" data-astro-cid-hytdvlvh>
CONTÁCTATE CON NOSOTROS
</h3> <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"${addAttribute(idClose, "id")} data-astro-cid-hytdvlvh> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-astro-cid-hytdvlvh> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-astro-cid-hytdvlvh></path> </svg> <span class="sr-only" data-astro-cid-hytdvlvh>Close modal</span> </button> </div> <div class="w-full flex flex-col md:flex-row p-5" data-astro-cid-hytdvlvh> <form class="p-4 md:p-5 w-full md:w-1/2 space-y-5" data-astro-cid-hytdvlvh> <div class="col-span-2" data-astro-cid-hytdvlvh> <label for="name" class="block mb-2 text-sm font-medium text-gray-900" data-astro-cid-hytdvlvh>Nombre</label> <input type="text" name="name" id="name" autocomplete="name" class="bg-[#FCFCFC] border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder=""${addAttribute(true, "required")} data-astro-cid-hytdvlvh> </div> <div class="col-span-2" data-astro-cid-hytdvlvh> <label for="email" class="block mb-2 text-sm font-medium text-gray-900" data-astro-cid-hytdvlvh>Correo</label> <input type="email" name="email" id="email" class="bg-[#FCFCFC] border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder=""${addAttribute(true, "required")} data-astro-cid-hytdvlvh> </div> <div class="col-span-2" data-astro-cid-hytdvlvh> <label for="message" class="block mb-2 text-sm font-medium text-gray-900" data-astro-cid-hytdvlvh>Mensaje</label> <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-[#FCFCFC] rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 min-h-[100px] max-h-[200px] resize-y" placeholder=""${addAttribute(true, "required")} data-astro-cid-hytdvlvh></textarea> <h3 class="text-sm truncate mt-2 text-gray-400" data-astro-cid-hytdvlvh>
Te responderemos al correo que nos dejes
</h3> </div> <button type="submit" class="text-white mt-5 w-[200px] inline-flex items-center justify-center bg-[#8647EA] hover:bg-[#6d34c7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center" data-astro-cid-hytdvlvh>
Enviar
</button> </form> <div class="md:flex hidden items-center justify-center" data-astro-cid-hytdvlvh> ${renderComponent($$result, "Image", $$Image, { "src": imgContact$1, "alt": "Contacta a 1nLines", "class": "w-[271px] md:w-[280px]", "data-astro-cid-hytdvlvh": true })} </div> </div> <div class="flex flex-col space-y-2 justify-center items-center pt-5 pb-8" data-astro-cid-hytdvlvh> <h4 data-astro-cid-hytdvlvh>O comunícate a nuestras líneas de atención</h4> <a href="https://api.whatsapp.com/send?phone=573249804916&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20Inlines" class="flex" target="_blank" data-astro-cid-hytdvlvh> <svg width="22" height="22" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-astro-cid-hytdvlvh> <rect width="34" height="34" fill="url(#pattern0)" data-astro-cid-hytdvlvh></rect> <defs data-astro-cid-hytdvlvh> <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1" data-astro-cid-hytdvlvh> <use xlink:href="#image0_50_149" transform="scale(0.0104167)" data-astro-cid-hytdvlvh></use> </pattern> <image id="image0_50_149" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO2dPU6cYQyE3US5ComUU638bLUnSbKCBs6SFFwCcpD8dAGBPmkrCkBIaGy/M5L7mWfW/rZ7IxYX8PDcqP2NFy5AKxcglgsQywWI5QLEcgFiLVcA8AW4AG6Bfy8BUE9M0eFw+AhcZua9GiqrFXCCf62GyaoFZOaVGiSrFrDd/G5nh2EFXFQAyaoFZOYvNUQWL+CvGiIrF1A9IMX9jQ9IcX/jA1Lc3/iAFPc3PiDF/Y0PSHF/4wNS3N/4gBT3Nz4gxf2ND0hxf+MDUtzf+IAU9zc+IMX9jQ9IcX/jA1Lc3/iAFPc3PiDF/Y0PSHF/4wNS3N/4gBT3Nz4gxf2ND0hxf+MDUtzf+IAU9/fuASk+0V1qgLgAPUS8AXqQ+AT1nOguNUBcgB4i3gA9SHyCek50lxogLkAPEW+AHiQ+QT0nuksNEBegh4g3QA8Sn6CeE92lBogL0EPEG6AHiU9Qz4nuUgPEBegh4g3Qg8QnqOdEd6kB4gL0EPEG6EHiE9RzorvUAHEBeoh4A/Qg8QnqOdFdaoC4AD1EvAF6kPgE9ZzoLjVAXIAeIt4APUh8gnpOdJcaIC5ADxFvgB4kC5+gP2qIvHEy83d01+nRzq4F3ER3AUc1SN4+X6O79vv9Z+Cu4a//P3AWE9T0OcNjTBHwITN/FoD68Mr5sXmOSdoCAeen1a58do7j4D/9JmTm9+0fRhZ4Z3LzsHkBvu12u09qPpZlWVYso0d4PDfOKpVifwAAAABJRU5ErkJggg==" data-astro-cid-hytdvlvh></image> </defs> </svg> <h4 class="text-black text-[16px] font-[400]" data-astro-cid-hytdvlvh>+57 324 9804916</h4> </a> <a href="mailto:comercial@inlines.com.co" class="flex space-x-2" data-astro-cid-hytdvlvh> <svg width="22" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-hytdvlvh> <path d="M25.2 0H2.8C1.26 0 0.014 1.2375 0.014 2.75L0 19.25C0 20.7625 1.26 22 2.8 22H25.2C26.74 22 28 20.7625 28 19.25V2.75C28 1.2375 26.74 0 25.2 0ZM25.2 5.5L14 12.375L2.8 5.5V2.75L14 9.625L25.2 2.75V5.5Z" fill="#666666" data-astro-cid-hytdvlvh></path> </svg> <h4 class="text-black text-[16px] font-[400]" data-astro-cid-hytdvlvh>
comercial@inlines.com.co
</h4> </a> </div> </div> </div> </div> </div> <div id="success-message-contactate" class="opacity-0 pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300" data-astro-cid-hytdvlvh> <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4" data-astro-cid-hytdvlvh> <div class="text-center" data-astro-cid-hytdvlvh> <svg class="mx-auto mb-4 text-green-500 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-hytdvlvh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-hytdvlvh></path> </svg> <h3 class="mb-5 text-lg font-semibold text-gray-900" data-astro-cid-hytdvlvh>
Mensaje enviado correctamente
</h3> <p class="text-gray-600 mb-5" data-astro-cid-hytdvlvh>
Te responderemos pronto al correo proporcionado
</p> <button type="button" class="text-white bg-[#8647EA] hover:bg-[#6d34c7] font-medium rounded-lg text-sm px-5 py-2.5 text-center" id="close-success-message-contactate" data-astro-cid-hytdvlvh>
Aceptar
</button> </div> </div> </div>  `;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/ModalContactate.astro", void 0);

const imgContact = new Proxy({"src":"/_astro/img_dejanos.CWzBIYWY.webp","width":410,"height":437,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/theto/Documentos/1nlLines/astro-landing-page/public/assets/img/webp/img_dejanos.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$ModalDejanos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ModalDejanos;
  const { id, idClose } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="fixed hidden inset-0 z-50 transform transition-all duration-300 ease-in-out" data-astro-cid-z2p6lksx> <!-- Overlay con fade --> <div class="fixed inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out modal-backdrop" data-astro-cid-z2p6lksx></div> <!-- Container del Modal --> <div class="fixed inset-0 z-50 overflow-y-auto" data-astro-cid-z2p6lksx> <div class="flex min-h-full items-center justify-center p-4 text-center" data-astro-cid-z2p6lksx> <!-- Modal Content con slide y fade --> <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-in-out opacity-0 translate-y-4 sm:translate-y-0 modal-content w-full max-w-[700px]" data-astro-cid-z2p6lksx> <div class="flex items-center justify-between p-5" data-astro-cid-z2p6lksx> <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"${addAttribute(idClose, "id")} data-astro-cid-z2p6lksx> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-astro-cid-z2p6lksx> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-astro-cid-z2p6lksx></path> </svg> <span class="sr-only" data-astro-cid-z2p6lksx>Close modal</span> </button> </div> <div class="w-full flex flex-col md:flex-row p-5 pt-0" data-astro-cid-z2p6lksx> <form class="p-4 pt-0 md:p-5 md:pt-0 w-full md:w-1/2 space-y-5" data-astro-cid-z2p6lksx> <h2 class="text-lg font-semibold text-gray-900" data-astro-cid-z2p6lksx>
DÉJANOS CONTACTARTE
</h2> <div class="col-span-2 pt-5" data-astro-cid-z2p6lksx> <label for="name" class="block mb-2 text-sm font-medium text-gray-900" data-astro-cid-z2p6lksx>Nombre</label> <input type="text" name="name" id="name" autocomplete="name" class="bg-[#FCFCFC] border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder=""${addAttribute(true, "required")} data-astro-cid-z2p6lksx> </div> <div class="col-span-2" data-astro-cid-z2p6lksx> <label for="email" class="block mb-2 text-sm font-medium text-gray-900" data-astro-cid-z2p6lksx>Correo</label> <input type="email" name="email" id="email" class="bg-[#FCFCFC] border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder=""${addAttribute(true, "required")} data-astro-cid-z2p6lksx> </div> <div class="col-span-2" data-astro-cid-z2p6lksx> <label for="cellphone" class="block mb-2 text-sm font-medium text-gray-900" data-astro-cid-z2p6lksx>Celular</label> <input type="tel" name="cellphone" id="cellphone" autocomplete="tel" inputmode="numeric" pattern="[0-9]*" class="bg-[#FCFCFC] border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder=""${addAttribute(true, "required")} style="-moz-appearance: textfield; /* Firefox */
                        -webkit-appearance: none; /* Safari and Chrome */
                      margin: 0;" data-astro-cid-z2p6lksx> </div> <div class="col-span-2" data-astro-cid-z2p6lksx> <label for="message" class="block mb-2 text-sm font-medium text-gray-900" data-astro-cid-z2p6lksx>¿Por cuál medio prefieres que te contactemos?</label> <div class="relative" data-astro-cid-z2p6lksx> <select id="contactMethod" name="contactMethod" class="bg-[#FCFCFC] border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 pr-10 appearance-none" required data-astro-cid-z2p6lksx> <option value="" disabled selected data-astro-cid-z2p6lksx>Selecciona una opción</option> <option value="email" data-astro-cid-z2p6lksx>Correo electrónico</option> <option value="phone" data-astro-cid-z2p6lksx>Teléfono</option> <option value="whatsapp" data-astro-cid-z2p6lksx>WhatsApp</option> </select> <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" data-astro-cid-z2p6lksx> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#8647EA] hover:text-[#6d34c7]" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-z2p6lksx> <path fill-rule="evenodd" d="M5.293 8.707a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-z2p6lksx></path> </svg> </div> </div> </div> <button type="submit" class="text-white mt-5 w-[200px] inline-flex items-center justify-center bg-[#8647EA] hover:bg-[#6d34c7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center" data-astro-cid-z2p6lksx>
Enviar
</button> </form> <!-- mensaje oculto para que cuando se envie el formulario se muestre --> <div id="success-message" class="opacity-0 pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300" data-astro-cid-z2p6lksx> <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4" data-astro-cid-z2p6lksx> <div class="text-center" data-astro-cid-z2p6lksx> <svg class="mx-auto mb-4 text-green-500 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-z2p6lksx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-z2p6lksx></path> </svg> <h3 class="mb-5 text-lg font-semibold text-gray-900" data-astro-cid-z2p6lksx>
Mensaje enviado correctamente
</h3> <p class="text-gray-600 mb-5" data-astro-cid-z2p6lksx>
Nuestros asesores se pondrán en contacto contigo pronto
</p> <button type="button" class="text-white bg-[#8647EA] hover:bg-[#6d34c7] font-medium rounded-lg text-sm px-5 py-2.5 text-center" id="close-success-message" data-astro-cid-z2p6lksx>
Aceptar
</button> </div> </div> </div> <div class="md:flex hidden flex-row w-1/2 items-center justify-center" data-astro-cid-z2p6lksx> ${renderComponent($$result, "Image", $$Image, { "src": imgContact, "alt": "Contacta a 1nLines", "class": "w-[271px] md:w-[280px]", "data-astro-cid-z2p6lksx": true })} </div> </div> <div class="flex flex-col space-y-2 justify-center items-center pt-5 pb-8" data-astro-cid-z2p6lksx> <h4 data-astro-cid-z2p6lksx>
Nuestros asesores primero se comunicarán contigo por el medio
            señalado como preferente
</h4> </div> </div> </div> </div> </div>  `;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/ModalDejanos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inlines SAS" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "Profits", $$Profits, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Stack", $$Stack, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "ModalContactate", $$ModalContactate, { "id": "id-contactate-con-nosotros", "idClose": "id-close-contactate" })} ${renderComponent($$result2, "ModalDejanos", $$ModalDejanos, { "id": "id-dejanos-contactarte", "idClose": "id-dejanos" })} </main> ` })}`;
}, "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/pages/index.astro", void 0);

const $$file = "C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
