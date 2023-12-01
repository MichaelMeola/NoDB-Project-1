let customersData = [
    {id: 0, name: 'Michael', shirts: 69 },
    {id: 1, name: 'Gabe', shirts: 3 },
    {id: 2, name: 'Jacob', shirts: 0 },
    {id: 3, name: 'Hannah', shirts: 6 }
]

let globalId = 4

const handlerFunctions = {

    getInvoices: (req, res) => {
        res.send(customersData)
    },

    addInvoice: (req, res) => {
        const {name} = req.body

        const newCustomer = {
            id: globalId,
            name: name,
            shirts: 0
        }
        customersData.push(newCustomer)

        globalId++

        res.send(customersData)
    },

    deleteInvoice: (req, res) => {
        const {id} = req.params

        const filteredData = customersData.filter((customer) => customer.id !== +id)

        customersData = filteredData

        res.send(customersData)
    },

    editInvoice: (req, res) => {
        const {id} = req.params
        const {name, shirts} = req.body
        
        const editCustomer = customersData.find((customer) => customer.id === +id)

        editCustomer.name = name
        editCustomer.shirts = shirts

        res.send(customersData)
    }
}

export default handlerFunctions