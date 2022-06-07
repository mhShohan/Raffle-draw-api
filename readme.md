# Raffle Draw API

## Psudo Code

- create lottery ticket
- update lottery ticket
- delete lottery ticket
- get all ticket
- get ticket by id
- bulk buy (user can buy multiple ticket)
- raffle draw

## Ticket Model

- ticketId
- name
- price
- timeStamps

## Endpoints

- GET - /api/v1/tickets/u/:username --- get ticket by username
- PATCH - /api/v1/tickets/u/:username --- update ticket by username
- DELETE - /api/v1/tickets/u/:username --- delete ticket by username
- GET - /api/v1/tickets/t/:ticketId --- get ticket by ticketId
- PATCH - /api/v1/tickets/t/:ticketId --- update ticket by ticketId
- DELETE - /api/v1/tickets/t/:ticketId --- delete ticket by ticketId
- POST - /api/v1/tickets/sell --- create a new ticket
- POST - /api/v1/tickets/create?quantity=5 --- create multiple new ticket with quantity
- POST - /api/v1/tickets/bulk --- create multiple new ticket
- GET - /api/v1/tickets/draw --- raffle draw to get winners
- GET - /api/v1/tickets --- get all tickets
