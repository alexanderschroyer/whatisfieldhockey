/** Base URL for the wat_backend API (browser + server). */
export function publicApiBaseUrl(): string {
	const raw = import.meta.env.PUBLIC_WAT_API_URL ?? 'http://localhost:3001';
	return raw.replace(/\/$/, '');
}
