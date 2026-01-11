# Agnis Drive 🚀

**Agnis Drive** is a premium, high-performance storage management and file-sharing platform designed for speed, security, and a stunning user experience. Built with the cutting-edge Next.js 15 and Appwrite, it offers a seamless way to organize, share, and manage your digital assets.

## ✨ Features

- 🔐 **Secure Authentication**: Robust signup, login, and session management powered by Appwrite.
- 📂 **Seamless File Management**: Upload, rename, delete, and organize files across various categories (Documents, Images, Media, Others).
- 🤝 **Effortless Sharing**: Share files with colleagues or friends with just a few clicks.
- 📊 **Dynamic Dashboard**: Get instant insights into your storage usage, recent uploads, and file type distributions.
- 🔍 **Global Search & Sorting**: Find exactly what you need with powerful search filters and flexible sorting options.
- 🎨 **Premium UI/UX**: A modern, responsive design featuring a "3D Glass-Stack" aesthetic, custom cursors, and fluid micro-animations.
- ⚡ **Optimized Performance**: Built with Next.js 15 (Turbopack) for lightning-fast development and production performance.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Appwrite](https://appwrite.io/) (Auth, Database, Storage)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## 🚀 Quick Start

### 📋 Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/swarajladke/Agnis-Drive.git
   cd agnis-drive
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Appwrite credentials:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
   NEXT_PUBLIC_APPWRITE_PROJECT=""
   NEXT_PUBLIC_APPWRITE_DATABASE=""
   NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
   NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
   NEXT_PUBLIC_APPWRITE_BUCKET=""
   NEXT_APPWRITE_KEY=""
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 License

This project is private and for internal use.

---

<p align="center">Made with ❤️ by <b>Swaraj Ladke</b></p>
