### User API
This api uses jwt to login & register users

I've used MongoDB as the primary db

#### The routes are

* {URL}/api/v1/user => for user operations
* {URL}/api/v1/auth => for login & register
* {URL}/healthcheck => for a 200 response

### To use the user routes
You should login and take the token and give to the header with the name "Authorization" or you will take a 401 response

### To start
```
npm install
npm start
```