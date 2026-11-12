const tools = [
    // Learning Tools
    { nome: "Shoogle", categoria: "web development", link: "https://shoogle.dev/", desc: "Plataforma de aprendizado focada em desenvolvimento web e ferramentas de programação para desenvolvedores modernos." },
    { nome: "Laws of UX", categoria: "articles", link: "https://lawsofux.com/", desc: "Coleção das leis da psicologia que os designers devem considerar ao construir interfaces de usuário." },
    { nome: "Smashing Magazine", categoria: "articles", link: "https://www.smashingmagazine.com/", desc: "Publicação sobre design, UX, desenvolvimento web e boas práticas para produtos digitais." },
    { nome: "UX Design", categoria: "articles", link: "https://uxdesign.cc/", desc: "Publicação com artigos e perspectivas sobre experiência do usuário e design de produtos." },
    { nome: "Better Buttons — Smashing Magazine", categoria: "articles", link: "https://www.smashingmagazine.com/2016/11/a-quick-guide-for-designing-better-buttons/", desc: "Guia de princípios para projetar botões mais claros e eficazes." },
    { nome: "Mobile UI Button Design — UX Planet", categoria: "articles", link: "https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556", desc: "Regras e recomendações para o design de botões em interfaces móveis." },
    { nome: "Agile and Waterfall Methodologies — Figma", categoria: "UX tools", link: "https://www.figma.com/resource-library/agile-and-waterfall-methodologies/", desc: "Guia comparativo das metodologias Agile e Waterfall para organizar projetos." },
    { nome: "Information Architecture — UX Design", categoria: "articles", link: "https://uxdesign.cc/a-plea-for-the-lost-practice-of-information-architecture-19a5ae5ca65e", desc: "Reflexão sobre a importância da arquitetura da informação na prática de design." },
    { nome: "Is This My Interface or Yours?", categoria: "articles", link: "https://medium.com/@jsaito/is-this-my-interface-or-yours-b09a7a795256", desc: "Artigo sobre autoria, consistência e padrões em interfaces digitais." },
    { nome: "Whimsical", categoria: "UX tools", link: "https://whimsical.com/", desc: "Ferramenta visual para criar fluxogramas, wireframes, mapas mentais e diagramas." },
    { nome: "Responsive Web Design — Ethan Marcotte", categoria: "articles", link: "https://ethanmarcotte.com/books/responsive-web-design/full/chap01/", desc: "Capítulo introdutório sobre os fundamentos do design responsivo." },
    { nome: "Responsive Web Design — A List Apart", categoria: "articles", link: "https://alistapart.com/article/responsive-web-design/", desc: "Artigo fundamental sobre layouts e experiências adaptáveis a diferentes telas." },
    { nome: "UI Patterns", categoria: "ui tools", link: "https://ui-patterns.com/patterns", desc: "Biblioteca de padrões de interface e soluções recorrentes de UI." },
    { nome: "The Rhythm of Your Screen", categoria: "articles", link: "https://www.chrbutler.com/the-rhythm-of-your-screen", desc: "Artigo sobre ritmo visual e composição em telas." },
    { nome: "Ignore the Details Early On — 37signals", categoria: "articles", link: "https://37signals.com/podcast/ignore-the-details-early-on/", desc: "Episódio de podcast sobre priorizar estrutura e decisões principais no início do projeto." },
    { nome: "Building Better UI Designs with Layout Grids", categoria: "articles", link: "https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/", desc: "Artigo sobre o uso de grids para estruturar interfaces melhores." },
    { nome: "Body Text Small", categoria: "articles", link: "https://marvelapp.com/blog/body-text-small/", desc: "Leitura sobre tamanho de texto e legibilidade em interfaces." },
    { nome: "Negative Space & Typography", categoria: "articles", link: "https://www.chrbutler.com/negative-space-typography", desc: "Artigo sobre a relação entre espaço negativo e tipografia." },
    { nome: "Web Design Museum", categoria: "archives", link: "https://www.webdesignmuseum.org/", desc: "Acervo histórico de sites e da evolução do web design." },
    { nome: "Remember the Space Jam Site? — AIGA Eye on Design", categoria: "articles", link: "https://eyeondesign.aiga.org/remember-the-space-jam-site-a-trip-through-online-past-with-the-web-design-museum/", desc: "Artigo sobre memória da web e referências preservadas pelo Web Design Museum." },
    { nome: "Skeuomorphism, Flat Design, Material Design", categoria: "articles", link: "https://99designs.com/blog/trends/skeuomorphism-flat-design-material-design/", desc: "Panorama de tendências e estilos visuais de design de interface." },
    { nome: "Design Mood: 7 Motives to Create Mood Boards", categoria: "articles", link: "https://uxplanet.org/design-mood-7-motives-to-create-mood-boards-b81ae36e399f", desc: "Artigo sobre objetivos e usos de moodboards no processo de design." },
    { nome: "A Brief History of Web Design", categoria: "articles", link: "https://blog.froont.com/brief-history-of-web-design-for-designers/", desc: "Panorama histórico da evolução do web design voltado a designers." },
    { nome: "Unicorn Designer Training Manual", categoria: "articles", link: "https://uxdesign.cc/unicorn-designer-training-manual-eb2439a10bc9", desc: "Manual e reflexão sobre as habilidades multidisciplinares esperadas de designers." },
    { nome: "The Death of Click Here — CTA Best Practices", categoria: "articles", link: "https://medium.com/design-bootcamp/the-death-of-click-here-cta-best-practices-81e6af037025", desc: "Boas práticas para textos de chamadas para ação mais claros e acessíveis." },
    { nome: "GitDiagram", categoria: "web development", link: "https://gitdiagram.com/", desc: "Ferramenta para visualizar a estrutura de repositórios como diagramas." },
    { nome: "Wanna This — Free Mockups", categoria: "mockups", link: "https://wannathis.one/mockups/free", desc: "Coleção de mockups gratuitos para apresentar projetos e produtos." },
    { nome: "Film-Grab", categoria: "visual search", link: "https://film-grab.com/", desc: "Acervo de frames de filmes para pesquisa e inspiração visual." },
    { nome: "The Poster Database", categoria: "archives", link: "https://theposterdb.com/", desc: "Arquivo e catálogo de cartazes de filmes e séries." },
    { nome: "Frameset — Wes Anderson", categoria: "visual search", link: "https://frameset.app/search/director/wes-anderson", desc: "Busca de frames cinematográficos por diretor, aqui filtrada para Wes Anderson." },
    { nome: "Responsive Type Scales", categoria: "articles", link: "https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54", desc: "Artigo sobre escalas tipográficas responsivas para interfaces e sites." },
    { nome: "Free UX Templates — NNGroup", categoria: "articles", link: "https://www.nngroup.com/articles/free-ux-templates/?utm_source=chatgpt.com", desc: "Coleção de templates gratuitos para atividades e entregáveis de UX." },
    { nome: "Title Art", categoria: "type tools", link: "https://titleart.dvy.io/", desc: "Referências visuais de artes e composições para títulos." },
    { nome: "Angle Ref — Animal Bodies", categoria: "visual search", link: "https://angleref.com/animal/bodies?yaw=-100&pitch=-22&roll=-47", desc: "Referência 3D interativa de corpos de animais para estudo de formas e ângulos." },
    { nome: "Moving Image Archive", categoria: "archives", link: "https://www.movingimagearchive.com/#browse", desc: "Acervo de filmes e imagens em movimento para consulta e pesquisa visual." },
    { nome: "Product Design Roadmap", categoria: "UX tools", link: "https://product-design-roadmap.com/", desc: "Guia passo a passo com as habilidades necessárias para se tornar um designer de produto." },
    { nome: "Daily UI", categoria: "learning tools", link: "https://www.dailyui.co/", desc: "Um desafio de 100 dias onde você recebe um prompt de design por e-mail para praticar suas habilidades de interface." },
    { nome: "UX Tools", categoria: "learning tools", link: "https://www.uxtools.co/challenges", desc: "Desafios práticos de design de experiência do usuário baseados em cenários reais do mercado." },

    // Books
    // Visual Search
    { nome: "Commerce Cream", categoria: "visual search", link: "https://commercecream.com/", desc: "Galeria que seleciona e exibe as lojas mais bonitas e bem projetadas da plataforma Shopify." },
    { nome: "WOW Web", categoria: "visual search", link: "https://wow-web.co.uk/", desc: "Vitrine de sites excepcionais com foco em design criativo e interações inovadoras." },
    { nome: "Godly", categoria: "visual search", link: "https://godly.website/", desc: "Curadoria diária dos melhores designs de sites da web, focada em animação e modernidade." },
    { nome: "Awwwards", categoria: "visual search", link: "https://www.awwwards.com/", desc: "O maior portal de premiação para web designers e desenvolvedores, servindo como benchmark global de qualidade." },
    { nome: "Every Mac Data Viz", categoria: "cases favoritos", link: "https://sheets.works/data-viz/every-mac?ref=sidebar&utm_source=substack&utm_medium=email", desc: "Uma visualização de dados detalhada sobre a história e especificações de todos os modelos de Mac." },
    { nome: "Footer Design", categoria: "UI tools", link: "https://www.footer.design/", desc: "Galeria de inspiração dedicada exclusivamente ao design de rodapés de sites." },
    { nome: "Bento Grids", categoria: "UI tools", link: "https://bentogrids.com/", desc: "Galeria inspirada no estilo de layout 'Bento Box', popularizado pela Apple." },
    { nome: "Typographic Posters", categoria: "visual search", link: "https://www.typographicposters.com/", desc: "Galeria de curadoria internacional focada em design de cartazes e experimentação tipográfica." },
    { nome: "Dark Design", categoria: "UI tools", link: "https://www.dark.design/", desc: "Galeria de inspiração focada exclusivamente em interfaces com modo escuro (dark mode)." },
    { nome: "Navbar Gallery", categoria: "UI tools", link: "https://www.navbar.gallery/", desc: "Galeria focada em inspiração de menus de navegação (navbars) criativos." },
    { nome: "Httpster", categoria: "visual search", link: "https://httpster.net/", desc: "Vitrine de web design inspiradora com foco em sites com tipografia marcante e layouts limpos." },
    { nome: "Hoverstat.es", categoria: "creative development", link: "https://www.hoverstat.es/", desc: "Galeria dedicada a sites com interações, animações e efeitos de hover excepcionais." },
    { nome: "Minimal Gallery", categoria: "visual search", link: "https://minimal.gallery/", desc: "Curadoria de sites com estética minimalista e foco em design funcional." },
    { nome: "Lapa Ninja", categoria: "visual search", link: "https://www.lapa.ninja/", desc: "A maior galeria de landing pages para inspiração, organizada por categorias e estilos." },
    { nome: "Logo System", categoria: "icons / logos", link: "https://logosystem.co/", desc: "Curadoria de sistemas de logos e identidades visuais modulares." },

    // Archives
    { nome: "Coverjunkie", categoria: "archives", link: "https://www.coverjunkie.com/", desc: "Celebração do design de capas de revistas e criatividade visual impressa." },
    { nome: "Flyer Archive JP", categoria: "archives", link: "https://flyer-jp.com/", desc: "Arquivo digital especializado em flyers e material gráfico japonês, servindo como fonte de inspiração estética." },
    { nome: "Archive PDF", categoria: "archives", link: "https://www.archivepdf.net/", desc: "Repositório de documentos PDF históricos e técnicos para consulta e pesquisa de design." },
    { nome: "Book Cover Archive", categoria: "archives", link: "https://bookcoverarchive.com/", desc: "Um arquivo dedicado à apreciação e estudo do design de capas de livros." },
    { nome: "The Movie Database (TMDB)", categoria: "archives", link: "https://www.themoviedb.org/?language=pt-BR", desc: "Banco de dados comunitário sobre cinema e TV, útil para referências de posters e metadados." },
    { nome: "Treejack — Optimal Workshop", categoria: "user testing & research", link: "https://www.optimalworkshop.com/tag/treejack", desc: "Recurso da Optimal Workshop sobre Treejack, ferramenta para testar arquitetura da informação." },
    { nome: "Stedelijk Museum", categoria: "cases favoritos", link: "https://www.stedelijk.nl/nl", desc: "Site do Stedelijk Museum, salvo como referência em Cases Favoritos." },
    { nome: "Google Fonts — Newsreader", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Newsreader?preview.script=Latn", desc: "Família serifada Newsreader disponível no Google Fonts para visualização e uso tipográfico.", pesos: [400, 700] },
    { nome: "Web Design Weekly", categoria: "newsletters", link: "https://web-design-weekly.com/", desc: "Newsletter semanal com novidades e recursos de web design." },
    { nome: "Codrops Newsletter", categoria: "newsletters", link: "https://tympanus.net/codrops/newsletter/", desc: "Newsletter da Codrops com inspiração, tutoriais e recursos de design e desenvolvimento web." },
    { nome: "Figmalion", categoria: "newsletters", link: "https://figmalion.com/", desc: "Newsletter e curadoria de recursos, novidades e referências para usuários do Figma." },
    { nome: "Styleguides.io", categoria: "articles", link: "http://styleguides.io/", desc: "Coleção de referências e recursos sobre guias de estilo para produtos digitais." },

    // UX Tools
    { nome: "Fake Clients", categoria: "UX tools", link: "https://fakeclients.com/", desc: "Gerador de briefings de clientes fictícios para treinar habilidades de UX e design gráfico." },
    { nome: "Goodbrief", categoria: "UX tools", link: "https://goodbrief.io/", desc: "Gerador inteligente de briefings de design para exercícios práticos em diversas categorias." },
    { nome: "Design Sprint Kit", categoria: "UX tools", link: "https://designsprintkit.withgoogle.com/", desc: "Um recurso de código aberto do Google para metodologias de Design Sprint e facilitação de workshops." },

    // UI Tools
    { nome: "Component Gallery", categoria: "UI tools", link: "https://component.gallery/components/", desc: "Um repositório de referência para componentes de interface reais usados em diversos design systems." },
    { nome: "Uiverse", categoria: "UI tools", link: "https://uiverse.io/", desc: "Biblioteca de elementos de UI em CSS e HTML (botões, cards, etc) feitos pela comunidade." },
    { nome: "Figma Hero Section Layout", categoria: "UI tools", link: "https://www.figma.com/design/5bMc7Ep63qMGaJ0WbyoFud/Hero-Section?node-id=0-1&t=W0OXnJSF6VmDfsg7-0", desc: "Template e guia de estrutura para criação de seções hero impactantes no Figma." },
    { nome: "Figma Community File (System)", categoria: "UI tools", link: "https://www.figma.com/community/file/1599110970205546188", desc: "Arquivo da comunidade do Figma com recursos prontos para uso em projetos de interface." },
    { nome: "Catalogue of Design Decisions", categoria: "UI tools", link: "https://catalogue.projectsbyif.com/", desc: "Catálogo que documenta decisões de design focadas em ética e privacidade de dados." },

    // Color Tools
    { nome: "Color contrast Checker", categoria: "color tools", link: "https://colourcontrast.cc/", desc: "Verificador de contraste de cores que ajuda a garantir que suas escolhas de design atendam às diretrizes de acessibilidade (WCAG)." },
    { nome: "Gradientor", categoria: "color tools", link: "https://gradientor.afterimage.cc/", desc: "Ferramenta interativa para criar e personalizar gradientes complexos para projetos web." },
    { nome: "Hihayk", categoria: "color tools", link: "https://hihayk.github.io/scale/", desc: "Gerador de escalas de cores preciso para criar paletas consistentes a partir de uma cor base." },
    { nome: "Happy Hues", categoria: "color tools", link: "https://www.happyhues.co/", desc: "Paletas de cores aplicadas em exemplos reais para ajudar a entender a psicologia cromática." },
    { nome: "Huemint", categoria: "color tools", link: "https://huemint.com/", desc: "Gerador de cores baseado em IA que aplica esquemas em mockups de sites e marcas." },
    { nome: "UI Colors", categoria: "color tools", link: "https://uicolors.app/generate/9e24b8", desc: "Gerador e editor de cores focado exclusivamente em paletas para Tailwind CSS." },

    // Type Tools
    { nome: "Another Graphic", categoria: "type tools", link: "https://anothergraphic.org/", desc: "Um arquivo focado em design tipográfico contemporâneo e experimentação visual com tipos." },
    { nome: "Fontpair", categoria: "type tools", link: "https://www.fontpair.co/", desc: "Guia prático que ajuda designers a encontrar combinações harmoniosas de fontes do Google Fonts." },
    { nome: "Fontshare", categoria: "type tools", link: "https://www.fontshare.com/pairs", desc: "Serviço de fontes gratuitas da Indian Type Foundry que oferece ferramentas de pareamento tipográfico." },
    { nome: "Awwwards Fonts", categoria: "type tools", link: "https://www.awwwards.com/awwwards/collections/free-fonts/", desc: "Coleção curada pelo Awwwards com as melhores fontes gratuitas encontradas em projetos premiados." },
    { nome: "Kern Club", categoria: "type tools", link: "https://kernclub.com", desc: "Uma foundry e clube de design focado em fontes expressivas e cultura tipográfica independente." },
    { nome: "Velvetyne", categoria: "type tools", link: "https://velvetyne.fr/", desc: "Coletivo francês que cria e distribui fontes de código aberto (open source) com visuais ousados e experimentais." },
    { nome: "The League of Moveable Types", categoria: "type tools", link: "https://www.theleagueofmoveabletype.com/", desc: "A primeira fundição de fontes de código aberto, focada em elevar o padrão da tipografia gratuita na web." },
    { nome: "Open Foundry", categoria: "type tools", link: "https://open-foundry.com/", desc: "Plataforma para explorar e baixar fontes de licença aberta em uma interface interativa e moderna." },
    { nome: "TypeType", categoria: "type tools", link: "https://typetype.org/freefonts/", desc: "Estúdio tipográfico profissional que disponibiliza versões gratuitas e de alta qualidade de suas famílias de fontes." },
    { nome: "Use & Modify", categoria: "type tools", link: "https://usemodify.com/", desc: "Curadoria de fontes gratuitas, abertas e 'estranhas', incentivando a modificação e o uso criativo." },
    { nome: "Free Faces Gallery", categoria: "type tools", link: "https://www.freefaces.gallery/", desc: "Uma curadoria de fontes gratuitas com personalidades únicas encontradas na web." },
    { nome: "Online Web Fonts (Download)", categoria: "type tools", link: "https://www.onlinewebfonts.com/download/73add53ce17998f44154af640a3ebe75", desc: "Site para download de fontes e conversão para formatos web." },
    { nome: "Dirtyline Studio", categoria: "type tools", link: "https://dirtylinestudio.com/", desc: "Estúdio de design e fundição tipográfica com foco em fontes expressivas e modernas." },
    { nome: "OH no Type Co", categoria: "type tools", link: "https://ohnotype.co/", desc: "Foundry independente conhecida por suas fontes experimentais e cheias de personalidade." },
    { nome: "That That Type", categoria: "type tools", link: "https://www.thatthattype.com/", desc: "Foundry independente com fontes que misturam o retrô com o contemporâneo." },
    { nome: "VarType", categoria: "type tools", link: "https://www.vartype.com/", desc: "Estúdio especializado em fontes variáveis, permitindo controle total de peso e largura." },
    { nome: "No Design Foundry", categoria: "type tools", link: "https://nodesignfoundry.com/", desc: "Fundição tipográfica digital com foco em fontes minimalistas e funcionais." },
    { nome: "Primary Foundry", categoria: "type tools", link: "https://primary-foundry.com/", desc: "Fundição tipográfica focada em tipos contemporâneos com rigor técnico e funcional." },
    { nome: "Uncut", categoria: "type tools", link: "https://uncut.wtf/", desc: "Catálogo de fontes gratuitas e de licença aberta com estética moderna e experimental." },

    // Font Style Visualizer
    { nome: "Paytone One", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Paytone+One?preview.script=Latn", desc: "Fonte sem serifa casual e arredondada, inspirada na tipografia de publicidade dos anos 20.", pesos: [400] },
    { nome: "Unbounded", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Unbounded", desc: "Primeira fonte on-chain gratuita e versátil, com suporte para múltiplos idiomas.", pesos: [300, 400, 700, 900] },
    { nome: "Instrument Serif", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Instrument+Serif?preview.script=Latn", desc: "Fonte serifada elegante com ar clássico, inspirada em instrumentos de precisão.", pesos: [400] },
    { nome: "Bricolage Grotesque", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Bricolage+Grotesque?preview.script=Latn", desc: "Fonte híbrida que mistura elementos de fontes históricas com design moderno.", pesos: [300, 400, 700, 800] },
    { nome: "Archivo", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Archivo?preview.script=Latn", desc: "Fonte grotesca de alta performance, ideal para uso digital e impresso com excelente legibilidade.", pesos: [300, 400, 700, 900] },
    { nome: "DM Sans", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/DM+Sans?preview.script=Latn", desc: "Sem serifa geométrica de baixo contraste, otimizada para legibilidade em tamanhos pequenos.", pesos: [300, 400, 700, 900] },
    { nome: "EB Garamond", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/EB+Garamond", desc: "Recriação elegante e fiel da clássica fonte Garamond do século XVI, em formato open source.", pesos: [400, 700, 800] },
    { nome: "Fauna One", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Fauna+One", desc: "Fonte serifada com estrutura suave e toques caligráficos, inspirada na natureza.", pesos: [400] },
    { nome: "Funnel Display", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Funnel+Display?preview.script=Latn", desc: "Tipografia contemporânea e expressiva, perfeita para títulos e identidades visuais modernas.", pesos: [300, 400, 700, 800] },
    { nome: "Geist", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Geist", desc: "Fonte focada em precisão e clareza, inspirada nos princípios de design minimalista da Vercel.", pesos: [300, 400, 700, 900] },
    { nome: "Heebo", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Heebo?preview.lang=pt_Latn", desc: "Versão moderna e robusta da Roboto com suporte expandido e estética neo-grotesca.", pesos: [300, 400, 700, 900] },
    { nome: "Manrope", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Manrope", desc: "Fonte geométrica moderna e funcional, altamente versátil para interfaces de usuário.", pesos: [300, 400, 700, 800] },
    { nome: "Montserrat", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Montserrat", desc: "Clássico contemporâneo inspirado na tipografia urbana de Buenos Aires.", pesos: [300, 400, 700, 900] },
    { nome: "Orbit", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Orbit?preview.lang=pt_Latn", desc: "Fonte display com visual futurista e tecnológico, ótima para projetos de ficção científica.", pesos: [400] },
    { nome: "Outfit", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Outfit?preview.script=Latn", desc: "Família geométrica limpa e sofisticada, inspirada no design da marca Outfit.", pesos: [300, 400, 700, 900] },
    { nome: "Prociono", categoria: "font style visualizer", licenca: "OFL", link: "https://fonts.google.com/specimen/Prociono?preview.script=Latn", desc: "Fonte com serifa clássica que combina elegância histórica com clareza moderna.", pesos: [400] },
    { nome: "Gambarino", categoria: "font style visualizer", licenca: "Personal", link: "https://www.fontshare.com/fonts/gambarino", desc: "Uma elegante fonte serifada com proporções clássicas e detalhes contemporâneos, ideal para títulos sofisticados.", pesos: [400] },

    // Styling Tools
    { nome: "Grainrad", categoria: "styling tools", link: "https://grainrad.com/", desc: "Gerador de gradientes com texturas de grão (noise), ideal para criar fundos modernos e táteis." },
    { nome: "Image Stripe Cutter", categoria: "styling tools", link: "https://www.stripecutter.com/", desc: "Utilitário para cortar imagens em tiras ou fatias, facilitando a criação de efeitos visuais de repetição." },
    { nome: "Shader Gradient", categoria: "styling tools", link: "https://shadergradient.co/", desc: "Ferramenta para criar gradientes 3D animados e abstratos com controle de movimento." },
    { nome: "Meshy AI", categoria: "styling tools", link: "https://www.meshy.ai/pt-BR", desc: "Ferramenta de IA para geração rápida de objetos 3D e texturas a partir de texto." },
    { nome: "Bitmap Design Family", categoria: "styling tools", link: "https://bitmap.designfamilymarket.com/#/", desc: "Pack de efeitos e estilos de camada para criar estéticas de baixa resolução e retrô-digital." },

    // Mockups, Illustrations, Icons and Logos
    { nome: "Graphic Google", categoria: "mockups", link: "https://graphicgoogle.com", desc: "Recurso para designers que oferece mockups gratuitos, ícones e inspiração visual variada." },
    { nome: "Brand New Mockup", categoria: "mockups", link: "https://brandnewmockup.com/shop/freebie-mockups/", desc: "Site especializado em fornecer mockups de alta qualidade e gratuitos para apresentação de marcas." },
    { nome: "Bendito Mockup", categoria: "mockups", link: "https://benditomockup.com/category/freebies/", desc: "Curadoria brasileira de mockups realistas para valorizar projetos de identidade visual." },
    { nome: "House of Mockups", categoria: "mockups", link: "https://houseofmockups.com/collections/freebies", desc: "Comunidade criativa que oferece recursos e mockups profissionais para designers." },
    { nome: "Creatoom", categoria: "mockups", link: "https://creatoom.com/product-category/items/free-mockups/", desc: "Estúdio de mockups que disponibiliza itens premium e gratuitos para visualização de produtos." },
    { nome: "Wanna This", categoria: "mockups", link: "https://wannathis.one/", desc: "Loja de assets 3D premium, ícones e ilustrações para interfaces modernas." },
    { nome: "Sketch Valley", categoria: "illustrations", link: "https://sketchvalley.com/", desc: "Site de recursos gratuitos para designers, incluindo ícones, vetores e templates." },
    { nome: "Storytale", categoria: "illustrations", link: "https://storytale.io/", desc: "Marketplace de ilustrações premium para projetos web e mobile, incluindo formatos 3D e vetoriais." },
    { nome: "DrawKit", categoria: "illustrations", link: "https://www.drawkit.com/", desc: "Biblioteca de ilustrações vetoriais e ícones gratuitos e premium, totalmente customizáveis." },
    { nome: "Unsplash", categoria: "illustrations", link: "https://unsplash.com/pt-br", desc: "A principal fonte mundial de fotografias de alta resolução gratuitas e de livre uso." },
    { nome: "Rawpixel", categoria: "illustrations", link: "https://www.rawpixel.com/", desc: "Acervo massivo de artes, fotografias e elementos de design histórico e moderno." },
    { nome: "The Noun Project", categoria: "icons / logos", link: "https://thenounproject.com/", desc: "O mais abrangente diretório de ícones e fotos de estoque criados pela comunidade global." },
    { nome: "Box Icons", categoria: "icons / logos", link: "https://boxicons.com/icons?free=true", desc: "Biblioteca de ícones vetoriais amigáveis e gratuitos, disponíveis como web fonts ou SVGs." },

    // Unpopular Software List
    { nome: "HandBrake", categoria: "unpopular software list", link: "https://handbrake.fr/", desc: "Conversor de vídeo de código aberto e multiplataforma, extremamente potente para otimizar arquivos." },
    { nome: "Windhawk", categoria: "unpopular software list", link: "https://windhawk.net/", desc: "Ferramenta de personalização para Windows que permite aplicar mods e melhorias de interface de forma simples." },
    { nome: "Open Shell Menu", categoria: "unpopular software list", link: "https://github.com/Open-Shell/Open-Shell-Menu", desc: "Software que restaura o menu iniciar clássico e outras funcionalidades removidas do Windows moderno." },
    { nome: "Retro Bar", categoria: "unpopular software list", link: "https://github.com/dremin/RetroBar", desc: "Aplicativo que transforma a barra de tarefas do Windows no estilo clássico das versões 95, 98 ou XP." },
    { nome: "Upscayl", categoria: "unpopular software list", link: "https://upscayl.org/", desc: "Software gratuito e de código aberto que utiliza inteligência artificial para aumentar a resolução de imagens sem perda de qualidade." },
    { nome: "Web Scraper (Chrome Extension)", categoria: "unpopular software list", link: "https://chromewebstore.google.com/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn", desc: "Extensão gratuita para extrair dados de sites dinâmicos de forma estruturada." },
    { nome: "Img Upscaler", categoria: "unpopular software list", link: "https://imgupscaler.com/", desc: "Ferramenta online que utiliza IA para aumentar e restaurar a nitidez de imagens pequenas." },

    // Main Download Source
    { nome: "FileCR", categoria: "main download source", link: "https://filecr.com/home/", desc: "Grande repositório de software para Windows, macOS e Android com foco em ferramentas de produtividade." },
    { nome: "Anna's Archive", categoria: "main download source", link: "https://annas-archive.gd/", desc: "O maior buscador de bibliotecas abertas do mundo, focado no livre acesso ao conhecimento." },

    // Converter
    { nome: "Table Format Converter", categoria: "converter", link: "https://www.tableformatconverter.com/", desc: "Ferramenta online para converter tabelas de diferentes formatos (como Excel ou CSV) para código HTML, Markdown ou JSON." },
    { nome: "AnyFlip", categoria: "converter", link: "https://anyflip.com/", desc: "Plataforma para converter documentos PDF em publicações digitais interativas (flipbooks)." },

    // Game 4 Creatives
    { nome: "Shape Type", categoria: "game 4 creatives", link: "https://shape.method.ac/", desc: "Jogo educativo para treinar a percepção de formas e o ajuste de curvas em fontes tipográficas." },
    { nome: "Pixactly", categoria: "game 4 creatives", link: "https://pixactly.app/", desc: "Jogo que testa sua precisão ao desenhar formas com dimensões exatas em pixels." },
    { nome: "W+Type", categoria: "game 4 creatives", link: "https://wesscrow.github.io/meu-portfolio/wtype/", desc: "Experimento interativo que explora a relação entre tipografia e movimento." },
    { nome: "The Boolean Game", categoria: "game 4 creatives", link: "https://boolean.method.ac/", desc: "Jogo para aprender operações booleanas (união, interseção, subtração) aplicadas ao design vetorial." },
    { nome: "Can't Unsee", categoria: "game 4 creatives", link: "https://cantunsee.space/", desc: "Jogo de atenção aos detalhes onde você deve escolher o design de interface que está correto." },
    { nome: "User Inyerface", categoria: "game 4 creatives", link: "https://userinyerface.com/", desc: "Um jogo frustrante que desafia suas habilidades de navegação para mostrar como uma UX ruim pode ser." },
    { nome: "Kern Type", categoria: "game 4 creatives", link: "https://type.method.ac/", desc: "Jogo educativo para praticar o kerning (espaçamento entre letras) e melhorar sua sensibilidade tipográfica." },
    { nome: "Color Game", categoria: "game 4 creatives", link: "https://color.method.ac/", desc: "Jogo que desafia sua capacidade de identificar tons e matizes dentro de um círculo cromático." },
    { nome: "The Bézier Game", categoria: "game 4 creatives", link: "https://bezier.method.ac/", desc: "Jogo para dominar o uso da Pen Tool (ferramenta caneta) e a criação de curvas Bézier." },

    // Communities
    { nome: "Latinxs Who Design", categoria: "communities", link: "https://www.latinxswhodesign.com/", desc: "Um diretório para encontrar e celebrar o trabalho de designers talentosos da comunidade latina." },
    { nome: "Google UX Design Community", categoria: "communities", link: "https://www.coursera.support/s/google-ux-design-community", desc: "Fórum oficial de suporte e networking para alunos do certificado profissional de UX do Google." },

    // Guidelines
    { nome: "Paper Sizes", categoria: "guidelines", link: "https://papersizes.io/", desc: "Guia completo e internacional sobre todos os tamanhos de papel existentes." },
    { nome: "Brand Guidelines", categoria: "guidelines", link: "https://www.brandguidelines.net/", desc: "Repositório de manuais de identidade visual de grandes marcas globais." },

    // Cases Favoritos
    { nome: "Gen-Z broke the marketing funnel (Vogue Article)", categoria: "cases favoritos", link: "https://www.vogue.com/article/gen-z-broke-the-marketing-funnel-part-ii-what-now", desc: "Artigo analítico sobre como o comportamento da Geração Z está transformando o marketing tradicional." },

    // New Icons and Logos
    { nome: "Google Fonts Icons", categoria: "icons / logos", link: "https://fonts.google.com/icons", desc: "Biblioteca de ícones do Google Fonts para interfaces, produtos digitais e protótipos." },
    { nome: "Material Design 3 Icons", categoria: "icons / logos", link: "https://m3.material.io/styles/icons/overview", desc: "Documentação e referência dos ícones oficiais do Material Design 3." },
    { nome: "The SVG", categoria: "icons / logos", link: "https://thesvg.org/", desc: "Coleção de recursos e arquivos SVG para projetos digitais." },

    // New Color Tools
    { nome: "Color Safe", categoria: "color tools", link: "http://colorsafe.co/", desc: "Gerador de paletas acessíveis com base nas diretrizes WCAG." },
    { nome: "Coblis Color Blindness Simulator", categoria: "color tools", link: "https://www.color-blindness.com/coblis-color-blindness-simulator/", desc: "Simulador de daltonismo para testar percepção cromática e acessibilidade visual." },
    { nome: "Coolors", categoria: "color tools", link: "https://coolors.co/", desc: "Gerador rápido de paletas de cores para identidade, UI e experimentação visual." },

    // New Converter Tools
    { nome: "iLovePDF Juntar PDF", categoria: "converter", link: "https://www.ilovepdf.com/pt/juntar_pdf", desc: "Ferramenta online para unir documentos PDF rapidamente." },

    // New Utility Tools
    // New Web Development Tools
    { nome: "Formspree", categoria: "web development", link: "https://formspree.io/", desc: "Endpoint de formulários para sites estáticos e protótipos sem backend próprio." },
    { nome: "Supahero", categoria: "UI tools", link: "https://supahero.io/", desc: "Gerador de seções hero animadas para páginas web." },
    { nome: "Spring Initializr", categoria: "web development", link: "https://start.spring.io/", desc: "Bootstrap oficial para criação de projetos Spring Boot." },

    // Articles
    { nome: "Digital.gov Usability Topic", categoria: "articles", link: "https://digital.gov/topics/usability/", desc: "Coleção de conteúdos sobre usabilidade em serviços digitais governamentais." },
    { nome: "Empathy Mapping (NNg)", categoria: "articles", link: "https://www.nngroup.com/articles/empathy-mapping/", desc: "Guia da Nielsen Norman Group sobre mapeamento de empatia em UX." },
    { nome: "User Need Statements (NNg)", categoria: "articles", link: "https://www.nngroup.com/articles/user-need-statements/", desc: "Artigo sobre como estruturar declarações de necessidades de usuários." },
    { nome: "UX Ideation (NNg)", categoria: "articles", link: "https://www.nngroup.com/articles/ux-ideation/", desc: "Referência sobre ideação em processos de UX." },
    { nome: "Usability Testing 101 (NNg)", categoria: "articles", link: "https://www.nngroup.com/articles/usability-testing-101/", desc: "Introdução prática a testes de usabilidade." },
    { nome: "Legibility, Readability & Comprehension (NNg)", categoria: "articles", link: "https://www.nngroup.com/articles/legibility-readability-comprehension/", desc: "Artigo sobre legibilidade, leitura e compreensão em interfaces." },
    { nome: "10 Usability Heuristics (NNg)", categoria: "articles", link: "https://www.nngroup.com/articles/ten-usability-heuristics/", desc: "As dez heurísticas clássicas de usabilidade para design de interação." },
    { nome: "Animation Purpose in UX (NNg)", categoria: "articles", link: "https://www.nngroup.com/articles/animation-purpose-ux/", desc: "Artigo sobre quando animações ajudam a experiência do usuário." },
    { nome: "Personas: Why and How to Use Them (IxDF)", categoria: "articles", link: "https://ixdf.org/literature/article/personas-why-and-how-you-should-use-them", desc: "Guia sobre criação e uso de personas em projetos de design." },
    { nome: "Emphasis & Focal Points (IxDF)", categoria: "articles", link: "https://ixdf.org/literature/article/emphasis-setting-up-the-focal-point-of-your-design", desc: "Artigo sobre ênfase visual e pontos focais no design." },
    { nome: "Visual Hierarchy (IxDF)", categoria: "articles", link: "https://ixdf.org/literature/topics/visual-hierarchy", desc: "Tópico de referência sobre hierarquia visual." },
    { nome: "Design Principles (IxDF)", categoria: "articles", link: "https://ixdf.org/literature/topics/design-principles", desc: "Coleção de conteúdos sobre princípios de design." },
    { nome: "Responsive Design (IxDF)", categoria: "articles", link: "https://ixdf.org/literature/topics/responsive-design", desc: "Tópico de referência sobre design responsivo." },
    { nome: "Designing Information Architecture (Medium)", categoria: "articles", link: "https://osamaabdelnaser.medium.com/designing-the-information-architecture-of-apps-b1c9c17839a9", desc: "Artigo sobre arquitetura da informação em aplicativos." },
    { nome: "Accessibility Tips for Information Architects (Medium)", categoria: "articles", link: "https://people4research.medium.com/world-ia-day-2019-accessibility-tips-for-information-architects-79bd187191a4", desc: "Dicas de acessibilidade para arquitetura da informação." },
    { nome: "Web and Mobile App Sitemap (Medium)", categoria: "articles", link: "https://medium.com/tenrocket/web-and-mobile-app-sitemap-643b60b0343e", desc: "Artigo sobre sitemaps para web e aplicativos móveis." },
    { nome: "The UX in Motion Manifesto (Medium)", categoria: "articles", link: "https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc", desc: "Manifesto sobre movimento aplicado à usabilidade." },
    { nome: "7 Things When Selecting Fonts (UX Planet)", categoria: "articles", link: "https://uxplanet.org/7-things-to-remember-when-selecting-fonts-for-your-design-ec1e592266c5", desc: "Checklist para seleção de fontes em projetos de design." },
    { nome: "7 Basic Rules for Button Design (UX Planet)", categoria: "articles", link: "https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4", desc: "Regras básicas para desenho de botões em interfaces." },
    { nome: "The Anatomy of Input Field (UX Planet)", categoria: "articles", link: "https://uxplanet.org/the-anatomy-of-input-field-c3ef863e01d7", desc: "Anatomia e boas práticas para campos de entrada." },
    { nome: "Golden Ratio in UI Design (UX Planet)", categoria: "articles", link: "https://uxplanet.org/golden-ratio-bring-balance-in-ui-design-765c954f0ff9", desc: "Uso da proporção áurea para equilíbrio visual em UI." },
    { nome: "Affordances in User Interfaces (UX Planet)", categoria: "articles", link: "https://uxplanet.org/ux-design-glossary-how-to-use-affordances-in-user-interfaces-393c8e9686e4", desc: "Artigo sobre affordances em interfaces de usuário." },
    { nome: "Best Practices for Video UX (UX Planet)", categoria: "articles", link: "https://uxplanet.org/best-practices-for-video-e279efcfe7eb", desc: "Boas práticas para experiência de usuário com vídeo." },
    { nome: "5 UI Navigation Patterns (UX Planet)", categoria: "articles", link: "https://uxplanet.org/5-ui-patterns-navigation-that-makes-good-ux-sense-92a65df7485d", desc: "Padrões de navegação que favorecem uma boa experiência." },
    { nome: "Product Designer Guide to Competitive Analysis (Toptal)", categoria: "articles", link: "https://www.toptal.com/product-managers/product-consultant/product-designer-guide-to-competitive-analysis", desc: "Guia de análise competitiva para product designers." },
    { nome: "Design Problem Statement (Toptal)", categoria: "articles", link: "https://www.toptal.com/designers/product-design/design-problem-statement", desc: "Artigo sobre formulação de problemas de design." },
    { nome: "Color in UX (Toptal)", categoria: "articles", link: "https://www.toptal.com/designers/ux/color-in-ux", desc: "Referência sobre uso de cor em experiência do usuário." },
    { nome: "Principles of Design (Toptal)", categoria: "articles", link: "https://www.toptal.com/designers/ui/principles-of-design", desc: "Artigo sobre princípios fundamentais de UI design." },
    { nome: "UX Sounds Guide (Toptal)", categoria: "articles", link: "https://www.toptal.com/designers/ux/ux-sounds-guide", desc: "Guia sobre sons aplicados à experiência do usuário." },
    { nome: "Sitemap and Information Architecture (Adobe XD)", categoria: "articles", link: "https://xd.adobe.com/ideas/process/information-architecture/sitemap-and-information-architecture/", desc: "Artigo sobre sitemap e arquitetura da informação." },
    { nome: "Visual Sitemap Examples (Adobe XD)", categoria: "articles", link: "https://xd.adobe.com/ideas/process/information-architecture/visual-sitemap-examples-website-designs/", desc: "Exemplos visuais de sitemaps para websites." },
    { nome: "What is an Information UX Architect (Adobe XD)", categoria: "articles", link: "https://xd.adobe.com/ideas/process/information-architecture/information-ux-architect/", desc: "Artigo sobre o papel de arquitetura da informação em UX." },
    { nome: "Information Architecture Examples (Adobe XD)", categoria: "articles", link: "https://xd.adobe.com/ideas/process/information-architecture/information-architecture-examples/", desc: "Exemplos de arquitetura da informação." },
    { nome: "4 Golden Rules of UI Design (Adobe XD)", categoria: "articles", link: "https://xd.adobe.com/ideas/process/ui-design/4-golden-rules-ui-design/", desc: "Quatro regras fundamentais para UI design." },
    { nome: "Ethics in UX Design (UsabilityGeek)", categoria: "articles", link: "https://usabilitygeek.com/ethics-in-user-experience-design/", desc: "Discussão sobre ética em experiência do usuário." },
    { nome: "UX for Social Good (UsabilityGeek)", categoria: "articles", link: "https://usabilitygeek.com/ux-for-social-good/", desc: "Artigo sobre UX aplicado a impacto social." },
    { nome: "Building an Ethics Framework for UX (UXPA)", categoria: "articles", link: "https://uxpamagazine.org/building-an-ethics-framework-for-ux-design/", desc: "Construção de frameworks éticos para UX design." },
    { nome: "Ethical UX Design (Daffodil)", categoria: "articles", link: "https://insights.daffodilsw.com/blog/ethical-ux-design", desc: "Artigo sobre práticas éticas em UX." },
    { nome: "Are You Solving the Right Problem? (HBR)", categoria: "articles", link: "https://hbr.org/2012/09/are-you-solving-the-right-problem", desc: "Artigo da Harvard Business Review sobre enquadramento correto de problemas." },
    { nome: "What is Ideation in Design Thinking? (CareerFoundry)", categoria: "articles", link: "https://careerfoundry.com/en/blog/ux-design/what-is-ideation-in-design-thinking/", desc: "Introdução à ideação no design thinking." },
    { nome: "Introduction to Color Theory (CareerFoundry)", categoria: "articles", link: "https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/", desc: "Introdução à teoria das cores para UI design." },
    { nome: "Smartphone Accessibility Guide (uSwitch)", categoria: "articles", link: "https://www.uswitch.com/mobiles/guides/smartphone-accessibility/", desc: "Guia de acessibilidade em smartphones." },
    { nome: "Crazy 8s Ideation Concept (Switchit)", categoria: "articles", link: "https://www.switchit.com/blog/design/crazy-concept-ideation-with-crazy-8s.aspx", desc: "Artigo sobre o método Crazy 8s para ideação." },
    { nome: "UI Visual Hierarchy Rules (Mockplus)", categoria: "articles", link: "https://www.mockplus.com/blog/post/ui-visual-hierarchy", desc: "Regras de hierarquia visual para interfaces." },
    { nome: "UX Design Principles (Springboard)", categoria: "articles", link: "https://www.springboard.com/blog/design/ux-design-principles/", desc: "Guia de princípios de UX design." },
    { nome: "Navigation Design Guide (Justinmind)", categoria: "articles", link: "https://www.justinmind.com/blog/navigation-design-almost-everything-you-need-to-know/", desc: "Guia abrangente sobre design de navegação." },
    { nome: "Designing for Social Good (NextBillion)", categoria: "articles", link: "https://nextbillion.net/designing-for-social-good/", desc: "Artigo sobre design para impacto social." },
    { nome: "3 Principles for Social Change Design (Fast Company)", categoria: "articles", link: "https://www.fastcompany.com/3065781/3-principles-to-guide-designing-for-social-change", desc: "Princípios para design voltado à mudança social." },
    { nome: "Responsive Design Guide (Microsoft)", categoria: "articles", link: "https://learn.microsoft.com/en-us/windows/apps/design/layout/responsive-design", desc: "Guia da Microsoft sobre design responsivo." },
    { nome: "Gestalt Principles in UX (UserTesting)", categoria: "articles", link: "https://www.usertesting.com/blog/gestalt-principles", desc: "Aplicação dos princípios da Gestalt em UX." },
    { nome: "20 Presentation Experts Tips (Forbes)", categoria: "articles", link: "https://www.forbes.com/sites/markfidelman/2014/08/15/20-world-class-presentation-experts-share-their-top-tips/", desc: "Dicas de especialistas para apresentações." },
    { nome: "Google Design - Reimagining Google Fonts", categoria: "articles", link: "https://design.google/library/reimagining-google-fonts", desc: "Artigo do Google Design sobre a evolução do Google Fonts." },
    { nome: "Google Design - Exploring Color in Google Maps", categoria: "articles", link: "https://design.google/library/exploring-color-google-maps", desc: "Artigo do Google Design sobre cor no Google Maps." },
    { nome: "Google Design - Airbnb Invites You In", categoria: "articles", link: "https://design.google/library/airbnb-invites-you-in", desc: "Estudo publicado no Google Design sobre Airbnb." },
    { nome: "Dissertação Acadêmica (UFMG)", categoria: "articles", link: "https://repositorio.ufmg.br/items/0fc2ceb6-2a1e-4867-857f-d9b37a3c3ef4", desc: "Dissertação acadêmica hospedada no repositório da UFMG." },
    { nome: "Artigo Científico (PUCRS)", categoria: "articles", link: "https://revistaseletronicas.pucrs.br/graduacao/article/view/20732", desc: "Artigo científico publicado em revista eletrônica da PUCRS." },

    // Design Systems
    { nome: "Material Design 3", categoria: "design systems", link: "https://m3.material.io/", desc: "Design system do Google para produtos digitais modernos." },
    { nome: "Material Design 2 - Applying Color", categoria: "design systems", link: "https://m2.material.io/design/color/applying-color-to-ui.html", desc: "Guia do Material Design 2 sobre aplicação de cor em interfaces." },
    { nome: "Material Design 2 - Material Studies", categoria: "design systems", link: "https://m2.material.io/design/material-studies/about-our-material-studies.html", desc: "Estudos de caso e aplicações do Material Design." },
    { nome: "Material Design 3 - Buttons", categoria: "design systems", link: "https://m3.material.io/components/buttons/overview", desc: "Documentação de botões no Material Design 3." },
    { nome: "Material Design 3 - Text Fields", categoria: "design systems", link: "https://m3.material.io/components/text-fields/overview", desc: "Documentação de campos de texto no Material Design 3." },
    { nome: "Apple Developer Design", categoria: "design systems", link: "https://developer.apple.com/design/", desc: "Portal de design da Apple para plataformas e produtos digitais." },
    { nome: "Apple Human Interface Guidelines", categoria: "design systems", link: "https://developer.apple.com/design/human-interface-guidelines/", desc: "Diretrizes oficiais de interface humana da Apple." },
    { nome: "Shopify Polaris", categoria: "design systems", link: "https://polaris-react.shopify.com/", desc: "Design system da Shopify para experiências de comércio." },
    { nome: "U.S. Web Design System (USWDS)", categoria: "design systems", link: "https://designsystem.digital.gov/", desc: "Design system oficial para serviços digitais do governo dos EUA." },
    { nome: "Microsoft Fluent 2", categoria: "design systems", link: "https://fluent2.microsoft.design/#/", desc: "Design system da Microsoft para produtos e aplicações." },
    { nome: "10 Best Design Systems (DesignerUp)", categoria: "design systems", link: "https://designerup.co/blog/10-best-design-systems-and-how-to-learn-and-steal-from-them/", desc: "Lista e análise de design systems populares." },

    // Figma Tools
    { nome: "Stark Contrast & Accessibility Checker", categoria: "figma tools", link: "https://www.figma.com/pt-br/comunidade/plugin/732603254453395948/stark-contrast-accessibility-ai-checker", desc: "Plugin do Figma para contraste, acessibilidade e checagens assistidas por IA." },
    { nome: "Navigating Figma UI3 Guide", categoria: "figma tools", link: "https://help.figma.com/hc/en-us/articles/23954856027159-Navigating-UI3", desc: "Guia oficial para navegar pela interface UI3 do Figma." },
    { nome: "Figma Color Picker Guide", categoria: "figma tools", link: "https://help.figma.com/hc/en-us/articles/360041003774-Update-fills-using-the-color-picker", desc: "Guia oficial do Figma para atualizar fills usando o color picker." },
    { nome: "Figma Layout Grids Best Practices", categoria: "figma tools", link: "https://www.figma.com/best-practices/everything-you-need-to-know-about-layout-grids/", desc: "Boas práticas do Figma para uso de layout grids." },
    { nome: "Smashing Magazine Layout Grids", categoria: "articles", link: "https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/", desc: "Artigo sobre construção de interfaces melhores com grids." },

    // New Guidelines
    { nome: "W3C WCAG 2.1", categoria: "guidelines", link: "https://www.w3.org/TR/WCAG21/", desc: "Especificação das Web Content Accessibility Guidelines 2.1." },
    { nome: "W3C WCAG Standards Overview", categoria: "guidelines", link: "https://www.w3.org/WAI/standards-guidelines/wcag/", desc: "Visão geral dos padrões WCAG do W3C." },
    { nome: "W3C Preliminary Accessibility Evaluation", categoria: "guidelines", link: "https://www.w3.org/WAI/test-evaluate/preliminary/#video", desc: "Guia preliminar de avaliação de acessibilidade web." },
    { nome: "Google Accessibility", categoria: "guidelines", link: "https://www.google.com/accessibility/", desc: "Recursos do Google sobre acessibilidade." },
    { nome: "Android Accessibility Support", categoria: "guidelines", link: "https://support.google.com/accessibility/android/answer/9711267?hl=en", desc: "Suporte e recursos de acessibilidade para Android." },

    // Job Boards
    { nome: "Revelo", categoria: "job boards", link: "https://www.revelo.com.br/", desc: "Plataforma brasileira de contratação e oportunidades em tecnologia." },
    { nome: "Remotive", categoria: "job boards", link: "https://remotive.com/", desc: "Plataforma de vagas remotas para profissionais de tecnologia e áreas digitais." },
    { nome: "Turing", categoria: "job boards", link: "https://www.turing.com/", desc: "Plataforma global para contratação e oportunidades remotas em tecnologia." },

    // New Learning Tools
    { nome: "Mobile Simulator (Chrome Extension)", categoria: "unpopular software list", link: "https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk?hl=pt-BR", desc: "Extensão para simular dispositivos móveis e testar responsividade no navegador." },

    // Tutorials
    { nome: "Vídeo Teoria das Cores/UX", categoria: "tutorials", link: "https://www.youtube.com/watch?v=ELFsZqp_tZY&t=2s", desc: "Vídeo educativo sobre teoria das cores aplicada a UX." },
    { nome: "Vídeo Design/UX", categoria: "tutorials", link: "https://www.youtube.com/watch?v=fXo7l5JceA4", desc: "Vídeo educativo sobre design e experiência do usuário." },

    // New UI Tools
    { nome: "Website Headlines", categoria: "UI tools", link: "https://websiteheadlines.com/", desc: "Referência rápida de headlines para páginas web." },
    { nome: "DesignRush Mobile Design Patterns", categoria: "articles", link: "https://www.designrush.com/best-designs/apps/trends/mobile-design-patterns", desc: "Coleção de padrões e tendências de design mobile." },

    // User Testing & Research
    { nome: "UserTesting Platform", categoria: "user testing & research", link: "https://www.usertesting.com/", desc: "Plataforma para testes com usuários e pesquisa de experiência." },
    { nome: "User Interviews Platform", categoria: "user testing & research", link: "https://www.userinterviews.com/", desc: "Plataforma para recrutar participantes e conduzir pesquisas com usuários." },
    { nome: "HubSpot Usability Testing Guide", categoria: "user testing & research", link: "https://blog.hubspot.com/marketing/usability-testing", desc: "Guia introdutório da HubSpot sobre testes de usabilidade." },
    { nome: "Screener Surveys Guide", categoria: "user testing & research", link: "https://www.userinterviews.com/ux-research-field-guide-chapter/screener-surveys", desc: "Guia sobre questionários screener para pesquisa com usuários." },
    { nome: "User Research Recruiting", categoria: "user testing & research", link: "https://www.userinterviews.com/plpq12021/user-research", desc: "Recurso sobre recrutamento para pesquisa com usuários." },
    { nome: "Justinmind User Persona Templates", categoria: "user testing & research", link: "https://www.justinmind.com/blog/user-persona-templates/", desc: "Modelos e referências para criação de personas." },
    { nome: "Xtensio User Persona Template", categoria: "user testing & research", link: "https://xtensio.com/user-persona-template/", desc: "Template de persona de usuário para pesquisa e produto." },

    // Color Pallete
    { nome: "Swatch 1", categoria: "color pallete", link: "#", desc: "use this instead of Pure White", colors: ["#fffff0", "#f9f6ee", "#fcf5e5", "#e2dfd2", "#f5fffa"] },
    { nome: "Swatch 2", categoria: "color pallete", link: "#", desc: "mango & papaya", colors: ["#ffefd5", "#ff8343"] },
    { nome: "Swatch 3", categoria: "color pallete", link: "#", desc: "antique white & dark cyan", colors: ["#f1dec6", "#179bae"] },
    { nome: "Swatch 4", categoria: "color pallete", link: "#", desc: "st. patricks's blue & Starship", colors: ["#24387d", "#d3f350"] },
    { nome: "Swatch 5", categoria: "color pallete", link: "#", desc: "App interface #1", colors: ["#d9eff7", "#9bbbfc", "#4741a6", "#f9ce69"] },
    { nome: "Swatch 6", categoria: "color pallete", link: "#", desc: "App interface #2", colors: ["#eaf9e7", "#coe6ba", "#4ca771", "#013237"] },
    { nome: "Swatch 7", categoria: "color pallete", link: "#", desc: "App interface #3", colors: ["#f6e8df", "#feae96", "#fe979c", "#013237"] },
    { nome: "Swatch 8", categoria: "color pallete", link: "#", desc: "App interface #4", colors: ["#1a1a1a", "#77acb7", "#f8b097", "#3fc495"] },
    { nome: "Swatch 9", categoria: "color pallete", link: "#", desc: "App interface #5", colors: ["#c2e7c9", "#f2ac20", "#4265d6", "#293855"] },
    { nome: "Swatch 10", categoria: "color pallete", link: "#", desc: "App interface #6", colors: ["#21251f", "#c8f560", "#43515c", "#7862f8"] },
    { nome: "Swatch 11", categoria: "color pallete", link: "#", desc: "App interface #7", colors: ["#111315", "#2a86ff", "#30353c"] },
    { nome: "Swatch 12", categoria: "color pallete", link: "#", desc: "App interface #8", colors: ["#24293e", "#8ebbff", "#2f3651"] },
    { nome: "Swatch 13", categoria: "color pallete", link: "#", desc: "App interface #9", colors: ["#0b0b0b", "#a3fda1", "#2d2d2d", "#925ff0"] },
    { nome: "Swatch 14", categoria: "color pallete", link: "#", desc: "nectar", colors: ["#f9da8b", "#fc7951", "#fbdcda", "#7497ff"] },
    { nome: "Swatch 15", categoria: "color pallete", link: "#", desc: "ditrish", colors: ["#72891b", "#cb2602", "#f8d78f"] },
    { nome: "Swatch 16", categoria: "color pallete", link: "#", desc: "ditrish #2", colors: ["#b9c7f8", "#0d21a5", "#d1d067"] },
    { nome: "Swatch 17", categoria: "color pallete", link: "#", desc: "ditrish #3", colors: ["#383e14", "#863433", "#f2bbc1"] }
];

const contentArea = document.getElementById('content');

// Reorganização lógica baseada em Workflow Criativo
const categoryOrder = [
    "moodboard",
    "ux tools",
    "user testing & research",
    "ui tools",
    "figma tools",
    "web development",
    "creative development",
    "cases favoritos",
    "articles",
    "color tools",
    "color pallete",
    "font style visualizer", // Corrigido de "type visualizer"
    "type tools",
    "styling tools",
    "learning tools",
    "tutorials",
    "guidelines",
    "design systems",
    "books",
    "visual search",
    "mockups",
    "illustrations",
    "icons / logos",
    "archives",
    "converter",
    "unpopular software list",
    "main download source", // Corrigido de "main download"
    "game 4 creatives",
    "job boards",
    "newsletters"
];

const categoryDefinitions = {
    "learning tools": "Plataformas de Desenvolvimento de Habilidades - Hubs de Fundamentação e Prática - Ecossistemas de Aprendizado Ativo.",
    "books": "Leitura para formação complementar e embasamento teórico.",
    "visual search": "Motores de Descoberta Visual e Estética - Curadoria de Benchmarking e Tendências - Repositórios de Referências Imersivas.",
    "archives": "Repositórios de Preservação Visual e Acervos Históricos.",
    "ux tools": "Ferramentas de Processo e Estruturação - Geradores de Escopo e Metodologia - Auxiliares de Tomada de Decisão em UX.",
    "ui tools": "Bibliotecas de Componentes e Assets de Interface - Recursos de Execução e Estética Visual - Repositórios de Interface e Estilo (Look & Feel).",
    "web development": "Recursos e Ferramentas para Desenvolvimento Web Moderno - Ecossistemas de Front-end e Programação.",
    "creative development": "Destaque de sites que exploram movimento, microinterações e novas formas de navegação.",
    "color tools": "Ecossistema de Gestão e Aplicação Cromática - Utilitários de Harmonia e Acessibilidade Visual - Recursos de Refinamento e Teoria das Cores.",
    "type tools": "Ecossistema de Curadoria e Pareamento Tipográfico - Recursos de Gestão e Descoberta de Tipografia - Utilitários de Estética e Funcionalidade de Tipos.",
    "font style visualizer": "Listagem de fontes específicas para visualização de estilo, preview e download.",
    "styling tools": "Recursos de Texturização e Efeitos Visuais - Utilitários de Finalização Estética - Ferramentas de Estilização e Tratamento de Ativos.",
    "mockups": "Recursos de mockup para apresentação de marcas, interfaces, produtos e composições visuais.",
    "illustrations": "Bibliotecas de ilustrações, fotografias e recursos visuais para composições digitais.",
    "icons / logos": "Bibliotecas de ícones, símbolos, SVGs e referências para logos e sistemas visuais.",
    "unpopular software list": "Curadoria de Softwares Utilitários e Open Source - Ferramentas de Otimização e Personalização de Sistema - Repositório de Softwares de Nicho e Alta Performance.",
    "main download source": "Repositórios Centrais de Software e Conhecimento - Fontes de Distribuição de Recursos Digitais - Centrais de Download para Produtividade e Pesquisa.",
    "converter": "Utilitários de Transformação de Dados - Ferramentas de Interoperabilidade e Formatação - Conversores de Estrutura para Desenvolvimento.",
    "game 4 creatives": "Treinamento de Habilidades por Gamificação - Simuladores de Percepção e Precisão Visual - Laboratórios Interativos de Fundamentos do Design.",
    "guidelines": "Repositórios de manuais e padrões técnicos de design e marca.",
    "design systems": "Guias, documentações e referências de frameworks e sistemas de design.",
    "cases favoritos": "Estudos de Caso e Análises de Tendências - Referências de Estratégia e Comportamento Digital - Artigos de Relevância Cultural e de Mercado.",
    "articles": "Leituras de aprofundamento em IA, UX, UI, acessibilidade, pesquisa e princípios de design.",
    "figma tools": "Plugins, guias e boas práticas para acelerar fluxos de trabalho no Figma.",
    "job boards": "Plataformas de contratação e busca de vagas para profissionais criativos e de tecnologia.",
    "tutorials": "Canais e vídeos educacionais para estudo de design, UX, UI e desenvolvimento.",
    "user testing & research": "Ferramentas, guias e templates para testes com usuários, personas e pesquisa.",
    "newsletters": "Informativos periódicos sobre tendências e notícias do mundo do design.",
    "color pallete": "Coleção de paletas de cores para inspiração e uso em projetos.",
    "moodboard": "Mural Visual de Referências - Curadoria de Estética, Texturas e Composições - Painel de Inspiração Semântica."
};

const categoryIcons = {
    "learning tools": "", 
    "books": "",
    "visual search": "", 
    "archives": "", 
    "ux tools": "", 
    "ui tools": "", 
    "web development": "",
    "creative development": "",
    "color tools": "", 
    "type tools": "", 
    "styling tools": "", 
    "mockups": "",
    "illustrations": "",
    "icons / logos": "",
    "unpopular software list": "", 
    "main download source": "", 
    "converter": "",
    "game 4 creatives": "",
    "font style visualizer": "",
    "guidelines": "",
    "design systems": "",
    "articles": "",
    "figma tools": "",
    "job boards": "",
    "tutorials": "",
    "user testing & research": "",
    "cases favoritos": "",
    "newsletters": "",
    "color pallete": "",
    "moodboard": ""
};

const weightLabels = {
    300: 'Light',
    400: 'Regular',
    700: 'Bold',
    800: 'ExtraBold',
    900: 'Black'
};

const categorySymbols = {
    "ux tools": "UX",
    "user testing & research": "UR",
    "ui tools": "UI",
    "figma tools": "F",
    "web development": "{ }",
    "creative development": "✦",
    "cases favoritos": "◎",
    "articles": "¶",
    "moodboard": "□",
    "color tools": "◐",
    "color pallete": "●",
    "font style visualizer": "Aa",
    "type tools": "T",
    "styling tools": "✶",
    "learning tools": "⌁",
    "tutorials": "▶",
    "guidelines": "§",
    "design systems": "DS",
    "books": "B",
    "visual search": "⌕",
    "mockups": "M",
    "illustrations": "◧",
    "icons / logos": "◇",
    "archives": "▤",
    "converter": "↔",
    "unpopular software list": "⌘",
    "main download source": "↓",
    "game 4 creatives": "◆",
    "job boards": "JB",
    "newsletters": "@",
    "communities": "☷"
};

function getCategorySymbol(category) {
    return categorySymbols[(category || '').trim().toLowerCase()] || "□";
}

function getCategoryCount(category) {
    if (category === 'moodboard') return moodboardImageFiles.length;
    return (groupedTools[category] || []).length;
}

function getCategoryIcon(category) {
    return getCategorySymbol(category);
}

// Agrupar ferramentas por categoria
let groupedTools = tools.reduce((acc, tool) => {
    const cat = tool.categoria.trim().toLowerCase();
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(tool);
    return acc;
}, {});

// Renderizar Categorias e Ferramentas
function renderToolbox(filterText = '') {
    contentArea.innerHTML = '';
    const query = filterText.toLowerCase();

    const limitedCategories = ["learning tools", "tutorials", "cases favoritos", "articles", "visual search", "archives", "ux tools", "user testing & research", "ui tools", "figma tools", "creative development", "color tools", "color pallete", "type tools", "font style visualizer", "styling tools", "mockups", "illustrations", "icons / logos", "unpopular software list", "main download source", "converter", "game 4 creatives", "guidelines", "design systems", "job boards", "newsletters"];

    categoryOrder.forEach(displayCat => {
        const lookupCat = displayCat.toLowerCase();
        
        // Filtragem para busca
        const categoryTools = (groupedTools[lookupCat] || []).filter(tool => 
            tool.nome.toLowerCase().includes(query) || 
            (tool.desc && tool.desc.toLowerCase().includes(query))
        );

        // Se estiver buscando e não houver itens na categoria, pula a seção
        if (query && categoryTools.length === 0 && lookupCat !== 'moodboard') return;
        // Se não houver itens e não for o moodboard (que é estático), pula
        if (!groupedTools[lookupCat] && lookupCat !== 'moodboard') return;

        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = lookupCat.replace(/\s+/g, '-');

        const header = document.createElement('h2');
        header.className = 'category-header';
        header.innerHTML = `<span>${displayCat}</span>`;
        section.appendChild(header);

        const definition = document.createElement('p');
        definition.className = 'category-description';
        definition.textContent = categoryDefinitions[lookupCat] || '';
        section.appendChild(definition);

        if (lookupCat === 'books') {
            const list = document.createElement('div');
            list.className = 'books-checklist';

            categoryTools.forEach(tool => {
                const itemId = `book-progress-${tool.nome.replace(/\s+/g, '-').toLowerCase()}`;
                const isChecked = localStorage.getItem(itemId) === 'true';
                
                const item = document.createElement('div');
                item.className = `book-checklist-item ${isChecked ? 'completed' : ''}`;
                item.innerHTML = `
                    <label class="checkbox-container">
                        <input type="checkbox" ${isChecked ? 'checked' : ''} data-id="${itemId}">
                        <span class="checkmark"></span>
                    </label>
                    <div class="book-info">
                        <div class="tool-category-tag">${tool.categoria}</div>
                        <a href="${tool.link}" target="_blank" class="book-title-link">${tool.nome}</a>
                        <p class="book-description-text">${tool.desc}</p>
                    </div>
                `;

                const checkbox = item.querySelector('input');
                checkbox.addEventListener('change', (e) => {
                    localStorage.setItem(itemId, e.target.checked);
                    item.classList.toggle('completed', e.target.checked);
                });

                list.appendChild(item);
            });
            section.appendChild(list);
        } else if (lookupCat === 'color pallete') {
            const grid = document.createElement('div');
            grid.className = 'tools-grid';

            categoryTools.forEach((tool, index) => {
                const card = document.createElement('div');
                card.className = 'tool-card palette-card' + (limitedCategories.includes(lookupCat) && !query && index >= 6 ? ' hidden-card' : '');
                if (limitedCategories.includes(lookupCat) && !query && index >= 6) card.style.display = 'none';
                
                let swatchesHtml = '';
                if (tool.colors) {
                    swatchesHtml = `
                        <div class="swatches-container">
                            ${tool.colors.map(color => `
                                <div class="swatch-item">
                                    <div class="swatch-box" style="background-color: ${color}" data-color="${color}" title="Clique para copiar"></div>
                                    <span class="swatch-label">${color}</span>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }

                card.innerHTML = `
                    <div>
                        <div class="tool-category-tag">${tool.categoria}</div>
                        <div class="tool-name">${tool.nome}</div>
                        ${swatchesHtml}
                        <div class="tool-description">${tool.desc}</div>
                    </div>
                `;

                // Lógica de copiar para o clipboard
                card.querySelectorAll('.swatch-box').forEach(box => {
                    box.addEventListener('click', (e) => {
                        const color = e.target.getAttribute('data-color');
                        navigator.clipboard.writeText(color);
                        
                        const label = e.target.nextElementSibling;
                        const originalText = label.textContent;
                        label.textContent = "COPIADO!";
                        setTimeout(() => label.textContent = originalText, 1000);
                    });
                });

                grid.appendChild(card);
            });
            const wrapper = document.createElement('div');
            wrapper.className = 'category-content';
            wrapper.appendChild(grid);
            section.appendChild(wrapper);

            // Adicionar botão "Ver Mais" se necessário
            if (limitedCategories.includes(lookupCat) && !query && categoryTools.length > 6) {
                const showMoreBtn = document.createElement('button');
                showMoreBtn.className = 'show-more-btn';
                showMoreBtn.textContent = 'Ver Mais';
                showMoreBtn.onclick = () => {
                    const hiddenCards = section.querySelectorAll('.tool-card');
                    hiddenCards.forEach(c => c.style.display = 'flex');
                    showMoreBtn.remove();
                };
                section.appendChild(showMoreBtn);
            }
        } else if (lookupCat === 'font style visualizer') {
            const previewControls = document.createElement('div');
            previewControls.className = 'font-preview-controls';
            previewControls.innerHTML = `
                <input type="text" class="font-input" placeholder="Digite uma frase para testar as fontes..." value="Visualização de Tipo">
            `;
            section.appendChild(previewControls);

            const grid = document.createElement('div');
            grid.className = 'tools-grid font-list';

            // Sort fonts: Google Fonts first
            const sortedFonts = [...categoryTools].sort((a, b) => {
                const isAGoogleFont = a.link.includes('fonts.google.com');
                const isBGoogleFont = b.link.includes('fonts.google.com');

                if (isAGoogleFont && !isBGoogleFont) {
                    return -1; // a comes before b
                }
                if (!isAGoogleFont && isBGoogleFont) {
                    return 1; // b comes before a
                }
                return 0; // maintain original order if both are Google Fonts or neither are
            });

            sortedFonts.forEach((tool, index) => {
                const isGoogleFont = tool.link.includes('fonts.google.com');
                const card = document.createElement('div');
                card.className = 'tool-card font-card' + (limitedCategories.includes(lookupCat) && !query && index >= 6 ? ' hidden-card' : '');
                if (limitedCategories.includes(lookupCat) && !query && index >= 6) card.style.display = 'none';
                
                const availableWeights = tool.pesos || [400];

                card.innerHTML = `
                    <div class="tool-tags">
                        <div class="tool-category-tag">${tool.categoria}</div>
                        <div class="tool-license-tag ${tool.licenca === 'OFL' ? 'free' : 'restricted'}">${tool.licenca || 'N/A'}</div>
                    </div>
                    <div class="tool-name">${tool.nome}</div>
                    <div class="font-preview-container">
                        <div class="font-preview-text" style="font-family: '${tool.nome}', sans-serif; font-weight: 400;">Visualização de Tipo</div>
                        <div class="weight-selector">
                            ${availableWeights.map((w) => `<button class="weight-chip ${w === 400 ? 'active' : ''}" data-weight="${w}">${weightLabels[w] || w}</button>`).join('')}
                            <div class="variation-preview-trigger">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <div class="variations-popup">
                                ${availableWeights.map(w => `
                                    <div class="popup-line">
                                        <span class="popup-weight-label">${weightLabels[w] || w}</span>
                                        <div class="popup-preview-text" style="font-family: '${tool.nome}', sans-serif; font-weight: ${w};">Visualização de Tipo</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="font-card-footer">
                        <div class="tool-description">${tool.desc}</div>
                        <div class="tool-link-icon">
                            <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="arrow-button">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </a>
                        </div>
                    </div>
                `;

                const previewText = card.querySelector('.font-preview-text');
                const chips = card.querySelectorAll('.weight-chip');
                chips.forEach(chip => {
                    chip.addEventListener('click', () => {
                        chips.forEach(c => c.classList.remove('active'));
                        chip.classList.add('active');
                        previewText.style.fontWeight = chip.dataset.weight;
                    });
                });
                grid.appendChild(card);
            });

            const input = previewControls.querySelector('.font-input');
            input.addEventListener('input', (e) => {
                const text = e.target.value || "Visualização de Tipo";
                grid.querySelectorAll('.font-preview-text, .popup-preview-text').forEach(preview => {
                    preview.textContent = text;
                });
            });

            const wrapper = document.createElement('div');
            wrapper.className = 'category-content';
            wrapper.appendChild(grid);
            section.appendChild(wrapper);

            // Adicionar botão "Ver Mais" se necessário
            if (limitedCategories.includes(lookupCat) && !query && categoryTools.length > 6) {
                const showMoreBtn = document.createElement('button');
                showMoreBtn.className = 'show-more-btn';
                showMoreBtn.textContent = 'Ver Mais';
                showMoreBtn.onclick = () => {
                    const hiddenCards = section.querySelectorAll('.tool-card');
                    hiddenCards.forEach(c => c.style.display = 'flex');
                    showMoreBtn.remove();
                };
                section.appendChild(showMoreBtn);
            }
        } else if (lookupCat === 'moodboard') {
            // Ocultar moodboard se estiver pesquisando algo específico
            if (query) return;
            
            const grid = document.createElement('div');
            grid.className = 'moodboard-grid';

            // Embaralha a ordem a cada renderização e usa a extensão de cada lote.
            const moodboardImages = [...moodboardImageFiles];
            for (let i = moodboardImages.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [moodboardImages[i], moodboardImages[j]] = [moodboardImages[j], moodboardImages[i]];
            }

            moodboardImages.forEach((filename) => {
                const imageNumber = Number(filename.match(/\d+/)[0]);
                const item = document.createElement('div');
                item.className = 'moodboard-item';
                
                const img = document.createElement('img');
                img.src = `assets/moodboard/${filename}`;
                img.alt = `Moodboard Item ${imageNumber}`;
                img.loading = "lazy"; // Melhora a performance de carregamento
                img.decoding = 'async';
                if (moodboardSizes[imageNumber - 1]) {
                    img.width = moodboardSizes[imageNumber - 1][0];
                    img.height = moodboardSizes[imageNumber - 1][1];
                }
                
                item.appendChild(img);
                grid.appendChild(item);
            });

            const wrapper = document.createElement('div');
            wrapper.className = 'category-content';
            wrapper.appendChild(grid);
            section.appendChild(wrapper);
        }
        else {
        const grid = document.createElement('div');
        grid.className = 'tools-grid';

        categoryTools.forEach((tool, index) => {
            const card = document.createElement('a');
            card.className = 'tool-card' + (limitedCategories.includes(lookupCat) && !query && index >= 6 ? ' hidden-card' : '');
            if (limitedCategories.includes(lookupCat) && !query && index >= 6) card.style.display = 'none';
            
            card.href = tool.link;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.innerHTML = `
                <div>
                    <div class="tool-category-tag">${tool.categoria}</div>
                    <div class="tool-name">${tool.nome}</div>
                    <div class="tool-description">${tool.desc || 'Sem descrição disponível.'}</div>
                </div>
                <div class="tool-link-icon">
                    <span>Open</span>
                    <div class="arrow-button">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        const wrapper = document.createElement('div');
        wrapper.className = 'category-content';
        wrapper.appendChild(grid);
        section.appendChild(wrapper);

        // Adicionar botão "Ver Mais" se necessário
        if (limitedCategories.includes(lookupCat) && !query && categoryTools.length > 6) {
            const showMoreBtn = document.createElement('button');
            showMoreBtn.className = 'show-more-btn';
            showMoreBtn.textContent = 'Ver Mais';
            showMoreBtn.onclick = () => {
                const hiddenCards = section.querySelectorAll('.tool-card');
                hiddenCards.forEach(c => c.style.display = 'flex');
                showMoreBtn.remove();
            };
            section.appendChild(showMoreBtn);
        }
        }
        contentArea.appendChild(section);
    });
}

// Carrega as fontes do Google automaticamente com múltiplos pesos
function loadGoogleFonts() {
    const fontsToLoad = tools.filter(t => t.categoria === 'font style visualizer' && t.link.includes('fonts.google.com'));
    
    if (fontsToLoad.length > 0) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';

        const families = fontsToLoad.map(t => {
            const fontName = t.nome.replace(/\s+/g, '+');
            const pesos = t.pesos || [400];
            return `family=${fontName}:wght@${pesos.join(';')}`;
        }).join('&');

        link.href = `https://fonts.googleapis.com/css2?${families}&display=swap`;
        document.head.appendChild(link);
    }
}

// Adiciona a funcionalidade de Busca
function initSearch() {
    const hero = document.querySelector('.hero-section');
    const container = document.createElement('div');
    container.className = 'search-container';
    container.innerHTML = `
        <input type="search" class="search-input" aria-label="Buscar ferramentas, referências e recursos" placeholder="Buscar ferramentas, referências e recursos...">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    `;

    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.type = 'button';
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        try { localStorage.setItem('my-creative-box-theme', isDark ? 'dark' : 'light'); } catch (_) {}
        updateThemeToggle(themeToggle, isDark);
    });
    updateThemeToggle(themeToggle, document.body.classList.contains('dark-theme'));
    container.appendChild(themeToggle);
    
    document.body.appendChild(container);

    container.querySelector('.search-input').addEventListener('input', (e) => {
        renderToolbox(e.target.value);
    });
}

// Função para renderizar a Navbar
function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const navContent = document.createElement('div');
    navContent.className = 'nav-content';

    const brand = document.createElement('a');
    brand.className = 'nav-brand';
    brand.href = '#content';
    brand.innerHTML = `
        <img class="nav-brand-icon" src="assets/logo.png" alt="">
        <span class="brand-wordmark">my creative<strong>toolbox.</strong></span>
    `;

    const navLinks = document.createElement('div');
    navLinks.className = 'nav-links';

    const uxPatchLink = document.createElement('a');
    uxPatchLink.className = 'nav-link nav-ux-patch';
    uxPatchLink.href = 'uxpatch.html';
    uxPatchLink.innerHTML = '<span class="nav-link-icon">UX</span><span class="nav-link-label">UX Patch</span>';

    const articlesLink = document.createElement('a');
    articlesLink.className = 'nav-link nav-articles-featured';
    articlesLink.href = '#articles';
    articlesLink.innerHTML = `<span class="nav-link-icon">¶</span><span class="nav-link-label">Artigos</span><small>${getCategoryCount('articles')}</small>`;

    const libraryTitle = document.createElement('div');
    libraryTitle.className = 'nav-section-title';
    libraryTitle.textContent = 'Coleções';
    navLinks.appendChild(libraryTitle);

    categoryOrder.forEach(cat => {
        const lookupCat = cat.toLowerCase();
        if (!groupedTools[lookupCat] && lookupCat !== 'moodboard') return;

        const a = document.createElement('a');
        a.className = 'nav-link nav-category-link';
        a.href = `#${lookupCat.replace(/\s+/g, '-')}`;
        a.innerHTML = `
            <span class="nav-link-icon">${getCategoryIcon(lookupCat)}</span>
            <span class="nav-link-label">${cat}</span>
            <small>${getCategoryCount(lookupCat)}</small>
        `;
        navLinks.appendChild(a);
    });

    const personalTitle = document.createElement('div');
    personalTitle.className = 'nav-section-title';
    personalTitle.textContent = 'Links';
    navLinks.appendChild(personalTitle);

    const personalLinks = [
        { name: 'Portfolio', url: 'https://joaoluisdutra.github.io/portfolio/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joaoluisdutra/' },
        { name: 'Behance', url: 'https://www.behance.net/userdojoao' },
        { name: 'Lattes', url: 'http://lattes.cnpq.br/5489493718391993' }
    ];

    personalLinks.forEach(link => {
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `<span class="nav-link-icon">↗</span><span class="nav-link-label">${link.name}</span>`;
        navLinks.appendChild(a);
    });

    navContent.appendChild(brand);
    navContent.appendChild(uxPatchLink);
    navContent.appendChild(articlesLink);
    navContent.appendChild(navLinks);
    nav.appendChild(navContent);
    document.body.prepend(nav);
}

function updateThemeToggle(button, isDark) {
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
    button.title = isDark ? 'Ativar modo claro' : 'Ativar modo escuro';
    button.innerHTML = `<span class="theme-toggle-icon" aria-hidden="true">${isDark ? '☀' : '☾'}</span><span class="theme-toggle-label">${isDark ? 'Modo claro' : 'Modo escuro'}</span>`;
}

// Intrinsic dimensions reserve space for lazy images in the masonry layout.
const moodboardSizes = [[1081,1081],[1350,1688],[1080,1350],[1440,1801],[1440,1440],[1253,1565],[1440,1763],[1080,1440],[1440,1800],[1080,1380],[1440,1914],[1440,1914],[896,1152],[1440,1800],[1440,1920],[1080,1350],[1440,1440],[1080,1326],[1440,1800],[1440,1789],[1179,1445],[1080,1350],[1440,1800],[1440,1440],[1440,1800],[1440,1800],[1440,1800],[1440,1800],[1080,1080],[1440,1800],[1440,1440],[3213,3213],[1080,1080],[1440,1800],[1440,1440],[1440,1567],[1440,1798],[415,538],[306,541],[299,493],[429,544],[403,544],[3840,2180],[306,440],[304,501],[436,545],[305,336],[434,545],[448,544],[303,335],[442,443],[299,501],[303,495],[302,543],[436,544],[432,545],[303,532],[303,546],[1440,1798]];
const moodboardImageFiles = [
    ...[
        ['jpg', '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,107,109,110,113,114,115'],
        ['png', '38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,65,66,67,68,69,71,72,74,75,76,78,79,81,82,84,86,87,88,89,91,93,94,96,97,100,101,102,103,105,108,111,112'],
        ['jpeg', '61,62,63,64,70,73,77,83,85,90,92,95,98,99,104,106']
    ].flatMap(([extension, numbers]) => numbers.split(',').map(number => `moodboard-${number}.${extension}`))
];

loadGoogleFonts();
renderNavbar();
initSearch();
const resourceCount = document.getElementById('resource-count');
if (resourceCount) resourceCount.textContent = `${tools.length} recursos`;
renderToolbox();

