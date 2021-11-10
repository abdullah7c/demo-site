import mysql from 'mysql2'

const pool  = mysql.createPool({
    host: `localhost`,
    user: `root`,
    port:`3306`,
    password: '',
    database:`7ctech`,
});

const promisePool = pool.promise();



export {promisePool}