var mysql = require('mysql');
var pool = mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'nmjz',
    connectionLimit: 100
})

function query(select, arr, ck) {
    ck = ck ? ck : arr;
    arr = arr || [];
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err)
        }
        con.query(select, arr, function(err, result) {
            if (err) {
                return ck && ck(err)
            }
            ck && ck(null, result);
            con.release()
        })
    })
}
module.exports = query;