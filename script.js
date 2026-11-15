const projects = [
  {
    title: 'DIY Maze Game with Joystick Control',
    tag: 'Game Lab',
    description: 'A playful maze challenge where a joystick drives the action and every move matters.',
    image: 'DIY Maze Game with Joystick Control.png',
    accent: '#ff9d43',
    tags: ['Arduino', 'Game', 'Joystick']
  },
  {
    title: 'DIY Joystick-Controlled Canon',
    tag: 'Build Challenge',
    description: 'A bright little cannon build that turns motion control into a fun mechanical demo.',
    image: 'DIY Joystick-Controlled Canon.png',
    accent: '#5ec8ff',
    tags: ['Motor', 'Control', 'Maker']
  },
  {
    title: 'Auto Rain Shelter',
    tag: 'Smart Home',
    description: 'A clever shelter system designed to react to changing weather and protect the setup.',
    image: 'Auto Rain Shelter.png',
    accent: '#72d59c',
    tags: ['Automation', 'Weather', 'Smart']
  },
  {
    title: 'DIY Automatic Tap with Countdown',
    tag: 'Automation',
    description: 'Hands-free tap logic with a timer that adds a very practical twist to a smart build.',
    image: 'DIY Automatic Tap with Countdown.png',
    accent: '#8d7dff',
    tags: ['Sensor', 'Timer', 'Smart']
  },
  {
    title: 'DIY Distracted Driver Alert System',
    tag: 'Safety',
    description: 'A safety-focused concept that uses alerts to keep attention on the road.',
    image: 'DIY Distracted Driver Alert System.png',
    accent: '#ff5a4f',
    tags: ['Alert', 'Safety', 'IoT']
  },
  {
    title: 'Dancing LED with Sound Sensor',
    tag: 'Light Show',
    description: 'Colorful LED motion driven by sound input, turning a simple sensor into a party effect.',
    image: 'Dancing LED with Sound Sensor.png',
    accent: '#ffd857',
    tags: ['LED', 'Audio', 'Glow']
  },
  {
    title: 'LEGO Gate with Stepper Motor',
    tag: 'Mechanical Fun',
    description: 'A toy gate mechanism that opens and closes with the rhythm of a stepper motor.',
    image: 'LEGO Gate with Stepper Motor.png',
    accent: '#72d59c',
    tags: ['LEGO', 'Stepper', 'Motion']
  },
  {
    title: 'RGB LED On/Off with Delay',
    tag: 'Color Logic',
    description: 'A punchy RGB project that experiments with timing, switching, and color cycles.',
    image: 'RGB LED OnOff with Delay.png',
    accent: '#ff5a4f',
    tags: ['RGB', 'LED', 'Timing']
  },
  {
    title: 'TM1637 4-Digit Counter',
    tag: 'Display Tech',
    description: 'A compact counting display with a satisfying digital readout and tidy display logic.',
    image: 'TM1637 4-Digit Counter.png',
    accent: '#5ec8ff',
    tags: ['Display', 'Counter', 'Digital']
  },
  {
    title: 'Traffic Light Simulator',
    tag: 'Signals',
    description: 'A mini traffic-light simulation that mimics the rhythm of city flow and timing.',
    image: 'Traffic Light Simulator.png',
    accent: '#ffd857',
    tags: ['Simulation', 'LED', 'City']
  },
  {
    title: 'Ultrasonic Gate for Toy Vehicles',
    tag: 'Smart Gate',
    description: 'A toy vehicle gate that reacts to proximity and creates a magical automatic barrier.',
    image: 'Ultrasonic Gate for Toy Vehicles.png',
    accent: '#8d7dff',
    tags: ['Ultrasonic', 'Gate', 'Auto']
  },
  {
    title: 'DIY Lego + Arduino Speed Detector',
    tag: 'Motion Lab',
    description: 'A clever speed-tracking build interested in movement, timing, and smart measurements.',
    image: 'DIY Lego + Arduino Speed Detector.png',
    accent: '#72d59c',
    tags: ['LEGO', 'Arduino', 'Speed']
  },
  {
    title: '16x2 LCD Name Scroller',
    tag: 'Display',
    description: 'A scrolling text display that makes names and messages feel animated and alive.',
    image: '16x2 LCD Name Scroller.png',
    accent: '#ff9d43',
    tags: ['LCD', 'Text', 'Display']
  },
  {
    title: '8x8 WS2812B RGB LED Matrix Theater Chase Rainbow',
    tag: 'Visual FX',
    description: 'A dazzling LED matrix animation that makes color chase through the board in rainbow flow.',
    image: '8x8 WS2812B RGB LED Matrix Theater Chase Rainbow.png',
    accent: '#ff5a4f',
    tags: ['RGB', 'Matrix', 'Animation']
  }
];

const stats = [
  { value: projects.length, label: 'Projects' },
  { value: 'Arduino', label: 'Core Tech' },
  { value: '100%', label: 'Playful' }
];

const statsWrap = document.getElementById('stats');
statsWrap.innerHTML = stats
  .map(
    (stat) => `
      <div class="stat-box">
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      </div>
    `
  )
  .join('');

const projectGrid = document.getElementById('project-grid');
projectGrid.innerHTML = projects
  .map(
    (project, index) => `
      <article class="project-card reveal-card" style="transition-delay:${index * 75}ms;">
        <img class="project-image" src="${encodeURI(project.image)}" alt="${project.title}" loading="lazy" />
        <div class="project-copy">
          <span class="project-tag" style="color:${project.accent}; border-color:${project.accent}44; background:${project.accent}12;">${project.tag}</span>
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `
  )
  .join('');

document.getElementById('project-count').textContent = projects.length;
document.getElementById('author-name').textContent = 'Anila Narayanan';

const revealItems = document.querySelectorAll('.reveal, .feature-card, .project-card, .about-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));
