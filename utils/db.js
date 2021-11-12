import { createPool } from 'mysql'

const pool = createPool({
    host: `sql6.freesqldatabase.com`,
    user: `sql6450414`,
    port:`3306`,
    password: 'micDmdq8HB',
    database:`sql6450414`,
    
})

if(!pool){
    pool.getConnection((err) => {
        if(err){
            console.log('Error in connection')
        }
        console.log("Connected!")
    })
}

const executeQuery = async(query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query,arraParms, (err,data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(data);
            })
            
        } catch (error) {
            reject(err)
        }
    })
    
}


export {executeQuery, pool}