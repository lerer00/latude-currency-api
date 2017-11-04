module.exports = function(app, db) {
    app.get('/currency', (req, res) => {
        console.log('CALLED');
        res.type('json')
        res.send('{"price": "398"}');
      });
};