// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let currentTheme = 'light';

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', currentTheme);
    themeToggle.querySelector('i').className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').className =
        navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

// Close menu on click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').className = 'fas fa-bars';
    });
});

// Resume Dropdown
const resumeBtn = document.getElementById('resumeBtn');
const resumeDropdown = document.getElementById('resumeDropdown');

resumeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    resumeDropdown.classList.toggle('show');
});

document.addEventListener('click', () => resumeDropdown.classList.remove('show'));

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
});
document.querySelectorAll('section').forEach(section => observer.observe(section));

// Form Submit
// Scroll Animation
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
// });
// document.querySelectorAll('section').forEach(section => observer.observe(section));

/* =========================
   CONTACT FORM — SEND EMAIL
   ========================= */
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();

  const formData = {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_zc1ggup", "template_sb5r54q", formData)
    .then(() => {
      const popup = document.getElementById("successPopup");
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 2500);
      contactForm.reset();
    })
    .catch((err) => {
      alert("❌ Message sending failed. Try again.");
      console.log(err);
    });
});


// Tech Expertise switching
// document.querySelectorAll('.category-card').forEach(card => {
//     card.addEventListener('click', () => {
//         document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
//         document.querySelectorAll('.tech-content').forEach(content => content.classList.remove('active'));

//         card.classList.add('active');
//         document.querySelector(`.tech-content[data-category="${card.dataset.category}"]`).classList.add('active');
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll(".category-card");
//     const sections = document.querySelectorAll(".tech-content");

//     cards.forEach(card => {
//         card.addEventListener("click", () => {
//             const category = card.getAttribute("data-category");

//             // update active card
//             cards.forEach(c => c.classList.remove("active"));
//             card.classList.add("active");

//             // animate section switch
//             sections.forEach(section => {
//                 if (section.getAttribute("data-category") === category) {
//                     section.classList.add("active");

//                     // restart animation
//                     const grid = section.querySelector(".tech-grid");
//                     grid.style.animation = "none";
//                     void grid.offsetWidth; // force reflow
//                     grid.style.animation = "";
//                 } else {
//                     section.classList.remove("active");
//                 }
//             });
//         });
//     });
// });

/* ======================================================
   TECH EXPERTISE — MODAL POPUP BEHAVIOR
   ====================================================== */

// modal DOM refs
const modal = document.getElementById("techModal");
const modalTitle = document.getElementById("modalTitle");
const modalItems = document.getElementById("modalItems");
const closeModalBtn = document.getElementById("closeModal");

// mapping content to show inside modal
const techData = {
  languages: [
    {name:"Python", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
    {name:"C++", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"}
  ],
  frameworks: [
    {name:"Flask", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
    {name:"REST APIs", logo:"https://cdn.worldvectorlogo.com/logos/rest.svg"},
    {name:"TensorFlow", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},
    {name:"Hugging Face", logo:"https://huggingface.co/front/assets/huggingface_logo-noborder.svg"},
    {name:"OpenCV", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"},
    {name:"Scikit-Learn", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"}
  ],
  devops: [
    {name:"Docker", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
    {name:"Kubernetes", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"},
    {name:"Git", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}
  ],
  "ai-ml": [
    {name:"Machine Learning", emoji:"⚙️"},
    {name:"Deep Learning", emoji:"🧬"},
    {name:"Reinforcement Learning", emoji:"♟️"},
    {name:"Generative AI", emoji:"✨"},
    {name:"LLMs", emoji:"🧠"},
    {name:"RAG", emoji:"📚"},
    {name:"Agentic AI", emoji:"🤖"}
  ],
  databases: [
    {name:"SQL", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {name:"MongoDB", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}
  ],
  cloud: [
    {name:"AWS", logo:"https://cdn.worldvectorlogo.com/logos/aws-2.svg"},
    {name:"Amazon Bedrock", emoji:"🧊"}
  ]
};

// open modal
function openModal(category){
  modalTitle.innerText = category.toUpperCase();
  modalItems.innerHTML = techData[category].map(item => {
    return item.logo
      ? `<div class="tech-item"><img class="tech-icon-img" src="${item.logo}" /><p>${item.name}</p></div>`
      : `<div class="tech-item"><span class="badge">${item.emoji}</span><p>${item.name}</p></div>`;
  }).join("");

  modal.style.display = "flex";
  document.body.classList.add("no-scroll");
}

// close modal
function closeModal(){
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}

// click → open modal
document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.category));
});

// close buttons
closeModalBtn.addEventListener("click", closeModal);

// click outside to close
modal.addEventListener("click", (e) => {
  if(e.target === modal) closeModal();
});

// close on Esc
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

/* Fade/Slide animation when entering view */
const presenceSection = document.getElementById("online-presence");
const presenceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      presenceSection.classList.add("visible");
    }
  });
});
presenceObserver.observe(presenceSection);


/* ======================================================
   PROJECTS — MODAL POPUP + SLIDESHOW
   ====================================================== */

const projectModal = document.getElementById("projectModal");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalDesc = document.getElementById("projectModalDesc");
const projectModalLinks = document.getElementById("projectModalLinks");
// const projectClose = document.getElementById("projectClose");
const projectCancel = document.getElementById("projectCancel");

// Project data map — edit GitHub & demo links here
const projectInfo = {
  HazeHeal: {
    title: "A GenAI Solution",
    desc: "An innovative image dehazing solution leveraging Generative AI to restore clarity in hazy and foggy images.The system analyzes atmospheric light and transmission maps to achieve superior dehazing results compared to traditional methods.",
    github: "https://github.com/Srajan-02/HazeHeal",
    demo: "#"
  },
   NodeAnalyzer: {
    title: "A JavaScript-powered dependency visualization tool",
    desc: "A browser-based tool that parses source code and instantly visualizes how files, modules, and functions connect. It generates interactive dependency graphs using D3.js, helping developers spot circular dependencies, tight coupling, and design issues early making refactoring faster, onboarding simpler, and code quality easier to maintain.",
    github: "https://github.com/Srajan-02/Code-Dependency-Visualizer",
    demo: "#"
  },

  SentView: {
    title: "Real Time Analysis System",
    desc: "It is a YouTube comments analysis tool with a fully responsive frontend. It visualizes trends in likes and categorizes comments by sentiment, offering valuable insights at a glance.",
    github: "https://github.com/Srajan-02/Comment-Analyzer",
    demo: "#"
  },
  SwiftNet: {
    title: "DL Based Features Visualizer ",
    desc: "Engineered an advanced deep learning pipeline model for skin cancer detection implementing TensorFlow and connecting backbone of UNet with MobileNet architecture to process the HAM10000 medical imaging dataset. Developed a custom autoencoder for dimensionality reduction and visualization techniques (PCA & t-SNE)",
    github: "https://github.com/Srajan-02/Advanced_Feature_Extractor",
    demo: "#"
  },
  Resume_Ranker: {
    title: "DL Based Features Visualizer ",
    desc: "A comprehensive AI system that analyzes resumes against job descriptions using advanced NLP techniques, provides intelligent rankings with explanations, and offers detailed analytics.",
    github: "https://github.com/Srajan-02/Resume-Ranker",
    demo: "#"
  },
  Predictor: {
    title: "ML Based Disease Predictor",
    desc: "Smart predictive solutions that empower you with insightful forecasts, ensuring a seamless experience in navigating your diabetes journey.",
    github: "https://github.com/Srajan-02/Diabetes-predictor",
    demo: "#"
  },
  Spammer: {
    title: "An ML Based model for Classification tasks",
    desc: "Combatting spam seamlessly, safeguarding your digital space. Our spam detection project ensures a secure online environment, preserving the authenticity of your brand's communication and engagement channels.",
    github: "https://github.com/Srajan-02/SMS-spam-detector",
    demo: "#"
  },



};

// click → open modal
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.project; // must match key in projectInfo

    const data = projectInfo[key];
    projectModalTitle.textContent = data.title;
    projectModalDesc.textContent = data.desc;
    projectModalLinks.innerHTML = `
      <a href="${data.github}" target="_blank" class="btn btn-primary" style="margin-right:8px;">Source Code</a>
      ${data.demo !== "#" ? `<a href="${data.demo}" target="_blank" class="btn btn-secondary">Live Demo</a>` : ""}
    `;

    projectModal.classList.add("show");
    document.body.classList.add("no-scroll");
  });
});

// close modal handlers
function closeProjectModal(){
  projectModal.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

// projectClose.addEventListener("click", closeProjectModal);
projectCancel.addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", (e)=>{
  if(e.target === projectModal) closeProjectModal();
});
document.addEventListener("keydown", e=>{
  if(e.key === "Escape") closeProjectModal();
});

/* Optional slider swipe support */
let projectIndex = 0;
const cards = [...document.querySelectorAll(".project-card")];
function nextProject(){
  projectIndex = (projectIndex + 1) % cards.length;
  cards[projectIndex].scrollIntoView({behavior:"smooth", inline:"center", block:"nearest"});
}
function prevProject(){
  projectIndex = (projectIndex - 1 + cards.length) % cards.length;
  cards[projectIndex].scrollIntoView({behavior:"smooth", inline:"center", block:"nearest"});
}

document.getElementById("nextProject")?.addEventListener("click", nextProject);
document.getElementById("prevProject")?.addEventListener("click", prevProject);


// PROJECT SLIDER CONTROL
const track = document.querySelector(".projects-track");
document.getElementById("nextProject").addEventListener("click", ()=> {
  track.scrollBy({ left: 350, behavior: "smooth" });
});
document.getElementById("prevProject").addEventListener("click", ()=> {
  track.scrollBy({ left: -350, behavior: "smooth" });
});
