# Trading for Toddlers VSL Funnel - Setup Guide

Complete VSL funnel with Girly.bio tracking integration for production-ready deployment.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Edit `.env.local` and add your Girly.bio API key:

```env
VITE_GIRLY_BIO_API_KEY=gb_live_your_api_key_here
VITE_GIRLY_BIO_EXTERNAL_ID=tft_vsl_funnel_2026
VITE_GIRLY_BIO_API_URL=https://girly.bio/api/v1
VITE_APP_ENV=development
```

For production, update `.env.production` with your production API key.

### 3. Get Your Girly.bio API Key

1. Log in to https://girly.bio/admin/login
2. Navigate to **API Keys** section
3. Click **Create New API Key**
4. Select these scopes:
   - `events:write` - Send tracking events
   - `events:read` - View analytics
   - `links:write` - Create funnel links
   - `links:read` - List links
5. Copy the API key and paste it in `.env.local`

### 4. Start Development Server

```bash
npm run dev
```

Visit http://localhost:5174/vsl to see the funnel.

---

## 📊 Funnel Flow

```
/vsl (Landing Page)
  ↓ User clicks "Watch the Free Training"
  ↓ Lead capture modal appears
  ↓ User submits email/name/phone
  ↓
/vsl/watch (Video Page)
  ↓ User watches training video
  ↓ CTA unlocks after 10 seconds
  ↓ User clicks "Unlock Full Access"
  ↓
/checkout (Checkout Page)
  ↓ User fills out payment form
  ↓ User clicks "Complete Purchase"
  ↓
/thank-you (Thank You Page)
  ↓ Order confirmation shown
  ↓ User clicks "Access Your Dashboard"
```

---

## 🎯 What's Being Tracked

### Page Events
- ✅ Page load (with funnel step)
- ✅ Page exit (with time on page)
- ✅ Scroll depth (25%, 50%, 75%, 100%)

### Video Events
- ✅ Video play
- ✅ Video pause
- ✅ Video progress (25%, 50%, 75%, 90%)
- ✅ Video complete

### Form Events
- ✅ Form load
- ✅ Form start (first field interaction)
- ✅ Form field changes
- ✅ Form submit
- ✅ Form errors

### CTA/Button Events
- ✅ CTA clicks (with location and timing)
- ✅ Button clicks (with context)

### Modal Events
- ✅ Modal open
- ✅ Modal close (with time open)

### Custom Events
- ✅ CTA unlock (watch page timer)
- ✅ Checkout viewed
- ✅ Purchase completed
- ✅ Thank you page viewed

---

## 📈 View Your Analytics

### Via Girly.bio API

```bash
# Get funnel analytics
curl "https://girly.bio/api/v1/analytics/funnel/tft_vsl_funnel_2026?days=30" \
  -H "Authorization: Bearer YOUR_API_KEY"

# Get drop-off analysis
curl "https://girly.bio/api/v1/analytics/funnel/tft_vsl_funnel_2026/drop-offs?days=7" \
  -H "Authorization: Bearer YOUR_API_KEY"

# Get event breakdown
curl "https://girly.bio/api/v1/analytics/events?external_id=tft_vsl_funnel_2026&group_by=day" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

---

## 🔒 Security

- ✅ `.env*` files are gitignored
- ✅ API keys loaded from environment variables
- ✅ No sensitive user data tracked

---

## 📞 Support

Questions? Email: support@tradingfortoddlers.com

---

© 2025 Trading for Toddlers
