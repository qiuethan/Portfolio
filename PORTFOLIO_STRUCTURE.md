# Portfolio Structure Guide

This document explains the modular structure of your terminal portfolio and where to edit different parts.

## 📁 File Structure

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
│   └── portfolio.ts             # All portfolio data
└── styles/
    └── GlobalStyles.ts          # Global styles
```

## 🎯 Where to Edit What

### 📝 **Personal Information & Content**
**File:** `src/data/portfolio.ts`

This is your main data file. Edit here to update:
- Personal info (name, role, location, bio)
- Projects (add/remove/edit projects)
- Skills (programming languages, frameworks, tools)
- Work experience
- Contact information
- Blog posts

### 🎨 **Visual Components**

#### Individual Command Sections
- **About:** `src/components/commands/AboutCommand.tsx`
- **Projects:** `src/components/commands/ProjectsCommand.tsx`
- **Skills:** `src/components/commands/SkillsCommand.tsx`
- **Experience:** `src/components/commands/ExperienceCommand.tsx`
- **Contact:** `src/components/commands/ContactCommand.tsx`
- **Resume:** `src/components/commands/ResumeCommand.tsx`
- **Blog:** `src/components/commands/BlogCommand.tsx`

#### Shared Styling
**File:** `src/components/shared/StyledComponents.tsx`
- Button styles
- Card layouts
- Color schemes
- Hover effects

### ⚙️ **Terminal Functionality**
**File:** `src/components/TerminalInterface.tsx`
- Add new commands
- Modify command behavior
- Change terminal appearance
- Update help text

### 🧭 **Navigation**
**File:** `src/components/NavBar.tsx`
- Add/remove navigation buttons
- Update GitHub/LinkedIn links
- Modify navbar styling

## 🚀 Quick Edit Guide

### Adding a New Project
1. Open `src/data/portfolio.ts`
2. Add to the `projects` array:
```typescript
{
  name: "🎯 Your Project Name",
  description: "Brief description",
  tech: ["React", "TypeScript", "etc"],
  github: "https://github.com/username/repo",
  live: "https://your-live-site.com", // or null
  details: "Detailed description of the project"
}
```

### Updating Your Bio
1. Open `src/data/portfolio.ts`
2. Edit the `about.bio` field

### Adding a New Skill Category
1. Open `src/data/portfolio.ts`
2. Add to the `skills` object:
```typescript
skills: {
  // existing categories...
  newCategory: ["Skill1", "Skill2", "Skill3"]
}
```
3. Open `src/components/commands/SkillsCommand.tsx`
4. Add the new category to the `skillCategories` array

### Changing Colors
1. Open `src/components/shared/StyledComponents.tsx`
2. Update color values:
   - `#00ff00` - Primary green
   - `#00ccff` - Secondary cyan
   - `#0a0a0a` - Background black
   - `#1a1a1a` - Card background

### Updating Your Resume
1. Replace `src/data/EthanQiu_Resume_Linkedin.pdf` with your resume
2. Update the import path in `src/components/commands/ResumeCommand.tsx` if needed
3. The resume will be available via the `resume` command

### Adding a New Command
1. Create a new component in `src/components/commands/`
2. Add it to `src/components/TerminalInterface.tsx` in the `availableCommands` object
3. Update the help text
4. Add it to the NavBar commands array if desired

## 🎨 Customization Tips

### Making it Your Own
- Update colors in `StyledComponents.tsx`
- Change the terminal title in `TerminalInterface.tsx`
- Modify the welcome message
- Add your own emoji style
- Update GitHub/LinkedIn links in `NavBar.tsx`

### Performance
- All data is loaded from `portfolio.ts` - keep it organized
- Components are lazy-loaded for better performance
- Styled components are reused across sections

## 🔧 Development Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop: Full terminal experience
- Tablet: Optimized layouts
- Mobile: Touch-friendly navigation

All components automatically adapt to screen size using CSS media queries in the styled components. 