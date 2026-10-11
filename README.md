# Luiz Facury’s website

A custom Jekyll academic profile for GitHub Pages, with responsive layouts, light and dark themes, and content based on the October 2026 CV. Fonts, styles, scripts, and images are served locally; there is no frontend build step.

## Preview locally

With Ruby 3.2 or newer and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. To generate the static site without a server:

```sh
bundle exec jekyll build
```

GitHub Pages can continue building from the repository root. The layout is local, so a remote theme is not required. Changes become public through the repository’s normal GitHub Pages publishing process.

## Update the content

- `index.md`: introduction, research, open-source projects, experience, education, and personal interests.
- `_data/publications.yml`: publication details. Set `selected: true` to feature an entry; the remaining entries appear under “More publications.” The `note` field is a short venue badge; `description` holds longer context. Use `<strong>` around Luiz’s name in the author list.
- `CV_Luiz.pdf`: replace this file to update every CV link.
- `_config.yml`: site description, canonical URL, email, and social metadata. The URL follows the configured Git remote (`luizfacury.github.io`).
- `assets/css/site.css`: typography, layout, colors, mobile styles, and print styles.
- `_layouts/default.html`: shared page structure, navigation, and SEO tags.

The publication disclosure and all page content work without JavaScript. JavaScript adds a theme switch that starts with the system preference and remembers a visitor’s selection when storage is available.

The original `assets/css/custom.scss` is retained but excluded from the build because it imports the previous remote theme. Local research files are also excluded from the generated site.
