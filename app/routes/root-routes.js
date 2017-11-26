module.exports = function (app, db) {
    app.get('/', function (req, res) {
        console.log('CALLED');
        res.json({ "root": "latude-currency-api" });
    });
};