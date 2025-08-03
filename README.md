# Nowadays Travel AI - Universal Group Travel Platform

A comprehensive web application designed to streamline group travel planning through AI-powered automation. Built as a proposal for expanding Nowadays AI's venue coordination expertise into complete travel management.

## Features

- 🤖 AI-powered itinerary generation
- 💰 Real-time budget tracking and splitting
- 🏢 Corporate travel planning
- 👥 Friend group trip coordination
- 🌍 Multi-city travel support
- 🏨 Hotel and flight comparisons
- 📱 Mobile-responsive design

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **UI**: shadcn/ui + Tailwind CSS
- **Database**: PostgreSQL (Neon serverless)
- **ORM**: Drizzle
- **State Management**: TanStack Query
- **Routing**: Wouter

## Local Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd nowadays-travel-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_session_secret_key
```

### 4. Database Setup (Optional)

If using PostgreSQL:
```bash
npm run db:push
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and data
│   │   └── App.tsx         # Main app component
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage interface
│   └── vite.ts             # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database and API schemas
├── attached_assets/        # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Building for Production

```bash
npm run build
```

This creates:
- `dist/public/` - Frontend build
- `dist/index.js` - Backend build

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - Add environment variables in Vercel dashboard

### Option 2: Railway

1. **Push to GitHub** (same as above)
2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Connect GitHub and select your repo
   - Railway will auto-deploy using the build script

### Option 3: Netlify

1. **Push to GitHub** (same as above)
2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist/public`

## Environment Variables for Production

Set these in your hosting platform:

```env
NODE_ENV=production
DATABASE_URL=your_production_postgresql_url
SESSION_SECRET=your_secure_session_secret
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema

## Features Included

### Destinations
- New York, London, Tokyo, Singapore, Dubai, Berlin
- Amsterdam, Barcelona, Bali
- **Indian Destinations**: Mumbai, New Delhi, Bangalore, Goa, Kerala, Rajasthan

### Trip Types
- Corporate events and business meetings
- Friend group adventures
- Mixed group travels

### AI-Powered Features
- Intelligent itinerary generation
- Budget optimization
- Multi-city planning
- Group preference matching

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details