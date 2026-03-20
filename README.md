# Manish — Personal Portfolio

A modern, responsive developer portfolio built with **React** and **Vite**. Showcases projects, skills, work experience, and contact information — all driven from a single data file.

🌐 **Live:** [manish.is-a.dev](https://manish.is-a.dev)

---

## Features

- **Animated UI** — smooth transitions and motion effects via Framer Motion
- **Sections** — Hero, About, Skills, Projects (with filtering), Experience, Contact, Footer
- **Data-driven** — all content lives in `src/data.js`; no component edits needed for content updates
- **Admin route** — a separate `/admin` layout accessible via React Router
- **Responsive** — mobile-first design with custom CSS

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router DOM 7 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | ESLint 9 |

---

## Project Structure

```
src/
├── data.js              # All site content (personal info, skills, projects, experience)
├── App.jsx              # Root component with routing
├── main.jsx             # Entry point
├── components/
│   ├── Navbar           # Top navigation with smooth scroll links
│   ├── Hero             # Landing section with CTA
│   ├── About            # Bio, stats card, and code snippet
│   ├── Skills           # Categorized tech stack
│   ├── Projects         # Filterable project cards (Featured / All / Private)
│   ├── Experience       # Work timeline
│   ├── Contact          # Contact form and social links
│   └── Footer           # Footer with credits
└── admin/
    └── AdminLayout      # Admin panel layout (route: /admin/*)
```

---

## Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Updating Content

All site content is managed in [`src/data.js`](src/data.js). Key sections:

- `personal` — name, title, tagline, contact details
- `skills.categories` — categorized list of technologies
- `projects` — project cards with title, description, tech, GitHub/demo links, and `featured` flag
- `experience` — company, position, duration, description
- `social` — links to GitHub, LinkedIn, Twitter, Portfolio

---

## Deployment

The site is deployed to GitHub Pages from the `new-ui` branch. Push changes and the live site at [manish.is-a.dev](https://manish.is-a.dev) updates automatically.

---

## Contact

**Manish** · [manish7479dlp@gmail.com](mailto:manish7479dlp@gmail.com) · [LinkedIn](https://linkedin.com/in/manish7479dlp) · [GitHub](https://github.com/manish7479dlp)
