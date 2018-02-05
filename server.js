const mongoose = require('mongoose');

const app = require('./app');
const config = require('./config')
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${config.db}`).then(() => {
    console.log('db conectado');
    app.listen(8000, () => {
        console.log('server connectado en el puerto 8000');
    });
}).catch(err => {
    console.log('No se pudo conectar con las bases de datos');
});
