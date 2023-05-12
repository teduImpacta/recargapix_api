import 'reflect-metadata'
import './container'
import { context } from '../database/dataSource'
import { app } from './app'
import { internals } from '../config/internals'
;(async () => {
    try {
        await context.initialize()
        app.listen(internals.serverPort, () => {
            console.log('server is on!')
        })
    } catch (err) {
        console.log(err)
    }
})()
