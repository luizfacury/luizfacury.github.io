---
layout: default
image: /pic_cropped.jpg
---

<section class="hero" aria-labelledby="intro-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Machine learning researcher · UFMG</p>
    <h1 id="intro-title">Luiz Facury<span class="accent">.</span></h1>
    <p class="hero-statement">Learning representations. <br>Modeling the <em>world.</em></p>
    <p class="hero-intro">I’m an MSc student in Computer Science at UFMG, exploring how models learn from unlabeled data to understand, predict, and plan.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="#publications">Explore my research <span aria-hidden="true">↘</span></a>
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
    <div class="portrait-frame"><img src="{{ '/pic_cropped.jpg' | relative_url }}" alt="Luiz Facury" width="1872" height="2496" fetchpriority="high"></div>
    <figcaption><span>Belo Horizonte, Brazil</span><span class="portrait-caption-detail">A little curiosity goes a long way.</span></figcaption>
  </figure>
</section>

<section id="research" class="research-section section" aria-labelledby="research-title">
  <div class="section-label"><span class="section-number">01</span><h2 id="research-title">Research</h2></div>
  <div class="research-content">
    <p class="section-lead">Useful representations. <br><em>More capable world models.</em></p>
    <div class="research-copy">
      <p>I study self-supervised learning and joint-embedding predictive architectures (JEPAs), with a focus on world models and planning in latent space. At UFMG, I’m advised by <a href="https://scholar.google.com/citations?user=oad6_oEAAAAJ&amp;hl=en">Wagner Meira Jr.</a>; my current work explores online JEPA learning for Atari with SIGReg regularization.</p>
      <p>I also develop self-supervised and multimodal representations for ECGs. Across these projects, I’m interested in learning from fewer labels, transferring knowledge, and making models more useful beyond their training data.</p>
    </div>
    <ul class="research-topics" aria-label="Research interests"><li>Self-supervised learning</li><li>World models</li><li>Latent-space planning</li><li>ECG representations</li></ul>
  </div>
</section>

<aside class="open-source" aria-labelledby="open-source-title">
  <div class="open-source-intro">
    <p class="eyebrow">Built to be shared</p>
    <h2 id="open-source-title">Research is better <br>in the open.</h2>
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
  <div class="section-label"><span class="section-number">03</span><h2 id="experience-title">Along the way</h2></div>
  <div class="experience-columns">
    <div>
      <h3 class="column-heading">Research &amp; experience</h3>
      <ol class="timeline">
        <li><p class="timeline-date">2024 — Present</p><h4>Researcher <span>· SPEED Lab, UFMG</span></h4><p>Self-supervised and multimodal ECG diagnosis, cardiac dynamics, and world models.</p></li>
        <li><p class="timeline-date">2025 — Present</p><h4>Researcher I <span>· Petrobras</span></h4><p>Locating and segmenting regions of interest in geological data for oil exploration.</p></li>
        <li><p class="timeline-date">Feb — Aug 2024</p><h4>Research Intern <span>· Philips, Paris</span></h4><p>Developed a self-supervised foundation model for ECGs and submitted two patent applications for automated clinical diagnosis.</p></li>
        <li><p class="timeline-date">Jun — Jul 2023</p><h4>Summer Research Intern <span>· Sorbonne Université</span></h4><p>Computer vision for tracking and maintaining focus on a single-celled organism.</p></li>
      </ol>
      <a class="text-link" href="{{ '/CV_Luiz.pdf' | relative_url }}">Full experience in my CV <span aria-hidden="true">↗</span></a>
    </div>
    <div>
      <h3 class="column-heading">Education</h3>
      <ol class="timeline education-timeline">
        <li><p class="timeline-date">2025 — Present</p><h4>MSc in Computer Science</h4><p class="institution">Universidade Federal de Minas Gerais</p><p>Self-supervised world models and latent-space planning. Advised by Wagner Meira Jr.</p></li>
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
    <p class="section-lead">A few other <br><em>ways of seeing.</em></p>
    <div class="about-copy">
      <p>Cinema is a big part of my life, especially the French New Wave and Japanese film. I also enjoy literature, art criticism, and essays by writers like Susan Sontag and Roland Barthes.</p>
      <p>Away from a screen, I like cooking, photography, and traveling. I follow volleyball, and I’ve been reading <em>One Piece</em> weekly since 2013. Some stories are worth staying with.</p>
      <a class="text-link" href="https://letterboxd.com/luizfysouza/">Let’s talk films on Letterboxd <span aria-hidden="true">↗</span></a>
    </div>
  </div>
</section>

<section class="contact-section" aria-labelledby="contact-title">
  <div><p class="eyebrow">Keep the conversation going</p><h2 id="contact-title">Ideas are better <br><em>when shared.</em></h2><p>For research, open-source projects, or a good film recommendation.</p></div>
  <div class="contact-links"><a class="contact-email" href="mailto:{{ site.email }}">{{ site.email }} <span aria-hidden="true">↗</span></a><div class="social-links"><a href="https://github.com/luizfacury">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/luizfacury/">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://x.com/luizfysouza">X / Twitter <span aria-hidden="true">↗</span></a></div></div>
</section>
