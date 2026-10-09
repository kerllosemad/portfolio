function initials(title) {
  return title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}

function renderProfile() {
  document.getElementById('profile-name').textContent = PROFILE.name;
  document.getElementById('profile-role').textContent = PROFILE.role;
  document.getElementById('profile-bio').textContent = PROFILE.tagline;
  document.getElementById('about-bio').textContent = PROFILE.bio;

  const emailLink = document.getElementById('contact-email');
  emailLink.textContent = PROFILE.email;
  emailLink.href = 'mailto:' + PROFILE.email;

  const ghLink = document.getElementById('contact-github');
  ghLink.href = PROFILE.github;

  const liLink = document.getElementById('contact-linkedin');
  liLink.href = PROFILE.linkedin;

  document.getElementById('hero-email').href = 'mailto:' + PROFILE.email;
  document.getElementById('footer-name').textContent = PROFILE.name;
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  const photoWrap = document.getElementById('hero-photo-wrap');
  const photoImg = document.getElementById('profile-photo');
  if (PROFILE.photo) {
    photoImg.src = PROFILE.photo;
    photoImg.alt = PROFILE.name;
    photoWrap.style.display = 'block';
  } else {
    photoWrap.style.display = 'none';
  }
}

function renderSkills() {
  const techList = document.getElementById('skills-technical');
  SKILLS.technical.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    techList.appendChild(li);
  });

  const personalList = document.getElementById('skills-personal');
  SKILLS.personal.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    personalList.appendChild(li);
  });
}

function renderExperience() {
  const container = document.getElementById('experience-list');
  EXPERIENCE.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'exp-item';
    item.innerHTML = `
      <div class="exp-period">${exp.period}</div>
      <div>
        <h3 class="exp-title">${exp.title}</h3>
        <p class="exp-place">${exp.place}</p>
        <p class="exp-desc">${exp.description}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderServices() {
  const container = document.getElementById('services-grid');
  SERVICES.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
    `;
    container.appendChild(card);
  });
}

function projectCard(p) {
  const el = document.createElement(p.link ? 'a' : 'div');
  if (p.link) {
    el.href = p.link;
    el.target = '_blank';
    el.rel = 'noopener';
  }
  el.className = 'project-card';
  el.dataset.category = p.category;

  const thumbInner = p.image
    ? `<img src="${p.image}" alt="${p.title}">`
    : initials(p.title);

  el.innerHTML = `
    <div class="project-thumb ${p.category}">${thumbInner}</div>
    <div class="project-body">
      <p class="project-cat ${p.category}">${p.category === 'web' ? 'Web Development' : 'Graphic Design'} — ${p.year}</p>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="tag-row">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
  return el;
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-note">// no projects in this category yet — add one in data.js</p>`;
    return;
  }

  filtered.forEach(p => grid.appendChild(projectCard(p)));
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderSkills();
  renderExperience();
  renderServices();
  renderProjects();
  initFilters();
});