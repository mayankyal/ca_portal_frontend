# Campus Ambassador Portal
Campus Ambassador Portal E-Cell IITK
The Client Code Contain the front-end sided code written in Angular--

## Login Strategy used
Login with facebook + JSON Web token ( for faster varification )

```mermaid
sequenceDiagram
User(frontend) ->> FB Server: Register/Login
FB Server ->> User(frontend) : FB Authentication Token
User(frontend) ->> Backend Server : Req containing FB Auth Token
Backend Server ->> FB Server : Verify FB Auth token
Backend Server ->> User(frontend) : Sign JSON Web Token and send to frontend
Note left of User(frontend): The frontend stores <br/>the recieved token <br/>locally and attach <br/> it to every request
User(frontend) -->> Backend Server : 
User(frontend) -->> Backend Server : Every request has a attached token
Backend Server ->> User(frontend) : Response (if validation succeeded)
Note right of Backend Server: The server varifies<br/>the token and<br/>send the response
Backend Server ->> User(frontend) : Error Access denied (if validation failed)
