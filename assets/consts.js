export const langs = {
    en: {
        message: 'This is the endpoint of the English language',
        fullName: 'English'
    },
    es: {
        message: 'Este es el endpoint de la lengua española',
        fullName: 'Español'
    },
    fr: {
        message: 'C\'est la route de la langue française',
        fullName: 'Français'
    },
    it: {
        message: 'Questa è la rotta della lingua italiana',
        fullName: 'Italiano'
    },
    pt: {
        message: 'Esta é a rota da língua portuguesa',
        fullName: 'Português'
    }
}

export const routeTypes = {
    books: {
        searchBy: 'title',
        structure: {
            'number': 'number',
            'title': 'string',
            'originalTitle': 'string',
            'releaseDate': 'string',
            'description': 'string',
            'pages': 'number',
            'cover': 'string'
        }
    },
    characters: {
        searchBy: 'fullName',
        structure: {
            'fullName': 'string',
            'nickname': 'string',
            'hogwartsHouse': 'string',
            'interpretedBy': 'string',
            'children': 'object',
            'image': 'string',
            'birthdate': 'string'
        }
    },
    houses: {
        searchBy: 'house',
        structure: {
            'house': 'string',
            'emoji': 'string',
            'founder': 'string',
            'colors': 'object',
            'animal': 'string'
        }
    },
    spells: {
        searchBy: 'spell',
        structure: {
            'spell': 'string',
            'use': 'string'
        }
    }
}