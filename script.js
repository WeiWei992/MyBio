// ===== Your projects =====
// Add, remove or edit projects here. Each one becomes a folder on the Projects page.
// color: pick one of the palette colours (hex code).
// link: put "" if you don't have a link.
// media (optional): images and videos shown in the popup, first one shows first.
//   Put the files in a folder such as media/rmconvert/, then list them like this:
//   media: [
//     "media/rmconvert/home.webp",          // image: .webp .png .jpg .gif
//     "media/rmconvert/demo.mp4",           // video: .mp4 or .webm
//     "https://youtu.be/VIDEO_ID",          // YouTube link
//   ],
const projects = [
  {
    name: "RMConvert",
    color: "#A5846C",
    year: "2026",
    type: "Android App",
    description:
      "A Malaysian Ringgit currency converter using Bank Negara Malaysia's official " +
      "daily exchange rates from the BNM Open API. It also includes a tourist tax " +
      "refund calculator.",
    tech: ["Kotlin", "Jetpack Compose", "BNM API"],
    link: "https://github.com/WeiWei992/RMConvert",
    media: ["media/rmconvert/demo.mp4"],
  },
  {
    name: "Smart Grocery App",
    color: "#FD85AE",
    year: "2026",
    type: "Group Project · Flutter App",
    team: "TARUMT-Cuties",
    description:
      "A mobile grocery app built with Flutter that uses the government's PriceCatcher " +
      "price database to help shoppers check grocery prices. Users sign in with " +
      "Firebase Authentication.",
    tech: ["Flutter", "Dart", "Firebase", "SQLite"],
    link: "https://github.com/elishadowww/Government-Smart-Grocery-App",
    media: [
      "media/smart-grocery/01-welcome.webp",
      "media/smart-grocery/02-start.webp",
      "media/smart-grocery/03-login.webp",
      "media/smart-grocery/04-register.webp",
      "media/smart-grocery/05-forgot-password.webp",
      "media/smart-grocery/06-dashboard.webp",
      "media/smart-grocery/07-menu.webp",
      "media/smart-grocery/08-search.webp",
      "media/smart-grocery/09-filter.webp",
      "media/smart-grocery/10-product.webp",
      "media/smart-grocery/11-shopping-list.webp",
      "media/smart-grocery/12-nearby-stores.webp",
      "media/smart-grocery/13-price-trends.webp",
      "media/smart-grocery/14-budget.webp",
      "media/smart-grocery/15-notifications.webp",
      "media/smart-grocery/16-saved.webp",
      "media/smart-grocery/17-profile.webp",
      "media/smart-grocery/18-language.webp",
      "media/smart-grocery/19-about.webp",
      "media/smart-grocery/20-guest-menu.webp",
      "media/smart-grocery/21-login-required.webp",
    ],
  },
  {
    name: "GymSense",
    color: "#B19581",
    year: "2026",
    type: "Group Project · IoT (BAIT2123)",
    team: "TARUMT-Cuties",
    description:
      "An IoT gym system. An ESP32 with an MPU6050 motion sensor and an OLED screen " +
      "tracks workout movements and sends the data over Wi-Fi to a Node.js server, " +
      "which shows it on a web dashboard.",
    tech: ["ESP32", "Arduino", "Node.js", "Express", "JavaScript"],
    link: "https://github.com/TARUMT-Cuties/BAIT2123-Internet-of-Things-GymSense-Gym-System",
    media: ["media/gymsense/demo.mp4"],
  },
  {
    name: "Student Performance AI",
    color: "#BD1252",
    year: "2026",
    type: "Group Project · AI (BMCS2203)",
    team: "TARUMT-Cuties",
    description:
      "A machine learning project that analyses student data to predict academic performance.",
    tech: ["Python", "Machine Learning"],
    link: "", // private repo
  },
  {
    name: "Attendify",
    color: "#F4AA91",
    year: "2026",
    type: "Group Project · Web & Mobile (BMIT2023)",
    team: "TARUMT-Cuties",
    description: "An attendance system built for the Web and Mobile Systems course.",
    tech: ["HTML"],
    link: "", // private repo
  },
  {
    name: "GadgetLoop",
    color: "#E49E91",
    year: "2025",
    type: "Group Project · E-commerce Website",
    team: "Wei Wei & Elisha",
    description:
      "An online gadget store. Members can browse products, use quick view, add items " +
      "to a cart, and sign up with email verification and password reset. Admins manage " +
      "products, orders and members, with sales charts on the dashboard.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "PHPMailer", "XAMPP"],
    link: "https://github.com/elishadowww/GadjetLoop",
    media: [
      "media/gadgetloop/1-home.webp",
      "media/gadgetloop/2-products.webp",
      "media/gadgetloop/3-about.webp",
      "media/gadgetloop/4-contact.webp",
    ],
  },
  {
    name: "MindfulFlow",
    color: "#F9A0B7",
    year: "2026",
    type: "Web App",
    description:
      "A gamified productivity and wellness app. Each 25-minute focus session grows a " +
      "seed into a tree, while reminding you to stretch, blink and drink water so you " +
      "stay focused without burning out. Supports UN SDG 3 (Good Health and Well-being).",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    link: "https://github.com/WeiWei992/MindfulFlow",
    media: ["https://www.youtube.com/watch?v=2rgfBJXVVc8"],
  },
  {
    name: "Idol Camera",
    color: "#FD85AE",
    year: "2026",
    type: "Web App",
    description:
      "Take photos with your favourite idol! Upload an idol image, drag and resize it " +
      "over your live camera feed, then capture, save or share the photo. Everything " +
      "is processed on your device, so no images are uploaded.",
    tech: ["HTML", "CSS", "JavaScript", "Camera API"],
    link: "https://github.com/WeiWei992/idol-camera",
    media: [
      "media/idol-camera/1-start.webp",
      "media/idol-camera/2-countdown.webp",
      "media/idol-camera/3-result.webp",
    ],
  },
  {
    name: "Taskify",
    color: "#B19581",
    year: "2026",
    type: "Python Tool",
    description:
      "An inbox-to-task tool for students. It reads university email announcements, " +
      "filters them by custom keywords, flags urgent items like exams, and exports a " +
      "to-do dashboard (todo.txt) and a spreadsheet (todo.csv).",
    tech: ["Python", "CSV"],
    link: "https://github.com/WeiWei992/Taskify",
  },
  {
    name: "Kohi Coffee",
    color: "#F4AA91",
    year: "2026",
    type: "Website",
    description:
      "A responsive e-commerce website for Kohi Coffee Shop with real-time cart " +
      "management and a simple checkout, designed to be mobile-friendly on all devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/WeiWei992/Kohi-Coffee-",
    media: ["media/kohi-coffee/demo.mp4"],
  },
  {
    name: "Sabah Stay",
    color: "#E49E91",
    year: "2025",
    type: "Mobile App",
    description: "A hotel booking app for stays in Sabah.",
    tech: [],
    link: "https://github.com/TARUMT-Cuties/AMIT2053-Mobile-Application-and-Development-Sabah-Stay-Hotel-System",
  },
  {
    name: "May Salon",
    color: "#BD1252",
    year: "2025",
    type: "Web Application",
    description:
      "A salon booking system. Customers choose a branch, service, hairstylist and time " +
      "slot, manage their bookings and leave ratings. Admins manage bookings, stylist " +
      "schedules and services, with reports on customer trends and stylist performance.",
    tech: [],
    link: "https://github.com/WeiWei992/May-Salon-Web-Application",
  },
  {
    name: "HS Restaurant",
    color: "#F1C0B0",
    year: "2025",
    type: "C++ Program",
    description:
      "A restaurant order processing system that takes meal orders, calculates " +
      "subtotal, sales tax, total and change, and generates sales reports.",
    tech: ["C++", "Visual Studio 2019"],
    link: "https://github.com/WeiWei992/HS-Restaurant",
    media: ["media/hs-restaurant/demo.mp4"],
  },
  {
    name: "MyBio Website",
    color: "#714B34",
    year: "2026",
    type: "Website",
    description:
      "A personal bio website, designed like a paper folder. It has a cover page, " +
      "an about page and a projects page.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "",
  },
];

// ===== Your tech stack =====
// Each group becomes one row on the About Me page.
// icon: file path from the Devicon set (devicon.dev), or "si:name" for Simple Icons (simpleicons.org).
const techStack = [
  {
    group: "Languages",
    items: [
      { name: "HTML5", icon: "html5/html5-original" },
      { name: "CSS", icon: "css3/css3-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "C++", icon: "cplusplus/cplusplus-original" },
      { name: "C#", icon: "csharp/csharp-original" },
      { name: "Java", icon: "java/java-original" },
      { name: "PHP", icon: "php/php-original" },
      { name: "Kotlin", icon: "kotlin/kotlin-original" },
      { name: "Python", icon: "python/python-original" },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "Flutter", icon: "flutter/flutter-original" },
      { name: "Node.js", icon: "nodejs/nodejs-original" },
    ],
  },
  {
    group: "Database & Cloud",
    items: [
      { name: "MySQL", icon: "mysql/mysql-original" },
      { name: "Firebase", icon: "firebase/firebase-original" },
      { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark" },
      { name: "Google Cloud", icon: "googlecloud/googlecloud-original" },
    ],
  },
  {
    group: "Web Builders",
    items: [
      { name: "WordPress", icon: "wordpress/wordpress-plain" },
      { name: "Wix", icon: "si:wix" },
      { name: "Elementor", icon: "si:elementor" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original" },
      { name: "Figma", icon: "figma/figma-original" },
      { name: "Android Studio", icon: "androidstudio/androidstudio-original" },
      { name: "VS Code", icon: "vscode/vscode-original" },
      { name: "Visual Studio", icon: "visualstudio/visualstudio-plain" },
      { name: "Arduino", icon: "arduino/arduino-original" },
    ],
  },
];

const DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/";
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/";
const stackList = document.getElementById("stack-list");

techStack.forEach((row) => {
  const rowEl = document.createElement("div");
  rowEl.className = "stack-row";

  const label = document.createElement("span");
  label.className = "stack-label";
  label.textContent = row.group;
  rowEl.appendChild(label);

  const items = document.createElement("div");
  items.className = "stack-items";
  row.items.forEach((item) => {
    const src = item.icon.startsWith("si:")
      ? SIMPLE_ICONS + item.icon.slice(3) + ".svg"
      : DEVICON + item.icon + ".svg";
    const tag = document.createElement("span");
    tag.className = "stack-item";
    tag.innerHTML = `<img src="${src}" alt="" loading="lazy"><span></span>`;
    tag.querySelector("span").textContent = item.name;
    items.appendChild(tag);
  });
  rowEl.appendChild(items);
  stackList.appendChild(rowEl);
});

// ===== Switch between pages (folder tabs) =====
const tabs = document.querySelectorAll(".tab");
const sheets = document.querySelectorAll(".sheet");
const pageOrder = ["cover", "about", "projects"];

function showPage(id) {
  if (!pageOrder.includes(id)) id = "cover";

  tabs.forEach((tab) => {
    const active = tab.dataset.target === id;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active);
  });
  sheets.forEach((sheet) => sheet.classList.toggle("active", sheet.id === id));

  try {
    history.replaceState(null, "", "#" + id);
  } catch (e) {}
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabs.forEach((tab) => tab.addEventListener("click", () => showPage(tab.dataset.target)));
document.querySelectorAll("[data-goto]").forEach((btn) =>
  btn.addEventListener("click", () => showPage(btn.dataset.goto))
);

// Left / right arrow keys flip pages
document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("open")) return;
  const current = pageOrder.indexOf(document.querySelector(".sheet.active").id);
  if (e.key === "ArrowRight" && current < pageOrder.length - 1) showPage(pageOrder[current + 1]);
  if (e.key === "ArrowLeft" && current > 0) showPage(pageOrder[current - 1]);
});

// ===== Build the project folders =====
const grid = document.getElementById("project-grid");

projects.forEach((project, index) => {
  const btn = document.createElement("button");
  btn.className = "project";
  btn.style.setProperty("--c", project.color);
  btn.innerHTML = `
    <span class="folder-icon">
      <span class="folder-back"></span>
      <span class="folder-front"></span>
    </span>
    <span class="project-name"></span>`;
  btn.querySelector(".project-name").textContent = project.name;
  btn.addEventListener("click", () => openProject(index));
  grid.appendChild(btn);
});

// ===== Project popup =====
const modal = document.getElementById("modal");
const modalCard = modal.querySelector(".modal-card");
const modalLink = document.getElementById("modal-link");
const mediaBox = document.getElementById("modal-media");
const mediaViewer = document.getElementById("media-viewer");
const mediaThumbs = document.getElementById("media-thumbs");
let currentMedia = [];
let currentMediaIndex = 0;

function getYouTubeId(src) {
  const match = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function isVideoFile(src) {
  return /\.(mp4|webm)$/i.test(src);
}

// Portrait items (like phone screenshots) get a taller viewer so they aren't tiny
function fitTallMedia(element, width, height) {
  if (!mediaViewer.contains(element)) return;
  mediaViewer.classList.toggle("is-tall", height > width);
  // Very long images (full-page screenshots) scroll inside the viewer instead of shrinking
  mediaViewer.classList.toggle("is-long", element.tagName === "IMG" && height > width * 2);
  mediaViewer.scrollTop = 0;
}

// Show one image or video in the big viewer
function showMedia(index) {
  currentMediaIndex = index;
  const src = currentMedia[index];
  const youTubeId = getYouTubeId(src);
  mediaViewer.innerHTML = ""; // also stops whatever was playing
  mediaViewer.classList.remove("is-tall", "is-long");

  if (youTubeId) {
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${youTubeId}`;
    frame.title = `${modalCard.dataset.name} video`;
    frame.allow = "fullscreen; picture-in-picture; encrypted-media";
    mediaViewer.appendChild(frame);
  } else if (isVideoFile(src)) {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.addEventListener("loadedmetadata", () => fitTallMedia(video, video.videoWidth, video.videoHeight));
    mediaViewer.appendChild(video);
  } else {
    // Click an image to open it full size in a new tab
    const link = document.createElement("a");
    link.href = src;
    link.target = "_blank";
    link.rel = "noopener";
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${modalCard.dataset.name}, image ${index + 1} of ${currentMedia.length}`;
    img.addEventListener("load", () => fitTallMedia(img, img.naturalWidth, img.naturalHeight));
    link.appendChild(img);
    mediaViewer.appendChild(link);
  }

  [...mediaThumbs.children].forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
    thumb.setAttribute("aria-current", i === index);
  });
}

function buildMedia(media) {
  currentMedia = media;
  mediaThumbs.innerHTML = "";
  mediaBox.style.display = media.length ? "grid" : "none";
  modalCard.classList.toggle("has-media", media.length > 0);
  if (!media.length) {
    mediaViewer.innerHTML = "";
    return;
  }

  // Small previews to switch between items (only needed with 2 or more)
  if (media.length > 1) {
    media.forEach((src, i) => {
      const thumb = document.createElement("button");
      thumb.className = "media-thumb";
      thumb.setAttribute("aria-label", `Show item ${i + 1} of ${media.length}`);
      const youTubeId = getYouTubeId(src);
      if (youTubeId) {
        thumb.classList.add("is-video");
        thumb.innerHTML = `<img src="https://img.youtube.com/vi/${youTubeId}/mqdefault.jpg" alt="" loading="lazy">`;
      } else if (isVideoFile(src)) {
        thumb.classList.add("is-video");
        const preview = document.createElement("video");
        preview.src = src + "#t=0.1"; // show a frame instead of a blank box
        preview.muted = true;
        preview.preload = "metadata";
        thumb.appendChild(preview);
      } else {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.loading = "lazy";
        thumb.appendChild(img);
      }
      thumb.addEventListener("click", () => showMedia(i));
      mediaThumbs.appendChild(thumb);
    });
  }

  showMedia(0);
}

function openProject(index) {
  const p = projects[index];
  modalCard.style.setProperty("--c", p.color);
  document.getElementById("modal-title").textContent = p.name;
  document.getElementById("modal-meta").textContent =
    `${p.type} · ${p.year}` + (p.team ? ` · Team: ${p.team}` : "");
  document.getElementById("modal-desc").textContent = p.description;

  modalCard.dataset.name = p.name;
  buildMedia(p.media || []);
  modalCard.scrollTop = 0;

  const techBox = document.getElementById("modal-tech");
  techBox.innerHTML = "";
  p.tech.forEach((t) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = t;
    techBox.appendChild(chip);
  });

  modalLink.style.display = p.link ? "inline-block" : "none";
  modalLink.href = p.link || "#";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector(".modal-close").focus();
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  mediaViewer.innerHTML = ""; // stop any video that is still playing
}

modal.querySelector(".modal-close").addEventListener("click", closeProject);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeProject(); // click outside the card
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProject();

  // Left / right arrow keys flip through a project's images and videos
  if (!modal.classList.contains("open") || currentMedia.length < 2) return;
  if (e.target.tagName === "VIDEO") return; // arrow keys skip through the video here
  const last = currentMedia.length - 1;
  if (e.key === "ArrowRight") showMedia(currentMediaIndex === last ? 0 : currentMediaIndex + 1);
  if (e.key === "ArrowLeft") showMedia(currentMediaIndex === 0 ? last : currentMediaIndex - 1);
});

// ===== Start =====
showPage(location.hash.replace("#", ""));
