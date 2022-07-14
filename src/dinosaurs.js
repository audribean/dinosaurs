export const DINOSAURS =
    [
        {
            id: 1,
            image: './dino-imgs/nasutoceratops.jpeg',
            source: 'https://www.nationalgeographic.com/science/article/large-nosed-horned-face-nasutoceratops-debuts',
            name: 'Nasutoceratops',
            period: 'Cretaceous',
            location: 'North America',
            diet: 'Herbivore'
        },
        {
            id: 2,
            image: './dino-imgs/qiupalong.jpeg',
            source: 'https://www.cmnh.org/science-news/blog/may-2017/where-did-qiupalong-originate',
            name: 'Qiupalong',
            period: 'Cretaceous',
            location: 'Asia',
            diet: 'Omnivore'
        },
        {
            id: 3,
            image: './dino-imgs/metriacanthosaurus.jpeg',
            source: 'http://fineartamerica.com/featured/metriacanthosaurus-david-davis-and-photo-researchers.html',
            name: 'Metriacanthosaurus',
            period: 'Jurassic',
            location: 'Europe',
            diet: 'Carnivore'
        },
        {
            id: 4,
            image: './dino-imgs/barosaurus.jpeg',
            source: 'http://printablecolouringpages.co.uk/?s=barosaurus&page=1',
            name: 'Barosaurus',
            period: 'Jurassic',
            location: 'North America',
            diet: 'Herbivore'
        },
        {
            id: 5,
            image: './dino-imgs/spinophorosaurus.jpeg',
            source: 'https://marchan-forest.blogspot.com/2014/01/spinophorosaurus.html',
            name: 'Spinophorosaurus',
            period: 'Jurassic',
            location: 'Africa',
            diet: 'Herbivore'
        },
        {
            id: 6,
            image: './dino-imgs/alexeyisaurus.jpeg',
            source: 'http://dinoart1.narod.ru/alexeyisaurus.htm',
            name: 'Alexeyisaurus',
            period: 'Triassic',
            location: 'Europe',
            diet: 'Carnivore'
        },
        {
            id: 7,
            image: './dino-imgs/herrerasaurus.jpeg',
            source: 'https://fineartamerica.com/featured/herrerasaurus-ischigualastensis-sergey-krasovskiy.html',
            name: 'Herrerasaurus',
            period: 'Triassic',
            location: 'South America',
            diet: 'Carnivore'
        },
        {
            id: 8,
            image: './dino-imgs/eoraptor.jpeg',
            source: 'https://animalofthewould.fandom.com/wiki/Eoraptor',
            name: 'Eoraptor',
            period: 'Triassic',
            location: 'South America',
            diet: 'Omnivore'
        }
    ];

// This is oldest to youngest
export const ORDER = ['Triassic', 'Jurassic', 'Cretaceous'];

export const SORTOPTIONS = [
    {
        id: 1,
        label: "Default",
        value: "none"
    },
    {
        id: 2,
        label: "Alphabet A-Z",
        value: "alpha"
    },
    {
        id: 3,
        label: "Time Period (Oldest-Youngest)",
        value: "period"
    },
    {
        id: 4,
        label: "Location Found",
        value: "location"
    },
    {
        id: 5,
        label: "Diet",
        value: "diet"
    }
];

export const FILTEROPTIONS = [
    {
        id: 1,
        label: "Time period",
        value: "timeFilter",
        options: [
            {
                id: 1,
                value: "Triassic"
            },
            {
                id: 2,
                value: "Jurassic"
            },
            {
                id: 3,
                value: "Cretaceous"
            }
        ]
    },
    {
        id: 2,
        label: "Location found",
        value: "locationFilter",
        options: [
            {
                id: 1,
                value: "Africa"
            },
            {
                id: 2,
                value: "Asia", 
            },
            {
                id: 3,
                value: "Europe"
            },
            {
                id: 4,
                value: "Oceania"
            },
            {
                id: 5,
                value: "North America"
            },
            {
                id: 6,
                value: "South America"
            }
        ]
    },
    {
        id: 3,
        label: "Diet",
        value: "dietFilter",
        options: [
            {
                id: 1,
                value: "Carnivore"
            },
            {
                id: 2,
                value: "Herbivore"
            },
            {
                id: 3,
                value: "Omnivore"
            } 
        ]
    }
];