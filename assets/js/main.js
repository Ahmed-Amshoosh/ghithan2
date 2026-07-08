// ===========================
// تهيئة AOS
// ===========================
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 80
});

// ===========================
// شريط التنقل
// ===========================
const navbar = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// فلترة المشاريع
// ===========================
const filterButtons = document.querySelectorAll('.tab-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                item.classList.remove('aos-animate');
                setTimeout(() => item.classList.add('aos-animate'), 50);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===========================
// تحميل المشاريع من JSON
// ===========================
// ===========================
// تحميل المشاريع من projects.js
// ===========================
let allProjects = [];

function loadProjects() {
    try {
        // البيانات جاهزة من ملف projects.js
        allProjects = projectsData.projects;
        
        // عرض المشاريع
        renderProjects(allProjects);
        
        // تهيئة الفلاتر
        initFilters();
        
        console.log('✅ تم تحميل', allProjects.length, 'مشروع بنجاح');
        
    } catch (error) {
        console.error('خطأ في تحميل المشاريع:', error);
        document.getElementById('projectsGrid').innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-danger">حدث خطأ في تحميل المشاريع</p>
            </div>
        `;
    }
}

// ===========================
// عرض المشاريع
// ===========================
function renderProjects(projects) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    if (projects.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted">لا توجد مشاريع في هذا التصنيف</p>
            </div>
        `;
        return;
    }
    
    projects.forEach((project, index) => {
        const delay = (index % 3) * 100;
        
        const projectHTML = `
            <div class="col-md-6 col-lg-4 project-item" 
                 data-category="${project.category}" 
                 data-client="${project.id}"
                 data-aos="fade-up" 
                 data-aos-delay="${delay}">
                <div class="project-card" onclick="openClientModal('${project.id}')">
                    <div class="project-img-wrap">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="project-overlay">
                            <div class="overlay-content">
                                <span class="overlay-icon"><i class="bi bi-eye-fill"></i></span>
                                <span class="overlay-text">عرض التصاميم</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <div class="project-meta">
                            <span class="project-cat">${project.categoryName}</span>
                            <span class="project-count">
                                <i class="bi bi-collection"></i> ${project.count} تصميم
                            </span>
                        </div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.description}</p>
                        <div class="project-footer">
                            <div class="project-dots">
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </div>
                            <span class="project-arrow">
                                <i class="bi bi-arrow-left"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        grid.insertAdjacentHTML('beforeend', projectHTML);
    });
    
    AOS.refresh();
}

// ===========================
// تهيئة الفلاتر
// ===========================
function initFilters() {
    const filterButtons = document.querySelectorAll('.tab-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            const filtered = filter === 'all' 
                ? allProjects 
                : allProjects.filter(p => p.category === filter);
            
            renderProjects(filtered);
        });
    });
}

// ===========================
// فتح Modal الجهة
// ===========================
function openClientModal(clientId) {
    const project = allProjects.find(p => p.id === clientId);
    if (!project) return;
    
    document.getElementById('clientModalTitle').textContent = project.clientName;
    document.getElementById('clientModalSubtitle').textContent = project.clientDesc;
    
    const grid = document.getElementById('clientWorksGrid');
    grid.innerHTML = '';
    
    project.works.forEach((work) => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.onclick = () => openLightbox(work.src);
        item.innerHTML = `
            <img src="${work.src}" alt="${work.title}" loading="lazy">
            <div class="masonry-overlay">
                <h6 class="fw-bold mb-1">${work.title}</h6>
            </div>
        `;
        grid.appendChild(item);
    });
    
    AOS.refresh();
    new bootstrap.Modal(document.getElementById('clientModal')).show();
}

// ===========================
// Lightbox
// ===========================
function openLightbox(src) {
    const lb = document.createElement('div');
    lb.className = 'lightbox-overlay active';
    lb.innerHTML = `<img src="${src}" alt="صورة مكبرة">`;
    lb.onclick = () => lb.remove();
    document.body.appendChild(lb);
}

// ===========================
// تحميل المشاريع عند بدء الصفحة
// ===========================
document.addEventListener('DOMContentLoaded', loadProjects);
// ===========================
// فتح Modal الجهة
// ===========================
function openClientModal(clientId) {
    const project = allProjects.find(p => p.id === clientId);
    if (!project) return;
    
    // تعيين العنوان والوصف
    document.getElementById('clientModalTitle').textContent = project.clientName;
    document.getElementById('clientModalSubtitle').textContent = project.clientDesc;
    
    // عرض الأعمال
    const grid = document.getElementById('clientWorksGrid');
    grid.innerHTML = '';
    
    project.works.forEach((work, i) => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.onclick = () => openLightbox(work.src);
        item.innerHTML = `
            <img src="${work.src}" alt="${work.title}" loading="lazy">
            <div class="masonry-overlay">
                <h6 class="fw-bold mb-1">${work.title}</h6>
            </div>
        `;
        grid.appendChild(item);
    });
    
    AOS.refresh();
    new bootstrap.Modal(document.getElementById('clientModal')).show();
}

// ===========================
// Lightbox
// ===========================
function openLightbox(src) {
    const lb = document.createElement('div');
    lb.className = 'lightbox-overlay active';
    lb.innerHTML = `<img src="${src}" alt="صورة مكبرة">`;
    lb.onclick = () => lb.remove();
    document.body.appendChild(lb);
}

// ===========================
// تحميل المشاريع عند بدء الصفحة
// ===========================
document.addEventListener('DOMContentLoaded', loadProjects);

// ===========================
// Lightbox
// ===========================
function openLightbox(src) {
    const lb = document.createElement('div');
    lb.className = 'lightbox-overlay active';
    lb.innerHTML = `<img src="${src}" alt="صورة مكبرة">`;
    lb.onclick = () => lb.remove();
    document.body.appendChild(lb);
}

// ===========================
// Counter Animation
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };
        update();
    });
}

// ===========================
// Skill Bars Animation
// ===========================
function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
        const width = fill.dataset.width;
        fill.style.width = width + '%';
    });
}

// ===========================
// Scroll Trigger Animations
// ===========================
const aboutSection = document.getElementById('about');
let skillsAnimated = false;

if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                setTimeout(animateSkillBars, 500);
            }
        });
    }, { threshold: 0.3 });
    observer.observe(aboutSection);
}

// Counter on scroll
let countersAnimated = false;
const heroStats = document.querySelector('.hero-stats');

if (heroStats) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });
    counterObserver.observe(heroStats);
}

// ===========================
// Three.js Hero Background
// ===========================
const heroBg = document.getElementById('heroBg');
if (heroBg && window.innerWidth > 768) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, heroBg.offsetWidth / heroBg.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(heroBg.offsetWidth, heroBg.offsetHeight);
    heroBg.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(1, 0);
    const mat = new THREE.MeshBasicMaterial({ color: 0x4facfe, wireframe: true, transparent: true, opacity: 0.15 });
    const shapes = [];

    for (let i = 0; i < 5; i++) {
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        scene.add(mesh);
        shapes.push(mesh);
    }

    camera.position.z = 5;

    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
        mx = (e.clientX / window.innerWidth) * 2 - 1;
        my = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
        requestAnimationFrame(animate);
        shapes.forEach((s, i) => {
            s.rotation.x += 0.001 * (i + 1);
            s.rotation.y += 0.001 * (i + 1);
        });
        camera.position.x += (mx * 2 - camera.position.x) * 0.05;
        camera.position.y += (my * 2 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (heroBg.offsetWidth > 0) {
            camera.aspect = heroBg.offsetWidth / heroBg.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(heroBg.offsetWidth, heroBg.offsetHeight);
        }
    });
}

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('✅ تم التحميل بنجاح');


