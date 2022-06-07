const myDB = require('../db/db')

const handler = {}

handler.getAllTicket = (_req, res) => {
    const tickets = myDB.find()
    res.status(200).json({ status: 'success', count: tickets.length, tickets })
}

handler.getTicketByticketId = (req, res) => {
    const { ticketId } = req.params
    const ticket = myDB.findById(ticketId)

    res.status(200).json({ status: 'success', ticket })

}

handler.updateTicketByticketId = (req, res) => {
    const { ticketId } = req.params
    const updatedTicket = myDB.updateById(ticketId, req.body)

    res.status(200).json({ status: 'Update successfully', ticket: updatedTicket })

}

handler.deleteTicketByticketId = (req, res) => {
    const { ticketId } = req.params
    const deleteTicket = myDB.deleteByid(ticketId)

    res.status(200).json({ status: deleteTicket })
}

handler.getTicketByUsername = (req, res) => {
    const { username } = req.params
    const tickets = myDB.findByUsername(username)

    res.status(200).json({ status: 'success', count: tickets.length, tickets })
}

handler.updateTicketByUsername = (req, res) => {
    const { username } = req.params

    const result = myDB.updateByUsername(username, req.body)
    res.status(200).json({ message: 'success', count: result.length, tickets: result })
}

handler.deleteTicketByUsername = (req, res) => {
    const { username } = req.params

    const result = myDB.deleteByUsername(username)
    res.status(200).json({ message: 'success', tickets: result })
}

handler.createTicket = (req, res) => {
    const { username, price } = req.body
    const ticket = myDB.create(username, price)

    res.status(201).json({ message: 'Ticket Created Successfully', ticket })
}

handler.createMultipleTicket = (req, res) => {
    const { username, price, quantity } = req.body
    const tickets = myDB.bulkCreate(username, price, quantity)

    res.status(201).json({ message: quantity + ' Tickets Created Successfully', tickets })
}

handler.raffleDraw = (req, res) => {
    const winnerCount = Number(req.query.winner) || 3
    const winners = myDB.raffleDraw(winnerCount)

    res.status(200).json({ status: 'success', winners })
}

module.exports = handler