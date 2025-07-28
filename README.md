
# Resumind

Resumind is a smart resume analysis web application that provides AI-powered feedback for job seekers. It evaluates uploaded resumes based on multiple factors like tone, content, structure, and skills, and presents an overall score along with detailed improvement tips.

## 🌟 Features

- ✨ Resume upload with drag-and-drop support
- 📊 ATS score visualization
- 📈 Overall and category-based scoring
- 🧠 AI feedback and improvement suggestions
- 🔐 Authentication and personalized dashboard
- 🖼 Resume preview with image and download link

## 🛠 Tech Stack

- **Frontend:** React (with TypeScript), Tailwind CSS
- **Backend/AI services:** Puter.js for auth, file system, and AI services
- **Routing:** React Router
- **PDF Rendering:** pdfjs-dist for converting resume PDF to image
- **State Management:** Zustand

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (or npm/yarn)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Production

```bash
pnpm build
pnpm preview
```

## 📂 Project Structure

```
app/
  components/       # UI components (ATS Score, Summary, Accordion, etc.)
  routes/           # Route-based pages (upload, resume, home)
  lib/              # Utility functions and Puter API integration
  app.css           # Global Tailwind styles and theme customizations
public/
  icons/            # Icons for feedback visuals
  images/           # Background and asset images
```

## 📦 Deployment

The app can be containerized using the included `Dockerfile`. It uses Vite for build tooling and Puter APIs for resume feedback logic.

## 🙏 Acknowledgements

- [Puter](https://puter.com/) for cloud-based auth, file system, and AI services.
- [pdfjs-dist](https://github.com/mozilla/pdf.js/) for PDF to image rendering.
- Tailwind CSS and React ecosystem.

---

Made with ❤️ for smarter resume reviews.
