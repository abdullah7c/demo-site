import mysql from 'mysql2'

let promisePool; 

async function connection (){
    let promisePoolVar;
    try {
        const pool = await mysql.createPool({
            host: `localhost`,
            user: `root`,
            port:`3306`,
            password: '',
            database:`7ctech`,
        });
        promisePoolVar = pool.promise();
        promisePool = promisePoolVar
    } catch (error) {
        throw error
    }
    
}

connection()
export {promisePool}