// ============================================
// Projects Data
// ============================================
// Add or edit projects here. The page will automatically update!

const projectsData = [
    {
        id: 1,
        title: "Worker Stress Analysis System",
        icon: "psychology",
        description: "AI system analyzing facial expressions and speech patterns to detect stress in real time. Taught me about handling noisy data, multi-signal reliability, and why accuracy metrics don't always translate to real-world usefulness.",
        tags: ["Python", "Computer Vision", "Speech Analysis", "OpenCV", "Machine Learning"],
        liveDemo: "#",
        github: "https://github.com/likhitha-hs543",
        featured: true
    },
    {
        id: 2,
        title: "Weather-Based Music Recommender",
        icon: "music_note",
        description: "Web app recommending music playlists based on real-time weather. Explored contextual recommendation using external signals, handled async API data flow, and focused on smooth UI updates across devices.",
        tags: ["JavaScript", "APIs", "Frontend", "Weather API", "Spotify API"],
        liveDemo: "#",
        github: "https://github.com/likhitha-hs543",
        featured: true
    },
    {
        id: 3,
        title: "DailyLine — Reflection App",
        icon: "edit_note",
        description: "Minimal journaling app with one constraint: write only one meaningful line per day. Reduced friction and decision fatigue to encourage consistency. Strengthened understanding of product thinking and how constraints improve user behavior.",
        tags: ["Product Design", "UI/UX", "Mobile App", "React Native", "SQLite"],
        liveDemo: "#",
        github: "https://github.com/likhitha-hs543",
        featured: true
    }
];

// ============================================
// Render Functions
// ============================================

// Generate HTML for a single project card
function createProjectCard(project) {
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    return `
        <div class="glass-card project-card">
            <div class="project-image">
                <span class="material-symbols-outlined project-placeholder">${project.icon}</span>
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
