# http Module

HTTP:Hyper Text transfer protocol
HTML:Hyper Text Markup Language
CSS:Cascading Style Sheet
npm:Non package management

### Status Codes

200-OK
201-Created
400-Bad Request
401-Unauthorised
403-Forbidden
404-Not Found

# API

Any API can be of 4 types (CRUD)

Post - Create
Get - Read
Put/ Patch - Update
Delete - Delete
API can be responsed by server with status code and JSON data

API generally starts with ex:-
/api/v1/products
/api/v2/products/2169
/api/...
by default the browser can check only GET request; to check other 3 request types like (POST/ PUT/ DELETE) we require frontend or third party API tester like postman, thunderclient, echoapi

## Content type

text/html -> For HTML live server
text/json -> For JSON file Type
text/plain -> For plain text File

## Server can send data

1.
2. HTML
3. JSON data
4. Plain text
5. CSS
6. JS File

## Server can set Header to send Data

1. res.writeHeader()
2. res.setHeader()

## Server can set status code

1. res.statusCode()
2. res.writeHeader()

## request methods

1. get
2. post
3. put/patch
4. delete
