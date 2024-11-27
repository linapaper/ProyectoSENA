import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_Dlq-rg80.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/theto/Documentos/1nlLines/astro-landing-page/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dfpy_B6s.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(e,o=document)=>o.querySelector(e),v=(e,o=document)=>o.querySelectorAll(e),d=t(\".carousel-track\");if(d){const e=v(\".carousel-item\");let o=!1;const a=()=>{o=!0,d.style.transition=\"none\",d.style.transform=\"translateX(0)\",d.offsetWidth,d.style.transition=\"transform 30s linear infinite\",o=!1},s=new IntersectionObserver(c=>{c.forEach(r=>{r.isIntersecting&&!o&&a()})},{root:null,threshold:1}),n=e[e.length-1];n&&s.observe(n),d.style.transform=\"translateX(0)\"}const m=(e,o)=>{const a=t(`#${e}`),s=t(\"body\");a&&s&&(o?(a.classList.remove(\"hidden\"),a.offsetHeight,a.classList.add(\"modal-active\"),s.classList.add(\"overflow-hidden\")):(a.classList.remove(\"modal-active\"),s.classList.remove(\"overflow-hidden\"),setTimeout(()=>{a.classList.add(\"hidden\")},300)))};t(\"#id-close-contactate\")?.addEventListener(\"click\",()=>{m(\"id-contactate-con-nosotros\",!1)});t(\"#id-dejanos\")?.addEventListener(\"click\",()=>{m(\"id-dejanos-contactarte\",!1)});t(\"button#btn-contactate-con-nosotros\")?.addEventListener(\"click\",()=>{m(\"id-contactate-con-nosotros\",!0)});t(\"button#btn-dejanos-contactarte\")?.addEventListener(\"click\",()=>{m(\"id-dejanos-contactarte\",!0)});document.addEventListener(\"click\",e=>{e.target.classList.contains(\"modal-backdrop\")&&(m(\"id-contactate-con-nosotros\",!1),m(\"id-dejanos-contactarte\",!1))});document.addEventListener(\"DOMContentLoaded\",function(){const e=t(\"#id-contactate-con-nosotros form\"),o=t(\"#success-message-contactate\"),a=t(\"#close-success-message-contactate\");a&&o&&a.addEventListener(\"click\",()=>{o.classList.add(\"opacity-0\",\"pointer-events-none\");const s=t(\"#id-contactate-con-nosotros\"),n=t(\"#body-page\");s&&n&&(s.classList.remove(\"flex\"),s.classList.add(\"hidden\"),n.classList.remove(\"overflow-hidden\"),n.classList.add(\"overflow-auto\"))}),e?e.addEventListener(\"submit\",async function(s){s.preventDefault();const n=t(\"#name\",e),c=t(\"#email\",e),r=t(\"#message\",e);if(!n||!c||!r){console.error(\"No se encontraron todos los campos del formulario\");return}const f={name:n.value,email:c.value,message:r.value,formType:\"contactate\"};try{const l=await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(f)}),i=await l.json();if(console.log(\"Respuesta del servidor:\",i),l.ok)o&&o.classList.remove(\"opacity-0\",\"pointer-events-none\"),e.reset(),console.log(\"Formulario limpiado\");else throw new Error(i.message||\"Error al enviar el mensaje\")}catch(l){console.error(\"Error:\",l),alert(\"Error al enviar el mensaje. Por favor, intenta nuevamente.\")}}):console.error(\"No se encontró el formulario de Contáctate con nosotros\")});document.addEventListener(\"DOMContentLoaded\",function(){const e=t(\"#id-dejanos-contactarte form\"),o=t(\"#success-message\"),a=t(\"#close-success-message\");a&&o&&a.addEventListener(\"click\",()=>{o.classList.add(\"opacity-0\",\"pointer-events-none\");const s=t(\"#id-dejanos-contactarte\"),n=t(\"#body-page\");s&&n&&(s.classList.remove(\"flex\"),s.classList.add(\"hidden\"),n.classList.remove(\"overflow-hidden\"),n.classList.add(\"overflow-auto\"))}),e?e.addEventListener(\"submit\",async function(s){s.preventDefault();const n=t(\"#name\",e),c=t(\"#email\",e),r=t(\"#cellphone\",e),f=t(\"#contactMethod\",e);if(!n||!c||!r||!f){console.error(\"No se encontraron todos los campos del formulario\");return}const l={name:n.value,email:c.value,cellphone:r.value,contactMethod:f.value,formType:\"dejanos-contactarte\"};try{const i=await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(l)}),u=await i.json();if(console.log(\"Respuesta del servidor:\",u),i.ok)o&&o.classList.remove(\"opacity-0\",\"pointer-events-none\"),e.reset(),console.log(\"Formulario limpiado\");else throw new Error(u.message||\"Error al enviar el mensaje\")}catch(i){console.error(\"Error:\",i),alert(\"Error al enviar el mensaje. Por favor, intenta nuevamente.\")}}):console.error(\"No se encontró el formulario de Déjanos contactarte\")});\n"}],"styles":[{"type":"external","src":"/_astro/index.Dfpy_B6s.css"},{"type":"external","src":"/_astro/index.BxP3CHnV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B7560K5b.mjs","C:/Users/theto/Documentos/1nlLines/astro-landing-page/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/theto/Documentos/1nlLines/astro-landing-page/src/components/Carousel":"_astro/Carousel.BzmBIgut.js","@astrojs/react/client.js":"_astro/client.BY2mA-CD.js","/astro/hoisted.js?q=0":"_astro/hoisted.C30sGjLn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/special_rates.BGxrieoO.webp","/_astro/experience.360xAX4S.webp","/_astro/consulting.H7SyC10H.webp","/_astro/angular.m7Wy-6pX.png","/_astro/astro.Bv9DQ0sf.png","/_astro/bigquery.DtCinESG.png","/_astro/flutter.BDoGvnug.png","/_astro/nextjs.DTcETqRu.png","/_astro/react.B9h5hq0S.png","/_astro/wordpress.CbaTC4tr.png","/_astro/logo_inlines.CrQ0LVV7.webp","/_astro/img_contact.B722GN5V.webp","/_astro/contact.BWN6Z1Ca.webp","/_astro/img_dejanos.CWzBIYWY.webp","/_astro/img_hero.BHIAeprY.webp","/_astro/index.Dfpy_B6s.css","/_astro/index.BxP3CHnV.css","/favicon.ico","/data/CATALOGO_SERVICIOS_INLINES.pdf","/_astro/Carousel.BzmBIgut.js","/_astro/client.BY2mA-CD.js","/_astro/index.B52nOzfP.js","/_astro/index.BwXjGcf2.css","/assets/files/CATALOGO_SERVICIOS_INLINES.pdf","/assets/img/png/angular.png","/assets/img/png/astro.png","/assets/img/png/bigquery.png","/assets/img/png/flutter.png","/assets/img/png/nextjs.png","/assets/img/png/react.png","/assets/img/png/wordpress.png","/assets/img/webp/consulting.webp","/assets/img/webp/contact.webp","/assets/img/webp/creacion-producto.webp","/assets/img/webp/experience.webp","/assets/img/webp/flutterImg.webp","/assets/img/webp/img_contact.webp","/assets/img/webp/img_dejanos.webp","/assets/img/webp/img_hero.webp","/assets/img/webp/inteligencia-de-negocios.webp","/assets/img/webp/jsFrmImg.webp","/assets/img/webp/logo_inlines.webp","/assets/img/webp/mantenimiento.webp","/assets/img/webp/posicionamiento.webp","/assets/img/webp/pythonImg.webp","/assets/img/webp/special_rates.webp","/assets/img/webp/springBootImg.webp"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"GdaPggYFi4/K1dOJmQubJcYugEHv/ynIK9Ov+Lhe6BM=","experimentalEnvGetSecretEnabled":false});

export { manifest };
