import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import upload from 'express-fileupload'

//Swagger Imports
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swaggerOptions'

import personRoutes from './routes/personroutes'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(morgan('dev'))
app.use(upload())
app.use(bodyParser.json())

const specs = swaggerJSDoc(options)

app.use(personRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app