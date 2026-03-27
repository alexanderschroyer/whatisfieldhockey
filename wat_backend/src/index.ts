import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

const allowedOrigins = ['http://localhost:4321', 'http://127.0.0.1:4321'];
const fromEnv =
	process.env.CORS_ORIGIN?.split(',').map((o) => o.trim()).filter(Boolean) ?? [];
allowedOrigins.push(...fromEnv);

app.use(
	'*',
	cors({
		origin: allowedOrigins,
		allowMethods: ['GET', 'POST', 'OPTIONS'],
		allowHeaders: ['Content-Type'],
	}),
);

app.get('/health', (c) =>
	c.json({
		ok: true,
		service: 'wat_backend',
	}),
);

app.get('/api/health', (c) => c.json({ ok: true }));

app.notFound((c) => c.json({ error: 'not_found' }, 404));

const port = Number(process.env.PORT) || 3001;

serve(
	{
		fetch: app.fetch,
		port,
	},
	(info) => {
		console.log(`wat_backend listening on http://localhost:${info.port}`);
	},
);
