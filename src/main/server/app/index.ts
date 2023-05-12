import express from 'express'
import { appRoutes } from '../routes'

const app = express()

app.disable('x-powered-by')
app.use((_, res, next) => {
    res.set('access-control-allow-origin', '*')
    res.set('access-control-allow-methods', '*')
    res.set('access-control-allow-headers', '*')

    next()
})
app.use(express.json())
app.use((_, res, next) => {
    res.type('json')
    next()
})
app.use((_, res, next) => {
    res.set(
        'cache-control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
    )
    res.set('pragma', 'no-cache')
    res.set('expires', '0')
    res.set('surrogate-control', 'no-store')
    next()
})

appRoutes(app)

export { app }
