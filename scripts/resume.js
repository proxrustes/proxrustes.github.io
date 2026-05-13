document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = {
        skills: [
            { id: 'react', name: 'React' },
            { id: 'uiux', name: 'UI/UX' },
            { id: 'next', name: 'Next.js' },
            { id: 'ts', name: 'TypeScript' },
            { id: 'python', name: 'Python' },
            { id: 'testing', name: 'Jest/Playwright' },
            { id: 'cv', name: 'Computer Vision' },
            { id: 'cad', name: 'CAD' },
        ],
        timeline: [
            {
                type: 'work',
                title: 'Frontend Developer',
                period: 'February 2025 - Present',
                institution: 'Ströer GmbH',
                description: [
                    'Own an internal editorial React application end-to-end within a monorepo (primary ownership of one product; occasional support of a second frontend).',
                    'Drive the full UI lifecycle: user stories, primary/secondary research, lo/hi-fi prototypes in Figma, and usability studies; translate outcomes into production-ready React/TypeScript code.',
                    'Build and maintain a reusable component foundation (MUI, Tailwind, custom components) and enforce consistency via lint rules and CI quality checks.',
                    'Implement REST API integrations with pagination, caching, loading/error states, and resilient data-fetching patterns.',
                    'Debug production issues using Sentry, Datadog, and logs; collaborate with backend teams using Node.js to isolate root causes and unblock releases.',
                    'Contribute through code reviews, pair programming, and mentoring a junior engineer.'
                ],
                skills: ['react', 'ts', 'htmlcss', 'uiux'],
                projects: [
                    { icon: '📝', title: 'Editorial Dashboard', description: 'Core product for content creation' }
                ]
            },
            {
                type: 'work',
                title: 'Software Engineer',
                period: 'September 2025 - Present',
                institution: 'Cerepal.ai',
                description: [
                    'Developed and maintained responsive web applications using Vue.js.',
                    'Collaborated with UX/UI designers to implement pixel-perfect interfaces.',
                    'Reduced bug count by 25% through rigorous unit testing using Jest.'
                ],
                skills: ['cv', 'cad', 'python', "next", "uiux"],
                projects: [
                    { icon: '🧠', title: 'AI Automation Tool', description: 'Computer vision platform integration' }
                ]
            },
            {
                type: 'education',
                eduType: 'Bachelor\'s Degree',
                icon: '🎓',
                title: 'Software Engineering',
                institution: 'Kyiv Polytechnic National University',
                period: '2021 - 2025',
                description: ['Foundational studies in software engineering, algorithms, and data structures.'],
                skills: ['python', 'ts', "cv", "cad", "uiux"]
            },
            {
                type: 'work',
                title: 'Frontend Developer',
                period: 'December 2022 - January 2024',
                institution: 'Catenion GmbH',
                description: [
                    'Developed and maintained responsive web applications using Vue.js.',
                    'Collaborated with UX/UI designers to implement pixel-perfect interfaces.',
                    'Reduced bug count by 25% through rigorous unit testing using Jest.'
                ],
                skills: ['next', "react",  "uiux", "testing"],
                projects: [
                    { icon: '📊', title: 'Analytics Dashboard', description: 'Data visualization interface' }
                ]
            }
        ],
        projects: [
            {
                date: '2023-11',
                title: 'Complex E-commerce Platform',
                workplace: 'Binariks Inc.',
                description: 'A high-performance e-commerce solution serving 100k+ daily users.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80',
                skills: ['react', 'next', 'ts']
            },
           
        ],
        conferences: [
            { date: '2023-06', name: 'React Summit', year: '2023', role: 'Speaker', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=300&q=80' },
            { date: '2022-09', name: 'JSWorld Conference', year: '2022', role: 'Speaker', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=300&q=80' },
            { date: '2021-03', name: 'VueConf', year: '2021', role: 'Attendee', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=300&q=80' }
        ],
        talks: [
            {
                date: '2023-06',
                title: 'State Management with Apollo',
                description: 'Deep dive into caching, optimistic UI, and local state management.',
                image: 'https://images.unsplash.com/photo-1475721025505-44753337fd36?auto=format&fit=crop&w=300&q=80',
                events: ['React Summit 2023', 'JSWorld Conference 2022']
            },
            {
                date: '2022-09',
                title: 'Next.js Performance',
                description: 'Strategies for code-splitting, SSR, and reducing bundle sizes.',
                image: 'https://images.unsplash.com/photo-1551818255-e6e10975ab07?auto=format&fit=crop&w=300&q=80',
                events: ['React Summit 2023']
            }
        ],
        upcomingEvents: [
            {
                date: '2024-10',
                name: 'Frontend Nation',
                year: '2024 (Upcoming)',
                role: 'Speaker',
                image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=300&q=80'
            },
            {
                date: '2024-11',
                name: 'SmashingConf',
                year: '2024 (Upcoming)',
                role: 'Attendee',
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=300&q=80'
            }
        ]
    };

    const skillsContainer = document.getElementById('skills-container');
    const timeline = document.getElementById('timeline');

    if (skillsContainer) {
        // Render Skills
        portfolioData.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.setAttribute('data-skill', skill.id);
            span.textContent = skill.name;
            skillsContainer.appendChild(span);
        });
    }

    if (timeline) {
        // Render Combined Timeline
        portfolioData.timeline.forEach(entry => {
            const item = document.createElement('div');
            item.className = `timeline-item ${entry.type}-item`;
            
            if (entry.skills && entry.skills.length > 0) {
                item.setAttribute('data-skills', entry.skills.join(','));
            } else {
                item.setAttribute('data-skills', '');
            }

            const dot = document.createElement('div');
            dot.className = `timeline-dot ${entry.type}-dot`;

            const content = document.createElement('div');
            content.className = `timeline-content ${entry.type}-content`;

            const h3 = document.createElement('h3');
            if (entry.type === 'education' && entry.icon) {
                h3.textContent = `${entry.icon} ${entry.title}`;
            } else {
                h3.textContent = entry.title;
            }
            content.appendChild(h3);

            if (entry.type === 'education' || entry.institution) {
                const subtitle = document.createElement('h4');
                if (entry.type === 'education') {
                    subtitle.textContent = `${entry.institution} (${entry.eduType})`;
                } else {
                    subtitle.textContent = entry.institution;
                }
                content.appendChild(subtitle);
            }

            const date = document.createElement('span');
            date.className = 'date';
            date.textContent = entry.period;
            content.appendChild(date);

            if (Array.isArray(entry.description)) {
                const ul = document.createElement('ul');
                ul.className = 'timeline-description-list';
                entry.description.forEach(point => {
                    const li = document.createElement('li');
                    li.textContent = point;
                    ul.appendChild(li);
                });
                content.appendChild(ul);
            } else {
                const p = document.createElement('p');
                p.textContent = entry.description;
                content.appendChild(p);
            }

            if (entry.projects && entry.projects.length > 0) {
                const projectsContainer = document.createElement('div');
                projectsContainer.className = 'timeline-projects';
                
                entry.projects.forEach(project => {
                    const projectBlock = document.createElement('div');
                    projectBlock.className = 'timeline-project-block';
                    
                    const projectHeader = document.createElement('div');
                    projectHeader.className = 'project-header';
                    
                    const icon = document.createElement('span');
                    icon.className = 'project-icon';
                    icon.textContent = project.icon;
                    
                    const title = document.createElement('span');
                    title.className = 'project-title';
                    title.textContent = project.title;
                    
                    projectHeader.appendChild(icon);
                    projectHeader.appendChild(title);
                    
                    const desc = document.createElement('div');
                    desc.className = 'project-desc';
                    desc.textContent = project.description;
                    
                    projectBlock.appendChild(projectHeader);
                    projectBlock.appendChild(desc);
                    projectsContainer.appendChild(projectBlock);
                });
                
                content.appendChild(projectsContainer);
            }

            if (entry.skills && entry.skills.length > 0) {
                const skillsDiv = document.createElement('div');
                skillsDiv.className = 'item-skills';
                entry.skills.forEach(skillId => {
                    const skillObj = portfolioData.skills.find(s => s.id === skillId);
                    if (skillObj) {
                        const skillSpan = document.createElement('span');
                        skillSpan.textContent = skillObj.name;
                        skillSpan.setAttribute('data-skill-id', skillId);
                        skillsDiv.appendChild(skillSpan);
                    }
                });
                content.appendChild(skillsDiv);
            }

            item.appendChild(dot);
            item.appendChild(content);

            timeline.appendChild(item);
        });
    }

    // Render Showcase (Projects, Talks, Conferences)
    const showcaseContainer = document.getElementById('showcase-container');
    const upcomingContainer = document.getElementById('upcoming-container');
    const categoryNav = document.getElementById('category-nav');
    const photographyContent = document.getElementById('photography-content');

    // Photography Data
    const Photos = {
      ideas: {
        "Doomer 90s": {
          photos: [
            { src: "https://i.pinimg.com/736x/44/5b/46/445b46f2e92edd3ed0817caed758c767.jpg", alt: "Doomer Photo 3" },
            { src: "https://i.pinimg.com/736x/86/54/0a/86540ae9587b86d48b87b6011e69e35a.jpg", alt: "Doomer Photo 3" },
            { src: "https://i.pinimg.com/736x/99/d8/d0/99d8d08cb06d3a28fb95534fba123be1.jpg", alt: "Doomer Photo 3" },
          ],
          description: "A fascinating play exploring themes of mythology and identity.",
          pinterestLink: "https://www.pinterest.com/book_of_sirens",
        },
        "'Kurs Valüt' concert": {
          photos: [
            { src: "../images/portrait/2.jpg", alt: "Doomer Photo 3" },
            { src: "../images/events/kv-2.jpg", alt: "Doomer Photo 3" },
            { src: "../images/events/kv-1.jpg", alt: "Doomer Photo 3" },
          ],
          description: "An energetic concert by the post-punk band Kurs Valüt.",
          pinterestLink: "https://www.pinterest.com/kurs_valut",
        },
        "'ProEnglish Theatre' discussion": {
          photos: [
            { src: "../images/events/ped-1.jpg", alt: "Doomer Photo 3" },
            { src: "../images/events/ped-2.jpg", alt: "Doomer Photo 3" },
            { src: "../images/events/ped-3.jpg", alt: "Doomer Photo 3" },
          ],
          description: "Engaging discussions by ProEnglish Theatre about modern storytelling.",
          pinterestLink: "https://www.pinterest.com/proenglish_theatre",
        },
      },
      family: {
        "": [
          { src: "../images/COMING SOON.png", alt: "Coming Soon 1" },
          { src: "../images/COMING SOON.png", alt: "Coming Soon 2" },
          { src: "../images/COMING SOON.png", alt: "Coming Soon 3" },
        ]
      },
      events: {
        "'Book of Sirens' play": [
          { src: "../images/events/1.jpg", alt: "BS 1" },
          { src: "../images/events/bs-3.jpg", alt: "BS 2" },
          { src: "../images/events/2.jpg", alt: "BS 3" },
        ],
        "'Kurs Valüt' concert": [
          { src: "../images/portrait/2.jpg", alt: "KV 1" },
          { src: "../images/events/kv-2.jpg", alt: "KV 2" },
          { src: "../images/events/kv-1.jpg", alt: "KV 3" },
        ],
        "'ProEnglish Theatre' discussion": [
          { src: "../images/events/ped-1.jpg", alt: "PED 1" },
          { src: "../images/events/ped-2.jpg", alt: "PED 2" },
          { src: "../images/events/ped-3.jpg", alt: "PED 3" },
          { src: "../images/events/ped-4.jpg", alt: "PED 4" },
          { src: "../images/events/ped-5.jpg", alt: "PED 5" },
        ],
        "CI-CD conference": [
          { src: "../images/events/CICDconference/5.jpg", alt: "CI-CD 1" },
          { src: "../images/events/CICDconference/2.jpg", alt: "CI-CD 2" },
          { src: "../images/events/CICDconference/4.jpg", alt: "CI-CD 3" },
          { src: "../images/events/CICDconference/1.jpg", alt: "CI-CD 4" },
          { src: "../images/events/CICDconference/7.jpg", alt: "CI-CD 5" },
          { src: "../images/events/CICDconference/3.jpg", alt: "CI-CD 6" },
          { src: "../images/events/CICDconference/6.jpg", alt: "CI-CD 7" },
          { src: "../images/events/CICDconference/8.jpg", alt: "CI-CD 8" },
        ],
      },
      conceptual: {
        "pool table": [
          { "src": "../images/conceptual/billiard/hands-2.jpg", "alt": "Billiard 1" },
          { "src": "../images/conceptual/billiard/rk-portrait.jpg", "alt": "Billiard 2" },
          { "src": "../images/conceptual/billiard/hands-1.jpg", "alt": "Billiard 3" },
          { "src": "../images/conceptual/billiard/v-portrait-1.jpg", "alt": "Billiard 4" },
          { "src": "../images/conceptual/billiard/v-pool.jpg", "alt": "Billiard 5" },
          { "src": "../images/conceptual/billiard/v-portrait.jpg", "alt": "Billiard 6" },
        ],
        "u-bahn chronicles": [
          { src: "../images/conceptual/liza akimova/P1150014.jpg", alt: "U-bahn 1" },
          { src: "../images/conceptual/liza akimova/P1140625.jpg", alt: "U-bahn 2" },
          { src: "../images/conceptual/liza akimova/P1150005.jpg", alt: "U-bahn 3" },
          { src: "../images/conceptual/liza akimova/P1140599.jpg", alt: "U-bahn 4" },
          { src: "../images/conceptual/liza akimova/P1140642.jpg", alt: "U-bahn 5" },
          { src: "../images/conceptual/liza akimova/P1140533.jpg", alt: "U-bahn 6" },
        ],
        "green flat white": [
          { src: "../images/conceptual/playground/7.jpg", alt: "GFW 1" },
          { src: "../images/conceptual/playground/5.jpg", alt: "GFW 2" },
          { src: "../images/conceptual/playground/6.jpg", alt: "GFW 3" },
        ],
        "playground": [
          { src: "../images/conceptual/masha/P1120970.jpg", alt: "Playground 1" },
          { src: "../images/conceptual/masha/P1130155.jpg", alt: "Playground 2" },
          { src: "../images/conceptual/masha/P1120943.jpg", alt: "Playground 3" },
          { src: "../images/conceptual/masha/P1120981.jpg", alt: "Playground 4" },
          { src: "../images/conceptual/masha/P1130429.jpg", alt: "Playground 5" },
        ],
        "Natur Park Südgelände": [
          { src: "../images/conceptual/1/nps-2.jpg", alt: "NPS 1" },
          { src: "../images/conceptual/1/nps-1.jpg", alt: "NPS 2" },
          { src: "../images/conceptual/1/nps-3.jpg", alt: "NPS 3" },
          { src: "../images/conceptual/1/nps-7.jpg", alt: "NPS 4" },
          { src: "../images/conceptual/1/nps-4.jpg", alt: "NPS 5" },
          { src: "../images/conceptual/1/P1090462.jpg", alt: "NPS 6" },
        ],
        "doomer": [
          { src: "../images/conceptual/R/photo_2024-07-20_11-48-32.jpg", alt: "Doomer 1" },
          { src: "../images/conceptual/R/photo_2024-07-20_11-48-35.jpg", alt: "Doomer 2" },
          { src: "../images/conceptual/R/photo_2024-07-20_11-48-30.jpg", alt: "Doomer 3" },
          { src: "../images/conceptual/R/photo_2024-07-20_11-48-37.jpg", alt: "Doomer 4" },
          { src: "../images/conceptual/R/photo_2024-07-20_11-48-40.jpg", alt: "Doomer 5" },
          { src: "../images/conceptual/R/photo_2024-07-20_11-48-38.jpg", alt: "Doomer 6" },
        ],
        "marshes": [
          { src: "../images/conceptual/marshes/marshes-1.jpg", alt: "Marshes 1" },
          { src: "../images/conceptual/marshes/marshes-2.jpg", alt: "Marshes 2" },
        ]
      },
      locations: {
        "Oberbaumbrücke": [
          { src: "../images/city/bridge-1.jpg", alt: "City 1" },
          { src: "../images/city/arc-1.jpg", alt: "City 2" },
          { src: "../images/city/girls.jpg", alt: "City 3" },
          { src: "../images/city/arc-2.jpg", alt: "City 4" },
          { src: "../images/city/bikeguy.jpg", alt: "City 5" },
          { src: "../images/city/granma.jpg", alt: "City 6" },
        ],
        "Landschaftspark Wartenberger Feldmark": [
          { src: "../images/nature/field/P1110397.JPG", alt: "Nature 1" },
          { src: "../images/nature/field/P1110861.JPG", alt: "Nature 2" },
          { src: "../images/nature/field/P1110394.JPG", alt: "Nature 3" },
          { src: "../images/nature/field/P1100943.JPG", alt: "Nature 4" },
          { src: "../images/nature/field/P1110396.JPG", alt: "Nature 5" },
          { src: "../images/nature/field/P1120007.JPG", alt: "Nature 6" },
        ]
      },
      lovestory: {
        "03.05.2024": [
          { src: "../images/lovestory/1/sd-1.jpg", alt: "Love Story Engagement 1" },
          { src: "../images/lovestory/1/P1090209.jpg", alt: "Love Story Wedding 1" },
          { src: "../images/lovestory/1/P1090673.jpg", alt: "Love Story Wedding 2" },
          { src: "../images/lovestory/1/P1090757.jpg", alt: "Love Story Wedding 3" },
          { src: "../images/lovestory/1/P1090792.jpg", alt: "Love Story Wedding 4" },
          { src: "../images/lovestory/1/P1090465.jpg", alt: "Love Story Wedding 5" },
        ],
        "15.07.2024": [
          { src: "../images/lovestory/KO/P1110589.jpg", alt: "Love Story Wedding 14" },
          { src: "../images/lovestory/KO/P1110814.jpg", alt: "Love Story Wedding 18" },
          { src: "../images/lovestory/KO/P1110195.jpg", alt: "Love Story Wedding 9" },
          { src: "../images/lovestory/KO/P1110650.jpg", alt: "Love Story Wedding 15" },
          { src: "../images/lovestory/KO/P1110651.jpg", alt: "Love Story Wedding 16" },
          { src: "../images/lovestory/KO/P1110653.jpg", alt: "Love Story Wedding 17" },
          { src: "../images/lovestory/KO/P1110026.jpg", alt: "Love Story Wedding 7" },
          { src: "../images/lovestory/KO/P1100683.jpg", alt: "Love Story Wedding 1" },
          { src: "../images/lovestory/KO/P1110137.jpg", alt: "Love Story Wedding 8" },
          { src: "../images/lovestory/KO/P1100708.jpg", alt: "Love Story Wedding 2" },
          { src: "../images/lovestory/KO/P1100882.jpg", alt: "Love Story Wedding 6" },
          { src: "../images/lovestory/KO/P1110393.jpg", alt: "Love Story Wedding 12" },
        ]
      }
    };

    if (categoryNav && photographyContent) {
        // Generate Navigation
        Object.keys(Photos).forEach(category => {
            if (category === 'about') return;
            const a = document.createElement('a');
            a.href = `#${category}`;
            a.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryNav.appendChild(a);
        });

        // Generate Content
        Object.keys(Photos).forEach(category => {
            if (category === 'about') return;
            const section = document.createElement('section');
            section.id = category;
            section.className = 'category-section';

            const h2 = document.createElement('h2');
            h2.className = 'category-title';
            h2.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            section.appendChild(h2);

            const subcategories = Photos[category] || {};
            for (const [subcat, photosOrObj] of Object.entries(subcategories)) {
                // Handle both plain arrays and objects with a 'photos' key
                const photosArray = Array.isArray(photosOrObj) ? photosOrObj : photosOrObj.photos;
                if (!photosArray || photosArray.length === 0) continue;

                const shootDiv = document.createElement('div');
                shootDiv.style.marginBottom = '40px';

                const shootTitle = document.createElement('h3');
                shootTitle.textContent = subcat.replace(/_/g, ' ').toUpperCase();
                shootTitle.style.marginBottom = '15px';
                shootDiv.appendChild(shootTitle);

                const grid = document.createElement('div');
                grid.className = 'photoshoot-grid';

                photosArray.forEach(photo => {
                    const card = document.createElement('div');
                    card.className = 'photo-card';
                    
                    const img = document.createElement('img');
                    img.src = photo.src;
                    img.alt = photo.alt;
                    img.loading = 'lazy';
                    
                    card.appendChild(img);
                    grid.appendChild(card);
                });

                shootDiv.appendChild(grid);
                section.appendChild(shootDiv);
            }

            photographyContent.appendChild(section);
        });
    }

    if (showcaseContainer && upcomingContainer) {
        const createFullWidthCard = (title, subtitle, desc, extra, imageUrl, category, dateStr) => {
            // Optional: format date string if desired, or just use as a label.
            const dateBadge = dateStr ? `<span class="date-badge" style="float: right; font-size: 0.8rem; color: #888;">${dateStr}</span>` : '';
            return `
                <div class="full-width-card">
                    ${imageUrl ? `<div class="card-image-wrapper"><img src="${imageUrl}" alt="${title}" class="full-card-img" /></div>` : ''}
                    <div class="full-card-content">
                        <div>
                            <span class="category-label">${category}</span>
                            ${dateBadge}
                        </div>
                        <h3>${title}</h3>
                        ${subtitle ? `<span class="workplace-badge">${subtitle}</span>` : ''}
                        ${desc ? `<p>${desc}</p>` : ''}
                        ${extra ? `<div class="extra-info">${extra}</div>` : ''}
                    </div>
                </div>
            `;
        };

        // Render Upcoming Events first
        // Sort them by date ascending (closest first)
        const sortedUpcoming = [...portfolioData.upcomingEvents].sort((a, b) => a.date.localeCompare(b.date));
        sortedUpcoming.forEach(e => {
            upcomingContainer.innerHTML += createFullWidthCard(e.name, '', '', `${e.year} - ${e.role}`, e.image, 'Upcoming Event', e.date);
        });

        // Combine Past Projects, Talks, Conferences
        let combinedPast = [];
        
        portfolioData.projects.forEach(p => {
            combinedPast.push({
                date: p.date,
                html: createFullWidthCard(p.title, p.workplace, p.description, '', p.image, 'Project', p.date)
            });
        });
        
        portfolioData.talks.forEach(t => {
            const eventsHtml = t.events.map(e => `<span class="event-tag">${e}</span>`).join('');
            combinedPast.push({
                date: t.date,
                html: createFullWidthCard(t.title, '', t.description, eventsHtml, t.image, 'Talk', t.date)
            });
        });
        
        portfolioData.conferences.forEach(c => {
            combinedPast.push({
                date: c.date,
                html: createFullWidthCard(c.name, '', '', `${c.year} - ${c.role}`, c.image, 'Conference', c.date)
            });
        });

        // Sort past events by date descending (newest first)
        combinedPast.sort((a, b) => b.date.localeCompare(a.date));

        // Render sorted past events
        combinedPast.forEach(item => {
            showcaseContainer.innerHTML += item.html;
        });
    }


    // Event Listeners for highlighting
    const skillTags = document.querySelectorAll('.skill-tag');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    let activeSkill = null;

    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const skill = tag.getAttribute('data-skill');
            
            // If clicking already active skill, deactivate
            if (activeSkill === skill) {
                activeSkill = null;
                tag.classList.remove('active');
                timeline.classList.remove('filtering');
                
                // Remove highlights
                timelineItems.forEach(item => {
                    item.classList.remove('highlight');
                    const skillSpans = item.querySelectorAll('.item-skills span');
                    skillSpans.forEach(span => span.classList.remove('skill-match'));
                });
            } else {
                // Deactivate previously active tag
                skillTags.forEach(t => t.classList.remove('active'));
                
                // Activate clicked tag
                activeSkill = skill;
                tag.classList.add('active');
                timeline.classList.add('filtering');
                
                // Highlight corresponding timeline items
                timelineItems.forEach(item => {
                    const itemSkillsStr = item.getAttribute('data-skills');
                    const itemSkills = itemSkillsStr ? itemSkillsStr.split(',') : [];
                    
                    // Reset internal skill highlights
                    const skillSpans = item.querySelectorAll('.item-skills span');
                    skillSpans.forEach(span => span.classList.remove('skill-match'));

                    if (itemSkills.includes(activeSkill)) {
                        item.classList.add('highlight');
                        
                        // Highlight specific skill inside the timeline item
                        skillSpans.forEach(span => {
                            if (span.getAttribute('data-skill-id') === activeSkill) {
                                span.classList.add('skill-match');
                            }
                        });

                    } else {
                        item.classList.remove('highlight');
                    }
                });
            }
        });
    });
});