# Dr. K. Akila - Academic Portfolio

A modern, high-performance academic portfolio website showcasing the professional profile, research contributions, and achievements of **Dr. K. Akila**.

## Teacher Profile

**Dr. K. Akila, M.E., Ph.D.** is a distinguished academic and researcher with **19.7 years** of experience. She currently serves as an **Assistant Professor (Selection Grade)** in the **Department of Computer Science and Engineering** at the **SRM Institute of Science and Technology, Vadapalani**.

### Key Highlights
- **Qualifications:** M.E., Ph.D. in Computer Science and Engineering.
- **Expertise:** Image Processing, Human Action Recognition, AI, ML, and Computer Vision.
- **Impact:** **76** peer-reviewed publications and **5** patents.
- **Teaching:** Nearly two decades of excellence in computer science education.

## ✨ Features

- **Real-Time Scroll Progress**: A visual progress bar at the top and a "lamp" effect in the navbar that tracks your reading progress in real-time.
- **Single-Page Navigation**: Smooth, clean scrolling between sections without annoying URL hashes (`/#section`).
- **Supabase Integration**: Fully functional contact form with backend data collection and security policies.
- **Modern UI/UX**: Premium aesthetics using glassmorphism, fluid animations (Framer Motion), and responsive layouts.
- **Responsive Navigation**: Adaptive PC "Tubelight" dock and a modern interactive mobile menu.

## 🛠️ Technology Stack

- **Core**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend**: [Supabase](https://supabase.com/)
- **Components**: [Lucide React](https://lucide.dev/) + [Shadcn/UI](https://ui.shadcn.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- A Supabase project

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory based on [.env.example](.env.example):
   ```env
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```
4. Setup the database:
   - Go to your Supabase SQL Editor.
   - Run the contents of [supabase_setup.sql](supabase_setup.sql) to create the table and RLS policies.
5. Run the development server:
   ```bash
   npm run dev
   ```

## 📄 License

Copyright © 2024 Dr. K. Akila. All rights reserved.
