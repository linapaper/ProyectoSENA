/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_CATALOG_FILE_URI: string;
    readonly PUBLIC_WHATSAPP_CONTACT_URI: string;
    readonly PUBLIC_CONTACT_EMAIL: string;
    readonly PUBLIC_CONTACT_NUMBER: string;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}