(() => {
  'use strict';
  const profile = window.PORTFOLIO;
  if (!profile) return;
  const set = (id, text) => { document.getElementById(id).textContent = text; };
  const element = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text !== undefined) el.textContent = text; return el; };
  document.querySelectorAll('[data-name]').forEach(el => { el.textContent = profile.name; });
  document.title = `${profile.name} — Research Portfolio`;
  set('role', profile.role); set('tagline', profile.tagline);
  set('initials', profile.name.split(/\s+/).slice(0, 2).map(word => Array.from(word)[0] || '').join(''));
  set('year', new Date().getFullYear());
  const interests = document.getElementById('interests'); interests.replaceChildren(...profile.interests.map(text => element('li', '', text)));
  if (profile.photo) {
    const img = document.getElementById('profile-image');
    img.onload = () => { img.hidden = false; document.getElementById('portrait-placeholder').hidden = true; };
    img.alt = `${profile.name} — profile photo`; img.style.objectPosition = profile.photoPosition || 'center'; img.src = profile.photo;
  }
  const safeURL = value => { if (!value) return ''; try { const url = new URL(value, location.href); return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
  let noticeTimer;
  const notify = message => { const box = document.getElementById('notice'); box.textContent = message; box.hidden = false; clearTimeout(noticeTimer); noticeTimer = setTimeout(() => { box.hidden = true; }, 5500); };
  document.querySelectorAll('[data-link]').forEach(anchor => {
    const key = anchor.dataset.link; const raw = profile.links[key]?.trim();
    const destination = key === 'email' ? (raw ? `mailto:${raw.replace(/^mailto:/i, '')}` : '') : safeURL(raw);
    if (destination) { anchor.href = destination; if (key !== 'email') { anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; } }
    else { anchor.setAttribute('aria-label', `${key === 'cv' ? 'CV' : key === 'github' ? 'GitHub' : 'Email'} — not yet available`); anchor.addEventListener('click', event => { event.preventDefault(); notify({cv: 'The CV is not available yet.', github: 'The GitHub profile is not available yet.', email: 'The email address is not available yet.'}[key]); }); }
  });
  if (profile.links.email) set('contact-caption', profile.links.email.replace(/^mailto:/i, ''));
  const workList = document.getElementById('work-list');
  profile.work.forEach(work => {
    const details = element('details', 'work-item'); const summary = element('summary');
    summary.append(element('span', 'work-type', work.type), element('h3', '', work.title), element('p', '', work.description));
    if (work.authors?.length) {
      const authors = element('p', 'work-authors');
      work.authors.forEach((name, index) => { if (index) authors.append(document.createTextNode(', ')); authors.append(element(name === profile.name ? 'strong' : 'span', '', name)); });
      summary.append(authors);
    }
    if (work.authorshipNote) summary.append(element('p', 'authorship-note', work.authorshipNote));
    if (work.status) summary.append(element('span', 'work-status', work.status));
    const icon = element('span', 'expand-icon', '+'); icon.setAttribute('aria-hidden', 'true'); summary.append(icon);
    const body = element('div', 'work-detail');
    if (work.figure && safeURL(work.figure.src)) {
      const figure = element('figure', 'research-figure');
      const full = element('a', 'figure-link'); full.href = safeURL(work.figure.src); full.target = '_blank'; full.rel = 'noopener noreferrer'; full.setAttribute('aria-label', `Open ${work.title} main figure at full size in a new tab`);
      const img = element('img'); img.src = work.figure.src; img.alt = work.figure.alt; img.loading = 'lazy';
      full.append(img, element('span', 'figure-zoom', 'View full-size figure ↗')); figure.append(full, element('figcaption', '', work.figure.caption)); body.append(figure);
    }
    if (work.abstract?.length) { body.append(element('h4', 'abstract-heading', 'Abstract')); work.abstract.forEach(paragraph => body.append(element('p', 'abstract-text', paragraph))); if (work.abstractNote) body.append(element('p', 'abstract-note', work.abstractNote)); }
    else if (work.detail) body.append(element('p', '', work.detail));
    const tags = element('div', 'tags'); tags.append(...work.tags.map(tag => element('span', '', tag))); body.append(tags);
    const links = element('div', 'research-links');
    const href = safeURL(work.url); if (href) { const link = element('a', '', `${work.linkLabel || 'View project'} ↗`); link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer'; links.append(link); }
    const github = safeURL(work.github); if (github) { const link = element('a', '', 'GitHub repository ↗'); link.href = github; link.target = '_blank'; link.rel = 'noopener noreferrer'; links.append(link); } else { links.append(element('span', 'code-pending', 'Code forthcoming')); }
    body.append(links);
    details.append(summary, body); workList.append(details);
  });
  const awards = document.getElementById('awards-list');
  const experience = document.getElementById('experience-list');
  (profile.experience || []).forEach(entry => {
    const row = element('article', 'experience-entry');
    row.append(element('p', 'experience-period', entry.period), element('h3', '', entry.role), element('p', 'experience-institution', entry.institution), element('p', 'experience-detail', entry.detail));
    experience.append(row);
  });
  profile.awards.forEach(award => {
    const row = element('article', 'award'); const content = element('div');
    content.append(element('h3', '', award.title), element('p', '', award.organization));
    if (award.project) content.append(element('p', 'award-project', award.project));
    if (award.contribution) { const contribution = element('p', 'award-contribution'); contribution.append(element('strong', '', 'My contribution: '), document.createTextNode(award.contribution)); content.append(contribution); }
    if (award.note) content.append(element('p', 'draft-note', award.note));
    row.append(element('span', 'award-year', award.year), content); awards.append(row);
  });
})();
