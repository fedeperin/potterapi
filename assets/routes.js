import { routeTypes, langs } from './consts.js'

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
        if(index <= data.length && index >= 0) return res.status(200).json(data[index])

        throw new Error('Invalid Index')
    }else if(max && page) {
        if(page <= Math.ceil(data.length / max) && page > 0 && max > 0) return res.status(200).json(data.slice(max * (page - 1), max * page))

        throw new Error('Invalid Params')
    } else if(max && !page) {
        if(max > 0) return res.status(200).json(data.slice(0, max))

        throw new Error('Parameter "max" should be greater than 0')
    }

    res.status(200).json(data)
}

const getFileData = async (lang, routeType) => {
    const { default: referenceData } = await import(`../assets/data/basefiles/${ routeType }.js`)
    let { default: data } = await import(`../assets/data/${ lang }/${ routeType }.${ lang }.js`)
    
    data = data.map((item, i) => {
        item = { ...referenceData[i], ...item }
        item.index = i
        return item
    })

    return data
}

export const routeStructure = async (req, res) => {
    const { type: routeType, lang } = req.params

    if(!Object.keys(routeTypes).includes(routeType)) return res.status(404).json({ error: 'Invalid type of data' })
    if(!Object.keys(langs).includes(lang)) return res.status(404).json({ error: 'Invalid language' })
    
    try {
        const data = await getFileData(lang, routeType)

        routeParamsAndReturn({ req, res, data })
    }catch({ message, code }) {
        res.status(404).json({ error: message || code })
    }
}

export const pickRandomItem = async (req, res) => {
    const { lang, type: routeType } = req.params

    try {
        const data = await getFileData(lang, routeType)

        res.status(200).json(data[Math.floor(Math.random() * data.length)])
    }catch({ message, code }) {
        res.status(404).json({ error: message || code })
    }
}

export const pureLangRoute = (req, res) => {
    const { lang } = req.params

    if(!Object.keys(langs).includes(lang)) return res.status(404).json({ error: 'Invalid language' })

    res.status(200).json({
        message: langs[lang].message,
        lang,
        langName: langs[lang].fullName,
        routes: Object.keys(routeTypes).map(type => `/${ lang }/${ type }`),
        languagesAvailable: Object.keys(langs)
    })
}

export const homePage = (req, res) => {
    res.status(200).json({
        message: 'This is PotterAPI, a REST API that stores images and information about Harry Potter characters, books and spells. For more info about the routes and query params, visit the github repo.',
        repo: 'https://github.com/fedeperin/potterapi',
        languages: Object.keys(langs)
    })
}