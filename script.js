// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
    // Add your Firebase config here
    // For demo purposes, we'll use a placeholder
    apiKey: "demo-api-key",
    authDomain: "demo-project.firebaseapp.com",
    projectId: "demo-project",
    storageBucket: "demo-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "demo-app-id"
};

// Initialize Firebase
let app;
let db;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Firebase initialization failed:', error);
    // Show fallback content when Firebase is not available
    showFallbackProjects();
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize animations
    initScrollAnimations();
    
    // Load projects from Firebase
    loadProjects();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize resume download
    initResumeDownload();
    
    // Initialize skill progress bars animation
    initSkillBars();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .smooth-scroll');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .skill-item, .hero-content');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Load projects from Firebase Firestore
async function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        if (!db) {
            throw new Error('Firebase not initialized');
        }
        
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projects = [];
        
        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        
        if (projects.length === 0) {
            showFallbackProjects();
            return;
        }
        
        displayProjects(projects);
        
    } catch (error) {
        console.error('Error loading projects:', error);
        showFallbackProjects();
    }
}

// Display projects in the DOM
function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

// Create individual project card
function createProjectCard(project) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    const toolsBadges = project.tools ? project.tools.map(tool => 
        `<span class="tools-badge">${tool}</span>`
    ).join('') : '';
    
    col.innerHTML = `
        <div class="card project-card h-100">
            <div class="card-body">
                <h5 class="card-title">${project.title || 'Untitled Project'}</h5>
                <p class="card-text">${project.description || 'No description available.'}</p>
                <div class="mb-3">
                    ${toolsBadges}
                </div>
                <div class="project-links mt-auto">
                    ${project.github ? `<a href="${project.github}" class="btn btn-outline-primary btn-sm" target="_blank" rel="noopener">
                        <i class="bi bi-github me-1"></i>GitHub
                    </a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
                        <i class="bi bi-box-arrow-up-right me-1"></i>Live Demo
                    </a>` : ''}
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Show fallback projects when Firebase is not available
function showFallbackProjects() {
    const fallbackProjects = [
        {
            title: "Kubernetes Cluster Setup",
            description: "Automated Kubernetes cluster deployment using Terraform and Ansible. Includes monitoring with Prometheus and Grafana.",
            tools: ["Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana"],
            github: "https://github.com/example/k8s-cluster",
            demo: "https://demo.example.com"
        },
        {
            title: "CI/CD Pipeline with Jenkins",
            description: "Complete CI/CD pipeline setup for a Node.js application with automated testing, security scanning, and deployment.",
            tools: ["Jenkins", "Docker", "Node.js", "SonarQube", "AWS"],
            github: "https://github.com/example/cicd-pipeline",
            demo: null
        },
        {
            title: "Infrastructure as Code",
            description: "AWS infrastructure provisioning using Terraform with automated backup, scaling, and monitoring capabilities.",
            tools: ["Terraform", "AWS", "CloudWatch", "Lambda", "S3"],
            github: "https://github.com/example/aws-iac",
            demo: null
        },
        {
            title: "Docker Microservices",
            description: "Containerized microservices architecture with service discovery, load balancing, and centralized logging.",
            tools: ["Docker", "Docker Compose", "Nginx", "ELK Stack"],
            github: "https://github.com/example/microservices",
            demo: "https://microservices.example.com"
        },
        {
            title: "Monitoring Dashboard",
            description: "Custom monitoring dashboard built with Grafana for tracking application metrics and system performance.",
            tools: ["Grafana", "Prometheus", "InfluxDB", "Python"],
            github: "https://github.com/example/monitoring",
            demo: "https://monitoring.example.com"
        },
        {
            title: "Automated Backup Solution",
            description: "Automated backup and disaster recovery solution for cloud infrastructure with scheduled snapshots.",
            tools: ["Python", "AWS", "Bash", "Cron", "S3"],
            github: "https://github.com/example/backup-solution",
            demo: null
        }
    ];
    
    displayProjects(fallbackProjects);
}

// Initialize contact form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const alertsContainer = document.getElementById('form-alerts');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showAlert('Please fill in all fields.', 'danger');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address.', 'danger');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        submitBtn.disabled = true;
        
        try {
            if (db) {
                // Save to Firebase Firestore
                await addDoc(collection(db, 'messages'), {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: serverTimestamp()
                });
                
                showAlert('Thank you! Your message has been sent successfully.', 'success');
            } else {
                // Simulate successful submission when Firebase is not available
                await new Promise(resolve => setTimeout(resolve, 1000));
                showAlert('Thank you! Your message has been received. (Demo mode - Firebase not configured)', 'success');
            }
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            console.error('Error sending message:', error);
            showAlert('Sorry, there was an error sending your message. Please try again.', 'danger');
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Show alert message
    function showAlert(message, type) {
        alertsContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        
        // Auto-hide success alerts after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                const alert = alertsContainer.querySelector('.alert');
                if (alert) {
                    const bsAlert = new bootstrap.Alert(alert);
                    bsAlert.close();
                }
            }, 5000);
        }
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Initialize resume download
function initResumeDownload() {
    const downloadBtn = document.getElementById('download-resume');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // In a real application, this would link to a PDF stored in Firebase Storage
        // For demo purposes, we'll show an alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-info mt-3';
        alert.innerHTML = `
            <i class="bi bi-info-circle me-2"></i>
            Resume download would be available here. In a real application, this would link to a PDF stored in Firebase Storage at /assets/resume.pdf
        `;
        
        downloadBtn.parentElement.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    });
}

// Initialize skill progress bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset width and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(22, 27, 34, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--bg-secondary)';
        navbar.style.backdropFilter = 'none';
    }
});

// Export functions for potential external use
export { loadProjects, displayProjects, createProjectCard };