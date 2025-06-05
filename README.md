# Nitish's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS that showcases my projects, skills, and professional experience.

## Features

- **GitHub Integration**: Dynamically fetches and displays my GitHub repositories
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **TypeScript**: Type-safe codebase for better development experience
- **Modern UI**: Clean and professional interface with Tailwind CSS
- **Performance Optimized**: Fast loading times and optimized images
- **Project Showcase**: Detailed view of my development projects
- **Developer Testimonials**: Feedback from colleagues and clients

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Octokit](https://github.com/octokit/octokit.js) - GitHub API client

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js application pages
- `components/` - Reusable UI components
- `lib/` - Utility functions and API clients
- `public/` - Static assets
- `types/` - TypeScript type definitions

# 🚀 Nitish's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS that showcases my projects, skills, and professional experience. This portfolio serves as a comprehensive showcase of my work, skills, and achievements as a full-stack developer.

![Portfolio Preview](public/portfolio-preview.png)

## ✨ Features

- **GitHub Integration**: Dynamically fetches and displays my GitHub repositories with real-time data
- **Responsive Design**: Fully responsive UI that works seamlessly on all device sizes
- **Type-Safe**: Built with TypeScript for enhanced code quality and developer experience
- **Modern UI/UX**: Clean, professional interface powered by Tailwind CSS
- **Performance Optimized**: Lightning-fast loading with optimized assets and code splitting
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Dark/Light Mode**: Built-in theme support for better user experience
- **Project Showcase**: Detailed case studies of my development projects
- **Developer Testimonials**: Authentic feedback from colleagues and clients
- **Contact Form**: Easy way to get in touch directly from the portfolio

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom theming
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode
- **Version Control**: Git with Conventional Commits

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your GitHub API token:
   ```
   GITHUB_TOKEN=your_github_token_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in your browser**
   Visit [http://localhost:3000](http://localhost:3000) to view your portfolio locally.

## 🏗️ Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── projects/           # Projects listing and detail pages
│   ├── contact/            # Contact page
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
│   ├── ui/                 # Shadcn/ui components
│   ├── sections/           # Page sections
│   └── shared/             # Shared components
├── lib/                    # Utility functions and API clients
│   ├── github/             # GitHub API client
│   └── utils/              # Helper functions
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── fonts/              # Custom fonts
├── styles/                 # Global styles
└── types/                  # TypeScript type definitions
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import the repository on [Vercel](https://vercel.com/import)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Netlify
1. Push your code to a GitHub repository
2. Import the repository on [Netlify](https://app.netlify.com/start)
3. Set the build command to `npm run build`
4. Set the publish directory to `.next`
5. Add your environment variables
6. Deploy the site

## 📝 Customization

### Update Your Information

1. **Personal Info**: Update `app/data/site.ts` with your personal information
2. **Projects**: Add or modify projects in `app/data/projects.ts`
3. **Skills**: Update your skills in `app/data/skills.ts`
4. **Experience**: Update your work experience in `app/data/experience.ts`

### Styling

- **Colors**: Edit the Tailwind theme in `tailwind.config.js`
- **Fonts**: Update fonts in `app/layout.tsx`
- **Animations**: Adjust animations in components using Framer Motion

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Shadcn/ui](https://ui.shadcn.com/)

## 💼 Professional Experience

### Bizloan Pvt Ltd | Full Stack Developer
**Location:** DLF, 132, Qutab Plaza Road, DLF Phase 1, Sector 26A, Gurugram, Haryana 122002  
**Duration:** [Add your employment duration here]

#### Technical Expertise
- Full-stack web development with expertise in both frontend and backend technologies
- Database design, optimization, and management
- Experience with modern web frameworks and development tools
- Responsive web design and cross-platform compatibility

#### Key Responsibilities
- Developing and maintaining web applications for financial services
- Collaborating with cross-functional teams to deliver scalable solutions
- Implementing secure coding practices for financial data handling
- Optimizing application performance and user experience

#### Technologies & Projects
- **Technologies:** React, Node.js, Python, MySQL, MongoDB
- **Project Types:** E-commerce platforms, fintech applications, enterprise web solutions

## 🤝 Contributing

Contributions are welcome! If you find any issues or want to enhance the portfolio, feel free to submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- GitHub: [@nitishsghh](https://github.com/nitishsghh)
- LinkedIn: [Nitish Kumar](https://www.linkedin.com/in/your-linkedin/)
- Email: your.email@example.com
