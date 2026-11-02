# Birthday Surprise Web

An interactive, animated birthday website built with HTML, CSS, JavaScript and GSAP. It is a customizable template that turns a birthday wish into a short, story-like web experience.

**Live demo:** https://ravi3005.github.io/birthday-surprise-web/

> This is a demo version. All names, photos and messages are placeholders.

## Features

- Animated opening screen with a smooth transition
- Birthday reveal section with layered text effects
- Photo gallery with captions
- Interactive quiz game
- Typing animation for the letter
- Final gift reveal with confetti and fireworks
- Responsive single-page layout

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- GSAP (animation library)
- Deployed with GitHub Pages

## Project Structure

```
.
├── assets/
│   ├── memory-01.jpg ... memory-09.jpg
│   ├── cake.png
│   └── final-photo.jpg
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## Customization

Most content lives in the `birthdayConfig` object in `script.js`:

- Name and opening lines
- Birthday message
- Gallery photos and captions
- Quiz questions and answers
- Letter text
- Final message and image

```javascript
const birthdayConfig = {
  name: "Alex",
  openingLine1: "Hey Alex..",
  openingLine2: "I made something special for you.",
  birthdayTitle: "Happy Birthday, Alex! 🎂",
  // ...
};
```

## Run Locally

Option 1: open `index.html` in a browser.

Option 2: start a local server.

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## What I Learned

- Building a responsive layout without a framework
- DOM manipulation and event handling in vanilla JavaScript
- Sequencing animations with GSAP
- Deploying a static site with GitHub Pages

## Author

Ravi Naik, [GitHub](https://github.com/Ravi3005)
