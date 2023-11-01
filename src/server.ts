import express from 'express'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from './middleware/errHandlingMiddleware'

const app = express()
const port = 3001

app.use(express.json())

app.use('/api/v1', APIs_V1)

/** Middleware all request */
app.use(errorHandlingMiddleware)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listenings on port ${port}`)
})