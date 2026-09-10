# Modena Lines

> **Interactive Chess Opening Repertoire Trainer** — Master theoretical chess lines with structured active recall, visual ambiguity cues, move-by-move master annotations, progressive multi-mode training decks, and cross-device Firebase cloud synchronization.

[![Deploy to GitHub Pages](https://github.com/david-bazalduaa/modena-lines/actions/workflows/deploy.yml/badge.svg)](https://github.com/david-bazalduaa/modena-lines/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=flat&logo=github)](https://david-bazalduaa.github.io/modena-lines/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Repertoires](https://img.shields.io/badge/Repertoires-18_Master_Courses-8A2BE2?style=flat)](src/data/courses.js)
[![Catalog](https://img.shields.io/badge/Catalog-898_Lines_Validated-success?style=flat)](scripts/validate-repertoires.js)
[![Chessground](https://img.shields.io/badge/Board-Chessground_9.2-34d399?style=flat)](https://github.com/lichess-org/chessground)
[![Chess.js](https://img.shields.io/badge/Chess.js-0.10.3-6c757d?style=flat)](https://github.com/jhlywa/chess.js)
[![Firebase](https://img.shields.io/badge/Firebase_Auth_%26_Firestore-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Bundler-Vite_6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## Overview

**Modena Lines** is a high-performance, web-based chess opening repertoire trainer designed to bridge the gap between passive memorization and active tournament-level recall. Built on an elegant **dark neumorphic design system**, Modena Lines presents opening theory through intuitive board visualization, dynamic branching prompts, graduated practice decks, and cloud-synced progress tracking.

The platform hosts a tournament-grade catalog of **898 fully validated master lines** spanning **18 foundational opening repertoires** across both White and Black perspectives.

Unlike static PGN viewers or repetitive flashcards, Modena Lines simulates authentic board tension using a **human-paced engine** with realistic opponent reply cadences and instant contextual feedback on alternate sidelines, strategic plans, and tactical blunder refutations.

---

## Pedagogical Philosophy: The 80/20 Repertoire Rule

Rather than forcing students to memorize dry Grandmaster endgames or symmetrical drawish sidelines, Modena Lines is calibrated for **practical club and competitive mastery (800–1800 Elo)**:

* **80% Tactical Blunder Punishments (~42 lines/course):** Punish White or Black's overextended pawn storms, unsound early queen sorties, greedy gambit grabs, neglected king safety, and loose minor pieces using concrete tactical motifs (forks, pins, skewers, decoys, deflections, removal of the guard, and back-rank mates).
* **20% Anchor Mainlines (~10 lines/course):** Solid theoretical backbones establishing thematic pawn structures, ideal piece coordination, and key strategic breaks.

---

## Opening Repertoire Catalog (898 Validated Lines)

### White Repertoires (9 Courses — 436 Lines)

| Opening Repertoire | Code ID | Subcourses | Total Lines | Theoretical Scope |
| :--- | :--- | :---: | :---: | :--- |
| **Italian Game** | `italian-game` | 4 | **52** | Giuoco Piano & Center Attack, Evans Gambit, Two Knights Defense, Modern Pianissimo |
| **London System** | `london-system` | 4 | **52** | Classical Mainline, King's Indian & Grünfeld Setups, Queen's Indian & Benoni, Sharp Jobava & Steinitz |
| **Ruy Lopez (Spanish)** | `ruy-lopez` | 5 | **50** | Berlin & Open Defense, Closed Mainlines, Marshall & Anti-Marshall, Sidelines & Gambits, Exchange & Modern |
| **Queen's Gambit** | `queens-gambit` | 2 | **52** | Classical Mainlines (QGD, Slav, Catalan setups), Tactical Blunder Punishments |
| **Open Sicilian** | `open-sicilian` | 2 | **52** | Mainline Open Sicilian assaults vs Najdorf, Dragon, Sveshnikov, Classical & Scheveningen |
| **English Opening** | `english-opening` | 2 | **52** | Symmetrical English, Reversed Sicilian, Tactical Wing Blunder Exploitation |
| **Scotch Game** | `scotch-game` | 2 | **52** | Classical 4...Bc5 & Mieses 4...Nf6 Mainlines, Early Central Punishments |
| **Catalan Opening** | `catalan-opening` | 2 | **52** | Open & Closed Catalan setups, Queenside Pinning & Long-Diagonal Domination |
| **The Alien Gambit** | `alien-gambit` | 1 | **12** | Hyper-aggressive 1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nf6 5.Ng5 h6 6.Nxf7!? King Hunt |

### Black Defense Systems (9 Courses — 462 Lines)

| Opening Defense | Code ID | Subcourses | Total Lines | Tactical Themes & Counter-Attacks |
| :--- | :--- | :---: | :---: | :--- |
| **Sicilian Defense** | `sicilian-defense` | 4 | **52** | Najdorf Counter-Attacks, Dragon & Scheveningen, Sveshnikov & Classical, Anti-Sicilian Punishments (Alapin, Grand Prix, Bowdler) |
| **Caro-Kann Defense** | `caro-kann` | 5 | **58** | Classical Capablanca, Advance Variation Demolitions, Modern & Korchnoi, Two Knights & Fantasy, Panov-Botvinnik Attack |
| **Pirc Defense** | `pirc-defense` | 5 | **50** | Classical System Counter-Strikes, Austrian Attack Refutations, 150 Attack, Fianchetto System, Aggressive Sidelines |
| **French Defense** | `french-defense` | 4 | **52** | Advance Overreach Demolition (`...c5`/`...Qb6`), Winawer & McCutcheon Pins, Classical & Steinitz Breaks, Tarrasch & Exchange Counterplay |
| **King's Indian Defense** | `kings-indian-defense` | 4 | **52** | Classical Avalanche (`...f5`), Sämisch Blunder Exploitation, Averbakh & Four Pawns Overextension Punishments, Fianchetto & Sideline Traps |
| **Nimzo-Indian Defense** | `nimzo-indian-defense` | 4 | **52** | Rubinstein & Classical 4.Qc2 Domination, Sämisch Blunder Refutations, Leningrad 4.Bg5 Counters, Check & Fork Tactical Traps |
| **Slav Defense** | `slav-defense` | 4 | **52** | Classical 4...Bf5 Exploitation, Semi-Slav Meran Traps (`...dxc4`/`...b5`), Exchange Oversights, Unsound Gambit Refutations |
| **Scandinavian Defense** | `scandinavian-defense` | 4 | **52** | Mieses-Kotrč 3...Qa5/Qd6 Mainlines, Modern 2...Nf6 & 3...Bg4 Systems, Early White Blunder Traps, Portuguese & Icelandic Gambits |
| **Grünfeld Defense** | `grunfeld-defense` | 4 | **52** | Exchange Center Demolition (`...c5`/`...Bg4`), Russian System Counter-Strikes, Seirawan & Modern 4.Bf4/Bg5, Unsound Flank Attack Refutations |

---

## Key Features

### 1. 3-Level Navigation Architecture
* **Level 1 — Main Catalog:** Comprehensive dashboard displaying all 18 master repertoires organized by category (`1. e4 Openings`, `1. d4 Openings`, `1. c4 Openings`, `1. e4 Gambits`, `Black Defenses`). Displays overall accuracy, completion badges, and line mastery.
* **Level 2 — Sub-Course Selection Hub:** Specialized module browser with interactive mini-board position previews (generated at ply 8), variation counters, and sub-course mastery indicators.
* **Level 3 — Interactive Study Board:** Focused training workstation featuring full-width interactive Chessground board, live move notation, coach commentary panels, and tactile control decks.

### 2. Intelligent Turn Handshake & Black Perspective
* **Automatic Board Orientation:** Automatically flips board perspective (`orientation: 'black'`) for all Black defense courses.
* **Move-0 Input Locking:** When drilling Black lines, student inputs are safely locked at position 0 while White's initial move is triggered and animated automatically.
* **Instant Turn Handover:** Seamlessly yields control to the student on Black's first response move with valid destination indicators.

### 3. Progressive Multi-Mode Training Decks
* **Learn Mode (Discovery):** Move-by-move coaching with full commentary, threat breakdowns, key ideas, and forward/backward replay controls.
* **Practice Mode (Guided Active Recall):** Guided blind testing where the learner plays the required moves; incorrect candidate moves trigger instant undo, retry prompts, and tactical hints.
* **Drill Mode (Blind Streak Challenge):** Rapid-fire mastery mode without on-screen moves or hints. Tests consecutive accuracy across randomly sequenced repertoire variations with linear queue progression.
* **Arena Mode (Master Survival):** Rigorous multi-line endurance test unlocked upon 100% completion of a sub-course repertoire.

### 4. Firebase Cloud Sync & Offline LocalStorage Fallback
* **Repository Pattern Architecture:** Unified `ProgressRepository` dynamically reads and writes to Cloud Firestore (`users/{userId}/progress/repertoire`) for logged-in users, while seamlessly falling back to `localStorage` for guests.
* **Automatic Guest Migration:** When a guest user logs in for the first time, all accumulated guest progress and accuracy stats are automatically merged into their Firestore cloud document without data loss.
* **Dual Auth Providers:** Google 1-Click Popup Sign-In and standard Email/Password authentication in an elegant neumorphic modal.
* **Reactive Header Deck:** Header component showing active user avatar/initials, display name, live sync badge, and sign-out dropdown.

### 5. Tactical Highlighting & Visual Ambiguity Engine
* On-board contextual highlights (`.square-hint`) instantly identify critical branching squares when multiple candidate moves look appealing.
* Dynamic piece target and destination rings provide smooth guidance without spoiling active calculation.

### 6. Chessground Engine & Human-Paced Cadence
* Powered by [Chessground](https://github.com/lichess-org/chessground) (the high-performance chessboard engine behind Lichess) with native SVG vector pieces.
* Configurable realistic opponent response delays (300–400ms) that emulate live human play.
* Full support for both **drag-and-drop** and **click-to-move** interactions.

---

## Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **UI & Structure** | HTML5 + CSS3 Custom Design System | Dark neumorphic aesthetic, CSS custom properties, responsive layout |
| **Logic & State** | Vanilla Modern JavaScript (ES Modules) | Repository pattern, reactive subscribers, turn handshake state machine |
| **Chess Engine** | [chess.js (v0.10.3)](https://github.com/jhlywa/chess.js) | Rule validation, legal move generation, FEN state calculation |
| **Chessboard** | [chessground (v9.2.1)](https://github.com/lichess-org/chessground) | Low-latency board rendering, fluid drag-and-drop, animations |
| **Cloud & Auth** | Google Firebase v12 (Auth & Firestore) | Cloud synchronization, user profiles, LocalStorage offline fallback |
| **Build & Dev Tooling** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **CI/CD & Hosting** | GitHub Actions + GitHub Pages | Automated test verification and zero-downtime deployment |

---

## Project Structure

```text
modena-lines/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated CI/CD deployment workflow
├── scripts/
│   ├── builder-utils.js            # Core line validation, turn parity & FEN generator
│   ├── validate-repertoires.js     # Validates all 898 lines across 18 courses
│   ├── test-black-defenses-integration.js # Integration suite for Black defenses
│   ├── test-drill-turn-handshake.js# Verifies turn transitions & input locking
│   ├── test-linear-queue-progression.js # Tests drill queue progression
│   ├── test-attempt-telemetry.js   # Validates attempt metrics & state subscribers
│   └── generate-*-52.js            # Repertoire compilation generators
├── src/
│   ├── config/
│   │   ├── firebase-config.js      # Firebase environment loaders & validator
│   │   └── settings.js             # Speed settings & app configurations
│   ├── data/
│   │   ├── courses.js              # Master repertoire courses registry & subcourses
│   │   └── lines/                  # 42 opening variation modules (898 lines total)
│   │       ├── italian-*.js        # Italian Game lines (Giuoco, Evans, Two Knights, Pianissimo)
│   │       ├── london-*.js         # London System lines (Classical, KID, QID, Jobava)
│   │       ├── ruy-lopez-*.js      # Ruy Lopez lines (Berlin, Closed, Marshall, Sidelines, Exchange)
│   │       ├── queens-gambit.js    # Queen's Gambit lines
│   │       ├── open-sicilian.js    # Open Sicilian lines
│   │       ├── english-opening.js  # English Opening lines
│   │       ├── scotch-game.js      # Scotch Game lines
│   │       ├── catalan-opening.js  # Catalan Opening lines
│   │       ├── alien-gambit.js     # Alien Gambit lines
│   │       ├── sicilian-*.js       # Sicilian Defense lines (Najdorf, Dragon, Sveshnikov, Anti)
│   │       ├── caro-kann-*.js      # Caro-Kann lines (Classical, Advance, Modern, Two Knights, Panov)
│   │       ├── pirc-*.js           # Pirc Defense lines (Classical, Austrian, 150, Fianchetto, Sidelines)
│   │       ├── french-defense.js   # French Defense lines
│   │       ├── kings-indian-defense.js # King's Indian Defense lines
│   │       ├── nimzo-indian-defense.js # Nimzo-Indian Defense lines
│   │       ├── slav-defense.js     # Slav Defense lines
│   │       ├── scandinavian-defense.js # Scandinavian Defense lines
│   │       └── grunfeld-defense.js # Grünfeld Defense lines
│   ├── engine/
│   │   ├── board-renderer.js       # Chessground adapter & SVG vector piece styler
│   │   ├── chess-logic.js          # Turn resolution & FEN helper utilities
│   │   └── game-loop.js            # Interactive study loop & turn handshake controller
│   ├── services/
│   │   ├── auth-service.js         # Firebase Auth (Google 1-Click + Email/Password)
│   │   └── firebase.js             # Firebase modular app initialization
│   ├── storage/
│   │   ├── progress-repository.js  # Repository pattern for Firestore & LocalStorage
│   │   └── user-progress.js        # Progress state engine & reactive listeners
│   ├── ui/
│   │   ├── auth-modal.js           # Neumorphic Auth Modal & Header User Profile
│   │   ├── dashboard-view.js       # Level 1 Main Catalog controller
│   │   ├── subcourse-view.js       # Level 2 Sub-Course hub controller
│   │   ├── mode-selector.js        # Training modes controller (Learn/Practice/Drill/Arena)
│   │   └── trainer-view.js         # Level 3 Interactive study board & coach engine
│   └── main.js                     # Application entry point & router
├── styles/
│   ├── variables.css               # Color palette, spacing tokens & neumorphic shadows
│   ├── main.css                    # Neumorphic layouts, headers, hero stats & cards
│   ├── components.css              # Badges, buttons, modals & auth styling
│   └── board.css                   # Chessground styling, square hints & piece animations
├── .env.example                    # Firebase environment template
├── index.html                      # Single-page application entry point
├── package.json                    # NPM metadata, scripts & dependencies
├── vite.config.js                  # Vite configuration with relative base path
└── README.md                       # Master documentation
```

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
   Copy `.env.example` to `.env` and fill in your Firebase credentials:
   ```bash
   cp .env.example .env
   ```
   *Note: If no Firebase credentials are provided, Modena Lines automatically operates in offline LocalStorage Guest Mode with full functionality.*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The local development server will start at `http://localhost:3000` with instant Hot Module Replacement (HMR).

5. **Build the production bundle:**
   ```bash
   npm run build
   npm run preview
   ```

---

## Quality Assurance & Automated Test Suites

Modena Lines includes a suite of automated validation scripts to guarantee move legality, turn parity, and flawless interactive handshakes:

```bash
# Validate all 898 master lines across 18 opening repertoires
node scripts/validate-repertoires.js

# Test Black defense courses, subcourses, and tactical ratios
node scripts/test-black-defenses-integration.js

# Verify drill turn handshake, orientation, and input locking
node scripts/test-drill-turn-handshake.js

# Test linear drill queue progression and wrap-around logic
node scripts/test-linear-queue-progression.js

# Test attempt metrics lifecycle & session telemetry
node scripts/test-attempt-telemetry.js
```

---

## Deployment to GitHub Pages

### Automated CI/CD via GitHub Actions (Recommended)
This repository includes an automated workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Pushing to the `main` branch automatically triggers dependency installation, production build, and zero-downtime deployment to GitHub Pages.

### Manual Deployment
```bash
npm run deploy
```

---

## License

This project is open-source and distributed under the terms of the [MIT License](LICENSE).