# DevOps Engineer Portfolio

## Overview

This is a personal portfolio website for a DevOps Engineer Intern built with vanilla HTML, CSS, JavaScript, Bootstrap 5, and Firebase. The application features a single-page design with smooth scrolling navigation, dynamic content loading from Firebase Firestore, and a contact form that saves submissions to the database. The site showcases the engineer's skills, projects, and provides a resume download feature, all styled with a GitHub Dark theme for a professional developer aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single-Page Application (SPA)**: Uses vanilla JavaScript with smooth scrolling navigation between sections rather than multiple HTML pages
- **Component-Based Layout**: Organized into distinct sections (Home, About, Skills, Projects, Resume, Contact) for clear separation of concerns
- **Bootstrap 5 Framework**: Leverages Bootstrap's grid system, utilities, and components for responsive design and consistent UI elements
- **GitHub Dark Theme**: Custom CSS variables implementing GitHub's dark color palette for professional developer aesthetics

### Data Management
- **Firebase Firestore Integration**: Uses Firebase SDK v9+ modular approach for real-time database operations
- **Dynamic Content Loading**: Projects are loaded dynamically from Firestore rather than hardcoded in HTML
- **Contact Form Persistence**: Form submissions are saved directly to Firestore with server timestamps

### Responsive Design
- **Mobile-First Approach**: Bootstrap 5's responsive grid ensures compatibility across all device sizes
- **Progressive Enhancement**: Fallback content is displayed when Firebase services are unavailable
- **Smooth Animations**: CSS transitions and scroll-based animations enhance user experience

### File Structure
- **Static Assets**: HTML, CSS, and JavaScript files for core functionality
- **Firebase Configuration**: Separate configuration file with setup instructions and data structure examples
- **Modular JavaScript**: ES6 modules for Firebase imports and clean code organization

## External Dependencies

### Firebase Services
- **Firebase Firestore**: NoSQL database for storing project information and contact form submissions
- **Firebase Hosting**: Static website hosting and deployment platform
- **Firebase SDK v9+**: Modern modular JavaScript SDK for client-side database operations

### Frontend Libraries
- **Bootstrap 5.3.0**: CSS framework via CDN for responsive design and UI components
- **Bootstrap Icons**: Icon library via CDN for consistent iconography throughout the site

### Data Collections
- **projects**: Stores project portfolio items with title, description, tools, GitHub links, and demo URLs
- **messages**: Stores contact form submissions with name, email, message content, and timestamps

### Development Tools
- **Firebase CLI**: Required for project deployment and hosting management
- **Modern Browser**: ES6 module support required for Firebase SDK functionality