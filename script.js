const projects = [
  {
    title: 'DIY Maze Game with Joystick Control',
    tag: 'Game Lab',
    description: 'A playful maze challenge where a joystick drives the action and every move matters.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/DIY%20Maze%20Game%20with%20Joystick%20Control.png',
    accent: '#ff9d43',
    tags: ['Arduino', 'Game', 'Joystick']
  },
  {
    title: 'DIY Joystick-Controlled Canon',
    tag: 'Build Challenge',
    description: 'A bright little cannon build that turns motion control into a fun mechanical demo.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/DIY%20Joystick-Controlled%20Canon.png',
    accent: '#5ec8ff',
    tags: ['Motor', 'Control', 'Maker']
  },
  {
    title: 'Auto Rain Shelter',
    tag: 'Smart Home',
    description: 'A clever shelter system designed to react to changing weather and protect the setup.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/Auto%20Rain%20Shelter.png',
    accent: '#72d59c',
    tags: ['Automation', 'Weather', 'Smart']
  },
  {
    title: 'DIY Automatic Tap with Countdown',
    tag: 'Automation',
    description: 'Hands-free tap logic with a timer that adds a very practical twist to a smart build.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/DIY%20Automatic%20Tap%20with%20Countdown.png',
    accent: '#8d7dff',
    tags: ['Sensor', 'Timer', 'Smart']
  },
  {
    title: 'DIY Distracted Driver Alert System',
    tag: 'Safety',
    description: 'A safety-focused concept that uses alerts to keep attention on the road.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/DIY%20Distracted%20Driver%20Alert%20System.png',
    accent: '#ff5a4f',
    tags: ['Alert', 'Safety', 'IoT']
  },
  {
    title: 'Dancing LED with Sound Sensor',
    tag: 'Light Show',
    description: 'Colorful LED motion driven by sound input, turning a simple sensor into a party effect.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/Dancing%20LED%20with%20Sound%20Sensor.png',
    accent: '#ffd857',
    tags: ['LED', 'Audio', 'Glow']
  },
  {
    title: 'LEGO Gate with Stepper Motor',
    tag: 'Mechanical Fun',
    description: 'A toy gate mechanism that opens and closes with the rhythm of a stepper motor.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/LEGO%20Gate%20with%20Stepper%20Motor.png',
    accent: '#72d59c',
    tags: ['LEGO', 'Stepper', 'Motion']
  },
  {
    title: 'RGB LED On/Off with Delay',
    tag: 'Color Logic',
    description: 'A punchy RGB project that experiments with timing, switching, and color cycles.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/RGB%20LED%20OnOff%20with%20Delay.png',
    accent: '#ff5a4f',
    tags: ['RGB', 'LED', 'Timing']
  },
  {
    title: 'TM1637 4-Digit Counter',
    tag: 'Display Tech',
    description: 'A compact counting display with a satisfying digital readout and tidy display logic.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/TM1637%204-Digit%20Counter.png',
    accent: '#5ec8ff',
    tags: ['Display', 'Counter', 'Digital']
  },
  {
    title: 'Traffic Light Simulator',
    tag: 'Signals',
    description: 'A mini traffic-light simulation that mimics the rhythm of city flow and timing.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/Traffic%20Light%20Simulator.png',
    accent: '#ffd857',
    tags: ['Simulation', 'LED', 'City']
  },
  {
    title: 'Ultrasonic Gate for Toy Vehicles',
    tag: 'Smart Gate',
    description: 'A toy vehicle gate that reacts to proximity and creates a magical automatic barrier.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/Ultrasonic%20Gate%20for%20Toy%20Vehicles.png',
    accent: '#8d7dff',
    tags: ['Ultrasonic', 'Gate', 'Auto']
  },
  {
    title: 'DIY Lego + Arduino Speed Detector',
    tag: 'Motion Lab',
    description: 'A clever speed-tracking build interested in movement, timing, and smart measurements.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/DIY%20Lego%20%2B%20Arduino%20Speed%20Detector.png',
    accent: '#72d59c',
    tags: ['LEGO', 'Arduino', 'Speed']
  },
  {
    title: '16x2 LCD Name Scroller',
    tag: 'Display',
    description: 'A scrolling text display that makes names and messages feel animated and alive.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/16x2%20LCD%20Name%20Scroller.png',
    accent: '#ff9d43',
    tags: ['LCD', 'Text', 'Display']
  },
  {
    title: '8x8 WS2812B RGB LED Matrix Theater Chase Rainbow',
    tag: 'Visual FX',
    description: 'A dazzling LED matrix animation that makes color chase through the board in rainbow flow.',
    image: 'https://raw.githubusercontent.com/advaithalokkanCoder/Website/main/8x8%20WS2812B%20RGB%20LED%20Matrix%20Theater%20Chase%20Rainbow.png',
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
    (project) => `
      <article class="project-card">
        <img class="project-image" src="${project.image}" alt="${project.title}" />
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
