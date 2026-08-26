# Modena Lines

> **Interactive Opening Repertoire Trainer** — Master theoretical chess lines with structured active recall, visual ambiguity cues, move-by-move master annotations, progressive multi-mode training decks, and cross-device Firebase cloud synchronization.

[![Deploy to GitHub Pages](https://github.com/david-bazalduaa/modena-lines/actions/workflows/deploy.yml/badge.svg)](https://github.com/david-bazalduaa/modena-lines/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=flat&logo=github)](https://david-bazalduaa.github.io/modena-lines/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase_Auth_%26_Firestore-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Chess.js](https://img.shields.io/badge/Chess.js-0.10.3-6c757d?style=flat)](https://github.com/jhlywa/chess.js)
[![Vite](https://img.shields.io/badge/Bundler-Vite_6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## Overview

**Modena Lines** is a high-performance, web-based chess opening repertoire trainer designed to bridge the gap between passive memorization and active master-level recall. Built on a tactile **neumorphic design system**, Modena Lines presents opening theory through intuitive board visualization, dynamic branching prompts, graduated practice decks, and cloud-synced progress tracking.

Unlike static PGN viewers or repetitive drills, Modena Lines simulates authentic board tension using a **human-paced engine** with realistic opponent reply cadences and instant contextual feedback on alternate sidelines, strategic plans, and theoretical pawn breaks.

---

## Key Features

### 1. 3-Level Navigation Architecture
* **Level 1 — Main Catalog:** High-level overview of opening repertoires, tracking aggregate accuracy metrics, total lines mastered, and session drill counts.
* **Level 2 — Sub-Course Selection Hub:** Specialized module browser with interactive mini-board FEN position previews, line counters, and mastery indicators for each branch.
* **Level 3 — Interactive Study Board:** Focused training workstation featuring a full-width interactive chessboard, live move history notation, coach commentary panels, and tactile control decks.

### 2. Master Italian Game Repertoire (100+ Theoretical Lines)
Deep, move-by-move theoretical coverage with pedagogical annotations across four pillars of the Open Game:
* **Giuoco Piano & Center Attack (25 Variations):** Classical center dominance with `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4`, navigating the Greco Attack, Möller Attack, and solid modern setups.
* **The Evans Gambit (25 Variations):** Sharp initiative testing Black's defense after `4. b4!?`, covering the Evans Accepted, Compulsory Compromised Defense, Tartakower Attack, and Lasker Defense.
* **Two Knights Defense (25 Variations):** High-stakes tactical confrontations via `3... Nf6 4. Ng5`, including the Fried Liver Attack, Lolli Attack, Polerio Defense, Fritz/Ulvestad lines, and the fiery Traxler Counter-Attack.
* **Modern Pianissimo (25 Variations):** Strategic GM-standard quiet maneuvering with `4. d3`, exploring kingside pawn thrusts (`h3`/`g4`), knight rerouting (`Nb1-d2-f1-g3`), and central breaks (`d4`).

### 3. Progressive Multi-Mode Training Decks
* **Learn Mode (Discovery):** Move-by-move coaching with full commentary, threat breakdown, key ideas, and forward/backward replay controls.
* **Practice Mode (Active Recall):** Guided blind testing where the learner plays White's moves; wrong moves trigger instant undo, retry prompts, and tactical hints.
* **Drill Mode (Blind Streak Challenge):** Rapid-fire mastery mode without on-screen moves or hints. Tests consecutive accuracy and muscle memory across randomly sequenced repertoire variations (unlocked after learning at least 1 line).
* **Arena Mode (Master Survival):** Rigorous multi-line endurance test unlocked upon 100% completion of a sub-course repertoire.

### 4. Firebase Authentication & Cloud Progress Synchronization
* **Repository Pattern Architecture:** Unified `ProgressRepository` dynamically reads and writes to Cloud Firestore (`users/{userId}/progress/repertoire`) for logged-in users, while seamlessly falling back to `localStorage` for guests.
* **Local Progress Migration:** When a guest user signs in for the first time, all accumulated guest progress and accuracy stats are automatically merged into their cloud document without data loss.
* **Dual Auth Providers:** Google 1-Click Popup Sign-In and standard Email/Password authentication in an elegant neumorphic modal.
* **Header Profile Deck:** Reactive header component showing active user avatar/initials, display name, live sync badge, and sign-out dropdown.

### 5. Visual Ambiguity Engine
* On-board contextual highlights (`.square-hint`) instantly identify critical branching squares when multiple candidate moves look appealing.
* Dynamic piece target and destination rings provide smooth guidance without spoiling active calculation.

### 6. Human-Paced Move & Animation Engine
* Native embedded SVG vector pieces rendered with zero external asset latency and crisp resolution across all device pixel densities.
* Configurable realistic opponent response delays (300–400ms) that emulate live opponent play.
* Full support for both **drag-and-drop** and intuitive **click-to-move** interaction.

---

## Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Structure** | Semantic HTML5 with accessible ARIA landmarks |
| **Styling** | Modular Vanilla CSS (Custom Design System, Dark Neumorphic Aesthetic, Glassmorphism, CSS Custom Properties) |
| **Logic & State** | Vanilla Modern JavaScript (ES Modules, Repository Pattern, Reactive Event Emitters) |
| **Cloud & Auth** | Google Firebase v10+ (Firebase Auth, Cloud Firestore) with LocalStorage fallback |
| **Chess Engine** | [chess.js (v0.10.3)](https://github.com/jhlywa/chess.js) + [chessboard.js (v1.0.0)](https://chessboardjs.com/) with native SVG piece encoding |
| **Build & Dev Tooling** | [Vite 6](https://vitejs.dev/) with relative path asset pipeline (`base: './'`) |
| **CI/CD & Hosting** | GitHub Actions (`.github/workflows/deploy.yml`) + GitHub Pages |

---

## Getting Started & Local Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18.x or higher)
* `npm` (version 9.x or higher)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/david-bazalduaa/modena-lines.git
   cd modena-lines
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase Environment (Optional for Cloud Sync):**
   Copy `.env.example` to `.env` and provide your Firebase project credentials:
   ```bash
   cp .env.example .env
   ```
   *Note: If no Firebase keys are provided, Modena Lines continues to function in offline LocalStorage Guest Mode.*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *The development server will spin up locally at `http://localhost:3000` with instant Hot Module Replacement (HMR).*

5. **Build production bundle for local inspection:**
   ```bash
   npm run build
   npm run preview
   ```

---

## Deployment to GitHub Pages

### Option A: Automated Deployment via GitHub Actions (Recommended)

This repository includes a preconfigured GitHub Actions workflow located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push any commit to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: configure GitHub Pages deployment"
   git push origin main
   ```
4. The workflow will automatically install dependencies, execute `npm run build`, and deploy the production artifacts from `dist/` directly to GitHub Pages.

### Option B: Manual Deployment via `gh-pages`

You can also deploy manually to a `gh-pages` branch from your local terminal:

```bash
npm run deploy
```

---

## Project Structure

```text
modena-lines/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated CI/CD deployment workflow
├── src/
│   ├── config/
│   │   ├── firebase-config.js    # Firebase environment loaders & validator
│   │   └── settings.js           # App configuration & speed settings
│   ├── data/
│   │   ├── courses.js            # Repertoire course metadata & registry
│   │   └── lines/                # Variation move trees and master annotations
│   │       ├── italian-giuoco.js
│   │       ├── italian-evans.js
│   │       ├── italian-two-knights.js
│   │       └── italian-pianissimo.js
│   ├── engine/
│   │   ├── board-renderer.js     # Vector SVG chess piece generator & board styling
│   │   └── chess-logic.js        # Rule validation & FEN state utilities
│   ├── services/
│   │   ├── auth-service.js       # Firebase Auth (Google 1-Click + Email/Password)
│   │   └── firebase.js           # Firebase modular app, auth & db initialization
│   ├── storage/
│   │   ├── progress-repository.js# Repository pattern for Firestore & LocalStorage
│   │   └── user-progress.js      # Progress engine & reactive subscriber layer
│   ├── ui/
│   │   ├── auth-modal.js         # Neumorphic Auth Modal & Header User Profile
│   │   ├── dashboard-view.js     # Level 1 Catalog view controller
│   │   ├── subcourse-view.js     # Level 2 Sub-Course hub controller
│   │   ├── mode-selector.js      # Training deck modes controller (Learn/Practice/Drill/Arena)
│   │   └── trainer-view.js       # Level 3 Interactive study board & coach engine
│   └── main.js                   # Application router & DOM initializer
├── styles/
│   ├── variables.css             # Color palette, spacing, & CSS tokens
│   ├── main.css                  # Neumorphic layouts, headers, and hero stats
│   ├── components.css            # Cards, badges, buttons, modal & auth styling
│   └── board.css                 # Chessboard styling, hint squares, & piece animations
├── .env.example                  # Firebase environment keys template
├── .gitignore                    # Git exclusions
├── index.html                    # Single-page application entry point
├── package.json                  # NPM metadata, scripts, and dependencies
├── vite.config.js                # Vite configuration with relative base path
└── README.md                     # Project documentation
```

---

## License

This project is open-source and distributed under the terms of the [MIT License](LICENSE).