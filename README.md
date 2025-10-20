# Now Fitness - Responsive Fitness Website

A professional multi-page fitness website showcasing responsive design principles. Built as part of University of Greenwich Web Design coursework, demonstrating proficiency in HTML5, CSS3, and JavaScript fundamentals.

![Homepage Hero Section](screenshots/home.png)

## Overview

Now Fitness is a fully functional, multi-page fitness website featuring a modern design, responsive layout, and interactive elements. The site demonstrates core web development skills including semantic HTML, modular CSS architecture, and vanilla JavaScript for form validation and navigation.

## Features

- **Fully Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **5 Complete Pages**: Home, Workouts, Blog, About Us, Contact
- **Interactive Navigation**: Mobile-friendly hamburger menu with smooth scrolling
- **Contact Form**: Client-side validation with real-time feedback
- **Embedded Map**: Google Maps integration for location display
- **Video Background**: Auto-playing hero section with overlay effect
- **Modern UI**: Card-based layouts, hover effects, smooth transitions

## Pages

### Homepage
Hero section with video background and call-to-action, leading to featured workout programs.

### Featured Workouts
![Workout Programs](screenshots/workouts.png)

Visual showcase of workout programs:
- **Full Body Split**: Beginner-friendly total body workout
- **Upper-Lower Split**: Intermediate program focusing on upper/lower body sessions

### Blog Section
![Blog Cards](screenshots/blog.png)

Content cards with fitness articles:
- Top 10 Exercises for Full-Body Workouts
- Creating Effective Upper-Lower Split Routines  
- Nutrition Tips for Building Muscle

### Contact Page
![Contact Form](screenshots/contact.png)

Functional contact form with:
- Real-time input validation
- Error messaging for invalid entries
- Success confirmation feedback
- Embedded Google Maps showing office location

## Tech Stack

**Frontend:**
- HTML5 (semantic markup, accessibility attributes)
- CSS3 (Flexbox, Grid, media queries, custom properties)
- Vanilla JavaScript (form validation, mobile menu toggle)

**External Resources:**
- Google Maps Embed API
- Custom video background

**Design Principles:**
- Mobile-first responsive approach
- Modular CSS architecture (component-based files)
- Accessible forms with proper labels and ARIA attributes

## Project Structure
```
NowFitness/
├── index.html          # Main homepage
├── contact.html        # Contact page with form
├── javascript.js       # Form validation & navigation logic
├── css/
│   ├── base.css       # Global styles, button components
│   ├── header.css     # Navigation bar styles
│   ├── hero.css       # Hero section with video background
│   ├── workouts.css   # Workout cards grid layout
│   ├── blog.css       # Blog cards styling
│   ├── about.css      # About section styles
│   ├── footer.css     # Footer with social links
│   ├── contact.css    # Contact form styles
│   └── media.css      # Responsive breakpoints
├── images/            # Logo, workout graphics, social icons
├── videos/            # Hero background video
└── screenshots/       # Documentation images
```

## How to View

**Local Setup:**
1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Navigate between pages using the menu

**GitHub Pages Deployment:**
Can be deployed to `https://franng95.github.io/NowFitness`

## Key Technical Features

### Responsive Design
- CSS Grid for flexible workout/blog card layouts
- Flexbox for component alignment and spacing
- Media queries for mobile breakpoint (<768px)
- Collapsible hamburger menu for small screens

### Form Validation (JavaScript)
```javascript
// Email validation with regex
if (!/\S+@\S+\.\S+/.test(email)) {
    messageContent.textContent = 'Please enter a valid email address.';
    messageContent.style.color = 'red';
}
```

### Smooth Scrolling Navigation
```css
html {
    scroll-behavior: smooth;
}
```

### Interactive Hover Effects
All buttons and cards include:
- Color transitions
- Scale transforms on hover
- Box shadow changes

## What I Learned

**HTML/CSS:**
- Building semantic, accessible markup structure
- Creating reusable CSS components and design systems
- Implementing responsive design patterns and breakpoints
- Managing multiple stylesheets efficiently with modular architecture

**JavaScript:**
- DOM manipulation and event handling
- Form validation with conditional logic
- Providing user feedback for form interactions
- Mobile menu toggle functionality

**Web Design:**
- Visual hierarchy and consistent spacing
- Color theory, contrast, and accessibility
- Mobile-first development workflow
- User experience principles for navigation and forms

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Microsoft Edge 90+

## Future Enhancements

- [ ] Backend integration with Node.js/Express
- [ ] Database for storing workout plans (MongoDB/PostgreSQL)
- [ ] User authentication and profile system
- [ ] Workout tracking and progress logging
- [ ] Payment gateway for premium membership
- [ ] Admin CMS for blog content management
- [ ] Video tutorial library with streaming
- [ ] Social features (progress photos, community)

## Deployment Options

This static site can be deployed to:
- **GitHub Pages** (free static hosting)
- **Netlify** (automatic builds from Git)
- **Vercel** (with optional serverless functions)
- **Traditional hosting** (cPanel, FTP upload to shared hosting)

## Academic Context

**Course**: Web Design (Foundation Year)  
**Institution**: University of Greenwich  
**Year**: 2023  
**Focus**: HTML5, CSS3, JavaScript fundamentals, responsive design

## License

Academic project for educational purposes.

## Contact

**Francisco Navarro**  
Email: frannavarrogil@gmail.com  
GitHub: [@franng95](https://github.com/franng95)  
LinkedIn: [franjng](https://linkedin.com/in/franjng)

---

**Note**: This is a static demonstration site. The contact form validates input client-side but does not submit to a backend server. Map location and contact details are fictional examples for demonstration purposes.