var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var cors = require('cors');
var jwtAuthz = require ('express-jwt-authz');
var bodyParser = require('body-parser');


app.use(bodyParser.json() );
app.use(bodyParser.urlencoded( { extended: true }));
app.use( cors() );

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-p6v8iy5w.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://productos',
    issuer: 'https://dev-p6v8iy5w.auth0.com/',
    algorithms: ['RS256']
});


app.get('/productos', (req, res)=>{
    let productos = [
        {
            "id" : 0,
            "nombre" : "HTML5",
            "precio" : 25,
            "imagen" : "camisa_1",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 1,
            "nombre" : "CSS3",
            "precio" : 25,
            "imagen" : "camisa_2",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 2,
            "nombre" : "NodeJS",
            "precio" : 30,
            "imagen" : "camisa_3",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 3,
            "nombre" : "JavaScript",
            "precio" : 25,
            "imagen" : "camisa_4",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 4,
            "nombre" : "Angular",
            "precio" : 20,
            "imagen" : "camisa_5",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 5,
            "nombre" : "Github",
            "precio" : 20,
            "imagen" : "camisa_6",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 6,
            "nombre" : "WordPress",
            "precio" : 25,
            "imagen" : "camisa_7",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id" : 7,
            "nombre" : "React",
            "precio" : 20,
            "imagen" : "camisa_8",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        }
    ]
    res.json(productos);
})
app.get('/', (req, res)=>{
    console.log(req)
})
app.listen(port, ()=> {
    console.log("servidor funcionando en el puerto :" + port);
});