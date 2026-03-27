/// <reference types="astro/client" />

interface ImportMetaEnv {
	/** Production: https://your-api.onrender.com (no trailing slash). Dev default: http://localhost:3001 */
	readonly PUBLIC_WAT_API_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
