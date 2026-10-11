---
layout: default
image: /pic_cropped.jpg
---

<section class="hero" aria-labelledby="intro-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Machine learning researcher · UFMG</p>
    <h1 id="intro-title">Luiz Facury</h1>
    <p class="hero-intro">I’m an MSc student in Computer Science at UFMG, supervised by <a href="https://scholar.google.com/citations?user=oad6_oEAAAAJ&amp;hl=en">Wagner Meira Jr.</a> I work on self-supervised learning, joint-embedding predictive architectures (JEPAs), and world models.</p>
    <p class="hero-intro">I also work with <a href="https://randallbalestriero.github.io/">Randall Balestriero</a> on the stable family of open-source repositories, JEPA architectures, and world models more broadly.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="#publications">Publications <span aria-hidden="true">↘</span></a>
      <a class="text-link" href="{{ '/CV_Luiz.pdf' | relative_url }}">View CV <span class="file-label">PDF</span> <span aria-hidden="true">↗</span></a>
    </div>
    <div class="social-links" aria-label="Find me online">
      <a href="https://scholar.google.com/citations?user=VORIhEAAAAAJ&amp;hl=en">Google Scholar <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/luizfacury">GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/luizfacury/">LinkedIn <span aria-hidden="true">↗</span></a>
      <a href="mailto:{{ site.email }}">Email <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <figure class="portrait">
    <div class="portrait-frame"><img src="{{ '/pic.jpg' | relative_url }}" alt="Luiz Facury" width="2656" height="2496" fetchpriority="high"></div>
  </figure>
</section>

<section id="research" class="research-section section" aria-labelledby="research-title">
  <div class="section-label"><span class="section-number">01</span><h2 id="research-title">Research</h2></div>
  <div class="research-content">
    <div class="research-copy">
      <p>My current work focuses on online JEPA-based learning for Atari using SIGReg regularization, and on planning in learned latent spaces.</p>
      <p>I also work on self-supervised and multimodal ECG representations, including zero-shot diagnosis and action-conditioned models of cardiac dynamics.</p>
    </div>
    <ul class="research-topics" aria-label="Research interests"><li>Self-supervised learning</li><li>World models</li><li>Latent-space planning</li><li>ECG representations</li></ul>
  </div>
</section>

<aside class="open-source" aria-labelledby="open-source-title">
  <div class="open-source-intro">
    <h2 id="open-source-title">Open-source software</h2>
    <p>I contribute to open-source research with <a href="https://randallbalestriero.github.io/">Randall Balestriero</a>’s group at Brown University.</p>
  </div>
  <div class="open-source-projects">
    <a class="project-link" href="https://github.com/galilai-group/stable-worldmodel"><span><span class="project-role">Co-author · NeurIPS 2026</span><span class="project-name">stable-worldmodel</span><span class="project-description">A platform for reproducible world-model research and evaluation.</span></span><span class="project-arrow" aria-hidden="true">↗</span></a>
    <div class="project-contributions"><span class="project-role">Also contributing to</span><div><a href="https://github.com/galilai-group/stable-pretraining">stable-pretraining <span aria-hidden="true">↗</span></a><a href="https://github.com/galilai-group/stable-datasets">stable-datasets <span aria-hidden="true">↗</span></a></div></div>
  </div>
</aside>

<section id="publications" class="publications-section section" aria-labelledby="publications-title">
  <div class="section-heading">
    <div class="section-label"><span class="section-number">02</span><h2 id="publications-title">Selected publications</h2></div>
    <a class="text-link" href="https://scholar.google.com/citations?user=VORIhEAAAAAJ&amp;hl=en">Google Scholar <span aria-hidden="true">↗</span></a>
  </div>
  <div class="publication-list">
    {% assign selected_papers = site.data.publications | where: 'selected', true %}
    {% for paper in selected_papers %}{% include publication.html paper=paper %}{% endfor %}
  </div>
  {% assign more_papers = site.data.publications | where: 'selected', false %}
  <details class="publication-archive">
    <summary><span>More publications <span class="archive-count">{{ more_papers.size }}</span></span><span class="disclosure-icon" aria-hidden="true">+</span></summary>
    <div class="publication-list">{% for paper in more_papers %}{% include publication.html paper=paper %}{% endfor %}</div>
  </details>
</section>

<section id="experience" class="experience-section section" aria-labelledby="experience-title">
  <div class="section-label"><span class="section-number">03</span><h2 id="experience-title">Experience &amp; education</h2></div>
  <div class="experience-columns">
    <div>
      <h3 class="column-heading">Research &amp; experience</h3>
      <ol class="timeline">
        <li><p class="timeline-date">2024 — Present</p><h4>Researcher <span>· SPEED Lab, UFMG</span></h4><p>Self-supervised and multimodal ECG diagnosis, cardiac dynamics, and world models.</p></li>
        <li><p class="timeline-date">Jan — Dec 2025</p><h4>Researcher I <span>· Petrobras</span></h4><p>Developed methods to locate and segment regions of interest in geological data for oil exploration.</p></li>
        <li><p class="timeline-date">Feb — Aug 2024</p><h4>Research Intern <span>· Philips, Paris</span></h4><p>Developed a self-supervised foundation model for ECGs and submitted two patent applications for automated clinical diagnosis.</p></li>
        <li><p class="timeline-date">Jun — Jul 2023</p><h4>Summer Research Intern <span>· Sorbonne Université</span></h4><p>Computer vision for tracking and maintaining focus on a single-celled organism.</p></li>
      </ol>
      <a class="text-link" href="{{ '/CV_Luiz.pdf' | relative_url }}">Full experience in my CV <span aria-hidden="true">↗</span></a>
    </div>
    <div>
      <h3 class="column-heading">Education</h3>
      <ol class="timeline education-timeline">
        <li><p class="timeline-date">2025 — Present</p><h4>MSc in Computer Science</h4><p class="institution">Universidade Federal de Minas Gerais</p><p>Self-supervised world models and latent-space planning.</p></li>
        <li><p class="timeline-date">2022 — 2024</p><h4>Diplôme d’Ingénieur</h4><p class="institution">Télécom Paris · Institut Polytechnique de Paris</p><p>Double degree in data science, image processing, and AI. Final project on dense self-supervised segmentation, graded 19/20.</p></li>
        <li><p class="timeline-date">2018 — 2024</p><h4>BS in Electrical Engineering</h4><p class="institution">Universidade Federal de Minas Gerais</p><p>Specialization in machine learning and computer engineering.</p></li>
      </ol>
    </div>
  </div>
  <div class="service-note"><span class="eyebrow">Academic service</span><p>Reviewer for the World Models Workshop at ICLR 2026 and Physical Understanding for Decision-Making at NeurIPS 2026.</p></div>
</section>

<section id="about" class="about-section section" aria-labelledby="about-title">
  <div class="section-label"><span class="section-number">04</span><h2 id="about-title">Beyond research</h2></div>
  <div class="about-content">
    <div class="about-copy">
      <p>Outside of work, I'm really into cinema — French Nouvelle Vague and Japanese film in particular — and literature, especially art criticism and essays (Sontag, Barthes, etc.). If you want to talk movies, find me on <a href="https://letterboxd.com/luizfysouza/">Letterboxd</a>.</p>
      <p>Beyond that, I like cooking, photography, and traveling. I've also been reading One Piece weekly since 2013, so it's been a long journey.</p>
    </div>
  </div>
</section>

<section class="contact-section" aria-labelledby="contact-title">
  <h2 id="contact-title">Contact</h2>
  <div class="contact-links"><a class="contact-email" href="mailto:{{ site.email }}">{{ site.email }} <span aria-hidden="true">↗</span></a><div class="social-links"><a href="https://github.com/luizfacury">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/luizfacury/">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://x.com/luizfysouza">X / Twitter <span aria-hidden="true">↗</span></a></div></div>
</section>
