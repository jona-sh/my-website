const inPagesFolder = window.location.pathname.includes("/pages/");
const prefix = inPagesFolder ? "../" : "";

document.querySelector("header").innerHTML = `
    <ul class="horizontaleAnordnung">
        <li><a href="${prefix}pages/formats.html">erster Eintrag</a></li>
        <li>zweiter Eintrag</li>
        <li>Liste innerhalb des Headers</li>
        <li>also formatiert</li>
        <li><a href="${prefix}index.html">Startseite</a></li>
    </ul>
`;

document.querySelector("footer").innerHTML = `
    <p>&copy; 2026 Meine Website</p>
    <nav>
        <a href="https://github.com/jona-sh">Kontakt</a>
        <a href="${prefix}impressum.html">Impressum</a>
        <a href="${prefix}datenschutz.html">Datenschutz</a>
    </nav>
`;