﻿# Nitish's Portfolio Website.

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcase your projects, skills, and professional experience with a beautiful and interactive design.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices and screen sizes
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **TypeScript**: Type-safe development with TypeScript
- **Contact Form**: Integrated Formspree contact form for easy communication
- **Project Showcase**: Dedicated projects page with detailed project information
- **SEO Optimized**: Built-in SEO features and meta tags
- **Custom Favicon**: Professional branding with custom "N" favicon

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: Formspree
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
NitishSingh/
├── public/                          # Static assets
│   ├── images/                      # Image assets
│   │   ├── default-avatar.jpg
│   │   ├── fallback/               # Fallback project images
│   │   ├── projects/               # Project-specific images
│   │   ├── slider/                 # Hero slider images
│   │   └── testimonials/           # Testimonial images
│   ├── nitish-favicon.svg          # Custom favicon
│   └── robots.txt
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── about/                  # About page
│   │   │   └── page.tsx
│   │   ├── contact/                # Contact page
│   │   │   └── page.tsx
│   │   ├── projects/               # Projects pages
│   │   │   ├── [name]/             # Dynamic project pages
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx            # Projects listing page
│   │   ├── favicon.ico
│   │   ├── globals.css             # Global styles
│   │   ├── icon.tsx                # Dynamic favicon
│   │   ├── apple-icon.tsx          # Apple touch icon
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   ├── components/                 # Reusable components
│   │   ├── ContactForm.tsx         # Contact form with Formspree
│   │   ├── Footer.tsx              # Site footer
│   │   ├── Hero.tsx                # Hero section
│   │   ├── ImageSlider.tsx         # Image carousel
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── ProjectCard.tsx         # Project card component
│   │   ├── ProjectsSection.tsx     # Projects section
│   │   └── Testimonials.tsx        # Testimonials section
│   ├── lib/                        # Utility libraries
│   │   └── github.ts               # GitHub API utilities
│   └── types/                      # TypeScript type definitions
│       └── index.ts
├── .eslintrc.json                  # ESLint configuration
├── next.config.js                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── vercel.json                     # Vercel deployment configuration
```

## 🎨 Pages & Components

### Pages
- **Home** (`/`): Landing page with hero section, projects preview, and testimonials
- **About** (`/about`): Personal information and skills
- **Projects** (`/projects`): Portfolio of projects with filtering
- **Project Details** (`/projects/[name]`): Individual project pages
- **Contact** (`/contact`): Contact form and information

### Key Components
- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Animated hero section with call-to-action
- **ProjectCard**: Reusable project display component
- **ContactForm**: Formspree-integrated contact form
- **Footer**: Site footer with social links and credits

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NitishSingh.git
   cd NitishSingh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   FORMSPREEE_ID=your_formspree_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Formspree Setup
1. Go to [Formspree](https://formspree.io) and create an account
2. Create a new form
3. Copy the form ID and replace `xqabwwpn` in `ContactForm.tsx`

### Customization
- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Content**: Update text content in respective component files
- **Images**: Replace images in `public/images/` directory
- **Projects**: Add/remove projects in the projects data

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect your GitHub repository
- **AWS/GCP**: Use Docker or static export

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **Static Generation**: Pre-rendered pages for faster loading
- **Lazy Loading**: Images and components load on demand

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Developer

**Developed and Designed by Nitish**

- GitHub: [@nitishsghh](https://github.com/nitishsghh)
- Portfolio: [Your Portfolio URL]

---

⭐ Star this repository if you found it helpful!
