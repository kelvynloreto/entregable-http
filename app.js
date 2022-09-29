const express = require('express');



const app = express()
//~ protocol TCP/IP
//! solo sirve muestra peticiones get en el navegador
app.get('/me', (request , response) => {
    response.json({
        message: {name : 'Kelvyn Loreto',
                edad : 26,
                pais : 'Venezuela'
            }
    
    })
    });
    
    app.post('/metas', (req, res) => {
        res.status(200).json({message:{ hobbies: ['jugar videojuegos', 'juegar futbol', 'escuchar musica' , 'ver series y peliculas ']},
    verb: 'POST'})
       
    });
    app.patch('/metas', (req, res) => {
        res.status(200).json({message:{ metas: ['viejas a Alemania', 'Emepezar a trabajar como programador' ]},
        verb: 'PATCH'})
    });

    app.put('/metas', (req, res) => {
        res.status(200).json({message:{ business: ['Meta', 'Riot' , 'Google' ]},
        verb: 'PUT'})
    })
