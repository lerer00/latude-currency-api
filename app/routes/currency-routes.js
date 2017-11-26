module.exports = function (app, db) {
    app.get('/currency', (req, res) => {
        console.log('CALLED');
        res.json({ "rates": "CAD;397.05|USD;201.13" });
    });
};