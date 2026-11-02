/* ============================================================
   BIRTHDAY SURPRISE — MAIN SCRIPT
   ============================================================
   
   ★ CONFIGURATION ★
   Edit the object below to personalise everything.
   All content, photos, music, and messages are configurable here.
   ============================================================ */

const birthdayConfig = {
  /* ---- Names ---- */
  name: "Alex",
  nickname: "ally",

  /* ---- Opening screen ---- */
  openingLine1: "Hey alex.. ❤️",
  openingLine2: "I made something special for you.",

  /* ---- Birthday reveal ---- */
  birthdayTitle: "Happy 22nd Birthday, ! 🎂❤️",
  birthdaySubtitle:
    "Chapter 22 begins...\nand the world is a little more beautiful because you're in it.",

  /* ---- Photos (Memory Section) ----
     Add as many memories as you want. No limit!
     Each memory needs: src (image path), title, caption */
  photos: [
    {
      src: "assets/memory-01.jpg",
      title: "The One Who Outshone the Flowers",
      caption:
        "Standing in front of an entire wall of roses and somehow still being the prettiest thing in the frame. That effortless smile in crimson — no backdrop could ever compete.",
    },
    {
      src: "assets/memory-02.jpg",
      title: "Matching the Scenery 🌸",
      caption:
        "She probably didn't even plan it, but she matched perfectly with those pink leaves! Standing barefoot against the ancient temple carvings with that sweet, innocent little smile that just makes everything around her look even better.",
    },
    {
      src: "assets/memory-03.jpg",
      title: "Simply Radiant",
      caption:
        "Such a classic picture. The white and purple saree looks amazing on you, but honestly, it's that huge, completely genuine smile that makes me love this photo so much. Just you looking effortlessly happy.",
    },
    {
      src: "assets/memory-04.jpg",
      title: "Fascinated",
      caption:
        "I love how completely mesmerized you are here. You were just standing there staring up at the fish with this massive smile, totally ignoring your phone. You looked amazing in that blue dress, but your happy expression is definitely the best part.",
    },
    {
      src: "assets/memory-05.jpg",
      title: "Sun-kissed",
      caption:
        "Just you, a sweet smile, and perfect sunlight. Sometimes the simplest pictures are the most beautiful.",
    },
    {
      src: "assets/memory-06.jpg",
      title: "That Shy Smile",
      caption:
        "The pearl choker, the beautiful peach saree, the embroidered blouse—everything about this look is so elegant. But honestly, it's that sweet, shy little smile while looking down that makes this picture so perfect.",
    },
    {
      src: "assets/memory-07.jpg",
      title: "Crown of Hearts",
      caption:
        "Such a sweet, nostalgic picture! Sitting there in your uniform with that long braid and a little crown of floating hearts. You always had the absolute brightest smile, even on a regular school day.",
    },
    {
      src: "assets/memory-08.jpg",
      title: "Perfectly Candid",
      caption:
        "A red top, white flowers tucked in your hair, and the happiest smile. Just a beautifully sweet and candid moment.",
    },
    {
      src: "assets/memory-09.jpg",
      title: "Brighter than the Lights",
      caption:
        "Holding that little fairy light on a dark street, but it's your huge, happy smile that completely lights up the picture. The warm, magical glow of this whole moment is just so incredibly beautiful.",
    },
  ],

  /* ---- Qualities ---- */
  qualities: [
    {
      icon: "✨",
      title: "Your Smile",
      desc: "The kind that lights up every room you walk into.",
    },
    {
      icon: "🌸",
      title: "Your Kindness",
      desc: "You care about people in a way that's rare and beautiful.",
    },
    {
      icon: "😂",
      title: "Your Sense of Humor",
      desc: "Nobody makes me laugh the way you do.",
    },
    {
      icon: "💫",
      title: "Your Energy",
      desc: "Being around you feels like a breath of fresh air.",
    },
    {
      icon: "🌙",
      title: "Your Uniqueness",
      desc: "The little things that make you one of a kind.",
    },
    {
      icon: "💖",
      title: "Your Heart",
      desc: "Pure, genuine, and incredibly warm.",
    },
  ],

  /* ---- Quiz Questions ----
     Each question has a text, options array, and funResponse */
  quizQuestions: [
    {
      text: "Who is more likely to laugh at the worst possible moment?",
      options: [
        "Definitely me",
        "Obviously you 😂",
        "Both of us, let's be honest",
      ],
      funResponse: "We both know it's always us together 😂",
    },
    {
      text: "What's the one thing we can never say no to?",
      options: [
        "Food at midnight 🍕",
        "One more episode",
        "Making fun of each other",
      ],
      funResponse: "The correct answer is ALL of the above 🤭",
    },
    {
      text: "Complete the sentence: Our friendship is like…",
      options: [
        "A never-ending group chat",
        "A perfectly chaotic movie",
        "Something truly irreplaceable ❤️",
      ],
      funResponse: "All of these... but mainly the last one 💕",
    },
  ],

  /* ---- Personal Letter ----
     Use \n for line breaks */
  letterText: `🌸ಹುಟ್ಟುಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!🌸

💐 ನಿನ್ನ ಜೀವನ ಯಾವಾಗಲೂ ಸಂತೋಷ, ಪ್ರೀತಿ ಮತ್ತು ಯಶಸ್ಸಿನಿಂದ ತುಂಬಿರಲಿ. ✨

🌷 ನೀನು ಬಯಸುವ ಪ್ರತಿಯೊಂದು ಕನಸು ನನಸಾಗಲಿ, ನಿನ್ನ ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯೂ ಯಶಸ್ಸಿನತ್ತ ಸಾಗಲಿ. 💫

😊 ನಿನ್ನ ಮುಖದ ಮೇಲಿರುವ ಈ ಸುಂದರ ನಗು ಎಂದಿಗೂ ಮಾಸದಿರಲಿ… ಸದಾ ಹೀಗೆಯೇ ನಗುತ್ತಾ, ಖುಷಿಯಾಗಿರು! ❤️🥰

🙏🐘 ನಾನು ನಂಬಿರುವ ಆರಾಧ್ಯ ದೇವರಾದ ಶ್ರೀ ಗಣೇಶನು ನಿನಗೆ ಸದಾ ಉತ್ತಮ ಆರೋಗ್ಯ, ದೀರ್ಘಾಯಸ್ಸು, ಸಂತೋಷ ಹಾಗೂ ಯಶಸ್ಸನ್ನು ನೀಡಿ, ತನ್ನ ಆಶೀರ್ವಾದದಿಂದ ನಿನ್ನನ್ನು ಸದಾ ಕಾಪಾಡಲಿ ಎಂದು ನಾನು ಭಕ್ತಿಯಿಂದ ಬೇಡಿಕೊಳ್ಳುತ್ತೇನೆ. 🪷✨🙏

💖 ನಿನ್ನ ಜೀವನದ ಪ್ರತಿಯೊಂದು ದಿನವೂ ಇಂದಿನಂತೆಯೇ ವಿಶೇಷವಾಗಿರಲಿ ಮತ್ತು ಸುಂದರ ನೆನಪುಗಳಿಂದ ತುಂಬಿರಲಿ. 🌈🌸

🎉🎁 Once again, Happy Birthday! 🎂🥳💐

With lots of wishes and happiness,

💙 Your dearest friend, 😊✨✨`,

  /* ---- Final Gift ---- */
  finalMessage: "Happy Birthday,  ❤️",
  finalSub: "Here's to another year of beautiful memories.",
  finalPhoto: "assets/final-photo.jpg", // e.g. "assets/final-photo.jpg"

  /* ---- Music ----
     Place your mp3 in assets/ and set the path here */
  musicSrc: "assets/birthday-song.mp3",
};

/* ============================================================
   APPLICATION CODE — You generally don't need to edit below
   ============================================================ */

// ---- DOM References ----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  particleCanvas: $("#particleCanvas"),
  effectCanvas: $("#effectCanvas"),
  opening: $("#opening"),
  openBtn: $("#openSurpriseBtn"),
  mainContent: $("#mainContent"),
  musicBtn: $("#musicBtn"),
  bgMusic: $("#bgMusic"),
  makeWishBtn: $("#makeWishBtn"),
  galleryScroll: $("#galleryScroll"),
  qualitiesGrid: $("#qualitiesGrid"),
  quizCard: $("#quizCard"),
  quizQuestion: $("#quizQuestion"),
  quizOptions: $("#quizOptions"),
  quizComplete: $("#quizComplete"),
  progressFill: $("#progressFill"),
  progressText: $("#progressText"),
  letterContent: $("#letterContent"),
  letterCursor: $("#letterCursor"),
  giftIntro: $("#giftIntro"),
  giftBox: $("#giftBox"),
  openGiftBtn: $("#openGiftBtn"),
  giftRevealed: $("#giftRevealed"),
  finalPhoto: $("#finalPhoto"),
};

/* ============================================================
   PARTICLE SYSTEM (Background)
   ============================================================ */
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.animId = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle() {
    const types = ["star", "heart", "sparkle"];
    const type = types[Math.floor(Math.random() * types.length)];
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 3 + 1.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.15,
      opacity: Math.random() * 0.4 + 0.1,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      type,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.01,
    };
  }

  init(count = 45) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }
    this.animate();
  }

  drawHeart(ctx, x, y, size, opacity) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = `rgba(242, 160, 191, 1)`;
    ctx.beginPath();
    const s = size * 1.5;
    ctx.moveTo(x, y + s * 0.3);
    ctx.bezierCurveTo(x, y, x - s, y, x - s, y + s * 0.3);
    ctx.bezierCurveTo(x - s, y + s * 0.7, x, y + s, x, y + s * 1.2);
    ctx.bezierCurveTo(x, y + s, x + s, y + s * 0.7, x + s, y + s * 0.3);
    ctx.bezierCurveTo(x + s, y, x, y, x, y + s * 0.3);
    ctx.fill();
    ctx.restore();
  }

  drawStar(ctx, x, y, size, opacity, rotation) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = `rgba(255, 230, 128, 1)`;
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const method = i === 0 ? "moveTo" : "lineTo";
      ctx[method](Math.cos(angle) * size * 2, Math.sin(angle) * size * 2);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawSparkle(ctx, x, y, size, opacity) {
    ctx.save();
    ctx.globalAlpha = opacity;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(196, 175, 240, 0.5)");
    gradient.addColorStop(1, "rgba(196, 175, 240, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, size * 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  animate() {
    const { ctx, canvas, particles } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      p.opacity += p.opacityDir * 0.003;

      if (p.opacity >= 0.5) p.opacityDir = -1;
      if (p.opacity <= 0.05) p.opacityDir = 1;

      // Wrap around
      if (p.x < -20) p.x = canvas.width + 20;
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.y < -20) p.y = canvas.height + 20;
      if (p.y > canvas.height + 20) p.y = -20;

      if (p.type === "heart") this.drawHeart(ctx, p.x, p.y, p.size, p.opacity);
      else if (p.type === "star")
        this.drawStar(ctx, p.x, p.y, p.size, p.opacity, p.rotation);
      else this.drawSparkle(ctx, p.x, p.y, p.size, p.opacity);
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    cancelAnimationFrame(this.animId);
  }
}

/* ============================================================
   EFFECT SYSTEM (Confetti & Fireworks)
   ============================================================ */
class EffectSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.running = false;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  /* ---- Confetti ---- */
  launchConfetti(count = 180) {
    const colors = [
      "#f2a0bf",
      "#9b7fd4",
      "#ffd700",
      "#c4aff0",
      "#ffd1e0",
      "#ffe680",
      "#e0d4f5",
    ];
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height * 0.3;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      this.particles.push({
        x: cx + (Math.random() - 0.5) * 200,
        y: cy + (Math.random() - 0.5) * 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        w: Math.random() * 8 + 4,
        h: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.3,
        gravity: 0.12,
        opacity: 1,
        decay: Math.random() * 0.005 + 0.003,
        type: "confetti",
      });
    }
    if (!this.running) this.animate();
  }

  /* ---- Fireworks ---- */
  launchFireworks(count = 5) {
    const colors = ["#f2a0bf", "#ffd700", "#9b7fd4", "#c4aff0", "#ffe680"];

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const x =
          Math.random() * this.canvas.width * 0.6 + this.canvas.width * 0.2;
        const y =
          Math.random() * this.canvas.height * 0.3 + this.canvas.height * 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let j = 0; j < 60; j++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 4 + 1;
          this.particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: Math.random() * 2.5 + 1,
            color,
            opacity: 1,
            decay: Math.random() * 0.015 + 0.008,
            gravity: 0.04,
            type: "firework",
          });
        }
      }, i * 400);
    }
    if (!this.running) this.animate();
  }

  /* ---- Golden Burst ---- */
  goldenBurst(count = 250) {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;
    const colors = ["#ffd700", "#ffe680", "#ffcc00", "#f2a0bf", "#c4aff0"];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 10 + 2;
      this.particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
        decay: Math.random() * 0.008 + 0.004,
        gravity: 0.05,
        type: "firework",
      });
    }
    if (!this.running) this.animate();
  }

  animate() {
    this.running = true;
    const { ctx, canvas, particles } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.opacity -= p.decay;

      if (p.opacity <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;

      if (p.type === "confetti") {
        p.rotation += p.rotSpeed;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    if (particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.running = false;
    }
  }
}

/* ============================================================
   SCROLL ANIMATION OBSERVER
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  $$(".animate-in").forEach((el) => observer.observe(el));
}

function initQualityCardObserver() {
  const cards = $$(".quality-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(cards).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  cards.forEach((card) => observer.observe(card));
}

/* ============================================================
   POPULATE CONTENT FROM CONFIG
   ============================================================ */
function populateContent() {
  // Opening text is now hardcoded for complex typography in index.html

  // Birthday reveal title and subtitle are now hardcoded in HTML for complex cinematic typography

  // Final message
  $(".final-message").textContent = birthdayConfig.finalMessage;
  $(".final-sub").textContent = birthdayConfig.finalSub;

  // Music
  dom.bgMusic.src = birthdayConfig.musicSrc;

  // Photos
  birthdayConfig.photos.forEach((photo, index) => {
    const memNum = String(index + 1).padStart(2, "0");
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <div class="gallery-card-image">
        ${
          photo.src
            ? `<img src="${photo.src}" alt="${photo.title}" loading="lazy" />`
            : `<span>${photo.placeholder || "📸"}</span>`
        }
      </div>
      <div class="gallery-card-info">
        <p class="gallery-card-title">${photo.title}</p>
        <p class="gallery-card-caption">${photo.caption}</p>
      </div>
    `;
    dom.galleryScroll.appendChild(card);
  });

  // Qualities
  birthdayConfig.qualities.forEach((q) => {
    const card = document.createElement("div");
    card.className = "quality-card";
    card.innerHTML = `
      <span class="quality-icon">${q.icon}</span>
      <h3 class="quality-title">${q.title}</h3>
      <p class="quality-desc">${q.desc}</p>
    `;
    dom.qualitiesGrid.appendChild(card);
  });

  // Final photo
  if (birthdayConfig.finalPhoto) {
    dom.finalPhoto.classList.add("has-image");
    dom.finalPhoto.innerHTML = `<img src="${birthdayConfig.finalPhoto}" alt="Special moment" />`;
  }
}

/* ============================================================
   OPENING SCREEN
   ============================================================ */
function initOpening() {
  const tl = gsap.timeline({ delay: 1 }); // Wait for dark background (0-1s)

  // 2-3 seconds
  tl.to(".opening-line-small", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
  })
    // 3-4 seconds
    .to(
      ".opening-line-greeting",
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=0.5",
    )
    // 4-5 seconds
    .to(
      ".opening-line-message",
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.5",
    )
    // 5+ seconds
    .to(
      ".elegant-divider",
      {
        opacity: 1,
        duration: 1,
      },
      "-=0.8",
    )
    .to(
      "#openSurpriseBtn",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .to(
      ".opening-line-footer",
      {
        opacity: 1,
        duration: 1,
      },
      "-=0.4",
    );
}

function handleOpenSurprise() {
  dom.openBtn.addEventListener("click", () => {
    // Cinematic glowing transition
    const overlay = $("#transitionOverlay");
    if (overlay) overlay.classList.add("active");

    // Launch subtle effects
    effects.launchConfetti(200);
    effects.launchFireworks(4);

    // Wait for the flash to peak before switching sections (600ms)
    setTimeout(() => {
      dom.opening.classList.add("fade-out");

      // Wait for fade out to complete (600ms)
      setTimeout(() => {
        dom.opening.style.display = "none";
        dom.mainContent.classList.remove("hidden");
        document.body.style.overflow = "auto";
        if (overlay) overlay.classList.remove("active");

        // Note: scroll animations are initialized later in initMakeWish when restOfContent is unhidden.

        // ---- Luxury Reveal Sequence (0–4.5s) ----
        const tl = gsap.timeline({ delay: 0.3 });

        // 0–0.5s: Balloons fade in
        tl.to(".hero-balloon", {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        })

          // 1–1.5s: "Happy" appears
          .to(
            ".title-happy",
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            0.5,
          )

          // 1.5–2s: "22nd Birthday," appears
          .to(
            ".title-birthday",
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            1.0,
          )

          // 2–2.5s: "alex!" appears
          .to(
            ".title-name",
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            1.5,
          )

          // 2.5–3s: Ornamental divider fades in
          .to(
            ".ornamental-divider",
            {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            2.2,
          )

          // 3–3.5s: Chapter 22 subtitle
          .to(
            ".reveal-subtitle-container",
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            2.7,
          )

          // 4–4.5s: Make a Wish button
          .to(
            ".wish-btn-premium",
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              onComplete: () => {
                const btn = $(".wish-btn-premium");
                if (btn) {
                  btn.style.opacity = "1";
                  btn.style.transform = "translateY(0)";
                }
              },
            },
            3.8,
          );
      }, 600);
    }, 600);
  });
}

/* ============================================================
   MAKE A WISH (Blow out candles)
   ============================================================ */
function initMakeWish() {
  let wishMade = false;
  dom.makeWishBtn.addEventListener("click", () => {
    if (wishMade) return;
    wishMade = true;

    // After clicking Make a Wish, launch effects and show god blessing
    setTimeout(
      () => {
        effects.launchConfetti(250);
        effects.launchFireworks(6);

        // Show God Blessing Overlay
        const godOverlay = $("#godBlessingOverlay");
        if (godOverlay) {
          godOverlay.classList.add("visible");

          // Update button text ONLY after God image is fully visible (2s transition)
          setTimeout(() => {
            dom.makeWishBtn.innerHTML =
              "<span class='wish-btn-text'>Wish Made!</span> 🌟";
            dom.makeWishBtn.style.pointerEvents = "none";
            dom.makeWishBtn.style.opacity = "0.7";
          }, 2000);

          // Hide God Blessing after a few seconds and show the rest of the page
          setTimeout(() => {
            godOverlay.classList.remove("visible");

            const restOfContent = $("#restOfContent");
            if (restOfContent) {
              restOfContent.classList.remove("hidden");
              // Initialize scroll animations after content is visible
              initScrollAnimations();
              initQualityCardObserver();
              initLetterObserver();
            }
          }, 6000);
        }
      },
      200, // short delay before showing the effect
    );
  });
}

/* ============================================================
   QUIZ GAME
   ============================================================ */
function initQuiz() {
  let currentQ = 0;
  const questions = birthdayConfig.quizQuestions;
  const total = questions.length;

  function showQuestion(index) {
    const q = questions[index];
    dom.quizQuestion.textContent = q.text;
    dom.quizOptions.innerHTML = "";
    dom.progressFill.style.width = `${(index / total) * 100}%`;
    dom.progressText.textContent = `Question ${index + 1} of ${total}`;

    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleAnswer(btn, q));
      dom.quizOptions.appendChild(btn);
    });
  }

  function handleAnswer(btn, q) {
    // Mark selected
    $$(".quiz-option-btn").forEach((b) => (b.style.pointerEvents = "none"));
    btn.classList.add("selected");

    // Show fun response
    const response = document.createElement("p");
    response.style.cssText =
      "margin-top: 20px; color: var(--gold-soft); font-style: italic; opacity: 0; transition: opacity 0.5s;";
    response.textContent = q.funResponse;
    dom.quizCard.appendChild(response);
    setTimeout(() => (response.style.opacity = "1"), 50);

    // Next question after delay
    setTimeout(() => {
      currentQ++;
      if (currentQ < questions.length) {
        // Remove response
        response.remove();
        showQuestion(currentQ);
      } else {
        // Quiz complete
        dom.progressFill.style.width = "100%";
        dom.progressText.textContent = "Complete!";
        dom.quizCard.classList.add("hidden");
        dom.quizComplete.classList.remove("hidden");
        effects.launchConfetti(120);
      }
    }, 1800);
  }

  showQuestion(0);
}

/* ============================================================
   LETTER TYPING ANIMATION
   ============================================================ */
function initLetterObserver() {
  let letterStarted = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !letterStarted) {
        letterStarted = true;
        typeLetter();
        observer.disconnect();
      }
    },
    { threshold: 0.3 },
  );

  observer.observe(dom.letterContent);
}

function typeLetter() {
  const fullText = birthdayConfig.letterText;
  const firstNewlineIndex = fullText.indexOf("\n");

  const greeting = fullText.substring(0, firstNewlineIndex);
  const restOfText = fullText.substring(firstNewlineIndex); // Keeps the starting newline

  const textArray = Array.from(restOfText);
  let i = 0;

  dom.letterContent.innerHTML = `<div class="letter-greeting-premium">${greeting}</div><span id="letterBody"></span>`;
  const letterBody = document.getElementById("letterBody");
  dom.letterCursor.classList.add("active");

  // Wait 1.2s for the beautiful entrance animation of the greeting before typing begins
  setTimeout(() => {
    typeChar();
  }, 1200);

  function typeChar() {
    if (i < textArray.length) {
      let char = textArray[i];
      if (char === "\n") {
        letterBody.innerHTML += "<br/>";
      } else {
        letterBody.innerHTML += char;
      }
      i++;
      const delay = char === "\n" ? 120 : char === "." ? 80 : 28;
      setTimeout(typeChar, delay);
    } else {
      // Typing done — hide cursor after a moment
      setTimeout(() => {
        dom.letterCursor.classList.remove("active");

        // Wrap the signature in a span for beautiful styling
        const contentHtml = dom.letterContent.innerHTML;
        const signatureMatch = contentHtml.match(
          /(💙 ನಿನ್ನ ಪ್ರೀತಿಯ Friend, Ravi 😊✨)$/,
        );
        if (signatureMatch) {
          dom.letterContent.innerHTML = contentHtml.replace(
            signatureMatch[0],
            `<span class="letter-signature">${signatureMatch[0]}</span>`,
          );
        }
      }, 2000);
    }
  }

  typeChar();
}

/* ============================================================
   GIFT BOX
   ============================================================ */
function initGiftBox() {
  dom.openGiftBtn.addEventListener("click", () => {
    // Open the box
    dom.giftBox.classList.add("opened");

    // Golden burst
    setTimeout(() => {
      effects.goldenBurst(300);
      effects.launchFireworks(5);
    }, 600);

    // Show revealed content
    setTimeout(() => {
      dom.giftIntro.classList.add("hidden");
      dom.giftRevealed.classList.remove("hidden");

      gsap.from(".final-message", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(".final-sub", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });
      gsap.from(".final-photo-placeholder", {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      });

      // More confetti after a beat
      setTimeout(() => effects.launchConfetti(100), 1000);
    }, 1400);
  });
}

/* ============================================================
   FINAL GIFT BOX
   ============================================================ */
function initGiftBox() {
  const openGiftBtn = $("#openGiftBtn");
  const giftRevealed = $("#giftRevealed");
  const giftIntro = $("#giftIntro");
  const giftBox = $("#giftBox");

  if (!openGiftBtn || !giftRevealed || !giftIntro) return;

  const handleOpenGift = () => {
    // Prevent multiple clicks
    if (giftIntro.classList.contains("opening")) return;
    giftIntro.classList.add("opening");

    // Animate lid opening
    const lid = $(".gift-lid");
    if (lid) {
      gsap.to(lid, {
        y: -50,
        rotation: -10,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      });
    }

    // Hide intro, show revealed
    gsap.to(giftIntro, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      onComplete: () => {
        giftIntro.classList.add("hidden");
        giftRevealed.classList.remove("hidden");

        // Final photo
        const finalPhotoContainer = $("#finalPhoto");
        if (birthdayConfig.finalPhoto) {
          finalPhotoContainer.innerHTML = `<img src="${birthdayConfig.finalPhoto}" alt="Final Surprise" style="border-radius: 12px; width: auto; max-width: 100%; height: auto; max-height: 80vh; object-fit: contain;" />`;
        }

        gsap.fromTo(
          giftRevealed,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" },
        );

        effects.launchConfetti(400);
        effects.launchFireworks(10);
      },
    });
  };

  openGiftBtn.addEventListener("click", handleOpenGift);
  if (giftBox) giftBox.addEventListener("click", handleOpenGift);
}

/* ============================================================
   MUSIC CONTROLLER
   ============================================================ */
function initMusic() {
  let isPlaying = false;

  dom.musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      dom.bgMusic.pause();
      dom.musicBtn.classList.remove("playing");
    } else {
      dom.bgMusic.play().catch(() => {
        // Autoplay blocked — user will need to try again
        console.log("Audio playback requires user interaction first.");
      });
      dom.musicBtn.classList.add("playing");
    }
    isPlaying = !isPlaying;
  });
}

/* ============================================================
   INITIALISATION
   ============================================================ */

// Systems
const particles = new ParticleSystem(dom.particleCanvas);
const effects = new EffectSystem(dom.effectCanvas);

// Lock scroll initially
document.body.style.overflow = "hidden";

// Populate dynamic content
populateContent();

// Start particle background
particles.init(50);

// Init modules
initOpening();
handleOpenSurprise();
initMakeWish();
initQuiz();
initGiftBox();
initMusic();
