export const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'Prueba Persons API',
            version: '1.0.0',
            description: 'A persons API'
        },
        servers: [
            {
                url: 'https://prueba-personas.herokuapp.com/'
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}