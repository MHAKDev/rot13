# rot13
## This NodeJS server contains an API that recieves plain text as a payload and converts that text into cypher using ROT13 algorithm. Also saves the original text in database.
---
## How to run?
* Clone this project from the repo
* cd rot13
* run yarn in terminal
* run yarn run dev in terminal for nodemon watch
* run yarn run start in terminal to just start
---
## Main API route:
* Method: POST
* Path: /api/rot13/convert
* Body: It should be plain text
* Response: Cypher encrypted over rot13 algorithm
---
### Environment:
* Node version: v14.17.5
* Server Framework: Express v4.18.1
* Database: MongoDB
* ORM: Mongoose v6.4.1
* Testing Framework: JEST 29.2.2
---
### Some Other Useful Libraries:
* body-parser
* dotenv
* nodemon
---



