# Birthday Surprise Web

An interactive, animated birthday surprise website built with plain HTML, CSS, and JavaScript. It features a cinematic opening screen, personalized messages, memory gallery, quiz, handwritten-style letter, music toggle, and a final gift reveal.

## Overview

This project is a customizable birthday card/website designed to feel like a mini digital surprise experience. It is ideal for celebrating a loved one with a personalized message, favorite memories, and playful interactive moments.

## Features

- Elegant opening surprise screen with animated transition
- Birthday reveal section with layered text and effects
- Memory gallery with custom photo captions
- Personal qualities section highlighting what makes the person special
- Interactive quiz game
- Typing animation for a heartfelt letter
- Final gift reveal with confetti and fireworks
- Background music toggle
- Responsive single-page design

## Tech Stack

- HTML
- CSS
- JavaScript
- GSAP (animation library)

## Project Structure

```text
.
├── assets/
│   ├── memory-01.jpg
│   ├── memory-02.jpg
│   ├── ...
│   ├── birthday-song.mp3
│   └── final-photo.jpg
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## Customization

Most of the content is configured in the `birthdayConfig` object inside `script.js`.

You can personalize:

- Name and nickname
- Opening lines
- Birthday message
- Photo captions and gallery items
- Personal qualities
- Quiz questions and answers
- Letter text
- Final message and image
- Music file path

Example:

```javascript
const birthdayConfig = {
  name: "Alex",
  nickname: "ally",
  openingLine1: "Hey alex.. ❤️",
  openingLine2: "I made something special for you.",
  birthdayTitle: "Happy 22nd Birthday, ! 🎂❤️",
  // ...
};
```

## Running the Project

Because this is a static front-end project, you can run it in either of these ways:

### Option 1: Open directly in a browser

- Open `index.html` in your browser.

### Option 2: Use a local web server

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- The app expects image and music files in the `assets/` folder.
- Some browsers block autoplay audio until the user interacts with the page.
- This project is designed primarily for local use or simple static hosting.

## License

This project is provided as-is for personal and educational use.

## Credits

The design, animations, and experience were built for a personalized birthday surprise experience.
