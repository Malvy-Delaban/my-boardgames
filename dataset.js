const boardGames = [
    {
        name: "Zombicide",
        gameLength: 60,
        playerMin: 1,
        playerMax: 6,
        gamemodes: [
            "Coop"
        ],
    },
    {
        name: "Dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Dominion Nocturne",
        extensionOf: "Dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Dominion Alchemy",
        extensionOf: "Dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Dominion Mixed Box",
        extensionOf: "Dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Middle-Ages",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Mage Noir",
        gameLength: 30,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ]
    },
    {
        name: "Lueur",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Andor",
        gameLength: 90,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Coop"
        ]
    },
    {
        name: "Codex Naturalis",
        gameLength: 25,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Kyudo",
        gameLength: 25,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "The Vale of Eternity",
        gameLength: 40,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Take Time",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Coop"
        ]
    },
    {
        name: "Minute Realms",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "7 Wonders Dice",
        gameLength: 25,
        playerMin: 2,
        playerMax: 7,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "One Deck Dungeon",
        gameLength: 30,
        playerMin: 1,
        playerMax: 2,
        gamemodes: [
            "Coop",
            "Duo"
        ]
    },
    {
        name: "Présages",
        gameLength: 30,
        playerMin: 4,
        playerMax: 6,
        gamemodes: [
            "Comp",
            "Party Game"
        ]
    },
    {
        name: "Courtisans",
        gameLength: 20,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Akropolis",
        gameLength: 25,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Riftbound - Proving Grounds",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Dungeons, Dice & Danger",
        gameLength: 45,
        playerMin: 1,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Horrified D&D",
        gameLength: 45,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Coop"
        ]
    },
    {
        name: "Abyss",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Abyss De Profondis",
        extensionOf: "Abyss",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Dice Forge",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Clank",
        gameLength: 60,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "The Hunger",
        gameLength: 60,
        playerMin: 2,
        playerMax: 6,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Dungeons & Dragons",
        gameLength: 120,
        playerMin: 2,
        playerMax: 8,
        gamemodes: [
            "Coop"
        ]
    },
    {
        name: "Hellton Palace",
        gameLength: 60,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ]
    },
    {
        name: "Canvas",
        gameLength: 45,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Coop"
        ]
    },
    {
        name: "Mr. Jack",
        gameLength: 60,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ]
    },
    {
        name: "Hero Realms",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp",
            "Duo"
        ]
    },
    {
        name: "Time Bomb",
        gameLength: 30,
        playerMin: 4,
        playerMax: 8,
        gamemodes: [
            "Comp",
            "Party Game"
        ]
    },
    {
        name: "Vaalbara",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Tranquilité",
        gameLength: 20,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Coop"
        ]
    },
    {
        name: "Kyoto No Neko",
        gameLength: 60,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Paper Tales",
        gameLength: 60,
        playerMin: 1,
        playerMax: 7,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Takenoko",
        gameLength: 60,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Five Tribes",
        gameLength: 120,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "One Piece Adventure Island",
        gameLength: 45,
        playerMin: 2,
        playerMax: 6,
        gamemodes: [
            "Comp",
            "Coop"
        ]
    },
    {
        name: "Small World of Warcraft",
        gameLength: 80,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Rising Sun",
        gameLength: 120,
        playerMin: 3,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Antinomy",
        gameLength: 30,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ]
    },
    {
        name: "In Vino Morte",
        gameLength: 20,
        playerMin: 3,
        playerMax: 9,
        gamemodes: [
            "Comp",
            "Party Game"
        ]
    },
    {
        name: "Level 10",
        gameLength: 20,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Personne n'a testé ce truc",
        gameLength: 15,
        playerMin: 2,
        playerMax: 17,
        gamemodes: [
            "Comp",
            "Party Game"
        ]
    },
    {
        name: "Vivarium",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Catan",
        gameLength: 120,
        playerMin: 3,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "7 Wonders",
        gameLength: 30,
        playerMin: 2,
        playerMax: 7,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Splendor",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ]
    },
    {
        name: "Citadelles",
        gameLength: 60,
        playerMin: 2,
        playerMax: 8,
        gamemodes: [
            "Comp",
            "Party Game"
        ]
    },
    {
        name: "Complots 2",
        gameLength: 15,
        playerMin: 2,
        playerMax: 8,
        gamemodes: [
            "Comp",
            "Party Game"
        ]
    },
    {
        name: "Magic Soirée Jeu",
        gameLength: 45,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp",
            "Duo"
        ]
    },
    {
        name: "Mille Sabords",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ]
    }
]