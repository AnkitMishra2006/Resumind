# Resumind 🎯

<div align="center">
  
  **Smart AI-powered resume analysis for your dream job**
  
  [![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.4-38B2AC.svg)](https://tailwindcss.com/)
  [![React Router](https://img.shields.io/badge/React_Router-7.7.1-CA4245.svg)](https://reactrouter.com/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.3-646CFF.svg)](https://vitejs.dev/)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Components](#-components)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

## 🎯 Overview

Resumind is a cutting-edge web application that revolutionizes the way job seekers optimize their resumes. Powered by advanced AI technology, it provides comprehensive analysis across multiple dimensions including ATS compatibility, content quality, structure optimization, and skills assessment.

### Key Benefits

- **🚀 Instant Analysis**: Get immediate feedback on your resume
- **📊 ATS Optimization**: Ensure your resume passes Applicant Tracking Systems
- **🎯 Targeted Feedback**: Receive specific improvement suggestions
- **📈 Score Tracking**: Monitor your progress with detailed scoring
- **🔒 Secure & Private**: Your data is protected with enterprise-grade security

## ✨ Features

### Core Functionality

- **📤 Drag & Drop Upload**: Intuitive PDF resume upload with visual feedback
- **🤖 AI-Powered Analysis**: Advanced AI evaluates your resume across multiple criteria
- **📊 ATS Score Visualization**: Beautiful gauge displays showing your ATS compatibility
- **📈 Multi-Category Scoring**: Detailed breakdown of Tone & Style, Content, Structure, and Skills
- **💡 Actionable Insights**: Specific, implementable improvement suggestions
- **🖼️ Resume Preview**: High-quality PDF to image conversion for easy viewing
- **📱 Responsive Design**: Seamless experience across all devices

### User Experience

- **🔐 Secure Authentication**: Integrated with Puter.js authentication system
- **📊 Personal Dashboard**: Track all your resume submissions and scores
- **🎨 Modern UI/UX**: Clean, intuitive interface with smooth animations
- **⚡ Fast Performance**: Optimized for speed with Vite and modern React
- **🌙 Dark Mode Ready**: Prepared for future dark theme implementation

### Analysis Categories

| Category         | Description                             | Key Metrics                                        |
| ---------------- | --------------------------------------- | -------------------------------------------------- |
| **ATS Score**    | Applicant Tracking System compatibility | Keyword optimization, formatting, structure        |
| **Tone & Style** | Professional writing and presentation   | Language clarity, consistency, professionalism     |
| **Content**      | Relevance and quality of information    | Achievement focus, quantifiable results, relevance |
| **Structure**    | Organization and layout effectiveness   | Section organization, readability, hierarchy       |
| **Skills**       | Technical and soft skills presentation  | Skill relevance, presentation, market demand       |

## 🛠 Tech Stack

### Frontend

- **⚛️ React 19.1.0** - Modern React with concurrent features
- **📘 TypeScript 5.8.3** - Type-safe development
- **🎨 Tailwind CSS 4.1.4** - Utility-first CSS framework
- **🧭 React Router 7.7.1** - File-based routing system
- **🎭 React Dropzone** - Drag and drop file uploads
- **📊 Custom SVG Components** - Beautiful data visualizations

### Build & Development

- **⚡ Vite 6.3.3** - Lightning-fast build tool
- **🔧 TypeScript Config** - Strict type checking
- **🎯 ESLint & Prettier** - Code quality and formatting
- **📦 pnpm** - Fast, disk space efficient package manager

### Backend & Services

- **☁️ Puter.js** - Cloud-based backend services
  - Authentication & user management
  - File system operations
  - AI/ML processing
  - Key-value storage
- **📄 PDF.js** - Client-side PDF processing
- **🖼️ Canvas API** - PDF to image conversion

### State Management

- **🐻 Zustand** - Lightweight state management
- **🔄 React Hooks** - Modern state handling patterns

## 📸 Screenshots

<div align="center">
  <img src="public/readme/hero.webp" alt="Homepage" width="400"/>
</div>

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **pnpm** (recommended) or npm/yarn
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AnkitMishra2006/ai-resume-analyzer.git
   cd ai-resume-analyzer
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Script           | Description                              |
| ---------------- | ---------------------------------------- |
| `pnpm dev`       | Start development server with hot reload |
| `pnpm build`     | Build production-ready application       |
| `pnpm start`     | Serve production build                   |
| `pnpm typecheck` | Run TypeScript type checking             |
| `pnpm lint`      | Run ESLint for code quality              |
| `pnpm preview`   | Preview production build locally         |

## 📂 Project Structure

```
resumind/
├── 📁 app/                          # Main application code
│   ├── 📁 components/               # Reusable UI components
│   │   ├── 📄 ATS.tsx              # ATS score display component
│   │   ├── 📄 FileUploader.tsx     # Drag & drop file upload
│   │   ├── 📄 ScoreGauge.tsx       # Animated score visualization
│   │   ├── 📄 Summary.tsx          # Resume score summary
│   │   ├── 📄 Details.tsx          # Detailed feedback display
│   │   ├── 📄 Navbar.tsx           # Navigation component
│   │   ├── 📄 ResumeCard.tsx       # Resume list item
│   │   ├── 📄 ScoreBadge.tsx       # Score indicator badge
│   │   ├── 📄 ScoreCircle.tsx      # Circular progress indicator
│   │   └── 📄 Accordion.tsx        # Collapsible content sections
│   ├── 📁 lib/                     # Utility functions and APIs
│   │   ├── 📄 pdf2img.ts           # PDF to image conversion
│   │   ├── 📄 puter.ts             # Puter.js API integration
│   │   └── 📄 utils.ts             # Common utility functions
│   ├── 📁 routes/                  # Page components (file-based routing)
│   │   ├── 📄 home.tsx             # Dashboard/home page
│   │   ├── 📄 auth.tsx             # Authentication page
│   │   ├── 📄 upload.tsx           # Resume upload page
│   │   ├── 📄 resume.tsx           # Resume analysis results
│   │   └── 📄 wipe.tsx             # Data management page
│   ├── 📄 app.css                  # Global styles and Tailwind config
│   ├── 📄 root.tsx                 # Root layout component
│   └── 📄 routes.ts                # Route configuration
├── 📁 public/                      # Static assets
│   ├── 📁 icons/                   # SVG icons for UI
│   ├── 📁 images/                  # Background images and assets
│   ├── 📁 readme/                  # README images
│   ├── 📄 favicon.ico              # Site favicon
│   └── 📄 pdf.worker.min.mjs       # PDF.js worker
├── 📁 types/                       # TypeScript type definitions
│   ├── 📄 index.d.ts               # Global type definitions
│   └── 📄 puter.d.ts               # Puter.js type definitions
├── 📁 constants/                   # Application constants
│   └── 📄 index.ts                 # Global constants
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 vite.config.ts               # Vite build configuration
├── 📄 react-router.config.ts       # React Router configuration
├── 📄 Dockerfile                   # Docker container configuration
└── 📄 README.md                    # Project documentation
```

## 🔌 API Integration

### Puter.js Services

The application integrates with Puter.js for comprehensive backend functionality:

#### Authentication

```typescript
// Sign in/out functionality
await puter.auth.signIn();
await puter.auth.signOut();
const user = await puter.auth.getUser();
```

#### File System Operations

```typescript
// Upload files
const uploadedFile = await puter.fs.upload([file]);

// Read files
const fileData = await puter.fs.read(path);

// Delete files
await puter.fs.delete(path);
```

#### AI Analysis

```typescript
// Analyze resume with AI
const feedback = await puter.ai.chat(prompt, imageURL);

// Convert image to text
const text = await puter.ai.img2txt(image);
```

#### Key-Value Storage

```typescript
// Store resume data
await puter.kv.set(`resume:${id}`, JSON.stringify(data));

// Retrieve resume data
const resume = await puter.kv.get(`resume:${id}`);

// List all resumes
const resumes = await puter.kv.list("resume:*", true);
```

## 🧩 Components

### Core Components

#### ScoreGauge

Animated SVG gauge displaying overall resume score with gradient styling.

#### ATS Component

Comprehensive ATS analysis display with:

- Dynamic scoring visualization
- Color-coded feedback (red/yellow/green)
- Actionable improvement suggestions
- Professional formatting tips

#### FileUploader

Drag-and-drop interface featuring:

- PDF validation (max 20MB)
- Visual upload feedback
- File preview with metadata
- Error handling and user guidance

#### Summary

Dashboard overview showing:

- Overall score with animated gauge
- Category breakdowns (Tone, Content, Structure, Skills)
- Color-coded performance indicators
- Progress tracking

### Utility Functions

#### PDF Processing (`pdf2img.ts`)

```typescript
export async function convertPdfToImage(
  file: File
): Promise<PdfConversionResult>;
```

- High-quality PDF to PNG conversion
- Canvas-based rendering with 4x scaling
- Optimized for performance and quality

#### Formatting Utilities (`utils.ts`)

- File size formatting
- Date/time utilities
- String manipulation helpers
- Validation functions

## 🚀 Deployment

### Docker Deployment

The application includes a multi-stage Dockerfile for efficient containerization:

```bash
# Build the Docker image
docker build -t resumind .

# Run the container
docker run -p 3000:3000 resumind
```

### Production Build

```bash
# Create optimized production build
pnpm build

# Serve production files
pnpm start
```

### Environment Configuration

Create a `.env.local` file with the following variables:

```env
# Puter.js Configuration
VITE_PUTER_API_URL=https://api.puter.com
VITE_PUTER_APP_ID=your_app_id

# Application Settings
VITE_APP_NAME=Resumind
VITE_APP_VERSION=1.0.0
VITE_MAX_FILE_SIZE=20971520  # 20MB in bytes

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

## 🌟 Environment Variables

| Variable                | Description                      | Default  | Required |
| ----------------------- | -------------------------------- | -------- | -------- |
| `VITE_PUTER_API_URL`    | Puter.js API endpoint            | -        | ✅       |
| `VITE_PUTER_APP_ID`     | Your Puter application ID        | -        | ✅       |
| `VITE_MAX_FILE_SIZE`    | Maximum upload file size (bytes) | 20971520 | ❌       |
| `VITE_ENABLE_ANALYTICS` | Enable analytics tracking        | false    | ❌       |
| `VITE_APP_VERSION`      | Application version              | 1.0.0    | ❌       |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing component patterns
- Ensure responsive design compatibility
- Add proper error handling
- Include JSDoc comments for functions
- Test on multiple browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

### Technologies & Services

- **[Puter](https://puter.com/)** - Cloud-based backend services and AI processing
- **[PDF.js](https://github.com/mozilla/pdf.js/)** - Client-side PDF rendering and manipulation
- **[React](https://reactjs.org/)** - Modern UI library with excellent developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid development
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool

### Design & Assets

- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons
- **[Unsplash](https://unsplash.com/)** - High-quality images for UI
- **[Google Fonts](https://fonts.google.com/)** - Mona Sans and Inter typography

### Community

- React and TypeScript communities for excellent documentation
- Open source contributors who make projects like this possible
- Beta testers and early users for valuable feedback

---

<div align="center">
  <b>Made with ❤️ for smarter resume reviews</b>
  
  <br><br>
  
  [⭐ Star this repo](https://github.com/AnkitMishra2006/ai-resume-analyzer) • [🐛 Report Bug](https://github.com/AnkitMishra2006/ai-resume-analyzer/issues) • [💡 Request Feature](https://github.com/AnkitMishra2006/ai-resume-analyzer/issues)
</div>
