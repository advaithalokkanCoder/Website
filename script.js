const summaryStats = document.getElementById('summary-stats');
const languageList = document.getElementById('language-list');
const highlights = document.getElementById('highlights');
const galleryGrid = document.getElementById('gallery-grid');
const donutChart = document.getElementById('donut-chart');
const totalPercentage = document.getElementById('total-percentage');

const data = {
  repoName: 'advaithalokkanCoder / Website',
  summary: [
    { label: 'Languages', value: '3', detail: 'primary stacks' },
    { label: 'Images', value: '3', detail: 'mockup assets' },
    { label: 'Status', value: 'Ready', detail: 'for deployment' }
  ],
  languages: [
    { name: 'HTML', value: 42, color: '#e34c26' },
    { name: 'CSS', value: 36, color: '#264de4' },
    { name: 'JavaScript', value: 22, color: '#f7df1e' }
  ],
  details: [
    {
      icon: '✦',
      title: 'Structured content',
      text: 'The site presents repository data in a clean, digestible format using clear stacks and visual summaries.'
    },
    {
      icon: '▣',
      title: 'Responsive layout',
      text: 'Cards, charts, and gallery views adapt smoothly across desktop and mobile layouts for consistent presentation.'
    },
    {
      icon: '◎',
      title: 'Visual storytelling',
      text: 'A custom color-coded language chart and mockup gallery tie the data back to a more polished website aesthetic.'
    }
  ],
  gallery: [
    {
      title: 'Landing page concept',
      text: 'Feature hero section built to highlight repository information and key language metrics.',
      src: 'assets/mockup-1.svg'
    },
    {
      title: 'Analytics card',
      text: 'A support panel for summarizing project composition and release-readiness details.',
      src: 'assets/mockup-2.svg'
    },
    {
      title: 'Brand highlight',
      text: 'A polished visual block that can be used to showcase the project identity and content story.',
      src: 'assets/mockup-3.svg'
    }
  ]
};

const renderSummaryStats = () => {
  summaryStats.innerHTML = data.summary
    .map(
      (item) => `
        <div class="stat-box">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
          <small>${item.detail}</small>
        </div>
      `
    )
    .join('');
};

const renderLanguageBars = () => {
  const total = data.languages.reduce((sum, item) => sum + item.value, 0);
  const rings = data.languages.map((language) => `${language.color} 0 ${language.value}%`).join(', ');
  const gradientString = `conic-gradient(${rings})`;
  donutChart.style.background = gradientString;
  totalPercentage.textContent = `${total}%`;

  languageList.innerHTML = data.languages
    .map(
      (language) => `
        <div class="language-item">
          <div class="language-meta">
            <span class="language-dot" style="background:${language.color};"></span>
            <span class="language-name">${language.name}</span>
          </div>
          <span class="language-value">${language.value}%</span>
          <div class="progress-track">
            <div class="progress-bar" style="width:${language.value}%; background:${language.color};"></div>
          </div>
        </div>
      `
    )
    .join('');
};

const renderHighlights = () => {
  highlights.innerHTML = data.details
    .map(
      (item) => `
        <div class="highlight-item">
          <div class="highlight-icon">${item.icon}</div>
          <div>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>
        </div>
      `
    )
    .join('');
};

const renderGallery = () => {
  galleryGrid.innerHTML = data.gallery
    .map(
      (item) => `
        <article class="gallery-card">
          <img src="${item.src}" alt="${item.title}" />
          <div class="gallery-copy">
            <h4>${item.title}</h4>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join('');
};

renderSummaryStats();
renderLanguageBars();
renderHighlights();
renderGallery();
