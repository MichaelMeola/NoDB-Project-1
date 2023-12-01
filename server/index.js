import express from "express"
import morgan from "morgan"
import ViteExpress from "vite-express"

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

import handlerFunctions from './controller.js'

const {getInvoices, addInvoice, deleteInvoice, editInvoice} = handlerFunctions

app.get(`/invoices`, getInvoices)
app.post(`/invoice`, addInvoice)
app.delete('/invoice/:id', deleteInvoice)
app.put('/invoice/:id', editInvoice)

ViteExpress.listen(app, 2727, () => console.log(`Server running on http://localhost:2727`))