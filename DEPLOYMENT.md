# HAQQDEEN Deployment Guide

Complete guide for deploying HAQQDEEN to production environments.

## 🚀 Quick Start - Vercel (Recommended)

### 1. Push to GitHub

```bash
git add .
git commit -m "feat: production-ready HAQQDEEN v1.0"
git push origin main
```

### 2. Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select your GitHub repository
4. Framework preset: **Vite**
5. Build Command: `npm run build`
6. Install Command: `npm install --legacy-peer-deps`
7. Output Directory: `dist`
8. Click "Deploy"

### 3. Environment Variables (if needed)

In Vercel Project Settings → Environment Variables:

```
VITE_GA_ID=your-google-analytics-id
VITE_WHATSAPP_NUMBER=919876543210
VITE_INSTAGRAM_URL=https://www.instagram.com/haqqdeen/
```

### 4. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records at your domain provider

**Done!** Your site is live at your Vercel URL or custom domain.

---

## 🌐 Alternative Platforms

### Netlify

#### 1. Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub and select repository

#### 2. Configure Build

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Install Command**: `npm install --legacy-peer-deps`

#### 3. Deploy

Netlify automatically deploys on every push to main.

#### 4. Environment Variables

Settings → Build & Deploy → Environment:

```
VITE_GA_ID=your-google-analytics-id
```

### Firebase Hosting

#### 1. Install Firebase Tools

```bash
npm install -g firebase-tools
```

#### 2. Initialize Firebase

```bash
firebase init hosting
```

When prompted:
- What do you want to use as your public directory? **dist**
- Configure as SPA? **Yes**
- Set up GitHub deploys? **Optional**

#### 3. Build and Deploy

```bash
npm run build
firebase deploy
```

#### 4. View Live Site

```bash
firebase open hosting:site
```

### AWS Amplify

#### 1. Connect Repository

1. Go to AWS Amplify Console
2. "New App" → "Host Web App"
3. Select GitHub and repository

#### 2. Build Settings

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install --legacy-peer-deps
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

#### 3. Deploy

Push to `main` branch and Amplify auto-deploys.

---

## 📦 Manual Deployment (VPS/Self-Hosted)

### 1. Prepare Server

```bash
# SSH into your server
ssh user@your-server.com

# Install Node.js (if not present)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Create app directory
mkdir -p /var/www/haqqdeen
cd /var/www/haqqdeen
```

### 2. Clone and Setup

```bash
git clone https://github.com/syedsz-1519/haqqdeen-.git .
npm install --legacy-peer-deps
npm run build
```

### 3. Serve with PM2 (Recommended)

```bash
npm install -g pm2

# Create ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'haqqdeen',
    script: './server.js',
    watch: false,
    env: {
      NODE_ENV: 'production'
    }
  }]
};
EOF

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Check status
pm2 status
```

### 4. Serve with Nginx (Reverse Proxy)

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name haqqdeen.com www.haqqdeen.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name haqqdeen.com www.haqqdeen.com;

    # SSL certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/haqqdeen.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/haqqdeen.com/privkey.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json application/javascript;

    # Static files cache
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        root /var/www/haqqdeen/dist;
        try_files $uri /index.html;
    }
}
```

### 5. Enable SSL with Let's Encrypt

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d haqqdeen.com -d www.haqqdeen.com
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install --legacy-peer-deps

      - name: Run linter
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### Setup GitHub Secrets

1. Go to Settings → Secrets and Variables → Actions
2. Add:
   - `VERCEL_TOKEN`: From Vercel settings
   - `VERCEL_ORG_ID`: Your Vercel org ID
   - `VERCEL_PROJECT_ID`: Your project ID

---

## 🔐 Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables in `.env` (not in code)
- [ ] Security headers configured (HSTS, CSP, etc.)
- [ ] CORS configured properly
- [ ] Rate limiting enabled (if API backend)
- [ ] Input validation on forms
- [ ] No sensitive data in localStorage
- [ ] Regular security updates

## 📊 Monitoring & Analytics

### Vercel Analytics

Built-in performance monitoring:
1. Project Settings → Analytics
2. View Real User Metrics
3. Monitor Core Web Vitals

### Google Analytics

Add to `src/main.tsx`:

```typescript
import { GoogleAnalytics } from '@react-ga/react-ga';

GoogleAnalytics.initialize('GA_ID');
```

### Error Tracking (Sentry)

```bash
npm install @sentry/react
```

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

---

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules package-lock.json dist

# Reinstall
npm install --legacy-peer-deps

# Build
npm run build
```

### Site Shows Blank

1. Check browser console for errors
2. Verify `dist/` folder exists and has files
3. Check web server error logs
4. Ensure `index.html` is being served as fallback

### CSS Not Loading

1. Check Tailwind CSS build process
2. Verify `src/styles/index.css` contains Tailwind directives
3. Check browser DevTools for 404 errors on CSS files

### Slow Performance

1. Check Network tab for large assets
2. Ensure gzip compression enabled
3. Check Lighthouse score
4. Optimize images
5. Enable caching headers

---

## 🔄 Rollback Plan

### Vercel
1. Go to Deployments tab
2. Click on previous deployment
3. Click "Promote to Production"

### Other Platforms
```bash
# Revert to previous commit
git revert HEAD --no-edit
git push origin main
```

---

## 📈 Post-Deployment

### 1. Verify Site

- [ ] Visit live domain
- [ ] Test all pages load
- [ ] Test navigation works
- [ ] Check console for errors
- [ ] Test mobile responsiveness

### 2. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify canonical URLs
- [ ] Check Open Graph tags

### 3. Analytics

- [ ] Google Analytics installed and tracking
- [ ] Monitor Core Web Vitals
- [ ] Track user engagement

### 4. Monitoring

- [ ] Set up error tracking
- [ ] Monitor uptime
- [ ] Alert on errors

---

## 🎯 Deployment Checklist

- [ ] All tests passing
- [ ] Build succeeds
- [ ] No console errors
- [ ] Environment variables set
- [ ] Security headers configured
- [ ] DNS/Domain configured
- [ ] SSL certificate valid
- [ ] Performance acceptable
- [ ] Analytics configured
- [ ] Error tracking setup
- [ ] Monitoring enabled
- [ ] Team notified

---

**Questions?** Contact support at contact@haqqdeen.com

Free for the Ummah. Establishing the Deen. 🤍
