module.exports = function(app, db) {
    app.get('/currency', (req, res) => {
        res.type('json')
        res.send('{"price": 20}');
      });
};