# 🎨 MarketVue Platform
### [Live App](https://marketvue-platform.vercel.app/)

A sophisticated, production-ready modern fintech investment platform. Features include an elegant authentication system, dynamic real-time financial data integration, AI-powered insights, and a professional UX. Built with Next.js, TypeScript, Tailwind CSS, MongoDB, and Better Auth.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)

## ✨ Key Features

### 🏦 Investment Dashboard & Financial Data
- **Real-time Stock Data** - Live financial metrics via Finnhub API integration
- **AI-Powered Insights** - Integrated Gemini AI for intelligent market analysis
- **Portfolio Tracking** - Seamless management of investment goals and risk tolerance
- **Automated Notifications** - Triggered email alerts using Inngest & Nodemailer

### 🔐 Sophisticated Authentication
- **Multi-step Onboarding** - Progressive flow (Personal Info → Location → Preferences)
- **Robust Security** - Managed via Better Auth with encrypted sessions
- **Real-time Validation** - Instant form feedback using React Hook Form & Zod
- **Tailored User Profiles** - Comprehensive data collection synced directly to MongoDB

### 🎨 Design & UX Excellence
- **Glassmorphism & Gradients** - Modern aesthetics with frosted glass and deep color schemes
- **Interactive Micro-animations** - Snappy transitions for a responsive feel
- **Responsive Layout** - Polished split-screen design for desktop, gracefully collapsing for mobile
- **Accessibility Ready** - WCAG compliant, complete with proper ARIA attributes and keyboard navigation

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5.0 |
| **Database** | MongoDB & Mongoose |
| **Authentication** | Better Auth |
| **Styling** | Tailwind CSS v4 & Shadcn UI |
| **Forms & Validation** | React Hook Form & Zod |
| **AI Integration** | Google Gemini API |
| **Background Jobs** | Inngest |
| **Email Service** | Nodemailer |
| **Icons** | Lucide React |

## 📦 Local Development

### Prerequisites
- Node.js >= 18.17
- MongoDB Database (Local or Atlas)
- Git

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/Vineetsh7/marketvue-platform.git
cd marketvue-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env` file in the root directory based on the following template:

```env
NODE_ENV="development"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Database Configuration
MONGODB_URI="your_mongodb_connection_string"

# Authentication
BETTER_AUTH_SECRET="your_generated_secret_key"
BETTER_AUTH_URL="http://localhost:3000"

# APIs
GEMINI_API_KEY="your_gemini_api_key"
NEXT_PUBLIC_FINNHUB_API_KEY="your_finnhub_api_key"

# Email Configuration
NODEMAILER_EMAIL="your_email@gmail.com"
NODEMAILER_PASSWORD="your_app_password"
```
*(Tip: You can generate a random string for `BETTER_AUTH_SECRET` using `openssl rand -base64 32`)*

4. **Run the development server**
```bash
npm run dev
```

5. **Access the application**
Open [http://localhost:3000](http://localhost:3000) in your browser.


## 🏗️ Project Architecture

```text
├── app/                  # Next.js App Router (pages, api, layouts)
│   ├── (auth)/           # Authentication routes (sign-in, sign-up)
│   └── (root)/           # Main dashboard and platform views
├── components/           # Reusable UI & Shadcn components
├── database/             # MongoDB connection and Mongoose models
├── lib/                  # Utilities and shared logic
├── types/                # TypeScript type definitions
└── middleware/           # Edge middleware for route protection
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'feat: Add AmazingFeature'`)
4. **Push** to your branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 License
This project is licensed under the **MIT License**.

## 📞 Support & Contact

- **Author**: Vineet Sharma
- **GitHub**: [@Vineetsh7](https://github.com/Vineetsh7)
- **LinkedIn**: [Vineet Sharma](https://www.linkedin.com/in/vineet-sharma-1687301a7/)
- **Bug Reports**: [GitHub Issues](https://github.com/Vineetsh7/marketvue-platform/issues)

---

<div align="center">
  <b>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</b>
</div>
