/*eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

//simulate delay on all requests
server.use(function(req, res, next) {
  setTimeout(next, 1000);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/people", function(req, res, next) {
  const error = validatePerson(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.method = "GET";
    next();
  }
});

function validatePerson(person) {
  return "";
}

server.use(router);

const port = 8080;
server.listen(port, () => {
  console.log(`JSON Server listening on ${port}`);
});
