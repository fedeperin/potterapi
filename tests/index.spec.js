import app from '../index.js'
import request from 'supertest'
import { langs, routeTypes } from '../assets/consts.js'
import { areArraysEqual } from '../assets/utils.js'

describe(`GET /:lang/:routeType`, () => {
    Object.keys(routeTypes).forEach(routeType => {
        describe(`GET /:lang/${ routeType }`, () => {
            const structure = routeTypes[routeType].structure
            structure.index = 'number'
    
            Object.keys(langs).forEach(lang => {
                const requestUrl = `/${ lang }/${ routeType }`
        
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
                            Object.keys(structure).forEach(key => {
                                expect(typeof item[key]).toBe(structure[key])
                            })
                        })
                    })
                })
            })
        })
    })
})

describe(`GET /:lang/:routeType/random`, () => {
    Object.keys(routeTypes).forEach(routeType => {
        describe(`GET /:lang/${ routeType }/random`, () => {
            const structure = routeTypes[routeType].structure
            structure.index = 'number'
    
            Object.keys(langs).forEach(lang => {
                const requestUrl = `/${ lang }/${ routeType }/random`
        
                describe(`GET /${ lang }/${ routeType }/random`, () => {
                    test(`/${ lang }: should respond with a 200 status code`, async () => {
                        const response = await request(app).get(requestUrl).send()
                        expect(response.statusCode).toBe(200)
                    })
                    
                    test(`/${ lang }: should respond with an object`, async () => {
                        const response = await request(app).get(requestUrl).send()
                        expect(response.body).toBeInstanceOf(Object)
                    })
                    
                    test(`/${ lang }: should have a content type: application/json in header`, async () => {
                        const response = await request(app).get(requestUrl).send()
                        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
                    })
    
                    test(`/${ lang }: should follow the structure given`, async () => {
                        const response = await request(app).get(requestUrl).send()
    
                        expect(areArraysEqual(Object.keys(response.body), Object.keys(structure))).toBe(true)
                    })
            
                    test(`/${ lang }: should follow the types of the structure`, async () => {
                        const response = await request(app).get(requestUrl).send()
                        
                        Object.keys(structure).forEach(key => {
                            expect(typeof response.body[key]).toBe(structure[key])
                        })
                    })
                })
            })
        })
    })
})