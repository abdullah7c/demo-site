import mysql from 'mysql2/promise'

const promisePool  = mysql.createPool({
    host: `localhost`,
    user: `root`,
    port:`3306`,
    password: '',
    database:`7ctech`,
});

//const promisePool = pool.promise();

export {promisePool}