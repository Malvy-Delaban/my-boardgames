const boardGames = [
    {
        name: "Zombicide",
        slug: "zombicide",
        gameLength: 60,
        playerMin: 1,
        playerMax: 6,
        gamemodes: [
            "Coop"
        ],
        ratings: {
            gameplayLulu: 90,
            gameplayMalvy: 95,
            visualLulu: 85,
            visualMalvy: 85,
        }
    },
    {
        name: "Dominion",
        slug: "dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Dominion Nocturne",
        slug: "dominion-nocturne",
        extensionOf: "Dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Dominion Alchemy",
        slug: "dominion-alchemy",
        extensionOf: "Dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Dominion Mixed Box",
        slug: "dominion-mixed-box",
        extensionOf: "Dominion",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Middle-Ages",
        slug: "middle-ages",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Mage Noir",
        slug: "mage-noir",
        gameLength: 30,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Lueur",
        slug: "lueur",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 60,
            gameplayMalvy: 63,
            visualLulu: 70,
            visualMalvy: 68,
        }
    },
    {
        name: "Andor",
        slug: "andor",
        gameLength: 90,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Coop"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Codex Naturalis",
        slug: "codex-naturalis",
        gameLength: 25,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Kyudo",
        slug: "kyudo",
        gameLength: 25,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "The Vale of Eternity",
        slug: "the-vale-of-eternity",
        gameLength: 40,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Take Time",
        slug: "take-time",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Coop"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Minute Realms",
        slug: "minute-realms",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "7 Wonders Dice",
        slug: "7-wonders-dice",
        gameLength: 25,
        playerMin: 2,
        playerMax: 7,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "One Deck Dungeon",
        slug: "one-deck-dungeon",
        gameLength: 30,
        playerMin: 1,
        playerMax: 2,
        gamemodes: [
            "Coop",
            "Duo"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Présages",
        slug: "presages",
        gameLength: 30,
        playerMin: 4,
        playerMax: 6,
        gamemodes: [
            "Comp",
            "Party Game"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Courtisans",
        slug: "courtisans",
        gameLength: 20,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 67,
            gameplayMalvy: 68,
            visualLulu: 76,
            visualMalvy: 74,
        }
    },
    {
        name: "Akropolis",
        slug: "akropolis",
        gameLength: 25,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Riftbound - Proving Grounds",
        slug: "riftbound-proving-grounds",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Dungeons, Dice & Danger",
        slug: "dungeons-dice-danger",
        gameLength: 45,
        playerMin: 1,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Horrified D&D",
        slug: "horrified-dd",
        gameLength: 45,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Coop"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Abyss",
        slug: "abyss",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Abyss De Profondis",
        slug: "abyss-de-profondis",
        extensionOf: "Abyss",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Dice Forge",
        slug: "dice-forge",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Clank",
        slug: "clank",
        gameLength: 60,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "The Hunger",
        slug: "the-hunger",
        gameLength: 60,
        playerMin: 2,
        playerMax: 6,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Dungeons & Dragons",
        slug: "dungeons-dragons",
        gameLength: 120,
        playerMin: 2,
        playerMax: 8,
        gamemodes: [
            "Coop"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Hellton Palace",
        slug: "hellton-palace",
        gameLength: 60,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Canvas",
        slug: "canvas",
        gameLength: 45,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Mr. Jack",
        slug: "mr-jack",
        gameLength: 60,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Hero Realms",
        slug: "hero-realms",
        gameLength: 45,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp",
            "Duo"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Time Bomb",
        slug: "time-bomb",
        gameLength: 30,
        playerMin: 4,
        playerMax: 8,
        gamemodes: [
            "Comp",
            "Party Game"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Vaalbara",
        slug: "vaalbara",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Tranquilité",
        slug: "tranquilite",
        gameLength: 20,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Coop"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Kyoto No Neko",
        slug: "kyoto-no-neko",
        gameLength: 60,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 45,
            gameplayMalvy: 42,
            visualLulu: 80,
            visualMalvy: 78,
        }
    },
    {
        name: "Paper Tales",
        slug: "paper-tales",
        gameLength: 60,
        playerMin: 1,
        playerMax: 7,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Takenoko",
        slug: "takenoko",
        gameLength: 60,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Five Tribes",
        slug: "five-tribes",
        gameLength: 120,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 70,
            gameplayMalvy: 60,
            visualLulu: 50,
            visualMalvy: 39,
        }
    },
    {
        name: "One Piece Adventure Island",
        slug: "one-piece-adventure-island",
        gameLength: 45,
        playerMin: 2,
        playerMax: 6,
        gamemodes: [
            "Comp",
            "Coop"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Small World of Warcraft",
        slug: "small-world-of-warcraft",
        gameLength: 80,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Rising Sun",
        slug: "rising-sun",
        gameLength: 120,
        playerMin: 3,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Antinomy",
        slug: "antinomy",
        gameLength: 30,
        playerMin: 2,
        playerMax: 2,
        gamemodes: [
            "Comp",
            "Duo"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "In Vino Morte",
        slug: "in-vino-morte",
        gameLength: 20,
        playerMin: 3,
        playerMax: 9,
        gamemodes: [
            "Comp",
            "Party Game"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Level 10",
        slug: "level-10",
        gameLength: 20,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Personne n'a testé ce truc",
        slug: "personne-na-teste-ce-truc",
        gameLength: 15,
        playerMin: 2,
        playerMax: 17,
        gamemodes: [
            "Comp",
            "Party Game"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Vivarium",
        slug: "vivarium",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Catan",
        slug: "catan",
        gameLength: 120,
        playerMin: 3,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "7 Wonders",
        slug: "7-wonders",
        gameLength: 30,
        playerMin: 2,
        playerMax: 7,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Splendor",
        slug: "splendor",
        gameLength: 30,
        playerMin: 2,
        playerMax: 4,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Citadelles",
        slug: "citadelles",
        gameLength: 60,
        playerMin: 2,
        playerMax: 8,
        gamemodes: [
            "Comp",
            "Party Game"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Complots 2",
        slug: "complots-2",
        gameLength: 15,
        playerMin: 2,
        playerMax: 8,
        gamemodes: [
            "Comp",
            "Party Game"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Magic Soirée Jeu",
        slug: "magic-soiree-jeu",
        gameLength: 45,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp",
            "Duo"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Mille Sabords",
        slug: "mille-sabords",
        gameLength: 30,
        playerMin: 2,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    },
    {
        name: "Moon Colony",
        slug: "moon-colony",
        gameLength: 120,
        playerMin: 1,
        playerMax: 5,
        gamemodes: [
            "Comp"
        ],
        ratings: {
            gameplayLulu: 0,
            gameplayMalvy: 0,
            visualLulu: 0,
            visualMalvy: 0,
        }
    }
]