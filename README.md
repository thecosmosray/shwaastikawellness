SHWAASTIKA WELLNESS 🌿

A modern wellness and personal development platform built with Next.js, Tailwind CSS, and a calm, immersive UI focused on healing, mindfulness, and guided transformation.

✨ Overview

SHWAASTIKA WELLNESS is a professionally designed wellness website created for guided healing sessions, inner clarity programs, womb healing support, corporate workshops, testimonials, and mindful personal transformation.

The platform focuses on:

Intuitive healing
Guided wellness sessions
Inner clarity & awareness
Prenatal & womb healing support
Corporate emotional wellness workshops
Testimonials & healing journeys
🛠️ Tech Stack
Next.js 15+
React
Tailwind CSS
TypeScript
Framer Motion
Responsive UI Architecture
SEO Optimized Structure
🎨 Design Philosophy

The project follows a:

Calm & minimal aesthetic
Soft wellness-inspired palette
Premium modern UI
Smooth but lightweight interactions
Mobile-first responsive structure
Zen-inspired layout architecture
📱 Features
🌸 Wellness Pages
Home
About
Inner Clarity Session
Intuitive Healing
Womb Healing & Prenatal Support
Corporate Workshops
Testimonials
Blog
Book A Session
🎥 Testimonials Experience
Video testimonials
Image review sliders
Google review galleries
Interactive review sections
📅 Booking Experience
Animated session cards
Hidden pricing reveal interactions
Consultation CTA system
Mobile-friendly booking UI
🧘 UI & UX Enhancements
Smooth page transitions
Responsive navigation
Mobile hamburger menu
Calm visual hierarchy
Soft rounded layouts
SEO-friendly semantic structure
⚡ Performance & SEO
Server-side rendering with Next.js
Semantic HTML structure
Responsive image handling
Optimized route-based navigation
Metadata optimization
Accessible component structure
🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-username/shwaastika-wellness.git
2. Navigate to the project
cd shwaastika-wellness
3. Install dependencies
npm install
4. Run the development server
npm run dev
5. Open in browser
http://localhost:3000
📂 Project Structure
/app
/components
/public
/styles
/lib
/hooks
📸 UI Inspiration

The interface is inspired by:

Modern wellness brands
Zen-inspired layouts
Minimal editorial UI systems
Calm therapeutic digital experiences
🌍 Deployment

Recommended deployment platforms:

Vercel
Netlify
AWS Amplify
🔒 Notes

This project is designed with:

Responsive layouts
Tailwind utility-first architecture
Clean component separation
Maintainable scalability
👨‍💻 Developer Purushottam



📜 License

This project is intended for personal/business wellness platform usage.

🌿 “Healing begins when awareness meets intention.”

Newsletter setup with Brevo

The newsletter form posts to a secure Next.js API route at `/api/newsletter`.
The Brevo API key is read only on the server and is never exposed to the
frontend.

Required environment variables:

```bash
# Place this in your local .env file. Use your Brevo API key from Brevo account settings.
BREVO_API_KEY=YOUR_API_KEY_HERE

# Place this in your local .env file. Use the numeric ID of the Brevo newsletter list.
BREVO_LIST_ID=YOUR_LIST_ID_HERE
```

Local setup:

1. Create a `.env` file in the project root.
2. Add `BREVO_API_KEY` and `BREVO_LIST_ID` as shown above.
3. Install dependencies with `npm install`.
4. Run the site with `npm run dev`.
5. Submit the newsletter form and confirm the contact appears in the selected Brevo list.

Deployment setup:

1. Add `BREVO_API_KEY` and `BREVO_LIST_ID` in your hosting provider's environment settings.
2. Redeploy the application after adding or changing environment variables.
3. Do not prefix these values with `NEXT_PUBLIC_`; they must remain server-only.

Notes:

- `.env*` is already ignored in `.gitignore`, so local secrets are not committed.
- The integration uses Brevo's official REST API directly, so no extra package dependency is required.
- Duplicate subscribers are handled gracefully by updating the existing Brevo contact and ensuring it is attached to the configured list.
