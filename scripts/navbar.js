class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        
        const isResume = path === 'index.html' || path === '';
        const isArt = ['art.html', 'poems.html', 'paintings.html'].includes(path);
        const isPhotography = !isResume && !isArt; 

        const subMenuItems = [
            { href: 'family.html', text: 'FAMILY' },
            { href: 'lovestory.html', text: 'LOVE STORY' },
            { href: 'events.html', text: 'EVENTS' },
            { href: 'conceptual.html', text: 'CONCEPTUAL' },
            { href: 'locations.html', text: 'LOCATIONS' }
        ];

        let submenuHTML = '';
        if (isPhotography) {
            submenuHTML = `
                <ul class="menu" style="font-size: 0.8em; margin-top: 10px; display: flex; justify-content: center; gap: 15px; padding: 0; list-style: none; flex-wrap: wrap; height: 19px;">
                    ${subMenuItems.map(item => `
                        <li class="${path === item.href ? 'selected' : ''}">
                            <a href="${item.href}" style="${path === item.href ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">${item.text}</a>
                        </li>
                    `).join('')}
                </ul>
            `;
        } else if (isArt) {
            const artMenuItems = [
                { href: 'art.html', text: 'ABOUT' },
                { href: 'poems.html', text: 'POEMS' },
                { href: 'paintings.html', text: 'PAINTINGS' }
            ];
            submenuHTML = `
                <ul class="menu" style="font-size: 0.8em; margin-top: 10px; display: flex; justify-content: center; gap: 15px; padding: 0; list-style: none; flex-wrap: wrap; height: 19px;">
                    ${artMenuItems.map(item => `
                        <li class="${path === item.href ? 'selected' : ''}">
                            <a href="${item.href}" style="${path === item.href ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">${item.text}</a>
                        </li>
                    `).join('')}
                </ul>
            `;
        } else if (isResume) {
            submenuHTML = `
                <ul class="menu" style="font-size: 0.8em; margin-top: 10px; display: flex; justify-content: center; gap: 15px; padding: 0; list-style: none; flex-wrap: wrap; height: 19px;">
                    <li class="selected">
                        <a href="index.html" style="color: #bb4430; font-weight: bold;">ABOUT</a>
                    </li>
                </ul>
            `;
        }

        this.innerHTML = `
            <div class="header site-navbar" style="flex-direction: column; position: relative; margin-bottom: 20px; width: 100%; display: flex; align-items: center;">
                <ul class="menu global-menu" style="display: flex; justify-content: center; gap: 20px; padding: 0; list-style: none;">
                    <li><a href="index.html" style="${isResume ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">RESUME</a></li>
                    <li><a href="conceptual.html" style="${isPhotography ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">PHOTOGRAPHY</a></li>
                    <li><a href="art.html" style="${isArt ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">POEMS & ART</a></li>
                </ul>
                ${submenuHTML}
                <div id="theme-toggle-container" style="position: absolute; right: 20px; top: -10px;"></div>
            </div>
        `;
    }
}

customElements.define('site-navbar', SiteNavbar);
