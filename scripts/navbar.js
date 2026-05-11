class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const pathname = window.location.pathname;
        const path = pathname.split('/').pop() || 'index.html';
        
        const isResume = pathname.includes('/resume/');
        const isArt = pathname.includes('/art/');
        const isPhotography = pathname.includes('/photography/'); 

        const subMenuItems = [
            { href: '../photography/family.html', text: 'FAMILY', match: 'family.html' },
            { href: '../photography/lovestory.html', text: 'LOVE STORY', match: 'lovestory.html' },
            { href: '../photography/events.html', text: 'EVENTS', match: 'events.html' },
            { href: '../photography/conceptual.html', text: 'CONCEPTUAL', match: 'conceptual.html' },
            { href: '../photography/locations.html', text: 'LOCATIONS', match: 'locations.html' }
        ];

        let submenuHTML = '';
        if (isPhotography) {
            submenuHTML = `
                <ul class="menu" style="font-size: 0.8em; margin-top: 10px; display: flex; justify-content: center; gap: 15px; padding: 0; list-style: none; flex-wrap: wrap; height: 19px;">
                    ${subMenuItems.map(item => `
                        <li class="${path === item.match ? 'selected' : ''}">
                            <a href="${item.href}" style="${path === item.match ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">${item.text}</a>
                        </li>
                    `).join('')}
                </ul>
            `;
        } else if (isArt) {
            const artMenuItems = [
                { href: '../art/art.html', text: 'ABOUT', match: 'art.html' },
                { href: '../art/poems.html', text: 'POEMS', match: 'poems.html' },
                { href: '../art/paintings.html', text: 'PAINTINGS', match: 'paintings.html' }
            ];
            submenuHTML = `
                <ul class="menu" style="font-size: 0.8em; margin-top: 10px; display: flex; justify-content: center; gap: 15px; padding: 0; list-style: none; flex-wrap: wrap; height: 19px;">
                    ${artMenuItems.map(item => `
                        <li class="${path === item.match ? 'selected' : ''}">
                            <a href="${item.href}" style="${path === item.match ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">${item.text}</a>
                        </li>
                    `).join('')}
                </ul>
            `;
        } else if (isResume) {
            submenuHTML = `
                <ul class="menu" style="font-size: 0.8em; margin-top: 10px; display: flex; justify-content: center; gap: 15px; padding: 0; list-style: none; flex-wrap: wrap; height: 19px;">
                    <li class="selected">
                        <a href="../resume/index.html" style="color: #bb4430; font-weight: bold;">ABOUT</a>
                    </li>
                </ul>
            `;
        }

        this.innerHTML = `
            <div class="header site-navbar" style="flex-direction: column; position: relative; margin-bottom: 20px; width: 100%; display: flex; align-items: center;">
                <ul class="menu global-menu" style="display: flex; justify-content: center; gap: 20px; padding: 0; list-style: none;">
                    <li><a href="../resume/index.html" style="${isResume ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">RESUME</a></li>
                    <li><a href="../photography/conceptual.html" style="${isPhotography ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">PHOTOGRAPHY</a></li>
                    <li><a href="../art/art.html" style="${isArt ? 'color: #bb4430; font-weight: bold;' : 'font-weight: bold; text-decoration: none;'}">POEMS & ART</a></li>
                </ul>
                ${submenuHTML}
                <div id="theme-toggle-container" style="position: absolute; right: 20px; top: -10px;"></div>
            </div>
        `;
    }
}

customElements.define('site-navbar', SiteNavbar);
