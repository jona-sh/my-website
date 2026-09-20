const inPagesFolder = window.location.pathname.includes("/pages/");
const prefix = inPagesFolder ? "../" : "";

document.querySelector("header").innerHTML = `
    <ul class="horizontaleAnordnung">
        <li>
            <a class="home-button" href="${prefix}index.html" aria-label="Startseite" title="Startseite">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-9Z"/>
                    <path d="M9 21v-6h6v6"/>
                </svg>
            </a>
        </li>
        <li><a href="${prefix}pages/formats.html">erster Eintrag</a></li>
        <li>zweiter Eintrag</li>
        <li>Liste innerhalb des Headers</li>
        <li>also formatiert</li>
    </ul>
`;

document.querySelector("footer").innerHTML = `
    <p>&copy; 2026 Meine Website</p>
    <nav>
        <a href="https://github.com/jona-sh">Kontakt</a>
        <a href="${prefix}pages/impressum.html">Impressum</a>
        <a href="${prefix}pages/datenschutz.html">Datenschutz</a>
    </nav>
`;