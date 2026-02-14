# Production Deployment Checklist

Before deploying your VSL funnel to production, complete these steps:

## ✅ Pre-Deployment

### 1. Environment Configuration
- [ ] Added production Girly.bio API key to `.env.production`
- [ ] Set `VITE_APP_ENV=production` in `.env.production`
- [ ] Verified external_id is correct: `tft_vsl_funnel_2026`
- [ ] Added `.env` files to `.gitignore` (already done ✓)

### 2. Content Review
- [ ] Updated all copy/text for your brand
- [ ] Replaced YouTube video ID in `WatchPage.jsx` (currently: `k1xiJ-R5zUo`)
- [ ] Set correct product pricing in `CheckoutPage.jsx` (currently: $197)
- [ ] Updated support email in `ThankYouPage.jsx`
- [ ] Verified member dashboard URL in `ThankYouPage.jsx`

### 3. Tracking Setup
- [ ] Created Girly.bio funnel links via API:
  ```bash
  # VSL Landing Link
  curl -X POST "https://girly.bio/api/v1/links" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "destination_url": "https://yourdomain.com/vsl",
      "slug": "tft-vsl",
      "title": "TFT VSL Landing",
      "external_id": "tft_vsl_funnel_2026"
    }'
  ```
- [ ] Defined funnel steps via API:
  ```bash
  curl -X POST "https://girly.bio/api/v1/funnel-steps" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "external_id": "tft_vsl_funnel_2026",
      "steps": [
        {"step_name": "vsl-landing", "step_order": 1},
        {"step_name": "watch-page", "step_order": 2},
        {"step_name": "checkout", "step_order": 3},
        {"step_name": "thank-you", "step_order": 4}
      ]
    }'
  ```
- [ ] Verified tracking works in development mode

### 4. Payment Integration
- [ ] Integrated real payment processor (Stripe, PayPal, etc.)
- [ ] Updated `CheckoutPage.jsx` with real payment logic
- [ ] Tested payment flow end-to-end
- [ ] Set up order confirmation emails
- [ ] Created member dashboard login system

### 5. Legal & Compliance
- [ ] Added Privacy Policy link (footer)
- [ ] Added Terms of Service link (footer)
- [ ] Added refund policy (30-day guarantee mentioned)
- [ ] Added disclaimers (already included ✓)
- [ ] Verified GDPR/CCPA compliance for email collection

### 6. Testing
- [ ] Tested full funnel flow on desktop
- [ ] Tested full funnel flow on mobile
- [ ] Verified all CTAs work correctly
- [ ] Tested modal form validation
- [ ] Verified video player loads correctly
- [ ] Tested checkout form validation
- [ ] Verified thank you page displays correct order info
- [ ] Tested with different browsers (Chrome, Safari, Firefox)
- [ ] Verified tracking events in Girly.bio dashboard

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - VSL funnel with tracking"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables:
     - `VITE_GIRLY_BIO_API_KEY`
     - `VITE_GIRLY_BIO_EXTERNAL_ID`
     - `VITE_GIRLY_BIO_API_URL`
     - `VITE_APP_ENV=production`
   - Click "Deploy"

3. **Custom Domain:**
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed
   - Enable HTTPS (automatic)

### Option 2: Netlify

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to https://netlify.com
   - Drag `dist` folder to deploy
   - Add environment variables in settings
   - Add custom domain

### Option 3: Your Own Server

1. **Build:**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your server

3. **Configure web server:**
   - Point document root to `dist`
   - Enable SPA routing (all routes → index.html)
   - Enable HTTPS
   - Set up caching headers

---

## 📊 Post-Deployment

### 1. Verify Tracking
- [ ] Visit your live site
- [ ] Go through entire funnel
- [ ] Check Girly.bio dashboard for events:
  ```bash
  curl "https://girly.bio/api/v1/analytics/funnel/tft_vsl_funnel_2026?days=1" \
    -H "Authorization: Bearer YOUR_API_KEY"
  ```
- [ ] Verify all events are being recorded

### 2. Setup Webhooks (Optional)
- [ ] Create webhook endpoint in your app
- [ ] Register webhook in Girly.bio:
  ```bash
  curl -X POST "https://girly.bio/api/v1/webhooks" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "webhook_url": "https://yourapp.com/webhooks/girly-bio",
      "external_id": "tft_vsl_funnel_2026",
      "event_types": ["form_submit", "custom"],
      "secret_key": "your-webhook-secret"
    }'
  ```
- [ ] Test webhook deliveries

### 3. Monitor Performance
- [ ] Set up Google Analytics (if desired)
- [ ] Monitor Girly.bio funnel analytics daily
- [ ] Track conversion rates:
  - VSL page → Video page
  - Video page → Checkout
  - Checkout → Purchase
- [ ] Identify drop-off points
- [ ] A/B test improvements

### 4. Email Automation
- [ ] Set up email sequence for leads
- [ ] Send welcome email after purchase
- [ ] Set up abandoned cart emails (if applicable)
- [ ] Create Discord invite automation

---

## 🎯 Success Metrics to Track

### Key Funnel Metrics
- **Landing to Watch Rate:** Target 50-70%
- **Watch to Checkout Rate:** Target 15-30%
- **Checkout to Purchase Rate:** Target 20-30%
- **Overall Conversion:** Target 2-5%

### Video Metrics
- **Video Completion Rate:** Target 60%+
- **25% Milestone:** Should be 80%+
- **50% Milestone:** Should be 70%+
- **75% Milestone:** Should be 60%+

### Form Metrics
- **Lead Capture Conversion:** Target 40-60%
- **Form Abandonment:** Keep below 30%
- **Checkout Form Completion:** Target 70%+

---

## 🔧 Optimization Tips

### If Conversion is Low:

**Landing Page (< 50%):**
- Strengthen headline
- Add social proof
- Improve CTA copy
- A/B test video thumbnail

**Video Page (< 20%):**
- Shorten video
- Add stronger hook in first 30 seconds
- Make CTA more compelling
- Test shorter unlock timer

**Checkout (< 20%):**
- Simplify form fields
- Add trust badges
- Highlight guarantee
- Test different pricing displays

---

## 📞 Support Contacts

- **Girly.bio API Support:** support@girly.bio
- **Payment Processor:** [Your payment processor support]
- **Hosting Support:** [Your hosting provider support]

---

## ✅ Final Checklist

- [ ] All environment variables set
- [ ] Tracking verified and working
- [ ] Payment processing functional
- [ ] All links working correctly
- [ ] Mobile responsive tested
- [ ] HTTPS enabled
- [ ] Custom domain configured
- [ ] Email automations active
- [ ] Analytics monitoring set up
- [ ] Team trained on dashboard

---

**Ready to launch?** 🚀

Once all items are checked, your funnel is production-ready!

Monitor your analytics closely in the first week and make adjustments based on real user behavior.

Good luck with your launch! 🎉
