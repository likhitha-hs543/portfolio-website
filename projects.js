// ============================================
// Projects Data
// ============================================
// Add or edit projects here. The page will automatically update!

const projectsData = [
    {
        id: 1,
        title: "Worker Stress Analysis System",
        image: "", // Add your project image URL here (leave empty to use icon)
        icon: "psychology", // Fallback icon if no image
        description: "AI system analyzing facial expressions and speech patterns to detect stress in real time. Taught me about handling noisy data, multi-signal reliability, and why accuracy metrics don't always translate to real-world usefulness.",
        tags: ["Python", "Computer Vision", "Speech Analysis", "OpenCV", "Machine Learning"],
        liveDemo: "#",
        github: "https://github.com/likhitha-hs543/worker-stress-analysis.git",
        featured: true
    },
    {
        id: 2,
        title: "Atmotune - Weather-Based Music Recommender",
        image: "images/Atmotune.png", // Add your project image URL here (leave empty to use icon)
        icon: "music_note", // Fallback icon if no image
        description: "Web app recommending music playlists based on real-time weather. Explored contextual recommendation using external signals, handled async API data flow, and focused on smooth UI updates across devices.",
        tags: ["JavaScript", "APIs", "Frontend", "Weather API", "Spotify API"],
        liveDemo: "https://atmotune.vercel.app/",
        github: "https://github.com/likhitha-hs543/Atmotune.git",
        featured: true
    },
    {
        id: 3,
        title: "DailyLine - Reflection App",
        image: "images/DailyLine.png", // Add your project image URL here (leave empty to use icon)
        icon: "edit_note", // Fallback icon if no image
        description: "Minimal journaling app with one constraint: write only one meaningful line per day. This project is in my Github's private repository",
        tags: ["Product Design", "UI/UX", "Mobile App", "React Native", "SQLite"],
        liveDemo: "#",
        github: "https://github.com/likhitha-hs543",
        featured: false
    },
    {
        id: 4,
        title: "Task Manager",
        image: "images/TaskManager.png", // Add your project image URL here (leave empty to use icon)
        icon: "edit_note", // Fallback icon if no image
        description: "A professional task management application built with React.js, Vite, and Tailwind CSS. Login using any dummy email and password.",
        tags: ["React 18", "Vite", "Tailwind CSS", "React Router", "Context API", "LocalStorage"],
        liveDemo: "https://task-manager-hazel-two.vercel.app/",
        github: "https://github.com/likhitha-hs543/task-manager.git",
        featured: true
    },
    {
        id: 5,
        title: "Smart Resume Analyzer (Mini ATS)",
        image: "images/TaskManager.png", // Add your project image URL here (leave empty to use icon)
        icon: "edit_note", // Fallback icon if no image
        description: "A Java-based, rule-driven ATS simulation that evaluates resume–job description alignment. Built as a one-session MVP with clean architecture, skill-whitelist filtering, deterministic scoring, and honest documentation of tradeoffs. Delivered as a standalone executable JAR using Maven Wrapper.",
        tags: ["Java 17", "Maven (Wrapper + Shade)", "Apache PDFBox"],
        liveDemo: "https://task-manager-hazel-two.vercel.app/",
        github: "https://github.com/likhitha-hs543/smart-resume-analyzer.git",
        featured: true
    }
];

// ============================================
// Render Functions
// ============================================

// Generate HTML for a single project card
function createProjectCard(project) {
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Use image if available, otherwise use icon
    const imageHTML = project.image
        ? `<img src="${project.image}" alt="${project.title}" class="project-img">`
        : `<span class="material-symbols-outlined project-placeholder">${project.icon}</span>`;

    return `
        <div class="glass-card project-card">
            <div class="project-image">
                ${imageHTML}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                <div class="project-links">
                    <a href="${project.liveDemo}" class="project-link">Live Demo</a>
                    <a href="${project.github}" class="project-link">GitHub</a>
                </div>
            </div>
        </div>
    `;
}

// Render featured projects (for index.html)
function renderFeaturedProjects() {
    const container = document.getElementById('featured-projects-grid');
    if (!container) return;

    const featuredProjects = projectsData.filter(project => project.featured);
    container.innerHTML = featuredProjects.map(createProjectCard).join('');
}

// Render all projects (for projects.html)
function renderAllProjects() {
    const container = document.getElementById('all-projects-grid');
    if (!container) return;

    container.innerHTML = projectsData.map(createProjectCard).join('');
}

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProjects();
    renderAllProjects();
});
