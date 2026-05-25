const WA = "https://wa.me/5511948181368";
const IG = "https://www.instagram.com/alyaravidros/";
const EMAIL = "maymayarabonafim@gmail.com";

const trustItems = [
    {
        icon: "zap",
        label: "Atendemos rápido e com agilidade",
        sub: "Resposta em 30 min",
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
    "Sacada/Guarda corpo",
];

const projects = [
    {
        id: "p01",
        category: "Fachadas de ripado",
        title: "Fachada de ripado",
        caption: "Aldeia da Serra Condomínio Morada das flores",
        ratio: "4:5",
        image:
            "./image/fachada-de-ripado.webp",
        description:
            "Painel de Ripado em tom amadeirado instalado com estrutura reforçada e acabamentos externos em silicone estrutural. Projeto feito sob medida para o cliente.",
        specs: {
            service: "Fachade de Ripado",
            thickness: "Perfis de várias medidas, consulte o projeto",
            dimensions: "3,40 m × 8,00 m",
            hardware: "acessórios e acabamento padrão",
            finish: "Em cantoneira e silicone",
            time: "Instalação em 1 dia",
        },
    },
    {
        id: "p02",
        category: "Guarda corpo de vidro Laminado",
        title: "Guarda corpo em vidro Laminado",
        caption: "Aldeia da Serra Condomínio morada das flores",
        ratio: "4:5",
        image:
            "./image/guarda-corpo-em-vidro-laminado.webp",
        description:
            "Guarda corpo em L, ideal para ambientes internos, dispensa uso de muretas ou paredes, promove segurança  pra você e sua família sem obstruir a vista, toda estrutura fica uniforme e alinhada.",
        specs: {
            service: "Guarda corpo de vidro Laminado",
            thickness: "10mm Laminado",
            dimensions: "h 1,10 m × L 5,20 m",
            hardware: "Torre de inox 40cm + perfil U de acabamento",
            finish: "Pintura eletrostática preto fosco",
            time: "Instalação em 2 dias",
        },
    },
    {
        id: "p03",
        category: "Box de correr",
        title: "Box de correr até o teto",
        caption: "Condomínio Tamboré | Alphavile",
        ratio: "9:16",
        image:
            "./image/box-de-correr-ate-o-teto.webp",
        description:
            "Box de correr 2 folhas até o teto, com puxador discreto e kit instalação reforçado,  alumínio preto.",
        specs: {
            service: "Box de correr",
            thickness: "Vidro  8mm + Película de segurança",
            dimensions: "1,60 m × 2,50 m",
            hardware: "Kit instalação reforçado com acessórios de alta qualidade",
            finish: "Silicone para vedação total, puxador de 20mm",
            time: "Instalação em 1h:30min",
        },
    },
    {
        id: "p04",
        category: "Fachada de Ripado",
        title: "Porta de entrada Alumínio Ripado",
        caption: "Aldeia da Serra Condomínio Morada das flores",
        ratio: "4:5",
        image:
            "./image/porta-de-entrada-aluminio-ripado.webp",
        description:
            "Painel ripado em alumínio com acabamento amadeirado, fixado em estrutura metálica oculta. Espaçamento técnico calculado para conforto térmico e identidade visual.",
        specs: {
            service: "Alumínio Ripado",
            thickness: "Perfis de Várias medidas consulte o projeto",
            dimensions: "1,70 m × 8,00 m",
            hardware: "Estrutura metálica oculta, fechadura eletrônica",
            finish: "Acabamento em Silicone e ferragens de alta qualidade",
            time: "2 dias úteis",
        },
    },
    {
        id: "p05",
        category: "Box para Banheiro",
        title: "Box de correr 2 folhas até o teto",
        caption: "EDITAR",
        ratio: "4:5",
        image:
            "./image/box-de-correr-2-folhas-ate-o-teto.webp",
        description:
            "Box em vidro temperado com puxador H de 70cm, kit alumínio reforçado. Acabamento em silicone para vedação.",
        specs: {
            service: "Box de vidro temperado",
            thickness: "8 mm",
            dimensions: "1,80 m × 2,90 m",
            hardware: "Kit de instalação reforçado",
            finish: "Acabaemento em silicone neutro",
            time: "Instalação em 1H30min",
        },
    },
    {
        id: "p06",
        category: "Fachada ACM",
        title: "Fachada Corporativa em ACM com Iluminação Projetada",
        caption: "Loja, Cidade Patriarca SP",
        ratio: "16:9",
        image:
            "./image/fachada-em-acm-azul-e-amarelo-vibrante.webp",
        description: "Revestimento de fachada  em ACM com foco em durabilidade e impacto visual. Cor azul corporativo, com detalhes e acabamentos em ACM amarelo, criando um contraste moderno e alinhado com a marca. O destaque do projeto foi a integração de um sistema de iluminação externa com projetores de LED de alta potência, instalados para dar destaque total à comunicação visual da empresa durante a noite, ideal para frentes de lojas.",
            //"Revestimento em ACM 4 mm, estrutura tubular oculta. Recortes precisos, juntas alinhadas a régua e acabamento de fresa de 90°.",// --- IGNORE ---
        specs: {
            service: "Fachada ACM",
            thickness: "Placa 4 mm",
            dimensions: "7,20 m × 2,25 m",
            hardware: "Estrutura tubular galvanizada",
            finish: "Acabamento em silicone para vedação e estética",
            time: "4 dias úteis",
        },
    },
    {
        id: "p07",
        category: "Esquadrias de alumínio + Sacada",
        title: "Porta integrada Linha Gold + Guarda corpo de vidro",
        caption: "Aldeia da Serra Condomínio Morada das flores",
        ratio: "4:5",
        image:
            "./image/porta-integrada-linha-gold-guarda-corpo-de-vidro.webp",
        description:
        "Porta integrada Linha Suprema 2 folhas com vidro incolor, a pedido do cliente para fechar o quarto e Guarda corpo peça inteira para segurança sem obstruir a vista.",
        specs: {
            service: "Porta integrada Linha Suprema",
            thickness: "8 mm e 10mm G. Corpo",
            dimensions: "2,40 m × 2,20 m (Porta) + 1,20 m × 2,20 m (Guarda corpo)",
            hardware: "Botton em aço inox e parafusos",
            finish: "",
            time: "2 dias úteis",
        },
    },
    {
        id: "p08",
        category: "Esquadrias de Alumínio",
        title: "Projeto completo - Portas, Janelas, Guarda corpo e +",
        caption: "Aldeia da Serra C. Morada das flores",
        ratio: "4:5",
        image:
            "./image/projeto-completo-portas-janelas-guarda-corpo-e-mais.webp",
        description:
            "Projeto de casa inteira, com portas e janelas Linha Suprema, Guarda corpo com vidro de 10 mm fixado na torre ● Painel de ripado em alumínio amadeirado ● Quadro fixo com vidro laminado refleta panorâmico ● Porta de ripado seguido de Painel ripado em alumínio amadeirado ● Persiana.",
        specs: {
            service: "Esquadrias + Ripado + Guarda corpo",
            thickness: "Vidro temperado 8 mm e 10mm",
            dimensions: "Diversos tamanhos, consulte o projeto",
            hardware: "Acessórios de alta qualidade para esquadrias e pele de vidro",
            finish: "Acabamento em silicone para vedação e estética + cantoeiras para proteção de bordas",
            time: "Instalação em 10 dias",
        },
    },
    {
        id: "p09",
        category: "Guarda-corpo de vidro",
        title: "Guarda corpo proteção de escada",
        caption: "Aldeia da Serra Condomínio Morada das flores",
        ratio: "4:5",
        image:
            "./image/guarda-corpo-protecao-de-escada.webp",
        description:
            "Guarda corpo de vidro temperado 10 mm, com sistema de fixação em torre de inox. Proteção completa para escada, com design moderno e segurança garantida.",
        specs: {
            service: "Guarda corpo de vidro",
            thickness: "Vidro temperado 10 mm",
            dimensions: "h 1,10 m × L 4,30 m",
            hardware: "Torre de inox 40cm + perfil U de acabamento",
            finish: "Pintura eletrostática preto fosco",
            time: "Instalação em 2 dias",
        },
    },
    {
        id: "p10",
        category: "Box de vidro",
        title: "Box de correr",
        caption: "EDITAR",
        ratio: "9:16",
        image:
            "./image/box-de-correr.webp",
        description:
            " Box de correr com 2 folhas altura padrão de 1,90 m, alumínio preto, design elegante para banheiros simples.",
        specs: {
            service: "Box de correr",
            thickness: "Vidro 8mm",
            dimensions: "1,60 m × 1,90 m",
            hardware: "Kit box de instalação com acesssórios de alta qualidade",
            finish: "Acabamento em silicone para vedação",
            time: "Instalação em 1 hr",
        },
    },
    {
        id: "p11",
        category: "Esquadria de alumínio",
        title: "Janela de correr",
        caption: "Leopoldina, Lapa -SP",
        ratio: "12:16",
        image:
            "./image/janela-de-correr.webp",
        description:
            "Janela de correr 2 folhas linha Gold com vidro incolor, acabamento em alumínio preto. Deslizamento suave e design moderno.",
        specs: {
            service: "Janela de correr Linha Gold",
            thickness: "Vidro de 8mm",
            dimensions: "1,20 m × 1,20 m",
            hardware: "Roldana de alumínio, fechadura Simples e acessórios de alta qualidade",
            finish: "Vedação com silicone, arremate interno  e cantoneiras para proteção externa",
            time: "instalação em 30min",
        },
    },
    {
        id: "p12",
        category: "Vidro temperado",
        title: "Marquise de vidro",
        caption: "EDITAR",
        ratio: "4:5",
        image:
            "./image/marquise-de-vidro.webp",
        description:
            "Marquise de vidro temperado, com haste de suporte para fixação. Design elegante e proteção contra intempéries, ideal para varandas e áreas externas.",
        specs: {
            service: "Vidro temperado para marquise",
            thickness: "Vidro de 8 mm",
            dimensions: "1,10 m × 4,00 m",
            hardware: "Sistema de fixação em haste e ferragens de inox",
            finish: "Acabamento em silicone para vedação",
            time: "Instalação em 1 dia",
        },
    },
    {
        id: "p13",
        category: "Esquadria de alumínio",
        title: "Porta Lateral",
        caption: "Jd primavera Francisco morato -SP",
        ratio: "9:16",
        image:
            "./image/porta-lateral.webp",
        description:
            "Porta de giro 2 folhas Linha Suprema com palhetas vazadas e fechadura com chave, ideal para corredores com livre acesso.",
        specs: {
            service: "Porta de Abrir Linha Suprema",
            thickness: "Perfil 30 mm",
            dimensions: "1,40 m × 2,10 m",
            hardware: "Fechadura com chave, dobradiça reforçada",
            finish: "Silicone estrutural e parafuso para reforço contra ventos fortes",
            time: "Instalação em 1 hr",
        },
    },
    {
        id: "p14",
        category: "Vidro temperado",
        title: "Marquise de vidro",
        caption: "EDITAR",
        ratio: "4:5",
        image:
            "./image/marquise-de-vidro-1.webp",
        description:
            "Marquise de vidro única, com haste de suporte para fixação. Ideal para portas de entrada.",
        specs: {
            service: "Vidro temperado para marquise",
            thickness: "Vidro de 8 mm",
            dimensions: "1,10 m × 1,10 m",
            hardware: "Sistema de fixação em haste e ferragens de inox",
            finish: "Acabamento em silicone para vedação",
            time: "Instalação em 2 hrs",
        },
    },
    {
        id: "p15",
        category: "Box de correr",
        title: "Box de 3 folhas",
        caption: "EDITAR",
        ratio: "9:16",
        image:
            "./image/box-de-3-folhas.webp",
        description:
            "Box de correr com 3 folhas até o teto, puxador H discreto e kit instalação reforçado. Ideal para deixar seu banheiro mais elegante sem sujeira e menos tempo de limpeza.",
        specs: {
            service: "Box de correr",
            thickness: "Vidro  8mm",
            dimensions: "1,90 m × 2,50 m",
            hardware: "Kit instalação reforçado com acessórios de alta qualidade",
            finish: "Silicone para vedação total",
            time: "Instalação em 1h:30min",
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
        title: "Você envia o projeto ou agendamos visita",
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
        desc: "Execução, acabamento detalhista e entrega no prazo combinado.",
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
        q: "Quais as vantagens do alumínio ripado para fachada?",
        a: "O alumínio ripado para tanto para fachada quanto para outros ambientes oferece versatilidade, pode ser usado em qualquer parede ou porta, ele imita madeira e pode ser instalado em vários ângulos, seu acabamento proporciona encaixe perfeito e invisível.",
    },
    {
        q: "Qual a diferença entre vidro laminado e temperado?",
        a: "O vidro laminado é composto por duas ou mais camadas de vidro com película entre elas, oferecendo maior segurança e isolamento acústico. O vidro temperado é submetido a um processo de aquecimento e resfriamento rápido, tornando-o mais resistente a impactos.",
    },
    {
        q: "Quanto tempo demora a instalação?",
        a: "Depende do escopo. Box, espelhos e fechamentos pequenos costumam ser instalados em 1 a 3 dias. Esquadrias e fachadas levam mais tempo devido a entrega do material e fabricação. O prazo exato vai no orçamento.",
    },
    {
        q: "Qual linha é melhor, Gold ou Suprema?",
        a: "A linha Suprema é mais econômica, indicada para projetos simples e com menor exposição. A linha Gold e a 42 têm perfil mais robusto, acabamento superior e é ideal para projetos de alto padrão ou com maior demanda de resistência.",
    },
    {
        q: "Quanto tempo dura em média uma Esquadria de alumínio?",
        a: "A qualidade do material e a instalação são os fatores principais, depois vem o ambiente e o uso. Em condições normais, uma esquadria de alta qualidade pode durar décadas com manutenção adequada, recomendamos a troca de rolamentos a cada 5 anos bem como uma revisão 1x por ano, aqui somos especialistas tanto em vidro temperado quanto esquadrias de alumínio.",
    },
    {
        q: "Vidro temperado ou Esquadria de alumínio, qual é melhor",
        a: "Depende do uso. O vidro temperado é ideal para áreas que exigem resistência a impactos, como box de banheiro e fechamentos de sacada. Já as esquadrias de alumínio são mais indicadas para janelas, portas e fachadas, oferecendo durabilidade e versatilidade no design.",
    },
    {
        q: "Como cuidar do meu Box de vidro temperado para manter a aparência de novo?",
        a: "Recomenda-se limpar com um pano ou bucha macia e produto de limpeza adequado para vidro. Evite o uso de produtos abrasivos ou lado 'verde da bucha' que possam riscar a superfície, faça uma manutenção regular a cada 2 anos ou quando necessário, abra e feche devagar.",
    },
    {
        q: "Qual é o melhor fechamento de sacada?",
        a: "O fechamento retrátil é ideal para sacadas amplas, permitindo abertura total ou parcial e também é o mais usado. O vidro precisa ser laminado ou com película de segurança seguindo todas as normas da ABNT, existem outros modelos como o de correr, maxim-ar ou pivotante, depende muito do seu espaço e orçamento.",
    },
    {
        q: "Qual é a durabilidade dos acabamentos em ACM?",
        a: "Existem vários fatores, como a qualidade do material silicone e instalação no geral, o ambiente e o uso. Em condições normais, o ACM pode durar décadas com manutenção adequada e limpeza periódica, com esponjas e panos macios e sem produtos abrasivos.",
    },
    {
        q: "Fazem espelho com LED?",
        a: "Sim, fornecemos tanto o modelo com estrutura de alumínio em volta, estilo penteadeira, quanto modelos flutuantes, que podem ser retirados a qualquer momento.",
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
    whatsapp:
        '<path d="m15.271 13.21c.578.185 1.078.416 1.543.7l-.031-.018c.529.235.986.51 1.403.833l-.015-.011c.02.061.032.13.032.203 0 .011 0 .021-.001.032v-.001c-.015.429-.11.832-.271 1.199l.008-.021c-.231.463-.616.82-1.087 1.01l-.014.005c-.459.243-1.001.393-1.576.411h-.006c-1.1-.146-2.094-.484-2.988-.982l.043.022c-1.022-.468-1.895-1.083-2.636-1.829l-.001-.001c-.824-.857-1.579-1.795-2.248-2.794l-.047-.074c-.636-.829-1.041-1.866-1.1-2.995l-.001-.013v-.124c.032-.975.468-1.843 1.144-2.447l.003-.003c.207-.206.491-.335.805-.341h.001c.101.003.198.011.292.025l-.013-.002c.087.013.188.021.292.023h.003c.019-.002.04-.003.062-.003.13 0 .251.039.352.105l-.002-.001c.107.118.189.261.238.418l.002.008q.124.31.512 1.364c.135.314.267.701.373 1.099l.014.063c-.076.361-.268.668-.533.889l-.003.002q-.535.566-.535.72c.004.088.034.168.081.234l-.001-.001c.405.829.936 1.533 1.576 2.119l.005.005c.675.609 1.446 1.132 2.282 1.54l.059.026c.097.063.213.103.339.109h.002q.233 0 .838-.752t.804-.752zm-3.147 8.216h.022c1.357 0 2.647-.285 3.814-.799l-.061.024c2.356-.994 4.193-2.831 5.163-5.124l.024-.063c.49-1.113.775-2.411.775-3.775s-.285-2.662-.799-3.837l.024.062c-.994-2.356-2.831-4.193-5.124-5.163l-.063-.024c-1.113-.49-2.411-.775-3.775-.775s-2.662.285-3.837.799l.062-.024c-2.356.994-4.193 2.831-5.163 5.124l-.024.063c-.49 1.117-.775 2.419-.775 3.787 0 2.141.698 4.12 1.879 5.72l-.019-.026-1.225 3.613 3.752-1.194c1.49 1.01 3.327 1.612 5.305 1.612h.047zm0-21.426h.033c1.628 0 3.176.342 4.575.959l-.073-.029c2.825 1.197 5.028 3.4 6.196 6.149l.029.076c.588 1.337.93 2.896.93 4.535s-.342 3.198-.959 4.609l.029-.074c-1.197 2.825-3.4 5.028-6.149 6.196l-.076.029c-1.327.588-2.875.93-4.503.93-.011 0-.023 0-.034 0h.002c-.016 0-.034 0-.053 0-2.059 0-3.992-.541-5.664-1.488l.057.03-6.465 2.078 2.109-6.279c-1.051-1.714-1.674-3.789-1.674-6.01 0-1.646.342-3.212.959-4.631l-.029.075c1.197-2.825 3.4-5.028 6.149-6.196l.076-.029c1.327-.588 2.875-.93 4.503-.93h.033-.002z"></path>',
};

const state = {
    activeProject: null,
    currentReview: 0,
    openFaq: -1,
    currentAudio: null,
    lockedScrollY: 0,
};

function lockBodyScroll() {
    state.lockedScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${state.lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
}

function unlockBodyScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, state.lockedScrollY);
}

function icon(name, size = 16, extraClass = "", filled = false) {
    const inner = ICONS[name];

    if (!inner) {
        return "";
    }

    const isFilledIcon = filled || name === "whatsapp";
    const fill = isFilledIcon ? ' fill="currentColor"' : ' fill="none"';
    const stroke = name === "whatsapp" ? ' stroke="none"' : ' stroke="currentColor"';

    return `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${size}"
            height="${size}"
            viewBox="0 0 24 24"
            ${stroke}
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
    const projectCardWidths = {
        "1:1": 360,
        "4:5": 330,
        "9:16": 245,
        "16:9": 520,
    };

    track.innerHTML = projects
        .map((project, index) => {
            const [ratioWidth, ratioHeight] = (project.ratio || "4:5")
                .split(":")
                .map((value) => Number(value));
            const aspectRatio =
                ratioWidth > 0 && ratioHeight > 0 ? ratioWidth / ratioHeight : 4 / 5;
            const fallbackWidth = Math.round(
                Math.max(240, Math.min(520, 410 * aspectRatio)),
            );
            const cardWidth = projectCardWidths[project.ratio] || fallbackWidth;
            const projectRatio = project.ratio?.includes(":")
                ? project.ratio.replace(":", " / ")
                : "4 / 5";

            return `
                <div
                    class="project-card"
                    data-project-index="${index}"
                    data-project-id="${project.id}"
                    data-ratio="${project.ratio}"
                    data-testid="project-card-${index}"
                    aria-label="${project.title}"
                    role="button"
                    tabindex="0"
                    style="--project-card-width: ${cardWidth}px; --project-ratio: ${projectRatio};"
                >
                    <div class="project-media">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="project-overlay"></div>
                        <div class="project-badge alyara-glass">
                            <span class="font-mono-tech">${project.category}</span>
                        </div>
                        <div class="project-copy">
                            <div class="project-title font-serif-it">${project.title}</div>
                            <div class="project-copy-meta">
                                <div class="project-caption font-body">${project.caption}</div>
                                <a class="project-detail-link font-mono-tech" tabindex="-1" aria-hidden="true">
                                    Detalhe técnico
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");

    counter.textContent = `${String(projects.length).padStart(2, "0")} projetos · arraste ou navegue`;

    track.querySelectorAll("[data-project-index]").forEach((card) => {
        card.addEventListener("click", () => {
            openProjectModal(Number(card.dataset.projectIndex));
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProjectModal(Number(card.dataset.projectIndex));
            }
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
    const modal = document.getElementById("project-modal");
    const modalCopy = document.querySelector(".project-modal-copy");

    if (!project) {
        return;
    }

    state.activeProject = index;
    // ADICIONA ISSO:
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'modal_aberto',
        'projeto_id': project.id
    });

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

    if (modalCopy) {
        modalCopy.scrollTop = 0;
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    lockBodyScroll();
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");

    state.activeProject = null;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    unlockBodyScroll();
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
    const prevButton = document.getElementById("reviews-prev");
    const nextButton = document.getElementById("reviews-next");

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

    prevButton.disabled = state.currentReview === 0;
    nextButton.disabled = state.currentReview === reviews.length - 1;

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
                data-review-index="${state.currentReview}"
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
        if (state.currentReview === 0) {
            return;
        }

        stopCurrentAudio();
        state.currentReview -= 1;
        renderReviews();
    });

    document.getElementById("reviews-next").addEventListener("click", () => {
        if (state.currentReview === reviews.length - 1) {
            return;
        }

        stopCurrentAudio();
        state.currentReview += 1;
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
                        data-faq-id="question-${index}"
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

function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js?v=1.0").catch(() => {
            // Silently ignore registration failures to avoid breaking the landing page.
        });
    });
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
    registerServiceWorker();
}

document.addEventListener("DOMContentLoaded", init);
