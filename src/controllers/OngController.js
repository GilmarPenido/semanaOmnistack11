const connection = require('../database/connection')

module.exports = {
    
    index(request, response) {
        connection('ongs')
        .select('*')
        .then(data => response.json(data));
    },

    create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        return connection('ongs').insert({
            name,
            email,
            whatsapp,
            city,
            uf
        }).then(obj => response.json(obj))
    },
}