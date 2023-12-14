const routeTypes = {
    spells: {
        searchBy: 'spell'
    },
    characters: {
        searchBy: 'fullName'
    },
    books: {
        searchBy: 'title'
    }
}

const langs = [
    'en',
    'es'
]

const routeParamsAndReturn = params => {
    let { req, res, data } = params
    const { type: routeType } = req.params
    let {
        index,
        max,
        page,
        search
    } = req.query

    index = parseInt(index)
    max = parseInt(max)
    page = page ? parseInt(page) || 1 : undefined

    if(isNaN(index) && search) {
        data = data.filter(item => item[routeTypes[routeType].searchBy].toLowerCase().includes(search.trim().toLowerCase()))
    }

    if(index || index === 0) {
        if(index <= data.length && index >= 0) return res.json(data[index])

        throw new Error('Invalid Index')
    }else if(max && page) {
        if(page <= Math.ceil(data.length / max) && page > 0 && max > 0) return res.json(data.slice(max * (page - 1), max * page))

        throw new Error('Invalid Params')
    } else if(max && !page) {
        if(max > 0) return res.json(data.slice(0, max))

        throw new Error('Parameter "max" should be greater than 0')
    }

    res.json(data)
}

export const routeStructure = async (req, res) => {
    const { type: routeType, lang } = req.params

    if(!Object.keys(routeTypes).includes(routeType)) res.status(404).json({ error: 'Invalid type of data' })
    if(!langs.includes(lang)) res.status(404).json({ error: 'Invalid language' })
    
    try {
        let { default: data } = await import(`../assets/data/${ lang }/${ routeType }.${ lang }.json`, { assert: { type: 'json' } })

        routeParamsAndReturn({ req, res, data })
    }catch({ message, code }) {
        res.status(404).json({ error: message || code })
    }
}

export const pickRandomItem = async (req, res) => {
    const { lang, type: routeType } = req.params

    try {
        const { default: data } = await import(`../assets/data/${ lang }/${ routeType }.${ lang }.json`, { assert: { type: 'json' } })
        
        res.json(data[Math.floor(Math.random() * data.length)])
    }catch(error) {
        errorHandling(error, res)
    }
}