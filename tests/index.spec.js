import app from '../index.js'
import request from 'supertest'
import { langs, routeTypes } from '../assets/consts.js'

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false

    const sortedArr1 = [...arr1].sort()
    const sortedArr2 = [...arr2].sort()

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) return false
    }

    return true
}

Object.keys(routeTypes).forEach(routeType => {
    describe(`GET /:lang/${ routeType }`, () => {
        const structure = routeTypes[routeType].structure
        structure.index = 'number'

        Object.keys(langs).forEach(lang => {
            const requestUrl = `/${lang}/${ routeType }`
    
            describe(`GET /${ lang }/${ routeType }`, () => {
                test(`/${ lang }: should respond with a 200 status code`, async () => {
                    const response = await request(app).get(requestUrl).send()
                    expect(response.statusCode).toBe(200)
                })
                
                test(`/${ lang }: should respond with an array`, async () => {
                    const response = await request(app).get(requestUrl).send()
                    expect(response.body).toBeInstanceOf(Array)
                })
                
                test(`/${ lang }: should have a content type: application/json in header`, async () => {
                    const response = await request(app).get(requestUrl).send()
                    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
                })
                
                test(`/${ lang }: should follow the structure given`, async () => {
                    const response = await request(app).get(requestUrl).send()
                    response.body.forEach(item => {
                        expect(areArraysEqual(Object.keys(item), Object.keys(structure))).toBe(true)
                    })
                })
        
                test(`/${ lang }: should follow the types of the structure`, async () => {
                    const response = await request(app).get(requestUrl).send()
                    
                    response.body.forEach(item => {
                        Object.keys(structure).forEach((key) => {
                            expect(typeof item[key]).toBe(structure[key])
                        })
                    })
                })
            })
        })
    })
})