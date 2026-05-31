export interface Pelicula {
    id: string;
    titulo: string;
    sinopsis: string;
    duracion: number;
    añoEstreno: number;
    clasificacion: string;
    generos: string[];
    urlPortada: string;
    urlBanner: string;
    urlTrailer: string;
}

export const listaPeliculas: Pelicula[] = [
    // ANIME
    {
        id: "anime-demon-slayer",
        titulo: "Demon Slayer: Infinity Castle",
        sinopsis: "La fase final y la batalla más larga está por comenzar cuando los cazadores de demonios se adentran en el Castillo Infinito de Muzan Kibutsuji.",
        duracion: 91,
        añoEstreno: 2025,
        clasificacion: '14+',
        generos: ["Anime", "Acción", "Fantasía"],
        urlPortada: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500",
        urlBanner: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200",
        urlTrailer: "https://www.youtube.com/embed/x7uLutVRBfI?autoplay=1&mute=1&controls=0&loop=1&playlist=x7uLutVRBfI"
    },
    {
        id: "anime-your-name",
        titulo: "Your Name",
        sinopsis: "Dos desconocidos que viven vidas completamente diferentes en Japón despiertan un día descubriendo que han intercambiado cuerpos de manera inexplicable.",
        duracion: 106,
        añoEstreno: 2016,
        clasificacion: 'TP',
        generos: ["Anime", "Romance", "Drama"],
        urlPortada: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
        urlBanner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
        urlTrailer: "https://www.youtube.com/embed/hRfHcp2G694?autoplay=1&mute=1&controls=0&loop=1&playlist=hRfHcp2G694"
    },
    {
        id: "anime-spirited-away",
        titulo: "El Viaje de Chihiro",
        sinopsis: "Una niña de diez años se muda con sus padres y queda atrapada en un mundo mágico y misterioso gobernado por dioses, espíritus y una ambiciosa bruja.",
        duracion: 125,
        añoEstreno: 2001,
        clasificacion: 'TP',
        generos: ["Anime", "Fantasía", "Aventura"],
        urlPortada: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500",
        urlBanner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200",
        urlTrailer: "https://www.youtube.com/embed/ByXuk9QqQkk?autoplay=1&mute=1&controls=0&loop=1&playlist=ByXuk9QqQkk"
    },
    // ROMANCE
    {
        id: "romance-notebook",
        titulo: "Diario de una Pasión",
        sinopsis: "En un hogar de ancianos, un hombre le lee a una mujer la historia de amor de dos jóvenes de distintas clases sociales que se enamoraron en los años 40.",
        duracion: 124,
        añoEstreno: 2004,
        clasificacion: '14+',
        generos: ["Romance", "Drama"],
        urlPortada: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500",
        urlBanner: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200",
        urlTrailer: "https://www.youtube.com/embed/yDJIcYE32NU?autoplay=1&mute=1&controls=0&loop=1&playlist=yDJIcYE32NU"
    },
    {
        id: "romance-lalaland",
        titulo: "La La Land",
        sinopsis: "Un pianista de jazz y una aspirante a actriz se enamoran locamente en Los Ángeles mientras intentan equilibrar su amor con sus ambiciones profesionales.",
        duracion: 128,
        añoEstreno: 2016,
        clasificacion: 'TP',
        generos: ["Romance", "Musical", "Drama"],
        urlPortada: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500",
        urlBanner: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200",
        urlTrailer: "https://www.youtube.com/embed/0pdqf4P9MB8?autoplay=1&mute=1&controls=0&loop=1&playlist=0pdqf4P9MB8"
    },
    {
        id: "romance-about-time",
        titulo: "Cuestión de Tiempo",
        sinopsis: "A la edad de 21 años, Tim descubre que puede viajar en el tiempo. Decide usar este poder especial para conseguir una novia y cambiar su vida amorosa.",
        duracion: 123,
        añoEstreno: 2013,
        clasificacion: '14+',
        generos: ["Romance", "Fantasía", "Comedia"],
        urlPortada: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500",
        urlBanner: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=1200",
        urlTrailer: "https://www.youtube.com/embed/7OIFdW5jnZo?autoplay=1&mute=1&controls=0&loop=1&playlist=7OIFdW5jnZo"
    },

    // ==========================================
    // CIENCIA FICCIÓN
    // ==========================================
    {
        id: "scifi-interstellar",
        titulo: "Interstellar",
        sinopsis: "Un grupo de científicos y pilotos espaciales emprende un viaje a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad.",
        duracion: 169,
        añoEstreno: 2014,
        clasificacion: 'TP',
        generos: ["Ciencia Ficción", "Aventura", "Drama"],
        urlPortada: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
        urlBanner: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200",
        urlTrailer: "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1&mute=1&controls=0&loop=1&playlist=zSWdZVtXT7E"
    },
    {
        id: "scifi-inception",
        titulo: "El Origen (Inception)",
        sinopsis: "Un ladrón profesional experto en robar secretos desde el subconsciente de las personas durante los sueños recibe la tarea inversa: implantar una idea.",
        duracion: 148,
        añoEstreno: 2010,
        clasificacion: '14+',
        generos: ["Ciencia Ficción", "Acción", "Suspenso"],
        urlPortada: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500",
        urlBanner: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200",
        urlTrailer: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1&mute=1&controls=0&loop=1&playlist=YoHD9XEInc0"
    },
    {
        id: "scifi-dune",
        titulo: "Dune: Parte Dos",
        sinopsis: "Paul Atreides se une a la tribu de los Fremen en el peligroso planeta desértico de Arrakis para emprender un viaje espiritual y militar de venganza.",
        duracion: 166,
        añoEstreno: 2024,
        clasificacion: '14+',
        generos: ["Ciencia Ficción", "Aventura", "Acción"],
        urlPortada: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500",
        urlBanner: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=1200",
        urlTrailer: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1&controls=0&loop=1&playlist=Way9Dexny3w"
    },

    // ==========================================
    // ACCIÓN
    // ==========================================
    {
        id: "action-john-wick",
        titulo: "John Wick 4",
        sinopsis: "El legendario asesino a sueldo John Wick encuentra un camino para derrotar a la Mesa Alta, pero antes deberá enfrentarse a un nuevo y poderoso enemigo mundial.",
        duracion: 169,
        añoEstreno: 2023,
        clasificacion: '18+',
        generos: ["Acción", "Suspenso"],
        urlPortada: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=500",
        urlBanner: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200",
        urlTrailer: "https://www.youtube.com/embed/qEVUrkwp794?autoplay=1&mute=1&controls=0&loop=1&playlist=qEVUrkwp794"
    },
    {
        id: "action-top-gun",
        titulo: "Top Gun: Maverick",
        sinopsis: "Después de treinta años de servicio, el aviador de élite Maverick debe entrenar a un destacamento de graduados para una misión especial y extremadamente peligrosa.",
        duracion: 130,
        añoEstreno: 2022,
        clasificacion: 'TEEN',
        generos: ["Acción", "Aventura"],
        urlPortada: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500",
        urlBanner: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
        urlTrailer: "https://www.youtube.com/embed/giXcoY_Y0q4?autoplay=1&mute=1&controls=0&loop=1&playlist=giXcoY_Y0q4"
    },
    {
        id: "action-mad-max",
        titulo: "Mad Max: Furia en la Carretera",
        sinopsis: "En un futuro postapocalíptico desértico, una mujer rebelde y un vagabundo traumatizado se alían para escapar de un tirano despiadado en una persecución eterna.",
        duracion: 120,
        añoEstreno: 2015,
        clasificacion: '14+',
        generos: ["Acción", "Ciencia Ficción", "Aventura"],
        urlPortada: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500",
        urlBanner: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200",
        urlTrailer: "https://www.youtube.com/embed/hEJnMQG96MQ?autoplay=1&mute=1&controls=0&loop=1&playlist=hEJnMQG96MQ"
    },

    // ==========================================
    // COMEDIA
    // ==========================================
    {
        id: "comedy-hangover",
        titulo: "¿Qué pasó ayer?",
        sinopsis: "Tres amigos se despiertan tras una salvaje despedida de soltero en Las Vegas sin recordar absolutamente nada y descubren que el novio ha desaparecido.",
        duracion: 100,
        añoEstreno: 2009,
        clasificacion: '18+',
        generos: ["Comedia"],
        urlPortada: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500",
        urlBanner: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200",
        urlTrailer: "https://www.youtube.com/embed/tcdUjAy62tc?autoplay=1&mute=1&controls=0&loop=1&playlist=tcdUjAy62tc"
    },
    {
        id: "comedy-deadpool",
        titulo: "Deadpool",
        sinopsis: "Un cínico exmercenario es sometido a un experimento ilegal que le deja poderes de curación acelerada, adoptando un alter ego irreverente para buscar venganza.",
        duracion: 108,
        añoEstreno: 2016,
        clasificacion: '18+',
        generos: ["Comedia", "Acción", "Ciencia Ficción"],
        urlPortada: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?w=500",
        urlBanner: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=1200",
        urlTrailer: "https://www.youtube.com/embed/ONHBaC-pfBM?autoplay=1&mute=1&controls=0&loop=1&playlist=ONHBaC-pfBM"
    },
    {
        id: "comedy-knives-out",
        titulo: "Entre Navajas y Secretos (Knives Out)",
        sinopsis: "Un detective excéntrico investiga la misteriosa muerte del patriarca de una familia adinerada y sumamente disfuncional donde todos resultan ser sospechosos.",
        duracion: 130,
        añoEstreno: 2019,
        clasificacion: 'TEEN',
        generos: ["Comedia", "Misterio", "Drama"],
        urlPortada: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=500",
        urlBanner: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200",
        urlTrailer: "https://www.youtube.com/embed/qGqiHJTsRkQ?autoplay=1&mute=1&controls=0&loop=1&playlist=qGqiHJTsRkQ"
    }
];