declare module '@treblle/express' {
    import type { RequestHandler } from 'express'

    interface TreblleOptions {
        apiKey?: string
        projectId?: string
        additionalFieldsToMask?: string[]
    }

    export default function treblle(options?: TreblleOptions): RequestHandler
}
