# 🖥️ Ethan Qiu's Terminal Portfolio

A modern, interactive terminal-style portfolio built with React and TypeScript. Experience my professional journey through a unique command-line interface that combines the nostalgia of terminal computing with modern web interactivity.

![Terminal Portfolio](https://img.shields.io/badge/Portfolio-Terminal%20Style-00ff00?style=for-the-badge&logo=terminal)
![React](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=for-the-badge&logo=vite)

## 🚀 Live Demo

Visit the live portfolio: [ethanqiu.dev](https://your-portfolio-url.com)

> 🎯 **Tip**: Look for the "EQ" terminal favicon in your browser tab!

## ✨ Features

- **🖥️ Authentic Terminal Experience**: Real command-line interface with command history and auto-completion
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Interactive Commands**: Navigate through different sections using terminal commands
- **🎨 Modern UI**: Clean, terminal-inspired design with smooth animations
- **📄 Resume Integration**: Download resume directly from the terminal
- **🔗 Quick Navigation**: Navigation bar for non-terminal users
- **🌐 Social Links**: Direct links to GitHub, LinkedIn, and contact information

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Styled Components, Framer Motion
- **Build Tool**: Vite
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📋 Available Commands

```bash
help        # Show all available commands
about       # Learn about me
projects    # View my projects
skills      # See my technical skills
experience  # View my work experience
contact     # Get my contact information
resume      # Download my resume
blog        # Read my blog posts
clear       # Clear the terminal
date        # Show current date
pwd         # Show current directory
ls          # List directory contents
```

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/qiuethan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Customization Guide

### 📝 Update Your Information
Edit `src/data/portfolio.ts` to customize:
- Personal information
- Projects and descriptions
- Skills and technologies
- Work experience
- Contact details
- Blog posts

### 🎨 Modify Styling
- **Colors & Themes**: `src/components/shared/StyledComponents.tsx`
- **Global Styles**: `src/styles/GlobalStyles.ts`
- **Individual Sections**: `src/components/commands/`

### 📄 Replace Resume
1. Add your resume PDF to `src/data/`
2. Update the filename in `src/components/commands/ResumeCommand.tsx`

### 🔗 Update Social Links
Edit the GitHub and LinkedIn URLs in:
- `src/data/portfolio.ts` (contact section)
- `src/components/NavBar.tsx` (navigation buttons)

## 📁 Project Structure

```
src/
├── components/
│   ├── commands/           # Individual command components
│   │   ├── AboutCommand.tsx
│   │   ├── ProjectsCommand.tsx
│   │   ├── SkillsCommand.tsx
│   │   ├── ExperienceCommand.tsx
│   │   ├── ContactCommand.tsx
│   │   ├── ResumeCommand.tsx
│   │   └── BlogCommand.tsx
│   ├── shared/
│   │   └── StyledComponents.tsx  # Reusable styled components
│   ├── TerminalInterface.tsx     # Main terminal logic
│   └── NavBar.tsx               # Navigation bar
├── data/
│   ├── portfolio.ts             # All portfolio data
│   └── EthanQiu_Resume.pdf      # Resume file
├── styles/
│   └── GlobalStyles.ts          # Global styles
└── App.tsx                      # Main app component
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🎨 Screenshots

### Desktop View
![Desktop Terminal](screenshot-desktop.png)

### Mobile View
![Mobile Terminal](screenshot-mobile.png)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you create something cool, I'd love to see it.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ethanqiu@gmail.com
- **LinkedIn**: [linkedin.com/in/qiu-ethan](https://linkedin.com/in/qiu-ethan)
- **GitHub**: [github.com/qiuethan](https://github.com/qiuethan)

---

⭐ **Star this repo if you found it helpful!**

Built with ❤️ by [Ethan Qiu](https://github.com/qiuethan)
