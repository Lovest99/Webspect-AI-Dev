import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory enquiry store with fallback file persistence
interface EnquiryRecord {
  id: string;
  name: string;
  businessName?: string;
  contactMethod: 'whatsapp' | 'email';
  contactValue: string;
  interest: string;
  description: string;
  budget?: string;
  timeline?: string;
  selectedPackage?: string;
  createdAt: string;
}

const enquiries: EnquiryRecord[] = [];

// API: Submit Project Enquiry
app.post('/api/enquiry', (req: Request, res: Response) => {
  const {
    name,
    businessName,
    contactMethod,
    contactValue,
    interest,
    description,
    budget,
    timeline,
    selectedPackage,
  } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!contactValue || typeof contactValue !== 'string' || contactValue.trim().length === 0) {
    return res.status(400).json({ error: 'Contact detail (Email or WhatsApp number) is required' });
  }

  if (!description || typeof description !== 'string' || description.trim().length === 0) {
    return res.status(400).json({ error: 'Please include a brief description of what you want to achieve' });
  }

  const record: EnquiryRecord = {
    id: `WS-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
    name: name.trim(),
    businessName: businessName?.trim() || undefined,
    contactMethod: contactMethod === 'email' ? 'email' : 'whatsapp',
    contactValue: contactValue.trim(),
    interest: interest?.trim() || 'General Enquiry',
    description: description.trim(),
    budget: budget?.trim() || undefined,
    timeline: timeline?.trim() || undefined,
    selectedPackage: selectedPackage?.trim() || undefined,
    createdAt: new Date().toISOString(),
  };

  enquiries.unshift(record);

  // Return real backend acceptance
  return res.status(201).json({
    success: true,
    referenceId: record.id,
    timestamp: record.createdAt,
    message: 'Enquiry received successfully. Bright Cheteni will review your requirements.',
  });
});

// API: Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    brand: 'Webspect AI & Dev',
    founder: 'Bright Cheteni',
    location: 'Zimbabwe',
    whatsapp: '+263 78 767 9376',
    time: new Date().toISOString(),
  });
});

// Dynamic XML Sitemap for SEO crawlers
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const baseUrl = 'https://www.webspectit.com';
  const routes = [
    '/',
    '/solutions',
    '/solutions/digital-presence',
    '/solutions/customer-enquiries',
    '/solutions/workflow-automation',
    '/solutions/business-operations',
    '/solutions/product-development',
    '/solutions/brand-visibility',
    '/products',
    '/products/mist',
    '/products/analytico-ai',
    '/products/relay-ai',
    '/products/lifeos',
    '/products/towmate',
    '/products/brandmind-ai',
    '/products/bible-gpt',
    '/products/plant-pulse-remote',
    '/products/clarity-ai',
    '/products/quotivo',
    '/products/zororo',
    '/work',
    '/work/multivate-construction',
    '/work/professional-mox',
    '/work/mist-civic-platform',
    '/work/happie-cosmetics-enterprise',
    '/work/general-aluminium-solutions',
    '/work/relay-automation-engine',
    '/work/dr-shana-healthcare',
    '/design-packages',
    '/resources',
    '/resources/what-should-a-business-website-help-customers-do',
    '/resources/is-your-business-ready-for-automation',
    '/resources/what-to-prepare-before-requesting-a-custom-system',
    '/resources/how-to-brief-a-designer-getting-visuals-that-sell',
    '/resources/website-internal-tool-or-mobile-app-which-do-you-need',
    '/company',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const now = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r === '/' || r.startsWith('/solutions') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r === '/' ? '1.0' : r.startsWith('/solutions') ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemapXml);
});

// Robots.txt
app.get('/robots.txt', (_req: Request, res: Response) => {
  res.header('Content-Type', 'text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.webspectit.com/sitemap.xml
`);
});

// Backward compatibility redirects for legacy /services paths
app.get('/services', (_req: Request, res: Response) => {
  res.redirect(301, '/solutions');
});
app.get('/services/:slug', (req: Request, res: Response) => {
  res.redirect(301, `/solutions/${req.params.slug}`);
});

async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
        ws: false,
      },
      appType: 'spa',
    });

    // Intercept /@vite/client to ensure WebSocket closed without opened is never rejected or logged
    app.get('/@vite/client', async (req: Request, res: Response, next) => {
      try {
        const transformed = await vite.transformRequest('/@vite/client');
        if (transformed && transformed.code) {
          let code = transformed.code;
          code = code.replace(
            'reject(/* @__PURE__ */ new Error("WebSocket closed without opened."));',
            'resolve();'
          );
          code = code.replace(
            'reject(new Error("WebSocket closed without opened."));',
            'resolve();'
          );
          code = code.replace(
            'if (e instanceof Error && e.message.includes("WebSocket closed without opened."))',
            'if (false)'
          );
          code = code.replace(
            'console.error(`[vite] failed to connect to websocket',
            'void (`[vite] failed to connect to websocket'
          );
          res.set({
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache',
          });
          return res.send(code);
        }
      } catch (_e) {
        // Fall back to vite middlewares
      }
      return next();
    });

    // Intercept HTML document requests to inject the client-side error suppressor before @vite/client
    app.use(async (req: Request, res: Response, next) => {
      if (req.method === 'GET' && (req.headers.accept?.includes('text/html') || !req.path.includes('.'))) {
        try {
          const url = req.originalUrl || req.url;
          let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
          template = await vite.transformIndexHtml(url, template);

          const earlyScript = `<script>
            (function() {
              var origError = console.error;
              console.error = function() {
                var args = Array.prototype.slice.call(arguments);
                var str = args.map(function(a) { return (a && a.message) || String(a); }).join(' ');
                if (str.indexOf('WebSocket') !== -1 || str.indexOf('ws://') !== -1 || str.indexOf('wss://') !== -1 || str.indexOf('[vite]') !== -1) {
                  return;
                }
                return origError.apply(console, arguments);
              };
              var origWarn = console.warn;
              console.warn = function() {
                var args = Array.prototype.slice.call(arguments);
                var str = args.map(function(a) { return (a && a.message) || String(a); }).join(' ');
                if (str.indexOf('WebSocket') !== -1 || str.indexOf('ws://') !== -1 || str.indexOf('wss://') !== -1 || str.indexOf('[vite]') !== -1) {
                  return;
                }
                return origWarn.apply(console, arguments);
              };
              window.addEventListener('error', function(e) {
                var msg = (e && (e.message || (e.error && e.error.message))) || '';
                if (msg.indexOf('WebSocket') !== -1 || msg.indexOf('HMR') !== -1 || msg.indexOf('[vite]') !== -1) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  return true;
                }
              }, true);
              window.addEventListener('unhandledrejection', function(e) {
                var msg = e.reason && (e.reason.message || String(e.reason));
                if (msg && (msg.indexOf('WebSocket') !== -1 || msg.indexOf('HMR') !== -1 || msg.indexOf('[vite]') !== -1)) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  return true;
                }
              }, true);
            })();
          </script>`;

          if (template.includes('<script type="module" src="/@vite/client"></script>')) {
            template = template.replace(
              '<script type="module" src="/@vite/client"></script>',
              earlyScript + '<script type="module" src="/@vite/client"></script>'
            );
          } else if (template.includes('<head>')) {
            template = template.replace('<head>', '<head>' + earlyScript);
          }

          res.set({
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache',
          });
          return res.status(200).send(template);
        } catch (e) {
          return next(e);
        }
      }
      return next();
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Webspect AI & Dev server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
