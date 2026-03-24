// Centralno mesto za uređivanje sadržaja portfolija.
// Ovde menjaš tekstove, linkove i slike po sekcijama.
const portfolioData = {
    skills: [
        {
            title: "Cybersecurity",
            description: "Radim u kontrolisanim lab okruženjima gde testiram bezbednosne scenarije, prolazim kroz enumeraciju, proveravam nalaze i vežbam kako da tehnički objasnim šta je stvarni rizik, a šta samo signal iz alata.",
            highlights: [
                "Postavljanje i korišćenje izolovanih test okruženja za bezbednosnu praksu.",
                "Osnovni pentest workflow: reconnaissance, enumeracija, validacija i dokumentovanje.",
                "Pristup koji kombinuje alat, ručnu proveru i razumevanje konteksta sistema."
            ],
            tags: ["Penetration Testing", "Enumeration", "Web Security", "Methodology", "Linux"]
        },
        {
            title: "Networking",
            description: "Mreže posmatram kao ključni deo security rada. Fokus mi je na TCP/IP osnovi, skeniranju, mapiranju servisa, pasivnoj analizi saobraćaja i povezivanju mrežnih tragova sa realnim ponašanjem sistema, uz formalnu osnovu iz administratorskog mrežnog smera i rada u Cisco Packet Tracer okruženju.",
            highlights: [
                "Rad sa Nmap-om za skeniranje, servisnu detekciju i osnovnu enumeraciju.",
                "Wireshark za čitanje protokola, tokova i anomaličnih obrazaca u saobraćaju.",
                "Cisco Packet Tracer za mrežne topologije, osnovnu konfiguraciju i simulaciju mrežnih scenarija.",
                "Razumevanje IP adresiranja, subnetting-a, routing/switching osnova i načina na koji mrežni sloj pomaže u potvrđivanju ili odbacivanju nalaza."
            ],
            tags: ["TCP/IP", "Nmap", "Wireshark", "Cisco Packet Tracer", "Subnetting", "Routing & Switching"]
        },
        {
            title: "Systems",
            description: "Navikao sam da sigurnosni rad gradim na stabilnom sistemskom razumevanju: Linux okruženje, virtualizacija, osnovna konfiguracija servisa i priprema test infrastrukture za više scenarija.",
            highlights: [
                "Korišćenje Kali Linux-a i komandne linije u svakodnevnom radu.",
                "Virtualne mašine za odvajanje napadačkih i ciljnih okruženja.",
                "Podešavanje okruženja tako da testiranje bude ponovljivo i uredno dokumentovano."
            ],
            tags: ["Kali Linux", "Virtual Machines", "CLI", "Environment Setup", "Troubleshooting"]
        },
        {
            title: "Programming",
            description: "Programiranje koristim kao podršku sigurnosnom radu: za razumevanje backend logike, rad sa skriptama, SQL upite, organizaciju koda i osnovnu automatizaciju rutinskih koraka.",
            highlights: [
                "Python za manje skripte, brze provere i pomoćnu automatizaciju.",
                "Backend i Git osnova za razumevanje toka aplikacije i verzionisanje rada.",
                "Pisanje razumljivog i održivog koda umesto ad-hoc rešenja bez strukture."
            ],
            tags: ["Python", "Backend Basics", "Git", "Automation", "Clean Code"]
        },
        {
            title: "Databases",
            description: "Baze podataka ne posmatram samo kao SQL sintaksu, već kao modelovanje sistema: relacije, EER logika, DDL/DML i razumevanje kako kvalitet podataka i strukture utiče i na funkcionalnost i na bezbednost.",
            highlights: [
                "Relational modeling i EER pristup pre samog pisanja SQL-a.",
                "DDL/DML rad kroz konkretne scenarije i projektne zadatke.",
                "Praktična primena kroz ShopDB i JDBC povezivanje."
            ],
            tags: ["SQL", "EER", "DDL", "DML", "JDBC"]
        },
        {
            title: "AI Tools",
            description: "AI alate koristim kao ubrzanje u radu: za sumiranje dokumentacije, predloge checklista, objašnjenje outputa i bržu iteraciju ideja. Finalna provera i tehnička validacija ostaju ručne i moje odgovornosti.",
            highlights: [
                "Brže mapiranje dokumentacije i istraživanje nepoznatog alata ili koncepta.",
                "Korišćenje AI-a za brainstorming, ne za slepo prihvatanje rešenja.",
                "Ručno proveravam rezultate pre nego što ih koristim kao tehnički validan zaključak."
            ],
            tags: ["AI-assisted Research", "Documentation", "Prompting", "Validation", "Workflow Support"]
        }
    ],
    projects: [
        {
            category: "Cybersecurity Lab Projects",
            title: "Kontrolisano lab okruženje za testiranje bezbednosnih scenarija",
            period: "Kontinuirani samostalni rad",
            summary: "Lokalno virtualizovano okruženje u kome postavljam više sistema i servisa kako bih bezbedno vežbao enumeration workflow, osnovne napadačke scenarije i dokumentovanje nalaza bez uticaja na realna produkciona okruženja.",
            responsibilities: [
                "Postavljanje više VM instanci sa jasno odvojenim ulogama napadačke i ciljne mašine.",
                "Korišćenje Nmap-a, Wireshark-a, Linux CLI-ja i osnovnih web/security alata za mapiranje servisa i proveru ponašanja sistema.",
                "Vođenje beleški o konfiguraciji, alatima, rezultatima i sledećim iteracijama testa."
            ],
            learnings: [
                "Bolje razumem kako konfiguracija servisa menja vidljivost i površinu napada.",
                "Naučio sam da nalaz mora da se potvrdi kroz više izvora, ne samo kroz jedan alat.",
                "Vežbam disciplinu da svaki scenario ostane ponovljiv i tehnički objašnjiv."
            ],
            technologies: ["Kali Linux", "VirtualBox", "Nmap", "Wireshark", "Linux CLI", "Burp Suite"],
            images: [
                {
                    src: "public/images/projects/TryHackMe.png",
                    alt: "TryHackMe laboratorijski rad",
                    caption: "TryHackMe laboratorijski rad i praktična security vežba u kontrolisanom okruženju."
                }
            ],
            links: [
                { label: "GitHub profil", href: "https://github.com/Jaddes" },
                { label: "TryHackMe", href: "https://tryhackme.com/TryHackMe" }
            ]
        },
        {
            category: "Network Analysis",
            title: "NetworkScanner: scanning i enumeracija u realnim tehničkim scenarijima",
            period: "Praktične vežbe i samostalni rad",
            summary: "Fokus projekta je na razumevanju mreže kao izvora istine: skeniranje cilja, razdvajanje relevantnih portova i servisa, analiza paketa i povezivanje dobijenih signala sa narednim koracima u bezbednoskom testiranju.",
            responsibilities: [
                "Skeniranje i osnovna servisna enumeracija pomoću Nmap-a i sličnih alata.",
                "Wireshark analiza protokola, request/response tokova i neobičnih obrazaca u saobraćaju.",
                "Poređenje aktivnog skeniranja sa pasivnom analizom kako bi rezultat bio pouzdaniji."
            ],
            learnings: [
                "Mrežna analiza mi pomaže da brže razlikujem šum od stvarno korisnog bezbednosnog signala.",
                "Postao sam pažljiviji u tumačenju outputa i proveri da li servis zaista radi ono što alat sugeriše.",
                "Razvijam osećaj za to kako mrežni tragovi podržavaju ili pobijaju bezbednosnu hipotezu."
            ],
            technologies: ["Nmap", "Wireshark", "TCP/IP", "Service Enumeration", "Packet Analysis"],
            images: [
                {
                    src: "public/images/projects/NetworkScanner.png",
                    alt: "NetworkScanner projekat i rezultat mrežne analize",
                    caption: "NetworkScanner projekat za scanning, enumeraciju i praktičan mrežni rad."
                }
            ],
            links: [
                { label: "GitHub profil", href: "https://github.com/Jaddes" },
                { label: "NetworkScanner repo", href: "https://github.com/Jaddes/NetworkScanner" }
            ]
        },
        {
            category: "Database Project",
            title: "ShopDB: relacioni model, SQL logika i JDBC integracija",
            period: "Akademski i praktični projektni rad",
            summary: "ShopDB predstavlja bazu podataka za prodajni domen sa fokusom na relacijsko modelovanje, EER dizajn, DDL/DML logiku i povezivanje sa Java/JDBC slojem. Projekat je važan zato što pokazuje inženjersku disciplinu iza security interesa.",
            responsibilities: [
                "Modelovanje entiteta, relacija i ograničenja pre same implementacije baze.",
                "Pisanje SQL skripti za definisanje šeme, upite i rad sa podacima.",
                "Povezivanje baze sa aplikacionim slojem kroz JDBC i proveru rada upita."
            ],
            learnings: [
                "Bolje razumem kako kvalitet modela direktno utiče na kvalitet aplikacione logike.",
                "Rad sa bazama mi pomaže i u security kontekstu jer jasnije vidim tok podataka i potencijalna uska grla.",
                "Vežbam da tehnički sistem dokumentujem od modela do implementacije."
            ],
            technologies: ["SQL", "EER", "DDL", "DML", "JDBC", "Java"],
            images: [],
            links: [
                { label: "GitHub profil", href: "https://github.com/Jaddes" },
                { label: "ShopDB repo", href: "https://github.com/Jaddes/ShopDB" }
            ]
        }
    ],
    competitions: [
        {
            title: "RCTF 2025",
            date: "15-17. novembar 2025",
            description: "Učešće u online Jeopardy CTF-u sa fokusom na web, exploitation i problem solving pod pritiskom vremena. Ovakva takmičenja mi pomažu da brzo procenim pravac rada, odvojim bitne tragove od šuma i učim iz realnog tempa rešavanja zadataka.",
            tags: ["Web", "Pwn", "Crypto", "Networking", "Jeopardy"],
            images: [],
            links: [
                { label: "Zvanični sajt", href: "https://rctf2025.xctf.org.cn/" },
                { label: "CTFtime", href: "https://ctftime.org/event/2992/" }
            ]
        },
        {
            title: "BackdoorCTF 2025",
            date: "6-8. decembar 2025",
            description: "Online takmičenje koje posebno vrednujem zbog kombinacije više oblasti i potrebe da se brzo prebacujem između različitih tipova zadataka. Fokus je bio na učenju kroz rad: analiza task opisa, testiranje pretpostavki i prilagođavanje pristupa kada prvi pokušaj ne daje rezultat.",
            tags: ["Web", "Reverse", "Crypto", "Forensics", "Jeopardy"],
            images: [],
            links: [
                { label: "Zvanični sajt", href: "https://backdoor.infoseciitr.in/" },
                { label: "CTFtime", href: "https://ctftime.org/event/2915/" }
            ]
        },
        {
            title: "0CTF 2025",
            date: "20-22. decembar 2025",
            description: "Online učešće na 0CTF-u mi je važno kao kontakt sa zahtevnijim zadacima koji traže disciplinu, strpljenje i dobru tehničku osnovu. Takav format mi pomaže da učim iz ozbiljnijih security izazova i realnog takmičarskog tempa.",
            tags: ["Pwn", "Crypto", "Web", "High Difficulty", "Jeopardy"],
            images: [],
            links: [
                { label: "Zvanični sajt", href: "https://ctf.0ops.sjtu.cn/" },
                { label: "CTFtime", href: "https://ctftime.org/event/2997/" }
            ]
        }
    ],
    volunteering: [
        {
            organization: "KONTEH",
            role: "Volonterska i organizaciona podrška",
            description: "Angažman na studentskom događaju i sajmu gde je važno držati dobar operativni tok, komunikaciju sa učesnicima i urednu koordinaciju više aktivnosti u kratkim vremenskim intervalima.",
            outcomes: [
                "Rad u dinamičnom događajnom okruženju sa više paralelnih zadataka.",
                "Vežbanje odgovornosti, tačne komunikacije i operativne pouzdanosti.",
                "Jačanje profesionalnog nastupa i saradnje sa učesnicima i organizacionim timom."
            ],
            tags: ["Teamwork", "Operations", "Communication", "Event Support"],
            images: [
                {
                    src: "public/images/volunteering/Konteh.jpg",
                    alt: "Fotografija sa KONTEH volontiranja",
                    caption: "Par trenutaka sa volontiranja na KONTEH događaju."
                },
                {
                    src: "public/images/volunteering/Konteh1.jpg",
                    alt: "Fotografija sa KONTEH angažmana",
                    caption: "Još jedan kadar sa angažmana i atmosfere tokom događaja."
                },
                {
                    src: "public/images/volunteering/Konteh2.jpg",
                    alt: "Fotografija sa KONTEH događaja",
                    caption: "Dodatna fotografija sa volontiranja i organizacione podrške."
                }
            ],
            links: [
                { label: "Zvanični sajt", href: "https://www.konteh.org/" }
            ]
        },
        {
            organization: "EESTEC",
            role: "Studentski i volonterski angažman",
            description: "Kroz EESTEC okruženje gradim timsku saradnju, komunikaciju i rad u studentskoj tehničkoj zajednici. Takav angažman mi je važan jer povezuje tehnički razvoj sa odgovornošću prema timu i zajednici.",
            outcomes: [
                "Saradnja sa timovima i koordinacija oko zadataka i rokova.",
                "Bolje razumevanje kako community rad jača profesionalne navike.",
                "Razvoj komunikacije, organizacije i odgovornosti u realnim aktivnostima."
            ],
            tags: ["Community", "Teamwork", "Coordination", "Student Organization"],
            images: [],
            links: [
                { label: "Zvanični sajt", href: "https://eestec.net/cities/novi-sad/" }
            ]
        },
        {
            organization: "Data Science Conference",
            role: "Volonterska podrška događaju",
            description: "Angažman na konferenciji daje mi širi pogled na profesionalni event ekosistem, saradnju sa učesnicima i važnost uredne organizacije kada je tehnička publika i program visokog intenziteta.",
            outcomes: [
                "Praktično iskustvo u podršci velikom profesionalnom događaju.",
                "Kontakt sa tehnološkom zajednicom i sadržajem koji spaja AI, data i industriju.",
                "Vežbanje odgovornosti, organizacije i komunikacije u javnom okruženju."
            ],
            tags: ["Professional Events", "Communication", "Operations", "Tech Community"],
            images: [
                {
                    src: "public/images/volunteering/volunteering-proof-placeholderDSC.jpg",
                    alt: "Fotografija sa Data Science Conference angažmana",
                    caption: "Fotografija sa Data Science Conference volonterskog angažmana."
                }
            ],
            links: [
                { label: "Zvanični sajt", href: "https://datasciconference.com/" }
            ]
        },
        {
            organization: "BalCCon",
            role: "Community i event angažman",
            description: "BalCCon mi je posebno važan zbog security i hacker community konteksta i direktnog kontakta sa regionalnom bezbednosnom scenom. Na samom događaju fotografisanje nije bilo dozvoljeno, tako da trenutno nemam slike, ali mi je iskustvo ostalo bitno zbog atmosfere, predavanja i community razmene znanja.",
            outcomes: [
                "Povezivanje sa security zajednicom i događajem sa jakim tehničkim identitetom.",
                "Jačanje osećaja za community, razmenu znanja i profesionalno ponašanje na događajima.",
                "Dodatna potvrda da interesovanje za cybersecurity nije samo akademsko već i praktično i zajedničko."
            ],
            tags: ["Cybersecurity Community", "Volunteering", "Networking", "Event Support"],
            images: [],
            links: [
                { label: "Zvanični sajt", href: "https://balccon.org/" },
                { label: "BalCCon2k25", href: "https://2k25.balccon.org/" }
            ]
        }
    ]
};

let galleryImages = [];
let currentGalleryIndex = 0;

const skillsGrid = document.getElementById("skills-grid");
const projectsGrid = document.getElementById("projects-grid");
const competitionsTimeline = document.getElementById("competitions-timeline");
const volunteeringGrid = document.getElementById("volunteering-grid");
const copyEmailButton = document.getElementById("copy-email");
const copyFeedback = document.getElementById("copy-feedback");
const currentYear = document.getElementById("current-year");
const siteHeader = document.querySelector(".site-header");
const modal = document.getElementById("proof-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const closeModalButton = document.getElementById("close-modal");
const prevProofButton = document.getElementById("prev-proof");
const nextProofButton = document.getElementById("next-proof");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));

function renderSkills() {
    skillsGrid.innerHTML = portfolioData.skills
        .map((skill, index) => `
            <article class="surface skill-card reveal">
                <div class="skill-card-header">
                    <div>
                        <span class="detail-label">Oblast</span>
                        <h3>${skill.title}</h3>
                    </div>
                    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
                </div>
                <p>${skill.description}</p>
                <ul class="detail-list">
                    ${skill.highlights.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="tag-list">
                    ${skill.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
            </article>
        `)
        .join("");
}

function renderProjects() {
    projectsGrid.innerHTML = portfolioData.projects
        .map((project) => `
            <article class="surface project-card reveal">
                <div class="card-topline">
                    <div>
                        <span class="card-badge">${project.category}</span>
                        <h3>${project.title}</h3>
                    </div>
                    <span class="item-date">${project.period}</span>
                </div>

                <p>${project.summary}</p>

                <div class="project-layout">
                    <div class="split-panel">
                        <div>
                            <p class="subsection-title">Šta radim</p>
                            <ul class="detail-list">
                                ${project.responsibilities.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                        <div>
                            <p class="subsection-title">Šta sam naučio</p>
                            <ul class="detail-list">
                                ${project.learnings.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                    </div>

                    <div class="split-panel">
                        <div>
                            <p class="subsection-title">Tehnologije</p>
                            <div class="tag-list">
                                ${project.technologies.map((item) => `<span class="tag">${item}</span>`).join("")}
                            </div>
                        </div>
                        ${renderGallerySection(project.images, "Galerija")}
                        <div>
                            <p class="subsection-title">Linkovi</p>
                            <div class="link-list">
                                ${project.links.map((link) => `<a class="text-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `)
        .join("");
}

function renderCompetitions() {
    competitionsTimeline.innerHTML = portfolioData.competitions
        .map((competition) => `
            <article class="surface timeline-card reveal">
                <span class="item-date">${competition.date}</span>
                <h3>${competition.title}</h3>
                <p>${competition.description}</p>
                <div class="tag-list">
                    ${competition.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <div class="link-list">
                    ${competition.links.map((link) => `<a class="text-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
                </div>
            </article>
        `)
        .join("");
}

function renderVolunteering() {
    volunteeringGrid.innerHTML = portfolioData.volunteering
        .map((item) => `
            <article class="surface volunteer-card reveal">
                <div class="card-topline">
                    <div>
                        <span class="card-badge">${item.organization}</span>
                        <h3>${item.role}</h3>
                    </div>
                </div>
                <p>${item.description}</p>
                <ul class="detail-list">
                    ${item.outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}
                </ul>
                <div class="tag-list">
                    ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                ${renderGallerySection(item.images, "Galerija")}
                <div class="link-list">
                    ${item.links.map((link) => `<a class="text-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
                </div>
            </article>
        `)
        .join("");
}

function renderGallerySection(images, title) {
    if (!images || !images.length) {
        return "";
    }

    return `
        <div class="proof-section">
            <p class="subsection-title">${title}</p>
            ${renderProofGallery(images)}
        </div>
    `;
}

function renderProofGallery(images) {
    return `
        <div class="evidence-gallery">
            ${images
                .map(
                    (image) => `
                        <div class="proof-thumb">
                            <button class="proof-trigger" type="button" data-proof-src="${image.src}" data-proof-alt="${image.alt}" data-proof-caption="${image.caption}">
                                <img src="${image.src}" alt="${image.alt}">
                            </button>
                            <p class="proof-caption">${image.caption}</p>
                        </div>
                    `
                )
                .join("")}
        </div>
    `;
}

function initializeRevealObserver() {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        {
            threshold: 0.18
        }
    );

    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
}

function initializeActiveNavigation() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        },
        {
            threshold: 0.45,
            rootMargin: "-20% 0px -35% 0px"
        }
    );

    sections.forEach((section) => navObserver.observe(section));
}

function openModal(index) {
    currentGalleryIndex = index;
    const activeImage = galleryImages[currentGalleryIndex];
    if (!activeImage) {
        return;
    }

    modalImage.src = activeImage.src;
    modalImage.alt = activeImage.alt;
    modalCaption.textContent = activeImage.caption;
    modal.hidden = false;
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
}

function stepGallery(direction) {
    if (!galleryImages.length) {
        return;
    }

    currentGalleryIndex = (currentGalleryIndex + direction + galleryImages.length) % galleryImages.length;
    openModal(currentGalleryIndex);
}

function initializeProofGallery() {
    const proofButtons = Array.from(document.querySelectorAll(".proof-trigger"));
    galleryImages = proofButtons.map((button) => ({
        src: button.dataset.proofSrc,
        alt: button.dataset.proofAlt,
        caption: button.dataset.proofCaption
    }));

    proofButtons.forEach((button, index) => {
        button.addEventListener("click", () => openModal(index));
    });
}

function initializeClipboard() {
    if (!copyEmailButton) {
        return;
    }

    copyEmailButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText("borkolahos@gmail.com");
            copyFeedback.textContent = "Email je kopiran.";
        } catch (error) {
            copyFeedback.textContent = "Kopiranje nije uspelo. Email: borkolahos@gmail.com";
        }
    });
}

function initializeModalControls() {
    closeModalButton.addEventListener("click", closeModal);
    prevProofButton.addEventListener("click", () => stepGallery(-1));
    nextProofButton.addEventListener("click", () => stepGallery(1));

    modal.addEventListener("click", (event) => {
        if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (modal.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeModal();
        }

        if (event.key === "ArrowRight") {
            stepGallery(1);
        }

        if (event.key === "ArrowLeft") {
            stepGallery(-1);
        }
    });
}

function initializeHeaderState() {
    const onScroll = () => {
        siteHeader.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
}

function initializeFooterYear() {
    currentYear.textContent = new Date().getFullYear();
}

function boot() {
    renderSkills();
    renderProjects();
    renderCompetitions();
    renderVolunteering();

    initializeProofGallery();
    initializeRevealObserver();
    initializeActiveNavigation();
    initializeClipboard();
    initializeModalControls();
    initializeHeaderState();
    initializeFooterYear();
}

boot();
