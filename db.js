const Pool = require('pg').Pool;
const pool =  new Pool({
    user:"postgres",
    host:"localhost",
    database:"Logiedge",
    password:"Vibhuti@1979",
    port:5432
});



module.exports = pool;