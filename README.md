# 🖥️ Ethan Qiu's Terminal Portfolio

A modern, interactive terminal-style portfolio built with React and TypeScript. Experience my professional journey through a unique command-line interface that combines the nostalgia of terminal computing with modern web interactivity.

**🌟 Currently live at [ethanqiu.ca](https://ethanqiu.ca)**

![Terminal Portfolio](https://img.shields.io/badge/Portfolio-Terminal%20Style-00ff00?style=for-the-badge&logo=terminal)
![React](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=for-the-badge&logo=vite)

## 🚀 Live Demo

Visit the live portfolio: **[ethanqiu.ca](https://ethanqiu.ca)**

> 🎯 **Tip**: Look for the "EQ" terminal favicon in your browser tab!

## ✨ Features

- **🖥️ Authentic Terminal Experience**: Real command-line interface with command history and arrow key navigation
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Interactive Commands**: Navigate through different sections using terminal commands
- **🎨 Modern UI**: Clean, terminal-inspired design with smooth animations and scroll-to-top
- **📄 Resume Integration**: View and download resume directly from the terminal
- **🔗 Quick Navigation**: Navigation bar for non-terminal users with command shortcuts
- **🌐 Social Links**: Direct links to GitHub, LinkedIn, and email
- **🎯 Auto-Clear Terminal**: Each command clears previous output for focused viewing
- **⌨️ Command History**: Use arrow keys to navigate through previous commands

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Styled Components, Framer Motion
- **Build Tool**: Vite
- **Icons**: React Icons
- **Architecture**: Modular component structure
- **Deployment**: Custom domain hosting

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
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

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
│   ├── portfolio.ts                    # All portfolio data
│   └── EthanQiu_Resume_Linkedin.pdf    # Resume file
├── styles/
│   └── GlobalStyles.ts          # Global styles
└── App.tsx                      # Main app component
```

## 🚀 Deployment

This portfolio is currently hosted at **[ethanqiu.ca](https://ethanqiu.ca)**

### Deployment Options

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click
4. Configure custom domain if needed

#### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain

#### GitHub Pages
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

### Build Commands
```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🎨 Key Features in Action

### Terminal Commands
- Type `help` to see all available commands
- Use arrow keys to navigate command history
- Each command auto-clears and scrolls to top
- Interactive cards with buttons and links

### Navigation Options
- **Terminal purists**: Type commands directly
- **Quick access**: Use navigation bar buttons
- **Mobile friendly**: Touch-optimized interface

## 🏗️ Architecture Highlights

### Modular Design
- **Separate command components** for easy maintenance
- **Centralized data** in `portfolio.ts` for quick updates
- **Shared styled components** for consistent theming
- **Clean separation** of concerns

### Performance Features
- **Auto-clearing terminal** reduces DOM complexity
- **Smooth scroll animations** for polished UX
- **Responsive design** adapts to all screen sizes
- **Fast loading** with Vite build optimization

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
