const WA = "https://wa.me/5511948181368";
const IG = "https://www.instagram.com/alyaravidros/";
const EMAIL = "maymayarabonafim@gmail.com";

const trustItems = [
    {
        icon: "zap",
        label: "Atendemos rápido e com agilidade",
        sub: "Resposta no mesmo dia",
    },
    {
        icon: "file-text",
        label: "Orçamento prático e rápido",
        sub: "Em até 1 dia útil",
    },
    {
        icon: "tag",
        label: "Preço justo",
        sub: "Sem inflar etapas",
    },
    {
        icon: "award",
        label: "16 anos de experiência",
        sub: "Em projetos sob medida",
    },
    {
        icon: "map-pin",
        label: "Atuação em SP",
        sub: "Capital e proximidades",
    },
];

const services = [
    "Vidro temperado",
    "Esquadrias de alumínio",
    "Fachadas de ripado",
    "Acabamento em ACM",
    "Box",
    "Espelho",
    "Sacadas",
];

const projects = [
    {
        id: "p01",
        category: "Vidro Temperado",
        title: "Fechamento em vidro temperado incolor",
        caption: "Sala de estar, Vila Madalena",
        ratio: "4:5",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=78&auto=format&fit=crop",
        description:
            "Painel de vidro temperado incolor de 10 mm com lapidação reta e ferragens em inox escovado. Execução limpa, sem chumbamento, com acabamento detalhado nas extremidades.",
        specs: {
            service: "Vidro temperado incolor",
            thickness: "10 mm",
            dimensions: "3,40 m × 2,60 m",
            hardware: "Ferragens em aço inox escovado",
            finish: "Lapidação reta com polimento",
            time: "Instalação em 1 dia",
        },
    },
    {
        id: "p02",
        category: "Esquadrias de Alumínio",
        title: "Janela de correr em alumínio preto fosco",
        caption: "Edifício residencial, Pinheiros",
        ratio: "1:1",
        image:
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1200&q=78&auto=format&fit=crop",
        description:
            "Esquadria sob medida em alumínio com pintura eletrostática preto fosco, vidro laminado 6 mm e roldanas reforçadas. Vedação acústica e térmica reforçadas.",
        specs: {
            service: "Esquadria de alumínio linha 30",
            thickness: "Perfil 1,5 mm",
            dimensions: "1,80 m × 1,20 m",
            hardware: "Roldanas reforçadas, fecho de embutir",
            finish: "Pintura eletrostática preto fosco",
            time: "Fabricação + instalação em 6 dias",
        },
    },
    {
        id: "p03",
        category: "Fachada de Ripado",
        title: "Fachada ripada em alumínio amadeirado",
        caption: "Comercial, Vila Olímpia",
        ratio: "16:9",
        image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80&auto=format&fit=crop",
        description:
            "Painel ripado em alumínio com acabamento amadeirado, fixado em estrutura metálica oculta. Espaçamento técnico calculado para conforto térmico e identidade visual.",
        specs: {
            service: "Ripado em alumínio",
            thickness: "Perfis 50 × 25 mm",
            dimensions: "12,00 m × 3,80 m",
            hardware: "Estrutura metálica oculta",
            finish: "Adesivado madeira clara",
            time: "10 dias úteis",
        },
    },
    {
        id: "p04",
        category: "Box para Banheiro",
        title: "Box frontal em vidro temperado verde",
        caption: "Apartamento, Moema",
        ratio: "4:5",
        image:
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=78&auto=format&fit=crop&sat=-20",
        description:
            "Box em vidro temperado verde 8 mm com bisotê de 1 cm e kit articulado em inox. Acabamento sem silicone exposto na lateral.",
        specs: {
            service: "Box de vidro temperado",
            thickness: "8 mm verde",
            dimensions: "1,40 m × 1,90 m",
            hardware: "Kit articulado inox",
            finish: "Bisotê 1 cm nas bordas",
            time: "Instalação em 1 dia",
        },
    },
    {
        id: "p05",
        category: "Fachada ACM",
        title: "Revestimento em ACM cinza grafite",
        caption: "Loja, Itaim Bibi",
        ratio: "16:9",
        image:
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop",
        description:
            "Revestimento em ACM 4 mm com pintura PVDF e estrutura tubular galvanizada. Recortes precisos, juntas alinhadas a régua e acabamento de fresa de 90°.",
        specs: {
            service: "Fachada ACM",
            thickness: "Placa 4 mm / núcleo 3 mm",
            dimensions: "7,20 m × 4,50 m",
            hardware: "Estrutura tubular galvanizada",
            finish: "Cinza grafite fosco PVDF",
            time: "8 dias úteis",
        },
    },
    {
        id: "p06",
        category: "Espelho Sob Medida",
        title: "Espelho com moldura preta industrial",
        caption: "Hall social, Higienópolis",
        ratio: "4:5",
        image:
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=78&auto=format&fit=crop",
        description:
            "Espelho cristal lapidado 5 mm com bisotê de 2 cm e moldura em aço pintado preto fosco. Fixação invisível por estrutura traseira.",
        specs: {
            service: "Espelho cristal lapidado",
            thickness: "5 mm",
            dimensions: "1,20 m × 2,00 m",
            hardware: "Moldura em aço preto",
            finish: "Lapidação polida + bisotê 2 cm",
            time: "5 dias úteis",
        },
    },
    {
        id: "p07",
        category: "Sacada de Vidro",
        title: "Sacada com fechamento retrátil",
        caption: "Cobertura, Jardins",
        ratio: "16:9",
        image:
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop",
        description:
            "Fechamento retrátil em vidro temperado 8 mm, com sistema de 6 folhas deslizantes e dobráveis. Trilhos em alumínio anodizado e regulagem milimétrica.",
        specs: {
            service: "Fechamento de sacada",
            thickness: "Vidro temperado 8 mm",
            dimensions: "5,80 m de extensão",
            hardware: "Sistema retrátil 6 folhas",
            finish: "Trilho superior e inferior em alumínio anodizado",
            time: "Instalação em 2 dias",
        },
    },
    {
        id: "p08",
        category: "Esquadrias de Alumínio",
        title: "Porta de correr ampla com perfil mínimo",
        caption: "Residência, Alto de Pinheiros",
        ratio: "1:1",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=78&auto=format&fit=crop",
        description:
            "Porta de correr de perfil mínimo, vidro temperado laminado 8+8 mm, ferragens reforçadas e acabamento anodizado preto. Vão livre amplo, deslizamento suave.",
        specs: {
            service: "Porta de correr suprema",
            thickness: "Perfil 2 mm",
            dimensions: "3,60 m × 2,30 m",
            hardware: "Roldanas dupla via, fechadura de embutir",
            finish: "Alumínio anodizado preto",
            time: "Fabricação + instalação em 9 dias",
        },
    },
];

const processSteps = [
    {
        number: "01",
        icon: "message-circle",
        title: "Você chama no WhatsApp",
        desc: "Atendimento direto com a equipe — sem formulário, sem espera.",
    },
    {
        number: "02",
        icon: "file-search",
        title: "Envia o projeto ou agendamos visita",
        desc: "Medição precisa e alinhamento técnico no local quando necessário.",
    },
    {
        number: "03",
        icon: "clipboard-check",
        title: "Recebe o orçamento em até 1 dia",
        desc: "Preço justo, prazos claros, formas de pagamento e tudo detalhado.",
    },
    {
        number: "04",
        icon: "hammer",
        title: "Tudo alinhado, iniciamos a obra",
        desc: "Execução limpa, acabamento detalhista e entrega no prazo combinado.",
        highlight: true,
    },
];

const reviews = [
    {
        id: "r1",
        name: "Camila Ribeiro",
        context: "Apartamento · Vila Olímpia",
        rating: 5,
        audio: "audio/sample.wav",
        duration: "00:14",
        text:
            "Fechamento de sacada perfeito. Vieram para a medição no mesmo dia, mandaram orçamento limpo e instalaram sem nenhuma sujeira. O acabamento das emendas é de outro nível.",
    },
    {
        id: "r2",
        name: "Eduardo Mattos",
        context: "Comercial · Itaim Bibi",
        rating: 5,
        audio: null,
        duration: null,
        text:
            "Contratei a Alyara para a fachada em ACM da nossa loja. Prazo cumprido, equipe técnica e organizada. Resolveu detalhes que outras empresas tinham deixado mal feitos.",
    },
    {
        id: "r3",
        name: "Marina Tavares",
        context: "Cobertura · Jardins",
        rating: 5,
        audio: "audio/sample.wav",
        duration: "00:18",
        text:
            "O box que instalaram ficou impecável. Bisotê preciso, ferragens alinhadas e zero silicone aparecendo. Vou indicar para o prédio inteiro.",
    },
    {
        id: "r4",
        name: "Rafael Camargo",
        context: "Residência · Alto de Pinheiros",
        rating: 5,
        audio: null,
        duration: null,
        text:
            "Porta de correr enorme, perfil mínimo. Veio do tamanho exato e o deslizamento é silencioso. Atendimento direto, sem enrolação. Preço justo pelo que entregam.",
    },
    {
        id: "r5",
        name: "Patrícia Lemos",
        context: "Hall social · Higienópolis",
        rating: 5,
        audio: "audio/sample.wav",
        duration: "00:11",
        text:
            "Espelhos sob medida com moldura preta. Levaram o cuidado de proteger o piso e o elevador. Acabamento profissional e clima de quem entende o que está fazendo.",
    },
    {
        id: "r6",
        name: "Henrique Borges",
        context: "Edifício · Pinheiros",
        rating: 5,
        audio: null,
        duration: null,
        text:
            "Trocamos toda a esquadria do apartamento. A Alyara foi a única que mandou orçamento detalhado e respondeu no mesmo dia. Trabalho rápido, limpo, sem retrabalho.",
    },
];

const faqs = [
    {
        q: "O orçamento é gratuito?",
        a: "Sim. O orçamento é totalmente gratuito e sem compromisso. Você nos envia as informações pelo WhatsApp ou agendamos uma visita técnica para medição — e devolvemos a proposta detalhada em até 1 dia útil.",
    },
    {
        q: "Atendem toda São Paulo?",
        a: "Atendemos toda a São Paulo capital e regiões próximas. Para projetos fora da cidade, consulte com a nossa equipe — avaliamos caso a caso conforme o deslocamento e o porte da obra.",
    },
    {
        q: "Quanto tempo demora?",
        a: "Depende do escopo. Box, espelhos e fechamentos pequenos costumam ser instalados em 1 a 3 dias. Esquadrias e fachadas levam de 6 a 15 dias úteis entre fabricação e montagem. O prazo exato vai no orçamento.",
    },
    {
        q: "Fazem instalação?",
        a: "Sim. Cuidamos de tudo: medição, fabricação, transporte e instalação com equipe própria. Você não precisa contratar pedreiro, montador ou serralheiro separados.",
    },
    {
        q: "Trabalham com esquadrias?",
        a: "Sim. Trabalhamos com esquadrias de alumínio sob medida — janelas, portas, fachadas, perfis suprema, linhas 25/30/40 e acabamentos anodizados ou em pintura eletrostática.",
    },
    {
        q: "Parcelam?",
        a: "Sim. Aceitamos parcelamento no cartão e também combinamos divisões em entradas e parcelas conforme o projeto. As condições vão claras no orçamento, sem letras miúdas.",
    },
];

const waveHeights = Array.from({ length: 32 }, (_, index) => 6 + ((index * 37) % 18));

const ICONS = {
    "arrow-up-right":
        '<path d="M7 17 17 7"></path><path d="M7 7h10v10"></path>',
    "arrow-left": '<path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>',
    "arrow-right": '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    award:
        '<circle cx="12" cy="8" r="6"></circle><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>',
    clock:
        '<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',
    "clipboard-check":
        '<rect x="9" y="2" width="6" height="4" rx="1"></rect><path d="M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"></path><path d="m9 14 2 2 4-4"></path>',
    "file-search":
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"></path><path d="M14 2v6h6"></path><path d="M18 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"></path><path d="m20.2 20.2 1.8 1.8"></path>',
    "file-text":
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>',
    hammer:
        '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>',
    "help-circle":
        '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path>',
    instagram:
        '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37a4 4 0 1 1-4.63-4.63A4 4 0 0 1 16 11.37z"></path><path d="M17.5 6.5h.01"></path>',
    layers:
        '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>',
    mail:
        '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    "map-pin":
        '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>',
    menu: '<path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path>',
    minus: '<path d="M5 12h14"></path>',
    pause: '<rect x="6" y="4" width="4" height="16" rx="1"></rect><rect x="14" y="4" width="4" height="16" rx="1"></rect>',
    phone:
        '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    play: '<polygon points="8 5 19 12 8 19 8 5"></polygon>',
    plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
    ruler:
        '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path>',
    star:
        '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
    tag:
        '<path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z"></path><path d="M7 7h.01"></path>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
    zap:
        '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"></path>',
    "message-circle":
        '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>',
};

const state = {
    activeProject: null,
    currentReview: 0,
    openFaq: 0,
    currentAudio: null,
};

function icon(name, size = 16, extraClass = "", filled = false) {
    const inner = ICONS[name];

    if (!inner) {
        return "";
    }

    const fill = filled ? ' fill="currentColor"' : ' fill="none"';

    return `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${size}"
            height="${size}"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="${extraClass}"
            aria-hidden="true"${fill}
        >${inner}</svg>
    `.trim();
}

function hydrateIcons(scope = document) {
    scope.querySelectorAll("[data-icon]").forEach((node) => {
        const size = Number(node.getAttribute("data-size")) || 16;
        node.innerHTML = icon(node.getAttribute("data-icon"), size);
    });
}

function renderTrustItems() {
    const container = document.getElementById("trust-grid");

    container.innerHTML = trustItems
        .map(
            (item, index) => `
                <div class="trust-item" data-testid="trust-item-${index}">
                    <span class="trust-icon">${icon(item.icon, 16)}</span>
                    <div>
                        <div class="trust-item-title font-display">${item.label}</div>
                        <div class="trust-item-sub font-body">${item.sub}</div>
                    </div>
                </div>
            `,
        )
        .join("");
}

function renderServiceChips() {
    const container = document.getElementById("project-service-chips");

    container.innerHTML = services
        .map(
            (service) => `
                <span class="service-chip font-body">${service}</span>
            `,
        )
        .join("");
}

function renderProjects() {
    const track = document.getElementById("projects-track");
    const counter = document.getElementById("projects-counter");

    track.innerHTML = projects
        .map(
            (project, index) => `
                <button
                    class="project-card"
                    type="button"
                    data-project-index="${index}"
                    data-ratio="${project.ratio}"
                    data-testid="project-card-${index}"
                    aria-label="${project.title}"
                >
                    <div class="project-media">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="project-overlay"></div>
                        <div class="project-badge alyara-glass">
                            <span class="font-mono-tech">${project.category}</span>
                        </div>
                        <div class="project-copy">
                            <div class="project-title font-serif-it">${project.title}</div>
                            <div class="project-caption font-body">${project.caption}</div>
                        </div>
                    </div>
                </button>
            `,
        )
        .join("");

    counter.textContent = `${String(projects.length).padStart(2, "0")} projetos · arraste ou navegue`;

    track.querySelectorAll("[data-project-index]").forEach((button) => {
        button.addEventListener("click", () => {
            openProjectModal(Number(button.dataset.projectIndex));
        });
    });
}

function updateProjectButtons() {
    const track = document.getElementById("projects-track");
    const prevButton = document.getElementById("projects-prev");
    const nextButton = document.getElementById("projects-next");

    prevButton.disabled = track.scrollLeft <= 8;
    nextButton.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
}

function bindProjectCarousel() {
    const track = document.getElementById("projects-track");
    const prevButton = document.getElementById("projects-prev");
    const nextButton = document.getElementById("projects-next");

    const scrollTrack = (direction) => {
        track.scrollBy({
            left: direction * (track.clientWidth * 0.7),
            behavior: "smooth",
        });
    };

    prevButton.addEventListener("click", () => scrollTrack(-1));
    nextButton.addEventListener("click", () => scrollTrack(1));
    track.addEventListener("scroll", updateProjectButtons, { passive: true });
    window.addEventListener("resize", updateProjectButtons);
    updateProjectButtons();
}

function openProjectModal(index) {
    const project = projects[index];

    if (!project) {
        return;
    }

    state.activeProject = index;

    document.getElementById("modal-image").src = project.image;
    document.getElementById("modal-image").alt = project.title;
    document.getElementById("modal-category").textContent = project.category;
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-description").textContent = project.description;

    const specs = [
        { icon: "layers", label: "Serviço", value: project.specs.service },
        { icon: "ruler", label: "Espessura", value: project.specs.thickness },
        { icon: "ruler", label: "Medidas", value: project.specs.dimensions },
        { icon: "hammer", label: "Ferragens", value: project.specs.hardware },
        { icon: "layers", label: "Acabamento", value: project.specs.finish },
        { icon: "clock", label: "Prazo", value: project.specs.time },
    ];

    document.getElementById("modal-specs").innerHTML = specs
        .map(
            (spec) => `
                <div>
                    <div class="spec-label font-mono-tech">
                        ${icon(spec.icon, 12)}
                        ${spec.label}
                    </div>
                    <div class="spec-value font-body">${spec.value}</div>
                </div>
            `,
        )
        .join("");

    document.getElementById("project-modal").hidden = false;
    document.body.classList.add("modal-open");
}

function closeProjectModal() {
    state.activeProject = null;
    document.getElementById("project-modal").hidden = true;
    document.body.classList.remove("modal-open");
}

function bindProjectModal() {
    const modal = document.getElementById("project-modal");
    const closeButton = document.getElementById("project-modal-close");
    const backdrop = document.getElementById("project-modal-backdrop");

    closeButton.addEventListener("click", closeProjectModal);
    backdrop.addEventListener("click", closeProjectModal);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeProjectModal();
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && state.activeProject !== null) {
            closeProjectModal();
        }
    });
}

function renderProcessSteps() {
    const container = document.getElementById("process-grid");

    container.innerHTML = processSteps
        .map((step, index) => {
            const connector =
                index < processSteps.length - 1
                    ? `
                        <svg
                            class="process-connector"
                            width="80"
                            height="120"
                            viewBox="0 0 80 120"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M0 30 L40 30 L40 90 L78 90"
                                stroke="var(--alyara-accent)"
                                stroke-opacity="0.55"
                                stroke-width="1.2"
                                stroke-dasharray="4 4"
                            ></path>
                            <path
                                d="M70 84 L78 90 L70 96"
                                stroke="var(--alyara-accent)"
                                stroke-opacity="0.9"
                                stroke-width="1.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    `
                    : "";

            return `
                <div
                    class="process-card-wrap alyara-reveal"
                    data-testid="process-step-${index + 1}"
                    style="margin-top: ${index * 28}px;"
                >
                    <div class="process-card${step.highlight ? " is-highlight" : ""}">
                        <div class="process-card-head">
                            <span class="process-step-number font-display">${step.number}</span>
                            <span class="process-step-icon">${icon(step.icon, 16)}</span>
                        </div>
                        <h3 class="font-display">${step.title}</h3>
                        <p class="font-body">${step.desc}</p>
                    </div>
                    ${connector}
                </div>
            `;
        })
        .join("");
}

function renderReviews() {
    const card = document.getElementById("review-card");
    const dots = document.getElementById("reviews-dots");
    const review = reviews[state.currentReview];

    card.innerHTML = `
        <div class="review-stars">
            ${Array.from({ length: review.rating })
                .map(() => icon("star", 16, "", true))
                .join("")}
            <span class="review-verified font-mono-tech">Cliente verificado</span>
        </div>
        <p class="review-quote font-serif-it">"${review.text}"</p>
        <div class="review-footer">
            <div>
                <div class="review-name font-display">${review.name}</div>
                <div class="review-context font-body">${review.context}</div>
            </div>
            <span class="review-count font-mono-tech">
                ${String(state.currentReview + 1).padStart(2, "0")} /
                ${String(reviews.length).padStart(2, "0")}
            </span>
        </div>
        ${review.audio ? buildAudioPlayer(review) : ""}
    `;

    dots.innerHTML = reviews
        .map(
            (_, index) => `
                <button
                    class="reviews-dot${index === state.currentReview ? " is-active" : ""}"
                    type="button"
                    data-review-index="${index}"
                    data-testid="reviews-dot-${index}"
                    aria-label="Avaliação ${index + 1}"
                ></button>
            `,
        )
        .join("");

    dots.querySelectorAll("[data-review-index]").forEach((button) => {
        button.addEventListener("click", () => {
            stopCurrentAudio();
            state.currentReview = Number(button.dataset.reviewIndex);
            renderReviews();
        });
    });

    bindAudioPlayer();
}

function buildAudioPlayer(review) {
    return `
        <div class="audio-player" data-testid="review-audio-${state.currentReview}">
            <audio preload="metadata" data-audio-player src="${review.audio}"></audio>
            <button
                class="audio-toggle"
                type="button"
                data-audio-toggle
                data-testid="review-audio-play-${state.currentReview}"
                aria-label="Tocar áudio"
            >
                ${icon("play", 16, "", true)}
            </button>
            <div class="audio-wave" data-audio-wave>
                ${waveHeights
                    .map(
                        (height) => `
                            <span style="height: ${height}px;"></span>
                        `,
                    )
                    .join("")}
            </div>
            <span class="audio-duration font-mono-tech">${review.duration || "—"}</span>
        </div>
    `;
}

function stopCurrentAudio() {
    if (state.currentAudio) {
        state.currentAudio.pause();
        state.currentAudio.currentTime = 0;
        state.currentAudio = null;
    }
}

function bindAudioPlayer() {
    const audio = document.querySelector("[data-audio-player]");
    const button = document.querySelector("[data-audio-toggle]");
    const waveBars = document.querySelectorAll("[data-audio-wave] span");

    if (!audio || !button) {
        return;
    }

    const updateWave = () => {
        const progress = audio.duration ? audio.currentTime / audio.duration : 0;

        waveBars.forEach((bar, index) => {
            bar.classList.toggle("is-filled", progress > index / waveBars.length);
        });
    };

    audio.addEventListener("timeupdate", updateWave);

    audio.addEventListener("ended", () => {
        button.innerHTML = icon("play", 16, "", true);
        button.setAttribute("aria-label", "Tocar áudio");
        state.currentAudio = null;
        updateWave();
    });

    audio.addEventListener("error", () => {
        button.disabled = true;
        button.setAttribute("aria-label", "Áudio indisponível");
        state.currentAudio = null;
    });

    button.addEventListener("click", async () => {
        try {
            if (state.currentAudio && state.currentAudio !== audio) {
                stopCurrentAudio();
            }

            if (audio.paused) {
                await audio.play();
                state.currentAudio = audio;
                button.innerHTML = icon("pause", 16, "", true);
                button.setAttribute("aria-label", "Pausar áudio");
            } else {
                audio.pause();
                button.innerHTML = icon("play", 16, "", true);
                button.setAttribute("aria-label", "Tocar áudio");
                state.currentAudio = null;
            }
        } catch (_error) {
            button.disabled = true;
            button.setAttribute("aria-label", "Áudio indisponível");
        }
    });
}

function bindReviewControls() {
    document.getElementById("reviews-prev").addEventListener("click", () => {
        stopCurrentAudio();
        state.currentReview = (state.currentReview - 1 + reviews.length) % reviews.length;
        renderReviews();
    });

    document.getElementById("reviews-next").addEventListener("click", () => {
        stopCurrentAudio();
        state.currentReview = (state.currentReview + 1) % reviews.length;
        renderReviews();
    });
}

function renderFaq() {
    const container = document.getElementById("faq-list");

    container.innerHTML = faqs
        .map((faq, index) => {
            const isOpen = index === state.openFaq;

            return `
                <div class="faq-item${isOpen ? " is-open" : ""}">
                    <button
                        type="button"
                        class="faq-toggle"
                        data-faq-index="${index}"
                        data-testid="faq-item-${index}"
                        aria-expanded="${isOpen ? "true" : "false"}"
                    >
                        <span class="faq-row">
                            <span class="faq-question font-display">${faq.q}</span>
                            <span class="faq-icon">
                                ${icon(isOpen ? "minus" : "plus", 15)}
                            </span>
                        </span>
                        <span class="faq-answer-wrap" data-testid="faq-answer-${index}">
                            <span class="faq-answer">
                                <p class="font-body">${faq.a}</p>
                            </span>
                        </span>
                    </button>
                </div>
            `;
        })
        .join("");

    container.querySelectorAll("[data-faq-index]").forEach((button) => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.faqIndex);
            state.openFaq = state.openFaq === index ? -1 : index;
            renderFaq();
        });
    });
}

function bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();
            closeMobileMenu();

            const header = document.querySelector(".site-header");
            const offset = header ? header.offsetHeight + 8 : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        });
    });
}

function setHeaderState() {
    const header = document.querySelector(".site-header");
    header.classList.toggle("is-scrolled", window.scrollY > 40);
}

function bindHeader() {
    window.addEventListener("scroll", setHeaderState, { passive: true });
    setHeaderState();
}

function openMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const toggle = document.querySelector("[data-testid='mobile-menu-toggle']");

    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const toggle = document.querySelector("[data-testid='mobile-menu-toggle']");

    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
}

function bindMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const toggle = document.querySelector("[data-testid='mobile-menu-toggle']");

    toggle.addEventListener("click", () => {
        if (menu.classList.contains("is-open")) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) {
            closeMobileMenu();
        }
    });
}

function bindRevealObserver() {
    document.body.classList.add("js-ready");

    const revealElements = document.querySelectorAll(".alyara-reveal");

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -80px 0px",
        },
    );

    revealElements.forEach((element) => observer.observe(element));
}

function setFooterYear() {
    document.getElementById("footer-year").textContent = new Date().getFullYear();
}

function init() {
    hydrateIcons();
    renderTrustItems();
    renderServiceChips();
    renderProjects();
    renderProcessSteps();
    renderReviews();
    renderFaq();
    hydrateIcons();
    bindProjectCarousel();
    bindProjectModal();
    bindReviewControls();
    bindSmoothScroll();
    bindHeader();
    bindMobileMenu();
    bindRevealObserver();
    setFooterYear();
}

document.addEventListener("DOMContentLoaded", init);
