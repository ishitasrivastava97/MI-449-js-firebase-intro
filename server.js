// Require Node's http module and assign it to a variable


//node server.js


const http = require('http')

// Create a new server that just says "Hi!!" at every route
const server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end( 
      '<h1>Home</h1>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/about') {
    response.end('<h1>About</h1>')
  } else {
    response.end('<h1>Page Not Found</h1>')
  }
})


// Listen on port 8080, so that we can reach the app at
// localhost:8080
const port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

