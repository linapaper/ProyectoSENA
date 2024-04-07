import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const envVariables = [
    'PUBLIC_CATALOG_FILE_URI',
    'PUBLIC_WHATSAPP_CONTACT_URI',
    'PUBLIC_CONTACT_EMAIL',
    'PUBLIC_CONTACT_NUMBER'
];

const missingVariables = envVariables.filter(variable => !(variable in process.env) || !process.env[variable]);
if (missingVariables.length > 0) {
    console.error(`Missing environment variables: ${missingVariables.join(', ')}`);
    process.exit(1); // Exit the build process with an error code
}