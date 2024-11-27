import { handleRequest } from '@astrojs/netlify/netlify-functions.js';
import { SSRManifest } from '../../dist/server/manifest.js';

export default async function handler(request, context) {
  const response = await handleRequest(request, context, SSRManifest);
  return response;
}