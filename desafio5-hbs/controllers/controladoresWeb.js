const controladoresApi = require('./controladoresApi');

const controladoresWeb = {
    root: (req, res) => {
        res.redirect('/inicio');
    },
    inicio: (req, res) => {
        res.sendFile('form.html', {root: 'public'})
    }
}

module.exports = controladoresWeb;